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

module.exports =  { 
    csvJSON
}