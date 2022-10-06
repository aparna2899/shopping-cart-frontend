export default function Sizes() {
  const sizes = ['XS', 'S', 'M', 'X', 'L', 'XL', 'XXL'];
  return (
    <div className="mt-28">
      <h2 className="text-lg font-medium px-6 mb-2">Sizes:</h2>
      <ul className="grid grid-cols-3 px-4">
        {sizes.map((size) => (
          <li key={size} className="w-10 h-10 rounded-full bg-gray-200 m-2 flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <span className="text-sm">{size}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

