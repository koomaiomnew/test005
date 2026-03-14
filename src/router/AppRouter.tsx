import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../pages/admin/Dashboard"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
