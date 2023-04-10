"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalyzer_1 = require("./analyzer/WinAnalyzer");
class Summary {
    constructor(analyzer) {
        this.analyzer = analyzer;
    }
    static summery() {
        return new Summary(new WinAnalyzer_1.WinsAnalyzer("Everton"));
    }
    buildAndPrint(record) {
        let instance = this.analyzer.run(record);
        console.log(instance);
    }
}
exports.Summary = Summary;
