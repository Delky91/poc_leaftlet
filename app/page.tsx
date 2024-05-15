"use client";
import Script from "next/script";
import Head from "next/head";
import L from "leaflet";
import dynamic from "next/dynamic";
import Map2 from "@/components/Map2";

const DynamicMap = dynamic(() => import("../components/Map"), {
	ssr: false,
});

export default function Home() {
	// converter();
	return (
		<>
			<Map2 />
			{/* <DynamicMap /> */}
			{/* <Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
					integrity='sha512-h9FcoyWjHcOcmEVkxOfTLnmZFWIH0iZhZT1H2TbOq55xssQGEJHEaIm+PgoUaZbRvQTNTluNOEfb1ZRy6D3BOw=='
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'
				/>
				<Script
					src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
					integrity='sha512-puJW3E/qXDqYp9IfhAI54BJEaWIfloJ7JWs7OeD5i6ruC9JZL1gERT1wjtwXFlh7CjE7ZJ+/vcRZRkIYIb6p4g=='
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'></Script>
				<Script
					type='application/javascript'
					src='https://unpkg.com/leaflet-better-filelayer@0.1.1/dist/leaflet.betterfilelayer.min.js'
					crossOrigin='anonymous'></Script>
				<link
					rel='stylesheet'
					href='https://unpkg.com/leaflet-better-filelayer@0.1.1/dist/leaflet.betterfilelayer.css'
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'
				/>
			</Head>

			<div
				id='map'
				className='w-[98vw] h-[85vh]'></div>

			<Script id='mapScript'>
				{`const map = L.map('map').setView([-41.4718, -72.9396], 13);
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
							attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
						}).addTo(map);
						`}
			</Script> */}
		</>
	);
}
