import img from "../../assets/home/chef-service.jpg"

const BoosBanner = () => {
    return (
        <div className="md:mb-60">
            <div>
                <img className="h-[320px] w-full" src={img} alt="" />
            </div>
            <div className="relative mx-auto  text-center md:w-6/12 md:-mt-60 -mt-40 md:p-10 p-5 bg-white">
                <h1 className="uppercase md:text-2xl font-bold mb-2">Star Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt</p>
            </div>
        </div>
    );
};

export default BoosBanner;