

const xlsx = require('xlsx');
const fs = require('fs');

// Replace "path/to/excel/file.xlsx" with the path to your Excel file
const workbook = xlsx.readFile("./data/dane.xlsx");

// Replace "Sheet1" with the name of the worksheet you want to convert
const worksheet = workbook.Sheets["List1"];

// Convert the worksheet to a JSON object
const data = xlsx.utils.sheet_to_json(worksheet);

// Function to convert the JSON to the new format
function convertToNewFormat(arr) {
  return { "post": arr };
}

// Convert the data to the new format
const newData = convertToNewFormat(data);

// Write the JSON object to a file
fs.writeFile("data/dane.json", JSON.stringify(newData), (err) => {
  if (err) throw err;
  console.log("JSON data is saved.");
});
