const { getFilesByToolbox, parseFilesDataToJson } = require("../utils");

const getDataFiles = async (req, res) => {
  try {
    let response = null;
    if (req.query.name) {
      response = await parseFilesDataToJson(req.query.name);
    } else {
      const { data } = await getFilesByToolbox();
      const promises = data.files.map(async (fileName) => {
        return parseFilesDataToJson(fileName);
      });
      response = await Promise.all(promises);
    }
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ message: "server error" });
  }
};

const getFiles = async (req, res) => {
  const response = await getFilesByToolbox();
  return res.send(response.data);
};

module.exports = {
  getFiles,
  getDataFiles,
};
