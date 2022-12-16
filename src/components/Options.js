import "../Styles/Components/Options.css";

const Options = () => {
  return (
    <div className="options container-fluid mt-4">
      <div className="row opt">
        <div className="col">          
            <i className="fa-solid fa-box-open bg-primary"></i>
            <p className="opt-ptext">Multi Delivery plans</p>
        </div>
        <div className="col">
        <i className="fa-solid fa-truck-fast bg-warning"></i>
            <p className="opt-ptext">Fast delivery</p>
        </div>
        <div className="col">
          <i className="fa-solid fa-money-bill  bg-success"></i>
          <p className="opt-ptext">Massive offer</p>
        </div>
        <div className="col">
            <i className="fa-solid fa-location-dot  bg-danger"></i>
            <p className="opt-ptext">Deliver to everywhere</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
