import React from "react";
import Post from './Post/Post';
import Mp from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className={Mp.cont}>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='Hi, how are you?' likesCount=' 0'/>
        <Post message="It's my first post" likesCount=' 23'/>
      </div>
    </div>
  )
}
export default MyPosts;