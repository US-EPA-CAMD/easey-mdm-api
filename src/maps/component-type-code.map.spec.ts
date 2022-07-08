import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { ComponentTypeCode } from '../entities/component-type-code.entity';
import { ComponentTypeCodeMap } from './component-type-code.map';

const componentTypeCode = 'CO2';
const componentTypeCodeDescription = 'CO2 Concentration';
const spanIndicator = 1;
const parameterCode = 'CO2C';

const entity = new ComponentTypeCode();

entity.componentTypeCode = componentTypeCode;
entity.componentTypeCodeDescription = componentTypeCodeDescription;
entity.spanIndicator = spanIndicator;
entity.parameterCode = parameterCode;

describe('ComponentTypeCode', () => {
  it('maps an entity to a dto', async () => {
    const map = new ComponentTypeCodeMap();
    const result = await map.one(entity);

    expect(result.componentTypeCode).toEqual(componentTypeCode);
    expect(result.componentTypeCodeDescription).toEqual(
      componentTypeCodeDescription,
    );
    expect(result.spanIndicator).toEqual(spanIndicator);
    expect(result.parameterCode).toEqual(parameterCode);
  });
});
