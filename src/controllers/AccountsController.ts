import {$log, BodyParams, Controller, Post, Status} from "@tsed/common";
import {Returns} from "@tsed/swagger";
import {AddAccountModel} from "../models/AddAccountModel";

@Controller("/accounts")
export class AccountsController {
  @Post("/")
  @Status(201)
  @Returns(AddAccountModel)
  addAccount(@BodyParams() account: AddAccountModel): AddAccountModel {
    $log.info(account);

    return account;
  }
}
