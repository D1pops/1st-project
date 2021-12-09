import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img src='https://3dnews.ru/assets/external/illustrations/2021/09/25/1049888/mars.jpg'/>
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