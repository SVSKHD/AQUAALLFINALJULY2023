import AquaNav from "./Nav"

const CommonLayout = (props) => {
  return( 
  <>
  <AquaNav/>
  {props.children}
  
  </>
  )
};
export default CommonLayout;
