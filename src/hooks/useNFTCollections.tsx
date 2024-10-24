"use client";

import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import axios from 'axios';

const useNFTCollections = (selectedKey: string | number | bigint | null, setFetchedNFTs: Dispatch<SetStateAction<FetchedNFTsDataType[] | null>>) => {

    const [shouldFetch, setShouldFetch] = useState(false);

    const options = {
        method: 'GET',
        url: `https://opensea15.p.rapidapi.com/api/v2/collection/${selectedKey}/nfts`,
        params: { 
            limit: '20' 
        },
        headers: {
            'x-rapidapi-key': '88f17c7fd9mshe18ea503c69e611p12142fjsnb2616e3983be',
            'x-rapidapi-host': 'opensea15.p.rapidapi.com'
        }
    };

    const shouldFetchMemo = useMemo(() => {
        return selectedKey !== null;
    }, [selectedKey]);

    useMemo(() => {
        if (shouldFetchMemo) {
            setShouldFetch(true);
        }
    }, [shouldFetchMemo]);
    
    return useQuery({
        queryKey: [selectedKey],
        queryFn: async () => {
            const response = await axios.request(options);
            const nfts = response.data.nfts;
            setFetchedNFTs(nfts);
      
            return nfts;
        },
        enabled: shouldFetch,
        // enabled: false,
        select: (data) => {
            return data.map((nft: FetchedNFTsDataType) => ({
                collection: nft.collection,
                image_url: nft.image_url,
                display_image_url: nft.display_image_url,
                metadata_url: nft.metadata_url,
                opensea_url: nft.opensea_url,
            }));
        },
    });

}

export default useNFTCollections