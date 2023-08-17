//
//  ViewController.swift
//  restful-api
//
//  Created by Viktor Vasylkovskyi on 16/08/2023.
//

import UIKit
import Alamofire

class ViewController: UIViewController {

    var battery: String = ""
    var soilMoisture: String = ""
        
    @IBOutlet weak var batteryRef: UILabel!
    @IBOutlet weak var soilMoistureRef: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        self.getDeviceInfo()
        // Do any additional setup after loading the view.
    }


    func getDeviceInfo() {
        print("TEST")
        Alamofire.request("https://local.vvasylkovskyi.com:4443/device-info").responseJSON {
            response in
            let jsonString = response.result.value!
            if let deviceInfo = jsonString as? Dictionary<String, String> {
                print("Data \(deviceInfo)")
                print(deviceInfo["battery"]!)
                    print("DeviceInfo \(deviceInfo)")
                    self.battery = deviceInfo["battery"]!
                    self.soilMoisture = deviceInfo["soilMoisture"]!
                    self.batteryRef.text = "Battery: " + self.battery.description
                    self.soilMoistureRef.text = "Soil Moisture: " + self.soilMoisture.description
            }
        }
    }
}

