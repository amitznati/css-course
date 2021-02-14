import bgVideo from "../../styles/images/video1.mp4";
import profile1 from "../../styles/images/profile1.jpg";
import profile2 from "../../styles/images/profile2.jpg";
export default function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">our users's stories</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={profile1} alt="profile1" />
            <figcaption className="story__caption">Vanchi Roc</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              base piece of code i used
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum
              doloribus facilis id in laboriosam maxime, mollitia nihil non
              porro quas quasi qui quidem quis repellat tempora tempore,
              temporibus vitae! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Amet cum doloribus.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={profile2} alt="profile1" />
            <figcaption className="story__caption">Emma Thurman</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              base piece of code i used
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum
              doloribus facilis id in laboriosam maxime, mollitia nihil non
              porro quas quasi qui quidem quis repellat tempora tempore,
              temporibus vitae! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Amet cum doloribus.
            </p>
          </div>
        </div>
      </div>
      <div className="section-stories__footer">
        <a href="#" className="btn-text">
          read all the stories &rarr;
        </a>
      </div>
    </section>
  );
}
