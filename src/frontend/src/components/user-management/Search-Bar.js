import { useEffect, useState } from 'react';
import { Search } from 'react-bootstrap-icons';

export default function SearchBar() {


    const style = {
        search: {
            margin: "10px",
        },
    }
    return(
        <div clasName="mb-3">
        <div className='serach' style={style.search}>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search User" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    
                />
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2">
                        <Search/>
                </button>
            </div>
        </div>
        </div>
    )
}