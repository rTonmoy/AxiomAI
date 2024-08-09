import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is AxiomAI" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae dolor nihil illum illo iure aut aperiam, amet odio quis in earum nam, nesciunt eius ipsam blanditiis neque debitis voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Shaping the Future with Machine Intelligence</h1>
      <p>Discover the Smarter World</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Data Analysis" text=" AI can process and analyze large datasets quickly, uncovering patterns, trends, and insights that might be missed by human analysis." />
      <Feature title="Automation" text="AI can automate repetitive tasks, from simple data entry to complex workflows, improving efficiency and reducing human error." />
      <Feature title="Robotics" text="AI powers robots to perform tasks that range from simple, repetitive work to complex operations in industries." />
    </div>
  </div>
);

export default WhatGPT3;
