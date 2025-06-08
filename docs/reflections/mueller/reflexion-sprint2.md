# Müller - Reflexion Sprint 2

> **Disclaimer:** Ich war aufgrund von Abwesenheit in den Wochen 6 und 7 nicht im Unterricht anwesend. Ich habe alle Inhalte zu Hause nachgearbeitet. Allerdings kann es gut sein, dass zusätzliche Themen behandelt wurden oder auch gewisse Themen, die nur im Unterricht erwähnt wurden, von mir nicht behandelt wurden. Meine Reflexion bezieht sich nur auf die Inhalte dieser Woche, die ich selbst zu Hause erarbeitet habe.

## Welche verschiedenen Themen behandelten wir bis jetzt?
Wir haben unter anderem behandelt, wie wir mittels automatisierter Tests unseren Code auf Bugs überprüfen können. Es gibt verschiedene Arten von Tests. Zum einen gibt es die Unit-Tests. Ein Unit-Test testet die kleinstmögliche Einheit, zum Beispiel eine einzelne Funktion oder in manchen Fällen auch einen einzelnen API-Endpunkt.
Bei Unit-Tests wird eine bestimmte Methode mittels bekannter Eingaben auf bekannte Ergebnisse überprüft. Dabei ist es oftmals Good Practice, Eingaben zu verwenden, die kurz vor einem Edgecase liegen.
Als Beispiel: Wenn eine Funktion Zahlen bis maximal  2³² - 1  akzeptiert, macht es am meisten Sinn, einen Unit-Test zu erstellen, der mit einer Zahl von 2³² - 1 und einer Zahl von  2³² testet. Dadurch kann man verifizieren, dass die Edge Cases berücksichtigt wurden.
Mit Unit-Tests erhält man schnelles Feedback und kann dadurch Bugs relativ frühzeitig erkennen. Aufgrund der Eigenschaft, dass Unit-Tests jedoch nur eine einzelne Funktion testen, geht oft der Kontext verloren. Dadurch kann nicht verifiziert werden, ob die Schnittstellen zwischen den einzelnen Funktionen fehlerfrei sind.

Eine weitere Testform, die wir behandelt haben, sind Integrationstests. Diese zielen darauf ab, die Schnittstellen zwischen den einzelnen Funktionen zu überprüfen. Im Gegensatz zu Unit-Tests sind Integrationstests oft komplexer, da sie beispielsweise das Zusammenspiel 
zwischen Frontend und Backend testen.

Ausserdem haben wir behandelt, was ein Linter und ein Formatierer sind und wie man sie nutzen kann, um sauberen Code zu schreiben. Der Fokus lag dabei insbesondere auf ESLint, da wir aktuell eine Web-App entwickeln.

In diesem Sprint haben wir ausserdem erstmals unser Projekt aufgesetzt und das Dockerfile an unsere Konfiguration angepasst. Dabei konnten wir bereits erste Features im Projekt implementieren, wie beispielsweise eine Dashboard-Funktion.

## Sind diese Themen zum Zeitpunkt im Projekt gut gewählt, wenn ja, wieso?

Grundsätzlich würde ich sagen, dass die Themen gut zu DevOps passen und definitiv relevant sind. Allerdings denke ich, dass es sinnvoll wäre, den Teil über automatisiertes Testing etwas kürzer zu halten, da wir dieses Thema bereits in einem anderen Modul (welches sich ausschliesslich mit Applikationstesting befasst) ausführlich behandelt haben.

Dafür habe ich jedoch einen Themenblock zur Deployment-Infrastruktur vermisst (nicht nur mittels Docker sondern vielleicht auch noch eine weitere Technologie wie z.B. Terraform). Meiner Meinung nach ist das Deployen von Software ein zentraler Bestandteil von DevOps und extrem wichtig für den Entwicklungsprozess. Das lokale Entwickeln von Software ist meist einfach, aber eine der grössten Herausforderungen liegt darin, die Software so zu gestalten, dass sie ideal auf einem Server läuft.
Ein zusätzlicher Block über Infrastruktur könnte hier meiner Meinung nach gut ergänzt werden. Abgesehen davon fand ich die Themenauswahl jedoch sehr gelungen.


## Dieses Thema vom Sprint ist besonders relevant? Begründen Sie.
Linting!. Dieses Thema wurde bisher, soweit ich weiss, in keinem anderen Schulmodul behandelt. Ich finde jedoch, dass es ein extrem wichtiges Thema ist. Anfangs dachte ich, dass es beim Linting lediglich um Syntax und das Einhalten von Formatierungen geht. Doch die praktische Anwendung hat mir gezeigt, dass Linting auch hervorragend dazu geeignet ist, Probleme zu erkennen.

Viele meiner Projekte sind in Python. Da Python nicht kompiliert ist und keine Typen erzwingt, ist das Risiko von Laufzeitfehlern hoch. Automatisierte Tests können zwar einige dieser Bugs aufdecken, aber bei weitem nicht alle. Ein einfacher Tippfehler kann bereits dazu führen, dass ein schwer auffindbarer Bug entsteht. Ein typisches Beispiel: Man hat eine Liste namens `items` und iteriert über die Liste mit der Variablen `item`. Innerhalb der Schleife möchte man eine bestimmte Property auslesen, greift aber versehentlich auf `items` statt auf `item` zu.

