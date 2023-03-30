console.log("hello");
import fs from "fs";
import { FileReader } from "./CSVfileReader";
import { dateConverter } from "./utils";

enum MatchResults {
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D",
}

let matches = new FileReader("./2018-19.csv").read();
console.log(matches);
// matches.map((item: string[]): any => {
// 	console.log(dateConverter(item[1]));
// });

// dateConverter(date);

let manUtdWins = 0;
for (let match of matches) {
	if (match[2] === "Man United" && match[6] === MatchResults.HomeWin) {
		manUtdWins++;
	} else if (match[3] === "Man United" && match[6] === MatchResults.AwayWin) {
		manUtdWins++;
	}
}
console.log(manUtdWins);
