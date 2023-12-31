import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import './Cart.scss'

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://cdn.cafecoton.com/Delivery/Public/Image/600x-1/pr-t-shirt-andrew-1-e23_1.jpeg',
      img2: 'https://cdn.endource.com/image/s3-884c6162a7c2550c266dbce364ab2ff9/detail/mango-stretch-cotton-t-shirt.jpg',
      title: 'Long Sleeve Graphic T-shirt',
      desc: 'some description about product',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://cdn.cafecoton.com/Delivery/Public/Image/600x-1/pr-t-shirt-andrew-1-e23_1.jpeg',
      img2: 'https://cdn.endource.com/image/s3-884c6162a7c2550c266dbce364ab2ff9/detail/mango-stretch-cotton-t-shirt.jpg',
      title: 'Long Sleeve Graphic T-shirt',
      desc: 'some description about product',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ]
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 30)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$124</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart </span>
    </div>
  )
}

export default Cart
