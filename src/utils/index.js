const { default: axios } = require("axios");

const csvJSON = (csvStr) => {
  const lines = csvStr.split("\n");
  const headers = lines[0].split(",");
  let result = [];
  for (let i = 1; i < lines.length; i++) {
    let obj = {};
    let currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }
  return result; //JavaScript object
};

const getFilesByToolbox = async (name = null) => {
  if (name) {
    return axios({
      url: `https://echo-serv.tbxnet.com/v1/secret/file/${name}`,
      method: "GET",
      responseType: "blob",
      headers: { Authorization: `Bearer aSuperSecretKey` },
    }).catch(()=>{ 
      return false
    });
  }
  return axios.get("https://echo-serv.tbxnet.com/v1/secret/files", {
    headers: { Authorization: `Bearer aSuperSecretKey` },
  });
};
const parseFilesDataToJson = async (fileName) => { 
  const payload = await getFilesByToolbox(fileName)
  return {
    file: fileName,
    lines: payload.data ? csvJSON(payload.data): [],
  };
}
module.exports = {
  parseFilesDataToJson,
  getFilesByToolbox
};
