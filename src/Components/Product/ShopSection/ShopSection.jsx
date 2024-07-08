import { getImageUrl } from "../../../utils/utils";
const ShopSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-28 Tyrelayout">
        <h2 className="text-2xl py-2 borderBottom">Tyres</h2>
        {/* <hr className="hr" /> */}
        <p className="text-base borderBottom px-8 py-2 leading-normal">
          Choosing the right tyre is crucial for vehicle performance, safty and
          comfort. Our online store offers comprehensive selection of high
          quality tyres from top brands such as Michelin, Bridgestone, Goodyear,
          Continental, Pirelli, and more. Whether you drive a sedan, SUV, or
          sports car we have a perfect tyres to suit your specific needs and
          preferences. Our tyre inventory includes option for various driving
          conditions and requirement. From all-seasoned tyres that offers
          reliable performance year-round to high performance tyre designed for
          superior grid and handling, we have it all. We also offer eco-friendly
          tyres with low rolling resistence for improved fuel effeciency and
          reduced enviroment impact.
        </p>
      </div>
      <div className="text-2xl bg-grey mx-28 rounded">
        <h2 className="p-2 font-medium px-8 text-topSelling">Top Selling</h2>
        <div className="flex justify-around">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
            <img src={getImageUrl(`headerImages/tyre_dark_right.png`)} alt="" />
            </div>
            <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8 bg-white">
              <p className="text-fontColor text-xl">Michelin</p>
              <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Michelin Primacy MXM4</h2>
              <h4 className="font-bold text-headerTop text-sm">2020 BMW 3 Series</h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">225/55r17</p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 line-through">$100.00</p>
                <p className="mx-1 text-red">80.00</p>
              </div>
              <button className="bg-green rounded-3xl text-white font-medium px-6 h-10">Add to cart</button>
            </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
            <img src={getImageUrl(`headerImages/three-tyre.png`)} alt="" />
            </div>
            <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8 bg-white">
              <p className="text-fontColor text-xl">Falken</p>
              <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Falken Ziex ZE950 A/S</h2>
              <h4 className="font-bold text-headerTop text-sm">2013 Nisson Altima</h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">215/55R17</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img src={getImageUrl(`headerImages/star.png`)} alt="" />
                  <figcaption className="px-1 text-black">4.6/5</figcaption>
                </figure>
                <p className="keyIcon">135 <span>Review</span></p>

              </div>
              <div className="flex text-base">
                <p className="mx-1 line-through">$100.00</p>
                <p className="mx-1 text-red">80.00</p>
              </div>
              <button className="bg-green rounded-3xl text-white font-medium px-6 h-10">Add to cart</button>
            </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyre_light_front.png`)}
              alt=""
            />
            </div>
            <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8 bg-white">
              <p className="text-fontColor text-xl">Michelin</p>
              <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Michelin Primacy MXM4</h2>
              <h4 className="font-bold text-headerTop text-sm">2020 BMW 3 Series</h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">225/55r17</p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 line-through">$100.00</p>
                <p className="mx-1 text-red">80.00</p>
              </div>
              <button className="bg-green rounded-3xl text-white font-medium px-6 h-10">Add to cart</button>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopSection;
