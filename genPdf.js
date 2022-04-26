const GenPdf = require("html-pdf");



class pdfWrite{
    static genPdf(filename, html){
    GenPdf.create(html,{}).toFile(filename, error =>{
        
    })

    }
}

module.exports = pdfWrite;