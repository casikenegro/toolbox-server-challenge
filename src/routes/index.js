const { getFiles, getDataFiles } = require("../controllers/files");
const Joi = require("joi");
const router = require("express").Router();
const validator = require("express-joi-validation").createValidator({});

const querySchema = Joi.object({
  name: Joi.string(),
});
router.get("/files/list", getFiles);
router.get("/files/data", validator.query(querySchema), getDataFiles);

module.exports = router;
