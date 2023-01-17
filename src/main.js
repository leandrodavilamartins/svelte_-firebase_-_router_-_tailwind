import App from './App.svelte';
import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore } from '../node_modules/firebase/firestore';

const firebaseConfig={
	  	apiKey: "AIzaSyAsWNihnM84o7kmb7HqlWuV_GhpLMt7Wak",
  		authDomain: "serene-circlet-329302.firebaseapp.com",
  		projectId: "serene-circlet-329302",
  		storageBucket: "serene-circlet-329302.appspot.com",
  		messagingSenderId: "1066497611107",
  		appId: "1:1066497611107:web:b997ede6c4954ef2df2f56",
  		measurementId: "G-SGWTMRXT59"
}

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase); 

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export {db,app};