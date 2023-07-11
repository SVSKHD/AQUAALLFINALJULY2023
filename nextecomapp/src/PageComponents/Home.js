import AquaCommonLayout from "@/Layout/CommonLayout"


const HomePageComponent = (props) => {
    return (
        <>
            <AquaCommonLayout>
                {props.children}
            </AquaCommonLayout>
        </>
    )
}
export default HomePageComponent