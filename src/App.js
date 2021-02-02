import './App.css';
import React, { useState } from "react"
import patternBg from './images/pattern-bg.svg';
import patternCurve from './images/pattern-curve.svg';
import patternQuotes from './images/pattern-quotes.svg';
import iconPrev from './images/icon-prev.svg';
import iconNext from './images/icon-next.svg';
import tanyaPhoto from './images/image-tanya.jpg';
import johnPhoto from './images/image-john.jpg';


function App() {

  let tanya = {
    photo: tanyaPhoto,
    quote: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    job: 'UX Engineer'
  };

  let john = {
    photo: johnPhoto,
    quote: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer'
  };

  const [user, setUser] = useState(tanya);


  return (
    <div className="App">
        <div className="container">
          <div className="testimonial">
            <div className="testimonial-photo">
              <img src={patternBg} alt="" className="pattern-bg-img" />
              <img src={user.photo} alt={user.name} className="testimonial-photo-user" />

              <div className="btn">
                <button onClick={() => setUser(tanya)}>
                  <img src={iconPrev} alt="Previous" className="icon" />
                </button>
                <button onClick={() => setUser(john)}>
                  <img src={iconNext} alt="Next" className="icon" />
                </button>
              </div>

            </div>


            <div className="testimonial-info">
              <div className="pattern-quotes">
                <img src={patternQuotes} alt="" className="pattern-quotes-img" />
              </div>
              <div className="testimonial-quote">
                <p>
                  {user.quote}
                </p>
              </div>
              <div className="testimonial-label">
                <div className="testimonial-name">
                  {user.name}
                </div>
                <div className="testimonial-job">
                  {user.job}
                </div>
              </div>
            </div>
          </div>

          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://github.com/molendaluisa">Luisa Molenda</a>.
        </div>

          <div className="pattern-curve">
            <img src={patternCurve} alt="" className="pattern-curve-img" />
          </div>

        </div>
    </div>
  );
}

export default App;
