import { useState } from "react";

const useSortConfig = ( rankingsUsers: NFTRankingsUser[]) => {

    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "id", direction: "ascending" });

    const sortedData = [...rankingsUsers].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
        }

        return 0;
    });

    const handleSort = (key: keyof NFTRankingsUser) => {
        let direction: "ascending" | "descending" = "ascending";

        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        setSortConfig({ key, direction });
    };

    return {
        sortedData,
        sortConfig,
        handleSort
    }
}

export default useSortConfig