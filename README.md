# Auftragsauswertung
Auftragsauswertung COOIS vs. COGI

## SAP Fiori Webapp

Dieses Repository enthält jetzt ein minimales SAP-Fiori-Webapp-Grundgerüst unter `/webapp`:

- `/webapp/index.html`
- `/webapp/Component.js`
- `/webapp/manifest.json`
- `/webapp/view/App.view.xml`

Zum lokalen Starten kann z. B. ein statischer Webserver genutzt werden:

```bash
cd <repository-root>
python3 -m http.server 8080
```

Dann im Browser öffnen:

`http://localhost:8080/webapp/index.html`
