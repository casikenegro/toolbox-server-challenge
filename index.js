const app = require("./app");
const config = require("./config");

app.listen(config.PORT, () => {
  console.log("API lista por el puerto ", config.PORT);
});
