const firebaseConfig = {
  apiKey: "AIzaSyAIeuQYEtoWBN4TR3-teKVLNbC3JCqbEPw",
  authDomain: "test-firebase-c4dd0.firebaseapp.com",
  projectId: "test-firebase-c4dd0",
  storageBucket: "test-firebase-c4dd0.firebasestorage.app",
  messagingSenderId: "270885386107",
  appId: "1:270885386107:web:4d12bba66b27c45604afde"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);