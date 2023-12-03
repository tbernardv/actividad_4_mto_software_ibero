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
  
  print("Base de datos del torneo creada exitosamente.");