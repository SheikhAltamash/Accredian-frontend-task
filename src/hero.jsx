export default function Hero({show, setshowform}) {
    return (
      <div className="hero_main">
        <div className="left">
          <h1>
            Let's Learn <br /> & Earn
          </h1>
          <p className="hero_p_price">
            Get chance to win <br></br>up-to
            <span> &nbsp; Rs. 15,000</span>
          </p>
          <button
            className="btn_nav hero_btn"
            onClick={() => {
              setshowform(true);
            }}
          >
            Refer now
          </button>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/do4pj4m25/image/upload/v1720279479/samples/hpxwggesb3d3lnv18agu.jpg"
            alt=""
          />
        </div>
      </div>
    );
}