import { Sketchfab } from "./app/adapters/services/sketchfab.service";

const sketchfab = new Sketchfab();
sketchfab.search("bear").then(async results => {
    const p = results.getModelUids().map(uid => sketchfab.getModel(uid));
    const models = await Promise.all(p);
    console.log(models);
})