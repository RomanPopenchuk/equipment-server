$(document).ready(function()
{
$(function(){
alert('Подключена последняя версия jQuery через Google хостинг');
});

	/*
			rotatePics(3)
			function rotatePics(currentPhoto){
			 var numberOfPhotos = $('#photos img').length;
			 currentPhoto = currentPhoto % numberOfPhotos;

			 $('#photos img').eq(currentPhoto).fadeOut(1000, function(){
				//Переупорядочить z-index
			$('#photos img').each(function(i){
			 $(this).css('zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos);
			});
			 $(this).show();
			 setTimeout(function(){rotatePics(++currentPhoto);}, 3000);
			});
			};
	*/		

//Hide all item descriptions in the info box
	$("#infobox > div").css({"display": "none"});
		
//Call in the info box
	$("li").click(function(){
	$("#infobox").animate({bottom: '480px' }, 300); 
	$("#fade_bg").fadeIn();
	return false;
	});
	
//Show description for selected item
	$("#TFP1-3").click(function(){
	$("#TFP1-3_info").show();
	});			
	$("#PDM1").click(function(){
	$("#PDM1_info").show();
	});
	$("#MTC1").click(function(){
	$("#MTC1_info").show();
	});			
	$("#TFP4-9").click(function(){
	$("#TFP4-9_info").show();
	});			
	$("#PDM2").click(function(){
	$("#PDM2_info").show();
	});
	$("#MTC2").click(function(){
	$("#MTC2_info").show();
	});
	$("#ATM140").click(function(){
	$("#ATM140_info").show();
	});	
	$("#SD8200").click(function(){
	$("#SD8200_info").show();
	});
	
	//Вызов справки по оборудованию TFP1-3
	$(".info").hide();
	$(".info").click(function(){
	$(".info").hide();
	$(".button_equip").css({'background-color':'#008800'});
	});
	
	
	
	var a = [$("#CPM1"), $("#CPM2"), $("#M1"), $("#M2"), $("#M3"), //Порядок должен соответствовать структуре DOM!!!
			 $("#M4"), $("#M5"), $("#M6"), $("#M7"), $("#TFP1"),
			 $("#TFP2"), $("#TFP3"), $("#M41"), $("#M42"), $("#M43")
			 ];
		$(".button_equip").each(function(index){
			$(this).click(function(){
				a[index].toggle();	 
				if(a[index].is(':visible')){
					$(this).css({'background-color':'#ff3333'}); 
				}else{
				$(this).css({'background-color':'#008800'}); 
				}
			});
		});	
	
   	//Expand more info button on hover
	$("#menue li").hover(function(){
	$(this).stop().animate({width: '470px' }, 200).css({'z-index' : '10','background-color':'#d3d3d3'});
	}, function () {
	$(this).stop().animate({width: '460px' }, 200).css({'z-index' : '1', 'background-color':'white'}); 
    });
      		
	

	//Remove background, infobox and hide all descriptions
	$("#fade_bg, .close").click(function(){
	$("#fade_bg").fadeOut();
	$("#infobox").animate({bottom: '-1200px' }, 200, function() {
	$("#infobox > div").css("display", "none");
	$(".info").hide();
	});
	return false;
	});
		
	//Сортировка списка
	$('#menue').sortable();
	$('#aim').draggable();
	
	//Вычисляем координаты div-а с id=aim и высвечиваем их
	//Выставляем элемен #aim, считываем координаты и вносим их в CSS для кнопки, которая должна располагаться на этом месте
	$("#aim").click(function(){
	alert("Top: "+aim.style.top+" "+"Left: "+aim.style.left);
	});
	
	});