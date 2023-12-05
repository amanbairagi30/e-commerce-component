import React from 'react'

const data = [
    {
        name: "Dark Brown Textured Sweatshirt for Men",
        category: "PullOver Sweatshirts",
        price: 1200,
        delPrice: 3150,
        img: "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/olive_green_corduroy_sweatshirt_for_men_base_19_10_2023_400x533.jpg",
    },
    {
        name: "Navy Blue Hooded Jacket for Men",
        category: "PullOver Sweatshirts",
        price: 1100,
        delPrice: 3130,
        img: "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/wine_textured_sweatshirt_for_men_base_19_10_2023_400x533.jpg",
    },
    {
        name: "Gray Knit Beanie Hat",
        category: "Beanie Hats",
        price: 700,
        delPrice: 1200,
        img: "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/solid_black_men_sweatshirts_base_07_11_2023_400x533.jpg",
    },
    {
        name: "Black Leather Boots for Men",
        category: "Leather Boots",
        price: 1800,
        delPrice: 2500,
        img: "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/1947_flat_knit_sweater_for_men_base_19_10_2023_400x533.jpg",
    },

];


const Home = () => {
    return (
        <div className=''>
            <div className=' p-4 mt-[2rem] mx-auto max-w-[1290px]'>
                <div className=' border-red-500'>
                    <div className='my-6'>
                        <h1 className='text-2xl text-center font-semibold'>E-Commerce Shop</h1>
                    </div>

                    {/* Product Grids */}
                    <div className=' border-red-500 grid gap-4 grid-cols-5'>
                        <div className='col-span-1  border-black '>
                            <div className='sticky top-4  p-4 border-black '>
                                {/* size */}
                                <div className='border-b pb-1 border-dashed border-gray-400 '>
                                    <div>Size</div>
                                    <div>
                                        <select className='my-4 w-full p-3 outline-none border border-black rounded-md' name="" id="">
                                            <option value="Select">Select</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                    </div>
                                </div>

                                {/* price */}
                                <div className='my-4'>
                                    <div className='text-xl font-semibold'>Price</div>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center  gap-4 w-full mt-4'>
                                            <input type="checkbox" />
                                            <p className='text-sm font-bold'>Price : Low to High</p>
                                        </div>
                                        <div className='flex items-center  gap-4 w-full mt-4'>
                                            <input type="checkbox" />
                                            <p className='text-sm font-bold'>Price : High to Low</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-4 flex flex-col gap-4 border-black'>
                            <div className='border-black p-4'>
                                <h1 className='text-xl font-extrabold'>MEN JOGGERS</h1>
                                <p className='text-sm font-semibold mt-4'>With the introduction of Joggers, men's fashion has come a long way. With exquisite styles and unmatchable comfort, every man today chooses Mens Joggers as their priority. So, Beyoung brings you a fabulous collection of these Joggers For Men Online. Scroll below to have a look at it.</p>
                            </div>

                            {/* products grid */}
                            <div className=' grid grid-cols-3 gap-y-6 gap-x-3 border-black p-4'>
                                {data.map((item, index) => {
                                    return (
                                        <>
                                            <div className='col-span-1 border-black'>
                                                <div>
                                                    <img className='w-full h-auto rounded-xl object-contain' src={item.img} alt="" />
                                                </div>

                                                <div className='mt-4 flex flex-col'>
                                                    <h1 className='font-semibold h-[2rem] overflow-hidden'>{item.name}</h1>
                                                    <p className='text-sm font-semibold text-gray-700'>{item.category}</p>
                                                </div>

                                                <div className='flex gap-4 mt-2'>
                                                    <div className='font-extrabold'>&#8377; {item.price}</div>
                                                    <del className='font-extrabold text-gray-400'>&#8377; {item.delPrice}</del>
                                                    <div className='text-green-500 font-semibold'>(50% off)</div>
                                                </div>
                                                <button className='text-xl text-center w-full my-4 bg-yellow-400 font-semibold h-auto p-2 rounded-md'>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
