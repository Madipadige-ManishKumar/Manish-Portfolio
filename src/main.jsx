import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor.jsx'
import DotGrid from './blocks/Backgrounds/DotGrid/DotGrid.jsx'
import LetterGlitch from './blocks/Backgrounds/LetterGlitch/LetterGlitch.jsx'
import ClickSpark from './blocks/Animations/ClickSpark/ClickSpark.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <DotGrid/>
 
      <App />
      
  </StrictMode>,
)
