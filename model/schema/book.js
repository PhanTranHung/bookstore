const {
  Text,
  Relationship,
  CalendarDay,
  DateTime,
  Integer,
  Url,
  Float
} = require("@keystonejs/fields");

const model = require("../model-name");

const competentPersons = { admin: "admin", manager: "manager" };
const court = ({ authentication: { item } }) =>
  item !== undefined && item.permission in competentPersons;

module.exports = {
  access: {
    // do I have this permission, right?
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
    author: {
      type: Relationship,
      isRequired: true,
      ref: "Author",
      many: true
    },
    rate: {
      type: Float
    },
    price: {
      type: Integer,
      isRequired: true
    },
    category: {
      type: Relationship,
      isRequired: true,
      ref: model.category,
      many: true
    },
    image: { type: Url },
    number_in_storage: {
      type: Integer,
      min: 0,
      defaultValue: 1
    },
    public_day: { type: CalendarDay },
    describe: { type: Text }
  }
};
