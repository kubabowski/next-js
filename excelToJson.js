

// const xlsx = require('xlsx');
// const fs = require('fs');

// // Replace "path/to/excel/file.xlsx" with the path to your Excel file
// const workbook = xlsx.readFile("./data/dane.xlsx");

// // Replace "Sheet1" with the name of the worksheet you want to convert
// const blog = workbook.Sheets["blog"];
// const cennik = workbook.Sheets["cennik"];
// const portfolio = workbook.Sheets["portfolio"];
// const oferta = workbook.Sheets["oferta"];

// // Convert the worksheet to a JSON object
// const blogData = xlsx.utils.sheet_to_json(blog);
// const cennikData = xlsx.utils.sheet_to_json(cennik);
// const portfolioData = xlsx.utils.sheet_to_json(portfolio);
// const ofertaData = xlsx.utils.sheet_to_json(oferta);

// // Function to convert the JSON to the new format
// function convertToNewFormatBlog(arr) {
//   return { "post": arr };
// }

// function convertToNewFormatCennik(arr) {
//   return { "offer": arr };
// }
// function convertToNewFormatPortfolio(arr) {
//   return { "images": arr };
// }

// // Convert the data to the new format
// const newDataBlog = convertToNewFormatBlog(blogData);
// const newDataCennik = convertToNewFormatCennik(cennikData);
// const newDataPortfolio = convertToNewFormatPortfolio(portfolioData);

// // Write the JSON object to a file
// fs.writeFile("data/daneBlog.json", JSON.stringify(newDataBlog), (err) => {
//   if (err) throw err;
//   console.log("JSON data is saved.");
// });
// fs.writeFile("data/daneCennik.json", JSON.stringify(newDataCennik), (err) => {
//   if (err) throw err;
//   console.log("JSON data is saved.");
// });

// fs.writeFile("data/danePortfolio.json", JSON.stringify(newDataPortfolio), (err) => {
//   if (err) throw err;
//   console.log("JSON data is saved.");
// });

// fs.writeFile("data/daneOferta.json", JSON.stringify(ofertaData), (err) => {
//   if (err) throw err;
//   console.log("JSON data is saved.");
// });

