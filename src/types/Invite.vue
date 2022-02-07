<template>
    <div>
        <h1>Invite a team member to use chargebee</h1>
        <p> You can either let your team members access
            everything in this site,or assign specific roles
            to them.
        </p>
        <form>
            <p> Name:</p>
            <input v-model="name" type="text"/>
            <p>Email:</p>
            <input v-model="memberEmail" type="email"/>
            <p>Select user access level</p>
            <input type="radio" id="access" v-model="usera" name="useraccess" value="Admin">
<label for="access">Admin</label><br>
<input type="radio" id="access1" v-model="usera" name="useraccess" value="Technical Analyst">
<label for="access1">Technical Analyst</label><br>
<input type="radio" id="access2" v-model="usera" name="useraccess" value="Analyst">
<label for="access2">Analyst</label><br>
<button class="btn btn-primary" v-on:click="inputHandler">Invite</button>
<button class="btn btn-danger"><router-link to="/">Cancel</router-link>
</button>
        </form>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      name: '',
      memberEmail: '',
      usera: '',
    };
  },
  methods: {
    inputHandler() {
      const newMember = {
        name: this.name,
        role: this.usera,
        email: this.memberEmail,
      };
      this.$store.commit('addMember', newMember);
      this.$router.push('/');
    },
  },
})

export default class InviteMembers extends Vue {}
</script>
