console.log("hello");
import fs from "fs";
import { FileReader } from "./CSVfileReader";
import { dateConverter } from "./utils";
import { MatchResults } from "./MatchResults";

let matches = new FileReader("./2018-19.csv").read();
console.log(matches);
// matches.map((item: string[]): any => {
// 	console.log(dateConverter(item[1]));
// });

// dateConverter(date);

let manUtdWins = 0;
for (let match of matches) {
	if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
		manUtdWins++;
	} else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
		manUtdWins++;
	}
}
console.log(manUtdWins);
