﻿var WebsiteLog={Config:{Util:"",Mode:"WebLog"},GetParamsFromUrl:function(){var url=window.location.href;url=decodeURI(url);var conditions=url.split("&conditions=");var parameter="";for(var i=1;i<conditions.length;i++){var parsplit=conditions[i].split("+");if(parsplit.length==5){parameter=parsplit[1]+"|"}if(parameter.length>0){parameter=parameter.substring(0,parameter.length-1)}}return parameter},GetCaseInfo:function(){var caseinfoParm="";if($("#hidCaseInfo").val()!=""){var caseinfoOject=$.parseJSON($("#hidCaseInfo").val());if(caseinfoOject.length>=1){for(var cases in caseinfoOject[0]){if(WebsiteLog.CaseInfoDic(cases.toString())!=""){caseinfoParm+='"'+WebsiteLog.CaseInfoDic(cases.toString())+'":"'+caseinfoOject[0][cases.toString()].toString()+'",'}}}if(caseinfoParm.length>0){caseinfoParm=caseinfoParm.substring(0,caseinfoParm.length-1)}}return caseinfoParm},CaseInfoDic:function(dicName){switch(dicName){case"文书ID":return"CaseDocId";break;case"案件名称":return"CaseName";break;case"法院名称":return"CaseCourt";break;case"法院国家":return"CaseNation";break;case"法院省份":return"CaseProvince";break;case"法院地市":return"CaseCity";break;case"法院区县":return"CaseCounty";break;case"法院区域":return"CaseArea";break;case"案件类型":return"CaseType";break;case"审判程序":return"CaseTrialLevel";break;case"文书类型":return"CaseFileType";break;case"案号":return"CaseNumber";break;case"案由":return"CaseReason";break;case"姓名或名称":return"CasePerson";break;case"审判人员":return"CaseTrialPerson";break;case"书记员":return"CaseClerk";break;case"裁判年份":return"CaseYear";break;case"裁判月份":return"CaseMonth";break;case"裁判日份":return"CaseDay";break;case"上传法院":return"CaseUploadCourt";break;case"上传部门":return"CaseUploadDept";break;case"上传人员":return"CaseUploadPerson";break;case"上传日份":return"CaseUploadDay";break;case"上传年份":return"CaseUploadYear";break;case"上传月份":return"CaseUploadMonth";break;case"上传包ID":return"CaseUploadCaseDocId";break;case"补正文书":return"CaseFileMend";break;case"一级法院":return"CaseCourtLevel1";break;case"二级法院":return"CaseCourtLevel2";break;case"三级法院":return"CaseCourtLevel3";break;case"四级法院":return"CaseCourtLevel4";break}return""},Init:function(){var Parm="";switch(WebsiteLog.Config.Mode){case"DataLog":Parm=WebsiteLog.GetCaseInfo().toString();break;case"KeyWordLog":Parm='"keyword":"'+WebsiteLog.GetParamsFromUrl().toString()+'"';break;default:Parm="";break}}};