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

module.exports = validator;
