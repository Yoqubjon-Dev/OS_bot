const fs = require('fs')


const read_file = (file_name) =>{
    return JSON.parse(fs.readFileSync("./model/user.json", "utf-8"))
}



const write_file = (file_name, data) => {
    return fs.writeFileSync('./model/user.json', JSON.stringify(data, null, 4));
} 



module.exports = {
    read_file,
    write_file
}