import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return {
      // counter: 0
    }
  },
  actions: {
    // increment() {
    //   this.$state = {
    //     counter: this.$state.counter+1
    //   }
    // }
  },
})
