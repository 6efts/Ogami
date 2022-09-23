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

      </div>
    </div>
  )
}

export default ShopFullwidth;