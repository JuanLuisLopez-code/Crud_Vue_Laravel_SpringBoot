import Vuex from "vuex";
import Constant from '../Constant';
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
            state.todolist.push({ ...payload.todoitem });
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            state.todolist = state.todolist.filter((item) => item.id !== payload);
        },
        [Constant.UPDATE_TODO]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.id === payload.todoitem.id);
            state.todolist[index] = payload.todoitem;
        },
    },
    actions: {
        [Constant.INITIALIZE_TABLE]: async (store) => {
            if (sessionStorage.getItem("type") == "SpringBoot") {
                const SpringBoot = await MesaService.getAll_SpringBoot()
                store.commit(Constant.INITIALIZE_TABLE, SpringBoot.data);
            } else {
                const Laravel = await MesaService.getAll()
                store.commit(Constant.INITIALIZE_TABLE, Laravel.data.data);
            }
        },
        [Constant.ADD_TODO]: async (store, payload) => {
            await MesaService.create(payload.todoitem.name)
            toaster.success(`Table added`);
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DELETE_TODO]: async (store, payload) => {
            await MesaService.deleteOne(payload.id);
            toaster.success(`Table deleted`);
            store.commit(Constant.DELETE_TODO, payload.id);
        },
        [Constant.UPDATE_TODO]: async (store, payload) => {
            if (sessionStorage.getItem("id")) {
                payload.todoitem.id = sessionStorage.getItem("id")
            }
            await MesaService.update(payload.todoitem.id, payload.todoitem.name)
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