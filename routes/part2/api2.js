const express = require('express');
const part2Router = express.Router();
const PDFDocument = require('pdfkit');
const pdfFiller = require('pdffiller');
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/files')
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname.slice(0, file.originalname.indexOf('.pdf')) + '_' + 'complete.pdf')
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })

part2Router.post('/upload', upload.single('myFile'), (req, res, next) => {
  const sourcePDF = "./public/files/" + req.file.originalname;

  const FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, null, (err, fdfData) => {
    if (err) throw err;
    console.log(fdfData);
  });

  res.end('complete');
});

module.exports = part2Router;