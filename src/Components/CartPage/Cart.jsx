import "./cart.css";
import { getImageUrl } from "../../utils/utils";
const Cart = () => {
  return (
    <>
      <div className="p-3 px-24 flex brand-icons justify-between align-center hr">
        <div>
          <img
            src={getImageUrl(`headerImages/brand_logo.png`)}
            alt="z brand_logo"
          />
        </div>
        <div className="flex justify-center">
          <input
            className="input px-5 outline-0 rounded-full"
            type="text"
            placeholder="Search"
          />
          <button className=" bg-green py-2 p-3 rounded-full">
            <img
              src={getImageUrl(`headerImages/search-normal.png`)}
              alt="search_icon"
            />
          </button>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};
export default Cart;
