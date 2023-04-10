"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((item) => {
            return [
                (0, utils_1.dateConverter)(item[1]),
                item[2],
                item[3],
                parseInt(item[4]),
                parseInt(item[5]),
                item[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
