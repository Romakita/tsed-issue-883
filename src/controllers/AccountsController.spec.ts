import { PlatformTest } from "@tsed/common";
import { AccountsController } from "./AccountsController";

describe("AccountsController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<AccountsController>(AccountsController);
    // const instance = PlatformTest.invoke<AccountsController>(AccountsController); // get fresh instance

    expect(instance).toBeInstanceOf(AccountsController);
  });
});
