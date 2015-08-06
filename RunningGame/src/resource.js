var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    
    Start_n_png:"res/start_n.png",
    Start_s_png:"res/start_s.png",
    PlayBG_png:"res/PlayBG.png",
    HelloBG_png:"res/helloBG.png",
    Running_png:"res/running.png",
    Runner_png:"res/runner.png",
    Running_plist:"res/running.plist"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}