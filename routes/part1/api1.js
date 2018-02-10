const express = require('express');
const part1Router = express.Router();
const PDFDocument = require('pdfkit');

part1Router.post('/pdf', (req, res, next)=>{
  let filename = 'myPdf';
  filename = encodeURIComponent(filename) + '.pdf';

  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');

  doc = new PDFDocument();

  doc.text('pdf content');

  doc.pipe(res);

  doc.end();
});

module.exports = part1Router;