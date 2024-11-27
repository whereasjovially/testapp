import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon, sepolia } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;

export const wagmiConfig = getDefaultConfig({
  appName: "Test app",
  projectId: projectId,
  chains: [
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
