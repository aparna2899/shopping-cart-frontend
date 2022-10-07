export default function Cart(props) {
  const { selectedProduct, handleClose, isClosed, handleDelete } = props;
  let price = 0;
  for (let i = 0; i < selectedProduct.length; i++) {
    price = Math.round((price + selectedProduct[i].price) * 100) / 100;
  }
  return (
    <>
      <div
        className={
          isClosed === true
            ? 'cursor-pointer fixed top-0 right-0 bg-black p-2'
            : 'w-2/6 fixed top-0 bottom-0 right-0 bg-black text-white cursor-pointer p-2 hover:text-red-700'
        }
        onClick={handleClose}
      >
        {isClosed === true ? <img src={`static/bag-icon.png`} alt="" /> : 'X'}
      </div>
      <div className={isClosed === true ? 'hidden' : 'fixed right-0'}>
        <div className="fixed right-52 top-5 flex justify-center align-center">
          <div className="">
            <img src="static/bag-icon.png" alt="" />
            <div className="w-5 h-5 rounded-full bg-gray-400 text-black ml-6 text-sm text-center">{selectedProduct.length}</div>
          </div>
        </div>

        <hr></hr>
        <ul className="fixed top-24 right-10 bottom-48 left-2/3 text-white ml-8 overflow-y-auto">
          {selectedProduct.map((product) => (
            <>
              <li key={product.id} className="flex align-center mb-4 relative">
                <div className="w-20 mr-6">
                  <img
                    src={`static/products/` + product.sku + `_2.jpg`}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <span>{product.title}</span>
                  <p className="text-sm">{product.description}</p>
                  <strong className="text-sm">
                    {product.currencyFormat}
                    {product.price}
                  </strong>
                </div>

                <div
                  onClick={() => handleDelete(product.id)}
                  className="w-4 h-4 rounded-full bg-gray-500 text-black text-sm flex justify-center items-center absolute right-8 cursor-pointer hover:bg-red-500 hover:text-white"
                >
                  x
                </div>
              </li>
            </>
          ))}
        </ul>
        <div className="text-white fixed bottom-0 right-0 top-3/4 left-2/3 border-t mt-8 mb-12">
          <div className="flex justify-between mx-12 mt-4">
            <p>SUBTOTAL</p>
            <div>
              <strong>$ {price}</strong>
            </div>
          </div>
          <div className="mt-20 mx-20">
            <button className="w-full bg-gray-100 text-black pt-2 pb-4 font-bold">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
