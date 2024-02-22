import profileImage from '../assets/chuck.png';
import Link from './Link';

const Hero = () => {
  return (
    <section className="hero divider">
        <div className="image">
            <img src={profileImage} alt="Photo of Me" />
        </div>
        <div>
            <h1>Ruth Chen</h1>
            <p>Front-End Web Developr</p>
            <p>Taichung, Taiwan</p>
            <Link href="#projects">Check out my work</Link>
        </div>
    </section>
  )
}

export default Hero
