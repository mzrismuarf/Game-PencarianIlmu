function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5d6ebCT7seS":
        Script1();
        break;
      case "5wnlwF6aSFz":
        Script2();
        break;
      case "5niS4fJ8Pkj":
        Script3();
        break;
      case "6E6Ph3AdAcO":
        Script4();
        break;
      case "646fXy4GbHY":
        Script5();
        break;
      case "6kd7HUYkVFU":
        Script6();
        break;
      case "61X336exPS1":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

