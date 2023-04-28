/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let sideLength = 50;
let iteration = 2;

function setup() {
  angleMode(DEGREES);
  createCanvas(650, 650, WEBGL);
  smooth();
}

function draw() {
  background(0);
  stroke(0);
  fill(0, 255, 0);
  rotateZ(frameCount * -0.1);
  rotateX(frameCount * 0.2);
  rotateY(frameCount * 0.1);

  generateTetrahedra(sideLength, iteration);
}

function generateTetrahedra(sideLength, iteration) {

  iteration--;

  if (iteration >= 0) {

    push();
    translate(sideLength, sideLength, sideLength);
    if (iteration === 0) {
      generateTetrahedron();
    }
    generateTetrahedra(sideLength, iteration);
    pop();

    push();
    translate(-sideLength, -sideLength, sideLength);
    if (iteration === 0) {
      generateTetrahedron();
    }
    generateTetrahedra(sideLength, iteration);
    pop();

    push();
    translate(sideLength, -sideLength, -sideLength);
    if (iteration === 0) {
      generateTetrahedron();
    }
    generateTetrahedra(sideLength, iteration);
    pop();

    push();
    translate(-sideLength, sideLength, -sideLength);
    if (iteration === 0) {
      generateTetrahedron();
    }
    generateTetrahedra(sideLength, iteration);
    pop();
  }
}

function generateTetrahedron() {
  beginShape(TRIANGLES);
  vertex(sideLength, sideLength, sideLength);
  vertex(-sideLength, -sideLength, sideLength);
  vertex(sideLength, -sideLength, -sideLength);
  endShape();

  beginShape(TRIANGLES);
  vertex(-sideLength, -sideLength, sideLength);
  vertex(sideLength, -sideLength, -sideLength);
  vertex(-sideLength, sideLength, -sideLength);
  endShape();

  beginShape(TRIANGLES);
  vertex(sideLength, sideLength, sideLength);
  vertex(-sideLength, sideLength, -sideLength);
  vertex(-sideLength, -sideLength, sideLength);
  endShape();

  beginShape(TRIANGLES);
  vertex(sideLength, sideLength, sideLength);
  vertex(sideLength, -sideLength, -sideLength);
  vertex(-sideLength, sideLength, -sideLength);
  endShape();
}

function mousePressed() {
  if (iteration === 1) {
    iteration = 2;
    sideLength = 50;
  } else if (iteration === 2) {
    iteration = 3;
    sideLength = 37;
  } else if (iteration === 3) {
    iteration = 1;
    sideLength = 75;
  }
}