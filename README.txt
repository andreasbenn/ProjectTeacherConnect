ProjectTeacherConnect - https://github.com/andreasbenn/ProjectTeacherConnect
Dette program anvender MongoDB Compass Community som databasen.

For at køre programmet skal følgende foretages.

1. Unzip ProjectTeacherConnect.zip
2. Åben projektet i Webstorm
3. Åben terminal: Local i bunden af Webstorm
4. Eksekver kommando: npm start (Dette både starter de to lokale servere, og opretter den nødvendige data i databasen)
5. Åben login.html under ProjectTeacherConnect/PTC-Frontend/views/login.html
6. Log ind med en af brugeroplysningerne opgivet nedenstående
   eller se brugeroplysninger i databasen eller under ProjectTeacherConnect/PTC-Backend/models/User.js. 
   Koderne er databasen er krypterede men er '1234'.

Brugeroplysninger til demo;
CBS email: test@cbs.dk
password: 1234

*Det skal noteres at der har været 2 commits med mange ændrede filer/deletions. Dette er sket grundet nogle packages der blev installeret/uninstallret for at prøve at få nodemon til automatisk at åbne browseren med vores loginside ved npm start.*