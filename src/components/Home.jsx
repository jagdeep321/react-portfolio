import { Stack } from "@mantine/core"
import About from "./About"
import Contacts from "./Contacts"
import Experience from "./Experience"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Skills from "./Skills"

const Home = ()=>{
    return(
        <Stack w={"100%"} gap={0} >
<Navbar/>
<Hero/>
<About/>
<Skills/>
<Experience/>
<Contacts/>
<Footer/>
</Stack>


    )

}
export default Home