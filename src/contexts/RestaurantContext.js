import { createContext, useState } from "react";
import { cuisineData, restaurantsData } from "../backend/database";
import { useNavigate } from "react-router-dom";

export const RestaurantContext = createContext();

const initCuisineData = cuisineData;
const initRestaurantData = restaurantsData;
const initReviewState = {
    revName: "",
    comment: "",
    rating: 5,
    pp: "https://picsum.photos/100/100"
};

export const RestaurantProvider = ({children}) => {
    const navigate = useNavigate();
    const [ showModal, setShowModal ] = useState(false); 
    const [ cuisineData, setCuisineData ] = useState(initCuisineData);
    const [ restaurantData, setRestaurantData ] = useState(initRestaurantData);
    const [ filterByCuisine, setFilterByCuisine ] = useState(0);
    const [ newReview, setNewReview ] = useState(initReviewState);
    
    const filterCuisineBtnHandler = (cuisineID) => {
        setFilterByCuisine(cuisineID);
    }

    const addReviewHandler = (resID) => {
        setNewReview(initReviewState);
        setShowModal(true);
    }

    const addNewReview = (restaurantID) => {
        let oldRestaurant = restaurantData.find(item => item.id === restaurantID);
        const newRestaurant = {...oldRestaurant, ratings: [...oldRestaurant.ratings, newReview]};
        const newResList = restaurantData.map(item => item.id === restaurantID ? newRestaurant : item);
        
        setRestaurantData(newResList);
        setNewReview(initReviewState);
        setShowModal(false);
        navigate(`/restaurant/${restaurantID}`)
    }

    return <RestaurantContext.Provider value={{ showModal, setShowModal, cuisineData, restaurantData, setRestaurantData, filterByCuisine, setFilterByCuisine, filterCuisineBtnHandler, setCuisineData, addReviewHandler, newReview, setNewReview, addNewReview, initReviewState }}>
        {children}
    </RestaurantContext.Provider>
};