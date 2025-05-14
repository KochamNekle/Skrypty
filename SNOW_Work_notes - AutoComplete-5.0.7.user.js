// ==UserScript==
// @name         SNOW_Work_notes - AutoComplete
// @version      5.0.7
// @description  Skrypt odpowiada za automatyczne wpisywanie komentarzy dla serwisu oraz sklepu w zgłoszeniu.
// @author       Krzysztof Zielonka
// @match        *://www.jm-hello.com/*
// @updateURL    https://raw.githubusercontent.com/KochamNekle/Skrypty/main/SNOW_Work_notes%20-%20AutoComplete-5.0.7.user.js
// @downloadURL  https://raw.githubusercontent.com/KochamNekle/Skrypty/main/SNOW_Work_notes%20-%20AutoComplete-5.0.7.user.js


// ==/UserScript==

(function() {
    'use strict';

    // test
    var messages = [
        "Proszę o diagnostykę i skuteczną naprawę.",
        "Proszę o skuteczną diagnostykę i usunięcie awarii",
        "Proszę o przywrócenie funkcjonalności",
        "Proszę o naprawę.",
        "Proszę o przeprowadzenie szczegółowej diagnostyki oraz kompleksowej naprawy urządzenia.",
        "Proszę o dokładne zdiagnozowanie problemu i skuteczne usunięcie awarii, aby przywrócić pełną funkcjonalność.",
        "Proszę o przywrócenie pełnej sprawności urządzenia poprzez dokładną diagnostykę i naprawę.",
        "Proszę o przeprowadzenie szczegółowej diagnostyki i usunięcie problemu, aby urządzenie działało poprawnie.",
        "Proszę o przeprowadzenie diagnostyki i naprawy, aby urządzenie działało zgodnie z oczekiwaniami.",
        "Proszę o dokładne zdiagnozowanie problemu i jego skuteczne usunięcie, aby przywrócić pełną funkcjonalność urządzenia.",
        "Proszę o przeprowadzenie kompleksowej diagnostyki i naprawy, aby urządzenie działało bez zakłóceń.",
        "Proszę o przeprowadzenie szczegółowej diagnostyki i usunięcie problemu, aby urządzenie działało poprawnie.",
        "Proszę o dokładne zdiagnozowanie problemu i jego skuteczne usunięcie, aby przywrócić pełną funkcjonalność urządzenia.",
        "Proszę o przeprowadzenie kompleksowej diagnostyki i naprawy, aby urządzenie działało bez zakłóceń.",
        "Proszę o dokładną diagnostykę i naprawę.",
        "Proszę o skuteczne zdiagnozowanie i usunięcie problemu.",
        "Proszę o przywrócenie pełnej funkcjonalności.",
        "Proszę o naprawienie usterki.",
        "Proszę o przeprowadzenie diagnostyki i naprawę.",
        "Proszę o przywrócenie działania urządzenia.",
        "Proszę o rozwiązanie problemu.",
        "Proszę o dokładną diagnostykę i usunięcie usterki.",
        "Proszę o skuteczne przywrócenie funkcjonalności.",
        "Proszę o diagnostykę i naprawę.",
        "Proszę o zdiagnozowanie i naprawę.",
        "Proszę o przywrócenie pełnej sprawności.",
        "Proszę o usunięcie awarii.",
        "Proszę o przeprowadzenie naprawy.",
        "Proszę o skuteczne usunięcie awarii."
    ];

    var infoPon = [
        "Szanowni Państwo, Wasze zgłoszenie zostało przekazane do naszego serwisu zewnętrznego i jest w trakcie dalszej analizy. Problem może zostać rozwiązany zdalnie lub niezbędna będzie wizyta lokalnego serwisanta. Dziękujemy za cierpliwość.",
        "Szanowni Państwo, Państwa zgłoszenie zostało przekazane do naszego serwisu zewnętrznego i jest w trakcie dalszej analizy. Problem może zostać rozwiązany zdalnie lub niezbędna będzie wizyta lokalnego serwisanta. Dziękujemy za cierpliwość."
    ];

    var infoRD = [
        "Szanowni Państwo, Wasze zgłoszenie zostało przekazane do działu programistów serwisu IT i jest w trakcie dalszej analizy. Problem zostanie rozwiązany zdalnie. Dziękujemy za cierpliwość."
    ];

    var infoMD = [
        "Szanowni Państwo, Wasze zgłoszenie zostało przekazane do zespołu MasterData/działu danych podstawowych i jest w trakcie dalszej analizy. Problem zostanie rozwiązany zdalnie. Dziękujemy za cierpliwość."
    ];

    var infoGV = [
        "Szanowni Państwo, Wasze zgłoszenie zostało przekazane do zespołu wsparcia Glovo i jest w trakcie dalszej analizy. Problem zostanie rozwiązany zdalnie. Dziękujemy za cierpliwość."
    ];

    var infoDLW = [
         "Szanowni Państwo, Wasze zgłoszenie zostało przekazane do kolejnej linii wsparcia w dziale IT JMP i jest w trakcie dalszej analizy. Dziękujemy za cierpliwość."
     ];

    var messagesHebeMMOdblok = [
        "Odblokowanie PK wystawione - za godzinkę do odbioru przez RSTD - prosimy przed uruchomieniem transmisji wyjść z M3 Po zrobieniu PK - proszę o info zwrotne - zablokujemy ponownie"
     ];

    var messagesHebeMM = [
        "Proszę o weryfikację i decyzję.",
        "Proszę o decyzję."
     ];

    var messagesSCO = [
        "Proszę o skuteczną diagnostykę i naprawę kasy SCO.",
        "Proszę o skuteczną naprawę kasy SCO.",
        "Proszę o skuteczną diagnostykę i przywrócenie funkcjonalności kasy SCO.",
        "Proszę o diagnostykę i skuteczną naprawę kasy SCO.",
        "Proszę o przywrócenie funkcjonalności kasy SCO.",
        "Proszę o skuteczną diagnozę i przywrócenie działania kasy SCO."
     ];

    var messagesSCOPinpad = [
        "Proszę o skuteczną diagnostykę i naprawę pinpada.",
        "Proszę o skuteczną naprawę pinpada.",
        "Proszę o skuteczną diagnostykę i przywrócenie funkcjonalności pinpada.",
        "Proszę o diagnostykę i skuteczną naprawę pinpada.",
        "Proszę o przywrócenie funkcjonalności pinpada.",
        "Proszę o skuteczną diagnozę i przywrócenie działania pinpada."
    ];

    var messagesSCOW = [
        "Poproszę o skuteczną diagnostykę i naprawę [zawieszającej się wagi]  kasy SCO.",
        "Proszę o zbadanie i usunięcie usterki wagi kasy samoobsługowej, która nie działa prawidłowo.",
        "Zgłaszam potrzebę diagnostyki i serwisu wagi, która często się zawiesza.",
        "Potrzebujemy pomocy w rozwiązaniu problemu z wagi kasy SCO, która ma tendencję do zacinania się.",
        "Oczekujemy na interwencję techniczną w celu naprawy wagi w kasie SCO, która przestaje reagować.",
        "Proszę o wykonanie diagnostyki i naprawy wagi w kasie samoobsługowej, która nie funkcjonuje płynnie."
        ];

    var messagesDF = [
        "Proszę o skuteczną diagnostykę i naprawę drukarki fiskalnej.",
        "Proszę o naprawę drukarki fiskalnej.",
        "Proszę o skuteczną naprawę drukarki fiskalnej.",
        "Proszę o usunięcie awarii drukarki fiskalnej.",
        "Proszę o dokładną diagnostykę i naprawę drukarki fiskalnej.",
        "Proszę o serwis drukarki fiskalnej.",
        "Proszę o kompleksową naprawę drukarki fiskalnej.",
        "Proszę o rozwiązanie problemu z drukarką fiskalną."
     ];

    var messagesRD = [
        "Proszę o skuteczną diagnostykę i usunięcie awarii.",
        "Proszę o dokładną diagnostykę i naprawę usterki.",
        "Proszę o skuteczne zdiagnozowanie i usunięcie problemu.",
        "Proszę o precyzyjną diagnostykę i naprawę awarii.",
        "Proszę o profesjonalną diagnostykę i usunięcie usterki.",
        "Proszę o dokładne zdiagnozowanie i naprawę problemu."
     ];

    var messagesIND = [
        "Proszę o opracowanie.",
        "Proszę o opracowanie indeksu.",
        "Prośba o opracowanie."
     ];

    var messagesDRUM = [
        "Możliwość wydruku zachowana.",
        "Zachowana możliwość wydruku.",
        "Wydruk etykiet jest możliwy."
     ];

    var messagesDRUJ = [
        "Zweryfikowano jakość wydruku.",
        "Jakość wydruku zweryfikowana.",
        "Wydruk został zweryfikowany.",
        "Zweryfikowana jakość wydruku."
     ];
    var messagerwsparO = [
        "Proszę o sprawdzenie czy podany indeks jest w promocji.",
        "Proszę o sprawdzenie czy indeks jest objęty promocją.",
        "Proszę o weryfikację, czy podany indeks jest objęty promocją.",
        "Czy ten indeks jest w promocji.",
        "Proszę o weryfikację, czy ten indeks jest w promocji.",
        "Czy indeks w podanym sklpie jest objety promocją?"
        ];

    var messagesOHR = [
        "W imieniu sklepu - Proszę o pomoc.",
        "W imieniu sklepu - proszę o pomoc w tym temacie.",
        "Prośba o wsparcie",
        "W imieniu sklepu - Proszę o wsparcie.",
        "W imieniu sklepu - Proszę o pomoc w tej sprawie.",
        "Proszę o wsparcie"
     ];

    var messagesGlov = [
        "Proszę o dodanie produktu w aplikacji.",
        "Proszę o dodanie produktu."
        ];

    var messagessprz602 = [
        "Nowe dane - 602 - Sprzedaż w M3 jest zgodna z oczekiwaniami CUW - brak poprawek w M3 ze strony IT.",
     ];

    var messagessprz615 = [
        "Nowe dane – 615 - sprzedaż uzgodniona - paragony dograne i aktualnie sprzedaż w M3 jest zgodna z oczekiwaniami CUW.",
     ];

    var messagessprz_nowe_dane = [
        "Wygenerowano nowe dane, proszę o wczytanie",
     ];

    var messagessprz_redmine = [
        "Błąd podczas parsowania logów przy 615 \nProsimy o usunięcie błędu i uzgodnienie sprzedaży - musimy zachować zgodność z RD \n\nPo naprawie błędu i uzgodnieniu sprzedaży prosimy NIE ZAMYKAĆ zgłoszenia, tylko przekazać na grupę G_SNOW_BD_ITStoreSupport",
     ];

    var messagessprz_ej = [
        "K -  nie przesyła do systemów centralnych Raportów Fiskalnych i innych danych.Proszę o zweryfikowanie i podłączenie sprzętu ( kasy i drukarki ) do obwodu gwarantowanego bo kasa jest wyłączona w nocy. \n \nPo podłączeniu prosimy NIE ZAMYKAĆ zgłoszenia, tylko przekazać na grupę G_SNOW_BD_ITStoreSupport",
     ];

    var messagessprz_RD = [
        "Proszę o dostarczenie danych o które prosi Księgowość.",
     ];

    var infospz = [
        ""
    ];

    function insertText(text) {
        var textarea = document.getElementById("activity-stream-work_notes-textarea") || document.getElementById("activity-stream-textarea");
        if (textarea) {
            textarea.focus();
            document.execCommand('insertText', false, text);
        }
    }

    function insertText2(text) {
        var textarea2 = document.getElementById("activity-stream-comments-textarea")
        if (textarea2) {
            textarea2.focus();
            document.execCommand('insertText', false, text);
        }
    }

    function getRandomMessage(messagesArray) {
        return messagesArray[Math.floor(Math.random() * messagesArray.length)];
    }
    function getRandomMessage2(infoArray) {
        return infoArray[Math.floor(Math.random() * infoArray.length)];
    }

    function createButton(buttonText, messagesArray, infoArray, buttonId) {
        var button = document.createElement("button");
        button.innerHTML = buttonText;
        button.style.marginBottom = "10px";
        button.style.marginRight = "10px";
        button.id = buttonId;
        button.onclick = function(event) {
            event.preventDefault();
            insertText(getRandomMessage(messagesArray));
            insertText2(getRandomMessage2(infoArray));
            document.getElementById('lookup.incident.assignment_group').click();
        };
        return button;
    }

    function addKeyboardShortcuts(buttons) {
        document.addEventListener('keydown', function(event) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                if (event.key === '1' && buttons[0]) {
                    event.preventDefault();
                    buttons[0].click();
                } else if (event.key === '2' && buttons[1]) {
                    event.preventDefault();
                    buttons[1].click();
                } else if (event.key === '3' && buttons[2]) {
                    event.preventDefault();
                    buttons[2].click();
                } else if (event.key === '4' && buttons[3]) {
                    event.preventDefault();
                    buttons[2].click();
                } else if (event.key === '5' && buttons[4]) {
                    event.preventDefault();
                    buttons[2].click();
                }
            }
        });
    }

    var container = document.querySelector(".pull-left");
    if (container) {
        var shortDescriptionInput = document.getElementById("incident.short_description");
        if (shortDescriptionInput) {
            var buttons = [];
            if (shortDescriptionInput.value.includes("Kasa samoobsługowa")) {
                buttons.push(createButton("SCO", messagesSCO, infoPon, "button2"));
                buttons.push(createButton("SCO - waga", messagesSCOW, infoPon, "button3"));
                buttons.push(createButton("Drukarka Fiskalna", messagesDF, infoPon, "button4"));
                buttons.push(createButton("Pinpad", messagesSCOPinpad, infoPon, "button5"));
            }
            if (shortDescriptionInput.value.includes("Kasa liniowa") || shortDescriptionInput.value.includes("Kasa namiotowa")) {
                buttons.push(createButton("Proszę o naprawę", messages, infoPon, "button1"));
                buttons.push(createButton("Drukarka Fiskalna", messagesDF, infoPon, "button4"));
                buttons.push(createButton("Redmine", messagesRD, infoRD, "button5"));
                buttons.push(createButton("Pinpad", messagesSCOPinpad, infoPon, "button5"));
            }
            if (shortDescriptionInput.value.includes("Lada tradycyjna") || shortDescriptionInput.value.includes("Kolektor RF") || shortDescriptionInput.value.includes("Glovo - Kolektor") || shortDescriptionInput.value.includes("System nagłośnienia") || shortDescriptionInput.value.includes("Zasilanie") || shortDescriptionInput.value.includes("Sieć") || shortDescriptionInput.value.includes("Pozostałe urządzenia IT")) {
                buttons.push(createButton("Proszę o naprawę", messages, infoPon, "button1"));
            }
            if (shortDescriptionInput.value.includes("Komputer kierownika sklepu") || shortDescriptionInput.value.includes("Aplikacja Market") || shortDescriptionInput.value.includes("Oracle")) {
                buttons.push(createButton("Proszę o naprawę", messages, infoPon, "button1"));
                buttons.push(createButton("Redmine", messagesRD, infoRD, "button5"));
            }
            if (shortDescriptionInput.value.includes("Operacja (") || shortDescriptionInput.value.includes("Lada tradycyjna")) {
                buttons.push(createButton("Opracowanie", messagesIND, infoMD, "button6"));
            }
            if (shortDescriptionInput.value.includes("Komputer kierownika sklepu - Drukarka biurowa")) {
                buttons.push(createButton("Możliwość wydruku", messagesDRUM, infospz, "button7"));
                buttons.push(createButton("Jakość wydruku", messagesDRUJ, infospz, "button8"));
            }
            if (shortDescriptionInput.value.includes("Aplikacje i programy") || shortDescriptionInput.value.includes("Kolektor RF") || shortDescriptionInput.value.includes("Operacja") || shortDescriptionInput.value.includes("Elektroniczne etykiety cenowe") || shortDescriptionInput.value.includes("Glovo") || shortDescriptionInput.value.includes("Telefon")) {
                buttons.push(createButton("Wsparcie", messagesOHR, infoDLW, "button9"));
            }
            if (shortDescriptionInput.value.includes("Operacja")) {
                buttons.push(createButton("Promocja", messagerwsparO, infoDLW, "button10"));
            }
             if (shortDescriptionInput.value.includes("Glovo - Produkty")) {
                buttons.push(createButton("Glovo", messagesGlov, infoGV, "button11"));
            }
             if (shortDescriptionInput.value.includes("Brak dokumentu MM z DC") || shortDescriptionInput.value.includes("Zablokowany dokument MM R -> R") || shortDescriptionInput.value.includes("Zablokowany dokument MM DC -> R") || shortDescriptionInput.value.includes("Ponowne przesłanie zamówienia od dostawcy") || shortDescriptionInput.value.includes("Anulowanie dokumentu MM") || shortDescriptionInput.value.includes("Odblokowanie dokumentu likwidacyjnego Lxxx") || shortDescriptionInput.value.includes("Błąd przy wczytywaniu MM")) {
                buttons.push(createButton("MM - decyzja", messagesHebeMM, infoDLW, "button12"));
                buttons.push(createButton("MM - odblokowanie", messagesHebeMMOdblok, infoDLW, "button13"));
            }
            if (shortDescriptionInput.value.includes("Uzgodnienia Sprzedażowe")) {
                buttons.push(createButton("602", messagessprz602, infospz, "button2"));
                buttons.push(createButton("615", messagessprz615, infospz, "button3"));
                buttons.push(createButton("Nowe Dane", messagessprz_nowe_dane, infospz, "button4"));
                buttons.push(createButton("Redmine - sprzedaż", messagessprz_redmine, infospz, "button5"));
                buttons.push(createButton("SL - EJ", messagessprz_ej, infospz, "button6"));
                buttons.push(createButton("Pozyskanie RD", messagessprz_RD, infospz, "button7"));
            }

            buttons.forEach(function(button) {
                container.appendChild(button);
            });

            addKeyboardShortcuts(buttons);
        }
    }
})();
