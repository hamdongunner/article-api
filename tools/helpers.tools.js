/**
 *
 * @param {*} res
 * @param {*} error
 * @param {*} statusCode
 */
module.exports.ReE = (res, error, statusCode = 400) => {
  let response = { status: false, error };
  res.statusCode = statusCode;
  return res.json(response);
};

/**
 *
 * @param {*} res
 * @param {*} data
 * @param {*} statusCode
 */
module.exports.ReS = (res, data, statusCode = 200) => {
  let response = { status: true, data };
  res.statusCode = statusCode;
  return res.json(response);
};
