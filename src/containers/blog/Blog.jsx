import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">There&apos;s a lot happening <br /> Stay updated with our latest blogs.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Aug 16, 2024" text="How AI is Shaping the Future" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Aug 16, 2024" text="What&apos;s Next for Artificial Intelligence" />
        <Article imgUrl={blog03} date="Aug 16, 2024" text="How AI is Enhancing Cybersecurity in the Digital Era?" />
        <Article imgUrl={blog04} date="Aug 16, 2024" text="The Evolution of AI From Concept to Reality" />
        <Article imgUrl={blog05} date="Aug 16, 2024" text="How AI is Enhancing Cybersecurity in the Digital Era?" />
      </div>
    </div>
  </div>
);

export default Blog;
