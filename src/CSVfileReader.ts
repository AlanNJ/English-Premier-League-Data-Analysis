import fs from "fs";

// Works for all CSV files
export class FileReader {
	data: string[][] = [];

	constructor(public fileName: string) {}
	public read(): void {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((item): string[] => {
				return item.split(",");
			});
		console.log(this.data);
	}
}
