import { useEffect, useState } from 'react';
import './ProductDetail.css';

function ProductDetail(props) {
  //props destructuring
  const { product, setModalFlg } = props;

  // Lifecycle Hooks
  // mount 단계에서 실행하고 싶을 때 최초 1회만 실행

  // useEffect(() => {
  //   console.log('Mount!!');
  // }, []);

 const [cnt, setCnt] = useState(0);

  // unmount 전에 실행 : Clean up Function 작성

  // useEffect(() => {
  //   console.log('Mount!!');

  //   // Clean up Function
  //   return () => {
  //     console.log('UnMount');
  //   }
  // }, []);

  // const [cnt, setCnt] = useState(0);

  // state가 변할때마다 실행, mount 후 최초 1회 실행
  useEffect(() => {
     console.log('test');
  }, [cnt]);

  return (
  <>
    {/* <div className="detail-modal" onClick={() => { setModalFlg(false) }}> */}
      <div className="detail-modal">
      <div className="detail-box">
        <div className="detail-img" style={{backgroundImage: `url('${product.img}')`}}></div>   
        <p className='detail-title'>{product.title}</p>
        <p className='detail-info'>{product.info}</p>
        <p className='detail-price'>{product.price}</p>
        <p>{cnt}</p>
        <button type="button" onClick={() => { setCnt((prev) => prev + 1) }}>+</button>
      </div>
    </div>
  </>
  );
}

export default ProductDetail;