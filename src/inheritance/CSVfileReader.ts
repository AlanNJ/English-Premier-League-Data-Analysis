import fs from "fs";

export abstract class FileReader<T> {
	data: T[] = [];
	constructor(public fileName: string) {}
	abstract mapRow(item: string[]): T;

	public read(): void {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((item): string[] => {
				return item.split(",");
			})
			.map(this.mapRow);
	}
}
