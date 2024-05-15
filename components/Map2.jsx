"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-better-filelayer/dist/leaflet.betterfilelayer.css";
import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../node_modules/leaflet/dist/images/marker-shadow.png";
import MarkerRetinaUrl from "../node_modules/leaflet/dist/images/layers-2x.png";
import L from "leaflet";

const Map2 = () => {
	const mapRef = useRef();
	const mapInstance = useRef(null);

	useEffect(() => {
		if (!mapInstance.current) {
			// const L = require("leaflet");
			require("leaflet-better-filelayer");

			const imageBounds = [
				[-46.0, -76],
				[-40.0, -71.0],
			];

			delete L.Icon.Default.prototype._getIconUrl;
			L.Icon.Default.mergeOptions({
				iconRetinaUrl: MarkerRetinaUrl,
				iconUrl: MarkerIcon,
				shadowUrl: MarkerShadow,
			});

			const osm = L.tileLayer(
				"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
				{
					attribution: "Map data &copy; 2013 OpenStreetMap contributors",
				}
			);

			mapInstance.current = L.map(mapRef.current)
				.setView([-41.4718, -72.9396], 10)
				.addLayer(osm);

			// capas de imagen

			// cuadruple maximo
			let pendientes_cuadruplemaximo = L.imageOverlay(
				"http://localhost:3000/pendiente/pendientes_cuadruplemaximo.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);
			// doble maximo
			let pendientes_doblemaximo = L.imageOverlay(
				"http://localhost:3000/pendiente/pendientes_doblemaximo.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);
			// min resolucion
			let pendientes_min_resolucion = L.imageOverlay(
				"http://localhost:3000/pendiente/pendientes_min_resolucion.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);
			// triple maximo
			let pendientes_triplemaximo = L.imageOverlay(
				"http://localhost:3000/pendiente/pendientes_triplemaximo.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);
			let t09 = L.imageOverlay(
				"http://localhost:3000/mapas/2024-03-20T09.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);
			let t12 = L.imageOverlay(
				"http://localhost:3000/mapas/2024-03-21T12.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);
			let t18 = L.imageOverlay(
				"http://localhost:3000/mapas/2024-03-23T18.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);

			let t00 = L.imageOverlay(
				"http://localhost:3000/mapas/2024-03-23T00.png",
				imageBounds,
				{
					opacity: 0.9,
				}
			);
			let t06 = L.imageOverlay(
				"http://localhost:3000/mapas/2024-03-27T06.png",
				imageBounds,
				{
					opacity: 1,
				}
			);

			// capas que quieres que el usuario pueda seleccionar
			let overlayMaps = {
				"Cuadruple Maximo": pendientes_cuadruplemaximo,
				"Doble Maximo": pendientes_doblemaximo,
				"Min Resolucion": pendientes_min_resolucion,
				"Triple Maximo": pendientes_triplemaximo,
				"20T09": t09,
				"21T12": t12,
				"23T18": t18,
				"23T00": t00,
				"27T06": t06,
			};

			// añadir control de capas para activar y desactivar
			let control = L.control.layers(null, overlayMaps).addTo(mapInstance.current);

			// POC LECTURA KMZ/KML/SHP
			const options = {
				button: document.getElementById("input-btn"),
			};

			const fileLayer = L.Control.betterFileLayer(options).addTo(
				mapInstance.current
			);

			mapInstance.current.on("bfl:layerloaded", (e) => {
				console.log("Your file was read successfully!! Event: ", e);
			});
		}
	}, []);

	return (
		<div>
			<div>
				<span>POC VIsualizador de archivos</span>

				<div>
					<p>Control Panel</p>
					<input
						type='file'
						id='input-btn'
						multiple
						accept='.gpx,.kml,.geojson,.json,.csv,.topojson,.wkt,.shp,.shx,.prj,.dbf,.zip, .kmz'
					/>
				</div>
			</div>
			<div
				ref={mapRef}
				style={{ width: "100vw", height: "94vh" }}></div>
		</div>
	);
};

export default Map2;
