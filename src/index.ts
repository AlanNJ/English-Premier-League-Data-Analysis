import { FileReader } from "./CSVfileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./summary";

// creating instance of matches and feeded into summary sub module
let matches = new MatchReader(new FileReader("./2018-19.csv"));
let summary = Summary.summery();

matches.load();
summary.buildAndPrint(matches.matches);
