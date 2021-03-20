package nl.kb.dm15rosetta.mappingcurator.resources;

import nl.kb.dm15rosetta.mappingcurator.model.MappingDao;
import nl.kb.dm15rosetta.mappingcurator.model.XpathMapping;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
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

    @GET
    @Path("/mappings")
    @Produces("application/json")
    public Response fetchMappings() {
        return Response.ok(mappingDao.fetchMappings()).build();
    }

    @POST
    @Path("/mappings")
    @Consumes("application/json")
    @Produces("application/json")
    public Response createMapping(XpathMapping xpathMapping) {

        mappingDao.createMappingRow(xpathMapping);

        return Response.ok(xpathMapping).build();
    }

    @PUT
    @Path("/mappings")
    @Consumes("application/json")
    @Produces("application/json")
    public Response updateMapping(XpathMapping xpathMapping) {

        mappingDao.updateMappingRow(xpathMapping);

        return Response.ok(xpathMapping).build();
    }

    @DELETE
    @Path("/mappings")
    @Consumes("application/json")
    @Produces("application/json")
    public Response deleteMapping(XpathMapping xpathMapping) {

        mappingDao.deleteMappingRow(xpathMapping);

        return Response.ok(xpathMapping).build();
    }

}
