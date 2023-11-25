require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandler(client);

client.login(process.env.TOKEN);






const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp
} = require('firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const charactersReference = collection(db, 'characters');

// get collection data
// getDocs(charactersReference)
//   .then((snapshot) => {
//     let chars = [];

//     snapshot.docs.forEach((doc) => {
//       chars.push({
//         id: doc.id,
//         ...doc.data()
//       });
//     });

//     console.log(chars);
//   })
//   .catch((error) => console.error(error.message));

// setTimeout(() => {
//   addDoc(charactersReference, {
//     name: 'Tach ',
//     level: 60,
//     createdOn: serverTimestamp()
//   })
//   .then(() => {
//     console.log('Character was added!');
//   })
//   .catch(error => console.error(error.message));
// }, 5000);

// setTimeout(() => {
//   const docRef = doc(db, 'characters', 'V0V395aFYyPv7MG8UpdL');

//   deleteDoc(docRef)
//     .then(() => {
//       console.log('Doc deleted!');
//     })
//     .catch(error => console.error(error.message));
// }, 5000);

// onSnapshot(charactersReference, (snapshot) => {
//   let chars = [];

//   snapshot.docs.forEach((doc) => {
//     let character = {id: doc.id, ...doc.data()};
//     chars.push(character);
//   });

//   console.log(chars);
// });

// const queryReference = query(charactersReference, where('level', '==', 60), orderBy('createdOn'));
const queryReference = query(charactersReference, orderBy('createdOn'));

// setTimeout(() => {
//   const docRef = doc(db, 'characters', 'sDao9BNs0ZJuxfCta81e');

//   deleteDoc(docRef)
//     .then(() => {
//       console.log('Doc deleted!');
//     })
//     .catch(error => console.error(error.message));
// }, 5000);

onSnapshot(queryReference, (snapshot) => {
  let chars = [];

  snapshot.docs.forEach((doc) => {
    let character = {id: doc.id, ...doc.data()};
    chars.push(character);
  });

  console.log(chars);
});