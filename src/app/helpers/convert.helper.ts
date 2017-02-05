export class ConvertHelper {

  static convert (source:any, targetClassType) : any {
      let output = new targetClassType();
      for(let prop in source)
          output[prop] = source[prop];
      return output;
  }
}
