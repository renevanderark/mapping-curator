package nl.kb.dm15rosetta.mappingcurator.model;

public class XpathMapping {

    private Integer id;
    private Integer fieldId;
    private String xpath;

    public XpathMapping() {}

    public XpathMapping(Integer id, Integer fieldId, String xpath) {
        this.id = id;
        this.fieldId = fieldId;
        this.xpath = xpath;
    }

    public Integer getId() {
        return id;
    }

    public Integer getFieldId() {
        return fieldId;
    }

    public String getXpath() {
        return xpath;
    }
}
