"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import carImage from "@/assets/images/car.avif";

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [isValidDate, setIsValidDate] = useState(true);

	useEffect(() => {
		const date = new Date();
		const targetDate = new Date("2025-07-02");
		if (date >= targetDate) {
			setIsValidDate(false);
			return;
		}
	}, []);

	useEffect(() => {
		// Trigger animations after component mounts
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	if (!isValidDate) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<h2 className="text-2xl mb-4">Page Not Found</h2>
				<p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
			</div>
		);
	}
	return (
		<main className="relative min-h-screen bg-gradient-to-br from-black to-gray-950 overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 scale-150" />
			</div>

			{/* Main Content Container */}
			<div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
				{/* Coming Soon Text */}
				<div
					className={`text-center mb-8 sm:mb-12 transition-all duration-1000 transform ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-wider animate-pulse">
						COMING SOON
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide animate-shimmer">
						Experience the future of luxury automotive
					</p>
				</div>

				{/* Car Image Container */}
				<div
					className={`relative transition-all duration-1000 delay-300 transform ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}>
					{/* Loading State */}
					{!imageLoaded && (
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-2xl animate-pulse">
							<div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
						</div>
					)}

					{/* Car Image */}
					<div className="relative overflow-hidden rounded-2xl shadow-2xl">
						<Image
							src={carImage}
							alt="Luxury Car - Premium automotive experience coming soon"
							width={800}
							height={500}
							priority
							quality={95}
							className={`w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 
                transition-all duration-700
                ${imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
							onLoad={() => setImageLoaded(true)}
							onError={() => setImageLoaded(true)}
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
						/>
					</div>
				</div>

				{/* Bottom Text */}
				<div
					className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 transform ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					<p className="text-sm sm:text-base text-gray-200 font-light tracking-widest">
						{/* LUXURY • PERFORMANCE • INNOVATION */}
						Contact Number : +1 (929) 928-6022
					</p>
				</div>
			</div>

			{/* Ambient light effects */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
		</main>
	);
}
