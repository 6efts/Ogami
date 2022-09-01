import ImageSlider from "./ImageSlider";
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterestP } from 'react-icons/fa'
import './ProductDetail.scss'

const ProductDetail = () => {

  const slides = [
    { url: 'https://ogami-react.vercel.app/assets/images/products/1.png', title: 'Fresh Grapes' },
    { url: 'https://ogami-react.vercel.app/assets/images/products/2.png', title: 'Fresh Grapes' },
    { url: 'https://ogami-react.vercel.app/assets/images/products/3.png', title: 'Fresh Grapes' },

  ]


  return (
    <div className="Product-Detail">
      <div className="Product-Detail__images">
        <ImageSlider slides={slides} />
      </div>
      <div className="Product-Detail__content">
        <div className="content">
          <span>BREAD</span>
          <h3>{slides[0].title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
        </div>
        <div className="information">
          <div className="information__tags">
            <p>SKU:<span> A1359</span></p>
            <span>|</span>
            <p>Categories:<span> Fastfood</span></p>
            <span>|</span>
            <p>Tag:<span> Food, Organic</span></p>
          </div>

          <ul>
            <span>Share link:</span>
            <li>
              <FaFacebookF
                size={18}
                color='#b2b2b2'
              />
            </li>
            <li>
              <FaTwitter
                size={18}
                color='#b2b2b2'
              />
            </li>
            <li>
              <FaLinkedin
                size={18}
                color='#b2b2b2'
              />
            </li>
            <li>
              <FaPinterestP
                size={18}
                color='#b2b2b2'
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="Product-Detail__purchase"></div>
    </div>
  )

}

export default ProductDetail;
