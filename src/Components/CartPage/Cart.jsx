import "./cart.css";
import { getImageUrl } from "../../utils/utils";
import { useNavigate, Link } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-3 px-24 flex brand-icons justify-between align-center">
        <ul className=" menuIconContainer">
          <li>
            <img
              className="menuIcon hidden"
              src={getImageUrl(`headerImages/menu.png`)}
              alt=""
            />
          </li>
          <li>
            <img
              src={getImageUrl(`headerImages/brand_logo.png`)}
              alt="z brand_logo"
            />
          </li>
        </ul>
        <div className="flex justify-center inputContainer">
          <input
            className="input py-2 px-5 outline-0 rounded-full"
            type="text"
            placeholder="Search"
          />
          <button className="button flex justify-center items-center bg-green w-10 h-10 rounded-full">
            <img
              src={getImageUrl(`headerImages/search-normal.png`)}
              alt="search_icon"
            />
          </button>
        </div>
      </div>
      <ul className="flex text-sm text-filterFont bg-grey justify-center gap-12 py-5">
        <li className="text-topSelling flex ">
          <figure className="flex items-center">
            <img
              src={getImageUrl(`headerImages/bag.png`)}
              alt=""
              className="p-2 bg-headerTop rounded-3xl"
            />
            <figcaption>Shopping Cart</figcaption>
          </figure>
        </li>

        <li>
          <figure className="flex items-center">
            <img
              src={getImageUrl(`headerImages/wallet.png`)}
              alt=""
              className="p-2 bg-white rounded-3xl"
            />
            <figcaption>Checkout</figcaption>
          </figure>
        </li>
        <li>
          <figure className="flex items-center">
            <img
              src={getImageUrl(`headerImages/ticket-2.png`)}
              alt=""
              className="p-2 bg-white rounded-3xl"
            />
            <figcaption>Order Completed</figcaption>
          </figure>
        </li>
      </ul>
      <div className="flex items-start justify-evenly checkOutParentContainer">
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
              <span>
                <img
                  src={getImageUrl("headerImages/master_card.png")}
                  alt=""
                  className="my-4"
                />
              </span>
              <span>
                <img
                  src={getImageUrl("headerImages/Visa.png")}
                  alt=""
                  className="my-4"
                />
              </span>
              <span>
                <img
                  src={getImageUrl("headerImages/binace.png")}
                  alt=""
                  className="my-4"
                />
              </span>
              <span></span>
              <img
                src={getImageUrl("headerImages/Clip_path_group.png")}
                alt=""
                className="my-4"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
