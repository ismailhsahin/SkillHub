import { useNavigate } from "react-router-dom";

export default function Product(product) {
  const { id, price, image, title, description } = product.product;
  const navigate = useNavigate();
  return (
    <div className="card">
      <img className="image" src={image} alt=""></img>
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>${price}</h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Details
        </button>
      </div>
    </div>
  );
}
