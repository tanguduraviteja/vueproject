<template>
    <div>
        <h1>Change role for {{savedemail}} </h1>
        <form>
            <p>Select user access level</p>
            <input type="radio" id="access" v-model="usera" name="useraccess" value="Admin">
<label for="access">Admin</label><br>
<input type="radio" id="access1" v-model="usera" name="useraccess" value="Technical Analyst">
<label for="access1">Technical Analyst</label><br>
<input type="radio" id="access2" v-model="usera" name="useraccess" value="Analyst">
<label for="access2">Analyst</label><br>
<button class="btn btn-primary" v-on:click="inputHandler">Update</button>
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
      usera: '',
    };
  },
  methods: {
    inputHandler() {
      this.$store.commit('save', this.usera);
      this.$router.push('/');
    },
  },
})

export default class InviteMembers extends Vue {
  get savedemail() {
    return this.$store.savedemail;
  }
}
</script>
