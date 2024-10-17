"use client";

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const ArtistTabs = ({ artist }: { artist: ArtistParamsType }) => {

    console.log(artist);

    return (
        <section className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | border-2 border-indigo-500`}>
            <Tabs 
                aria-label="Options" 
                fullWidth 
                variant="underlined" 
                classNames={{
                    cursor: " bg-nftCustom-c_l_text",
                    tab: "h-12",
                    tabContent: "group-data-[selected=true]:text-nftCustom-text text-nftCustom-c_l_text font-semibold text-[1rem] leading-[140%] xl:text-[1.375rem] main-transition-color",
                }}
                className={` |   |  | `}
                // aria-label="Options" 
                // variant="underlined"
                // fullWidth
                // classNames={{
                //     tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                //     cursor: "w-full bg-nftCustom-c_l_text",
                //     tab: "max-w-fit px-0 h-12",
                //     tabContent: "group-data-[selected=true]:text-[#06b6d4]",
                    // base,
                    // cursor,
                    // panel,
                    // tab,
                    // tabContent,
                    // tabList,
                    // wrapper
            >
        <Tab key="photos" title="Photos"
            // title={
            //   <div style={{ display: 'flex', alignItems: 'center' }}>
            //     <Text>Created</Text>
            //     <div style={circleStyle}>10</div>
            //   </div>
            // }
        >
          <div>
            Hello
          </div>
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
        </section>
    )

}

export default ArtistTabs