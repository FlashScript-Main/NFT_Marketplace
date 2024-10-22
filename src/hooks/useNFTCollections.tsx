"use client";

import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import axios from 'axios';

const useNFTCollections = (url: string, setFetchedNFTs: Dispatch<SetStateAction<FetchedNFTsDataType[] | null>>) => {

    const [shouldFetch, setShouldFetch] = useState(false);

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

    if (url !== null) {
        setShouldFetch(true);
    }
    
    return useQuery({
        queryKey: [url],
        queryFn: async () => {
            const response = await axios.request(options);
            const nfts = response.data.nfts;
            setFetchedNFTs(nfts);
      
            return nfts;
        },
        enabled: shouldFetch,
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

/*
🔻 Before 🔻
return useQuery({
    queryKey: [url],
    queryFn: async () => {
        setFetchedNFTs((await axios.request(options)).data.nfts);

        return setFetchedNFTs;
    },
    // select: (data: FetchedNFTsDataType) => {
    //     return {
    //         collection: data.collection,
    //         image_url: data.image_url,
    //         display_image_url: data.display_image_url,
    //         metadata_url: data.metadata_url,
    //         opensea_url: data.opensea_url,
    //     }
    // }
    enabled: shouldFetch,
})
*/

/*
To disable React Query from fetching data on mount, 
you can use the enabled option in the useQuery hook. 
By setting enabled: false, 
you prevent the query from automatically running when the component mounts.

import { useQuery } from 'react-query';

const fetchNFTData = async () => {
  const response = await fetch('/api/nft');
  return response.json();
};

const useNFTData = (shouldFetch) => {
  return useQuery('nftData', fetchNFTData, {
    enabled: shouldFetch, // Only fetch if shouldFetch is true
  });
};

const NFTComponent = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, isLoading, error } = useNFTData(shouldFetch);

  const handleFetchClick = () => {
    setShouldFetch(true); // Trigger data fetching manually
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      <button onClick={handleFetchClick}>Fetch Data</button>
      {data && (
        <div>
          <h1>NFT ID: {data.id}</h1>
          <img src={data.image} alt="NFT Image" />
        </div>
      )}
    </div>
  );
};

*/