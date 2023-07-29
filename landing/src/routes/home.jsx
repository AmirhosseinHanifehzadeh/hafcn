import { useRef } from 'react'; 
// components
import ServiceCart from '../components/ServiceCart';
import ContactUs from '../components/ContactUs';
//styles 
import '../styles/home.css';
// assets
import LandingPic from "../assets/images/landing.jpg";
import LoanPic from "../assets/images/loan.jpg";
import PouyeshPic from "../assets/images/pouyesh.jpg"
import EshteghalPic from "../assets/images/eshteghal.jpg"
import FinacialAidsPic from "../assets/images/financialHelp.jpg"
// font
import '../assets/fonts/main.css'
import Navbar from '../components/Navbar';


function Home() {
  const serviceScrollRef = useRef(null);
  const contactScrollRef = useRef(null); 

  const handleServiceScrollToHeight = () => {
    serviceScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactScrollToHeight = () => {
    contactScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const handleScrollToFirst = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <div className="App">
        <Navbar scrollToContact={handleContactScrollToHeight} scrollToHome={handleScrollToFirst}/>
      <div className='services__container'>
        <div className='image__container'>
            <div className='description__container'>
              <h2 className='title'>هفسین</h2>
              <p className='description'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
              </p>  
              <button className='goToServicesBtn' onClick={handleServiceScrollToHeight}>خدمات</button>
            </div> 
            <img className='landing-img' src={LandingPic} /> 
        </div>
        <div className='services-carts__container' ref={serviceScrollRef}>
          <h1 className='services-carts_title'>خدمات</h1>
          <div className='carts'>
            <ServiceCart icon={LoanPic} title="وام قرض الحسنه" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>
            <ServiceCart icon={PouyeshPic} title="پویش" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>
            <ServiceCart icon={EshteghalPic} title="اشتغال" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>
            <ServiceCart icon={FinacialAidsPic} title="کمک نقدی" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>  
          </div>
        </div>
        <div ref={contactScrollRef}>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
