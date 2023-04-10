"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResults_1 = require("./MatchResults");
const CSVfileReader_1 = require("./CSVfileReader");
const MatchReader_1 = require("./MatchReader");
let csvData = new CSVfileReader_1.FileReader("./2018-19.csv");
let matches = new MatchReader_1.MatchReader(csvData);
matches.load();
// matches.map((item: string[]): any => {
// 	console.log(dateConverter(item[1]));
// });
// dateConverter(date);
