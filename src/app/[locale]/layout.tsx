import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Providers } from "@/providers/next-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Footer, Header } from "@/components";
import { workSans } from "@/utils/fonts";
import { Toaster } from "@/components/ui/toaster"
import TanstackProvider from "@/providers/TanstackProvider";
import NFTLoadingSuspense from "@/components/NFTLoadingSuspense";
// import FixHydrationFailure from "@/components/FixHydrationFailure";

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: 'Your App Name',
    description: 'Your App Description',
    icons: {
        icon: '/icons/icon-192x192.png',
        apple: '/icons/icon-512x512.png',
    },
};

export const viewport: Viewport = {
    themeColor: "#000000",
};

export default async function RootLayout({
    children,
    params: {locale}
}: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
}>) {

    const messages = await getMessages();

    return (
        <html lang={locale} className={` |  |  | scroll-smooth overflow-x-hidden`}>
            <body className={`relative | bg-nftCustom-background ${workSans} |  | nft-scrollbar`}>
                {/* <FixHydrationFailure> */}
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider 
                        attribute="class"
                        disableTransitionOnChange
                        defaultTheme="nftDefault"
                        enableSystem={false}
                        themes={["nftDefault", "red", "green", "blue"]}
                    >
                        <Providers>
                            <TanstackProvider>
                                <NFTLoadingSuspense>
                                    <Header locale={locale} />
                                        {children}
                                    <Footer locale={locale} />
                                    <Toaster />
                                </NFTLoadingSuspense>
                            </TanstackProvider>
                        </Providers>
                    </ThemeProvider>
                </NextIntlClientProvider>
                {/* </FixHydrationFailure> */}
            </body>
        </html>
    );
    
}
