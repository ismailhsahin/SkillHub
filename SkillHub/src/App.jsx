import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import ProductList from "./components/ProductList";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";
function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          className="drawer"
          sx={{ padding: "20px" }}
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div>
                  <div className="flex-row" style={{ padding: "20px" }}>
                    <img
                      style={{ marginRight: "5px" }}
                      src={product.image}
                      width={50}
                      height={50}
                    />
                    <p style={{ width: "320px", marginRight: "5px" }}>
                      {product.title}({product.count})
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        marginRight: "10px",
                        width: "60px",
                      }}
                    >
                      ${product.price}
                    </p>
                    <button
                      style={{
                        padding: "5px",
                        borderRadius: "5px",
                        backgroundColor: "rgb(185,76,76)",
                        border: "none",
                        color: "#fff",
                        width: "60px",
                      }}
                    >
                      remove
                    </button>
                  </div>
                </div>
              );
            })}

          <div>
            <p style={{ textAlign: "center" }}>Total Amount : {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
