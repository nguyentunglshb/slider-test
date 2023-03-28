import React, { useState } from "react";
import Slider from "react-slick";

import type { Settings } from "react-slick";
import type { SliderProps } from "./model";

import "./slider.css";

export const HorizontalSlider = (props: SliderProps) => {
	const { data } = props;

	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const settings: Settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToScroll: 1,
		speed: 500,
		slidesToShow: 5,
		focusOnSelect: true,
		centerPadding: "0px",
		arrows: false,
		afterChange: (current) => setActiveSlideIndex(current),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	return data.length ? (
		<div>
			<Slider {...settings}>
				{data.map(({ imageUrl }, index) => {
					return (
						<div key={index} className="m-4 py-[5%] cursor-pointer">
							<img
								src={imageUrl}
								className="w-1/4 h-1/4 rounded-full object-cover m-auto"
							/>
						</div>
					);
				})}
			</Slider>
			<div className="py-4 w-full">
				<ul className="w-full flex flex-col items-center text-center">
					{data[activeSlideIndex].content.length
						? data[activeSlideIndex].content.map((content, index) => {
								return <React.Fragment key={index}>{content}</React.Fragment>;
						  })
						: null}
				</ul>
			</div>
		</div>
	) : null;
};
