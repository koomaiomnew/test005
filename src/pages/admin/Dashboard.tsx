import AdminLayout from "../../layouts/AdminLayout"
import DashboardCard from "../../components/dashboard/DashboardCard"

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <DashboardCard title="Orders" value="245" />
        <DashboardCard title="Revenue" value="$3240" />
        <DashboardCard title="Products" value="120" />
        <DashboardCard title="Users" value="45" />
      </div>
    </AdminLayout>
  )
}
