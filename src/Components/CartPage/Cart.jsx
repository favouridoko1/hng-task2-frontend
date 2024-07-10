import "./cart.css";
import { getImageUrl } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-3 px-24 flex brand-icons justify-between align-center hr">
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
          <button className=" flex justify-center items-center bg-green w-10 h-10 rounded-full">
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
      <div>
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
            <h2 className="text-xl text-topSelling my-3">
              Your Cart{" "}
              <span className="ml-96 text-base text-fontColor">(3)</span>
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
              <td className="text-fontColor font-light">x</td>
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

            <tr className="bdBottom">
              <td className="text-filterFont font-normal">
                <span className="text-fontColor font-light">1x</span> $60.00
              </td>
              <td>$60.00</td>
            </tr>
            <tr className="bdBottom">
              <td className="text-fontColor font-light">Subtotal</td>
              <td>$250.00</td>
            </tr>
            <tr>
              <td className="text-topSelling text-sm font-normal">TOTAL</td>
              <td className="text-red text-xl font-normal">$250.00</td>
            </tr>
          </table>
        </ul>
        <div className="borders">
          <table>
            <tr></tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default Cart;
