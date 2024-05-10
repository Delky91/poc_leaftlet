"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { CenterButton } from "./centerMap";
import Head from "next/head";

export default function Map() {
	return (
		<MapContainer
			style={{
				height: "100vh",
				width: "100%",
			}}
			center={[-41.4718, -72.9396]}
			zoom={13}
			scrollWheelZoom={false}>
			<Marker
				icon={
					new L.Icon({
						iconUrl: MarkerIcon.src,
						iconRetinaUrl: MarkerIcon.src,
						iconSize: [25, 41],
						iconAnchor: [12.5, 41],
						popupAnchor: [0, -41],
						shadowUrl: MarkerShadow.src,
					})
				}
				position={[-41.4718, -72.9396]}>
				<Popup>este es un popup y puedo poner el html que quiera</Popup>
			</Marker>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<CenterButton />
		</MapContainer>
	);
}
