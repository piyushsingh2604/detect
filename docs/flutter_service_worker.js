'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b21dc3f6cea5e91ce35412f0fb559f49",
"index.html": "cd8b5a9edb6d8796019893d657155f57",
"/": "cd8b5a9edb6d8796019893d657155f57",
"loading.js": "6ebd482c30cb3ebcc2f3373898017fd4",
"main.dart.js": "1a8d91aa679219e61f940778550a5af5",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.css": "7b0db89ab1bf4ef1244db7c28abe5879",
"icons/appicon.png": "629286a15ffaa8afe634e7f81e0789fa",
"manifest.json": "f7fbec897271d0024fdabcb9ede68e1b",
"assets/AssetManifest.json": "0430485f4bc6b7f6e30aa3371873d207",
"assets/NOTICES": "d432d6fbf4c616533331a50dccf817a6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9d18d695a83be8e3a58f54fa857c1910",
"assets/packages/nextgen_diy/assets/images/diystar3empty.png": "f1648f311b7aa63bbb60cc097cbffc86",
"assets/packages/nextgen_diy/assets/images/diystar2empty.png": "4a0e6d4ac1b3e6ad611abdafe297e387",
"assets/packages/nextgen_diy/assets/images/diyviewpdf.png": "921979df52f4cae0095c9888bcc5a448",
"assets/packages/nextgen_diy/assets/images/diyuploadSign.png": "958cebfd35814b0b4cf921973d336385",
"assets/packages/nextgen_diy/assets/images/diyhdfcbank.png": "ad22642ea275f439b79ef3d865b3b40a",
"assets/packages/nextgen_diy/assets/images/diylinkbank.png": "d3df63edb0593e4591ee45435d301597",
"assets/packages/nextgen_diy/assets/images/diysheild.png": "8583350b3cfc2819364719d9d83a10a9",
"assets/packages/nextgen_diy/assets/images/diyoneclickupi.png": "61f2da6a6007ddd0ca55b1881d505ff7",
"assets/packages/nextgen_diy/assets/images/diymarital.png": "f383c3b14d0e63dc36ae8e565c06d05f",
"assets/packages/nextgen_diy/assets/images/diyaddress.png": "4fdef6cc548ffba90bcf6f05e435a356",
"assets/packages/nextgen_diy/assets/images/diybank_verify.svg": "289d7d619bb0c76510335b32e71c28a1",
"assets/packages/nextgen_diy/assets/images/diyinfo.png": "6eaf529b942fa133bf5991c41f4ff07a",
"assets/packages/nextgen_diy/assets/images/diyincome.png": "5ec384a1abec1f9aff0fcd7030d6ea33",
"assets/packages/nextgen_diy/assets/images/diytradingemail.png": "0862988462e583aa1a2b229da301010d",
"assets/packages/nextgen_diy/assets/images/diycred.png": "481d59bd29f8bd8d35b06181a9abb632",
"assets/packages/nextgen_diy/assets/images/diyupload_icon.svg": "5486730f498148398f7f522c478aa476",
"assets/packages/nextgen_diy/assets/images/diydismiss_circle_red.svg": "735444f63da436408a2d39382307ce0e",
"assets/packages/nextgen_diy/assets/images/diystar3filled.png": "9825e547b49b2843057e39d0a7e700aa",
"assets/packages/nextgen_diy/assets/images/diytrading30kb.png": "b8c55213db3ff2fdcb7d2536265375e0",
"assets/packages/nextgen_diy/assets/images/diyuploadProofwhite.png": "28da6f5499d95b36128edfaa282abba0",
"assets/packages/nextgen_diy/assets/images/diycircle_tick.svg": "f99116febc8e7af13fbbbc6cb219461f",
"assets/packages/nextgen_diy/assets/images/diyretake_selfe.svg": "10483b6f2737669b2452daeecfbb81fa",
"assets/packages/nextgen_diy/assets/images/diyparent.png": "a169d661ab70052df866b857892c5eff",
"assets/packages/nextgen_diy/assets/images/diydetailssafe.png": "e119e5334a158e23f68cc94b7d7e0665",
"assets/packages/nextgen_diy/assets/images/diylinkbankfailure.png": "93eadd2fb977919f8cb70ee53dc656d0",
"assets/packages/nextgen_diy/assets/images/diydocUpload.png": "208418fd154c461a61c58b4dd488a488",
"assets/packages/nextgen_diy/assets/images/diycross.png": "a869c6b17a6cdd3011dedf59cbe67571",
"assets/packages/nextgen_diy/assets/images/diycontent.png": "86806e59600ba8fca02f61f017a7a27a",
"assets/packages/nextgen_diy/assets/images/diyupi.png": "29809946ad32596a22fa9f6d3373e8a4",
"assets/packages/nextgen_diy/assets/images/diyarrow_down_load.svg": "e77063b42cf1daefedf8c4a3886f3227",
"assets/packages/nextgen_diy/assets/images/diystarEmpty.png": "4ed9c5952ee3e4a3adb4be734c5240cd",
"assets/packages/nextgen_diy/assets/images/diytradefreeplan.png": "970dfa151abf473ad06484d2e8f05f9a",
"assets/packages/nextgen_diy/assets/images/diyvideo.png": "a36643c0b429c90a2471e9ce8e412ab5",
"assets/packages/nextgen_diy/assets/images/diyinfo_icon.svg": "1dc4d72dae0dd04acde89c7246eae4c8",
"assets/packages/nextgen_diy/assets/images/diyright-arrow.svg": "28acff748d7b5b2edbab6aace7325cbd",
"assets/packages/nextgen_diy/assets/images/diygpay.png": "2a9efe89fc56339043e3644ec046b93d",
"assets/packages/nextgen_diy/assets/images/diyactivatederivativeblue.png": "176a8b77d037dad8da9e5afc5b8b0681",
"assets/packages/nextgen_diy/assets/images/diytrading.png": "264beba72981e0659d5f4e5d24063899",
"assets/packages/nextgen_diy/assets/images/diystar5filled.png": "a656131a44e41ac374076c8f0824201f",
"assets/packages/nextgen_diy/assets/images/diyupload.svg": "f3f0810a9463a533d5285dffead0e0ae",
"assets/packages/nextgen_diy/assets/images/diybanksuccess.png": "9b1ebf5d63a22a4a3679bb4c0d72fb06",
"assets/packages/nextgen_diy/assets/images/diyphonepe.png": "f1b01846ba7699748a8d037c085925e8",
"assets/packages/nextgen_diy/assets/images/diyuploadimageblue.png": "efdfb26d791a81b20851c97a7460a33f",
"assets/packages/nextgen_diy/assets/images/diydeletenominee.png": "0b7236338dd1d860944d4b711b9e21c3",
"assets/packages/nextgen_diy/assets/images/diyprofession.png": "c670841164d7b5d717951a5ee763dca0",
"assets/packages/nextgen_diy/assets/images/diypaytm.png": "d0bb2143f2d6a7ee6c59ff72897fb3b2",
"assets/packages/nextgen_diy/assets/images/diynominee.png": "ae6cd86636507c2d6c61d1d0a7c0a66f",
"assets/packages/nextgen_diy/assets/images/diybob.png": "f898342c46f88b7fb2923a9607811745",
"assets/packages/nextgen_diy/assets/images/diystar2filled.png": "b937db1623caeb568e93b96a28e06386",
"assets/packages/nextgen_diy/assets/images/diyretake_sign.svg": "616790cfe640e1b03926fbb5c14b9f7a",
"assets/packages/nextgen_diy/assets/images/diyleftrotate.png": "91f230040a45621590c571021f114d4d",
"assets/packages/nextgen_diy/assets/images/diyloader.gif": "43c12744138d47a2140784a08c0d5d21",
"assets/packages/nextgen_diy/assets/images/diysegment.png": "9b656fdcb2071b98924889980ffc18ee",
"assets/packages/nextgen_diy/assets/images/diycross.svg": "0095005ba5bef2fadbb3a0d94ef1421d",
"assets/packages/nextgen_diy/assets/images/diybankimg.png": "1901de11f16762c12ca391242ed17028",
"assets/packages/nextgen_diy/assets/images/diycrop.png": "c8a64ec79b22599d84ecbbc8bfefc2a8",
"assets/packages/nextgen_diy/assets/images/diykotak_securities.svg": "3fe1a03660e88e068480619592479557",
"assets/packages/nextgen_diy/assets/images/diysbi.png": "d9c4886745ff9c96276b5f27e27855ce",
"assets/packages/nextgen_diy/assets/images/diydelete.png": "4b7785a079ce4908d9dc4022b9d624bb",
"assets/packages/nextgen_diy/assets/images/diystar4empty.png": "dac1e8fed97fb642fd00a716e041624e",
"assets/packages/nextgen_diy/assets/images/diystar5empty.png": "e2fde04b7dfd3bfad4207c166c6975c1",
"assets/packages/nextgen_diy/assets/images/diydigilocker.png": "a27e9b099924e63bc5b62720e580b320",
"assets/packages/nextgen_diy/assets/images/diyunselecteditem.png": "11407000e5a68518a7fdb6469777970f",
"assets/packages/nextgen_diy/assets/images/diydismissCircleRed.png": "259538c6eec2cbfff83e1a714ca8b611",
"assets/packages/nextgen_diy/assets/images/diymobile_icon.svg": "ef0cff5ca109065a2fac294dac4facbd",
"assets/packages/nextgen_diy/assets/images/diyunselected.png": "e18223b7fa6373c2510516a16fac587b",
"assets/packages/nextgen_diy/assets/images/diyuploadSign.svg": "dd1ca5a22d08915ec2deb3b52c4bca1b",
"assets/packages/nextgen_diy/assets/images/diykotak.png": "aea0854c7e0444231af821940decc00c",
"assets/packages/nextgen_diy/assets/images/diystar4filled.png": "155e9282863aac42ae7131406b734f1f",
"assets/packages/nextgen_diy/assets/images/diydigilockerlogo1.png": "1599ddfdd489f359bea697a34061437f",
"assets/packages/nextgen_diy/assets/images/diyuploadWhite.svg": "92d827cbdf16ff35f784e4d71a2a54f4",
"assets/packages/nextgen_diy/assets/images/diykotakbank.png": "1ed62314c6b09eabe2231e2744306216",
"assets/packages/nextgen_diy/assets/images/diyback_button.svg": "af32ccb96e1fb987d67918b43ec3183c",
"assets/packages/nextgen_diy/assets/images/diyeditotp.png": "75ed345aaaf482c933398348f16535a5",
"assets/packages/nextgen_diy/assets/images/diyplus_icon.svg": "3233dba2fa14c88a6b5684f6f7a2f769",
"assets/packages/nextgen_diy/assets/images/diymoney_fill.svg": "51f491ff5ad305b2f59cf8da0ea09ddf",
"assets/packages/nextgen_diy/assets/images/diypdf_icon.svg": "f0e34211be9ac707957bf45022a2c5d1",
"assets/packages/nextgen_diy/assets/images/diysampleqrcode.png": "324cb6856ea23a1f36c7963655169692",
"assets/packages/nextgen_diy/assets/images/diyemailimage.png": "dd3adcea6f4599ca7b44a85bf5fd43db",
"assets/packages/nextgen_diy/assets/images/diystar1filled.png": "f59eff97fcbe690bf9cdc172fafdfda0",
"assets/packages/nextgen_diy/assets/images/rocket.png": "eccc935cfd36879adca5d2f6915623ab",
"assets/packages/nextgen_diy/assets/images/diyselfieerror4.png": "c7a3959d3f8f78ed99c20bdd0e824228",
"assets/packages/nextgen_diy/assets/images/diypdf.png": "d0c90576fe2614d3b2bd8f05e3322641",
"assets/packages/nextgen_diy/assets/images/diysignaturesample.png": "91b55f911b66af45c703c01c5ff57a3c",
"assets/packages/nextgen_diy/assets/images/diymanualbankadd.png": "0c0899793a5e93440fd1c33592847a4c",
"assets/packages/nextgen_diy/assets/images/diygoogleimage.png": "d3db3979c6f2b1fedd5b977b2a40fcd8",
"assets/packages/nextgen_diy/assets/images/diystar.svg": "62195496998a819f42914e5e5a69b0eb",
"assets/packages/nextgen_diy/assets/images/diycrosschat.png": "c837b8aa0d775ce0b3371a6455efc236",
"assets/packages/nextgen_diy/assets/images/diyuploadPanClick.svg": "dd78ef74b4eb25fca82c49b082260cac",
"assets/packages/nextgen_diy/assets/images/diyslmb.png": "a2546f7b99b5fe1e3d13eaf514b76de2",
"assets/packages/nextgen_diy/assets/images/diyselfieerror1.png": "b492452a78ea98148ac0bf3d69800501",
"assets/packages/nextgen_diy/assets/images/diyselfieerror3.png": "c07ce2ead603de7790479d80ea26c1fa",
"assets/packages/nextgen_diy/assets/images/diymoneytransferimg.png": "1e13d5cdab488a0af5c1b56adc846525",
"assets/packages/nextgen_diy/assets/images/diystar1empty.png": "c70cc25055745c95be6a17c7eda04ae3",
"assets/packages/nextgen_diy/assets/images/diycall.png": "17a3cc2d7a7cd79707abd47efed5beaf",
"assets/packages/nextgen_diy/assets/images/diyrightrotate.png": "66ea90e9adf07927fba8adb8edf54993",
"assets/packages/nextgen_diy/assets/images/diypaymentstatus.png": "6699baf6cb26834d7469dc7692b8973b",
"assets/packages/nextgen_diy/assets/images/diyselfieerror2.png": "a7ee54ea4a2d3bb20d5c16c3ca1c05ad",
"assets/packages/nextgen_diy/assets/images/diyuploadProof.png": "872f7c609475504927d57c15cff748b2",
"assets/packages/nextgen_diy/assets/images/diycommonbank.png": "ebda9f147ebf787c582a0355611302b5",
"assets/packages/nextgen_diy/assets/images/diyedit.png": "d96116baac1b1171fbc912580645de35",
"assets/packages/nextgen_diy/assets/images/diycommoncall.png": "d89b3455ebd0936337342b278d6d8460",
"assets/packages/nextgen_diy/assets/images/diywarningicon.png": "6da37f6b3a1eb1ecb3fddbcfc6e0cc60",
"assets/packages/nextgen_diy/assets/images/diyerrorpageicon.png": "3a899936e659e4d02d8d28f7c3deacfe",
"assets/packages/nextgen_diy/assets/images/diyleftrefresh.png": "a0dd5ba6ab45134d5be654d38f2deea2",
"assets/packages/nextgen_diy/assets/images/diyleadinforocket.png": "250d5f8779803572a6560c724500dc81",
"assets/packages/nextgen_diy/assets/images/diyupload_btn.svg": "646384dd5544d7ef567ecb276131c513",
"assets/packages/nextgen_diy/assets/images/diymail_icon.svg": "f7f49655131fee0619e0e1f749238ecc",
"assets/packages/nextgen_diy/assets/images/diyinvestment.png": "301021860227acf402e5c97c2a2b7fe0",
"assets/packages/nextgen_diy/assets/images/diyuploadPanPic.png": "e233883e5b7c1e50c83011c41a33bc26",
"assets/packages/nextgen_diy/assets/images/diydownarrow.png": "c83efbd968c74b85ed2ba07c7525cdcf",
"assets/packages/nextgen_diy/assets/images/diyuploadPanClick.png": "9c6c7c437e1a6763ce9b0082a1070e06",
"assets/packages/nextgen_diy/assets/images/diylightbulb.png": "8fbc02665d9545d4c68e985e527048a5",
"assets/packages/nextgen_diy/assets/images/diyID.png": "d654d8789cb8558aea1f8b637a68f18f",
"assets/packages/nextgen_diy/assets/images/diycustomer.png": "1917722617db2090442991e84fce6193",
"assets/packages/nextgen_diy/assets/images/diypnb.png": "b02186ace612ca4bcb3d755ef1b02a82",
"assets/packages/nextgen_diy/assets/images/diytradefreeyouth.png": "10733889efa53113c533537ce57874a8",
"assets/packages/nextgen_diy/assets/images/diyuploadimage.png": "28da6f5499d95b36128edfaa282abba0",
"assets/packages/nextgen_diy/assets/images/diyrotateleft.png": "2583d3d29e4642524bdc4cc5aab6cbaf",
"assets/packages/nextgen_diy/assets/images/diychat.png": "4dfdc61d983f015a4fb7dfdd4541145e",
"assets/packages/nextgen_diy/assets/images/diyicici.png": "ac5bfdd8f142f47cef1d2633fc290d0c",
"assets/packages/nextgen_diy/assets/images/diythankyou.png": "4c7502a5e886930ece186ba88abef52c",
"assets/packages/nextgen_diy/assets/images/diyeye.png": "b071b9c634f85db6c4efc9fe9bf26728",
"assets/packages/nextgen_diy/assets/images/diysmall_star.svg": "ff90a99735d0b55d4f2e04fbdc4d0338",
"assets/packages/nextgen_diy/assets/images/diyothers.svg": "4229982a93d9027b1d5896a367d73abd",
"assets/packages/nextgen_diy/assets/images/diyselecteditem.png": "bd0e03c6a55bb89ff1dcd756ddc6a967",
"assets/packages/nextgen_diy/assets/images/diyyellowalert.png": "19e631b15d0690813d2dd2a4afab8f06",
"assets/packages/nextgen_diy/assets/images/diypan.png": "88cc1ac131bdfcda36b24377aa2db6f6",
"assets/packages/nextgen_diy/assets/images/diyaxis.png": "c7ba7099305757f0df26de821b4e6ab8",
"assets/packages/nextgen_diy/assets/images/diyfund.png": "5b089821dc0392084380b948a61a2f75",
"assets/packages/nextgen_diy/assets/images/diypennydrop.png": "78e6ea3451dd6f5b568611e075403795",
"assets/packages/nextgen_diy/assets/images/diydigi.png": "d706056f6acd28991191f3b69cd237f9",
"assets/packages/nextgen_diy/assets/images/diyrotate_right.png": "a7a5b5b465371f779b29b771338569e7",
"assets/packages/nextgen_diy/assets/images/diyretake.svg": "6f65bf44a88d0b3692aa5394fddcff24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/faceplugin/assets/camera_click.mp3": "ce1581e5ed631d87dab9827b77cdc0ee",
"assets/packages/faceplugin/assets/blur_face.png": "7f79af248112718f895ff6338a9aafac",
"assets/packages/faceplugin/assets/success.gif": "2b85d615cf4a3ee26ae5bfd6f08c140a",
"assets/packages/faceplugin/assets/half_face.png": "4eb9fcba3efa9c649ca7b777b7297678",
"assets/packages/faceplugin/assets/selfie_preview.png": "9a53050fbae81ee47b8c9fd5480ec28c",
"assets/packages/faceplugin/assets/weird_face.png": "d5aa922f04763b16c76cf299243a8105",
"assets/packages/faceplugin/assets/banner-logo.png": "3e117fe01584f88ce709f53e179caa06",
"assets/packages/faceplugin/assets/loader.gif": "09aa52e433574c1eb50285bffcbb1270",
"assets/packages/faceplugin/assets/logo.png": "3179faea1fe5c84902aebca5394d033a",
"assets/packages/faceplugin/assets/bad_lighting.png": "20d1046c527b8a03dc79f8689b5e9b3b",
"assets/packages/faceplugin/assets/profile.png": "d925903ce7210e8d8e8491e363dbc907",
"assets/packages/faceplugin/assets/failed.gif": "23184de14fa6cbd76974659c528f1b37",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/ainxt_signature_mod/assets/images/loader.gif": "09aa52e433574c1eb50285bffcbb1270",
"assets/packages/ainxt_signature_mod/assets/images/signature.png": "2a4a6cad5560e206b42565e9bf1bd951",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f24af3d6b90547a4aeb2cf3c2aa0b11a",
"assets/fonts/MaterialIcons-Regular.otf": "e3de2e9dfa416938a3078410c1df5861",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
