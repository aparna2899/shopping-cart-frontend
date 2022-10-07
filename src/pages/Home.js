import { useState } from 'react';
import Products from '../componenets/Products';
import Sizes from '../componenets/Sizes';
import Cart from '../componenets/Cart';
import data from '../data.json';


export default function Home() {
  const [selectedSize, setSelectedSize] = useState([]);
  const [isClosed, setIsClosed] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState([]);
  const handleClick = (size) => {
    let arr = [...selectedSize];
    if (arr.includes(size)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === size) {
          arr.splice(i, 1);
          setSelectedSize(arr);
        }
      }
    } else {
      arr.push(size);
      setSelectedSize(arr);
    }
  };
  const handleClose = () => {
    setIsClosed(!isClosed);
  };
  const handleDelete = (id) => {
    let arr = [...selectedProductId];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === id) {
        arr.splice(i, 1);
        setSelectedProductId(arr);
      }
    }
  };
  const handleSubmit = (id) => {
    let arr = [...selectedProductId];
    arr.push(id);
    setSelectedProductId(arr);
  };
  const selectedProduct = data.products.filter((product) =>
      selectedProductId.includes(product.id)
    );
  return (
    <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-6 gap-4">
        <Sizes selectedSize={selectedSize} handleClick={handleClick} />
        <Products selectedSize={selectedSize} handleSubmit={handleSubmit} />
        <Cart selectedProduct={selectedProduct}  handleClose={handleClose} handleDelete={handleDelete} isClosed={isClosed}/>
      </div>
    </div>
  );
}
