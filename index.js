const fs = require('fs');
const path = require("path")
const homedir = require('os').homedir();

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function getGDSave() {
  return getUserHome() + "\\AppData" + "\\Local" + "\\GeometryDash"
}

console.log("GDSaver 1.0 - Made by Munko :3");

console.log("Geometry Dash data located at: " + getGDSave() + "\n");

// Function to copy the files

function CopyFiles(dest) {
// Copy file 1
const pathToFile = path.join(getGDSave(), "CCGameManager.dat")
const pathToNewDestination = path.join(dest + "/CCGameManager.dat")

fs.copyFile(pathToFile, pathToNewDestination, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Copied CCGameManager.dat")
  }
})

// Copy file 2
const pathToFile2 = path.join(getGDSave(), "CCGameManager2.dat")
const pathToNewDestination2 = path.join(dest + "/CCGameManager2.dat")

fs.copyFile(pathToFile2, pathToNewDestination2, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Copied CCGameManager2.dat")
  }
})

// Copy file 3
const pathToFile3 = path.join(getGDSave(), "CCLocalLevels.dat")
const pathToNewDestination3 = path.join(dest + "/CCLocalLevels.dat")

fs.copyFile(pathToFile3, pathToNewDestination3, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Copied CCLocalLevels.dat")
  }
})

// Copy file 4
const pathToFile4 = path.join(getGDSave(), "CCLocalLevels2.dat")
const pathToNewDestination4 = path.join(dest + "/CCLocalLevels2.dat")

fs.copyFile(pathToFile4, pathToNewDestination4, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Copied CCLocalLevels2.dat")
  }
})

}

// Hey man which directory did you wanna put the thing :3

var readline = require('readline');
var resp = "";

var userquestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userquestion.question("Destination path? ", function(answer) {
    var resp = answer;
    console.log("\nYour files will be saved on the directory '" + resp);
    userquestion.close();

    CopyFiles(resp)

    console.log("\nAll files copied sucessfully! Thank you for using GDSaver.");
});
