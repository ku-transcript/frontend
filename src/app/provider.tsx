"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { NextUIProvider } from "@nextui-org/react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <NextUIProvider>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#B2BB1E",
                colorInfo: "#B2BB1E",
                borderRadius: 14,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </NextUIProvider>
    </Provider>
  );
}
