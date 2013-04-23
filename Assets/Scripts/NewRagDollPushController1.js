#pragma strict
var ragDoll: GameObject;

var AforceDirectionMaker: GameObject;

var DforceDirectionMaker: GameObject;

var ragDollForceAmount: float=100.0;
private var ADirectionMakerPosInitial: Vector3;
private var ADirectionMakerPosFinal: Vector3;

private var DDirectionMakerPosInitial: Vector3;
private var DDirectionMakerPosFinal: Vector3;

private var AForceVector: Vector3;
private var DForceVector: Vector3;


function Start () {

AforceDirectionMaker.transform.localPosition= Vector3.zero;
DforceDirectionMaker.transform.localPosition= Vector3.zero;
ragDoll.constantForce.enabled=true;


}

function Update () {
//D is in the positive X direction
if (Input.GetKeyDown("d"))	{

	DDirectionMakerPosInitial=DforceDirectionMaker.transform.position;
	DforceDirectionMaker.transform.localPosition= Vector3(1,0,0);
	DDirectionMakerPosFinal=DforceDirectionMaker.transform.position;
	DForceVector=DDirectionMakerPosFinal-DDirectionMakerPosInitial;
	ragDoll.constantForce.force= DForceVector*ragDollForceAmount;
	DforceDirectionMaker.transform.localPosition= Vector3(0,0,0);
	
	}
if (Input.GetKeyUp("d"))	{

	ragDoll.constantForce.force= Vector3.zero;

	}
//A is in negative X direction
if (Input.GetKeyDown("a"))	{

	ADirectionMakerPosInitial=AforceDirectionMaker.transform.position;
	AforceDirectionMaker.transform.localPosition= Vector3(-1,0,0);
	ADirectionMakerPosFinal=AforceDirectionMaker.transform.position;
	AForceVector=ADirectionMakerPosFinal-ADirectionMakerPosInitial;
	ragDoll.constantForce.force= AForceVector*ragDollForceAmount;
	AforceDirectionMaker.transform.localPosition= Vector3(0,0,0);

	}
if (Input.GetKeyUp("a"))	{

	ragDoll.constantForce.force= Vector3.zero;
	}
	
}