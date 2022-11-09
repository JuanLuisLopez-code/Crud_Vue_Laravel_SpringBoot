import http from "../http-common";

class MesaService {
  getAll() {
    return http.get("/crud");
  }
}

export default new MesaService();
