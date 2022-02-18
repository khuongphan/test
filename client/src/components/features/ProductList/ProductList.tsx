import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import ProductComponent from './Product';
import { loadingProductList } from './ProductAPI';
import { loadingProductListAsync, selectProductList } from './ProductListSlice';

export function ProductList() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(selectProductList);
  
  useEffect(() => {
  });

  console.log('productList', productList);

  return (
    <div>
      <div>
      <button
          onClick={() => dispatch(loadingProductListAsync())}
        >Loading Products
        </button>
      </div>
      <div>
      {
        productList.map((item) => {
          return (
          <ProductComponent
            key={item.id}
            id={item.id}
            name={item.name}
            count={0}
            price={item.price} />
          )
          })
      }
      </div>
    </div>
  );
}

export default ProductList;