app.factory('levels', function (){
    var levels = [
        {
            levelName: "1-1",
            levelData:[
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [1, 1, 0, 1],
                [0, 0, 1, 0],
                [0, 0, 1, 0]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 0,
                    indexIn: 2
                },
                secondOrigin: {
                    indexOut: 2,
                    indexIn: 3
                }
            }
        },
        {
            levelName: "1-2",
            levelData: [
                [1],
                [0, 1, 1, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 0],
                [undefined, undefined, undefined, 1]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 1,
                    indexIn: 0
                },
                secondOrigin: {
                    indexOut: 3,
                    indexIn: 3
                }
            }
        },
        {
            levelName: "1-3",
            levelData: [
                [1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1],
                [0, 1, 0, 1, 0],
                [1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 0,
                    indexIn: 1
                },
                secondOrigin: {
                    indexOut: 2,
                    indexIn: 4
                }
            }
        },
        {
            levelName: "1-4",
            levelData: [
                [0, 0, 1, 0, 1],
                [1, 1, 0, 0, 1],
                [undefined, 1, 0, 0, undefined],
                [undefined, 1, 0, 0, undefined],
                [1, 1, 0, 0, 1],
                [0, 0, 1, 0, 1]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 5,
                    indexIn: 0
                },
                secondOrigin: {
                    indexOut: 5,
                    indexIn: 2
                }
            }
        },
        {
            levelName: "2-1",
            levelData: [
                [1, 0, undefined, 0, 1],
                [1, 0, 1, 0, 1],
                [undefined, 0, 1, 0, undefined],
                [0, 1, 0, 1, 0],
                [1, 0, 0, 0, 1],
                [1, 1, undefined, 1, 1]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 0,
                    indexIn: 3
                },
                secondOrigin: {
                    indexOut: 3,
                    indexIn: 4
                }
            }
        },
        {
            levelName: "2-2",
            levelData: [
                [1],
                [0, 1, 1, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 0],
                [undefined, undefined, undefined, 1]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 0,
                    indexIn: 3
                },
                secondOrigin: {
                    indexOut: 3,
                    indexIn: 4
                }
            }
        },
        {
            levelName: "2-3",
            levelData: [
                [1],
                [0, 1, 1, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 0],
                [undefined, undefined, undefined, 1]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 0,
                    indexIn: 3
                },
                secondOrigin: {
                    indexOut: 3,
                    indexIn: 4
                }
            }
        },
        {
            levelName: "2-4",
            levelData: [
                [1, 1, 1, 1, 1],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [1, 1, 1, 1, 1]
            ],
            origins: {
                firstOrigin: {
                    indexOut: 5,
                    indexIn: 0
                },
                secondOrigin: {
                    indexOut: 5,
                    indexIn: 4
                }
            }
        },
    ];

    return levels;
});
