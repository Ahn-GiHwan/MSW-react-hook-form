import { rest } from "msw";

export const handler = [
  rest.post("/login", async (req, res, ctx) => {
    const { id, pw } = req.body;

    if (id === "1" && pw === "12345678") {
      return res(
        ctx.json({
          result: true,
          text: `Welcome [${id}]님!`,
        })
      );
    } else {
      return res(
        ctx.json({
          result: false,
          text: "아이디 비번을 확인하세요",
        })
      );
    }
  }),
];
