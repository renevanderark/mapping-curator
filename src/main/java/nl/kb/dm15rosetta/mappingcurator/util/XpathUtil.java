package nl.kb.dm15rosetta.mappingcurator.util;

import javax.xml.namespace.NamespaceContext;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathFactory;
import java.util.Iterator;
import java.util.Map;

public class XpathUtil {
    private static final XPathFactory _xpathFactory = new net.sf.saxon.xpath.XPathFactoryImpl();

    // " The XPathFactory class is not thread-safe. "
    // http://docs.oracle.com/javase/6/docs/api/javax/xml/xpath/XPathFactory.html
    public static synchronized javax.xml.xpath.XPath newXPath(final Map<String, String> namespaces) {
        final XPath xPath = _xpathFactory.newXPath();
        if (namespaces != null) {
            xPath.setNamespaceContext(new NamespaceContext() {
                @Override
                public String getNamespaceURI(String prefix) {
                    if (namespaces.containsKey(prefix)) {
                        return namespaces.get(prefix);
                    }
                    return null;
                }

                @Override
                public String getPrefix(String namespaceURI) {
                    return null;
                }

                @Override
                public Iterator getPrefixes(String namespaceURI) {
                    return null;
                }
            });
        }
        return xPath;
    }
}
