export default function ProductDetails({
  product,
  selectedColor,
  onColorChange,
  quantity,
  onQuantityChange,
  isEngravingActive,
  onToggleEngraving,
  engravingText,
  onEngravingTextChange,
  totalPrice,
  formatRupiah,
  onConfirmOrder,
  orderSummary,
  errorMessage,
}) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="details-column">
      <div className="product-heading">
        <p className="eyebrow">{product.brand}</p>
        <h1 id="product-title">
          MW75 Custom
          <br />
          Wireless ANC Headphones
        </h1>
        <div className="rating">
          <span aria-label="5 dari 5 bintang">★★★★★</span>
          <a href="#detail">
            {product.rating} <span>({product.reviewsCount} ulasan)</span>
          </a>
        </div>
        <p className="price">
          {formatRupiah(product.price)} <span>Termasuk pajak</span>
        </p>
      </div>

      <p className="product-description" id="detail">
        {product.description}
      </p>

      <div className="option-group color-group">
        <div className="option-title">
          <span>Warna</span>
          <span className="selected-color" id="selected-color">
            {selectedColor.name}
          </span>
        </div>
        <div className="swatches" role="group" aria-label="Pilih warna headphone">
          {product.colors.map((color) => {
            const isSelected = color.name === selectedColor.name;
            return (
              <button
                key={color.name}
                className={`swatch ${isSelected ? "is-selected" : ""}`}
                type="button"
                aria-label={color.name}
                aria-pressed={isSelected}
                style={{ "--swatch-color": color.code }}
                onClick={() => onColorChange(color)}
              />
            );
          })}
        </div>
      </div>

      <section className="customization" id="customize" aria-labelledby="custom-title">
        <div className="custom-heading">
          <div>
            <span className="step-label">01 / PERSONALISASI</span>
            <h2 id="custom-title">Custom engraving</h2>
          </div>
          <span className="custom-price">+ {formatRupiah(product.engravingPrice)}</span>
        </div>

        <label className="engraving-toggle">
          <input
            id="engraving-toggle"
            type="checkbox"
            checked={isEngravingActive}
            onChange={(e) => onToggleEngraving(e.target.checked)}
          />
          <span className="toggle-mark" aria-hidden="true"></span>
          <span>Tambah Engraving</span>
        </label>

        {isEngravingActive && (
          <div className="engraving-field" id="engraving-field">
            <label htmlFor="engraving-input">
              Teks engraving <span id="character-count">{engravingText.length} / 12</span>
            </label>
            <input
              id="engraving-input"
              type="text"
              maxLength={12}
              placeholder="Contoh: ADI 2026"
              autoComplete="off"
              value={engravingText}
              onChange={(e) => onEngravingTextChange(e.target.value)}
            />
            <p>Hingga 12 karakter. Huruf dan angka akan diukir dengan presisi.</p>
          </div>
        )}
      </section>

      <p
        className="order-total"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "16px 0 0",
          paddingTop: "13px",
          borderTop: "1px solid #e5e5e5",
          fontSize: "11px",
        }}
      >
        <span>Total harga</span>
        <strong style={{ color: "#111111", fontSize: "16px", fontWeight: "600" }}>
          {formatRupiah(totalPrice)}
        </strong>
      </p>

      <div className="purchase-row" id="pesan">
        <div className="quantity-control" aria-label="Jumlah produk">
          <button
            type="button"
            id="quantity-minus"
            aria-label="Kurangi jumlah"
            disabled={isOutOfStock || quantity <= 1}
            onClick={() => onQuantityChange(quantity - 1)}
          >
            −
          </button>
          <output id="quantity" aria-live="polite">
            {quantity}
          </output>
          <button
            type="button"
            id="quantity-plus"
            aria-label="Tambah jumlah"
            disabled={isOutOfStock || quantity >= product.stock}
            onClick={() => onQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="submit-button"
          type="button"
          id="confirm-order"
          disabled={isOutOfStock}
          onClick={onConfirmOrder}
        >
          {isOutOfStock ? (
            "Stok Habis"
          ) : (
            <>
              Konfirmasi Pesanan <span aria-hidden="true">↗</span>
            </>
          )}
        </button>
      </div>

      {orderSummary && (
        <div
          className="confirmation-message"
          id="confirmation-message"
          role="status"
          aria-live="polite"
          style={{ whiteSpace: "pre-line" }}
        >
          {orderSummary}
        </div>
      )}

      <p
        id="stock-status"
        className={`stock-status ${errorMessage ? "is-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {errorMessage ||
          (isOutOfStock
            ? "Stok Habis"
            : `Stok tersedia: ${product.stock} (Validasi kuantitas aktif)`)}
      </p>

      <p className="delivery-note">
        <span aria-hidden="true">↗</span> Gratis ongkir &amp; garansi resmi 2 tahun
      </p>
    </div>
  );
}