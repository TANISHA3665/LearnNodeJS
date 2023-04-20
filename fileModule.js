const fs = require("fs");


//Read
fs.readFile("./abc.txt", (error, data) =>
{
    if (error)
    {
        console.log(`Error: ${error}`);
    }

    else
    {
        console.log(data.toString());
    }
})

console.log("--------------------------------")