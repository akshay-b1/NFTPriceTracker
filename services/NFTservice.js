import axios from 'axios';

const getMarketData = async () => {
  try {
    const response = await axios.get("https://api.nftport.xyz/v0/nfts");
    const data = response.data;
    const formattedResponse = formatMarketData(data);
    return formattedResponse;
  } catch (error) {
    console.log(error.message);
  }
}

export default getMarketData