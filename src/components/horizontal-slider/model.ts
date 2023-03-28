import React from "react";

export type SlideProps = {
	imageUrl: string;
	content: React.ReactNode[];
};

export type SliderProps = {
	data: SlideProps[];
};
