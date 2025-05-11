import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useUserStore = defineStore('user', {
    state: () => ({
      name: '',
      email: '',
      phone: '',
      uid: '',
      birth: '',
      avatar: '' 
    }),
      actions: {
        initUser() {
          const auth = getAuth();
          const storedUser = localStorage.getItem('user');

          if (storedUser) {
            const user = JSON.parse(storedUser);
            this.name = user.name;
            this.email = user.email;
            this.uid = user.uid;
            this.avatar = user.avatar;
            this.isLoaded = true;
          }
          onAuthStateChanged(auth, (user) => {
            if (user) {
              this.name = user.displayName
              this.email = user.email
              this.uid = user.uid

              localStorage.setItem('user', JSON.stringify({
                name: this.name,
                email: this.email,
                uid: this.uid,
                avatar: this.avatar
              }))
            } else {
              this.name = ''
              this.email = ''
              this.uid = ''
              localStorage.removeItem('user')
            }

          });
        }
      }
  })