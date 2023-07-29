// components
import Navbar from './components/Navbar';
import ServiceCart from './components/ServiceCart';
//styles 
import './App.css';
// assets
import LandingPic from "./assets/images/landing.jpg";
import LoanPic from "./assets/images/loan.jpg";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='services__container'>
        <div className='image__container'>
            <img className='landing-img' src={LandingPic} />  
        </div>
        <div className='services-carts__container'>
          <div className='title'>
            <h1>خدمات</h1>
          </div>
          <div className='carts'>
            <ServiceCart icon={LoanPic} title="وام قرض الحسنه" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>
            <ServiceCart icon={LoanPic} title="وام قرض الحسنه" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>
            <ServiceCart icon={LoanPic} title="وام قرض الحسنه" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>
            <ServiceCart icon={LoanPic} title="وام قرض الحسنه" 
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای"/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
