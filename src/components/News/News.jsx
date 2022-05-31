import React from 'react';

import s from './News.module.css';

const News = () => {
    return (
        <div className={s.them}>
            <div>
                Happy New Year!!!!! 2022
            </div>
            <img className={s.imsize} src="https://naked-science.ru/wp-content/uploads/2017/12/field_image_gettyimages-sb10069274b-004.jpg"/>
        </div>
    );
}

export default News;