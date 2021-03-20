package nl.kb.dm15rosetta.mappingcurator.util;

import java.util.HashMap;
import java.util.Map;

public class NamespaceMap {
    
    // xmlns:mets="http://www.loc.gov/METS/" 
    // xmlns:kbmd="http://schemas.kb.nl/kbmd/v1"
    // xmlns:mods="http://www.loc.gov/mods/v3" 
    // xmlns:premis="info:lc/xmlns/premis-v2" 
    // xmlns:xlink="http://www.w3.org/1999/xlink" 
    // xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    // xmlns:mml="http://www.w3.org/1998/Math/MathML"
    // xmlns:kbmd-storage="http://schemas.kb.nl/kbmd-storage/v1"
    // xmlns:kbmd-events="http://schemas.kb.nl/kbmd-events/v1"

    private static final Map<String, String> knownNameSpaces = new HashMap<>();
    
    static {
        knownNameSpaces.put("mets", "http://www.loc.gov/METS/");
        knownNameSpaces.put("kbmd", "http://schemas.kb.nl/kbmd/v1");
        knownNameSpaces.put("mods", "http://www.loc.gov/mods/v3");
        knownNameSpaces.put("premis", "info:lc/xmlns/premis-v2");
        knownNameSpaces.put("xlink", "http://www.w3.org/1999/xlink" );
        knownNameSpaces.put("xsi", "http://www.w3.org/2001/XMLSchema-instance");
        knownNameSpaces.put("mml", "http://www.w3.org/1998/Math/MathML");
        knownNameSpaces.put("kbmd-storage", "http://schemas.kb.nl/kbmd-storage/v1");
        knownNameSpaces.put("kbmd-events", "http://schemas.kb.nl/kbmd-events/v1");
    }

    public static Map<String,String> getKnownNamespaces() {
        return knownNameSpaces;
    }
}
