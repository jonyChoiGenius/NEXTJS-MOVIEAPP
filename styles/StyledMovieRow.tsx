import styled from "styled-components";

export const StyledMovieRow = styled.section`
  .row {
    margin-left: 20px;
    color: white;
  }
  h2 {
    padding-left: 20px;
  }
  .slider {
    position: relative;
  }
  .slider__arrow-left {
    background-clip: content-box;
    padding: 20px 0;

    box-sizing: border-box;
    transition: 400ms all ease-in-out;
    cursor: pointer;
    width: 80px;
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
  }
  .slider__arrow-right {
    padding: 20px 0;
    background-clip: content-box;
    box-sizing: border-box;
    transition: 400ms all ease-in-out;
    cursor: pointer;
    width: 80px;
    z-index: 1000;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
  }
  .arrow {
    transition: 400ms all ease-in-out;
  }
  /* 슬라이더에 올렸을 때에도 화살표가 커지도록 */
  .slider__arrow-right:hover .arrow {
    transition: 600ms all ease-in-out;
    transform: scale(1.5);
  }
  .slider__arrow-left:hover .arrow {
    transition: 600ms all ease-in-out;
    transform: scale(1.5);
  }
  .arrow:hover {
    transition: 400ms all ease-in-out;
    transform: scale(1.5);
  }

  .slider:hover .slider__arrow-left {
    transition: 400ms all ease-in-out;
    visibility: visible;
  }
  .slider:hover .slider__arrow-right {
    transition: 400ms all ease-in-out;
    visibility: visible;
  }
  .slider__arrow-left:hover {
    background: rgba(20, 20, 20, 0.5);
    transition: 400ms all ease-in-out;
  }
  .slider__arrow-right:hover {
    background: rgba(20, 20, 20, 0.5);
    transition: 400ms all ease-in-out;
  }

  .row__posters {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px 0 20px 20px;
    scroll-behavior: smooth;
  }
  .row__posters::-webkit-scrollbar {
    display: none;
  }
  .row__poster {
    object-fit: contain;
    width: 100%;
    max-height: 144px;
    margin-right: 10px;
    transition: transform 450ms;
    border-radius: 4px;
  }
  .row__poster:hover {
    transform: scale(1.08);
  }
  .row__posterLarge {
    max-height: 320px;
  }
  .row__posterLarge:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  .row__arrow-left {
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 32px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
  }
  .row__arrow-right {
    position: absolute;
    top: 0;
    right: 0px;
    height: 100%;
    width: 32px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    .row__poster {
      max-height: 160px;
    }
    .row__posterLarge {
      max-height: 360px;
    }
  }
  @media screen and (max-width: 768px) {
    .row__poster {
      max-height: 100px;
    }
    .row__posterLarge {
      max-height: 280px;
    }
  }

  /* .swiper-pagination {
  text-align: right !important;
} */

  .swiper-pagination-bullet {
    background: gray !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-active {
    background: white !important;
  }

  .swiper-button-prev {
    color: white !important;
  }

  .swiper-button-next {
    color: white !important;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.3rem !important;
    font-weight: 600 !important;
  }

  .swiper-button-next:hover {
    transition: 400ms all ease-in-out;
    transform: scale(1.2);
  }
  .swiper-button-prev:hover {
    transition: 400ms all ease-in-out;
    transform: scale(1.2);
  }
`;
