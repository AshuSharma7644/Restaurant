import React from 'react'
import { BlogData,createdata } from './BlogData'
import MainBlog from './MainBlog'

const UseDataContext = () => {
  return (
    <>
<createdata.Provider value={BlogData}>
    <MainBlog/>
</createdata.Provider>
    </>
  )
}

export default UseDataContext;
export {createdata}