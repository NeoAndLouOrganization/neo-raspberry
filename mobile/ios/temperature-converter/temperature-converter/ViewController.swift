//
//  ViewController.swift
//  temperature-converter
//
//  Created by Viktor Vasylkovskyi on 16/08/2023.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var label: UILabel!
    @IBOutlet weak var input: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    
    @IBAction func ButtonClicked(_ sender: Any) {
        print("Conver Clicked")
        
        if let result = input.text {
            if(result == "") {
                return
            }
            
            label.text = result
        }
    }

}

