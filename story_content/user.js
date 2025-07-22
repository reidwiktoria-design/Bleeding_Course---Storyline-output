function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hzpTP04xF1":
        Script1();
        break;
      case "5hxgkLht6Dh":
        Script2();
        break;
      case "6jRMBzVGBUj":
        Script3();
        break;
      case "5qyWsaL78zJ":
        Script4();
        break;
      case "6LzulzOqNEa":
        Script5();
        break;
      case "6d2cUqS7EKM":
        Script6();
        break;
      case "6cuZcz9OT43":
        Script7();
        break;
      case "6ADmzJlDhse":
        Script8();
        break;
      case "5yQSLdDSEBx":
        Script9();
        break;
      case "6caLXdf0pu1":
        Script10();
        break;
      case "6akWEtwOgmG":
        Script11();
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

  // 7. Має бути хоча б одна голосна (українська)
  if (!/[аеєиіїоуюяАЕЄИІЇОУЮЯ]/.test(callsign)) return false;

  // 8. Заборона на дивні комбінації
  const suspicious = ["ьь", "тм", "рг", "пщ", "щг", "гг", "цц"];
  if (suspicious.some(pair => lc.includes(pair))) return false;

  return true;
}

var player = GetPlayer();
var callsign = player.GetVar("UserName").trim();
var isValid = validateCallsign(callsign);

if (isValid) {
  player.SetVar("Variable1", false);
} else {
  player.SetVar("Variable1", true);
  var suggested = generateCallsign();
  player.SetVar("SuggestedName", suggested);
}

}

function Script3()
{
  function generateCallsign(gender) {
const maleAdjectives = [
  "Сміливий", "Грізний", "Швидкий", "Чорний", "Твердий", "Залізний", "Темний", "Гострий", "Сталевий", "Могутній", "Тихий", "Дикий", "Сонячний", "Нічний", "Холодний", "Невловимий", "Бойовий", "Мовчазний", "Білий", "Вірний", "Рішучий", "Глухий", "Червоний", "Влучний", "Крижаний", "Срібний", "Косий", "Гримучий", "Шалений", "Жорсткий", "Кмітливий", "Гарячий", "Блідий", "Сивий", "Тіньовий", "Міцний", "Невблаганний", "Грізний", "Наглий", "Рваний", "Хижий", "Хитрий", "Непохитний", "Броньований", "Вогняний", "Зухвалий", "Глибокий", "Пильний", "Стриманий", "Чіткий"
];
const maleNouns = [
  "Вовк", "Тигр", "Сокіл", "Шрам", "Хижак", "Орел", "Кабан", "Грім", "Кіготь", "Дух", "Камінь", "Яструб", "Мисливець", "Шолом", "Лев", "Кулак", "Буревій", "Смерч", "Залп", "Таран", "Щит", "Барс", "Бастіон", "Фантом", "Снаряд", "Шрам", "Сигнал", "Рик", "Рев", "Крик", "Спалах", "Фланг", "Факел", "Тиск", "Спокій", "Каскад", "Омега", "Молот", "Бій", "Марш", "Трек", "Пазур", "Обрив", "Вибух", "Порив", "Гармата", "Щелепа", "Рикошет", "Шторм", "Фугас"
];
const femaleAdjectives = [
  "Смілива", "Нескорена", "Тиха", "Швидка", "Чорна", "Темна", "Срібна", "Гостра", "Тіньова", "Холодна", "Мерехтлива", "Біла", "Мовчазна", "Вогняна", "Крижана", "Залізна", "Тверда", "Грізна", "Сонячна", "Нічна", "Рішуча", "Броньована", "Дика", "Зухвала", "Легка", "Гаряча", "Тривожна", "Могутня", "Сталевa", "Небесна", "Грозова", "Стрімка", "Жорстка", "Червона", "Загадкова", "Хитра", "Влучна", "Гримуча", "Срібляста", "Сонна", "Пильна", "Тіньова", "Шалена", "Непохитна", "Спокійна", "Міцна", "Сильна", "Тягуча", "Глуха", "Зваблива"
];
const femaleNouns = [
  "Пантера", "Тінь", "Ластівка", "Відьма", "Рись", "Кішка", "Іскра", "Буря", "Змія", "Шрама", "Хвиля", "Кобра", "Пташка", "Вовчиця", "Гроза", "Крапля", "Блискавка", "Троянда", "Орлиця", "Сова", "Сутінь", "Хвилина", "Стріла", "Миша", "Гілка", "Краплина", "Полум’я", "Зірка", "Хмара", "Шепіт", "Волога", "Куля", "Іллюзія", "Мана", "Діва", "Зрада", "Пустеля", "Сирена", "Каска", "Ніч", "Пісня", "Відлуння", "Паща", "Кобила", "Ріка", "Кров", "Тиша", "Сльоза", "Коса", "Жало"
];


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

function Script7()
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

function Script8()
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

function Script9()
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

function Script10()
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

function Script11()
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

