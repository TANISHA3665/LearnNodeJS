const { log } = require("console");
const fs = require("fs");


// 1. Read
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

// 2. writeFile

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

// 3. appendFile

// a) File doesn't exist -> creates a new file and adds the content
// b) File exists -> adds the new content at the end of the file


// let newContent = "This is the content I want to add";

// fs.appendFile("./newFile.txt", newContent, (err) =>
// {
//     if (err) throw err;
//     else console.log("saved content");
// });

//4. delete File => unlink()

// deletes the file

// fs.unlink("abc.txt", (err) =>
// {
//     if (err) throw err;
//     else console.log("file deleted");
// });

// 5. rename file

fs.rename("newFile.txt", "renamedFile.txt", (err) =>
{
    if (err) throw err;
    else console.log("file renamed");
})