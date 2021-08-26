import { useHttp, HTTP_VERBS, API } from "./useHttp";
import { useContext, useCallback, useEffect } from "react";
import { ProductContext } from "../context/product-context";

const useProducts = () => {
  const [loading, sendRequest] = useHttp();

  const {
    cleanProducts,
    initializeProducts
  } = useContext(ProductContext)


  useEffect(() => {
    if(cleanProducts === undefined || cleanProducts === true) {
      sendRequest(HTTP_VERBS.GET, API.FRUITS).then(products => {
        initializeProducts(products);
      })
    }
  }, [sendRequest, cleanProducts, initializeProducts])


  return [loading];
}

export default useProducts;