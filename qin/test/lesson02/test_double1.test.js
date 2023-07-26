const someApi = {
  create: async (name) => {
    return { id: "foo" };
  },
  search: async (name) => {
    return false;
  },
};
const createUser = async ({ name, agreeTerms }) => {
  if (!agreeTerms) {
    throw new Error("利用規約に同意していません");
  }

  const hasUser = await someApi.search(name);
  if (hasUser) {
    return;
  }

  const res = await someApi.create(name);
  return { id: res.id };
};

test("ユーザー作成が成功した場合、idを返す", async () => {
  const agreeTerms = true;
  const create = jest.spyOn(someApi, "create");
  const search = jest.spyOn(someApi, "search");

  const res = await createUser({ name: "じゅん", agreeTerms });

  expect(create).toHaveBeenCalledTimes(1);
  expect(create).toHaveBeenCalledWith("じゅん");
  expect(search).toHaveBeenCalledTimes(1);
  expect(search).toHaveBeenCalledWith("じゅん");
  expect(res.id).toBe("foo");
});
