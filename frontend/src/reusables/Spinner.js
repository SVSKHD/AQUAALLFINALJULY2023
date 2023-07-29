import { Spinner } from "react-bootstrap";
const UseSpinner = (props) => {
    const {variant , animation , size} = props
  return (
    <>
      <Spinner
        variant={variant ? variant : "primary"}
        as="span"
        animation={animation ? animation : "border"}
        size={size ? size : "sm"}
        role="status"
        aria-hidden="true"
      />
    </>
  );
};
export default UseSpinner;
