import './ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price} €</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;