import * as React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Article = (props) => {
    // const imagecontent = props.imagecontent;
    const meta = props.meta;
    const meta_second = props.meta_second;
    const title = props.title;
    const content = props.content;
    // const avatarAutor = props.avatarAutor;
    const detailAutor = props.detailAutor;
    const postAutor = props.postAutor;

    return (
        <article className='article'>
            <header className='header-entry'>
                <div className='photo'>
                    <Link to='/Javascript-Bootcamp-2022'>
                        <img
                            className='image-content'
                            src={`Images/Box_Thumbnails/${props.imagecontent}`}
                            alt='thumbs'
                        />
                    </Link>
                </div>
                <div className='container-header'>
                    <div className='meta-header'>{meta}</div>
                    <div className='meta-header-second'>
                        {meta_second}
                        {/* {() => {
                        let metaSecond =
                            document.getElementsByClassName(
                                'meta-header-second'
                            );
                        if (meta_second === '') {
                            return metaSecond.classList.add('hidden');
                        }
                    }} */}
                    </div>
                </div>

                <h3 className='meta-Title'>{title}</h3>
            </header>
            <div className='post-content'>
                <p className='content-of-card'>{content}</p>
            </div>
            <div className='post-content'>
                <div className='avatar-autor'>
                    <img
                        className='image-avatar-autor'
                        src={`Images/Autor/${props.avatarAutor}`}
                        alt='avatar'
                    />
                </div>
                <div className='details-autor'>
                    <Link to='#'>{detailAutor}</Link>
                    <p className='post-autor'>{postAutor}</p>
                </div>
            </div>
        </article>
    );
};
export default Article;
