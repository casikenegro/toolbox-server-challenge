const { default: axios } = require("axios");
const { csvJSON } = require("../utils");

const getFileByName = async (req, res) => {
  try {
    const response = await axios({
      url:`https://echo-serv.tbxnet.com/v1/secret/file/${req.query.name}`,
      responseType: "blob" ,
      headers: { Authorization: `Bearer aSuperSecretKey` }
    })
    return res.send({ file: req.query.name, lines: csvJSON(response.data) });
  } catch (error) {
    return res.status(500).send({ message: "server error" });
  }
};

const getFiles = async (req, res) => {
  const response = await axios.get(
    "https://echo-serv.tbxnet.com/v1/secret/files",
    { headers: { Authorization: `Bearer aSuperSecretKey` } }
  );
  return res.send(response.data);
};

module.exports = {
  getFiles,
  getFileByName,
};
