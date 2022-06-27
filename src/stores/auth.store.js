import { defineStore } from "pinia";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    router: useRouter(),
    loading: false,
  }),
  getters: {
    // something
  },
  actions: {
    async login(email, password) {
      try {
        this.$state.loading = true;
        await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify(auth.currentUser));
        this.$state.loading = false;
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert(error.message);
        }
        return;
      }
      this.$state.router.push("/");
    },
    async register(email, password) {
      try {
        this.$state.loading = true;
        await createUserWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify(auth.currentUser));
        this.$state.loading = false;
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert(error.message);
        }
        return;
      }
      this.$state.router.push("/");
    },
    async logout() {
      await signOut(auth);
      localStorage.removeItem("user");
      this.$state.router.push("/login");
    },
  },
});
