import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
      name: 'Tyler Derdon',
      email: 'pypypy21@gmail.com',
      phone: '+7-922-725-45-65',
      birth: '22.09.2005',
      avatar: ''
    })
  })