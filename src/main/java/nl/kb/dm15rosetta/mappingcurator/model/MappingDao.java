package nl.kb.dm15rosetta.mappingcurator.model;

import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

public interface MappingDao {

    @RegisterMapper(TargetFieldMapper.class)
    @SqlQuery("SELECT * FROM fields")
    List<TargetField> fetchTargetFields();

    @RegisterMapper(XpathMappingMapper.class)
    @SqlQuery("SELECT * FROM xpath_to_fields")
    List<XpathMapping> fetchMappings();

    @SqlUpdate("INSERT INTO xpath_to_fields (field_id, xpath) values (:fieldId, '')")
    void createMappingRow(@BindBean XpathMapping xpathMapping);

    @SqlUpdate("DELETE FROM xpath_to_fields WHERE id = :id")
    void deleteMappingRow(@BindBean XpathMapping xpathMapping);

    @SqlUpdate("UPDATE xpath_to_fields SET field_id = :fieldId, xpath = :xpath WHERE id = :id")
    void updateMappingRow(@BindBean XpathMapping xpathMapping);

    @RegisterMapper(TargetFieldMapper.class)
    @SqlQuery("SELECT * FROM fields where id = :id")
    TargetField getTargetField(@Bind("id") Integer fieldId);
}
