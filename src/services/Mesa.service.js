import Api from '@/services/Api'
import secret from '../secret'

class MesaService {
    getAll() {
        return Api(`${secret.laravar_url}`).get("/crud")
    }

    getAll_SpringBoot() {
        return Api(`${secret.springboot_url}`).get("/mesas")
    }

    create(name) {
        return Api(`${secret.laravar_url}`).post("/crud/", { "name": name })
    }

    create_SpringBoot(name) {
        return Api(`${secret.springboot_url}`).post("/mesas/", { "name": name })
    }

    update(id, name) {
        return Api(`${secret.laravar_url}`).put(`/crud/${id}`, { "name": name })
    }

    update_SpringBoot(id, name) {
        return Api(`${secret.springboot_url}`).put(`/mesas/${id}`, { "name": name })
    }

    deleteOne(id) {
        return Api(`${secret.laravar_url}`).delete(`/crud/${id}`)
    }

    deleteOne_SpringBoot(id) {
        return Api(`${secret.springboot_url}`).delete(`/mesas/${id}`)
    }
}

export default new MesaService();
