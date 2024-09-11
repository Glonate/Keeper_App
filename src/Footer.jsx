import React from "react";


function Footer(){
      const year = new Date().getFullYear();

    return(
        <footer>
            <p>Created by  &copy; - Gloria Inji {year}</p>
        </footer>
    )
}

export default Footer;