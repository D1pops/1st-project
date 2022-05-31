import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img className={s.imgSize} src='https://wpapers.ru/wallpapers/nature/14231/1920x1080_%D0%9F%D0%B0%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2%D1%8B%D0%B9-%D1%80%D0%B0%D0%B9.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                <MyPosts/>
            </div>

        </div>
    );
}
export default Profile;