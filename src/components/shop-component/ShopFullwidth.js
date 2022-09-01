import './ShopFullwidth.scss'
import Card from '../home component/Card'
import Filtering from './Filtering'


const ShopFullwidth = () => {
  return (

    <div className="ShopFullwidth">
      <div className="Filter-cont">
        <div className="Filter-cont__title">
          <h3>Departments</h3>
        </div>
        <div className="Filter-cont__list">
          <ul>
            <li>All Departments</li>
            <li>Bread</li>
            <li>Fastfood</li>
            <li>Fresh Meat</li>
            <li>Ocean Foods</li>
            <li>Oranges</li>
            <li>Organic Drinks </li>
            <li>Vegetables</li>
          </ul>
        </div>
        <div className="Filter-cont__title">
          <h3>Popular Tags</h3>
        </div>
      </div>
      <div className="Shop-cont">
        <div className="Shop-cont__title">
          <h3>Shop Grid Fullwidth</h3>
          <Filtering />
        </div>
        <div className="Shop-cont__cards">
          <Card />
        </div>
        <div className="Shop-cont__featured">
          <h3 className="featured__title">Featured Products</h3>
          <div className="featured__products">
            <div>
              <div>
                <img src="https://ogami-react.vercel.app/assets/images/products/1.png" alt="" />
              </div>
              <div>
                <p>Fresh Grapes</p>
                <p>$6.99<span>$9.99</span></p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://ogami-react.vercel.app/assets/images/products/2.png" alt="" />
              </div>
              <div>
                <p>Green Chrusanthemum</p>
                <p>$5.99<span></span></p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://ogami-react.vercel.app/assets/images/products/3.png" alt="" />
              </div>
              <div>
                <p>Mustard Australia</p>
                <p>$29.00<span></span></p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://ogami-react.vercel.app/assets/images/products/4.png" alt="" />
              </div>
              <div>
                <p>Grouped Product</p>
                <p>$15.00<span>$17.00</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopFullwidth;