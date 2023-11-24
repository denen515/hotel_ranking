import React from 'react';
import "../styles/modal.css";
import { type } from 'os';
import { Hotel } from '../types/HotelType';

type Props = {
    onClose: () => void;
    data: Hotel;
}
const HotelModel = (props: Props) => {
  const {onClose, data} = props;
  
    return (
    <div id='myModal' className='modal'>
        <div className="modal-content">
            <span className='close' onClick={onClose}>&times;</span>
            <div className="">
                <h3>Hotel Data</h3>
                <div className="">
                    <div className="">
                        <div className=""><label htmlFor="">Name: {data.name}</label></div>
                    </div>
                    <div className="">
                        <div className=""><label htmlFor="">Address: {data.address}</label></div>
                    </div>
                    <div className="">
                        <div className=""><label htmlFor="">City: {data.city}</label></div>
                    </div>
                    <div className="">
                        <div className=""><label htmlFor="">Country: {data.country}</label></div>
                    </div>
                    <div className="">
                        <div className=""><label htmlFor="">Rating: {data.rating}</label></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelModel
