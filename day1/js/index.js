$('#fullpage').fullpage({
    verticalCentered: false,
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
    navigation: true,
    //进入当前屏幕时
    afterLoad: function (anchorLink, index) {
        //console.log($(this));
        $(this).addClass('select')
    },
    //离开当前屏进入下一屏时
    onLeave:function(index,nextIndex,direction){
        if(index==2 && nextIndex==3){
            $(".screen02 .tu2_sofa").addClass('animate').on('animationend',function(){
                //console.log(1)
                $(".screen03 .sofa").show();
                $(".screen03 .car img:last-child").fadeIn()
                $(".screen03 .change img:last-child").fadeIn()
            })
        }else if(index == 3 && nextIndex == 4){
            //console.log(1);
            $(".screen04 .yun").addClass('animate')
            $('.screen03 .ycsf').addClass('animate').on('animationend',function(){
                $(".screen04 .car img:first-child").show()
                $(".screen04 .car").addClass('animate').on('transitionend',function(){
                    $(".screen04 .txt img:last-child").fadeIn(400,function(){
                        $('.screen04 .address').fadeIn()
                    })
                })

            })
        }else if(index==5 && nextIndex==6){
            $(".screen06 .tu6sf").addClass('animate')
            $(".screen06 .cloud").addClass('animate')
            $(".screen06 .package").addClass('animate').on('animationend',function(){
                $(".screen06 .car .addressImg").addClass('animate')
                $(".screen06").addClass('animate').on('transitionend',function(){
                    $(".screen06 .car .workerImg").addClass('animate').on('transitionend',function(){
                        $(".screen06 .text").addClass('animate')
                        $(".screen06 .car .sayImg").addClass('animate')
                        $(".screen06 .person").addClass('animate')
                    })
                })

            })
        }

    }

});