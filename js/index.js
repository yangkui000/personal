$(function(){
    //头部的nav,鼠标移上去的时候,换颜色/换内容 hoverInFunction   hoverOutFunction
    $(".head-tit").hover(function() {
        $("#head-e").text("Resume").css("color","#482098");
        $("#head-c").text("前端工程师").css("color","#482098");
    }, function() {
        $("#head-e").text("杨奎").css("color","#333");
        $("#head-c").text("个人简历").css("color","#333");
    });

    //点击相关按钮,显示简历
    $(".head-left").click(function(){
        $("#resume").css("display","block");
    });
    $("#close_resume").click(function(){
        $("#resume").css("display","none");
    });

    //section5中的个人作品自动向右轮播
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    },3000);


    $('#fullpage').fullpage({
        fixedElements:'.head',  //顶部固定栏
        resize: true,
        navigation: true,
        navigationPosition: "right",
        slidesNavigation:true, //左右滑块项目导航显示
        navigationTooltips:['首页','关于我','心路历程','专业技能','我的作品','联系我'],//项目导航的tip
        loopHorizontal:true,  //左右滑块循环滑动
        css3:'true',
        //anchors:['page1','page2','page3','page4','page5','page6'],//定义锚链接,url的末尾显示

        //滚动完成后的回调函数
        afterLoad:function(link,index){
            switch(index){
                case 1:
                    move('.section1 h1').scale(1.5).duration('1s').end();
                    move('.secp1').set('top','0px').duration('1s').end(function(){
                        move('.secp2').set('top','0px').duration('0.8s').end(function(){
                            move('.secp3').set('top','0px').duration('0.7s').end()
                        })
                    });
                    break;

                case 2:
                    move('.section2 h1').set('margin-left','60%').duration('1s').end(function(){
                        // move('.section2 h1').set('margin-left','45%').duration('.5s').end(function(){
                        //      move('.section2 h1').set('margin-left','50%').duration('.5s').end(function(){
                        move('.section2 h1').set('margin-left','40%').duration('.5s').end();
                        //      })
                        // });
                    });
                    move('.sec2Bor').set('top','40%').duration('1s').end(function(){
                        move('.sectionText').set('opacity','1').duration('3s').end();
                    });
                    break;

                case 3:
                    move('.sec3-li1').set('margin-left','40%').duration('.5s').end(function(){
                        move('.sec3-li2').set('margin-left','40%').duration('.5s').end(function(){
                            move('.sec3-li3').set('margin-left','40%').duration('.5s').end(function(){
                                move('.sec3-li4').set('margin-left','40%').duration('.5s').end(function(){
                                    move('.sec3-li5').set('margin-left','40%').duration('.5s').end()
                                })
                            })
                        })
                    });
                    var oli =$("#sec3Nav li"),
                        odiv=$(".sec3Box");
                    for(var i=0;i<oli.length;i++){
                        oli[i].id=i;
                        oli[i].onclick=function(){
                            for(var j=0; j<odiv.length;j++){
                                var that=this;
                                odiv[j].style.display="none";
                                odiv[that.id].style.display="block";
                            }
                        }
                    }
                    move(".sec3Wrap") .set("margin-right","45%").duration("1.5s").end();
                    break;

                case 4:
                    move('.sec4-pic').set('top','0').duration('.3s').end(function(){
                        move('#pic-h').set('left', '0px').duration('.3s').end(function(){
                            move('#pic-c').set('left','25px').duration('.33s').end(function(){
                                move('#pic-j').set('left','50px').duration('.37s').end(function(){
                                    move('#pic-aj').set('left','75px').duration('.4s').end(function(){

                                        $('#pic-h,#pic-c,#pic-j,#pic-aj').each(function(){
                                            $(this).mouseenter(function(e){
                                                //var e = e || window.event;
                                                //console.log((e.target.childNodes)[1]);  //p
                                                if(e.target.nodeName.toLowerCase() == "div"){
                                                    $((e.target.childNodes)[1]).css("animation","none");
                                                    move((e.target.childNodes)[1]).set('top','10px').duration('.3s').end(function(){
                                                            move((e.target.childNodes)[3]).set('opacity','1').duration('.3s').end()}
                                                    );
                                                }else{
                                                    //console.log(e.target.nodeName);
                                                }

                                            })
                                        });


                                        /*
                                        //用事件委托来实现
                                        $(".sec4-pic").mouseenter(function(e){
                                            var ev = e || window.event;
                                            var target = ev.target || ev.srcElement;
                                            if(target.nodeName.toLowerCase() == "div"){
                                                console.log((target.childNodes)[3]);
                                                move((target.childNodes)[1]).set('top','10px').duration('.3s').end(function(){
                                                    move((target.childNodes)[3]).set('opacity','1').duration('.3s').end()
                                                })
                                            }
                                        }); //有bug:每次都要把鼠标先移到.sec4-pic(外层div)外面再移进去才有效
                                            //target指向不明:是.sec4-pic这个div呢,还是它内部的div?
                                         */

                                    })
                                })
                            })
                        })
                    });
                    break;

                case 5:
                    $('.demo img').each(function(){
                        $('.mydemo img').bind('mouseover',function() {
                            move(this).set('top','-20px').duration('1s').end();
                        }).bind('mouseout',function() {
                            move(this).set('top','0px').duration('1s').end();
                            /* Act on the event */
                        });
                    });
                    break;

                case 6:
                    $('#sec6li').bind('mouseover',function(){
                        $('#sec6pic').attr('src','image/weixin.png');
                    }).bind('mouseout',function(){
                        $('#sec6pic').attr('src','image/qq.png')
                    });
                    break;
                default:
                    break;
            }
        },

        //滚动开始前的回调函数
        onLeave:function(link,index){
            switch(index){
                case 1:
                    move('.section1 h1').scale(1).end();
                    //move('.secp1').set('top','2000px').end();
                    //move('.secp2').set('top','2000px').end();
                    //move('.secp3').set('top','2000px').end();

                    $('.secp1,.secp2,.secp3').each(function(){
                        move(this).set('top','2000px').end();
                    });
                    break;

                case 2:
                    move('.section2 h1').set('margin-left','-500px').end();
                    move('.sec2Bor').set('top','-4000px').duration('.1s').end();
                    move('.sectionText').set('opacity','0').duration('.1s').end();
                    break;

                case 3:
                    $('.sec3-li1,.sec3-li2,.sec3-li3,.sec3-li4,.sec3-li5').each(function(){
                        move(this).set('margin-left','-20%').end();
                    });
                    move(".sec3Wrap") .set("margin-right","-30%").end();
                    break;

                case 4:
                    move('.sec4-pic').set('top','-4000px').duration('.1s').end();
                    move('#pic-h').set('left','-300px').duration('.1s').end();
                    move('#pic-c').set('left','-600px').duration('.1s').end();
                    move('#pic-j').set('left','-900px').duration('.1s').end();
                    move('#pic-aj').set('left','-1200px').duration('.1s').end();
                    break;

                case 5:
                    break;

                default:
                    break;
            }
        }
    });
});



