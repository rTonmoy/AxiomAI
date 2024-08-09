import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Speech Recognition',
    text: 'AI can convert spoken language into text, enabling voice-activated assistants like Siri, Alexa, and Google Assistant, as well as transcription services.',
  },
  {
    title: 'Fraud Detection',
    text: 'AI can identify unusual patterns in transactions that may indicate fraud, helping financial institutions protect against unauthorized activities.',
  },
  {
    title: 'Healthcare Diagnostics',
    text: 'AI can assist doctors in diagnosing diseases by analyzing medical images, lab results, and patient histories, leading to more accurate and timely diagnoses.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now Realize It. Step into Tomorrow Today & Make AI Happen.</h1>
      <p>Request Early Access and Start Your AI Journey Today.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
