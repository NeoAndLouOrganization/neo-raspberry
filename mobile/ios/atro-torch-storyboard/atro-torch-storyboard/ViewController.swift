//
//  ViewController.swift
//  atro-torch-storyboard
//
//  Created by Viktor Vasylkovskyi on 16/08/2023.
//

import UIKit

class ViewController: UIViewController {

    var backgroundColor = UIColor.red
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBOutlet weak var myButton: UIButton!
    
    
    @IBAction func myButton(_ sender: Any) {
        print("test")
        
        if(backgroundColor == UIColor.red) {
            self.view.backgroundColor = UIColor.blue
            backgroundColor = UIColor.blue
        } else {
            self.view.backgroundColor = UIColor.red
            backgroundColor = UIColor.red
        }
    }
}

     
