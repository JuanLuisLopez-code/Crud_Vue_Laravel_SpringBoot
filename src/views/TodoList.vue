<template>
    <div style="mt-2">
        <div class="card card-default card-borderless">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <ul class="list-group">
                        <TodoItem v-for="todoitem in state.todolist" :key="todoitem.id" :todoitem="todoitem" />
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    components : { TodoItem },
    setup() {
        const store = useStore();

        const state = reactive({ 
            todolist : computed(()=>store.state.todolist ) 
        });

        return { state }
    }
}
</script>

<style>

</style>