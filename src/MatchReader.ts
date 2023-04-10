import { MatchResults } from "./MatchResults";
import { dateConverter } from "./utils";

export type MatchData = [
	Date | void,
	string,
	string,
	number,
	number,
	MatchResults
];

interface DataReader {
	read(): void;
	data: string[][];
}

// May Vary from file to file
// Can be customized by just changing MatchData

export class MatchReader {
	matches: MatchData[] = [];
	constructor(public reader: DataReader) {}

	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map((item: string[]): MatchData => {
			return [
				dateConverter(item[1]),
				item[2],
				item[3],
				parseInt(item[4]),
				parseInt(item[5]),
				item[6] as MatchResults,
			];
		});
	}
}
