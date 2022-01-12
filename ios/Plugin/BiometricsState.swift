import Foundation

@objc public class BiometricsState: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
