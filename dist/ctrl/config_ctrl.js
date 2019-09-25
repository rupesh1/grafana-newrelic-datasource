System.register([], function (exports_1, context_1) {
    "use strict";
    var NewRelicConfigCtrl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NewRelicConfigCtrl = (function () {
                function NewRelicConfigCtrl() {
                    if (this.current.id) {
                        this.current.url = '/api/datasources/proxy/' + this.current.id;
                    }
                }
                NewRelicConfigCtrl.templateUrl = 'partials/config.html';
                return NewRelicConfigCtrl;
            }());
            exports_1("NewRelicConfigCtrl", NewRelicConfigCtrl);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnX2N0cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3RybC9jb25maWdfY3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztnQkFVSTtvQkFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO3dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztxQkFDbEU7Z0JBQ0wsQ0FBQztnQkFSYSw4QkFBVyxHQUFHLHNCQUFzQixDQUFDO2dCQVV2RCx5QkFBQzthQUFBLEFBWkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1zZGstbW9ja3MvYXBwL2hlYWRlcnMvY29tbW9uLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdSZWxpY0NvbmZpZ0N0cmwge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvY29uZmlnLmh0bWwnO1xyXG4gICAgcHVibGljIGN1cnJlbnQ6IGFueTtcclxuXHJcbiAgICAvKiogQG5nSW5qZWN0ICoqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudC5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQudXJsID0gJy9hcGkvZGF0YXNvdXJjZXMvcHJveHkvJyArIHRoaXMuY3VycmVudC5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==