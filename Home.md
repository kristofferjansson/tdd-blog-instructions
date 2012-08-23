## Instruktioner

### Uppgift: Att skapa en enkel bloggmotor

Strunta i all användarhantering etc, for now

##### 1. Visa bloggen
Givet att det finns ett blogginlägg i databasen ska en användare kunna gå in på indexsidan och se ett blogginläget. Inlägget ska bestå av en titel och en text.

##### 2. Skapa ett nytt blogginlägg
En användare ska kunna skapa ett nytt inlägg med titel och text. När inlägget är skapat ska det gå att se på indexsidan. 

##### 2b. Blogginläggskrav
Titeln och texten ska vara obligatorisk och texten får inte vara kortare än 50 tecken. Om de är det ska man inte kunna spara och ett felmeddelande ska visas.

##### 3. Redigera ett blogginlägg
En användare ska kunna redigera ett befintligt inlägg. Titeln och texten ska fortfarande vara obligatorisk och texten får inte heller nu vara kortare än 50 tecken. När användaren har uppdaterat inlägget ska det gå att se förändringarna på indexsidan.

##### 4. Ta bort ett blogginlägg
En användare ska i redigera-vyn kunna klicka på en knapp "ta bort". Blogginlägget ska då inte visas på indexsidan.

### Bonus: Kommentarer

##### 1. Lägg till en kommentar till ett blogginlägg
En användare ska kunna klicka sig in på ett blogginlägg. I den vyn ska det gå att lämna en kommentar i ett textfält + genom att trycka på spara. När kommentaren är lämnad ska den synas på blogginläggssidan (show). På indexsidan ska antalet kommentarer synas. Det är inte tillåtet att lämna tomma kommentarer.

##### 2.Kräv email av användaren
För att en användare ska få lämna en kommentar krävs att den anger en giltig emailadress. Annars ska ett felmeddelande visas.

##### 3. En användare får endast lämna en kommentar per inlägg
Se till att email är unik för varje kommentar (per blogginlägg) 

### Bonus 2: Kategorier

##### 1. Varje blogginlägg har en kategori
När en användare skriver ett blogginlägg kan den välja en kategori från en dropdown. Kategorierna måste vara en av de befintliga kategorierna (t.ex. `%w{ fun education music film news misc }`) Kategorien ska vara obligatorisk.

##### 2. En användare kan redigera kategorier
En användare kan lägga till och ta bort kategorier i en speciellt vy. Det går även att byta namn på befintliga kategorier.

### Links

* https://github.com/theneubeck/tdd_blog/wiki/Syntax
* https://github.com/jnicklas/capybara
* http://rubydoc.info/gems/rspec-expectations/frames
* https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md