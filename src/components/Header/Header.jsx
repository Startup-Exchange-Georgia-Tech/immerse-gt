import './Header.css'
import { useState, useEffect } from 'react'

export default function Header() {

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className="Header">
      <div className="Header-logo-section">
        <img src='/spiral.png' className='header-logo'></img>
      </div>

      {width > 800 ? <div className='header-links'><div className='header-link'>About</div>
        <div className='header-link'>Rules</div>
        <div className='header-link'>Schedule</div>
        <div className='header-link'>Tracks</div>
        <div className='header-link'>FAQs</div>
        <div className='header-link'>Contact</div> </div> : null}


      <div className='header-apply'>
        <div className='header-apply-button'>Apply</div>
      </div>
    </div>
  )
}