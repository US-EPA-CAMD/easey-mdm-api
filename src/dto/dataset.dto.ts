import { DataTableDTO } from './datatable.dto';

export class DataSetDTO {
  dataSetCode: string;
  templateCode: string;
  displayName: string;
  noResultsMessage: string;
  tables: DataTableDTO[];
}
