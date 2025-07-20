function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pYDhbRm3fy":
        Script1();
        break;
      case "5a4DEwC7uKG":
        Script2();
        break;
      case "6nYoQRra4XU":
        Script3();
        break;
      case "5WGgYzTJGjJ":
        Script4();
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

function Script3()
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

