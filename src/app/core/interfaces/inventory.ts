export interface Inventory {
  id: number;
  name: string;
  sku: string;
  warehouse: string;
  currentStock: number;
  uom: string;
  priceBase: number;
  lastTransaction: string;
}
