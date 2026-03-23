import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const products = [
    { id: 1, name: "iPhone 15 Pro", price: 1200, image: "" },
    { id: 2, name: "Samsung S24 Ultra", price: 1100, image: "" },
    { id: 3, name: "Google Pixel 8", price: 800, image: "" },
    { id: 4, name: "Xiaomi 14", price: 700, image: "" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 flex-grow">
      {}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">MobileHub</span>
        </h1>
        <p className="text-xl text-gray-600">
          Find the best mobile devices at unbeatable prices.
        </p>
      </section>

      {}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="h-48 object-contain mb-4 w-full" />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-blue-600 font-bold text-xl my-2">{product.price} €</p>
            <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;