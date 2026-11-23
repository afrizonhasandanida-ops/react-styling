export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Atelier Audio, beranda">
        ATELIER<span> / </span>AUDIO
      </a>
      <nav className="main-nav" aria-label="Navigasi utama">
        <a href="#produk">Headphones</a>
        <a href="#customize">Personalisasi</a>
        <a href="#detail">Cerita MW75</a>
      </nav>
      <a className="bag-link" href="#pesan">
        Tas belanja <span aria-hidden="true">({cartCount})</span>
      </a>
    </header>
  );
}