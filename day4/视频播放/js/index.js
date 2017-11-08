//获取video标签
var video=document.querySelector("video")
// console.log(video)

//获取当前播放按钮
var ks=document.querySelector(".play a")
// 开始时间
var strat=document.querySelector(".other .strat")
// 结束时间
var end=document.querySelector(".other .end")
// 当前进度条
var line=document.querySelector(".line")
// 播放进度条
var jd=document.querySelector(".line .jindu")
// 全屏按钮
var full=document.querySelector(".full")

var yl=document.querySelector(".yl")

var totaltime=0
var time=0
var jd_width=0
video.addEventListener("canplay",function(){
	this.style.display="block"

	// 获取总时长
	totaltime=this.duration
	// 转换时分秒
		var h=Math.floor(totaltime/3600); 
		var f=Math.floor(totaltime/60%60)
		var s=Math.floor(totaltime%60)
		h=h>=10?h:"0"+h;
		f=f>=10?f:"0"+f;
		s=s>=10?s:"0"+s;
	// 设置总时长
	end.innerHTML=h+":"+f+":"+s	
	// 设置播放按钮
	ks.onclick=function(){
		var state=video.paused;
		console.log(state)
		if(state){
			video.play()
		}else{
			video.pause()
		}
		ks.classList.toggle("fa-pause")
	}
	// 设置当前播放时间
	video.addEventListener("timeupdate",function(){
		// 获取当前播放时间
		time=video.currentTime;
		// 转换时分秒
		var h=Math.floor(time/3600)
		var f=Math.floor(time/60%60)
		var s=Math.floor(time%60)
		h=h>=10?h:"0"+h;
		f=f>=10?f:"0"+f;
		s=s>=10?s:"0"+s;
		// 设置当前播放时间
		strat.innerHTML=h+":"+f+":"+s
		jd_width=time/totaltime*100+"%"
		jd.style.width=jd_width
	})
	line.onclick=function(e){
	 	//设置当前播放时间位置
	 	video.currentTime=e.offsetX/this.clientWidth*totaltime;
	 }
	full.onclick=function(){
	 	video.webkitRequestFullScreen();
	}
	// 音量
	video.volume=(yl.value)/100
	yl.addEventListener("change",function(){
		var count=this.value
		video.volume=count/100
		// console.log(video.volume)
	})
	// console.log(video.volume)
})