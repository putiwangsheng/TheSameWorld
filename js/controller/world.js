var app = angular.module('myapp', ['DelegateEvents']);

app.controller('SameWorld', function($scope, levels){
    var circlesArr, origins,
    originFIndexOut, originFIndexIn, originSIndexOut, originSIndexIn,
    clickArr, dblClickCount;

    $scope.level = levels[0].levelName;
    circlesArr = $scope.lines = cloneObject(levels[0].levelData);
    origins = levels[0].origins;
    init();

    function init(){
        originFIndexOut = origins.firstOrigin.indexOut;
        originFIndexIn = origins.firstOrigin.indexIn;
        originSIndexOut = origins.secondOrigin.indexOut;
        originSIndexIn = origins.secondOrigin.indexIn;
        clickArr = [];
        dblClickCount = 0;

        $scope.success = false;
        $scope.failure = false;
        $scope.suggestion = false;
    }

    $scope.reset = function (){
        for (var i = 0, len = levels.length; i < len; i++) {
            if($scope.level === levels[i].levelName){
                circlesArr = levels[i].levelData;
                break;
            }
        }
        init();
    };

    $scope.isOrigin = function(indexOut, indexIn){
        if((indexOut === originFIndexOut && indexIn === originFIndexIn) || (indexOut === originSIndexOut && indexIn === originSIndexIn)){
            return true;
        }else{
            return false;
        }
    };

    $scope.clickCircle = function (e, indexOut, indexIn, line){
        if(clickArr.length === 0 && $scope.isOrigin(indexOut, indexIn) === false){
            clickArr = [];
            $scope.suggestion = true;
            return;
        }

        $scope.suggestion = false;

        var indexCoord = {};
        indexCoord.indexOut = indexOut;
        indexCoord.indexIn = indexIn;
        indexCoord.value = circlesArr[indexOut][indexIn];
        clickArr.push(indexCoord);

        //when click the origin, e.target is <i></i>
        if($scope.isOrigin(indexOut, indexIn) === true){
            drawLine(e.target.parentNode, clickArr, line);
        }else{
            drawLine(e.target, clickArr, line);
        }
    };

    $scope.isShow = function (indexOut, indexIn, direction){
        var dir = '';

        for (var i = 1, len = clickArr.length; i < len; i++) {
            if(indexOut === clickArr[i].indexOut && indexIn === clickArr[i].indexIn){
                if(clickArr[i - 1].indexOut === clickArr[i].indexOut){
                    if(clickArr[i - 1].indexIn > clickArr[i].indexIn){
                        dir = 'right';
                    }else if(clickArr[i - 1].indexIn < clickArr[i].indexIn){
                        dir = 'left';
                    }
                }

                else if(clickArr[i - 1].indexIn === clickArr[i].indexIn){
                    if(clickArr[i - 1].indexOut > clickArr[i].indexOut){
                        dir = 'down';
                    }else if(clickArr[i - 1].indexOut < clickArr[i].indexOut){
                        dir = 'up';
                    }
                }

                if(direction === dir){
                    return true;
                }
            }
        }
    };

    //double click to end
    $scope.end = function(){
        //change color
        clickArr.forEach(function(item){
            if(item.value === 0){
                circlesArr[item.indexOut][item.indexIn] = 1;
            }else if(item.value === 1){
                circlesArr[item.indexOut][item.indexIn] = 0;
            }
        });

        //hide origin
        if(clickArr[0].indexOut === originFIndexOut && clickArr[0].indexIn === originFIndexIn){
            originFIndexOut = originFIndexIn = -1;
        }else if(clickArr[0].indexOut === originSIndexOut && clickArr[0].indexIn === originSIndexIn){
            originSIndexOut = originSIndexIn = -1;
        }

        clickArr = [];

        //judge isSuccess
        dblClickCount++;
        if(dblClickCount === 2){
            isSuccess();
            if($scope.success){
                console.log(isSuccess());
                selectLevel();
                console.log($scope.lines);
            }
        }
    };

    function isSuccess(){
        var countBlack = 0,
            countWhite = 0,
            totalCircle = 0;

        for (var i = 0, len1 = circlesArr.length; i < len1; i++) {
            totalCircle += circlesArr[i].length;
            for (var j = 0, len2 = circlesArr[i].length; j < len2; j++) {
                if(circlesArr[i][j] === 0 || circlesArr[i][j] === undefined){
                    countBlack++;
                }else if(circlesArr[i][j] === 1 || circlesArr[i][j] === undefined){
                    countWhite++;
                }
            }
        }

        if(countBlack === totalCircle || countWhite === totalCircle){
            $scope.success = true;
        }else{
            $scope.failure = true;
        }
    }

    function selectLevel(){
        for (var i = 0, len = levels.length; i < len; i++) {
            if($scope.level === levels[i].levelName){
                $scope.level = levels[i + 1].levelName;
                $scope.lines = levels[i + 1].levelData;
                origins = levels[i + 1].origins;
                $scope.reset();
                break;
            }
        }
    }

    function drawLine(node){
        setCanvas('canvasRowR', 20, node);
        setCanvas('canvasRowL', 20, node);
        setCanvas('canvasColumnD', 20, node);
        setCanvas('canvasColumnUp', 20, node);
    }

    function setCanvas(canvasClass, lineLen, node){
        var canvas = node.getElementsByClassName(canvasClass)[0];
        var ctx = canvas.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(lineLen, 0);
        ctx.strokeStyle = "purple";
        ctx.stroke();
    }

    function cloneObject(src) {
        var result;

        if(src instanceof Array){
            result = [];
            for (var i = 0, len = src.length; i < len; i++) {
                result[i] = cloneObject(src[i]);
            }
        }else if (src instanceof Object) {
            result = {};
            for (var key in src) {
                if (src.hasOwnProperty(key)) {
                    result[key] = cloneObject(src[key]);
                }
            }
        }else{
            result = src;
        }
        return result;
    }

});
