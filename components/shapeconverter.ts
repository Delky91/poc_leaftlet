import shp from "shpjs";

async function converter() {
	const geojson = await shp("./centros_concesiones.shp");
	console.log(geojson);
}

converter();
