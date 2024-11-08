import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);

    const selectedKey = searchParams.get('key'); 

    const options = {
        method: 'GET',
        url: `https://opensea15.p.rapidapi.com/api/v2/collection/${selectedKey}/nfts`,
        params: { limit: '20' },
        headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': 'opensea15.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data.nfts);
    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch data: ${error}` }, { status: 500 });
    }
}
