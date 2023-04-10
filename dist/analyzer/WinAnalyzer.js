"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const MatchResults_1 = require("../MatchResults");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let teamWins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults_1.MatchResults.HomeWin) {
                teamWins++;
            }
            else if (match[2] === this.team && match[5] === MatchResults_1.MatchResults.AwayWin) {
                teamWins++;
            }
        }
        return `${this.team} wins ${teamWins} games`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
