import React from 'react'
import { useState } from 'react'
import UseDataContext from './UseDataContext'
import { NavLink } from 'react-router-dom'


const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleDivClick = () => {
    setShowVideo(true);
  };
  return (
    <>
     {/* Hero Section start */}


     

<div className='contact_main'>
<div>
<div className='inner_col inner_contact'>
<h1>About Us</h1>
<div className='main_hero_heading'>
  <NavLink to="/"><p>Home</p></NavLink>
  <p><i className="fa fa-solid fa-chevron-right"></i></p>
  <NavLink to="/about"><p>About Us</p></NavLink>
</div>
</div>
</div>

</div>

      {/* Hero Section End */}


      {/* Second Section Start  */}

      <div className='about_start'>
      <div className='inner-col inner_about'>
        <h2>We Invite you to Visit Our Restaurant</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      </div>

      {/* Second Section end  */}



      {/* third section Start  */}

<div className='about_start'>
<div className='inner-col inner_video'>
<div className='play_btn'>
<div className='inner_btn'  onClick={handleDivClick}>

<i class="fa-solid fa-play"></i>
</div>

</div>
</div>
{showVideo && (
        <div style={{ marginTop: '20px' }}>
          <video width="320" height="240" controls>
            <source src="https://www.youtube.com/embed/XJb1G9iRoL4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
</div>

      {/* third section End  */}
    
    </>
  )
}

export default About