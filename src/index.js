import React from 'react';
import { createRoot } from 'react-dom/client';

import './main/Calculator.css';
import './index.css';
import './components/button.css'
import './components/display.css'

import Calculator from './main/Calculator.jsx'

const el = document.getElementById('root');
const root = createRoot(el)

root.render(
  <>
    <h1>Calculadora</h1>
    <Calculator />
  </>
);