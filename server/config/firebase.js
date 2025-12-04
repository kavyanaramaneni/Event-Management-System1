const admin = require('firebase-admin');
const dotenv = require('dotenv');

// 1. Load env variables
dotenv.config({ path: '../.env' }); 

// 2. Debugging: Check if the key was found
console.log("DEBUG: Private Key Found?", process.env.FIREBASE_PRIVATE_KEY ? "YES" : "NO");

// 3. Safety Check
if (!process.env.FIREBASE_PRIVATE_KEY) {
  console.error("❌ ERROR: FIREBASE_PRIVATE_KEY is missing from .env file.");
  process.exit(1); 
}

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // This is Line 19 - The new safe location
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ojasx-c9e0d.appspot.com"
});

const bucket = admin.storage().bucket();
console.log("✅ Firebase Connected Successfully");

module.exports = { admin, bucket };