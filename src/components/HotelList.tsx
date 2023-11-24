import React from 'react';
import "../styles/ListStyle.css";
import { Hotel } from '../types/HotelType';
import HotelModel from './HotelModel';
import {useState} from "react";
type Props = {
    list: Hotel[];
    onDeleteClickHnd: (data: Hotel)=>void;
    onEdit: (data: Hotel)=>void;
}

const HotelList = (props: Props) => {
  
    const {list, onDeleteClickHnd, onEdit} = props; 
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as Hotel | null);
    
    const viewHotel = (data: Hotel) => {
        setDataToShow(data);
        setShowModal(true);
    }
    
    const onCloseModal = () => {
        setShowModal(false);
    }

    
    return (
    <div>
    <article>
        <h3 className='list-header'>Hotel List</h3>
    </article>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Country</th>
                <th>Rating</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
  {list.map(hotels=>{
    // console.log(hotels);
    
    return (
    <tr>
        <td>{hotels.name}</td>
        <td>{hotels.address}</td>
        <td>{hotels.city}</td>
        <td>{hotels.country}</td>
        <td>{hotels.rating}</td>
        <td>
            <div className="">
                <input type="button" value='View' onClick={() => viewHotel(hotels)}/>
                <input type="button" value='Edit' onClick={() => onEdit(hotels)}/>
                <input type="button" value='Delete' onClick={() => onDeleteClickHnd(hotels)}/>
            </div>
        </td>
    </tr>
    );
  })}
 </tbody>
</table>
{showModal && dataToShow !== null && (<HotelModel onClose={onCloseModal} data={dataToShow}/>)}
    </div>
  )
}

export default HotelList
