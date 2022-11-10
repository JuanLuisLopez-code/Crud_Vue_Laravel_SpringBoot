import Api from '@/services/Api'
const laravar_url = "http://localhost:8001/api";
const springboot_url = "http://localhost:8002/api";

class MesaService {
    getAll() {
        return Api(`${laravar_url}`).get("/crud")
    }

    getAll_SpringBoot() {
        return Api(`${springboot_url}`).get("/mesas")
    }

    create(name) {
        return Api(`${laravar_url}`).post("/crud/", { "name": name })
    }

    update(id, name) {
        return Api(`${laravar_url}`).put(`/crud/${id}`, { "name": name })
    }

    deleteOne(id) {
        return Api(`${laravar_url}`).delete(`/crud/${id}`)
    }
}

export default new MesaService();
