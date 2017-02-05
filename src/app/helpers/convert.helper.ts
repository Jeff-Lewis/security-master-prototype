export class ConvertHelper {

  static convert (source:any, targetClassType) : any {
      let output = new targetClassType();
      for(var i in source)
          output[i] = source[i];
      return output;
  }
}
