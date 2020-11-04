import Navbar from "../Components/Navbar";
import MediaCard from "../Components/MediaCard";
import React, {useEffect} from "react";

function MyWork() {
  
  //Is like componentDidMount
  useEffect(() => {  
    document.getElementById('myworkindex').scrollIntoView();
    window.scrollBy({
      top: -70,
      left: 0,
      behavior: 'smooth'
    });
  },[]);
  
  return (
    <>
    <div className ="container">
      <div id="myworkindex"/>
      <div className = "row">
        <Navbar></Navbar>
      </div>
      <div style = {{marginTop: "100px"}}>
      <MediaCard 
      cardTitle = "Tronald dump translator API"
      cardQuote = " “Th' beauty o' me be that I be mighty rich.” — Donald Trump (Pirate version)"
      cardDescription = "This API takes tweets from Donald Trump and translates them into popular culture languages; Like yoda-language, pirate speak,and others."
      imageSource = "https://images.unsplash.com/photo-1592499879835-3a1691ab26be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      >
      <p style= {{opacity: 0, marginTop: "-25px"}}>.</p> 
      <a href="https://github.com/Ksquare-University/Cesar_vega_projects/blob/master/Tronald_dump_api/2020_08_20-Tronald_dump_translator_api.ipynb"><p style ={{fontSize:20, color: "#2E3B55"}}>The code is here</p></a>
      </MediaCard>
      
      <div id="My_resume_online"/>
        <MediaCard
        cardTitle = "My resume online"
        cardQuote = " “I hope this website looks good” - Cesar Vega"
        cardDescription = "Read about my life and my proyects"
        imageSource = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        >
        </MediaCard>  
      </div>

    </div>
    </>
  );
}

export default MyWork;
