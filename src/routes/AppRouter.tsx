import { Navigate, Route, Routes } from "react-router-dom"
import { ProtectedDashboardRoutes, ProtectedRoutes, PublicRoutes } from "."
import { HomePage, LoginPage, NotFoundPage, RegisterPage } from "../pages"

export const AppRouter = () => {
    return (<Routes>
        <Route path="/" element={<PublicRoutes />} >
            <Route path="" element={<Navigate to="/login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes />} >
            <Route path="" element={<ProtectedDashboardRoutes />} >
                <Route path="" element={<Navigate to="/home" />} />
                <Route path='home' element={<HomePage />} />
            </Route>
        </Route>
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
    )
}