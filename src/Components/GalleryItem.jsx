import { FiArrowUpRight } from "react-icons/fi";

const GalleryItem = ({ galleryitem }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${galleryitem.image})` }}
        className="relative rounded-xl bg-cover bg-center bg-no-repeat sm:w-[633.5px] sm:h-[475px] w-[320px] h-[220px] group"
      >
        <div className="absolute inset-0 hover:bg-black/40 rounded-xl hover:backdrop-blur-lg transition-all duration-400 ease-in-out">
          <div className="flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h1 className="text-white text-xl font-semibold">
              {galleryitem.cap}
            </h1>
            <div className="size-12 bg-white rounded-full flex items-center justify-center transform mt-3 scale-90 group-hover:scale-100 transition-all duration-500 ease-in-out">
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="sm:hidden ml-2 mt-2 font-semibold text-sm">
          {galleryitem.cap}
        </p>
      </div>
    </div>
  );
};

export default GalleryItem;
