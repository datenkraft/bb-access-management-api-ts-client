import { ConfigOptions } from "@datenkraft/bb-base-api-ts-client";
import { AccessManagementApiClient } from "../dist";
import { RoleApi } from "../dist/Generated";

describe("Client Test (staging)", () => {
  test("Initialize and use the generated Client", (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID ?? "",
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? "",
      oAuthTokenHost: "https://authentication-api.sandbox.steve.niceshops.com",
    };

    AccessManagementApiClient.getApiConfig(
      configOptions,
      "https://access-management-api.sandbox.steve.niceshops.com/v1"
    )
      .then((config) => {
        const roleApi = new RoleApi(config);

        roleApi
          .getRoleCollectionEndpoint(1, 1)
          .then(({ data: response }) => {
            if (response.data instanceof Array) {
              if (response.data.length > 0) {
                done();
              } else {
                fail("Auth Role Collection did not find any results");
              }
            } else {
              done("Auth Role Collection not found");
            }
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
