import React, { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useIntersection } from "../utils/useIntersection";

const MovieRowSearch = ({ movie }) => {
  const [Loading, setIsLoading] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  return (
    <figure ref={imgRef}>
      <div
        style={{
          width: "100%",
          paddingTop: "56.25%",
          background:
            "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAGQAZABkAGQAakBkAHCAfQB9AHCAnECowJYAqMCcQOdA1IDBwMHA1IDnQV4A+gEMwPoBDMD6AV4CE0FLQYOBS0FLQYOBS0ITQdTCOMHOga9BzoI4wdTDS8KWgkuCS4KWg0vDzwMywwcDMsPPBJ1EIEQgRJ1Fz4WEhc+Hl8eXyjSEQGQAZABkAGQAakBkAHCAfQB9AHCAnECowJYAqMCcQOdA1IDBwMHA1IDnQV4A+gEMwPoBDMD6AV4CE0FLQYOBS0FLQYOBS0ITQdTCOMHOga9BzoI4wdTDS8KWgkuCS4KWg0vDzwMywwcDMsPPBJ1EIEQgRJ1Fz4WEhc+Hl8eXyjS/8IAEQgACQAQAwEiAAIRAQMRAf/EACgAAQEBAAAAAAAAAAAAAAAAAAEAAgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAykf/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAE/AB//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==')",
        }}
      >
        <img
          alt={movie.title || movie.original_title}
          style={{
            position: "absolute",
            top: "0",
            height: "100%",
            objectFit: "cover",
          }}
          className={`row__poster ${Loading ? "invisible" : ""}`}
          onLoad={() => setIsLoading(0)}
          src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
        />
      </div>
      <div
        className="overlay"
        style={{
          opacity: "1",
          backdropFilter: `${Loading ? "blur(10px)" : "blur(0px)"}`,
        }}
      >
        <div
          className="description"
          style={{
            fontSize: "x-small",
            cursor: "pointer",
          }}
        >
          {movie.title || movie.original_title}
        </div>
      </div>
    </figure>
  );
};

export default MovieRowSearch;