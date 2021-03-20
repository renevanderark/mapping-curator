package nl.kb.dm15rosetta.mappingcurator;

import nl.kb.dm15rosetta.mappingcurator.model.MappingDao;
import nl.kb.dm15rosetta.mappingcurator.model.XpathMapping;
import nl.kb.dm15rosetta.mappingcurator.util.NamespaceMap;
import nl.kb.dm15rosetta.mappingcurator.util.XpathUtil;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class XmlSampleRunner {
    private static final DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();


    private static final Document sampleDoc;

    static {
        dbf.setNamespaceAware(true);
        try (final InputStream resourceAsStream = XmlSampleRunner.class.getResourceAsStream("/assets/samples/sprin2.xml")) {
            final DocumentBuilder documentBuilder = dbf.newDocumentBuilder();
            sampleDoc = documentBuilder.parse(resourceAsStream);
        } catch (Exception e) {
            throw new ExceptionInInitializerError("failed to read bytes of xml sample");
        }
    }

    public Map<String, List<String>> runMappingsOnSample(MappingDao mappingDao) {
        final Map<String, List<String>> result = new HashMap<>();
        for (XpathMapping xpathMapping : mappingDao.fetchMappings()) {
            final String xpath = xpathMapping.getXpath();
            final XPath xPath = XpathUtil.newXPath(NamespaceMap.getKnownNamespaces());

            try {
                final XPathExpression expression = xPath.compile(xpath);
                final NodeList nodes = (NodeList) expression.evaluate(sampleDoc, XPathConstants.NODESET);
                final ArrayList<String> resultList = new ArrayList<>();
                result.put(mappingDao.getTargetField(xpathMapping.getFieldId()).getName(), resultList);
                for (int i = 0; i < nodes.getLength(); i++) {
                    resultList.add(nodes.item(i).getTextContent());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return result;

    }

}
