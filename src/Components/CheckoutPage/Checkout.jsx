import Navbar from "../Navbar/Navbar";
import { getImageUrl } from "../../utils/utils";
import { useNavigate, Link } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div></div>

      <div className="borders rounded-xl my-4 checkoutButtonContainer p-4">
        <ul className="text-sm font-semibold text-black flex justify-between">
          <li className="text-fontColor font-light my-3">
            <li className="my-3">Subtotal</li>
            <li>Shipping</li>
            <li className="my-3">Discount</li>
            <li className="my-3">Shipping Costs</li>
            <li className="text-topSelling font-bold my-3">TOTAL</li>
            <li className="mt-5">Email Money Transfer</li>
          </li>
          <hr />
          <li>
            <li className="my-3">$250.00</li>
            <li className="my-3">Lagos, Nigeria</li>
            <li className="my-3">$0.00</li>
            <li className="my-3">$10.00</li>
            <li className="my-3">$260.00</li>
            <li className="mt-7">
              <img
                src={getImageUrl("headerImages/Clip_path_group.png")}
                alt=""
              />
            </li>
          </li>
        </ul>
        <div className="flex my-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="h-12 px-2 outline-none borders rounded mr-3"
          />
          <button className="bg-lightGreen text-green text-sm font-medium rounded-full text-nowrap px-3">
            Apply Coupon
          </button>
        </div>
        <hr />
        <figure>
          <img
            src={getImageUrl("headerImages/Statusbar.png")}
            alt=""
            className="my-4"
          />
        </figure>
        <div className="font-medium text-fontColor">
          <p>I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this shipment is sent to an incorrect adress.</p>
          <br />
          <p>
            Sign me up to receive email updates and news (Optional)
          </p>
        </div>
        
        <div className="my-2  text-white">
          <button
            onClick={() => navigate("/checkout")}
            className="bg-fontColor px-32 py-3 text-nowrap rounded-3xl borders mb-2 checkoutBtn"
          >
            Place Order
          </button>
          <hr />
          <p className="text-fontColor text-sm mt-2">
            SECURE PAYMENTS PROVIDED BY
          </p>
          <figure className="flex gap-5 mx-3">
            <span className="my-4 p-2 borders">
              <img src={getImageUrl("headerImages/master_card.png")} alt="" />
            </span>
            <span className="my-4 p-2 borders">
              <img src={getImageUrl("headerImages/Visa.png")} alt="" />
            </span>
            <span className="my-4 p-2 borders">
              <img src={getImageUrl("headerImages/binace.png")} alt="" />
            </span>
            <span className="my-4 p-2 borders">
              <img
                src={getImageUrl("headerImages/Clip_path_group.png")}
                alt=""
              />
            </span>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
