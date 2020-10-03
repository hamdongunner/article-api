const validate = require("validate.js");
const validator = require("./tools/validator.tools");
const { ReE, ReS, hashMyPassword } = require("./tools/helpers.tools");
var jwt = require("jsonwebtoken");

/**
 * This is the default function fot route / GET
 * @param {*} req
 * @param {*} res
 *
 */
let getArticles = (req, res) => {
  let data = [
    {
      title: "Generate Lorem Ipsum placeholder text.",
      athor: "FikraSpace",
      text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>`,
      image: "https://picsum.photos/600/300?grayscale",
      createdAt: "2020-09-24 22:34:00.976273",
      updatedAt: "2020-09-24 22:34:00.976273",
    },
    {
      title: "Generate Lorem Ipsum placeholder text.",
      athor: "FikraSpace",
      text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>`,
      image: "https://picsum.photos/600/300?grayscale",
      createdAt: "2020-09-24 22:34:00.976273",
      updatedAt: "2020-09-24 22:34:00.976273",
    },
    {
      title: "Generate Lorem Ipsum placeholder text.",
      athor: "FikraSpace",
      text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>`,
      image: "https://picsum.photos/600/300?grayscale",
      createdAt: "2020-09-24 22:34:00.976273",
      updatedAt: "2020-09-24 22:34:00.976273",
    },
  ];

  return res.json(data);
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
let getOneArticle = (req, res) => {
  let id = req.params.id;
  let data = {
    id: 1,
    title: "Generate Lorem Ipsum placeholder text.",
    athor: "FikraSpace",
    text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>`,
    image: "https://picsum.photos/600/300?grayscale",
    createdAt: "2020-09-24 22:34:00.976273",
    updatedAt: "2020-09-24 22:34:00.976273",
  };
  res.json(data);
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
module.exports.addArticle = (req, res) => {
  // get the req body
  let body = req.body;
  // validate
  const isNotValid = validate(body, validator.article());
  if (isNotValid) return ReE(res, isNotValid);

  // save the data (not today)
  let data = {
    ...body,
  };
  // return the res
  data.id = 1;
  return ReS(res, data);
};

module.exports.editArticle = (req, res) => {
  let body = req.body;
  // DB
  let article = {
    id: 1,
    title: "Generate Lorem Ipsum placeholder text.",
    athor: "FikraSpace",
    text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font`,
  };
  // validate the req
  const isNotValid = validate(body, validator.article(false));
  if (isNotValid) return ReE(res, isNotValid);
  // Check what to edit
  // edit it

  Object.keys(body).forEach((key) => (article[key] = body[key]));
  // if (req.body.title) article.title = req.body.title;
  // if (req.body.athor) article.athor = req.body.athor;
  // if (req.body.text) article.text = req.body.text;

  // return
  return ReS(res, article);
};

const user = { id: 1, email: "me@mewo.com", password: "admin" }; // Dummy

module.exports.login = (req, res) => {
  const isNotValid = validate(req.body, validator.login());
  if (isNotValid) return ReE(res, isNotValid);

  if (req.body.email != user.email || req.body.password != user.password)
    return ReE(res, "User is not valid");

  var token = jwt.sign({ id: user.id }, "shhhhh");
  return ReS(res, token);
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
module.exports.register = async (req, res) => {
  // validate
  const isNotValid = validate(req.body, validator.register());
  if (isNotValid) return ReE(res, isNotValid);

  // check the email in the DB

  // hash to the password
  const hash = await hashMyPassword(req.body.password);
  return ReS(res, { hash });

  // save to DB
};

// module.exports = home;
module.exports.getOneArticle = getOneArticle;
module.exports.getArticles = getArticles;
