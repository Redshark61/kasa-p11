import star_empty from '/star_empty.svg';
import star_full from '/star_full.svg';

interface RatingProps {
	readonly value: string;
}

export default function Rating({value}: RatingProps) {
	return (
		<div className={"flex gap-15"}>
			{[...Array(5)].map((_, index) => (
				<img style={{width: "1.7vw", height: "1.7vw", minWidth: 13, minHeight: 13}}
					 src={index < +value ? star_full : star_empty}
					 alt={"star"} key={index}/>
			))}
		</div>
	)
}