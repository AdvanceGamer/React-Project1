import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';

export default function Project2(){
    return(
        <div>

   <Navbar/>
<Hero/> 
<div className='section'>

<Card img={require('./image 12.png')} rating="5" review="6" about="Life lesson with Katie Jaferes" cost="$136" status="Sold Out"/>
<Card img={require('./wedding-photography 1.png')} rating="5" review="30" about="Learn wedding photography" cost="$125" status="Online"/>
<Card img={require('./mountain-bike 1.png')} rating="4.8" review="2" about="Group Mountain Biking" cost="$50" status="Online"/>
<Card img={require('./IMG_20220401_145616~2.jpg')} rating="5" review="10M" about="Learn Chess with Sahil the gold medalist 🥇" cost="$100" status="Available"/>
</div>
        </div>
    )
}