interface IBlog {
  image: string;
  title: string;
  discription: string;
  button: string;
}

const BlogSection = (props: IBlog) => {
  return (
    <div className="w-1/3 md:w-1/3 px-4 mb-8">
      <div className="shadow-lg overflow-hidden hover:scale-95 duration-75">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2">{props.title}</h2>
          <p className="text-gray-600 mb-4">{props.discription}</p>
          <button className="bg-[#65b9b5] font-semibold text-white py-3 px-8 hover:bg-white hover:text-[#65b9b5] border hover:border-[#65b9b5]">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
