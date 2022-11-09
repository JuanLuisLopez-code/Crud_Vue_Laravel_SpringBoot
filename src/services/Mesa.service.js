import http from "../http-common";

class MesaService {
    getAll() {
        return http.get("/crud");
    }

    deleteOne(id) {
        return http.delete(`/crud/${id}`)
    }

    create(name) {
        return http.post("/crud/", { "name": name })
    }
}

export default new MesaService();
