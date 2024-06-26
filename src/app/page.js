import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/footer/Footer";

import profit from '../assets/income_9236087.png';
import market from '../assets/market_12001636.png';
import shield from '../assets/shield_5138377.png';
import business from '../assets/business-strategy_7898249.png';
import I1 from '../assets/WhatsApp Image 2024-04-15 at 6.24.31 PM.jpeg';
import I2 from '../assets/terrenos.png';
import I4 from '../assets/4.webp';
import I5 from '../assets/WhatsApp Image 2024-04-15 at 7.06.45 PM.jpeg';
import I6 from '../assets/WhatsApp Image 2024-04-15 at 6.24.31 PM (1).png';

import I7 from '../assets/don-gotera-imagen-2-64efac06d87fd.webp';
import I8 from '../assets/frigorifico-comida.jpg';
import I9 from '../assets/198.jpg';
import I10 from '../assets/interior-restaurante.jpg';
import I11 from '../assets/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical-products-pharmacy-space-filled-with-medical-drugs-pills-vitamins-boxes.jpg';
import I12 from '../assets/322787126.jpg';
import I13 from '../assets/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.jpg';
import terrenos from '@/assets/Terrenos comerciales.webp';
import desarrollo from '@/assets/icons8-dinámica-positiva-94.png'
import plusvalia from '@/assets/chart_6985767.png'
import servicios from '@/assets/icons8-servicios-94.png'





