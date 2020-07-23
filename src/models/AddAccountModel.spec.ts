import { PlatformTest } from "@tsed/common";
import { AddAccountModel } from "./AddAccountModel";

describe("AddAccountModel", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<AddAccountModel>(AddAccountModel);
    // const instance = PlatformTest.invoke<AddAccountModel>(AddAccountModel); // get fresh instance

    expect(instance).toBeInstanceOf(AddAccountModel);
  });
});
