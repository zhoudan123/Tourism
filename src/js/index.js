require(['https://cdn.bootcss.com/jquery/1.11.2/jquery.js'],function(){
	$(function(){
		var a = -1;
		$('#i1').click(function(){
			a++;
			console.log(a);
			$('.img1').eq(a).css('opacity','1');
			
		});

		$('.nav-search1 ul li').click(function(){
			var a = $(this).index();
			$('.nav-search2 form').eq(a).css('display','block').siblings().css('display','none');
		})
		
		$('form input').on('focus',function(){
			$('dl').css('display','block');
		})
		$('form input').on('blur',function(){
			$('dl').css('display','none');
		})
		// 特别策划 图片切换
		var timer;
		$('.tbch-2 ul li').mouseenter(function(){
			var a = $(this).index();
			$('.tbch-img img').eq(a).css('opacity','1').siblings().css('opacity','0');
			clearInterval(timer);
		})
		$('.tbch-2 ul li').mouseleave(function(){
			timerFn();
		})
		$('.tbch-2').mouseenter(function(){
			clearInterval(timer);
		})
		$('.tbch-2').mouseleave(function(){
			timerFn();
		})
		timerFn();
		function timerFn(){
			var index = 0;
			timer = setInterval(function(){
				index++;
				if(index >= 3){
					index = 0;
				}
				$('.tbch-img img').eq(index).css('opacity','1').siblings().css('opacity','0');
			},1500);
		}
		// 用户 轮播
			var i = 0;
			var timer = setInterval(function(){
				i++;
				if (i>=5) {
					i=0;
				}
				$('.advtry-user ul')[0].style.left= i*-60 +'px';
			},1000);
		
		// 滑动圆点
		$('.main-shop1 .main-dian a').mouseenter(function(){
			$(this).css('background','#fff').siblings().css('background','');
			$('.main-shop2 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
		})
		$('.section .main-dian a').mouseenter(function(){
			$(this).css('background','#fff').siblings().css('background','');
			$('.section-tu ul').eq($(this).index()).css('display','block').siblings().css('display','none');
		})





// $.getJSON('../static/FeHelper-20171026151352.json', function(json) {
// 	console.log(json.data);
// 		$.each(json.data, function(index, val) {
// 			if (json.data[index].type == 'login') {
// 				$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="top-green"><h3>让我们更懂你</h3><p>拥有穷游账号，获得更准确的推荐</p><a href="###">立即注册</a><span>已有账号？</span><a href ="###" class="a4">登录</a><br><i class="iconfont">&#xe622;</i><i class="iconfont">&#xe637;</i><i class="iconfont">&#xe610;</i></div></div>');
// 			}else{
// 				if(json.data[index].type == 'bbs'){
// 					$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="exh"><img src="'+json.data[index].data.pic+'"><div class="tag"><span class="bt">'+json.data[index].data.type+'</span></div></div><div class="info clearFix"><p>'+json.data[index].data.subject+'</p><span>'+json.data[index].data.username+'</span><span>'+json.data[index].data.views+'人浏览过</span></div></div>');
// 				}else{
// 					if (json.data[index].type == 'lm') {
// 						$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="exh"><img src="'+json.data[index].data.pic+'"><div class="tag"><span class="bt">折扣</span></div></div><div class="info clearFix"><p>'+json.data[index].data.subject+'</p><span>'+json.data[index].data.start_pos+'</span><span>'+json.data[index].data.price+'</span></div></div>');
// 					}else{
// 						if (json.data[index].type == 'mguide') {
// 							$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="exh"><img src="'+json.data[index].data.pic+'"><div class="tag"><span class="bt">微锦囊</span></div></div><div class="info clearFix"><p>'+json.data[index].data.subject+'</p><span>'+json.data[index].data.username+'</span><span>推荐了'+json.data[index].data.item_count+'个目的地</span></div></div>');
// 						}
// 					}
// 				}
// 			}
// 		});
// 	});



$.getJSON('../static/FeHelper-20171027100707.json', function(json) {
	// console.log(json.data.item);
	var $item = json.data.item;
	$.each($item, function(index, val) {
		// console.log(json.data.item[index].title);
			$('.shop2-ul1 li').eq(index).html('<div class="main-kj"><img src="'+ $item[index].imgsrc +'"><div class="inner"><p>'+ $item[index].title+'</p><div class="dt"><span class="dt-r"><a href="##">'+ $item[index].datetime+'</a></span><span class="dt-l"><a href="##">'+ $item[index].tag+'</a></span></div><div class="price"><span class="price-1"><em>'+$item[index].price +'</em></span></span></div></div></div>')

	})
		
});
	// var b = 0;
	$.getJSON('../static/FeHelper-20171027175503.json', function(json) {
		// b++;
		// console.log(json.data[0]);
		var $data = json.data[0];
		$.each($data, function(index, val) {
			// console.log(index);
				$('.section-tu1 li').html($('.section-tu1').html() + '<div class="pic1"><img class="avatar" src="'+ json.data[0][index].pic  +'"><span>31</span></div><div class="inner-1"><div class="pic2 clearFix"><a href="##"><img src="'+  json.data[0][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[0][index].username+'</a></span></div><div class="caption"><a href="##">'+ json.data[0][index].title +'</a></div></div></div>')
				$('.section-tu2 li').html($('.section-tu1').html() + '<div class="pic1"><img class="avatar" src="'+ json.data[1][index].pic  +'"><span>31</span></div><div class="inner-1"><div class="pic2 clearFix"><a href="##"><img src="'+  json.data[1][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[1][index].username+'</a></span></div><div class="caption"><a href="##">'+ json.data[1][index].title +'</a></div></div></div>')
				$('.section-tu3 li').html($('.section-tu1').html() + '<div class="pic1"><img class="avatar" src="'+ json.data[2][index].pic  +'"><span>31</span></div><div class="inner-1"><div class="pic2 clearFix"><a href="##"><img src="'+  json.data[2][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[2][index].username+'</a></span></div><div class="caption"><a href="##">'+ json.data[2][index].title +'</a></div></div></div>')
				$('.section-tu4 li').html($('.section-tu1').html() + '<div class="pic1"><img class="avatar" src="'+ json.data[3][index].pic  +'"><span>31</span></div><div class="inner-1"><div class="pic2 clearFix"><a href="##"><img src="'+  json.data[3][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[3][index].username+'</a></span></div><div class="caption"><a href="##">'+ json.data[3][index].title +'</a></div></div></div>')
				$('.section-tu5 li').html($('.section-tu1').html() + '<div class="pic1"><img class="avatar" src="'+ json.data[4][index].pic  +'"><span>31</span></div><div class="inner-1"><div class="pic2 clearFix"><a href="##"><img src="'+  json.data[4][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[4][index].username+'</a></span></div><div class="caption"><a href="##">'+ json.data[4][index].title +'</a></div></div></div>')

		})
			
	});


		
		
		
		
		
		

			








		 
	})
})
