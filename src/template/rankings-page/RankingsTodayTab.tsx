"use client";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { useState } from "react";
import { DivToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const RankingsTodayTab = ({ locale }: { locale: string }) => {

    // ! Note 👉🏻 Put this inside a new Component called "RankingsTable" and Delete Components Like "RankingsTodayTab.tsx"
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
                <div 
                    className={`w-full |  |  | border-2 border-rose-600`}
                >
                    <div className={`w-full sticky top-5 z-10 |  | flex justify-between items-center | border-2 border-cyan-500`}>
                        <div>
                            <span>
                                #
                            </span>
                        </div>

                        <div 
                            onClick={() => handleSort("name")}
                            className={`${sortConfig.key === "name" ? "text-nftCustom-cta" : "inherit"} cursor-pointer |  |  | `}
                        >
                            <motion.span
                                initial={{ y: "-20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                            >
                                Name
                            </motion.span>
                        </div>

                        <div onClick={() => handleSort("age")}>
                            Age
                        </div>
                    </div>

                    <div className={`mt-10 |  | flex flex-col | `}>
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                        {sortedData.map((user) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </div>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </DivToScroll>
        </div>
    )

}

export default RankingsTodayTab



/*
return (
        <div className={`mt-10 |  |  | `}>
            <DivToScroll>
                <Table 
                    removeWrapper 
                    isHeaderSticky
                    aria-label="User Table with Sorting"
                    classNames={{
                        // base: "w-full border-2 border-green-500",
                        wrapper: "border-2 border-yellow-500 mt-10",
                        table: "border-2 border-yellow-500 w-full",
                        thead: "border-2 border-cyan-500",
                        tbody: "border-2 border-amber-500 mt-10",
                        tr: "border-2 border-lime-500",
                        th: "border-2 border-blue-500 bg-rose-500 text-white",
                        td: "border-2 border-fuchsia-500 mt-10",
                    }}
                    className={`w-full |  |  | border-2 border-rose-600`}
                >
                    <TableHeader className={`w-full |  |  | border-2 border-cyan-500`}>
                        <TableColumn>
                            <span>
                                #
                            </span>
                        </TableColumn>

                        <TableColumn 
                            onClick={() => handleSort("name")}
                            className={`${sortConfig.key === "name" ? "text-nftCustom-cta" : "inherit"} cursor-pointer |  |  | `}
                        >
                            <motion.span
                                initial={{ y: "-20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                            >
                                Name
                            </motion.span>
                        </TableColumn>

                        <TableColumn onClick={() => handleSort("age")}>
                            Age
                        </TableColumn>
                    </TableHeader>

                    <TableBody className={`mt-10 |  |  | `}>
                        {sortedData.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (user.id + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                        
                                    </motion.span>
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DivToScroll>
        </div>
    )
*/