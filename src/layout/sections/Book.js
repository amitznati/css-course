const TextInput = ({ id, placeholder, label, type = "text" }) => {
  return (
    <div className="form__group">
      <input
        type={type}
        className="form__input"
        id={id}
        required
        placeholder={placeholder}
      />
      <label htmlFor="name" className="form__label">
        {label}
      </label>
    </div>
  );
};
const RadioInput = ({ id, name, label }) => {
  return (
    <div className="form__radio-group">
      <input type="radio" className="form__radio-input" name={name} id={id} />
      <label htmlFor={id} className="form__radio-label">
        <span className="form__radio-button" />
        {label}
      </label>
    </div>
  );
};
export default function Book() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Register now!</h2>
            </div>
            <form action="#" className="from">
              <TextInput placeholder="Full name" id="name" label="Full Name" />
              <TextInput
                placeholder="Email address"
                id="email"
                label="Email address"
                type="email"
              />

              <div className="form__group u-margin-bottom-medium">
                <RadioInput name="size" id="small" label="Small" />
                <RadioInput name="size" id="large" label="Large" />
              </div>
              <div className="form__group">
                <button className="btn btn-primary">Register &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
