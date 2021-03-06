# pdf-poc
Extracts the fields in pdf and give user ability to type in field and generate the the filled pdf.

## Getting Started

### Prerequisites
pdftk, if you are using  OS X EI Capitan 10.11, please use [this version](https://stackoverflow.com/questions/39750883/pdftk-hanging-on-macos-sierra) to download, refer bottom to see more detailed inofrmation. 

### Installing
install dependencies
```
npm run app-update
```

Run server
```
npm run dev
```

then go to 
```
http://localhost:3000/part1
```
for part 1, and
```
http://localhost:3000/part2
```
for part 2

## Explanation
### pdf library used: 
* [pdfkit](https://github.com/devongovett/pdfkit) to generate a new pdf based on the content, the advantage is it's pretty customizeable, and the value does not show underline.
* [fillPdf](https://github.com/dommmel/fill-pdf) to generate a pdf based on existing pdf and content, the advantage is easy to use
* [pdffiller](https://www.npmjs.com/package/pdffiller) to extract the fields from the pdf, the documenation of this library is pretty good.

### two ways to show pdf
* first way is the way in the code, it use the pdfkit to create a new pdf, so the content can be adjusted easily.
* second way is to use fillpdf, but this way will end up with the underline under the content user provided, I have also included this code in the routes/part2/api2, so you can uncomment it to see the result

### problems met
There is a specific bug for OS X EI Capitan 10.11 only [here](https://github.com/pdffillerjs/pdffiller/issues/51) and [here](https://stackoverflow.com/questions/39750883/pdftk-hanging-on-macos-sierra), which took me quite while to solve.

