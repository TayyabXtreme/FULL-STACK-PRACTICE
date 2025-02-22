const VehicleInfo = ({ formData, updateFormData, prevStep }) => {
    const handleChange = (e) => {
      const { name, value } = e.target
      updateFormData({ vehicle: { ...formData.vehicle, [name]: value } })
    }
  
    return (
      <>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Vehicle Information</h3>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Vehicle Type
            </label>
            <select
              name="type"
              id="type"
              value={formData.vehicle.type}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="motorcycle">Motorcycle</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Vehicle Color
          </label>
          <input
            type="color"
            name="color"
            id="color"
            value={formData.vehicle.color}
            onChange={handleChange}
            className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="plate" className="block text-sm font-medium text-gray-700">
            Vehicle Plate
          </label>
          <input
            type="text"
            name="plate"
            id="plate"
            value={formData.vehicle.plate}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
            Vehicle Capacity
          </label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            value={formData.vehicle.capacity}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex space-x-3">
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
  
  export default VehicleInfo
  
  