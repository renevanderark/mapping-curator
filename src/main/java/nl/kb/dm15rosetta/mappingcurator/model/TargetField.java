package nl.kb.dm15rosetta.mappingcurator.model;

public class TargetField {
    private Integer id;
    private String name;

    public TargetField() {

    }

    public TargetField(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
