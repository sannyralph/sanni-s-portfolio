import { Typewriter } from "react-simple-typewriter"
// import img1 from '../images/homeBackgroundPic.jpg'

const MyHomePage = () => {
    return (

        <section className=" home d-flex flex-column justify-content-center align-items-center">
            <div className="home-container" data-aos="fade-in">
            <h1>Sanni Abdul Rafiu</h1>
            <p><span className="typed">
                    <Typewriter 
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={["I'm a Software Engineer", "I'm a React Developer", "I'm a Financial Analyst","I'm a Football & Music lover", "Most importantly I'm Human therefore, I also make mistakes"]}
                    ></Typewriter>
                    </span></p>
            </div>
            <div className="buttom-container">
                <p  id="buttom-text" >
                I've lived, I've loved, I've lost,<br/> 
                I've trusted, I've made mistakes, I've hurt,<br/>
                but most importantly, I've learned.
                </p>
            </div>
        </section>
    )
}

export default MyHomePage