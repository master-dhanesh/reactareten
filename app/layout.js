import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
    title: "Create Next App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
