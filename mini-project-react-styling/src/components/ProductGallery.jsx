export default function ProductGallery({
  currentImage,
  selectedColorName,
  thumbnails,
  onThumbnailClick,
  isEngravingActive,
  engravingText,
}) {
  const activeIndex = thumbnails.findIndex((item) => item.image === currentImage);
  const displayIndex = activeIndex >= 0 ? `0${activeIndex + 1}` : "01";
  const totalIndex = `0${thumbnails.length}`;

  return (
    <div className="gallery-column">
      <div className="product-stage">
        <span className="edition-tag">
          <span></span> EDISI PERSONAL
        </span>
        <img
          className="product-image"
          id="product-image"
          src={currentImage}
          alt={`Headphone MW75 premium berwarna ${selectedColorName}`}
        />
        {isEngravingActive && engravingText.trim() !== "" && (
          <div className="engraving-preview" id="engraving-preview" aria-live="polite">
            <span className="preview-label">ENGRAVING PREVIEW</span>
            <span className="preview-text" id="preview-text">
              {engravingText}
            </span>
          </div>
        )}
        <span className="image-index">
          {displayIndex} <i></i> {totalIndex}
        </span>
      </div>

      <div className="gallery-thumbnails" aria-label="Galeri produk">
        {thumbnails.map((thumb) => {
          const isActive = thumb.image === currentImage;
          return (
            <button
              key={thumb.label}
              className={`thumbnail ${isActive ? "is-active" : ""}`}
              type="button"
              aria-label={thumb.label}
              onClick={() => onThumbnailClick(thumb.image)}
            >
              <img src={thumb.image} alt="" />
            </button>
          );
        })}
        <p>Dirancang untuk didengar. Dibuat untuk dimiliki.</p>
      </div>
    </div>
  );
}