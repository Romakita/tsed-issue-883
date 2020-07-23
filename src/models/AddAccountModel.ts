import {Pattern, Required} from "@tsed/common";

export class AddAccountModel {
  @Required()
  @Pattern(/[a-zA-Z0-9]/)
  username!: string;

  @Required()
  password!: string;
}
