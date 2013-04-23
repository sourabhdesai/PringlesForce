#pragma strict
var initialRot: Quaternion;
var hasCollided: boolean=false;
static var score: int=0;
var addedScore:boolean=false;
var starWarSkin: GUISkin;

function Start () {

initialRot=transform.rotation;

}

function OnGUI()	{
GUI.skin=starWarSkin;

GUI.Label(Rect(Screen.width*0.05, Screen.height*0.05,Screen.width*0.1, Screen.height*0.1),"Score= "+score);

GUI.Label(Rect(Screen.width*0.05, Screen.height*0.1,Screen.width*0.1, Screen.height*0.1),"Distance= "+ArduinoConnect.dist);

}