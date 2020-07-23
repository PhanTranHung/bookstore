const {
  Text,
  Relationship,
  CalendarDay,
  DateTime,
  Integer,
  Url,
  Password,
  Select
} = require("@keystonejs/fields");

const competentPersons = { admin: "admin" };
const court = ({ authentication: { item } }) =>
  (item !== undefined && item.permission in competentPersons) || {
    id: item.id
  };

const ofCourse = true;

module.exports = {
  access: {
    create: proof => court(proof),
    read: proof => court(proof),
    update: proof => court(proof),
    delete: proof => court(proof),
    auth: ofCourse
  },
  fields: {
    name: {
      type: Text,
      isRequired: true
    },
    username: {
      type: Text,
      isRequired: true,
      isUnique: true
    },
    password: {
      type: Password,
      isRequired: true,
      minLength: 8
    },
    email: {
      type: Text
    },
    permission: {
      type: Select,
      options: [
        { value: "admin", label: "Administrator" },
        { value: "manager", label: "Manager" },
        { value: "user", label: "User" }
      ],
      dataType: "string",
      isRequired: true
    }
  }
};
