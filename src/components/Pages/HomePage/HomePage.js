import { useContext } from "react";
import Layout from "../../Layouts/Layout";
import './HomePage.css';
import { RestaurantContext } from "../../../contexts/RestaurantContext";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";

const HomePage = () => {
    const { cuisineData, restaurantData, filterByCuisine, filterCuisineBtnHandler } = useContext(RestaurantContext);


    const getRestaurantData = () => {
        let restaurantDataList =  restaurantData;
        if(filterByCuisine === 0){ 
            return restaurantDataList;
        }else{
            return restaurantDataList.filter(restaurant => restaurant.cuisine_id === filterByCuisine);
        }
    }

    return <Layout>
        <div>
            <div>
                <h2 className="heading2">Select Your Cuisine: </h2>
            </div>
            <div>
                {
                    cuisineData.map(item => (
                        <button className="default-btn" key={item.id} onClick={()=>filterCuisineBtnHandler(item.id)}>{item.name}</button>
                    ))
                }
                <button className="default-btn" onClick={()=>filterCuisineBtnHandler(0)}>All</button>
            </div>
            <>
                { getRestaurantData().map(item => <ProductListCard key={item.id} restaurantList={item} />)}
            </>
        </div>
    </Layout>
}

export default HomePage;