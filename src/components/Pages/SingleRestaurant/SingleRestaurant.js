import { useNavigate, useParams } from 'react-router-dom';
import './SingleRestaurant.css'
import Layout from '../../Layouts/Layout';
import { useContext } from 'react';
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import RatingCard from '../../Card/RatingCard/RatingCard';

const SingleRestaurant = () => {
    const { restaurantID } = useParams();
    const navigate = useNavigate();
    const { restaurantData, addReviewHandler } = useContext(RestaurantContext);
    
    const currRestaurant = restaurantData.find(restaurant => restaurant.id === +restaurantID);

    if(!currRestaurant){
        navigate('/');
    }

    const menuItems = currRestaurant.menu.map(item => item.name);

    const averageRating = currRestaurant.ratings.length === 0 ? 0 : currRestaurant.ratings.reduce((acc, {rating}) => acc+rating, 0)/(currRestaurant.ratings.length);

    return <Layout>
        <section className='singleRestaurant-section'>
            <div className='singleRestaurant-content'>
                <div className='singleRestaurant-restaurant'>
                    <p className='singleRestaurant-name'>{currRestaurant.name}</p>
                    <p className='singleRestaurant-p'>{menuItems.join(', ')}</p>
                    <p className='singleRestaurant-p'>{currRestaurant.address}</p>
                    <p className='singleRestaurant-p'>{currRestaurant.phone}</p>
                    <p className='singleRestaurant-p'>Rating: {averageRating.toFixed(2)}</p>
                </div>
                <div>
                    <button className='default-btn' onClick={()=>addReviewHandler(+restaurantID)}>Add Review</button>
                </div>
            </div>
            
            <div>
                <p className='singleRestaurant-reviews-p'>Reviews</p>
                <div>
                    {
                        currRestaurant.ratings.map((rating, index) => (
                            <RatingCard key={index} ratingItem={rating} />
                        ))
                    }
                </div>

            </div>
        </section>
    </Layout>
}

export default SingleRestaurant;