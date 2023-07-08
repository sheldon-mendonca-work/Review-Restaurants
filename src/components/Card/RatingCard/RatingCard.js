import { StarIcon } from '../../Icons';
import './RatingCard.css'

export default function RatingCard(props){
    const { ratingItem } = props;
    const { rating, revName, pp, comment } = ratingItem;
    
    return <div className="ratingcard-card">
        <div className="ratingcard-user">
            <div className="ratingcard-user-details">
                <span className="ratingcard-img-span">
                    <img src={pp} alt={revName} className="ratingcard-img"/>
                </span>
                <h4 className="ratingcard-card-name">{revName}</h4>
            </div>
            <div className="ratingcard-name">{comment}</div>
        </div>
        <div className="ratingcard-rating-div">
            <div className="ratingcard-rating">{rating} </div>
            <StarIcon className="ratingcard-rating-svg" />
        </div>
    </div>
}