package nl.kb.dm15rosetta.mappingcurator.model;

import net.sf.saxon.xpath.XPathFactoryImpl;
import nl.kb.dm15rosetta.mappingcurator.util.NamespaceMap;
import nl.kb.dm15rosetta.mappingcurator.util.XpathUtil;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathExpressionException;

public class XpathMapping {
    private static final XPath xPath = XpathUtil.newXPath(NamespaceMap.getKnownNamespaces());

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

    public String getValidationError() {
        if (xpath == null || xpath.isEmpty()) {
            return null;
        }

        try {
            xPath.compile(xpath);
        } catch (XPathExpressionException e) {
            return e.getMessage();
        }
        return null;
    }
}
