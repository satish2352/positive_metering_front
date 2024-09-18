import React from 'react'
import BlogCard from '../PageComponents/Blog/BlogCard'

const Blog = () => {
  document.title="Blogs | Positive Metering"

  return (
    <div className='mb-4'>
      <BlogCard />
    </div>
  )
}

export default Blog