<template>
  <div class="col-12">
    <div class="mt-4" v-for="(todo, index) in todos" :key="todo">
      <div class="card w-100">
        <div class="card-block">
          <div class="lead"
             :class="{completed: todo.completed}">
             <img v-if="todo.avatar"
                  :src="todo.avatar"
                  alt=""
                  class="thumbnail rounded mr-4"
                  style="width: 40px; height: 40px;">
             <strong>{{todo.text}}</strong>

             <small
                    class="text-info ml-1"
                    v-if="!authenticate || todo.uid !== activeUser.uid">{{todo.name}}
             </small><br>
            <small>{{todo.timestamp | fromNow}}</small>
          </div>
          <input type="text"
                 v-model.trim="todo.text"
                 v-if="editTodo === index"
                 class="form-control"
                 @blur="editTodo = null; onEdit(todo)">
        </div>

        <div v-if="authenticate && activeUser.uid === todo.uid"
             class="card-footer d-flex justify-content-end">

          <i class="btn btn-xs ml-2 fa fa-pencil alert-success"
             @click="editTodo = index"
             aria-hidden="true">
          </i>

          <i class="btn btn-xs ml-2 fa fa-floppy-o alert-success"
             @click="editTodo = null; onEdit(todo)"
             v-if="editTodo === index"
             aria-hidden="true">
          </i>

          <i class="btn btn-xs ml-2 fa fa-check alert-info"
             @click="actualizeState(true, todo)"
             aria-hidden="true">
          </i>

          <i class="btn btn-xs ml-2 fa fa-repeat alert-info"
             @click="actualizeState(false, todo)"
             aria-hidden="true">
          </i>

          <i class="btn btn-xs ml-2 fa fa-trash alert-danger"
             @click="deleteTodo(todo)"
             aria-hidden="true">
          </i>

        </div>

        <!-- <div class="jumbotron">
          <p>Todo : {{todo.uid}} | Active user: {{activeUser.uid}}</p>
          <p>Todo : {{todo.name}} | Active user: {{activeUser.displayName}}</p>
          <p>Todo : {{todo.avatar}} | Active user: {{activeUser.avatar}}</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebaseServer'

  export default {
    props: ['todos', 'activeUser', 'authenticate'],
    data () {
      return {
        editTodo: null, //editandorTarea
        isEditing: false
      }
    },
    methods: {
      deleteTodo(todo) {
        db.ref('todos/' + todo['.key']).remove();
      },
      onEdit(todo) { // editarTarea
        db.ref('todos/' + todo['.key']).update({
          text: todo.text
        })
      },
      actualizeState(state, todo){
        db.ref('todos/' + todo['.key']).update({
          completed: state ? true : false,
          timestamp: todo.timestamp
        })
      }
    }
  }
</script>

<style scoped>
i{
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
  font-style: italic;
  color: gray;
}
small{
  font-size: 12px;
}
/*i{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  /*border: 1px solid #ccc;
  border-radius: 2px;
}*/
</style>
