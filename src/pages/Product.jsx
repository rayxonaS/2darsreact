import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    error,
    isPending,
  } = useFetch("https://dummyjson.com/product/" + id);
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10 grid place-items-center"
      style={{ backgroundImage: `url(${product?.thumbnail})` }}
    >
      {isPending && <h2>Loading...</h2>}
      <div>
        {product && (
          <div className="card lg:card-side bg-base-100 shadow-sm max-w-3xl align-middle justify-center">
            <figure className="bg-amber-100 p-4 rounded-lg">
              <img
                className="rounded-lg w-full h-auto object-cover"
                src={product.thumbnail}
                alt="Album"
              />
            </figure>
            <div className="card-body max-w-3xl">
              <h2 className="card-title text-xl font-mono">{product.title}</h2>
              <p className="text-xl font-mono">{product.description}</p>
              <p className=" btn btn-dash btn-outline border-t-cyan-200 btn-link btn-warning text-xl font-mono">
                Price: ${product.price}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-ghost hover:bg-blue-200 font-mono text-xl">
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Product;
