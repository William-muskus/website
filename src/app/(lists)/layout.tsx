import { Metadata } from "next";
import { SITE } from "@/lib/const/general";
import MarketingFooter from "@/components/core/MarketingFooter";
import { SolanaProvider } from "@/context/SolanaProviders";

export const metadata: Metadata = {
  title: `${SITE.name} - Solana Tools for the Ecosystem`,
  description: "" + "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SolanaProvider>
      {children}
      <MarketingFooter />
    </SolanaProvider>
  );
}
