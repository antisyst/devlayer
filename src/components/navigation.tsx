import MainLogo from '@/utils/main-logo';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';


export default function Navigation() {
    return(
        <nav>
        <div className="wrapper">
          <div className="logo animate__animated animate__bounceIn"><a href="/">
            <MainLogo/></a></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><GrClose/></label>
            <li><a href="/brands" className='animate__animated animate__bounceIn'>Brands</a></li>
            <li><a href="/about" className='animate__animated animate__bounceIn'>About</a></li>
            <li>
              <a href="#" className="desktop-item animate__animated animate__bounceIn">Services</a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item animate__animated animate__bounceIn">Services</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header className='animate__animated animate__bounceIn'>Design Services</header>
                    <ul className="mega-links animate__animated animate__bounceIn">
                      <li><a href="/web-design">UI/UX Design</a></li>
                      <li><a href="/graphic-design">Graphic Design</a></li>
                      <li><a href="/logo-design">Logo Design</a></li>
                      <li><a href="/product-design">Product Design</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header className='animate__animated animate__bounceIn'>IT Services</header>
                    <ul className="mega-links">
                      <li><a href="/mobile-development" className='animate__animated animate__bounceIn'>Mobile Development</a></li>
                      <li><a href="/web-development" className='animate__animated animate__bounceIn'>Web Development</a></li>
                      <li><a href="/backend-development" className='animate__animated animate__bounceIn'>Backend Development</a></li>
                      <li><a href="/cyber-security" className='animate__animated animate__bounceIn'>Cyber Security</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><AiOutlineMenu/></label>
        </div>
      </nav>
    )
}
