import React from "react";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-400">
      <div className="bg-white max-w-sm rounded-lg shadow-lg p-6">
        {/* Título */}
        <h1 className="text-2xl font-bold text-center mb-4">Order Summary</h1>

        {/* Descrição */}
        <p className="text-gray-600 text-center mb-6">
          You can now listen to millions of songs, audiobooks, and podcasts on any device, anywhere you like!
        </p>

        {/* Seção do plano */}
        <div className="bg-gray-600 p-4 rounded-lg flex items-center gap-4 mb-6">
          <img
            src={"../order-summary-component-main/images/icon-music.svg"}
            alt="Music Icon"
            className="w-12 h-12"
          />
          <div className="flex-1">
            <span className="font-bold text-gray-700 block">Annual Plan</span>
            <span className="text-gray-600">$59.99/year</span>
          </div>
          <button className="text-blue-500 underline hover:text-blue-700">Change</button>
        </div>

        {/* Botões */}
        <button className="bg-blue-500 text-white w-full py-2 rounded-lg mb-4 hover:bg-blue-600">
          Proceed to Payment
        </button>
        <button className="bg-gray-300 text-gray-700 w-full py-2 rounded-lg hover:bg-gray-400">
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default App;
