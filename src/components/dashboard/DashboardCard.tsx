type Props = {
  title: string
  value: string
}

export default function DashboardCard({ title, value }: Props) {
  return (

    <div className="bg-white p-6 rounded-xl shadow-sm border">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>

  )
}
