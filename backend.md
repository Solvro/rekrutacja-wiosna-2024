# Backend

**Akcpetujemy zadania tylko w TypeScript/JavaScript!**
**Termin wykonania zadania:** **xxx**

### Opis projektu

Twoim zadaniem jest przygotowanie prostego narzędzia do zarządzania projektami IT z inteligentnym systemem przydziału zadań do dewelopera.
Przykłady interfejsów napisane w Typescript zostały umieszczone w folderze "interfaces" (zamieszczone interfejsy mogą, a nawet powinny zostać rozszerzone o dodatkowe pola).

### Minimalne funkcjonalności do zaimplementowania:

#### Utworzenie projektu i jego użytkowników.

- **POST** '/project'
- Endpoint powininen przyjmować podstawowe informacje o projekcie (nazwę oraz listę użytkowników).
- Powinna zostać sprawdzona poprawność danych (możesz użyć dowolnej biblioteki lub własnego walidatora).

#### Wyświetlenie projektu

- **GET** '/project/:projectId'
- Endpoint powininen zwracać pełne informacje na temat projektu.

#### Wyświetlenie projektów użytkownika

- **GET** '/project/user'
- Endpoint powininen zwracać pełne informacje na temat wszystkich projektów użytkownika.

#### Dodanie taska

- **POST** '/project/:projectId/task'
- Endpoint umożliwia dodanie taska dla projektu.
- Powinna zostać sprawdzona poprawność danych.
- Estymacja musi przyjmować wartość liczbową z ciągu Fibonacciego.
- **WAŻNE** Użytkownik w momencie dodawania taska może ale nie musi przypisać do niego użytkownika.

#### Edycja statusu taska

- **PUT** '/project/:projectId/task/:taskId'
- Endpoint umożliwia edycje statusu taska.

### Zaproponuj przydział tasków

- **POST** 'project/:projectId/assignment'
- Endpoint powinien stworzyć propozycję przydziału tasków na podstawie zaprojektowanego algorytmu.

### **ALGORYTM**

        Algorytm przydziału powinien dla każdej specjalizacji w projekcie równo przydzielić zadania
        do deweloperów na podstawie historycznych danych ukończonych tasków.
        Algorytm powinien uwzględnić czasy wykonania tasków o tej samej estymacji z przeszłości.
        WAŻNE Deweloper może wykonać tylko zadania w ramach swojej specjalizacji.

### Zaakceptuj przydział tasków

- **PUT** 'project/:projectId/assignment/:assigmentId'
- Endpoint powinien mieć opcję zaakceptowania lub usunięcia wcześniej wygenerowanej propozycji przydziału (bez ponownego uruchamiania algorytmu).

### Wymagania:

- zewnętrzna baza danych (dowolna)
- API zgodne z zasadami REST
- spójna architektura API

### Nice to have

- testy jednostkowe
- dokumentacja

**\*Pamiętaj, że załączone interfejsy są tylko przykładowymi schematami, nie bój się dodawać lub usuwać propertki.
**Masz jakieś pytania? Zgłoś się w issues!\*\*
