import {useEffect, useState} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

const BlogsList = () => {
  const [blogsData, setBlogsData] = useState([])

  useEffect(() => {
    const funName = async () => {
      const url = 'https://apis.ccbp.in/blogs'
      const options = {
        method: 'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      const fetchData = data.map(each => ({
        id: each.id,
        title: each.title,
        imageUrl: each.image_url,
        avatarUrl: each.avatar_url,
        author: each.author,
        topic: each.topic,
      }))

      setBlogsData(fetchData)
    }
    funName()
  }, [])
  return (
    <div className="blog-list-container">
      {blogsData.map(item => (
        <BlogItem blogData={item} key={item.id} />
      ))}
    </div>
  )
}

export default BlogsList
