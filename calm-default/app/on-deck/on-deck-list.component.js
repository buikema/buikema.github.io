System.register(["angular2/core", "./on-deck-item.component", "./on-deck.data"], function(exports_1, context_1) {
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
    var core_1, on_deck_item_component_1, on_deck_data_1;
    var OnDeckListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (on_deck_item_component_1_1) {
                on_deck_item_component_1 = on_deck_item_component_1_1;
            },
            function (on_deck_data_1_1) {
                on_deck_data_1 = on_deck_data_1_1;
            }],
        execute: function() {
            OnDeckListComponent = (function () {
                function OnDeckListComponent() {
                }
                OnDeckListComponent.prototype.ngOnInit = function () {
                    this.onDeckItems = on_deck_data_1.ON_DECK_ITEMS;
                };
                OnDeckListComponent = __decorate([
                    core_1.Component({
                        selector: 'on-deck-list',
                        template: "\n        <ul class=\"on-deck-list\">\n            <on-deck-item *ngFor=\"#onDeckItem of onDeckItems\"\n            [onDeckItem] =\"onDeckItem\">\n            </on-deck-item>\n        </ul>\n    ",
                        directives: [on_deck_item_component_1.OnDeckItemComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnDeckListComponent);
                return OnDeckListComponent;
            }());
            exports_1("OnDeckListComponent", OnDeckListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLWRlY2svb24tZGVjay1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtnQkFNQSxDQUFDO2dCQUhHLHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyw0QkFBYSxDQUFDO2dCQUNyQyxDQUFDO2dCQWpCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUscU1BTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNENBQW1CLENBQUM7cUJBQ3BDLENBQUM7O3VDQUFBO2dCQVFGLDBCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCxxREFNQyxDQUFBIiwiZmlsZSI6Im9uLWRlY2svb24tZGVjay1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7T25EZWNrSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vb24tZGVjay1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbkRlY2tJdGVtfSBmcm9tIFwiLi9vbi1kZWNrLWl0ZW1cIjtcbmltcG9ydCB7T05fREVDS19JVEVNU30gZnJvbSBcIi4vb24tZGVjay5kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnb24tZGVjay1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dWwgY2xhc3M9XCJvbi1kZWNrLWxpc3RcIj5cbiAgICAgICAgICAgIDxvbi1kZWNrLWl0ZW0gKm5nRm9yPVwiI29uRGVja0l0ZW0gb2Ygb25EZWNrSXRlbXNcIlxuICAgICAgICAgICAgW29uRGVja0l0ZW1dID1cIm9uRGVja0l0ZW1cIj5cbiAgICAgICAgICAgIDwvb24tZGVjay1pdGVtPlxuICAgICAgICA8L3VsPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW09uRGVja0l0ZW1Db21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIE9uRGVja0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG9uRGVja0l0ZW1zOiBPbkRlY2tJdGVtW107XG4gICAgXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm9uRGVja0l0ZW1zID0gT05fREVDS19JVEVNUztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
