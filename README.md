
# 🤑💰💸 insimodus – *der Finanzretter für echte Hustler*

**Nie wieder broke sein!**  
Mit **insimodus** haust du der Pleite ins Gesicht – stylisch, digital und voll auf Moneygrind. Erfasse dein Cashflow, kontrollier dein Bag und baller dir deine Finanzen direkt in den Browser rein. Alles bleibt lokal – keine Bank, keine Snitches. Nur du und dein Moneygame.

![apored](https://cdn-images.dzcdn.net/images/artist/89f8a6d62c7b1f53ccde11b325cd3a4b/1900x1900-000000-80-0-0.jpg)

## 🚀 Features für Alpha-Finanzbosse
- **💸 Einnahmen & Ausgaben tracken:**  
  Trag alles ein – vom 5CHF Döner bis zum 10K Sneaker Drop.
- **📊 Grafiken wie bei Wall Street:**  
  Mit Charts, Digga! Kreis, Balken, was du willst – powered by Chart.js.
- **💾 Local Save:**  
  Deine Daten? Nur für dich. Kein Cloud-Gelaber. 100% Browser-based Hustle.

## 💻 Techstack vom Feinsten
- **Frontend:** HTML, CSS, JavaScript (natürlich raw, wie’s sich gehört)
- **Visuals:** Chart.js (weil Excel ist was für Buchhalter)
- **Storage:** JSON in deinem Browser – einfach, smart, straight

## 📱 Preview – sieht gut aus, weil’s gut ist:
![image](https://github.com/user-attachments/assets/35313d44-1825-40cd-9e34-612b1f29c5f9)
![image](https://github.com/user-attachments/assets/40ed27a6-fd40-44db-b97c-a3f36c0cf8f7)


<br>

---

<br>

## 📕 BBZBL Modul 324: Web-Applikation Template

Beispiel einer CI/CD Pipeline in die AWS Academy Umgebung.

- Es wird die AWS Umgebung mit Hilfe von [Terraform](https://developer.hashicorp.com/terraform/intro) aufgesetzt
- Es wird eine Web-Applikation in die AWS Umgebung mit Hilfe von [Kamal](https://kamal-deploy.org/) deployed
- Standardmaessig wird die app [`./nginx`](./nginx) deployed

> [!IMPORTANT]
> Das Repository dient als Vorlage um die Projekte im Modul 324 zu starten.

## :information_desk_person: Anleitungen auf der Modulwebseite

- [In AWS Umgebung starten](https://codingluke.github.io/bbzbl-modul-324/docs/lektionen/woche01/aufgabe-amazon-aws-umgebung-starten)
- [AWS Credentials uebertragen](https://codingluke.github.io/bbzbl-modul-324/docs/lektionen/woche01/nginx-example-klonen#aws-credentials-in-repository-environment-variablen-%C3%BCbertragen)
- [AWS Umgebung aufsetzen](https://codingluke.github.io/bbzbl-modul-324/docs/lektionen/woche01/aufgabe-nginx-example-klonen#amazon-aws-infrastruktur-aufsetzten)
- [Nginx Image bauen und ausliefern](https://codingluke.github.io/bbzbl-modul-324/docs/lektionen/woche01/aufgabe-nginx-example-klonen#nginx-image-bauen-und-ausliefern-deployen)
- Lokale Entwicklungsumgebung konfigurieren
- Devcontainer Dockerfile erweitern
- Eine eigene Applikation erstellen
- Eine eigene Applikation deployen

## :file_folder: Ordnerstruktur

### [`/docs`](./docs/README.md)

Der Ordner `/docs` beinhaltet allgemeine Dokumentation. Hier koennt Ihr eure Gedanken
zum Projekt in `markdown`-Dateien niederschreiben.

> [!IMPORTANT]
> :file_folder: **`./docs/reflections`**
>
> - Jedes Projektmitglied sollte in diesem Ordner seine Sprint Reflektionen erfassen.
> - Am besten erstellt jeder einen Unterordner `/docs/reflections/ihr-nachname`.
> - Fuer jede Sprint-Reflexion sollte eine neue Datei erstellt werden.

### [`/nginx`](./nginx)

Der Ordner `/nginx` beinhaltet alle Dateien die benoetigt werden, um ein nginx docker image zu erstellen.
Das darin liegende `/nginx/Dockerfile` beinhaltet die Beschreibung vom Image.

> [!NOTE]
> Dies ist die Standardapplikation um das deployment nach AWS zu testen

### [`/kamal`](./kamal/README.md)

Der Ordner `/kamal` beinhaltet die Konfiguration um ein Docker-image mit Hilfe des
Utility-Frameworks [Kamal](https://kamal-deploy.org/) zu deployen.

Es ist moeglich eine Web-Applikation inclusive einer Datenbank auf eine beliebige VM zu deployen.

> [!NOTE]
> Mehrere Web-Applikationen (Dockerfiles) werden erst ab der Version `>2.0.0` unterstuetzt.
> Das Modul basiert noch auf der Version `1.9.2`. Daher ist momentan nur moeglich eine
> Web-Applikation zu erstellen.
>
> Dies betrifft vor allem Projekte welche aus einem Backend-Api und einem Frontend bestehen.
>
> - :bulb: Das Modul ist erfahrungsgemaess zu kurz um dies zu bewerkstelligen. Daher wuerde ich
>   mich aufs Frontend konzentrieren.

### [`/terraform`](./terraform/README.md)

Der Ordner `/terraform` beinhaltet die Konfiguration der AWS Umgebung. Terraform ermoeglicht es fuer alle
die AWS Umgebung einheitlich, automatisch aufzusetzen. Zusaetzlich beinhaltet es utility Scripts um z.B.
die aktuelle IP vom Server herauszufinden.

### [`/.github`](./.github)

Im Ordner `.github` befinden sich GitHub spezifische Dateien. Dies sind in unserem Fall vor allem
GitHub Action Workflows im Unterordner [.github/workflows](./.github/workflows).
Dieser beinhaltet folgende zwei Dateien:

- **Setup Infrastructure on Amazon AWS** [`./.github/workflows/aws-infrastructure.yml`](./.github/workflows/aws-infrastructure.yml)

  Die Action "Setup Infrastructure on Amazon AWS" verbindet sich mit der AWS Umgebung und erstellt
  alle AWS Ressourcen wie z.B. Netzwerk, Routing, Docker Registry und Ubuntu Instanz.

- **Deploy to Amazon AWS** [`./.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)

  Die Action "Deploy to Amazon AWS" baut das Docker-Image, ladet es in die Docker-Registry der AWS Umgebung
  und startet das Docker-Image als Container auf der Ubuntu VM.

### [`/.devcontainer`](./.devcontainer)

Im Ordner `.devcontainer` befindet sich das `Dockerfile` fuer den [DevContainer](https://containers.dev/) sowie auch die Spezifikation des devcontainers.
Das `./.devcontainer/Dockerfile` dient dazu eine einheitliche Entwicklungsumgebung fuer alle Projektmitglieder zur Verfuegung zu stellen.

> [!IMPORTANT]
>
> - :white_check_mark: Zuerst sollte Docker-Desktop auf dem Computer installiert und gestartet sein!
> - :exclamation: Der Devcontainer brauch den Port 3000, wenn bereits ein Prozess auf dem Port gestartet ist kann der Container nicht gestartet werden.

#### Starten vom Devcontainer im Terminal

```bash
## Starten
docker compose up devcontainer -d
## Ein Terminal im Container starten
docker exec -it devcontainer /bin/bash
```

#### Starten vom DevContainer in VS-Code

- Link zur Doku auf der Modulwebseite
- Offizielle Doku: [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers)

### [`./local-template`](./local-template)

Der Ordner [`./local-template`](./local-template) beinhaltet Beispieldateien, wenn man im DevContainer mit Hilfe
der `aws-cli` und `kamal` direkt auf die AWS-Umgebung zugreifen moechte.

> [!IMPORTANT]
>
> **Optional**, das Modul kommt auch ohne den Ordner aus.

> [!CAUTION]
> In diesen Ordner muessen Credentials kopiert werden. Diese sollen **NIE** eingecheckt werden!
>
> - :exclamation: Der Ordner muss nach `local` umbenannt werden bevor die Credentials eingefuegt werden
> - :bulb: Der Ordner `local` befindet sich im `.gitignore` und wird nicht eingecheckt
