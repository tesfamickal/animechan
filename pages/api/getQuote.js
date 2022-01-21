import axios from 'axios';
export default async function handler(req, res) {

    if (req.method === 'GET') {
        const response = await axios.get('https://animechan.vercel.app/api/available/anime')
        res.status(200).json(response.data)
    } else {

        // Handle any other HTTP method
    }
}

