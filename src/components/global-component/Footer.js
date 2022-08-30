import './Footer.scss';
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterestP } from 'react-icons/fa'


const Footer = () => {
  return (
    <>

      <div className="Footer">
        <div className="Footer-info">
          <li>
            <img src="https://ogami-react.vercel.app/assets/images/logo.png" alt="ogami" />
          </li>
          <li>Address: 60-49 Road 11378 New York</li>
          <li>Phone: +65 11.188.888</li>
          <li>Email: info.deercreative@gmail.com</li>
          <ul>
            <li>
              <FaFacebookF
                size={20}
                color='#707070'
              />
            </li>
            <li>
              <FaTwitter
                size={20}
                color='#707070'
              />
            </li>
            <li>
              <FaLinkedin
                size={20}
                color='#707070'
              />
            </li>
            <li>
              <FaPinterestP
                size={20}
                color='#707070'
              />
            </li>
          </ul>
        </div>
        <div className="Footer-links">
          <div>
            <p>Information</p>
            <li>About us</li>
            <li>Check out</li>
            <li>Contact</li>
            <li>Service</li>
          </div>
          <div>
            <p>My account</p>
            <li>Account</li>
            <li>Contact</li>
            <li>Shop Cart</li>
            <li>Tracking Order</li>
          </div>
        </div>
        <div className="Footer-subs">
          <p className="Footer-subs__title">Join Our Newsletter Now</p>
          <p>Get E-mail updates about our latest shop and special offers.</p>
          <form>
            <input type="text" placeholder="Enter your email" />
            <button type="button">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="Footer-copyright">
        <p> Copyright © 2019 Ogami - All Rights Reserved.</p>
      </div>
    </>
  )

}

export default Footer;
