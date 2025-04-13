import React from 'react';
 
const Blog = ({blog}) => {
    
    return (
        <div className='border-2 border-b-blue-400 p-4 my-4 rounded-xl'>
            <img src={blog.thumbnail} alt="" />
            <h3>{blog.title}</h3>

        </div>
    );
};

export default Blog;