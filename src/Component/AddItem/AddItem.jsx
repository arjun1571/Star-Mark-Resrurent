import { Helmet } from "react-helmet";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const image_hosting_token= import.meta.env.VITE_Image_Key

const AddItem = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const img_hosting_url =`https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgResponse=>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                console.log(imgURL);
                const {name,price,category,recipe}=data;
                const newItem = {name,price:parseFloat(price),category,recipe,image:imgURL}
                console.log(newItem);
                fetch("http://localhost:5000/menus",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(newItem)
                })
                .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            reset();
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Items added successful',
              showConfirmButton: false,
              timer: 1500
            })
          }
          
        })
            }
            console.log(imgResponse);
        })
    };
    console.log(errors);
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
        <form onSubmit={handleSubmit(onSubmit)} className="lg:mx-20 md:mx-10 mx-2 md:px-5 md:py-10   bg-base-200">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {required: true, maxLength: 120})}
            />
          </div>
          <div className="md:flex">
            <div className="form-control w-full max-w-xs mr-5">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue={"Pic One"} {...register("category", { required: true })} className="select select-bordered">
                <option disabled >
                  Pick one
                </option>
                <option>salad</option>
                <option>pizza</option>
                <option>soup</option>
                <option>desset</option>
                <option>drinks</option>
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
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control md:w-10/12 w-11/12">
            <label className="label">
              <span className="label-text">Recipe Detais*</span>
            </label>
            <textarea
            {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs py-3">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>
          <input className="btn mt-2 w-44 btn-primary" type="submit" value={"Add Item"} />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
