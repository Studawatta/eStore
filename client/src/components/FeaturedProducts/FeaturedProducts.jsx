import Card from '../Card/Card'
import './FeaturedProducts.scss'
const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://cdn.cafecoton.com/Delivery/Public/Image/600x-1/pr-t-shirt-andrew-1-e23_1.jpeg',
      img2: 'https://cdn.endource.com/image/s3-884c6162a7c2550c266dbce364ab2ff9/detail/mango-stretch-cotton-t-shirt.jpg',
      title: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://godwincharli.com/cdn/shop/collections/Group_6b32f689-8b24-4989-a342-7eb3b4099301.jpg?v=1649759449',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://imgs7.luluandsky.com/catalog/product/8/9/8907884769813_1.jpg',
      title: 'Skirt',
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://wombatleather.co.uk/wp-content/uploads/2014/10/wombat-original-copy-2.jpg',
      title: 'Hat',
      oldPrice: 19,
      price: 12,
    },
  ]
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
