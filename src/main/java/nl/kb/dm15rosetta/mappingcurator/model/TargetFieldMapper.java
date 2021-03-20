package nl.kb.dm15rosetta.mappingcurator.model;

import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TargetFieldMapper implements ResultSetMapper<TargetField> {
    @Override
    public TargetField map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new TargetField(resultSet.getInt("id"), resultSet.getString("name"));
    }
}
