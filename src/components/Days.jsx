import React from 'react'
import DayOfTheWeek from './DayOfTheWeek';

const Days = () => {

   const today = new Date();
   const current = new Date(today.getFullYear(), 0, 0);
   const difference = today - current;
   const singleDay = 1000 * 60 * 60 * 24;
   const day = Math.floor(difference / singleDay);

  return (
		<div className='flex flex-col'>
			<div className='flex justify-evenly'>
				<p className='text-xl pr-2'>Year:</p>
				<p className='text-xl'>{day}/365</p>
			</div>
			<DayOfTheWeek />
		</div>
	);
}

export default Days