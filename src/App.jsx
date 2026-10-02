import { useState } from 'react'
import { motion } from 'framer-motion'
import WeddingHome from "./pages/WeddingHome.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold"
    >
      {/* Wedding Invitation */}
      <WeddingHome />
    </motion.h1>
    </>
  )
}

export default App
