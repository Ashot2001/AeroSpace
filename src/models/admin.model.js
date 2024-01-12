// NPM Modules
import { Model } from 'objection';

class UsersModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'admin'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        login: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        role: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  // Methods
  static getLogin(login) {
    return UsersModel.query().findOne({ login });
  }
}

export default UsersModel;


