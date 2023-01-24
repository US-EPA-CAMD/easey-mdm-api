import { DataTableDTO } from './datatable.dto';

export class DataSetDTO {
  dataSetCode: string;
  groupCode: string;
  displayName: string;
  noResultsMessage: string;
  tables: DataTableDTO[];
}
