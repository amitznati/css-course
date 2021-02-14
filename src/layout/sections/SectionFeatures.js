import React from "react";

const FeatureBox = ({ title, content, faIcon }) => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={`${faIcon} feature-box--icon u-margin-bottom-small`} />
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box--text">{content}</p>
      </div>
    </div>
  );
};
export default function Features() {
  const features = [
    {
      title: "Scalable",
      content:
        "ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, culpa, dolorem doloribus.",
      faIcon: "fa fa-ravelry",
    },
    {
      title: "Fast",
      content:
        "ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, culpa, dolorem doloribus.",
      faIcon: "fa fa-linode",
    },
    {
      title: "superpowers",
      content:
        "ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, culpa, dolorem doloribus.",
      faIcon: "fa fa-superpowers",
    },
    {
      title: "eercast",
      content:
        "ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, culpa, dolorem doloribus.",
      faIcon: "fa fa-eercast",
    },
  ];
  return (
    <section className="section-features">
      <div className="row">
        {features.map((feature) => (
          <FeatureBox {...feature} key={feature.title} />
        ))}
      </div>
    </section>
  );
}
