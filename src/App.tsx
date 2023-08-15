import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Section from './components/content/Section'
import Popular from './components/popular/Popular'
import New from './components/news/New'
import FeaturedPost from './components/featured post/FeaturedPost'
import PreviousPost from './components/previous/PreviousPost'
import Like from './components/like/Like'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Section />
      <Popular />
      <New />
      <FeaturedPost />
      <PreviousPost />  
      <Like />
      <Footer />
    </div>
  )
}

export default App
