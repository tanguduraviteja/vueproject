<template>
<div>
    <b-card >
      <ul class="list-unstyled" v-for="(member,index) in members" v-bind:memberEmail="member.email"
      v-bind:key="member.email">
        <b-media tag="li" :class='border-bottom'>
          <template #aside>
            <b-avatar
              width="64"
              alt="placeholder"
              src="https://picsum.photos/125/125/?image=58"
            ></b-avatar>

            <div id="mem" class="member-info">

          <h5 class="mt-0 mb-1">{{member.name }}</h5>
          <p class="mb-0">
            {{ member.email }}
          </p>
          <p class="mb-0">
            {{ member.role }}
          </p>
          <button class='btn btn-danger' id='btn1' v-on:click="removeuser(index)">
          Remove</button>
          <router-link to="/edit"><button class='btn btn-success' id='btn2'
          v-on:click="saveindex(index)">Edit</button>
          </router-link>
          </div>
          </template>

        </b-media>
      </ul>
    </b-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TeamMemberList',
  props: {
    members: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeuser(index: number) {
      this.$store.commit('deleteMember', index);
    },
  },
})
export default class TeamMemberList extends Vue {
  get members() {
    return this.$store.getters.listMembers;
  }
}
</script>
<style>
#btn1 {
    position: relative;
    left:300px;
    width:100px;
}
#btn2 {
    position: relative;
    left:410px;
    width:100px;
}
#mem{
   position: relative;
   left:100px;
}
</style>
