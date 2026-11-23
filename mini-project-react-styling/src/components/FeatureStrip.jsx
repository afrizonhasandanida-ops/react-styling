export default function FeatureStrip({ features }) {
  return (
    <section className="feature-strip" aria-label="Keunggulan produk">
      {features.map((item) => (
        <div key={item.number}>
          <span>{item.number}</span>
          <p>
            {item.text.split("\n").map((line, index, arr) => (
              <span key={index}>
                {line}
                {index < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      ))}
    </section>
  );
}