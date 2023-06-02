/**
 * pagNative.html 에서 호출 함수
 */


//    initialize : function() {
// ------------------------------------------------------------------------------------------------------------------------------


// 1. pluginGetFcmToken
$('#pluginGetFcmToken').bind('click', function() {
    alert("pluginGetFcmToken +-+-+-");
    var param = {
    };
    
    upcs.pluginGetFcmToken(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 2. pluginDeviceInfo
$('#pluginDeviceInfo').bind('click', function() {
    var param = {
    };

    upcs.pluginDeviceInfo(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 3. pluginGetDeviceID
$('#pluginGetDeviceID').bind('click', function() {
    var param = {
    };

    upcs.pluginGetDeviceID(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 4. pluginGetDeviceIDInc
$('#pluginGetDeviceIDInc').bind('click', function() {
    var param = {
    };

    upcs.pluginGetDeviceIDInc(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 5. pluginGetTelecom
$('#pluginGetTelecom').bind('click', function() {
    var param = {
    };

    upcs.pluginGetTelecom(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 6. pluginGetSimIccid
$('#pluginGetSimIccid').bind('click', function() {
    var param = {
        type : "all",
        useEncrypt : false,
        callback : "commonCallback"
    };

    upcs.pluginGetSimIccid(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 7. pluginGetPhoneNumber
$('#pluginGetPhoneNumber').bind('click', function() {
    var param = {
        useEncrypt : false
    };

    upcs.pluginGetPhoneNumber(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 8. pluginGetNetworkInfo
$('#pluginGetNetworkInfo').bind('click', function() {
    var param = {
    };

    upcs.pluginGetNetworkInfo(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 9. pluginGetLocationSetting
$('#pluginGetLocationSetting').bind('click', function() {
    var param = {
    };

    upcs.pluginGetLocationSetting(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 10. pluginOpenLocationSetting
$('#pluginOpenLocationSetting').bind('click', function() {
    upcs.pluginOpenLocationSetting();
});
// 11. pluginSetUserData
$('#pluginSetUserData').bind('click', function() {
    var param = {
        key : "S_ID",
        value : "sId_value"
    };

    upcs.pluginSetUserData(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 12. pluginGetUserData
$('#pluginGetUserData').bind('click', function() {
    var param = {
        key : "S_ID"
    };

    upcs.pluginGetUserData(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 13. pluginClearUserData
$('#pluginClearUserData').bind('click', function() {
    var param = {
    };

    upcs.pluginClearUserData(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 17. pluginSetLocalData
$('#pluginSetLocalData').bind('click', function() {
    var param = {
        key : "KEY_ALLOW_EVENT_POPUP_DATE",
        value : "2021-11-07",
//        value : false,
    };

    upcs.pluginSetLocalData(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 18. pluginGetLocalData
$('#pluginGetLocalData').bind('click', function() {
    var param = {
        key : "KEY_ALLOW_EVENT_POPUP_DATE",
    };

    upcs.pluginGetLocalData(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 19. pluginDeleteLocalData
$('#pluginDeleteLocalData').bind('click', function() {
    var param = {
        key : "KEY_ALLOW_EVENT_POPUP_DATE"
    };

    upcs.pluginDeleteLocalData(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 22. pluginOpenChatbot
$('#pluginOpenChatbot').bind('click', function() {
    var param = {
        url : "file://pageChatbot.html"//"https://cschatbot-stg.uplus.co.kr/cschatbot?upapp=1"
    };
    upcs.pluginOpenChatbot(param);
});
// 23. pluginIsOpenChatbot
$('#pluginIsOpenChatbot').bind('click', function() {
    upcs.pluginIsOpenChatbot(function(result) {
        alert(JSON.stringify(result));
    });
});
// 24. pluginCloseChatbot
$('#pluginCloseChatbot').bind('click', function() {
    upcs.pluginCloseChatbot();
});
// 25. pluginGetChatbotTalk
$('#pluginGetChatbotTalk').bind('click', function() {
    var param = {
    };

    upcs.pluginGetChatbotTalk(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 26. pluginSaveChatbotTalk
$('#pluginSaveChatbotTalk').bind('click', function() {
    var param = {
        "chat_date" : "2021-10-20",
        "chat_time" : "12:00:00",
        "chat_text" : "pluginSaveChatbotTalk text"
    };

    upcs.pluginSaveChatbotTalk(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 27. pluginUpdateWidgetInfo
$('#pluginUpdateWidgetInfo').bind('click', function() {
    var param = {
        "entrNo" : "NA",
        "selectedSvcCd" : "cd01"
    };

    upcs.pluginUpdateWidgetInfo(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 33. pluginCertifyPIN
$('#pluginCertifyPIN').bind('click', function() {
    var param = {
        "pinNum" : "123456"
    };

    upcs.pluginCertifyPIN(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 34. pluginSavePIN
$('#pluginSavePIN').bind('click', function() {
    var param = {
        "pinNum" : "123456",
        "pinArgs" : "PIN_ARGS"
    };

    upcs.pluginSavePIN(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 35. pluginGetCreatePIN
$('#pluginGetCreatePIN').bind('click', function() {
    var param = {
    };

    upcs.pluginGetCreatePIN(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 36. pluginClearPIN
$('#pluginClearPIN').bind('click', function() {
    var param = {
    };

    upcs.pluginClearPIN(param, function(result) {
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 37. pluginResume
$('#pluginResume').bind('click', function() {
    upcs.pluginResume(function(){
        alert("App resume");
    });
});
function pluginResumeCallback() {
    alert("Resume Event");
}
// 38. pluginPause
$('#pluginPause').bind('click', function() {
    upcs.pluginPause(function(){
        alert("App Pause");
    });
});
function pluginPauseCallback() {
    alert("Pause Event");
}
// 040. pluginExitApp
$('#pluginExitApp').bind('click', function() {
    upcs.pluginExitApp();
});
// 41. pluginChangeBrightness
$('#pluginChangeBrightness').bind('click', function() {
    var param = {
        value : 1.0
    };

    upcs.pluginChangeBrightness(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + error);
    });
});
// 42. pluginOnWebload
$('#pluginOnWebload').bind('click', function() {
    var param = {
        isLoad : true
    };
    upcs.pluginOnWebload(param);
});
// 43. pluginShowToastMessage
$('#pluginShowToastMessage').bind('click', function() {
    var param = {
        message : "Toast 보이기!!!!"
    };
    upcs.pluginShowToastMessage(param);
});
// 44. pluginAlert
$('#pluginAlert').bind('click', function() {
    var param = {
        code : "9999",
        title : "Plugin 테스트",
        msg : "pluginAlert 테스트",
        btn : "확인",
        cancelable : true,
    };
    upcs.pluginAlert(param);
});
// 45. pluginConfirm
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
    upcs.pluginConfirm(param);
});
// 46. pluginOpenMyLgId
$('#pluginOpenMyLgId').bind('click', function() {
    var param = {
        myLgIdUrl : "https://dasteb.uplus.co.kr/dasweb/login/lgidLoginView.do?serviceCd=A80&returnUrl=/uhdc/fo/mbrm/lgid/v1/lgid-return"//"https://www.mylgid.com:6443/userweb/login?mylgidWebView=null"
    };
    
    upcs.pluginOpenMyLgId(param, function(result) {
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
    upcs.pluginLoadUrl(param);
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
    upcs.pluginOpenPopupWebview(param);
});
// 49. pluginClosePopupWebview
$('#pluginClosePopupWebview').bind('click', function() {
    var param = {
        viewType : 3004,
        type : 3001
    };
    upcs.pluginClosePopupWebview(param);
});
// 50. pluginOpenApp
$('#pluginOpenApp').bind('click', function() {
    var param = {
        appId : "id945578864"
    };
    upcs.pluginOpenApp(param);
});
// 51. pluginOpenDialer
$('#pluginOpenDialer').bind('click', function() {
    var param = {
        phoneNo : "010-1234-5678",
        call : true
    };
    upcs.pluginOpenDialer(param);
});
// 52. pluginOpenBrowser
$('#pluginOpenBrowser').bind('click', function() {
    var param = {
        url : "http://www.uplus.co.kr/biz/bzma/RetrieveMainCS.hpi?mid=2440"
    };
    upcs.pluginOpenBrowser(param);
});
// 53. pluginEncryptText
$('#pluginEncryptText').bind('click', function() {
    var param = {
        plainText : "plainText"
    };

    upcs.pluginEncryptText(param, function(result) {
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
    upcs.pluginCopyClipboard(param);
});
// 56. pluginPickupContact
$('#pluginPickupContact').bind('click', function() {
    var param = {
    };

    upcs.pluginPickupContact(param, function(result){
        alert(JSON.stringify(result));
    });
});
// 57. pluginCloseIntroView

// 58. pluginCloseWindow
$('#pluginCloseWindow').bind('click', function() {
    upcs.pluginCloseWindow();
});
// 60. pluginOpenCertManager
$('#pluginOpenCertManager').bind('click', function() {
    var param = {
    };
    upcs.pluginOpenCertManager();
});
// 62.pluginFidoCheckAvailable
$('#pluginFidoCheckAvailable').bind('click', function() {
    var param = {
    };
    
    upcs.pluginFidoCheckAvailable(param, function(){
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
    
    upcs.pluginFidoRegist(param, function(){
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
    
    upcs.pluginFidoAuth(param, function(){
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
    
    upcs.pluginFidoRelease(param, function(){
        alert(JSON.stringify(result));
    }, function(){
        alert("errFunc : " + error);
    });
});
// 66. pluginFidoRegistStatus
$('#pluginFidoRegistStatus').bind('click', function() {
    var param = {
    };
    
    upcs.pluginFidoRegistStatus(param, function(){
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

    upcs.pluginSetMobileNum(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + JSON.stringify(error));
    });
});
// 69. pluginGetCTNInfo
$('#pluginGetCTNInfo').bind('click', function() {
    var param = {
    };
    
    upcs.pluginGetCTNInfo(param, function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert("errFunc : " + JSON.stringify(error));
    });
});
// 70. pluginOpenFileChooser
$('#pluginOpenFileChooser').bind('click', function() {
    upcs.pluginOpenFileChooser();
});
// 71. pluginKakaoCert
$('#pluginKakaoCert').bind('click', function() {
    var param = {
        txId:"d3c57x08c2c97590ay23d6f6940e7815"
    };
    upcs.pluginKakaoCert(param, function(result){
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
    upcs.pluginCheckAppInstall(param, function(result){
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
    upcs.pluginSetLocalDataList(param, function(result){
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
    upcs.pluginSetUserDataList(param, function(result){
        alert(JSON.stringify(result));
    }, null);
});


function commonCallback(values) {
    alert(JSON.stringify(values));
}
