System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LogInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LogInComponent = (function () {
                function LogInComponent() {
                    this.lock = new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_NAMESPACE');
                }
                LogInComponent.prototype.login = function () {
                    var hash = this.lock.parseHash();
                    if (hash) {
                        if (hash.error)
                            console.log('There was an error logging in', hash.error);
                        else
                            this.lock.getProfile(hash.id_token, function (err, profile) {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                localStorage.setItem('profile', JSON.stringify(profile));
                                localStorage.setItem('id_token', hash.id_token);
                            });
                    }
                };
                LogInComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                LogInComponent.prototype.loggedIn = function () {
                    return tokenNotExpired();
                };
                LogInComponent = __decorate([
                    core_1.Component({
                        selector: 'log-in',
                        template: "\n    <button *ngIf=\"!loggedIn()\" (click)=\"login()\">Login</button>\n    <button *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogInComponent);
                return LogInComponent;
            }());
            exports_1("LogInComponent", LogInComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIvbG9nLWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUlFO29CQUZBLFNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUV6QyxDQUFDO2dCQUVqQiw4QkFBSyxHQUFMO29CQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs0QkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0QsSUFBSTs0QkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVMsR0FBRyxFQUFFLE9BQU87Z0NBQ3ZELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQ0FDakIsTUFBTSxDQUFDO2dDQUNULENBQUM7Z0NBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ2xELENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCwrQkFBTSxHQUFOO29CQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDRSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBdENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxtSkFHVDtxQkFDRixDQUFDOztrQ0FBQTtnQkFrQ0YscUJBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELDJDQWdDQyxDQUFBIiwiZmlsZSI6ImFwcC1oZWFkZXIvbG9nLWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtBcHBIZWFkZXJ9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvZy1pbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFsb2dnZWRJbigpXCIgKGNsaWNrKT1cImxvZ2luKClcIj5Mb2dpbjwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJsb2dnZWRJbigpXCIgKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dJbkNvbXBvbmVudCB7XG5cbiAgbG9jayA9IG5ldyBBdXRoMExvY2soJ1lPVVJfQ0xJRU5UX0lEJywgJ1lPVVJfTkFNRVNQQUNFJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2dpbigpIHtcbiAgICB2YXIgaGFzaCA9IHRoaXMubG9jay5wYXJzZUhhc2goKTtcbiAgICBpZiAoaGFzaCkge1xuICAgICAgaWYgKGhhc2guZXJyb3IpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgbG9nZ2luZyBpbicsIGhhc2guZXJyb3IpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmxvY2suZ2V0UHJvZmlsZShoYXNoLmlkX3Rva2VuLCBmdW5jdGlvbihlcnIsIHByb2ZpbGUpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBoYXNoLmlkX3Rva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gIH1cblxuICBsb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
