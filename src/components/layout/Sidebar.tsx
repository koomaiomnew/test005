export default function Sidebar() {

  return (

    <div className="w-60 bg-white border-r h-screen p-6">

      <h1 className="text-xl font-bold mb-10">
        Reseller
      </h1>

      <ul className="space-y-4">

        <li className="hover:text-blue-500 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          Products
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          Orders
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          Wallet
        </li>

      </ul>

    </div>

  )

}
