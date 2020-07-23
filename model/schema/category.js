const {
  Text,
  Relationship,
  CalendarDay,
  DateTime,
  Integer,
  Url
} = require("@keystonejs/fields");

const draftModel = require("../model-name");

const competentPersons = { admin: "admin", manager: "manager" };
const court = ({ authentication: { item } }) =>
  item !== undefined && item.permission in competentPersons;

module.exports = {
  access: {
    create: proof => court(proof),
    read: true,
    update: proof => court(proof),
    delete: proof => court(proof),
    auth: false
  },
  fields: {
    name: {
      type: Text,
      isRequired: true
    },
    describe: {
      type: Text
    },
    alias: {
      type: Text,
      isRequired: true,
      isUnique: true
    },
    cover: {
      type: Url
    },
    book: {
      type: Relationship,
      // isUnique: true,
      ref: draftModel.book,
      many: true
    }
  }
};
