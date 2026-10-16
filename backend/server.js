import axios from 'axios';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("enter the city Name: ", async (city) => {

    const url = `https://weather/${city}`;
    try {
        const result = await axios.get(url);
        console.log(`weather of ${city} is :`, result.data);
    } catch (error) {
        console.log("error", error);
    } finally{
        rl.close();
    }
})