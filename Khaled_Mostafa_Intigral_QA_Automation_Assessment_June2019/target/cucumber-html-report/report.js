$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AR_SampleTestingStepDefs.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: khaledmostafakm2021@gmail.com"
    }
  ],
  "line": 2,
  "name": "Verify sample tests for home and login screen for Jawwytv Web Application with Arabic Interface",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-arabic-interface",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 120950552,
  "status": "passed"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "duration": 14760270289,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate user navigates back to subscribe now page",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-arabic-interface;validate-user-navigates-back-to-subscribe-now-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@toptest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User clicks on Click here link in create your account section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Subscribe link in Existing User section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should navigate to Create your account section",
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_clicks_on_Click_here_link_in_create_your_account_section()"
});
formatter.result({
  "duration": 6057117192,
  "status": "passed"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_Subscribe_link_in_Existing_User_section()"
});
formatter.result({
  "duration": 178124400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (604, 597)\n  (Session info: chrome\u003d75.0.3770.100)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027KHALED\u0027, ip: \u0027192.168.1.48\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\KHALED~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:10483}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7429620dd1005957cf9100068610464f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pages.ExistingUserPage.Subscribe(ExistingUserPage.java:16)\r\n\tat steps.sampletesting.user_clicks_on_Subscribe_link_in_Existing_User_section(sampletesting.java:59)\r\n\tat ✽.And User clicks on Subscribe link in Existing User section(AR_SampleTestingStepDefs.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_should_navigate_to_Create_your_account_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 12580858,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(AR_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Validate terms and conditions page",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-arabic-interface;validate-terms-and-conditions-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@toptest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User clicks on Terms and Conditions link in create your account section",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see that Terms \u0026 Conditions section is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cusername\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.user_clicks_on_Terms_and_Conditions_link_in_create_your_account_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_should_see_that_Terms_Conditions_section_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 8961460,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(AR_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Validate back button on payment screen on entering username and password",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-arabic-interface;validate-back-button-on-payment-screen-on-entering-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@bottomtest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User should see back button displayed on payment screen",
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_should_see_back_button_displayed_on_payment_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 25604697,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(AR_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Validate that one single payment method is available for Lebanon country",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-arabic-interface;validate-that-one-single-payment-method-is-available-for-lebanon-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@bottomtest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User should selects Lebanon from country dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should see that only credit card payment method is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_should_selects_Lebanon_from_country_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_should_see_that_only_credit_card_payment_method_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 15783138,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(AR_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Validate that two payment methods are available for Bahrain country",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-arabic-interface;validate-that-two-payment-methods-are-available-for-bahrain-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@bottomtest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User should selects Bahrain from country dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should see that two payment methods are displayed",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 34
    },
    {
      "cells": [
        "testuser@gm.com",
        "12345678"
      ],
      "line": 35
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_should_selects_Bahrain_from_country_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_should_see_that_two_payment_methods_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("EN_SampleTestingStepDefs.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: khaledmostafakm2021@gmail.com"
    }
  ],
  "line": 2,
  "name": "Verify sample tests for home and login screen for Jawwytv Web Application with English Interface",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-english-interface",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User changes language in welcome screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 6902146,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(EN_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_changes_language_in_welcome_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Validate user navigates back to subscribe now page",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-english-interface;validate-user-navigates-back-to-subscribe-now-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@toptest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User clicks on Click here link in create your account section",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Subscribe link in Existing User section",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should navigate to Create your account section",
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_clicks_on_Click_here_link_in_create_your_account_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_Subscribe_link_in_Existing_User_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_should_navigate_to_Create_your_account_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User changes language in welcome screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 7725708,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(EN_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_changes_language_in_welcome_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Validate terms and conditions page",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-english-interface;validate-terms-and-conditions-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@toptest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User clicks on Terms and Conditions link in create your account section",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User should see that Terms \u0026 Conditions section is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cusername\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.user_clicks_on_Terms_and_Conditions_link_in_create_your_account_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_should_see_that_Terms_Conditions_section_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User changes language in welcome screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 6599162,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(EN_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_changes_language_in_welcome_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Validate back button on payment screen on entering username and password",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-english-interface;validate-back-button-on-payment-screen-on-entering-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@bottomtest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User should see back button displayed on payment screen",
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_should_see_back_button_displayed_on_payment_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User changes language in welcome screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 9228316,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(EN_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_changes_language_in_welcome_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Validate that one single payment method is available for Lebanon country",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-english-interface;validate-that-one-single-payment-method-is-available-for-lebanon-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@bottomtest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User should selects Lebanon from country dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should see that only credit card payment method is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_should_selects_Lebanon_from_country_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_should_see_that_only_credit_card_payment_method_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Jawwytv site opens successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User changes language in welcome screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on seven days free subscribe now button",
  "keyword": "And "
});
formatter.match({
  "location": "sampletesting.jawwytv_site_opens_successfully()"
});
formatter.result({
  "duration": 10454626,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat steps.sampletesting.jawwytv_site_opens_successfully(sampletesting.java:30)\r\n\tat ✽.Given Jawwytv site opens successfully(EN_SampleTestingStepDefs.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampletesting.user_changes_language_in_welcome_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_clicks_on_seven_days_free_subscribe_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Validate that two payment methods are available for Bahrain country",
  "description": "",
  "id": "verify-sample-tests-for-home-and-login-screen-for-jawwytv-web-application-with-english-interface;validate-that-two-payment-methods-are-available-for-bahrain-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@bottomtest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User should selects Bahrain from country dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should see that two payment methods are displayed",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35
    },
    {
      "cells": [
        "testuser@gm.com",
        "12345678"
      ],
      "line": 36
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "sampletesting.user_should_selects_Bahrain_from_country_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "sampletesting.user_should_see_that_two_payment_methods_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
});