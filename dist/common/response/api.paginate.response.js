"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPaginateResponse = void 0;
function ApiPaginateResponse(statusCode, message, data) {
    const { items, meta, links } = data;
    return Object.assign(Object.assign({ statusCode: statusCode, message: message, items: [...items] }, meta), { links });
}
exports.ApiPaginateResponse = ApiPaginateResponse;
//# sourceMappingURL=api.paginate.response.js.map