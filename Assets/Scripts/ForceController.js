#pragma strict
var ball: GameObject;
var timeStamp1: float;
var timeStamp2: float;
static var ready: boolean=true;
var locked: boolean;
var forceOn: boolean=false;
static var forceOnStatic: boolean=false;
var whoosh: AudioClip;
var whooshSoundOn: boolean=true;
var timeOfRDown: float;
static var setReady: boolean=false;

function Start () {

ball.constantForce.enabled=false;

}

function Update () {
forceOnStatic=forceOn;

if (ready)	{

	if (forceOn)	{
	
	timeStamp2=timeStamp2;
	ball.rigidbody.useGravity=false;
	ball.constantForce.enabled=true;
	ball.constantForce.force.x=0;
	ball.constantForce.force.y=0;
	ball.constantForce.force.z= Mathf.Abs((20/(timeStamp2-timeStamp1))/10);
	if (whooshSoundOn)	{
	audio.PlayOneShot(whoosh,1f);
	whooshSoundOn=false;
	}
	
	}
	
	if (ArduinoConnect.dist<=30 && ArduinoConnect.dist>10)	{
	
	timeStamp1=Time.time;
	locked=true;
	
	}	
	
	if (locked)	{
	
	if (ArduinoConnect.dist<=10)	{
	
	timeStamp2=Time.time;
	if(timeStamp2>timeStamp1)	{
	forceOn=true;
	}
	}
	
//	if ((Time.time-timeStamp2)>1)	{
//	
//	locked=false;
//	ready=false;
//	forceOn=false;
//	whooshSoundOn=true;
//	ball.constantForce.enabled=false;
//	
//	}
//	
	
	}
	
	}
	
else if (!ready)	{
	if(setReady) 	{
	ready=true;
	forceOn=false;
	setReady=false;
	ball.rigidbody.velocity=Vector3(0,0,0);
	ball.constantForce.force=Vector3(0,0,0);
	}

}

if(ball.transform.position.z>4.030982)	{
	ball.constantForce.force=Vector3(0,0,0);
	ball.rigidbody.useGravity=true;
}
		
}

function OnCollisionEnter (other: Collision)	{

ready=false;

}