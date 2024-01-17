import './App.css';
// import Headroom from 'react-headroom';
import Navbar from './Navbar';
import Profile from './Images/jmd6.jpg';
import Html from './Images/html.png';
import Css from './Images/css.png';
import Javascript from './Images/javascript.png';
import Tailwind from './Images/tailwind.png';
import React from './Images/react.png';
import Project2 from './Images/project2.png';
import Project3 from './Images/project3.png';
import Project4 from './Images/project4.png';

function App() {
  return (
    <>
          <Navbar />
        
        <main>
          <section id="home">
            <div className="container max-w-6xl py-5 md:py-10 md:px-10 px-5">
              <div className='flex md:flex-col-reverse flex-col lg:flex-row items-center lg:gap-20 md:gap-10 gap-3'>
                <img src={Profile} className='rounded-full w-24 h-24 md:w-96 md:h-[70vh] md:rounded-lg border-r-4 border-b-4 hover:p-0 border-color-primary p-2 ease-in duration-200' alt="Profile Images" />
                <div className='text-white space-y-1 text-center lg:text-left'>
                  <div className='flex flex-col'>
                    <p className='md:hidden font-bold text-color-primary mb-1'>|</p>
                    <h2 className='font-semibold md:text-6xl text-4xl text-color-primary'><span className='line'>-</span> I'm John Mark</h2>
                    <h2 className='font-semibold md:text-6xl text-3xl capitalize lg:ml-11'>Web designer</h2>
                  </div>
                    <p className='py-4 md:py-5 leading-relaxed'>Enthusiastic IT student excelling in <b>Frontend Development</b>, eager to apply self-taught skills. Excited about contributing to innovative web solutions, collaborating with professionals for meaningful impact and continuous growth.</p>
                  <div>
                    <a href="#skills">
                    <button className='py-2 pl-6 pr-16 font-medium capitalize border-2 border-color-primary rounded-full'>more about me</button>
                    <button className='py-2 px-5 bg-color-primary rounded-full -ml-14 hover:opacity-85 ease-in duration-200'><i class="fa fa-arrow-right"></i></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

           <section id="skills">
            <div className="container py-10">
              <div className='text-center mt-10'>
                <h2 className='md:text-5xl text-4xl font-semibold text-white capitalize'><span className='text-color-primary'>my</span> skills</h2>
              </div>

              <div className='flex items-center flex-wrap justify-center gap-10 py-14 lg:w-3/5 m-auto '>
                <img src={Html} className='md:h-40 md:w-40 h-28 w-28' alt="" />
                <img src={Css} className='md:h-40 md:w-40 h-28 w-28' alt="" />
                <img src={Javascript} className='md:h-40 md:w-40 h-28 w-28' alt="" />
                <img src={Tailwind} className='md:h-40 md:w-40 h-28 w-28' alt="" />
                <img src={React} className='md:h-40 md:w-40 h-28 w-28' alt="" />
              </div>
            </div>
          </section>

          <section id="projects">
            <div className="container py-10">
              <div className='text-center mb-14'>
                <h2 className='md:text-5xl text-4xl font-semibold text-white capitalize'><span className='text-color-primary'>my</span> Projects</h2>
              </div>

                <div className='grid md:grid-cols-2 lg:w-4/5 m-auto place-items-center gap-10 px-8'>
                  <div className='bg-slate-700 rounded-lg border-color-primary border-r-4 border-b-4'>
                    <div className="flex items-center gap-1 pt-3 px-3">
                      <div className='circle1'></div>
                      <div className='circle2'></div>
                      <div className='circle3'></div>
                    </div>
                    <div className="px-5 pb-5 pt-3">
                      <img src="https://themarketingdesigner.com/wp-content/uploads/2021/10/responsive-web-on-devices-min.png" className='rounded-lg h-36 w-96 shadow-2xl' alt="" />
                      <div className='mt-2 text-center'>
                        <p className='text-white text-sm font-medium'><span className='font-bold'>Tools:</span> Javascript, JQuery, Bootstrap</p>
                        <button className='mt-4 py-2 px-3 capitalize text-white bg-color-primary font-medium rounded-lg hover:opacity-85 ease-in duration-200'>view project</button>
                      </div>
                    </div>
                  </div>

                  <div className='bg-slate-700 rounded-lg border-color-primary border-r-4 border-b-4'>
                    <div className="flex items-center gap-1 pt-3 px-3">
                      <div className='circle1'></div>
                      <div className='circle2'></div>
                      <div className='circle3'></div>
                    </div>
                    <div className="px-5 pb-5 pt-3">
                      <img src={Project2} className='rounded-lg h-36 w-96 shadow-2xl' alt="" />
                      <div className='mt-2 text-center'>
                        <p className='text-white text-sm font-medium'><span className='font-bold'>Tools:</span> Javascript, JQuery, Tailwind</p>
                        <button className='mt-4 py-2 px-3 capitalize text-white bg-color-primary font-medium rounded-lg hover:opacity-85 ease-in duration-200'>view project</button>
                      </div>
                    </div>
                  </div>

                  <div className='bg-slate-700 rounded-lg border-color-primary border-r-4 border-b-4'>
                    <div className="flex items-center gap-1 pt-3 px-3">
                      <div className='circle1'></div>
                      <div className='circle2'></div>
                      <div className='circle3'></div>
                    </div>
                    <div className="px-5 pb-5 pt-3">
                      <img src={Project3} className='rounded-lg h-36 w-96 shadow-2xl' alt="" />
                      <div className='mt-2 text-center'>
                        <p className='text-white text-sm font-medium'><span className='font-bold'>Tools:</span> Javascript, Jquery, APIs</p>
                        <button className='mt-4 py-2 px-3 capitalize text-white bg-color-primary font-medium rounded-lg hover:opacity-85 ease-in duration-200'>view project</button>
                      </div>
                    </div>
                  </div>

                  <div className='bg-slate-700 rounded-lg border-color-primary border-r-4 border-b-4'>
                    <div className="flex items-center gap-1 pt-3 px-3">
                      <div className='circle1'></div>
                      <div className='circle2'></div>
                      <div className='circle3'></div>
                    </div>
                    <div className="px-5 pb-5 pt-3">
                      <img src={Project4} className='rounded-lg h-36 w-96 shadow-2xl' alt="" />
                      <div className='mt-2 text-center'>
                        <p className='text-white text-sm font-medium'><span className='font-bold'>Tools:</span> Javascript, Sass, JQuery</p>
                        <button className='mt-4 py-2 px-3 capitalize text-white bg-color-primary font-medium rounded-lg hover:opacity-85 ease-in duration-200'>view project</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>

          <section id="services">
            <div className="container py-10">
              <div className='text-center py-14'>
                <h2 className='md:text-5xl text-4xl font-semibold text-white'>Serv<span className='text-color-primary'>i</span>ces</h2>
              </div>

            <div class="px-10">
              <ul class="grid lg:grid-cols-4 md:grid-cols-1 gap-8">
                <li class="list-item col-span-1 flex flex-col items-center mb-4">
                <div className='flex items-center gap-5 lg:flex-row  flex-col'>
                <div class="bg-blue-500 text-white rounded-full w-16 h-16 circle text-4xl font-medium flex items-center justify-center mb-2">1</div>
                  <div className='lg:py-0 py-3'>
                  <img src="https://cdn.pixabay.com/photo/2014/04/03/10/29/arrow-310633_1280.png" className='lg:w-48 w-28 h-28 rotate-90 lg:rotate-0' alt="" />
                  </div>
                </div>
                  <div class="flex-1 lg:text-left text-center">
                    <h4 className='text-2xl text-white font-semibold py-3'>Define Requirements</h4>
                    <p className='leading-relaxed text-white text-sm mt-1'>Crafting success begins with clarity. Through collaborative discussions and meticulous analysis, we define your frontend project's requirements, ensuring precision and alignment with your vision and goals.</p>
                  </div>
                </li>
                <li class="list-item col-span-1 flex flex-col items-center mb-4">
                <div className='flex items-center gap-5 lg:flex-row flex-col'>
                <div class="bg-blue-500 text-white rounded-full w-16 h-16 circle flex items-center text-4xl font-medium justify-center mb-2">2</div>
                <div className='lg:py-0 py-3'>
                  <img src="https://cdn.pixabay.com/photo/2014/04/03/10/29/arrow-310633_1280.png" className='lg:w-48 w-28 h-28 rotate-90 lg:rotate-0' alt="" />
                  </div>
                </div>
                  <div class="flex-1 lg:text-left text-center">
                    <h4 className='text-2xl text-white font-semibold py-3'>Design Interfaces</h4>
                    <p className='leading-relaxed text-white text-sm mt-1'>Elevate user experiences with our "Design Interfaces" service. We craft visually appealing and intuitive interfaces, integrating user-centric design principles to enhance engagement and deliver a standout frontend solution.</p>
                  </div>
                </li>
                <li class="list-item col-span-1 flex flex-col items-center mb-4">
                <div className='flex items-center gap-5 lg:flex-row flex-col'>
                <div class="bg-blue-500 text-white rounded-full w-16 h-16 circle flex items-center text-4xl font-medium justify-center mb-2">3</div>
                <div className='lg:py-0 py-3'>
                  <img src="https://cdn.pixabay.com/photo/2014/04/03/10/29/arrow-310633_1280.png" className='lg:w-48 w-28 h-28 rotate-90 lg:rotate-0' alt="" />
                  </div>
                </div>
                  <div class="flex-1 lg:text-left text-center">
                    <h4 className='text-2xl text-white font-semibold py-3'>Code and Develop</h4>
                    <p className='leading-relaxed text-white text-sm mt-1'>Transforming vision into reality, we execute your frontend project with precision. Our coding expertise and development practices ensure a seamless, efficient, and feature-rich user experience.</p>
                  </div>
                </li>
                <li class="list-item col-span-1 flex flex-col items-center mb-4">
                <div className='flex items-center gap-5 lg:flex-row flex-col'>
                <div class="bg-blue-500 text-white rounded-full w-16 h-16 circle flex items-center text-4xl font-medium justify-center mb-2">4</div>
                <div className='lg:py-0 py-3'>
                  <img src="https://cdn.pixabay.com/photo/2014/04/03/10/29/arrow-310633_1280.png" className='lg:w-48 w-28 h-28 rotate-90 lg:rotate-0' alt="" />
                  </div>
                </div>
                  <div class="flex-1 lg:text-left text-center">
                    <h4 className='text-2xl text-white font-semibold py-3'>Optimize and Deploy</h4>
                    <p className='leading-relaxed text-white text-sm mt-1'>Maximizing performance and ensuring a flawless user experience, our "Optimize and Deploy" service fine-tunes frontend solutions for efficiency. Seamlessly deploy your project, ready for users to engage and enjoy.</p>
                  </div>
                </li>
              </ul>
            </div>

            </div>
          </section>

          <section id="contacts">
       <div className="container py-10 mb-20">
        <div className='text-center py-10 md:px-0 px-8'>
           <h2 className='md:text-5xl text-4xl font-semibold text-color-primary'>C<span className='text-white'>ontacts</span></h2>
           <p className='text-white font-medium mt-5'>Hey there, Feel free to reach out to me using the following contact details.</p>
        </div>

       <form className='md:px-0 px-8'>
          <div className='bg-white lg:w-1/2 m-auto px-4 py-8 rounded-xl'>
            <div className=''>
              <div className='grid md:grid-cols-2 gap-2 place-items-center'>
                <input type="text" className='p-3 w-full bg-gray-100 rounded-lg focus:outline-color-primary font-semibold text-gray-500 text-sm' placeholder='Name' />
                <input type="text" className='p-3 w-full bg-gray-100 rounded-lg focus:outline-color-primary font-semibold text-gray-500 text-sm' placeholder='Email' />
                <input type="text" className='p-3 w-full bg-gray-100 rounded-lg focus:outline-color-primary font-semibold text-gray-500 text-sm' placeholder='Phone' />
                <input type="text" className='p-3 w-full bg-gray-100 rounded-lg focus:outline-color-primary font-semibold text-gray-500 text-sm' placeholder='Company' />
              </div>
              <textarea rows="4" className='p-3 w-full mt-2 bg-gray-100 rounded-lg focus:outline-color-primary font-semibold' placeholder='Message'></textarea>
              <button className='py-2 px-4 w-full bg-color-primary rounded-lg text-white capitalize font-semibold hover:opacity-85 ease-in duration-200'>send message</button>
            </div>
          </div>
        </form>
       </div>
      </section>

      <footer className='bg-color-primary'>
        <div className="container py-10">
          <div className='flex items-center gap-3 justify-center flex-col'>
            <div>
              <h2 className='text-4xl font-bold text-white leading-tight capitalize'>get in touch</h2>
            </div>
            <div className='flex items-center space-x-4'>
              <i className='fa fa-github bg-white text-color-primary rounded-full py-1 px-3 text-lg font-medium cursor-pointer hover:bg-slate-800 hover:text-white ease-in duration-200'></i>
              <i className='fa fa-envelope bg-white text-color-primary rounded-full py-1 px-3 text-lg font-medium cursor-pointer hover:bg-slate-800 hover:text-white ease-in duration-200'></i>
              <i className='fa fa-linkedin bg-white text-color-primary rounded-full py-1 px-3 text-lg font-medium cursor-pointer hover:bg-slate-800 hover:text-white ease-in duration-200'></i>
            </div>
          </div>
        </div>
      </footer>
        </main>
    </>
  );
}

export default App;