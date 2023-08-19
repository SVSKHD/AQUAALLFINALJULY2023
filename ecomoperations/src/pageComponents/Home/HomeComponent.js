import AquaLayout from "@/components/Layout/AquaLayout"

const HomeComponent = () =>{
    const Seo = {
        title:"Aquakart | Kart for softeners and Ro and many more water "
    }
return(
    <>
    <AquaLayout seo={Seo}>
        <h1>Hello Home</h1>
    </AquaLayout>
    </>
)
}
export default HomeComponent