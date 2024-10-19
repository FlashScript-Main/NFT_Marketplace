import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { artists } from "@/constant/nft-database";
import ArtistInfo from "@/template/artist-page/ArtistInfo";
import ArtistNotFound from "@/template/artist-page/ArtistNotFound";
import ArtistTabs from "@/template/artist-page/ArtistTabs";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const ArtistPage = ({ params: { name, locale } }: ArtistPagePropsType) => {

    const language = useTranslations("language");
    
    console.log(locale)
    // const hasArtistName = artists.map(item => item.paramsName).includes(name);
    const artist = artists.find(artist => artist.paramsName === name);

    if (artist) {
        return (
            <GlobalMotionMain className={` |  |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
                <ArtistInfo artist={artist} />
                <ArtistTabs artist={artist} />
            </GlobalMotionMain>
        )
    } 
    else {
        return (
            <ArtistNotFound 
              name={name} 
              locale={locale} 
            />
        )
    }

}

export default ArtistPage


/*
const findAndMapAchievements = (paramsName) => {
  // Step 1: Find the artist based on paramsName
  const artist = artists.find(artist => artist.paramsName === paramsName);

  // Step 2: Check if the artist exists
  if (artist) {
    // Step 3: Map through the achievements of the found artist
    return artist.achievements.map((achievement, index) => {
      // You can do something with each achievement here
      return `Achievement ${index + 1}: ${JSON.stringify(achievement)}`;
    });
  } else {
    // If artist does not exist, return a message or handle accordingly
    return `Artist with paramsName "${paramsName}" not found.`;
  }
};

// Example usage:
console.log(findAndMapAchievements("bob")); // Mapping through Bob's achievements
console.log(findAndMapAchievements("nonexistent")); // Artist not found
*/