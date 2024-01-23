import { Item } from "../../models/product";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }: { product: Item }) => {
  return (
    
    <div className="four wide column" key={product?.id}>
      <Link className="text-decoration" to={`/products/${product?.id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <div className="header">{product?.title}</div>
              <div className="meta price">$ {product?.price}</div>
              <div className="meta">{product?.category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
