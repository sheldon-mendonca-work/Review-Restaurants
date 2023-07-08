import './ProductCard.css'

export default function ProductCard(props){
    const { menuItem, restaurantName } = props;
    const { name, imgSrc, price, qty } = menuItem;
    
    return <div className="productcard-card">
        <div className="productcard-img">
            <img src={imgSrc} alt={name} className="productcard-card-img"/>
        </div>
        <div className="productcard-content">
            <h4 className="productcard-card-name">{name}</h4>
            <div className="productcard-price">{`Rs.${price} for ${qty}`}</div>
            <div className="productcard-name">{restaurantName}</div>
        </div>
    </div>
}