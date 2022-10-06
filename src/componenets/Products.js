import data from '../data.json';

export default function Products(props) {
  let { selectedSize } = props;
  let productList = [];
  if (selectedSize.length === 0) {
    productList = data.products;
  } else {
    for (let i = 0; i < data.products.length; i++) {
      for (let j = 0; j < selectedSize.length; j++) {
        if (
          data.products[i].availableSizes.includes(selectedSize[j]) &&
          productList.indexOf(data.products[i]) === -1
        ) {
          productList.push(data.products[i]);
        }
      }
    }
  }

  return (
    <div className="col-span-5 bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <ul className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {productList.map((product) => (
            <li key={product.id} className="mb-8">
              <div className="relative">
                <div className="relative h-96 w-full overflow-hidden rounded-lg">
                  <img
                    src={`static/products/${product.sku}_1.jpg`}
                    alt={product.title}
                    className="object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.style}</p>
                  <p className="mt-1 text-sm text-gray-500 inline">Sizes </p>
                  {product.availableSizes.map((size) => (
                    <span className="mt-1 text-sm text-gray-500">| {size} </span>
                  ))}
                </div>
                <div className="absolute inset-x-0 top-0 flex h-96 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {`$ ` + product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button className=" w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 mx-auto text-sm font-medium text-gray-900 hover:bg-gray-200">
                  Add to bag
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
