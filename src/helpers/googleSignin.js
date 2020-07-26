import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import 'firebase/auth';

const IOS_CLIENT_ID = '908882839428-9iln0n1onll9jos62b1vmqtp6mcv1eq0.apps.googleusercontent.com';
const ANDROID_CLIENT_ID = '908882839428-v7cbnoja8a615leq5uiessai8u19v5sk.apps.googleusercontent.com';

const firebaseConfig = {
  apiKey: 'AIzaSyCpptvyBTPpgbwxOtYfE6RHpgSUMIcXt_A',
  authDomain: 'activity-tracker-d9d56.firebaseapp.com',
  projectId: 'activity-tracker-d9d56'
};

firebase.initializeApp(firebaseConfig);

const googleSignin = async () => {
  try {
    const result = await Google.logInAsync({
      iosClientId: IOS_CLIENT_ID,
      androidClientId: ANDROID_CLIENT_ID,
      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(null, result.accessToken);
      
      const signIn = await firebase.auth().signInWithCredential(credential);

      const token = await signIn.user.getIdToken();
      return {
        success: true,
        token
      };
    } else {
      return { success: false };
    }
  } catch (e) {
    return { success: false };
  }
};

export default googleSignin;
