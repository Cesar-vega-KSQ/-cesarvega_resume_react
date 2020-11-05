import './App.css';
import Navbar from "./Components/Navbar";
import MediaCard from "./Components/MediaCard";
import React, {useEffect} from "react";

import LazyLoad from 'react-lazyload';

function App() {

  function scrollUpFunction(){    
    setTimeout(scrollFunction,50);
  }

  function scrollFunction(){
    //window.scrollBy(10, -50);
    window.scrollBy({
      top: -50,
      left: 0,
      behavior: 'smooth'
    });
  }



  return (
    <>
    <LazyLoad height={200} offset={100}>

    
    
    
    <div className ="container">
      <div className = "row">
        <Navbar
        scrollUpPage = {scrollUpFunction}
        ></Navbar>
      </div>
      <div style = {{marginTop: "100px"}}>
      
      <div id="MyLife"/>
      <MediaCard 
      cardTitle = "Hello! I am César Vega."
      cardQuote = " “Never take life seriously. Nobody gets out alive anyway.” — Elbert Hubbard "
      cardDescription = "I am a software engineer!"
      imageSource = "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg"
      >
      <p style= {{opacity: 0, marginTop: "-25px"}}>.</p> 
      <a href="mailto:mailforksqgithubpagescontact@mailinator.com"><p style ={{fontSize:20, color: "#2E3B55"}}>Contact me!</p></a>
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

      <div id="MyEducation">
      </div>  
      <MediaCard 
      cardTitle = "In 2014 I started studying chemical engineering at the Tecnológico de Monterrey campus Monterrey"
      cardQuote = "    “University's like this little world, a bubble of time separate from everything before and everything after.” - Mhairi McFarlane    "
      cardDescription = " "
      imageSource = "https://upload.wikimedia.org/wikipedia/commons/a/ae/ITESM_Monterrey_Rectoria_CETEC.jpg"
      >
      </MediaCard>
            
      <div id="MyExperience"></div>  
      <MediaCard 
      cardTitle = "In 2018 I started to look for internships."
      cardQuote = "    “Dude, sucking at sumthin’ is the first step towards being sorta good at something.” - Jake the dog    "
      cardDescription = " In my first interview I was asked if I knew python. I panicked and said yes. I did not know python back then. I got the job. For the next few weeks, I worked late to read and learn about python. "
      imageSource = "https://static.pisapapeles.net/uploads/2019/07/bear-2382779_1920-1400x933.jpg"
      >
      </MediaCard>

      <MediaCard 
      cardTitle = "In 2018 I started my first internship at DeAcero as an Energy Analyst."
      cardQuote = "    “Prediction is very difficult, especially if it's about the future.” - Nils Bohr    "
      cardDescription = "I built a model to forecast energy prices, demand and generation in short and long term in the company and the Mexican market. "
      imageSource = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      >
        I worked there from May 2018 to December 2018. 
      </MediaCard>    

      <MediaCard 
      cardTitle = "In 2019 I started an internship at CIEMAT in Madrid."
      cardQuote = "    “The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny... ” - Issac Assimov    "
      cardDescription = "There I built a simulation of a petroleum refining pilot plant. I proposed improvements to the pilot-plant and installed the modifications. And ​I wrote CAPEX and OPEX analysis and reports for financial project evaluations.​"
      imageSource = "https://www.periodicodaily.com/wp-content/uploads/2020/10/drugs-2991157_1920.png"
      >
        I worked there from Febuary 2019 to July 2019
      </MediaCard>         


      <MediaCard 
      cardTitle = "After I returned to México I graduated in December 2019."
      cardQuote = "    “You are educated. Your certification is in your degree. You may think of it as the ticket to the good life. Let me ask you to think of an alternative. Think of it as your ticket to change the world.” - Tom Brokaw    "
      cardDescription = " ​"
      imageSource = "https://cdn.pixabay.com/photo/2016/06/11/05/18/graduation-1449488_1280.jpg"
      >
      </MediaCard>      

      <MediaCard 
      cardTitle = "In early 2020 the coronavirus pandemic started and I decided to stay at my house, study, and work as a freelancer."
      cardQuote = "    “Bad times have a scientific value. These are occasions a good learner would not miss.” - Ralph Waldo Emmerson    "
      cardDescription = " During that time, I learnt about artificial intelligence, management consulting, big data, and finance. As a freelancer I automated a company's data collection strategies. I worked in a Tableau dashboard. And I worked on a machine learning algorithm to forecast the client's energy consumption.  ​"
      imageSource = "https://i.pinimg.com/originals/76/09/46/7609468e97e15d1da8d14d534be7366c.gif"
      >
      </MediaCard>       

      <MediaCard 
      cardTitle = "In August 2020 I was hired at KSquare University as an associate software engineer focused on JavaScript."
      cardQuote = "    “Choose a job you love, and you will never have to work a day in your life.” - Confucius    "
      cardDescription = "   ​"
      imageSource = "https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png"
      >
      </MediaCard>         

      <MediaCard 
      cardTitle = "Why JavaScript?"
      cardQuote = "    “Fortunately, JavaScript has some extraordinarily good parts. In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders.” - Douglas Crockford    "
      cardDescription = " JavaScript makes the internet come alive and is one of the most in-demand programming languages.  ​"
      imageSource = "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"
      >
      </MediaCard>      

      <div id="AreasOfExpertice"></div>  
      <MediaCard 
      cardTitle = "My areas of expertise"
      cardQuote = "    “Build your skills, not your resume.” - Sheryl Sandberg    "
      cardDescription = {<ul>
        <li><a> Energy Market </a></li>
        <li><a> Data Analysis </a></li>
        <li><a> Programming </a></li>
      </ul>}
      imageSource = "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png"
      >
      </MediaCard>     

      <MediaCard 
      cardTitle = "Certifications and courses"
      cardQuote = "    “certificates can’t replace self-education.” - Sunday Adelaja    "
      cardDescription = {<ul>
        <li><a> Languages: Spanish and English </a></li>
        <li><a> Basic certification of the Mexican energy market </a></li>
        <li><a> Chartered financial analyst </a></li>
      </ul>}
      imageSource = "https://disruptivo.tv/wp-content/uploads/2019/09/online-3412473_1920.jpg"
      >
      </MediaCard>       

      <div id="mywork"></div>  
      <MediaCard 
      cardTitle = "My work: Tronald dump translator API"
      cardQuote = " “Th' beauty o' me be that I be mighty rich.” — Donald Trump (Pirate version)"
      cardDescription = "This API takes tweets from Donald Trump and translates them into popular culture languages; Like yoda-language, pirate speak,and others."
      imageSource = "https://images.unsplash.com/photo-1592499879835-3a1691ab26be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      >
      <p style= {{opacity: 0, marginTop: "-25px"}}>.</p> 
      <a href="https://github.com/Ksquare-University/Cesar_vega_projects/blob/master/Tronald_dump_api/2020_08_20-Tronald_dump_translator_api.ipynb"><p style ={{fontSize:20, color: "#2E3B55"}}>The code is here</p></a>
      </MediaCard>

      <MediaCard
        cardTitle = "My work: My resume online"
        cardQuote = " “I hope this website looks good” - Cesar Vega"
        cardDescription = "Read about my life and my proyects"
        imageSource = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        >
      </MediaCard>

      
      <div id="MyHobbies"></div>
      <MediaCard 
      cardTitle = "Hobbies"
      cardQuote = "    “Saving the world is only a hobby. Most of the time I do nothing.” - Edward Abbey    "
      cardDescription = {<ul>
        <li><a> Cooking </a></li>
        <li><a> Economics and finance </a></li>
        <li><a> Board games </a></li>
        <li><a> Exercise  </a></li>
      </ul>}
      imageSource = "https://fadedspring.co.uk/wp-content/uploads/2020/06/art-2578353_1920-750x500.jpg"
      >
      </MediaCard> 
      


      
      <MediaCard 
      cardTitle = "The future and my bucket list"
      cardQuote = "    “Every man gotta right to decide his own destiny.” - Bob Marley    "
      cardDescription = {
        <>
      <p>I don't have an specific plan for the future. But I have some guidelines on what I want to do. </p>
      <ul>
        <li><a> I want to get a technology master in the next decade. </a></li>
        <li><a> I want to start or support a charity to give free education, a household and food to children and teenagers. </a></li>
        <li><a> I want to keep working on technology for the rest of my life. </a></li>
      </ul>
      </>
      }
      imageSource = "https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928_1280.jpg"
      >
      </MediaCard>       
      
      
      <MediaCard 
      cardTitle = "  "
      cardQuote = "    “Optimism is a strategy for making a better future. Because unless you believe that the future can be better, you are unlikely to step up and take responsibility for making it so.” - Noam Chomsky    "
      cardDescription = {
        <>
      <p>Thank you for reading all the way through here. You can find more information in my <a href="https://www.linkedin.com/in/cesar-leonardo-vega-galvan/" style = {{color: "#2E3B55"}}>LinkedIn</a></p>
      </>
      }
      imageSource = "https://images.unsplash.com/photo-1549032305-e816fabf0dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
      >
      </MediaCard>
      

      </div>
    </div>

  
    </LazyLoad>
    </>
  );
}

export default App;
