// $PluginCompiler TEW_Menus.js 102

import TEW from "../../../_types/tew";
import { Sprite } from '../../../../rmmv/core/Sprite';
import Window_TutorialCategoryList from './Window_TutorialCategoryList';
import Window_TutorialEntry from './Window_TutorialEntry';
import Window_TutorialList from "./Window_TutorialList";

// $StartCompilation

function Scene_Tutorials() {
    this.initialize.apply(this, arguments);
};

export default Scene_Tutorials.prototype = Object.create(Scene_Base.prototype);
Scene_Tutorials.prototype.constructor = Scene_Tutorials;

Scene_Tutorials.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
};

Scene_Tutorials.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createEntryWindow();
    this.createTutorialList();
    this.createTutorialCategoryList();
    this.setupEntryWindow();
    this.setupTutorialList();
    this.setupTutorialCategoryList();
};

Scene_Tutorials.prototype.addFullscreenBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem('bg_tutorials'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

Scene_Tutorials.prototype.createEntryWindow = function() {
    this._windowEntry = new Window_TutorialEntry();
};

Scene_Tutorials.prototype.setupEntryWindow = function() {
    this._windowEntry._cancelHandler = () => {
        this._windowEntry.hide();
        this._windowEntry.deactivate();
        this._windowTutorialCategoryList.show();
        this._windowTutorialList.show();
        this._windowTutorialList.activate();
    };
    this._windowEntry.hide();
    this._windowEntry.deactivate();
    this.addWindow(this._windowEntry);
};

Scene_Tutorials.prototype.createTutorialCategoryList = function() {
    this._windowTutorialCategoryList = new Window_TutorialCategoryList();
};

Scene_Tutorials.prototype.setupTutorialCategoryList = function() {
    this._windowTutorialCategoryList.setHandler('cancel', this.popScene.bind(this));
    this._windowTutorialCategoryList.setHandler('show_category_tutorials', () => {
        const categoryIndex = this._windowTutorialCategoryList._index;
        this._windowTutorialList._items = TEW.DATABASE.TUTORIALS[categoryIndex].subTutorials;
        this._windowTutorialList.refresh();
    });
    this._windowTutorialCategoryList.setHandler('select_category', () => {
        this._windowTutorialCategoryList.deactivate();
        this._windowTutorialList.activate();
        this._windowTutorialList.select(0);
    });
    this.addWindow(this._windowTutorialCategoryList);
    this._windowTutorialCategoryList.show();
    this._windowTutorialCategoryList.activate();
    this._windowTutorialCategoryList.select(0);
};

Scene_Tutorials.prototype.createTutorialList = function() {
    this._windowTutorialList = new Window_TutorialList(this._quests);
};

Scene_Tutorials.prototype.setupTutorialList = function() {
    this._windowTutorialList.setHandler('cancel', () => {
        this._windowTutorialList.deselect();
        this._windowTutorialList.deactivate();
        this._windowTutorialCategoryList.activate();
    });
    this._windowTutorialList.setHandler('show_tutorial_entry', () => {
        const tutorialEntry = this._windowTutorialList.selectedEntry();
        this._windowEntry.reset(tutorialEntry);
        this._windowTutorialCategoryList.hide();
        this._windowTutorialList.deactivate();
        this._windowTutorialList.hide();
        this._windowEntry.show();
        this._windowEntry.activate();
        this._windowEntry.refresh();
    });
    this.addWindow(this._windowTutorialList);
    this._windowTutorialList.show();
};
