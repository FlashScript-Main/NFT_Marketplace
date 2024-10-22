"use client";

import useNFTCollections from "@/hooks/useNFTCollections";
import { useState } from "react";

const MarketplaceSearchTab = ({ locale }: { locale: string }) => {

    const [fetchedNFTs, setFetchedNFTs] = useState<FetchedNFTsDataType[] | null>(null);

    const { isLoading } = useNFTCollections('https://opensea15.p.rapidapi.com/api/v2/collection/boredapeyachtclub/nfts', setFetchedNFTs);

    return (
        <div>MarketplaceSearchTab</div>
    )

}

export default MarketplaceSearchTab