<template>
  <div class="container">
  <div class="row justify-content-evenly">
    <div class="col-4">
    <span>Team Members({{cnt }})</span>
    </div>
    <div class="col-4">
    <button type="button" class="btn btn-primary">
      <router-link id="link" to='/Invite'>+ Invite Members</router-link>
      </button>
   </div>
    </div>
    <TeamMemberList></TeamMemberList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TeamMemberList from '@/types/TeamMemberList.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    TeamMemberList,
  },
})
export default class Home extends Vue {
  get cnt() {
    return this.$store.getters.cnt;
  }
}
</script>

<style scoped>
#link {
  background-color: red;
}
</style>
