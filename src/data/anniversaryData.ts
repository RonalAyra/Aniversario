import { Timeline, Photo } from "../types";
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';
import foto6 from '../assets/foto6.jpg';
import foto7 from '../assets/foto7.jpg';
import foto8 from '../assets/foto8.jpg';
import foto9 from '../assets/foto9.jpg';
import foto10 from '../assets/foto10.jpg';

export const timelineData: Timeline[] = [
  {
    date: "Primera Vez",
    title: "El Comienzo",
    description:
      "Cuando nuestras miradas se cruzaron por primera vez, el mundo se detuvo. Ese momento mágico en el que todo cambió.",
  },
  {
    date: "Primera Cita",
    title: "Helado y Conversaciones",
    description:
      "Las horas se sintieron como minutos mientras nos perdíamos en la conversación, sabiendo que esto apenas comenzaba. Recuerdo que te llevé al Apolo, comimos helado y nos sentamos afuera del Supermol.",
  },
  {
    date: "Oficial",
    title: "Nosotros",
    description:
      "El día en que decidimos escribir nuestra historia juntos, de la mano y con el corazón unido.",
  },
  {
    date: "Primer Viaje",
    title: "Aventura por Delante",
    description:
      "Explorando nuevos lugares, creando recuerdos y enamorándonos más con cada amanecer. Recuerdo cuando fuimos a acampar: fue un viaje inolvidable. Éramos solo nosotros dos, en la Preciosa, rumbo a la aventura, con el corazón lleno de emoción y el alma libre.",
  },
  {
    date: "Mudanza",
    title: "Nuestro Hogar",
    description:
      "Dos vidas que se unieron bajo un mismo techo, con la esperanza de un futuro mejor. Dejamos atrás lo conocido para salir del país, soñando con construir nuestra familia. Pero el destino nos separó, y solo uno logró llegar. Aun así, nuestro amor sigue cruzando fronteras.",
  },
  {
    date: "Hoy",
    title: "Otro Capítulo",
    description:
      "Celebrando otro año de crecimiento, risas, lágrimas y un amor inquebrantable.",
  },
];

export const photos: Photo[] = [
  {
    id: 1,
    src: `${foto1}`,
    alt: "Primera cita",
    caption: "Primera foto que nos tomamos juntos",
  },
  {
    id: 2,
    src: `${foto2}`,
    alt: "Aqui en el arbolito",
    caption: "recuerdo eterno",
  },
  {
    id: 3,
    src: `${foto3}`,
    alt: "Corani",
    caption: "foto en la laguna Corani ",
  },
  {
    id: 4,
    src: `${foto4}`,
    alt: "Corani",
    caption: "En el bote navegando",
  },
  {
    id: 5,
    src: `${foto5}`,
    alt: "Aguas danzantes",
    caption: "En las aguas danzantes hermoso recuerdo",
  },
  {
    id: 6,
    src: `${foto6}`,
    alt: "Tu Cumpleanios",
    caption: "Tu Cumpleanios, justo ese dia fue estreno de barbie",
  },
  {
    id: 7,
    src: `${foto7}`,
    alt: "Camino a la laguna azul",
    caption: "Salismos chocos de ahi",
  },
  {
    id: 8,
    src: `${foto8}`,
    alt: "Cuando fuimos a Acampar",
    caption: "llegamos temprano al lugar y disfrutamos del paisaje",
  },
  {
    id: 9,
    src: `${foto9}`,
    alt: "Despertando en el Camping",
    caption: "Bonito amanecer que tuvimos ese dia",
  },
  {
    id: 10,
    src: `${foto10}`,
    alt: "Zoologico",
    caption: "Visita a los flamencos",
  },
];

export const message = {
  title: "Para Mi Amor Eterno",
  content: `
    Cada momento contigo se siente como el primer día que nos conocimos: lleno de asombro, emoción y posibilidades infinitas.
    A través de cada desafío y triunfo, tu mano en la mía ha sido mi mayor fortaleza. Tu sonrisa, mi vista favorita. Tu corazón, mi tesoro más preciado.
    Al celebrar otro año juntos, recuerdo todas las razones por las que me enamoro de ti cada día. Tu amabilidad. Tu fuerza. La forma en que ves el mundo y lo haces más brillante simplemente al estar en él.
    Este viaje contigo ha sido la aventura más grande de mi vida, y no puedo esperar a ver a dónde nos lleva nuestro amor.
    Feliz aniversario, mi amor. Brindo por nosotros: ayer, hoy y todos nuestros mañanas.
  `,
};
