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

const init = async () => {
  // image.image();
  const stage = createStage();
  let signal = 0;
  let stateTime = 1;
  let stateTime1 = 0;
  let touchSignal = 0;
  const canvas = stage.getCanvas();
  const viewport = createViewport(canvas, 50, 100);
  const gl = viewport.getContext();
  const inputHandler = createViewportAwareInputHandler(canvas, viewport);
  const camera = viewport.getCamera();
  const batch = createBatch(gl);
  const whiteTex = createWhiteTexture(gl);

  // let bee = new Bee();
  // let wire = new Wire();
  // let pipe = new Pipe();
  // let ground = new Ground();
  // let bike = new Bike();
  // let birdObj = new Bird();
  const bgImg = await loadTexture(gl, './bg.png');
  const cardImgs = await loadTexture(gl, './playing-cards.png');
  // const cardImgs  = await loadTexture(gl,)
  const mainAtlas = await loadAtlas(gl, './playing-cards.atlas', {});
  const firstRegion = mainAtlas.findRegion('item', 6);
  const secondRegion = mainAtlas.findRegion('item', 4);

  const runRegions = mainAtlas.findRegions('item');
  const runAnimation = createAnimation(0.1, runRegions);

  // const cardImg = TextureRegion.splitTexture(cardImgs, 3, 3);

  // const runAnimation = createAnimation(0.1, cardImg);

  // const runAnimation1 = createAnimation(50, birdImg);

  gl.clearColor(1, 0.4, 0.3, 1);
  createGameLoop(delta => {
    // birdObj.BirdDown(delta, showArray('bird'));
    // birdObj.touchBird(
    //   inputHandler,
    //   delta,
    //   showArray('bird'),
    //   showArray('pipes')
    // );
    // resetStop(inputHandler);

    // wire.pushWire(
    //   delta,
    //   showIndex('LastIndexSky'),
    //   showArray('skys'),
    //   showIndex('indexSky'),
    //   0
    // );
    // wire.pushWire(
    //   delta,
    //   showIndex('LastIndexCloud'),
    //   showArray('clouds'),
    //   showIndex('indexCloud'),
    //   60
    // );
    // wire.pushWire(
    //   delta,
    //   showIndex('LastIndexHouse'),
    //   showArray('houses'),
    //   showIndex('indexHouse'),
    //   65
    // );
    // wire.pushWire(
    //   delta,
    //   showIndex('LastIndexTree'),
    //   showArray('trees'),
    //   showIndex('indexTree'),
    //   75
    // );
    // wire.pushWire(
    //   delta,
    //   showIndex('LastIndexWire'),
    //   showArray('wires'),
    //   showIndex('indexWire'),
    //   65
    // );

    // bee.pushBee(delta, 80, 50, 30, showArray('bees01'));
    // bee.pushBee(delta, 50, 60, 20, showArray('bees02'));

    // bike.pushBike(delta, 25, showArray('bikes01'));
    // bike.pushBike(delta, 45, showArray('bikes02'));

    // pipe.pushPipe(
    //   showArray('bird'),
    //   delta,
    //   showArray('pipes'),
    //   showIndex('indexPipe')
    // );
    // ground.pushGround(
    //   delta,
    //   showIndex('LastIndexGround'),
    //   showArray('grounds'),
    //   showIndex('indexGround'),
    //   90
    // );

    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    batch.begin();
    batch.draw(whiteTex, 0, 0, 50, 100);
    batch.draw(bgImg, 0, 0, 50, 100);
    // batch.drawRegion(firstRegion, 10, 10, 30, 30);

    // runAnimation
    //   .getKeyFrame(stateTime, PlayMode.LOOP)
    //   .draw(batch, 0, 0, 30, 30);
    // runAnimation
    //   .getKeyFrame(stateTime + 1, PlayMode.LOOP)
    //   .draw(batch, 30, 30, 20, 20);
    // runAnimation
    //   .getKeyFrame(stateTime + 2, PlayMode.LOOP)
    //   .draw(batch, 0, 30, 20, 20);
    // runAnimation
    //   .getKeyFrame(stateTime + 0.5, PlayMode.LOOP)
    //   .draw(batch, 0, 50, 20, 20);
    // runAnimation
    //   .getKeyFrame(stateTime + 1.5, PlayMode.LOOP)
    //   .draw(batch, 0, 70, 20, 20);
    // runAnimation
    //   .getKeyFrame(stateTime + 3, PlayMode.LOOP)

    //   .draw(batch, 20, 70, 20, 20);
    if (inputHandler.isTouched()) {
      touchSignal = 1;
    }

    if (stateTime > 0.02 && touchSignal == 1) {
      stateTime -= 5 * delta;
    } else if (stateTime < 0.02) {
      stateTime = 0.01;
      signal = 1;
    }
    if (signal == 1) {
      if (stateTime1 < 1) {
        stateTime1 += 5 * delta;
      } else {
        stateTime1 = 1;
      }
    }
    // firstRegion.draw(batch, 0, 0, 10, 10);
    if (signal == 0) {
      secondRegion.draw(batch, 10, 0, 10, 10, 5, 5, 0, stateTime, 1);
    } else {
      firstRegion.draw(batch, 10, 0, 10, 10, 5, 5, 0, stateTime1, 1);
    }

    // wire.drawWire(image.imgSky, batch, showArray('skys'), 25, 75);
    // wire.drawWire(image.cloudImg, batch, showArray('clouds'), 25, 25);
    // wire.drawWire(image.houseImg, batch, showArray('houses'), 25, 25);
    // wire.drawWire(image.wireImg, batch, showArray('wires'), 25, 25);
    // bee.drawBee(
    //   image.bee1Img,
    //   batch,
    //   showArray('bees01'),
    //   showIndex('indexBee'),
    //   20,
    //   6.5
    // );
    // bee.drawBee(
    //   image.bee2Img,
    //   batch,
    //   showArray('bees02'),
    //   showIndex('indexBee2'),
    //   9,
    //   7.7
    // );

    // wire.drawWire(image.treeImg, batch, showArray('trees'), 25, 15);

    // bike.drawBike(
    //   image.bikeImg,
    //   batch,
    //   showArray('bikes01'),
    //   showIndex('indexBike1'),
    //   40,
    //   8,
    //   0.3
    // );
    // bike.drawBike(
    //   image.bike2Img,
    //   batch,
    //   showArray('bikes02'),
    //   showIndex('indexBike2'),
    //   40,
    //   8,
    //   0.5
    // );
    // pipe.drawPipe(
    //   image.pipeImg,
    //   image.signImg,
    //   image.pipeDownImg,
    //   showArray('bird'),
    //   batch,
    //   showArray('pipes')
    // );
    // ground.drawGround(image.groundsImg, batch, showArray('grounds'));

    // birdObj.rotateRender(
    //   delta,
    //   runAnimation,
    //   runAnimation1,
    //   batch,
    //   showArray('bird')
    // );

    // checkStop();
    // stateTime += delta;
    // runAnimation
    //   .getKeyFrame(stateTime, PlayMode.LOOP)
    //   .draw(batch, bird.x, bird.y, 5, 4, 2.5, 2, (rotateAngle * Math.PI) / 4);
    batch.setColor(0.4, 0.4, 0.4, 1);

    batch.setColor(1, 1, 1, 1);

    batch.end();
  });
};

init();
