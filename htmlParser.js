const ejs = require("ejs");

class htmlParser {
  static async Parser(table) {
    return await ejs.renderFile("table.ejs", {
      header: table.header,
      body:  table.rows
    });
  }
}

module.exports = htmlParser;
