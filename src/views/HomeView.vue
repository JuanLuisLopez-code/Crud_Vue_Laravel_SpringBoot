<template>
</template>

<script>
import Constant from '../../src/Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const state = reactive({ 
            todoitemlocal : { no:"", todo:"", desc:"", done:false } 
        });

        const addTodo = () => {
          if (state.todoitemlocal.todo.trim().length >= 2) {
            store.dispatch(Constant.ADD_TODO, { todoitem : state.todoitemlocal })
            router.push({ name:"todoList" });
          } else {
            alert('할일을 2글자 이상으로 입력해주세요');
          }
        }
        const cancel = () => {
            router.push({ name:"todoList"});
        }

        return { state, addTodo, cancel }
    }
}
</script>

<style>

</style>