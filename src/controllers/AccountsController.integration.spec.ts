import {PlatformTest} from "@tsed/common";
import * as SuperTest from "supertest";
import {Server} from "../Server";
import {AccountsController} from "./AccountsController";

describe("AccountsController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [AccountsController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call POST /accounts", async () => {
    const response = await request.post("/accounts")
      .send({username: "john", password: "secret"})
      .expect(201);

    expect(response.body).toEqual({username: "john", password: "secret"});
  });
});
