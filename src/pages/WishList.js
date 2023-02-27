import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProduct } from '../context/ProductProvider';
import Loading from './Loading';

const WishList = () => {
    const { state: { wishlist, loading, error } } = useProduct();

    let content;
    if (loading) {
        content = <Loading></Loading>
    }
    if (error) {
        content = <img src="https://i.ibb.co/zSFsH55/000-http-error-codes.png" alt="" />
    }
    if (!loading && !error && wishlist.length === 0) {
        content = <p>Product list is empty</p>
    }
    if (!loading && !error && wishlist.length) {
        content = wishlist.map((product) => <ProductCard product={product}></ProductCard>)
    }

    return (
        <div>
            <h1>This is Wishlist Page</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
                {content}
            </div>
        </div>
    );
};

export default WishList;










// import React from 'react';
// import ProductCard from '../components/ProductCard';
// import { useProduct } from '../context/ProductProvider';
// import Loading from './Loading';

// const WishList = () => {
//     const { state: { wishlist, loading, error } } = useProduct();

//     let content;
//     if (loading) {
//         content = <Loading></Loading>
//     }
//     if (error) {
//         content = <img src="https://i.ibb.co/zSFsH55/000-http-error-codes.png" alt="" />
//     }
//     if (!loading && !error && wishlist.length === 0) {
//         content = <p>Product list is empty</p>
//     }
//     if (!loading && !error && wishlist.length) {
//         content = wishlist.map((product) => <ProductCard product={product}></ProductCard>)
//     }

//     return (
//         <div>
//             <h1>This is Wishlist Page</h1>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
//                 {content}
//             </div>
//         </div>
//     );
// };

// export default WishList;