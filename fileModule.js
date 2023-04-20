const { log } = require("console");
const fs = require("fs");


//Read
// fs.readFile("./abc.txt", (error, data) =>
// {
//     if (error)
//     {
//         console.log(`Error: ${error}`);
//     }

//     else
//     {
//         console.log(data.toString());
//     }
// });

// console.log("--------------------------------");

// writeFile

// a) File doesn't exist -> creates a new file and adds the content
// b) File exists -> deletes the old content and adds the new content

// let content = "This is a new dynamic content";

// fs.writeFile("newFile.txt", content, (err) =>
// {
//     if (err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("saved content");
//     }
// });

// appendFile

// a) File doesn't exist -> creates a new file and adds the content
// b) File exists -> adds the new content at the end of the file


// let newContent = "This is the content I want to add";

// fs.appendFile("./newFile.txt", newContent, (err) =>
// {
//     if (err) throw err;
//     else console.log("saved content");
// });

//delete File => unlink()

// deletes the file

fs.unlink("abc.txt", (err) =>
{
    if (err) throw err;
    else console.log("file deleted");
});