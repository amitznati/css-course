import React from "react";

const PackageCart = ({ title, details, price, index }) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__image card__image--${index}`}>&nbsp;</div>
        <h4 className="card__header">
          <span className={`card__header-span card__header-span--${index}`}>
            {title}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            {details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back-${index}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <div className="card__price-only">Only</div>
            <div className="card__price-value">${price}</div>
          </div>
          <a href="#popup" className="card__price-btn btn btn-white">
            get started!
          </a>
        </div>
      </div>
    </div>
  );
};
export default function Packages() {
  const packages = [
    {
      title: (
        <span>
          one by <br /> one
        </span>
      ),
      details: [
        "1 template",
        "lerm ipsom sdf fs",
        "sdf ssdf sdfs",
        "werwer wer wer sdf",
        "34 sdf sdfss fs",
      ],
      price: 17,
    },
    {
      title: (
        <span>
          monthly <br /> use
        </span>
      ),
      details: [
        "templates - no limit",
        "1 month use",
        "sdf ssdf sdfs",
        "werwer wer wer sdf",
        "34 sdf sdfss fs",
      ],
      price: 150,
    },
    {
      title: (
        <span>
          yearly <br /> use
        </span>
      ),
      details: [
        "templates - no limit",
        "1 year use",
        "sdf ssdf sdfs",
        "werwer wer wer sdf",
        "34 sdf sdfss fs",
      ],
      price: 350,
    },
  ];
  return (
    <section className="section-packages" id="section-packages">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">packages and prices</h2>
      </div>
      <div className="row">
        {packages.map((p, index) => (
          <div className="col-1-of-3" key={p.price}>
            <PackageCart {...p} index={index + 1} />
          </div>
        ))}
      </div>
      <a href="#" className="btn btn-primary btn-animated">
        browse all
      </a>
    </section>
  );
}
