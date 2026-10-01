const AddContact = () => {
  const handleAddContactForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.Target);
    console.log(formData)  ;
  };

  return (
    <div className="row p-2">
      <form onSubmit={handleAddContactForm}>
        <div className="col-12 text-center text-white-50 h5">
          Add New Contact
        </div>
        <div className="col-12 col-md-4 p-1">
          <input
            placeholder="Name..."
            name="name"
            className="form-control form-control-sm"
          />
        </div>
        <div className="col-12 col-md-4 p-1">
          <input
            placeholder="Email..."
            name="email"
            className="form-control form-control-sm"
          />
        </div>
        <div className="col-12 col-md-4 p-1">
          <input
            placeholder="Phone..."
            name="phone"
            className="form-control form-control-sm"
          />
        </div>
        <div className="col-12 text-success text-center">Success Message</div>
        <div className="col-12 text-danger text-center">Error Message</div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-sm form-control">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddContact;
