import "../main.css";
import Alpine from 'alpinejs'
import { components } from "../../src/views/pages/Home.client";
 
// Components
components.forEach( loader => loader(Alpine))
 
Alpine.start()

