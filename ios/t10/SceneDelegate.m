#import "SceneDelegate.h"
#import <React/RCTRootView.h>

@interface SceneDelegate ()

@end

@implementation SceneDelegate


- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {
    
    UIWindowScene *windowScene = (UIWindowScene*)scene;
    if (windowScene) {
        self.window = [[UIWindow alloc]initWithWindowScene:windowScene];
    }
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL: jsCodeLocation moduleName: @"t10" initialProperties:nil launchOptions:nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.modalPresentationStyle = UIModalPresentationFullScreen;
    vc.view = rootView;
    self.window.rootViewController = vc;
    [self.window makeKeyAndVisible];
}


- (void)sceneDidDisconnect:(UIScene *)scene {
}


- (void)sceneDidBecomeActive:(UIScene *)scene {
}


- (void)sceneWillResignActive:(UIScene *)scene {
}


- (void)sceneWillEnterForeground:(UIScene *)scene {
}


- (void)sceneDidEnterBackground:(UIScene *)scene {
}


@end
