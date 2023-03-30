"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello");
const CSVfileReader_1 = require("./CSVfileReader");
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
let matches = new CSVfileReader_1.FileReader("./2018-19.csv").read();
console.log(matches);
// matches.map((item: string[]): any => {
// 	console.log(dateConverter(item[1]));
// });
// dateConverter(date);
let manUtdWins = 0;
for (let match of matches) {
    if (match[2] === "Man United" && match[6] === MatchResults.HomeWin) {
        manUtdWins++;
    }
    else if (match[3] === "Man United" && match[6] === MatchResults.AwayWin) {
        manUtdWins++;
    }
}
console.log(manUtdWins);
