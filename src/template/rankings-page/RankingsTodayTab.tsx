"use client";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { ArrowUpIcon } from "lucide-react";
import { useState } from "react";
import { DivToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";

const RankingsTodayTab = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "name", direction: "ascending" });

    const data: NFTRankingsUser[] = [
        { id: 1, name: "Alice", age: 28 },
        { id: 2, name: "Bob", age: 34 },
        { id: 3, name: "Charlie", age: 22 },
    ];

    const sortedData = [...data].sort((a, b) => {
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

    return (
        <div className={`mt-10 |  |  | `}>
            <DivToScroll>
                <Table 
                    removeWrapper 
                    isHeaderSticky
                    aria-label="User Table with Sorting"
                >
                    <TableHeader>
                        <TableColumn 
                            onClick={() => handleSort("name")}
                        >
                            Name {sortConfig.direction === "ascending" && <ArrowUpIcon />}
                        </TableColumn>

                        <TableColumn 
                            onClick={() => handleSort("age")}
                        >
                            Age
                        </TableColumn>
                    </TableHeader>

                    <TableBody>
                        {sortedData.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DivToScroll>
        </div>
    )

}

export default RankingsTodayTab

/* -------------------------------------------------------------------------------------------------------------- */

// import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

// const rows = [
//     {
//       key: "1",
//       name: "Tony Reichert",
//       role: "CEO",
//       status: "Active",
//     },
//     {
//       key: "2",
//       name: "Zoey Lang",
//       role: "Technical Lead",
//       status: "Paused",
//     },
//     {
//       key: "3",
//       name: "Jane Fisher",
//       role: "Senior Developer",
//       status: "Active",
//     },
//     {
//       key: "4",
//       name: "William Howard",
//       role: "Community Manager",
//       status: "Vacation",
//     },
//   ];
  
//   const columns = [
//     {
//       key: "name",
//       label: "NAME",
//     },
//     {
//       key: "role",
//       label: "ROLE",
//     },
//     {
//       key: "status",
//       label: "STATUS",
//     },
//   ];

// const RankingsTodayTab = ({ locale }: { locale: string }) => {

//     return (
//     <Table 
//         removeWrapper 
//         isHeaderSticky
//         aria-label="Example table with dynamic content"
//     >
//       <TableHeader columns={columns}>
//         {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
//       </TableHeader>

//       <TableBody items={rows}>
//         {(item) => (
//           <TableRow key={item.key}>
//             {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );

// }

// export default RankingsTodayTab