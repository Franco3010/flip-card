import './index.css';
import { createGameLoop, loadTexture, loadAtlas } from 'gdxjs';
import {
  backsmaller,
  frontbiger,
  touchitem,
  touch,
  touchScale,
  gl,
  batch,
  whiteTex,
  inputHandler,
  camera,
  push_IndexOf_RandomIndexArrToCompare,
  checkLastEle_FrontBig,
  compare,
  randomIndexArr,
  oldValue
} from './touchScale';
const init = async () => {
  const bgImg = await loadTexture(gl, './bg.png');

  // const cardImgs  = await loadTexture(gl,)
  const mainAtlas = await loadAtlas(gl, './shopee.atlas', {});
  const back = mainAtlas.findRegion('back', -1);

  gl.clearColor(1, 0.4, 0.3, 1);
  createGameLoop(delta => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    batch.begin();
    batch.draw(whiteTex, 0, 0, 60, 120);
    batch.draw(bgImg, 0, 0, 60, 100);
    touch(inputHandler);

    if (oldValue[0] == 0) {
      touchScale(
        touchitem(0),
        backsmaller(0, delta, touchitem(0)),
        frontbiger(0, delta, touchitem(0)),
        back,
        mainAtlas,
        randomIndexArr[0],
        4,
        25,
        delta
      );
    }
    if (oldValue[1] == 0) {
      touchScale(
        touchitem(1),
        backsmaller(1, delta, touchitem(1)),
        frontbiger(1, delta, touchitem(1)),
        back,
        mainAtlas,
        randomIndexArr[1],
        20,
        25,
        delta
      );
    }
    if (oldValue[2] == 0) {
      touchScale(
        touchitem(2),
        backsmaller(2, delta, touchitem(2)),
        frontbiger(2, delta, touchitem(2)),
        back,
        mainAtlas,
        randomIndexArr[2],
        36,
        25,
        delta
      );
    }
    if (oldValue[3] == 0) {
      touchScale(
        touchitem(3),
        backsmaller(3, delta, touchitem(3)),
        frontbiger(3, delta, touchitem(3)),
        back,
        mainAtlas,
        randomIndexArr[3],
        4,
        41,
        delta
      );
    }
    if (oldValue[4] == 0) {
      touchScale(
        touchitem(4),
        backsmaller(4, delta, touchitem(4)),
        frontbiger(4, delta, touchitem(4)),
        back,
        mainAtlas,
        randomIndexArr[4],
        20,
        41,
        delta
      );
    }
    if (oldValue[5] == 0) {
      touchScale(
        touchitem(5),
        backsmaller(5, delta, touchitem(5)),
        frontbiger(5, delta, touchitem(5)),
        back,
        mainAtlas,
        randomIndexArr[5],
        36,
        41,
        delta
      );
    }
    if (oldValue[6] == 0) {
      touchScale(
        touchitem(6),
        backsmaller(6, delta, touchitem(6)),
        frontbiger(6, delta, touchitem(6)),
        back,
        mainAtlas,
        randomIndexArr[6],
        4,
        57,
        delta
      );
    }
    if (oldValue[7] == 0) {
      touchScale(
        touchitem(7),
        backsmaller(7, delta, touchitem(7)),
        frontbiger(7, delta, touchitem(7)),
        back,
        mainAtlas,
        randomIndexArr[7],
        20,
        57,
        delta
      );
    }
    if (oldValue[8] == 0) {
      touchScale(
        touchitem(8),
        backsmaller(8, delta, touchitem(8)),
        frontbiger(8, delta, touchitem(8)),
        back,
        mainAtlas,
        randomIndexArr[8],
        36,
        57,
        delta
      );
    }
    if (oldValue[9] == 0) {
      touchScale(
        touchitem(9),
        backsmaller(9, delta, touchitem(9)),
        frontbiger(9, delta, touchitem(9)),
        back,
        mainAtlas,
        randomIndexArr[9],
        4,
        73,
        delta
      );
    }
    if (oldValue[10] == 0) {
      touchScale(
        touchitem(10),
        backsmaller(10, delta, touchitem(10)),
        frontbiger(10, delta, touchitem(10)),
        back,
        mainAtlas,
        randomIndexArr[10],
        20,
        73,
        delta
      );
    }
    if (oldValue[11] == 0) {
      touchScale(
        touchitem(11),
        backsmaller(11, delta, touchitem(11)),
        frontbiger(11, delta, touchitem(11)),
        back,
        mainAtlas,
        randomIndexArr[11],
        36,
        73,
        delta
      );
    }

    push_IndexOf_RandomIndexArrToCompare();
    checkLastEle_FrontBig();

    compare(delta, mainAtlas, back);

    batch.setColor(0.4, 0.4, 0.4, 1);

    batch.setColor(1, 1, 1, 1);

    batch.end();
  });
};

init();
