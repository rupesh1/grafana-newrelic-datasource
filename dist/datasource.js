System.register(["lodash", "./datasources/InsightsDataSource"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var lodash_1, InsightsDataSource_1, Datasource;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (InsightsDataSource_1_1) {
                InsightsDataSource_1 = InsightsDataSource_1_1;
            }
        ],
        execute: function () {
            Datasource = (function () {
                function Datasource(instanceSettings, backendSrv, $q) {
                    this.instanceSettings = instanceSettings;
                    this.backendSrv = backendSrv;
                    this.$q = $q;
                    this.insightsDataSource = new InsightsDataSource_1.NewrelicInsightsDataSource(this.instanceSettings, this.backendSrv, this.$q);
                }
                Datasource.prototype.query = function (options) {
                    var promises = [];
                    var insightsOptions = lodash_1.default.cloneDeep(options);
                    insightsOptions.targets = lodash_1.default.filter(insightsOptions.targets, ['queryType', 'insights']);
                    if (insightsOptions.targets.length > 0) {
                        var insightsPromise = this.insightsDataSource.query(insightsOptions);
                        if (insightsPromise) {
                            promises.push(insightsPromise);
                        }
                    }
                    return Promise.all(promises).then(function (results) {
                        return { data: lodash_1.default.flatten(results) };
                    });
                };
                Datasource.prototype.testDatasource = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            try {
                                this.insightsDataSource.query({
                                    range: {
                                        from: "",
                                        to: ""
                                    },
                                    targets: [{
                                            insights: {
                                                nrql: "SELECT 1 FROM Mobile SINCE TODAY",
                                                resultFormat: "table"
                                            }
                                        }]
                                }).then(function (result) {
                                    console.log(result);
                                    resolve({ message: "Successfully Connected Newrelic", status: 'success' });
                                }).catch(function (ex) {
                                    console.log(ex);
                                    reject({ message: "Failed to Connect", status: 'error' });
                                });
                            }
                            catch (error) {
                                console.log(error);
                                reject({ message: "Failed to Connect", status: 'error' });
                            }
                            return [2];
                        });
                    }); });
                };
                Datasource.prototype.metricFindQuery = function (query) {
                    if (!query) {
                        return Promise.resolve([]);
                    }
                    return Promise.resolve([]);
                };
                return Datasource;
            }());
            exports_1("Datasource", Datasource);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBS0ksb0JBQW9CLGdCQUFnQixFQUFVLFVBQVUsRUFBVSxFQUFFO29CQUFoRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUE7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBQTtvQkFBVSxPQUFFLEdBQUYsRUFBRSxDQUFBO29CQUNoRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSwrQ0FBMEIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlHLENBQUM7Z0JBRU0sMEJBQUssR0FBWixVQUFhLE9BQVk7b0JBQ3JCLElBQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztvQkFDM0IsSUFBTSxlQUFlLEdBQUcsZ0JBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsZ0JBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUN2RixJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDcEMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDdkUsSUFBSSxlQUFlLEVBQUU7NEJBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFBRTtxQkFDM0Q7b0JBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87d0JBQ3JDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFTSxtQ0FBYyxHQUFyQjtvQkFBQSxpQkEyQkM7b0JBMUJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7NEJBQ3JDLElBQUk7Z0NBQ0EsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztvQ0FDMUIsS0FBSyxFQUFFO3dDQUNILElBQUksRUFBRyxFQUFFO3dDQUNULEVBQUUsRUFBRSxFQUFFO3FDQUNUO29DQUNELE9BQU8sRUFBRSxDQUFDOzRDQUNOLFFBQVEsRUFBRTtnREFDTixJQUFJLEVBQUUsa0NBQWtDO2dEQUN4QyxZQUFZLEVBQUUsT0FBTzs2Q0FDeEI7eUNBQ0osQ0FBQztpQ0FDTCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtvQ0FDVixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29DQUNwQixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0NBQy9FLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEVBQUU7b0NBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQ0FDaEIsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dDQUM5RCxDQUFDLENBQUMsQ0FBQzs2QkFFTjs0QkFBQyxPQUFPLEtBQUssRUFBRTtnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNuQixNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7NkJBQzdEOzs7eUJBQ0osQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRU0sb0NBQWUsR0FBdEIsVUFBdUIsS0FBYTtvQkFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRTt3QkFDUixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzlCO29CQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFTCxpQkFBQztZQUFELENBQUMsQUExREQsSUEwREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBOZXdyZWxpY0luc2lnaHRzRGF0YVNvdXJjZSB9IGZyb20gXCIuL2RhdGFzb3VyY2VzL0luc2lnaHRzRGF0YVNvdXJjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFzb3VyY2Uge1xyXG5cclxuICAgIHByaXZhdGUgaW5zaWdodHNEYXRhU291cmNlOiBOZXdyZWxpY0luc2lnaHRzRGF0YVNvdXJjZTtcclxuXHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbmNlU2V0dGluZ3MsIHByaXZhdGUgYmFja2VuZFNydiwgcHJpdmF0ZSAkcSkge1xyXG4gICAgICAgIHRoaXMuaW5zaWdodHNEYXRhU291cmNlID0gbmV3IE5ld3JlbGljSW5zaWdodHNEYXRhU291cmNlKHRoaXMuaW5zdGFuY2VTZXR0aW5ncywgdGhpcy5iYWNrZW5kU3J2LCB0aGlzLiRxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnkob3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgY29uc3QgaW5zaWdodHNPcHRpb25zID0gXy5jbG9uZURlZXAob3B0aW9ucyk7XHJcbiAgICAgICAgaW5zaWdodHNPcHRpb25zLnRhcmdldHMgPSBfLmZpbHRlcihpbnNpZ2h0c09wdGlvbnMudGFyZ2V0cywgWydxdWVyeVR5cGUnLCAnaW5zaWdodHMnXSk7XHJcbiAgICAgICAgaWYgKGluc2lnaHRzT3B0aW9ucy50YXJnZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5zaWdodHNQcm9taXNlID0gdGhpcy5pbnNpZ2h0c0RhdGFTb3VyY2UucXVlcnkoaW5zaWdodHNPcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKGluc2lnaHRzUHJvbWlzZSkgeyBwcm9taXNlcy5wdXNoKGluc2lnaHRzUHJvbWlzZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlc3VsdHMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBfLmZsYXR0ZW4ocmVzdWx0cykgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGVzdERhdGFzb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zaWdodHNEYXRhU291cmNlLnF1ZXJ5KHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2lnaHRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucnFsOiBgU0VMRUNUIDEgRlJPTSBNb2JpbGUgU0lOQ0UgVE9EQVlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Rm9ybWF0OiBgdGFibGVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6IFwiU3VjY2Vzc2Z1bGx5IENvbm5lY3RlZCBOZXdyZWxpY1wiLCBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGV4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gQ29ubmVjdFwiLCBzdGF0dXM6ICdlcnJvcicgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoeyBtZXNzYWdlOiBcIkZhaWxlZCB0byBDb25uZWN0XCIsIHN0YXR1czogJ2Vycm9yJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtZXRyaWNGaW5kUXVlcnkocXVlcnk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=