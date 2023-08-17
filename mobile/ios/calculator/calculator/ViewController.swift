//
//  ViewController.swift
//  calculator
//
//  Created by Viktor Vasylkovskyi on 16/08/2023.
//

import UIKit

class ViewController: UIViewController {

    var currentOperation: Operator = Operator.Nothing
    
    @IBOutlet weak var resultLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    // button actions
    @IBAction func numberClicked(_ sender:UIButton) {
        switch sender.tag {
        case 0:
            print("0")
        case 1:
            print("1")
        case 2:
            print("2")
        case 3:
            print("3")
        case 4:
            print("4")
        default:
            print("Other")
        }
    }

    @IBAction func operatorClicked(_ sender:UIButton) {
        
    }
    
    @IBAction func equalsClicked(_ sender:UIButton) {
        
    }

}

