import React from 'react'
import Days from './components/Days';
import Time from './components/Time';
import Weather from './components/Weather';
import ToDoFormat from './components/ToDoFormat';



function App() {
  return (
		<body className='bg-black h-screen'>
			<div className='w-screen'>
				<img
					id='background'
					src='https://images.unsplash.com/photo-1679673177212-8a011a4f86f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872 '
					alt=''
				/>
			</div>
			<main className='px-10 text-white bg-black'>
				<div>
					<h2 className='font-bold text-2xl py-10'>Pocket Organizer</h2>
				</div>
				<hr></hr>
				<div className='flex justify-between h-full'>
					<div className='p-7 flex items-center'>
						<Days />
					</div>
					<div className='p-7 flex items-center'>
						<Time />
					</div>
					<div className='p-7'>
						<Weather />
					</div>
				</div>
				<hr></hr>
				<div className='py-5'>
					<ToDoFormat />
				</div>
			</main>
		</body>
	);
}

export default App;
