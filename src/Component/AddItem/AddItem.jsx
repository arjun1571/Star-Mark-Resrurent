import { Helmet } from "react-helmet";

const AddItem = () => {
  return (
    <div>
      <Helmet>
        <title>Add-Item | STAR Mark </title>
      </Helmet>
      <div className="text-center md:mt-10 mt-5 ">
        <h1 className="text-yellow-400">--Whats new?--</h1>
        <div className="divider w-60 mx-auto"></div>
        <h1 className="md:text-2xl text-xl font-bold">ADD AN ITEM</h1>
        <div className="divider w-60 mx-auto"></div>
      </div>
      <div>
        <form className="lg:mx-20 md:mx-10 mx-2 md:px-5 md:py-10  bg-base-200">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="md:flex">
            <div className="form-control w-full max-w-xs mr-5">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="form-control md:w-10/12 w-11/12">
            <label className="label">
              <span className="label-text">Recipe Detais*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs py-3">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <input className="btn mt-2 w-44 btn-primary" type="submit" value={"Add Item"} />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
