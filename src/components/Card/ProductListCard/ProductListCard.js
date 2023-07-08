import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './ProductListCard.css';

export default function ProductListCard (props){
    const { restaurantList } = props;
    const { id, name, menu } = restaurantList;

    const navigate = useNavigate();

    return <section className="productlist-section">
        <h3 className='productlist-heading3'>Dishes by <span className="productlist-link" onClick={()=>navigate(`/restaurant/${id}`)}>{name}</span></h3>
        <div className="productlist-list">
            { menu.length === 0 && <h3>No items on menu...</h3> }
            {
                menu.length > 0 && menu.map((menuItem, index) => <ProductCard key={index} menuItem={menuItem} restaurantName={name} />)
            }
        </div>
    </section>
}