import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpswks.vw_cross_check_parameter_cd_method_cd_sub_data_cd' })
export class ParameterMethodSubData {
  @ViewColumn({
    name: 'methodCode',
  })
  methodCode: string;

  @ViewColumn({
    name: 'parameterCode',
  })
  parameterCode: string;

  @ViewColumn({
    name: 'substituteDataCode',
  })
  substituteDataCode: string;
}
