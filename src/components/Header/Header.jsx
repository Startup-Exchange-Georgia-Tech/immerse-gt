import './Header.css'

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-logo-section">
        <img src='/spiral.png' className='header-logo'></img>
      </div>
      <div className='header-links'>
        <div className='header-link'>About</div>
        <div className='header-link'>Rules</div>
        <div className='header-link'>Schedule</div>
        <div className='header-link'>Tracks </div>
      </div>
    </div>
  )
}