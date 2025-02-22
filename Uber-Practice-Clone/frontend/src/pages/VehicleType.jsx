const VehicleType = ({ formData, updateFormData, prevStep }) => {
    const handleChange = (e) => {
      const { name, value } = e.target
      updateFormData({ vehicle: { ...formData.vehicle, [name]: value } })
    }
  
    return (
      <>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Vehicle Information</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Type
              </label>
              <select
                name="vehicleType"
                id="vehicleType"
                value={formData.vehicle.vehicleType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="motorcycle">Motorcycle</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div>
              <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Color
              </label>
              <input
                type="color"
                name="color"
                id="color"
                value={formData.vehicle.color}
                onChange={handleChange}
                className="w-full h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="plate" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Plate
              </label>
              <input
                type="text"
                name="plate"
                id="plate"
                value={formData.vehicle.plate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Capacity
              </label>
              <input
                type="number"
                name="capacity"
                id="capacity"
                value={formData.vehicle.capacity}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          <button
            type="button"
            onClick={prevStep}
            className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </>
    )
  }
  
  export default VehicleType
  
  