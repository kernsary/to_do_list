import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        "Buy shopping",
        "Clean bathroom",
        "Car MOT"
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.todos.push(this.newItem);
        this.newItem = ""
      }
    }
  });
})
