function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lMsznKzyE0":
        Script1();
        break;
      case "6ouyKLBUFpt":
        Script2();
        break;
      case "6idhCVd4AYm":
        Script3();
        break;
      case "6NGDkAt4zta":
        Script4();
        break;
      case "5lbZHj4CxDR":
        Script5();
        break;
      case "67Yg5gB6t99":
        Script6();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var now = new Date();

// Дата
var dd = String(now.getDate()).padStart(2, '0');
var mm = String(now.getMonth() + 1).padStart(2, '0');
var yyyy = now.getFullYear();
player.SetVar("today", dd + "." + mm + "." + yyyy);

// Час
var hours = String(now.getHours()).padStart(2, '0');
var minutes = String(now.getMinutes()).padStart(2, '0');
player.SetVar("currentTime", hours + ":" + minutes);
}

function Script2()
{
  function validateCallsign(callsign) {
  // 1. Мінімальна довжина
  if (callsign.length < 3) return false;

  // 2. Максимальна довжина
  if (callsign.length > 15) return false;

  // 3. Лише українські літери, апостроф, пробіл, тире
  var regex = /^[А-Яа-яІіЇїЄєҐґʼ\- ]+$/;
  if (!regex.test(callsign)) return false;

  // 4. Один повторюваний символ ("яяяя", "бббб")
  if (/^(.)\1+$/.test(callsign)) return false;

  // 5. Повторювані послідовності ("лплп", "цукцук")
  if (/(..+)\1+/i.test(callsign)) return false;

  // 6. Заборонені слова
  var forbidden = ["адміністратор", "тест", "admin", "test"];
  var lc = callsign.toLowerCase();
  if (forbidden.some(word => lc.includes(word))) return false;

  return true;
}

// --- Основна логіка ---
var player = GetPlayer();
var callsign = player.GetVar("UserName").trim();
var isValid = validateCallsign(callsign);

if (isValid) {
  player.SetVar("Variable1", false); // все добре
} else {
  player.SetVar("Variable1", true);  // є помилка
  var suggested = generateCallsign();
  player.SetVar("SuggestedName", suggested); // відображай у шарі або десь ще
}

}

function Script3()
{
  function generateCallsign() {
  const adjectives = ["Сміливий", "Чорний", "Сірий", "Тихий", "Швидкий",
"Шалений", "Грізний", "Вірний", "Твердий", "Крижаний",
"Рішучий", "Залізний", "Темний", "Холодний", "Броньований",
"Нічний", "Зухвалий", "Дикий", "Кмітливий", "Гострий",
"Тіньовий", "Сталевий", "Загадковий", "Бойовий", "Косий",
"Мовчазний", "Сонний", "Блідий", "Невловимий", "Гримучий"];
  const nouns = ["Вовк", "Тигр", "Сокіл", "Дух", "Шрам",
"Сивий", "Грім", "Каскад", "Орел", "Карась",
"Кабан", "Хижак", "Смерч", "Кобра", "Снайпер",
"Відлуння", "Камінь", "Козак", "Шепіт", "Кулак",
"Рись", "Шолом", "Кіготь", "Залп", "Шторм",
"Омега", "Бекон", "Барс", "Бастіон", "Таран"];
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
}

var player = GetPlayer();
var generated = generateCallsign();

player.SetVar("UserName", generated);
player.SetVar("SuggestedName", generated);

}

function Script4()
{
  var player = GetPlayer();
var now = new Date();

// Дата
var dd = String(now.getDate()).padStart(2, '0');
var mm = String(now.getMonth() + 1).padStart(2, '0');
var yyyy = now.getFullYear();
player.SetVar("today", dd + "." + mm + "." + yyyy);

// Час
var hours = String(now.getHours()).padStart(2, '0');
var minutes = String(now.getMinutes()).padStart(2, '0');
player.SetVar("currentTime", hours + ":" + minutes);
}

function Script5()
{
  var player = GetPlayer();
var now = new Date();

// Дата
var dd = String(now.getDate()).padStart(2, '0');
var mm = String(now.getMonth() + 1).padStart(2, '0');
var yyyy = now.getFullYear();
player.SetVar("today", dd + "." + mm + "." + yyyy);

// Час
var hours = String(now.getHours()).padStart(2, '0');
var minutes = String(now.getMinutes()).padStart(2, '0');
player.SetVar("currentTime", hours + ":" + minutes);
}

function Script6()
{
  var player = GetPlayer();
var now = new Date();

// Дата
var dd = String(now.getDate()).padStart(2, '0');
var mm = String(now.getMonth() + 1).padStart(2, '0');
var yyyy = now.getFullYear();
player.SetVar("today", dd + "." + mm + "." + yyyy);

// Час
var hours = String(now.getHours()).padStart(2, '0');
var minutes = String(now.getMinutes()).padStart(2, '0');
player.SetVar("currentTime", hours + ":" + minutes);
}

