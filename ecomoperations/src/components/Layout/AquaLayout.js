import AquaNav from "./NavBar"
import AquaFooter from "./Footer"
import AquaRightCornerModal from "@/reusables/prompt"
import AquaPageWrapper from "../Transitions/pageTransitions"

const AquaLayout = (props) => {
    return (
        <>
            <AquaNav />
            <AquaRightCornerModal/>
            <div className="container-fluid">
            <AquaPageWrapper>
            {props.children}
            </AquaPageWrapper>
            </div>
            <AquaFooter />
        </>
    )
}
export default AquaLayout