var BMAP_CONFIG = {
    normal_imgext: ".jpg",
    satellite_imgext: ".png",
    tiles_dir: "",   // 离线地图的目录  本地路径
};
/*
 * 离线地图配置
 * 注意: 离线地图的配置项, 必须和离线地图的配置项保持一致
 */
var scripts = document.getElementsByTagName("script");
var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src");
BMAP_CONFIG.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/")+1); //地图API主目录, images,tiles都在此目录下
(function(){
    console.log('BMAP_CONFIG home', BMAP_CONFIG.home);
    window.BMap_loadScriptTime = (new Date).getTime();
    //加载地图API主文件
    document.write('<script type="text/javascript" src="'+BMAP_CONFIG.home+'bmap_offline_v3.0_min.js"></script>');
})();

/*
 * tiles_dir代表着离线地图的目录, 本地路径，把瓦片下载到本地后，把tiles_dir改成本地路径即可 ./map/tiles/normal/
 * 如果想仅仅把域名改了可以在保持之前的规则，只把 bmap_offline_v3.0_min.js: Ye.getTilesUrl 中的 ‘Te[Math.abs(e + a) % Te.length]’ 改成自己的域名即可，再通过域名代理到百度
 */