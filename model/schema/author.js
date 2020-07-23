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
    penname: {
      type: Text
    },
    book: {
      type: Relationship,
      many: true,
      ref: draftModel.book,
      isUnique: true
    },
    biography: {
      type: Text
    },
    cover: {
      type: Url
    },
    contact: {
      type: Integer
    },
    email: {
      type: Text
    },
    address: { type: Text }
  }
};
