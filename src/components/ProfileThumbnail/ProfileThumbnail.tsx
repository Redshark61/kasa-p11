interface ProfileThumbnailProps {
	url?: string;
	size: string;
	alt?: string;
	minSize?: string;
}

export default function ProfileThumbnail({url, size, alt, minSize}: ProfileThumbnailProps) {
	return url ? (
		<img src={url} alt={alt} className={"radius-full"}
			 style={{width: size, aspectRatio: "1/1", minWidth: minSize}}/>
	) : (
		<div className={"radius-full"}
			 style={{width: size, aspectRatio: "1/1", backgroundColor: "#E5E5E5", minWidth: minSize}}/>
	)
}