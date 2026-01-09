import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import  './contact.scss'
import telegram from '../file/contact/icons8-telegram-96.png'
import youtube from '../file/contact/icons8-youtube-96.png'
import instagram from '../file/contact/icons8-instagram-96.png'
import discord from '../file/contact/icons8-discord-96.png'
import facebook from '../file/contact/icons8-facebook-96.png'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <Header />
    <main id="contact">
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5654.001246387395!2d-0.5725781226101342!3d44.8826362720517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552853c5c9ff93%3A0x127589da9714c72b!2s16%20Av.%20des%2040%20Journaux%2C%2033300%20Bordeaux!5e0!3m2!1sen!2sfr!4v1767999113313!5m2!1sen!2sfr" width="100%" title='map' height="auto" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <h5 className='i-forcontact'>you can contact me by sending letters also :</h5>
        <address className='Address'>16 avenue des 40 journaux 33300 bordeaux , Etage : 3 , APT : 5328 </address>
        <p className='i-social'>also take a look to my social media profiles :</p>
        <div id='social-links'>
            <Link to={"https://t.me/mikkarra"}><img src={telegram} alt="" className='social-img' /></Link>
            <Link to={"https://www.youtube.com/@Titans313"}><img src={youtube} alt="" className='social-img' /></Link>
            <Link to={"https://www.instagram.com/mikkarra_?igsh=MWtncjc4d3U1YnBmcw%3D%3D&utm_source=qr"}><img src={instagram} alt="" className='social-img' /></Link>
            <Link to={"https://www.discordapp.com/users/h3nrush"}><img src={discord} alt="" className='social-img' /></Link>
            <Link to={"https://www.facebook.com/share/155pprnHNp/?mibextid=wwXIfr"}><img src={facebook} alt="" className='social-img' /></Link>
        </div>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default Contact
