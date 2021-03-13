const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Project extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'projects';
  }

  static get relationMappings() {
      const ProjectsNaver = require('./ProjectsNaver')
      const Naver = require('./Naver')
      return {
          projects_navers: {
              relation: Model.HasManyRelation,
              modelClass: ProjectsNaver,
              join: {
                  from: 'projects.id',
                  to: 'projects_navers.project_id'
              }
          },
          navers: {
            relation: Model.ManyToManyRelation,
            modelClass: Naver,
            join: {
              from: 'projects.id',
              through: {
                from: 'projects_navers.project_id',
                to: 'projects_navers.naver_id'
              },
              to: 'navers.id'
            }
          }
      }
  }
}
module.exports = Project