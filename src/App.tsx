import Header from "./components/Header"
import { Footer } from "./components/Footer"
import ActivityList from "./components/ActivityList"
import { Solutions } from "./components/Solutions"
import { AboutUs } from "./components/AboutUs"
import { jobs } from "./data/jobs"
import { informationPersonal } from "./data/informationPersonal"

function App() {

  return (
    <>
      <Header />
      <div className="mx-3 md:mx-4 lg:mx-24">
        <ActivityList 
          jobs={jobs}
        />
        <Solutions />
        <AboutUs 
          informationPersonal={informationPersonal}
        />
      </div>
      <Footer/>
    </>
  )
}

export default App
