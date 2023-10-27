import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import { blogComment, blogMedia } from '../../Constant/blogItems.js'

import './blog.scss'


function Blog() {

    return (
        <div className='blog flex justify-center '>
            <div className='container flex flex-wrap max-[1024px]:flex-col'>
                <section className='blog__comment flex flex-col w-1/2 gap-5 max-[1024px]:w-full'>
                    <h1 className='blog__comment--title uppercase pb-5 bold text-[1.5rem]'>BÌNH LUẬN PHIM</h1>
                    {
                        blogComment.map(blog => (
                            <article className='blog__comment--block cursor-pointer my-2 flex gap-3' key={blog.id}>
                                <div className='block__image w-2/5'>
                                    <img className='image  hover:opacity-[0.7] transition-opacity duration-300 ease-in-out' src={blog.imageUrl} alt={blog.title} />
                                </div>
                                <div className='block__content w-3/5'>
                                    <h2 className='block__content--title text-lg overflow-hidden'>{blog.title}</h2>
                                    <ul className='block__content--icon flex py-2'>
                                        <li className='likes bg-[#327fea] text-white rounded-[5px] px-[10px] mr-[10px] text-[13px]'>
                                            <button>
                                                <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff", }} /> {blog.likes}
                                            </button>
                                        </li>
                                        <li className='eyes bg-black bg-opacity-20 rounded-[5px] px-10px text-[13px] mr-[10px]'>
                                            <button>
                                                <FontAwesomeIcon icon={faEye} style={{ color: "#93969a", }} /> {blog.views}
                                            </button>
                                        </li>
                                        <li className='rating'>
                                            <button>
                                                <FontAwesomeIcon icon={faStar} style={{ color: "#fef501", }} /> {blog.rating + '/10'} ({blog.binding})
                                            </button>
                                        </li>
                                    </ul>
                                    <p className='block__content--paragraph overflow-hidden'>{blog.paragraph}</p>
                                </div>
                            </article>
                        ))
                    }
                </section>
                <section className='blog__comment flex flex-col w-1/2 gap-5 max-[1024px]:w-full'>
                    <h1 className='blog__comment--title pb-5 bold text-[1.5rem]'>BÌNH LUẬN PHIM</h1>
                    {
                        blogMedia.map(blog => (
                            <article className='blog__comment--block cursor-pointer my-2 flex gap-3' key={blog.id}>
                                <div className='block__image w-2/5'>
                                    <img className='image  hover:opacity-[0.7] transition-opacity duration-300 ease-in-out' src={blog.imageUrl} alt={blog.title} />
                                </div>
                                <div className='block__content w-3/5'>
                                    <h2 className='block__content--title text-lg overflow-hidden'>{blog.title}</h2>
                                    <ul className='block__content--icon flex py-2'>
                                        <li className='likes bg-[#327fea] text-white rounded-[5px] px-[10px] mr-[10px] text-[13px]'>
                                            <button>
                                                <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff", }} />Thích {blog.likes}
                                            </button>
                                        </li>
                                        <li className='eyes bg-black bg-opacity-20 rounded-[5px] px-10px text-[13px] mr-[10px]'>
                                            <button>
                                                <FontAwesomeIcon icon={faEye} style={{ color: "#93969a", }} />Eyes {blog.views}
                                            </button>
                                        </li>
                                    </ul>
                                    <p className='block__content--paragraph max-[640px]:whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]'>
                                        {blog.paragraph}
                                    </p>
                                </div>
                            </article>
                        ))
                    }
                </section>
            </div>
        </div >
    )
}
export default memo(Blog)