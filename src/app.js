import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy shopping", priority: "high"},
        {name: "Clean bathroom", priority: "low"},
        {name: "Car MOT", priority: "high"}
      ],
      newName: "",
      newPriority: ""
    },
    methods: {
      saveNewItem: function(){
        const newItem = {
          name: this.newName,
          priority: this.newPriority
        }
        this.todos.push(newItem);
        this.newName = "";
        this.newPriority = ""
      }
    }
  });
})
