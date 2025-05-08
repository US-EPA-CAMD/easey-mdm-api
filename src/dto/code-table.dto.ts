import { ApiProperty } from '@nestjs/swagger';

export class CodeTableDto {
  @ApiProperty({
    description: 'Code',
  })
  code: string;

  @ApiProperty({
    description: 'Display Name',
  })
  name: string;
}
