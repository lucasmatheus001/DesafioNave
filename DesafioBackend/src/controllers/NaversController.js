const express = require('express')
const router = express.Router()

const Naver = require('../models/Naver')


class ControllersNavers{
   
   
    async get(req, res, next){
       try {
        const navers =  await Naver.query()

        res.json(navers)

       }catch(error){
           return next(error);
       }
        
    }

    async getId(req, res){
        const { id } = req.params

       Naver.query()
           .findById(id)
           .withGraphFetched('projects')
           .then(navers => {
               res.json(navers)
           })
    }

    async post(req, res){
        const { name, job_role, birthdate, projects } = req.body
        const projectNavers = []
        if (projects) {
            projects.forEach(project => {
                projectNavers.push({project_id: project})
            })
        }
        const data = []
        try {
            const transac =  async() => {
                const result = await Naver.transaction(async trx => {
                    const naver = await Naver.query(trx).insert({name, job_role, birthdate});          
                    if(projectNavers && projectNavers.length){
                        const relation = await naver
                            .$relatedQuery('projects_navers', trx)
                            .insert(projectNavers);
                        data.push(naver)
                        data[0].projects = relation.map(project => { return project.project_id })
                    }else{
                        data.push(naver)
                    }
                    return data;
                });
                res.json(result)
            }
            transac()
          }catch (error) {
            console.log(
                'Oops ! An error ocurred'
            );
          }
    }
}







module.exports = new ControllersNavers();