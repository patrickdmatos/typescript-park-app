export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4 text-white">
      <h3 className="m-auto mt-2 mb-8 text-lg font-bold">Vehicle Register</h3>

      <table className="w-full max-w-4xl mx-auto border-collapse border border-gray-700 rounded-sm shadow-lg">
        <thead className="bg-cyan-500 bg-opacity-75 text-gray-100">
          <tr>
            <th className="p-4 text-left border-b border-gray-700">
              Parked at
            </th>
            <th className="p-4 text-left border-b border-gray-700">
              Total parked time
            </th>
            <th className="p-4 text-left border-b border-gray-700">Vehicle</th>
            <th className="p-4 text-left border-b border-gray-700">Plate</th>
            <th className="p-4 text-left border-b border-gray-700">
              Total Payable
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800">
          <tr className="hover:bg-gray-700">
            <td className="p-4 border-b border-gray-700">08:00 AM</td>
            <td className="p-4 border-b border-gray-700">2 hours</td>
            <td className="p-4 border-b border-gray-700">Sedan</td>
            <td className="p-4 border-b border-gray-700">ABC-1234</td>
            <td className="p-4 border-b border-gray-700">$10.00</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="p-4 border-b border-gray-700">08:00 AM</td>
            <td className="p-4 border-b border-gray-700">4 hours</td>
            <td className="p-4 border-b border-gray-700">Sedan</td>
            <td className="p-4 border-b border-gray-700">DEF-5678</td>
            <td className="p-4 border-b border-gray-700">$20.00</td>
          </tr>
          {/* Mais linhas podem ser adicionadas aqui */}
        </tbody>
      </table>
    </main>
  );
}