Linting kann die meisten solcher Bugs finden und so potenziell problematische Fehler frühzeitig erkennen. Daher halte ich Linting für ein extrem wichtiges Thema, das von Entwicklern oft vernachlässigt wird. Und das, obwohl es sehr schnell integriert und konfiguriert werden kann.

## Was kann ich nun mehr als vorher?
Ich kannte `DerLev/eslint-annotations@v2` vorher nicht. Zwar war mir bewusst, dass so etwas technisch möglich ist, aber ich habe nie darüber nachgedacht, den Linter direkt in eine MR zu integrieren. Bisher kannte ich es eher so, dass der Linter die Pipeline zum Absturz bringt und man anschliessend die Logs der Pipeline auslesen musste, um die Ursache des Problems zu finden.
Ich bin mir aktuell noch unsicher, was ich davon halte, dass der Linter direkt Kommentare in der MR erstellt. Einerseits finde ich es ein praktisches Feature, da man so direkt eine Übersicht über alle Fehler erhält. Andererseits könnte es in manchen Fällen unnötig und überflüssig sein.

Linting-Fehler sind oft extrem einfach zu beheben, in vielen Fällen sogar vollautomatisch. Wenn bei meinen Commits die Linting-Pipeline fehlschlägt, liegt das meistens daran, dass ich vergessen habe, den Linter auszuführen, oder dass ich nach dem Linten noch eine kleine Änderung vorgenommen habe – zum Beispiel eine zusätzliche Leerzeile – die dann wieder einen Fehler auslöst. In solchen Fällen könnte die direkte Integration des Linters in die MR überflüssig sein und sogar dazu führen, dass wichtige Kommentare von anderen Entwicklern in der Flut von autmatisierten Linter Kommentaren untergehen.

Dennoch werde ich diese Funktionalität in Zukunft weiter ausprobieren, um zu sehen, ob sie für meine Projekte einen Mehrwert bietet oder 
nicht.


## Wie war die Zusammenarbeit im Team?

Ich denke, die Zusammenarbeit war im Allgemeinen relativ gut. Da ich 2 von 3 Wochen nicht anwesend war, habe ich natürlich nicht alles mitbekommen. Allerdings habe ich durch kleine Updates ausserhalb der Schulzeit dennoch mitbekommen, was in der Schule behandelt wurde und woran die anderen gearbeitet haben.


## Auf was achtet Ihr bei der Kommunikation, damit diese Konstruktiv ist?

Hier hat sich eigentlich im Vergleich zum Letzen Srpint nicht viel veränder. Wir versuchen weiterhin einen guten Umgangston miteinander zu pflegen und uns konstruktives Feedback zu geben.

## Was ist uns besonders gut gelungen, worauf sind alle richtig stolz?

Ich denke, besonders gut ist uns das Reviewen der MR gelungen. Wir konnten konstruktives Feedback geben und dabei einige Bugs entdecken. Wir haben uns Mühe gegeben, dass sich alle am Review Prozess beteiligen. Dadurch konnten alle Teammitglieder einen besseren Überblick über die Codebasis erhalten, und zudem haben wir das Risiko von Bugs im Code reduziert.


## Was wurde in diesem Sprint erreicht?

Wir haben bereits erste Features implementiert, wie beispielsweise  das Anzeigen bestehender Transaktionen. Alle Daten werden dabei lokal im Browser des Nutzers gespeichert.
Ausserdem haben wir ESLint und Vitest integriert und so konfiguriert, dass sie automatisch mithilfe von GitHub Actions ausgeführt werden.
Zudem konnten wir einen voll automatischen deploymentprocess implementieren, welcher ein docker image baut und dieses auf aws deployt.


## Was wurde in diesem Sprint nicht erreicht?
Einige der geplanten Issues konnten wir leider nicht umsetzen. Dazu zählen beispielsweise das Löschen von Transaktionen und das Erstellen von Diagramen. Hauptgrund dafür waren einige Absenzen im Team, wodurch wir langsamer vorangekommen sind als ursprünglich geplant.


## Was ist mir besonders gut gelungen, worauf bin ich richtig stolz.
Ich denke, dass ich die Themen, die ich aufgrund von Absenzen verpasst habe, gut nachbehandeln konnte. Ich bin der Meinung, dass ich alles, was in dieser Zeit behandelt wurde, grundsätzlich verstanden habe und es in der Zukunft gut anwenden kann.


## Was sollte beibehalten werden?
Meiner Meinung nach sollten wir beibehalten, wie sorgfältig wir die MRs geprüft haben. Wir haben uns viel Mühe gegeben, konstruktives Feedback in die MRs zu schreiben. Dabei konnten wir auch einige Bugs finden und beheben. Dies wäre nicht möglich gewesen, wenn wir die MRs nicht so gründlich bearbeitet hätten.

## Was sollte geändert werden?
Ich denke, die Kommunikation bei Absenzen könnte noch verbessert werden. Zwar haben wir uns kurz ausgetauscht, um zu besprechen, was passiert ist, allerdings denke ich, dass dies noch optimiert werden könnte. Wir haben im Vorhinein keinen kurzen Termin vereinbart, um alles zu besprechen, sondern das eher nebenbei gemacht. Ich glaube, es wäre hilfreicher gewesen, wenn wir uns beispielsweise am Mittwoch danach kurz zusammengesetzt und alles besprochen hätten, inklusive der nächsten Schritte.