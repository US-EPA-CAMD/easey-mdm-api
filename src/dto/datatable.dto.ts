import { DataColumnDTO } from './datacolumn.dto';

export class DataTableDTO {
  tableOrder: number;
  displayName: string;
  noResultsMessage: string;
  columns: DataColumnDTO[];
}