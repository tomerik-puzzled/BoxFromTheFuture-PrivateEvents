$(function () {

    const numToLet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    //let storage = window.localStorage;

    const comboArray = [0, 1, 2, 3];
    const combination = ["2", "5", "2", "5"];

    const gridIncrement = $(".lock-dial ul").css('line-height').replace('px', '') / 2;
    const numNums = $(".lock-dial:eq(0) ul li").length;
    const halfHeight = gridIncrement * numNums;
    const initTop = -(halfHeight - gridIncrement);

    $('#reboot').click(() => {
        if (window.confirm('Stuck? Click okay to reset the puzzle')) {
            storage.setItem('padlock-solved', 0);
            location.reload();
        }
    });

    $(".lock-dial ul").css('top', initTop);

    $(".lock-dial ul").draggable({
        grid: [0, gridIncrement],
        axis: 'y',
        drag: function () {
            const dragDir = $(this).css('top').replace('px', '') < initTop ? "up" : "down";

            if (dragDir == "up") {
                const curNum = parseInt($(this).find('li:last-child').attr('class')) + 1;
                if (curNum < 10) {
                    $(this).append('<li class="' + curNum + '">' + numToLet[curNum] + '</li>');
                } else {
                    $(this).append('<li class="0">A</li>');
                };
            } else {
                const curNum = parseInt($(this).find('li:first-child').attr('class')) - 1;
                const thisTop = parseInt($(this).css('margin-top').replace('px', ''));

                $(this).css({
                    marginTop: thisTop - (gridIncrement * 2)
                });

                if (curNum > -1) {
                    $(this).prepend('<li class="' + curNum + '">' + numToLet[curNum] + '</li>');
                } else {
                    $(this).prepend('<li class="9">2</li>');
                };
            };
        },
        stop: function () {

            //MATHS		
            const negOrPos = $(this).css('margin-top').replace('px', '') > 0 ? 1 : -1;
            const thisTopTotal = parseInt($(this).css('top').replace('px', '')) + Math.abs(initTop);
            const marginMinified = parseInt(Math.abs($(this).css('margin-top').replace('px', ''))) - thisTopTotal;
            const numIncs = Math.floor(marginMinified / (halfHeight * 2));
            const totalDif = numIncs * (halfHeight * 2);
            const topTen = (marginMinified - totalDif) * negOrPos;
            const activeIndex = Math.abs(topTen / (gridIncrement * 2)) + (halfHeight / (gridIncrement * 2));

            $(this).attr("data-combo-num", $(this).find('li').eq(activeIndex).text()).css({
                top: -315,
                marginTop: topTen
            }).find('li').slice(20).remove();

            for (var i = 0; i < $(".lock-dial ul").length; i++) {
                comboArray[i] = $(".lock-dial ul:eq(" + i + ")").attr("data-combo-num");
            }

            if (comboArray == "" + combination) {
                //storage.setItem("padlock-solved", 1);
                $('.lock-dial ul').draggable('disable');
                $('#lock-wrapper').addClass("unlocked");
                $('.lock-dial').each(function () {
                    var $this = $(this);
                    $this.find('ul').delay(400).css('color', '#0f0').fadeOut(function () {
                        $this.animate({
                            marginTop: 150
                        }, function () {
                            $this.fadeOut(function () {
                                $('.welcome-message').fadeIn(() => {
                                    $('#lock-plate').hide();
                                    $('#chestOpen').show();
                                    window.open("../../index-box-opened.html", '_blank');

                                    


                                });
                            });
                        });
                    });
                });
            }
        }
    });



    if (storage.getItem("padlock-solved") == 1) {
        $('.lock-dial ul').draggable('disable');
        $('#lock-wrapper').addClass("unlocked");
        $('.lock-dial').each(function () {
            var $this = $(this);
            $this.find('ul').delay(400).css('color', '#0f0').fadeOut(function () {
                $this.animate({
                    marginTop: 150
                }, function () {
                    $this.fadeOut(function () {
                        $('.welcome-message').fadeIn(() => {
                            $('#lock-plate').hide();
                            $('#chestOpen').show();
                            parent.document.getElementById('IIIa').style.display ='none';

                        });
                    });
                });
            });
        });
    }
})

function openChest () {window.open("../../index-box-opened.html", '_blank');}