import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import "../styles/AddHotel.css";
import { Hotel } from '../types/HotelType';

export interface AddHotelProps {
  onBackBtnClickHnd: (page: 'add' | 'edit' | 'list') => void;
  onSubmitClickHnd: (data: Hotel) => void;
}

export interface FormData {
  name: string;
  address: string;
  city: string;
  country: string;
  rating: string;
}

const AddHotel = (props: AddHotelProps) => {
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    city: '',
    country: '',
    rating: ''
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const data: Hotel = { id: new Date().toJSON().toString(), ...formData };
    onSubmitClickHnd(data);
    onBackBtnClickHnd('list');
  }
  
  return (
    <div className='form-container'>
      <div className="">
        <h3>Add Hotel</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor='hotel-name'>Name: </label>
          <input id='hotel-name' name='name' type='text' value={formData.name} required onChange={handleInputChange}/>
        </div>
        <div className="address">
          <label htmlFor='address'>Address: </label>
          <input id='address' name='address' type='text' value={formData.address} required onChange={handleInputChange}/>
        </div>
        <div className="city">
          <label htmlFor='city'>City: </label>
          <input id='city' name='city' type='text' value={formData.city} required onChange={handleInputChange}/>
        </div>
        <div className="country">
          <label htmlFor='country'>Country: </label>
          <input id='country' name='country' type='text' value={formData.country} required onChange={handleInputChange} />
        </div>
        <div className="rating">
          <label htmlFor='rating'>Rating: </label>
          <select id='rating' name='rating' value={formData.rating} placeholder='Select rating' required onChange={handleInputChange}>
            <option value='' disabled>Select rating</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div className="">
          <input type='button' value='Back' onClick={() => onBackBtnClickHnd('list')}/>
          <input type='submit' value='Add Hotel'/>
        </div>
      </form>
    </div>
  )
}

export default AddHotel;
