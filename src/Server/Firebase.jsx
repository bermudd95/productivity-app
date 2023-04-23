import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyBWJ0niOb0IlvlidgE5Pd4o3f4En-y37hI",
	authDomain: "daily-tasks-dc4e0.firebaseapp.com",
	projectId: "daily-tasks-dc4e0",
	storageBucket: "daily-tasks-dc4e0.appspot.com",
	messagingSenderId: "967979275564",
	appId: "1:967979275564:web:e67b1889cd51ffcd67c889",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);