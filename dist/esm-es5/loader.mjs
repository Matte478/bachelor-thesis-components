import { a as patchEsm, b as bootstrapLazy } from './core-b64fa00c.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["my-component_6", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }], [1, "obd-card", { "cardTitle": [1, "card-title"], "cardSubtitle": [1, "card-subtitle"] }], [1, "obd-modal", { "modalTitle": [1, "modal-title"], "modalSubtitle": [1, "modal-subtitle"], "active": [4] }, [[8, "keyup", "handleKeyup"]]], [1, "obd-page-not-found", { "status": [1], "emoji": [1], "message": [1] }], [1, "obd-table", { "data": [1], "layout": [1], "actions": [1], "columns": [1], "innerData": [32], "innerActions": [32], "innerColumns": [32] }], [6, "obd-button", { "type": [1], "block": [4] }]]], ["obd-scroll", [[1, "obd-scroll", { "target": [1] }, [[2, "click", "handleClick"]]]]]], options);
    });
};
export { defineCustomElements };
