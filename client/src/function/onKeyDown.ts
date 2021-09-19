import coordGame from "../types/coordGame";

export default function onKeyDownGun(e: any, obj: coordGame) {
  e = e || window.event;
  switch (e.keyCode) {
    case 37:
      obj.gun!.y -= 5;
      break;
    case 39:
        obj.gun!.y += 5;
      break;
  }
}
