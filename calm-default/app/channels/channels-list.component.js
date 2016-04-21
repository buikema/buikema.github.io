System.register(["angular2/core", "./channels-item.component", "./channels.data"], function(exports_1, context_1) {
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
    var core_1, channels_item_component_1, channels_data_1;
    var ChannelsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (channels_item_component_1_1) {
                channels_item_component_1 = channels_item_component_1_1;
            },
            function (channels_data_1_1) {
                channels_data_1 = channels_data_1_1;
            }],
        execute: function() {
            ChannelsListComponent = (function () {
                function ChannelsListComponent() {
                }
                ChannelsListComponent.prototype.ngOnInit = function () {
                    this.channelsItems = channels_data_1.CHANNELS_ITEMS;
                };
                ChannelsListComponent = __decorate([
                    core_1.Component({
                        selector: 'channels-list',
                        template: "\n        <ul class=\"channels-list\">\n            <channels-item *ngFor=\"#channelsItem of channelsItems\"\n                [channelsItem] = \"channelsItem\">\n            </channels-item>\n        </ul>\n    ",
                        directives: [channels_item_component_1.ChannelsItemComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChannelsListComponent);
                return ChannelsListComponent;
            }());
            exports_1("ChannelsListComponent", ChannelsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5uZWxzL2NoYW5uZWxzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUFBO2dCQU1BLENBQUM7Z0JBSEcsd0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLDhCQUFjLENBQUM7Z0JBQ3hDLENBQUM7Z0JBakJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSxxTkFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztxQkFDdEMsQ0FBQzs7eUNBQUE7Z0JBUUYsNEJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHlEQU1DLENBQUEiLCJmaWxlIjoiY2hhbm5lbHMvY2hhbm5lbHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge0NoYW5uZWxzSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vY2hhbm5lbHMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhbm5lbHNJdGVtfSBmcm9tIFwiLi9jaGFubmVscy1pdGVtXCI7XG5pbXBvcnQge0NIQU5ORUxTX0lURU1TfSBmcm9tIFwiLi9jaGFubmVscy5kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2hhbm5lbHMtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsIGNsYXNzPVwiY2hhbm5lbHMtbGlzdFwiPlxuICAgICAgICAgICAgPGNoYW5uZWxzLWl0ZW0gKm5nRm9yPVwiI2NoYW5uZWxzSXRlbSBvZiBjaGFubmVsc0l0ZW1zXCJcbiAgICAgICAgICAgICAgICBbY2hhbm5lbHNJdGVtXSA9IFwiY2hhbm5lbHNJdGVtXCI+XG4gICAgICAgICAgICA8L2NoYW5uZWxzLWl0ZW0+XG4gICAgICAgIDwvdWw+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ2hhbm5lbHNJdGVtQ29tcG9uZW50XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNoYW5uZWxzSXRlbXM6IENoYW5uZWxzSXRlbVtdO1xuXG4gICAgbmdPbkluaXQoKTogYW55IHtcbiAgICAgICAgdGhpcy5jaGFubmVsc0l0ZW1zID0gQ0hBTk5FTFNfSVRFTVM7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
