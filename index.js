const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");

const draftModel = require("./model/model-name");
const authorSchema = require("./model/schema/author");
const bookSchema = require("./model/schema/book");
const categorySchema = require("./model/schema/category");
const userSchema = require("./model/schema/user");
const sampleData = require("./test/someData");

const PROJECT_NAME = "Bookstore";
const adapterConfig = {
  // dropDatabase: true,
  knexOptions: {
    connection: "postgres://admin:123456789@postgresql:5432/bookstore"
    // connection: "postgres://admin:123456789@localhost:5432/bookstore"
  }
};

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  // onConnect: async keystone => {
  //   keystone.createItems(sampleData);
  // },
  adapter: new Adapter(adapterConfig),
  cookieSecret: "cuhungahihi"
});

keystone.createList(draftModel.book, bookSchema);
keystone.createList(draftModel.category, categorySchema);
keystone.createList(draftModel.author, authorSchema);
keystone.createList(draftModel.user, userSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: draftModel.user,
  config: {
    identityField: "username", // default: 'email'
    secretField: "password" // default: 'password'
  }
});

const competentPersons = { admin: "admin", manager: "manager" };
const isAccessAllowed = ({ authentication: { item } }) =>
  item !== undefined && item.permission in competentPersons;
// console.log(sampleData);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({
      apiPath: "/graphql/api",
      graphiqlPath: "/graphql/playground"
    }),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
      apiPath: "/graphql/api",
      graphiqlPath: "/graphql/playground",
      isAccessAllowed
    })
  ]
};
