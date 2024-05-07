import Image from "next/image";
import Map from "@/components/Map";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
	ssr: false,
});

export default function Home() {
	return (
		<main className='w-full h-full'>
			<DynamicMap />
		</main>
	);
}
