import "./style/new-address.scss";
export default function NewAddress({ handleNewAddress }) {
  return (
    <div
      className="address position-fixed"
      onClick={(e) => {
        if (e.target.id !== "content") {
          handleNewAddress();
        }
      }}
    >
      <div
        className="content"
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="content"
      >
        <h4>Add New Address</h4>
        <form>
          <div className="row">
            <div className="col-12">
              <label>Full Name</label>
              <input type="text" className="w-100" />
            </div>
            <div className="col-12 mt-4">
              <label>Address</label>
              <input type="text" className="w-100" />
            </div>
            <div className="col-12 mt-4">
              <label>City</label>
              <input type="text" className="w-100" />
            </div>
            <div className="col-md-6 mt-4">
              <label>Country</label>
              <input type="password" className="w-100" />
            </div>
            <div className="col-md-6 mt-4">
              <label>Postcode</label>
              <input type="text" className="w-100" />
            </div>
            <div className="col-6 mt-4">
              <button
                type="button"
                className="d-flex align-items-center justify-content-center w-100 mt-2 b"
                onClick={handleNewAddress}
              >
                Cancel
              </button>
            </div>
            <div className="col-6 mt-4">
              <button
                type="submit"
                className="d-flex align-items-center justify-content-center w-100 mt-2 "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
