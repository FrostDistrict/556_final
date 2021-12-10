const urlBackend = 'http://localhost:8282/client'
const requestInit = () => {
    return {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
}

export const getAll = () => {
    return fetch(`${urlBackend}/all`, requestInit()).then(
        response => {
            return response.json().then(
                value => {
                    if (response.status === 200)
                        return value;
                    return []
                }
            )
        }, err => console.error(err)
    );
}

export const getAllMen = () => {
    return fetch(`${urlBackend}/all_men`, requestInit()).then(
        response => {
            return response.json().then(
                value => {
                    if (response.status === 200)
                        return value;
                    return []
                }
            )
        }, err => console.error(err)
    );
}

export const getAllOntarians = () => {
    return fetch(`${urlBackend}/all_ontarians`, requestInit()).then(
        response => {
            return response.json().then(
                value => {
                    if (response.status === 200)
                        return value;
                    return []
                }
            )
        }, err => console.error(err)
    );
}