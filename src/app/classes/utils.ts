export class Utils {
  public static opcion = Utils.obtenerNumero();
  public static obtenerNumero () {
    let bkgd = Math.floor(Math.random() * 3) + 1;
    let local = localStorage.getItem('bk');
    while (local != null && bkgd.toString() == local) {
        bkgd = Math.floor(Math.random() * 3) + 1;
    }
    localStorage.setItem('bk',bkgd.toString());
    return bkgd;
  };
  public static getUrl() {
    return (
      "url('/assets/images/loginBackgrounds/background" +
      Utils.opcion +
      ".jpg')"
    );
  }
}
