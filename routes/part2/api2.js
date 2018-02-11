const express = require('express');
const part2Router = express.Router();
const PDFDocument = require('pdfkit');
const pdfFiller = require('pdffiller');
const fillPdf = require("fill-pdf");
const multer  = require('multer');
const appRoot = require('app-root-path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/files/upload/')
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname.slice(0, file.originalname.indexOf('.pdf')) + '_' + 'complete.pdf')
    cb(null, file.originalname);
  }
})

let dataFields;
let filename;
const upload = multer({ storage: storage })

const _createPdf = (res, content) => {
  const doc = new PDFDocument();

  doc.text('BCG Digital Ventures', 60, 60, {
    align: 'center',
    underline: 1
  });
  Object.keys(content).forEach(key=>{
    let pdfKey = key.split('_').join(' ');
    pdfKey = pdfKey.charAt(0).toUpperCase() + pdfKey.slice(1);
    doc.moveDown();
    doc.font('Helvetica').text(pdfKey + ': ' + content[key]);
  })
  
  doc.pipe(res);
  doc.end();
}

part2Router.post('/upload', upload.single('myFile'), (req, res, next) => {
  filename = req.file.originalname;
  const sourcePDF = "./public/files/upload/" + filename;

  const FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, null, (err, fdfData) => {
    if (err) throw err;
    console.log(fdfData)
    dataFields = fdfData;
    res.end(JSON.stringify(fdfData));    
  });
  
});

part2Router.get('/get', (req,res) => {
  res.end(JSON.stringify(dataFields));
})

part2Router.post('/pdf', (req, res, next)=>{
  const { first_name } = req.body;
  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');

  const sourcePDF = appRoot + "/public/files/upload/" + filename;
  
  // fillPdf.generatePdf(req.body, sourcePDF, function(err, output) {
  //   if ( !err ) {
  //     res.setHeader('Content-length', output.length);
  //     res.end(output);
  //   }
  // });
  
  _createPdf(res, req.body);  
});

module.exports = part2Router;