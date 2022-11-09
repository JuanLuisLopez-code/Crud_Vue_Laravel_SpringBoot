import Vuex from "vuex";
import Constant from '../Constant';
import shortid from 'shortid';
import { createToaster } from "@meforma/vue-toaster";
import MesaService from "../services/Mesa.service"

const toaster = createToaster({ position: "top-right" });


export default Vuex.createStore({
    mutations: {
        [Constant.INITIALIZE_TABLE]: (state, payload) => {
            if (payload) {
                state.todolist = payload;
            }
        },
        [Constant.ADD_TODO]: (state, payload) => {
            state.todolist.push({ ...payload.todoitem, id: shortid.generate(), done: false });
            state.todoitem = { id: "", name: "", done: false };
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            state.todolist = state.todolist.filter((item) => item.id !== payload);
        },
        [Constant.TOGGLE_DONE]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.id === payload.id);
            state.todolist[index].done = !state.todolist[index].done;
        },
        [Constant.UPDATE_TODO]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.id === payload.todoitem.id);
            state.todolist[index] = payload.todoitem;
        },
    },
    actions: {
        [Constant.INITIALIZE_TABLE]: async (store) => {
            const data = await MesaService.getAll()
            store.commit(Constant.INITIALIZE_TABLE, data.data.data);
        },
        [Constant.ADD_TODO]: async (store, payload) => {
            toaster.success(`Table added`);
            await MesaService.create(payload.todoitem.name)
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DELETE_TODO]: async (store, payload) => {
            await MesaService.deleteOne(payload.id);
            toaster.success(`Table deleted`);
            store.commit(Constant.DELETE_TODO, payload.id);
        },
        [Constant.TOGGLE_DONE]: (store, payload) => {
            toaster.success(`Change done`);
            store.commit(Constant.TOGGLE_DONE, payload);
        },
        [Constant.UPDATE_TODO]: (store, payload) => {
            toaster.success(`Table updated`);
            store.commit(Constant.UPDATE_TODO, payload);
        },
    },
    getters: {
        getMesas(state) {
          return state.todolist;
        },
      },
});