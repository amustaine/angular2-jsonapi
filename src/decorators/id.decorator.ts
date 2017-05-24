export function Id() {
  return function (target: any, propertyName: string | symbol) {
    let annotations = Reflect.getMetadata('Id', target) || [];
    annotations.push({
      propertyName: propertyName,
    });
    Reflect.defineMetadata('Id', annotations, target);
  };
}
