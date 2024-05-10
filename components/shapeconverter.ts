import shp from "shpjs";
import { combine, parseShp, parseDbf } from "shpjs";
import { readFileSync } from "fs";
import { join } from "path";

export async function converter() {
	const geojson = await shp("http://localhost:3000/data/a");
	console.log(geojson);
}
