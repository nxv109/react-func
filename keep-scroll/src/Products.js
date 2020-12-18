import { useState } from 'react';
import { useKeepPositionScroll } from './hooks';

export default function Products() {
  const [items] = useState(Array.from(new Array(20), (_, i) => i));
  useKeepPositionScroll();
  
  return (
    <>
      <h1>Products</h1>
      <section>
        {items.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </section>
    </>
  );
}
