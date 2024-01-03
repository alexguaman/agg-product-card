import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
        }}
      >
        {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
          <>
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons
              className="custom-buttons"
              activeBtnClass="no-class"
            />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
