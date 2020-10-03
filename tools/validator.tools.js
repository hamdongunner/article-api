let validator = {};

validator.article = (presence = true) => ({
  title: {
    presence: presence,
    type: "string",
    length: { minimum: 3 },
  },
  athor: {
    presence: presence,
    type: "string",
  },
  text: {
    presence: presence,
    type: "string",
  },
});

validator.login = (presence = true) => ({
  email: {
    presence: presence,
    type: "string",
    email: true,
  },
  password: {
    presence: presence,
    type: "string",
    length: { minimum: 4 },
  },
});

validator.register = (presence = true) => ({
  email: {
    presence: presence,
    type: "string",
    email: true,
  },
  password: {
    presence: presence,
    type: "string",
    length: { minimum: 4 },
  },
  name: {
    presence: presence,
    type: "string",
    length: { minimum: 2 },
  },
});

module.exports = validator;
