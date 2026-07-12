// Initialize Firebase Firestore globally
if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length && typeof firebaseConfig !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.firestore();
} else {
    console.warn("Firebase SDK compat library is not loaded.");
}
