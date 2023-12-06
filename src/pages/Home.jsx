import React, { useState } from 'react'
import Category from '../components/Category/Category';
import Colors from '../components/Colors/Colors';
import Price from '../components/Price/Price';
import Size from '../components/Size/Size';
import {HiOutlineMenuAlt3} from "react-icons/hi"

const data = [
    {
        img: "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/olive_green_corduroy_sweatshirt_for_men_base_19_10_2023_400x533.jpg",
        title: "Winter T-shirt",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "levis",
        color: "green",
        category: "winter",
        size: "s"
    },
    {
        img: "https://i.pinimg.com/564x/d8/fe/19/d8fe19282f306c026565410469072769.jpg",
        title: "Nike Air Vapormax Plus",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "Nike",
        color: "blue",
        category: "winter",
        size: "s"
    },

    {
        img: "https://i.pinimg.com/564x/70/4f/05/704f053e79cd3fcdb89c647c1e155cc0.jpg",
        title: "Nike Waffle One Sneaker",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "levis",
        color: "cream",
        category: "summer",
        size: "m"
    },
    {
        img: "https://i.pinimg.com/564x/21/50/93/215093871a303d04e743ff0989982749.jpg",
        title: "Nike Running Shoe",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "zara",
        color: "green",
        category: "summer",
        size: "m"
    },
    {
        img: "https://i.pinimg.com/736x/b5/bf/ed/b5bfed8b9083a09cc49292fabf941ffb.jpg",
        title: "Flat Slip On Pumps",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "levis",
        color: "green",
        category: "mens",
        size: "m"
    },
    {
        img: "https://i.pinimg.com/564x/6e/01/9d/6e019d4d89f0184455a1764c8a17e673.jpg",
        title: "Knit Ballet Flat",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "50",
        company: "zara",
        color: "brown",
        category: "mens",
        size: "s"
    },

    {
        img: "https://i.pinimg.com/564x/4f/ba/e9/4fbae9b614d6920862a6cd76269f34b0.jpg",
        title: "Loafer mens",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "50",
        company: "levis",
        color: "brown",
        category: "mens",
        size: "l"
    },

    {
        img: "https://i.pinimg.com/564x/34/3e/01/343e015cf913fa1d14c7a1a2de135ac2.jpg",
        title: "Nike Zoom Freak",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "levis",
        color: "blue",
        category: "summer",
        size: "l"
    },

    {
        img: "https://i.pinimg.com/736x/34/68/4f/34684fefc4cdb721100a442c23e4c8f8.jpg",
        title: "Nike Men's Sneaker",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "zara",
        color: "white",
        category: "summer",
        size: "l"
    },

    {
        img: "https://i.pinimg.com/564x/c5/17/07/c51707a35c92a9de0c27e7562a5e848f.jpg",
        title: "h&m BLACK-OCE",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "150",
        company: "h&m",
        color: "white",
        category: "summer",
        size: "xl"
    },
    {
        img: "https://i.pinimg.com/736x/90/2e/7c/902e7cf0dfac758d089592db0875880b.jpg",
        title: "Pacer Future Sneaker",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "150",
        company: "zara",
        color: "black",
        category: "summer",
        size: "xl"
    },
    {
        img: "https://i.pinimg.com/736x/ae/e0/01/aee001fcb1f0a7c7c40ccd032a684f7d.jpg",
        title: "Unisex-Adult Super",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "150",
        company: "zara",
        color: "skin",
        category: "summer",
        size: "xl"
    },
    {
        img: "https://i.pinimg.com/736x/cb/e5/5e/cbe55e7df8071eeab4d5b8aa137603ea.jpg",
        title: "Roma Basic Sneaker",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "150",
        company: "h&m",
        color: "rose",
        category: "summer",
        size: "xxl"
    },
    {
        img: "https://i.pinimg.com/564x/ec/85/68/ec85680d807e0d6e7f2e438ba5089944.jpg",
        title: "Pacer Future Doubleknit",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "150",
        company: "h&m",
        color: "red",
        category: "summer",
        size: "xxl"
    },

    {
        img: "https://i.pinimg.com/564x/e0/e7/5a/e0e75a965467998fe36368f98833cdba.jpg",
        title: "Fusion Evo Golf Shoe",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "100",
        company: "h&m",
        color: "green",
        category: "summer",
        size: "xxl"
    },
    {
        img: "https://i.pinimg.com/564x/87/10/ca/8710cab6adc7f1734955f0e1836d8a36.jpg",
        title: "Rainbow Chex Skate",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "100",
        company: "lv",
        color: "red",
        category: "mens",
        size: "m"
    },
    {
        img: "https://i.pinimg.com/736x/57/86/73/5786739b782b5c3bb79ac87848b4ad88.jpg",
        title: "Low-Top Trainers",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "100",
        company: "lv",
        color: "blue",
        category: "nike",
        size: "m"
    },
    {
        img: "https://i.pinimg.com/564x/f6/0e/96/f60e96edcbfeb335b2c613dfa370fa63.jpg",
        title: "lv Unisex Low-Top",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "100",
        company: "lv",
        color: "white",
        category: "nike",
        size: "l"
    },
    {
        img: "https://i.pinimg.com/564x/9c/17/9b/9c179b3fb245c1adadf532680eaf7cbd.jpg",
        title: "Classic Bandana summer",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "50",
        company: "Nike",
        color: "gray",
        category: "nike",
        size: "xl"
    },
    {
        img: "https://i.pinimg.com/736x/de/f1/25/def125d893b242f5486c220ffe261f75.jpg",
        title: "Chunky High Heel",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "50",
        company: "lv",
        color: "black",
        category: "half",
        size: "xl"
    },
    {
        img: "https://i.pinimg.com/736x/ec/ef/74/ecef74e5879aa3060fe14ffb7d31ee79.jpg",
        title: "Slip On Stiletto High Heel",
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "100",
        company: "h&m",
        color: "black",
        category: "half",
        size: "s"
    }
];


