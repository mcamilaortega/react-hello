import React from "react";

import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import MyCard from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const title = "A Warm Welcome!"
	const description = "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus est, porta eu odio a, suscipit posuere lorem. Praesent varius elit diam. Cras leo orci, lacinia ac ornare ac, pellentesque eu leo. Maecenas urna lectus, fringilla at fermentum vel, vulputate vel mi. In fringilla tellus magna, at ornare neque blandit imperdiet. Sed nec sapien quis lectus dapibus interdum in vitae arcu. Nulla finibus id ex feugiat sollicitudin."

  return (
    <div className="">
      <Navbar/>
	  <Jumbotron title ={title} description = {description}/> 
	  <MyCard/>
		<MyCard/>
		<MyCard/>
    </div>
  );
};
export default Home;
