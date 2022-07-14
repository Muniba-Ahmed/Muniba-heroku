const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// let option = process.env.OPTION;
// console.log(`you chose option ${option}`);
