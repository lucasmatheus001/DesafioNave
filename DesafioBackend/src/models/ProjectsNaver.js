const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class ProjectsNavers extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'projects_navers';
  }

  static get relationMappings() {
    const Naver = require('./Naver')
    const Project = require('./Project')
    return {
        naver: {
            relation: Model.BelongsToOneRelation,
            modelClass: Naver,
            join: {
                from: 'projects_naver.naver_id',
                to: 'navers.id'
            }
        },

        project: {
          relation: Model.BelongsToOneRelation,
          modelClass: Project,
          join: {
              from: 'projects_naver.project_id',
              to: 'projects.id'
          }
        }
    }
  }
}
module.exports = ProjectsNavers