const BMAP_CONFIG = {
  normal_imgext: ".jpg",
  satellite_imgext: ".jpg",
  tiles_dir: "",
};

// 上面代码根据自己项目结构修改, 下面保持不动
const scripts = document.getElementsByTagName("script");
const fullPath = scripts[scripts.length - 1].src;
// const fullPath = document.getElementsByTagName("script").getAttribute("src"); // 提取根目录
BMAP_CONFIG.home = fullPath.substring(0, fullPath.lastIndexOf("/") + 1); // 取到根目录, +1是为了'/'也包含
console.log('BMAP_CONFIG home', BMAP_CONFIG.home, fullPath);
// if(window.location.host.startsWith('localhost')){
//   BMAP_CONFIG.tiles_dir = 'https://nhzero.pro.com' + BMAP_CONFIG.tiles_dir;
// }

(function () {
  const script = document.createElement("script");
  script.src = BMAP_CONFIG.home + "bmap_offline_v3.0_min.js";
  document.body.appendChild(script);
})();
