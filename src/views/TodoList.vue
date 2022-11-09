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
import Constant from '../Constant';

export default {
    components: { TodoItem },
    setup() {

        const store = useStore();

        store.dispatch(Constant.INITIALIZE_TABLE)
        
        const state = reactive({
            todolist: computed(() => store.getters["getMesas"])
        });

        return { state }
    }
}
</script>

<style>

</style>