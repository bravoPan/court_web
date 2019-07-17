﻿(function($,window,document,undefined){var Params=function(element,options){this.$element=$(element);this.defaults={data:{TDCStyle:{"tdcWidth":260,"tdcHeight":260}}};this.settings=$.extend({},this.defaults,options)};Params.prototype={Init:function(){this.BindData();this.BindEvent();this.GenerateTDC()},BindData:function(){var htmlObj=this.BuildHtml();this.$element.append(htmlObj);return this.$element},GenerateTDC:function(){var jsonData=this.settings.data;var width=jsonData.TDCStyle.tdcWidth;var height=jsonData.TDCStyle.tdcHeight;var qrcode=new QRCode(document.getElementById("tdc"),{width:width,height:height});qrcode.makeCode(window.location.href);$("#tdc table").css({"margin-left":"0","margin-top":"30","margin-right":"0"})},BuildHtml:function(){var jsonData=this.settings.data.DirectoryData;var html="";html+="<div class='tool_share'>";html+="<div class=''>";html+="    <script>window._bd_share_config = { 'common': { 'bdSnsKey': {}, 'bdText': '', 'bdMini': '2', 'bdPic': '', 'bdStyle': '0', 'bdSize': '16' }, 'share': {}, 'image': { 'viewList': ['qzone', 'tsina', 'tqq', 'renren', 'weixin'], 'viewText': '分享到：', 'viewSize': '16' }, 'selectShare': { 'bdContainerClass': null, 'bdSelectMiniList': ['qzone', 'tsina', 'tqq', 'renren', 'weixin']} }; with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];<\/script>";html+='  <div class=\'bdsharebuttonbox bdshare-temp\' id=\'share\'><img id="imgtool" src="/Assets/img/content/close.png" title=\'关闭\' style="cursor: pointer;"/><a title=\'点击进行案例网分享\' id="btnalfx"  href="javascript:void(0);"></a><a id="fx" title=\'点击进行分享\' data-cmd="more" href="javascript:void(0);"></a></div>';html+="<div class=''><a title='点击进行留言' id=\"comment\" style=\"cursor:pointer;\"><img src='../../Assets/img/content/content_comment.jpg'/></a></div>";html+="</div>";html+="</div>";html+="<div id='tdcShow' style='cursor:pointer;' class='totop'><img src='../../Assets/img/content/content_tdc_show.png'/></div>";html+="<div id='totop' class='totop'><a id=\"comment\"><img src='../../Assets/img/content/content_totop.png'/></a></div>";return $(html)},BindEvent:function(){var docid=this.getUrlParam("DocID");$("#comment").bind("click",function(){$.ajax({url:"/Content/CheckLogin",type:"POST",async:false,data:{},success:function(res){if(res=="0"){var url=window.location.pathname+window.location.search;$.post("/User/SaveUrl",{"url":url},function(){});window.location.href="/User/RegisterAndLogin?Operate=1"}else{$("#divContent_comment").show()}}})});$("#tdcShow").click(function(){$("#divtdc").show()});$("#totop").click(function(){window.scrollTo(0,0)});$("#imgtool").click(function(){$("#divTool_Share").hide()});$("#btnalfx").click(function(){$.post("/CreateContentJS/CreateImage.aspx",{"action":"caseShare","docid":docid},function(data){if(data=="数据错误"){}else{var objdata=$.parseJSON(data);if(objdata.code=="1"){window.open(objdata.url)}}})})},getUrlParam:function(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(reg);if(r!=null){return unescape(r[2])}return null}};$.fn.ContentFunction=function(jsonData){var plugin=$(this).data("divTool_Share");if(typeof plugin=="undefined"||null==plugin){plugin=new Params(this,jsonData);plugin.Init();$(this).data("divTool_Share",plugin)}return plugin}})(jQuery,window,document);