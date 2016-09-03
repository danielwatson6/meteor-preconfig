import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Match, check } from 'meteor/check';

export default class Collection extends Mongo.Collection {
  constructor(name, schemaObj) {
    super(name);
    // Schema used to validate objects to be stored
    // with attributes and types. Mandatory for security.
    const type = typeof schemaObj;
    if (type !== 'object') {
      throw new TypeError(`Expected object, received ${type}`);
    }
    this.schema = schemaObj;
    // Deny all client-side methods; Meteor methods
    // should be initialized only on the server.
    this.deny({
      insert() { return true },
      update() { return true },
      remove() { return true }
    });
  }

  validate(obj) {
    console.log(obj);
    check(obj, this.schema);
  }

  isValid(obj) {
    return Match.test(obj, this.schema);
  }
}
