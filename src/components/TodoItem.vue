<template>
    <li :class="checked(todoitem.done)">
        <ul>
            <li>
                {{ todoitem.id }}
            </li>
            <li>
                {{ todoitem.name }}
            </li>
        </ul>
        <button @click.stop="deleteTodo(todoitem.id)">Delete</button>
        <button @click.stop="editTodo(todoitem.id)">Edit</button>
    </li>
</template>

<script>
import Constant from '../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
export default {
    props: {
        todoitem: Object
    },

    setup(props) {
        const store = useStore();
        const router = useRouter();

        const checked = (done) => {
            return { "list-group-item": true, "list-group-item-success": done };
        }
        const deleteTodo = (id) => {
            store.dispatch(Constant.DELETE_TODO, { id });
        }
        const editTodo = (id) => {
            router.push({ name: 'update', params: { id } })
        }

        return { deleteTodo, editTodo, checked }
    }
}
</script>

<style>

</style>