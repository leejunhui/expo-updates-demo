#import <React/RCTBridgeDelegate.h>
#import <Expo/Expo.h>
#import <EXUpdates/EXUpdatesAppController.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : EXAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate, EXUpdatesAppControllerDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
