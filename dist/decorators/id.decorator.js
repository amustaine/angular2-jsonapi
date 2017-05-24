"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Id() {
    return function (target, propertyName) {
        var annotations = Reflect.getMetadata('Id', target) || [];
        annotations.push({
            propertyName: propertyName,
        });
        Reflect.defineMetadata('Id', annotations, target);
    };
}
exports.Id = Id;
//# sourceMappingURL=id.decorator.js.map