import PageWrapper from "@/Transitions/Transition"
import AquaFooter from "./Footer"
import AquaHeader from "./Header"



const AquaCommonLayout = (props) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    return (
        <>
            <AquaHeader />
            <PageWrapper>
                <>
                    <div className="container p-1">
                        {props.children}
                    </div>
                </>
            </PageWrapper>
            <AquaFooter />
        </>
    )
}
export default AquaCommonLayout