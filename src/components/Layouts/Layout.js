import { useContext } from 'react';
import './Layout.css';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import AddPage from '../Pages/AddPage/AddPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftArrowIcon } from '../Icons';

const Layout = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { showModal } = useContext(RestaurantContext);
    
    const locationType = location.pathname.split('/')[1];

    return <>
    <div className='layoutHeading'>
        { locationType !== "" && <LeftArrowIcon className="layoutHeading-svg" onClick={()=>navigate(-1)} />}
        <h1 className='heading1' onClick={()=>navigate('/')}>Food Ordering App</h1>
    </div>
    <main>
        {children}
    </main>
    { showModal && <AddPage />}
    </>
};

export default Layout;