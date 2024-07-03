/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + "." + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Shaza", "Aly");
console.log(student.displayName());
console.log(student.workOnHomework());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBa0JBLElBQU0sWUFBWSxHQUF3QixVQUFDLFNBQWlCLEVBQUUsUUFBZ0I7SUFDN0UsT0FBVSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFJLFFBQVU7QUFFNUMsQ0FBQztBQVNEO0lBR0Msc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFFLFNBQVM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRSxRQUFRO0lBRXhCLENBQUM7SUFDRCxxQ0FBYyxHQUFkO1FBQ0MsT0FBTyxtQkFBbUI7SUFDM0IsQ0FBQztJQUNELGtDQUFXLEdBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTO0lBR3RCLENBQUM7SUFFRixtQkFBQztBQUFELENBQUM7QUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXJ7XG5cdHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuXHRmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuXHR5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcblx0bG9jYXRpb246IHN0cmluZztcblx0W2tleTogc3RyaW5nXTogYW55O1xuXG59XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVye1xuXHRudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9ue1xuXHQoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb249IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk9Pntcblx0cmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiR7bGFzdE5hbWV9YFxuXG59XG4vLyBjb25zb2xlLmxvZyhwcmludFRlYWNoZXIoXCJzaGF6YVwiLCBcImFseVwiKSk7IC8qcy5hbHkqL1xuaW50ZXJmYWNlIGNsYXNzSW50ZXJmYWNle1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0d29ya09uSG9tZXdvcmsgKCk6IHN0cmluZztcblx0ZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBjbGFzc0ludGVyZmFjZXtcblx0Zmlyc3ROYW1lOiBzdHJpbmdcblx0bGFzdE5hbWU6IHN0cmluZ1xuXHRjb25zdHJ1Y3RvcihmaXJzdG5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyl7XG5cdFx0dGhpcy5maXJzdE5hbWU9IGZpcnN0bmFtZVxuXHRcdHRoaXMubGFzdE5hbWUgPWxhc3ROYW1lXG5cblx0fVxuXHR3b3JrT25Ib21ld29yaygpOiBzdHJpbmd7XG5cdFx0cmV0dXJuIGBDdXJyZW50bHkgd29ya2luZ2Bcblx0fVxuXHRkaXNwbGF5TmFtZSgpOiBzdHJpbmd7XG5cdFx0cmV0dXJuIHRoaXMuZmlyc3ROYW1lXG5cblxuXHR9XG5cbn1cblxuY29uc3Qgc3R1ZGVudCA9IG5ldyBTdHVkZW50Q2xhc3MoXCJTaGF6YVwiLCBcIkFseVwiKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSlcbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=