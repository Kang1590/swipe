$(document).on("pagecreate" ,"#layout", function(){	

	//오른쪽방향으로 손가락 밀기 (스와이프)  봄>겨울>가을>여름>봄...
	$("#slideArea").swiperight(function(){				
			j = $("#circle button.red").index();
			j--;
			console.log( j );  //-1 
			gogo( j );
	});	

	//왼쪽방향으로 손가락 밀기 (스와이프)  봄>여름>겨울>겨울>봄...
	$("#slideArea").swipeleft(function(){
			j = $("#circle button.red").index();
			j++;
			console.log( j );  //-1 
			gogo( j );
	});
	
	//원형아이콘버튼 클릭
	$("#circle button").click(function(){
		let z = $(this).index();   // [0,1,2,3]
		gogo( z );
	});
	
	
	let i = $("#slide").position().left;//해당요소의 상대 좌표 X
	let j = $("#circle button.red").index();//빨간원형 인덱스 [0,1,2,3]
	function gogo( y ){
			console.log( "함수는 " + y + "을(를) 가지고 왔다");
			//원형아이콘버튼을 클릭하여 인자(매개변수)를 가져왔을때,
			if( y != null ){
					j = y;
					console.log( j ); //-1					
			}
			switch( j ) {
				case -1 : i = "0px"; 	 break; //겨울
				case 0 :  i = "-1000px"; break; //봄
				case 1 :  i = "-2000px"; break; //여름
				case 2 :  i = "-3000px"; break; //가을
				case 3 :  i = "-4000px"; break; //겨울
				case 4 :  i = "-5000px";        //봄
				
			}
			if( j == -1 ) {
				$("#slide").stop().animate({left: i },1000,function(){
					$("#circle button").eq( 3 ).addClass("red").siblings().removeClass("red");
					$("#slide").css("left" , "-4000px");					
				});				
			}
			if( j == 4 ){
				$("#slide").stop().animate({left: i },1000,function(){
					$("#circle button").eq( 0 ).addClass("red").siblings().removeClass("red");
					$("#slide").css("left" , "-1000px");					
				});
			}
			if( j > -1 && j < 4){
				$("#slide").stop().animate({ left: i},1000);
				$("#circle button").eq( j ).addClass("red").siblings().removeClass("red");
			}
	}	
	
});////////////all end
