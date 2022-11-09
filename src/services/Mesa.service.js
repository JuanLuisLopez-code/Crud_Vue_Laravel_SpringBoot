import http from "../http-common";

class MesaService {
  getAll() {
    return http.get("/api/crud");
  }
}

export default new MesaService();
