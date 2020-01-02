import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allPlayers = response.data;
      const players = [];
      if (allPlayers != null) {
        Object.keys(allPlayers).forEach((fbId) => {
          allPlayers[fbId].id = fbId;
          players.push(allPlayers[fbId]);
        });
      }
      resolve(players);
    })
    .catch((error) => reject(error));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

const addPlayer = (newPlayer) => axios.post(`${baseUrl}/players/.json`, newPlayer);

export default { getPlayers, deletePlayer, addPlayer };
