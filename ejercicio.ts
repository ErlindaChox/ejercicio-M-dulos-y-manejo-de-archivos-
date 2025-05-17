import * as fs from 'fs'; // Módulo para leer archivos

// Interfaz que describe el resultado mejorado
export interface Resultado {
  promedio: number;
  estudiantes: string[];
  cantidadEstudiantes: number;
}

// Función que calcula solo el promedio
export function promedio(archivo: string): number {
  const contenido = fs.readFileSync(archivo, 'utf-8'); // Leemos el archivo
  const lineas = contenido.trim().split('\n');         // Dividimos en líneas

  let suma = 0;
  let total = 0;

  for (const linea of lineas) {
    const partes = linea.split(',');      // Separamos por coma
    const nota = parseFloat(partes[1]);   // Convertimos la nota a número
    suma += nota;                         // Sumamos las notas
    total++;                              // Contamos los estudiantes
  }

  return suma / total; // Calculamos el promedio
}

// Función que devuelve más datos
export function promedioMejorado(archivo: string): Resultado {
  const contenido = fs.readFileSync(archivo, 'utf-8');
  const lineas = contenido.trim().split('\n');

  let suma = 0;
  const estudiantes: string[] = [];

  for (const linea of lineas) {
    const partes = linea.split(',');
    const nombre = partes[0];
    const nota = parseFloat(partes[1]);

    estudiantes.push(nombre); // Guardamos el nombre
    suma += nota;
  }

  const promedio = suma / estudiantes.length;

  return {
    promedio,
    estudiantes,
    cantidadEstudiantes: estudiantes.length
  };
}
