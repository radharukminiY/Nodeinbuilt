var fs = require('fs');
const { connected } = require('process');

fs.writeFile('file.txt','Ind Vs Eng',function(err){
    if(err) throw err;
    console.log("Task Done")
})
