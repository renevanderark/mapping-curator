import xhr from "xhr";


const fetchSampleXml = () => xhr({
    method: "GET",
    url: `/assets/samples/sprin2.xml`
}, (err, resp, body) => {
    document.getElementById("xml-sample").innerText = body;
})

export function initializeXmlViewer() {
    fetchSampleXml();
}