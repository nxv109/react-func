import React from 'react';
import Introduce from './Introduce';
import Highlight from './Highlight';
import NewProduct from './NewProduct';
import InterestedProduct from './InterestedProduct';

export default function Content({products}) {

  return (
    <main className="content">
      <Introduce />
      <Highlight products={products} />
      <NewProduct products={products} />
      <InterestedProduct products={products} />
    </main>
  )
}
