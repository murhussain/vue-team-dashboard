import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {

  // data
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  // computed
  actions: {
    async fill() {
      let r = await import('@/team.json');

      this.$state = r.default;
    },

    grow(spots) {
      this.spots = spots;
    }
  },

  // methodes
  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    }
  }
});