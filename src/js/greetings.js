import $ from "jquery";

export function greetings() {
  alert("Hello");
}

export function goodbye() {
  alert("Goodbye!");
  $("p").text("Hello");
}
