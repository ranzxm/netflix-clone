import "./Main.css";
import NetflixHero from "../images/hero-netflix.jpg";
import tv from "../images/tv.png";
import tv2 from "../images/tv2.png";
import m2 from "../images/m2.jpg";
import m21 from "../images/m2-1.png";
import pic2 from "../images/pic2.png";
import ani1 from "../images/ani1g.gif";
import vid1 from "../videos/vid1.m4v";
import vid2 from "../videos/vid2.m4v";
import plus from "../images/plus.svg";
import close from "../images/close.svg";

function Main() {
   const bubbleClick = (questNum, ansNum) => {
      const iconBubble = document.querySelector(`#${questNum}`);
      const answer = document.querySelector(`#${ansNum}`);

      //var reset
      const resIconBubble = document.querySelectorAll(".card-bubble .question img");
      const resAnswer = document.querySelectorAll(".card-bubble .answer");

      if (iconBubble.classList.contains("active")) {
         iconBubble.classList.remove("active");
         iconBubble.setAttribute("src", `${plus}`);
         answer.classList.add("h-0");
         answer.classList.remove("p-6");
      } else {
         Array.from(resIconBubble).map((el) => {
            el.classList.remove("active");
            el.setAttribute("src", `${plus}`);
         });
         Array.from(resAnswer).map((el) => {
            el.classList.add("h-0");
            el.classList.remove("p-6");
         });
         iconBubble.classList.add("active");
         iconBubble.setAttribute("src", `${close}`);
         answer.classList.add("p-6");
         answer.classList.remove("h-0");
      }
   };
   return (
      <>
         <div className="hero text-white">
            <div className="card min-h-screen w-full bg-hero relative">
               <div className="-z-10 background absolute overflow-hidden h-full w-full border-b-[11px] border-[#232323]">
                  <div className="bg-gradient-radial w-full h-full bg-opacity-40 absolute"></div>
                  <img src={NetflixHero} alt="" className="object-cover w-full h-full " />
               </div>
               <div className="cons container mx-auto min-h-screen flex justify-center pt-[150px] pb-[64px] ">
                  <div className="content w-full my-[91px] text-center">
                     <h1 className="tagline text-4xl md:text-5xl font-bold leading-normal">
                        Film, acara TV tak terbatas, dan lebih banyak lagi.
                     </h1>
                     <p className="text-lg md:text-2xl mt-4">Tonton di mana pun. Batalkan kapan pun.</p>
                     <div className="form mt-6 ">
                        <p className="text-lg md:text-xl">
                           Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.
                        </p>
                        <div className="box relative lg:mx-[167px] mt-[16px] flex ">
                           <p className="absolute text-gray-400 left-4 duration-300 text-xl top-3" id="titlesubs">
                              Alamat email
                           </p>
                           <div className="flex w-full gap-2 items-center flex-col sm:flex-row">
                              <div className="input w-full">
                                 <input
                                    type="text"
                                    onFocus={() => {
                                       const titleSubs = document.querySelector("#titlesubs");
                                       titleSubs.classList.add("text-xs");
                                    }}
                                    className="text-white border-[1px] rounded border-[#969696] bg-black bg-opacity-70 w-full h-14 px-[16px] pt-[24px] pb-[8px] rounded-bl rounded-tl "
                                 />
                              </div>
                              <button className="box-border text-2xl w-32 py-3 px-6 rounded bg-[#E50914] flex justify-center items-center rounded-br rounded-tr">
                                 Mulai{" "}
                                 <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="Hawkins-Icon Hawkins-Icon-Standard"
                                 >
                                    <path
                                       fill-rule="evenodd"
                                       clip-rule="evenodd"
                                       d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                                       fill="currentColor"
                                    ></path>
                                 </svg>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <section className="dua py-[72px] border-b-[11px] bg-black border-[#232323]">
            <div className="container mx-auto">
               <div className="card mx-auto bg-black text-white flex items-center flex-col lg:flex-row">
                  <div className="ch-card-kiri lg:text-left basis-2/4 text-center">
                     <div className="title text-4xl md:text-5xl font-bold mb-5">
                        <h1>Nikmati di TV-mu.</h1>
                     </div>
                     <div className="sub-title text-2xl">
                        <p>Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.</p>
                     </div>
                  </div>
                  <div className="ch-card-kanan z-10 basis-2/4">
                     <div className="frame relative">
                        <img src={tv} alt="tv" className="w-full" />
                        <div className="loop-video absolute -z-10 top-[48%] left-[13%] -translate-y-2/4 overflow-hidden w-full h-full max-w-[73%] max-h-[54%]">
                           <video autoPlay playsInline muted loop>
                              <source src={vid1} type="video/mp4" />
                           </video>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="tiga py-[72px] border-b-[11px] bg-black border-[#232323]">
            <div className="container mx-auto">
               <div className="card mx-auto bg-black text-white flex items-center flex-col lg:flex-row">
                  <div className="ch-card-kiri z-10 text-left basis-2/4">
                     <div className="frame relative">
                        <img src={tv2} alt="tv" className="w-full" />
                        <div className="loop-video absolute -z-10 top-[36%] left-[18%] -translate-y-2/4 overflow-hidden w-full h-full max-w-[63%] max-h-[54%]">
                           <video autoPlay playsInline muted loop>
                              <source src={vid2} type="video/mp4" />
                           </video>
                        </div>
                     </div>
                  </div>
                  <div className="ch-card-kanan basis-2/4 lg:text-left text-center">
                     <div className="title text-4xl md:text-5xl font-bold mb-5 ">
                        <h1>Tonton di mana Saja</h1>
                     </div>
                     <div className="sub-title text-2xl">
                        <p>Tonton berbagai macam film dan siaran TV di handphone, tablet, laptop dan TV tanpa biaya tambahan.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="empat w-full py-[72px] border-b-[11px] bg-black border-[#232323]">
            <div className="container mx-auto">
               <div className="card mx-auto bg-black text-white flex items-center flex-col lg:flex-row">
                  <div className="ch-card-kiri basis-2/4 order-2 lg:text-left text-center">
                     <div className="title text-4xl md:text-5xl font-bold mb-5 ">
                        <h1>Tentukan Profil untuk Anak-anak.</h1>
                     </div>
                     <div className="sub-title text-2xl">
                        <p>
                           Ajak anak-anak berpetualang dengan karakter favorit mereka di ruang yang dibuat khusus untuk mereka
                           gratis dengan langganan Anda.
                        </p>
                     </div>
                  </div>
                  <div className="ch-card-kanan basis-2/4">
                     <div className="frame justify-center flex flex-col items-center">
                        <img src={pic2} alt="Create profiles for children" className="w-full" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="lima w-full py-[72px] border-b-[11px] bg-black border-[#232323]">
            <div className="container mx-auto">
               <div className="card mx-auto bg-black text-white flex items-center flex-col lg:flex-row">
                  <div className="ch-card-kiri lg:text-left text-center basis-2/4 order-2">
                     <div className="title text-4xl md:text-5xl font-bold mb-5">
                        <h1>Download acara TV untuk menontonnya secara offline.</h1>
                     </div>
                     <div className="sub-title text-2xl">
                        <p>Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.</p>
                     </div>
                  </div>
                  <div className="ch-card-kanan z-10 basis-2/4">
                     <div className="frame justify-center flex flex-col items-center">
                        <img src={m2} alt="tv" className="w-full -z-20" />
                        <div className="animation z-10 flex items-center border-2 rounded-xl shadow-md w-[16.25rem] -translate-y-28 border-white px-3 py-2 bg-black border-opacity-20">
                           <div className="cover pr-4">
                              <img src={m21} alt="" className="h-[4.5rem]" />
                           </div>
                           <div className="tengah">
                              <div className="title">
                                 <h1 className="text-base font-bold">Stranger Things</h1>
                                 <p className="text-sm text-[#0071eb]">Men-download...</p>
                              </div>
                           </div>
                           <div className="ani">
                              <img src={ani1} alt="" className="w-[3rem]" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="enam w-full py-[72px] border-b-[11px] bg-black border-[#232323]">
            <div className="container mx-auto">
               <div className="card bg-black text-white mx-7 md:mx-[155px]">
                  <div className="card-title">
                     <div className="title text-4xl md:text-5xl font-bold mb-5 text-center">
                        <h1>Pertanyaan yang Sering Ditanyakan</h1>
                     </div>
                  </div>
                  <div className="card-content flex flex-col gap-2">
                     <div className="card-bubble w-full">
                        <div
                           onClick={() => bubbleClick("question1", "answer1")}
                           className="question p-6 flex justify-between bg-[#2D2D2D] cursor-pointer duration-200 hover:bg-[#3d3d3d]"
                        >
                           <h1 className="text-2xl">Apa itu Netflix?</h1>
                           <img src={plus} alt="" className="w-6" id="question1" />
                        </div>
                        <div
                           className="answer bg-[#2D2D2D] text-2xl flex flex-col duration-300 gap-7 mt-[2px] overflow-hidden h-0"
                           id="answer1"
                        >
                           <p>
                              Netflix adalah layanan streaming yang menawarkan beragam program TV pemenang penghargaan, film,
                              anime, dokumenter, dan lainnya di ribuan perangkat yang terhubung ke internet.
                           </p>
                           <p>
                              Anda dapat menonton sebanyak yang Anda mau, kapan pun Anda mau – semuanya dengan satu harga bulanan
                              yang murah. Selalu ada sesuatu yang baru untuk ditemukan, dan program TV serta film baru ditambahkan
                              setiap minggu!
                           </p>
                        </div>
                     </div>
                     <div className="card-bubble w-full">
                        <div
                           onClick={() => bubbleClick("question2", "answer2")}
                           className="question p-6 flex justify-between bg-[#2D2D2D] cursor-pointer duration-200 hover:bg-[#3d3d3d]"
                        >
                           <h1 className="text-2xl">Berapa biaya berlangganan Netflix?</h1>
                           <img src={plus} alt="" className="w-6" id="question2" />
                        </div>
                        <div
                           className="answer bg-[#2D2D2D] text-2xl flex flex-col gap-7 duration-300 mt-[2px] overflow-hidden h-0"
                           id="answer2"
                        >
                           <p>
                              Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan
                              satu harga bulanan tetap Rentang harga mulai dari Rp. 54.000 hingga Rp. 186.000 per bulan. tanpa
                              biaya ekstra, tanpa kontrak.
                           </p>
                        </div>
                     </div>
                     <div className="card-bubble w-full">
                        <div
                           onClick={() => bubbleClick("question3", "answer3")}
                           className="question p-6 flex justify-between bg-[#2D2D2D] cursor-pointer duration-200 hover:bg-[#3d3d3d]"
                        >
                           <h1 className="text-2xl">Di mana saya bisa menonton?</h1>
                           <img src={plus} alt="" className="w-6" id="question3" />
                        </div>
                        <div
                           className="answer bg-[#2D2D2D] text-2xl flex flex-col gap-7 duration-300 mt-[2px] overflow-hidden h-0"
                           id="answer3"
                        >
                           <p>
                              Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari
                              komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix,
                              termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.
                           </p>
                           <p>
                              Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan
                              download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke
                              mana saja.
                           </p>
                        </div>
                     </div>
                     <div className="card-bubble w-full">
                        <div
                           onClick={() => bubbleClick("question4", "answer4")}
                           className="question p-6 flex justify-between bg-[#2D2D2D] cursor-pointer duration-200 hover:bg-[#3d3d3d]"
                        >
                           <h1 className="text-2xl">Bagaimana cara membatalkannya?</h1>
                           <img src={plus} alt="" className="w-6" id="question4" />
                        </div>
                        <div
                           className="answer bg-[#2D2D2D] text-2xl flex flex-col gap-7 duration-300 mt-[2px] overflow-hidden h-0"
                           id="answer4"
                        >
                           <p>
                              Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan
                              akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan
                              pun.
                           </p>
                        </div>
                     </div>
                     <div className="card-bubble w-full">
                        <div
                           onClick={() => bubbleClick("question5", "answer5")}
                           className="question p-6 flex justify-between bg-[#2D2D2D] cursor-pointer duration-200 hover:bg-[#3d3d3d]"
                        >
                           <h1 className="text-2xl">Apa yang bisa ditonton di Netflix?</h1>
                           <img src={plus} alt="" className="w-6" id="question5" />
                        </div>
                        <div
                           className="answer bg-[#2D2D2D] text-2xl flex flex-col gap-7 duration-300 mt-[2px] overflow-hidden h-0"
                           id="answer5"
                        >
                           <p>
                              Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix
                              original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.
                           </p>
                        </div>
                     </div>
                     <div className="card-bubble w-full">
                        <div
                           onClick={() => bubbleClick("question6", "answer6")}
                           className="question p-6 flex justify-between bg-[#2D2D2D] cursor-pointer duration-200 hover:bg-[#3d3d3d]"
                        >
                           <h1 className="text-2xl">Apakah Netflix sesuai untuk anak-anak?</h1>
                           <img src={plus} alt="" className="w-6" id="question6" />
                        </div>
                        <div
                           className="answer bg-[#2D2D2D] text-2xl flex flex-col gap-7 duration-300 mt-[2px] overflow-hidden h-0"
                           id="answer6"
                        >
                           <p>
                              Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat
                              anak-anak menikmati acara TV dan film untuk keluarga di rumah.
                           </p>
                           <p>
                              Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating
                              usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton
                              anak-anak.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="subscribe mt-12">
                     <h1 className="text-center text-xl">
                        Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.
                     </h1>
                     <div className="box relative lg:mx-[167px] mt-[16px] flex ">
                        <p className="absolute text-gray-400 left-4 duration-300 text-xl top-3" id="titlesubs2">
                           Alamat email
                        </p>
                        <div className="flex w-full gap-2 flex-col sm:flex-row items-center">
                           <div className="input w-full">
                              <input
                                 type="text"
                                 onFocus={() => {
                                    const titleSubs = document.querySelector("#titlesubs2");
                                    titleSubs.classList.add("text-xs");
                                 }}
                                 className="text-white border-[1px] rounded border-[#969696] bg-black bg-opacity-70 w-full h-14 px-[16px] pt-[24px] pb-[8px] rounded-bl rounded-tl "
                              />
                           </div>
                           <button className="box-border text-2xl w-32 py-3 px-6 rounded bg-[#E50914] flex justify-center items-center rounded-br rounded-tr">
                              Mulai{" "}
                              <svg
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="Hawkins-Icon Hawkins-Icon-Standard"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                                    fill="currentColor"
                                 ></path>
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <footer className="tujuh py-[72px] w-full">
            <div className="container mx-auto">
               <div className="footer-wrap mx-auto text-[#dfdfdf]">
                  <div className="help-telp mb-7">
                     <h1>
                        Ada pertanyaan? Hubungi{" "}
                        <span className="underline">
                           <a href="telp:007-803-321-2148">007-803-321-2148</a>
                        </span>
                     </h1>
                  </div>
                  <div className="help-list mb-7">
                     <ul className="underline grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <li>
                           <a href="#">Tanya Jawab</a>
                        </li>
                        <li>
                           <a href="#">Pusat Bantuan</a>
                        </li>
                        <li>
                           <a href="#">Akun</a>
                        </li>
                        <li>
                           <a href="#">Pusat Media</a>
                        </li>
                        <li>
                           <a href="#">Hubungan Investor</a>
                        </li>
                        <li>
                           <a href="#">Lowongan Kerja</a>
                        </li>
                        <li>
                           <a href="#">Tukar Kartu Hadiah</a>
                        </li>
                        <li>
                           <a href="#">Beli Kartu Hadiah</a>
                        </li>
                        <li>
                           <a href="#">Cara Menonton</a>
                        </li>
                        <li>
                           <a href="#">Ketentuan Penggunaan</a>
                        </li>
                        <li>
                           <a href="#">Privasi</a>
                        </li>
                        <li>
                           <a href="#">Preferensi Cookie</a>
                        </li>
                        <li>
                           <a href="#">Informasi Perusahaan</a>
                        </li>
                        <li>
                           <a href="#">Hubungi Kami</a>
                        </li>
                        <li>
                           <a href="#">Uji Kecepatan</a>
                        </li>
                        <li>
                           <a href="#">Informasi Legal</a>
                        </li>
                        <li>
                           <a href="#">Hanya di Netflix</a>
                        </li>
                     </ul>
                  </div>
                  <div className="lang-option flex items-center p rounded relative mb-7">
                     <div className="world-ico absolute left-2 ">
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           class="Hawkins-Icon Hawkins-Icon-Small"
                        >
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8,14.5c0.23033,0 0.84266,-0.2257 1.48679,-1.514c0.27614,-0.5523 0.51294,-1.2239 0.68801,-1.986h-4.3496c0.17507,0.7621 0.41187,1.4337 0.68801,1.986c0.64413,1.2883 1.25646,1.514 1.48679,1.514zM10.4224,9.5c0.0504,-0.47923 0.0776,-0.98089 0.0776,-1.5c0,-0.51911 -0.0272,-1.02077 -0.0776,-1.5h-4.84478c-0.05046,0.47923 -0.07762,0.98089 -0.07762,1.5c0,0.51911 0.02716,1.02077 0.07762,1.5zM11.7092,11c-0.227,1.1217 -0.5775,2.117 -1.0178,2.9184c1.3223,-0.6023 2.4073,-1.6347 3.0764,-2.9184zM14.5,8c0,-0.51627 -0.0602,-1.01848 -0.1739,-1.5h-2.3963c0.0461,0.48588 0.0702,0.98731 0.0702,1.5c0,0.51269 -0.0241,1.01412 -0.0702,1.5h2.3963c0.1137,-0.48152 0.1739,-0.98373 0.1739,-1.5zM4,8c0,-0.51269 0.02411,-1.01412 0.0702,-1.5h-2.39627c-0.11374,0.48152 -0.17393,0.98373 -0.17393,1.5c0,0.51627 0.06019,1.01848 0.17393,1.5h2.39627c-0.04609,-0.48588 -0.0702,-0.98731 -0.0702,-1.5zM5.30864,13.9184c-0.44032,-0.8014 -0.79085,-1.7967 -1.01788,-2.9184h-2.05855c0.66907,1.2837 1.75414,2.3161 3.07643,2.9184zM5.8252,5h4.3496c-0.17507,-0.76207 -0.41187,-1.43374 -0.68801,-1.98603c-0.64413,-1.28826 -1.25646,-1.51397 -1.48679,-1.51397c-0.23033,0 -0.84266,0.22571 -1.48679,1.51397c-0.27614,0.55229 -0.51294,1.22396 -0.68801,1.98603zM11.7092,5h2.0586c-0.6691,-1.28373 -1.7541,-2.31611 -3.0764,-2.91838c0.4403,0.8014 0.7908,1.79668 1.0178,2.91838zM2.23221,5h2.05855c0.22703,-1.1217 0.57756,-2.11698 1.01788,-2.91838c-1.32229,0.60227 -2.40736,1.63466 -3.07643,2.91838zM8,0c4.4183,0 8,3.58172 8,8c0,4.4183 -3.5817,8 -8,8c-4.41828,0 -8,-3.5817 -8,-8c0,-4.41828 3.58172,-8 8,-8z"
                              fill="white"
                           ></path>
                        </svg>
                     </div>

                     <select
                        name="language"
                        id="language"
                        className="bg-[#0f1212] border-[1px] text-white pl-7 pr-3 py-[6px] rounded"
                     >
                        <option value="id-ID">Bahasa Indonesia</option>
                        <option value="en-EN">English</option>
                     </select>
                  </div>
                  <div className="help-telp mb-7">
                     <h1>Netflix Indonesia</h1>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Main;
