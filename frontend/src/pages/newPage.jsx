import React, {useState} from 'react';
import SearchForm from "../components/SearchForm";

const NewPage = () => {
    const [modal, setModal] = useState(false)
    const createRequest = () => {
        setModal(false)
    }
    return (
        <div className="new_Page">
            
            <div className="mySearch">
                <SearchForm create={createRequest}/>
            </div>
        </div>
    );
};

export default NewPage;