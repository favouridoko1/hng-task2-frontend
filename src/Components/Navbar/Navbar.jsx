import { getImageUrl } from "../../utils/utils";
import '../CartPage/cart.css'
const Navbar = () => {
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
    </>
  );
};

export default Navbar;
