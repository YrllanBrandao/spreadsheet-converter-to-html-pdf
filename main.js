const Reader = require("./reader")
const Processor = require("./processor")
const Table = require("./table");
const reader = new Reader()
const htmlParser = require("./htmlParser")
const writeHtml = require("./writeHtml")
const GenPdf = require("./genPdf")

const writer = new writeHtml();
async function Main()
{
    const content = await reader.read("plane.csv");
    const processedData = Processor.Processor(content);
    
    const table = new Table(processedData);
    const html  =  await htmlParser.Parser(table)

    writer.writer("index.html", html)

    GenPdf.genPdf("tabela.pdf", html)
}


Main()

