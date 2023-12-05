import React from 'react'

const Size = ({ handleChange }) => {
    return (
        <div className='border-b pb-1 border-dashed border-gray-400 '>
            <div>Size</div>
            <div>
                <select onChange={handleChange} className='my-4 w-full p-3 outline-none border border-black rounded-md' name="" id="">
                    <option value="Select">Select</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}

export default Size
