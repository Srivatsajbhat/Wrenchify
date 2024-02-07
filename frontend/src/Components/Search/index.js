import React from 'react'
import './search.css'

function Search() {
    return (
        <div>
            <div className='search-title'>
                <h1>Search For Garages</h1>
            </div>
            <div className="switch-container">
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider"></span>
                </label>
            </div>
            <div className="search-bar">
                <div class="input-group">
                    <input type="email" class="input" id="search" name="search" placeholder="" autocomplete="off" />
                    <input class="button--submit" value="Search" type="submit" />
                </div>
            </div>
        </div>
    )
}

export default Search
