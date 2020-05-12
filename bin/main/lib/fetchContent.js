"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageCaption = getImageCaption;
exports.createHumanReadableFormat = createHumanReadableFormat;

var content = require('/lib/xp/content');

function getImageCaption(keyFigureId) {
  var imageContent = content.get({
    key: keyFigureId
  });
  return imageContent; //!== undefined ? imageContent.data.caption : ''
}

function createHumanReadableFormat(value) {
  return value > 999 ? numberWithSpaces(value).toString().replace(/\./, ',') : value.toString().replace(/\./, ',');
}

function numberWithSpaces(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "\xA0");
  return parts.join('.');
}