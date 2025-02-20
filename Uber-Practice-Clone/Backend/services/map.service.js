const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_API_KEY; // Ensure this key is loaded correctly

    const url = `https://addressvalidation.gomaps.pro/v1:validateAddress?key=${apiKey}`;

    const requestData = {
        address: {
            regionCode: "US", // Modify based on your country
            addressLines: [address] // Ensure correct formatting
        }
    };

    try {
        const response = await axios.post(url, requestData, {
            headers: { "Content-Type": "application/json" }
        });

        console.log("GoMaps API Response:", response.data); // Debug response

        if (response.data.result && response.data.result.geocode) {
            const location = response.data.result.geocode.location;
            return {
                lat: location.latitude,
                lng: location.longitude
            };
        } else {
            throw new Error("GoMaps API did not return valid coordinates.");
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error.response?.data || error.message);
        throw error;
    }
};
