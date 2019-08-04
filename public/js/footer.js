$(function(){
  //请求页脚.html片段
  $.ajax({
    url:"footer.html",
    type:"get",
    success:function(result){
      //返回的是一段html片段
      //console.log(result);
      //用片段创建新的<footer>元素，替换现有<footer id="footer">元素
      $(result).replaceAll("#footer");
      //并自动添加footer.css到页面
      $(`<link rel="stylesheet" href="../css/footer.css"/>`)
      .appendTo("head");
    }
  })
})