import fetch from 'node-fetch';


async function getCO2Data() {
  try {
    const response = await fetch('https://api.example.https://api.dkv-mobility.com/cs-bff/v1.0.1/customer-service-bff/transactions/invoiceDate?startDate={startDate}&endDate={endDate}&locale=IT HTTP/1.1/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('CO2 data:', data);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

getCO2Data();