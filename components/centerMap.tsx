import { useMap } from "react-leaflet";
import { Button } from "./ui/button";
import { Focus } from "lucide-react";

export const CenterButton = () => {
	const map = useMap();
	const ptoMonttCords: L.LatLngExpression = [-41.4718, -72.9396];

	const handleButtonClick = () => {
		map.flyTo(ptoMonttCords, 12);
	};

	return (
		<Button
			className='z-[500] absolute top-2 right-2 bg-white text-gray-800 hover:bg-primary border border-opacity-30'
			size='icon'
			variant='ghost'
			onClick={handleButtonClick}
			data-testid='center-button'>
			<Focus />
			<p className='sr-only'>Centrar en Puerto Montt</p>
		</Button>
	);
};
