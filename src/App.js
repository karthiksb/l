import logo from "./logo.svg";
import "./App.css";

import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon5 from "./icon5.svg";

import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";
import slider5 from "./slider5.jpg";

import countdown from "./coundown.svg";

import tab from "./tab.png";
import tic from "./tic.svg";
import greentic from "./greentic.svg";

import del1 from "./del1.svg";
import del2 from "./del2.svg";
import del3 from "./del3.svg";
import ach from "./achievements.png";
import close from "./close.png";

import check from "./check.png";

import comment1 from "./comment1.svg";
import comment2 from "./comment2.svg";

import rating from "./rating.png";
import mo1 from "./mo1.svg";

import mo2 from "./mo2.svg";

import Slider from "react-slick";
function App() {
  const images = [{ icon1 }, { icon1 }, { icon1 }, { icon1 }];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <section className="max-w-[1005px] mx-auto mb-[100px] md:mx-5 sm:mx-3">
        <nav className="h-14 flex items-center justify-center">
          <h1 className="text-xs  font-bold 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-base">
            ColonBroom
          </h1>
        </nav>
        <main className="flex h-auto mt-12 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col">
          <div className="w-full pr-[10px] lg:w-1/2 2xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full ">
            <h1 className="font-bold  text-xl -tracking-wide 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-3xl sm:text-xl">
              Soulagez la constipation, perdez du poids et réduisez les
              ballonnements !
            </h1>
            <div className="icon-grid grid grid-cols-3 gap-5 mt-12">
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon1} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon2} alt=""></img>
                <p className="text-sm  sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon3} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon1} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon5} alt=""></img>
                <p className="text-sm sm:text-sm md:text-scale lg:text-xl xl:text-xl 2xl:text-xl  text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
            </div>
            <button className="w-full h-12 text-[12px] sm:text-xs rounded-3xl font-bold text-gray-700 bg-emerald-400 mt-16">
              ACHETER MAINTENANT
            </button>
          </div>

          <div className=" mt-0  flex flex-col items-center  justify-between w-full xl:w-1/2 lg:w-1/2 md:w-1/2 2xl:w-1/2 sm:w-full ">
            <Slider {...settings} className="w-10/12 h-2/3 ">
              <div className="sm:mt-10">
                <img className="w-full" src={slider1} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider2} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider3} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider4} alt=""></img>
              </div>
              <div className="sm:mt-10">
                <img className="w-full" src={slider5} alt=""></img>
              </div>
            </Slider>
            <p className=" text-sm mb-[140px] sm:mb-0">
              {" "}
              Faites glisser vers la gauche pour en savoir plus !0
            </p>
          </div>
        </main>
        <section className="w-full my-10  h-20 bg-gray-200 flex flex-row justify-evenly sm:justify-around  items-center">
          <img src={countdown} className="w-[40px] sm:mx-2"></img>
          <p className="text-sm leading-10 tracking-wide text-gray-900 font-bold  2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm text-center">
            Commandez maintenant et faites-vous livrer gratuitement aux
            États-Unis !
          </p>

          <h1 className="sm:mx-2">0:1:24</h1>
        </section>
        <section className="cards mt-[30px] w-full h-auto  ">
          <h1 className="text-2xl font-bold text-center  lg:text-4xl xl:text-4xl 2xl:text-4xl ">
            Choisissez votre offre
          </h1>
          <div className="flex justify-between items-center mt-[40px] gap-[10px] sm:flex-col">
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-[90%]">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-sm w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 text-white font-bold px-14 h-[70px] rounded-[40px] mt-4 bg-emerald-400 text-[12px]">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-[90%]">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-sm w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 text-white font-bold px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-[90%]">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-sm w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 text-white font-bold px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="delivery  justify-center items-start  gap-36 flex flex-row w-full h-[120px] sm:gap-5">
          <div className="flex flex-col items-center  justify-center gap-2">
            <img className="w-[50px]" src={del1} alt="" />
            <p className="text-sm">Livraison gratuite</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[50px]" src={del2} alt="" />
            <p className="text-sm text-center sm:w-[150px]">
              Produits fabriqués en Allemagne
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[50px] " src={del3} alt="" />
            <p className="text-sm text-center sm:w-[120px]">
              Garantie satisfait ou remboursé sous 14 jours
            </p>
          </div>
        </div>

        <section className="mt-[50px]   flex flex-col">
          <h1 className="text-4xl text-center font-bold tracking-wider sm:text-2xl">
            Si vous ressentez{" "}
            <span className="text-emerald-400">
              {" "}
              une lourdeur dans votre intestin
            </span>
            , <br className="sm:hidden"></br> ou si vous luttez contre des{" "}
            <span className="text-emerald-400"> gaz au quotidien,</span>
            <br></br> Colonbroom est fait pour vous.
          </h1>

          <div className="flex flex-row mt-[60px]">
            <div className="w-full h-auto  flex-row flex items-center gap-10 sm:flex-col">
              <img className="w-1/4 sm:w-2/3" src={ach}></img>

              <div className="w-1/3 h-5/6 flex py-5 flex-col gap-2 sm:w-[90%]">
                <h1 className="mb-[10px] text-xl font-bold text-[21px]">
                  La vie avant ColonBroom
                </h1>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Lourdeur intestinale</p>
                </div>
                <div className="flex  items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Constipation</p>
                </div>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>
                    Microbiote intestinal<br></br> déséquilibré
                  </p>
                </div>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Difficulté à perdre du poids</p>
                </div>
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Manque d'énergie</p>
                </div>{" "}
                <div className="flex items-center gap-5 flex-row h-14 border-b-[1px] border-gray-200">
                  <img src={close} />
                  <p>Risque de ballonnements</p>
                </div>
              </div>
              <div className="w-2/5 sm:w-[90%] h-full flex flex-col gap-4 py-4  bg-emerald-500">
                <h1 className="mb-[10px] text-white mx-5 text-[21px] font-bold">
                  La vie avant ColonBroom
                </h1>
                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">Une légèreté intestinale</p>
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">Des selles régulières</p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">Un intestin protégé</p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">
                    Des objectifs de poids faciles à<br></br> atteindre
                  </p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14 border-b-[1px] mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">
                    Un incroyable stimulant pour<br></br> l'humeur et l'énergie
                  </p>{" "}
                </div>

                <div className="flex items-center gap-3 flex-row  h-14  mx-5 border-gray-200">
                  <img src={check} />
                  <p className="text-white">
                    Une amélioration du système <br></br> digestif
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full h-auto bg-gray-200 py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" text-center text-3xl mt- font-medium my-4 sm:font-bold">
            Ces ingrédients vous aideront à vous sentir
            <br className="hidden"></br> plus légers 12 à 72 h après la première
            prise<br className="hidden"></br> de ColonBroom.
          </h1>
          <div className="w-full flex justify-center my-[50px] ">
            <div className=" flex flex-col w-fit items-center sm:w-2/3 ">
              <p className="text-center text-emerald-400 mb-[1px] tracking-wider sm:text-sm">
                CLIQUEZ ICI POUR VOIR LA LISTE COMPLÈTE DES INGRÉDIENTS
              </p>
              <div className="border-[1px] w-full border-emerald-400 "></div>
            </div>
          </div>

          <div className="w-full flex my-[100px] justify-between gap-24 sm:flex-col ">
            <div className="flex flex-col w-1/2  sm:w-full">
              <div className="flex flex-row w-full sm:justify-center ">
                <img className="w-[70px]" src={mo1} />
              </div>

              <h1 className="text-xl font-bold my-5 sm:text-center">
                La cosse de psyllium, fibre essentielle
              </h1>
              <p className="sm:text-center">
                La fibre essentielle contenue dans ColonBroom fait partie d'un
                type de fibre couramment utilisé comme laxatif doux. La cosse de
                psyllium est capable de transiter dans votre système digestif
                sans être entièrement décomposée ou assimilée. Au lieu de cela,
                ces fibres absorbent l'eau présente dans l'estomac pour se
                transformer en une substance visqueuse aux effets bénéfiques
                pour lutter contre la constipation, la diarrhée, la glycémie, la
                pression artérielle et la perte de poids.
              </p>
            </div>
            <div className="flex flex-col w-1/2  sm:w-full">
              <div className="flex flex-row w-full sm:justify-center ">
                <img className="w-[60px]" src={mo2} />
              </div>
              <h1 className="text-xl font-bold my-5 sm:text-center">
                Arôme naturel de fraise
              </h1>
              <p className="sm:text-center">
                Les arômes naturels enrichissent le bon goût de fraise et
                apportent un doux parfum sucré. Chaque verre aura un véritable
                goût de paradis !
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center my-[50px] ">
            <div className=" flex flex-col w-fit items-center ">
              <p className="text-center tracking-wider text-emerald-400 sm:text-sm">
                WARNING: CALIFORNIA'S PROPOSITION 65
              </p>
              <div className="border-[1px] w-full border-emerald-400"></div>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[70px] text-center text-5xl mt- font-bold my-4 sm:text-3xl">
            Comment ça marche ?
          </h1>
          <div className="w-full flex justify-between gap-11 sm:flex-col ">
            <div className="flex flex-col w-1/2  items-center sm:w-full">
              <img src={comment1} className="max-w-[250px]" alt="" />
              <h1 className="text-2xl font-semibold my-5">
                1. Prenez une cuillère de ColonBroom
              </h1>
              <p className="text-center">
                Versez une cuillère à café de poudre dans un verre d'eau,
                mélangez bien et buvez !
              </p>
            </div>
            <div className="flex flex-col w-1/2  items-center sm:w-full">
              <img src={comment2} className="max-w-[190px]" alt="" />
              <h1 className="text-2xl font-semibold my-5">
                2. Bénéficiez d'un intestin sain
              </h1>
              <p className="text-center">
                Passez de manière efficace à un intestin plus sain et un
                métabolisme revigoré.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 bg-slate-100">
        <section className="max-w-[1300px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[30px] text-center text-5xl mt- font-semibold my-4 sm:text-3xl">
            Des milliers de clients satisfaits
          </h1>
          <h1 className=" mb-[70px] text-center text-2xl mt- font-medium my-4 sm:text-3xl">
            Oh oui, ils font bien caca maintenant, plus besoin de les forcer !
            Ils se plaignent toujours autant mais certainement plus à cause de
            douleurs intestinales.
          </h1>
          <div className="flex flex-row gap-1 sm:flex-col">
            <div className="w-1/3  px-5 py-5 flex flex-col gap-3 sm:w-full">
              <div className="w-full px-5 py-5 bg-emerald-50 flex flex-col gap-3">
                <img className="w-[100px] h-[17px]" src={rating} />

                <h1 className="text-[20px] font-bold">
                  Ces produits sont géniaux !!!!!
                </h1>
                <p>
                  Ces produits sont géniaux !!!!! Doux avec votre estomac et
                  c'est ce que j'aime ! Pas de ballonnements et plus d'énergie !
                </p>

                <div className="flex flex-row justify-between">
                  <h1>Yazmin Torregrossa</h1>
                  <div className="flex gap-1 items-center">
                    <img src={greentic} className="w-[15px]" />
                    <p className="text-emerald-400">Client vérifié</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-5 py-5 bg-emerald-50 flex flex-col gap-3">
                <img className="w-[100px] h-[17px]" src={rating} />

                <h1 className="text-[20px] font-bold">
                  Ces produits sont géniaux !!!!!
                </h1>
                <p>
                  Je prenais d'autres compléments pour aider ma digestion mais
                  je détestais vraiment la composition. Quand j'ai découvert
                  votre marque, j'étais très curieuse mais aussi sceptique,
                  comme quiconque peu l'être avant d'essayer quelque chose de
                  nouveau. Pourtant, mon quotidien est maintenant tellement plus
                  serein ! Avant, il m'étais impossible de quitter la maison
                  sans avoir envie d'aller aux toilettes. Je devais me réveiller
                  2 h avant de partir pour m'assurer de pouvoir me vider autant
                  que possible. Aujourd'hui, je vais à la selle sans effort dès
                  le réveil, et puis plus rien ! Je ne ressens plus le besoin de
                  toujours aller aux toilettes ! Cela fait 4 mois que j'utilise
                  colon broom et je ne me suis jamais sentie aussi bien. Je ne
                  suis plus esclave de mon intestin et je sors désormais plus
                  souvent. Ça fait tellement de bien, je vous remercie d'avoir
                  créé des produits complets et de qualité que je peux prendre
                  sans crainte pour ma santé !!!
                </p>

                <div className="flex flex-row justify-between">
                  <h1>Yazmin Torregrossa</h1>
                  <div className="flex gap-1 items-center">
                    <img src={greentic} className="w-[15px]" />
                    <p className="text-emerald-400">Client vérifié</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3  px-5 py-5 flex flex-col gap-3 sm:w-full">
              <div className="w-full px-5 py-5 bg-emerald-50 flex flex-col gap-3 sm: ">
                <img className="w-[100px] h-[17px]" src={rating} />

                <h1 className="text-[20px] font-bold">
                  Ces produits sont géniaux !!!!!
                </h1>
                <p>
                  Jusqu'à présent, tout va bien. J'en suis à environ 2 semaines
                  1/2 et j'ai récemment commencé à prendre la dose recommandée
                  de deux prises par jour. Je ne me pèse jamais vraiment, donc
                  je ne peux pas comparer à ce niveau-là, mais depuis 2-3 jours,
                  je me sens beaucoup plus léger. Une nette diminution des
                  ballonnements, mes chemises me serrent moins, mon ventre est
                  beaucoup moins gonflé. J'ai hâte de voir comment je vais me
                  sentir après ma cure de 2 mois. Je vous tiendrai au courant.
                  Aussi, je suis allergique aux baies mais je n'ai eu aucune
                  réaction à ce produit.
                </p>

                <div className="flex flex-row justify-between">
                  <h1>Yazmin Torregrossa</h1>
                  <div className="flex gap-1 items-center">
                    <img src={greentic} className="w-[15px]" />
                    <p className="text-emerald-400">Client vérifié</p>
                  </div>
                </div>
              </div>

              <div className="w-full px-5 py-5 bg-emerald-50 flex flex-col gap-3">
                <img className="w-[100px] h-[17px]" src={rating} />

                <h1 className="text-[20px] font-bold">
                  Ces produits sont géniaux !!!!!
                </h1>
                <p>
                  Excellent produit. Se mélange facilement. Mettez 1 dose dans
                  une bouteille d'eau de 50 cl. Le goût est délicieux !
                </p>

                <div className="flex flex-row justify-between">
                  <h1>Yazmin Torregrossa</h1>
                  <div className="flex gap-1 items-center">
                    <img src={greentic} className="w-[15px]" />
                    <p className="text-emerald-400">Client vérifié</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3  px-5 py-5 flex flex-col gap-3  sm:w-full">
              <div className="w-full px-5 py-5 bg-emerald-50 flex flex-col gap-3">
                <img className="w-[100px] h-[17px]" src={rating} />

                <h1 className="text-[20px] font-bold">
                  Ces produits sont géniaux !!!!!
                </h1>
                <p>
                  Ce truc est incroyable ! J'ai des problèmes intestinaux depuis
                  un petit moment. J'ai commencé Colon Broom depuis environ 2
                  semaines, et je me sens déjà mieux. Depuis que je prends Colon
                  Broom, je vais aux toilettes plus souvent, je suis moins
                  ballonnée, et je grignote beaucoup moins de sucreries. De
                  plus, le goût est vraiment bon.
                </p>

                <div className="flex flex-row justify-between">
                  <h1>Yazmin Torregrossa</h1>
                  <div className="flex gap-1 items-center">
                    <img src={greentic} className="w-[15px]" />
                    <p className="text-emerald-400">Client vérifié</p>
                  </div>
                </div>
              </div>

              <div className="w-full px-5 py-5 bg-emerald-50 flex flex-col gap-3">
                <img className="w-[100px] h-[17px]" src={rating} />

                <h1 className="text-[20px] font-bold">
                  Ces produits sont géniaux !!!!!
                </h1>
                <p>
                  J'ai 32 ans et je ne suis pas un grand fan de tout ce qui est
                  traitement médical ou autre. Depuis quelques mois, je souffre
                  régulièrement de ballonnements et de douleurs intestinales.
                  J'ai reçu ma commande il y a 3 jours et j'ai commencé à
                  utiliser ColonBroom. Dès le deuxième jour, mon estomac se
                  sentait déjà carrément mieux et le troisième jour au matin,
                  mes ballonnements avaient disparu. Je commence mon quatrième
                  jour, et laissez-moi vous dire....... Je ne me suis jamais
                  réveillé avec autant d'énergie et d'envie de me lever et je
                  n'ai AUCUNE douleur dans l'estomac. Je veux juste vous dire
                  merci !!!!!
                </p>

                <div className="flex flex-row justify-between">
                  <h1>Yazmin Torregrossa</h1>
                  <div className="flex gap-1 items-center">
                    <img src={greentic} className="w-[15px]" />
                    <p className="text-emerald-400">Client vérifié</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[30px] text-center text-5xl mt- font-semibold my-4 sm:text-3xl">
            Trop beau pour être vrai ?
          </h1>
          <h1 className=" mb-[70px] text-center text-2xl mt- font-medium my-4 sm:text-[17px]">
            Les chiffres parlent d'eux-mêmes : presque tous les clients ont
            <br></br>
            constaté une amélioration de leur santé intestinale !
          </h1>

          <div className="flex flex-row justify-between gap-20 sm:gap-4">
            <div className="flex flex-col gap-2">
              <h1 className=" mb-[30px] text-center text-6xl text-center mt- font-bold my-4 sm:text-5xl">
                95%
              </h1>
              <p className="text-center">
                des consommateurs ont noté des selles plus fréquentes et plus
                régulières
              </p>
            </div>

            <div className="flex flex-col  gap-2">
              <h1 className=" mb-[30px] text-center text-6xl text-center mt- font-bold my-4 sm:text-5xl">
                80%
              </h1>
              <p className="text-center">
                des consommateurs ont constaté une perte de poids, sans
                sensation de faim
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className=" mb-[30px] text-center text-6xl text-center mt- font-bold my-4 sm:text-5xl">
                90%
              </h1>
              <p className="text-center">
                des consommateurs se sont sentis plus légers 12 h après la
                première prise de ColonBroom
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 bg-slate-100">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <h1 className=" mb-[30px] text-center text-5xl mt- font-medium my-4 sm:text-3xl">
            Questions fréquemment posées par nos clients
          </h1>

          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </section>
      </section>

      <section className="w-full h-auto  py-2 ">
        <section className="max-w-[1005px] mx-auto mb-[100px] mt-12 md:mx-5 sm:mx-3 ">
          <section className="cards mt-[20px] w-full h-auto  ">
            <h1 className="text-2xl text-center  lg:text-4xl xl:text-4xl 2xl:text-4xl ">
              Choisissez votre offre
            </h1>
            <div className="flex justify-between items-center mt-[40px] gap-[10px] sm:flex-col">
              <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-[90%]">
                <div className="flex flex-col">
                  <p className="text-center  text-xl">1 boîte /</p>
                  <p className="text-center  text-sm w-full ">
                    1 mois d'approvisionnement
                  </p>
                </div>
                <img src={tab} alt="" />

                <div className="price flex flex-row gap-2 justify-center">
                  <h1 className="text-5xl">54.99</h1>
                  <div className="flex flex-col ">
                    <p className="text-xl font-bold">USD</p>
                    <p>par boîte</p>
                  </div>
                </div>

                <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                  <div className="w-full justify-center flex flex-row gap-2 ">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>60 prises</p>
                  </div>
                  <div className="flex  justify-center flex-row gap-2">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>1 boîte par mois</p>
                  </div>

                  <div className="w-full flex justify-center mb-6">
                    <button className="w-3/4 text-white font-bold px-14 h-[70px] rounded-[40px] mt-4 bg-emerald-400 text-[12px]">
                      {" "}
                      ABONNEZ-VOUS MAINTENANT
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-[90%]">
                <div className="flex flex-col">
                  <p className="text-center  text-xl">1 boîte /</p>
                  <p className="text-center  text-sm w-full ">
                    1 mois d'approvisionnement
                  </p>
                </div>
                <img src={tab} alt="" />

                <div className="price flex flex-row gap-2 justify-center">
                  <h1 className="text-5xl">54.99</h1>
                  <div className="flex flex-col ">
                    <p className="text-xl font-bold">USD</p>
                    <p>par boîte</p>
                  </div>
                </div>

                <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                  <div className="w-full justify-center flex flex-row gap-2 ">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>60 prises</p>
                  </div>
                  <div className="flex  justify-center flex-row gap-2">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>1 boîte par mois</p>
                  </div>

                  <div className="w-full flex justify-center mb-6">
                    <button className="w-3/4 text-white font-bold px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                      {" "}
                      ABONNEZ-VOUS MAINTENANT
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-[90%]">
                <div className="flex flex-col">
                  <p className="text-center  text-xl">1 boîte /</p>
                  <p className="text-center  text-sm w-full ">
                    1 mois d'approvisionnement
                  </p>
                </div>
                <img src={tab} alt="" />

                <div className="price flex flex-row gap-2 justify-center">
                  <h1 className="text-5xl">54.99</h1>
                  <div className="flex flex-col ">
                    <p className="text-xl font-bold">USD</p>
                    <p>par boîte</p>
                  </div>
                </div>

                <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                  <div className="w-full justify-center flex flex-row gap-2 ">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>60 prises</p>
                  </div>
                  <div className="flex  justify-center flex-row gap-2">
                    <img className="pl-2 " src={tic} alt="" />
                    <p>1 boîte par mois</p>
                  </div>

                  <div className="w-full flex justify-center mb-6">
                    <button className="w-3/4 text-white font-bold px-14 h-[70px] rounded-[40px] text-[12px] mt-4 bg-emerald-400">
                      {" "}
                      ABONNEZ-VOUS MAINTENANT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="delivery mt-10 justify-center items-start  gap-36 flex flex-row w-full h-[120px] sm:gap-5">
            <div className="flex flex-col items-center  justify-center gap-2">
              <img className="w-[50px]" src={del1} alt="" />
              <p className="text-sm">Livraison gratuite</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-[50px]" src={del2} alt="" />
              <p className="text-sm text-center sm:w-[150px]">
                Produits fabriqués en Allemagne
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-[50px] " src={del3} alt="" />
              <p className="text-sm text-center sm:w-[120px]">
                Garantie satisfait ou remboursé sous 14 jours
              </p>
            </div>
          </div>

          <nav className="h-14 flex items-center justify-center">
            <h1 className="text-xs  font-bold 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-base">
              ColonBroom
            </h1>
          </nav>

          <p className="text-basic mb-5  text-center">
            2022 Tous droits réservés, Max Nutrition UAB, Vilnius, Lituanie 2021
          </p>
          <p className="text-basic text-gray-600 text-center">
            Avertissement : les résultats peuvent varier d'une personne à
            l'autre. Notre service n'est pas destiné à diagnostiquer, traiter,
            guérir ni empêcher une quelconque maladie et ne constitue pas un
            avis médical.
          </p>
        </section>
      </section>
    </div>
  );
}

export default App;
