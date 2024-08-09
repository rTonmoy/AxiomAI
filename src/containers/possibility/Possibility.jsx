import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access and Start Your AI Journey Today</h4>
      <h1 className="gradient__text">Endless possibilities <br /> beyond imagination.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit a quisquam excepturi quo amet minima officia hic, dignissimos sint non? Quia, quos magnam neque quod quo delectus vel amet?</p>
      <h4>Start Your AI Journey Today</h4>
    </div>
  </div>
);

export default Possibility;
