const products = [
  {
    id: 1,
    name: "BROWN CHAIR DESIGN",
    price: "$100.00",
    image: "product1.jpg",
  },
  { id: 2, name: "DOUBLE BED DESIGN", price: "$200.00", image: "product2.jpg" },
  {
    id: 3,
    name: "HOUSE CHAIR DESIGN",
    price: "$200.00",
    image: "product3.jpg",
  },
  {
    id: 4,
    name: "BROWN TABLE DESIGN",
    price: "$100.00",
    image: "product4.jpg",
  },
  { id: 5, name: "BLUE CHAIR DESIGN", price: "$200.00", image: "product5.jpg" },
  {
    id: 6,
    name: "BROWN TABLE DESIGN",
    price: "$200.00",
    image: "product6.jpg",
  },
];

const ProductCards = () => {
  return (
    <div className="bg-white min-h-screen mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-50 shadow-lg p-9 text-center h-auto w-80 hover:scale-95 duration-75"
          >
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full h-64 object-contain mx-auto"
            />
            <h2 className="text-lg font-medium flex justify-start">
              {product.name}
            </h2>
            <div className="flex justify-between items-center gap-12 mt-1">
              <p className="text-black">{product.price}</p>
              <button className="text-[#65b9b5] text-xs font-normal hover:underline">
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
