var savedFile = {
  extension: ".jpg",
  name: "report",
  size: 14040,
};

// function fileSummary(file) {
//   return `The file ${file.name}${file.extension} is of size ${file.size}`;
// }

// ES6
function fileSummary({ name, extension, size }) {
  return `The file ${name}${extension} is of size ${size}`;
}

fileSummary(savedFile);
