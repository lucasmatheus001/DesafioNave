const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Naver extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'navers';
  }

  static get relationMappings() {
      const ProjectsNaver = require('./ProjectsNaver')
      const Project = require('../models/Project')
      return {
          projects_navers: {
              relation: Model.HasManyRelation,
              modelClass: ProjectsNaver,
              join: {
                  from: 'navers.id',
                  to: 'projects_navers.naver_id'
              }
          },


          projects: {
            relation: Model.ManyToManyRelation,
            modelClass: Project,
            join: {
              from: 'navers.id',
              through: {
                from: 'projects_navers.naver_id',
                to: 'projects_navers.project_id'
              },
              to: 'projects.id'
            }
          }

      }
  }
}
module.exports = Naver