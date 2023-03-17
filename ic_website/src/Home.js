import Typewriter from 'typewriter-effect';
import Logo from './Photos/Logo.jpg'
const Home = () => {
    return ( 
    <div>
        <img src={ Logo } className="mainPhoto" alt="Innovative Cyclesports Logo"/>
        <div className="typewriter">
            <Typewriter options={{ loop: true }}
            onInit={ (typewriter) => {
            typewriter
                .typeString("Hello There, We are Innovative Cyclesports!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("We sell used motorcycles, atvs, side x sides, dirt bikes, trikes and more!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("We buy used bikes from individuals and consign bikes to help you get your bike sold!")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
             />
        </div>    
    </div>
     );
}
 
export default Home;