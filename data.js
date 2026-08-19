// PMBOK 8 Prompt Library — data in 3 languages: uk, en, pl
const UI_STRINGS = {
  uk: {
    title: "Бібліотека промптів PMBOK 8",
    subtitle: "55 шаблонів для управління проєктами на основі 8-го видання PMBOK",
    searchPlaceholder: "Пошук за ключовим словом…",
    copy: "Копіювати",
    copied: "Скопійовано",
    sectionPrinciples: "6 принципів",
    sectionDomains: "7 сфер виконання",
    sectionFocus: "5 фокусних областей",
    sectionCross: "Наскрізні інструменти",
    footNote: "Шаблони створені на основі публічно відомої структури PMBOK® Guide — 8th Edition. Не відтворюють дослівний текст видання PMI. PMBOK® та PMI® — товарні знаки Project Management Institute, Inc.",
    countLabel: "промптів",
    allTag: "Усі",
  },
  en: {
    title: "PMBOK 8 Prompt Library",
    subtitle: "55 project management prompt templates based on the PMBOK Guide, 8th Edition",
    searchPlaceholder: "Search by keyword…",
    copy: "Copy",
    copied: "Copied",
    sectionPrinciples: "6 Principles",
    sectionDomains: "7 Performance Domains",
    sectionFocus: "5 Focus Areas",
    sectionCross: "Cross-Cutting Tools",
    footNote: "Templates are original and based on the publicly known structure of the PMBOK® Guide — 8th Edition. They do not reproduce PMI's text verbatim. PMBOK® and PMI® are trademarks of Project Management Institute, Inc.",
    countLabel: "prompts",
    allTag: "All",
  },
  pl: {
    title: "Biblioteka promptów PMBOK 8",
    subtitle: "55 szablonów promptów do zarządzania projektami opartych na PMBOK Guide, 8. edycja",
    searchPlaceholder: "Szukaj po słowie kluczowym…",
    copy: "Kopiuj",
    copied: "Skopiowano",
    sectionPrinciples: "6 zasad",
    sectionDomains: "7 obszarów realizacji",
    sectionFocus: "5 obszarów skupienia",
    sectionCross: "Narzędzia przekrojowe",
    footNote: "Szablony są oryginalne i oparte na publicznie znanej strukturze PMBOK® Guide — 8. edycja. Nie odtwarzają dosłownie tekstu PMI. PMBOK® i PMI® są znakami towarowymi Project Management Institute, Inc.",
    countLabel: "promptów",
    allTag: "Wszystkie",
  }
};

