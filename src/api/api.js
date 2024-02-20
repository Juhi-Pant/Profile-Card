import axios from 'axios'

const details = async ()=> {
      const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
      console.log(response.data.results);
      return response.data.results[0];
}

export default details;