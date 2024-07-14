// import { getImageUrl } from "../../../utils/utils";
import { useNavigate } from 'react-router-dom';

const ShopSectionBottom = () => {
  // const navigate = useNavigate()
  return (
    <>
      {/* <div className="flex bg-white py-3 justify-between items-center images ">
        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyre_regular.png`)}
              alt=""
              className="px-8 py-3 bg-grey rounded"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-">
            <p className="text-fontColor text-sm">{}</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Michelin Premier LTX</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                2019 Lexus RX
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">235/55R20</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$60.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyrelight_left.png`)}
              alt=""
              className="px-8 py-3 bg-grey"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8">
            <p className="text-fontColor text-sm">Yokohama</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Yokohama AVID Ascend GT</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                2014 Subaru Outback
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">225/60R17</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$20.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyre_dark_left.png`)}
              alt=""
              className="bg-grey"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8">
            <p className="text-fontColor text-sm">Continental</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Continental TrueContact Tour</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                2017 Toyota Camry
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">215/55R17</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$40.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-white py-3 justify-between items-center">
        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyreBold_left.png`)}
              alt=""
              className="px-8 py-3 bg-grey rounded"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-">
            <p className="text-fontColor text-sm">Pirelli</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Pirelli P Zero</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2 tex-nowrap bg-grey">
                2018 Mercedes-Benz GLC
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">235/55R19</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$70.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyre_lighter_left.png`)}
              alt=""
              className="px-8 py-3 bg-grey"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8">
            <p className="text-fontColor text-sm">Hankook</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base text-nowrap">Hankook Ventus V12 evo2</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                2020 Lexus ES
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">225/45R18</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$20.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyre_lighter_left.png`)}
              alt=""
              className="px-8 py-3 bg-grey"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8">
            <p className="text-fontColor text-sm">Continental</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base text-wrap">Continental TrueContact Tour</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                2017 Toyota Camry
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">215/55R17</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$40.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        </div>




        <div className="flex bg-white py-3 justify-between items-center">
        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyreBold_left.png`)}
              alt=""
              className="px-8 py-3 bg-grey rounded"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-">
            <p className="text-fontColor text-sm">Falken</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Falken Azenis FK510</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                2019 Lexus RX
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">235/55R20</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$70.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyre_lighter_left.png`)}
              alt=""
              className="px-8 py-3 bg-grey"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8">
            <p className="text-fontColor text-sm">Pirelli</p>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base">Pirelli Cinturato P7</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
              017 Toyota Camry
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">225/45R17</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$20.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center cards">
          <div className="flex justify-center">
            <img
              src={getImageUrl(`headerImages/tyre_lighter_left.png`)}
              alt=""
              className="px-8 py-3 bg-grey"
            />
          </div>
          <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8">
            <p className="text-fontColor text-sm">Bridgestone</p>
            <div className="flex flex-col justify-center items-center text-nowrap">
              <h2 className="text-base ">Bridgestone Turanza QuiteTrack</h2>
              <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                2019 Mercedes-Benz E-class
              </h4>
              <div className="flex">
                <p className="hr px-1 mx-1 text-black">Tyre size</p>
                <p className="hr px-1 rounded-sm mx-1 text-black">225/45R18</p>
              </div>
              <div className="flex">
                <figure className="flex justify-center items-center">
                  <img
                    src={getImageUrl(`headerImages/star.png`)}
                    alt=""
                    className="pl-2 pr-1"
                  />
                  <figcaption className="pr-2 text-black">4.6/5</figcaption>
                </figure>
                <p className="review_ratings text-sm pl-2">
                  135 <span className="text-$color">Review</span>
                </p>
              </div>
              <div className="flex text-base">
                <p className="mx-1 text-red">$20.00</p>
              </div>
              <button onClick={()=> navigate('/cart')} className="bg-green cursor-pointer rounded-3xl text-white font-medium px-6 h-10">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        
      </div> */}
      
    </>
  );
};

export default ShopSectionBottom;
