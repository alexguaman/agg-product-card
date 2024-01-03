# agg-product-card

Este es un paquete de pruebas de despliegue de npm


### Alex Guaman
```
import {ProductCard} from agg-product-card;
```

```
<ProductCard
  key={product.id}
  product={product}
  initialValues={{
    count: 4,
    //maxCount: 10,
  }}
>
  {({reset, count, increaseBy, maxCount, isMaxCountReached}) => (
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
```