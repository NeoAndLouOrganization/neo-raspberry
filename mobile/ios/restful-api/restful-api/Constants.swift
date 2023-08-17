//
//  Constants.swift
//  restful-api
//
//  Created by Viktor Vasylkovskyi on 16/08/2023.
//

import Foundation

struct DeviceInfo: Decodable {
    let battery: Int
    let soilMoisture: Int
    let waterLevel: Int
    let waterSpent: Int
}

struct myCustomApi {
    private let baseUrl = "https://viktor.vvasylkovskyi.com:4443/device-info"
    private let format = "format=json"
    
    private var queryParam = ""
    
    init (queryParam1: String, queryParam2: String) {
        self.queryParam = "?q=\(queryParam),\(queryParam2)"
    }
    
    func getFullUrl() -> String {
        return baseUrl + self.queryParam
    }
}
