const ContactForm = () => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label text-cat-text">Name (*)</label>
        <input type="text" className="form-control" id="inputName" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail" className="form-label text-cat-text">Email (*)</label>
        <input type="email" className="form-control" id="inputEmail" />
      </div>
      <div className="mb-3">
        <label htmlFor="comment-text-area" className="form-label text-cat-text">Comments (*)</label>
        <textarea className="form-control" id="comment-text-area" rows="3"></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn bg-cat-maroon text-cat-base hover:bg-cat-red w-1/5">Send comment</button>
      </div>
    </form>
  )
}

export default ContactForm;
