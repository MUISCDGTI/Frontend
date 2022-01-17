import moment from "moment";

class RatingsService {
  static API_BASE_URL = "/api/v1/ratings";
  static API_KEY = "apikey=dc2151e0-2e52-43cb-b673-94bf1cb9d60b";

  static requestHeaders() {
    return {'content-type': 'text/json'};
  }

  static async getAllRatings() {
    const headers = this.requestHeaders();
    const request = new Request(RatingsService.API_BASE_URL + "/?" + RatingsService.API_KEY, {
      method: "GET",
      headers: headers,
    });

    const response = await fetch(request);
    if (!response.ok) {
      throw Error("Respuesta no válida " + response.status);
    }

    return response.json();
  }

  static async orderBy(order) {
    const headers = this.requestHeaders();
    const request = new Request(RatingsService.API_BASE_URL + "?sort=" + order + "&" + RatingsService.API_KEY, {
      method: "GET",
      headers: headers,
    });

    const response = await fetch(request);
    if (!response.ok) {
      throw Error("Respuesta no válida " + response.status);
    }

    return response.json();
  }
  
  static async getByDate(dates) {
    const headers = this.requestHeaders();
    const request = new Request(RatingsService.API_BASE_URL + "?between=" + dates + "&" + RatingsService.API_KEY, {
      method: "GET",
      headers: headers,
    });

    const response = await fetch(request);
    if (!response.ok) {
      throw Error("Respuesta no válida " + response.status);
    }

    return response.json();
  }

  static async getByRange(range) {
    const headers = this.requestHeaders();
    const request = new Request(RatingsService.API_BASE_URL + "?greaterThan=" + range[0] + "&lessThan=" + range[1] + "&" + RatingsService.API_KEY, {
      method: "GET",
      headers: headers,
    });

    const response = await fetch(request);
    if (!response.ok) {
      throw Error("Respuesta no válida " + response.status);
    }

    return response.json();
  }

  static async getByDescription(description) {
    const headers = this.requestHeaders();
    const request = new Request(RatingsService.API_BASE_URL + "?description=" + description + "&" + RatingsService.API_KEY, {
      method: "GET",
      headers: headers,
    });

    const response = await fetch(request);
    if (!response.ok) {
      throw Error("Respuesta no válida " + response.status);
    }

    return response.json();
  }

  static createRating(rating, id) {;
    let body = {...rating.getFieldsValue()};
    body['film'] = id;
    body['user'] = 11;
    body['date'] = moment(new Date());

    const request = new Request(RatingsService.API_BASE_URL + "/?" + RatingsService.API_KEY, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });

    fetch(request)
      .catch((err) => console.log(err))
  }

  static updateRating(rating,id) {;
    let body = {...rating.getFieldsValue()};

    const request = new Request(RatingsService.API_BASE_URL + "/" + id + "/value?" + RatingsService.API_KEY, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });

    fetch(request)
      .catch((err) => console.log(err))
  }
  
  static updateDescription(rating,id) {;
    let body = {...rating.getFieldsValue()};
    console.log(body)

    const request = new Request(RatingsService.API_BASE_URL + "/" + id + "/description?" + RatingsService.API_KEY, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });

    fetch(request)
      .catch((err) => console.log(err))
  }

  static deleteRating(id) {;
    const request = new Request(RatingsService.API_BASE_URL + "/" + id + "?" + RatingsService.API_KEY, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    fetch(request)
      .catch((err) => console.log(err))
  }
}

export default RatingsService;
