<template>
  <div>
    <!-- Header -->
    <app-header :activeUser="activeUser"
    :errors="errors"
    :authenticate="authenticate">
  </app-header>

  <!-- Main content -->
  <div class="container">

    <div class="row">

      <!-- Welcome -->
      <app-welcome v-if="!authenticate"></app-welcome>

      <new-todo @addTodos="addTodos($event)"
        :authenticate="authenticate"
        :activeUser="activeUser">
      </new-todo>

      <todos :todos="todos"
        :active-user="activeUser"
        :authenticate="authenticate">
      </todos>
    </div>

    <div class="row justify-content-center">
      <div class="col-xs-11 alert alert-warning mt-4 text-center"
           v-if="todos.length > 0">
           {{todos.length}} message{{todos.length == 1 ? '' : 's'}} sent
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xs-11 col-sm-12 alert alert-danger text-center mt-4"
           v-if="errors.length > 0">
           <span v-for="error in errors">{{ error.message }}</span>
      </div>
    </div>

    <div class="row text-center justify-content-center mt-5">
      <div class="alert col-xs-10"
           style="font-size: 14px;">
           &copy; 2017 All Rights Reserved By The Author.<br>Built with
           <i class="fa fa-heart"
              aria-hidden="true"
              style="color: red; font-size: 16px;">
           </i> by <strong>Aaron Dizele</strong>
      </div>
    </div>

  </div>

  </div>
</template>

<script>
import { db, auth, timestamp } from '../firebaseServer'

export default {
  data () {
    return {
      todos: [],
      activeUser: null,
      authenticate: false,
      errors: [],
    }
  },
  methods: {
    addTodos (todo) {
      // return this.todos.push(todo);
        // return this.todos.unshift({
        //   text: todo,
        //   completed: false
        // })
        db.ref('todos/').push({
            text: todo,
            completed: false,
            name: this.activeUser.displayName,
            avatar: this.activeUser.photoURL,
            uid: this.activeUser.uid,
            timestamp: timestamp
        })
      },
      fetchData () {
        // RT database
        db.ref('todos/').on('value', (snapshot) => {
          this.todos = []
          let data = snapshot.val()
          for( let i in data){
            this.todos.unshift({
              '.key': i,
              text: data[i].text,
              completed: data[i].completed,
              name: data[i].name,
              avatar: data[i].avatar,
              uid: data[i].uid,
              timestamp: data[i].timestamp
            })
          }
        })
      }
  },
  mounted () {
    // RT database
    this.fetchData();
    // Auth
    auth.onAuthStateChanged( user => {
      if (user) {
        this.activeUser = user;
        this.authenticate = true;
      }else{
        this.activeUser = null;
        this.authenticate = false;
      }
    })
  },
  watch: {
    change () {
      return this.fetchData();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top: 10px;
  color: #666;
  word-wrap: break-word;
}
i, button{
  cursor: pointer;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
@media only screen (max-width: 575px) {
  .container, .container-fluid{
    width: 100%;
    padding: 0;
    margin: 0;
  }
}
</style>
