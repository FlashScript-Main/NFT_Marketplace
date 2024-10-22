"use client";

import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import axios from 'axios';

const useNFTCollections = (url: string, setFetchedNFTs: Dispatch<SetStateAction<FetchedNFTsDataType[] | null>>) => {

    const options = {
        method: 'GET',
        url: `https://opensea15.p.rapidapi.com/api/v2/collection/boredapeyachtclub/nfts`,
        params: { 
            limit: '20' 
        },
        headers: {
            'x-rapidapi-key': '88f17c7fd9mshe18ea503c69e611p12142fjsnb2616e3983be',
            'x-rapidapi-host': 'opensea15.p.rapidapi.com'
        }
    };

    return useQuery({
        queryKey: [url],
        queryFn: async () => {
            setFetchedNFTs((await axios.request(options)).data.nfts);

            return setFetchedNFTs;
        },
        initialData: null,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        // refetchInterval: false,
        // enabled: false,
    })

}

export default useNFTCollections