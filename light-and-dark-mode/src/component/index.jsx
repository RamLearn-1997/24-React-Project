import '../App.css'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'
import featureImg from '../assets/festure img.png'
import UseLocalStorage from './useLocalStorage';



export default function LightDarkMode() {

  const [theme, setTheme] = UseLocalStorage('theme', 'light');

  function handleToggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  

  return (
    <div className="light-dark-mode" data-theme={theme}>
    <div className='hero'>
      {/*  -- Navbar Start -- */}
        <nav>
            <div className="logo">
                <a href='#'>Steve<br/><span className='br'>Studio</span></a>
            </div>
                <ul className="main-nav">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul className="other-btn">
                  <img onClick= {handleToggleTheme} src={theme === 'light' ? moon : sun} id="icon"/>
                    <li><a href="#">partnership program</a></li>
                </ul>
        </nav>
        {/* !-- Navbar End -- */}

        {/* -- Main Content Start -- */}
        <div className="main-content">
            <h1>Creative<br/> Design Studio</h1>
            <p>creative design studio  is a leading company that specializes in providing creative and innvovative marketing solutions to the clients from various industries</p>
            <button>Explore Now</button>
            <button>See the plans</button>
        </div>
        {/* -- Main Content End -- */}
        {/* -- feature-img start -- */}
        <img src={featureImg} alt="feature-img" className="feature-img"/>
        {/* -- feature-img end -- */}

        </div>
    </div>
  );
}
