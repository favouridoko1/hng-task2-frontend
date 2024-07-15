import { useEffect, useState } from "react";
import { getImageUrl } from "../../../utils/utils";
// import ShopSectionBottom from "./ShopSectionBottom";
import { useNavigate } from "react-router-dom";

const ShopSection = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  // const apiKey = import.meta.env.VITE_REACT_API_KEY;
  // const appid = import.meta.env.VITE_REACT_APPID;
  // const organization_id = import.meta.env.VITE_REACT_ORGANIZATION_ID;

  useEffect(() => {
    const fetchApi = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        `api/products?organization_id=74a20910c09546279fdf0065ce4ea4df&Appid=AAWNHMKAJKICI2J&Apikey=01ab520d690d4ad9943831f1ce4aa87c20240712161118902341`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setProduct(result.items), console.log(result.item);
        })
        .catch((error) => console.error(error));
    };
    fetchApi();
  }, []);

  return (
    <div className="flex flex-col shoppingParent">
      <div className="flex flex-col items-center px-28 Tyrelayout">
        <p>
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
        <h2 className="text-2xl py-2 borderBottom">Tyres</h2>
        <h2 className="py-4 font-medium px-8 text-topSelling">Top Selling</h2>
      </div>
      <div className="text-2xl  py-3 mx-28 rounded imagePart ">
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
    </div>
  );
};

export default ShopSection;
