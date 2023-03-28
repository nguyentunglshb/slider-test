import { HorizontalSlider } from "@/components";

import type { SliderProps } from "@/components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data: SliderProps["data"] = [
	{
		imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00154_1.jpg",
		content: [
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_1.jpg" />
				<p>Information 1</p>
			</li>,
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_2.jpg" />
				<p>Information 2</p>
			</li>,
		],
	},
	{
		imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00154_2.jpg",
		content: [
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_2.jpg" />
				<p>Information 2</p>
			</li>,
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_3.jpg" />
				<p>Information 3</p>
			</li>,
		],
	},
	{
		imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00154_3.jpg",
		content: [
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_3.jpg" />
				<p>Information 3</p>
			</li>,
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_4.jpg" />
				<p>Information 4</p>
			</li>,
		],
	},
	{
		imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00154_4.jpg",
		content: [
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_4.jpg" />
				<p>Information 4</p>
			</li>,
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_5.jpg" />
				<p>Information 5</p>
			</li>,
		],
	},
	{
		imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00154_5.jpg",
		content: [
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_1.jpg" />
				<p>Information 5</p>
			</li>,
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_6.jpg" />
				<p>Information 6</p>
			</li>,
		],
	},
	{
		imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00154_6.jpg",
		content: [
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_6.jpg" />
				<p>Information 6</p>
			</li>,
			<li>
				<img src="https://ananas.vn/wp-content/uploads/Pro_AV00154_7.jpg" />
				<p>Information 7</p>
			</li>,
		],
	},
];

function App() {
	return (
		<div className="App">
			<HorizontalSlider data={data} />
		</div>
	);
}

export default App;
