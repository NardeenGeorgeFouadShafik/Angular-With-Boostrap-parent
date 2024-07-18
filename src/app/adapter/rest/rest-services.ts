import { AUTH_SERVICE } from "../../domain/outbound/auth.service";
import { USER_SERVICE } from "../../domain/outbound/user.service";
import { RestAuthService } from "./auth-services";
import { RestUserService } from "./rest-user-services";
export const REST_SERVICES = [
  {
    provide: USER_SERVICE,
    useClass: RestUserService,
  },
  {
    provide: AUTH_SERVICE,
    useClass: RestAuthService,
  },
];
