import './index.css';
import {
  createAnimation,
  createBatch,
  createGameLoop,
  createWhiteTexture,
  TextureRegion,
  loadTexture,
  createStage,
  createViewport,
  createViewportAwareInputHandler,
  PlayMode,
  loadAtlas
} from 'gdxjs';
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
  checkCardPosi,
  compare,
  storeCheckTouch,
  randomIndexArr,
  oldValue
} from './touchScale';
const init = async () => {
  // image.image();
  // let scaleBack0 = 1;
  // let scaleBack1 = 1;
  // let scaleBackCompare =0 ;
  // let scaleItem1 = 1.2;
  // let scaleItem2 = 1.2
  // let scaleCloth = 0;
  // let scaleShoe = 0;
  // let Compare = 0;
  let accumulate = 0;

  // let touchCloth = 0;

  // let touchShoe = 0;

  const compareValue: (any | number)[] = [];

  const bgImg = await loadTexture(gl, './bg.png');
  const cardImgs = await loadTexture(gl, './playing-cards.png');
  // const cardImgs  = await loadTexture(gl,)
  const mainAtlas = await loadAtlas(gl, './shopee.atlas', {});
  const back = mainAtlas.findRegion('back', -1);
  const clothRegion = mainAtlas.findRegion('item', 1);
  const shoeRegion = mainAtlas.findRegion('item', 2);
  const hatRegion = mainAtlas.findRegion('item', 3);
  const lampRegion = mainAtlas.findRegion('item', 4);
  const bearRegion = mainAtlas.findRegion('item', 5);
  const microWaveRegion = mainAtlas.findRegion('item', 6);
  const shadow = mainAtlas.findRegion('shadow', -1);
  let inforOb = {};
  let x: number;
  let y: number;
  let z = 0;

  gl.clearColor(1, 0.4, 0.3, 1);
  createGameLoop(delta => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    batch.begin();
    batch.draw(whiteTex, 0, 0, 50, 100);
    batch.draw(bgImg, 0, 0, 50, 100);
    touch(inputHandler);
    // if (inputHandler.isTouched()) {
    //   const targetX = inputHandler.getTouchedWorldCoord().x;
    //   const targetY = inputHandler.getTouchedWorldCoord().y;
    //   if (targetX > 2 && targetX < 16.6) {
    //     touchCloth = 1;
    //     compareValue[0] = randomIndexArr[0];

    //   }
    //   if (targetX > 17.6 && targetX < 32.2) {
    //     touchShoe = 1;
    //     compareValue[1] = randomIndexArr[1];

    //   }
    // }

    // if (touchCloth == 0) {//chua cham
    //   back.draw(batch, 2, 25, 14.6, 14.6, 5, 5, 0, 1, 1);
    // }
    // else if (touchCloth == 1) {//da cham
    //   if (scaleBack0 > 0.01  && Compare ==0) {
    //     back.draw(batch,2,25,14.6,14.6,5,5,0,scaleBack0 -= 5 * delta,1);
    //   }
    //   else if (scaleBack0 < 0.01) {
    //     if (scaleCloth < 1  && Compare ==0) {
    //       mainAtlas.findRegion('item', randomIndexArr[0]).draw(batch, 2, 25, 14.6, 14.6, 5, 5, 0, scaleCloth += 5 * delta,1);
    //     }
    //     else if(scaleCloth>1 && Compare ==0){
    //       mainAtlas.findRegion('item', randomIndexArr[0]).draw(batch, 2, 25, 14.6, 14.6, 5, 5, 0, 1,1);
    // }
    //   }
    // }
    if (oldValue[0] == 0) {
      touchScale(
        touchitem(0),
        backsmaller(0, delta, touchitem(0)),
        frontbiger(0, delta, touchitem(0)),
        back,
        mainAtlas,
        randomIndexArr[0],
        2,
        25
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
        17.6,
        25
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
        33.2,
        25
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
        2,
        40.6
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
        17.6,
        40.6
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
        33.2,
        40.6
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
        2,
        56.2
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
        17.6,
        56.2
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
        33.2,
        56.2
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
        2,
        71.8
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
        17.6,
        71.8
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
        33.2,
        71.8
      );
    }

    // touchScale(touchitem(3),backsmaller(3,delta,touchitem(3)),frontbiger(3,delta,touchitem(3)), back, mainAtlas, randomIndexArr[3], 2, 40.6);
    // touchScale(touchitem(4),backsmaller(4,delta,touchitem(4)),frontbiger(4,delta,touchitem(4)), back, mainAtlas, randomIndexArr[4], 17.6, 40.6);
    // touchScale(touchitem(5),backsmaller(5,delta,touchitem(5)),frontbiger(5,delta,touchitem(5)), back, mainAtlas, randomIndexArr[5], 33.2,40.6);
    // touchScale(touchitem(6),backsmaller(6,delta,touchitem(6)),frontbiger(6,delta,touchitem(6)), back, mainAtlas, randomIndexArr[6], 2, 56.2);
    // touchScale(touchitem(7),backsmaller(7,delta,touchitem(7)),frontbiger(7,delta,touchitem(7)), back, mainAtlas, randomIndexArr[7], 17.6, 56.2);
    // touchScale(touchitem(8),backsmaller(8,delta,touchitem(8)),frontbiger(8,delta,touchitem(8)), back, mainAtlas, randomIndexArr[8], 33.2,56.2);
    // touchScale(touchitem(9),backsmaller(9,delta,touchitem(9)),frontbiger(9,delta,touchitem(9)), back, mainAtlas, randomIndexArr[9], 2, 71.8);
    // touchScale(touchitem(10),backsmaller(10,delta,touchitem(10)),frontbiger(10,delta,touchitem(10)), back, mainAtlas, randomIndexArr[10], 17.6,71.8);
    // touchScale(touchitem(11),backsmaller(11,delta,touchitem(11)),frontbiger(11,delta,touchitem(11)), back, mainAtlas, randomIndexArr[11], 33.2, 71.8);

    push_IndexOf_RandomIndexArrToCompare();
    checkLastEle_FrontBig();
    // checkCardPosi()

    compare(delta, mainAtlas, back);
    // touchScale(touchitem("touchShoe"),delta,back,backsmaller("back1"),frontbiger("shoe"),mainAtlas,randomIndexArr[1],17.6,25)

    //     if(typeof compareValue[0] === typeof compareValue[1]  && scaleCloth > 1 && scaleShoe  > 1){ // ham compare
    //       Compare = 1
    //       if(compareValue[0]!=compareValue[1]){

    // if(accumulate<0.5){

    // mainAtlas.findRegion('item', randomIndexArr[1]).draw(batch, 17.6, 25, 14.6, 14.6, 5, 5, 0, 1,1);
    // mainAtlas.findRegion('item', randomIndexArr[0]).draw(batch, 2, 25, 14.6, 14.6, 5, 5, 0, 1,1);
    // }
    // if(scaleItem1>0.02 && scaleItem2 >0.02 && accumulate >0.5 ){

    // mainAtlas.findRegion('item', randomIndexArr[1]).draw(batch, 17.6, 25, 14.6, 14.6, 7.3, 7.3, 0,scaleItem2 -= 5 * delta,1);
    // mainAtlas.findRegion('item', randomIndexArr[0]).draw(batch, 2, 25, 14.6, 14.6, 7.3, 7.3, 0,scaleItem1 -= 5 * delta,1);

    // }

    // if(scaleItem1<0.02&& scaleBackCompare<1){

    // back.draw(batch,17.6,25,14.6,14.6,5,5,0,scaleBackCompare += 5 * delta,1);
    // back.draw(batch,2,25,14.6,14.6,5,5,0,scaleBackCompare += 5 * delta,1);

    // }
    // if(scaleBackCompare>=1){
    // back.draw(batch,17.6,25,14.6,14.6,5,5,0,1,1);
    // back.draw(batch,2,25,14.6,14.6,5,5,0,1,1);
    // touchCloth = 0
    // touchShoe = 0
    //  scaleBack0 = 1;
    //  scaleBack1 = 1;
    //  scaleBackCompare =0 ;
    //  scaleItem1 = 1.2;
    //  scaleItem2 = 1.2
    //  scaleCloth = 0;
    // scaleShoe = 0;
    //  Compare = 0;
    //  accumulate = 0

    // }

    //       }
    //       else{
    //         if(scaleItem1>0.02 && scaleItem2 >0.02 ){
    //           mainAtlas.findRegion('item', randomIndexArr[1]).draw(batch, 17.6, 25, 14.6, 14.6, 7.3, 7.3, 0, scaleItem2 -= 2 * delta,scaleItem2 -= 2 * delta);
    //           mainAtlas.findRegion('item', randomIndexArr[0]).draw(batch, 2, 25, 14.6, 14.6, 7.3, 7.3, 0, scaleItem1 -= 2 * delta,scaleItem1 -= 2 * delta);
    //         }

    //       }
    //     }

    batch.setColor(0.4, 0.4, 0.4, 1);

    batch.setColor(1, 1, 1, 1);

    batch.end();
  });
};

init();
