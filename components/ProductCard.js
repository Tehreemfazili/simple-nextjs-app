import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product }) {
  return (
    <div className="border w-80 shadow hover:shadow-xl">
      <Link href={`/posts/${product.id}`}>
        <Image src='https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU' alt="" width={320} height={240} />
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-lg font-bold">
            {product.title}
          </h2>
          <span>
            {product.id}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;