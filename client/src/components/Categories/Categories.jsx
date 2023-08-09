import { Link } from 'react-router-dom'
import './Categories.scss'
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://stylegirlfriend.com/wp-content/uploads/2022/04/city-casual-date-outfit.jpg?width=1080"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://www.clairescloset.lk/claires_media/2023/03/01-6.jpg"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20230623/BbG2/649555e6eebac147fcd18547/-473Wx593H-464918983-blue-MODEL.jpg"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.shgcdn.com/866fdf71-1f1a-4d3d-837f-f1db39f3411f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="img"
              />
              <button>
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {' '}
              <img
                src="https://img.freepik.com/premium-photo/men-s-accessories-outfit-old-wood-background_63097-1333.jpg?w=2000"
                alt="img"
              />
              <button>
                <Link className="link" to="/products/1">
                  Accesories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {' '}
          <img
            src="https://cdn.shopify.com/s/files/1/1954/4975/files/piloti-driving-shoes-website-low_top.jpg?v=1679517093"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
