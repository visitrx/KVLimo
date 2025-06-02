import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "KVLimo Services - Coming Soon",
	description: "Experience the future of luxury automotive. Premium vehicles coming soon.",
	keywords: ["luxury cars", "premium vehicles", "automotive", "coming soon"],
	authors: [{ name: "KVLimo" }],
	viewport: "width=device-width, initial-scale=1",
	robots: "index, follow",
	openGraph: {
		title: "KVLimo Services - Coming Soon",
		description: "Experience the future of luxury automotive. Premium vehicles coming soon.",
		type: "website",
		siteName: "KVLimo",
		images: ["https://kvlimo.vercel.app/KVLimo.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "KVLimo Services - Coming Soon",
    description: "Experience the future of luxury automotive. Premium vehicles coming soon.",
    images: ["https://kvlimo.vercel.app/KVLimo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={inter.variable}>
			<body className="font-inter antialiased">{children}</body>
		</html>
	);
}
