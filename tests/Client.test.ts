import {ConfigOptions} from '@datenkraft/bb-base-api-ts-client';
import {AccessManagementApiClient} from '../dist';

describe('Client Test (staging)', () => {
    test('Initialize and use the generated Client', (done) => {
        const configOptions: ConfigOptions = {
            clientId: process.env.DEV_CLIENT_ID ?? '',
            clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
            oAuthTokenHost:
                'https://authentication-api.staging.backbone.datenkraft.info',
        };

        AccessManagementApiClient.init(
            configOptions,
            'https://access-management-api.staging.backbone.datenkraft.info/v1'
        )
            .then(() => {
                AccessManagementApiClient.Generated.RoleService.getRoleCollectionEndpoint()
                    .then((roleCollection) => {
                        expect(roleCollection).toContainEqual({name: "Role for the dev user", roleCode: "bb-access-management-api/dev"});
                        done();
                    })
                    .catch((error) => {
                        done(error);
                    });
            })
            .catch((error) => {
                done(error);
            });
    });
});
