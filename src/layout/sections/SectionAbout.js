import React from "react";
import appCode from "../../styles/images/appCode.PNG";
import baseApiCode from "../../styles/images/baseApiCode.PNG";
import instanceCode from "../../styles/images/instanceCode.PNG";
export default function About() {
  return (
    <section className="section-about" id="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">including professional features</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            reusable business logic
          </h3>
          <p className="paragraph">
            ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            blanditiis commodi, culpa, dolorem doloribus, enim fuga fugiat harum
            in iure iusto labore libero provident quia reprehenderit suscipit
            tenetur vitae voluptatibus.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            reusable business logic
          </h3>
          <p className="paragraph">
            ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            blanditiis commodi, culpa, dolorem doloribus.
          </p>
          <a href="#" className="btn-text">
            Lorn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={appCode}
              alt="app-code"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={baseApiCode}
              alt="base api"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={instanceCode}
              alt="instance code"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
