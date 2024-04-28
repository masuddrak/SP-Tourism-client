
const SectionTitle = ({sub_head,head}) => {
    return (
        <div className="text-center mt-16 mb-5">
            <p className="text italic text-primary">{sub_head}</p>
            <h2 className="text-3xl font-bold text-gray-700">{head}</h2>
        </div>
    );
};

export default SectionTitle;