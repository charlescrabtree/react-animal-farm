import React from 'react';
import './Main.css';
import backgroundImage from '../../background.png';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';

export default function Main() {
  return <main style={{ backgroundImage: `url(${backgroundImage})` }}>
    {animals.map((item) => (
      <Animal key={item.name} {...item} />
    ))}
  </main>;
}
