import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyCMVSpk73xSWbJbV0h7Vyl0kH7gYRzYvDo',
	authDomain: 'todoist-8d990.firebaseapp.com',
	databaseURL: 'https://todoist-8d990.firebaseio.com',
	projectId: 'todoist-8d990',
	storageBucket: 'todoist-8d990.appspot.com',
	messagingSenderId: '1073627048374',
	appId: '1:1073627048374:web:181f580ae3ec30000af917'
});

export { firebaseConfig as firebase };
