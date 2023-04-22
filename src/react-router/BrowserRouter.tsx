import { createContext, useEffect, useState } from "react";

export const RouterContext = createContext("/");
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
export const HistoryContext = createContext((_path: string) => {});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BrowserRouter(props: any) {
  // 获取当前路径，设置路径的方法
  const [path, setPath] = useState(() => {
    const { pathname } = window.location;
    return pathname;
  });

  // 传递给组件使用的命令式跳转
  const push = (path: string) => {
    // 设置路径
    window.history.pushState({ path }, "", path);
    setPath(path);
  };

  const handlePopState = () => {
    const { pathname } = window.location;
    setPath(pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <RouterContext.Provider value={path}>
      <HistoryContext.Provider value={push}>
        {props.children}
      </HistoryContext.Provider>
    </RouterContext.Provider>
  );
}
