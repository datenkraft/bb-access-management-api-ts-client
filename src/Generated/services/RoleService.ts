/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { getRoleCollectionResponse } from '../models/getRoleCollectionResponse';
import { request as __request } from '../core/request';

export class RoleService {

    /**
     * Get all available roles from every microservice
     * Get all available roles from every microservice
     * @returns getRoleCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getRoleCollectionEndpoint(): Promise<getRoleCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/role`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}