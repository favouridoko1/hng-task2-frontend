import { getImageUrl } from "../../../utils/utils";
import FilterSection from "../FilterSection/FilterSection";
import "../product.css";
import ShopSection from "../ShopSection/ShopSection";
const Main = () => {
  return (
    <>
    <div className="assuranceContainer flex justify-around font-semibold bg-grey py-4">
      <div className="flex securityAssurance">
        <figure>

        <img src={getImageUrl(`headerImages/truck-fast.png`)} alt="" className="px-5" />
        </figure>
        
        <p>Reliable Shipping</p>
      </div>
      <div className="flex securityAssurance">
        <figure>
        <img src={getImageUrl(`headerImages/security-time.png`)} alt="" className="verticleLine"/>

        </figure>
        <p className="text-nowrap youAreSafeParagraph">You're Safe with Us</p>
      </div>
      <div className="flex securityAssurance">
        <figure>
        <img src={getImageUrl(`headerImages/coin.png`)} alt="" className="verticleLine" />

        </figure>
        <p>Best Quality & Pricing</p>
      </div>
    </div>
      <div className="sectionContainer">
            <FilterSection />
            <ShopSection />
      </div>
    </>
  )
}

export default Main