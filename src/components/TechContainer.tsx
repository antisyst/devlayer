import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";
  // MOBILE
import { TbBrandReactNative, TbBrandFlutter, TbBrandKotlin, TbBrandPython , TbBrandCSharp} from 'react-icons/tb';
import { SiXamarin, SiRust, SiPerl } from 'react-icons/si';
import {  DiRubyRough, DiSwift } from 'react-icons/di';
import { CgCPlusPlus } from 'react-icons/cg';
import { FaJava } from 'react-icons/fa';

  // WEB  
  import { RiHtml5Fill, RiCss3Fill } from 'react-icons/ri';
  import { SiPhp, SiRubyonrails, SiReact, SiAngular, SiLaravel, SiTypescript, SiNativescript, SiScala, SiSolidity, SiDjango,  SiFlask, SiSpring, SiSymfony, SiPowershell, SiKalilinux, SiSpringsecurity, SiWireshark, SiSqlite } from 'react-icons/si';
  import { TbBrandMysql } from 'react-icons/tb';
  import { IoLogoJavascript } from 'react-icons/io5';
  import { DiJqueryLogo, DiDotnet } from 'react-icons/di';
  import { FaVuejs, FaNodeJs } from 'react-icons/fa'; 

    // BACKEND
   import { TbBrandGolang } from 'react-icons/tb';
   import { VscTerminalLinux } from 'react-icons/vsc'

const TechStackContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  margin-bottom: 12vh;
`
const TechStackItem = styled.div `
  margin: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 210px;
  text-align: center;

  svg {
    color: var(--var-color-advanced);
    font-size: 140px;
    text-align: center;
  }
  h2 {
    margin-top: 8px;
    font-size: 32px;
   text-align: center;
  }
`

function Tabs() {
  const [toggleState, setToggleState] = useState<number>(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Mobile Development
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Web Development
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Backend Development
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Cyber Security
        </button>
        
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2 className="animate__animated animate__fadeIn">Mobile Development</h2>
          <TechStackContainer>
              <TechStackItem className="animate__animated animate__fadeIn">
                <TbBrandFlutter/>
                <h2>Flutter</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <TbBrandKotlin/>
                <h2>Kotlin</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <TbBrandReactNative/>
                <h2>Native</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <FaJava/>
                <h2>Java</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <DiSwift/>
                <h2>Swift</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <TbBrandPython/>
                <h2>Python</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <DiRubyRough/>
                <h2>Ruby</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <TbBrandCSharp/>
                <h2>C#</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <CgCPlusPlus/>
                <h2>C++</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiXamarin/>
                <h2>Xamarin</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiTypescript/>
                <h2>TypeScript</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiRust/>
                <h2>Rust</h2>
              </TechStackItem>
               <TechStackItem className="animate__animated animate__fadeIn">
                <SiPerl/>
                <h2>Perl</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiNativescript/>
                <h2>NativeScript</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <IoLogoJavascript/>
                <h2>JavaScript</h2>
              </TechStackItem>
          </TechStackContainer>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2 className="animate__animated animate__fadeIn">Web Development</h2>
         <TechStackContainer>
              <TechStackItem className="animate__animated animate__fadeIn">
                <RiHtml5Fill/>
                <h2>HTML5</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <RiCss3Fill/>
                <h2>CSS3</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <IoLogoJavascript/>
                <h2>JavaScript</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiPhp/>
                <h2>PHP</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiRubyonrails/>
                <h2>Ruby Rails</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <DiJqueryLogo/>
                <h2>jQuery</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiReact/>
                <h2>ReactJS</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <TbBrandMysql/>
                <h2>MySQL</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiAngular/>
                <h2>Angular</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiLaravel/>
                <h2>Laravel</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <FaVuejs/>
                <h2>VueJS</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <DiDotnet/>
                <h2>.NET</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiTypescript/>
                <h2>TypeScript</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <FaNodeJs/>
                <h2>NodeJS</h2>
              </TechStackItem>
              <TechStackItem className="animate__animated animate__fadeIn">
                <SiScala/>
                <h2>Scala</h2>
              </TechStackItem>
          </TechStackContainer>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2 className="animate__animated animate__fadeIn">Backend Development</h2>
          <TechStackContainer>
            <TechStackItem className="animate__animated animate__fadeIn">
                  <TbBrandCSharp/>
                  <h2>C#</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <TbBrandPython/>
                  <h2>Python</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <TbBrandGolang/>
                  <h2>Golang</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <FaJava/>
                  <h2>Java</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <SiPhp/>
                  <h2>PHP</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <TbBrandMysql/>
                  <h2>MySQL</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <SiRust/>
                  <h2>Rust</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <TbBrandKotlin/>
                  <h2>Kotlin</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <FaNodeJs/>
                  <h2>NodeJS</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <SiSolidity/>
                  <h2>Solidity</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <SiDjango/>
                  <h2>Django</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <SiFlask/>
                  <h2>Flask</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <SiSpring/>
                  <h2>Spring</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <DiDotnet/>
                  <h2>.NET Core</h2>
                </TechStackItem>
                <TechStackItem className="animate__animated animate__fadeIn">
                  <SiSymfony/>
                  <h2>Symfony</h2>
                </TechStackItem>
          </TechStackContainer>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Cyber Security</h2>
          <TechStackContainer>
            <TechStackItem className="animate__animated animate__fadeIn">
                    <TbBrandPython/>
                    <h2>Python</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <SiPowershell/>
                    <h2>PowerShell</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <CgCPlusPlus/>
                    <h2>C++</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <DiRubyRough/>
                    <h2>Ruby</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <VscTerminalLinux/>
                    <h2>Linux</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <SiSpringsecurity/>
                    <h2>Spring Sec.</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <SiKalilinux/>
                    <h2>Kali Linux</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <SiWireshark/>
                    <h2>WireShark</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <FaJava/>
                    <h2>Java</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <SiPhp/>
                    <h2>PHP</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <SiSqlite/>
                    <h2>SQL</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                    <TbBrandCSharp/>
                    <h2>C#</h2>
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                  </TechStackItem>
                  <TechStackItem className="animate__animated animate__fadeIn">
                  </TechStackItem>
            </TechStackContainer>
        </div>
      </div>
    </div>
    </>
  );
}

export default Tabs;
