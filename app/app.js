/**
 * @author gp
 * @datetime 2012-10-16
 * @description 入口文件
 */
 

 App.container = $('#page_content');
 App.container.bind('beforeLoad',function(){
 	//alert('加载前');
 });
 App.container.bind('afterLoad',function(){
 	//alert('加载后');
 });

 Ambow.loadPage('app/controller/test1.js');

 

