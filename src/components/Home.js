import React from 'react'

const Home = () => {
  return (
    <>
      <div className='main-home'>
        <div className='inner-home'>
          <div className='banner-content'>
            <h2>High Quality Test Station</h2>
            <h1>We believe Good Food Offer Great Smile</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='banner-btn'>
            <button className='banner-btn-one'>Book Link Table</button>
            <button className='banner-btn-two'>View More</button>
            </div>

            
            <div className='food-card'>
              <div className='panner-tikka'>
                <h5>Panner Tikka</h5>
                <ul className='rating'>
                    <li><i className="fa fa-solid fa-star"></i></li>
                    <li><i className="fa fa-solid fa-star"></i></li>
                    <li><i className="fa fa-solid fa-star"></i></li>
                    <li><i className="fa fa-solid fa-star"></i></li>
                    <li className='m-0'><i className="fa fa-solid fa-star"></i></li>
                    
                    
                </ul>
              </div>
              <div className='master-chief'></div>
            </div>

            



          </div>
          <div className='banner-media'>
            <img src='./images/banner-img.png'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home