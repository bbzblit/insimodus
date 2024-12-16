### Welche verschiedenen Themen beinhaltete der Sprint?

Im aktuellen Sprint wurden verschiedene relevante Themen behandelt. Zunächst ging es um **Paketmanager**, wie zum Beispiel `npm` oder `gradle`, und deren Vorteile bei der Verwaltung von Abhängigkeiten. Dies wurde vertieft, indem auch Herausforderungen aus der Vergangenheit diskutiert wurden, als Abhängigkeiten noch manuell kopiert werden mussten. Hierbei wurde erkannt, wie wichtig standardisierte Paketmanager für effiziente Softwareentwicklung sind.

Ein weiteres Thema war **Docker** und die Erstellung von produktiven Dockerfiles sowie Docker-Compose-Dateien. Docker wurde eingeführt, um ein einheitliches System zu schaffen, sodass die Applikation unabhängig vom Gerät und Betriebssystem konsistent läuft. Besonders wichtig war hier die regelmässige Erstellung von Docker-Images.

In Woche 6 folgte der Schwerpunkt auf **CI/CD-Pipelines** und **Testautomatisierung**. Dabei ging es darum, den Prozess von Build, Test, Release und Deploy zu automatisieren und sicherzustellen, dass der Code fehlerfrei in die Produktionsumgebung übertragen wird. Die Verwendung von AWS und GitHub Actions war hierbei zentral.

In Woche 7 wurde der Fokus auf **Linting und Code-Formatierung** gelegt. Diese Massnahmen dienen dazu, die Lesbarkeit, Wartbarkeit und Qualität des Codes zu verbessern. Linting hilft ausserdem, Sicherheitsstandards einzuhalten, was besonders im Kontext von **DevSecOps** relevant ist.

Zusammengefasst waren die Hauptthemen:
- **Package Manager**: Verwendung von `npm` oder `gradle`
- **Docker**: Erstellung produktiver Dockerfiles
- **CI/CD**: Automatisierung von Build- und Deployment-Prozessen mit AWS und GitHub Actions
- **Testautomatisierung**: Erstellung erster Tests
- **Linting und Formatierung**: Verbesserung der Codequalität

---

### Sind diese Themen zum Zeitpunkt im Projekt gut gewählt, wenn ja, wieso?

Grundsätzlich waren die Themen gut gewählt, jedoch mit einigen Einschränkungen. **Docker** wurde genau zum richtigen Zeitpunkt behandelt, da es uns ermöglichte, unsere Applikation einfacher in AWS zu deployen. Der CI/CD-Schwerpunkt war ebenfalls passend, da wir in dieser Projektphase bereit waren, Automatisierungsschritte für Build und Deployment einzuführen.

Jedoch hätte das Thema **Formatierung und Linting** bereits früher behandelt werden können. Zu diesem Zeitpunkt hatten wir bereits viele Dateien geschrieben, die nachträglich angepasst werden mussten. Eine frühere Einführung hätte uns geholfen, konsistenter zu arbeiten. Man hätte eine erste Einführung zu Docker integrieren und Formatierung dort nur grob anschneiden können, um es später genauer zu behandeln.

---

### Was wurde in diesem Sprint erreicht?

In diesem Sprint wurden mehrere wichtige Meilensteine erreicht:
1. **Deployment in AWS**: Unsere Applikation wurde erfolgreich in der AWS-Umgebung deployt.
2. **Docker-Optimierung**: Wir haben produktive Dockerfiles erstellt und verfeinert.
3. **Erste Tests**: Kleine Tests wurden geschrieben, um erste Fehler frühzeitig zu erkennen.
4. **Funktionalitäten**: Erste Transaktionen konnten im Dashboard angezeigt werden.

Diese Fortschritte sind besonders bemerkenswert, da es auch technische Herausforderungen und zeitliche Engpässe gab.

---

### Was wurde in diesem Sprint nicht erreicht?

Trotz der Erfolge gab es auch Bereiche, in denen wir nicht wie geplant vorangekommen sind:
1. **Fertigstellung der Applikation**: Die Applikation wurde nicht vollständig fertiggestellt.
2. **Dashboard-Funktionalität**: Nur die Anzeige von Transaktionen wurde umgesetzt, während das Löschen von Transaktionen noch fehlt.
3. **Abgeschlossene Tickets**: Einige Tickets blieben offen, da Teammitglieder teilweise fehlten (Yannick fehlte zwei Wochen, Leon eine Woche).
4. **Langsame Fortschritte**: Durch personelle Engpässe und technische Schwierigkeiten sind wir langsamer vorangekommen als erwartet.

---

### Gruppendynamik

**Wie war die Zusammenarbeit im Team?**
Die Zusammenarbeit war insgesamt sehr gut. Wir haben die Aufgaben klar verteilt, sodass jeder gezielt an einem Thema arbeiten konnte. Das Team arbeitete strukturiert und effizient.

**Auf was achtet ihr bei der Kommunikation, damit diese konstruktiv ist?**
Wichtig war, Probleme direkt anzusprechen und gemeinsam nach Lösungen zu suchen. Fehler wurden nicht kritisiert, sondern im Team erklärt, damit jeder daraus lernen konnte. Die offene und respektvolle Kommunikation hat dazu beigetragen, dass wir effizient arbeiten konnten.

**Was ist uns besonders gut gelungen, worauf sind alle richtig stolz?**
Besonders stolz sind wir auf das erfolgreiche Deployment in AWS. In anderen Teams gab es viele Fehler und Herausforderungen beim Deployment, während wir diesen Schritt vergleichsweise reibungslos geschafft haben.

---

### Lernzuwachs

**Was kann ich nun mehr als vorher?**
Ich habe gelernt, wie wichtig **Linting** und **Code-Formatierung** für die Lesbarkeit und Wartbarkeit des Codes sind. Ausserdem kann ich nun die Applikation in AWS deployen, was ein grosser praktischer Fortschritt ist.

**Dieses Thema vom Sprint ist besonders relevant? Begründen Sie.**
Für mich ist **Linting und Formatierung** besonders relevant. Im Arbeitsalltag ist es oft schwierig, unformatierten Code zu lesen, was viel Zeit kostet. Linting verhindert ausserdem, dass Fehler unbemerkt in die Produktion gelangen.

**Was ist mir besonders gut gelungen, worauf bin ich richtig stolz?**
Ich bin besonders stolz darauf, dass wir uns konsequent an unsere Tickets und Epics gehalten haben. Durch klare Planung und Zielsetzung sind wir gut vorangekommen und haben die richtigen Prioritäten gesetzt.

---

### Lerneffekt

**Was sollte beibehalten werden?**
Die Einführung in neue Themen war hilfreich und gut strukturiert. Es sollte dabei bleiben, dass wir selbstständig arbeiten können, damit jeder sein Thema vertieft. Dadurch konnten wir effizienter vorankommen.

**Was sollte geändert werden?**
Einige Punkte könnten optimiert werden:
1. **Kürzere Vorträge**: Die Einführungen könnten kompakter gehalten werden, um schneller ins praktische Arbeiten einzusteigen.
2. **Docker-Einführung**: Das Erstellen des Dockerfiles hat viel Zeit gekostet, teilweise wegen unterschiedlicher Einstellungen. Es wäre hilfreich, hier weniger Zeit zu investieren oder eine simplere Lösung anzubieten, da Docker nicht immer bei jedem reibungslos funktioniert.

---
