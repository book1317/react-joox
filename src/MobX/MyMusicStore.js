import { observable, action, autorun } from "mobx";

export default class MyMusicStore {
  @observable currentMusic = { id: "-", name: "No Song" };

  @action
  addMusic(id, name) {
    this.currentMusic = { id: id, name: name };
  }
}
