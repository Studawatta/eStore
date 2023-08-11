import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'
import Cart from '../Cart/Cart'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* NAVBAR LEFT */}

        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        {/* NAVBAR CENTER */}

        <div className="center">
          <Link className="link" to="/">
            eStore
          </Link>
        </div>

        {/* NAVBAR RIGHT */}

        <div className="right">
          <div className="item">
            <Link className="link">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link">About</Link>
          </div>
          <div className="item">
            <Link className="link">Contact</Link>
          </div>
          <div className="item">
            <Link className="link">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
