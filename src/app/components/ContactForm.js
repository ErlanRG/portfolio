const InputField = ({ id, label, type = "text" }) => (
  <div className="col-md-6">
    <label htmlFor={id} className="form-label text-cat-text">{label} (*)</label>
    <input type={type} className="form-control" id={id} />
  </div>
);

const TextAreaField = ({ id, label, rows = 10 }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label text-cat-text">{label} (*)</label>
    <textarea className="form-control" id={id} rows={rows}></textarea>
  </div>
);

const ContactForm = () => {
  return (
    <form className="row g-3">
      <InputField id="inputName" label="Name" />
      <InputField id="inputEmail" label="Email" type="email" />
      <TextAreaField id="comment-text-area" label="Comments" />
      <div className="col-12">
        <button type="submit" className="btn bg-cat-maroon text-cat-base hover:bg-cat-red w-1/5">Send comment</button>
      </div>
    </form>
  );
}

export default ContactForm;
