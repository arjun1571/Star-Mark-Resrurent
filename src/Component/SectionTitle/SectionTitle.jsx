

const SectionTitle = ({title,subtitle}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto  mt-10">
            <p className="text-orange-300 mb-2">--- {title} ---</p>
            <h1 className="font-bold text-3xl border-y-2 p-3 uppercase ">{subtitle}</h1>
        </div>
    );
};

export default SectionTitle;