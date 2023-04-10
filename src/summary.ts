import { MatchData } from "./MatchReader";
import { WinsAnalyzer } from "./analyzer/WinAnalyzer";

export interface Analyzer {
	run(matches: MatchData[]): void;
}
export interface OutputParser {
	print(report: string): void;
}
// Using Composite Pattern
export class Summary {
	constructor(public analyzer: Analyzer) {}
	static summery(): Summary {
		return new Summary(new WinsAnalyzer("Man United"));
	}
	buildAndPrint(record: MatchData[]): void {
		let instance = this.analyzer.run(record);
		console.log(instance);
	}
}
