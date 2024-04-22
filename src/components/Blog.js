import React from 'react'
import UseDataContext from './UseDataContext'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
   <>

{/* Hero Section start */}


     

<div className='contact_main'>
<div>
<div className='inner_col inner_contact'>
<h1>Blog</h1>
<div className='main_hero_heading'>
  <NavLink to="/"><p>Home</p></NavLink>
  <p><i className="fa fa-solid fa-chevron-right"></i></p>
  <NavLink to="/blog"><p>Blog</p></NavLink>
</div>
</div>
</div>


</div>


      {/* Hero Section End */}


{/* Second Section Start  */}


    <div className="main_blog">
    <div className='inner-col inner_blog'>
    <UseDataContext/>
    </div>
</div>
    {/* Second Section End  */}
   </>
  )
}

export default Blog