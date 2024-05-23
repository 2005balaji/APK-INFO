export const unWrapPath = (path: string) => {

  // d4388448-d0a1-70e4-a061-a00e70a2494d/1716486805747-google.apk

  const pathArray = path.split('/');

  const fileName = pathArray[pathArray.length - 1];

  return {
    name: fileName,
    path: pathArray.slice(0, pathArray.length - 1).join('/')
  }


}