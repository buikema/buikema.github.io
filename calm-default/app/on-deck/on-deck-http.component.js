System.register(["angular2/core", "./on-deck-http.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, on_deck_http_service_1;
    var OnDeckHTTPComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (on_deck_http_service_1_1) {
                on_deck_http_service_1 = on_deck_http_service_1_1;
            }],
        execute: function() {
            OnDeckHTTPComponent = (function () {
                function OnDeckHTTPComponent(_httpService) {
                    this._httpService = _httpService;
                }
                OnDeckHTTPComponent.prototype.onDeckHTTPGet = function () {
                    var _this = this;
                    this._httpService.getTest()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished JSON get.", _this.getData); });
                };
                OnDeckHTTPComponent.prototype.onDeckHTTPPost = function () {
                    var _this = this;
                    this._httpService.postTest().subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished JSON post.", _this.getData); });
                };
                OnDeckHTTPComponent = __decorate([
                    core_1.Component({
                        selector: 'on-deck-http',
                        template: "\n\t\t<div>\n\t\t\t<button (click)=\"onDeckHTTPGet()\">Show my list</button>\n\t        <button (click)=\"onDeckHTTPPost()\">Refresh</button>\n\t        <p>Output from get: {{ getData }}</p>\n\t        <p>Output from post: {{ postData }}</p>\n        </div>\n\t",
                        providers: [on_deck_http_service_1.OnDeckHTTPService],
                    }), 
                    __metadata('design:paramtypes', [on_deck_http_service_1.OnDeckHTTPService])
                ], OnDeckHTTPComponent);
                return OnDeckHTTPComponent;
            }());
            exports_1("OnDeckHTTPComponent", OnDeckHTTPComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLWRlY2svb24tZGVjay1odHRwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFJQyw2QkFBb0IsWUFBK0I7b0JBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtnQkFBRyxDQUFDO2dCQUV2RCwyQ0FBYSxHQUFiO29CQUFBLGlCQU9DO29CQU5BLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO3lCQUN6QixTQUFTLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLEVBQzNDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUEvQyxDQUErQyxDQUNyRCxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsNENBQWMsR0FBZDtvQkFBQSxpQkFNQztvQkFMQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDckMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLEVBQzVDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFoRCxDQUFnRCxDQUN0RCxDQUFBO2dCQUNGLENBQUM7Z0JBbENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSx1UUFPVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx3Q0FBaUIsQ0FBQztxQkFDOUIsQ0FBQzs7dUNBQUE7Z0JBeUJGLDBCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxxREF1QkMsQ0FBQSIsImZpbGUiOiJvbi1kZWNrL29uLWRlY2staHR0cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHtPbkRlY2tIVFRQU2VydmljZX0gZnJvbSBcIi4vb24tZGVjay1odHRwLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdvbi1kZWNrLWh0dHAnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkRlY2tIVFRQR2V0KClcIj5TaG93IG15IGxpc3Q8L2J1dHRvbj5cblx0ICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkRlY2tIVFRQUG9zdCgpXCI+UmVmcmVzaDwvYnV0dG9uPlxuXHQgICAgICAgIDxwPk91dHB1dCBmcm9tIGdldDoge3sgZ2V0RGF0YSB9fTwvcD5cblx0ICAgICAgICA8cD5PdXRwdXQgZnJvbSBwb3N0OiB7eyBwb3N0RGF0YSB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG5cdGAsXG5cdHByb3ZpZGVyczogW09uRGVja0hUVFBTZXJ2aWNlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBPbkRlY2tIVFRQQ29tcG9uZW50IHtcblx0Z2V0RGF0YTogc3RyaW5nO1xuXHRwb3N0RGF0YTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBPbkRlY2tIVFRQU2VydmljZSkge31cblxuXHRvbkRlY2tIVFRQR2V0KCkge1xuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLmdldFRlc3QoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB0aGlzLmdldERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRcdFx0ZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkIEpTT04gZ2V0LlwiLCB0aGlzLmdldERhdGEpXG5cdFx0XHQpO1xuXHR9XG5cblx0b25EZWNrSFRUUFBvc3QoKSB7XG5cdFx0dGhpcy5faHR0cFNlcnZpY2UucG9zdFRlc3QoKS5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHRoaXMucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRcdGVycm9yID0+IGFsZXJ0KGVycm9yKSxcblx0XHRcdCgpID0+IGNvbnNvbGUubG9nKFwiRmluaXNoZWQgSlNPTiBwb3N0LlwiLCB0aGlzLmdldERhdGEpXG5cdFx0KVxuXHR9XG5cdFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
