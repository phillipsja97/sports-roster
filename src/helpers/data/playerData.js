import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allPlayers = response.data;
      console.log(allPlayers);
      const players = [];
      if (allPlayers != null) {
        Object.keys(allPlayers).forEach((fbId) => {
          allPlayers[fbId].id = fbId;
          players.push(allPlayers[fbId]);
        });
      }
      resolve(players);
      console.log(players);
    })
    .catch((error) => reject(error));
});

export default { getPlayers };
