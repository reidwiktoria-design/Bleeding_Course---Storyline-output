function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZVMbmBzXss":
        Script1();
        break;
      case "6E53z67cHyg":
        Script2();
        break;
      case "5aNj7aP8OsW":
        Script3();
        break;
      case "5zhwulYGggT":
        Script4();
        break;
      case "5zas3W8Hk9l":
        Script5();
        break;
      case "6AaIV3ap5Eh":
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
  function generateCallsign(gender) {
  const maleAdjectives = ["Сміливий", "Грізний", "Швидкий", "Чорний", "Твердий"];
  const maleNouns = ["Вовк", "Тигр", "Сокіл", "Шрам", "Хижак"];

  const femaleAdjectives = ["Смілива", "Нескорена", "Тиха", "Швидка", "Чорна"];
  const femaleNouns = ["Пантера", "Тінь", "Ластівка", "Відьма", "Рись"];

  const a = gender === "female" ? femaleAdjectives : maleAdjectives;
  const n = gender === "female" ? femaleNouns : maleNouns;

  const adj = a[Math.floor(Math.random() * a.length)];
  const noun = n[Math.floor(Math.random() * n.length)];
  return `${adj} ${noun}`;
}

var player = GetPlayer();
var gender = player.GetVar("Gender");
var generated = generateCallsign(gender);

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

