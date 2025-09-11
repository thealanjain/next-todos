import "bootstrap/dist/css/bootstrap.min.css"
import "./theme.scss"
import { ThemeProvider } from "react-bootstrap"

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>
}

export default AppThemeProvider
