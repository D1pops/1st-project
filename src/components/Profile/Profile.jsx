import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import C from './Profile.module.css'

const Profile = () => {
  return (
    <div className={C.content}>
      <div>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
      </div>
      <div>
        <MyPosts />
      </div>
      <div>
        ava + description
      </div>
    </div>
  );
}
export default Profile;