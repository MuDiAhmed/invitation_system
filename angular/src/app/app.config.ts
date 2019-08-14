export class AppConfig {
  API = "http://localhost:8000/api";
  URI = {
    "login": {
      baseUrl: "/login"
    },
    "invitation": {
      baseUrl: "/invitation",
      url: {
        sent: "/sent",
        received: "/received",
        acceptReject: "/{id}",
        delete: "/{id}"
      }
    }
  };
  LocalStorage = {
    token: 'token'
  }
}
