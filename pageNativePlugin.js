/**
 * pagNativePlugin.html 에서 호출 함수
 */


//    initialize : function() {
// ------------------------------------------------------------------------------------------------------------------------------


// 1. pluginDeviceInfo
$('#pluginDeviceInfo').bind('click', function() {
    var param = {
    };
    
    app.pluginDeviceInfo(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 2. pluginResumeEvent
$('#pluginResumeEvent').bind('click', function() {
    app.pluginResumeEvent(function(){
        alert("App resume");
    });
});
function pluginResumeCallback() {
    alert("Resume Event");
}
// 3. pluginPauseEvent
$('#pluginPauseEvent').bind('click', function() {
    app.pluginPauseEvent(function(){
        alert("App Pause");
    });
});
function pluginPauseCallback() {
    alert("Pause Event");
}
// 4. pluginBackKeyEvent
$('#pluginBackKeyEvent').bind('click', function() {
    var param = {
    };

    app.pluginBackKeyEvent(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 5. pluginShakeEvent
$('#pluginShakeEvent').bind('click', function() {
    var param = {
    };

    app.pluginShakeEvent(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 6. pluginExitApp
$('#pluginExitApp').bind('click', function() {
    app.pluginExitApp();
});
// 7. pluginLoadUrl
$('#pluginLoadUrl').bind('click', function() {
    var param = {
        target : "main",
        url : "https://www.google.com/"
    };
    app.pluginLoadUrl(param);
});
// 8. pluginOpenPopupWebview
$('#pluginOpenPopupWebview').bind('click', function() {
    var param = {
        viewType : 3004,
        url : "https://www.naver.com"
    };
    app.pluginOpenPopupWebview(param);
});
// 9. pluginGetClosePopupWebview
$('#pluginGetClosePopupWebview').bind('click', function() {
    var param = {
        viewType : 3004,
        type : 3001
    };
    app.pluginClosePopupWebview(param);
});
// 10. pluginCertInfo
$('#pluginCertInfo').bind('click', function() {
    app.pluginCertInfo();
});
// 11. pluginCertSign
$('#pluginCertSign').bind('click', function() {
    var param = {
        key : "S_ID",
        value : "sId_value"
    };

    app.pluginCertSign(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 12. pluginCertMDSign
$('#pluginCertMDSign').bind('click', function() {
    var param = {
        key : "S_ID"
    };

    app.pluginCertMDSign(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 13. pluginCertScrapingSign
$('#pluginCertScrapingSign').bind('click', function() {
    var param = {
    };

    app.pluginCertScrapingSign(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 14. pluginCertRelay
$('#pluginCertRelay').bind('click', function() {
    var param = {
        key : "KEY_ALLOW_EVENT_POPUP_DATE",
        value : "2021-11-07",
//        value : false,
    };

    app.pluginCertRelay(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 15. pluginScrapingRun
$('#pluginScrapingRun').bind('click', function() {
    var param = {
        key : "KEY_ALLOW_EVENT_POPUP_DATE",
    };

    app.pluginScrapingRun(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 16. pluginpluginOpenDialer
$('#pluginpluginOpenDialer').bind('click', function() {
    var param = {
        key : "KEY_ALLOW_EVENT_POPUP_DATE"
    };

    app.pluginpluginOpenDialer(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 17. pluginOpenBrowser
$('#pluginOpenBrowser').bind('click', function() {
    var param = {
        url : "file://pageChatbot.html"//"https://cschatbot-stg.uplus.co.kr/cschatbot?upapp=1"
    };
    app.pluginOpenBrowser(param);
});
// 18. pluginSetData
$('#pluginSetData').bind('click', function() {
    app.pluginSetData(function(result) {
        alert(JSON.stringify(result));
    });
});
// 19. pluginIsGetData
$('#pluginIsGetData').bind('click', function() {
    app.pluginIsGetData();
});
// 20. pluginDeleteData
$('#pluginDeleteData').bind('click', function() {
    var param = {
    };

    app.pluginDeleteData(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 21. pluginSetPermissionAgree
$('#pluginSetPermissionAgree').bind('click', function() {
    var param = {
        "chat_date" : "2021-10-20",
        "chat_time" : "12:00:00",
        "chat_text" : "pluginSaveChatbotTalk text"
    };

    app.pluginSetPermissionAgree(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 22. pluginAntiCapture
$('#pluginAntiCapture').bind('click', function() {
    var param = {
        "entrNo" : "NA",
        "selectedSvcCd" : "cd01"
    };

    app.pluginAntiCapture(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 23. pluginAppIronCheckInfo
$('#pluginAppIronCheckInfo').bind('click', function() {
    var param = {
        "pinNum" : "123456"
    };

    app.pluginAppIronCheckInfo(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 24. pluginAppIronCheckStart
$('#pluginAppIronCheckStart').bind('click', function() {
    var param = {
        "pinNum" : "123456",
        "pinArgs" : "PIN_ARGS"
    };

    app.pluginAppIronCheckStart(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 25. pluginPushRegistration
$('#pluginPushRegistration').bind('click', function() {
    var param = {
    };

    app.pluginPushRegistration(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 26. pluginPushAlert
$('#pluginPushAlert').bind('click', function() {
    var param = {
    };

    app.pluginPushAlert(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 27. pluginFidoCheckAvailable
$('#pluginFidoCheckAvailable').bind('click', function() {
    var param = {
    };
    
    app.pluginFidoCheckAvailable(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 28. pluginFidoRegistStatus
$('#pluginFidoRegistStatus').bind('click', function() {
    var param = {
    };
    
    app.pluginFidoRegistStatus(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 29. pluginFidoRegist
$('#pluginFidoRegist').bind('click', function() {
    var param = {
        siteId:"SIT01UPLUS0000000000",
        svcId:"SVC01SIT01UPLUS00000",
        loginId:"lgcns_test_ios",
        appId:"ios:bundle-id:com.lguplus.mobile.cs.cns",
        verifyType:"2"
    };
    
    app.pluginFidoRegist(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 30. pluginFidoAuth
$('#pluginFidoAuth').bind('click', function() {
    var param = {
        siteId:"SIT01UPLUS0000000000",
        svcId:"SVC01SIT01UPLUS00000",
        loginId:"lgcns_test_ios",
        appId:"ios:bundle-id:com.lguplus.mobile.cs.cns",
        verifyType:"2"
    };
    
    app.pluginFidoAuth(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 31. pluginFidoRelease
$('#pluginFidoRelease').bind('click', function() {
    var param = {
        siteId:"SIT01UPLUS0000000000",
        svcId:"SVC01SIT01UPLUS00000",
        loginId:"lgcns_test_ios",
        appId:"ios:bundle-id:com.lguplus.mobile.cs.cns",
        verifyType:"2"
    };
    
    app.pluginFidoRelease(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 32. pluginShowToastMessage
$('#pluginShowToastMessage').bind('click', function() {
    var param = {
        message : "Toast 보이기!!!!"
    };
    app.pluginShowToastMessage(param);
});
// 33. pluginAlert
$('#pluginAlert').bind('click', function() {
    var param = {
        code : "9999",
        title : "Plugin 테스트",
        msg : "pluginAlert 테스트",
        btn : "확인",
        cancelable : true,
    };
    app.pluginAlert(param);
});
// 34. pluginConfirm
$('#pluginConfirm').bind('click', function() {
    var param = {
        code : "9999",
        title : "Plugin 테스트",
        msg : "pluginConfirm 테스트",
        btn1 : "btn1",
        btn2 : "btn2",
        btn3 : "btn3",
        cancelable : true,
        isTextType : true
    };
    app.pluginConfirm(param);
});
// 46. pluginOpenMyLgId
$('#pluginOpenMyLgId').bind('click', function() {
    var param = {
        myLgIdUrl : "https://dasteb.uplus.co.kr/dasweb/login/lgidLoginView.do?serviceCd=A80&returnUrl=/uhdc/fo/mbrm/lgid/v1/lgid-return"//"https://www.mylgid.com:6443/userweb/login?mylgidWebView=null"
    };
    
    app.pluginOpenMyLgId(param, function(result) {
//        alert(JSON.stringify(result));
    }, function(error){
//        alert("errFunc : " + error);
    });
});
// 47. pluginLoadUrl
$('#pluginLoadUrl').bind('click', function() {
    var param = {
        target : "main",
        url : "http://www.uplus.co.kr/"
    };
    app.pluginLoadUrl(param);
});
// 48. pluginOpenPopupWebview
//const int POPUP_TYPE_OK = 3000;
//const int POPUP_TYPE_CANCEL = 3001;
//const int POPUP_TYPE_GENERAL = 3002;
//const int POPUP_TYPE_PASSWORD = 3003;
//const int POPUP_TYPE_EVENT = 3004;
//const int POPUP_TYPE_IPIN = 3005;
//const int POPUP_TYPE_NOTICE = 3006;
$('#pluginOpenPopupWebview').bind('click', function() {
    var param = {
        viewType : 3004,
        url : "file://pageNative.html"//"http://www.lgcns.co.kr/"
    };
    app.pluginOpenPopupWebview(param);
});
// 49. pluginClosePopupWebview
$('#pluginClosePopupWebview').bind('click', function() {
    var param = {
        viewType : 3004,
        type : 3001
    };
    app.pluginClosePopupWebview(param);
});
// 50. pluginOpenApp
$('#pluginOpenApp').bind('click', function() {
    var param = {
        appId : "id945578864"
    };
    app.pluginOpenApp(param);
});
// 51. pluginOpenDialer
$('#pluginOpenDialer').bind('click', function() {
    var param = {
        phoneNo : "010-1234-5678",
        call : true
    };
    app.pluginOpenDialer(param);
});
// 52. pluginOpenBrowser
$('#pluginOpenBrowser').bind('click', function() {
    var param = {
        url : "http://www.uplus.co.kr/biz/bzma/RetrieveMainCS.hpi?mid=2440"
    };
    app.pluginOpenBrowser(param);
});
// 53. pluginEncryptText
$('#pluginEncryptText').bind('click', function() {
    var param = {
        plainText : "plainText"
    };

    app.pluginEncryptText(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error) {
        alert("errFunc : " + error);
    });
});
// 55. pluginCopyClipboard
$('#pluginCopyClipboard').bind('click', function() {
    var param = {
        text : "123-45-67890",
        toastMessage : "해당 계좌정보가 복사되었습니다"
    };
    app.pluginCopyClipboard(param);
});
// 56. pluginPickupContact
$('#pluginPickupContact').bind('click', function() {
    var param = {
    };

    app.pluginPickupContact(param, function(result){
        alert(JSON.stringify(result));
    });
});
// 57. pluginCloseIntroView

// 58. pluginCloseWindow
$('#pluginCloseWindow').bind('click', function() {
    app.pluginCloseWindow();
});
// 60. pluginOpenCertManager
$('#pluginOpenCertManager').bind('click', function() {
    var param = {
    };
    app.pluginOpenCertManager();
});
// 62.pluginFidoCheckAvailable
$('#pluginFidoCheckAvailable').bind('click', function() {
    var param = {
    };
    
    app.pluginFidoCheckAvailable(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 63. pluginFidoRegist
$('#pluginFidoRegist').bind('click', function() {
    var param = {
        siteId:"SIT01UPLUS0000000000",
        svcId:"SVC01SIT01UPLUS00000",
        loginId:"lgcns_test_ios",
        appId:"ios:bundle-id:com.lguplus.mobile.cs.cns",
        verifyType:"2"
    };
    
    app.pluginFidoRegist(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 64. pluginFidoAuth
$('#pluginFidoAuth').bind('click', function() {
    var param = {
        siteId:"SIT01UPLUS0000000000",
        svcId:"SVC01SIT01UPLUS00000",
        loginId:"lgcns_test_ios",
        appId:"ios:bundle-id:com.lguplus.mobile.cs.cns",
        verifyType:"2"
    };
    
    app.pluginFidoAuth(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 65. pluginFidoRelease
$('#pluginFidoRelease').bind('click', function() {
    var param = {
        siteId:"SIT01UPLUS0000000000",
        svcId:"SVC01SIT01UPLUS00000",
        loginId:"lgcns_test_ios",
        appId:"ios:bundle-id:com.lguplus.mobile.cs.cns",
        verifyType:"2"
    };
    
    app.pluginFidoRelease(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 66. pluginFidoRegistStatus
$('#pluginFidoRegistStatus').bind('click', function() {
    var param = {
    };
    
    app.pluginFidoRegistStatus(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 67. pluginSetMobileNum
$('#pluginSetMobileNum').bind('click', function() {
    var param = {
        "phNum":"01037976864"// "01022874186"
    };

    app.pluginSetMobileNum(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + JSON.stringify(error));
    });
});
// 69. pluginGetCTNInfo
$('#pluginGetCTNInfo').bind('click', function() {
    var param = {
    };
    
    app.pluginGetCTNInfo(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + JSON.stringify(error));
    });
});
// 70. pluginOpenFileChooser
$('#pluginOpenFileChooser').bind('click', function() {
    app.pluginOpenFileChooser();
});
// 71. pluginKakaoCert
$('#pluginKakaoCert').bind('click', function() {
    var param = {
        txId:"d3c57x08c2c97590ay23d6f6940e7815"
    };
    app.pluginKakaoCert(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + JSON.stringify(error));
    });
});
// 72. pluginCheckAppInstall
$('#pluginCheckAppInstall').bind('click', function() {
    var param = {
        target:["naver","kakao","pass"]
    };
    app.pluginCheckAppInstall(param, function(result){
        alert(JSON.stringify(result));
    }, null);
});
// 73. pluginSetLocalDataList
$('#pluginSetLocalDataList').bind('click', function() {
    var param = {
        data:[
            {
                "key1": "value1",
                "useEncrypt": false
            },
            {
                "key2": "value2",
                "useEncrypt": true
            }
        ]
    };
    app.pluginSetLocalDataList(param, function(result){
        alert(JSON.stringify(result));
    }, null);
});
// 74. pluginSetUserDataList
$('#pluginSetUserDataList').bind('click', function() {
    var param = {
        data:[
            {
                "key1": "value1"
            },
            {
                "key2": "value2"
            }
        ]
    };
    app.pluginSetUserDataList(param, function(result){
        alert(JSON.stringify(result));
    }, null);
});


function commonCallback(values) {
    alert(JSON.stringify(values));
}
