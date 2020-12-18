import { useState } from 'react';
import { useKeepPositionScroll } from './hooks';

export default function Home() {
  const [items] = useState(Array.from(new Array(20), (_, i) => i));
  useKeepPositionScroll();
  
  return (
    <>
      <h1>Home</h1>
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
