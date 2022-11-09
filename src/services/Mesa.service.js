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

    update(id, name) {
        console.log(id);
        console.log(name);

        return http.put(`/crud/${id}`, { "name": name })
    }
}

export default new MesaService();
