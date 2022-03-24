import './Competence.css';
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { IoLogoPython } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { SiReact } from "react-icons/si";
import { SiSymfony } from "react-icons/si";
import { SiFlask } from "react-icons/si";


function Competence() {
  return (
    <>
        <div className='CompetenceBox'>
        <div className='skill'>
            Mes compétences
          </div>
          <div className='languageBox'>
            <div className='IT_languageList'>
              <div className='languageLevelBar'>
                <div className='html IT_languageName'>
                  <div className='languageType'>
                    <AiFillHtml5 className='languageLogo'/>
                    <div>
                      HTML
                    </div>
                  </div>
                  <div className='percentage'>90%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='css IT_languageName'>
                  <div className='languageType'>
                    <IoLogoCss3 className='languageLogo'/>
                    <div>
                      CSS
                    </div>
                  </div>
                  <div className='percentage'>75%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='php IT_languageName'>
                  <div className='languageType'>
                    <SiPhp className='languageLogo'/>
                    <div>
                      PHP
                    </div>
                  </div>
                  <div className='percentage'>50%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='javascript IT_languageName'>
                  <div className='languageType'>
                    <DiJavascript className='languageLogo'/>
                    <div>
                      Javascript
                    </div>
                  </div>
                  <div className='percentage'>50%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='python IT_languageName'>
                  <div className='languageType'>
                    <IoLogoPython className='languageLogo'/>
                    <div>
                      Python
                    </div>
                  </div>
                  <div className='percentage'>40%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='mySQL IT_languageName'>
                  <div className='languageType'>
                    <GrMysql className='languageLogo'/>
                    <div>
                      MySQL
                    </div>
                  </div>
                  <div className='percentage'>60%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='react IT_languageName'>
                  <div className='languageType'>
                    <SiReact className='languageLogo'/>
                    <div>
                      ReactJs
                    </div>
                  </div>
                  <div className='percentage'>65%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='symfony IT_languageName'>
                  <div className='languageType'>
                    <SiSymfony className='languageLogo'/>
                    <div>
                      Symphony
                    </div>
                  </div>
                  <div className='percentage'>35%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='flask IT_languageName'>
                  <div className='languageType'>
                    <SiFlask className='languageLogo'/>
                    <div>
                      Flask
                    </div>
                  </div>
                  <div className='percentage'>25%</div>
                </div>
              </div>
            </div>
          </div>
          <div className='language'>
            Mes niveaux de langue
          </div>
          <div className='languageBox'>
            <div className='languageList'>
              <div className='languageLevelBar'>
                <div className='french languageName'>
                  <div className='languageType'>Français</div>
                  <div className='percentage'>95%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='english languageName'>
                  <div className='languageType'>Anglais</div>
                  <div className='percentage'>60%</div>
                </div>
              </div>
              <div className='languageLevelBar'>
                <div className='italian languageName'>
                  <div className='languageType'>Italien</div>
                  <div className='percentage'>35%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Competence;
