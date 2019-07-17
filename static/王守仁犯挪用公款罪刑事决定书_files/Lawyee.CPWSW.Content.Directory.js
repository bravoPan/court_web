﻿(function($,window,document,undefined){var Params=function(element,options){this.$element=$(element);this.defaults={data:{}};this.settings=$.extend({},this.defaults,options)};Params.prototype={Init:function(){this.BindData();this.BindEvent()},BindData:function(){var htmlObj=this.BuildHtml();this.$element.append(htmlObj);return this.$element},BuildHtml:function(){var jsonData="";var targetElem=$("a[type='dir']");if(targetElem.length>0){var dirNameArr=[];var sortArr=["WBSB","SSJL","AJJBQK","CPYZ","PJJG","WBWB"];for(var j=0;j<sortArr.length;j++){for(var i=0;i<targetElem.length;i++){var dirName="",dirId="";var name=$(targetElem[i]).attr("name");if(name==sortArr[j]){dirNameArr.push(name);break}}}for(var i=0;i<dirNameArr.length;i++){var dirName="",dirId="";var name=dirNameArr[i];if(name=="WBSB"){dirName="首部";dirId="WBSB"}if(name=="SSJL"||name=="AJJBQK"){dirName="事实";dirId="AJJBQK|SSJL"}if(name=="CPYZ"){dirName="理由";dirId="CPYZ"}if(name=="PJJG"){dirName="判决结果";dirId="PJJG";isExistPJJG=1}if(name=="WBWB"){dirName="尾部";dirId="WBWB"}if(jsonData.indexOf(dirName)<0){jsonData+='{"id": "'+dirId+'", "name": "'+dirName+'"},'}}jsonData="["+jsonData.substring(0,jsonData.length-1)+"]";jsonData=eval(jsonData)}var html="";html+="<div class='tool_share'>";html+="<div class='padding_right'>";html+="    <div style='text-align:right;'><a href=\"javascript:void(0);\" id=\"directory\"><img src='../../Assets/img/content/content_directory_grey.png' style='border-color:currentColor;border: 0px;'/></a></div>";html+='    <div style=\'text-align:right;\'><a href="javascript:void(0);" style="font-size:14px;font-family:\'微软雅黑\';color:#666;" id="directorya">&nbsp;目录</a></div>';html+="    <div id='contentDirectory' class='contentDirectory'>";if(jsonData.length>0){html+="<div class='icon' style='text-align:right;'><img src=\"/Assets/img/content/content_directory_spot2.png\" /></div>";html+="       <ul><li class=\"contents\"><div class=\"contentsDirectory contentsDireBg \"><ul id='ulDirectory' class='ulDirectory'>";if($.isArray(jsonData)){if(jsonData.length>0){for(var dataItem in jsonData){html=html+this.BuildItem(jsonData[dataItem])}}}html+="       </ul></div></li></ul>";html+="<div class='icon' style='text-align:right;'><img src=\"/Assets/img/content/content_directory_spot2.png\" /></div>"}else{html+="<div style='text-align:right;'>无目录项信息</div>";$("#divTool_Dir").hide()}html+="    </div>";html+="</div>";html+="</div>";return $(html)},BuildItem:function(item){var itemLiHtml="<li class='itemName' id='"+item.id+"'><div>"+item.name+"</div></li>";return itemLiHtml},BindEvent:function(){$("#directory").bind("click",function(){if($("#contentDirectory").css("display")=="none"){$("#contentDirectory").show();$("#directory").find("img:first").attr("src","../../Assets/img/content/content_directory.png");$("#directorya").css("color","#B91516")}else{$("#contentDirectory").hide();$("#directory").find("img:first").attr("src","../../Assets/img/content/content_directory_grey.png");$("#directorya").css("color","#666")}});$(".itemName").click(function(){var dirName=this.id.split("|")[0];var targetElem=$("a[name='"+dirName+"']");if(targetElem!=undefined&&targetElem.length>0){if(targetElem.length>1){if(dirName=="WBWB"||dirName=="PJJG"){targetElem=targetElem.eq(targetElem.length-1)}else{targetElem=targetElem.eq(0)}}else{targetElem=targetElem.eq(0)}}else{targetElem=$("a[name='"+this.id.split("|")[1]+"']")}var offsetTop=targetElem.offset().top;if($(".relatefiles_container").css("display")=="block"){$(document).find("body,html").animate({scrollTop:offsetTop},500)}else{$(document).find("body,html").animate({scrollTop:offsetTop},500)}})}};$.fn.ContentDirectory=function(jsonData){var plugin=$(this).data("divTool_Dir");if(typeof plugin=="undefined"||null==plugin){plugin=new Params(this,jsonData);plugin.Init();$(this).data("divTool_Dir",plugin)}return plugin}})(jQuery,window,document);