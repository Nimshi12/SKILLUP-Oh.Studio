import React from "react";
import GalleryItem from "./GalleryItem";
import { galleryitems } from "../__data__/galleryItems";


const Gallery = () => {
  return (
    <section className="w-[85%] mx-auto">
      <div className="grid sm:grid-cols-2 gap-6 justify-center">
        {galleryitems.map((galleryitem) => {
          return <GalleryItem key={1} galleryitem={galleryitem} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
