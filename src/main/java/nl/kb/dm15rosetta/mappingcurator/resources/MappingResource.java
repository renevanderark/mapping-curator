package nl.kb.dm15rosetta.mappingcurator.resources;

import nl.kb.dm15rosetta.mappingcurator.model.MappingDao;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/mappings")
public class MappingResource {
    private MappingDao mappingDao;

    public MappingResource(MappingDao mappingDao) {
        this.mappingDao = mappingDao;
    }

    @GET
    @Path("/target-fields")
    @Produces("application/json")
    public Response fetchTargetFields() {
        return Response.ok(mappingDao.fetchTargetFields()).build();
    }

}
