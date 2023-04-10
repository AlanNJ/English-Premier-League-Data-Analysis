import { MatchData } from "../MatchReader";
import { MatchResults } from "../MatchResults";
import { Analyzer } from "../summary";

export class WinsAnalyzer implements Analyzer {
	constructor(public team: string) {}
	run(matches: MatchData[]): string {
		let teamWins = 0;
		for (let match of matches) {
			if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
				teamWins++;
			} else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
				teamWins++;
			}
		}
		return `${this.team} wins ${teamWins} games`;
	}
}

// More Analyzers can be created using a same pattern
