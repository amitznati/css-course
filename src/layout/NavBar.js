import React from "react";

export default function NavBar() {
	const links = ['Home', 'Company', 'Popular packages', 'Stories', 'Register now']
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navigation" />
      <label htmlFor="navigation" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__bg">&nbsp;</div>
      <div className="navigation__nav">
        <ul className="navigation__list">
			{links.map((link) => (
				<li key={link} className="navigation__item">
					<a href="#" className="navigation__link">
						{link}
					</a>
				</li>
			))}
        </ul>
      </div>
    </div>
  );
}
