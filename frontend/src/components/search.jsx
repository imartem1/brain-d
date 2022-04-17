import React from 'react';

const Search = function () {
    //const [value, setValue] = useState('Введите нужный ID')
    return (

        <div >
            <div className="main_search">
                <div className="search_id">
                    <label htmlFor="name">Поиск по ID</label>
                    <input type="text" id="name"
                           placeholder="Введите нужный ID"/>
                </div>
                <input className="btn" type="submit" value="Найти"/>
            </div>
        </div>
    );
};

export default Search;