import { getImageUrl } from "../../../utils/utils";

const FilterSection = () => {
  let star = <img src={getImageUrl(`headerImages/star.png`)} alt="" />;
  let starwhite = <img src={getImageUrl(`headerImages/starwhite.png`)} alt="" />;
  
  return (
    <div className="text-sm text-nowrap filterContainer">
      <h3 className="text-lg px-9 text-black-">Filter</h3>
      <div className="filterborder px-8 flex flex-col">
        <hr className="hr" />
        <p className="px-3 py-2">PRODUCT CATEGORY</p>
        <div className="flex my-2 ">
          <input type="radio" className="mx-2" />
          <p>
            Shop <span className="nubersInStore">12</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Tyres <span className="nubersInStore">430</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Brakes <span className="nubersInStore">40</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Suspension <span className="nubersInStore">20</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Engine <span className="nubersInStore">34</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Interior <span className="nubersInStore">26</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Electrical <span className="nubersInStore">32</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Steering <span className="nubersInStore">12</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Exhaust <span className="nubersInStore">10</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Drive Train <span className="nubersInStore">8</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Exterior <span className="nubersInStore">24</span>
          </p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>
            Wholesale <span className="nubersInStore">28</span>
          </p>
        </div>
        <hr className="hr my-2" />
        <div>
          <h3 className="text-xs font-light text-filterFont">
            FILTER BY PRICE
          </h3>
          <div>
            <ul className="flex justify-between font-normal text-topSelling text-xs my-1">
              <li>$0</li>
              <li>$50.000.00</li>
            </ul>
            <hr className="filterByBorder mt-2 mb-3"></hr>
          </div>
          <button className="bg-green rounded-2xl px-3 text-white font-medium h-8 my-1 ">Apply</button>
          <h3 className="text-xs font-light text-filterFont my-2">ORDER BY</h3>
          <ul className="text-sm font-normal text-black mb-2">
            <li className="m-1"><input type="radio" /> <span>Default</span></li>
            <li className="m-1"><input type="radio" /> <span>Review Count</span></li>
            <li className="m-1"><input type="radio" /> <span>Popularity</span></li>
            <li className="m-1"><input type="radio" /> <span>Average Rating</span></li>
            <li className="m-1"><input type="radio" /> <span>Newness</span></li>
            <li className="m-1"><input type="radio" /> <span>Price: Low to High</span></li>
            <li className="m-1"><input type="radio" /> <span>Price: High to Low</span></li>
            <li className="m-1"><input type="radio" /> <span>Random Products</span></li>
            <li className="m-1"><input type="radio" /> <span>Random Name</span></li>
          </ul>
          <hr className="hr"/>
        </div>
        <div>
          <h3 className="text-xs font-light text-filterFont my-3">Filter By Reviews</h3>
          <ul className="">
            <li className="flex "><input type="radio" /> <span className="ml-2 pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{star}</span></li>
            <li className="flex my-2 "><input type="radio" /> <span className="ml-2 pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{starwhite}</span></li>
            <li className="flex my-2 "><input type="radio" /> <span className="ml-2 pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{starwhite}</span> <span className="pr-1">{starwhite}</span></li>
            <li className="flex my-2 "><input type="radio" /> <span className="ml-2 pr-1">{star}</span> <span className="pr-1">{star}</span> <span className="pr-1">{starwhite}</span> <span className="pr-1">{starwhite}</span> <span className="pr-1">{starwhite}</span></li>
            <li className="flex my-2 "><input type="radio" /> <span className="ml-2 pr-1">{star}</span> <span className="pr-1">{starwhite}</span> <span className="pr-1">{starwhite}</span> <span className="pr-1">{starwhite}</span> <span className="pr-1">{starwhite}</span></li>
          </ul>
          <button className="bg-lightGreen text-green text-sm font-normal rounded-2xl p-2">Clear Filters</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
