#pragma strict

//THIS CODE NEEDS EDITING. FIX IT SO THAT THE CAMERA IS ACTUALLY LOOKING
//AT THE forceObject USING QUATERNION.LERP!!!

var mainCamera: GameObject;
var topDownCameraPosition: GameObject;
var forceObject: GameObject;
var velocity:Vector3=Vector3(100,100,100);


function Start () {

mainCamera.camera.enabled=true;
mainCamera.transform.position=topDownCameraPosition.transform.position;

}

function Update () {
//the following is for assigning the topdown cameras position
	topDownCameraPosition.transform.position.x=forceObject.transform.position.x-5;
	topDownCameraPosition.transform.position.z=forceObject.transform.position.z;
	topDownCameraPosition.transform.position.y=forceObject.transform.position.y + 7;
	
	mainCamera.transform.position= Vector3.SmoothDamp(mainCamera.transform.position,topDownCameraPosition.transform.position,velocity,0.5f);
	mainCamera.transform.LookAt(forceObject.transform);
	mainCamera.camera.enabled=true;
	
}