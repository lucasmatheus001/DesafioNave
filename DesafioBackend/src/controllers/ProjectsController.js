const express = require('express')
const router = express.Router()

const Project = require('../models/Project')


class ControllersProjects{
   
   
    async get(req, res){
       
       
        Project.query()
        .then(projects => {
            res.json(projects)
        })
    }

    async getId(req, res){
        
        
        const { id } = req.params
        Project.query()
            .findById(id)
            .withGraphFetched('navers')
            .then(projects => {
                res.json(projects)
            })
    }

    async post(req, res){

        const { name, navers } = req.body
        const projectNavers = []
        if (navers) {
            navers.forEach(naver => {
                projectNavers.push({naver_id: naver})
            })
        }
        const data = []
        try {
            const transac =  async() => {
                const result = await Project.transaction(async trx => {
                    const project = await Project.query(trx).insert({ name });          
                    if(projectNavers && projectNavers.length){
                        const relation = await project
                            .$relatedQuery('projects_navers', trx)
                            .insert(projectNavers);
                        data.push(project)
                        data[0].navers = relation.map(naver => { return naver.naver_id })
                    }else{
                        data.push(project)
                    }
                    return data;
                });
                res.json(result)
            }
            transac()
        }catch (error) {
            console.log('Oops ! An error ocurred');
        }

    }
}



module.exports = new ControllersProjects();