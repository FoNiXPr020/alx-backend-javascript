/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var std1 = {
    firstName: "FoNiX",
    lastName: "BRH",
    age: 26,
    location: "Morocco"
};
var std2 = {
    firstName: "Alexandra",
    lastName: "Yuki",
    age: 26,
    location: "Ukraine"
};
var studentsList = [std1, std2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var rowHead = thead.insertRow(0);
var cell1Head = rowHead.insertCell(0);
var cell2Head = rowHead.insertCell(1);
cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
table.append(thead);
studentsList.forEach(function (student) {
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
table.append(tbody);
body.append(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsSUFBSSxJQUFJLEdBQWE7SUFDcEIsU0FBUyxFQUFHLE9BQU87SUFDbkIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUMsRUFBRTtJQUNOLFFBQVEsRUFBRSxTQUFTO0NBRW5CO0FBQ0QsSUFBSSxJQUFJLEdBQWE7SUFDcEIsU0FBUyxFQUFHLFdBQVc7SUFDdkIsUUFBUSxFQUFFLE1BQU07SUFDaEIsR0FBRyxFQUFDLEVBQUU7SUFDTixRQUFRLEVBQUUsU0FBUztDQUNuQjtBQUNELElBQUksWUFBWSxHQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7QUFHaEQsSUFBTSxJQUFJLEdBQW9CLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxJQUFNLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRSxJQUFNLEtBQUssR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2RSxJQUFNLEtBQUssR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2RSxJQUFNLE9BQU8sR0FBd0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxJQUFNLFNBQVMsR0FBeUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RCxJQUFNLFNBQVMsR0FBeUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5RCxTQUFTLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNsQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztBQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXBCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQzNCLElBQU0sR0FBRyxHQUF3QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQU0sS0FBSyxHQUF5QixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQU0sS0FBSyxHQUF5QixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRELEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN0dWRlbnR7XG5cdGZpcnN0TmFtZSA6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0YWdlOk51bWJlcjtcblx0bG9jYXRpb246IHN0cmluZ1xuXG59XG5cbmxldCBzdGQxIDogU3R1ZGVudCA9IHtcblx0Zmlyc3ROYW1lIDogXCJGb05pWFwiLFxuXHRsYXN0TmFtZTogXCJCUkhcIixcblx0YWdlOjI2LFxuXHRsb2NhdGlvbjogXCJNb3JvY2NvXCJcblxufVxubGV0IHN0ZDIgOiBTdHVkZW50ID0ge1xuXHRmaXJzdE5hbWUgOiBcIkFsZXhhbmRyYVwiLFxuXHRsYXN0TmFtZTogXCJZdWtpXCIsXG5cdGFnZToyNixcblx0bG9jYXRpb246IFwiVWtyYWluZVwiXG59XG5sZXQgc3R1ZGVudHNMaXN0IDogQXJyYXk8U3R1ZGVudD4gPSBbc3RkMSwgc3RkMl1cblxuXG5jb25zdCBib2R5OiBIVE1MQm9keUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5jb25zdCB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbmNvbnN0IHRoZWFkOiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbmNvbnN0IHRib2R5OiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbmNvbnN0IHJvd0hlYWQ6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSB0aGVhZC5pbnNlcnRSb3coMCk7XG5jb25zdCBjZWxsMUhlYWQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93SGVhZC5pbnNlcnRDZWxsKDApO1xuY29uc3QgY2VsbDJIZWFkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvd0hlYWQuaW5zZXJ0Q2VsbCgxKTtcblxuY2VsbDFIZWFkLmlubmVySFRNTCA9IFwiZmlyc3ROYW1lXCI7XG5jZWxsMkhlYWQuaW5uZXJIVE1MID0gXCJsb2NhdGlvblwiO1xudGFibGUuYXBwZW5kKHRoZWFkKTtcblxuc3R1ZGVudHNMaXN0LmZvckVhY2goKHN0dWRlbnQpID0+IHtcbiAgY29uc3Qgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50ID0gdGJvZHkuaW5zZXJ0Um93KDApO1xuICBjb25zdCBjZWxsMTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcbiAgY29uc3QgY2VsbDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93Lmluc2VydENlbGwoMSk7XG5cbiAgY2VsbDEuaW5uZXJIVE1MID0gc3R1ZGVudC5maXJzdE5hbWU7XG4gIGNlbGwyLmlubmVySFRNTCA9IHN0dWRlbnQubG9jYXRpb247XG59KTtcblxudGFibGUuYXBwZW5kKHRib2R5KTtcbmJvZHkuYXBwZW5kKHRhYmxlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==