package nl.kb.dm15rosetta.mappingcurator.model;

import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

public interface MappingDao {

    @RegisterMapper(TargetFieldMapper.class)
    @SqlQuery("SELECT * FROM fields")
    List<TargetField> fetchTargetFields();
}
