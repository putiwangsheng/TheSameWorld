angular.module('myapp', ['DelegateEvents'])
    .controller('sameworld', function($scope){
        $scope.reset = function (){
            $scope.lines = [
                [1],
                [0, 1, 1, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 0],
                [undefined, undefined, undefined, 1]
            ];
            $scope.isShow = false;
            $scope.success = false;
            $scope.failure = false;
        };

        var circlesArr = $scope.lines = [
            [1],
            [0, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 0],
            [undefined, undefined, undefined, 1]
        ];
        var origins = {
            firstOrigin: {
                indexOut: 1,
                indexIn: 0
            },
            secondOrigin: {
                indexOut: 3,
                indexIn: 3
            }
        };
        var originFIndexOut = origins.firstOrigin.indexOut;
        var originFIndexIn = origins.firstOrigin.indexIn;
        var originSIndexOut = origins.secondOrigin.indexOut;
        var originSIndexIn = origins.secondOrigin.indexIn;

        var clickArr = [];
        var dblClickCount = 0;

        // judge the circle is origin point or not
        $scope.isOrigin = function(indexOut, indexIn){
            if((indexOut === originFIndexOut && indexIn === originFIndexIn) || (indexOut === originSIndexOut && indexIn === originSIndexIn)){
                return true;
            }else{
                return false;
            }
        };

        $scope.clickCircle = function (e, indexOut, indexIn, line){
            if(clickArr.length === 0 && $scope.isOrigin(indexOut, indexIn) === false){
                $scope.suggestion = true;
                return;
            }
            $scope.suggestion = false;
            var indexCoord = {};
            indexCoord.indexOut = indexOut;
            indexCoord.indexIn = indexIn;
            indexCoord.value = circlesArr[indexOut][indexIn];
            clickArr.push(indexCoord);

            if(clickArr.length >= 2){
                if($scope.isOrigin(indexOut, indexIn) === true){
                    drawLine(e.target.parentNode, clickArr, line);
                }else{
                    drawLine(e.target, clickArr, line);
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

            //TODO
            if(clickArr[0].indexOut === originFIndexOut && clickArr[0].indexIn === originFIndexIn || clickArr[0].indexOut === originSIndexOut && clickArr[0].indexIn === originSIndexIn){
            }

            clickArr = [];
            $scope.isShow = false;

            dblClickCount++;
            if(dblClickCount === 2){
                isSuccess();
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

        function drawLine(node, clickArr, line){
            var preCircle = clickArr[clickArr.length - 2];
            var curCircle = clickArr[clickArr.length - 1];

            if(preCircle.indexOut === curCircle.indexOut){
                if(curCircle.indexIn !== line.length - 1 && preCircle.indexIn > curCircle.indexIn){
                    setCanvas('canvasRowR', 20, node);
                }else if(curCircle.indexIn !== 0 && preCircle.indexIn < curCircle.indexIn){
                    setCanvas('canvasRowL', 20, node);
                }
            }

            if(preCircle.indexIn === curCircle.indexIn){
                if(curCircle.indexOut !== circlesArr.length - 1 && preCircle.indexOut > curCircle.indexOut){
                    setCanvas('canvasColumnD', 20, node);
                }else if(curCircle.indexOut !== 0 && preCircle.indexOut < curCircle.indexOut){
                    setCanvas('canvasColumnUp', 20, node);
                }
            }

        }

        function setCanvas(canvasClass, lineLen, node){
            var canvas = node.getElementsByClassName(canvasClass)[0];
            var ctx = canvas.getContext("2d");
            ctx.moveTo(0, 0);
            ctx.lineTo(lineLen, 0);
            ctx.strokeStyle = "purple";
            ctx.stroke();
            $scope.isShow = true;
        }

    });
