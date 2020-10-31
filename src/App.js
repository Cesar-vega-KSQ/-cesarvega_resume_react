import './App.css';
import Navbar from "./Components/Navbar"
import MediaCard from "./Components/MediaCard"

function App() {
  return (
    <>
    <div className ="container">
      <Navbar></Navbar>
      
      <MediaCard cardTitle = "Hello! I am César Vega."
      cardQuote = " “Never take life seriously. Nobody gets out alive anyway.” — Elbert Hubbard "
      cardDescription = "I am a software engineer!"
      >
      <p style= {{opacity: 0, marginTop: "-25px"}}>.</p> 
      <a href="mailto:mailforksqgithubpagescontact@mailinator.com"><h5>Contact me!</h5></a>
      
      </MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
    </div>
    </>
  );
}

export default App;
