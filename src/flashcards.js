// flashcards.js
  const flashcards = [
    { question: 'Qué significa?', answer: 'What does it mean?' },
    { question: 'Cómo se dice en español?', answer: 'How do you say in Spanish?' },
    { question: 'Puedes repetir?', answer: 'Can you repeat?' },
    { question: 'Más despacio', answer: 'More slowly' },
    { question: 'Claro', answer: 'Clear?' },
    { question: 'Hay preguntas?', answer: 'Any questions?' },
    { question: 'No entiendo / no comprendo', answer: 'I don\'t understand' },
    { question: 'No recuerdo', answer: 'I don\'t remember' },
    { question: 'No sé', answer: 'I don\'t know' },
    { question: 'Puedes repetir', answer: 'Can you repeat?' },
    { question: 'Qué significa?', answer: 'What does it mean?' },
    { question: 'Qué tal?', answer: 'How are you - informal' },
    { question: 'Buenas tardes', answer: 'Good evening (after 12, but normally after 14-20 sunset)' },
    { question: 'Buenas noches', answer: 'Good night' },
    { question: 'Buenos dias', answer: 'Good morning' },
    { question: 'Hasta pronto', answer: 'See you soon' },
    { question: 'Chau', answer: 'Buy' },
    { question: 'Hasta luego', answer: 'See you later' },
    { question: 'Adios', answer: 'Buy - formal' },
    { question: 'Me llamo', answer: 'My name' },
    { question: 'Me apellido', answer: 'My surname' },
    { question: 'En que trabajas', answer: 'What is your profession?' },
    { question: 'Donde trabajas', answer: 'Where do you work?' },
    { question: 'Los dos', answer: 'Both' },
    { question: 'Algunas', answer: 'Some' },
    { question: 'Cosa', answer: 'Thing' },
    { question: 'Cenar', answer: 'Dinner' },
    { question: 'Ir de compras / hacer la compra', answer: 'Go shopping / do the grocery' },
    { question: 'Clima suave', answer: 'Mild climate' },
    { question: 'Es humedo', answer: 'It\'s wet' },
    { question: 'Hacer senderismo', answer: 'Go hiking' },
    { question: 'Cada vez', answer: 'Each time' },
    { question: 'Una vez', answer: 'One time' },
    { question: 'Dos veces', answer: 'Two times' },
    { question: 'Tres veces', answer: '3 times' },
    { question: 'Vecino', answer: 'Neighbor' },
    { question: 'Primavera', answer: 'Spring' },
    { question: 'Pronto', answer: 'Soon' },
    { question: 'Todavia no', answer: 'Not yet' },
    { question: 'Poblada', answer: 'Populated' },
    { question: 'Peregrinaje', answer: 'Pilgrimage' },
    { question: 'Reconocimiento', answer: 'Well known' },
    { question: 'Cerca', answer: 'Next to, nearby' },
    { question: 'Casi', answer: 'Almost' },
    { question: 'Mas seguras', answer: 'More secure' },
    { question: 'Ubicacion', answer: 'Location' },
    { question: 'Ademas', answer: 'Also' },
    { question: 'Alrededores', answer: 'Surroundings' },
    { question: 'Conosidas', answer: 'Well known' },
    { question: 'Valle', answer: 'Valley' },
    { question: 'Despues', answer: 'After' },
    { question: 'Norte', answer: 'North' },
    { question: 'Este', answer: 'East' },
    { question: 'Sur', answer: 'South' },
    { question: 'Oeste', answer: 'West' },
    { question: 'El sureste', answer: 'Southeast' },
    { question: 'Edificios', answer: 'Buildings' },
    { question: 'Restos', answer: 'Ruins' },
    { question: 'Poblacion', answer: 'Population' },
    { question: 'Siglos', answer: 'Centuries' },
    { question: 'El casco antiguo', answer: 'Old town' },
    { question: 'Quiza', answer: 'Maybe' },
    { question: 'Prefiero los equipos italianos', answer: 'I prefer Italian teams' },
    { question: 'Me gustaria viajar', answer: 'I would like to travel' },
    { question: 'Al menos', answer: 'At least' },
    { question: 'Gente', answer: 'People' },
    { question: 'Amable', answer: 'Kind' },
    { question: 'Arena', answer: 'Sand' },
    { question: 'Calor', answer: 'Heat' },
    { question: 'Humedo', answer: 'Humid' },
    { question: 'Llueve', answer: 'It rains' },
    { question: 'Tener ganas', answer: 'To feel like doing something' },
    { question: 'Tengo ganas de ir de vacaciones', answer: 'I really want to go on vacation' },
    { question: 'Alli', answer: 'There' },
    { question: 'Conocido', answer: 'Known, famous' },
    { question: 'Divertida', answer: 'Fun' },
    { question: 'Bebida', answer: 'Drink' },
    { question: 'Cordillera', answer: 'Mountain range' },
    { question: 'Hace sol', answer: 'It\'s sunny' },
    { question: 'Hace calor', answer: 'It\'s hot' },
    { question: 'Hace frio', answer: 'It\'s cold' },
    { question: 'Hace viento', answer: 'It\'s windy' },
    { question: 'Esta nublado', answer: 'It\'s cloudy' },
    { question: 'Es seco', answer: 'It\'s dry' },
    { question: 'La primavera', answer: 'Spring' },
    { question: 'El verano', answer: 'Summer' },
    { question: 'El otoño', answer: 'Autumn' },
    { question: 'El invierno', answer: 'Winter' },
    { question: '<b>Viajar</b><br />Viajo<br />Viajas<br />Viaja<br />Viajamos<br />Viajáis<br />Viajan', answer: 'Travel' },
    { question: '<b>Ver</b><br />Veo<br />Ves<br />Ve<br />Vemos<br />Veis<br />Ven', answer: 'See' },
    { question: '<b>Tocar</b><br />Toco<br />Tocas<br />Toca<br />Tocamos<br />Tocáis<br />Tocan', answer: 'Play (instrument)' },
    { question: '<b>Actuar</b><br />Actúo<br />Actúas<br />Actúa<br />Actuamos<br />Actuáis<br />Actúan', answer: 'Act (Play in movies, cinema, etc)' },
    { question: '<b>Hacer</b><br />Hago<br />Haces<br />Hace<br />Hacemos<br />Hacéis<br />Hacen', answer: 'to Do' },
    { question: '<b>Jugar</b><br />Juego<br />Juegas<br />Juega<br />Jugamos<br />Jugáis<br />Juegan', answer: 'Play game' },
    { question: '<b>Escuchar</b><br />Escucho<br />Escuchas<br />Escucha<br />Escuchamos<br />Escucháis<br />Escuchan', answer: 'Listen' },
    { question: '<b>Buscar</b><br />Busco<br />Buscas<br />Busca<br />Buscamos<br />Buscáis<br />Buscan', answer: 'Search' },
    { question: '<b>Leer</b><br />Leo<br />Lees<br />Lee<br />Leemos<br />Leéis<br />Leen', answer: 'Read' },
    { question: '<b>Mejorar</b><br />Mejoro<br />Mejoras<br />Mejora<br />Mejoramos<br />Mejoráis<br />Mejoran', answer: 'to Improve' },
    { question: '<b>Pasar</b><br />Paso<br />Pasas<br />Pasa<br />Pasamos<br />Pasáis<br />Pasan', answer: 'Spend time' },
    { question: '<b>Creer</b><br />Creo<br />Crees<br />Cree<br />Creemos<br />Creéis<br />Creen', answer: 'Believe, think' },
    { question: '<b>Elegir</b><br />Elijo<br />Eliges<br />Elige<br />Elegimos<br />Elegís<br />Eligen', answer: 'Choose' },
    
    { question: '<b>Ser</b><br />Soy<br />Eres<br />Es<br />Somos<br />Sois<br />Son', answer: 'To be' },
    { question: '<b>Estar</b><br />Estoy<br />Estás<br />Está<br />Estamos<br />Estáis<br />Están', answer: 'To be' },
    { question: '<b>Llegar</b><br />Llego<br />Llegas<br />Llega<br />Llegamos<br />Llegáis<br />Llegan', answer: 'Arrive' },

    { question: '<b>Estar</b><br />Estoy<br />Estás<br />Está<br />Estamos<br />Estáis<br />Están', answer: 'To be' },
    { question: '<b>Tener</b><br />Tengo<br />Tienes<br />Tiene<br />Tenemos<br />Tenéis<br />Tienen', answer: 'To have' },
    { question: '<b>Decir</b><br />Digo<br />Dices<br />Dice<br />Decimos<br />Decís<br />Dicen', answer: 'To say' },
    { question: '<b>Ir</b><br />Voy<br />Vas<br />Va<br />Vamos<br />Vais<br />Van', answer: 'To go' },
    { question: '<b>Poder</b><br />Puedo<br />Puedes<br />Puede<br />Podemos<br />Podéis<br />Pueden', answer: 'To be able to' },
    { question: '<b>Querer</b><br />Quiero<br />Quieres<br />Quiere<br />Queremos<br />Queréis<br />Quieren', answer: 'To want' },
    { question: '<b>Saber</b><br />Sé<br />Sabes<br />Sabe<br />Sabemos<br />Sabéis<br />Saben', answer: 'To know' },
    { question: '<b>Visitar</b><br />Visito<br />Visitas<br />Visita<br />Visitamos<br />Visitáis<br />Visitan', answer: 'To visit' },
    { question: '<b>Salir</b><br />Salgo<br />Sales<br />Sale<br />Salimos<br />Salís<br />Salen', answer: 'Leave,<br /> Go out <br />, hangout' },
  ];
  export default flashcards;