import React, { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import { Dialog } from '../UI';
import ListProductCart from './ListProductCart';

const ProductCard = (props) => {
  const { showSummaryProds, onShowSummaryProds } = useContext(ProductContext);
  return (
    <>
      {showSummaryProds &&
        <Dialog onBackDropClicked={() => onShowSummaryProds(false)}>
          <ListProductCart {...props} onClose={() => { onShowSummaryProds(false) }} />
        </Dialog>
      }
    </>
  )
}

export default ProductCard;