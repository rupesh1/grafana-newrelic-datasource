System.register(["./datasource", "./ctrl/query_ctrl", "./ctrl/config_ctrl"], function (exports_1, context_1) {
    "use strict";
    var datasource_1, query_ctrl_1, config_ctrl_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            },
            function (config_ctrl_1_1) {
                config_ctrl_1 = config_ctrl_1_1;
            }
        ],
        execute: function () {
            exports_1("Datasource", datasource_1.Datasource);
            exports_1("QueryCtrl", query_ctrl_1.NewRelicQueryCtrl);
            exports_1("ConfigCtrl", config_ctrl_1.NewRelicConfigCtrl);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBUyx1QkFBVTttQ0FDVyw4QkFBUztvQ0FDUixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xyXG5pbXBvcnQgeyBOZXdSZWxpY1F1ZXJ5Q3RybCBhcyBRdWVyeUN0cmwgfSBmcm9tICcuL2N0cmwvcXVlcnlfY3RybCc7XHJcbmltcG9ydCB7IE5ld1JlbGljQ29uZmlnQ3RybCBhcyBDb25maWdDdHJsIH0gZnJvbSAnLi9jdHJsL2NvbmZpZ19jdHJsJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBEYXRhc291cmNlLFxyXG4gICAgUXVlcnlDdHJsLFxyXG4gICAgQ29uZmlnQ3RybFxyXG59O1xyXG4iXX0=