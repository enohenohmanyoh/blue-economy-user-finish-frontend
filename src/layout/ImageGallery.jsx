import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images = [] }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  if (!images || images.length === 0) {
    return <p className="gallery-empty">No images available</p>;
  }

  return (
    <div className="gallery">
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.thumbnail || img.src}
              alt={img.alt || `Gallery item ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content">
            <img
              src={selectedImg.src}
              alt={selectedImg.alt || "Enlarged view"}
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImg.caption && (
              <p className="caption">{selectedImg.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
