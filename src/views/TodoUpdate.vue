<template>
  <div class="container">
    <div class="row">
      <div class="col p-3">
        <h2>Update</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label htmlFor="todo">Name :</label>
          <input type="text" class="form-control" v-model="state.todoitemlocal.name" />
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary m-1" @click="updateTodo">Update</button>
          <button type="button" class="btn btn-primary m-1" @click="cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Constant from '../Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const currentRoute = useRoute();

    const todoitem = store.state.todolist.find((item) => item.id === currentRoute.params.id);
    sessionStorage.setItem("id", currentRoute.params.id)

    const state = reactive({
      todoitemlocal: { ...todoitem }
    });
    const updateTodo = () => {
      store.dispatch(Constant.UPDATE_TODO, { todoitem: state.todoitemlocal });
      router.push({ name: "home" });
    }

    const cancel = () => {
      router.push({ name: "home" });
    }

    return { state, updateTodo, cancel };
  }
}
</script>
  
<style>

</style>