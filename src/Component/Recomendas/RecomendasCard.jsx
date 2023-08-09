const RecomendasCard = ({data}) => {

    const {name,des,img}=data;
  return (
    <div className="card  bg-base-100 shadow-xl mb-10">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
        <div className="card-actions">
          <button className="btn uppercase btn-outline btn-warning">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default RecomendasCard;
