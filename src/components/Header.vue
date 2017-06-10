<template>
  <div class="container-fluid">
      <!-- <div class="row"> -->
        <div class="col-12 mb-4 cHeader align-items-center w-100">
          <nav class="navbar navbar-toggleable-md navbar-light p-2">
            <button class="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" style="color: white;"></span>
            </button>
            <router-link tag="a"
            to="/"
            class="navbar-brand"><a style="font-size: 24px; color: white; letter-spacing: .5px;"><kbd style="padding: 9px;"><strong>Weel. Messenger</strong></kbd></a>
          </router-link>

          <div class="collapse navbar-collapse"
          id="navbarSupportedContent">

          <ul class="navbar-nav mr-auto"></ul>
          <ul class="navbar-nav navbar-right">
            <li class="nav-item active" v-if="!authenticate">
              <a class="nav-link cNavLink mr-4"
              href="#"
              @click="connect"
              style="color: white;">Connect
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown" v-if="authenticate">
            <a class="nav-link dropdown-toggle"
               data-toggle="dropdown"
               href="#"
               role="button"
               aria-haspopup="true" aria-expanded="false"
               style="color: white;">{{activeUser.displayName}}</a>
            <div class="dropdown-menu text-center">
              <a class="dropdown-item"
              href="">
              <img :src="activeUser.photoURL"
              style="height:40px; weight: 40px;"
              class="rounded-circle mb-1">
            </a>
            <a class="dropdown-item btn btn-danger"
            href="">
            <button @click.prevent="disconnect"
            class="btn btn-success">Disconnect</button>
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
    <!-- </div> -->
  </div>
</template>

<script>

  import { auth } from '../firebaseServer'
  import { provider } from '../firebaseServer'

  export default {
    props: ['activeUser', 'authenticate', 'errors'],
    methods: {
      connect () {
        auth.signInWithPopup(provider).catch((error) => {
          console.error('Error in logIn: ', error);
          this.errors.push(error)
        });
      },
      disconnect () {
        auth.signOut().catch(function(error) {
          console.error('Error in logIn: ', error);
          this.errors.push(error)
        });
      }
    }
  }
</script>
<style scoped>
.container-fluid{
  background-color: rgba(52, 152, 219,1.0);
  background: -webkit-linear-gradient(-90deg, rgba(52, 152, 219,1.0), rgba(46, 204, 113,1.0));
  background: -o-linear-gradient(-90deg, rgba(52, 152, 219,1.0), rgba(46, 204, 113,1.0));
  background: -moz-linear-gradient(-90deg, rgba(52, 152, 219,1.0), rgba(46, 204, 113,1.0));
  background: linear-gradient(-90deg, rgba(52, 152, 219,1.0), rgba(46, 204, 113,1.0));
  color: white;
  /*margin: 0;*/
}
.cNavLink{
    color: white;
    margin-top: 10px;
    display: inline-block;
    padding: 10px;
    border: 2px solid rgba(46, 204, 113,1.0);
    /*border: none;*/
    transition: width .4s ease-out;
    border-radius: 6px;
}
.cNavLink:hover{
  transform: scale(1.02);
}
a.nav-link{
  color: #FFF;
}
.dropdown-menu {
  background-color: transparent;
}
.cHeader{
  padding: 0 60px;
}
button{
  cursor: pointer;
}
.dropdown-item {
  background: transparent;
}
.dropdown-item:hover{
  background: transparent;
}
@media (max-width: 767px) {
  .cHeader{
    padding: 0;
  }
  .dropdown, .dropup {
    position: relative;
    margin-top: 10px;
  }
  .cNavLink{
      background: rgba(52, 152, 219,1.0);
  }
}
</style>
