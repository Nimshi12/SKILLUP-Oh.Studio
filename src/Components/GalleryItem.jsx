const GalleryItem = ({ galleryitem }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${galleryitem.image})` }}
        className="relative rounded-xl bg-cover bg-center bg-no-repeat sm:w-[633.5px] sm:h-[475px] w-[320px] h-[220px]">
        <div className="absolute inset-0  rounded-xl hover:backdrop-blur-lg transition-all duration-400 ease-in-out"></div>
      </div>
      <div>
        <p className="sm:hidden ml-2 mt-2 font-semibold text-sm">{galleryitem.cap}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
