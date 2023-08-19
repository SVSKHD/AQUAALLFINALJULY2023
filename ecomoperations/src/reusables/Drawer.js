import Offcanvas from 'react-bootstrap/Offcanvas';
const AquaDrawer = (props) =>{
const {title , show , hide , placement} = props
//placement - start-left , end-right top-top , bottom-bottom.
return(
    <>
       <Offcanvas
        show={show}
        onHide={hide}
        placement={placement}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>  
    </>
)
}
export default AquaDrawer