export default function Home() {
  return (
    <main className="">
      <Hero />

      <div className="mt-20 container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-36 h-36 rounded-full bg-purple-200 p-8"> {/* Ajusta w-36 h-36 según necesites */}
                <Image src={plusvalia} alt="" width={90} height={90} className="object-cover" /> {/* Asegúrate de definir también el height para mantener la proporción */}
              </div>
            </div>
            <span className="font-bold text-2xl">Plusvalía</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-200 p-8"> {/* Ajusta w-36 h-36 según necesites */}
                <Image src={desarrollo} alt="" width={90} height={90} className="object-cover" /> {/* Asegúrate de definir también el height para mantener la proporción */}
              </div>
            </div>
            <span className="font-bold text-2xl">Desarrollo, proyección y crecimiento</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-36 h-36 rounded-full bg-green-200 p-8"> {/* Ajusta w-36 h-36 según necesites */}
                <Image src={shield} alt="" width={90} height={90} className="object-cover" /> {/* Asegúrate de definir también el height para mantener la proporción */}
              </div>
            </div>
            <span className="font-bold text-2xl">Crecimiento habitacional, comercial e industrial</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-200 p-8"> {/* Ajusta w-36 h-36 según necesites */}
                <Image src={market} alt="" width={90} height={90} className="object-cover" /> {/* Asegúrate de definir también el height para mantener la proporción */}
              </div>
            </div>
            <span className="font-bold text-2xl">Oportunidades de inversión</span>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-10 mx-auto mt-10">
          <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-200 p-8"> {/* Ajusta w-36 h-36 según necesites */}
                  <Image src={market} alt="" width={90} height={90} className="object-cover" /> {/* Asegúrate de definir también el height para mantener la proporción */}
                </div>
              </div>
              <span className="font-bold text-2xl">Rentabilidad y viabilidad comercial</span>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-200 p-8"> {/* Ajusta w-36 h-36 según necesites */}
                  <Image src={servicios} alt="" width={90} height={90} className="object-cover" /> {/* Asegúrate de definir también el height para mantener la proporción */}
                </div>
              </div>
              <span className="font-bold text-2xl">Servicios</span>
            </div>
        </div>
      </div>

      <div className="mt-40">
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-5 bg-blue-400 h-[80dvh]">
            <Image src={I1} alt="" width={1920} className="w-full h-full object-cover" />
          </div>
          <div className="col-span-5 bg-blue-900 h-[80dvh] p-20">
            <span className="uppercase text-xl tracking-widest font-semibold text-blue-400">Terrenos comerciales</span>
            <h2 className="font-bold text-7xl text-white mt-6">Construye tu futuro empresarial</h2>
            <p className="text-justify mt-10 text-2xl text-white">
              Este desarrollo esta ubicado estratégicamente, ya que dentro de su
              entorno, cuenta con cercanía a las principales vías de acceso,
              Universidades, tiendas de conveniencia, comercio en general y Plaza
              Comercial. Ubicado al sur de la ciudad actualmente la zona de
              mayor crecimiento y desarrollo en Aguascalientes.
            </p>
            <div className="mt-10 ">
                <a href="#"className="rounded-full bg-blue-600 px-7 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Más información
                </a>
            </div>
          </div>
          <div className="col-span-3 bg-blue-600 h-64">
            <Image src={I2} alt="" width={1000} className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 bg-blue-900 h-64">
            <Image src={I4} alt="" width={1000} className="w-full h-full object-cover" />
          </div>
          <div className="col-span-3 bg-blue-600 h-64">
            <Image src={I6} alt="" width={1000} className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 bg-blue-900 h-64">
            <Image src={I5} alt="" width={1000} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-40 container mx-auto">
        <h2 className="font-bold text-7xl text-center">Lotes</h2>
        <p className="text-center mt-10 text-2xl">En un desarrollo residencial con más de 250 hectáreas de extensión; con amplias avenidas, áreas comerciales y universidades todo esto al interior de un desarrollo planeado que destaca por su gran plusvalía.</p>
        <div className="grid grid-cols-2 gap-32 mt-10">
          <div className="bg-slate-100 p-8">
            <div>
              <h3 className="font-bold text-4xl mt-6">Comerciales</h3>
              <ul className="mt-10 text-2xl space-y-5">
                <li>Totalmente urbanizados</li>
                <li>Lotes en preventa desde 400 m<sup>2</sup></li>
                <li>Crédito directo</li>
                <li>Sobre avenida</li>
                <li>Gran plusvalía</li>
              </ul>
              <div className="flex justify-between">
                <div className="self-end">
                  <a href="#"className="rounded-full bg-blue-600 px-7 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Agendar cita
                  </a>
                </div>

                <div className="self-end">
                  <Image src={terrenos} alt="" width={300} height={300} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-8">
            <div>
              <h3 className="font-bold text-4xl mt-6">Macrolotes</h3>
              <ul className="mt-10 text-2xl space-y-5">
                <li>Cercanía a principales vías de acceso</li>
                <li>Lotes en preventa desde 22,984 m<sup>2</sup></li>
                <li>Gran plusvalía</li>
              </ul>
              <div className="flex justify-between">
                <div className="self-end">
                  <a href="#"className="rounded-full bg-blue-600 px-7 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Agendar cita
                  </a>
                </div>

                <div className="self-end mt-24">
                  <Image src={terrenos} alt="" width={300} height={300} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-40 container mx-auto">
        <h2 className="font-bold text-7xl text-center">Conoce tu entorno</h2>
        <p className="text-center mt-10 text-2xl">Al sur, el mayor polo de desarrollo de la ciudad de Aguascalientes, frente a Nissan I y a unos pasos del nuevo campus de la UPA.<br /> Av. San Gerardo, 20342 Aguascalientes, Ags.</p>
        
        <div className="mt-10 flex justify-center">
            <a href="#"className="rounded-full border-2 border-blue-600 text-blue-600 px-7 py-2.5 text-2xl font-semibold hover:text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Cómo llegar
            </a>
        </div>

        <div className="mt-10 flex justify-center">
            <div className="h-[400px] w-full">
                <iframe loading="lazy" src="https://sangerardoresidencial.com.mx/mapbox/mapbox.html" className="w-full h-full"></iframe>
            </div>
        </div>
      </div>

      <div className="mt-40 bg-slate-100 p-16 max-h-screen overflow-hidden">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-5 grid grid-cols-3 gap-4">
            <div className="col-span-2 h-[60vh] pt-20">
              <span className="uppercase text-xl tracking-widest font-semibold text-[#475569]">Un Mundo de Oportunidades</span>
              <h2 className="font-bold text-7xl text-[#0F172A] mt-6">Beneficios a tu alcance</h2>
                <ul className="mt-10 text-2xl space-y-5 text-[#0F172A]">
                  <li>Complejos industriales, <span className="font-semibold">Filiales de las plantas armadoras</span></li>
                  <li>Escuelas de educación básica, media y universidades <span className="font-semibold">(UAA y UPA CAMPUS SUR)</span></li>
                  <li>Centros comerciales, hoteles de 4 y 5 estrellas, ciudad, <span className="font-semibold">Parques, bancos, tiendas de autoservicio y conveniencia</span></li>
                  <li>Población de clientes potenciales por el desarrollo habitacional de <span className="font-semibold">aproximadamente 10,000 personas y con una proyección a 25,000</span></li>
                </ul>
            </div>

            <div className="pt-16 px-4 max-h-[600px]">
              <Image src={I7} alt="" className="w-full h-full object-cover" />
            </div>
            {/* <div className="pt-16 px-4">
              <Image src={I11} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="col-span-2 bg-slate-100">
              <Image src={I12} alt="" className="w-full h-full object-cover" />
            </div> */}
          </div>
          <div className="col-span-5 grid grid-cols-3 gap-4">
            <div className="pt-20">
              <Image src={I8} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 bg-blue-900">
              <Image src={I9} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-3 bg-blue-400 h-[30vh]">
              <Image src={I10} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="pt-8 px-2">
              <Image src={I6} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 bg-blue-400 h-[30vh]">
              <Image src={I13} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-center">
          <div className="col-span-5 bg-blue-900 p-20">
            <span className="uppercase text-xl tracking-widest font-semibold text-blue-400">Empieza a construir ideas</span>
            <h2 className="font-bold text-7xl text-white mt-6">Contáctanos</h2>

            <div className="max-w-2xl mx-auto mt-5">
              <form className="grid grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-medium text-white">Nombre</label>
                  <input type="text" id="nombre" name="nombre" autoComplete="given-name" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div>
                  <label htmlFor="apellidos" className="block text-lg font-medium text-white">Apellidos</label>
                  <input type="text" id="apellidos" name="apellidos" autoComplete="family-name" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div>
                  <label htmlFor="correo" className="block text-lg font-medium text-white">Correo electrónico</label>
                  <input type="email" id="correo" name="correo" autoComplete="email" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-lg font-medium text-white">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" autoComplete="tel" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div className="col-span-2 flex items-center">
                  <input id="aviso_privacidad" name="aviso_privacidad" type="checkbox" required
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  <label htmlFor="aviso_privacidad" className="ml-2 block text-sm text-white">
                    He leído y acepto el aviso de privacidad
                  </label>
                </div>
                <div className="col-span-2">
                  <button type="submit"
                          className="w-full flex justify-center bg-blue-600 border border-transparent rounded-full py-2 px-7 items-center font-medium text-xl text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Enviar Datos
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
