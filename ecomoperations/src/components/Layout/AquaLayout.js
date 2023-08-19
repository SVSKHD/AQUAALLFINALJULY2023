import AquaNav from "./NavBar"
import AquaFooter from "./Footer"
import AquaPageWrapper from "../Transitions/pageTransitions"
import AquaSeo from "../Head/Seo"

const AquaLayout = (props) => {
    return (
        <>
            <AquaNav />
            <AquaSeo seo={props.seo} />
            <div className="container-fluid p-1">
                <AquaPageWrapper>
                    {props.children}
                </AquaPageWrapper>
            </div>
            <AquaFooter />
        </>
    )
}
export default AquaLayout