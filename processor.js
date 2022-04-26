class Processor{
    static Processor(data)
    {
        const processedData =  data.split("\r\n");

        const rows = [];

        processedData.forEach(row =>{
            const arr = row.split(',');
            rows.push(arr)
        })

        return rows;
    }
}

module.exports = Processor;