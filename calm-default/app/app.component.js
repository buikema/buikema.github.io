System.register(['angular2/core', './app-header/header.component', "./on-deck/on-deck-http.component", "./at-bat/at-bat.component", "./channels/channels-list.component", "./on-deck/on-deck-list.component", "./app-footer/footer.component"], function(exports_1, context_1) {
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
    var core_1, header_component_1, on_deck_http_component_1, at_bat_component_1, channels_list_component_1, on_deck_list_component_1, footer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (on_deck_http_component_1_1) {
                on_deck_http_component_1 = on_deck_http_component_1_1;
            },
            function (at_bat_component_1_1) {
                at_bat_component_1 = at_bat_component_1_1;
            },
            function (channels_list_component_1_1) {
                channels_list_component_1 = channels_list_component_1_1;
            },
            function (on_deck_list_component_1_1) {
                on_deck_list_component_1 = on_deck_list_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <app-header></app-header>\n        <channels-list></channels-list>\n        <at-bat></at-bat>\n        <on-deck-http></on-deck-http>\n        <on-deck-list></on-deck-list>\n        <app-footer></app-footer>\n    ",
                        directives: [header_component_1.AppHeader, channels_list_component_1.ChannelsListComponent, at_bat_component_1.AtBatComponent, on_deck_http_component_1.OnDeckHTTPComponent, on_deck_list_component_1.OnDeckListComponent, footer_component_1.AppFooter,]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsZ09BT1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNEJBQVMsRUFBRSwrQ0FBcUIsRUFBRSxpQ0FBYyxFQUFFLDRDQUFtQixFQUFFLDRDQUFtQixFQUFFLDRCQUFTLEVBQUU7cUJBQ3ZILENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7QXBwSGVhZGVyfSBmcm9tICcuL2FwcC1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge09uRGVja0hUVFBDb21wb25lbnR9IGZyb20gXCIuL29uLWRlY2svb24tZGVjay1odHRwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdEJhdENvbXBvbmVudH0gZnJvbSBcIi4vYXQtYmF0L2F0LWJhdC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhbm5lbHNMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9jaGFubmVscy9jaGFubmVscy1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbkRlY2tMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9vbi1kZWNrL29uLWRlY2stbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXBwRm9vdGVyfSBmcm9tIFwiLi9hcHAtZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuICAgICAgICA8Y2hhbm5lbHMtbGlzdD48L2NoYW5uZWxzLWxpc3Q+XG4gICAgICAgIDxhdC1iYXQ+PC9hdC1iYXQ+XG4gICAgICAgIDxvbi1kZWNrLWh0dHA+PC9vbi1kZWNrLWh0dHA+XG4gICAgICAgIDxvbi1kZWNrLWxpc3Q+PC9vbi1kZWNrLWxpc3Q+XG4gICAgICAgIDxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtBcHBIZWFkZXIsIENoYW5uZWxzTGlzdENvbXBvbmVudCwgQXRCYXRDb21wb25lbnQsIE9uRGVja0hUVFBDb21wb25lbnQsIE9uRGVja0xpc3RDb21wb25lbnQsIEFwcEZvb3RlcixdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
