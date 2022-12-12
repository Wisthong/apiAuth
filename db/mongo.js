const { connect, set } = require("mongoose");

const connectionDB = () => {
  connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err) => {
      if (!err) {
        console.log("success connection");
      } else {
        throw new Error("failed connection");
      }
    }
  );
};

set('strictQuery', false);
module.exports = { connectionDB };
