import { FileReader } from "./CSVfileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./summary";

let matches = new MatchReader(new FileReader("./2018-19.csv"));
let summary = Summary.summery();

matches.load();
summary.buildAndPrint(matches.matches);

// matches.map((item: string[]): void => {
// 	console.log(dateConverter(item[1]));
// });

// dateConverter(date);
