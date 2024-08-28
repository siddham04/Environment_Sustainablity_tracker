import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/navbar.jsx'
import Gallery from './componants/stop-resource.jsx'
// import BlogsSection from './componants/sustainable_goals.jsx'
import Secton from './componants/articles_and_resources'
import Footer from './componants/footer.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import TeamSection from './componants/Aboutus'
import Sustainale from './componants/sustainable_goals'
import CardList from './componants/jsonuse'
import Utilities from'./componants/Utilities'
import FoodDrink from './componants/FoodDrink'
import HealthBeauty from './componants/HealthBeauty'
import Homegarden from './componants/Homegarden'
import Vedio from './componants/vedio'
import Construction from './componants/construction'
import Services from './componants/financialservices'
import Technology from './componants/technology'
import Motor from './componants/Motor'
import Fasion from './componants/fasionclothing'
import Travel from './componants/travel'
// import Login from './componants/login'
// import Sign from './componants/sighnup'
import Feedback from './componants/feedback'
import Contact from './componants/contact'
import Home from './componants/Home'
// import Starter from './componants/Starter'
// import PlaceholderTooltip from'./componants/tooltip'
const router = createBrowserRouter([
  {
    path: "/",
      element: <><header className="sticky top-0 bg-white shadow-md z-10"><Header /></header>
      <Home />
    </>  
},
  {
    path: "/home",
      element: <><header className="sticky top-0 bg-white shadow-md z-10"><Header /></header>
      <Home />
    </>  
},
{
  path: "/compass",
  element: <><header className="sticky top-0 bg-white shadow-md z-10"><Header /></header>
  <Vedio />
  <Gallery />
  <Secton />
  <Sustainale />
  <CardList />
  <Footer /></> 
},
  {
    path: "/About",
    element: <><header className="sticky top-0 bg-white shadow-md z-10"><Header /></header>
              <TeamSection/>
              <Footer /></>
  },
  {
    path: "/feed",
    element: <><header className="sticky top-0 bg-white shadow-md z-10"><Header /></header>
              <Feedback />
              <Footer />
              </>
  },
  // {
  //   path: '/login',
  //   element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
  //   <Login />
  //   <Footer />
  //   </>
  // },
  {
    path: "/contact",
    element: <><header className="sticky top-0 bg-white shadow-md z-10"><Header /></header>
              <Contact />
              <Footer /></>
  },
  // {
  //   path: "/sign",
  //   element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
  //   <Sign />
  //   <Footer />
  //   </>
  // },
  {
    path: '/Utilities',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Utilities />
    <footer><Footer /></footer>
    </>
  },
  {
    path: '/Food & Drink',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <FoodDrink />
    <Footer />
    </>
  },
  {
    path: '/Health & Beauty',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <HealthBeauty />
    <Footer />
    </>
  },
  {
    path: '/Home & Garden',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Homegarden />
    <Footer />
    </>
  },
  {
    path: '/Construction',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Construction />
    <Footer />
    </>
  },
  {
    path: '/Services',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Services />
    <Footer />
    </>
  },
  {
    path: '/Motor',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Motor />
    <Footer />
    </>
  },
  {
    path: '/Fashion and Clothing',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Fasion />
    <Footer />
    </>
  },
  {
    path: '/Technology',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Technology />
    <Footer />
    </>
  },
  {
    path: '/Travel',
    element:<><header className='sticky top-0 bg-white shadow-md z-10'><Header /></header>
    <Travel />
    <Footer />
    </>
  }
]);



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
