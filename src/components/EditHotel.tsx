import { Hotel } from '../types/HotelType';
import "../styles/ListStyle.css";
import { ChangeEventHandler, useState } from "react";
import { AddHotelProps } from './AddHotel';
import { FormData } from './AddHotel';

interface EditHotelProps extends Pick<AddHotelProps, 'onBackBtnClickHnd'> {
  data: Hotel;
  onUpdateBtnClickHnd: AddHotelProps['onSubmitClickHnd'];
}

const EditHotel = (props: EditHotelProps) => {
  const { data, onBackBtnClickHnd, onUpdateBtnClickHnd } = props;
  const [formData, setFormData] = useState<FormData>({
    name: data.name,
    address: data.address,
    city: data.city,
    country: data.country,
    rating: data.country
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  
  const onSubmitBtnClickHnd =(e: any)=>{
    e.preventDefault();
    const updatedData: Hotel = { id: data.id, ...formData };
    onUpdateBtnClickHnd(updatedData);
    onBackBtnClickHnd('list');
  }

  return (
    <div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div className="name">
          <div className=""><label>Name: </label></div>
          <input type='text' name='name' value={formData.name} onChange={handleInputChange}/>
        </div>
        <div className="address">
          <div className=""><label>Address: </label></div>
          <input type='text' name='address' value={formData.address} onChange={handleInputChange}/>
        </div>
        <div className="city">
          <div className=""><label>City: </label></div>
          <input type='text' name='city' value={formData.city} onChange={handleInputChange}/>
        </div>
        <div className="country">
          <div className=""><label>Country: </label></div>
          <input type='text' name='country' value={formData.country} onChange={handleInputChange}/>
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
          <input type='submit' value='Update Hotel'/>
        </div>
      </form>
    </div>
  )
}

export default EditHotel
  