const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [toggle , setToggle] = useState(false);

    // ----------- Filtering By SideBar -----------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // fillterfunction

    function filteredData(products, selected) {

        let filteredProducts = products;


        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, size }) =>
                category === selected ||
                color === selected ||
                company === selected ||
                newPrice === selected ||
                size === selected
            );
        }


        return filteredProducts
    }


    const result = filteredData(data, selectedCategory.toLowerCase());


    return (
        <div className=''>
            <div className=' p-4 mt-[2rem] mx-auto max-w-[1290px]'>
                <div className=' border-red-500'>
                    <div className='my-6'>
                        <h1 className='text-2xl text-center font-semibold'>E-Commerce Shop</h1>
                    </div>

                    {/* Product Grids */}
                    <div className=' border-red-500 grid relative  grid-cols-5'>
                        <div className={`col-span-1 bg-[#fff] custom-shadow px-8 py-4 rounded-lg ${toggle ? "block fixed z-40 top-[6rem] right-[2rem] w-fit" : "hidden"} lg:col-span-1 lg:block border-black `}>
                            <div className='sticky top-0   border-black '>
                                {/* category */}
                                <Category handleChange={handleChange} />

                                {/* price */}
                                <Price handleChange={handleChange} />

                                {/* color */}
                                <Colors handleChange={handleChange} />

                                {/* size */}
                                <Size handleChange={handleChange} />

                            </div>
                        </div>
                        <div className='col-span-5 lg:col-span-4 flex flex-col gap-4 border-black'>
                            <div className='border-black p-4'>
                                <h1 className='text-xl font-extrabold text-center'>MEN JOGGERS</h1>
                                <p className='text-sm font-semibold mt-4 text-justify'>With the introduction of Joggers, men's fashion has come a long way. With exquisite styles and unmatchable comfort, every man today chooses Mens Joggers as their priority. So, Beyoung brings you a fabulous collection of these Joggers For Men Online. Scroll below to have a look at it.</p>
                            </div>

                            {/* products grid */}
                            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-y-3 gap-x-3 border-black p-4'>
                                {result.map((item, index) => {
                                    return (
                                        <>
                                            <div className='col-span-1 flex flex-col  border-black' key={index}>
                                                <div className='w-full flex-auto  h-[60%]'>
                                                    <img className='w-full h-full rounded-xl object-cover' src={item.img} alt="" />
                                                </div>

                                                <div className='mt-4 flex flex-1 flex-col px-4'>
                                                    <h1 className='font-semibold h-[2rem] flex-1 overflow-hidden'>{item.title}</h1>
                                                    <p className='text-sm font-semibold text-gray-700'>{item.category}</p>
                                                </div>

                                                <div className='flex flex-1 gap-4 mt-2 px-4'>
                                                    <div className='font-extrabold'>&#8377; {item.newPrice}</div>
                                                    <del className='font-extrabold text-gray-400'>{item.prevPrice}</del>
                                                    <div className='text-green-500 font-semibold'>(50% off)</div>
                                                </div>
                                                <button className='text-xl text-center min-w-fit max-w-ful my-4 bg-yellow-400 font-semibold h-auto m-2 p-2 rounded-md'>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                        <div className='text-3xl block lg:hidden custom-shadow fixed top-[1rem] right-[2rem] bg-[#fff] w-fit p-2 rounded-full'>
                            <HiOutlineMenuAlt3 onClick={() => setToggle(!toggle)} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
