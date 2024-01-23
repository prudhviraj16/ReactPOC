import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Item } from "../../models/product";
import { Box, CircularProgress } from "@mui/material";
const Productdetail = () => {
  const [product, setProduct] = useState<Item>();
  const { id } = useParams();

  // getting single product as per the selected 
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    // displaying a single product
    <div className="ui grid container" key={product?.id}>
      {product === undefined ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
            width: "100vw",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="ui segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product?.image} alt=""/>
              </div>
              <div className="column rp">
                <h1>{product?.title}</h1>
                <h2>
                  <a className="ui teal tag label" >${product?.price}</a>
                </h2>
                <h3 className="ui brown block header">{product?.category}</h3>
                <p>{product?.description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Productdetail;
