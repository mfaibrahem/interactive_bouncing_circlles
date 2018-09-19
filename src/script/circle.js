
const UIcanvas = document.querySelector('canvas');
const c = UIcanvas.getContext('2d');


const _x = new WeakMap();
const _y = new WeakMap();
const _r = new WeakMap();
const _minR = new WeakMap();
const _dx = new WeakMap();
const _dy = new WeakMap();
const _color = new WeakMap();
const _draw = new WeakMap();
const _update = new WeakMap();


class Circle {
  constructor(x, y, r, dx, dy) {
    _x.set(this, x);
    _y.set(this, y);
    _r.set(this, r);
    _dx.set(this, dx);
    _dy.set(this, dy);
    _minR.set(this, _r.get(this));
    _color.set(this, randomColor());

    _draw.set(this, () => {
      c.beginPath();
      c.arc(_x.get(this), _y.get(this), _r.get(this), 0, Math.PI*2, false);
      c.fillStyle = _color.get(this);
      c.fill();
    });

    _update.set(this, () => {
      _draw.get(this)();
      if (_x.get(this)+_r.get(this) > window.innerWidth || _x.get(this)-_r.get(this) < 0)
            _dx.set(this, _dx.get(this)*-1);
      if (_y.get(this)+_r.get(this) > window.innerHeight || _y.get(this)-_r.get(this) < 0)
            _dy.set(this, _dy.get(this)*-1);
      _x.set(this, _x.get(this)+_dx.get(this));
      _y.set(this, _y.get(this)+_dy.get(this));
    });
  }

  // getter
  get update() {
    return _update.get(this)();
  }
  get x() {
    return _x.get(this);
  }
  get y() {
    return _y.get(this);
  }
  get r() {
    return _r.get(this);
  }
  get minR() {
    return _minR.get(this);
  }

  // setter
  set r(value) {
    _r.set(this, value);
  }
}

function randomColor() {
  return `
    hsla( ${Math.round(Math.random() * 240)},
          ${Math.round(Math.random() * 100)}%,
          ${Math.round(Math.random() * 100)}%,
          ${Math.random()}
    )
  `;
}

export { c, Circle, UIcanvas };