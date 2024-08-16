"use client";

import { useState } from "react";

type Vehicle = {
  vehicleType: string;
  plate: string;
} | null;

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(Array(20).fill(null));
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [vehicleData, setVehicleData] = useState({
    vehicleType: "",
    plate: "",
    parkedTime: "",
  });
const handleSpotClick = (index: number) => {
  setSelectedSpot(index);
  setModalVisible(true);
  let vehicle = vehicles[index];
  if (vehicle) {
    setVehicleData(vehicle);
  } else {
    setVehicleData({ vehicleType: "", plate: "", parkedTime: "" });
  }
};

const handlePayBill = () => {
  if (selectedSpot !== null) {
    const updatedVehicles = [...vehicles];
    updatedVehicles[selectedSpot] = null; // Remove o veículo, liberando a vaga
    setVehicles(updatedVehicles);
    setModalVisible(false);
  }
};


const handleSave = () => {
  if (selectedSpot !== null) {
    const updatedVehicles = [...vehicles];
    updatedVehicles[selectedSpot] = { ...vehicleData }; // Sempre inclui parkedTime
    setVehicles(updatedVehicles);
    setModalVisible(false);
  }
};


  return (
    <main className="min-h-screen flex flex-col p-4 text-white bg-gray-900">
      <h3 className="m-auto mt-2 mb-8 text-lg font-bold">Vehicle Register</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            onClick={() => handleSpotClick(index)}
            className={`cursor-pointer p-4 rounded-lg shadow-md transition duration-300 ${
              vehicle
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <h4 className="text-lg font-semibold mb-2">Spot {index + 1}</h4>
            {vehicle && (
              <>
                <p>
                  <strong>Vehicle:</strong> {vehicle.vehicleType}
                </p>
                <p>
                  <strong>Plate:</strong> {vehicle.plate}
                </p>
                <p>
                  <strong>Parked time:</strong> {vehicle.parkedTime}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Enter Vehicle Details
            </h3>
            <label className="block mb-2">Vehicle Type</label>
            <input
              type="text"
              value={vehicleData.vehicleType}
              onChange={(e) =>
                setVehicleData({ ...vehicleData, vehicleType: e.target.value })
              }
              className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
            />
            <label className="block mb-2">Plate</label>
            <input
              type="text"
              value={vehicleData.plate}
              onChange={(e) =>
                setVehicleData({
                  ...vehicleData,
                  plate: e.target.value,
                  parkedTime: new Date().toLocaleDateString("pt-br"),
                })
              }
              className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
            />
            <label className="block mb-2">Parked time:</label>
            <input
              type="text"
              value={vehicleData.parkedTime}
              onChange={(e) =>
                setVehicleData({
                  ...vehicleData,
                  plate: e.target.value,
                  parkedTime:
                    vehicleData.parkedTime ||
                    new Date().toLocaleDateString("pt-br"), // Mantém ou adiciona o parkedTime
                })
              }
              className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
            />

            <div className="flex justify-end">
              <button
                onClick={() => setModalVisible(false)}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handlePayBill}
                className="bg-orange-600 text-white py-2 px-4 rounded-lg mr-2"
              >
                Pagar
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
