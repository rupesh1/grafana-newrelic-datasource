System.register(["lodash", "app/plugins/sdk"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var lodash_1, sdk_1, NewRelicQueryCtrl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            }
        ],
        execute: function () {
            NewRelicQueryCtrl = (function (_super) {
                __extends(NewRelicQueryCtrl, _super);
                function NewRelicQueryCtrl($scope, $injector) {
                    var _this = _super.call(this, $scope, $injector) || this;
                    _this.supported_services = [{ text: "Insights API", value: "insights" }];
                    _this.supported_formats = {
                        insights: [{ text: "Time Series", value: "timeseries" }, { text: "Table", value: "table" }]
                    };
                    _this.defaults = {
                        queryType: "insights",
                        insights: {
                            nrql: "",
                            resultFormat: "timeseries"
                        }
                    };
                    lodash_1.default.defaultsDeep(_this.target, _this.defaults);
                    return _this;
                }
                NewRelicQueryCtrl.templateUrl = 'partials/query.editor.html';
                return NewRelicQueryCtrl;
            }(sdk_1.QueryCtrl));
            exports_1("NewRelicQueryCtrl", NewRelicQueryCtrl);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlfY3RybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdHJsL3F1ZXJ5X2N0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLdUMscUNBQVM7Z0JBZ0I1QywyQkFBWSxNQUFNLEVBQUUsU0FBUztvQkFBN0IsWUFDSSxrQkFBTSxNQUFNLEVBQUUsU0FBUyxDQUFDLFNBRTNCO29CQWhCTSx3QkFBa0IsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFDbkUsdUJBQWlCLEdBQUc7d0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztxQkFDOUYsQ0FBQztvQkFDSyxjQUFRLEdBQUc7d0JBQ2QsU0FBUyxFQUFFLFVBQVU7d0JBQ3JCLFFBQVEsRUFBRTs0QkFDTixJQUFJLEVBQUUsRUFBRTs0QkFDUixZQUFZLEVBQUUsWUFBWTt5QkFDN0I7cUJBQ0osQ0FBQztvQkFLRSxnQkFBQyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBQy9DLENBQUM7Z0JBakJhLDZCQUFXLEdBQUcsNEJBQTRCLENBQUM7Z0JBbUI3RCx3QkFBQzthQUFBLEFBckJELENBQXVDLGVBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1zZGstbW9ja3MvYXBwL2hlYWRlcnMvY29tbW9uLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUXVlcnlDdHJsIH0gZnJvbSAnYXBwL3BsdWdpbnMvc2RrJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdSZWxpY1F1ZXJ5Q3RybCBleHRlbmRzIFF1ZXJ5Q3RybCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9xdWVyeS5lZGl0b3IuaHRtbCc7XHJcbiAgICBwdWJsaWMgc3VwcG9ydGVkX3NlcnZpY2VzID0gW3sgdGV4dDogXCJJbnNpZ2h0cyBBUElcIiwgdmFsdWU6IFwiaW5zaWdodHNcIiB9XTtcclxuICAgIHB1YmxpYyBzdXBwb3J0ZWRfZm9ybWF0cyA9IHtcclxuICAgICAgICBpbnNpZ2h0czogW3sgdGV4dDogXCJUaW1lIFNlcmllc1wiLCB2YWx1ZTogXCJ0aW1lc2VyaWVzXCIgfSwgeyB0ZXh0OiBcIlRhYmxlXCIsIHZhbHVlOiBcInRhYmxlXCIgfV1cclxuICAgIH07XHJcbiAgICBwdWJsaWMgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgcXVlcnlUeXBlOiBcImluc2lnaHRzXCIsXHJcbiAgICAgICAgaW5zaWdodHM6IHtcclxuICAgICAgICAgICAgbnJxbDogXCJcIixcclxuICAgICAgICAgICAgcmVzdWx0Rm9ybWF0OiBcInRpbWVzZXJpZXNcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqIEBuZ0luamVjdCAqKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xyXG4gICAgICAgIF8uZGVmYXVsdHNEZWVwKHRoaXMudGFyZ2V0LCB0aGlzLmRlZmF1bHRzKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19