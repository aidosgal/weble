import React, { useState, useEffect, useRef, Fragment } from "react";
import { Element, Link, scroller } from "react-scroll";
import { motion, useInView } from "framer-motion"
import "./style.css";
import Navbar from "./Navbar";
import { gsap } from 'gsap';
import { CircleType } from 'circletype';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Dialog, Transition } from '@headlessui/react';
import CustomCursor from "./Cursor";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import MovingComponent from 'react-moving-text';


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const refprice = useRef(null);
  const isInViewPrice = useInView(refprice, { once: true });

  const works = ['Интернет магазин', 'Gamedev', 'Moyak'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length);
  };

  let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
  
  return (
    <> 
        <div className='text-white main' style={{ minHeight: '100vh' }}>
          <Navbar/>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-main2 bg-opacity-80   rounded-lg py-5 px-2 shadow-xl transition-all">
                                <div className='lg:grid-cols-2 flex items-center'>
                                  <Dialog.Title as="h3" className="text-white w-auto mx-auto text-2xl text-center">
                                      Оставить заявку
                                  </Dialog.Title>
                                  <div className="w-auto mr-5 absolute right-0">
                                      <Button onClick={closeModal} class="rounded-full font-semibold py-2 px-2 transform hover:scale-125">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                      </Button>
                                  </div>
                                </div>
                                <div className="mt-5">
                                    <form action="#" method="POST" class="text-xl text-left mx-5 mt-1 w-auto">
                                      <label htmlFor="" className="pl-1">Как к вам обращаться?</label>
                                      <input type="text" name="" class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваше имя"/>
                                      <label htmlFor="" className="pl-1">Как с вами связаться?</label>
                                      <input type="text" name="" class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваш номер телефона"/>
                                      <button className="py-3 w-full mt-3 bn5">
                                        Оставить заявку
                                      </button>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
          </Transition>
          
          <section className="mx-auto font-kot flex my-auto h-screen">
            <div className="px-3 sm:px-0">
              <MovingComponent
                type="fadeIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none" className="text-5xl sm:text-8xl text-hero text-center font-nan">
                Позвольте нам создать <br className="hidden sm:block" />ваш сайт мечты!
              </MovingComponent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }} className="text-center text-lg text-gray-300">
                Вы ищете возможность установить прочное онлайн-<br className="hidden sm:block" />присутствие для вашего бизнеса? Ваш поиск завершен!
              </motion.div>
              <br />
              <div className="grid grid-cols-2 flex text-center w-full sm:w-1/3 mx-auto links">
                <button className="py-3 rounded-full border-solid border-purple-500 border-2 ostavitbut" onClick={openModal}>
                  Оставить заявку
                </button>
                <a href="" className="py-4 link cursor-hover-item" data-cursor-text="GO HERE!" data-cursor-text-repeat="4">
                  Узнать большe
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto font-kot flex my-auto h-screen">
            <div>
              <div ref={ref} className="text-center text-5xl font-kot text-h">Почему выбирают нас?</div>
              <br />
              <br />
              <div className="grid grid-cols-1 sm:grid-cols-3 text-center px-6 sm:px-20 gap-5 sm:gap-10" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
              </div>
              <div className="hidden sm:block">
              <div className="grid grid-cols-3 text-center px-20 gap-10 pt-10" style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
              </div>
              </div>
            </div>
          </section>

          {/* mobile section */}
          <section className="mx-auto font-kot flex my-auto h-screen block sm:hidden">
            <div ref={ref1}>
              <div className="grid grid-cols-1 sm:grid-cols-3 text-center px-6 sm:px-20 gap-5 sm:gap-10 pt-10" style={{
                transform: isInView1 ? "none" : "translateX(200px)",
                opacity: isInView1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 sm:py-5 px-2">
                  <div className="mx-auto">
                    <img className="mx-auto" src="1.png" alt="" />
                  </div>
                  <br />
                  <p className="text-xl font-kot text-purple-400">Опыт и комп</p>
                  <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto my-auto px-2 sm:px-20 items-center">
              <div>
                <p className="text-5xl font-nan text-h text-center sm:text-left">Этапы разработки</p>
                <p className="text-md font-norm text-gray-300 text-center sm:text-left">Разработка сайта может быть сложной задачей, и её можно<br className="hidden sm:block" />разделить на несколько этапов, чтобы обеспечить успешное <br className="hidden sm:block" /> выполнение проекта. Справа представлены основные этапы <br className="hidden sm:block" /> разработки сайта</p>
              </div>
              <div className="pt-28 hidden sm:block">
                <Splide options={{
                  direction: 'ttb',
                  height   : '245px',
                  wheel    : true,
                  pagination: false,
                  arrows: false,
                  perPage: 2,
                  perMove: 1,
                  type: 'slide',
                  wheelMinThreshold: '4',
                  releaseWheel: true,
                  speed: '1000',
                  wheelSleep: '500'
                }}>
                  <SplideSlide>
                    <div className="flex">
                      <div className="">
                        <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">1</div>
                      </div>
                      <div className="py-5 ml-6">
                        <p className="text-4xl">Анализ требований</p>
                        <ul>
                          <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                          <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                        </ul>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="flex">
                      <div className="">
                        <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">2</div>
                      </div>
                      <div className="py-5 ml-6">
                        <p className="text-4xl">Анализ требований</p>
                        <ul>
                          <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                          <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                        </ul>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="flex">
                      <div className="">
                        <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">3</div>
                      </div>
                      <div className="py-5 ml-6">
                        <p className="text-4xl">Анализ требований</p>
                        <ul>
                          <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                          <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                        </ul>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="flex">
                      <div className="">
                        <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">4</div>
                      </div>
                      <div className="py-5 ml-6">
                        <p className="text-4xl">Анализ требований</p>
                        <ul>
                          <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                          <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                        </ul>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="flex">
                      <div className="">
                        <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">5</div>
                      </div>
                      <div className="py-5 ml-6">
                        <p className="text-4xl">Анализ требований</p>
                        <ul>
                          <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                          <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                        </ul>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                  </SplideSlide>
                </Splide>
              </div>
              <div className="block sm:hidden">
                <div className="pt-3">
                  <div>
                  <p className="text-4xl">Анализ требований</p>
                  </div>
                  <div className="flex">
                    <div className="pt-2">
                    <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">1</div></div>
                    <ul className="pl-4">
                      <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                      <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-3">
                  <div>
                  <p className="text-4xl">Анализ требований</p>
                  </div>
                  <div className="flex">
                    <div className="pt-2">
                    <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">2</div></div>
                    <ul className="pl-4">
                      <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                      <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex block sm:hidden">
            <div className=" mx-auto my-auto px-2 items-center">
              <div>
                <div className="pt-3">
                  <div>
                  <p className="text-4xl">Анализ требований</p>
                  </div>
                  <div className="flex">
                    <div className="pt-2">
                    <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">3</div></div>
                    <ul className="pl-4">
                      <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                      <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-3">
                  <div>
                  <p className="text-4xl">Анализ требований</p>
                  </div>
                  <div className="flex">
                    <div className="pt-2">
                    <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">4</div></div>
                    <ul className="pl-4">
                      <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                      <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-3">
                  <div>
                  <p className="text-4xl">Анализ требований</p>
                  </div>
                  <div className="flex">
                    <div className="pt-2">
                    <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">5</div></div>
                    <ul className="pl-4">
                      <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                      <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-3">
                  <div>
                  <p className="text-4xl">Анализ требований</p>
                  </div>
                  <div className="flex">
                    <div className="pt-2">
                    <div className="font-extrabold text-5xl rounded-full border border-8 border-white w-20 h-20 text-center justify-center py-2">6</div></div>
                    <ul className="pl-4">
                      <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                      <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          <section className="flex">
            <div>
              <div className="text-center text-5xl font-kot text-h mb-5" ref={refprice}>
                Цены
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto my-auto px-0 gap-5 items-center">
                <div className="rounded-xl px-6 mx-auto w-80 py-6 bg-white bg-opacity-10" style={{
                  transform: isInViewPrice ? "none" : "translateX(350px)",
                  opacity: isInViewPrice ? 1 : 0,
                  transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <p className="text-2xl text-sky-300 mb-1 font-bold">Landing Page</p>
                  <p className="text-sm text-gray-400">Веб-страница созданная с целью привлечения внимания посетителей</p>
                  <div className="flex justify-center mt-1">
                    <p className="text-2xl font-extrabold text-sky-300">от</p>
                    <p className="text-5xl font-extrabold pt-4 pl-2">100,000</p>
                    <p className="text-2xl font-extrabold mb-auto pt-10 pl-2 text-sky-300">тг</p>
                  </div>
                  
                  <button className="py-3 w-full my-2 rounded-full bg-white bg-opacity-10 font-bold text-white hover:scale-105 " onClick={openModal}>
                    Оставить заявку
                  </button>
                  <ul className="">
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-sky-300 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Анализ конкурентов и ЦА
                    </li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="aqua" className="w-6 h-6 fill-sky-300 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Индивидуальный дизайн</li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="aqua" className="w-6 h-6 fill-sky-300 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Адаптация под все устройства
                    </li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="aqua" className="w-6 h-6 fill-sky-300 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Обратная связь в течении месяца
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl px-6 mx-auto w-80 py-6 bg-white bg-opacity-10">
                  <p className="text-2xl text-pink-200 mb-1 font-bold">Интернет-магазин</p>
                  <p className="text-sm text-gray-400">Электронная платформа, где компания или частное лицо предлагают товары или услуги для продажи через интернет.</p>
                  <div className="flex justify-center mt-1">
                    <p className="text-2xl font-extrabold text-pink-200">от</p>
                    <p className="text-5xl font-extrabold pt-4 pl-2">300,000</p>
                    <p className="text-2xl font-extrabold mb-auto pt-10 pl-2 text-pink-200">тг</p>
                  </div>
                  
                  <button className="py-3 w-full my-2 rounded-full bg-white bg-opacity-10 font-bold text-white hover:scale-105" onClick={openModal}>
                    Оставить заявку
                  </button>
                  <ul className="">
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-pink-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Анализ конкурентов и ЦА
                    </li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-pink-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Индивидуальный дизайн</li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-pink-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Адаптация под все устройства
                    </li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-pink-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Обратная связь в течении месяца
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl px-6 mx-auto w-80 py-6 bg-white bg-opacity-10" style={{
                  transform: isInViewPrice ? "none" : "translateX(-350px)",
                  opacity: isInViewPrice ? 1 : 0,
                  transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <p className="text-2xl text-indigo-200 mb-1 font-bold">Корпоративный сайт</p>
                  <p className="text-sm text-gray-400">Веб-сайт, созданный для представления и продвижения компании в интернете</p>
                  <div className="flex justify-center mt-1">
                    <p className="text-2xl font-extrabold text-indigo-200">от</p>
                    <p className="text-5xl font-extrabold pt-4 pl-2">200,000</p>
                    <p className="text-2xl font-extrabold mb-auto pt-10 pl-2 text-indigo-200">тг</p>
                  </div>
                  
                  <button className="py-3 w-full my-2 rounded-full bg-white bg-opacity-10 font-bold text-white hover:scale-110" onClick={openModal}>
                    Оставить заявку
                  </button>
                  <ul className="">
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Анализ конкурентов и ЦА
                    </li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Индивидуальный дизайн</li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Адаптация под все устройства
                    </li>
                    <li className="flex border-b border-b-1 border-b-gray-400 w-auto items-center text-md py-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-200 mr-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Обратная связь в течении месяца
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="flex">
              <div className="w-full mt-16 justify-center">
                <div style={{width: "80%"}} className="mb-5 mx-auto flex grid grid-cols-1 sm:grid-cols-2">
                  <p className="text-5xl font-kot text-h">{works[currentIndex]}</p>
                  <div className="flex items-center mt-2">
                    <div className="border border-white text-white rounded-full ml-5 px-3 text-sm">Laravel</div>
                    <div className="border border-white text-white rounded-full ml-3 px-3 text-sm">React</div>
                    <div className="border border-white text-white rounded-full ml-3 px-3 text-sm">Figma</div>
                  </div>
                </div>
                <div className="justify-center items-center">
                <Splide options={{
                  height   : '500px',
                  pagination: false,
                  perPage: 1,
                  perMove: 1,
                  speed: '1000',
                  width: '80%',
                  focus: 'center',
                  
                }} hasTrack={false} className="mx-auto">
                  <SplideTrack>
                    <SplideSlide>
                      <img className="mx-auto" src="shop.png" alt="shop" />
                    </SplideSlide>
                    <SplideSlide>
                      <img className="mx-auto" src="shop.png" alt="shop" />
                    </SplideSlide>
                    <SplideSlide>
                      <img className="mx-auto" src="shop.png" alt="shop" />
                    </SplideSlide>
                  </SplideTrack>
                  <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev" onClick={prevWord}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button>
                    <button className="splide__arrow splide__arrow--next" onClick={nextWord}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" /></svg></button>
                  </div>
                </Splide>
                </div>
              </div>
          </section>
          <section className="flex">
            <div className="grid grid-cols-2 mx-auto my-auto px-20 items-center">
              <div className="pr-20">
                <p className="text-5xl font-nan text-h">Сделайте первый шаг к вашему онлайн-успеху уже сегодня!</p>
                <p className="text-md font-norm text-gray-300 mt-4">Заполните форму справа, чтобы обсудить ваши требования к проекту, получить персонализированное предложение или назначить консультацию.</p>
              </div>
              <div className="pt-16">
                <div className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white bg-opacity-10 rounded-lg py-5 px-2 shadow-xl transition-all">
                  <div className='flex items-center'>
                    <div className="text-white w-auto mx-auto text-2xl text-center">
                        Оставить заявку
                    </div>
                  </div>
                  <div className="mt-5">
                    <form action="#" method="POST" class="text-xl text-left mx-5 mt-1 w-auto">
                      <label htmlFor="" className="pl-1">Как к вам обращаться?</label>
                      <input type="text" name="" class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваше имя"/>
                      <label htmlFor="" className="pl-1">Как с вами связаться?</label>
                      <input type="text" name="" class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваш номер телефона"/>
                      <button className="py-3 w-full mt-3 bn5">
                        Оставить заявку
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>
  );
}
