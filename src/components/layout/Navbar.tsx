export default function Navbar() {

  return (

    <div className="h-16 bg-white border-b flex items-center justify-between px-6">

      <input
        placeholder="Search..."
        className="border rounded-lg px-3 py-2"
      />

      <div className="flex items-center gap-4">

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>

      </div>

    </div>

  )

}
