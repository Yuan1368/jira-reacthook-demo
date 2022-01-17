## jira-dev-tool@next

安装`jira-dev-tool`另一个分支：

```shell
yarn add jira-dev-tool@next
```

将`src/index.tsx`里的`loadDevTools`改成`loadServer`，从`jira-dev-tool`中引入`DevTools`，并在`<App/>`组件相邻位置添加`<DevTools/>`。

需要安装`react-query`：

```shell
yarn add react-query
```

为了能让`DevTools`的 ReactQuery 工作正常，需要在 context 的 `provider`外 包裹一层`QueryClientProvider`。

```react
import { AuthProvide } from "./auth-context";
import { ReactNode } from "react";
import {QueryClient, QueryClientProvider} from "react-query";

export const AppProviders = ({ children }: { children: ReactNode }) => {

  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvide>{children}</AuthProvide>
    </QueryClientProvider>
  )
};
```
