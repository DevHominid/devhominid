import React from 'react';
import Slider from '../../shared/components/Slider/Slider';
import styles from './About.css';
import spaceman2 from '../../img/spaceman2.svg';

const textItems = [
  {
    id: 1,
    paras: [
      { id: 1, text: 'My name is Dylan. I used to tweak genetic code in the laboratory, and now I turn brain-children into code on my computer.' },
      { id: 2, text: 'A wise astronaut once said: "Science provides an understanding of a universal experience. Arts provide a universal understanding of a personal experience."' },
      { id: 3, text: 'I find that software development provides a healthy opportunity for both, and this union of science and arts is a large part of why I love to do what I do - build data-driven applications and tools designed with human-centric principles in mind.' }
    ]
  },
  {
    id: 2,
    paras: [
      { id: 1, text: 'I provide design, development, and deployment of full-stack applications and software solutions. While JavaScript is where my skills shine the brightest, I\'m a firm believer in choosing the right tools for the job, even if that means having to learn new tech on the fly.' },
      { id: 2, text: 'I\'m always open to opportunities for collaboration, and frequently on the lookout for side projects to work on. I\'m particularly interested in solutions that focus on biology, genomics, or athletic performance.' }
    ]
  },
  {
    id: 3,
    paras: [
      { id: 1, text: 'Learning is my favorite pastime. Thanks to technology, there is never a shortage of concepts to learn... and thanks to the tech community, there is never a shortage of teachers to share what they know. When I\'m not on my computer, I\'m letting my body and retinas recover by wandering around outside.' },
      { id: 2, text: 'Thanks for stopping by, and thank you for being a part of the incredible, beautiful, collective body of knowledge we call science. None of us would be here without you.' }
    ]
  }
];

const About = () => (
  <div className={styles.About}>
    <img src={spaceman2} alt="spaceman" />
    <Slider counterAlign="center" header="Hello World" items={textItems} />
  </div>
);

export default About;
