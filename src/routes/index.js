const { getFiles, getFileByName } = require("../controllers/files");
const Joi = require('joi')
const router = require("express").Router();
const validator = require('express-joi-validation').createValidator({})

const querySchema = Joi.object({
  name: Joi.string().required()
})
router.get("/files/list", getFiles);
router.get("/files/data",validator.query(querySchema), getFileByName);

module.exports = router;
