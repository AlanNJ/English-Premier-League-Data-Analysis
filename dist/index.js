"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello");
const CSVfileReader_1 = require("./CSVfileReader");
const MatchResults_1 = require("./MatchResults");
let matches = new CSVfileReader_1.FileReader("./2018-19.csv").read();
console.log(matches);
// matches.map((item: string[]): any => {
// 	console.log(dateConverter(item[1]));
// });
// dateConverter(date);
let manUtdWins = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResults.HomeWin) {
        manUtdWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manUtdWins++;
    }
}
console.log(manUtdWins);
