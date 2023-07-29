import { useRef } from 'react'; 
// components
import Navbar from './components/Navbar';
import ServiceCart from './components/ServiceCart';
import ContactUs from './components/ContactUs';
//styles 
import './App.css';
// assets
import LandingPic from "./assets/images/landing.jpg";
import LoanPic from "./assets/images/loan.jpg";
import PouyeshPic from "./assets/images/pouyesh.jpg"
import EshteghalPic from "./assets/images/eshteghal.jpg"
import FinacialAidsPic from "./assets/images/financialHelp.jpg"
// font
import './assets/fonts/main.css'


function App() {
  const scrollRef = useRef(null);

  const handleScrollToHeight = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <div className='services__container'>
        <div className='image__container'>
            <div className='description__container'>
              <h2 className='title'>هفسین</h2>
              <p className='description'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
              </p>  
              <button className='goToServicesBtn' onClick={handleScrollToHeight}>خدمات</button>
            </div> 
            <img className='landing-img' src={LandingPic} /> 
        </div>
        <div className='services-carts__container' ref={scrollRef}>
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
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
