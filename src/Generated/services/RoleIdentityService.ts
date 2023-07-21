/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { roleIdentityCollection } from '../models/roleIdentityCollection';
import type { roleIdentityResource } from '../models/roleIdentityResource';
import { request as __request } from '../core/request';

export class RoleIdentityService {

    /**
     * Get all role to identity assignments from every microservice
     * Get all role to identity assignments from every microservice
     * @param filterIdentityId Filter the response for an identityId (uuid).
     * @returns roleIdentityCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getRoleIdentityCollection(
        filterIdentityId?: string,
    ): Promise<roleIdentityCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/role-identity`,
            query: {
                'filter[identityId]': filterIdentityId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Create one or more role to identity assignments in this resource server
     * Create one or more role to identity assignments in this resource server
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns roleIdentityResource Created
     * @throws ApiError
     */
    public static async postRoleIdentity(
        requestBody: roleIdentityResource,
    ): Promise<errorResponse | roleIdentityResource> {
        const result = await __request({
            method: 'POST',
            path: `/role-identity`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Delete a role to identity assignment in target resource server
     * Delete a role to identity assignment in target resource server
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteRoleIdentity(
        requestBody: roleIdentityResource,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/role-identity`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}