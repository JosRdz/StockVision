export function detectarRoboSimulado() {
  const eventos = [
    null,
    { zona: 'Pasillo 1', tipo: 'Sospechoso ocultando producto' },
    { zona: 'Caja 3', tipo: 'Comportamiento inusual' }
  ];

  const evento = eventos[Math.floor(Math.random() * eventos.length)];
  return evento;
}