import AquaFooter from "./Footer"
import AquaHeader from "./Header"

const AquaCommonLayout = (props) => {
    return (
        <>
            <AquaHeader />
            <div className="container p-1">
                {props.children}
            </div>
            <AquaFooter />
        </>
    )
}
export default AquaCommonLayout