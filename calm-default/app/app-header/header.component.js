System.register(['angular2/core', './log-in.component'], function(exports_1, context_1) {
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
    var core_1, log_in_component_1;
    var AppHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_in_component_1_1) {
                log_in_component_1 = log_in_component_1_1;
            }],
        execute: function() {
            AppHeader = (function () {
                function AppHeader() {
                }
                AppHeader = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        template: "\n        <header>\n        \t<h1>Calm Default</h1>\n        \t<p>Discovery, with a little help from your friends</p>\n        \t\n        \t<nav>\n\t        \t<button>After Dark</button>\n\t        \t<log-in>Log in</log-in>\n\t        \t<button>Settings</button>\n        \t</nav>\n        </header>\n    ",
                        styleUrls: ['src/css/header.css'],
                        directives: [log_in_component_1.LogInComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppHeader);
                return AppHeader;
            }());
            exports_1("AppHeader", AppHeader);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtnQkFDQSxDQUFDO2dCQW5CRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsb1RBV1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7d0JBQ2pDLFVBQVUsRUFBRSxDQUFDLGlDQUFjLENBQUM7cUJBQy9CLENBQUM7OzZCQUFBO2dCQUdGLGdCQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCxpQ0FDQyxDQUFBIiwiZmlsZSI6ImFwcC1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtMb2dJbkNvbXBvbmVudH0gZnJvbSAnLi9sb2ctaW4uY29tcG9uZW50J1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgXHQ8aDE+Q2FsbSBEZWZhdWx0PC9oMT5cbiAgICAgICAgXHQ8cD5EaXNjb3ZlcnksIHdpdGggYSBsaXR0bGUgaGVscCBmcm9tIHlvdXIgZnJpZW5kczwvcD5cbiAgICAgICAgXHRcbiAgICAgICAgXHQ8bmF2PlxuXHQgICAgICAgIFx0PGJ1dHRvbj5BZnRlciBEYXJrPC9idXR0b24+XG5cdCAgICAgICAgXHQ8bG9nLWluPkxvZyBpbjwvbG9nLWluPlxuXHQgICAgICAgIFx0PGJ1dHRvbj5TZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICBcdDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2hlYWRlci5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTG9nSW5Db21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyIHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
