import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SingleRestaurant from "../Pages/SingleRestaurant/SingleRestaurant";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:restaurantID" element={<SingleRestaurant />} />
        <Route path="*" element={<HomePage />} />
    </Routes>
}

export default AllRoutes;