import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import { TeamMember } from '@/types';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: [{
      name: 'Bob',
      email: 'Bob@chargebee.com',
      role: 'Admin',
    },
    {
      name: 'Alice',
      email: 'alice@chargebee.com',
      role: 'Analyst',
    }] as TeamMember[],
    index: 0,
  },
  mutations: {
    addMember(state, member: any) {
      state.members.push(member);
    },
    deleteMember(state, index) {
      state.members.splice(index, 1);
    },
    saveindex(state, startindex) {
      state.index = startindex;
    },
    save(state, savedrole) {
      state.members[state.index].role = savedrole;
    },
  },
  getters: {
    listMembers(state) {
      return state.members;
    },
    cnt(state) {
      return state.members.length;
    },
    savedemail(state) {
      return state.members[state.index].email;
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
