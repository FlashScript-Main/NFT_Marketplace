import { MotionA } from "@/animations/motion-provider"
import { Tooltip } from "@nextui-org/react"
import Image from "next/image"

const IntegratedTechnologies = () => {

    return (
        <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto relative h-[70vh] mb-[1.875rem] md:mb-10 xl:mb-20 |  |  | border-2 border-indigo-500`}>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 | text-white |  | w-full h-full border-2 border-rose-500 `}>
                {/* {} */}
                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] |  |  | w-40 h-40 bg-blue-500 rounded-full`}>
                    FlashScript
                </div>

                    <Tooltip 
                        showArrow={true} 
                        content="Next JS"
                        placement="top"
                        // offset={-15} // Only use This for "FlashScript"
                        classNames={{
                            base: "before:bg-nftCustom-cta",
                            content: "text-nftCustom-text bg-nftCustom-cta"
                        }}
                    >
                        <MotionA 
                            href="https://nextjs.org/"
                            target="_blank"
                            className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[9.5rem] overflow-hidden cursor-pointer | bg-white |  | w-24 h-24 group border-4 border-nftCustom-text hover:border-nftCustom-cta rounded-full main-transition-color`}
                        >
                            <Image 
                                src="/integrated/nextjs.svg"
                                alt="Next JS"
                                width={100}  
                                height={100}
                                className={`w-full h-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                            />
                        </MotionA>
                    </Tooltip>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[7rem] ml-[7rem] |  |  | w-24 h-24 bg-yellow-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[7rem] -ml-[7rem] |  |  | w-24 h-24 bg-rose-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -mt-[7rem] -ml-[7rem] |  |  | w-24 h-24 bg-rose-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -mt-[9.5rem] |  |  | w-24 h-24 bg-rose-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -mt-[7rem] ml-[7rem] |  |  | w-24 h-24 bg-blue-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[0rem] ml-[9.5rem] |  |  | w-24 h-24 bg-green-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[0rem] -ml-[9.5rem] |  |  | w-24 h-24 bg-green-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[0rem] -ml-[9.5rem] |  |  | w-24 h-24 bg-green-400 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[6rem] -ml-[14rem] |  |  | w-24 h-24 bg-purple-600 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[6rem] ml-[14rem] |  |  | w-24 h-24 bg-purple-600 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -mt-[6rem] ml-[14rem] |  |  | w-24 h-24 bg-purple-600 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -mt-[6rem] -ml-[14rem] |  |  | w-24 h-24 bg-purple-600 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -mt-[14rem] -ml-[6rem] |  |  | w-24 h-24 bg-red-700 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] -mt-[14rem] ml-[6rem] |  |  | w-24 h-24 bg-red-700 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[14rem] ml-[6rem] |  |  | w-24 h-24 bg-red-700 rounded-full`}>
                    Next.js
                </div>

                <div className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] mt-[14rem] -ml-[6rem] |  |  | w-24 h-24 bg-red-700 rounded-full`}>
                    Next.js
                </div>
            </div>
        </div>
    )

}

export default IntegratedTechnologies

/*
FlashScript
Next.js 14
TypeScript
Tailwind CSS
Figma
ShadCN
Next UI
Next Themes
Next Intl
Rapid API
Zustand
Axios
React Query
Lucide React
Framer Motion
Zod Schema Validation
PWA
*/

/*
<div className={`relative h-screen |  | flex | rotate-90`}>
                <div className={`absolute top-0 left-0 |  | flex flex-col gap-1 | `}>
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                </div>

                <div className={`absolute top-16 left-[6.2rem] |  | flex flex-col gap-1 | `}>
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                </div>

                <div className={`absolute top-0 left-[12.4rem] |  | flex flex-col gap-1 | `}>
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                    
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                </div>
            </div>
*/


/*
const getRandomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
};

const layers = [
        { top: 'top-0', left: 'left-0', count: 4 },
        { top: 'top-32', left: 'left-[6.2rem]', count: 5 },
        { top: 'top-0', left: 'left-[12.4rem]', count: 4 },
        { top: 'top-16', left: 'left-[18.6rem]', count: 3 },
      ];

      return (
        <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | border-2 border-indigo-500`}>
            <div className="relative h-screen flex rotate-90">
      {layers.map((layer, layerIndex) => (
        <div
          key={layerIndex}
          className={`absolute ${layer.top} ${layer.left} flex flex-col gap-1`}
        >
          {Array.from({ length: layer.count }).map((_, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-nftCustom-cta flex justify-center items-center rotate-90 hexagon"
            >
              <div className="w-[7.5rem] h-[7.5rem] bg-nftCustom-background_secondary flex justify-center items-center hexagon">
                <span className="text-white font-bold rotate-180">{getRandomLetter()}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
        </div>
        <div class="grid grid-cols-3 gap-4 p-4 place-items-center">
  <div className="w-24 h-24 bg-blue-500 rounded-full border-2 border-green-500"></div>
  <div className="w-32 h-32 bg-green-500 rounded-full"></div>
  <div className="w-24 h-24 bg-yellow-500 rounded-full"></div>
  <div className="w-40 h-40 bg-red-500 rounded-full"></div>
  <div className="w-24 h-24 bg-purple-500 rounded-full"></div>
  <div className="w-32 h-32 bg-pink-500 rounded-full"></div>
  <div className="w-24 h-24 bg-indigo-500 rounded-full"></div>
</div>
        </div>
    )
*/