
function onStart () {
	// TODO : Add your Initilize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	
	sf.scene.show('Scene1');
	sf.scene.focus('Scene1');
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to destroy your application here

}


var PL_NNAVI_STATE_BANNER_VOL = 1;

window.onShow = function (e) {
    var NNaviPlugin = caph.platform.dtv.Device.plugin('NNAVI');
    NNaviPlugin.SetBannerState(PL_NNAVI_STATE_BANNER_VOL);

    caph.platform.dtv.Device.unRegisterKey(caph.platform.Key.VOL_UP);
    caph.platform.dtv.Device.unRegisterKey(caph.platform.Key.VOL_DOWN);
    caph.platform.dtv.Device.unRegisterKey(caph.platform.Key.MUTE);
};

alert("init.js loaded.");