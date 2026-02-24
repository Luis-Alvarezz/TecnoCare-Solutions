import type { Job } from "../types";


export const jobs: Job[] = [
  { 
    id: 1,
    name: 'Soporte a Equipos de Cómputo', 
    description: 'Mantenimiento, optimización y reparación para que tus equipos trabajen al 100% sin interrupciones.', 
    image: {webp: '/activity1.webp', png: '/activity1.jpg'}  },
  { 
    id: 2,
    name: 'Mantenimiento Preventivo' , 
    description: 'Evita fallas, sobrecalentamientos y lentitud con limpieza y optimización profesional.', 
    image: {webp:'/activity2.webp' , png: '/activity2.jpg' } },
  { 
    id: 3,
    name: 'Mantenimiento Correctivo' , 
    description: 'Solucionamos fallas de hardware y software rápido y garantizado.', 
    image: {webp: '/activity3.webp', png: '/activity3.jpg'}  },
  { 
    id: 4,
    name: 'Soporte Técnico' , 
    description: ' Asistencia remota y presencial para resolver cualquier problema tecnológico', 
    image: {webp: '/activity4.webp', png: '/activity4.jpg'}  },
  { 
    id: 5,
    name: 'Instalación de software' , 
    description: 'Instalamos y configuramos programas, sistemas operativos y licencias de forma segura.', 
    image: {webp: '/activity5.webp', png: '/activity5.jpg'}  },
  { 
    id: 6,
    name: 'Instalación y Mantenimiento de Impresoras' , 
    description: 'Instalación, mantenimiento y reparación para impresiones sin interrupciones.', 
    image: {webp: '/activity6.webp', png: '/activity6.jpg'}  },
  { 
    id: 7,
    name: 'CCTV' , 
    description: 'Instalación de cámaras de seguridad para protección 24/7 de tu hogar y negocio.', 
    image: {webp: '/activity7.webp', png: '/activity7.jpg'}  },
  { 
    id: 8,
    name: 'Redes' , 
    description: ' Diseño e instalación de redes cableadas e inalámbricas rápidas, seguras y estables.', 
    image: {webp: '/activity8.webp', png: '/activity8.jpg'}  },
  // { id: , name: '' , description: '' },
]