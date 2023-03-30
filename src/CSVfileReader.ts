import fs from "fs";
import { MatchResults } from "./MatchResults";
import { dateConverter } from "./utils";
export class FileReader {
	data: string[][] = [];

	constructor(public fileName: string) {}
	public read(): string[][] {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((item): string[] => {
				return item.split(",");
			})
			.map((item: string[]): any => {
				return [
					dateConverter(item[1]),
					item[2],
					item[3],
					parseInt(item[4]),
					parseInt(item[5]),
					item[6] as MatchResults,
				];
			});
		return this.data;
	}
}
