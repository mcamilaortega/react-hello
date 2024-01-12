import React from "react";

import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import MyCard from "./Card.jsx"
import Footer from "./Footer.jsx";


//include images into your bundle

//create your first component
const Home = () => {
	const title = "A Warm Welcome!"
	const description = "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus est, porta eu odio a, suscipit posuere lorem. Praesent varius elit diam. Cras leo orci, lacinia ac ornare ac, pellentesque eu leo. Maecenas urna lectus, fringilla at fermentum vel, vulputate vel mi. In fringilla tellus magna, at ornare neque blandit imperdiet. Sed nec sapien quis lectus dapibus interdum in vitae arcu. Nulla finibus id ex feugiat sollicitudin."

  return (
    <div>
      <Navbar/>
	  ç<div className="container">
	  <Jumbotron title ={title} description = {description}/> 
	  <div className="d-flex my-3">
		<MyCard img={"url"}/>
		<MyCard img={"url"}/>
		<MyCard img={"url"}/>
		<MyCard img={"url"}/>
		</div>
		</div>
		<Footer/>
    </div>
  );
};
export default Home;
