import { useEffect, useState } from "react";
import { getImageUrl } from "../../../utils/utils";
import ShopSectionBottom from "./ShopSectionBottom";
import { useNavigate } from "react-router-dom";
// import { Processor } from "postcss";

const ShopSection = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]); // const requestOptions = {
  //   method: "GET",
  //   redirect: "follow"
  // };

  useEffect(() => {
    async function fetchApi() {
      console.log(import.meta.env.VITE_REACT_APPID);
      const apiKey = import.meta.env.VITE_REACT_API_KEY;
      const appid = import.meta.env.VITE_REACT_APPID;
      const organization_id = import.meta.env.VITE_REACT_ORGANIZATION_ID;

      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        `/api/products?organization_id=${organization_id}&Appid=${appid}&Apikey=${apiKey}`,
        { requestOptions }
      )
        .then((response) => response.json())
        .then((result) => {
          setProduct(result.items), console.log(result.items);
        })
        .catch((error) => console.error(error));
    }
    fetchApi();
  }, []);

  return (
    <div className="flex flex-col shoppingParent justify-center">
      <p className="text-base borderBottom py-2 leading-normal ">
        Choosing the right tyre is crucial for vehicle performance, safty and
        comfort. Our online store offers comprehensive selection of high quality
        tyres from top brands such as Michelin, Bridgestone, Goodyear,
        Continental, Pirelli, and more. Whether you drive a sedan, SUV, or
        sports car we have a perfect tyres to suit your specific needs and
        preferences. Our tyre inventory includes option for various driving
        conditions and requirement. From all-seasoned tyres that offers reliable
        performance year-round to high performance tyre designed for superior
        grid and handling, we have it all. We also offer eco-friendly tyres with
        low rolling resistence for improved fuel effeciency and reduced
        enviroment impact.
      </p>
      <div className="flex flex-col items-center justify-center px-28 Tyrelayout">
        <h2 className="text-2xl py-2 borderBottom">Tyres</h2>
        <h2 className="py-4 font-medium px-8 text-topSelling">Top Selling</h2>
      </div>
      <div className="text-2xl  py-3 mx-28 rounded imgagePart ">
        <div className="itemsContainer">
          {product.map((items) => (
            <div key={items.id}>
              <div className="flex justify-around imagesAndInfo">
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <img
                      src={`https://api.timbu.cloud/images/${items.photos[0].url}`}
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col text-base items-center justify-center my-3 py-4 bg-white">
                    <p className="text-fontColor text-sm">{items.name}</p>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="text-base text-nowrap">
                        {items.description}
                      </h2>

                      <div className="flex">
                        <p className="hr px-1 mx-1 text-black">
                          Tyre size {items.tyre_size}
                        </p>
                        <p className="hr px-1 rounded-sm mx-1 text-black">
                          225/55r17
                        </p>
                      </div>
                      <div className="flex">
                        <figure className="flex justify-center items-center">
                          <img
                            src={getImageUrl(`headerImages/star.png`)}
                            alt=""
                            className="pl-2 pr-1"
                          />
                          <figcaption className="pr-2 text-black">
                            4.6/5
                          </figcaption>
                        </figure>
                        <p className="review_ratings pl-2">
                          135 <span>Review</span>
                        </p>
                      </div>
                      <div className="flex text-base">
                        <p className="m-1 text-red">$80.00</p>
                      </div>
                      <button
                        onClick={() => navigate("/cart")}
                        className="bg-green rounded-3xl text-white font-medium px-6 h-10"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col items-center px-28 Tyrelayout">
        <h2 className="text-2xl py-2 borderBottom">Tyres</h2> */}
      {/* <hr className="hr" /> */}
      {/* <p className="text-base borderBottom px-8 py-2 leading-normal">
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
      <div className="text-2xl bg-grey py-3 mx-28 rounded imgagePart">
        <h2 className="p-2 font-medium px-8 text-topSelling">Top Selling</h2>
        <div className="flex justify-around imagesAndInfo">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <p>{console.log(product)}</p>
            </div>
            <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8 bg-white">
              <p className="text-fontColor text-sm">Michelin</p>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-base text-nowrap">Michelin Primacy MXM4</h2>
                <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                  2020 BMW 3 Series
                </h4>
                <div className="flex">
                  <p className="hr px-1 mx-1 text-black">Tyre size</p>
                  <p className="hr px-1 rounded-sm mx-1 text-black">
                    225/55r17
                  </p>
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
                  <p className="review_ratings pl-2">
                    135 <span>Review</span>
                  </p>
                </div>
                <div className="flex text-base">
                  <p className="m-1 text-red">$80.00</p>
                </div>
                <button onClick={()=> navigate('/cart')} className="bg-green rounded-3xl text-white font-medium px-6 h-10"> */}
      {/* Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <img src={getImageUrl(`headerImages/three-tyre.png`)} alt="" className="tyre" />
            </div>
            <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8 bg-white">
              <p className="text-fontColor text-sm">Falken</p>
              <div className="flex flex-col text-nowrap justify-center items-center">
                <h2 className="text-base ">Falken Ziex ZE950 A/S</h2>
                <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                  2013 Nisson Altima
                </h4>
                <div className="flex">
                  <p className="hr px-1 mx-1 text-black">Tyre size</p>
                  <p className="hr px-1 rounded-sm mx-1 text-black">
                    215/55R17
                  </p>
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
                <button onClick={()=> navigate('/cart')} className="bg-green rounded-3xl text-white font-medium px-6 h-10"> */}
      {/* Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <img
                src={getImageUrl(`headerImages/tyre_light_front.png`)}
                alt="" className="tyre"
              />
            </div>
            <div className=" flex flex-col text-base items-center justify-center my-3 py-4 px-8 bg-white">
              <p className="text-fontColor text-sm">Toyo</p>
              <div className="flex flex-col justify-center items-center text">
                <h2 className="text-base">Toyo Proxez 4 Pluse</h2>
                <h4 className="font-bold text-headerTop text-sm m-1 p-2  bg-grey">
                  2022 Chevrolet Malibu
                </h4>
                <div className="flex">
                  <p className="hr px-1 mx-1 text-black">Tyre size</p>
                  <p className="hr px-1 rounded-sm mx-1 text-black">
                    235/50R18
                  </p>
                </div>
                <div className="flex">
                  <figure className="flex justify-center items-center">
                    <img
                      src={getImageUrl(`headerImages/star.png`)}
                      alt=""
                      className="pl-2 pr-1"
                    /> */}
      {/* <figcaption className="pr-2 text-black">4.6/5</figcaption>
                  </figure>
                  <p className="review_ratings text-sm pl-2">
                    135 <span className="text-$color">Review</span>
                  </p>
                </div>
                <div className="flex text-base">
                  <p className="mx-1 text-red">$30.00</p>
                </div>
                <button onClick={()=> navigate('/cart')} className="bg-green rounded-3xl text-white font-medium px-6 h-10">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div> */}
      <ShopSectionBottom />
    </div>
  );
};

export default ShopSection;
