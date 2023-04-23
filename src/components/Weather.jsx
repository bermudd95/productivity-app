import React, { useState } from 'react'
import axios from 'axios';

const Weather = () => {
    const [data, setData] = useState({});
		const [location, setLocation] = useState("");

        const weatherIcon = document.getElementById('icon');

		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2098fd6a5749caae76cbbe04b5879596`;

		const searchLocation = (event) => {
			if (event.key === "Enter") {
				axios.get(url).then((response) => {
					setData(response.data);
					console.log(response.data);
				});
				setLocation("");
			}
		};

  return (
		<div className='flex flex-col'>
			<div className='pb-4'>
				<input
					className='rounded-lg text-black py-1 px-2'
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={searchLocation}
					placeHolder='Enter Location'
					type='text'
					required
				/>
			</div>
			<button className='bg-blue-500 rounded-lg py-1 px-2'>Search</button>
			<div className='py-5'>
                <div className='text-center'>
				    <p className='font-bold text-2xl'>{data.name}</p>
			    </div>
			    <div className='px-2 py-4'>
				    <p className='text-xl text-center'>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</p>
			    </div>
                {data.name != undefined &&
                    <div className='py-2 border-white border-t-2'></div>
                }
			    {data.name != undefined &&
                    <div className='flex justify-evenly'>
                        <p className='font-semibold'>Feels like</p>
				        {data.main ? (
					        <p className='bold'>{data.main.feels_like.toFixed()}°F</p>
				        ) : null}
			        </div>
                }    
            </div>
		</div>
	);
}

export default Weather