System.register(['angular2/core', './channels-item'], function(exports_1, context_1) {
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
    var core_1, channels_item_1;
    var ChannelsItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (channels_item_1_1) {
                channels_item_1 = channels_item_1_1;
            }],
        execute: function() {
            ChannelsItemComponent = (function () {
                function ChannelsItemComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', channels_item_1.ChannelsItem)
                ], ChannelsItemComponent.prototype, "channelsItem", void 0);
                ChannelsItemComponent = __decorate([
                    core_1.Component({
                        selector: 'channels-item',
                        template: "\n\t\t<li class=\"channels-element\">\n\t\t   \t<img src=\"{{ channelsItem.channelThumbnailUrl }}\">\n\t\t    <h4>{{ channelsItem.channelTitle }}</h4>\n\t\t</li>\n    ",
                        styleUrls: ['src/css/channels-item.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChannelsItemComponent);
                return ChannelsItemComponent;
            }());
            exports_1("ChannelsItemComponent", ChannelsItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5uZWxzL2NoYW5uZWxzLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFEQTtvQkFBQyxZQUFLLEVBQUU7OzJFQUFBO2dCQVpUO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSx5S0FLVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztxQkFDM0MsQ0FBQzs7eUNBQUE7Z0JBSUYsNEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHlEQUVDLENBQUEiLCJmaWxlIjoiY2hhbm5lbHMvY2hhbm5lbHMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge0NoYW5uZWxzSXRlbX0gZnJvbSAnLi9jaGFubmVscy1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGFubmVscy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDxsaSBjbGFzcz1cImNoYW5uZWxzLWVsZW1lbnRcIj5cblx0XHQgICBcdDxpbWcgc3JjPVwie3sgY2hhbm5lbHNJdGVtLmNoYW5uZWxUaHVtYm5haWxVcmwgfX1cIj5cblx0XHQgICAgPGg0Pnt7IGNoYW5uZWxzSXRlbS5jaGFubmVsVGl0bGUgfX08L2g0PlxuXHRcdDwvbGk+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9jaGFubmVscy1pdGVtLmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIENoYW5uZWxzSXRlbUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGNoYW5uZWxzSXRlbTogQ2hhbm5lbHNJdGVtO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
