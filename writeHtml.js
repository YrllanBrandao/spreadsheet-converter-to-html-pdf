const fs =  require("fs")
const util = require("util");

class WriteHtml{

    constructor()
    {
        this.writer = util.promisify(fs.writeFile)
    }
    async writeHtml(filename, html)
    {
        try{
             await this.writer(filename, html);
             return true;
        }
        catch{
            return false;
        }
    }
}

module.exports = WriteHtml;