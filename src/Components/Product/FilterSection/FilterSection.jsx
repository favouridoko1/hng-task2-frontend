const FilterSection = () => {
  return (
    <div className="text-sm text-nowrap">
      <h3 className="text-lg px-9 text-black-">Filter</h3>
      <div className="filterborder px-8 flex flex-col">
        <hr className="hr"/>
        <p className="px-3 py-2">PRODUCT CATEGORY</p>
        <div className="flex my-2 ">
          <input type="radio" className="mx-2" />
          <p>Shop <span className="nubersInStore">12</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Tyres {" "}<span className="nubersInStore">430</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Brakes <span className="nubersInStore">40</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Suspension <span className="nubersInStore">20</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Engine <span className="nubersInStore">34</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Interior <span className="nubersInStore">26</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Electrical <span className="nubersInStore">32</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Steering <span className="nubersInStore">12</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Exhaust <span className="nubersInStore">10</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Drive Train <span className="nubersInStore">8</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Exterior <span className="nubersInStore">24</span></p>
        </div>
        <div className="flex my-2">
          <input type="radio" className="mx-2" />
          <p>Wholesale <span className="nubersInStore">28</span></p>
        </div>
        <hr className="hr"/>
      </div>
    </div>
  );
};

export default FilterSection;
