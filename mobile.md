# Mobile

Zadaniem jest stworzenie aplikacji mobilnej do zarządzania listami zakupów: `Solvro BasketBuddy`.  
Termin wykonania zadania: `15.04.2024`.
  
  
Wszędzie gdzie to możliwe, funkcjonalności powinny być tworzone w integracji z `REST-owym API`. 
  - Root URL naszego `REST API` do celów zadania: https://basket-buddy-solvro-api.kowalinski.dev/api/v1/
  - **`Dokumentacja`** naszego `API`: https://basket-buddy-solvro-api.kowalinski.dev/api/v1/docs  

  Dokumentacja jest w Swaggerze i umożliwia testowe wysyłanie requestów.

W przypadku problemów z `API`, pytań do wymagań zadania lub dowolnie innych pytań, zachęcamy do ich swobodnego zadawania, poprzez utworzenie `issue` lub na `wiadomości prywatnej`.

Jeśli uważasz, że możliwości udostępnionego `API` są niewystarczające do wymaganych przez nas lub zaplanowanych przez ciebie funkcjonalności, zapraszamy do `konsultacji/pytania`, ale dopuszczamy też stworzenie swojego `API` - musi ono jednak umożliwiać na zintegrowanie conajmniej wszystkich wymaganych poniżej funkcjonalności aplikacji.

Z naszych testów wynika jednak, że API powinno dostarczyć wszystkich potrzebnych funkcji do zaimplementowania wymaganych i mile widzianych funkcjonalności. Jest ono jednak minimalistyczne i w wielu miejscach, przenosi ciężar `logiki biznesowej` na stronę aplikacji mobilnej.

Jeśli nie uda Ci się zrealizować wszystkich wymagań, nie przejmuj się - zwróć uwagę na jakość kodu i wyślij nam zadanie do sprawdzenia.



# Wymagane funkcjonalności aplikacji (must-have features)


1. Rejestracja nowego użytkownika
	-	email + password + password
2. Logowanie na utworzone wcześniej konto
	-	email + password
4. Tworzenie nowych list zakupów
	-	O dowolnej nazwie np. `Lista do Biedronki`, `Żappkolista`
5. Edytowanie nazw list zakupów
6. Dodawanie pozycji zakupowych do wybranej listy zakupów
 	- Pozycja zakupowa to produkt oraz ilość tego produktu na liście (produkt + liczba + jednostka)
	-	Dla uproszczenia, możliwe produkty są do wyboru z pośród listy możliwych produktów, pobieranej z `REST API`
	-	Podczas wybierania nowych produktów do dodania do listy, powinna być jakaś możliwość `wyszukiwania`/`filtrowania`/`zawężania` produktów, poprzez wpisywania jej nazwy w polu wyszukiwania.

	
7. Przeglądanie wszystkich list zakupów z dodanymi produktami
	-	Przede wszystkim, musi być jasno widoczne, które produkty są na której liście i w jakiej ilości
	-	Może to być zaprezentowane interfejsowo w dowolny sposób. Na przykład:
	    -	za pomocą dwóch osobnych poziomów widoków: wpierw widoku listy wszystkich list zakupów, a po wyborze, widoku szczegółów wybranej listy z przypisanymi produktami
	    - jednego wspólnego widoku z produktami do kupienia, podzielonymi na poszczególne listy zakupów. (Mile widziane `zwijanie` list zakupów)
	    - dowolnie inny czytelny i funkcjonalny interfejs, z widocznymi pozycjami zakupowymi, podzielonymi na listy.
		
8. `Zaznaczanie` / `Odchaczanie` / `Odznaczanie` / `Przesuwanie` pozycji z listy, które zostały już kupione
	-	Pozycje kupione, powinny się różnić wizualnie od pozycji do kupienia, ale nadal powinny być widoczne na liście zakupów.
9. Usuwanie produktów z listy (`trwałe`)
10. Usuwanie list zakupów, ale tylko tych które są `puste`, czyli nie mają produktów, lub wszystkie przypisane produkty są już zaznaczone jako `kupione`. 

# Mile widziane funkcjonalności (nice-to-have)
Poniższe funkcjonalności, nie są wymagane, ale są mile widziane i jeśli zostanie Ci czas, zachęcamy do ich zaimplementowania (lub dowolnie wybranej części z nich). 

1. Każda lista przy tworzeniu, ma do wyboru swój `kolor`, przypisany do danej listy i jest to potem w dowolny sposób widoczne w interfejsie.
2. Edytowanie `koloru` listy
3. Każda lista przy tworzeniu, ma do wyboru swoje `emoji`, przypisane do listy i widoczne potem przy nazwie.
4. Edytowanie tego `emoji`
5. Zamiast trwałego usuwania `pustych lub skończonych list` (zamiast lub dodatkowo), możliwość `zakończenia` pustej listy, która przenosi listę do widoku `zakończonych` / `ostatnio używanych` list
	-	Widok `zakończonych` list, które można przeglądać (ale nie edytować)
	-	Opcja `użyj ponownie`, która przywraca zakończoną listę, przenosi ją z powrotem do głównego widoku list (usuwa z widoku list `zakończonych`) oraz z powrotem `odchacza` wszystkie jej produkty jako jeszcze nie kupione.
6. Ikony przy każdym produkcie, związane z kategorią produktu np. `Nabiał`, `Pieczywo`, `Warzywa` (Kategorie i produkty są dostępna na naszym `REST API`)


W razie pytań lub wątpliwości co do wymagań, albo możliwości `API`, zapraszamy do kontaktu. Wymagania w większości dotyczą tylko funkcjonalności i wasze aplikacje mogą zapewnić te funkcjonalności za pomocą dowolnie wymyślonego przez was interfejsu. Interfejs może być w języku Polskim lub Angielskim (można wybrać wedle preferencji) i przede wszystkim, powinien być jasny i intuicyjny. Oceniana jest też struktura, jakość i czytelność kodu.

Jeśli nie uda Ci się zrealizować wszystkich wymagań, nie przejmuj się - zwróć uwagę na jakość kodu i wyślij nam zadanie do sprawdzenia.

## **Powodzenia!**
Zachęcamy każdego do spróbowania swoich sił i życzymy miłej zabawy.
