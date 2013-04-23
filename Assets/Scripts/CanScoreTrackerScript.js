#pragma strict
var initialRot: Quaternion;
var initialPos: Vector3;
var hasCollided: boolean=false;
static var score: int=0;
var addedScore:boolean=false;

function Start () {

initialRot=transform.rotation;
initialPos=transform.position;

}

function Update () {

if (gameObject.rigidbody.velocity.sqrMagnitude>0 && Time.time>0.75)	{ //Replace Time.time with TimeSinceGameRetry once the retry script is made

hasCollided=true;

}

if (hasCollided==true && addedScore==false && ForceController.forceOnStatic && initialPos != transform.position)	{

if (transform.rotation.y != initialRot.y )	{

MainScoreTrackerScript.score=MainScoreTrackerScript.score+1;
addedScore=true;

}

}

if(RetryController.retryOnStatic)	{

	hasCollided=false;
	addedScore=false;
	MainScoreTrackerScript.score=0;

}

}