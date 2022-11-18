export class ImgUtil {
  static imgList: Record<string, string> = {}
  static loadAllImg() {
    const imgMap: Record<string, { default: string }> = import.meta.glob(
      "../assets/img/**/*.png",
      { eager: true }
    );
    let absolutePath: string = "";
    let imgName: string = "";
    for (let reactivePath in imgMap) {
      absolutePath = imgMap[reactivePath].default;
      imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1);
      this.imgList[imgName] = absolutePath
    }
    console.log(this.imgList)
  }
}
