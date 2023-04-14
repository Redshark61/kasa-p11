import {useEffect, useState} from "react";
import {CarouselArrows} from "./CarouselArrows";
import className from "./index.module.css";
import Spinner from "../Spinner";

interface CarouselProps {
	pictures: string[];
}

export default function Carousel({pictures}: CarouselProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [errorURLs, setErrorURLs] = useState<string[]>([]);

	const cacheImages = async (images: string[]) => {
		const promises = images.map((image) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = image;
				img.onload = resolve;
				img.onerror = reject;
			});
		});
		promises.forEach((promise) => {
			promise.catch((error) => {
				setErrorURLs((prevState) => [...prevState, error.target.src]);
			});
		});
		await Promise.all(promises).catch(() => setIsLoading(false));
		setIsLoading(false);
	};

	useEffect(() => {
		cacheImages(pictures);
	}, [pictures]);

	const handleClick = ({delta}: { delta: 1 | -1 }) => {
		if (currentImageIndex === pictures.length - 1 && delta === 1) {
			setCurrentImageIndex(0);
		} else if (currentImageIndex === 0 && delta === -1) {
			setCurrentImageIndex(pictures.length - 1);
		} else {
			setCurrentImageIndex((prevState) => prevState + delta);
		}
	};

	const hasError = errorURLs.includes(pictures[currentImageIndex]);

	if (isLoading) {
		return <Spinner/>;
	}

	return (
		<div
			className={`w-full bg-pos-center relative bg-size-cover radius-25 ${className.carrousel}`}
		>
			{hasError ? (
				<div className={"w-full h-full radius-25 flex justify-center items-center"}>
					<h1>Error</h1>
				</div>
			) : (
				<img
					src={pictures[currentImageIndex]}
					alt={"location"}
					className={"w-full h-full radius-25"}
					style={{objectFit: "cover"}}
				/>
			)}
			<div
				className={"w-full h-full absolute radius-25"}
				style={{
					top: 0,
					backgroundImage:
						"linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,0.5) 100%)",
				}}
			/>
			{pictures.length > 1 && (
				<>
					<CarouselArrows handleClick={handleClick}/>
					<span
						className={"absolute text-18 font-500 text-white"}
						style={{bottom: 25, right: 25}}
					>
						{currentImageIndex + 1}/{pictures.length}
					</span>
				</>
			)}
		</div>
	);
}
