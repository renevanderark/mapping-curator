package nl.kb.dm15rosetta.mappingcurator;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import io.dropwizard.db.DataSourceFactory;

import javax.validation.constraints.NotNull;

class Config extends Configuration {

    @NotNull
    @JsonProperty("database")
    private DataSourceFactory database;

    DataSourceFactory getDataSourceFactory() {
        return database;
    }


}
