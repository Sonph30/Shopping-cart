import products from "../data";
import './HomeScreens.css'
import ProductCard from "../Components/ProductCard";

function HomeScreen() {
    return ( 
        <div className='product__wrapper'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default HomeScreen;