// Each template: { id, num, group, groupLabel: {uk,en,pl}, title:{uk,en,pl}, body:{uk,en,pl} }
const TEMPLATES = [
// ===== SECTION 1: PRINCIPLES =====
{
  id:1, group:"principles",
  groupLabel:{uk:"Цілісний погляд на проєкт", en:"Adopt a Holistic View", pl:"Całościowe spojrzenie na projekt"},
  title:{uk:"Аналіз системних наслідків рішення", en:"Analyze the systemic impact of a decision", pl:"Analiza systemowych skutków decyzji"},
  body:{
    uk:`Я — проєктний менеджер. Ось рішення, яке я розглядаю: {опис рішення}.
Контекст проєкту: {галузь, розмір команди, бюджет, ключові стейкхолдери}.

Проаналізуй це рішення як частину ширшої системи:
1. Які наслідки для бюджету, графіка, якості, команди та стейкхолдерів?
2. Які приховані взаємозв'язки я міг не врахувати?
3. Хто ще в організації постраждає чи виграє від цього рішення?
4. Запропонуй 3 запитання, які варто поставити собі перед фінальним рішенням.`,
    en:`I'm a project manager. Here is the decision I'm considering: {decision description}.
Project context: {industry, team size, budget, key stakeholders}.

Analyze this decision as part of a wider system:
1. What are the consequences for budget, schedule, quality, the team, and stakeholders?
2. What hidden interdependencies might I have missed?
3. Who else in the organization could be affected, positively or negatively?
4. Suggest 3 questions I should ask myself before finalizing the decision.`,
    pl:`Jestem kierownikiem projektu. Oto decyzja, którą rozważam: {opis decyzji}.
Kontekst projektu: {branża, wielkość zespołu, budżet, kluczowi interesariusze}.

Przeanalizuj tę decyzję jako część szerszego systemu:
1. Jakie są konsekwencje dla budżetu, harmonogramu, jakości, zespołu i interesariuszy?
2. Jakie ukryte zależności mogłem pominąć?
3. Kto jeszcze w organizacji może zyskać lub stracić na tej decyzji?
4. Zaproponuj 3 pytania, które warto sobie zadać przed podjęciem ostatecznej decyzji.`
  }
},
{
  id:2, group:"principles",
  groupLabel:{uk:"Цілісний погляд на проєкт", en:"Adopt a Holistic View", pl:"Całościowe spojrzenie na projekt"},
  title:{uk:"Карта взаємозалежностей проєкту", en:"Project interdependency map", pl:"Mapa zależności projektu"},
  body:{
    uk:`Створи карту взаємозалежностей для проєкту "{назва проєкту}".
Вхідні дані: {перелік команд/відділів/зовнішніх партнерів, залучених у проєкт}.

Визнач:
- Які елементи проєкту залежать один від одного (технічні, організаційні, ресурсні)
- Які зміни в одній частині системи можуть каскадно вплинути на інші
- Топ-5 ризиків, що виникають саме через ці взаємозв'язки`,
    en:`Create an interdependency map for the project "{project name}".
Input data: {list of teams/departments/external partners involved}.

Identify:
- Which project elements depend on each other (technical, organizational, resource-related)
- Which changes in one part of the system could cascade into others
- The top 5 risks arising specifically from these interdependencies`,
    pl:`Stwórz mapę zależności dla projektu "{nazwa projektu}".
Dane wejściowe: {lista zespołów/działów/partnerów zewnętrznych zaangażowanych w projekt}.

Określ:
- Które elementy projektu zależą od siebie nawzajem (techniczne, organizacyjne, zasobowe)
- Jakie zmiany w jednej części systemu mogą kaskadowo wpłynąć na inne
- Top 5 ryzyk wynikających właśnie z tych zależności`
  }
},
{
  id:3, group:"principles",
  groupLabel:{uk:"Фокус на цінності", en:"Focus on Value", pl:"Skupienie na wartości"},
  title:{uk:"Перевірка цінності результату", en:"Value check for a deliverable", pl:"Weryfikacja wartości rezultatu"},
  body:{
    uk:`Проаналізуй наступний результат/фічу проєкту: {опис результату}.
Цільова аудиторія/стейкхолдер: {хто отримує вигоду}.

Дай відповідь:
1. Яку конкретну бізнес-цінність або результат (outcome) це створює — не плутай з виходом (output)?
2. Чи є простіший/дешевший спосіб досягти тієї ж цінності?
3. Запропонуй 3 метрики, якими можна виміряти реальну цінність після впровадження.`,
    en:`Analyze the following project deliverable/feature: {description of deliverable}.
Target audience/stakeholder: {who benefits}.

Answer:
1. What specific business value or outcome does this create — don't confuse it with the output?
2. Is there a simpler/cheaper way to achieve the same value?
3. Suggest 3 metrics to measure the real value after implementation.`,
    pl:`Przeanalizuj następujący rezultat/funkcję projektu: {opis rezultatu}.
Grupa docelowa/interesariusz: {kto odnosi korzyść}.

Odpowiedz:
1. Jaką konkretną wartość biznesową lub rezultat (outcome) to tworzy — nie myl z produktem (output)?
2. Czy istnieje prostszy/tańszy sposób osiągnięcia tej samej wartości?
3. Zaproponuj 3 metryki, którymi można zmierzyć rzeczywistą wartość po wdrożeniu.`
  }
},
{
  id:4, group:"principles",
  groupLabel:{uk:"Фокус на цінності", en:"Focus on Value", pl:"Skupienie na wartości"},
  title:{uk:"Пріоритизація бек-логу за цінністю", en:"Prioritize backlog by value", pl:"Priorytetyzacja backlogu według wartości"},
  body:{
    uk:`Ось список задач/фіч мого проєкту з коротким описом:
{вставити список}

Пріоритизуй цей список за принципом "цінність на одиницю зусиль" (value vs effort).
Для кожного пункту вкажи: очікувану цінність (низька/середня/висока), орієнтовні зусилля,
і фінальний пріоритет. Поясни логіку для топ-3 позицій.`,
    en:`Here is a list of my project's tasks/features with brief descriptions:
{paste list}

Prioritize this list using the "value per unit of effort" principle (value vs. effort).
For each item, indicate: expected value (low/medium/high), estimated effort,
and final priority. Explain the logic for the top 3 items.`,
    pl:`Oto lista zadań/funkcji mojego projektu z krótkim opisem:
{wklej listę}

Ustal priorytety tej listy według zasady „wartość na jednostkę wysiłku” (value vs effort).
Dla każdej pozycji podaj: oczekiwaną wartość (niska/średnia/wysoka), szacowany wysiłek
oraz ostateczny priorytet. Wyjaśnij logikę dla 3 najwyższych pozycji.`
  }
},
{
  id:5, group:"principles",
  groupLabel:{uk:"Якість у процесах", en:"Embed Quality Into Processes and Deliverables", pl:"Jakość wbudowana w procesy"},
  title:{uk:"Чек-лист якості для результату", en:"Quality checklist for a deliverable", pl:"Lista kontrolna jakości dla rezultatu"},
  body:{
    uk:`Створи чек-лист забезпечення якості для результату проєкту: {опис результату/deliverable}.
Стандарти/вимоги, які треба врахувати: {галузеві стандарти, регуляторні вимоги, внутрішні стандарти}.

Включи:
- Критерії приймання (acceptance criteria)
- Контрольні точки перевірки якості протягом виконання роботи (а не лише в кінці)
- Типові дефекти для цього типу результату та як їх запобігти`,
    en:`Create a quality assurance checklist for the project deliverable: {deliverable description}.
Standards/requirements to consider: {industry standards, regulatory requirements, internal standards}.

Include:
- Acceptance criteria
- Quality checkpoints throughout the work (not just at the end)
- Typical defects for this type of deliverable and how to prevent them`,
    pl:`Stwórz listę kontrolną zapewnienia jakości dla rezultatu projektu: {opis rezultatu/deliverable}.
Standardy/wymagania do uwzględnienia: {standardy branżowe, wymogi regulacyjne, standardy wewnętrzne}.

Uwzględnij:
- Kryteria akceptacji (acceptance criteria)
- Punkty kontroli jakości w trakcie realizacji pracy (nie tylko na końcu)
- Typowe defekty dla tego typu rezultatu i sposoby ich zapobiegania`
  }
},
{
  id:6, group:"principles",
  groupLabel:{uk:"Якість у процесах", en:"Embed Quality Into Processes and Deliverables", pl:"Jakość wbudowana w procesy"},
  title:{uk:"Аудит процесу на приховані дефекти", en:"Process audit for hidden defects", pl:"Audyt procesu pod kątem ukrytych defektów"},
  body:{
    uk:`Опиши мій поточний робочий процес: {опис процесу крок за кроком}.

Проаналізуй як експерт з якості:
1. На яких етапах найімовірніше виникають помилки/дефекти?
2. Які контрольні точки (quality gates) варто додати?
3. Запропонуй спосіб "вбудувати" якість у процес, а не перевіряти постфактум.`,
    en:`Here is my current workflow: {step-by-step process description}.

Analyze it as a quality expert:
1. At which stages are errors/defects most likely to occur?
2. Which quality gates should be added?
3. Suggest a way to "build in" quality rather than inspecting it after the fact.`,
    pl:`Oto mój obecny proces pracy: {opis procesu krok po kroku}.

Przeanalizuj jako ekspert ds. jakości:
1. Na jakich etapach najprawdopodobniej pojawiają się błędy/defekty?
2. Jakie punkty kontroli jakości (quality gates) warto dodać?
3. Zaproponuj sposób „wbudowania” jakości w proces, zamiast sprawdzania jej po fakcie.`
  }
},
{
  id:7, group:"principles",
  groupLabel:{uk:"Відповідальне лідерство", en:"Be an Accountable Leader", pl:"Odpowiedzialne przywództwo"},
  title:{uk:"Підготовка до складної розмови з командою", en:"Preparing for a difficult conversation with the team", pl:"Przygotowanie do trudnej rozmowy z zespołem"},
  body:{
    uk:`Мені потрібно повідомити команді складну новину: {опис ситуації — затримка, скорочення бюджету, зміна пріоритетів тощо}.
Склад команди: {кількість людей, ролі, емоційний стан команди зараз}.

Допоможи підготувати:
1. Ключове повідомлення (2-3 речення), яке чесно й прямо доносить суть
2. Як взяти на себе відповідальність, не перекладаючи провину
3. Які запитання команда, ймовірно, поставить, і як на них відповісти
4. Конкретний наступний крок, який показує лідерство в дії`,
    en:`I need to tell my team some difficult news: {situation description — delay, budget cut, priority change, etc.}.
Team composition: {number of people, roles, current emotional state of the team}.

Help me prepare:
1. A key message (2-3 sentences) that conveys the point honestly and directly
2. How to take accountability without shifting blame
3. What questions the team will likely ask, and how to answer them
4. A concrete next step that demonstrates leadership in action`,
    pl:`Muszę przekazać zespołowi trudną wiadomość: {opis sytuacji — opóźnienie, cięcie budżetu, zmiana priorytetów itp.}.
Skład zespołu: {liczba osób, role, obecny stan emocjonalny zespołu}.

Pomóż przygotować:
1. Kluczowy komunikat (2-3 zdania), który uczciwie i wprost przekazuje sedno sprawy
2. Jak wziąć odpowiedzialność, nie przerzucając winy
3. Jakie pytania prawdopodobnie zada zespół i jak na nie odpowiedzieć
4. Konkretny następny krok pokazujący przywództwo w działaniu`
  }
},
{
  id:8, group:"principles",
  groupLabel:{uk:"Відповідальне лідерство", en:"Be an Accountable Leader", pl:"Odpowiedzialne przywództwo"},
  title:{uk:"Самооцінка лідерських рішень", en:"Self-assessment of a leadership decision", pl:"Samoocena decyzji przywódczej"},
  body:{
    uk:`Ось рішення, яке я нещодавно ухвалив як керівник проєкту: {опис рішення та контексту}.

Проаналізуй це рішення з точки зору відповідального лідерства:
1. Чи взяв я на себе повну відповідальність, чи перекладав частину провини на обставини/інших?
2. Чи було рішення прозорим для команди й стейкхолдерів?
3. Що б я міг зробити інакше, зберігаючи ту саму мету?`,
    en:`Here is a decision I recently made as project manager: {decision and context description}.

Analyze this decision from an accountable-leadership perspective:
1. Did I take full accountability, or shift some blame onto circumstances/others?
2. Was the decision transparent to the team and stakeholders?
3. What could I have done differently while keeping the same goal?`,
    pl:`Oto decyzja, którą niedawno podjąłem jako kierownik projektu: {opis decyzji i kontekstu}.

Przeanalizuj tę decyzję z perspektywy odpowiedzialnego przywództwa:
1. Czy wziąłem pełną odpowiedzialność, czy przerzucałem część winy na okoliczności/innych?
2. Czy decyzja była przejrzysta dla zespołu i interesariuszy?
3. Co mógłbym zrobić inaczej, zachowując ten sam cel?`
  }
},
{
  id:9, group:"principles",
  groupLabel:{uk:"Сталий розвиток", en:"Integrate Sustainability", pl:"Zrównoważony rozwój"},
  title:{uk:"Оцінка сталості проєкту (triple bottom line)", en:"Project sustainability assessment (triple bottom line)", pl:"Ocena zrównoważoności projektu (triple bottom line)"},
  body:{
    uk:`Проаналізуй проєкт "{назва проєкту}" за трьома вимірами сталого розвитку:
Опис проєкту: {короткий опис}

1. Екологічний вплив — які ресурси споживаються, які відходи/викиди створюються, чи є способи їх скоротити?
2. Соціальний вплив — як проєкт впливає на команду, місцеву громаду, кінцевих користувачів?
3. Економічна сталість — чи життєздатний проєкт у довгостроковій перспективі, не лише в моменті запуску?

Дай по 2 конкретні рекомендації для кожного виміру.`,
    en:`Analyze the project "{project name}" across three sustainability dimensions:
Project description: {short description}

1. Environmental impact — what resources are consumed, what waste/emissions are created, are there ways to reduce them?
2. Social impact — how does the project affect the team, the local community, end users?
3. Economic sustainability — is the project viable long-term, not just at launch?

Give 2 concrete recommendations for each dimension.`,
    pl:`Przeanalizuj projekt "{nazwa projektu}" w trzech wymiarach zrównoważonego rozwoju:
Opis projektu: {krótki opis}

1. Wpływ środowiskowy — jakie zasoby są zużywane, jakie odpady/emisje powstają, czy można je ograniczyć?
2. Wpływ społeczny — jak projekt wpływa na zespół, lokalną społeczność, użytkowników końcowych?
3. Zrównoważoność ekonomiczna — czy projekt jest opłacalny w długim okresie, a nie tylko w momencie startu?

Podaj po 2 konkretne rekomendacje dla każdego wymiaru.`
  }
},
{
  id:10, group:"principles",
  groupLabel:{uk:"Сталий розвиток", en:"Integrate Sustainability", pl:"Zrównoważony rozwój"},
  title:{uk:"Інтеграція сталості в статут проєкту", en:"Integrating sustainability into the project charter", pl:"Integracja zrównoważoności w karcie projektu"},
  body:{
    uk:`Ось чернетка статуту проєкту (project charter): {вставити текст або опис}.

Перепиши/доповни розділ цілей та обмежень так, щоб явно включити критерії сталого розвитку
(екологічні, соціальні, економічні), не втрачаючи фокусу на основній бізнес-меті проєкту.`,
    en:`Here is a draft project charter: {paste text or description}.

Rewrite/expand the goals and constraints section to explicitly include sustainability
criteria (environmental, social, economic), without losing focus on the project's core business goal.`,
    pl:`Oto szkic karty projektu (project charter): {wklej tekst lub opis}.

Przepisz/uzupełnij sekcję celów i ograniczeń tak, aby jawnie uwzględniała kryteria
zrównoważonego rozwoju (środowiskowe, społeczne, ekonomiczne), nie tracąc skupienia na głównym celu biznesowym projektu.`
  }
},
{
  id:11, group:"principles",
  groupLabel:{uk:"Культура розширення можливостей", en:"Build an Empowered Culture", pl:"Kultura wzmacniania zespołu"},
  title:{uk:"План делегування повноважень команді", en:"Delegation plan for the team", pl:"Plan delegowania uprawnień zespołowi"},
  body:{
    uk:`Опиши свою команду: {ролі, рівень досвіду, поточний рівень автономії}.
Проєкт/задача, яку потрібно делегувати: {опис}.

Запропонуй:
1. Що саме можна безпечно делегувати повністю (рішення + виконання)
2. Що делегувати частково (рішення за керівником, виконання — за командою)
3. Як побудувати систему зворотного зв'язку, щоб делегування не перетворилось на мікроменеджмент`,
    en:`Describe your team: {roles, experience level, current level of autonomy}.
Project/task to delegate: {description}.

Suggest:
1. What can be safely delegated fully (decision + execution)
2. What to delegate partially (decision stays with the manager, execution with the team)
3. How to build a feedback loop so delegation doesn't turn into micromanagement`,
    pl:`Opisz swój zespół: {role, poziom doświadczenia, obecny poziom autonomii}.
Projekt/zadanie do delegowania: {opis}.

Zaproponuj:
1. Co można bezpiecznie delegować w całości (decyzja + wykonanie)
2. Co delegować częściowo (decyzja pozostaje przy kierowniku, wykonanie przy zespole)
3. Jak zbudować system informacji zwrotnej, by delegowanie nie zamieniło się w mikrozarządzanie`
  }
},
{
  id:12, group:"principles",
  groupLabel:{uk:"Культура розширення можливостей", en:"Build an Empowered Culture", pl:"Kultura wzmacniania zespołu"},
  title:{uk:"Діагностика психологічної безпеки в команді", en:"Diagnosing psychological safety in the team", pl:"Diagnoza bezpieczeństwa psychologicznego w zespole"},
  body:{
    uk:`Опиши поведінку своєї команди на зустрічах та в щоденній роботі: {спостереження — чи люди
висловлюють незгоду, чи визнають помилки, чи звертаються по допомогу}.

На основі цього:
1. Оціни рівень психологічної безпеки в команді (низький/середній/високий) з поясненням
2. Запропонуй 3 конкретні дії керівника, які підвищать відчуття безпеки й розширять автономію команди`,
    en:`Describe your team's behavior in meetings and daily work: {observations — do people
voice disagreement, admit mistakes, ask for help}.

Based on this:
1. Assess the level of psychological safety in the team (low/medium/high) with reasoning
2. Suggest 3 concrete manager actions that would increase the sense of safety and expand team autonomy`,
    pl:`Opisz zachowanie swojego zespołu na spotkaniach i w codziennej pracy: {obserwacje — czy ludzie
wyrażają niezgodę, przyznają się do błędów, proszą o pomoc}.

Na tej podstawie:
1. Oceń poziom bezpieczeństwa psychologicznego w zespole (niski/średni/wysoki) z uzasadnieniem
2. Zaproponuj 3 konkretne działania kierownika, które zwiększą poczucie bezpieczeństwa i poszerzą autonomię zespołu`
  }
},

// ===== SECTION 2: PERFORMANCE DOMAINS =====
{
  id:13, group:"domains",
  groupLabel:{uk:"Врядування", en:"Governance", pl:"Governance (nadzór)"},
  title:{uk:"Проєктування системи врядування", en:"Designing a governance structure", pl:"Projektowanie struktury nadzoru"},
  body:{
    uk:`Створи структуру врядування (governance structure) для проєкту "{назва}".
Параметри: розмір команди — {N}, бюджет — {сума}, кількість зовнішніх стейкхолдерів — {N},
рівень регуляторного контролю — {низький/середній/високий}.

Визнач:
- Ролі та рівні прийняття рішень (хто затверджує що і на якому порозі)
- Частоту та формат контрольних точок (governance gates)
- Процес ескалації проблем`,
    en:`Create a governance structure for the project "{name}".
Parameters: team size — {N}, budget — {amount}, number of external stakeholders — {N},
level of regulatory oversight — {low/medium/high}.

Define:
- Roles and decision-making levels (who approves what and at which threshold)
- Frequency and format of governance gates
- The issue escalation process`,
    pl:`Stwórz strukturę nadzoru (governance structure) dla projektu "{nazwa}".
Parametry: wielkość zespołu — {N}, budżet — {kwota}, liczba zewnętrznych interesariuszy — {N},
poziom nadzoru regulacyjnego — {niski/średni/wysoki}.

Określ:
- Role i poziomy podejmowania decyzji (kto zatwierdza co i przy jakim progu)
- Częstotliwość i format punktów kontrolnych (governance gates)
- Proces eskalacji problemów`
  }
},
{
  id:14, group:"domains",
  groupLabel:{uk:"Врядування", en:"Governance", pl:"Governance (nadzór)"},
  title:{uk:"Аудит поточного врядування проєкту", en:"Auditing current project governance", pl:"Audyt bieżącego nadzoru projektu"},
  body:{
    uk:`Опиши, як зараз ухвалюються рішення в проєкті: {опис поточного процесу}.

Проаналізуй:
1. Де в процесі є вузькі місця (bottlenecks) через надмірний контроль?
2. Де, навпаки, бракує контролю і виникають ризики?
3. Запропонуй спрощену, але достатню структуру врядування.`,
    en:`Describe how decisions are currently made in the project: {current process description}.

Analyze:
1. Where in the process are there bottlenecks caused by excessive control?
2. Where, conversely, is there too little control, creating risk?
3. Propose a simplified but sufficient governance structure.`,
    pl:`Opisz, jak obecnie podejmowane są decyzje w projekcie: {opis obecnego procesu}.

Przeanalizuj:
1. Gdzie w procesie występują wąskie gardła (bottlenecks) spowodowane nadmierną kontrolą?
2. Gdzie z kolei brakuje kontroli i powstaje ryzyko?
3. Zaproponuj uproszczoną, ale wystarczającą strukturę nadzoru.`
  }
},
{
  id:15, group:"domains",
  groupLabel:{uk:"Зміст", en:"Scope", pl:"Zakres"},
  title:{uk:"Побудова WBS (ієрархічної структури робіт)", en:"Building a WBS (Work Breakdown Structure)", pl:"Budowa WBS (struktury podziału pracy)"},
  body:{
    uk:`Ось опис проєкту та його основних результатів (deliverables): {опис}.

Побудуй ієрархічну структуру робіт (WBS) на 3 рівні деталізації:
1. Основні результати (deliverables)
2. Робочі пакети (work packages) для кожного результату
3. Ключові задачі всередині кожного робочого пакета

Формат: маркований список з нумерацією рівнів (1, 1.1, 1.1.1).`,
    en:`Here is the project description and its main deliverables: {description}.

Build a Work Breakdown Structure (WBS) with 3 levels of detail:
1. Main deliverables
2. Work packages for each deliverable
3. Key tasks within each work package

Format: a bulleted list with level numbering (1, 1.1, 1.1.1).`,
    pl:`Oto opis projektu i jego głównych rezultatów (deliverables): {opis}.

Zbuduj strukturę podziału pracy (WBS) na 3 poziomach szczegółowości:
1. Główne rezultaty (deliverables)
2. Pakiety robocze (work packages) dla każdego rezultatu
3. Kluczowe zadania w ramach każdego pakietu roboczego

Format: lista punktowana z numeracją poziomów (1, 1.1, 1.1.1).`
  }
},
{
  id:16, group:"domains",
  groupLabel:{uk:"Зміст", en:"Scope", pl:"Zakres"},
  title:{uk:"Виявлення scope creep (розповзання обсягу)", en:"Detecting scope creep", pl:"Wykrywanie rozrostu zakresu (scope creep)"},
  body:{
    uk:`Ось початковий обсяг проєкту: {опис узгодженого scope}.
Ось запити на зміни, які надійшли останнім часом: {перелік запитів}.

Проаналізуй кожен запит:
1. Чи виходить він за межі узгодженого обсягу?
2. Наскільки він критичний для успіху проєкту?
3. Запропонуй формулювання для ввічливої, але чіткої відмови або процедуру формальної зміни обсягу.`,
    en:`Here is the original project scope: {description of agreed scope}.
Here are recent change requests: {list of requests}.

Analyze each request:
1. Does it go beyond the agreed scope?
2. How critical is it to project success?
3. Suggest wording for a polite but firm decline, or a formal scope-change procedure.`,
    pl:`Oto pierwotny zakres projektu: {opis uzgodnionego scope}.
Oto ostatnio otrzymane wnioski o zmiany: {lista wniosków}.

Przeanalizuj każdy wniosek:
1. Czy wykracza poza uzgodniony zakres?
2. Jak krytyczny jest dla sukcesu projektu?
3. Zaproponuj sformułowanie grzecznej, ale jasnej odmowy lub procedurę formalnej zmiany zakresu.`
  }
},
{
  id:17, group:"domains",
  groupLabel:{uk:"Зміст", en:"Scope", pl:"Zakres"},
  title:{uk:"Написання критеріїв приймання", en:"Writing acceptance criteria", pl:"Pisanie kryteriów akceptacji"},
  body:{
    uk:`Опиши функціонал/результат, для якого потрібні критерії приймання: {опис}.
Формат: {Given-When-Then / чек-лист / інше}.

Напиши повний набір критеріїв приймання, які покривають:
- Основний happy path сценарій
- Крайні випадки (edge cases)
- Умови, за яких результат вважається НЕ прийнятим`,
    en:`Describe the functionality/deliverable that needs acceptance criteria: {description}.
Format: {Given-When-Then / checklist / other}.

Write a complete set of acceptance criteria covering:
- The main happy-path scenario
- Edge cases
- Conditions under which the deliverable is considered NOT accepted`,
    pl:`Opisz funkcjonalność/rezultat, dla którego potrzebne są kryteria akceptacji: {opis}.
Format: {Given-When-Then / lista kontrolna / inny}.

Napisz kompletny zestaw kryteriów akceptacji obejmujący:
- Główny scenariusz happy path
- Przypadki brzegowe (edge cases)
- Warunki, przy których rezultat uznaje się za NIEzaakceptowany`
  }
},
{
  id:18, group:"domains",
  groupLabel:{uk:"Графік", en:"Schedule", pl:"Harmonogram"},
  title:{uk:"Побудова мережевої діаграми та критичного шляху", en:"Building a network diagram and critical path", pl:"Budowa diagramu sieciowego i ścieżki krytycznej"},
  body:{
    uk:`Ось список задач проєкту з тривалістю та залежностями:
{назва задачі — тривалість — попередня задача, ...}

Визнач:
1. Критичний шлях проєкту (послідовність задач, що визначає мінімальну тривалість)
2. Резерви часу (float/slack) для некритичних задач
3. Які 3 задачі найбільше ризикують зсунути весь проєкт, якщо затримаються`,
    en:`Here is the list of project tasks with duration and dependencies:
{task name — duration — predecessor task, ...}

Determine:
1. The project's critical path (the task sequence that defines minimum duration)
2. Float/slack for non-critical tasks
3. Which 3 tasks pose the greatest risk of delaying the whole project if they slip`,
    pl:`Oto lista zadań projektu z czasem trwania i zależnościami:
{nazwa zadania — czas trwania — zadanie poprzedzające, ...}

Określ:
1. Ścieżkę krytyczną projektu (sekwencję zadań determinującą minimalny czas trwania)
2. Rezerwy czasowe (float/slack) dla zadań niekrytycznych
3. Które 3 zadania niosą największe ryzyko opóźnienia całego projektu w razie poślizgu`
  }
},
{
  id:19, group:"domains",
  groupLabel:{uk:"Графік", en:"Schedule", pl:"Harmonogram"},
  title:{uk:"Оцінка тривалості задач методом трьох точок (PERT)", en:"Three-point (PERT) duration estimation", pl:"Szacowanie czasu trwania metodą trzech punktów (PERT)"},
  body:{
    uk:`Для наступних задач надай оптимістичну, найімовірнішу та песимістичну оцінку тривалості,
а також розрахуй очікувану тривалість за формулою PERT: (О + 4М + П) / 6

Задачі: {перелік задач з коротким описом}`,
    en:`For the following tasks, provide an optimistic, most likely, and pessimistic duration estimate,
and calculate the expected duration using the PERT formula: (O + 4M + P) / 6

Tasks: {list of tasks with brief description}`,
    pl:`Dla poniższych zadań podaj optymistyczny, najbardziej prawdopodobny i pesymistyczny szacunek czasu trwania,
a także oblicz oczekiwany czas trwania według wzoru PERT: (O + 4M + P) / 6

Zadania: {lista zadań z krótkim opisem}`
  }
},
{
  id:20, group:"domains",
  groupLabel:{uk:"Графік", en:"Schedule", pl:"Harmonogram"},
  title:{uk:"Аналіз причин відставання від графіка", en:"Analyzing causes of schedule slippage", pl:"Analiza przyczyn opóźnienia harmonogramu"},
  body:{
    uk:`Плановий графік: {опис плану}
Фактичний прогрес на сьогодні: {опис фактичного стану}

Проаналізуй:
1. Наскільки серйозне відставання (у днях/відсотках)?
2. Ймовірні корінні причини відставання
3. 3 варіанти дій: прискорення (crashing), паралелізація (fast tracking), або перегляд обсягу — з плюсами й мінусами кожного`,
    en:`Planned schedule: {plan description}
Actual progress to date: {description of actual state}

Analyze:
1. How serious is the delay (in days/percent)?
2. Likely root causes of the slippage
3. 3 options: crashing, fast tracking, or scope revision — with pros and cons of each`,
    pl:`Planowany harmonogram: {opis planu}
Faktyczny postęp na dziś: {opis stanu faktycznego}

Przeanalizuj:
1. Jak poważne jest opóźnienie (w dniach/procentach)?
2. Prawdopodobne przyczyny źródłowe opóźnienia
3. 3 warianty działań: przyspieszenie (crashing), zrównoleglenie (fast tracking) lub rewizja zakresu — z wadami i zaletami każdego`
  }
},
{
  id:21, group:"domains",
  groupLabel:{uk:"Фінанси", en:"Finance", pl:"Finanse"},
  title:{uk:"Побудова бюджету проєкту знизу-вгору", en:"Bottom-up project budgeting", pl:"Budowanie budżetu projektu metodą oddolną"},
  body:{
    uk:`Ось структура робіт проєкту (WBS) з орієнтовними ресурсами для кожного пакета:
{WBS з ресурсами}
Ставки ресурсів: {погодинні/денні ставки, вартість матеріалів тощо}

Розрахуй:
1. Бюджет для кожного робочого пакета
2. Загальний бюджет проєкту
3. Рекомендований резерв на непередбачені витрати (contingency reserve) з обґрунтуванням відсотка`,
    en:`Here is the project WBS with estimated resources for each package:
{WBS with resources}
Resource rates: {hourly/daily rates, material costs, etc.}

Calculate:
1. Budget for each work package
2. Total project budget
3. Recommended contingency reserve, with justification for the percentage`,
    pl:`Oto struktura podziału pracy projektu (WBS) z szacunkowymi zasobami dla każdego pakietu:
{WBS z zasobami}
Stawki zasobów: {stawki godzinowe/dzienne, koszty materiałów itp.}

Oblicz:
1. Budżet dla każdego pakietu roboczego
2. Całkowity budżet projektu
3. Rekomendowaną rezerwę na nieprzewidziane wydatki (contingency reserve) z uzasadnieniem procentu`
  }
},
{
  id:22, group:"domains",
  groupLabel:{uk:"Фінанси", en:"Finance", pl:"Finanse"},
  title:{uk:"Аналіз освоєного обсягу (Earned Value Analysis)", en:"Earned Value Analysis", pl:"Analiza wartości wypracowanej (Earned Value)"},
  body:{
    uk:`Дані проєкту на контрольну дату:
Плановий обсяг (PV) = {значення}
Освоєний обсяг (EV) = {значення}
Фактичні витрати (AC) = {значення}
Бюджет проєкту (BAC) = {значення}

Розрахуй та інтерпретуй: SV, CV, SPI, CPI, EAC, ETC, VAC.
Дай висновок: проєкт випереджає чи відстає від графіка та бюджету, і наскільки серйозно.`,
    en:`Project data as of the reporting date:
Planned Value (PV) = {value}
Earned Value (EV) = {value}
Actual Cost (AC) = {value}
Budget at Completion (BAC) = {value}

Calculate and interpret: SV, CV, SPI, CPI, EAC, ETC, VAC.
Conclude whether the project is ahead or behind schedule and budget, and by how much.`,
    pl:`Dane projektu na dzień kontrolny:
Wartość planowana (PV) = {wartość}
Wartość wypracowana (EV) = {wartość}
Koszt rzeczywisty (AC) = {wartość}
Budżet na zakończenie (BAC) = {wartość}

Oblicz i zinterpretuj: SV, CV, SPI, CPI, EAC, ETC, VAC.
Podaj wniosek: czy projekt wyprzedza, czy jest opóźniony względem harmonogramu i budżetu, i o ile.`
  }
},
{
  id:23, group:"domains",
  groupLabel:{uk:"Фінанси", en:"Finance", pl:"Finanse"},
  title:{uk:"Обґрунтування бізнес-кейсу (Business Case)", en:"Building a business case", pl:"Uzasadnienie biznesowe (Business Case)"},
  body:{
    uk:`Ідея проєкту: {короткий опис}
Орієнтовні витрати: {сума}
Очікувані вигоди: {опис вигід — фінансові та нефінансові}

Створи стислий бізнес-кейс, що включає:
1. Проблему/можливість, яку вирішує проєкт
2. Варіанти рішення (включно з варіантом "нічого не робити")
3. Фінансове обґрунтування (ROI, період окупності — якщо можливо оцінити)
4. Рекомендацію`,
    en:`Project idea: {short description}
Estimated cost: {amount}
Expected benefits: {description of benefits — financial and non-financial}

Create a concise business case that includes:
1. The problem/opportunity the project addresses
2. Options considered (including "do nothing")
3. Financial justification (ROI, payback period — if estimable)
4. A recommendation`,
    pl:`Pomysł na projekt: {krótki opis}
Szacowany koszt: {kwota}
Oczekiwane korzyści: {opis korzyści — finansowych i niefinansowych}

Stwórz zwięzłe uzasadnienie biznesowe (business case) zawierające:
1. Problem/możliwość, którą rozwiązuje projekt
2. Rozważane warianty (w tym wariant „nic nie robić”)
3. Uzasadnienie finansowe (ROI, okres zwrotu — jeśli można oszacować)
4. Rekomendację`
  }
},
{
  id:24, group:"domains",
  groupLabel:{uk:"Стейкхолдери", en:"Stakeholders", pl:"Interesariusze"},
  title:{uk:"Побудова реєстру стейкхолдерів з матрицею впливу", en:"Stakeholder register with influence matrix", pl:"Rejestr interesariuszy z macierzą wpływu"},
  body:{
    uk:`Перелік залучених сторін проєкту: {перелік осіб/груп}

Для кожного стейкхолдера визнач:
- Рівень впливу на проєкт (низький/середній/високий)
- Рівень зацікавленості (низький/середній/високий)
- Позиція щодо проєкту (прихильник/нейтральний/опонент)
- Рекомендовану стратегію взаємодії (Manage Closely / Keep Satisfied / Keep Informed / Monitor)`,
    en:`List of project stakeholders: {list of individuals/groups}

For each stakeholder, determine:
- Level of influence on the project (low/medium/high)
- Level of interest (low/medium/high)
- Position toward the project (supporter/neutral/opponent)
- Recommended engagement strategy (Manage Closely / Keep Satisfied / Keep Informed / Monitor)`,
    pl:`Lista interesariuszy projektu: {lista osób/grup}

Dla każdego interesariusza określ:
- Poziom wpływu na projekt (niski/średni/wysoki)
- Poziom zainteresowania (niski/średni/wysoki)
- Stanowisko wobec projektu (zwolennik/neutralny/przeciwnik)
- Rekomendowaną strategię zaangażowania (Manage Closely / Keep Satisfied / Keep Informed / Monitor)`
  }
},
{
  id:25, group:"domains",
  groupLabel:{uk:"Стейкхолдери", en:"Stakeholders", pl:"Interesariusze"},
  title:{uk:"План комунікації зі складним стейкхолдером", en:"Communication plan for a difficult stakeholder", pl:"Plan komunikacji z trudnym interesariuszem"},
  body:{
    uk:`Опиши стейкхолдера: {роль, вплив, чому він складний — опір змінам, конфлікт інтересів, брак часу тощо}
Мета взаємодії: {чого потрібно досягти}

Запропонуй:
1. Ймовірні мотиви та побоювання цього стейкхолдера
2. Стратегію першого контакту
3. Конкретні формулювання ключових повідомлень
4. План дій, якщо початковий підхід не спрацює`,
    en:`Describe the stakeholder: {role, influence, why they're difficult — resistance to change, conflicting interests, lack of time, etc.}
Goal of the interaction: {what needs to be achieved}

Suggest:
1. This stakeholder's likely motives and concerns
2. A strategy for the initial contact
3. Specific wording for the key messages
4. A backup plan if the initial approach doesn't work`,
    pl:`Opisz interesariusza: {rola, wpływ, dlaczego jest trudny — opór wobec zmian, konflikt interesów, brak czasu itp.}
Cel interakcji: {co trzeba osiągnąć}

Zaproponuj:
1. Prawdopodobne motywy i obawy tego interesariusza
2. Strategię pierwszego kontaktu
3. Konkretne sformułowania kluczowych komunikatów
4. Plan działania, jeśli pierwsze podejście nie zadziała`
  }
},
{
  id:26, group:"domains",
  groupLabel:{uk:"Стейкхолдери", en:"Stakeholders", pl:"Interesariusze"},
  title:{uk:"Аналіз зворотного зв'язку від стейкхолдерів", en:"Analyzing stakeholder feedback", pl:"Analiza informacji zwrotnej od interesariuszy"},
  body:{
    uk:`Ось зібрані коментарі/відгуки стейкхолдерів щодо проєкту: {вставити відгуки}

Систематизуй:
1. Згрупуй за темами
2. Виділи повторювані занепокоєння (топ-3)
3. Запропонуй пріоритизовані дії у відповідь`,
    en:`Here are the collected stakeholder comments/feedback about the project: {paste feedback}

Systematize:
1. Group by theme
2. Highlight recurring concerns (top 3)
3. Propose prioritized response actions`,
    pl:`Oto zebrane komentarze/opinie interesariuszy dotyczące projektu: {wklej opinie}

Uporządkuj:
1. Pogrupuj według tematów
2. Wyróżnij powtarzające się obawy (top 3)
3. Zaproponuj priorytetowe działania w odpowiedzi`
  }
},
{
  id:27, group:"domains",
  groupLabel:{uk:"Ресурси", en:"Resources", pl:"Zasoby"},
  title:{uk:"Розподіл ресурсів по проєкту", en:"Allocating resources across the project", pl:"Alokacja zasobów w projekcie"},
  body:{
    uk:`Список задач з потрібними навичками та орієнтовним навантаженням: {перелік}
Доступна команда з навичками та поточним завантаженням: {перелік}

Запропонуй оптимальний розподіл ресурсів, врахуй:
- Відповідність навичок задачам
- Уникнення перевантаження (не більше {N}% завантаження на людину)
- Виявлення потенційних вузьких місць (ресурси, критичні для кількох паралельних задач)`,
    en:`List of tasks with required skills and estimated workload: {list}
Available team with skills and current workload: {list}

Propose an optimal resource allocation, considering:
- Matching skills to tasks
- Avoiding overload (no more than {N}% utilization per person)
- Identifying potential bottlenecks (resources critical to multiple parallel tasks)`,
    pl:`Lista zadań z wymaganymi umiejętnościami i szacowanym obciążeniem: {lista}
Dostępny zespół z umiejętnościami i obecnym obciążeniem: {lista}

Zaproponuj optymalną alokację zasobów, uwzględniając:
- Dopasowanie umiejętności do zadań
- Unikanie przeciążenia (nie więcej niż {N}% obciążenia na osobę)
- Zidentyfikowanie potencjalnych wąskich gardeł (zasoby krytyczne dla kilku równoległych zadań)`
  }
},
{
  id:28, group:"domains",
  groupLabel:{uk:"Ресурси", en:"Resources", pl:"Zasoby"},
  title:{uk:"План розвитку та утримання команди", en:"Team development and retention plan", pl:"Plan rozwoju i utrzymania zespołu"},
  body:{
    uk:`Склад команди: {ролі, рівень досвіду, помічені прогалини в навичках}
Тривалість проєкту: {термін}

Створи план:
1. Які навички команди потрібно розвинути під час проєкту
2. Формати навчання, що не зашкодять графіку (менторство, парна робота, короткі сесії)
3. Ризики відтоку ключових членів команди та як їх мінімізувати`,
    en:`Team composition: {roles, experience level, identified skill gaps}
Project duration: {timeframe}

Create a plan for:
1. Which team skills need to be developed during the project
2. Training formats that won't hurt the schedule (mentoring, pair work, short sessions)
3. Risks of losing key team members and how to minimize them`,
    pl:`Skład zespołu: {role, poziom doświadczenia, zidentyfikowane luki kompetencyjne}
Czas trwania projektu: {okres}

Stwórz plan:
1. Jakie umiejętności zespołu należy rozwinąć w trakcie projektu
2. Formaty szkoleń niezagrażające harmonogramowi (mentoring, praca w parach, krótkie sesje)
3. Ryzyka odejścia kluczowych członków zespołu i sposoby ich minimalizacji`
  }
},
{
  id:29, group:"domains",
  groupLabel:{uk:"Ресурси", en:"Resources", pl:"Zasoby"},
  title:{uk:"Розрахунок потреби в ресурсах (Resource Leveling)", en:"Resource leveling calculation", pl:"Obliczanie zapotrzebowania na zasoby (Resource Leveling)"},
  body:{
    uk:`Ось графік завантаження ресурсу "{ім'я/роль}" по тижнях проєкту: {дані по тижнях}

Проаналізуй пікові навантаження та запропонуй варіант вирівнювання (resource leveling)
без зміни кінцевого терміну проєкту, якщо це можливо. Якщо неможливо — вкажи, на скільки
доведеться зсунути терміни.`,
    en:`Here is the weekly workload schedule for the resource "{name/role}": {weekly data}

Analyze peak loads and propose a resource leveling option
without changing the project's end date, if possible. If not possible, indicate by how much
the timeline would need to shift.`,
    pl:`Oto harmonogram obciążenia zasobu "{imię/rola}" w podziale na tygodnie projektu: {dane tygodniowe}

Przeanalizuj szczytowe obciążenia i zaproponuj wariant wyrównania (resource leveling)
bez zmiany terminu zakończenia projektu, jeśli to możliwe. Jeśli niemożliwe — wskaż, o ile
trzeba będzie przesunąć terminy.`
  }
},
{
  id:30, group:"domains",
  groupLabel:{uk:"Ризики", en:"Risk", pl:"Ryzyko"},
  title:{uk:"Ідентифікація ризиків методом мозкового штурму по категоріях", en:"Risk identification by category brainstorming", pl:"Identyfikacja ryzyk metodą burzy mózgów wg kategorii"},
  body:{
    uk:`Опис проєкту: {короткий опис, галузь, ключові особливості}

Ідентифікуй потенційні ризики за категоріями:
1. Технічні ризики
2. Організаційні ризики
3. Зовнішні ризики (ринок, регуляторика, постачальники)
4. Ризики управління проєктом

Для кожного ризику коротко вкажи ймовірну причину.`,
    en:`Project description: {short description, industry, key characteristics}

Identify potential risks by category:
1. Technical risks
2. Organizational risks
3. External risks (market, regulatory, suppliers)
4. Project management risks

For each risk, briefly note the likely cause.`,
    pl:`Opis projektu: {krótki opis, branża, kluczowe cechy}

Zidentyfikuj potencjalne ryzyka według kategorii:
1. Ryzyka techniczne
2. Ryzyka organizacyjne
3. Ryzyka zewnętrzne (rynek, regulacje, dostawcy)
4. Ryzyka zarządzania projektem

Dla każdego ryzyka podaj krótko prawdopodobną przyczynę.`
  }
},
{
  id:31, group:"domains",
  groupLabel:{uk:"Ризики", en:"Risk", pl:"Ryzyko"},
  title:{uk:"Якісний аналіз ризиків (ймовірність × вплив)", en:"Qualitative risk analysis (probability × impact)", pl:"Jakościowa analiza ryzyk (prawdopodobieństwo × wpływ)"},
  body:{
    uk:`Список ідентифікованих ризиків: {перелік}

Оціни кожен ризик за шкалою 1-5 з ймовірності та впливу, розрахуй рівень ризику
(ймовірність × вплив) і відсортуй від найкритичнішого. Виділи топ-5 ризиків, що
потребують негайного плану реагування.`,
    en:`List of identified risks: {list}

Rate each risk on a 1-5 scale for probability and impact, calculate the risk score
(probability × impact), and sort from most critical. Highlight the top 5 risks that
need an immediate response plan.`,
    pl:`Lista zidentyfikowanych ryzyk: {lista}

Oceń każde ryzyko w skali 1-5 pod względem prawdopodobieństwa i wpływu, oblicz poziom ryzyka
(prawdopodobieństwo × wpływ) i posortuj od najbardziej krytycznego. Wyróżnij 5 najważniejszych
ryzyk wymagających natychmiastowego planu reagowania.`
  }
},
{
  id:32, group:"domains",
  groupLabel:{uk:"Ризики", en:"Risk", pl:"Ryzyko"},
  title:{uk:"Розробка плану реагування на ризик", en:"Developing a risk response plan", pl:"Opracowanie planu reagowania na ryzyko"},
  body:{
    uk:`Ризик: {опис ризику}
Ймовірність: {значення}, Вплив: {опис впливу}

Запропонуй по одній стратегії з кожної категорії:
1. Уникнення (avoid)
2. Пом'якшення (mitigate)
3. Передача (transfer)
4. Прийняття (accept), з тригером для плану на випадок реалізації (contingency plan)

Рекомендуй найкращий варіант з обґрунтуванням.`,
    en:`Risk: {risk description}
Probability: {value}, Impact: {impact description}

Suggest one strategy from each category:
1. Avoid
2. Mitigate
3. Transfer
4. Accept, with a trigger for a contingency plan

Recommend the best option with justification.`,
    pl:`Ryzyko: {opis ryzyka}
Prawdopodobieństwo: {wartość}, Wpływ: {opis wpływu}

Zaproponuj po jednej strategii z każdej kategorii:
1. Unikanie (avoid)
2. Łagodzenie (mitigate)
3. Przeniesienie (transfer)
4. Akceptacja (accept), z wyzwalaczem dla planu awaryjnego (contingency plan)

Rekomenduj najlepszy wariant z uzasadnieniem.`
  }
},
{
  id:33, group:"domains",
  groupLabel:{uk:"Ризики", en:"Risk", pl:"Ryzyko"},
  title:{uk:"Складання реєстру ризиків", en:"Building a risk register", pl:"Tworzenie rejestru ryzyk"},
  body:{
    uk:`Вихідні дані: {перелік ідентифікованих ризиків з короткими описами}

Створи структурований реєстр ризиків у форматі таблиці з колонками:
ID | Опис ризику | Категорія | Ймовірність | Вплив | Рівень ризику | Власник ризику | Стратегія реагування | Статус`,
    en:`Input data: {list of identified risks with brief descriptions}

Create a structured risk register as a table with the columns:
ID | Risk description | Category | Probability | Impact | Risk score | Risk owner | Response strategy | Status`,
    pl:`Dane wejściowe: {lista zidentyfikowanych ryzyk z krótkimi opisami}

Stwórz uporządkowany rejestr ryzyk w formie tabeli z kolumnami:
ID | Opis ryzyka | Kategoria | Prawdopodobieństwo | Wpływ | Poziom ryzyka | Właściciel ryzyka | Strategia reagowania | Status`
  }
},

// ===== SECTION 3: FOCUS AREAS =====
{
  id:34, group:"focus",
  groupLabel:{uk:"Ініціація", en:"Initiating", pl:"Inicjowanie"},
  title:{uk:"Створення статуту проєкту (Project Charter)", en:"Creating a Project Charter", pl:"Tworzenie karty projektu (Project Charter)"},
  body:{
    uk:`Вихідні дані про проєкт:
- Назва: {назва}
- Спонсор: {ім'я/посада}
- Бізнес-потреба: {опис}
- Орієнтовний бюджет: {сума}
- Орієнтовні терміни: {дати}
- Ключові стейкхолдери: {перелік}

Створи повний статут проєкту (Project Charter), що включає: мету, цілі (SMART),
основні результати, обмеження, припущення, високорівневі ризики, критерії успіху,
та повноваження проєктного менеджера.`,
    en:`Project input data:
- Name: {name}
- Sponsor: {name/title}
- Business need: {description}
- Estimated budget: {amount}
- Estimated timeline: {dates}
- Key stakeholders: {list}

Create a complete Project Charter that includes: purpose, SMART objectives,
key deliverables, constraints, assumptions, high-level risks, success criteria,
and the project manager's authority.`,
    pl:`Dane wejściowe projektu:
- Nazwa: {nazwa}
- Sponsor: {imię/stanowisko}
- Potrzeba biznesowa: {opis}
- Szacowany budżet: {kwota}
- Szacowany harmonogram: {daty}
- Kluczowi interesariusze: {lista}

Stwórz kompletną kartę projektu (Project Charter), zawierającą: cel, cele SMART,
główne rezultaty, ograniczenia, założenia, ryzyka wysokiego poziomu, kryteria sukcesu
oraz uprawnienia kierownika projektu.`
  }
},
{
  id:35, group:"focus",
  groupLabel:{uk:"Ініціація", en:"Initiating", pl:"Inicjowanie"},
  title:{uk:"Аналіз доцільності проєкту (feasibility)", en:"Project feasibility analysis", pl:"Analiza wykonalności projektu"},
  body:{
    uk:`Опис ідеї проєкту: {опис}
Доступні ресурси: {бюджет, команда, час}
Обмеження: {технічні, регуляторні, ринкові}

Проаналізуй доцільність проєкту за 4 вимірами: технічна, фінансова, операційна,
часова. Дай рекомендацію: реалізовувати / реалізовувати з коригуваннями / відмовитись.`,
    en:`Project idea description: {description}
Available resources: {budget, team, time}
Constraints: {technical, regulatory, market}

Analyze project feasibility across 4 dimensions: technical, financial, operational,
schedule. Give a recommendation: proceed / proceed with adjustments / decline.`,
    pl:`Opis pomysłu na projekt: {opis}
Dostępne zasoby: {budżet, zespół, czas}
Ograniczenia: {techniczne, regulacyjne, rynkowe}

Przeanalizuj wykonalność projektu w 4 wymiarach: techniczny, finansowy, operacyjny,
czasowy. Podaj rekomendację: realizować / realizować z korektami / odrzucić.`
  }
},
{
  id:36, group:"focus",
  groupLabel:{uk:"Планування", en:"Planning", pl:"Planowanie"},
  title:{uk:"Створення комплексного плану управління проєктом", en:"Creating a comprehensive project management plan", pl:"Tworzenie kompleksowego planu zarządzania projektem"},
  body:{
    uk:`Дані проєкту зі статуту: {вставити ключові дані зі статуту проєкту}

Створи структуру плану управління проєктом, що включає короткі розділи для:
управління обсягом, графіком, бюджетом, якістю, ресурсами, комунікаціями, ризиками,
закупівлями та залученням стейкхолдерів. Для кожного розділу — 2-3 ключові пункти підходу.`,
    en:`Project data from the charter: {paste key data from the project charter}

Create the structure of a project management plan that includes short sections for:
scope, schedule, budget, quality, resource, communications, risk, procurement,
and stakeholder engagement management. For each section, list 2-3 key points of approach.`,
    pl:`Dane projektu z karty projektu: {wklej kluczowe dane z karty projektu}

Stwórz strukturę planu zarządzania projektem, zawierającą krótkie sekcje dla:
zarządzania zakresem, harmonogramem, budżetem, jakością, zasobami, komunikacją, ryzykiem,
zamówieniami oraz zaangażowaniem interesariuszy. Dla każdej sekcji — 2-3 kluczowe punkty podejścia.`
  }
},
{
  id:37, group:"focus",
  groupLabel:{uk:"Планування", en:"Planning", pl:"Planowanie"},
  title:{uk:"Вибір підходу до розробки (Development Approach)", en:"Choosing a development approach", pl:"Wybór podejścia do realizacji (Development Approach)"},
  body:{
    uk:`Характеристики проєкту: {рівень визначеності вимог, частота змін, критичність термінів,
розмір команди, досвід команди з agile/waterfall}

Порекомендуй підхід (предиктивний / гнучкий / гібридний) з обґрунтуванням та
поясненням, які саме характеристики проєкту вплинули на вибір.`,
    en:`Project characteristics: {level of requirements certainty, frequency of change, schedule criticality,
team size, team's experience with agile/waterfall}

Recommend an approach (predictive / agile / hybrid) with justification, explaining
which specific project characteristics drove the choice.`,
    pl:`Cechy projektu: {poziom pewności wymagań, częstotliwość zmian, krytyczność terminów,
wielkość zespołu, doświadczenie zespołu z agile/waterfall}

Zarekomenduj podejście (predykcyjne / zwinne / hybrydowe) z uzasadnieniem, wyjaśniając,
które konkretnie cechy projektu wpłynęły na wybór.`
  }
},
{
  id:38, group:"focus",
  groupLabel:{uk:"Планування", en:"Planning", pl:"Planowanie"},
  title:{uk:"План управління комунікаціями", en:"Communications management plan", pl:"Plan zarządzania komunikacją"},
  body:{
    uk:`Стейкхолдери та їхні потреби в інформації: {перелік стейкхолдерів з потребами}

Створи план комунікацій у форматі таблиці: Стейкхолдер | Тип інформації | Частота |
Формат/канал | Відповідальний за передачу`,
    en:`Stakeholders and their information needs: {list of stakeholders with needs}

Create a communications plan as a table: Stakeholder | Information type | Frequency |
Format/channel | Responsible for delivery`,
    pl:`Interesariusze i ich potrzeby informacyjne: {lista interesariuszy z potrzebami}

Stwórz plan komunikacji w formie tabeli: Interesariusz | Rodzaj informacji | Częstotliwość |
Format/kanał | Odpowiedzialny za przekazanie`
  }
},
{
  id:39, group:"focus",
  groupLabel:{uk:"Виконання", en:"Executing", pl:"Realizacja"},
  title:{uk:"Підготовка до kick-off зустрічі команди", en:"Preparing a team kick-off meeting", pl:"Przygotowanie spotkania rozpoczynającego (kick-off)"},
  body:{
    uk:`Проєкт: {назва та короткий опис}
Учасники kick-off: {перелік ролей}
Тривалість зустрічі: {час}

Створи детальний порядок денний kick-off зустрічі з орієнтовним таймінгом
для кожного пункту, ключовими повідомленнями, які потрібно донести, та
списком питань для обговорення з командою.`,
    en:`Project: {name and short description}
Kick-off participants: {list of roles}
Meeting duration: {time}

Create a detailed kick-off meeting agenda with an estimated timing
for each item, key messages that need to be delivered, and a
list of discussion questions for the team.`,
    pl:`Projekt: {nazwa i krótki opis}
Uczestnicy kick-off: {lista ról}
Czas trwania spotkania: {czas}

Stwórz szczegółowy porządek obrad spotkania kick-off z orientacyjnym czasem
dla każdego punktu, kluczowymi komunikatami do przekazania oraz
listą pytań do omówienia z zespołem.`
  }
},
{
  id:40, group:"focus",
  groupLabel:{uk:"Виконання", en:"Executing", pl:"Realizacja"},
  title:{uk:"Вирішення конфлікту в команді", en:"Resolving a team conflict", pl:"Rozwiązywanie konfliktu w zespole"},
  body:{
    uk:`Опис конфліктної ситуації: {хто, що сталося, поточний емоційний стан сторін}

Запропонуй:
1. Ймовірну корінну причину конфлікту (не лише симптом)
2. Покроковий підхід до медіації
3. Конкретні фрази для відкриття розмови з кожною стороною
4. Як запобігти повторенню подібного конфлікту`,
    en:`Conflict situation description: {who, what happened, current emotional state of the parties}

Suggest:
1. The likely root cause of the conflict (not just the symptom)
2. A step-by-step mediation approach
3. Specific phrases to open the conversation with each party
4. How to prevent a similar conflict from recurring`,
    pl:`Opis sytuacji konfliktowej: {kto, co się stało, obecny stan emocjonalny stron}

Zaproponuj:
1. Prawdopodobną przyczynę źródłową konfliktu (nie tylko symptom)
2. Podejście krok po kroku do mediacji
3. Konkretne sformułowania otwierające rozmowę z każdą ze stron
4. Jak zapobiec ponownemu wystąpieniu podobnego konfliktu`
  }
},
{
  id:41, group:"focus",
  groupLabel:{uk:"Моніторинг і контроль", en:"Monitoring and Controlling", pl:"Monitorowanie i kontrola"},
  title:{uk:"Складання статус-звіту проєкту", en:"Building a project status report", pl:"Tworzenie raportu statusu projektu"},
  body:{
    uk:`Дані про поточний стан: {прогрес по задачах, бюджет, ризики, проблеми}
Аудиторія звіту: {спонсор / команда / зовнішні стейкхолдери}

Створи структурований статус-звіт: загальний статус (зелений/жовтий/червоний),
ключові досягнення періоду, проблеми та ризики, що потребують уваги, плани на
наступний період. Тон і рівень деталізації — адаптовані під аудиторію.`,
    en:`Current status data: {task progress, budget, risks, issues}
Report audience: {sponsor / team / external stakeholders}

Create a structured status report: overall status (green/yellow/red),
key achievements this period, issues and risks needing attention, plans for
the next period. Tone and level of detail adapted to the audience.`,
    pl:`Dane o bieżącym stanie: {postęp zadań, budżet, ryzyka, problemy}
Odbiorca raportu: {sponsor / zespół / zewnętrzni interesariusze}

Stwórz uporządkowany raport statusu: ogólny status (zielony/żółty/czerwony),
kluczowe osiągnięcia okresu, problemy i ryzyka wymagające uwagi, plany na
kolejny okres. Ton i poziom szczegółowości dostosowane do odbiorcy.`
  }
},
{
  id:42, group:"focus",
  groupLabel:{uk:"Моніторинг і контроль", en:"Monitoring and Controlling", pl:"Monitorowanie i kontrola"},
  title:{uk:"Аналіз відхилень і рекомендації щодо коригувальних дій", en:"Variance analysis and corrective action recommendations", pl:"Analiza odchyleń i rekomendacje działań korygujących"},
  body:{
    uk:`Плановий стан на цю дату: {дані}
Фактичний стан: {дані}

Проаналізуй відхилення, визнач, чи вони в межах допустимого порогу, чи вимагають
формального запиту на зміну (change request). Запропонуй 2-3 варіанти коригувальних дій.`,
    en:`Planned state as of this date: {data}
Actual state: {data}

Analyze the variance, determine whether it's within an acceptable threshold or requires
a formal change request. Suggest 2-3 corrective action options.`,
    pl:`Planowany stan na ten dzień: {dane}
Stan faktyczny: {dane}

Przeanalizuj odchylenie, ustal, czy mieści się w dopuszczalnym progu, czy wymaga
formalnego wniosku o zmianę (change request). Zaproponuj 2-3 warianty działań korygujących.`
  }
},
{
  id:43, group:"focus",
  groupLabel:{uk:"Моніторинг і контроль", en:"Monitoring and Controlling", pl:"Monitorowanie i kontrola"},
  title:{uk:"Обробка запиту на зміну (Change Request)", en:"Processing a change request", pl:"Obsługa wniosku o zmianę (Change Request)"},
  body:{
    uk:`Запит на зміну: {опис запиту}
Поточний обсяг/бюджет/графік: {дані}

Проаналізуй запит через призму інтегрованого контролю змін:
1. Вплив на обсяг, графік, бюджет, ризики та якість
2. Альтернативи, якщо запит неможливо задовольнити повністю
3. Рекомендація: схвалити / відхилити / схвалити з умовами`,
    en:`Change request: {request description}
Current scope/budget/schedule: {data}

Analyze the request through the lens of integrated change control:
1. Impact on scope, schedule, budget, risk, and quality
2. Alternatives if the request cannot be fully accommodated
3. Recommendation: approve / reject / approve with conditions`,
    pl:`Wniosek o zmianę: {opis wniosku}
Obecny zakres/budżet/harmonogram: {dane}

Przeanalizuj wniosek przez pryzmat zintegrowanej kontroli zmian:
1. Wpływ na zakres, harmonogram, budżet, ryzyko i jakość
2. Alternatywy, jeśli wniosku nie da się w pełni zrealizować
3. Rekomendacja: zatwierdzić / odrzucić / zatwierdzić z warunkami`
  }
},
{
  id:44, group:"focus",
  groupLabel:{uk:"Завершення", en:"Closing", pl:"Zamykanie"},
  title:{uk:"Проведення ретроспективи проєкту (Lessons Learned)", en:"Running a project retrospective (Lessons Learned)", pl:"Przeprowadzenie retrospektywy projektu (Lessons Learned)"},
  body:{
    uk:`Короткий підсумок проєкту: {що було заплановано, що вийшло фактично}
Ключові події: {успіхи та проблеми протягом проєкту}

Структуруй ретроспективу за форматом: Що спрацювало добре / Що варто покращити /
Конкретні рекомендації для майбутніх проєктів. Сформулюй 3-5 дій, які команда
реально може застосувати наступного разу.`,
    en:`Brief project summary: {what was planned, what actually happened}
Key events: {successes and issues throughout the project}

Structure the retrospective as: What went well / What to improve /
Specific recommendations for future projects. Formulate 3-5 actions the team
can realistically apply next time.`,
    pl:`Krótkie podsumowanie projektu: {co zaplanowano, co faktycznie wyszło}
Kluczowe wydarzenia: {sukcesy i problemy w trakcie projektu}

Ustrukturyzuj retrospektywę w formacie: Co się sprawdziło / Co warto poprawić /
Konkretne rekomendacje na przyszłe projekty. Sformułuj 3-5 działań, które zespół
realnie może zastosować następnym razem.`
  }
},
{
  id:45, group:"focus",
  groupLabel:{uk:"Завершення", en:"Closing", pl:"Zamykanie"},
  title:{uk:"Чек-лист формального закриття проєкту", en:"Formal project closure checklist", pl:"Lista kontrolna formalnego zamknięcia projektu"},
  body:{
    uk:`Тип проєкту: {опис}

Створи повний чек-лист формального закриття проєкту: приймання результатів
замовником, фінансове закриття (закриття контрактів, фінальні платежі),
архівування документації, вивільнення ресурсів команди, комунікація про
завершення проєкту стейкхолдерам.`,
    en:`Project type: {description}

Create a complete formal project closure checklist: client acceptance of
deliverables, financial closure (contract closure, final payments),
documentation archiving, release of team resources, communicating
project completion to stakeholders.`,
    pl:`Typ projektu: {opis}

Stwórz kompletną listę kontrolną formalnego zamknięcia projektu: odbiór rezultatów
przez klienta, zamknięcie finansowe (zamknięcie kontraktów, płatności końcowe),
archiwizacja dokumentacji, zwolnienie zasobów zespołu, komunikacja o
zakończeniu projektu do interesariuszy.`
  }
},

// ===== SECTION 4: CROSS-CUTTING =====
{
  id:46, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Розробка RACI-матриці", en:"Building a RACI matrix", pl:"Tworzenie macierzy RACI"},
  body:{
    uk:`Перелік ключових задач/рішень проєкту: {перелік}
Ролі в проєкті: {перелік ролей}

Створи RACI-матрицю (Responsible, Accountable, Consulted, Informed) для кожної
задачі/рішення. Виділи задачі, де немає чіткого "Accountable" — це зона ризику.`,
    en:`List of key project tasks/decisions: {list}
Project roles: {list of roles}

Create a RACI matrix (Responsible, Accountable, Consulted, Informed) for each
task/decision. Flag any tasks without a clear "Accountable" — that's a risk area.`,
    pl:`Lista kluczowych zadań/decyzji projektu: {lista}
Role w projekcie: {lista ról}

Stwórz macierz RACI (Responsible, Accountable, Consulted, Informed) dla każdego
zadania/decyzji. Zaznacz zadania bez jasno określonego „Accountable” — to obszar ryzyka.`
  }
},
{
  id:47, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Аналіз стейкхолдерів методом влада/інтерес", en:"Power/Interest stakeholder analysis", pl:"Analiza interesariuszy metodą władza/zainteresowanie"},
  body:{
    uk:`{перелік стейкхолдерів}

Розподіли стейкхолдерів по квадрантах матриці Влада/Інтерес (Power/Interest Grid)
та для кожного квадранту запропонуй загальну стратегію взаємодії.`,
    en:`{list of stakeholders}

Place stakeholders into the quadrants of the Power/Interest Grid
and suggest an overall engagement strategy for each quadrant.`,
    pl:`{lista interesariuszy}

Rozmieść interesariuszy w kwadrantach macierzy Władza/Zainteresowanie (Power/Interest Grid)
i zaproponuj ogólną strategię zaangażowania dla każdego kwadrantu.`
  }
},
{
  id:48, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Оцінка складності проєкту", en:"Project complexity assessment", pl:"Ocena złożoności projektu"},
  body:{
    uk:`Опис проєкту: {опис}

Оціни складність проєкту за факторами: технічна невизначеність, кількість
стейкхолдерів, організаційні зміни, взаємозалежності, темп змін вимог.
Дай загальну оцінку складності (низька/середня/висока) та рекомендації щодо
підходу до управління з урахуванням цієї складності.`,
    en:`Project description: {description}

Assess project complexity across factors: technical uncertainty, number of
stakeholders, organizational change, interdependencies, pace of requirement changes.
Give an overall complexity rating (low/medium/high) and recommendations for a
management approach given this complexity.`,
    pl:`Opis projektu: {opis}

Oceń złożoność projektu według czynników: niepewność techniczna, liczba
interesariuszy, zmiany organizacyjne, wzajemne zależności, tempo zmian wymagań.
Podaj ogólną ocenę złożoności (niska/średnia/wysoka) oraz rekomendacje dotyczące
podejścia do zarządzania z uwzględnieniem tej złożoności.`
  }
},
{
  id:49, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Підготовка до презентації для спонсора", en:"Preparing a sponsor presentation", pl:"Przygotowanie prezentacji dla sponsora"},
  body:{
    uk:`Мета презентації: {затвердження бюджету / статус / ескалація проблеми тощо}
Ключові дані: {вставити цифри та факти}
Особливості спонсора: {що для нього важливо, стиль комунікації}

Створи структуру презентації з ключовими тезами для кожного слайду (5-7 слайдів),
включно з чітким "запитом" (ask) до спонсора в кінці.`,
    en:`Presentation goal: {budget approval / status update / issue escalation, etc.}
Key data: {paste figures and facts}
Sponsor's characteristics: {what matters to them, communication style}

Create a presentation structure with key talking points for each slide (5-7 slides),
including a clear "ask" for the sponsor at the end.`,
    pl:`Cel prezentacji: {zatwierdzenie budżetu / status / eskalacja problemu itp.}
Kluczowe dane: {wklej liczby i fakty}
Cechy sponsora: {co jest dla niego ważne, styl komunikacji}

Stwórz strukturę prezentacji z kluczowymi tezami dla każdego slajdu (5-7 slajdów),
w tym jasną „prośbę” (ask) do sponsora na końcu.`
  }
},
{
  id:50, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Порівняльний аналіз двох варіантів рішення", en:"Comparative analysis of two solution options", pl:"Analiza porównawcza dwóch wariantów rozwiązania"},
  body:{
    uk:`Варіант А: {опис}
Варіант Б: {опис}
Критерії оцінки, важливі для проєкту: {перелік — вартість, час, ризик, якість тощо}

Створи порівняльну таблицю за критеріями з ваговими коефіцієнтами, розрахуй
зважену оцінку для кожного варіанту та дай обґрунтовану рекомендацію.`,
    en:`Option A: {description}
Option B: {description}
Evaluation criteria important to the project: {list — cost, time, risk, quality, etc.}

Create a comparison table by criteria with weights, calculate a
weighted score for each option, and give a justified recommendation.`,
    pl:`Wariant A: {opis}
Wariant B: {opis}
Kryteria oceny istotne dla projektu: {lista — koszt, czas, ryzyko, jakość itp.}

Stwórz tabelę porównawczą według kryteriów z wagami, oblicz
ważoną ocenę dla każdego wariantu i podaj uzasadnioną rekomendację.`
  }
},
{
  id:51, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Симуляція складного стейкхолдер-інтерв'ю", en:"Simulating a difficult stakeholder interview", pl:"Symulacja trudnej rozmowy z interesariuszem"},
  body:{
    uk:`Роль: Ти — {роль стейкхолдера, наприклад "скептичний фінансовий директор"} проєкту {опис}.
Твоя мета в цій розмові: {опис мотивації персонажа}.

Я гратиму роль проєктного менеджера і намагатимусь {опис моєї мети в розмові}.
Реагуй реалістично, включно із запереченнями та складними запитаннями, поки я
не завершу симуляцію словом "СТОП".`,
    en:`Role: You are {stakeholder role, e.g. "a skeptical CFO"} of the project {description}.
Your goal in this conversation: {character's motivation description}.

I will play the project manager and try to {description of my goal in the conversation}.
Respond realistically, including objections and tough questions, until I
end the simulation with the word "STOP".`,
    pl:`Rola: Jesteś {rola interesariusza, np. "sceptyczny dyrektor finansowy"} projektu {opis}.
Twój cel w tej rozmowie: {opis motywacji postaci}.

Ja odegram rolę kierownika projektu i będę próbować {opis mojego celu w rozmowie}.
Reaguj realistycznie, w tym z zastrzeżeniami i trudnymi pytaniami, dopóki
nie zakończę symulacji słowem „STOP”.`
  }
},
{
  id:52, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Генерація питань для ретроспективи спринту (Agile)", en:"Generating sprint retrospective questions (Agile)", pl:"Generowanie pytań do retrospektywy sprintu (Agile)"},
  body:{
    uk:`Контекст спринту: {що було заплановано, ключові події спринту}

Згенеруй 8-10 питань для ретроспективи, розподілених по категоріях:
що пройшло добре, що не спрацювало, що спробувати наступного разу,
подяки команді. Уникай загальних питань — прив'яжи їх до контексту спринту.`,
    en:`Sprint context: {what was planned, key events of the sprint}

Generate 8-10 retrospective questions, grouped by category:
what went well, what didn't work, what to try next time,
team appreciations. Avoid generic questions — tie them to the sprint's context.`,
    pl:`Kontekst sprintu: {co zaplanowano, kluczowe wydarzenia sprintu}

Wygeneruj 8-10 pytań do retrospektywy, pogrupowanych według kategorii:
co poszło dobrze, co nie zadziałało, co spróbować następnym razem,
podziękowania dla zespołu. Unikaj ogólnych pytań — powiąż je z kontekstem sprintu.`
  }
},
{
  id:53, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Аналіз кореневої причини (5 Whys)", en:"Root cause analysis (5 Whys)", pl:"Analiza przyczyn źródłowych (5 Whys)"},
  body:{
    uk:`Проблема: {опис проблеми, яка виникла в проєкті}

Проведи аналіз методом "5 чому" (5 Whys) — послідовно заглиблюйся в причини,
кожного разу запитуючи "чому це сталося". Дійди до кореневої, а не поверхневої
причини, і запропонуй профілактичну дію.`,
    en:`Problem: {description of the problem that occurred in the project}

Conduct a "5 Whys" analysis — repeatedly dig into causes,
asking "why did this happen" each time. Arrive at the root cause, not just a
surface symptom, and suggest a preventive action.`,
    pl:`Problem: {opis problemu, który wystąpił w projekcie}

Przeprowadź analizę metodą „5 razy dlaczego” (5 Whys) — sukcesywnie zagłębiaj się w przyczyny,
za każdym razem pytając „dlaczego to się stało”. Dojdź do przyczyny źródłowej, a nie powierzchownej,
i zaproponuj działanie zapobiegawcze.`
  }
},
{
  id:54, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Матриця трасування вимог", en:"Requirements Traceability Matrix", pl:"Macierz identyfikowalności wymagań"},
  body:{
    uk:`Список вимог проєкту: {перелік вимог}
Відповідні результати/тести: {перелік}

Створи матрицю трасування, що зв'язує кожну вимогу з джерелом (стейкхолдер),
результатом реалізації та статусом верифікації.`,
    en:`List of project requirements: {list of requirements}
Corresponding deliverables/tests: {list}

Create a traceability matrix linking each requirement to its source (stakeholder),
its implementation deliverable, and its verification status.`,
    pl:`Lista wymagań projektu: {lista wymagań}
Odpowiadające rezultaty/testy: {lista}

Stwórz macierz identyfikowalności łączącą każde wymaganie ze źródłem (interesariusz),
rezultatem realizacji i statusem weryfikacji.`
  }
},
{
  id:55, group:"cross",
  groupLabel:{uk:"Наскрізні інструменти", en:"Cross-Cutting Tools", pl:"Narzędzia przekrojowe"},
  title:{uk:"Оцінка готовності до переходу на наступний етап (Stage Gate)", en:"Stage gate readiness review", pl:"Ocena gotowości do przejścia na kolejny etap (Stage Gate)"},
  body:{
    uk:`Поточний етап проєкту: {назва етапу}
Критерії завершення етапу: {перелік критеріїв, якщо є, або "визнач сам на основі опису"}
Фактичний стан: {опис}

Оціни готовність до переходу на наступний етап за кожним критерієм (виконано/
частково/не виконано) та дай рекомендацію: перейти / перейти з умовами / затримати перехід.`,
    en:`Current project stage: {stage name}
Stage completion criteria: {list of criteria, if any, or "determine based on the description"}
Actual state: {description}

Assess readiness to move to the next stage against each criterion (met/
partially met/not met) and give a recommendation: proceed / proceed with conditions / hold.`,
    pl:`Obecny etap projektu: {nazwa etapu}
Kryteria zakończenia etapu: {lista kryteriów, jeśli są, lub „określ samodzielnie na podstawie opisu”}
Stan faktyczny: {opis}

Oceń gotowość do przejścia na kolejny etap według każdego kryterium (spełnione/
częściowo spełnione/niespełnione) i podaj rekomendację: przejść / przejść z warunkami / wstrzymać przejście.`
  }
}
];
