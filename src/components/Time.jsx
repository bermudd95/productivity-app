import React, { useEffect, useState } from 'react'

const Time = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    const weekday = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
    const d = new Date();
		const day = weekday[d.getDay()];

  return (
    <body className='flex flex-col '>
        <p className='font-bold text-2xl'>
            {date.toLocaleTimeString()}
        </p>
        <p className='text-xl pl-6'>
            {day}
        </p>
    </body>
  )
}

export default Time