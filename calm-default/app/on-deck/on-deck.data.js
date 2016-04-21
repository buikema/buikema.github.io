System.register(["./on-deck-item"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var on_deck_item_1;
    var ON_DECK_ITEMS;
    return {
        setters:[
            function (on_deck_item_1_1) {
                on_deck_item_1 = on_deck_item_1_1;
            }],
        execute: function() {
            exports_1("ON_DECK_ITEMS", ON_DECK_ITEMS = [
                // Creating fake date for site layout. service will get real data from YouTube API
                new on_deck_item_1.OnDeckItem('http://i.ytimg.com/vi/f2IQHdM884g/hqdefault.jpg', 'Cranial Nerve Exam (ASMR)', 'WaveringWhispers', 'asmrbebexo'),
                new on_deck_item_1.OnDeckItem('http://i.ytimg.com/vi/hg9YkWvOuuw/hqdefault.jpg', 'ASMR Cranial Nerve Examination Role Play & Full RP Check Up Of Your Health And Nerves (Soft Spoken)', 'ASMR COSMONAUT', 'ASMRforthemasses'),
                new on_deck_item_1.OnDeckItem('http://i.ytimg.com/vi/0eQLwqUlTL4/hqdefault.jpg', 'ASMR 💦 Silky Soapy Scalp Massage *In-Ear Mic*', 'TheOneLilium', 'Pelagea ASMR'),
                new on_deck_item_1.OnDeckItem('http://i.ytimg.com/vi/98gdhub0GFs/hqdefault.jpg', 'ASMR/АСМР. Role-play in English. WEDDING SALON. RUSSIAN ACCENT. Soft talking, personal attention.', 'Darya Lozhkina ASMR', 'ASMR Massage Psychetruth'),
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uLWRlY2svb24tZGVjay5kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFFYSxhQUFhOzs7Ozs7O1lBQWIsMkJBQUEsYUFBYSxHQUFpQjtnQkFDMUMsa0ZBQWtGO2dCQUMvRSxJQUFJLHlCQUFVLENBQUMsaURBQWlELEVBQUMsMkJBQTJCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO2dCQUMvSCxJQUFJLHlCQUFVLENBQUMsaURBQWlELEVBQUMscUdBQXFHLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQzdNLElBQUkseUJBQVUsQ0FBQyxpREFBaUQsRUFBQyxnREFBZ0QsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO2dCQUNsSixJQUFJLHlCQUFVLENBQUMsaURBQWlELEVBQUMsbUdBQW1HLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7YUFDM04sQ0FBQSxDQUFDIiwiZmlsZSI6Im9uLWRlY2svb24tZGVjay5kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPbkRlY2tJdGVtfSBmcm9tIFwiLi9vbi1kZWNrLWl0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IE9OX0RFQ0tfSVRFTVM6IE9uRGVja0l0ZW1bXSA9IFtcblx0Ly8gQ3JlYXRpbmcgZmFrZSBkYXRlIGZvciBzaXRlIGxheW91dC4gc2VydmljZSB3aWxsIGdldCByZWFsIGRhdGEgZnJvbSBZb3VUdWJlIEFQSVxuICAgIG5ldyBPbkRlY2tJdGVtKCdodHRwOi8vaS55dGltZy5jb20vdmkvZjJJUUhkTTg4NGcvaHFkZWZhdWx0LmpwZycsJ0NyYW5pYWwgTmVydmUgRXhhbSAoQVNNUiknLCAnV2F2ZXJpbmdXaGlzcGVycycsICdhc21yYmViZXhvJyksXG4gICAgbmV3IE9uRGVja0l0ZW0oJ2h0dHA6Ly9pLnl0aW1nLmNvbS92aS9oZzlZa1d2T3V1dy9ocWRlZmF1bHQuanBnJywnQVNNUiBDcmFuaWFsIE5lcnZlIEV4YW1pbmF0aW9uIFJvbGUgUGxheSAmIEZ1bGwgUlAgQ2hlY2sgVXAgT2YgWW91ciBIZWFsdGggQW5kIE5lcnZlcyAoU29mdCBTcG9rZW4pJywgJ0FTTVIgQ09TTU9OQVVUJywgJ0FTTVJmb3J0aGVtYXNzZXMnKSxcbiAgICBuZXcgT25EZWNrSXRlbSgnaHR0cDovL2kueXRpbWcuY29tL3ZpLzBlUUx3cVVsVEw0L2hxZGVmYXVsdC5qcGcnLCdBU01SIPCfkqYgU2lsa3kgU29hcHkgU2NhbHAgTWFzc2FnZSAqSW4tRWFyIE1pYyonLCAnVGhlT25lTGlsaXVtJywgJ1BlbGFnZWEgQVNNUicpLFxuICAgIG5ldyBPbkRlY2tJdGVtKCdodHRwOi8vaS55dGltZy5jb20vdmkvOThnZGh1YjBHRnMvaHFkZWZhdWx0LmpwZycsJ0FTTVIv0JDQodCc0KAuIFJvbGUtcGxheSBpbiBFbmdsaXNoLiBXRURESU5HIFNBTE9OLiBSVVNTSUFOIEFDQ0VOVC4gU29mdCB0YWxraW5nLCBwZXJzb25hbCBhdHRlbnRpb24uJywgJ0RhcnlhIExvemhraW5hIEFTTVInLCAnQVNNUiBNYXNzYWdlIFBzeWNoZXRydXRoJyksIFxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
