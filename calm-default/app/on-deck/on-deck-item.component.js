System.register(['angular2/core', './on-deck-item'], function(exports_1, context_1) {
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
    var core_1, on_deck_item_1;
    var OnDeckItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (on_deck_item_1_1) {
                on_deck_item_1 = on_deck_item_1_1;
            }],
        execute: function() {
            OnDeckItemComponent = (function () {
                function OnDeckItemComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', on_deck_item_1.OnDeckItem)
                ], OnDeckItemComponent.prototype, "onDeckItem", void 0);
                OnDeckItemComponent = __decorate([
                    core_1.Component({
                        selector: 'on-deck-item',
                        template: "\n\t\t<li class=\"on-deck-element\">\n\t\t\t<div class=\"video-thumbnail\">\n\t\t   \t\t<img src=\"{{ onDeckItem.videoThumbnailUrl }}\">\n\t\t\t</div>\n\t\t\t<div class=\"video-title\">\n\t\t    \t<h3>{{ onDeckItem.videoTitle }}</h3>\n\t\t    \t<p class=\"info\">{{ onDeckItem.videoAuthor }}</p>\n\t\t\t</div>\n\t\t\t<div class=\"favs\">\n\t\t    \t<p class=\"favorites\">Recommended by</p>\n\t\t    \t<span>{{ onDeckItem.recommendations }}</span>\n\t\t\t</div>\n\t\t</li>\n    ",
                        styleUrls: ['src/css/on-deck-item.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnDeckItemComponent);
                return OnDeckItemComponent;
            }());
            exports_1("OnDeckItemComponent", OnDeckItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLWRlY2svb24tZGVjay1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQURBO29CQUFDLFlBQUssRUFBRTs7dUVBQUE7Z0JBckJUO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxnZUFjVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztxQkFDMUMsQ0FBQzs7dUNBQUE7Z0JBSUYsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoib24tZGVjay9vbi1kZWNrLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtPbkRlY2tMaXN0Q29tcG9uZW50fSBmcm9tICcuL29uLWRlY2stbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtPbkRlY2tJdGVtfSBmcm9tICcuL29uLWRlY2staXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnb24tZGVjay1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDxsaSBjbGFzcz1cIm9uLWRlY2stZWxlbWVudFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInZpZGVvLXRodW1ibmFpbFwiPlxuXHRcdCAgIFx0XHQ8aW1nIHNyYz1cInt7IG9uRGVja0l0ZW0udmlkZW9UaHVtYm5haWxVcmwgfX1cIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZpZGVvLXRpdGxlXCI+XG5cdFx0ICAgIFx0PGgzPnt7IG9uRGVja0l0ZW0udmlkZW9UaXRsZSB9fTwvaDM+XG5cdFx0ICAgIFx0PHAgY2xhc3M9XCJpbmZvXCI+e3sgb25EZWNrSXRlbS52aWRlb0F1dGhvciB9fTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImZhdnNcIj5cblx0XHQgICAgXHQ8cCBjbGFzcz1cImZhdm9yaXRlc1wiPlJlY29tbWVuZGVkIGJ5PC9wPlxuXHRcdCAgICBcdDxzcGFuPnt7IG9uRGVja0l0ZW0ucmVjb21tZW5kYXRpb25zIH19PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9saT5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL29uLWRlY2staXRlbS5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBPbkRlY2tJdGVtQ29tcG9uZW50IHtcblx0QElucHV0KCkgb25EZWNrSXRlbTogT25EZWNrSXRlbTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
