import { configure } from "@storybook/react";

function loadstories(){
    //require('../resources/js/stories/index.js');
    require('../stories/index.js');
}

configure(loadstories, module);