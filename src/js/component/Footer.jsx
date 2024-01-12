import React from "react";

const footerStyle = {
    bottom: 0,
    width: "100%",
    height: "50px",
    backgroundColor: "#333"
    
}
const Footer = ()=> {
    return (
        <h5 style={footerStyle} className="bg-dark text-center mt-auto text-white"><small>Copyright @ Maria & Jvonte Productions 2024 </small></h5>
    )
};

export default Footer;