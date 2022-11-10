import Api from '@/services/Api'
const laravar_url = "http://localhost:8001/api";

class MesaService {
    getAll() {
        return Api(`${laravar_url}`).get("/crud")
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
