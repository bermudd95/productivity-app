import React from 'react'

const DayOfTheWeek = () => {
    const d = new Date();
    const day = d.getDay();
  return (
		<div className='flex justify-evenly'>
			<p className='text-xl'>Week:</p>
			<p className='text-xl'>{day + 1}/7</p>
		</div>
	);
}

export default DayOfTheWeek