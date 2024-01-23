import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleProduct from "../singleproduct/singleproduct";
import { Item } from "../../models/product";
import { Box, CircularProgress } from "@mui/material";
import { fetchProducts } from "../../redux/products/products.action";

const Product = () => {

  // getting prodcuts and dispatching actions
  const articles = useSelector((state: any) => state.productsReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    // Displaying products
    <div className="ui grid container">
      {articles?.length > 0 ? (
        articles?.map((product: Item) => <SingleProduct product={product} />)
      ) : (
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
      )}
    </div>
  );
};

export default Product;
