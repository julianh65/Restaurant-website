import {loadHome} from "./loadHome"
import { loadMenu } from "./loadMenu";
import {loadContact} from "./loadContact"

console.log("page loaded in ✔");

const homeReference = document.querySelector("#homeLink");
const menuReference = document.querySelector("#menuLink");
const contactReference = document.querySelector("#contactLink");

loadHome();



homeReference.addEventListener("click", loadHome);
menuReference.addEventListener("click", loadMenu);
contactReference.addEventListener("click", loadContact);