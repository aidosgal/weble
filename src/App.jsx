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
import axios from 'axios';
import emailjs from '@emailjs/browser';
import ReactInputMask from "react-input-mask";


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function PhoneInput(props) {
  return (
    <ReactInputMask 
    type="text" 
    name="phone" 
    id="phone" 
    value={props.value}
    onChange={props.onChange}
    mask={"+7 (999)-999-99-99"}
    class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" 
    placeholder="Ваш номер телефона" 
    required>
    </ReactInputMask>
  );
}

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const refetap = useRef(null);
  const isInViewEtap = useInView(refetap, { once: true });
  const refzayavka = useRef(null);
  const isInViewZayavka = useInView(refzayavka, { once: true });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const refprice = useRef(null);
  const isInViewPrice = useInView(refprice, { once: true });

  const refmobile1 = useRef(null);
  const isInViewMobile1 = useInView(refmobile1, { once: true });
  const refmobile2 = useRef(null);
  const isInViewMobile2 = useInView(refmobile2, { once: true });
  const refmobile3 = useRef(null);
  const isInViewMobile3 = useInView(refmobile3, { once: true });
  const refmobile4 = useRef(null);
  const isInViewMobile4 = useInView(refmobile4, { once: true });
  const refmobile5 = useRef(null);
  const isInViewMobile5 = useInView(refmobile5, { once: true });
  const refmobile6 = useRef(null);
  const isInViewMobile6 = useInView(refmobile6, { once: true });
  const refmobile7 = useRef(null);
  const isInViewMobile7 = useInView(refmobile7, { once: true });
  const refmobile8 = useRef(null);
  const isInViewMobile8 = useInView(refmobile8, { once: true });
  const refmobile9 = useRef(null);
  const isInViewMobile9 = useInView(refmobile9, { once: true });
  const refmobile10 = useRef(null);
  const isInViewMobile10 = useInView(refmobile10, { once: true });
  const refmobile11 = useRef(null);
  const isInViewMobile11 = useInView(refmobile11, { once: true });
  const refmobile12 = useRef(null);
  const isInViewMobile12 = useInView(refmobile12, { once: true });
  const refmobile13 = useRef(null);
  const isInViewMobile13 = useInView(refmobile13, { once: true });
  const refmobile14 = useRef(null);
  const isInViewMobile14 = useInView(refmobile14, { once: true });
  const refmobile15 = useRef(null);
  const isInViewMobile15 = useInView(refmobile15, { once: true });
  const refmobile16 = useRef(null);
  const isInViewMobile16 = useInView(refmobile16, { once: true });
  const refmobile17 = useRef(null);
  const isInViewMobile17 = useInView(refmobile17, { once: true });
  const refmobile18 = useRef(null);
  const isInViewMobile18 = useInView(refmobile18, { once: true });
  const refmobile19 = useRef(null);
  const isInViewMobile19 = useInView(refmobile19, { once: true });
  const refmobile20 = useRef(null);
  const isInViewMobile20 = useInView(refmobile20, { once: true });
  

  const works = ['Infatti', 'Avrora', 'Kimex'];
  const workslinks = ['https://infatti.kz', 'https://avrora.kz', 'https://kimex.kz'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_ed3futx', 'template_y8spxye', e.target, 'K0OEf2loo5c_Xe7WC');
  }

  const nextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length);
  };

  let [isOpen1, setIsOpen1] = useState(false)

    function closeModal1() {
        setIsOpen1(false)
    }

    function openModal1() {
        if(isOpen){
          closeModal()
          setIsOpen1(true)
          setTimeout(() => {
            closeModal1()
          }, 3000);
        } else{
          setIsOpen1(true)
          setTimeout(() => {
            closeModal1()
          }, 3000);
        }
    }

  let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormFilled = formData.firstName && formData.phone;

  const [formData1, setFormData1] = useState({
    name: '',
    phone: '',
  });

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1({ ...formData1, [name]: value });
  };

  const isFormFilled1 = formData1.name && formData1.phone;

  const [formData2, setFormData2] = useState({
    name: '',
    phone: '',
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };

  const isFormFilled2 = formData2.name && formData2.phone;
  
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
                                <div className='flex items-center'>
                                  <Dialog.Title as="h3" className="text-white pt-6 sm:pt-0 w-auto mx-auto text-2xl text-center">
                                      Заказать обратный звонок
                                  </Dialog.Title>
                                  <div className="w-auto mr-5 absolute right-0 top-4">
                                      <Button onClick={closeModal} class="rounded-full font-semibold py-2 px-2 transform hover:scale-125">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                      </Button>
                                  </div>
                                </div>
                                <div className="mt-5">
                                    <form action="#" method="POST" onSubmit={sendEmail} class="text-xl text-left mx-5 mt-1 w-auto">
                                      <label htmlFor="" className="pl-1">Как к вам обращаться?</label>
                                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваше имя" required/>
                                      <label htmlFor="" className="pl-1">Как с вами связаться?</label>
                                      <PhoneInput  value={formData.phone} onChange={handleChange} />
                                      <label htmlFor="" className="pl-1">Есть ли у вас промокод?</label>
                                      <input type="text" name="promocode" class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваш промокод"/>
                                      <button className="py-3 w-full mt-3 bn5" type='submit' onClick={isFormFilled ? openModal1 : null}>
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

          <Transition appear show={isOpen1} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal1}>
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
                            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-main2 bg-opacity-80   rounded-lg py-5 px-2 shadow-xl transition-all">
                                <div className='flex items-center'>
                                  <Dialog.Title as="h3" className="text-white pt-6 sm:pt-0 w-auto mx-auto text-2xl text-center relative">
                                  <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                  <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
                                  </svg>
                                      Ваша заявка отправлена успешно
                                  </Dialog.Title>
                                  <div className="w-auto mr-5 absolute right-0 top-4">
                                      <Button onClick={closeModal1} class="rounded-full font-semibold py-2 px-2 transform hover:scale-125">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                      </Button>
                                  </div>
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
                transition={{ duration: 1, delay: 0.5 }} className="text-center text-lg text-gray-300">
                Вы ищете возможность установить прочное онлайн-<br className="hidden sm:block" />присутствие для вашего бизнеса? Ваш поиск завершен!
              </motion.div>
              <br />
              <div className="grid grid-cols-2 flex text-center w-full sm:w-1/3 mx-auto links">
                <button className="py-3 rounded-full border-solid border-purple-500 border-2 ostavitbut" onClick={openModal}>
                  Оставить заявку
                </button>
                <a href="#about" className="py-4 link hidden sm:block font-norm">
                  <p className="font-norm">Узнать большe</p>
                </a>
                <a href="#aboutmobile" className="py-4 link block sm:hidden fonr-norm">
                  <p className="font-norm">Узнать большe</p>
                </a>
              </div>
            </div>
          </section>

          <div className="hidden sm:block">

            <section id="about" className="mx-auto font-kot flex my-auto h-screen">
              <div>
                <div className="text-center text-5xl font-kot text-h">Почему выбирают нас?</div>
                <br />
                <div ref={ref} className="grid grid-cols-3 text-center px-20 gap-6" style={{
                  transform: isInView ? "none" : "translateY(-30px)",  
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <div className="bg-white bg-opacity-10 rounded-lg text-center py-5 px-5">
                    <div className="">
                      <img className="w-10" src="1.png" alt="" />
                    </div>
                    <p className="text-2xl font-kot text-white text-left mt-2 text-h">Опыт и компетентность</p>
                    <p className="text-sm text-gray-400 text-left mt-2">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов. Мы знаем, какие технологии и методологии лучше всего подходят для разных типов сайтов и бизнесов.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg text-center py-5 px-5">
                    <div className="">
                      <img className="w-10" src="2.png" alt="" />
                    </div>
                    <p className="text-2xl font-kot text-white text-left mt-2 text-h">Индивидуальный подход</p>
                    <p className="text-sm text-gray-400 text-left mt-2">Мы понимаем, что каждый бизнес уникален, и поэтому предлагаем индивидуальный подход к разработке сайтов. Мы работаем с вами, чтобы понять ваши потребности и цели, и создаем сайт, который отражает вашу уникальность.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg text-center py-5 px-5">
                    <div className="">
                      <img className="w-8" src="3.png" alt="" />
                    </div>
                    <p className="text-2xl font-kot text-white text-left mt-2 text-h">Качество и профессионализм</p>
                    <p className="text-sm text-gray-400 text-left mt-2">Наша команда стремится к высокому качеству в каждой детали. Мы следим за последними трендами в дизайне и разработке, чтобы обеспечить вашему сайту современный и профессиональный вид.</p>
                  </div>
                </div>
                <div className="">
                <div ref={ref2} className="grid grid-cols-3 text-center px-20 gap-6 pt-6" style={{
                  transform: isInView2 ? "none" : "translateY(30px)",
                  opacity: isInView2 ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <div className="bg-white bg-opacity-10 rounded-lg text-center py-5 px-5">
                    <div className="">
                      <img className="w-10" src="4.png" alt="" />
                    </div>
                    <p className="text-2xl font-kot text-white text-left mt-2 text-h">Техническая экспертиза</p>
                    <p className="text-sm text-gray-400 text-left mt-2">Мы обладаем глубокими знаниями в сфере веб-технологий и гарантируем, что ваш сайт будет оптимизирован для быстрой загрузки, безопасности и хорошей производительности.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg text-center py-5 px-5">
                    <div className="w-10">
                      <img className="" src="5.png" alt="" />
                    </div>
                    <p className="text-2xl font-kot text-white text-left mt-2 text-h">Удовлетворенные клиенты</p>
                    <p className="text-sm text-gray-400 text-left mt-2">Наши успешные проекты и довольные клиенты - это наша лучшая реклама. Мы стремимся к тому, чтобы каждый клиент остался доволен результатом сотрудничества с нами.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg text-center py-5 px-5">
                    <div className="w-10">
                      <img className="" src="6.png" alt="" />
                    </div>
                    <p className="text-2xl font-kot text-white text-left mt-2 text-h">Поддержка и обслуживание</p>
                    <p className="text-sm text-gray-400 text-left mt-2">Мы не останавливаемся на этапе разработки. Мы предоставляем надежную поддержку и обслуживание вашего сайта, чтобы он оставался актуальным и безопасным с течением времени.</p>
                  </div>
                </div>
                </div>
              </div>
            </section>

            <section className="flex">
              <div className="grid grid-cols-2 mx-auto my-auto px-20 items-center" ref={refetap}>
                <div style={{
                  transform: isInViewEtap ? "none" : "translateX(-200px)",
                  opacity: isInViewEtap ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <p className="text-5xl font-nan text-h">Этапы разработки</p>
                  <p className="text-md font-norm text-gray-300">Разработка сайта может быть сложной задачей, и её можно<br />разделить на несколько этапов, чтобы обеспечить успешное <br /> выполнение проекта. Справа представлены основные этапы <br /> разработки сайта</p>
                </div>
                <div className="pt-28" style={{
                  transform: isInViewEtap ? "none" : "translateX(-200px)",
                  opacity: isInViewEtap ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <Splide options={{
                    direction: 'ttb',
                    autoHeight: 'true',
                    height: '20rem',
                    wheel    : true,
                    pagination: false,
                    arrows: false,
                    perPage: 1,
                    perMove: 1,
                    type: 'slide',
                    wheelMinThreshold: '4',
                    releaseWheel: true,
                    speed: '1000',
                    wheelSleep: '500'
                  }}>
                    <SplideSlide>
                      <div className="flex">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[25px] py-[10px]">1</p>
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
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[23px] py-[10px]">2</p>
                        </div>
                        <div className="py-5 ml-6">
                          <p className="text-4xl">Установка задач</p>
                          <ul>
                            <li>&#8226; Разработка технического задания.</li>
                            <li>&#8226; Определение структуры сайта и создание карты сайта.</li>
                            <li>&#8226; Определение бюджета и сроков выполнения проекта.</li>
                          </ul>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[23px] py-[11px]">3</p>
                        </div>
                        <div className="py-5 ml-6">
                          <p className="text-4xl">Дизайн и макет</p>
                          <ul>
                            <li>&#8226; Создание дизайн-концепции, включая цветовую палитру и стиль.</li>
                            <li>&#8226; Разработка макетов (wireframes) и мокапов.</li>
                            <li>&#8226; Дизайн пользовательского интерфейса (UI) и элементов.</li>
                          </ul>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex">
                        <div className="outer_circle">
                          <p className="inner_text text-5xl font-extrabold px-[21px] py-[10px]">4</p>
                          <div className="inner_circle"></div>
                        </div>
                        <div className="py-5 ml-6">
                          <p className="text-4xl">Разработка</p>
                          <ul>
                            <li>&#8226; Выбор технологий и платформы для создания сайта.</li>
                            <li>&#8226; Создание бэкенда (серверной части) и фронтенда (клиентской части).</li>
                            <li>&#8226; Интеграция функциональности, например, форм обратной связи, онлайн-чата и других модулей.</li>
                          </ul>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex">
                      <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[22px] py-[11px]">5</p>
                        </div>
                        <div className="py-5 ml-6">
                          <p className="text-4xl">Тестирование</p>
                          <ul>
                            <li>&#8226; Проведение функционального тестирования, проверка работы всех элементов сайта.</li>
                            <li>&#8226; Отладка и исправление ошибок.</li>
                            <li>&#8226; Тестирование совместимости с разными браузерами и устройствами.</li>
                          </ul>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex">
                      <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[22px] py-[10px]">6</p>
                        </div>
                        <div className="py-5 ml-6">
                          <p className="text-4xl">Запуск</p>
                          <ul>
                            <li>&#8226; Размещение сайта на хостинге или сервере.</li>
                            <li>&#8226; Настройка DNS и доменного имени, если необходимо.</li>
                            <li>&#8226; Проверка работоспособности на живом сервере.</li>
                          </ul>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex">
                      <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[25px] py-[11px]">7</p>
                        </div>
                        <div className="py-5 ml-6">
                          <p className="text-4xl">Обучение</p>
                          <ul>
                            <li>&#8226; Обучение клиента управлению сайтом (если используется CMS).</li>
                            <li>&#8226; Подготовка технической документации и инструкций по эксплуатации.</li>
                          </ul>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </section>

            <section id="price" className="flex">
              <div>
                <div className="text-center text-5xl font-kot text-h mb-5" ref={refprice}>
                  Цены
                </div>
                <div className="grid grid-cols-3 mx-auto my-auto px-0 gap-5 items-center">
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
                      <p className="text-5xl font-extrabold pt-4 pl-2">400,000</p>
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

            <section id="works" className="flex">
                <div className="w-full mt-16 justify-center">
                  <a href={workslinks[currentIndex]}>
                  <div style={{width: "80%"}} className="mb-5 mx-auto flex">
                    <p className="text-5xl font-kot text-h">{works[currentIndex]}</p>
                    <div className="flex items-center mt-2">
                      <div className="border border-white text-white rounded-full ml-3 px-3 text-sm">Laravel</div>
                      <div className="border border-white text-white rounded-full ml-3 px-3 text-sm">React</div>
                      <div className="border border-white text-white rounded-full ml-3 px-3 text-sm">Figma</div>
                    </div>
                  </div>
                  </a>
                  <div className="justify-center items-center">
                  <Splide options={{
                    height   : '500px',
                    pagination: false,
                    perPage: 1,
                    perMove: 1,
                    speed: '1000',
                    width: '80%',
                    focus: 'center',
                    type: 'loop',
                  }} hasTrack={false} className="mx-auto">
                    <SplideTrack>
                      <SplideSlide>
                        <a href="https://infatti.kz"><img className="mx-auto" src="/infatti.png" alt="infatti" /></a>
                      </SplideSlide>
                      <SplideSlide>
                        <a href="https://avrora.kz"><img className="mx-auto" src="/avrora.png" alt="avrora" /></a>
                      </SplideSlide>
                      <SplideSlide>
                        <a href="https://kimex.kz"><img className="mx-auto" src="/kimex.png" alt="kimex" /></a>
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

            <section id="contacts" className="flex">
              <div ref={refzayavka} className="grid grid-cols-2 mx-auto my-auto px-20 items-center">
                <div className="pr-20" style={{
                  transform: isInViewZayavka ? "none" : "translateX(-50px)",
                  opacity: isInViewZayavka ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <p className="text-5xl font-nan text-h">Сделайте первый шаг к вашему онлайн-успеху уже сегодня!</p>
                  <p className="text-md font-norm text-gray-300 mt-4">Заполните форму справа, чтобы обсудить ваши требования к проекту, получить персонализированное предложение или назначить консультацию.</p>
                </div>
                <div className="pt-16" style={{
                  transform: isInViewZayavka ? "none" : "translateX(50px)",
                  opacity: isInViewZayavka ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                  <div className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white bg-opacity-10 rounded-lg py-5 px-2 shadow-xl transition-all">
                    <div className='flex items-center'>
                      <div className="text-white w-auto mx-auto text-2xl text-center">
                          Оставить заявку
                      </div>
                    </div>
                    <div className="mt-5">
                      <form action="#" method="POST" onSubmit={sendEmail} class="text-xl text-left mx-5 mt-1 w-auto">
                        <label htmlFor="" className="pl-1">Как к вам обращаться?</label>
                        <input type="text" name="name" value={formData1.name} onChange={handleChange1} class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваше имя" required/>
                        <label htmlFor="" className="pl-1">Как с вами связаться?</label>
                        <PhoneInput  value={formData1.phone} onChange={handleChange1} />
                        <label htmlFor="" className="pl-1">Есть ли у вас промокод?</label>
                        <input type="text" name="promocode" class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваш промокод"/>
                        <button className="py-3 w-full mt-3 bn5" type='submit' onClick={isFormFilled1 ? openModal1 : null}>
                          Оставить заявку
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <main className="block sm:hidden px-4">
            
            <div id="aboutmobile" className="mx-auto font-kot flex my-auto">
              <div>
                <div className="text-center text-4xl font-kot text-h"  style={{
                    transform: isInViewMobile1 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile1 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>Почему <br/> выбирают нас?</div>
                <br />
                <div className="grid grid-cols-1 text-center gap-5">
                  <div ref={refmobile1} className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 px-2" style={{
                    transform: isInViewMobile2 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile2 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div className="mx-auto">
                      <img className="mx-auto w-12" src="1.png" alt="" />
                    </div>
                    <p className="text-xl font-kot text-purple-400 text-h mt-2">Опыт и компетентность</p>
                    <p className="text-sm text-gray-400">Наши разработчики имеют богатый опыт в создании разнообразных веб-проектов. Мы знаем, какие технологии и методологии лучше всего подходят для разных типов сайтов и бизнесов.</p>
                  </div>
                  <div ref={refmobile2} className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 px-2" style={{
                    transform: isInViewMobile3 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile3 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div className="mx-auto">
                      <img className="mx-auto w-12" src="2.png" alt="" />
                    </div>
                    <p className="text-xl font-kot text-purple-400 text-h mt-2">Индивидуальный подход</p>
                    <p className="text-sm text-gray-400">Мы понимаем, что каждый бизнес уникален, и поэтому предлагаем индивидуальный подход к разработке сайтов. Мы работаем с вами, чтобы понять ваши потребности и цели, и создаем сайт, который отражает вашу уникальность.</p>
                  </div>
                  <div ref={refmobile3} className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 px-2" style={{
                    transform: isInViewMobile4 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile4 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div className="mx-auto">
                      <img className="mx-auto w-10" src="3.png" alt="" />
                    </div>
                    <p className="text-xl font-kot text-purple-400 text-h mt-2">Качество и профессионализм</p>
                    <p className="text-sm text-gray-400">Наша команда стремится к высокому качеству в каждой детали. Мы следим за последними трендами в дизайне и разработке, чтобы обеспечить вашему сайту современный и профессиональный вид.</p>
                  </div>
                  <div ref={refmobile4} className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 px-2" style={{
                    transform: isInViewMobile5 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile5 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div className="mx-auto">
                      <img className="mx-auto w-12" src="4.png" alt="" />
                    </div>
                    <p className="text-xl font-kot text-purple-400 text-h mt-2">Техническая экспертиза</p>
                    <p className="text-sm text-gray-400">Мы обладаем глубокими знаниями в сфере веб-технологий и гарантируем, что ваш сайт будет оптимизирован для быстрой загрузки, безопасности и хорошей производительности.</p>
                  </div>
                  <div ref={refmobile5} className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 px-2" style={{
                    transform: isInViewMobile6 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile6 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div className="mx-auto">
                      <img className="mx-auto w-12" src="5.png" alt="" />
                    </div>
                    <br />
                    <p className="text-xl font-kot text-purple-400 text-h mt-2">Удовлетворенные клиенты</p>
                    <p className="text-sm text-gray-400">Наши успешные проекты и довольные клиенты - это наша лучшая реклама. Мы стремимся к тому, чтобы каждый клиент остался доволен результатом сотрудничества с нами.</p>
                  </div>
                  <div ref={refmobile6} className="bg-white bg-opacity-10 rounded-lg drop-shadow-lg text-center py-2 px-2" style={{
                    transform: isInViewMobile7 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile7 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div className="mx-auto">
                      <img className="mx-auto w-12" src="6.png" alt="" />
                    </div>
                    <p className="text-xl font-kot text-purple-400 text-h mt-2">Поддержка и обслуживание</p>
                    <p className="text-sm text-gray-400">Мы не останавливаемся на этапе разработки. Мы предоставляем надежную поддержку и обслуживание вашего сайта, чтобы он оставался актуальным и безопасным с течением времени.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex pt-12" ref={refmobile7}>
              <div className="grid grid-cols-1 mx-auto my-auto px-2 items-center">
                <div style={{
                    transform: isInViewMobile8 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile8 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                  <p className="text-4xl font-nan text-h text-center pb-4">Этапы разработки</p>
                  <p className="text-md font-norm text-gray-300 text-center">Разработка сайта может быть сложной задачей, и её можно разделить на несколько этапов, чтобы обеспечить успешное выполнение проекта. Снизу представлены основные этапы разработки сайта</p>
                </div>
                <div>
                  <div className="pt-6" style={{
                    transform: isInViewMobile9 ? "none" : "translateX(-20px)",
                    opacity: isInViewMobile9 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div ref={refmobile8}>
                    <p className="text-3xl">Анализ требований</p>
                    </div>
                    <div className="flex">
                      <div className="pt-2">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[27px] py-[10px]">1</p>
                        </div>
                      </div>
                      <ul className="pl-4">
                        <li>&#8226; Встреча с клиентом для понимания его потребностей и целей.</li>
                        <li>&#8226; Сбор информации о целевой аудитории и конкурентах.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-6" style={{
                    transform: isInViewMobile10 ? "none" : "translateX(20px)",
                    opacity: isInViewMobile10 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div ref={refmobile9}>
                    <p className="text-3xl">Установка задач</p>
                    </div>
                    <div className="flex">
                      <div className="pt-2">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[23px] py-[10px]">2</p>
                        </div>
                      </div>
                      <ul className="pl-4">
                        <li>&#8226; Разработка технического задания.</li>
                        <li>&#8226; Определение структуры сайта и создание карты сайта.</li>
                        <li>&#8226; Определение бюджета и сроков выполнения проекта.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-6" style={{
                    transform: isInViewMobile11 ? "none" : "translateX(-20px)",
                    opacity: isInViewMobile11 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div ref={refmobile10}>
                    <p className="text-3xl">Дизайн и макет</p>
                    </div>
                    <div className="flex">
                      <div className="pt-2">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[23px] py-[10px]">3</p>
                        </div>
                      </div>
                      <ul className="pl-4">
                        <li>&#8226; Создание дизайн-концепции, включая цветовую палитру и стиль.</li>
                        <li>&#8226; Разработка макетов (wireframes) и мокапов.</li>
                        <li>&#8226; Дизайн пользовательского интерфейса (UI) и элементов.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-6" style={{
                    transform: isInViewMobile12 ? "none" : "translateX(20px)",
                    opacity: isInViewMobile12 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div ref={refmobile11}>
                    <p className="text-3xl">Разработка</p>
                    </div>
                    <div className="flex">
                      <div className="pt-2">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[21px] py-[10px]">4</p>
                        </div>
                      </div>
                      <ul className="pl-4">
                        <li>&#8226; Выбор технологий и платформы для создания сайта.</li>
                        <li>&#8226; Создание бэкенда (серверной части) и фронтенда (клиентской части).</li>
                        <li>&#8226; Интеграция функциональности, например, форм обратной связи, онлайн-чата и других модулей.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-6" style={{
                    transform: isInViewMobile13 ? "none" : "translateX(-20px)",
                    opacity: isInViewMobile13 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div ref={refmobile12}>
                    <p className="text-3xl">Тестирование</p>
                    </div>
                    <div className="flex">
                      <div className="pt-2">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[23px] py-[10px]">5</p>
                        </div>
                      </div>
                      <ul className="pl-4">
                        <li>&#8226; Проведение функционального тестирования, проверка работы всех элементов сайта.</li>
                        <li>&#8226; Отладка и исправление ошибок.</li>
                        <li>&#8226; Тестирование совместимости с разными браузерами и устройствами.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-6" style={{
                    transform: isInViewMobile14 ? "none" : "translateX(20px)",
                    opacity: isInViewMobile14 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div ref={refmobile13}>
                    <p className="text-3xl">Запуск</p>
                    </div>
                    <div className="flex">
                      <div className="pt-2">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[23px] py-[10px]">6</p>
                        </div>
                      </div>
                      <ul className="pl-4">
                        <li>&#8226; Размещение сайта на хостинге или сервере.</li>
                        <li>&#8226; Настройка DNS и доменного имени, если необходимо.</li>
                        <li>&#8226; Проверка работоспособности на живом сервере.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-6" style={{
                    transform: isInViewMobile15 ? "none" : "translateX(-20px)",
                    opacity: isInViewMobile15 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <div ref={refmobile14}>
                    <p className="text-3xl">Обучение</p>
                    </div>
                    <div className="flex">
                      <div className="pt-2">
                        <div className="outer_circle">
                          <div className="inner_circle"></div>
                          <p className="inner_text text-5xl font-extrabold px-[25px] py-[10px]">7</p>
                        </div>
                      </div>
                      <ul className="pl-4">
                        <li>&#8226; Обучение клиента управлению сайтом (если используется CMS).</li>
                        <li>&#8226; Подготовка технической документации и инструкций по эксплуатации.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="pricemobile" className="flex pt-12">
              <div className="justify-center mx-auto">
                <div className="text-center text-4xl font-kot text-h mb-5" ref={refmobile15} style={{
                    transform: isInViewMobile16 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile16 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                  Цены
                </div>
                <div className="grid grid-cols-1 mx-auto my-auto px-0 gap-5 items-center">
                  <div className="rounded-xl px-6 mx-auto w-80 py-6 bg-white bg-opacity-10" ref={refmobile16} style={{
                    transform: isInViewMobile17 ? "none" : "translateX(-20px)",
                    opacity: isInViewMobile17 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
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
                  <div className="rounded-xl px-6 mx-auto w-80 py-6 bg-white bg-opacity-10" ref={refmobile17} style={{
                    transform: isInViewMobile18 ? "none" : "translateX(20px)",
                    opacity: isInViewMobile18 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
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
                  <div className="rounded-xl px-6 mx-auto w-80 py-6 bg-white bg-opacity-10" ref={refmobile18} style={{
                    transform: isInViewMobile19 ? "none" : "translateX(-20px)",
                    opacity: isInViewMobile19 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                    <p className="text-2xl text-indigo-200 mb-1 font-bold">Корпоративный сайт</p>
                    <p className="text-sm text-gray-400">Веб-сайт, созданный для представления и продвижения компании в интернете</p>
                    <div className="flex justify-center mt-1">
                      <p className="text-2xl font-extrabold text-indigo-200">от</p>
                      <p className="text-5xl font-extrabold pt-4 pl-2">400,000</p>
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
            </div>

            <div id="worksmobile" className="flex mx-0 px-0">
                <div className="w-full mt-16 justify-center">
                  <div className="mb-5 mx-auto flex grid grid-cols-1" ref={refmobile19}>
                    <p className="text-4xl font-kot text-h">{works[currentIndex]}</p>
                    <div className="flex items-center mt-2">
                      <div className="border border-white text-white rounded-full px-3 text-sm">Laravel</div>
                      <div className="border border-white text-white rounded-full ml-3 px-3 text-sm">React</div>
                      <div className="border border-white text-white rounded-full ml-3 px-3 text-sm">Figma</div>
                    </div>
                  </div>
                  <div className="justify-center items-center">
                  <Splide options={{
                    height   : '300px',
                    pagination: false,
                    perPage: 1,
                    perMove: 1,
                    speed: '1000',
                    width: '100%',
                    focus: 'center',
                    type: 'loop',
                  }} hasTrack={false} className="mx-auto">
                    <SplideTrack>
                      <SplideSlide>
                        <a href="https://infatti.kz"><img className="mx-auto" src="/infatti.png" alt="infatti" /></a>
                      </SplideSlide>
                      <SplideSlide>
                        <a href="https://avrora.kz"><img className="mx-auto" src="/avrora.png" alt="avrora" /></a>
                      </SplideSlide>
                      <SplideSlide>
                        <a href="https://kimex.kz"><img className="mx-auto" src="/kimex.png" alt="kimex" /></a>
                      </SplideSlide>
                    </SplideTrack>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 splide__arrows">
                      <button className="splide__arrow splide__arrow--prev" onClick={prevWord}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button>
                      <button className="splide__arrow splide__arrow--next" onClick={nextWord}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" /></svg></button>
                    </div>
                  </Splide>
                  </div>
                </div>
            </div>

            <div id="contactsmobile" className="flex">
              <div className="mx-auto my-auto items-center pt-12">
                <div style={{
                    transform: isInViewMobile20 ? "none" : "translateY(-50px)",
                    opacity: isInViewMobile20 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                  }}>
                  <p className="text-5xl font-nan text-h text-center">Сделайте первый шаг к вашему онлайн-успеху уже сегодня!</p>
                  <p className="text-md font-norm text-gray-300 mt-4 text-center">Заполните форму снизу, чтобы обсудить ваши требования к проекту, получить персонализированное предложение или назначить консультацию.</p>
                </div>
                <div className="pt-8 pb-16" ref={refmobile20}>
                  <div className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white bg-opacity-10 rounded-lg py-5 px-2 shadow-xl transition-all">
                    <div className='flex items-center'>
                      <div className="text-white w-auto mx-auto text-2xl text-center">
                          Оставить заявку
                      </div>
                    </div>
                    <div className="mt-5">
                      <form action="#" method="POST" onSubmit={sendEmail} class="text-xl text-left mx-5 mt-1 w-auto">
                        <label htmlFor="" className="pl-1">Как к вам обращаться?</label>
                        <input type="text" name="name" value={formData2.name} onChange={handleChange2} class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваше имя" required/>
                        <label htmlFor="" className="pl-1">Как с вами связаться?</label>
                        <PhoneInput  value={formData2.phone} onChange={handleChange2} />
                        <label htmlFor="" className="pl-1">Есть ли у вас промокод?</label>
                        <input type="text" name="promocode" class="block w-full py-2 mt-2 mb-4 text-white bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-purple-500 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none" placeholder="Ваш промокод"/>
                        <button className="py-3 w-full mt-3 bn5" type='submit' onClick={isFormFilled2 ? openModal1 : null}>
                          Оставить заявку
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
    </>
  );
}
