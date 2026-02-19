import ActivityList from "./components/ActivityList"
import { Footer } from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <div className="mx-3 md:mx-4 lg:mx-24">
        <ActivityList />
      </div>
      <Footer/>
    </>
  )
}

export default App
