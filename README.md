# cypress-automation
Testy w Cypress napisane na potrzeby rekrutacji do QM.
Uwagi:

1. Ze wzgledu na fakt, ze w zasadzie uczylem sie Cypressa na potrzeby tej rekrutacji, 
  mozliwe jest, ze ten blad nie jest bledem, a kwestia do dokonfigurowania pod testy automatyczne.
  Podczas uruchamiania testow strony qualityminds.de Cypress rzuca wyjatek: (uncaught exception) TypeError: Ct.b.jQuery is not a function.
  Nie jestem pewien czy to kwestia samej strony czy moze jakichs niuansow Cypressa, 
  natomiast wolalem zaznaczyc, ze jestem swiadomy wystepowania tego bledu i obszedlem go 
  korzystajac z rozwiazania polecanego w dokumentacji.
2. Dla przegladarki Firefox pobieranie pliku nie dziala prawidlowo, mimo, ze dokumentacja twierdzi, ze standardowe podejscie do pobierania plikow dziala na wszystkich przegladarkach. Nie bylem w stanie tego obejsc. (nie wystepuje lokalnie, tylko w CI)
3. W przypadku proby klikniecia w Kontakt & Anfahrt w pierwszym scenariuszu bylem zmuszony uzyc opcji force: true, gdyz inaczej nie dalo sie wcisnac przycisku. (nie wystepuje lokalnie, tylko w CI)

