import { EntityRepository, Repository } from 'typeorm';
import { ShapeCode } from '../entities/shape-code.entity';

@EntityRepository(ShapeCode)
export class ShapeCodeRepository extends Repository<ShapeCode> {
  async getShapeCodes(): Promise<ShapeCode[]> {
    const query = this.createQueryBuilder('sc').select([
      'sc.shapeCode',
      'sc.shapeCodeDescription',
    ]);

    return query.getMany();
  }
}
