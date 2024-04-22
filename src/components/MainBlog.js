import React, { useContext } from 'react'
import {createdata} from './UseDataContext'

const MainBlog = () => {
    const provideData = useContext(createdata)



  return (
   <>
{
    provideData.map((value)=>{
        return(
            <div className="main_card">
            <div className='inner_date'>

            </div>
            <div className='inner_image'>

  <img src={value.image} className="card-img-top" alt="..."/>
            </div>
  <div className="inner-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.desc}</p>
    {/* <a href="#" className="inner_btn">{value.button}</a> */}
    <button className='read_more'>{value.button}</button>
  </div>
</div>


        )
    })
}
   </>
  )
}

export default MainBlog