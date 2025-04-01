import React from 'react'
import "../footer/footer.scss"
import outlook from "../file/contact/icons8-ms-outlook-96.png"
import gmail from "../file/contact/icons8-gmail-96.png"
import linkedin from "../file/contact/icons8-linkedin-96.png"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer id='footer'>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Hassan MOHAMMADI</h2>
          <p>Building the future, one line of code at a time.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to={"/"} className='footer-btns'>Home</Link></li>
            <li><Link to={"/About"} className='footer-btns'>About</Link></li>
            <li><Link to={"/Contact"} className='footer-btns'>Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Contact me:</h3>
          <div className="social-icons">
              <Link><img src={outlook} alt="Outlook" className='social-img'/></Link>
              <Link><img src={gmail} alt="Gmail" className='social-img'/></Link>
              <Link><img src={linkedin} alt="Linkedin" className='social-img'/></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Rights for this website Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer