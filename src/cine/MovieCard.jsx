import { useContext, useState } from "react";
import { getImageUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
import { toast } from "react-toastify";


export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // const {cartData, setCartData} = useContext(MovieContext);
  const { state, dispatch } = useContext(MovieContext);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection() {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleAddToCart(event, movie) {
    event.stopPropagation();
    console.log(movie);

    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    console.log(found);

    if (!found) {
      // setCartData([...cartData, movie]);

      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });


      toast.success(`Movie ${movie.title} added successfully`, {
        poistion: "bottom-right"
    });


    } else {
      console.error(
        `The movie ${movie.title} is already been added to the cart!`
      );

      toast.info(`Movie ${movie.title} is already been added to the cart!`, {
        poistion: "bottom-right"
    });

    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
              {/* <img src="./assets/star.svg" width="14" height="14" alt="" />
                <img src="./assets/star.svg" width="14" height="14" alt="" />
                <img src="./assets/star.svg" width="14" height="14" alt="" />
                <img src="./assets/star.svg" width="14" height="14" alt="" />
                <img src="./assets/star.svg" width="14" height="14" alt="" /> */}
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
