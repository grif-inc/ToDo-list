import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, get, set } from 'firebase/database'

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
    async initUser() {
      const auth = getAuth()
      const db = getDatabase()

      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const user = JSON.parse(storedUser)
        this.name = user.name
        this.email = user.email
        this.uid = user.uid
        this.avatar = user.avatar || ''
        this.phone = user.phone || ''
        this.birth = user.birth || ''
      }

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.name = user.displayName || ''
          this.email = user.email || ''
          this.uid = user.uid

          // Загружаем недостающие поля из Realtime Database
          const userRef = ref(db, `users/${user.uid}`)
          const snapshot = await get(userRef)
          if (snapshot.exists()) {
            const dbUser = snapshot.val()
            this.phone = dbUser.phone || ''
            this.birth = dbUser.birth || ''
            // Если в БД есть avatar, обновляем его
            this.avatar = dbUser.avatar || this.avatar
          } else {
            // Если данных ещё нет - можно создать дефолтные в БД
            set(userRef, {
              name: this.name,
              email: this.email,
              phone: '',
              birth: '',
              avatar: this.avatar
            })
          }

          // Сохраняем всё в localStorage
          localStorage.setItem('user', JSON.stringify({
            name: this.name,
            email: this.email,
            uid: this.uid,
            avatar: this.avatar,
            phone: this.phone,
            birth: this.birth
          }))
        } else {
          // Выход - чистим всё
          this.name = ''
          this.email = ''
          this.uid = ''
          this.phone = ''
          this.birth = ''
          this.avatar = ''
          localStorage.removeItem('user')
        }
      })
    },

    // Для обновления данных пользователя в БД
    async updateUserData(data) {
      if (!this.uid) return
      const db = getDatabase()
      const userRef = ref(db, `users/${this.uid}`)
      await set(userRef, {
        name: this.name,
        email: this.email,
        phone: data.phone || this.phone,
        birth: data.birth || this.birth,
        avatar: data.avatar || this.avatar
      })

      // Локально тоже обновляем
      this.phone = data.phone || this.phone
      this.birth = data.birth || this.birth
      this.avatar = data.avatar || this.avatar

      localStorage.setItem('user', JSON.stringify({
        name: this.name,
        email: this.email,
        uid: this.uid,
        avatar: this.avatar,
        phone: this.phone,
        birth: this.birth
      }))
    }
  }
})
