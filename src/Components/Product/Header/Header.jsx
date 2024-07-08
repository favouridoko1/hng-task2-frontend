import "../product.css";
import {getImageUrl} from '../../../utils/utils'
  const Header = () => {
  return (
    <div>
      <div className="bg-headerTop flex justify-center">
        <p className="text-white2 tracking-wider">
          LIMITED OFFER:30% OFF. Use RABBIT30 at Checkout.{" "}
          <span className="text-white">23:15:00</span>
        </p>
      </div>

      <div className="p-3 px-24 flex brand-icons justify-between align-center">
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
        <div className="flex align-center justify-center my-2">
          <div className="relative">
            <img
              src={getImageUrl(`headerImages/bag-2.png`)}
              alt=""
              className="keyIcon"
            />
            <p className="count">3</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
