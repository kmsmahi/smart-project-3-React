import { Suspense } from "react";
import Banner from "./assets/components/banner/banner"
import MainSection from "./assets/components/mainSection/MainSection"
import Navbar from "./assets/components/navbar/navbar"
const api=async()=>{
    const res=await(fetch('/public/ticket.json'));
    return res.json();
}
function App() {
  const fetchPromise=api();
  return (
    <>
      <Navbar></Navbar>
      
      <Suspense fallback={<div className="text-center mt-12 text-lg font-medium text-base-content/50">Loading...</div>}>
        <MainSection fetchPromise={fetchPromise}></MainSection>
      </Suspense>
      
    </>
  )
}

export default App



