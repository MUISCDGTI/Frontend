import moment from "moment";

class RatingsService {
  static API_BASE_URL = "/api/v1/ratings";

  static requestHeaders() {
    return {'content-type': 'text/json'};
  }

  static async getAllRatings() {
    const headers = this.requestHeaders();
    const request = new Request(RatingsService.API_BASE_URL + "/", {
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
    const request = new Request(RatingsService.API_BASE_URL + "?sort="+order, {
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
    const request = new Request(RatingsService.API_BASE_URL + "?between="+dates, {
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
    const request = new Request(RatingsService.API_BASE_URL + "?greaterThan="+range[0]+"&lessThan="+range[1], {
      method: "GET",
      headers: headers,
    });

    const response = await fetch(request);
    if (!response.ok) {
      throw Error("Respuesta no válida " + response.status);
    }

    return response.json();
  }

  static createRating(rating) {;
    let body = {...rating.getFieldsValue()};
    body['film'] = 11;
    body['user'] = 11;
    body['date'] = moment(new Date());

    const request = new Request(RatingsService.API_BASE_URL + "/", {
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

    const request = new Request(RatingsService.API_BASE_URL + "/"+id+"/value", {
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

    const request = new Request(RatingsService.API_BASE_URL + "/"+id+"/description", {
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
    const request = new Request(RatingsService.API_BASE_URL + "/"+id, {
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
