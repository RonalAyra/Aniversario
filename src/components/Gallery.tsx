import React, { useState } from "react";
import { Photo } from "../types";
import { X } from "lucide-react";
import banner from "../assets/banner.jpg";

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros preciosos momentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recuerdos capturados en el tiempo, cada uno un testimonio de nuestro
            amor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className=" w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-rose-300 transition-colors"
            onClick={closeModal}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="bg-white p-4 text-center">
              <p className="text-gray-800 font-medium">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
