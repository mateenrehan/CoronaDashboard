<template lang="html">
  <div>
    <ul>
      <li v-for='todo in todos' v-bind:key="todo">
        <span>{{todo}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import TestAPI from '../../services/testapi.js'
export default {
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    this.loadTodos()
  },
  methods: {
    async loadTodos () {
      const response = await TestAPI.getToDos()
      this.todos = response.data
    }
  }
}
</script>

<style lang="css">
</style>