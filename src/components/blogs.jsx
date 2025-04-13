import React, { useEffect, useState } from 'react';
import Blog from './blogs/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    console.log(blogs)

    return (
        <div>
            <Blog blogs={blogs}></Blog>   
        </div>
    );
};

export default Blogs;