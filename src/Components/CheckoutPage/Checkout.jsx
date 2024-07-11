import Navbar from "../Navbar/Navbar";
import { getImageUrl } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="flex justify-evenly checkOutContainer">
        <ul className="m-6 yourCartContainer">
          <li className="flex items-center bdBottom">
            <figure>
              <img
                onClick={() => navigate("/cart")}
                src={getImageUrl("headerImages/arrow-left.png")}
                alt=""
                className="font-light mr-2 text-grey cursor-pointer"
              />
            </figure>
            <h2 className="text-xl text-topSelling text-nowrap">
              Shipping
              <span className="ml-80 text-base text-fontColor">(3)</span>
            </h2>
          </li>
          <li>
            <form className="flex my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="fname">First name *</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="John"
                  className="outline-none borders rounded-xl py-3 px-5 text-black"
                />
              </div>
              <div>
                <label htmlFor="lname">Last name *</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Doe"
                  className="outline-none borders rounded-xl py-3 px-5"
                />
              </div>
            </form>

            <form className="flex flex-col my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="country"> COUNTRY / REGION *</label>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Nigeria"
                    className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                  />
                  <img
                    src={getImageUrl("headerImages/Arrow.png")}
                    alt=""
                    className="absolute top-2 right-3 dropdownIcon"
                  />
                </div>
                <br />
                <br />
                <label htmlFor="country">STATE *</label>
                <br />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Abuja"
                  className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                />
                <br />
                <br />
                <input
                  type="text"
                  id="state"
                  name="apartment"
                  placeholder="Apartment"
                  className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                />
              </div>
            </form>
            <form className="flex my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="city-town">TOWN / CITY *</label>
                <br />
                <input
                  type="text"
                  id="city-town"
                  name="city-town"
                  placeholder="Apapa"
                  className="outline-none borders rounded-xl py-3 px-5 text-black"
                />
              </div>
              <div>
                <label htmlFor="city-town">PROVICE *</label>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    id="city-town"
                    name="city-town"
                    placeholder="Mainland"
                    className="outline-none borders rounded-xl py-3 px-5"
                  />
                  <img
                    src={getImageUrl("headerImages/Arrow.png")}
                    alt=""
                    className="absolute top-2 right-3 dropdownIcon"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="city-town">PPOSTCODE / ZIP *</label>
                <br />
                <input
                  type="text"
                  id="city-town"
                  name="city-town"
                  placeholder="21945"
                  className="outline-none borders rounded-xl py-3 px-5"
                />
              </div>
            </form>
            <form className="flex my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="fname">Phone ( Optional ) *</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="+234 71 66675 778"
                  className="outline-none borders rounded-xl py-3 px-5 text-black"
                />
              </div>
              <div>
                <label htmlFor="lname">Email ( Optional )*</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="johndoe@example.com"
                  className="outline-none borders rounded-xl py-3 px-5"
                />
              </div>
            </form>
            <hr />
            <br />
            <p className="text-black text-base">
              <span>
                <input type="checkbox" className="mr-2" />
              </span>
              Ship to a different address?
            </p>
            <br />
            <form className="flex my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="fname">First name *</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="John"
                  className="outline-none borders rounded-xl py-3 px-5 text-black"
                />
              </div>
              <div>
                <label htmlFor="lname">Last name *</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Doe"
                  className="outline-none borders rounded-xl py-3 px-5"
                />
              </div>
            </form>

            <form className="flex flex-col my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="country"> COUNTRY / REGION *</label>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Nigeria"
                    className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                  />{" "}
                  <img
                    src={getImageUrl("headerImages/Arrow.png")}
                    alt=""
                    className="absolute top-2 right-3 dropdownIcon"
                  />
                </div>
                <br />
                <br />
                <label htmlFor="country">STATE *</label>
                <br />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Abuja"
                  className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                />
                <br />
                <br />
                <input
                  type="text"
                  id="state"
                  name="apartment"
                  placeholder="Apartment"
                  className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                />
              </div>
            </form>
            <form className="flex my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="city-town">TOWN / CITY *</label>
                <br />
                <input
                  type="text"
                  id="city-town"
                  name="city-town"
                  placeholder="Wusa"
                  className="outline-none borders rounded-xl py-3 px-5 text-black"
                />
              </div>
              <div>
                <label htmlFor="city-town">PROVICE *</label>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    id="city-town"
                    name="city-town"
                    placeholder="North Central"
                    className="outline-none borders rounded-xl py-3 px-5"
                  />

                  <img
                    src={getImageUrl("headerImages/Arrow.png")}
                    alt=""
                    className="absolute top-2 right-3 dropdownIcon"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="city-town">PPOSTCODE / ZIP *</label>
                <br />
                <input
                  type="text"
                  id="city-town"
                  name="city-town"
                  placeholder="21945"
                  className="outline-none borders rounded-xl py-3 px-5"
                />
              </div>
            </form>
            <br />
            <p>ORDER NOTES (OPTIONAL)</p>
            <br />
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Notes about your order, eg. special notes for delivery"
              className="outline-none borders rounded-xl regions h-24 px-5 text-black mb-6"
            />

            <hr />
            <br />
            <form className="flex flex-col my-6 gap-3 text-nowrap">
              <div>
                <label htmlFor="country">
                  {" "}
                  What would you like us to do if an item is out of stock *
                </label>
                <br />
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Contact me (with delay)"
                  className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                />{" "}
                <br />
                <br />
                <label htmlFor="country">Where did you hear about us *</label>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Notes about your order, eg. special notes for delivery"
                    className="outline-none borders rounded-xl py-3 regions px-5 text-black"
                  />
                  <img
                    src={getImageUrl("headerImages/Arrow.png")}
                    alt=""
                    className="absolute top-2 right-3 dropdownIcon"
                  />
                </div>
                <br />
                <br />
              </div>
            </form>
          </li>
        </ul>

        <div className="borders rounded-xl my-4 checkoutButtonContainer p-4 ">
          <ul className="text-sm font-semibold text-black flex justify-between">
            <li className="text-fontColor font-light my-3">
              <li className="my-3">Subtotal</li>
              <li>Shipping</li>
              <li className="my-3">Discount</li>
              <li className="my-3">Shipping Costs</li>
              <li className="text-topSelling font-bold my-3">TOTAL</li>
              <li className="mt-5">Email Money Transfer</li>
            </li>
            <hr />
            <li className=" font-light my-3">
              <li className="my-3">$250.00</li>
              <li className="my-3">Lagos, Nigeria</li>
              <li className="my-3">$0.00</li>
              <li className="my-3">$10.00</li>
              <li className="my-3">$260.00</li>
              <li className="mt-5">
                <img
                  src={getImageUrl("headerImages/Clip_path_group.png")}
                  alt=""
                />
              </li>
            </li>
          </ul>
          <div className="flex my-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="h-12 px-2 outline-none borders rounded mr-3"
            />
            <button className="bg-lightGreen text-green text-sm font-medium rounded-full text-nowrap px-3">
              Apply Coupon
            </button>
          </div>
          <hr />
          <figure>
            <img
              src={getImageUrl("headerImages/Statusbar.png")}
              alt=""
              className="my-4"
            />
          </figure>
          <div className="font-medium text-fontColor">
            <p>
              <span>
                <input type="checkbox" className="mr-2" />
              </span>
              I confirm that my address is 100% correct and WILL NOT hold Top
              Shelf BC liable if this shipment is sent to an incorrect adress.
            </p>
            <br />
            <p>
              <span>
                <input type="checkbox" className="mr-2" />
              </span>
              Sign me up to receive email updates and news (Optional)
            </p>
            <hr />
            <div className="flex mt-2 items-center justify-between">
              <figure className="flex gap-2 items-center">
                <span>
                  <img
                    src={getImageUrl("headerImages/dollar-circle.png")}
                    alt=""
                    className="bg-ye
               borders"
                  />
                </span>
                <figcaption>
                  Your point <span className="text-black">10.00</span>
                </figcaption>
              </figure>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="my-2  text-white">
            <button
              onClick={() => navigate("/Completed")}
              className="bg-fontColor px-32 py-3 text-nowrap rounded-3xl borders mb-2 checkoutBtn"
            >
              Place Order
            </button>
            <hr />
            <p className="text-fontColor text-sm mt-2">
              SECURE PAYMENTS PROVIDED BY
            </p>
            <figure className="flex gap-5 mx-3">
              <span className="my-4 p-2 borders">
                <img src={getImageUrl("headerImages/master_card.png")} alt="" />
              </span>
              <span className="my-4 p-2 borders">
                <img src={getImageUrl("headerImages/Visa.png")} alt="" />
              </span>
              <span className="my-4 p-2 borders">
                <img src={getImageUrl("headerImages/binace.png")} alt="" />
              </span>
              <span className="my-4 p-2 borders">
                <img
                  src={getImageUrl("headerImages/Clip_path_group.png")}
                  alt=""
                />
              </span>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
