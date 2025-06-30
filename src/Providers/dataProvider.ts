import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

//create a data provider to connect to the jsonplaceholder api
export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const page = params.pagination?.page ?? 1;
        const perPage = (params.pagination as any)?.perPage ?? 10;
        const { field, order } = params.sort ?? { field: undefined, order: undefined };
        const query = {
            _sort: field,
            _order: order,
            _page: page,
            _limit: perPage,
            ...fetchUtils.flattenObject(params.filter),
        };
        const url = `https://jsonplaceholder.typicode.com/${resource}?${stringify(query)}`;
        return fetchUtils.fetchJson(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get("x-total-count") || "0", 10),
        }));
    },
    getOne: (resource, params) => {
        const url = `https://jsonplaceholder.typicode.com/${resource}/${params.id}`;
        return fetchUtils.fetchJson(url).then(({ json }) => ({
            data: json,
        }));
    },
    getMany: (resource, params) => {
        const query = {
            id: params.ids.join(","),
        };
        const url = `https://jsonplaceholder.typicode.com/${resource}?${stringify(query)}`;
        return fetchUtils.fetchJson(url).then(({ json }) => ({
            data: json,
        }));
    },
    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            _sort: field,
            _order: order,
            _page: page,
            _limit: perPage,
            ...fetchUtils.flattenObject(params.filter),
        };
        query[params.target] = params.id;
        const url = `https://jsonplaceholder.typicode.com/${resource}?${stringify(query)}`;
        return fetchUtils.fetchJson(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get("x-total-count") || "0", 10),
        }));
    },
    update: (resource, params) => {
        const url = `https://jsonplaceholder.typicode.com/${resource}/${params.id}`;
        return fetchUtils.fetchJson(url, {
            method: "PUT",
            body: JSON.stringify(params.data),
            headers: new Headers({ "Content-Type": "application/json" }),
        }).then(({ json }) => ({
            data: json,
        }));
    },
    updateMany: (resource, params) => {
        const url = `https://jsonplaceholder.typicode.com/${resource}`;
        const promises = params.ids.map((id) =>
            fetchUtils.fetchJson(`${url}/${id}`, {
                method: "PUT",
                body: JSON.stringify(params.data),
                headers: new Headers({ "Content-Type": "application/json" }),
            })
        );
        return Promise.all(promises).then((responses) => ({
            data: responses.map(({ json }) => json),
        }));
    },
    create: (resource, params) => {
        const url = `https://jsonplaceholder.typicode.com/${resource}`;
        return fetchUtils.fetchJson(url, {
            method: "POST",
            body: JSON.stringify(params.data),
            headers: new Headers({ "Content-Type": "application/json" }),
        }).then(({ json }) => ({
            data: { ...json, id: json.id || Math.random().toString(36).substr(2, 9) },
        }));
    },
    delete: (resource, params) => {
        const url = `https://jsonplaceholder.typicode.com/${resource}/${params.id}`;
        return fetchUtils.fetchJson(url, {
            method: "DELETE",
        }).then(({ json }) => ({
            data: json ?? params.previousData,
        }));
    },
    deleteMany: (resource, params) => {
        const url = `https://jsonplaceholder.typicode.com/${resource}`;
        const promises = params.ids.map((id) =>
            fetchUtils.fetchJson(`${url}/${id}`, {
                method: "DELETE",
            })
        );
        return Promise.all(promises).then(() => ({
            data: params.ids,
        }));
    }
};