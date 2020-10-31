import './App.css';
import Navbar from "./Components/Navbar"
import MediaCard from "./Components/MediaCard"

function App() {
  return (
    <>
    <div className ="container">
      <Navbar></Navbar>
      
      <MediaCard 
      cardTitle = "Hello! I am César Vega."
      cardQuote = " “Never take life seriously. Nobody gets out alive anyway.” — Elbert Hubbard "
      cardDescription = "I am a software engineer!"
      imageSource = "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg"
      >
      <p style= {{opacity: 0, marginTop: "-25px"}}>.</p> 
      <a href="mailto:mailforksqgithubpagescontact@mailinator.com"><h5>Contact me!</h5></a>
      </MediaCard>
      
      <MediaCard 
      cardTitle = "I was born in 1996 in Monclova..."
      cardQuote = " “This has made a lot of people angry and has been widely regarded as a bad move” - Douglas Adams"
      cardDescription = " "
      imageSource = "https://images.unsplash.com/photo-1537222961176-50d25fff78ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      >
      </MediaCard>

      <MediaCard 
      cardTitle = "In 2012 I studied in Canada for 6 months to improve my English."
      cardQuote = "    “One language sets you in a corridor for life. Two languages open every door along the way.” - Frank Smith    "
      cardDescription = " "
      imageSource = "https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1540&q=80"
      >
      </MediaCard>

      <MediaCard></MediaCard>
    </div>
    </>
  );
}

export default App;
