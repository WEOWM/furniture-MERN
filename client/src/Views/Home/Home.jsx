import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import Category from '../../components/Cards/category/Category'
import Discount from '../../components/Cards/discount/Discount'
import Footer from '../../components/footer/Footer'

const Home = () => {

    // const navigate = useNavigate()

    // const handleDelete = ()=>{
    //     localStorage.removeItem("TOKEN")
    //     navigate("/sign-in")
    // }

  return (
    // <div style={{width:"500px",height:"30rem",margin:"2rem",backgroundColor:"black",color:"#fff"}} >
    //     <button onClick={handleDelete} >Log Out</button>
    // </div>

    <div>
      <Banner/>
      <section>
        <h2 className='text-center pt-5'>Shop my Room</h2>
        <Category/>
      </section>
      <section>
        <h2  className='text-center pt-5 mt-4'>DISCOUNT</h2>
        <Discount/>
      </section>
    <footer>
      <hr />
      <Footer/>
      <hr />
    </footer>
    </div>
  )
}

export default Home