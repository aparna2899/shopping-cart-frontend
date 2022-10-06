import { useState } from 'react';
import Products from '../componenets/Products';
import Sizes from '../componenets/Sizes';

export default function Home() {
  const [selectedSize, setSelectedSize] = useState([]);
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
  return (
    <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-6 gap-4">
        <Sizes selectedSize={selectedSize} handleClick={handleClick} />
        <Products selectedSize={selectedSize}/>
      </div>
    </div>
  );
}
