#pragma strict
var canArray: GameObject[];
var canPosArray: Vector3[];
var canRotArray: Quaternion[];
var ball: GameObject;
var initialBallPos: Vector3;
static var timeToResetBall: float=1.0f;
var i:int=0;
static var numOfCans:int;
var retryOn:boolean=false;
var nextCan: boolean=false;
var smoothDampVel:Vector3=Vector3(100,100,100);
var smoothDampVel1:Vector3=Vector3(200,200,200);
var timeStamp: float=0;
var timeSinceNextCan: float;
var ballSetInPlace: boolean=false;
static var timeSinceGameRetry: int=0;
static var retryOnStatic: boolean=false;


function Start () {
initialBallPos=ball.transform.position;
numOfCans=canArray.Length;

for(; i<canArray.Length; i++)	{

canPosArray[i]=  canArray[i].gameObject.transform.position;
canRotArray[i]=canArray[i].gameObject.transform.rotation;


}

}

function Update () {
retryOnStatic=retryOn;

if (Input.GetKeyDown("r"))	{
	i=0;
	retryOn=true;
	nextCan=true;
	timeSinceGameRetry=Time.time;
}

if (retryOn)	{
	if (!ballSetInPlace)	{
	ball.constantForce.enabled=false;
	ball.rigidbody.isKinematic=true;
	ball.rigidbody.collider.enabled=false;
	ball.transform.position=Vector3.SmoothDamp(ball.transform.position, initialBallPos,smoothDampVel1, 1.0f);
	}
	if (nextCan)	{
	timeStamp=Time.time;
	nextCan=false;
	}
	timeSinceNextCan=Time.time-timeStamp;

	if (i< numOfCans)	{
	canArray[i].rigidbody.isKinematic=true;
	canArray[i].rigidbody.collider.enabled=false;
	canArray[i].transform.position=Vector3.SmoothDamp(canArray[i].transform.position, canPosArray[i], smoothDampVel,0.5f);
	canArray[i].transform.rotation=Quaternion.Lerp(canArray[i].transform.rotation, canRotArray[i], 5*Time.deltaTime);
	}
	
	if(timeSinceNextCan > timeToResetBall)	{
		if(i< canArray.Length)	{
		canArray[i].transform.position=canPosArray[i];
		canArray[i].transform.rotation=canRotArray[i];
		}
	i++;
	timeStamp=Time.time;
	if (i==2)	{ //Gives Ball 3 sec to get into position
	ball.rigidbody.isKinematic=false;
	ball.rigidbody.collider.enabled=true;
	ball.rigidbody.useGravity=false;
	ball.transform.position=initialBallPos;
	ballSetInPlace=true;
	ball.rigidbody.velocity=Vector3(0,0,0);
	ball.constantForce.force=Vector3(0,0,0);
	}
	nextCan=true;
	}
	
	if(i==canArray.Length)	{
	nextCan=false;
	timeSinceNextCan=0;
	for(var a:int=0;a<canArray.Length; a++)	{
	
	canArray[a].rigidbody.isKinematic=false;
	canArray[a].rigidbody.collider.enabled=true;
	
	}
	ball.rigidbody.velocity=Vector3(0,0,0);
	ball.constantForce.force=Vector3(0,0,0);
	retryOn=false;
	ForceController.setReady=true;
	
	}

}

}