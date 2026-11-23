import { useState } from "react";
import "./App.css";
import { productData } from "./data/productData";
import Navbar from "./components/navbar";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";
import FeatureStrip from "./components/FeatureStrip";
import Footer from "./components/Footer";

const formatRupiah = (amount) =>
  `Rp ${Number(amount).toLocaleString("id-ID")}`;

export default function App() {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [currentImage, setCurrentImage] = useState(productData.colors[0].image);
  const [quantity, setQuantity] = useState(1);
  const [isEngravingActive, setIsEngravingActive] = useState(false);
  const [engravingText, setEngravingText] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [orderSummary, setOrderSummary] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const unitPrice =
    productData.price + (isEngravingActive ? productData.engravingPrice : 0);
  const totalPrice = unitPrice * quantity;

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentImage(color.image);
    setOrderSummary("");
    setErrorMessage("");
  };

  const handleThumbnailClick = (imageSrc) => {
    setCurrentImage(imageSrc);
  };

  const handleQuantityChange = (nextQty) => {
    if (productData.stock === 0) {
      setErrorMessage("Stok produk sedang habis.");
      return;
    }

    if (nextQty < 1) {
      setQuantity(1);
      setErrorMessage("Minimal jumlah pesanan adalah 1 unit.");
      return;
    }

    if (nextQty > productData.stock) {
      setQuantity(productData.stock);
      setErrorMessage(`Jumlah pesanan melebihi stok (${productData.stock} unit).`);
      return;
    }

    setQuantity(nextQty);
    setErrorMessage("");
    setOrderSummary("");
  };

  const handleToggleEngraving = (checked) => {
    setIsEngravingActive(checked);
    if (!checked) {
      setEngravingText("");
    }
    setOrderSummary("");
    setErrorMessage("");
  };

  const handleEngravingTextChange = (value) => {
    setEngravingText(value);
    setErrorMessage("");
  };

  const handleConfirmOrder = () => {
    if (productData.stock === 0) {
      setErrorMessage("Stok produk sedang habis. Pesanan tidak dapat diproses.");
      return;
    }

    if (quantity < 1 || quantity > productData.stock) {
      setErrorMessage(
        `Masukkan jumlah antara 1 hingga ${productData.stock} unit.`
      );
      return;
    }

    const trimmedEngraving = engravingText.trim();
    if (isEngravingActive && trimmedEngraving === "") {
      setErrorMessage(
        "Silakan isi teks engraving terlebih dahulu atau matikan opsi engraving."
      );
      return;
    }

    setErrorMessage("");
    setCartCount((prev) => prev + quantity);

    const engravingInfo = isEngravingActive
      ? `Custom Engraving: "${trimmedEngraving}" (+${formatRupiah(productData.engravingPrice)})`
      : "Custom Engraving: Tidak";

    setOrderSummary(
      `Pesanan dikonfirmasi!\nProduk: ${productData.title}\nWarna: ${selectedColor.name}\nJumlah: ${quantity} unit\n${engravingInfo}\nTotal: ${formatRupiah(totalPrice)}`
    );
  };

  return (
    <div className="page-shell" id="top">
      <Navbar cartCount={cartCount} />

      <main className="product-page" id="produk">
        <section className="product-hero" aria-label="Detail produk">
          <ProductGallery
            currentImage={currentImage}
            selectedColorName={selectedColor.name}
            thumbnails={productData.thumbnails}
            onThumbnailClick={handleThumbnailClick}
            isEngravingActive={isEngravingActive}
            engravingText={engravingText}
          />

          <ProductDetails
            product={productData}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            isEngravingActive={isEngravingActive}
            onToggleEngraving={handleToggleEngraving}
            engravingText={engravingText}
            onEngravingTextChange={handleEngravingTextChange}
            totalPrice={totalPrice}
            formatRupiah={formatRupiah}
            onConfirmOrder={handleConfirmOrder}
            orderSummary={orderSummary}
            errorMessage={errorMessage}
          />
        </section>

        <FeatureStrip features={productData.features} />
      </main>

      <Footer />
    </div>
  );
}
