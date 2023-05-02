import axios from 'axios';

export async function getWebhookUrl(daoName) {
    const res = await axios.get(`http://localhost:2980/getlist`, {
      headers: {
        "Access-Control-Allow-Origin": 'http://localhost:2980/',
      },
    });
    return res.data.items;
  }
