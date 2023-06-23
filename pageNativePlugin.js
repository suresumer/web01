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

function commonCallback(values) {
    alert(JSON.stringify(values));
}
