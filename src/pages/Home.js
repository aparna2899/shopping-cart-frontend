import Products from '../componenets/Products';
import Sizes from '../componenets/Sizes';

export default function Home() {
  return (
    <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-6 gap-4">
        <Sizes />
        <Products />
      </div>
    </div>
  );
}
