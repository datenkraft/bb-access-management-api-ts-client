import { ConfigOptions } from "@datenkraft/bb-base-api-ts-client";
import { AccessManagementApiClient } from "../dist";
import { RoleApi } from "../dist/Generated";

describe("Client Test (staging)", () => {
  test("Initialize and use the generated Client", (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID ?? "",
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? "",
      oAuthTokenHost:
        "https://authentication-api.staging.backbone.datenkraft.info",
    };

    AccessManagementApiClient.getApiConfig(
      configOptions,
      "https://access-management-api.staging.backbone.datenkraft.info/v2"
    )
      .then((config) => {
        const roleApi = new RoleApi(config);

        roleApi
          .getRoleCollectionEndpoint()
          .then(({ data: response }) => {
            if (response.data instanceof Array) {
              expect(response.data).toContainEqual({
                roleCode: "bb-access-management-api/auth_access-management",
                name: "Role for access management",
              });
              done();
            } else {
              done("Auth Role Collection not found");
            }
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
