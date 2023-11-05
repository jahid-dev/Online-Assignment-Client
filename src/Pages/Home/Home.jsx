


import Faq from '../../components/Faq/Faq';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import HeroSection from '../../components/Header/HeroSection/HeroSection';


const Home = () => {
    
   
    return (
        <div className='max-w-[1200px] mx-auto'>
            
            <HeroSection></HeroSection>
            <FeatureSection></FeatureSection>
            <Faq></Faq>
            
        </div>
    );
};


export default Home