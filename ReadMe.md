# 🐾 Gabinet Weterynaryjny - Strona Wizytówka

Nowoczesna, w pełni responsywna strona internetowa typu "one-page" stworzona dla gabinetu weterynaryjnego. 

## 🚀 Zobacz ją na żywo! 
**[Link do strony](https://patrykhalacz.github.io/Gabinet-Weterynaryjny-Michal-Godziek/)**

## 📋 Cechy projektu

* **One-Page Design:** Cała zawartość dostępna na jednej stronie z płynną nawigacją (Smooth Scroll).
* **RWD (Responsive Web Design):** Strona wygląda świetnie na telefonach, tabletach i komputerach.
* **Czysty Kod:** HTML5, CSS3 (Flexbox/Grid) oraz minimalna ilość JavaScript (tylko 2kb).
* **Łatwa Personalizacja:** Kolorystyka oparta na zmiennych CSS (`:root`), co pozwala na szybką zmianę motywu.
* **Sekcje:**
    * Hero (Powitanie z Call-to-Action)
    * O nas (Wartości i misja)
    * Usługi (Szczegółowa oferta)
    * Zespół (Prezentacja lekarzy ze zdjęciami)
    * Kontakt (Dane teleadresowe + Mapa Google)

## 🛠️ Technologie

* **HTML5** - Semantyczna struktura.
* **CSS3** - Stylowanie bez użycia zewnętrznych frameworków (jak Bootstrap), co zapewnia lekkość.
* **JavaScript (Vanilla)** - Obsługa menu mobilnego.
* **Google Fonts** - Typografia (Montserrat & Open Sans).

## ⚙️ Jak uruchomić lokalnie?

1.  Sklonuj repozytorium:
    ```bash
    git clone https://github.com/PatrykHalacz/Gabinet-Weterynaryjny-Michal-Godziek
    ```
2.  Otwórz plik `index.html` w dowolnej przeglądarce internetowej.

## 📝 Instrukcja Edycji

### 1. Zmiana kolorów
W sekcji `<style>` w pliku `index.html` znajdź blok `:root`. Zmieniając te wartości, zmienisz kolorystykę całej strony:
```css
:root {
    --primary-color: #008080; /* Główny kolor (Morski) */
    --accent-color: #FF7F50;  /* Kolor przycisków */
}