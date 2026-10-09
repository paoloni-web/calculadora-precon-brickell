/* ============================================================================
   UNIDADES DE LA CALCULADORA — este es el archivo que se edita.

   Cada bloque { ... } es una unidad y aparece como botón en la página.
   - Para cambiar un dato: modificá el número y guardá.
   - Para añadir una unidad: copiá un bloque entero, pegalo antes del "];" final
     y cambiá "id" (va en el enlace: ?u=3604) y "nombre" (texto del botón).
   - Para quitar una: borrá su bloque.
   Los números van sin puntos de miles; los decimales con punto (1.75).

   Campos: precio ($), sqftRes / sqftOfi (ft² residencia / oficina),
   strBase ($/año), uplift y prima (%), rentaOfi ($/mes),
   scPes / scOpt (% escenario pesimista / optimista),
   hoaRes / hoaOfi ($ por ft² al mes), tax / seguro / utils / otros ($/año),
   mgmt (%), entrada (%), interes (%), plazo (años), cierre (%), credito (%).
   ============================================================================ */
window.UNIDADES = [
  // 2607 — Residence 07 (estudio), piso 26 de 40. Plano oficial PMG 1407-4007:
  // interior 465 ft² / 43,20 m², terraza 84 ft², total 549 ft². Oficina titulada Nº 449.
  { id:"2607", nombre:"2607 · Estudio",
    precio:683000, sqftRes:465, sqftOfi:74, strBase:70000, uplift:15, prima:0, rentaOfi:1800,
    scPes:20, scOpt:20,
    hoaRes:1.75, hoaOfi:1.50, tax:10245, seguro:3500, mgmt:15, utils:3000, otros:0,
    entrada:30, interes:7, plazo:30, cierre:2, credito:0 },
  { id:"3515", nombre:"3515 · Jr 1 dorm",
    precio:789210, sqftRes:547, sqftOfi:74, strBase:70000, uplift:15, prima:5, rentaOfi:1800,
    scPes:20, scOpt:20,
    hoaRes:1.75, hoaOfi:1.50, tax:11838, seguro:3500, mgmt:15, utils:3000, otros:0,
    entrada:25, interes:7, plazo:30, cierre:2, credito:1.75 },
  { id:"3917", nombre:"3917 · 2 dorm",
    precio:1280000, sqftRes:914, sqftOfi:118, strBase:128000, uplift:15, prima:8, rentaOfi:3000,
    scPes:20, scOpt:20,
    hoaRes:1.75, hoaOfi:1.50, tax:19200, seguro:5000, mgmt:15, utils:3600, otros:0,
    entrada:30, interes:7, plazo:30, cierre:2, credito:0 },
  // 3010 — Residence 10 (3 dorm), piso 30. Datos cargados por Paoloni el 7-oct-2026.
  { id:"3010", nombre:"3010 · 3 dorm",
    precio:1855057, sqftRes:1278, sqftOfi:342, strBase:185000, uplift:0, prima:0, rentaOfi:3600,
    scPes:15, scOpt:20,
    hoaRes:1.75, hoaOfi:1.50, tax:24000, seguro:2000, mgmt:15, utils:2000, otros:-1100,
    entrada:30, interes:7, plazo:30, cierre:4, credito:0 },
  // 3604 — Residence 04 (2 dorm), piso 36. Datos cargados por Paoloni el 7-oct-2026.
  { id:"3604", nombre:"3604 · 2 dorm",
    precio:1634573, sqftRes:922, sqftOfi:110, strBase:160200, uplift:0, prima:0, rentaOfi:1800,
    scPes:15, scOpt:20,
    hoaRes:1.75, hoaOfi:1.50, tax:18000, seguro:2000, mgmt:15, utils:2000, otros:1000,
    entrada:30, interes:7, plazo:30, cierre:4, credito:0 },
  // 3417 — Residence 17 (2 dorm), piso 34. Cargada por Paoloni el 7-oct-2026. El PDF exportado salió
  // incompleto: precio, superficies y renta se reconstruyeron de los resultados; el reparto
  // tax/seguro/utils (suman $22.000) y los escenarios −15/+20 se asumieron iguales a la 3604.
  { id:"3417", nombre:"3417 · 2 dorm",
    precio:1280149, sqftRes:914, sqftOfi:110, strBase:147200, uplift:0, prima:0, rentaOfi:1800,
    scPes:15, scOpt:20,
    hoaRes:1.75, hoaOfi:1.50, tax:18000, seguro:2000, mgmt:15, utils:2000, otros:1000,
    entrada:30, interes:7, plazo:30, cierre:4, credito:0 },
];
