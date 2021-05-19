import React from 'react'

const FilterForm = props => (
    <form onSubmit={props.addFilter}>
        <div>
            filter shown with <input
            value={props.filter}
            onChange={props.handleFilterChange}
            />  
            <button type="submit">add filter</button>
        </div>
    </form>
)   

export default FilterForm
