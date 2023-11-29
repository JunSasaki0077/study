import { httpBatchLink } from "@trpc/client";
import { appRouter } from "../server";

// バックエンドtRPCクライアント
export const trpc = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/api/trpc`,
    }),
  ],
});
