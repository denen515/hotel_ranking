import { useState, useEffect } from 'react';
import "../styles/style.css";
import { Hotel, PageEnum } from '../types/HotelType';
import HotelList from './HotelList';
import AddHotel from './AddHotel';
import EditHotel from './EditHotel';


const Home = () => {
    const [openedPage, setOpenedPage] = useState(PageEnum.list);
    const [hotelList, setHotelList] = useState<Hotel[]>([]);
    const [dataToEdit, setDataToEdit] = useState<Hotel>({
        id: '',
        name: '',
        address: '',
        city: '',
        country: '',
        rating: '',
    });
    
    useEffect(() => {
        const listInString = localStorage.getItem("HotelList");
        if (listInString) {
           setHotelList(JSON.parse(listInString));
        }
    }, []);

    const handleOpenedPage = (page: 'add' | 'edit' | 'list') => {
        setOpenedPage(PageEnum[page]);
    }

    const _setHotelList = (list: Hotel[]) => {
        setHotelList(list);
        localStorage.setItem("HotelList", JSON.stringify(list));
    }
    
    const addHotelHnd = (data: Hotel) => {
        _setHotelList([...hotelList, data]);
    }
    
    // Big O notation, space and time complexity
    const deleteHotel = (data: Hotel) => {
        // const indexToDelete = hotelList.indexOf(data);
        // const tempList = [...hotelList];
        // tempList.splice(indexToDelete, 1);
        const filteredList = hotelList.filter(hotel => data.id !== hotel.id);
        _setHotelList(filteredList);
    }

    const onEditHotel = (data: Hotel) => {
        handleOpenedPage('edit')
        setDataToEdit(data);
    }
    
    const updateData = (data: Hotel) => {
        const filteredData = hotelList.map(hotel => {
            if (hotel.id === data.id) {
                return data;
            }
            return hotel;
        }); 
        
        _setHotelList(filteredData);
    }

    return (
    <> 
        <header><article  className='header'><h1>Hotels</h1></article></header>
  
        <section className='content'>
        {openedPage === PageEnum.list && (
            <>
                <input className='add-hotel' type="button" value='Add Hotel' onClick={() => setOpenedPage(PageEnum.add)}/>
                <HotelList list={hotelList} onDeleteClickHnd={deleteHotel} onEdit={onEditHotel}/>
            </>
        )}
        {openedPage === PageEnum.add && <AddHotel onBackBtnClickHnd={handleOpenedPage} onSubmitClickHnd={addHotelHnd}/>}
        
        {openedPage === PageEnum.edit && <EditHotel data={dataToEdit} onBackBtnClickHnd={handleOpenedPage} onUpdateBtnClickHnd={updateData}/>}
        </section>
    </>
  )  
}

export default Home
