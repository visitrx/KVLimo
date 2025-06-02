import Image from "next/image";
import carImage from "@/assets/images/car.avif";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Image
				src={carImage}
				alt="Car Image"
				width={500}
				height={300}
			/>
		</div>
	);
}
