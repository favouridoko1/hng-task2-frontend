import "./cart.css";
import { getImageUrl } from "../../utils/utils";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
    < Navbar/>
      <div className="flex items-start justify-evenly checkOutParentContainer flex-wrap">
        <ul className="m-6 yourCartContainer">
          <li className="flex items-center bdBottom">
            <figure>
              <img
                onClick={() => navigate("/")}
                src={getImageUrl("headerImages/arrow-left.png")}
                alt=""
                className="font-light mr-2 text-grey cursor-pointer"
              />
            </figure>
            <h2 className="text-xl text-topSellin text-nowrap">
              Your Cart
              <span className="ml-80 text-base text-fontColor">(3)</span>
            </h2>
          </li>
          <table className="text-sm font-semibold text-black">
            <tr>
              <td className="flex items-center">
                <figure>
                  <img src={getImageUrl("headerImages/Image.png")} alt="" />{" "}
                </figure>
                <span className="">Michelin Primacy MXM4</span>
              </td>
              <td className="text-fontColor font-light ">x</td>
            </tr>
            <tr>
              <td className="text-filterFont font-normal">
                <span className="text-fontColor font-light">2x</span> $80.00
              </td>
              <td>$160.00</td>
            </tr>
            <tr>
              <td>Toyo Proxes 4 Plus</td>
              <td className="text-fontColor font-light">x</td>
            </tr>
            <tr>
              <td className="text-filterFont font-normal">
                <span className="text-fontColor font-light">1x</span> $30.00
              </td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Michelin Premier LTX</td>
              <td className="text-fontColor font-light">x</td>
            </tr>
            <tr>
              <td className="text-filterFont font-normal">
                <span className="text-fontColor font-light">1x</span> $60.00
              </td>
              <td>$60.00</td>
            </tr>
            <hr />
            <tr>
              <td className="text-fontColor font-light">Subtotal</td>
              <td>$250.00</td>
            </tr>
            <hr />
            <tr>
              <td className="text-topSelling text-sm font-normal">TOTAL</td>
              <td className="text-red text-xl font-normal">$250.00</td>
            </tr>
            <hr />
          </table>
        </ul>
        <div className="borders rounded-xl my-4 checkoutButtonContainer p-4">
          <ul className="text-sm font-semibold text-black flex justify-between">
            <li>
              <li className="text-fontColor font-light my-3">Subtotal</li>
              <li className="text-fontColor font-light my-3">Discount</li>
              <li className="text-fontColor font-light my-3">Shipping Costs</li>
              <li className="text-topSelling font-bold my-3">TOTAL</li>
            </li>
            <li>
              <li className="my-3">$250.00</li>
              <li className="my-3">$250.00</li>
              <li className="my-3">$10.00</li>
              <li className="my-3">$260.00</li>
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
          <p className="font-medium text-fontColor">
            Get free <span className="text-topSelling">shipping</span> for
            orders over <span className="text-red font-normal">$1000.00</span>
          </p>
          <Link className="text-topSelling underline" to="/checkout">
            Continue Shoping
          </Link>
          <div className="my-2  text-white">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-fontColor px-32 py-3 rounded-3xl borders mb-2 checkoutBtn"
            >
              Checkout
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
        <div className="mr-52 mb-6 deliverInfoContainer">
          <div className="flex justify-between">
            <h2 className="text-green text-sm font-medium text-nowrap">
              Delivery
            </h2>
            <h2 className="text-green text-sm font-medium text-nowrap">
              Free Returns
            </h2>
          </div>
          <ul className="flex gap-4 deliveryInfo ">
            <li className="borders p-4 font-normal w-52 in">
              <figure>
                <img
                  src={getImageUrl("headerImages/transaction-minus.png")}
                  alt="" className="p-3 rounded-3xl bg-grey"
                />
                <br />
                <figcaption>
                  <span className="text-topSelling text-lg">
                    Order by 10pm for free next day delivery on order over $100
                  </span>
                  <br />
                  <br />
                  <span className="text-base">
                    We deliver Monday to Saturday - excluding Holidays
                  </span>
                </figcaption>
              </figure>
            </li>
            <li className="borders p-4 font-normal w-52 in">
              <figure>
                <img
                  src={getImageUrl("headerImages/box-time.png")}
                  alt="" className="p-3 rounded-3xl bg-grey"
                />
                <br />
                <figcaption>
                  <span className="text-topSelling text-lg">
                    Free next day delivery to stores.
                  </span>
                  <br />
                  <br />
                  <span className="text-base">
                    Home delivery is $4.99 for orders under $100 and is Free for all orders over $100
                  </span>
                </figcaption>
              </figure>
            </li>
            <li className="borders p-4 font-normal w-52 in">
              <figure>
                <img
                  src={getImageUrl("headerImages/truck-time.png")}
                  alt="" className="p-3 rounded-3xl bg-grey"
                />
                <br />
                <figcaption>
                  <span className="text-base">
                    Home delivery is $4.99 for orders under $100 and is Free for all orders over $100
                  </span>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Cart;
