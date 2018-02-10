const express = require('express');
const part1Router = express.Router();
const PDFDocument = require('pdfkit');

const _createPdf = (res, data) => {
  doc = new PDFDocument();

  doc.text('BCG Digital Ventures', 60, 60, {
    align: 'center',
    underline: 1
  });

  doc.moveDown();
  doc.text('This is the document is 1 of 2');

  doc.moveDown();
  doc.text('Address: ' + data);

  doc.pipe(res);

  doc.end();
}

part1Router.post('/pdf', (req, res, next)=>{
  const { address } = req.body;
  let filename = address;
  console.log(filename);
  filename = encodeURIComponent(filename) + '.pdf';

  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');

  _createPdf(res, address);  
});

module.exports = part1Router;