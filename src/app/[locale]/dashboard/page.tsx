import { metadataValues } from "@/constant"

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

    return {
        title: locale === "en" ? metadataValues.dashboardTitleEn : metadataValues.dashboardTitleFa,
    }
  
}

const DashboardPage = () => {

    return (
        <div>DashboardPage</div>
    )

}

export default DashboardPage