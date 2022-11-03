import Vuex from "vuex";
import Constant from '../Constant';
import shortid from 'shortid';

export default Vuex.createStore({
    state: {
        todolist: [
            { "id": shortid.generate(), "name": "Mesa1", "done": false },
            { "id": shortid.generate(), "name": "Mesa2", "done": false },
            { "id": shortid.generate(), "name": "Mesa3", "done": false },
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            state.todolist.push({ ...payload.todoitem, id: shortid.generate(), done: false });
            state.todoitem = { id: "", name: "", done: false };
        },
        [Constant.DELETE_TODO] :(state,payload)=> {
            let index = state.todolist.findIndex((item)=>item.id === payload.id);
            state.todolist.splice(index,1);
        },
        [Constant.TOGGLE_DONE] :(state,payload)=> {
            let index = state.todolist.findIndex((item)=>item.id === payload.id);
            state.todolist[index].done= !state.todolist[index].done;
        },
        [Constant.UPDATE_TODO] :(state,payload)=> {
            let index = state.todolist.findIndex((item)=>item.id === payload.todoitem.id);
            state.todolist[index] = payload.todoitem;
        },
    },
    actions: {
        [Constant.ADD_TODO] : (store, payload) => {
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DELETE_TODO] : (store, payload) => { 
            store.commit(Constant.DELETE_TODO, payload);
        },
        [Constant.TOGGLE_DONE] : (store, payload) => {
            store.commit(Constant.TOGGLE_DONE, payload);
        },
        [Constant.UPDATE_TODO] : (store, payload) => { 
            store.commit(Constant.UPDATE_TODO, payload);
        },
    }
});