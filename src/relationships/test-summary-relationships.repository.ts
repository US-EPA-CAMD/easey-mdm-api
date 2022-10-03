import { TestSummaryRelationships } from '../entities/vw_test_summary_master_data_relationships.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TestSummaryRelationships)
export class TestSummaryRelationshipsRepository extends Repository<TestSummaryRelationships> {
}
