import API_BASE_URL from "@/config/config";

const getSuspender = (promise) => {
    let status = "pending";
    let response;

    const suspender = promise.then(
        (res) =>{
            status ="success";
            response = res;
        },
        (err) =>{
            status = "error";
            response = err;
        }
    );

    const read = () => {
        switch (status) {
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response;
        }
    };

    return { read };
};

export function fetchData(endpoint) {
    const promise = fetch (`${API_BASE_URL}${endpoint}`)
        .then((res) => {
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`)
            }

            return res.json();
        })
        .catch ((err) =>{
            throw err;
        })
    
    return getSuspender(promise);
}