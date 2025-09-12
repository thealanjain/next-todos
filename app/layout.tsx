import type { Metadata } from "next"
import AppThemeProvider from "./theme/theme"
import { Container } from "react-bootstrap"

export const metadata: Metadata = {
    title: "Todo's Planner",
    description: "A simple todo list application built with Next.js and TypeScript",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <AppThemeProvider>
                    <Container className="py-3">{children}</Container>
                </AppThemeProvider>
            </body>
        </html>
    )
}
