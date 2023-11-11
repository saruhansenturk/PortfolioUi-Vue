import axios from "axios";

async function post(url, data, token, params = null) {
    var response = await axios.post(url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "Access-Control-Allow-Headers",
        },
        params: params,
        timeout: 10000,
    });

    return response;
}

async function get(url, token = null, queryParams = null) {
    var response = await axios.get(url, {
        params: queryParams,
    });

    return response;
}

export default {
    post,
    get,
};
