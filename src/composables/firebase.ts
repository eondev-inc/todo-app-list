import { initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserInfo,
} from "firebase/auth";
import { ref, onUnmounted, computed, Ref } from "vue";
import { useRouter } from "vue-router";

const app = initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

const auth: Auth = getAuth();

export function useAuth() {
  const user: Ref<UserInfo | null> = ref(null);
  const router = useRouter();

  const unsuscribed = auth.onAuthStateChanged((_user) => {
    if (_user !== null) {
      user.value = _user;
    }
  });

  onUnmounted(unsuscribed);

  const isLogin = computed(() => !!user.value?.uid);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const singInWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmail = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    await auth.signOut();
    user.value = null;
    router.push("/login");
  };

  return {
    user,
    isLogin,
    signInWithGoogle,
    singInWithEmail,
    createUserWithEmail,
    signOut,
  };
}
