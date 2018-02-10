const express = require('express');
const part1Router = express.Router();
const PDFDocument = require('pdfkit');

const _createPdf = (res, {address, step}) => {
  doc = new PDFDocument();

  doc.text('BCG Digital Ventures', 60, 60, {
    align: 'center',
    underline: 1
  });

  doc.moveDown();
  doc.text('This is the document is ',{
    continued: true
  });
  doc.font('Helvetica-Bold').text(step + ' of 2.');
  doc.moveDown();
  doc.font('Helvetica').text('Address: ' + address);
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

  _createPdf(res, req.body);  
});

module.exports = part1Router;