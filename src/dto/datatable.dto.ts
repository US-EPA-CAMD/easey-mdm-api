import { DataColumnDTO } from './datacolumn.dto';

export class DataTableDTO {
  tableOrder: number;
  displayName: string;
  sqlStatement: string;
  noResultsMessage: string;
  columns: DataColumnDTO[];
}