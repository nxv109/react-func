import React, { useEffect, useState } from 'react';
import Content from './Content';
import { fetchData } from '../../../mixins/fetchData';

export default function Home() {
  const [products, setProducts] = useState(Array);

  useEffect(() => {
    setProducts(fetchData('products'));
  }, []);

  return (
    <>
      <Content products={products} />
    </>
  )
}
