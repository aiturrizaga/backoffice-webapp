import { Inventory } from '@/core/interfaces/inventory';

export const fakeInventory: Inventory[] = [
  {
    id: 1,
    name: 'Laptop Dell Inspiron 15',
    sku: 'LAP-DELL-INS15-001',
    warehouse: 'Almacén Central Lima',
    currentStock: 45,
    uom: 'UND',
    priceBase: 2499.00,
    lastTransaction: '2024-11-28T14:30:00'
  },
  {
    id: 2,
    name: 'Mouse Inalámbrico Logitech',
    sku: 'ACC-LOG-MX3-002',
    warehouse: 'Almacén Norte',
    currentStock: 230,
    uom: 'UND',
    priceBase: 89.90,
    lastTransaction: '2024-11-30T09:15:00'
  },
  {
    id: 3,
    name: 'Papel Bond A4 75g (Paquete)',
    sku: 'PAP-A4-75G-003',
    warehouse: 'Almacén Central Lima',
    currentStock: 1500,
    uom: 'PAQ',
    priceBase: 12.50,
    lastTransaction: '2024-11-25T16:45:00'
  },
  {
    id: 4,
    name: 'Silla Ergonómica Oficina',
    sku: 'MUE-SILL-ERG-004',
    warehouse: 'Almacén Sur',
    currentStock: 18,
    uom: 'UND',
    priceBase: 450.00,
    lastTransaction: '2024-11-27T11:20:00'
  },
  {
    id: 5,
    name: 'Tinta Epson T504 Negro',
    sku: 'TINT-EPS-T504N-005',
    warehouse: 'Almacén Central Lima',
    currentStock: 0,
    uom: 'UND',
    priceBase: 45.00,
    lastTransaction: '2024-11-20T13:00:00'
  },
  {
    id: 6,
    name: 'Cable HDMI 2.0 - 2 metros',
    sku: 'CAB-HDMI-2M-006',
    warehouse: 'Almacén Norte',
    currentStock: 325,
    uom: 'UND',
    priceBase: 25.90,
    lastTransaction: '2024-12-01T08:30:00'
  },
  {
    id: 7,
    name: 'Escritorio Modular 120x60cm',
    sku: 'MUE-ESC-MOD-007',
    warehouse: 'Almacén Sur',
    currentStock: 12,
    uom: 'UND',
    priceBase: 380.00,
    lastTransaction: '2024-11-26T15:10:00'
  },
  {
    id: 8,
    name: 'Marcador Permanente (Caja x12)',
    sku: 'UTI-MARC-PERM-008',
    warehouse: 'Almacén Central Lima',
    currentStock: 580,
    uom: 'CJA',
    priceBase: 18.50,
    lastTransaction: '2024-11-29T10:45:00'
  },
  {
    id: 9,
    name: 'Monitor LED 24" Full HD',
    sku: 'MON-LED-24FHD-009',
    warehouse: 'Almacén Norte',
    currentStock: 67,
    uom: 'UND',
    priceBase: 599.00,
    lastTransaction: '2024-11-28T17:25:00'
  },
  {
    id: 10,
    name: 'Teclado Mecánico RGB Gamer',
    sku: 'TEC-MEC-RGB-010',
    warehouse: 'Almacén Central Lima',
    currentStock: 5,
    uom: 'UND',
    priceBase: 250.00,
    lastTransaction: '2024-11-22T12:05:00'
  }
];
