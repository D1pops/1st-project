import React from "react";
import Pt from './Post.module.css'

const Post = (props) => {

  return (
    <div>
      <div className={Pt.post}>
        <img src='https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg' />
        { props.message}
      </div>  
        <span>like</span> 
        { props.likesCount }  
    </div>
  );
}
export default Post;