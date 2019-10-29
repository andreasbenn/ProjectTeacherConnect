# Project TeacherConnect

- TeacherConnect er en platform, hvor universitetsstuderende kan booke fysiske møder med respektive forelæsere, for at få hjælp til et givent fag.

## Beskrivelse:

### Analyse (hvad skal systemet kunne):
Brugeren skal via sin universitets mail først registreres, og derefter have mulighed for at logge ind på vores system. Systemet skal derefter videreføre brugeren til vedkommendes tilhørende linje og fag. Herefter vil brugeren kunne trykke sig ind på fag, og de tilliggende forelæsere. Der vil derefter være mulighed for at booke et møde, med den valgte forelæser. 

### Design (hvordan):
Vi tager i vores projekt udgangspunkt i CBS. Eftersom vi benytter os af objektorienteret programmering, kan projektet senere hen også videreføres til andre universiteter. Dette vil ske i form af inheritance fra klassen University. 

Når den studerende (brugeren) tilgår vores platform, vil de få muligheden for at registrere sig, og derefter logge ind med deres CBS mail og adgangskode. Ved successful log-in vil de blive videreført til vores overordnede “startside”. Vi vil integrere systemet så det via din CBS bruger, kan se hvilken uddannelsestype du er i gang med, samt hvilken studieretning du studerer på. Brugeren vil efterfølgende få givet muligheden for at vælge det specifikke fag, som vedkommende ønsker samtalen skal tage udgangspunkt i. Når brugeren klikker på det ønskede fag, får brugeren mulighed for at vælge en ud af 10 forhåndsbesluttede emner. Disse emner er valgt udfra hvad forelæseren mener er de 10 mest relevante emner, brugerne oftest søger hjælp til (denne liste er også rangeret efter popularitet som vil blive beskrevet senere). Hvis man vil have hjælp til et emne, som ikke er på listen får man mulighed for at skrive en kommentar hvor vedkommende kan specificere hvilket område brugeren ønsker samtalen skal tage udgangspunkt i. f.eks. kunne det være, at brugeren ønsker en samtale i Programmering og udvikling af små systemer samt databaser, med fokus på “Scoping”. Til hvert hovedfag er de respektive forelæsere tilknyttet.

Som en ekstra funktion, har vi tænkt at implementere en rangeringsliste efter popularitet. Det vil sige at hvis "scoping" ikke var en del af de 10 mest populære forespørgsler, men 5 brugere indenfor et vidst tidsinterval har en forespørgsel om "scoping", vil det indikere at emnet kan være mere væsentlig, end en af de andre emner på listen. Derved vil "scoping" prioriteres i vores gruppering. Vi vil der ved lave en funktion, der gør det muligt kun at have de mest relevante emner på listen, og efterhånden skifte de mindst forespurgte ud. Dette vil også gøre det muligt for en forelæser at se, hvad han/hun evt. skal lægge mere vægt på i en fremtidig forelæsning.

For at gøre det så let for brugeren som overhovedet muligt, samt sikre os at vi får et emne som er gyldigt i forhold til fagets undervisning, vil vi på hjemmesiden have en sektion hvor vi anbefaler brugeren, at foretage en direkte kopiering af emnet som de har spørgsmål til. Dette vil ske i form af kopiering fra et PowerPoint. På den måde overskueligører vi emnet for forelæseren, og opnår en bedre gruppering af data. 

Systemet vil derefter i form af klik på "Videreføring til tidspunkt", videresende brugeren til et interface, som skal indeholde tidspunkter, hvor forelæseren er til rådighed. Dette interface vil indeholde en kalender, med ledige tider for den respektive forelæser i form af office hours. De ledige tider afhænger dermed af hvornår forelæseren har markeret, at de har ledig tid til rådgivning. Brugeren reserverer derefter en ledig tid. Når tiden er reserveret vil brugeren blive videresendt til en side med bekræftelse, hvor lokation og tidspunkt vil stå. Vi har valgt at lokationen skal være på forelæserens kontor, og hvis kontor ikke haves, vil mødet foregå i kantinen på Solbjergplads. Brugeren skal ydermere have mulighed for at kunne klikke sig ind og se hvilke møder de har booket. Dette kan være i form af en “min side”. Begge parter skal til sidst have muligheden for at kunne aflyse et booket møde, hvis en bliver forhindret i at dukke op. 

## Kravspecifikationer:

### Aktører:
- Studerende
- Forelæsere på universiteter
- Ledelsen på universiteter (vision til videreudvikling?)

### Liste over kravspecifikationer:

__Studerende__
1. Skal kunne oprette sig som bruger
2. Skal kunne logge på og se oversigt over alle ens fag
3. Skal være fokuseret på den enkeltes studieretning
4. Skal kunne specificeres pr. semester
5. Skal kunne specificeres pr. fag med tilhørende forelæsere
6. Skal kunne kontakte forelæsere for det valgte fag
7. Skal kunne bestille møder med forelæsere for det respektive fag
8. Skal kunne vælge tid til mødet ud fra tilgængelige tider hos forelæseren
9. Skal kunne slette møder

__Forelæsere på universiteter__
 1. Skal kunne oprette sig som bruger
 2. Skal kunne logge på og se oversigt over alle de fag man underviser i
 3. Skal kunne specificeres pr. semester
 4. Skal kunne se en oversigt over alle forespørgsler indenfor et givent fag
 5. Skal kunne se en oversigt over alle forespørgsler samt fag
 6. Skal kunne kontakte studerende for en given forespørgsel
 7. Skal kunne slette møder

__Ledelsen på universiteter (vision til videreudvikling?)__
 1. Skal kunne logge ind som administrator
 2. Skal kunne se en oversigt over alle forelæsere
 3. Skal kunne tilknytte/administrere forelæsere til fag pr. semester
 4. Skal kunne se den enkelte forelæsers mødeplan
 5. Skal kunne administrere alle brugere (studerende og forelæsere) på programmet

## Klassediagram:
![Klassediagram](https://i.imgur.com/1VZNOZO.png)

__Authors__
- Søren Poulsen
- Oliver Langkjær Michelsen
- Andreas Emanuel Bennecke
