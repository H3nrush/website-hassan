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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.014231114501!2d-0.5549208226107295!3d44.86200507341468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552891a2c84faf%3A0x8c835032fab58d20!2s12%20Quai%20du%20S%C3%A9n%C3%A9gal%2C%2033300%20Bordeaux!5e0!3m2!1sen!2sfr!4v1743199676794!5m2!1sen!2sfr" width="100%" title='map' height="auto" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <h5 className='i-forcontact'>you can contact me by sending letters also :</h5>
        <address className='Address'>12 quai du senegal , apt 003 , 33300 Bordeaux</address>
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