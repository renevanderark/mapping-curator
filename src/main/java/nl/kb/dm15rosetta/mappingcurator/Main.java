package nl.kb.dm15rosetta.mappingcurator;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.configuration.EnvironmentVariableSubstitutor;
import io.dropwizard.configuration.SubstitutingSourceProvider;
import io.dropwizard.jdbi.DBIFactory;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import nl.kb.dm15rosetta.mappingcurator.model.MappingDao;
import nl.kb.dm15rosetta.mappingcurator.resources.MappingResource;
import org.skife.jdbi.v2.DBI;
import org.skife.jdbi.v2.Handle;

public class Main extends Application<Config> {

    public static void main(String... args) throws Exception {
        new Main().run(args);
    }

    @Override
    public void initialize(Bootstrap<Config> bootstrap) {
        // Serve static files
        bootstrap.addBundle(new AssetsBundle("/assets", "/assets"));

        // Support ENV variables in configuration yaml files.
        bootstrap.setConfigurationSourceProvider(
                new SubstitutingSourceProvider(bootstrap.getConfigurationSourceProvider(),
                        new EnvironmentVariableSubstitutor(false))
        );
    }

    public void run(Config config, Environment environment) throws Exception {
        // Database
        final DBIFactory factory = new DBIFactory();
        final DBI db = factory.build(environment, config.getDataSourceFactory(), "datasource");
        try (final Handle hdl = db.open()) {
            hdl.update("CREATE TABLE IF NOT EXISTS xpath_to_fields (id INT PRIMARY KEY AUTO_INCREMENT, xpath VARCHAR(4096), field_id INT)");
            hdl.update("CREATE TABLE IF NOT EXISTS fields (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255))");
            hdl.update("INSERT INTO fields (name) VALUES ('maintitle')");
            hdl.update("INSERT INTO fields (name) VALUES ('subtitle')");
            hdl.update("INSERT INTO fields (name) VALUES ('author')");
            hdl.update("INSERT INTO fields (name) VALUES ('metadata-grant')");
        }

        final MappingDao mappingDao = db.onDemand(MappingDao.class);

        environment.jersey().register(new MappingResource(mappingDao));
    }
}
