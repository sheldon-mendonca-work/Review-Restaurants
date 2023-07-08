import { useContext } from 'react';
import './AddPage.css'
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import { useLocation } from 'react-router-dom';
import { CrossIcon } from '../../Icons';

const AddPage = () => {
    const { newReview, setNewReview, addNewReview, initReviewState, setShowModal } = useContext(RestaurantContext);

    const location = useLocation();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        addNewReview(+location.pathname.split('/')[2]);
    } 

    const modalClickHandler = () => {
        setShowModal(false);
        setNewReview(initReviewState);
    }

    const selectChangeHandler = (event) => {
        setNewReview(prevState => ({...prevState, rating: +(event.target.value)}))
    }

    return <>
        <div className='add-layout'>
            <h2 className='add-layout-heading'>Add Your Review</h2>
            <form onSubmit={formSubmitHandler}>
                <div className='add-layout-item'>
                    <label htmlFor='name' className='add-name'>Name:</label>
                    <input type='text' id='name' placeholder='Enter Name' value={newReview.revName} className="add-name-input" onChange={(event)=>setNewReview(prevState => ({...prevState, revName: event.target.value}))} required/>
                </div>
                <div className='add-layout-item'>
                    <label htmlFor='rating' className='add-rating'>Rating:</label>
                    <select onChange={selectChangeHandler} value={newReview.rating}>
                        <option disabled={true} >Select Rating</option>
                        <option value={1} >1</option>
                        <option value={2} >2</option>
                        <option value={3} >3</option>
                        <option value={4} >4</option>
                        <option value={5} >5</option>
                    </select>
                </div>
                <div className='add-layout-item'>
                    <label htmlFor='comment' className='add-comment'>Comment:</label>
                    <input type='text' id='comment' placeholder='Enter Comment' value={newReview.comment} className="add-name-input" onChange={(event)=>setNewReview(prevState => ({...prevState, comment: event.target.value}))} required/>
                </div>
                
                <div className='add-btn-div'><button className='add-btn' type='submit'>Submit</button></div>
                <div className='add-modal-close-div'><CrossIcon onClick={modalClickHandler} className="add-modal-close"/></div>
            </form>
        </div>
        <div className='add-modal' onClick={modalClickHandler}></div>
    </>
}

export default AddPage;