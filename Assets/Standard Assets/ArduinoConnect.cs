using UnityEngine;
using System.Collections;
using System.IO.Ports;

public class ArduinoConnect : MonoBehaviour {
	SerialPort str= new SerialPort("COM3", 9600);
	public GameObject forceObject;
	public static int dist;

	// Use this for initialization
	void Start () {
		str.Open();
		str.ReadTimeout = 1;
		forceObject.constantForce.force= Vector3.zero;
	
	}
	
	// Update is called once per frame
	void Update () {
	
		if (str.IsOpen)	{
			
		try {
//---------START OF TRY---------------------------------------
		dist= int.Parse(str.ReadLine());
		if (dist==0)	{
					dist=100;
				}
		Debug.Log("Distance: " + dist.ToString());
//---------------------END OF TRY--------------------------------------------------
		} 
		catch (System.Exception) {
				
		}
		
//	if ((dist < 20))	{
//
//		forceObject.constantForce.force=Vector3.up*20;
//
//		}
//
//	else	{
//
//		forceObject.constantForce.force=Vector3.zero;
//
//		}
			
		}
		
	}
}
