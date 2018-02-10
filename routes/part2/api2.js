const express = require('express');
const part2Router = express.Router();
const PDFDocument = require('pdfkit');
const pdfFiller = require('pdffiller');
const multer  = require('multer');
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
const upload = multer({ storage: storage })

part2Router.post('/upload', upload.single('myFile'), (req, res, next) => {
  const sourcePDF = "./public/files/upload/" + req.file.originalname;

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

module.exports = part2Router;