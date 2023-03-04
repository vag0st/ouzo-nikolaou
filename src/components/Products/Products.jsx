import React from 'react';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
import './Products.css';

// function Product({ name, price, image }) {
//   return (
//     <div className="product">
//       <div className="product-image">
//         <img src={image} alt={name} />
//       </div>
//       <div className="product-info">
//         <h3>{name}</h3>
//         <p>
//           Price: $
//           {price}
//         </p>
//         <p>
//           Recipe: asd
//         </p>
//       </div>
//     </div>
//   );
// }

// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
// };

// function ProductsPage() {
//   return (
//     <div>
//       <h2>Our Products</h2>
//       <div className="products-container">
//         <Product name="Product 1" price={9.99} image="https://via.placeholder.com/150" />
//         <Product name="Product 2" price={19.99} image="https://via.placeholder.com/150" />
//         <Product name="Product 3" price={29.99} image="https://via.placeholder.com/150" />
//         <Product name="Product 4" price={39.99} image="https://via.placeholder.com/150" />
//       </div>
//     </div>
//   );
// }

function ProductsPage() {
  return (
    <div>
      <h1>Our Products</h1>
      <Outlet />
    </div>
  );
}

export default ProductsPage;
