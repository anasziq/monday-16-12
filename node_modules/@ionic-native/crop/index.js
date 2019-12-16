var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CropOriginal = /** @class */ (function (_super) {
    __extends(CropOriginal, _super);
    function CropOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CropOriginal.prototype.crop = function (pathToImage, options) { return cordova(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    CropOriginal.pluginName = "Crop";
    CropOriginal.plugin = "cordova-plugin-crop";
    CropOriginal.pluginRef = "plugins";
    CropOriginal.repo = "https://github.com/jeduan/cordova-plugin-crop";
    CropOriginal.platforms = ["Android", "iOS"];
    return CropOriginal;
}(IonicNativePlugin));
var Crop = new CropOriginal();
export { Crop };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nyb3AvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0M5Qyx3QkFBaUI7Ozs7SUFVekMsbUJBQUksYUFBQyxXQUFtQixFQUFFLE9BQXFCOzs7Ozs7ZUEvQ2pEO0VBcUMwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb3BPcHRpb25zIHtcbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBDcm9wXG4gKiBAZGVzY3JpcHRpb24gQ3JvcHMgaW1hZ2VzXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENyb3AgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Nyb3Avbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNyb3A6IENyb3ApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuY3JvcC5jcm9wKCdwYXRoL3RvL2ltYWdlLmpwZycsIHtxdWFsaXR5OiA3NX0pXG4gKiAgIC50aGVuKFxuICogICAgIG5ld0ltYWdlID0+IGNvbnNvbGUubG9nKCduZXcgaW1hZ2UgcGF0aCBpczogJyArIG5ld0ltYWdlKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBjcm9wcGluZyBpbWFnZScsIGVycm9yKVxuICogICApO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ3JvcE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDcm9wJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1jcm9wJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3JvcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyb3BzIGFuIGltYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoVG9JbWFnZVxuICAgKiBAcGFyYW0ge0Nyb3BPcHRpb25zfSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBuZXcgaW1hZ2UgcGF0aCwgb3IgcmVqZWN0cyBpZiBmYWlsZWQgdG8gY3JvcC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY3JvcChwYXRoVG9JbWFnZTogc3RyaW5nLCBvcHRpb25zPzogQ3JvcE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19