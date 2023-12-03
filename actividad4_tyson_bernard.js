/**
 * Actividad 4:
 * Diseño y operaciones CRUD en Bases de datos NoSQL utilizando sistemas de control de versiones
 * 
 * Estudiantes: 
 * Tyson Gilbert Bernard Villada - 100092917
 * Santiago Lopez Romero - 100093606
 * Edwin Eduardo Daza Franco - 100090581
 * 
 * link: https://github.com/tbernardv/actividad_4_mto_software_ibero
 */


// Conexión a MongoDB
/**
 * Ese código se utiliza para obtener una referencia a la base de datos en MongoDB. Aquí hay una explicación más 
  detallada:
  var db: Declara una variable llamada db.
  db.getSiblingDB('torneo_mma'): getSiblingDB es un método que se utiliza para obtener una referencia a otra base 
  de datos. En este caso, está obteniendo una referencia a la base de datos llamada 'torneo_mma'.
 */
  var db = db.getSiblingDB('torneo_mma');

  // Creación de colecciones
  db.createCollection('deportistas');
  db.createCollection('entrenadores');
  db.createCollection('arbitros');
  db.createCollection('encuentros_deportivos');
  db.createCollection('resultados');

  // Inserción de registros en la colección 'deportistas'
  db.deportistas.insert([
    {
      "nombre": "John Doe",
      "edad": 28,
      "categoria_peso": "Mediano",
      "equipo": "Team Alpha",
      "record": { "victorias": 10, "derrotas": 3, "empates": 1 }
    },
    {
      "nombre": "Mike Tyson",
      "edad": 54,
      "categoria_peso": "Pesado",
      "equipo": "Iron Fist Gym",
      "record": { "victorias": 50, "derrotas": 6, "empates": 2 }
    },
    {
      "nombre": "Tyson Bernard",
      "edad": 30,
      "categoria_peso": "Wélter",
      "equipo": "Tiger MMA",
      "record": { "victorias": 12, "derrotas": 2, "empates": 0 }
    },
    {
      "nombre": "Deontay Wilder",
      "edad": 35,
      "categoria_peso": "Pesado",
      "equipo": "Wilder's Warriors",
      "record": { "victorias": 42, "derrotas": 1, "empates": 1 }
    },
    {
      "nombre": "Jon Jones",
      "edad": 34,
      "categoria_peso": "Semipesado",
      "equipo": "Jackson-Wink MMA",
      "record": { "victorias": 26, "derrotas": 1, "empates": 0 }
    }
  ]);

  // Inserción de registros en la colección 'entrenadores'
  db.entrenadores.insert([
    {
      "nombre": "Coach Johnson",
      "especialidad": "Boxeo",
      "equipo": "Team Alpha",
      "peleadores": ["John Doe"]
    },
    {
      "nombre": "Coach Tyson",
      "especialidad": "Kickboxing",
      "equipo": "Iron Fist Gym",
      "peleadores": ["Mike Tyson"]
    },
    {
      "nombre": "Coach Rodriguez",
      "especialidad": "Jiu-Jitsu",
      "equipo": "Tiger MMA",
      "peleadores": ["Tyson Bernard"]
    },
    {
      "nombre": "Coach Wilder",
      "especialidad": "Muay Thai",
      "equipo": "Wilder's Warriors",
      "peleadores": ["Deontay Wilder"]
    },
    {
      "nombre": "Coach Jones",
      "especialidad": "Wrestling",
      "equipo": "Jackson-Wink MMA",
      "peleadores": ["Jon Jones"]
    }
  ]);

  // Inserción de registros en la colección 'arbitros'
  db.arbitros.insert([
    {
      "nombre": "Referee Smith",
      "experiencia": "7 años"
    },
    {
      "nombre": "Referee Martinez",
      "experiencia": "4 años"
    },
    {
      "nombre": "Referee Brown",
      "experiencia": "6 años"
    },
    {
      "nombre": "Referee Taylor",
      "experiencia": "8 años"
    },
    {
      "nombre": "Referee White",
      "experiencia": "3 años"
    }
  ]);

  // Inserción de registros en la colección 'encuentros_deportivos'
  db.encuentros_deportivos.insert([
    {
      "fecha": ISODate("2023-02-10T19:00:00Z"),
      "lugar": "Octagon Arena",
      "competidores": ["Mike Tyson", "Tyson Bernard"],
      "arbitro_asignado": "Referee Smith"
    },
    {
      "fecha": ISODate("2023-03-05T20:15:00Z"),
      "lugar": "Thunderdome MMA",
      "competidores": ["Deontay Wilder", "Jon Jones"],
      "arbitro_asignado": "Referee Martinez"
    },
    {
      "fecha": ISODate("2023-04-20T18:45:00Z"),
      "lugar": "Strikeforce Arena",
      "competidores": ["John Doe", "Tyson Bernard"],
      "arbitro_asignado": "Referee Brown"
    },
    {
      "fecha": ISODate("2023-05-15T21:30:00Z"),
      "lugar": "Cage Warriors Stadium",
      "competidores": ["Mike Tyson", "Jon Jones"],
      "arbitro_asignado": "Referee Taylor"
    },
    {
      "fecha": ISODate("2023-06-08T19:45:00Z"),
      "lugar": "Warrior's Den",
      "competidores": ["Deontay Wilder", "John Doe"],
      "arbitro_asignado": "Referee White"
    }
  ]);
  
  print("Base de datos del torneo creada exitosamente.");