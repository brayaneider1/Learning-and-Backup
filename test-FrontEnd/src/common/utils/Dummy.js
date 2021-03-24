import Tv from '../../assets/image/backgrounds/installationTv.png';
import Electric from '../../assets/image/backgrounds/electric.png'


export const dummy = {
  services: [
    {
      id: "1",
      time: "En menos de 90 segundos",
      comment: "El técnico va en camino",
      state: "ACTIVE",
      request: [
        {
          name: "Cambio y montaje de interruptores de luz",
          price: "$50.000",
          img:Electric
        },
        {
            name: "Cambio y montaje de toma corrientes",
            price: "$50.000",
            img:Electric
          },
      ],
      messageCount:0
    },
    {
      id: "2",
      request: [
        {
          name: "Instalación de soporte de TV",
          price: "$50.000",
          img:Tv
        },
      ],
      time: "14/ Nov /2020,9 am",
      comment: "Solicitado y agendado",
      state: "ACTIVE",
      messageCount:1
    },
    {
        id: "3",
        request: [
          {
            name: "Cambio y montaje de interruptores de luz",
            price: "$50.000",
            img:Electric
          },
          {
              name: "Cambio y montaje de toma corrientes",
              price: "$50.000",
              img:Tv
            },
        ],
        time: "En menos de 90 segundos",
        comment: "El técnico va en camino",
        state: "SUCCES",
        messageCount:2
      },
      {
        id: "4",
        request: [
          {
            name: "Instalación de soporte de TV",
            price: "$50.000",
            img:Tv
          },
        ],
        time: "14/ Nov /2020,9 am",
        comment: "Solicitado y agendado",
        state: "SUCCES",
        messageCount:1
      },
  ],
  messages:[
    { 
      message:'Hola me dice el portero que no funciona el citofono. !Ta llegue¡',
      type:1
    },
    { 
      message:'De una! ya bajo entonces...',
      type:2
    }
  ],
  councils:[
    {
      "id": 1,
      "council": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
      "id": 2,
      "council": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      "id": 3,
      "council": "when an unknown printer took a galley of type and scrambled it to make a type"
    },
    {
      "id": 4,
      "council": " It has survived not only five centuries,"
    },
    {
      "id": 5,
      "council": "Evita mal entendidos,cuida tus pertencias y supervisa al técnico"
    }
  ]
};
