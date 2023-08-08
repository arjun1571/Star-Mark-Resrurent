

const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item
    return (
        <div className="flex justify-between items-center p-2">
            <img className="h-[104px] w-[118px] mr-4" style={{borderRadius:"0 200px 200px 200px"}} src={image} alt="" />
            <div>
                <h1 className="uppercase">{name} ------------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400 mx-2">${price}</p>
        </div>
    );
};

export default MenuItem;