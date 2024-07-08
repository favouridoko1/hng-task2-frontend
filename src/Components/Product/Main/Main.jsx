import { getImageUrl } from "../../../utils/utils";
import FilterSection from "../FilterSection/FilterSection";
import "../product.css";
import ShopSection from "../ShopSection/ShopSection";
const Main = () => {
  return (
    <>
    <div className="flex justify-around font-semibold bg-grey py-4">
      <div className="flex">
        <img src={getImageUrl(`headerImages/truck-fast.png`)} alt="" className="px-5" />
        <p>Reliable Shipping</p>
      </div>
      <div className="flex">
        <img src={getImageUrl(`headerImages/security-time.png`)} alt="" className="verticleLine"/>
        <p className="text-nowrap">You're Safe with Us</p>
      </div>
      <div className="flex">
        <img src={getImageUrl(`headerImages/coin.png`)} alt="" className="verticleLine" />
        <p>Best Quality & Pricing</p>
      </div>
    </div>
      <div className="flex">
            <FilterSection />
            <ShopSection />
      </div>
    </>
  )
}

export default Main