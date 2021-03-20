package nl.kb.dm15rosetta.mappingcurator.model;

import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class XpathMappingMapper implements ResultSetMapper<XpathMapping> {
    @Override
    public XpathMapping map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new XpathMapping(resultSet.getInt("id"), resultSet.getInt("field_id"), resultSet.getString("xpath"));
    }
}
