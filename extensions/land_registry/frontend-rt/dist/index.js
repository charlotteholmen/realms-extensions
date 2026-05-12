var Tu = Object.defineProperty;
var Al = (h) => {
  throw TypeError(h);
};
var Mu = (h, c, p) => c in h ? Tu(h, c, { enumerable: !0, configurable: !0, writable: !0, value: p }) : h[c] = p;
var Oi = (h, c, p) => Mu(h, typeof c != "symbol" ? c + "" : c, p), sa = (h, c, p) => c.has(h) || Al("Cannot " + p);
var H = (h, c, p) => (sa(h, c, "read from private field"), p ? p.call(h) : c.get(h)), ie = (h, c, p) => c.has(h) ? Al("Cannot add the same private member more than once") : c instanceof WeakSet ? c.add(h) : c.set(h, p), se = (h, c, p, w) => (sa(h, c, "write to private field"), w ? w.call(h, p) : c.set(h, p), p), Se = (h, c, p) => (sa(h, c, "access private method"), p);
function Du(h, c) {
  for (var p = 0; p < c.length; p++) {
    const w = c[p];
    if (typeof w != "string" && !Array.isArray(w)) {
      for (const x in w)
        if (x !== "default" && !(x in h)) {
          const B = Object.getOwnPropertyDescriptor(w, x);
          B && Object.defineProperty(h, x, B.get ? B : {
            enumerable: !0,
            get: () => w[x]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
const Iu = !1;
var La = Array.isArray, zu = Array.prototype.indexOf, m0 = Array.prototype.includes, ms = Array.from, Su = Object.defineProperty, uo = Object.getOwnPropertyDescriptor, Ou = Object.prototype, Qu = Array.prototype, Ru = Object.getPrototypeOf, el = Object.isExtensible;
const Zu = () => {
};
function Fu(h) {
  for (var c = 0; c < h.length; c++)
    h[c]();
}
function ml() {
  var h, c, p = new Promise((w, x) => {
    h = w, c = x;
  });
  return { promise: p, resolve: h, reject: c };
}
function Nu(h, c) {
  if (Array.isArray(h))
    return h;
  if (!(Symbol.iterator in h))
    return Array.from(h);
  const p = [];
  for (const w of h)
    if (p.push(w), p.length === c) break;
  return p;
}
const Bt = 2, g0 = 4, gs = 8, gl = 1 << 24, on = 16, Fi = 32, tr = 64, ha = 128, Pi = 512, ot = 1024, yt = 2048, sn = 4096, Ot = 8192, Ei = 16384, Or = 32768, ca = 1 << 25, w0 = 65536, da = 1 << 17, Hu = 1 << 18, k0 = 1 << 19, Uu = 1 << 20, rn = 1 << 25, Ir = 65536, fs = 1 << 21, vo = 1 << 22, $n = 1 << 23, h0 = Symbol("$state"), En = new class extends Error {
  constructor() {
    super(...arguments);
    Oi(this, "name", "StaleReactionError");
    Oi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Gu(h) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Wu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vu(h, c, p) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ju(h) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qu(h) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ku() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ju() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $u() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Af() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ef = 1, tf = 2, wl = 4, nf = 8, rf = 16, of = 1, sf = 2, ct = Symbol(), af = "http://www.w3.org/1999/xhtml";
function lf() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function uf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ff() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function yl(h) {
  return h === this.v;
}
function hf(h, c) {
  return h != h ? c == c : h !== c || h !== null && typeof h == "object" || typeof h == "function";
}
function bl(h) {
  return !hf(h, this.v);
}
let cf = !1, Kt = null;
function y0(h) {
  Kt = h;
}
function xl(h, c = !1, p) {
  Kt = {
    p: Kt,
    i: !1,
    c: null,
    e: null,
    s: h,
    x: null,
    r: (
      /** @type {Effect} */
      le
    ),
    l: null
  };
}
function kl(h) {
  var c = (
    /** @type {ComponentContext} */
    Kt
  ), p = c.e;
  if (p !== null) {
    c.e = null;
    for (var w of p)
      Wl(w);
  }
  return c.i = !0, Kt = c.p, /** @type {T} */
  {};
}
function Pl() {
  return !0;
}
let br = [];
function El() {
  var h = br;
  br = [], Fu(h);
}
function Ar(h) {
  if (br.length === 0 && !fo) {
    var c = br;
    queueMicrotask(() => {
      c === br && El();
    });
  }
  br.push(h);
}
function df() {
  for (; br.length > 0; )
    El();
}
function Bl(h) {
  var c = le;
  if (c === null)
    return ae.f |= $n, h;
  if ((c.f & Or) === 0 && (c.f & g0) === 0)
    throw h;
  Xn(h, c);
}
function Xn(h, c) {
  for (; c !== null; ) {
    if ((c.f & ha) !== 0) {
      if ((c.f & Or) === 0)
        throw h;
      try {
        c.b.error(h);
        return;
      } catch (p) {
        h = p;
      }
    }
    c = c.parent;
  }
  throw h;
}
const _f = -7169;
function Je(h, c) {
  h.f = h.f & _f | c;
}
function Ta(h) {
  (h.f & Pi) !== 0 || h.deps === null ? Je(h, ot) : Je(h, sn);
}
function Cl(h) {
  if (h !== null)
    for (const c of h)
      (c.f & Bt) === 0 || (c.f & Ir) === 0 || (c.f ^= Ir, Cl(
        /** @type {Derived} */
        c.deps
      ));
}
function Ll(h, c, p) {
  (h.f & yt) !== 0 ? c.add(h) : (h.f & sn) !== 0 && p.add(h), Cl(h.deps), Je(h, ot);
}
const wr = /* @__PURE__ */ new Set();
let Ae = null, Ri = null, _a = null, fo = !1, aa = !1, u0 = null, ns = null;
var tl = 0;
let pf = 1;
var c0, d0, Pr, Bn, An, wo, hi, yo, Kn, Cn, en, _0, p0, Er, et, rs, Tl, os, pa, ss, vf;
const _s = class _s {
  constructor() {
    ie(this, et);
    Oi(this, "id", pf++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Oi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Oi(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    ie(this, c0, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    ie(this, d0, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    ie(this, Pr, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    ie(this, Bn, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    ie(this, An, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ie(this, wo, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    ie(this, hi, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    ie(this, yo, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    ie(this, Kn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    ie(this, Cn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    ie(this, en, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    ie(this, _0, /* @__PURE__ */ new Set());
    Oi(this, "is_fork", !1);
    ie(this, p0, !1);
    /** @type {Set<Batch>} */
    ie(this, Er, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(c) {
    H(this, en).has(c) || H(this, en).set(c, { d: [], m: [] }), H(this, _0).delete(c);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(c, p = (w) => this.schedule(w)) {
    var w = H(this, en).get(c);
    if (w) {
      H(this, en).delete(c);
      for (var x of w.d)
        Je(x, yt), p(x);
      for (x of w.m)
        Je(x, sn), p(x);
    }
    H(this, _0).add(c);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(c, p, w = !1) {
    c.v !== ct && !this.previous.has(c) && this.previous.set(c, c.v), (c.f & $n) === 0 && (this.current.set(c, [p, w]), Ri?.set(c, p)), this.is_fork || (c.v = p);
  }
  activate() {
    Ae = this;
  }
  deactivate() {
    Ae = null, Ri = null;
  }
  flush() {
    try {
      aa = !0, Ae = this, Se(this, et, os).call(this);
    } finally {
      tl = 0, _a = null, u0 = null, ns = null, aa = !1, Ae = null, Ri = null, Tr.clear();
    }
  }
  discard() {
    for (const c of H(this, d0)) c(this);
    H(this, d0).clear(), H(this, Pr).clear(), wr.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(c) {
    H(this, yo).push(c);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(c, p) {
    let w = H(this, Bn).get(p) ?? 0;
    if (H(this, Bn).set(p, w + 1), c) {
      let x = H(this, An).get(p) ?? 0;
      H(this, An).set(p, x + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(c, p, w) {
    let x = H(this, Bn).get(p) ?? 0;
    if (x === 1 ? H(this, Bn).delete(p) : H(this, Bn).set(p, x - 1), c) {
      let B = H(this, An).get(p) ?? 0;
      B === 1 ? H(this, An).delete(p) : H(this, An).set(p, B - 1);
    }
    H(this, p0) || w || (se(this, p0, !0), Ar(() => {
      se(this, p0, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(c, p) {
    for (const w of c)
      H(this, Kn).add(w);
    for (const w of p)
      H(this, Cn).add(w);
    c.clear(), p.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(c) {
    H(this, c0).add(c);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(c) {
    H(this, d0).add(c);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(c) {
    H(this, Pr).add(c);
  }
  run_fork_commit_callbacks() {
    for (const c of H(this, Pr)) c(this);
    H(this, Pr).clear();
  }
  settled() {
    return (H(this, wo) ?? se(this, wo, ml())).promise;
  }
  static ensure() {
    if (Ae === null) {
      const c = Ae = new _s();
      aa || (wr.add(Ae), fo || Ar(() => {
        Ae === c && c.flush();
      }));
    }
    return Ae;
  }
  apply() {
    {
      Ri = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(c) {
    if (_a = c, c.b?.is_pending && (c.f & (g0 | gs | gl)) !== 0 && (c.f & Or) === 0) {
      c.b.defer_effect(c);
      return;
    }
    for (var p = c; p.parent !== null; ) {
      p = p.parent;
      var w = p.f;
      if (u0 !== null && p === le && (ae === null || (ae.f & Bt) === 0))
        return;
      if ((w & (tr | Fi)) !== 0) {
        if ((w & ot) === 0)
          return;
        p.f ^= ot;
      }
    }
    H(this, hi).push(p);
  }
};
c0 = new WeakMap(), d0 = new WeakMap(), Pr = new WeakMap(), Bn = new WeakMap(), An = new WeakMap(), wo = new WeakMap(), hi = new WeakMap(), yo = new WeakMap(), Kn = new WeakMap(), Cn = new WeakMap(), en = new WeakMap(), _0 = new WeakMap(), p0 = new WeakMap(), Er = new WeakMap(), et = new WeakSet(), rs = function() {
  return this.is_fork || H(this, An).size > 0;
}, Tl = function() {
  for (const w of H(this, Er))
    for (const x of H(w, An).keys()) {
      for (var c = !1, p = x; p.parent !== null; ) {
        if (H(this, en).has(p)) {
          c = !0;
          break;
        }
        p = p.parent;
      }
      if (!c)
        return !0;
    }
  return !1;
}, os = function() {
  var Q;
  if (tl++ > 1e3 && (wr.delete(this), gf()), !Se(this, et, rs).call(this)) {
    for (const D of H(this, Kn))
      H(this, Cn).delete(D), Je(D, yt), this.schedule(D);
    for (const D of H(this, Cn))
      Je(D, sn), this.schedule(D);
  }
  const c = H(this, hi);
  se(this, hi, []), this.apply();
  var p = u0 = [], w = [], x = ns = [];
  for (const D of c)
    try {
      Se(this, et, pa).call(this, D, p, w);
    } catch (Y) {
      throw Il(D), Y;
    }
  if (Ae = null, x.length > 0) {
    var B = _s.ensure();
    for (const D of x)
      B.schedule(D);
  }
  if (u0 = null, ns = null, Se(this, et, rs).call(this) || Se(this, et, Tl).call(this)) {
    Se(this, et, ss).call(this, w), Se(this, et, ss).call(this, p);
    for (const [D, Y] of H(this, en))
      Dl(D, Y);
  } else {
    H(this, Bn).size === 0 && wr.delete(this), H(this, Kn).clear(), H(this, Cn).clear();
    for (const D of H(this, c0)) D(this);
    H(this, c0).clear(), il(w), il(p), H(this, wo)?.resolve();
  }
  var z = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    Ae
  );
  if (H(this, hi).length > 0) {
    const D = z ?? (z = this);
    H(D, hi).push(...H(this, hi).filter((Y) => !H(D, hi).includes(Y)));
  }
  z !== null && (wr.add(z), Se(Q = z, et, os).call(Q));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
pa = function(c, p, w) {
  c.f ^= ot;
  for (var x = c.first; x !== null; ) {
    var B = x.f, z = (B & (Fi | tr)) !== 0, Q = z && (B & ot) !== 0, D = Q || (B & Ot) !== 0 || H(this, en).has(x);
    if (!D && x.fn !== null) {
      z ? x.f ^= ot : (B & g0) !== 0 ? p.push(x) : Bo(x) && ((B & on) !== 0 && H(this, Cn).add(x), x0(x));
      var Y = x.first;
      if (Y !== null) {
        x = Y;
        continue;
      }
    }
    for (; x !== null; ) {
      var J = x.next;
      if (J !== null) {
        x = J;
        break;
      }
      x = x.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
ss = function(c) {
  for (var p = 0; p < c.length; p += 1)
    Ll(c[p], H(this, Kn), H(this, Cn));
}, vf = function() {
  var J, oA, nA;
  for (const sA of wr) {
    var c = sA.id < this.id, p = [];
    for (const [rA, [_A, aA]] of this.current) {
      if (sA.current.has(rA)) {
        var w = (
          /** @type {[any, boolean]} */
          sA.current.get(rA)[0]
        );
        if (c && _A !== w)
          sA.current.set(rA, [_A, aA]);
        else
          continue;
      }
      p.push(rA);
    }
    var x = [...sA.current.keys()].filter((rA) => !this.current.has(rA));
    if (x.length === 0)
      c && sA.discard();
    else if (p.length > 0) {
      if (c)
        for (const rA of H(this, _0))
          sA.unskip_effect(rA, (_A) => {
            var aA;
            (_A.f & (on | vo)) !== 0 ? sA.schedule(_A) : Se(aA = sA, et, ss).call(aA, [_A]);
          });
      sA.activate();
      var B = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Map();
      for (var Q of p)
        Ml(Q, x, B, z);
      z = /* @__PURE__ */ new Map();
      var D = [...sA.current.keys()].filter(
        (rA) => this.current.has(rA) ? (
          /** @type {[any, boolean]} */
          this.current.get(rA)[0] !== rA
        ) : !0
      );
      for (const rA of H(this, yo))
        (rA.f & (Ei | Ot | da)) === 0 && Ma(rA, D, z) && ((rA.f & (vo | on)) !== 0 ? (Je(rA, yt), sA.schedule(rA)) : H(sA, Kn).add(rA));
      if (H(sA, hi).length > 0) {
        sA.apply();
        for (var Y of H(sA, hi))
          Se(J = sA, et, pa).call(J, Y, [], []);
        se(sA, hi, []);
      }
      sA.deactivate();
    }
  }
  for (const sA of wr)
    H(sA, Er).has(this) && (H(sA, Er).delete(this), H(sA, Er).size === 0 && !Se(oA = sA, et, rs).call(oA) && (sA.activate(), Se(nA = sA, et, os).call(nA)));
};
let zr = _s;
function mf(h) {
  var c = fo;
  fo = !0;
  try {
    for (var p; ; ) {
      if (df(), Ae === null)
        return (
          /** @type {T} */
          p
        );
      Ae.flush();
    }
  } finally {
    fo = c;
  }
}
function gf() {
  try {
    Ku();
  } catch (h) {
    Xn(h, _a);
  }
}
let Pn = null;
function il(h) {
  var c = h.length;
  if (c !== 0) {
    for (var p = 0; p < c; ) {
      var w = h[p++];
      if ((w.f & (Ei | Ot)) === 0 && Bo(w) && (Pn = /* @__PURE__ */ new Set(), x0(w), w.deps === null && w.first === null && w.nodes === null && w.teardown === null && w.ac === null && Yl(w), Pn?.size > 0)) {
        Tr.clear();
        for (const x of Pn) {
          if ((x.f & (Ei | Ot)) !== 0) continue;
          const B = [x];
          let z = x.parent;
          for (; z !== null; )
            Pn.has(z) && (Pn.delete(z), B.push(z)), z = z.parent;
          for (let Q = B.length - 1; Q >= 0; Q--) {
            const D = B[Q];
            (D.f & (Ei | Ot)) === 0 && x0(D);
          }
        }
        Pn.clear();
      }
    }
    Pn = null;
  }
}
function Ml(h, c, p, w) {
  if (!p.has(h) && (p.add(h), h.reactions !== null))
    for (const x of h.reactions) {
      const B = x.f;
      (B & Bt) !== 0 ? Ml(
        /** @type {Derived} */
        x,
        c,
        p,
        w
      ) : (B & (vo | on)) !== 0 && (B & yt) === 0 && Ma(x, c, w) && (Je(x, yt), Da(
        /** @type {Effect} */
        x
      ));
    }
}
function Ma(h, c, p) {
  const w = p.get(h);
  if (w !== void 0) return w;
  if (h.deps !== null)
    for (const x of h.deps) {
      if (m0.call(c, x))
        return !0;
      if ((x.f & Bt) !== 0 && Ma(
        /** @type {Derived} */
        x,
        c,
        p
      ))
        return p.set(
          /** @type {Derived} */
          x,
          !0
        ), !0;
    }
  return p.set(h, !1), !1;
}
function Da(h) {
  Ae.schedule(h);
}
function Dl(h, c) {
  if (!((h.f & Fi) !== 0 && (h.f & ot) !== 0)) {
    (h.f & yt) !== 0 ? c.d.push(h) : (h.f & sn) !== 0 && c.m.push(h), Je(h, ot);
    for (var p = h.first; p !== null; )
      Dl(p, c), p = p.next;
  }
}
function Il(h) {
  Je(h, ot);
  for (var c = h.first; c !== null; )
    Il(c), c = c.next;
}
function wf(h) {
  let c = 0, p = Sr(0), w;
  return () => {
    Sa() && (V(p), Qa(() => (c === 0 && (w = ys(() => h(() => ho(p)))), c += 1, () => {
      Ar(() => {
        c -= 1, c === 0 && (w?.(), w = void 0, ho(p));
      });
    })));
  };
}
var yf = w0 | k0;
function bf(h, c, p, w) {
  new xf(h, c, p, w);
}
var yi, Ca, bi, Br, Vt, xi, St, ci, Ln, Cr, Jn, v0, bo, xo, Tn, ps, Ge, kf, Pf, Ef, va, as, ls, ma, ga;
class xf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(c, p, w, x) {
    ie(this, Ge);
    /** @type {Boundary | null} */
    Oi(this, "parent");
    Oi(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Oi(this, "transform_error");
    /** @type {TemplateNode} */
    ie(this, yi);
    /** @type {TemplateNode | null} */
    ie(this, Ca, null);
    /** @type {BoundaryProps} */
    ie(this, bi);
    /** @type {((anchor: Node) => void)} */
    ie(this, Br);
    /** @type {Effect} */
    ie(this, Vt);
    /** @type {Effect | null} */
    ie(this, xi, null);
    /** @type {Effect | null} */
    ie(this, St, null);
    /** @type {Effect | null} */
    ie(this, ci, null);
    /** @type {DocumentFragment | null} */
    ie(this, Ln, null);
    ie(this, Cr, 0);
    ie(this, Jn, 0);
    ie(this, v0, !1);
    /** @type {Set<Effect>} */
    ie(this, bo, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    ie(this, xo, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    ie(this, Tn, null);
    ie(this, ps, wf(() => (se(this, Tn, Sr(H(this, Cr))), () => {
      se(this, Tn, null);
    })));
    se(this, yi, c), se(this, bi, p), se(this, Br, (B) => {
      var z = (
        /** @type {Effect} */
        le
      );
      z.b = this, z.f |= ha, w(B);
    }), this.parent = /** @type {Effect} */
    le.b, this.transform_error = x ?? this.parent?.transform_error ?? ((B) => B), se(this, Vt, Ra(() => {
      Se(this, Ge, va).call(this);
    }, yf));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(c) {
    Ll(c, H(this, bo), H(this, xo));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!H(this, bi).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(c, p) {
    Se(this, Ge, ma).call(this, c, p), se(this, Cr, H(this, Cr) + c), !(!H(this, Tn) || H(this, v0)) && (se(this, v0, !0), Ar(() => {
      se(this, v0, !1), H(this, Tn) && b0(H(this, Tn), H(this, Cr));
    }));
  }
  get_effect_pending() {
    return H(this, ps).call(this), V(
      /** @type {Source<number>} */
      H(this, Tn)
    );
  }
  /** @param {unknown} error */
  error(c) {
    if (!H(this, bi).onerror && !H(this, bi).failed)
      throw c;
    Ae?.is_fork ? (H(this, xi) && Ae.skip_effect(H(this, xi)), H(this, St) && Ae.skip_effect(H(this, St)), H(this, ci) && Ae.skip_effect(H(this, ci)), Ae.on_fork_commit(() => {
      Se(this, Ge, ga).call(this, c);
    })) : Se(this, Ge, ga).call(this, c);
  }
}
yi = new WeakMap(), Ca = new WeakMap(), bi = new WeakMap(), Br = new WeakMap(), Vt = new WeakMap(), xi = new WeakMap(), St = new WeakMap(), ci = new WeakMap(), Ln = new WeakMap(), Cr = new WeakMap(), Jn = new WeakMap(), v0 = new WeakMap(), bo = new WeakMap(), xo = new WeakMap(), Tn = new WeakMap(), ps = new WeakMap(), Ge = new WeakSet(), kf = function() {
  try {
    se(this, xi, ki(() => H(this, Br).call(this, H(this, yi))));
  } catch (c) {
    this.error(c);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Pf = function(c) {
  const p = H(this, bi).failed;
  p && se(this, ci, ki(() => {
    p(
      H(this, yi),
      () => c,
      () => () => {
      }
    );
  }));
}, Ef = function() {
  const c = H(this, bi).pending;
  c && (this.is_pending = !0, se(this, St, ki(() => c(H(this, yi)))), Ar(() => {
    var p = se(this, Ln, document.createDocumentFragment()), w = er();
    p.append(w), se(this, xi, Se(this, Ge, ls).call(this, () => ki(() => H(this, Br).call(this, w)))), H(this, Jn) === 0 && (H(this, yi).before(p), se(this, Ln, null), Mr(
      /** @type {Effect} */
      H(this, St),
      () => {
        se(this, St, null);
      }
    ), Se(this, Ge, as).call(
      this,
      /** @type {Batch} */
      Ae
    ));
  }));
}, va = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), se(this, Jn, 0), se(this, Cr, 0), se(this, xi, ki(() => {
      H(this, Br).call(this, H(this, yi));
    })), H(this, Jn) > 0) {
      var c = se(this, Ln, document.createDocumentFragment());
      Na(H(this, xi), c);
      const p = (
        /** @type {(anchor: Node) => void} */
        H(this, bi).pending
      );
      se(this, St, ki(() => p(H(this, yi))));
    } else
      Se(this, Ge, as).call(
        this,
        /** @type {Batch} */
        Ae
      );
  } catch (p) {
    this.error(p);
  }
}, /**
 * @param {Batch} batch
 */
as = function(c) {
  this.is_pending = !1, c.transfer_effects(H(this, bo), H(this, xo));
}, /**
 * @template T
 * @param {() => T} fn
 */
ls = function(c) {
  var p = le, w = ae, x = Kt;
  an(H(this, Vt)), Ci(H(this, Vt)), y0(H(this, Vt).ctx);
  try {
    return zr.ensure(), c();
  } catch (B) {
    return Bl(B), null;
  } finally {
    an(p), Ci(w), y0(x);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ma = function(c, p) {
  var w;
  if (!this.has_pending_snippet()) {
    this.parent && Se(w = this.parent, Ge, ma).call(w, c, p);
    return;
  }
  se(this, Jn, H(this, Jn) + c), H(this, Jn) === 0 && (Se(this, Ge, as).call(this, p), H(this, St) && Mr(H(this, St), () => {
    se(this, St, null);
  }), H(this, Ln) && (H(this, yi).before(H(this, Ln)), se(this, Ln, null)));
}, /**
 * @param {unknown} error
 */
ga = function(c) {
  H(this, xi) && (Yt(H(this, xi)), se(this, xi, null)), H(this, St) && (Yt(H(this, St)), se(this, St, null)), H(this, ci) && (Yt(H(this, ci)), se(this, ci, null));
  var p = H(this, bi).onerror;
  let w = H(this, bi).failed;
  var x = !1, B = !1;
  const z = () => {
    if (x) {
      ff();
      return;
    }
    x = !0, B && Af(), H(this, ci) !== null && Mr(H(this, ci), () => {
      se(this, ci, null);
    }), Se(this, Ge, ls).call(this, () => {
      Se(this, Ge, va).call(this);
    });
  }, Q = (D) => {
    try {
      B = !0, p?.(D, z), B = !1;
    } catch (Y) {
      Xn(Y, H(this, Vt) && H(this, Vt).parent);
    }
    w && se(this, ci, Se(this, Ge, ls).call(this, () => {
      try {
        return ki(() => {
          var Y = (
            /** @type {Effect} */
            le
          );
          Y.b = this, Y.f |= ha, w(
            H(this, yi),
            () => D,
            () => z
          );
        });
      } catch (Y) {
        return Xn(
          Y,
          /** @type {Effect} */
          H(this, Vt).parent
        ), null;
      }
    }));
  };
  Ar(() => {
    var D;
    try {
      D = this.transform_error(c);
    } catch (Y) {
      Xn(Y, H(this, Vt) && H(this, Vt).parent);
      return;
    }
    D !== null && typeof D == "object" && typeof /** @type {any} */
    D.then == "function" ? D.then(
      Q,
      /** @param {unknown} e */
      (Y) => Xn(Y, H(this, Vt) && H(this, Vt).parent)
    ) : Q(D);
  });
};
function Bf(h, c, p, w) {
  const x = Ia;
  var B = h.filter((nA) => !nA.settled);
  if (p.length === 0 && B.length === 0) {
    w(c.map(x));
    return;
  }
  var z = (
    /** @type {Effect} */
    le
  ), Q = Cf(), D = B.length === 1 ? B[0].promise : B.length > 1 ? Promise.all(B.map((nA) => nA.promise)) : null;
  function Y(nA) {
    Q();
    try {
      w(nA);
    } catch (sA) {
      (z.f & Ei) === 0 && Xn(sA, z);
    }
    hs();
  }
  if (p.length === 0) {
    D.then(() => Y(c.map(x)));
    return;
  }
  var J = zl();
  function oA() {
    Promise.all(p.map((nA) => /* @__PURE__ */ Lf(nA))).then((nA) => Y([...c.map(x), ...nA])).catch((nA) => Xn(nA, z)).finally(() => J());
  }
  D ? D.then(() => {
    Q(), oA(), hs();
  }) : oA();
}
function Cf() {
  var h = (
    /** @type {Effect} */
    le
  ), c = ae, p = Kt, w = (
    /** @type {Batch} */
    Ae
  );
  return function(B = !0) {
    an(h), Ci(c), y0(p), B && (h.f & Ei) === 0 && (w?.activate(), w?.apply());
  };
}
function hs(h = !0) {
  an(null), Ci(null), y0(null), h && Ae?.deactivate();
}
function zl() {
  var h = (
    /** @type {Effect} */
    le
  ), c = (
    /** @type {Boundary} */
    h.b
  ), p = (
    /** @type {Batch} */
    Ae
  ), w = c.is_rendered();
  return c.update_pending_count(1, p), p.increment(w, h), (x = !1) => {
    c.update_pending_count(-1, p), p.decrement(w, h, x);
  };
}
// @__NO_SIDE_EFFECTS__
function Ia(h) {
  var c = Bt | yt;
  return le !== null && (le.f |= k0), {
    ctx: Kt,
    deps: null,
    effects: null,
    equals: yl,
    f: c,
    fn: h,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ct
    ),
    wv: 0,
    parent: le,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Lf(h, c, p) {
  let w = (
    /** @type {Effect | null} */
    le
  );
  w === null && Wu();
  var x = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), B = Sr(
    /** @type {V} */
    ct
  ), z = !ae, Q = /* @__PURE__ */ new Map();
  return Gf(() => {
    var D = (
      /** @type {Effect} */
      le
    ), Y = ml();
    x = Y.promise;
    try {
      Promise.resolve(h()).then(Y.resolve, Y.reject).finally(hs);
    } catch (sA) {
      Y.reject(sA), hs();
    }
    var J = (
      /** @type {Batch} */
      Ae
    );
    if (z) {
      if ((D.f & Or) !== 0)
        var oA = zl();
      if (
        /** @type {Boundary} */
        w.b.is_rendered()
      )
        Q.get(J)?.reject(En), Q.delete(J);
      else {
        for (const sA of Q.values())
          sA.reject(En);
        Q.clear();
      }
      Q.set(J, Y);
    }
    const nA = (sA, rA = void 0) => {
      if (oA) {
        var _A = rA === En;
        oA(_A);
      }
      if (!(rA === En || (D.f & Ei) !== 0)) {
        if (J.activate(), rA)
          B.f |= $n, b0(B, rA);
        else {
          (B.f & $n) !== 0 && (B.f ^= $n), b0(B, sA);
          for (const [aA, $A] of Q) {
            if (Q.delete(aA), aA === J) break;
            $A.reject(En);
          }
        }
        J.deactivate();
      }
    };
    Y.promise.then(nA, (sA) => nA(null, sA || "unknown"));
  }), Oa(() => {
    for (const D of Q.values())
      D.reject(En);
  }), new Promise((D) => {
    function Y(J) {
      function oA() {
        J === x ? D(B) : Y(x);
      }
      J.then(oA, oA);
    }
    Y(x);
  });
}
// @__NO_SIDE_EFFECTS__
function la(h) {
  const c = /* @__PURE__ */ Ia(h);
  return Jl(c), c;
}
// @__NO_SIDE_EFFECTS__
function Tf(h) {
  const c = /* @__PURE__ */ Ia(h);
  return c.equals = bl, c;
}
function Mf(h) {
  var c = h.effects;
  if (c !== null) {
    h.effects = null;
    for (var p = 0; p < c.length; p += 1)
      Yt(
        /** @type {Effect} */
        c[p]
      );
  }
}
function za(h) {
  var c, p = le, w = h.parent;
  if (!ir && w !== null && (w.f & (Ei | Ot)) !== 0)
    return lf(), h.v;
  an(w);
  try {
    h.f &= ~Ir, Mf(h), c = eu(h);
  } finally {
    an(p);
  }
  return c;
}
function Sl(h) {
  var c = za(h);
  if (!h.equals(c) && (h.wv = $l(), (!Ae?.is_fork || h.deps === null) && (Ae !== null ? Ae.capture(h, c, !0) : h.v = c, h.deps === null))) {
    Je(h, ot);
    return;
  }
  ir || (Ri !== null ? (Sa() || Ae?.is_fork) && Ri.set(h, c) : Ta(h));
}
function Df(h) {
  if (h.effects !== null)
    for (const c of h.effects)
      (c.teardown || c.ac) && (c.teardown?.(), c.ac?.abort(En), c.teardown = Zu, c.ac = null, mo(c, 0), Za(c));
}
function Ol(h) {
  if (h.effects !== null)
    for (const c of h.effects)
      c.teardown && x0(c);
}
let wa = /* @__PURE__ */ new Set();
const Tr = /* @__PURE__ */ new Map();
let Ql = !1;
function Sr(h, c) {
  var p = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: h,
    reactions: null,
    equals: yl,
    rv: 0,
    wv: 0
  };
  return p;
}
// @__NO_SIDE_EFFECTS__
function Ke(h, c) {
  const p = Sr(h);
  return Jl(p), p;
}
// @__NO_SIDE_EFFECTS__
function If(h, c = !1, p = !0) {
  const w = Sr(h);
  return c || (w.equals = bl), w;
}
function CA(h, c, p = !1) {
  ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zi || (ae.f & da) !== 0) && Pl() && (ae.f & (Bt | on | vo | da)) !== 0 && (Bi === null || !m0.call(Bi, h)) && $u();
  let w = p ? nn(c) : c;
  return b0(h, w, ns);
}
function b0(h, c, p = null) {
  if (!h.equals(c)) {
    Tr.set(h, ir ? c : h.v);
    var w = zr.ensure();
    if (w.capture(h, c), (h.f & Bt) !== 0) {
      const x = (
        /** @type {Derived} */
        h
      );
      (h.f & yt) !== 0 && za(x), Ri === null && Ta(x);
    }
    h.wv = $l(), Rl(h, yt, p), le !== null && (le.f & ot) !== 0 && (le.f & (Fi | tr)) === 0 && (wi === null ? jf([h]) : wi.push(h)), !w.is_fork && wa.size > 0 && !Ql && zf();
  }
  return c;
}
function zf() {
  Ql = !1;
  for (const h of wa)
    (h.f & ot) !== 0 && Je(h, sn), Bo(h) && x0(h);
  wa.clear();
}
function ho(h) {
  CA(h, h.v + 1);
}
function Rl(h, c, p) {
  var w = h.reactions;
  if (w !== null)
    for (var x = w.length, B = 0; B < x; B++) {
      var z = w[B], Q = z.f, D = (Q & yt) === 0;
      if (D && Je(z, c), (Q & Bt) !== 0) {
        var Y = (
          /** @type {Derived} */
          z
        );
        Ri?.delete(Y), (Q & Ir) === 0 && (Q & Pi && (le === null || (le.f & fs) === 0) && (z.f |= Ir), Rl(Y, sn, p));
      } else if (D) {
        var J = (
          /** @type {Effect} */
          z
        );
        (Q & on) !== 0 && Pn !== null && Pn.add(J), p !== null ? p.push(J) : Da(J);
      }
    }
}
function nn(h) {
  if (typeof h != "object" || h === null || h0 in h)
    return h;
  const c = Ru(h);
  if (c !== Ou && c !== Qu)
    return h;
  var p = /* @__PURE__ */ new Map(), w = La(h), x = /* @__PURE__ */ Ke(0), B = Dr, z = (Q) => {
    if (Dr === B)
      return Q();
    var D = ae, Y = Dr;
    Ci(null), al(B);
    var J = Q();
    return Ci(D), al(Y), J;
  };
  return w && p.set("length", /* @__PURE__ */ Ke(
    /** @type {any[]} */
    h.length
  )), new Proxy(
    /** @type {any} */
    h,
    {
      defineProperty(Q, D, Y) {
        (!("value" in Y) || Y.configurable === !1 || Y.enumerable === !1 || Y.writable === !1) && Ju();
        var J = p.get(D);
        return J === void 0 ? z(() => {
          var oA = /* @__PURE__ */ Ke(Y.value);
          return p.set(D, oA), oA;
        }) : CA(J, Y.value, !0), !0;
      },
      deleteProperty(Q, D) {
        var Y = p.get(D);
        if (Y === void 0) {
          if (D in Q) {
            const J = z(() => /* @__PURE__ */ Ke(ct));
            p.set(D, J), ho(x);
          }
        } else
          CA(Y, ct), ho(x);
        return !0;
      },
      get(Q, D, Y) {
        if (D === h0)
          return h;
        var J = p.get(D), oA = D in Q;
        if (J === void 0 && (!oA || uo(Q, D)?.writable) && (J = z(() => {
          var sA = nn(oA ? Q[D] : ct), rA = /* @__PURE__ */ Ke(sA);
          return rA;
        }), p.set(D, J)), J !== void 0) {
          var nA = V(J);
          return nA === ct ? void 0 : nA;
        }
        return Reflect.get(Q, D, Y);
      },
      getOwnPropertyDescriptor(Q, D) {
        var Y = Reflect.getOwnPropertyDescriptor(Q, D);
        if (Y && "value" in Y) {
          var J = p.get(D);
          J && (Y.value = V(J));
        } else if (Y === void 0) {
          var oA = p.get(D), nA = oA?.v;
          if (oA !== void 0 && nA !== ct)
            return {
              enumerable: !0,
              configurable: !0,
              value: nA,
              writable: !0
            };
        }
        return Y;
      },
      has(Q, D) {
        if (D === h0)
          return !0;
        var Y = p.get(D), J = Y !== void 0 && Y.v !== ct || Reflect.has(Q, D);
        if (Y !== void 0 || le !== null && (!J || uo(Q, D)?.writable)) {
          Y === void 0 && (Y = z(() => {
            var nA = J ? nn(Q[D]) : ct, sA = /* @__PURE__ */ Ke(nA);
            return sA;
          }), p.set(D, Y));
          var oA = V(Y);
          if (oA === ct)
            return !1;
        }
        return J;
      },
      set(Q, D, Y, J) {
        var oA = p.get(D), nA = D in Q;
        if (w && D === "length")
          for (var sA = Y; sA < /** @type {Source<number>} */
          oA.v; sA += 1) {
            var rA = p.get(sA + "");
            rA !== void 0 ? CA(rA, ct) : sA in Q && (rA = z(() => /* @__PURE__ */ Ke(ct)), p.set(sA + "", rA));
          }
        if (oA === void 0)
          (!nA || uo(Q, D)?.writable) && (oA = z(() => /* @__PURE__ */ Ke(void 0)), CA(oA, nn(Y)), p.set(D, oA));
        else {
          nA = oA.v !== ct;
          var _A = z(() => nn(Y));
          CA(oA, _A);
        }
        var aA = Reflect.getOwnPropertyDescriptor(Q, D);
        if (aA?.set && aA.set.call(J, Y), !nA) {
          if (w && typeof D == "string") {
            var $A = (
              /** @type {Source<number>} */
              p.get("length")
            ), we = Number(D);
            Number.isInteger(we) && we >= $A.v && CA($A, we + 1);
          }
          ho(x);
        }
        return !0;
      },
      ownKeys(Q) {
        V(x);
        var D = Reflect.ownKeys(Q).filter((oA) => {
          var nA = p.get(oA);
          return nA === void 0 || nA.v !== ct;
        });
        for (var [Y, J] of p)
          J.v !== ct && !(Y in Q) && D.push(Y);
        return D;
      },
      setPrototypeOf() {
        Xu();
      }
    }
  );
}
function nl(h) {
  try {
    if (h !== null && typeof h == "object" && h0 in h)
      return h[h0];
  } catch {
  }
  return h;
}
function Sf(h, c) {
  return Object.is(nl(h), nl(c));
}
var rl, Zl, Fl, Nl;
function Of() {
  if (rl === void 0) {
    rl = window, Zl = /Firefox/.test(navigator.userAgent);
    var h = Element.prototype, c = Node.prototype, p = Text.prototype;
    Fl = uo(c, "firstChild").get, Nl = uo(c, "nextSibling").get, el(h) && (h.__click = void 0, h.__className = void 0, h.__attributes = null, h.__style = void 0, h.__e = void 0), el(p) && (p.__t = void 0);
  }
}
function er(h = "") {
  return document.createTextNode(h);
}
// @__NO_SIDE_EFFECTS__
function cs(h) {
  return (
    /** @type {TemplateNode | null} */
    Fl.call(h)
  );
}
// @__NO_SIDE_EFFECTS__
function Eo(h) {
  return (
    /** @type {TemplateNode | null} */
    Nl.call(h)
  );
}
function wA(h, c) {
  return /* @__PURE__ */ cs(h);
}
function Qf(h, c = !1) {
  {
    var p = /* @__PURE__ */ cs(h);
    return p instanceof Comment && p.data === "" ? /* @__PURE__ */ Eo(p) : p;
  }
}
function bA(h, c = 1, p = !1) {
  let w = h;
  for (; c--; )
    w = /** @type {TemplateNode} */
    /* @__PURE__ */ Eo(w);
  return w;
}
function Rf(h) {
  h.textContent = "";
}
function Hl() {
  return !1;
}
function Zf(h, c, p) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(af, h, void 0)
  );
}
let ol = !1;
function Ff() {
  ol || (ol = !0, document.addEventListener(
    "reset",
    (h) => {
      Promise.resolve().then(() => {
        if (!h.defaultPrevented)
          for (
            const c of
            /**@type {HTMLFormElement} */
            h.target.elements
          )
            c.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function ws(h) {
  var c = ae, p = le;
  Ci(null), an(null);
  try {
    return h();
  } finally {
    Ci(c), an(p);
  }
}
function Ul(h, c, p, w = p) {
  h.addEventListener(c, () => ws(p));
  const x = h.__on_r;
  x ? h.__on_r = () => {
    x(), w(!0);
  } : h.__on_r = () => w(!0), Ff();
}
function Nf(h) {
  le === null && (ae === null && qu(), Yu()), ir && ju();
}
function Hf(h, c) {
  var p = c.last;
  p === null ? c.last = c.first = h : (p.next = h, h.prev = p, c.last = h);
}
function Mn(h, c) {
  var p = le;
  p !== null && (p.f & Ot) !== 0 && (h |= Ot);
  var w = {
    ctx: Kt,
    deps: null,
    nodes: null,
    f: h | yt | Pi,
    first: null,
    fn: c,
    last: null,
    next: null,
    parent: p,
    b: p && p.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  Ae?.register_created_effect(w);
  var x = w;
  if ((h & g0) !== 0)
    u0 !== null ? u0.push(w) : zr.ensure().schedule(w);
  else if (c !== null) {
    try {
      x0(w);
    } catch (z) {
      throw Yt(w), z;
    }
    x.deps === null && x.teardown === null && x.nodes === null && x.first === x.last && // either `null`, or a singular child
    (x.f & k0) === 0 && (x = x.first, (h & on) !== 0 && (h & w0) !== 0 && x !== null && (x.f |= w0));
  }
  if (x !== null && (x.parent = p, p !== null && Hf(x, p), ae !== null && (ae.f & Bt) !== 0 && (h & tr) === 0)) {
    var B = (
      /** @type {Derived} */
      ae
    );
    (B.effects ?? (B.effects = [])).push(x);
  }
  return w;
}
function Sa() {
  return ae !== null && !Zi;
}
function Oa(h) {
  const c = Mn(gs, null);
  return Je(c, ot), c.teardown = h, c;
}
function Gl(h) {
  Nf();
  var c = (
    /** @type {Effect} */
    le.f
  ), p = !ae && (c & Fi) !== 0 && (c & Or) === 0;
  if (p) {
    var w = (
      /** @type {ComponentContext} */
      Kt
    );
    (w.e ?? (w.e = [])).push(h);
  } else
    return Wl(h);
}
function Wl(h) {
  return Mn(g0 | Uu, h);
}
function Uf(h) {
  zr.ensure();
  const c = Mn(tr | k0, h);
  return (p = {}) => new Promise((w) => {
    p.outro ? Mr(c, () => {
      Yt(c), w(void 0);
    }) : (Yt(c), w(void 0));
  });
}
function Vl(h) {
  return Mn(g0, h);
}
function Gf(h) {
  return Mn(vo | k0, h);
}
function Qa(h, c = 0) {
  return Mn(gs | c, h);
}
function ui(h, c = [], p = [], w = []) {
  Bf(w, c, p, (x) => {
    Mn(gs, () => h(...x.map(V)));
  });
}
function Ra(h, c = 0) {
  var p = Mn(on | c, h);
  return p;
}
function ki(h) {
  return Mn(Fi | k0, h);
}
function jl(h) {
  var c = h.teardown;
  if (c !== null) {
    const p = ir, w = ae;
    sl(!0), Ci(null);
    try {
      c.call(null);
    } finally {
      sl(p), Ci(w);
    }
  }
}
function Za(h, c = !1) {
  var p = h.first;
  for (h.first = h.last = null; p !== null; ) {
    const x = p.ac;
    x !== null && ws(() => {
      x.abort(En);
    });
    var w = p.next;
    (p.f & tr) !== 0 ? p.parent = null : Yt(p, c), p = w;
  }
}
function Wf(h) {
  for (var c = h.first; c !== null; ) {
    var p = c.next;
    (c.f & Fi) === 0 && Yt(c), c = p;
  }
}
function Yt(h, c = !0) {
  var p = !1;
  (c || (h.f & Hu) !== 0) && h.nodes !== null && h.nodes.end !== null && (Vf(
    h.nodes.start,
    /** @type {TemplateNode} */
    h.nodes.end
  ), p = !0), Je(h, ca), Za(h, c && !p), mo(h, 0);
  var w = h.nodes && h.nodes.t;
  if (w !== null)
    for (const B of w)
      B.stop();
  jl(h), h.f ^= ca, h.f |= Ei;
  var x = h.parent;
  x !== null && x.first !== null && Yl(h), h.next = h.prev = h.teardown = h.ctx = h.deps = h.fn = h.nodes = h.ac = h.b = null;
}
function Vf(h, c) {
  for (; h !== null; ) {
    var p = h === c ? null : /* @__PURE__ */ Eo(h);
    h.remove(), h = p;
  }
}
function Yl(h) {
  var c = h.parent, p = h.prev, w = h.next;
  p !== null && (p.next = w), w !== null && (w.prev = p), c !== null && (c.first === h && (c.first = w), c.last === h && (c.last = p));
}
function Mr(h, c, p = !0) {
  var w = [];
  ql(h, w, !0);
  var x = () => {
    p && Yt(h), c && c();
  }, B = w.length;
  if (B > 0) {
    var z = () => --B || x();
    for (var Q of w)
      Q.out(z);
  } else
    x();
}
function ql(h, c, p) {
  if ((h.f & Ot) === 0) {
    h.f ^= Ot;
    var w = h.nodes && h.nodes.t;
    if (w !== null)
      for (const Q of w)
        (Q.is_global || p) && c.push(Q);
    for (var x = h.first; x !== null; ) {
      var B = x.next;
      if ((x.f & tr) === 0) {
        var z = (x.f & w0) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (x.f & Fi) !== 0 && (h.f & on) !== 0;
        ql(x, c, z ? p : !1);
      }
      x = B;
    }
  }
}
function Fa(h) {
  Kl(h, !0);
}
function Kl(h, c) {
  if ((h.f & Ot) !== 0) {
    h.f ^= Ot, (h.f & ot) === 0 && (Je(h, yt), zr.ensure().schedule(h));
    for (var p = h.first; p !== null; ) {
      var w = p.next, x = (p.f & w0) !== 0 || (p.f & Fi) !== 0;
      Kl(p, x ? c : !1), p = w;
    }
    var B = h.nodes && h.nodes.t;
    if (B !== null)
      for (const z of B)
        (z.is_global || c) && z.in();
  }
}
function Na(h, c) {
  if (h.nodes)
    for (var p = h.nodes.start, w = h.nodes.end; p !== null; ) {
      var x = p === w ? null : /* @__PURE__ */ Eo(p);
      c.append(p), p = x;
    }
}
let us = !1, ir = !1;
function sl(h) {
  ir = h;
}
let ae = null, Zi = !1;
function Ci(h) {
  ae = h;
}
let le = null;
function an(h) {
  le = h;
}
let Bi = null;
function Jl(h) {
  ae !== null && (Bi === null ? Bi = [h] : Bi.push(h));
}
let jt = null, fi = 0, wi = null;
function jf(h) {
  wi = h;
}
let Xl = 1, xr = 0, Dr = xr;
function al(h) {
  Dr = h;
}
function $l() {
  return ++Xl;
}
function Bo(h) {
  var c = h.f;
  if ((c & yt) !== 0)
    return !0;
  if (c & Bt && (h.f &= ~Ir), (c & sn) !== 0) {
    for (var p = (
      /** @type {Value[]} */
      h.deps
    ), w = p.length, x = 0; x < w; x++) {
      var B = p[x];
      if (Bo(
        /** @type {Derived} */
        B
      ) && Sl(
        /** @type {Derived} */
        B
      ), B.wv > h.wv)
        return !0;
    }
    (c & Pi) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ri === null && Je(h, ot);
  }
  return !1;
}
function Au(h, c, p = !0) {
  var w = h.reactions;
  if (w !== null && !(Bi !== null && m0.call(Bi, h)))
    for (var x = 0; x < w.length; x++) {
      var B = w[x];
      (B.f & Bt) !== 0 ? Au(
        /** @type {Derived} */
        B,
        c,
        !1
      ) : c === B && (p ? Je(B, yt) : (B.f & ot) !== 0 && Je(B, sn), Da(
        /** @type {Effect} */
        B
      ));
    }
}
function eu(h) {
  var _A;
  var c = jt, p = fi, w = wi, x = ae, B = Bi, z = Kt, Q = Zi, D = Dr, Y = h.f;
  jt = /** @type {null | Value[]} */
  null, fi = 0, wi = null, ae = (Y & (Fi | tr)) === 0 ? h : null, Bi = null, y0(h.ctx), Zi = !1, Dr = ++xr, h.ac !== null && (ws(() => {
    h.ac.abort(En);
  }), h.ac = null);
  try {
    h.f |= fs;
    var J = (
      /** @type {Function} */
      h.fn
    ), oA = J();
    h.f |= Or;
    var nA = h.deps, sA = Ae?.is_fork;
    if (jt !== null) {
      var rA;
      if (sA || mo(h, fi), nA !== null && fi > 0)
        for (nA.length = fi + jt.length, rA = 0; rA < jt.length; rA++)
          nA[fi + rA] = jt[rA];
      else
        h.deps = nA = jt;
      if (Sa() && (h.f & Pi) !== 0)
        for (rA = fi; rA < nA.length; rA++)
          ((_A = nA[rA]).reactions ?? (_A.reactions = [])).push(h);
    } else !sA && nA !== null && fi < nA.length && (mo(h, fi), nA.length = fi);
    if (Pl() && wi !== null && !Zi && nA !== null && (h.f & (Bt | sn | yt)) === 0)
      for (rA = 0; rA < /** @type {Source[]} */
      wi.length; rA++)
        Au(
          wi[rA],
          /** @type {Effect} */
          h
        );
    if (x !== null && x !== h) {
      if (xr++, x.deps !== null)
        for (let aA = 0; aA < p; aA += 1)
          x.deps[aA].rv = xr;
      if (c !== null)
        for (const aA of c)
          aA.rv = xr;
      wi !== null && (w === null ? w = wi : w.push(.../** @type {Source[]} */
      wi));
    }
    return (h.f & $n) !== 0 && (h.f ^= $n), oA;
  } catch (aA) {
    return Bl(aA);
  } finally {
    h.f ^= fs, jt = c, fi = p, wi = w, ae = x, Bi = B, y0(z), Zi = Q, Dr = D;
  }
}
function Yf(h, c) {
  let p = c.reactions;
  if (p !== null) {
    var w = zu.call(p, h);
    if (w !== -1) {
      var x = p.length - 1;
      x === 0 ? p = c.reactions = null : (p[w] = p[x], p.pop());
    }
  }
  if (p === null && (c.f & Bt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (jt === null || !m0.call(jt, c))) {
    var B = (
      /** @type {Derived} */
      c
    );
    (B.f & Pi) !== 0 && (B.f ^= Pi, B.f &= ~Ir), B.v !== ct && Ta(B), Df(B), mo(B, 0);
  }
}
function mo(h, c) {
  var p = h.deps;
  if (p !== null)
    for (var w = c; w < p.length; w++)
      Yf(h, p[w]);
}
function x0(h) {
  var c = h.f;
  if ((c & Ei) === 0) {
    Je(h, ot);
    var p = le, w = us;
    le = h, us = !0;
    try {
      (c & (on | gl)) !== 0 ? Wf(h) : Za(h), jl(h);
      var x = eu(h);
      h.teardown = typeof x == "function" ? x : null, h.wv = Xl;
      var B;
      Iu && cf && (h.f & yt) !== 0 && h.deps;
    } finally {
      us = w, le = p;
    }
  }
}
async function ya() {
  await Promise.resolve(), mf();
}
function V(h) {
  var c = h.f, p = (c & Bt) !== 0;
  if (ae !== null && !Zi) {
    var w = le !== null && (le.f & Ei) !== 0;
    if (!w && (Bi === null || !m0.call(Bi, h))) {
      var x = ae.deps;
      if ((ae.f & fs) !== 0)
        h.rv < xr && (h.rv = xr, jt === null && x !== null && x[fi] === h ? fi++ : jt === null ? jt = [h] : jt.push(h));
      else {
        (ae.deps ?? (ae.deps = [])).push(h);
        var B = h.reactions;
        B === null ? h.reactions = [ae] : m0.call(B, ae) || B.push(ae);
      }
    }
  }
  if (ir && Tr.has(h))
    return Tr.get(h);
  if (p) {
    var z = (
      /** @type {Derived} */
      h
    );
    if (ir) {
      var Q = z.v;
      return ((z.f & ot) === 0 && z.reactions !== null || iu(z)) && (Q = za(z)), Tr.set(z, Q), Q;
    }
    var D = (z.f & Pi) === 0 && !Zi && ae !== null && (us || (ae.f & Pi) !== 0), Y = (z.f & Or) === 0;
    Bo(z) && (D && (z.f |= Pi), Sl(z)), D && !Y && (Ol(z), tu(z));
  }
  if (Ri?.has(h))
    return Ri.get(h);
  if ((h.f & $n) !== 0)
    throw h.v;
  return h.v;
}
function tu(h) {
  if (h.f |= Pi, h.deps !== null)
    for (const c of h.deps)
      (c.reactions ?? (c.reactions = [])).push(h), (c.f & Bt) !== 0 && (c.f & Pi) === 0 && (Ol(
        /** @type {Derived} */
        c
      ), tu(
        /** @type {Derived} */
        c
      ));
}
function iu(h) {
  if (h.v === ct) return !0;
  if (h.deps === null) return !1;
  for (const c of h.deps)
    if (Tr.has(c) || (c.f & Bt) !== 0 && iu(
      /** @type {Derived} */
      c
    ))
      return !0;
  return !1;
}
function ys(h) {
  var c = Zi;
  try {
    return Zi = !0, h();
  } finally {
    Zi = c;
  }
}
const qf = ["touchstart", "touchmove"];
function Kf(h) {
  return qf.includes(h);
}
const kr = Symbol("events"), nu = /* @__PURE__ */ new Set(), ba = /* @__PURE__ */ new Set();
function Jf(h, c, p, w = {}) {
  function x(B) {
    if (w.capture || xa.call(c, B), !B.cancelBubble)
      return ws(() => p?.call(this, B));
  }
  return h.startsWith("pointer") || h.startsWith("touch") || h === "wheel" ? Ar(() => {
    c.addEventListener(h, x, w);
  }) : c.addEventListener(h, x, w), x;
}
function es(h, c, p, w, x) {
  var B = { capture: w, passive: x }, z = Jf(h, c, p, B);
  (c === document.body || // @ts-ignore
  c === window || // @ts-ignore
  c === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  c instanceof HTMLMediaElement) && Oa(() => {
    c.removeEventListener(h, z, B);
  });
}
function yr(h, c, p) {
  (c[kr] ?? (c[kr] = {}))[h] = p;
}
function Xf(h) {
  for (var c = 0; c < h.length; c++)
    nu.add(h[c]);
  for (var p of ba)
    p(h);
}
let ll = null;
function xa(h) {
  var c = this, p = (
    /** @type {Node} */
    c.ownerDocument
  ), w = h.type, x = h.composedPath?.() || [], B = (
    /** @type {null | Element} */
    x[0] || h.target
  );
  ll = h;
  var z = 0, Q = ll === h && h[kr];
  if (Q) {
    var D = x.indexOf(Q);
    if (D !== -1 && (c === document || c === /** @type {any} */
    window)) {
      h[kr] = c;
      return;
    }
    var Y = x.indexOf(c);
    if (Y === -1)
      return;
    D <= Y && (z = D);
  }
  if (B = /** @type {Element} */
  x[z] || h.target, B !== c) {
    Su(h, "currentTarget", {
      configurable: !0,
      get() {
        return B || p;
      }
    });
    var J = ae, oA = le;
    Ci(null), an(null);
    try {
      for (var nA, sA = []; B !== null; ) {
        var rA = B.assignedSlot || B.parentNode || /** @type {any} */
        B.host || null;
        try {
          var _A = B[kr]?.[w];
          _A != null && (!/** @type {any} */
          B.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          h.target === B) && _A.call(B, h);
        } catch (aA) {
          nA ? sA.push(aA) : nA = aA;
        }
        if (h.cancelBubble || rA === c || rA === null)
          break;
        B = rA;
      }
      if (nA) {
        for (let aA of sA)
          queueMicrotask(() => {
            throw aA;
          });
        throw nA;
      }
    } finally {
      h[kr] = c, delete h.currentTarget, Ci(J), an(oA);
    }
  }
}
const $f = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (h) => h
  })
);
function Ah(h) {
  return (
    /** @type {string} */
    $f?.createHTML(h) ?? h
  );
}
function eh(h) {
  var c = Zf("template");
  return c.innerHTML = Ah(h.replaceAll("<!>", "<!---->")), c.content;
}
function ka(h, c) {
  var p = (
    /** @type {Effect} */
    le
  );
  p.nodes === null && (p.nodes = { start: h, end: c, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function He(h, c) {
  var p = (c & of) !== 0, w = (c & sf) !== 0, x, B = !h.startsWith("<!>");
  return () => {
    x === void 0 && (x = eh(B ? h : "<!>" + h), p || (x = /** @type {TemplateNode} */
    /* @__PURE__ */ cs(x)));
    var z = (
      /** @type {TemplateNode} */
      w || Zl ? document.importNode(x, !0) : x.cloneNode(!0)
    );
    if (p) {
      var Q = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cs(z)
      ), D = (
        /** @type {TemplateNode} */
        z.lastChild
      );
      ka(Q, D);
    } else
      ka(z, z);
    return z;
  };
}
function th(h = "") {
  {
    var c = er(h + "");
    return ka(c, c), c;
  }
}
function Re(h, c) {
  h !== null && h.before(
    /** @type {Node} */
    c
  );
}
function wt(h, c) {
  var p = c == null ? "" : typeof c == "object" ? `${c}` : c;
  p !== (h.__t ?? (h.__t = h.nodeValue)) && (h.__t = p, h.nodeValue = `${p}`);
}
function ih(h, c) {
  return nh(h, c);
}
const ts = /* @__PURE__ */ new Map();
function nh(h, { target: c, anchor: p, props: w = {}, events: x, context: B, intro: z = !0, transformError: Q }) {
  Of();
  var D = void 0, Y = Uf(() => {
    var J = p ?? c.appendChild(er());
    bf(
      /** @type {TemplateNode} */
      J,
      {
        pending: () => {
        }
      },
      (sA) => {
        xl({});
        var rA = (
          /** @type {ComponentContext} */
          Kt
        );
        B && (rA.c = B), x && (w.$$events = x), D = h(sA, w) || {}, kl();
      },
      Q
    );
    var oA = /* @__PURE__ */ new Set(), nA = (sA) => {
      for (var rA = 0; rA < sA.length; rA++) {
        var _A = sA[rA];
        if (!oA.has(_A)) {
          oA.add(_A);
          var aA = Kf(_A);
          for (const LA of [c, document]) {
            var $A = ts.get(LA);
            $A === void 0 && ($A = /* @__PURE__ */ new Map(), ts.set(LA, $A));
            var we = $A.get(_A);
            we === void 0 ? (LA.addEventListener(_A, xa, { passive: aA }), $A.set(_A, 1)) : $A.set(_A, we + 1);
          }
        }
      }
    };
    return nA(ms(nu)), ba.add(nA), () => {
      for (var sA of oA)
        for (const aA of [c, document]) {
          var rA = (
            /** @type {Map<string, number>} */
            ts.get(aA)
          ), _A = (
            /** @type {number} */
            rA.get(sA)
          );
          --_A == 0 ? (aA.removeEventListener(sA, xa), rA.delete(sA), rA.size === 0 && ts.delete(aA)) : rA.set(sA, _A);
        }
      ba.delete(nA), J !== p && J.parentNode?.removeChild(J);
    };
  });
  return Pa.set(D, Y), D;
}
let Pa = /* @__PURE__ */ new WeakMap();
function rh(h, c) {
  const p = Pa.get(h);
  return p ? (Pa.delete(h), p(c)) : Promise.resolve();
}
var Qi, tn, di, Lr, ko, Po, vs;
class oh {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(c, p = !0) {
    /** @type {TemplateNode} */
    Oi(this, "anchor");
    /** @type {Map<Batch, Key>} */
    ie(this, Qi, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    ie(this, tn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    ie(this, di, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    ie(this, Lr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    ie(this, ko, !0);
    /**
     * @param {Batch} batch
     */
    ie(this, Po, (c) => {
      if (H(this, Qi).has(c)) {
        var p = (
          /** @type {Key} */
          H(this, Qi).get(c)
        ), w = H(this, tn).get(p);
        if (w)
          Fa(w), H(this, Lr).delete(p);
        else {
          var x = H(this, di).get(p);
          x && (H(this, tn).set(p, x.effect), H(this, di).delete(p), x.fragment.lastChild.remove(), this.anchor.before(x.fragment), w = x.effect);
        }
        for (const [B, z] of H(this, Qi)) {
          if (H(this, Qi).delete(B), B === c)
            break;
          const Q = H(this, di).get(z);
          Q && (Yt(Q.effect), H(this, di).delete(z));
        }
        for (const [B, z] of H(this, tn)) {
          if (B === p || H(this, Lr).has(B)) continue;
          const Q = () => {
            if (Array.from(H(this, Qi).values()).includes(B)) {
              var Y = document.createDocumentFragment();
              Na(z, Y), Y.append(er()), H(this, di).set(B, { effect: z, fragment: Y });
            } else
              Yt(z);
            H(this, Lr).delete(B), H(this, tn).delete(B);
          };
          H(this, ko) || !w ? (H(this, Lr).add(B), Mr(z, Q, !1)) : Q();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    ie(this, vs, (c) => {
      H(this, Qi).delete(c);
      const p = Array.from(H(this, Qi).values());
      for (const [w, x] of H(this, di))
        p.includes(w) || (Yt(x.effect), H(this, di).delete(w));
    });
    this.anchor = c, se(this, ko, p);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(c, p) {
    var w = (
      /** @type {Batch} */
      Ae
    ), x = Hl();
    if (p && !H(this, tn).has(c) && !H(this, di).has(c))
      if (x) {
        var B = document.createDocumentFragment(), z = er();
        B.append(z), H(this, di).set(c, {
          effect: ki(() => p(z)),
          fragment: B
        });
      } else
        H(this, tn).set(
          c,
          ki(() => p(this.anchor))
        );
    if (H(this, Qi).set(w, c), x) {
      for (const [Q, D] of H(this, tn))
        Q === c ? w.unskip_effect(D) : w.skip_effect(D);
      for (const [Q, D] of H(this, di))
        Q === c ? w.unskip_effect(D.effect) : w.skip_effect(D.effect);
      w.oncommit(H(this, Po)), w.ondiscard(H(this, vs));
    } else
      H(this, Po).call(this, w);
  }
}
Qi = new WeakMap(), tn = new WeakMap(), di = new WeakMap(), Lr = new WeakMap(), ko = new WeakMap(), Po = new WeakMap(), vs = new WeakMap();
function kn(h, c, p = !1) {
  var w = new oh(h), x = p ? w0 : 0;
  function B(z, Q) {
    w.ensure(z, Q);
  }
  Ra(() => {
    var z = !1;
    c((Q, D = 0) => {
      z = !0, B(D, Q);
    }), z || B(-1, null);
  }, x);
}
function no(h, c) {
  return c;
}
function sh(h, c, p) {
  for (var w = [], x = c.length, B, z = c.length, Q = 0; Q < x; Q++) {
    let oA = c[Q];
    Mr(
      oA,
      () => {
        if (B) {
          if (B.pending.delete(oA), B.done.add(oA), B.pending.size === 0) {
            var nA = (
              /** @type {Set<EachOutroGroup>} */
              h.outrogroups
            );
            Ea(h, ms(B.done)), nA.delete(B), nA.size === 0 && (h.outrogroups = null);
          }
        } else
          z -= 1;
      },
      !1
    );
  }
  if (z === 0) {
    var D = w.length === 0 && p !== null;
    if (D) {
      var Y = (
        /** @type {Element} */
        p
      ), J = (
        /** @type {Element} */
        Y.parentNode
      );
      Rf(J), J.append(Y), h.items.clear();
    }
    Ea(h, c, !D);
  } else
    B = {
      pending: new Set(c),
      done: /* @__PURE__ */ new Set()
    }, (h.outrogroups ?? (h.outrogroups = /* @__PURE__ */ new Set())).add(B);
}
function Ea(h, c, p = !0) {
  var w;
  if (h.pending.size > 0) {
    w = /* @__PURE__ */ new Set();
    for (const z of h.pending.values())
      for (const Q of z)
        w.add(
          /** @type {EachItem} */
          h.items.get(Q).e
        );
  }
  for (var x = 0; x < c.length; x++) {
    var B = c[x];
    if (w?.has(B)) {
      B.f |= rn;
      const z = document.createDocumentFragment();
      Na(B, z);
    } else
      Yt(c[x], p);
  }
}
var ul;
function ro(h, c, p, w, x, B = null) {
  var z = h, Q = /* @__PURE__ */ new Map(), D = (c & wl) !== 0;
  if (D) {
    var Y = (
      /** @type {Element} */
      h
    );
    z = Y.appendChild(er());
  }
  var J = null, oA = /* @__PURE__ */ Tf(() => {
    var LA = p();
    return La(LA) ? LA : LA == null ? [] : ms(LA);
  }), nA, sA = /* @__PURE__ */ new Map(), rA = !0;
  function _A(LA) {
    (we.effect.f & Ei) === 0 && (we.pending.delete(LA), we.fallback = J, ah(we, nA, z, c, w), J !== null && (nA.length === 0 ? (J.f & rn) === 0 ? Fa(J) : (J.f ^= rn, so(J, null, z)) : Mr(J, () => {
      J = null;
    })));
  }
  function aA(LA) {
    we.pending.delete(LA);
  }
  var $A = Ra(() => {
    nA = /** @type {V[]} */
    V(oA);
    for (var LA = nA.length, fe = /* @__PURE__ */ new Set(), Ee = (
      /** @type {Batch} */
      Ae
    ), ce = Hl(), We = 0; We < LA; We += 1) {
      var Qt = nA[We], bt = w(Qt, We), Me = rA ? null : Q.get(bt);
      Me ? (Me.v && b0(Me.v, Qt), Me.i && b0(Me.i, We), ce && Ee.unskip_effect(Me.e)) : (Me = lh(
        Q,
        rA ? z : ul ?? (ul = er()),
        Qt,
        bt,
        We,
        x,
        c,
        p
      ), rA || (Me.e.f |= rn), Q.set(bt, Me)), fe.add(bt);
    }
    if (LA === 0 && B && !J && (rA ? J = ki(() => B(z)) : (J = ki(() => B(ul ?? (ul = er()))), J.f |= rn)), LA > fe.size && Vu(), !rA)
      if (sA.set(Ee, fe), ce) {
        for (const [Le, ve] of Q)
          fe.has(Le) || Ee.skip_effect(ve.e);
        Ee.oncommit(_A), Ee.ondiscard(aA);
      } else
        _A(Ee);
    V(oA);
  }), we = { effect: $A, items: Q, pending: sA, outrogroups: null, fallback: J };
  rA = !1;
}
function oo(h) {
  for (; h !== null && (h.f & Fi) === 0; )
    h = h.next;
  return h;
}
function ah(h, c, p, w, x) {
  var B = (w & nf) !== 0, z = c.length, Q = h.items, D = oo(h.effect.first), Y, J = null, oA, nA = [], sA = [], rA, _A, aA, $A;
  if (B)
    for ($A = 0; $A < z; $A += 1)
      rA = c[$A], _A = x(rA, $A), aA = /** @type {EachItem} */
      Q.get(_A).e, (aA.f & rn) === 0 && (aA.nodes?.a?.measure(), (oA ?? (oA = /* @__PURE__ */ new Set())).add(aA));
  for ($A = 0; $A < z; $A += 1) {
    if (rA = c[$A], _A = x(rA, $A), aA = /** @type {EachItem} */
    Q.get(_A).e, h.outrogroups !== null)
      for (const Me of h.outrogroups)
        Me.pending.delete(aA), Me.done.delete(aA);
    if ((aA.f & Ot) !== 0 && (Fa(aA), B && (aA.nodes?.a?.unfix(), (oA ?? (oA = /* @__PURE__ */ new Set())).delete(aA))), (aA.f & rn) !== 0)
      if (aA.f ^= rn, aA === D)
        so(aA, null, p);
      else {
        var we = J ? J.next : D;
        aA === h.effect.last && (h.effect.last = aA.prev), aA.prev && (aA.prev.next = aA.next), aA.next && (aA.next.prev = aA.prev), Yn(h, J, aA), Yn(h, aA, we), so(aA, we, p), J = aA, nA = [], sA = [], D = oo(J.next);
        continue;
      }
    if (aA !== D) {
      if (Y !== void 0 && Y.has(aA)) {
        if (nA.length < sA.length) {
          var LA = sA[0], fe;
          J = LA.prev;
          var Ee = nA[0], ce = nA[nA.length - 1];
          for (fe = 0; fe < nA.length; fe += 1)
            so(nA[fe], LA, p);
          for (fe = 0; fe < sA.length; fe += 1)
            Y.delete(sA[fe]);
          Yn(h, Ee.prev, ce.next), Yn(h, J, Ee), Yn(h, ce, LA), D = LA, J = ce, $A -= 1, nA = [], sA = [];
        } else
          Y.delete(aA), so(aA, D, p), Yn(h, aA.prev, aA.next), Yn(h, aA, J === null ? h.effect.first : J.next), Yn(h, J, aA), J = aA;
        continue;
      }
      for (nA = [], sA = []; D !== null && D !== aA; )
        (Y ?? (Y = /* @__PURE__ */ new Set())).add(D), sA.push(D), D = oo(D.next);
      if (D === null)
        continue;
    }
    (aA.f & rn) === 0 && nA.push(aA), J = aA, D = oo(aA.next);
  }
  if (h.outrogroups !== null) {
    for (const Me of h.outrogroups)
      Me.pending.size === 0 && (Ea(h, ms(Me.done)), h.outrogroups?.delete(Me));
    h.outrogroups.size === 0 && (h.outrogroups = null);
  }
  if (D !== null || Y !== void 0) {
    var We = [];
    if (Y !== void 0)
      for (aA of Y)
        (aA.f & Ot) === 0 && We.push(aA);
    for (; D !== null; )
      (D.f & Ot) === 0 && D !== h.fallback && We.push(D), D = oo(D.next);
    var Qt = We.length;
    if (Qt > 0) {
      var bt = (w & wl) !== 0 && z === 0 ? p : null;
      if (B) {
        for ($A = 0; $A < Qt; $A += 1)
          We[$A].nodes?.a?.measure();
        for ($A = 0; $A < Qt; $A += 1)
          We[$A].nodes?.a?.fix();
      }
      sh(h, We, bt);
    }
  }
  B && Ar(() => {
    if (oA !== void 0)
      for (aA of oA)
        aA.nodes?.a?.apply();
  });
}
function lh(h, c, p, w, x, B, z, Q) {
  var D = (z & ef) !== 0 ? (z & rf) === 0 ? /* @__PURE__ */ If(p, !1, !1) : Sr(p) : null, Y = (z & tf) !== 0 ? Sr(x) : null;
  return {
    v: D,
    i: Y,
    e: ki(() => (B(c, D ?? p, Y ?? x, Q), () => {
      h.delete(w);
    }))
  };
}
function so(h, c, p) {
  if (h.nodes)
    for (var w = h.nodes.start, x = h.nodes.end, B = c && (c.f & rn) === 0 ? (
      /** @type {EffectNodes} */
      c.nodes.start
    ) : p; w !== null; ) {
      var z = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Eo(w)
      );
      if (B.before(w), w === x)
        return;
      w = z;
    }
}
function Yn(h, c, p) {
  c === null ? h.effect.first = p : c.next = p, p === null ? h.effect.last = c : p.prev = c;
}
function uh(h, c, p) {
  var w = h == null ? "" : "" + h;
  return w === "" ? null : w;
}
function fh(h, c) {
  return h == null ? null : String(h);
}
function a0(h, c, p, w, x, B) {
  var z = h.__className;
  if (z !== p || z === void 0) {
    var Q = uh(p);
    Q == null ? h.removeAttribute("class") : h.className = Q, h.__className = p;
  }
  return B;
}
function hh(h, c, p, w) {
  var x = h.__style;
  if (x !== c) {
    var B = fh(c);
    B == null ? h.removeAttribute("style") : h.style.cssText = B, h.__style = c;
  }
  return w;
}
function ru(h, c, p = !1) {
  if (h.multiple) {
    if (c == null)
      return;
    if (!La(c))
      return uf();
    for (var w of h.options)
      w.selected = c.includes(co(w));
    return;
  }
  for (w of h.options) {
    var x = co(w);
    if (Sf(x, c)) {
      w.selected = !0;
      return;
    }
  }
  (!p || c !== void 0) && (h.selectedIndex = -1);
}
function ch(h) {
  var c = new MutationObserver(() => {
    ru(h, h.__value);
  });
  c.observe(h, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Oa(() => {
    c.disconnect();
  });
}
function is(h, c, p = c) {
  var w = /* @__PURE__ */ new WeakSet(), x = !0;
  Ul(h, "change", (B) => {
    var z = B ? "[selected]" : ":checked", Q;
    if (h.multiple)
      Q = [].map.call(h.querySelectorAll(z), co);
    else {
      var D = h.querySelector(z) ?? // will fall back to first non-disabled option if no option is selected
      h.querySelector("option:not([disabled])");
      Q = D && co(D);
    }
    p(Q), h.__value = Q, Ae !== null && w.add(Ae);
  }), Vl(() => {
    var B = c();
    if (h === document.activeElement) {
      var z = (
        /** @type {Batch} */
        Ae
      );
      if (w.has(z))
        return;
    }
    if (ru(h, B, x), x && B === void 0) {
      var Q = h.querySelector(":checked");
      Q !== null && (B = co(Q), p(B));
    }
    h.__value = B, x = !1;
  }), ch(h);
}
function co(h) {
  return "__value" in h ? h.__value : h.value;
}
function qn(h, c, p = c) {
  var w = /* @__PURE__ */ new WeakSet();
  Ul(h, "input", async (x) => {
    var B = x ? h.defaultValue : h.value;
    if (B = ua(h) ? fa(B) : B, p(B), Ae !== null && w.add(Ae), await ya(), B !== (B = c())) {
      var z = h.selectionStart, Q = h.selectionEnd, D = h.value.length;
      if (h.value = B ?? "", Q !== null) {
        var Y = h.value.length;
        z === Q && Q === D && Y > D ? (h.selectionStart = Y, h.selectionEnd = Y) : (h.selectionStart = z, h.selectionEnd = Math.min(Q, Y));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ys(c) == null && h.value && (p(ua(h) ? fa(h.value) : h.value), Ae !== null && w.add(Ae)), Qa(() => {
    var x = c();
    if (h === document.activeElement) {
      var B = (
        /** @type {Batch} */
        Ae
      );
      if (w.has(B))
        return;
    }
    ua(h) && x === fa(h.value) || h.type === "date" && !x && !h.value || x !== h.value && (h.value = x ?? "");
  });
}
function ua(h) {
  var c = h.type;
  return c === "number" || c === "range";
}
function fa(h) {
  return h === "" ? null : +h;
}
function fl(h, c) {
  return h === c || h?.[h0] === c;
}
function dh(h = {}, c, p, w) {
  var x = (
    /** @type {ComponentContext} */
    Kt.r
  ), B = (
    /** @type {Effect} */
    le
  );
  return Vl(() => {
    var z, Q;
    return Qa(() => {
      z = Q, Q = [], ys(() => {
        h !== p(...Q) && (c(h, ...Q), z && fl(p(...z), h) && c(null, ...z));
      });
    }), () => {
      let D = B;
      for (; D !== x && D.parent !== null && D.parent.f & ca; )
        D = D.parent;
      const Y = () => {
        Q && fl(p(...Q), h) && c(null, ...Q);
      }, J = D.teardown;
      D.teardown = () => {
        Y(), J?.();
      };
    };
  }), h;
}
function _h(h) {
  Kt === null && Gu(), Gl(() => {
    const c = ys(h);
    if (typeof c == "function") return (
      /** @type {() => void} */
      c
    );
  });
}
const ph = "5";
var vl;
typeof window < "u" && ((vl = window.__svelte ?? (window.__svelte = {})).v ?? (vl.v = /* @__PURE__ */ new Set())).add(ph);
function vh(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var ao = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var mh = ao.exports, hl;
function gh() {
  return hl || (hl = 1, (function(h, c) {
    (function(p, w) {
      w(c);
    })(mh, (function(p) {
      var w = "1.9.4";
      function x(i) {
        var s, u, _, g;
        for (u = 1, _ = arguments.length; u < _; u++) {
          g = arguments[u];
          for (s in g)
            i[s] = g[s];
        }
        return i;
      }
      var B = Object.create || /* @__PURE__ */ (function() {
        function i() {
        }
        return function(s) {
          return i.prototype = s, new i();
        };
      })();
      function z(i, s) {
        var u = Array.prototype.slice;
        if (i.bind)
          return i.bind.apply(i, u.call(arguments, 1));
        var _ = u.call(arguments, 2);
        return function() {
          return i.apply(s, _.length ? _.concat(u.call(arguments)) : arguments);
        };
      }
      var Q = 0;
      function D(i) {
        return "_leaflet_id" in i || (i._leaflet_id = ++Q), i._leaflet_id;
      }
      function Y(i, s, u) {
        var _, g, k, I;
        return I = function() {
          _ = !1, g && (k.apply(u, g), g = !1);
        }, k = function() {
          _ ? g = arguments : (i.apply(u, arguments), setTimeout(I, s), _ = !0);
        }, k;
      }
      function J(i, s, u) {
        var _ = s[1], g = s[0], k = _ - g;
        return i === _ && u ? i : ((i - g) % k + k) % k + g;
      }
      function oA() {
        return !1;
      }
      function nA(i, s) {
        if (s === !1)
          return i;
        var u = Math.pow(10, s === void 0 ? 6 : s);
        return Math.round(i * u) / u;
      }
      function sA(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
      }
      function rA(i) {
        return sA(i).split(/\s+/);
      }
      function _A(i, s) {
        Object.prototype.hasOwnProperty.call(i, "options") || (i.options = i.options ? B(i.options) : {});
        for (var u in s)
          i.options[u] = s[u];
        return i.options;
      }
      function aA(i, s, u) {
        var _ = [];
        for (var g in i)
          _.push(encodeURIComponent(u ? g.toUpperCase() : g) + "=" + encodeURIComponent(i[g]));
        return (!s || s.indexOf("?") === -1 ? "?" : "&") + _.join("&");
      }
      var $A = /\{ *([\w_ -]+) *\}/g;
      function we(i, s) {
        return i.replace($A, function(u, _) {
          var g = s[_];
          if (g === void 0)
            throw new Error("No value provided for variable " + u);
          return typeof g == "function" && (g = g(s)), g;
        });
      }
      var LA = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      };
      function fe(i, s) {
        for (var u = 0; u < i.length; u++)
          if (i[u] === s)
            return u;
        return -1;
      }
      var Ee = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function ce(i) {
        return window["webkit" + i] || window["moz" + i] || window["ms" + i];
      }
      var We = 0;
      function Qt(i) {
        var s = +/* @__PURE__ */ new Date(), u = Math.max(0, 16 - (s - We));
        return We = s + u, window.setTimeout(i, u);
      }
      var bt = window.requestAnimationFrame || ce("RequestAnimationFrame") || Qt, Me = window.cancelAnimationFrame || ce("CancelAnimationFrame") || ce("CancelRequestAnimationFrame") || function(i) {
        window.clearTimeout(i);
      };
      function Le(i, s, u) {
        if (u && bt === Qt)
          i.call(s);
        else
          return bt.call(window, z(i, s));
      }
      function ve(i) {
        i && Me.call(window, i);
      }
      var xt = {
        __proto__: null,
        extend: x,
        create: B,
        bind: z,
        get lastId() {
          return Q;
        },
        stamp: D,
        throttle: Y,
        wrapNum: J,
        falseFn: oA,
        formatNum: nA,
        trim: sA,
        splitWords: rA,
        setOptions: _A,
        getParamString: aA,
        template: we,
        isArray: LA,
        indexOf: fe,
        emptyImageUrl: Ee,
        requestFn: bt,
        cancelFn: Me,
        requestAnimFrame: Le,
        cancelAnimFrame: ve
      };
      function kt() {
      }
      kt.extend = function(i) {
        var s = function() {
          _A(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, u = s.__super__ = this.prototype, _ = B(u);
        _.constructor = s, s.prototype = _;
        for (var g in this)
          Object.prototype.hasOwnProperty.call(this, g) && g !== "prototype" && g !== "__super__" && (s[g] = this[g]);
        return i.statics && x(s, i.statics), i.includes && (Rt(i.includes), x.apply(null, [_].concat(i.includes))), x(_, i), delete _.statics, delete _.includes, _.options && (_.options = u.options ? B(u.options) : {}, x(_.options, i.options)), _._initHooks = [], _.callInitHooks = function() {
          if (!this._initHooksCalled) {
            u.callInitHooks && u.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var k = 0, I = _._initHooks.length; k < I; k++)
              _._initHooks[k].call(this);
          }
        }, s;
      }, kt.include = function(i) {
        var s = this.prototype.options;
        return x(this.prototype, i), i.options && (this.prototype.options = s, this.mergeOptions(i.options)), this;
      }, kt.mergeOptions = function(i) {
        return x(this.prototype.options, i), this;
      }, kt.addInitHook = function(i) {
        var s = Array.prototype.slice.call(arguments, 1), u = typeof i == "function" ? i : function() {
          this[i].apply(this, s);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(u), this;
      };
      function Rt(i) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          i = LA(i) ? i : [i];
          for (var s = 0; s < i.length; s++)
            i[s] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var tt = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(i, s, u) {
          if (typeof i == "object")
            for (var _ in i)
              this._on(_, i[_], s);
          else {
            i = rA(i);
            for (var g = 0, k = i.length; g < k; g++)
              this._on(i[g], s, u);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(i, s, u) {
          if (!arguments.length)
            delete this._events;
          else if (typeof i == "object")
            for (var _ in i)
              this._off(_, i[_], s);
          else {
            i = rA(i);
            for (var g = arguments.length === 1, k = 0, I = i.length; k < I; k++)
              g ? this._off(i[k]) : this._off(i[k], s, u);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(i, s, u, _) {
          if (typeof s != "function") {
            console.warn("wrong listener type: " + typeof s);
            return;
          }
          if (this._listens(i, s, u) === !1) {
            u === this && (u = void 0);
            var g = { fn: s, ctx: u };
            _ && (g.once = !0), this._events = this._events || {}, this._events[i] = this._events[i] || [], this._events[i].push(g);
          }
        },
        _off: function(i, s, u) {
          var _, g, k;
          if (this._events && (_ = this._events[i], !!_)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (g = 0, k = _.length; g < k; g++)
                  _[g].fn = oA;
              delete this._events[i];
              return;
            }
            if (typeof s != "function") {
              console.warn("wrong listener type: " + typeof s);
              return;
            }
            var I = this._listens(i, s, u);
            if (I !== !1) {
              var N = _[I];
              this._firingCount && (N.fn = oA, this._events[i] = _ = _.slice()), _.splice(I, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(i, s, u) {
          if (!this.listens(i, u))
            return this;
          var _ = x({}, s, {
            type: i,
            target: this,
            sourceTarget: s && s.sourceTarget || this
          });
          if (this._events) {
            var g = this._events[i];
            if (g) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var k = 0, I = g.length; k < I; k++) {
                var N = g[k], j = N.fn;
                N.once && this.off(i, j, N.ctx), j.call(N.ctx || this, _);
              }
              this._firingCount--;
            }
          }
          return u && this._propagateEvent(_), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(i, s, u, _) {
          typeof i != "string" && console.warn('"string" type argument expected');
          var g = s;
          typeof s != "function" && (_ = !!s, g = void 0, u = void 0);
          var k = this._events && this._events[i];
          if (k && k.length && this._listens(i, g, u) !== !1)
            return !0;
          if (_) {
            for (var I in this._eventParents)
              if (this._eventParents[I].listens(i, s, u, _))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(i, s, u) {
          if (!this._events)
            return !1;
          var _ = this._events[i] || [];
          if (!s)
            return !!_.length;
          u === this && (u = void 0);
          for (var g = 0, k = _.length; g < k; g++)
            if (_[g].fn === s && _[g].ctx === u)
              return g;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(i, s, u) {
          if (typeof i == "object")
            for (var _ in i)
              this._on(_, i[_], s, !0);
          else {
            i = rA(i);
            for (var g = 0, k = i.length; g < k; g++)
              this._on(i[g], s, u, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(i) {
          return this._eventParents = this._eventParents || {}, this._eventParents[D(i)] = i, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(i) {
          return this._eventParents && delete this._eventParents[D(i)], this;
        },
        _propagateEvent: function(i) {
          for (var s in this._eventParents)
            this._eventParents[s].fire(i.type, x({
              layer: i.target,
              propagatedFrom: i.target
            }, i), !0);
        }
      };
      tt.addEventListener = tt.on, tt.removeEventListener = tt.clearAllEventListeners = tt.off, tt.addOneTimeEventListener = tt.once, tt.fireEvent = tt.fire, tt.hasEventListeners = tt.listens;
      var Xt = kt.extend(tt);
      function QA(i, s, u) {
        this.x = u ? Math.round(i) : i, this.y = u ? Math.round(s) : s;
      }
      var Zr = Math.trunc || function(i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i);
      };
      QA.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new QA(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(i) {
          return this.clone()._add(SA(i));
        },
        _add: function(i) {
          return this.x += i.x, this.y += i.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(i) {
          return this.clone()._subtract(SA(i));
        },
        _subtract: function(i) {
          return this.x -= i.x, this.y -= i.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(i) {
          return this.clone()._divideBy(i);
        },
        _divideBy: function(i) {
          return this.x /= i, this.y /= i, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(i) {
          return this.clone()._multiplyBy(i);
        },
        _multiplyBy: function(i) {
          return this.x *= i, this.y *= i, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(i) {
          return new QA(this.x * i.x, this.y * i.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(i) {
          return new QA(this.x / i.x, this.y / i.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = Zr(this.x), this.y = Zr(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(i) {
          i = SA(i);
          var s = i.x - this.x, u = i.y - this.y;
          return Math.sqrt(s * s + u * u);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(i) {
          return i = SA(i), i.x === this.x && i.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(i) {
          return i = SA(i), Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + nA(this.x) + ", " + nA(this.y) + ")";
        }
      };
      function SA(i, s, u) {
        return i instanceof QA ? i : LA(i) ? new QA(i[0], i[1]) : i == null ? i : typeof i == "object" && "x" in i && "y" in i ? new QA(i.x, i.y) : new QA(i, s, u);
      }
      function ke(i, s) {
        if (i)
          for (var u = s ? [i, s] : i, _ = 0, g = u.length; _ < g; _++)
            this.extend(u[_]);
      }
      ke.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(i) {
          var s, u;
          if (!i)
            return this;
          if (i instanceof QA || typeof i[0] == "number" || "x" in i)
            s = u = SA(i);
          else if (i = Ve(i), s = i.min, u = i.max, !s || !u)
            return this;
          return !this.min && !this.max ? (this.min = s.clone(), this.max = u.clone()) : (this.min.x = Math.min(s.x, this.min.x), this.max.x = Math.max(u.x, this.max.x), this.min.y = Math.min(s.y, this.min.y), this.max.y = Math.max(u.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(i) {
          return SA(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            i
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return SA(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return SA(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(i) {
          var s, u;
          return typeof i[0] == "number" || i instanceof QA ? i = SA(i) : i = Ve(i), i instanceof ke ? (s = i.min, u = i.max) : s = u = i, s.x >= this.min.x && u.x <= this.max.x && s.y >= this.min.y && u.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(i) {
          i = Ve(i);
          var s = this.min, u = this.max, _ = i.min, g = i.max, k = g.x >= s.x && _.x <= u.x, I = g.y >= s.y && _.y <= u.y;
          return k && I;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(i) {
          i = Ve(i);
          var s = this.min, u = this.max, _ = i.min, g = i.max, k = g.x > s.x && _.x < u.x, I = g.y > s.y && _.y < u.y;
          return k && I;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(i) {
          var s = this.min, u = this.max, _ = Math.abs(s.x - u.x) * i, g = Math.abs(s.y - u.y) * i;
          return Ve(
            SA(s.x - _, s.y - g),
            SA(u.x + _, u.y + g)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(i) {
          return i ? (i = Ve(i), this.min.equals(i.getTopLeft()) && this.max.equals(i.getBottomRight())) : !1;
        }
      };
      function Ve(i, s) {
        return !i || i instanceof ke ? i : new ke(i, s);
      }
      function $e(i, s) {
        if (i)
          for (var u = s ? [i, s] : i, _ = 0, g = u.length; _ < g; _++)
            this.extend(u[_]);
      }
      $e.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(i) {
          var s = this._southWest, u = this._northEast, _, g;
          if (i instanceof de)
            _ = i, g = i;
          else if (i instanceof $e) {
            if (_ = i._southWest, g = i._northEast, !_ || !g)
              return this;
          } else
            return i ? this.extend(ee(i) || De(i)) : this;
          return !s && !u ? (this._southWest = new de(_.lat, _.lng), this._northEast = new de(g.lat, g.lng)) : (s.lat = Math.min(_.lat, s.lat), s.lng = Math.min(_.lng, s.lng), u.lat = Math.max(g.lat, u.lat), u.lng = Math.max(g.lng, u.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(i) {
          var s = this._southWest, u = this._northEast, _ = Math.abs(s.lat - u.lat) * i, g = Math.abs(s.lng - u.lng) * i;
          return new $e(
            new de(s.lat - _, s.lng - g),
            new de(u.lat + _, u.lng + g)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new de(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new de(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new de(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(i) {
          typeof i[0] == "number" || i instanceof de || "lat" in i ? i = ee(i) : i = De(i);
          var s = this._southWest, u = this._northEast, _, g;
          return i instanceof $e ? (_ = i.getSouthWest(), g = i.getNorthEast()) : _ = g = i, _.lat >= s.lat && g.lat <= u.lat && _.lng >= s.lng && g.lng <= u.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(i) {
          i = De(i);
          var s = this._southWest, u = this._northEast, _ = i.getSouthWest(), g = i.getNorthEast(), k = g.lat >= s.lat && _.lat <= u.lat, I = g.lng >= s.lng && _.lng <= u.lng;
          return k && I;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(i) {
          i = De(i);
          var s = this._southWest, u = this._northEast, _ = i.getSouthWest(), g = i.getNorthEast(), k = g.lat > s.lat && _.lat < u.lat, I = g.lng > s.lng && _.lng < u.lng;
          return k && I;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(i, s) {
          return i ? (i = De(i), this._southWest.equals(i.getSouthWest(), s) && this._northEast.equals(i.getNorthEast(), s)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function De(i, s) {
        return i instanceof $e ? i : new $e(i, s);
      }
      function de(i, s, u) {
        if (isNaN(i) || isNaN(s))
          throw new Error("Invalid LatLng object: (" + i + ", " + s + ")");
        this.lat = +i, this.lng = +s, u !== void 0 && (this.alt = +u);
      }
      de.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(i, s) {
          if (!i)
            return !1;
          i = ee(i);
          var u = Math.max(
            Math.abs(this.lat - i.lat),
            Math.abs(this.lng - i.lng)
          );
          return u <= (s === void 0 ? 1e-9 : s);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(i) {
          return "LatLng(" + nA(this.lat, i) + ", " + nA(this.lng, i) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(i) {
          return Ai.distance(this, ee(i));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Ai.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(i) {
          var s = 180 * i / 40075017, u = s / Math.cos(Math.PI / 180 * this.lat);
          return De(
            [this.lat - s, this.lng - u],
            [this.lat + s, this.lng + u]
          );
        },
        clone: function() {
          return new de(this.lat, this.lng, this.alt);
        }
      };
      function ee(i, s, u) {
        return i instanceof de ? i : LA(i) && typeof i[0] != "object" ? i.length === 3 ? new de(i[0], i[1], i[2]) : i.length === 2 ? new de(i[0], i[1]) : null : i == null ? i : typeof i == "object" && "lat" in i ? new de(i.lat, "lng" in i ? i.lng : i.lon, i.alt) : s === void 0 ? null : new de(i, s, u);
      }
      var $t = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(i, s) {
          var u = this.projection.project(i), _ = this.scale(s);
          return this.transformation._transform(u, _);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(i, s) {
          var u = this.scale(s), _ = this.transformation.untransform(i, u);
          return this.projection.unproject(_);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(i) {
          return this.projection.project(i);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(i) {
          return this.projection.unproject(i);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(i) {
          return 256 * Math.pow(2, i);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(i) {
          return Math.log(i / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(i) {
          if (this.infinite)
            return null;
          var s = this.projection.bounds, u = this.scale(i), _ = this.transformation.transform(s.min, u), g = this.transformation.transform(s.max, u);
          return new ke(_, g);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(i) {
          var s = this.wrapLng ? J(i.lng, this.wrapLng, !0) : i.lng, u = this.wrapLat ? J(i.lat, this.wrapLat, !0) : i.lat, _ = i.alt;
          return new de(u, s, _);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(i) {
          var s = i.getCenter(), u = this.wrapLatLng(s), _ = s.lat - u.lat, g = s.lng - u.lng;
          if (_ === 0 && g === 0)
            return i;
          var k = i.getSouthWest(), I = i.getNorthEast(), N = new de(k.lat - _, k.lng - g), j = new de(I.lat - _, I.lng - g);
          return new $e(N, j);
        }
      }, Ai = x({}, $t, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(i, s) {
          var u = Math.PI / 180, _ = i.lat * u, g = s.lat * u, k = Math.sin((s.lat - i.lat) * u / 2), I = Math.sin((s.lng - i.lng) * u / 2), N = k * k + Math.cos(_) * Math.cos(g) * I * I, j = 2 * Math.atan2(Math.sqrt(N), Math.sqrt(1 - N));
          return this.R * j;
        }
      }), Fr = 6378137, hn = {
        R: Fr,
        MAX_LATITUDE: 85.0511287798,
        project: function(i) {
          var s = Math.PI / 180, u = this.MAX_LATITUDE, _ = Math.max(Math.min(u, i.lat), -u), g = Math.sin(_ * s);
          return new QA(
            this.R * i.lng * s,
            this.R * Math.log((1 + g) / (1 - g)) / 2
          );
        },
        unproject: function(i) {
          var s = 180 / Math.PI;
          return new de(
            (2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * s,
            i.x * s / this.R
          );
        },
        bounds: (function() {
          var i = Fr * Math.PI;
          return new ke([-i, -i], [i, i]);
        })()
      };
      function cn(i, s, u, _) {
        if (LA(i)) {
          this._a = i[0], this._b = i[1], this._c = i[2], this._d = i[3];
          return;
        }
        this._a = i, this._b = s, this._c = u, this._d = _;
      }
      cn.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(i, s) {
          return this._transform(i.clone(), s);
        },
        // destructive transform (faster)
        _transform: function(i, s) {
          return s = s || 1, i.x = s * (this._a * i.x + this._b), i.y = s * (this._c * i.y + this._d), i;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(i, s) {
          return s = s || 1, new QA(
            (i.x / s - this._b) / this._a,
            (i.y / s - this._d) / this._c
          );
        }
      };
      function Ni(i, s, u, _) {
        return new cn(i, s, u, _);
      }
      var rr = x({}, Ai, {
        code: "EPSG:3857",
        projection: hn,
        transformation: (function() {
          var i = 0.5 / (Math.PI * hn.R);
          return Ni(i, 0.5, -i, 0.5);
        })()
      }), E0 = x({}, rr, {
        code: "EPSG:900913"
      });
      function Nr(i) {
        return document.createElementNS("http://www.w3.org/2000/svg", i);
      }
      function Hr(i, s) {
        var u = "", _, g, k, I, N, j;
        for (_ = 0, k = i.length; _ < k; _++) {
          for (N = i[_], g = 0, I = N.length; g < I; g++)
            j = N[g], u += (g ? "L" : "M") + j.x + " " + j.y;
          u += s ? A.svg ? "z" : "x" : "";
        }
        return u || "M0 0";
      }
      var ei = document.documentElement.style, lA = "ActiveXObject" in window, pA = lA && !document.addEventListener, Be = "msLaunchUri" in navigator && !("documentMode" in document), GA = q("webkit"), YA = q("android"), Pe = q("android 2") || q("android 3"), re = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Ze = YA && q("Google") && re < 537 && !("AudioNode" in window), Ct = !!window.opera, st = !Be && q("chrome"), _e = q("gecko") && !GA && !Ct && !lA, je = !st && q("safari"), _t = q("phantom"), pi = "OTransition" in ei, Hi = navigator.platform.indexOf("Win") === 0, Ti = lA && "transition" in ei, dn = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Pe, ti = "MozPerspective" in ei, Ce = !window.L_DISABLE_3D && (Ti || dn || ti) && !pi && !_t, it = typeof orientation < "u" || q("mobile"), ii = it && GA, $ = it && dn, Zt = !window.PointerEvent && window.MSPointerEvent, Ui = !!(window.PointerEvent || Zt), Dn = "ontouchstart" in window || !!window.TouchEvent, _n = !window.L_NO_TOUCH && (Dn || Ui), pn = it && Ct, vn = it && _e, mn = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Gi = (function() {
        var i = !1;
        try {
          var s = Object.defineProperty({}, "passive", {
            get: function() {
              i = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", oA, s), window.removeEventListener("testPassiveEventSupport", oA, s);
        } catch {
        }
        return i;
      })(), Wi = (function() {
        return !!document.createElement("canvas").getContext;
      })(), ni = !!(document.createElementNS && Nr("svg").createSVGRect), ri = !!ni && (function() {
        var i = document.createElement("div");
        return i.innerHTML = "<svg/>", (i.firstChild && i.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), G = !ni && (function() {
        try {
          var i = document.createElement("div");
          i.innerHTML = '<v:shape adj="1"/>';
          var s = i.firstChild;
          return s.style.behavior = "url(#default#VML)", s && typeof s.adj == "object";
        } catch {
          return !1;
        }
      })(), K = navigator.platform.indexOf("Mac") === 0, uA = navigator.platform.indexOf("Linux") === 0;
      function q(i) {
        return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
      }
      var A = {
        ie: lA,
        ielt9: pA,
        edge: Be,
        webkit: GA,
        android: YA,
        android23: Pe,
        androidStock: Ze,
        opera: Ct,
        chrome: st,
        gecko: _e,
        safari: je,
        phantom: _t,
        opera12: pi,
        win: Hi,
        ie3d: Ti,
        webkit3d: dn,
        gecko3d: ti,
        any3d: Ce,
        mobile: it,
        mobileWebkit: ii,
        mobileWebkit3d: $,
        msPointer: Zt,
        pointer: Ui,
        touch: _n,
        touchNative: Dn,
        mobileOpera: pn,
        mobileGecko: vn,
        retina: mn,
        passiveEvents: Gi,
        canvas: Wi,
        svg: ni,
        vml: G,
        inlineSvg: ri,
        mac: K,
        linux: uA
      }, y = A.msPointer ? "MSPointerDown" : "pointerdown", qA = A.msPointer ? "MSPointerMove" : "pointermove", gA = A.msPointer ? "MSPointerUp" : "pointerup", ne = A.msPointer ? "MSPointerCancel" : "pointercancel", EA = {
        touchstart: y,
        touchmove: qA,
        touchend: gA,
        touchcancel: ne
      }, KA = {
        touchstart: qe,
        touchmove: Ye,
        touchend: Ye,
        touchcancel: Ye
      }, pt = {}, oe = !1;
      function ZA(i, s, u) {
        return s === "touchstart" && he(), KA[s] ? (u = KA[s].bind(this, u), i.addEventListener(EA[s], u, !1), u) : (console.warn("wrong event specified:", s), oA);
      }
      function vt(i, s, u) {
        if (!EA[s]) {
          console.warn("wrong event specified:", s);
          return;
        }
        i.removeEventListener(EA[s], u, !1);
      }
      function In(i) {
        pt[i.pointerId] = i;
      }
      function WA(i) {
        pt[i.pointerId] && (pt[i.pointerId] = i);
      }
      function Oe(i) {
        delete pt[i.pointerId];
      }
      function he() {
        oe || (document.addEventListener(y, In, !0), document.addEventListener(qA, WA, !0), document.addEventListener(gA, Oe, !0), document.addEventListener(ne, Oe, !0), oe = !0);
      }
      function Ye(i, s) {
        if (s.pointerType !== (s.MSPOINTER_TYPE_MOUSE || "mouse")) {
          s.touches = [];
          for (var u in pt)
            s.touches.push(pt[u]);
          s.changedTouches = [s], i(s);
        }
      }
      function qe(i, s) {
        s.MSPOINTER_TYPE_TOUCH && s.pointerType === s.MSPOINTER_TYPE_TOUCH && nt(s), Ye(i, s);
      }
      function B0(i) {
        var s = {}, u, _;
        for (_ in i)
          u = i[_], s[_] = u && u.bind ? u.bind(i) : u;
        return i = s, s.type = "dblclick", s.detail = 2, s.isTrusted = !1, s._simulated = !0, s;
      }
      var Es = 200;
      function Mi(i, s) {
        i.addEventListener("dblclick", s);
        var u = 0, _;
        function g(k) {
          if (k.detail !== 1) {
            _ = k.detail;
            return;
          }
          if (!(k.pointerType === "mouse" || k.sourceCapabilities && !k.sourceCapabilities.firesTouchEvents)) {
            var I = Q0(k);
            if (!(I.some(function(j) {
              return j instanceof HTMLLabelElement && j.attributes.for;
            }) && !I.some(function(j) {
              return j instanceof HTMLInputElement || j instanceof HTMLSelectElement;
            }))) {
              var N = Date.now();
              N - u <= Es ? (_++, _ === 2 && s(B0(k))) : _ = 1, u = N;
            }
          }
        }
        return i.addEventListener("click", g), {
          dblclick: s,
          simDblclick: g
        };
      }
      function OA(i, s) {
        i.removeEventListener("dblclick", s.dblclick), i.removeEventListener("click", s.simDblclick);
      }
      var E = Tt(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), kA = Tt(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), C0 = kA === "webkitTransition" || kA === "OTransition" ? kA + "End" : "transitionend";
      function Lo(i) {
        return typeof i == "string" ? document.getElementById(i) : i;
      }
      function or(i, s) {
        var u = i.style[s] || i.currentStyle && i.currentStyle[s];
        if ((!u || u === "auto") && document.defaultView) {
          var _ = document.defaultView.getComputedStyle(i, null);
          u = _ ? _[s] : null;
        }
        return u === "auto" ? null : u;
      }
      function ue(i, s, u) {
        var _ = document.createElement(i);
        return _.className = s || "", u && u.appendChild(_), _;
      }
      function Ie(i) {
        var s = i.parentNode;
        s && s.removeChild(i);
      }
      function b(i) {
        for (; i.firstChild; )
          i.removeChild(i.firstChild);
      }
      function zn(i) {
        var s = i.parentNode;
        s && s.lastChild !== i && s.appendChild(i);
      }
      function Sn(i) {
        var s = i.parentNode;
        s && s.firstChild !== i && s.insertBefore(i, s.firstChild);
      }
      function L0(i, s) {
        if (i.classList !== void 0)
          return i.classList.contains(s);
        var u = sr(i);
        return u.length > 0 && new RegExp("(^|\\s)" + s + "(\\s|$)").test(u);
      }
      function JA(i, s) {
        if (i.classList !== void 0)
          for (var u = rA(s), _ = 0, g = u.length; _ < g; _++)
            i.classList.add(u[_]);
        else if (!L0(i, s)) {
          var k = sr(i);
          T0(i, (k ? k + " " : "") + s);
        }
      }
      function Fe(i, s) {
        i.classList !== void 0 ? i.classList.remove(s) : T0(i, sA((" " + sr(i) + " ").replace(" " + s + " ", " ")));
      }
      function T0(i, s) {
        i.className.baseVal === void 0 ? i.className = s : i.className.baseVal = s;
      }
      function sr(i) {
        return i.correspondingElement && (i = i.correspondingElement), i.className.baseVal === void 0 ? i.className : i.className.baseVal;
      }
      function Lt(i, s) {
        "opacity" in i.style ? i.style.opacity = s : "filter" in i.style && To(i, s);
      }
      function To(i, s) {
        var u = !1, _ = "DXImageTransform.Microsoft.Alpha";
        try {
          u = i.filters.item(_);
        } catch {
          if (s === 1)
            return;
        }
        s = Math.round(s * 100), u ? (u.Enabled = s !== 100, u.Opacity = s) : i.style.filter += " progid:" + _ + "(opacity=" + s + ")";
      }
      function Tt(i) {
        for (var s = document.documentElement.style, u = 0; u < i.length; u++)
          if (i[u] in s)
            return i[u];
        return !1;
      }
      function Te(i, s, u) {
        var _ = s || new QA(0, 0);
        i.style[E] = (A.ie3d ? "translate(" + _.x + "px," + _.y + "px)" : "translate3d(" + _.x + "px," + _.y + "px,0)") + (u ? " scale(" + u + ")" : "");
      }
      function Ue(i, s) {
        i._leaflet_pos = s, A.any3d ? Te(i, s) : (i.style.left = s.x + "px", i.style.top = s.y + "px");
      }
      function Vi(i) {
        return i._leaflet_pos || new QA(0, 0);
      }
      var ar, gn, M0;
      if ("onselectstart" in document)
        ar = function() {
          NA(window, "selectstart", nt);
        }, gn = function() {
          me(window, "selectstart", nt);
        };
      else {
        var On = Tt(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        ar = function() {
          if (On) {
            var i = document.documentElement.style;
            M0 = i[On], i[On] = "none";
          }
        }, gn = function() {
          On && (document.documentElement.style[On] = M0, M0 = void 0);
        };
      }
      function D0() {
        NA(window, "dragstart", nt);
      }
      function I0() {
        me(window, "dragstart", nt);
      }
      var Ur, ye;
      function lr(i) {
        for (; i.tabIndex === -1; )
          i = i.parentNode;
        i.style && (ur(), Ur = i, ye = i.style.outlineStyle, i.style.outlineStyle = "none", NA(window, "keydown", ur));
      }
      function ur() {
        Ur && (Ur.style.outlineStyle = ye, Ur = void 0, ye = void 0, me(window, "keydown", ur));
      }
      function Mo(i) {
        do
          i = i.parentNode;
        while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
        return i;
      }
      function z0(i) {
        var s = i.getBoundingClientRect();
        return {
          x: s.width / i.offsetWidth || 1,
          y: s.height / i.offsetHeight || 1,
          boundingClientRect: s
        };
      }
      var Bs = {
        __proto__: null,
        TRANSFORM: E,
        TRANSITION: kA,
        TRANSITION_END: C0,
        get: Lo,
        getStyle: or,
        create: ue,
        remove: Ie,
        empty: b,
        toFront: zn,
        toBack: Sn,
        hasClass: L0,
        addClass: JA,
        removeClass: Fe,
        setClass: T0,
        getClass: sr,
        setOpacity: Lt,
        testProp: Tt,
        setTransform: Te,
        setPosition: Ue,
        getPosition: Vi,
        get disableTextSelection() {
          return ar;
        },
        get enableTextSelection() {
          return gn;
        },
        disableImageDrag: D0,
        enableImageDrag: I0,
        preventOutline: lr,
        restoreOutline: ur,
        getSizedParentNode: Mo,
        getScale: z0
      };
      function NA(i, s, u, _) {
        if (s && typeof s == "object")
          for (var g in s)
            O0(i, g, s[g], u);
        else {
          s = rA(s);
          for (var k = 0, I = s.length; k < I; k++)
            O0(i, s[k], u, _);
        }
        return this;
      }
      var Ft = "_leaflet_events";
      function me(i, s, u, _) {
        if (arguments.length === 1)
          Do(i), delete i[Ft];
        else if (s && typeof s == "object")
          for (var g in s)
            Gr(i, g, s[g], u);
        else if (s = rA(s), arguments.length === 2)
          Do(i, function(N) {
            return fe(s, N) !== -1;
          });
        else
          for (var k = 0, I = s.length; k < I; k++)
            Gr(i, s[k], u, _);
        return this;
      }
      function Do(i, s) {
        for (var u in i[Ft]) {
          var _ = u.split(/\d/)[0];
          (!s || s(_)) && Gr(i, _, null, null, u);
        }
      }
      var S0 = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function O0(i, s, u, _) {
        var g = s + D(u) + (_ ? "_" + D(_) : "");
        if (i[Ft] && i[Ft][g])
          return this;
        var k = function(N) {
          return u.call(_ || i, N || window.event);
        }, I = k;
        !A.touchNative && A.pointer && s.indexOf("touch") === 0 ? k = ZA(i, s, k) : A.touch && s === "dblclick" ? k = Mi(i, k) : "addEventListener" in i ? s === "touchstart" || s === "touchmove" || s === "wheel" || s === "mousewheel" ? i.addEventListener(S0[s] || s, k, A.passiveEvents ? { passive: !1 } : !1) : s === "mouseenter" || s === "mouseleave" ? (k = function(N) {
          N = N || window.event, Z0(i, N) && I(N);
        }, i.addEventListener(S0[s], k, !1)) : i.addEventListener(s, I, !1) : i.attachEvent("on" + s, k), i[Ft] = i[Ft] || {}, i[Ft][g] = k;
      }
      function Gr(i, s, u, _, g) {
        g = g || s + D(u) + (_ ? "_" + D(_) : "");
        var k = i[Ft] && i[Ft][g];
        if (!k)
          return this;
        !A.touchNative && A.pointer && s.indexOf("touch") === 0 ? vt(i, s, k) : A.touch && s === "dblclick" ? OA(i, k) : "removeEventListener" in i ? i.removeEventListener(S0[s] || s, k, !1) : i.detachEvent("on" + s, k), i[Ft][g] = null;
      }
      function wn(i) {
        return i.stopPropagation ? i.stopPropagation() : i.originalEvent ? i.originalEvent._stopped = !0 : i.cancelBubble = !0, this;
      }
      function fr(i) {
        return O0(i, "wheel", wn), this;
      }
      function yn(i) {
        return NA(i, "mousedown touchstart dblclick contextmenu", wn), i._leaflet_disable_click = !0, this;
      }
      function nt(i) {
        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, this;
      }
      function ji(i) {
        return nt(i), wn(i), this;
      }
      function Q0(i) {
        if (i.composedPath)
          return i.composedPath();
        for (var s = [], u = i.target; u; )
          s.push(u), u = u.parentNode;
        return s;
      }
      function R0(i, s) {
        if (!s)
          return new QA(i.clientX, i.clientY);
        var u = z0(s), _ = u.boundingClientRect;
        return new QA(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (i.clientX - _.left) / u.x - s.clientLeft,
          (i.clientY - _.top) / u.y - s.clientTop
        );
      }
      var Cs = A.linux && A.chrome ? window.devicePixelRatio : A.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Io(i) {
        return A.edge ? i.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          i.deltaY && i.deltaMode === 0 ? -i.deltaY / Cs : (
            // Pixels
            i.deltaY && i.deltaMode === 1 ? -i.deltaY * 20 : (
              // Lines
              i.deltaY && i.deltaMode === 2 ? -i.deltaY * 60 : (
                // Pages
                i.deltaX || i.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  i.wheelDelta ? (i.wheelDeltaY || i.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    i.detail && Math.abs(i.detail) < 32765 ? -i.detail * 20 : (
                      // Legacy Moz lines
                      i.detail ? i.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function Z0(i, s) {
        var u = s.relatedTarget;
        if (!u)
          return !0;
        try {
          for (; u && u !== i; )
            u = u.parentNode;
        } catch {
          return !1;
        }
        return u !== i;
      }
      var Ls = {
        __proto__: null,
        on: NA,
        off: me,
        stopPropagation: wn,
        disableScrollPropagation: fr,
        disableClickPropagation: yn,
        preventDefault: nt,
        stop: ji,
        getPropagationPath: Q0,
        getMousePosition: R0,
        getWheelDelta: Io,
        isExternalTarget: Z0,
        addListener: NA,
        removeListener: me
      }, rt = Xt.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(i, s, u, _) {
          this.stop(), this._el = i, this._inProgress = !0, this._duration = u || 0.25, this._easeOutPower = 1 / Math.max(_ || 0.5, 0.2), this._startPos = Vi(i), this._offset = s.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = Le(this._animate, this), this._step();
        },
        _step: function(i) {
          var s = +/* @__PURE__ */ new Date() - this._startTime, u = this._duration * 1e3;
          s < u ? this._runFrame(this._easeOut(s / u), i) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(i, s) {
          var u = this._startPos.add(this._offset.multiplyBy(i));
          s && u._round(), Ue(this._el, u), this.fire("step");
        },
        _complete: function() {
          ve(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(i) {
          return 1 - Math.pow(1 - i, this._easeOutPower);
        }
      }), XA = Xt.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: rr,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(i, s) {
          s = _A(this, s), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(i), this._initLayout(), this._onResize = z(this._onResize, this), this._initEvents(), s.maxBounds && this.setMaxBounds(s.maxBounds), s.zoom !== void 0 && (this._zoom = this._limitZoom(s.zoom)), s.center && s.zoom !== void 0 && this.setView(ee(s.center), s.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = kA && A.any3d && !A.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), NA(this._proxy, C0, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(i, s, u) {
          if (s = s === void 0 ? this._zoom : this._limitZoom(s), i = this._limitCenter(ee(i), s, this.options.maxBounds), u = u || {}, this._stop(), this._loaded && !u.reset && u !== !0) {
            u.animate !== void 0 && (u.zoom = x({ animate: u.animate }, u.zoom), u.pan = x({ animate: u.animate, duration: u.duration }, u.pan));
            var _ = this._zoom !== s ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, s, u.zoom) : this._tryAnimatedPan(i, u.pan);
            if (_)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(i, s, u.pan && u.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(i, s) {
          return this._loaded ? this.setView(this.getCenter(), i, { zoom: s }) : (this._zoom = i, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(i, s) {
          return i = i || (A.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + i, s);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(i, s) {
          return i = i || (A.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - i, s);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(i, s, u) {
          var _ = this.getZoomScale(s), g = this.getSize().divideBy(2), k = i instanceof QA ? i : this.latLngToContainerPoint(i), I = k.subtract(g).multiplyBy(1 - 1 / _), N = this.containerPointToLatLng(g.add(I));
          return this.setView(N, s, { zoom: u });
        },
        _getBoundsCenterZoom: function(i, s) {
          s = s || {}, i = i.getBounds ? i.getBounds() : De(i);
          var u = SA(s.paddingTopLeft || s.padding || [0, 0]), _ = SA(s.paddingBottomRight || s.padding || [0, 0]), g = this.getBoundsZoom(i, !1, u.add(_));
          if (g = typeof s.maxZoom == "number" ? Math.min(s.maxZoom, g) : g, g === 1 / 0)
            return {
              center: i.getCenter(),
              zoom: g
            };
          var k = _.subtract(u).divideBy(2), I = this.project(i.getSouthWest(), g), N = this.project(i.getNorthEast(), g), j = this.unproject(I.add(N).divideBy(2).add(k), g);
          return {
            center: j,
            zoom: g
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(i, s) {
          if (i = De(i), !i.isValid())
            throw new Error("Bounds are not valid.");
          var u = this._getBoundsCenterZoom(i, s);
          return this.setView(u.center, u.zoom, s);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(i) {
          return this.fitBounds([[-90, -180], [90, 180]], i);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(i, s) {
          return this.setView(i, this._zoom, { pan: s });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(i, s) {
          if (i = SA(i).round(), s = s || {}, !i.x && !i.y)
            return this.fire("moveend");
          if (s.animate !== !0 && !this.getSize().contains(i))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(i)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new rt(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), s.noMoveStart || this.fire("movestart"), s.animate !== !1) {
            JA(this._mapPane, "leaflet-pan-anim");
            var u = this._getMapPanePos().subtract(i).round();
            this._panAnim.run(this._mapPane, u, s.duration || 0.25, s.easeLinearity);
          } else
            this._rawPanBy(i), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(i, s, u) {
          if (u = u || {}, u.animate === !1 || !A.any3d)
            return this.setView(i, s, u);
          this._stop();
          var _ = this.project(this.getCenter()), g = this.project(i), k = this.getSize(), I = this._zoom;
          i = ee(i), s = s === void 0 ? I : s;
          var N = Math.max(k.x, k.y), j = N * this.getZoomScale(I, s), AA = g.distanceTo(_) || 1, hA = 1.42, TA = hA * hA;
          function VA(Ne) {
            var ze = Ne ? -1 : 1, ta = Ne ? j : N, ia = j * j - N * N + ze * TA * TA * AA * AA, gr = 2 * ta * TA * AA, Et = ia / gr, Xo = Math.sqrt(Et * Et + 1) - Et, na = Xo < 1e-9 ? -18 : Math.log(Xo);
            return na;
          }
          function lt(Ne) {
            return (Math.exp(Ne) - Math.exp(-Ne)) / 2;
          }
          function At(Ne) {
            return (Math.exp(Ne) + Math.exp(-Ne)) / 2;
          }
          function Gt(Ne) {
            return lt(Ne) / At(Ne);
          }
          var Pt = VA(0);
          function Un(Ne) {
            return N * (At(Pt) / At(Pt + hA * Ne));
          }
          function Xs(Ne) {
            return N * (At(Pt) * Gt(Pt + hA * Ne) - lt(Pt)) / TA;
          }
          function $s(Ne) {
            return 1 - Math.pow(1 - Ne, 1.5);
          }
          var Aa = Date.now(), Jo = (VA(1) - Pt) / hA, ea = u.duration ? 1e3 * u.duration : 1e3 * Jo * 0.8;
          function io() {
            var Ne = (Date.now() - Aa) / ea, ze = $s(Ne) * Jo;
            Ne <= 1 ? (this._flyToFrame = Le(io, this), this._move(
              this.unproject(_.add(g.subtract(_).multiplyBy(Xs(ze) / AA)), I),
              this.getScaleZoom(N / Un(ze), I),
              { flyTo: !0 }
            )) : this._move(i, s)._moveEnd(!0);
          }
          return this._moveStart(!0, u.noMoveStart), io.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(i, s) {
          var u = this._getBoundsCenterZoom(i, s);
          return this.flyTo(u.center, u.zoom, s);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(i) {
          return i = De(i), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), i.isValid() ? (this.options.maxBounds = i, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(i) {
          var s = this.options.minZoom;
          return this.options.minZoom = i, this._loaded && s !== i && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(i) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(i) {
          var s = this.options.maxZoom;
          return this.options.maxZoom = i, this._loaded && s !== i && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(i) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(i, s) {
          this._enforcingBounds = !0;
          var u = this.getCenter(), _ = this._limitCenter(u, this._zoom, De(i));
          return u.equals(_) || this.panTo(_, s), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(i, s) {
          s = s || {};
          var u = SA(s.paddingTopLeft || s.padding || [0, 0]), _ = SA(s.paddingBottomRight || s.padding || [0, 0]), g = this.project(this.getCenter()), k = this.project(i), I = this.getPixelBounds(), N = Ve([I.min.add(u), I.max.subtract(_)]), j = N.getSize();
          if (!N.contains(k)) {
            this._enforcingBounds = !0;
            var AA = k.subtract(N.getCenter()), hA = N.extend(k).getSize().subtract(j);
            g.x += AA.x < 0 ? -hA.x : hA.x, g.y += AA.y < 0 ? -hA.y : hA.y, this.panTo(this.unproject(g), s), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(i) {
          if (!this._loaded)
            return this;
          i = x({
            animate: !1,
            pan: !0
          }, i === !0 ? { animate: !0 } : i);
          var s = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var u = this.getSize(), _ = s.divideBy(2).round(), g = u.divideBy(2).round(), k = _.subtract(g);
          return !k.x && !k.y ? this : (i.animate && i.pan ? this.panBy(k) : (i.pan && this._rawPanBy(k), this.fire("move"), i.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(z(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: s,
            newSize: u
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(i) {
          if (i = this._locateOptions = x({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, i), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var s = z(this._handleGeolocationResponse, this), u = z(this._handleGeolocationError, this);
          return i.watch ? this._locationWatchId = navigator.geolocation.watchPosition(s, u, i) : navigator.geolocation.getCurrentPosition(s, u, i), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(i) {
          if (this._container._leaflet_id) {
            var s = i.code, u = i.message || (s === 1 ? "permission denied" : s === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: s,
              message: "Geolocation error: " + u + "."
            });
          }
        },
        _handleGeolocationResponse: function(i) {
          if (this._container._leaflet_id) {
            var s = i.coords.latitude, u = i.coords.longitude, _ = new de(s, u), g = _.toBounds(i.coords.accuracy * 2), k = this._locateOptions;
            if (k.setView) {
              var I = this.getBoundsZoom(g);
              this.setView(_, k.maxZoom ? Math.min(I, k.maxZoom) : I);
            }
            var N = {
              latlng: _,
              bounds: g,
              timestamp: i.timestamp
            };
            for (var j in i.coords)
              typeof i.coords[j] == "number" && (N[j] = i.coords[j]);
            this.fire("locationfound", N);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(i, s) {
          if (!s)
            return this;
          var u = this[i] = new s(this);
          return this._handlers.push(u), this.options[i] && u.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Ie(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (ve(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var i;
          for (i in this._layers)
            this._layers[i].remove();
          for (i in this._panes)
            Ie(this._panes[i]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(i, s) {
          var u = "leaflet-pane" + (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""), _ = ue("div", u, s || this._mapPane);
          return i && (this._panes[i] = _), _;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var i = this.getPixelBounds(), s = this.unproject(i.getBottomLeft()), u = this.unproject(i.getTopRight());
          return new $e(s, u);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(i, s, u) {
          i = De(i), u = SA(u || [0, 0]);
          var _ = this.getZoom() || 0, g = this.getMinZoom(), k = this.getMaxZoom(), I = i.getNorthWest(), N = i.getSouthEast(), j = this.getSize().subtract(u), AA = Ve(this.project(N, _), this.project(I, _)).getSize(), hA = A.any3d ? this.options.zoomSnap : 1, TA = j.x / AA.x, VA = j.y / AA.y, lt = s ? Math.max(TA, VA) : Math.min(TA, VA);
          return _ = this.getScaleZoom(lt, _), hA && (_ = Math.round(_ / (hA / 100)) * (hA / 100), _ = s ? Math.ceil(_ / hA) * hA : Math.floor(_ / hA) * hA), Math.max(g, Math.min(k, _));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new QA(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(i, s) {
          var u = this._getTopLeftPoint(i, s);
          return new ke(u, u.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(i) {
          return this.options.crs.getProjectedBounds(i === void 0 ? this.getZoom() : i);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(i) {
          return typeof i == "string" ? this._panes[i] : i;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(i, s) {
          var u = this.options.crs;
          return s = s === void 0 ? this._zoom : s, u.scale(i) / u.scale(s);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(i, s) {
          var u = this.options.crs;
          s = s === void 0 ? this._zoom : s;
          var _ = u.zoom(i * u.scale(s));
          return isNaN(_) ? 1 / 0 : _;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(i, s) {
          return s = s === void 0 ? this._zoom : s, this.options.crs.latLngToPoint(ee(i), s);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(i, s) {
          return s = s === void 0 ? this._zoom : s, this.options.crs.pointToLatLng(SA(i), s);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(i) {
          var s = SA(i).add(this.getPixelOrigin());
          return this.unproject(s);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(i) {
          var s = this.project(ee(i))._round();
          return s._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(i) {
          return this.options.crs.wrapLatLng(ee(i));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(i) {
          return this.options.crs.wrapLatLngBounds(De(i));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(i, s) {
          return this.options.crs.distance(ee(i), ee(s));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(i) {
          return SA(i).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(i) {
          return SA(i).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(i) {
          var s = this.containerPointToLayerPoint(SA(i));
          return this.layerPointToLatLng(s);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(i) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(ee(i)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(i) {
          return R0(i, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(i) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(i) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
        },
        // map initialization methods
        _initContainer: function(i) {
          var s = this._container = Lo(i);
          if (s) {
            if (s._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          NA(s, "scroll", this._onScroll, this), this._containerId = D(s);
        },
        _initLayout: function() {
          var i = this._container;
          this._fadeAnimated = this.options.fadeAnimation && A.any3d, JA(i, "leaflet-container" + (A.touch ? " leaflet-touch" : "") + (A.retina ? " leaflet-retina" : "") + (A.ielt9 ? " leaflet-oldie" : "") + (A.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var s = or(i, "position");
          s !== "absolute" && s !== "relative" && s !== "fixed" && s !== "sticky" && (i.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var i = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Ue(this._mapPane, new QA(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (JA(i.markerPane, "leaflet-zoom-hide"), JA(i.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(i, s, u) {
          Ue(this._mapPane, new QA(0, 0));
          var _ = !this._loaded;
          this._loaded = !0, s = this._limitZoom(s), this.fire("viewprereset");
          var g = this._zoom !== s;
          this._moveStart(g, u)._move(i, s)._moveEnd(g), this.fire("viewreset"), _ && this.fire("load");
        },
        _moveStart: function(i, s) {
          return i && this.fire("zoomstart"), s || this.fire("movestart"), this;
        },
        _move: function(i, s, u, _) {
          s === void 0 && (s = this._zoom);
          var g = this._zoom !== s;
          return this._zoom = s, this._lastCenter = i, this._pixelOrigin = this._getNewPixelOrigin(i), _ ? u && u.pinch && this.fire("zoom", u) : ((g || u && u.pinch) && this.fire("zoom", u), this.fire("move", u)), this;
        },
        _moveEnd: function(i) {
          return i && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return ve(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(i) {
          Ue(this._mapPane, this._getMapPanePos().subtract(i));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(i) {
          this._targets = {}, this._targets[D(this._container)] = this;
          var s = i ? me : NA;
          s(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && s(window, "resize", this._onResize, this), A.any3d && this.options.transform3DLimit && (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          ve(this._resizeRequest), this._resizeRequest = Le(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var i = this._getMapPanePos();
          Math.max(Math.abs(i.x), Math.abs(i.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(i, s) {
          for (var u = [], _, g = s === "mouseout" || s === "mouseover", k = i.target || i.srcElement, I = !1; k; ) {
            if (_ = this._targets[D(k)], _ && (s === "click" || s === "preclick") && this._draggableMoved(_)) {
              I = !0;
              break;
            }
            if (_ && _.listens(s, !0) && (g && !Z0(k, i) || (u.push(_), g)) || k === this._container)
              break;
            k = k.parentNode;
          }
          return !u.length && !I && !g && this.listens(s, !0) && (u = [this]), u;
        },
        _isClickDisabled: function(i) {
          for (; i && i !== this._container; ) {
            if (i._leaflet_disable_click)
              return !0;
            i = i.parentNode;
          }
        },
        _handleDOMEvent: function(i) {
          var s = i.target || i.srcElement;
          if (!(!this._loaded || s._leaflet_disable_events || i.type === "click" && this._isClickDisabled(s))) {
            var u = i.type;
            u === "mousedown" && lr(s), this._fireDOMEvent(i, u);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(i, s, u) {
          if (i.type === "click") {
            var _ = x({}, i);
            _.type = "preclick", this._fireDOMEvent(_, _.type, u);
          }
          var g = this._findEventTargets(i, s);
          if (u) {
            for (var k = [], I = 0; I < u.length; I++)
              u[I].listens(s, !0) && k.push(u[I]);
            g = k.concat(g);
          }
          if (g.length) {
            s === "contextmenu" && nt(i);
            var N = g[0], j = {
              originalEvent: i
            };
            if (i.type !== "keypress" && i.type !== "keydown" && i.type !== "keyup") {
              var AA = N.getLatLng && (!N._radius || N._radius <= 10);
              j.containerPoint = AA ? this.latLngToContainerPoint(N.getLatLng()) : this.mouseEventToContainerPoint(i), j.layerPoint = this.containerPointToLayerPoint(j.containerPoint), j.latlng = AA ? N.getLatLng() : this.layerPointToLatLng(j.layerPoint);
            }
            for (I = 0; I < g.length; I++)
              if (g[I].fire(s, j, !0), j.originalEvent._stopped || g[I].options.bubblingMouseEvents === !1 && fe(this._mouseEvents, s) !== -1)
                return;
          }
        },
        _draggableMoved: function(i) {
          return i = i.dragging && i.dragging.enabled() ? i : this, i.dragging && i.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var i = 0, s = this._handlers.length; i < s; i++)
            this._handlers[i].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(i, s) {
          return this._loaded ? i.call(s || this, { target: this }) : this.on("load", i, s), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return Vi(this._mapPane) || new QA(0, 0);
        },
        _moved: function() {
          var i = this._getMapPanePos();
          return i && !i.equals([0, 0]);
        },
        _getTopLeftPoint: function(i, s) {
          var u = i && s !== void 0 ? this._getNewPixelOrigin(i, s) : this.getPixelOrigin();
          return u.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(i, s) {
          var u = this.getSize()._divideBy(2);
          return this.project(i, s)._subtract(u)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(i, s, u) {
          var _ = this._getNewPixelOrigin(u, s);
          return this.project(i, s)._subtract(_);
        },
        _latLngBoundsToNewLayerBounds: function(i, s, u) {
          var _ = this._getNewPixelOrigin(u, s);
          return Ve([
            this.project(i.getSouthWest(), s)._subtract(_),
            this.project(i.getNorthWest(), s)._subtract(_),
            this.project(i.getSouthEast(), s)._subtract(_),
            this.project(i.getNorthEast(), s)._subtract(_)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(i) {
          return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(i, s, u) {
          if (!u)
            return i;
          var _ = this.project(i, s), g = this.getSize().divideBy(2), k = new ke(_.subtract(g), _.add(g)), I = this._getBoundsOffset(k, u, s);
          return Math.abs(I.x) <= 1 && Math.abs(I.y) <= 1 ? i : this.unproject(_.add(I), s);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(i, s) {
          if (!s)
            return i;
          var u = this.getPixelBounds(), _ = new ke(u.min.add(i), u.max.add(i));
          return i.add(this._getBoundsOffset(_, s));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(i, s, u) {
          var _ = Ve(
            this.project(s.getNorthEast(), u),
            this.project(s.getSouthWest(), u)
          ), g = _.min.subtract(i.min), k = _.max.subtract(i.max), I = this._rebound(g.x, -k.x), N = this._rebound(g.y, -k.y);
          return new QA(I, N);
        },
        _rebound: function(i, s) {
          return i + s > 0 ? Math.round(i - s) / 2 : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(s));
        },
        _limitZoom: function(i) {
          var s = this.getMinZoom(), u = this.getMaxZoom(), _ = A.any3d ? this.options.zoomSnap : 1;
          return _ && (i = Math.round(i / _) * _), Math.max(s, Math.min(u, i));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          Fe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(i, s) {
          var u = this._getCenterOffset(i)._trunc();
          return (s && s.animate) !== !0 && !this.getSize().contains(u) ? !1 : (this.panBy(u, s), !0);
        },
        _createAnimProxy: function() {
          var i = this._proxy = ue("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(i), this.on("zoomanim", function(s) {
            var u = E, _ = this._proxy.style[u];
            Te(this._proxy, this.project(s.center, s.zoom), this.getZoomScale(s.zoom, 1)), _ === this._proxy.style[u] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          Ie(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var i = this.getCenter(), s = this.getZoom();
          Te(this._proxy, this.project(i, s), this.getZoomScale(s, 1));
        },
        _catchTransitionEnd: function(i) {
          this._animatingZoom && i.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(i, s, u) {
          if (this._animatingZoom)
            return !0;
          if (u = u || {}, !this._zoomAnimated || u.animate === !1 || this._nothingToAnimate() || Math.abs(s - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var _ = this.getZoomScale(s), g = this._getCenterOffset(i)._divideBy(1 - 1 / _);
          return u.animate !== !0 && !this.getSize().contains(g) ? !1 : (Le(function() {
            this._moveStart(!0, u.noMoveStart || !1)._animateZoom(i, s, !0);
          }, this), !0);
        },
        _animateZoom: function(i, s, u, _) {
          this._mapPane && (u && (this._animatingZoom = !0, this._animateToCenter = i, this._animateToZoom = s, JA(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: i,
            zoom: s,
            noUpdate: _
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(z(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && Fe(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function mt(i, s) {
        return new XA(i, s);
      }
      var Mt = kt.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(i) {
          _A(this, i);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(i) {
          var s = this._map;
          return s && s.removeControl(this), this.options.position = i, s && s.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(i) {
          this.remove(), this._map = i;
          var s = this._container = this.onAdd(i), u = this.getPosition(), _ = i._controlCorners[u];
          return JA(s, "leaflet-control"), u.indexOf("bottom") !== -1 ? _.insertBefore(s, _.firstChild) : _.appendChild(s), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (Ie(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(i) {
          this._map && i && i.screenX > 0 && i.screenY > 0 && this._map.getContainer().focus();
        }
      }), Qn = function(i) {
        return new Mt(i);
      };
      XA.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(i) {
          return i.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(i) {
          return i.remove(), this;
        },
        _initControlPos: function() {
          var i = this._controlCorners = {}, s = "leaflet-", u = this._controlContainer = ue("div", s + "control-container", this._container);
          function _(g, k) {
            var I = s + g + " " + s + k;
            i[g + k] = ue("div", I, u);
          }
          _("top", "left"), _("top", "right"), _("bottom", "left"), _("bottom", "right");
        },
        _clearControlPos: function() {
          for (var i in this._controlCorners)
            Ie(this._controlCorners[i]);
          Ie(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var hr = Mt.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(i, s, u, _) {
            return u < _ ? -1 : _ < u ? 1 : 0;
          }
        },
        initialize: function(i, s, u) {
          _A(this, u), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var _ in i)
            this._addLayer(i[_], _);
          for (_ in s)
            this._addLayer(s[_], _, !0);
        },
        onAdd: function(i) {
          this._initLayout(), this._update(), this._map = i, i.on("zoomend", this._checkDisabledLayers, this);
          for (var s = 0; s < this._layers.length; s++)
            this._layers[s].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(i) {
          return Mt.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var i = 0; i < this._layers.length; i++)
            this._layers[i].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(i, s) {
          return this._addLayer(i, s), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(i, s) {
          return this._addLayer(i, s, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(i) {
          i.off("add remove", this._onLayerChange, this);
          var s = this._getLayer(D(i));
          return s && this._layers.splice(this._layers.indexOf(s), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          JA(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var i = this._map.getSize().y - (this._container.offsetTop + 50);
          return i < this._section.clientHeight ? (JA(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = i + "px") : Fe(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return Fe(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var i = "leaflet-control-layers", s = this._container = ue("div", i), u = this.options.collapsed;
          s.setAttribute("aria-haspopup", !0), yn(s), fr(s);
          var _ = this._section = ue("section", i + "-list");
          u && (this._map.on("click", this.collapse, this), NA(s, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var g = this._layersLink = ue("a", i + "-toggle", s);
          g.href = "#", g.title = "Layers", g.setAttribute("role", "button"), NA(g, {
            keydown: function(k) {
              k.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(k) {
              nt(k), this._expandSafely();
            }
          }, this), u || this.expand(), this._baseLayersList = ue("div", i + "-base", _), this._separator = ue("div", i + "-separator", _), this._overlaysList = ue("div", i + "-overlays", _), s.appendChild(_);
        },
        _getLayer: function(i) {
          for (var s = 0; s < this._layers.length; s++)
            if (this._layers[s] && D(this._layers[s].layer) === i)
              return this._layers[s];
        },
        _addLayer: function(i, s, u) {
          this._map && i.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: i,
            name: s,
            overlay: u
          }), this.options.sortLayers && this._layers.sort(z(function(_, g) {
            return this.options.sortFunction(_.layer, g.layer, _.name, g.name);
          }, this)), this.options.autoZIndex && i.setZIndex && (this._lastZIndex++, i.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          b(this._baseLayersList), b(this._overlaysList), this._layerControlInputs = [];
          var i, s, u, _, g = 0;
          for (u = 0; u < this._layers.length; u++)
            _ = this._layers[u], this._addItem(_), s = s || _.overlay, i = i || !_.overlay, g += _.overlay ? 0 : 1;
          return this.options.hideSingleBase && (i = i && g > 1, this._baseLayersList.style.display = i ? "" : "none"), this._separator.style.display = s && i ? "" : "none", this;
        },
        _onLayerChange: function(i) {
          this._handlingClick || this._update();
          var s = this._getLayer(D(i.target)), u = s.overlay ? i.type === "add" ? "overlayadd" : "overlayremove" : i.type === "add" ? "baselayerchange" : null;
          u && this._map.fire(u, s);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(i, s) {
          var u = '<input type="radio" class="leaflet-control-layers-selector" name="' + i + '"' + (s ? ' checked="checked"' : "") + "/>", _ = document.createElement("div");
          return _.innerHTML = u, _.firstChild;
        },
        _addItem: function(i) {
          var s = document.createElement("label"), u = this._map.hasLayer(i.layer), _;
          i.overlay ? (_ = document.createElement("input"), _.type = "checkbox", _.className = "leaflet-control-layers-selector", _.defaultChecked = u) : _ = this._createRadioElement("leaflet-base-layers_" + D(this), u), this._layerControlInputs.push(_), _.layerId = D(i.layer), NA(_, "click", this._onInputClick, this);
          var g = document.createElement("span");
          g.innerHTML = " " + i.name;
          var k = document.createElement("span");
          s.appendChild(k), k.appendChild(_), k.appendChild(g);
          var I = i.overlay ? this._overlaysList : this._baseLayersList;
          return I.appendChild(s), this._checkDisabledLayers(), s;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var i = this._layerControlInputs, s, u, _ = [], g = [];
            this._handlingClick = !0;
            for (var k = i.length - 1; k >= 0; k--)
              s = i[k], u = this._getLayer(s.layerId).layer, s.checked ? _.push(u) : s.checked || g.push(u);
            for (k = 0; k < g.length; k++)
              this._map.hasLayer(g[k]) && this._map.removeLayer(g[k]);
            for (k = 0; k < _.length; k++)
              this._map.hasLayer(_[k]) || this._map.addLayer(_[k]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var i = this._layerControlInputs, s, u, _ = this._map.getZoom(), g = i.length - 1; g >= 0; g--)
            s = i[g], u = this._getLayer(s.layerId).layer, s.disabled = u.options.minZoom !== void 0 && _ < u.options.minZoom || u.options.maxZoom !== void 0 && _ > u.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var i = this._section;
          this._preventClick = !0, NA(i, "click", nt), this.expand();
          var s = this;
          setTimeout(function() {
            me(i, "click", nt), s._preventClick = !1;
          });
        }
      }), Ts = function(i, s, u) {
        return new hr(i, s, u);
      }, F0 = Mt.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(i) {
          var s = "leaflet-control-zoom", u = ue("div", s + " leaflet-bar"), _ = this.options;
          return this._zoomInButton = this._createButton(
            _.zoomInText,
            _.zoomInTitle,
            s + "-in",
            u,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            _.zoomOutText,
            _.zoomOutTitle,
            s + "-out",
            u,
            this._zoomOut
          ), this._updateDisabled(), i.on("zoomend zoomlevelschange", this._updateDisabled, this), u;
        },
        onRemove: function(i) {
          i.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(i) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
        },
        _zoomOut: function(i) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
        },
        _createButton: function(i, s, u, _, g) {
          var k = ue("a", u, _);
          return k.innerHTML = i, k.href = "#", k.title = s, k.setAttribute("role", "button"), k.setAttribute("aria-label", s), yn(k), NA(k, "click", ji), NA(k, "click", g, this), NA(k, "click", this._refocusOnMap, this), k;
        },
        _updateDisabled: function() {
          var i = this._map, s = "leaflet-disabled";
          Fe(this._zoomInButton, s), Fe(this._zoomOutButton, s), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || i._zoom === i.getMinZoom()) && (JA(this._zoomOutButton, s), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || i._zoom === i.getMaxZoom()) && (JA(this._zoomInButton, s), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      XA.mergeOptions({
        zoomControl: !0
      }), XA.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new F0(), this.addControl(this.zoomControl));
      });
      var Ms = function(i) {
        return new F0(i);
      }, N0 = Mt.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(i) {
          var s = "leaflet-control-scale", u = ue("div", s), _ = this.options;
          return this._addScales(_, s + "-line", u), i.on(_.updateWhenIdle ? "moveend" : "move", this._update, this), i.whenReady(this._update, this), u;
        },
        onRemove: function(i) {
          i.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(i, s, u) {
          i.metric && (this._mScale = ue("div", s, u)), i.imperial && (this._iScale = ue("div", s, u));
        },
        _update: function() {
          var i = this._map, s = i.getSize().y / 2, u = i.distance(
            i.containerPointToLatLng([0, s]),
            i.containerPointToLatLng([this.options.maxWidth, s])
          );
          this._updateScales(u);
        },
        _updateScales: function(i) {
          this.options.metric && i && this._updateMetric(i), this.options.imperial && i && this._updateImperial(i);
        },
        _updateMetric: function(i) {
          var s = this._getRoundNum(i), u = s < 1e3 ? s + " m" : s / 1e3 + " km";
          this._updateScale(this._mScale, u, s / i);
        },
        _updateImperial: function(i) {
          var s = i * 3.2808399, u, _, g;
          s > 5280 ? (u = s / 5280, _ = this._getRoundNum(u), this._updateScale(this._iScale, _ + " mi", _ / u)) : (g = this._getRoundNum(s), this._updateScale(this._iScale, g + " ft", g / s));
        },
        _updateScale: function(i, s, u) {
          i.style.width = Math.round(this.options.maxWidth * u) + "px", i.innerHTML = s;
        },
        _getRoundNum: function(i) {
          var s = Math.pow(10, (Math.floor(i) + "").length - 1), u = i / s;
          return u = u >= 10 ? 10 : u >= 5 ? 5 : u >= 3 ? 3 : u >= 2 ? 2 : 1, s * u;
        }
      }), Wr = function(i) {
        return new N0(i);
      }, bn = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Vr = Mt.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (A.inlineSvg ? bn + " " : "") + "Leaflet</a>"
        },
        initialize: function(i) {
          _A(this, i), this._attributions = {};
        },
        onAdd: function(i) {
          i.attributionControl = this, this._container = ue("div", "leaflet-control-attribution"), yn(this._container);
          for (var s in i._layers)
            i._layers[s].getAttribution && this.addAttribution(i._layers[s].getAttribution());
          return this._update(), i.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(i) {
          i.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(i) {
          i.layer.getAttribution && (this.addAttribution(i.layer.getAttribution()), i.layer.once("remove", function() {
            this.removeAttribution(i.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(i) {
          return this.options.prefix = i, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(i) {
          return i ? (this._attributions[i] || (this._attributions[i] = 0), this._attributions[i]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(i) {
          return i ? (this._attributions[i] && (this._attributions[i]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var i = [];
            for (var s in this._attributions)
              this._attributions[s] && i.push(s);
            var u = [];
            this.options.prefix && u.push(this.options.prefix), i.length && u.push(i.join(", ")), this._container.innerHTML = u.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      XA.mergeOptions({
        attributionControl: !0
      }), XA.addInitHook(function() {
        this.options.attributionControl && new Vr().addTo(this);
      });
      var zo = function(i) {
        return new Vr(i);
      };
      Mt.Layers = hr, Mt.Zoom = F0, Mt.Scale = N0, Mt.Attribution = Vr, Qn.layers = Ts, Qn.zoom = Ms, Qn.scale = Wr, Qn.attribution = zo;
      var Dt = kt.extend({
        initialize: function(i) {
          this._map = i;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      Dt.addTo = function(i, s) {
        return i.addHandler(s, this), this;
      };
      var xn = { Events: tt }, Di = A.touch ? "touchstart mousedown" : "mousedown", Ii = Xt.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(i, s, u, _) {
          _A(this, _), this._element = i, this._dragStartTarget = s || i, this._preventOutline = u;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (NA(this._dragStartTarget, Di, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Ii._dragging === this && this.finishDrag(!0), me(this._dragStartTarget, Di, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(i) {
          if (this._enabled && (this._moved = !1, !L0(this._element, "leaflet-zoom-anim"))) {
            if (i.touches && i.touches.length !== 1) {
              Ii._dragging === this && this.finishDrag();
              return;
            }
            if (!(Ii._dragging || i.shiftKey || i.which !== 1 && i.button !== 1 && !i.touches) && (Ii._dragging = this, this._preventOutline && lr(this._element), D0(), ar(), !this._moving)) {
              this.fire("down");
              var s = i.touches ? i.touches[0] : i, u = Mo(this._element);
              this._startPoint = new QA(s.clientX, s.clientY), this._startPos = Vi(this._element), this._parentScale = z0(u);
              var _ = i.type === "mousedown";
              NA(document, _ ? "mousemove" : "touchmove", this._onMove, this), NA(document, _ ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(i) {
          if (this._enabled) {
            if (i.touches && i.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var s = i.touches && i.touches.length === 1 ? i.touches[0] : i, u = new QA(s.clientX, s.clientY)._subtract(this._startPoint);
            !u.x && !u.y || Math.abs(u.x) + Math.abs(u.y) < this.options.clickTolerance || (u.x /= this._parentScale.x, u.y /= this._parentScale.y, nt(i), this._moved || (this.fire("dragstart"), this._moved = !0, JA(document.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), JA(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(u), this._moving = !0, this._lastEvent = i, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var i = { originalEvent: this._lastEvent };
          this.fire("predrag", i), Ue(this._element, this._newPos), this.fire("drag", i);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(i) {
          Fe(document.body, "leaflet-dragging"), this._lastTarget && (Fe(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), me(document, "mousemove touchmove", this._onMove, this), me(document, "mouseup touchend touchcancel", this._onUp, this), I0(), gn();
          var s = this._moved && this._moving;
          this._moving = !1, Ii._dragging = !1, s && this.fire("dragend", {
            noInertia: i,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function H0(i, s, u) {
        var _, g = [1, 4, 2, 8], k, I, N, j, AA, hA, TA, VA;
        for (k = 0, hA = i.length; k < hA; k++)
          i[k]._code = vi(i[k], s);
        for (N = 0; N < 4; N++) {
          for (TA = g[N], _ = [], k = 0, hA = i.length, I = hA - 1; k < hA; I = k++)
            j = i[k], AA = i[I], j._code & TA ? AA._code & TA || (VA = Yr(AA, j, TA, s, u), VA._code = vi(VA, s), _.push(VA)) : (AA._code & TA && (VA = Yr(AA, j, TA, s, u), VA._code = vi(VA, s), _.push(VA)), _.push(j));
          i = _;
        }
        return i;
      }
      function jr(i, s) {
        var u, _, g, k, I, N, j, AA, hA;
        if (!i || i.length === 0)
          throw new Error("latlngs not passed");
        Nt(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var TA = ee([0, 0]), VA = De(i), lt = VA.getNorthWest().distanceTo(VA.getSouthWest()) * VA.getNorthEast().distanceTo(VA.getNorthWest());
        lt < 1700 && (TA = U0(i));
        var At = i.length, Gt = [];
        for (u = 0; u < At; u++) {
          var Pt = ee(i[u]);
          Gt.push(s.project(ee([Pt.lat - TA.lat, Pt.lng - TA.lng])));
        }
        for (N = j = AA = 0, u = 0, _ = At - 1; u < At; _ = u++)
          g = Gt[u], k = Gt[_], I = g.y * k.x - k.y * g.x, j += (g.x + k.x) * I, AA += (g.y + k.y) * I, N += I * 3;
        N === 0 ? hA = Gt[0] : hA = [j / N, AA / N];
        var Un = s.unproject(SA(hA));
        return ee([Un.lat + TA.lat, Un.lng + TA.lng]);
      }
      function U0(i) {
        for (var s = 0, u = 0, _ = 0, g = 0; g < i.length; g++) {
          var k = ee(i[g]);
          s += k.lat, u += k.lng, _++;
        }
        return ee([s / _, u / _]);
      }
      var Ds = {
        __proto__: null,
        clipPolygon: H0,
        polygonCenter: jr,
        centroid: U0
      };
      function G0(i, s) {
        if (!s || !i.length)
          return i.slice();
        var u = s * s;
        return i = Ss(i, u), i = zs(i, u), i;
      }
      function So(i, s, u) {
        return Math.sqrt(cr(i, s, u, !0));
      }
      function Is(i, s, u) {
        return cr(i, s, u);
      }
      function zs(i, s) {
        var u = i.length, _ = typeof Uint8Array < "u" ? Uint8Array : Array, g = new _(u);
        g[0] = g[u - 1] = 1, W0(i, g, s, 0, u - 1);
        var k, I = [];
        for (k = 0; k < u; k++)
          g[k] && I.push(i[k]);
        return I;
      }
      function W0(i, s, u, _, g) {
        var k = 0, I, N, j;
        for (N = _ + 1; N <= g - 1; N++)
          j = cr(i[N], i[_], i[g], !0), j > k && (I = N, k = j);
        k > u && (s[I] = 1, W0(i, s, u, _, I), W0(i, s, u, I, g));
      }
      function Ss(i, s) {
        for (var u = [i[0]], _ = 1, g = 0, k = i.length; _ < k; _++)
          Os(i[_], i[g]) > s && (u.push(i[_]), g = _);
        return g < k - 1 && u.push(i[k - 1]), u;
      }
      var V0;
      function Oo(i, s, u, _, g) {
        var k = _ ? V0 : vi(i, u), I = vi(s, u), N, j, AA;
        for (V0 = I; ; ) {
          if (!(k | I))
            return [i, s];
          if (k & I)
            return !1;
          N = k || I, j = Yr(i, s, N, u, g), AA = vi(j, u), N === k ? (i = j, k = AA) : (s = j, I = AA);
        }
      }
      function Yr(i, s, u, _, g) {
        var k = s.x - i.x, I = s.y - i.y, N = _.min, j = _.max, AA, hA;
        return u & 8 ? (AA = i.x + k * (j.y - i.y) / I, hA = j.y) : u & 4 ? (AA = i.x + k * (N.y - i.y) / I, hA = N.y) : u & 2 ? (AA = j.x, hA = i.y + I * (j.x - i.x) / k) : u & 1 && (AA = N.x, hA = i.y + I * (N.x - i.x) / k), new QA(AA, hA, g);
      }
      function vi(i, s) {
        var u = 0;
        return i.x < s.min.x ? u |= 1 : i.x > s.max.x && (u |= 2), i.y < s.min.y ? u |= 4 : i.y > s.max.y && (u |= 8), u;
      }
      function Os(i, s) {
        var u = s.x - i.x, _ = s.y - i.y;
        return u * u + _ * _;
      }
      function cr(i, s, u, _) {
        var g = s.x, k = s.y, I = u.x - g, N = u.y - k, j = I * I + N * N, AA;
        return j > 0 && (AA = ((i.x - g) * I + (i.y - k) * N) / j, AA > 1 ? (g = u.x, k = u.y) : AA > 0 && (g += I * AA, k += N * AA)), I = i.x - g, N = i.y - k, _ ? I * I + N * N : new QA(g, k);
      }
      function Nt(i) {
        return !LA(i[0]) || typeof i[0][0] != "object" && typeof i[0][0] < "u";
      }
      function Rn(i) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Nt(i);
      }
      function Qo(i, s) {
        var u, _, g, k, I, N, j, AA;
        if (!i || i.length === 0)
          throw new Error("latlngs not passed");
        Nt(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var hA = ee([0, 0]), TA = De(i), VA = TA.getNorthWest().distanceTo(TA.getSouthWest()) * TA.getNorthEast().distanceTo(TA.getNorthWest());
        VA < 1700 && (hA = U0(i));
        var lt = i.length, At = [];
        for (u = 0; u < lt; u++) {
          var Gt = ee(i[u]);
          At.push(s.project(ee([Gt.lat - hA.lat, Gt.lng - hA.lng])));
        }
        for (u = 0, _ = 0; u < lt - 1; u++)
          _ += At[u].distanceTo(At[u + 1]) / 2;
        if (_ === 0)
          AA = At[0];
        else
          for (u = 0, k = 0; u < lt - 1; u++)
            if (I = At[u], N = At[u + 1], g = I.distanceTo(N), k += g, k > _) {
              j = (k - _) / g, AA = [
                N.x - j * (N.x - I.x),
                N.y - j * (N.y - I.y)
              ];
              break;
            }
        var Pt = s.unproject(SA(AA));
        return ee([Pt.lat + hA.lat, Pt.lng + hA.lng]);
      }
      var j0 = {
        __proto__: null,
        simplify: G0,
        pointToSegmentDistance: So,
        closestPointOnSegment: Is,
        clipSegment: Oo,
        _getEdgeIntersection: Yr,
        _getBitCode: vi,
        _sqClosestPointOnSegment: cr,
        isFlat: Nt,
        _flat: Rn,
        polylineCenter: Qo
      }, qr = {
        project: function(i) {
          return new QA(i.lng, i.lat);
        },
        unproject: function(i) {
          return new de(i.y, i.x);
        },
        bounds: new ke([-180, -90], [180, 90])
      }, Yi = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new ke([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(i) {
          var s = Math.PI / 180, u = this.R, _ = i.lat * s, g = this.R_MINOR / u, k = Math.sqrt(1 - g * g), I = k * Math.sin(_), N = Math.tan(Math.PI / 4 - _ / 2) / Math.pow((1 - I) / (1 + I), k / 2);
          return _ = -u * Math.log(Math.max(N, 1e-10)), new QA(i.lng * s * u, _);
        },
        unproject: function(i) {
          for (var s = 180 / Math.PI, u = this.R, _ = this.R_MINOR / u, g = Math.sqrt(1 - _ * _), k = Math.exp(-i.y / u), I = Math.PI / 2 - 2 * Math.atan(k), N = 0, j = 0.1, AA; N < 15 && Math.abs(j) > 1e-7; N++)
            AA = g * Math.sin(I), AA = Math.pow((1 - AA) / (1 + AA), g / 2), j = Math.PI / 2 - 2 * Math.atan(k * AA) - I, I += j;
          return new de(I * s, i.x * s / u);
        }
      }, Qs = {
        __proto__: null,
        LonLat: qr,
        Mercator: Yi,
        SphericalMercator: hn
      }, Y0 = x({}, Ai, {
        code: "EPSG:3395",
        projection: Yi,
        transformation: (function() {
          var i = 0.5 / (Math.PI * Yi.R);
          return Ni(i, 0.5, -i, 0.5);
        })()
      }), q0 = x({}, Ai, {
        code: "EPSG:4326",
        projection: qr,
        transformation: Ni(1 / 180, 1, -1 / 180, 0.5)
      }), Rs = x({}, $t, {
        projection: qr,
        transformation: Ni(1, 0, -1, 0),
        scale: function(i) {
          return Math.pow(2, i);
        },
        zoom: function(i) {
          return Math.log(i) / Math.LN2;
        },
        distance: function(i, s) {
          var u = s.lng - i.lng, _ = s.lat - i.lat;
          return Math.sqrt(u * u + _ * _);
        },
        infinite: !0
      });
      $t.Earth = Ai, $t.EPSG3395 = Y0, $t.EPSG3857 = rr, $t.EPSG900913 = E0, $t.EPSG4326 = q0, $t.Simple = Rs;
      var Ht = Xt.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(i) {
          return i.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(i) {
          return i && i.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(i) {
          return this._map.getPane(i ? this.options[i] || i : this.options.pane);
        },
        addInteractiveTarget: function(i) {
          return this._map._targets[D(i)] = this, this;
        },
        removeInteractiveTarget: function(i) {
          return delete this._map._targets[D(i)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(i) {
          var s = i.target;
          if (s.hasLayer(this)) {
            if (this._map = s, this._zoomAnimated = s._zoomAnimated, this.getEvents) {
              var u = this.getEvents();
              s.on(u, this), this.once("remove", function() {
                s.off(u, this);
              }, this);
            }
            this.onAdd(s), this.fire("add"), s.fire("layeradd", { layer: this });
          }
        }
      });
      XA.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(i) {
          if (!i._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var s = D(i);
          return this._layers[s] ? this : (this._layers[s] = i, i._mapToAdd = this, i.beforeAdd && i.beforeAdd(this), this.whenReady(i._layerAdd, i), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(i) {
          var s = D(i);
          return this._layers[s] ? (this._loaded && i.onRemove(this), delete this._layers[s], this._loaded && (this.fire("layerremove", { layer: i }), i.fire("remove")), i._map = i._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(i) {
          return D(i) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(i, s) {
          for (var u in this._layers)
            i.call(s, this._layers[u]);
          return this;
        },
        _addLayers: function(i) {
          i = i ? LA(i) ? i : [i] : [];
          for (var s = 0, u = i.length; s < u; s++)
            this.addLayer(i[s]);
        },
        _addZoomLimit: function(i) {
          (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) && (this._zoomBoundLayers[D(i)] = i, this._updateZoomLevels());
        },
        _removeZoomLimit: function(i) {
          var s = D(i);
          this._zoomBoundLayers[s] && (delete this._zoomBoundLayers[s], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var i = 1 / 0, s = -1 / 0, u = this._getZoomSpan();
          for (var _ in this._zoomBoundLayers) {
            var g = this._zoomBoundLayers[_].options;
            i = g.minZoom === void 0 ? i : Math.min(i, g.minZoom), s = g.maxZoom === void 0 ? s : Math.max(s, g.maxZoom);
          }
          this._layersMaxZoom = s === -1 / 0 ? void 0 : s, this._layersMinZoom = i === 1 / 0 ? void 0 : i, u !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Zn = Ht.extend({
        initialize: function(i, s) {
          _A(this, s), this._layers = {};
          var u, _;
          if (i)
            for (u = 0, _ = i.length; u < _; u++)
              this.addLayer(i[u]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(i) {
          var s = this.getLayerId(i);
          return this._layers[s] = i, this._map && this._map.addLayer(i), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(i) {
          var s = i in this._layers ? i : this.getLayerId(i);
          return this._map && this._layers[s] && this._map.removeLayer(this._layers[s]), delete this._layers[s], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(i) {
          var s = typeof i == "number" ? i : this.getLayerId(i);
          return s in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(i) {
          var s = Array.prototype.slice.call(arguments, 1), u, _;
          for (u in this._layers)
            _ = this._layers[u], _[i] && _[i].apply(_, s);
          return this;
        },
        onAdd: function(i) {
          this.eachLayer(i.addLayer, i);
        },
        onRemove: function(i) {
          this.eachLayer(i.removeLayer, i);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(i, s) {
          for (var u in this._layers)
            i.call(s, this._layers[u]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(i) {
          return this._layers[i];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var i = [];
          return this.eachLayer(i.push, i), i;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(i) {
          return this.invoke("setZIndex", i);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(i) {
          return D(i);
        }
      }), Zs = function(i, s) {
        return new Zn(i, s);
      }, oi = Zn.extend({
        addLayer: function(i) {
          return this.hasLayer(i) ? this : (i.addEventParent(this), Zn.prototype.addLayer.call(this, i), this.fire("layeradd", { layer: i }));
        },
        removeLayer: function(i) {
          return this.hasLayer(i) ? (i in this._layers && (i = this._layers[i]), i.removeEventParent(this), Zn.prototype.removeLayer.call(this, i), this.fire("layerremove", { layer: i })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(i) {
          return this.invoke("setStyle", i);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var i = new $e();
          for (var s in this._layers) {
            var u = this._layers[s];
            i.extend(u.getBounds ? u.getBounds() : u.getLatLng());
          }
          return i;
        }
      }), Fs = function(i, s) {
        return new oi(i, s);
      }, qi = kt.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(i) {
          _A(this, i);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(i) {
          return this._createIcon("icon", i);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(i) {
          return this._createIcon("shadow", i);
        },
        _createIcon: function(i, s) {
          var u = this._getIconUrl(i);
          if (!u) {
            if (i === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var _ = this._createImg(u, s && s.tagName === "IMG" ? s : null);
          return this._setIconStyles(_, i), (this.options.crossOrigin || this.options.crossOrigin === "") && (_.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), _;
        },
        _setIconStyles: function(i, s) {
          var u = this.options, _ = u[s + "Size"];
          typeof _ == "number" && (_ = [_, _]);
          var g = SA(_), k = SA(s === "shadow" && u.shadowAnchor || u.iconAnchor || g && g.divideBy(2, !0));
          i.className = "leaflet-marker-" + s + " " + (u.className || ""), k && (i.style.marginLeft = -k.x + "px", i.style.marginTop = -k.y + "px"), g && (i.style.width = g.x + "px", i.style.height = g.y + "px");
        },
        _createImg: function(i, s) {
          return s = s || document.createElement("img"), s.src = i, s;
        },
        _getIconUrl: function(i) {
          return A.retina && this.options[i + "RetinaUrl"] || this.options[i + "Url"];
        }
      });
      function K0(i) {
        return new qi(i);
      }
      var zi = qi.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(i) {
          return typeof zi.imagePath != "string" && (zi.imagePath = this._detectIconPath()), (this.options.imagePath || zi.imagePath) + qi.prototype._getIconUrl.call(this, i);
        },
        _stripUrl: function(i) {
          var s = function(u, _, g) {
            var k = _.exec(u);
            return k && k[g];
          };
          return i = s(i, /^url\((['"])?(.+)\1\)$/, 2), i && s(i, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var i = ue("div", "leaflet-default-icon-path", document.body), s = or(i, "background-image") || or(i, "backgroundImage");
          if (document.body.removeChild(i), s = this._stripUrl(s), s)
            return s;
          var u = document.querySelector('link[href$="leaflet.css"]');
          return u ? u.href.substring(0, u.href.length - 11 - 1) : "";
        }
      }), pe = Dt.extend({
        initialize: function(i) {
          this._marker = i;
        },
        addHooks: function() {
          var i = this._marker._icon;
          this._draggable || (this._draggable = new Ii(i, i, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), JA(i, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && Fe(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(i) {
          var s = this._marker, u = s._map, _ = this._marker.options.autoPanSpeed, g = this._marker.options.autoPanPadding, k = Vi(s._icon), I = u.getPixelBounds(), N = u.getPixelOrigin(), j = Ve(
            I.min._subtract(N).add(g),
            I.max._subtract(N).subtract(g)
          );
          if (!j.contains(k)) {
            var AA = SA(
              (Math.max(j.max.x, k.x) - j.max.x) / (I.max.x - j.max.x) - (Math.min(j.min.x, k.x) - j.min.x) / (I.min.x - j.min.x),
              (Math.max(j.max.y, k.y) - j.max.y) / (I.max.y - j.max.y) - (Math.min(j.min.y, k.y) - j.min.y) / (I.min.y - j.min.y)
            ).multiplyBy(_);
            u.panBy(AA, { animate: !1 }), this._draggable._newPos._add(AA), this._draggable._startPos._add(AA), Ue(s._icon, this._draggable._newPos), this._onDrag(i), this._panRequest = Le(this._adjustPan.bind(this, i));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(i) {
          this._marker.options.autoPan && (ve(this._panRequest), this._panRequest = Le(this._adjustPan.bind(this, i)));
        },
        _onDrag: function(i) {
          var s = this._marker, u = s._shadow, _ = Vi(s._icon), g = s._map.layerPointToLatLng(_);
          u && Ue(u, _), s._latlng = g, i.latlng = g, i.oldLatLng = this._oldLatLng, s.fire("move", i).fire("drag", i);
        },
        _onDragEnd: function(i) {
          ve(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", i);
        }
      }), Kr = Ht.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new zi(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(i, s) {
          _A(this, s), this._latlng = ee(i);
        },
        onAdd: function(i) {
          this._zoomAnimated = this._zoomAnimated && i.options.markerZoomAnimation, this._zoomAnimated && i.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(i) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && i.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(i) {
          var s = this._latlng;
          return this._latlng = ee(i), this.update(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(i) {
          return this.options.zIndexOffset = i, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(i) {
          return this.options.icon = i, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var i = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(i);
          }
          return this;
        },
        _initIcon: function() {
          var i = this.options, s = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), u = i.icon.createIcon(this._icon), _ = !1;
          u !== this._icon && (this._icon && this._removeIcon(), _ = !0, i.title && (u.title = i.title), u.tagName === "IMG" && (u.alt = i.alt || "")), JA(u, s), i.keyboard && (u.tabIndex = "0", u.setAttribute("role", "button")), this._icon = u, i.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && NA(u, "focus", this._panOnFocus, this);
          var g = i.icon.createShadow(this._shadow), k = !1;
          g !== this._shadow && (this._removeShadow(), k = !0), g && (JA(g, s), g.alt = ""), this._shadow = g, i.opacity < 1 && this._updateOpacity(), _ && this.getPane().appendChild(this._icon), this._initInteraction(), g && k && this.getPane(i.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && me(this._icon, "focus", this._panOnFocus, this), Ie(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && Ie(this._shadow), this._shadow = null;
        },
        _setPos: function(i) {
          this._icon && Ue(this._icon, i), this._shadow && Ue(this._shadow, i), this._zIndex = i.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(i) {
          this._icon && (this._icon.style.zIndex = this._zIndex + i);
        },
        _animateZoom: function(i) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center).round();
          this._setPos(s);
        },
        _initInteraction: function() {
          if (this.options.interactive && (JA(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), pe)) {
            var i = this.options.draggable;
            this.dragging && (i = this.dragging.enabled(), this.dragging.disable()), this.dragging = new pe(this), i && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(i) {
          return this.options.opacity = i, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var i = this.options.opacity;
          this._icon && Lt(this._icon, i), this._shadow && Lt(this._shadow, i);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var i = this._map;
          if (i) {
            var s = this.options.icon.options, u = s.iconSize ? SA(s.iconSize) : SA(0, 0), _ = s.iconAnchor ? SA(s.iconAnchor) : SA(0, 0);
            i.panInside(this._latlng, {
              paddingTopLeft: _,
              paddingBottomRight: u.subtract(_)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function Ro(i, s) {
        return new Kr(i, s);
      }
      var Si = Ht.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(i) {
          this._renderer = i.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(i) {
          return _A(this, i), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && i && Object.prototype.hasOwnProperty.call(i, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), Jr = Si.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(i, s) {
          _A(this, s), this._latlng = ee(i), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(i) {
          var s = this._latlng;
          return this._latlng = ee(i), this.redraw(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(i) {
          return this.options.radius = this._radius = i, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(i) {
          var s = i && i.radius || this._radius;
          return Si.prototype.setStyle.call(this, i), this.setRadius(s), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var i = this._radius, s = this._radiusY || i, u = this._clickTolerance(), _ = [i + u, s + u];
          this._pxBounds = new ke(this._point.subtract(_), this._point.add(_));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i) {
          return i.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function Ns(i, s) {
        return new Jr(i, s);
      }
      var J0 = Jr.extend({
        initialize: function(i, s, u) {
          if (typeof s == "number" && (s = x({}, u, { radius: s })), _A(this, s), this._latlng = ee(i), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(i) {
          return this._mRadius = i, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var i = [this._radius, this._radiusY || this._radius];
          return new $e(
            this._map.layerPointToLatLng(this._point.subtract(i)),
            this._map.layerPointToLatLng(this._point.add(i))
          );
        },
        setStyle: Si.prototype.setStyle,
        _project: function() {
          var i = this._latlng.lng, s = this._latlng.lat, u = this._map, _ = u.options.crs;
          if (_.distance === Ai.distance) {
            var g = Math.PI / 180, k = this._mRadius / Ai.R / g, I = u.project([s + k, i]), N = u.project([s - k, i]), j = I.add(N).divideBy(2), AA = u.unproject(j).lat, hA = Math.acos((Math.cos(k * g) - Math.sin(s * g) * Math.sin(AA * g)) / (Math.cos(s * g) * Math.cos(AA * g))) / g;
            (isNaN(hA) || hA === 0) && (hA = k / Math.cos(Math.PI / 180 * s)), this._point = j.subtract(u.getPixelOrigin()), this._radius = isNaN(hA) ? 0 : j.x - u.project([AA, i - hA]).x, this._radiusY = j.y - I.y;
          } else {
            var TA = _.unproject(_.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = u.latLngToLayerPoint(this._latlng), this._radius = this._point.x - u.latLngToLayerPoint(TA).x;
          }
          this._updateBounds();
        }
      });
      function Hs(i, s, u) {
        return new J0(i, s, u);
      }
      var Qe = Si.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(i, s) {
          _A(this, s), this._setLatLngs(i);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(i) {
          return this._setLatLngs(i), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(i) {
          for (var s = 1 / 0, u = null, _ = cr, g, k, I = 0, N = this._parts.length; I < N; I++)
            for (var j = this._parts[I], AA = 1, hA = j.length; AA < hA; AA++) {
              g = j[AA - 1], k = j[AA];
              var TA = _(i, g, k, !0);
              TA < s && (s = TA, u = _(i, g, k));
            }
          return u && (u.distance = Math.sqrt(s)), u;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Qo(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(i, s) {
          return s = s || this._defaultShape(), i = ee(i), s.push(i), this._bounds.extend(i), this.redraw();
        },
        _setLatLngs: function(i) {
          this._bounds = new $e(), this._latlngs = this._convertLatLngs(i);
        },
        _defaultShape: function() {
          return Nt(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(i) {
          for (var s = [], u = Nt(i), _ = 0, g = i.length; _ < g; _++)
            u ? (s[_] = ee(i[_]), this._bounds.extend(s[_])) : s[_] = this._convertLatLngs(i[_]);
          return s;
        },
        _project: function() {
          var i = new ke();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, i), this._bounds.isValid() && i.isValid() && (this._rawPxBounds = i, this._updateBounds());
        },
        _updateBounds: function() {
          var i = this._clickTolerance(), s = new QA(i, i);
          this._rawPxBounds && (this._pxBounds = new ke([
            this._rawPxBounds.min.subtract(s),
            this._rawPxBounds.max.add(s)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(i, s, u) {
          var _ = i[0] instanceof de, g = i.length, k, I;
          if (_) {
            for (I = [], k = 0; k < g; k++)
              I[k] = this._map.latLngToLayerPoint(i[k]), u.extend(I[k]);
            s.push(I);
          } else
            for (k = 0; k < g; k++)
              this._projectLatlngs(i[k], s, u);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var i = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var s = this._parts, u, _, g, k, I, N, j;
            for (u = 0, g = 0, k = this._rings.length; u < k; u++)
              for (j = this._rings[u], _ = 0, I = j.length; _ < I - 1; _++)
                N = Oo(j[_], j[_ + 1], i, _, !0), N && (s[g] = s[g] || [], s[g].push(N[0]), (N[1] !== j[_ + 1] || _ === I - 2) && (s[g].push(N[1]), g++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var i = this._parts, s = this.options.smoothFactor, u = 0, _ = i.length; u < _; u++)
            i[u] = G0(i[u], s);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i, s) {
          var u, _, g, k, I, N, j = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(i))
            return !1;
          for (u = 0, k = this._parts.length; u < k; u++)
            for (N = this._parts[u], _ = 0, I = N.length, g = I - 1; _ < I; g = _++)
              if (!(!s && _ === 0) && So(i, N[g], N[_]) <= j)
                return !0;
          return !1;
        }
      });
      function X0(i, s) {
        return new Qe(i, s);
      }
      Qe._flat = Rn;
      var Ut = Qe.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return jr(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(i) {
          var s = Qe.prototype._convertLatLngs.call(this, i), u = s.length;
          return u >= 2 && s[0] instanceof de && s[0].equals(s[u - 1]) && s.pop(), s;
        },
        _setLatLngs: function(i) {
          Qe.prototype._setLatLngs.call(this, i), Nt(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return Nt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var i = this._renderer._bounds, s = this.options.weight, u = new QA(s, s);
          if (i = new ke(i.min.subtract(u), i.max.add(u)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var _ = 0, g = this._rings.length, k; _ < g; _++)
              k = H0(this._rings[_], i, !0), k.length && this._parts.push(k);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i) {
          var s = !1, u, _, g, k, I, N, j, AA;
          if (!this._pxBounds || !this._pxBounds.contains(i))
            return !1;
          for (k = 0, j = this._parts.length; k < j; k++)
            for (u = this._parts[k], I = 0, AA = u.length, N = AA - 1; I < AA; N = I++)
              _ = u[I], g = u[N], _.y > i.y != g.y > i.y && i.x < (g.x - _.x) * (i.y - _.y) / (g.y - _.y) + _.x && (s = !s);
          return s || Qe.prototype._containsPoint.call(this, i, !0);
        }
      });
      function Us(i, s) {
        return new Ut(i, s);
      }
      var si = oi.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(i, s) {
          _A(this, s), this._layers = {}, i && this.addData(i);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(i) {
          var s = LA(i) ? i : i.features, u, _, g;
          if (s) {
            for (u = 0, _ = s.length; u < _; u++)
              g = s[u], (g.geometries || g.geometry || g.features || g.coordinates) && this.addData(g);
            return this;
          }
          var k = this.options;
          if (k.filter && !k.filter(i))
            return this;
          var I = Xr(i, k);
          return I ? (I.feature = $r(i), I.defaultOptions = I.options, this.resetStyle(I), k.onEachFeature && k.onEachFeature(i, I), this.addLayer(I)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(i) {
          return i === void 0 ? this.eachLayer(this.resetStyle, this) : (i.options = x({}, i.defaultOptions), this._setLayerStyle(i, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(i) {
          return this.eachLayer(function(s) {
            this._setLayerStyle(s, i);
          }, this);
        },
        _setLayerStyle: function(i, s) {
          i.setStyle && (typeof s == "function" && (s = s(i.feature)), i.setStyle(s));
        }
      });
      function Xr(i, s) {
        var u = i.type === "Feature" ? i.geometry : i, _ = u ? u.coordinates : null, g = [], k = s && s.pointToLayer, I = s && s.coordsToLatLng || dr, N, j, AA, hA;
        if (!_ && !u)
          return null;
        switch (u.type) {
          case "Point":
            return N = I(_), It(k, i, N, s);
          case "MultiPoint":
            for (AA = 0, hA = _.length; AA < hA; AA++)
              N = I(_[AA]), g.push(It(k, i, N, s));
            return new oi(g);
          case "LineString":
          case "MultiLineString":
            return j = Fn(_, u.type === "LineString" ? 0 : 1, I), new Qe(j, s);
          case "Polygon":
          case "MultiPolygon":
            return j = Fn(_, u.type === "Polygon" ? 1 : 2, I), new Ut(j, s);
          case "GeometryCollection":
            for (AA = 0, hA = u.geometries.length; AA < hA; AA++) {
              var TA = Xr({
                geometry: u.geometries[AA],
                type: "Feature",
                properties: i.properties
              }, s);
              TA && g.push(TA);
            }
            return new oi(g);
          case "FeatureCollection":
            for (AA = 0, hA = u.features.length; AA < hA; AA++) {
              var VA = Xr(u.features[AA], s);
              VA && g.push(VA);
            }
            return new oi(g);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function It(i, s, u, _) {
        return i ? i(s, u) : new Kr(u, _ && _.markersInheritOptions && _);
      }
      function dr(i) {
        return new de(i[1], i[0], i[2]);
      }
      function Fn(i, s, u) {
        for (var _ = [], g = 0, k = i.length, I; g < k; g++)
          I = s ? Fn(i[g], s - 1, u) : (u || dr)(i[g]), _.push(I);
        return _;
      }
      function Ki(i, s) {
        return i = ee(i), i.alt !== void 0 ? [nA(i.lng, s), nA(i.lat, s), nA(i.alt, s)] : [nA(i.lng, s), nA(i.lat, s)];
      }
      function mi(i, s, u, _) {
        for (var g = [], k = 0, I = i.length; k < I; k++)
          g.push(s ? mi(i[k], Nt(i[k]) ? 0 : s - 1, u, _) : Ki(i[k], _));
        return !s && u && g.length > 0 && g.push(g[0].slice()), g;
      }
      function ai(i, s) {
        return i.feature ? x({}, i.feature, { geometry: s }) : $r(s);
      }
      function $r(i) {
        return i.type === "Feature" || i.type === "FeatureCollection" ? i : {
          type: "Feature",
          properties: {},
          geometry: i
        };
      }
      var A0 = {
        toGeoJSON: function(i) {
          return ai(this, {
            type: "Point",
            coordinates: Ki(this.getLatLng(), i)
          });
        }
      };
      Kr.include(A0), J0.include(A0), Jr.include(A0), Qe.include({
        toGeoJSON: function(i) {
          var s = !Nt(this._latlngs), u = mi(this._latlngs, s ? 1 : 0, !1, i);
          return ai(this, {
            type: (s ? "Multi" : "") + "LineString",
            coordinates: u
          });
        }
      }), Ut.include({
        toGeoJSON: function(i) {
          var s = !Nt(this._latlngs), u = s && !Nt(this._latlngs[0]), _ = mi(this._latlngs, u ? 2 : s ? 1 : 0, !0, i);
          return s || (_ = [_]), ai(this, {
            type: (u ? "Multi" : "") + "Polygon",
            coordinates: _
          });
        }
      }), Zn.include({
        toMultiPoint: function(i) {
          var s = [];
          return this.eachLayer(function(u) {
            s.push(u.toGeoJSON(i).geometry.coordinates);
          }), ai(this, {
            type: "MultiPoint",
            coordinates: s
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(i) {
          var s = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (s === "MultiPoint")
            return this.toMultiPoint(i);
          var u = s === "GeometryCollection", _ = [];
          return this.eachLayer(function(g) {
            if (g.toGeoJSON) {
              var k = g.toGeoJSON(i);
              if (u)
                _.push(k.geometry);
              else {
                var I = $r(k);
                I.type === "FeatureCollection" ? _.push.apply(_, I.features) : _.push(I);
              }
            }
          }), u ? ai(this, {
            geometries: _,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: _
          };
        }
      });
      function Zo(i, s) {
        return new si(i, s);
      }
      var $0 = Zo, e0 = Ht.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(i, s, u) {
          this._url = i, this._bounds = De(s), _A(this, u);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (JA(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          Ie(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(i) {
          return this.options.opacity = i, this._image && this._updateOpacity(), this;
        },
        setStyle: function(i) {
          return i.opacity && this.setOpacity(i.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && zn(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Sn(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(i) {
          return this._url = i, this._image && (this._image.src = i), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(i) {
          return this._bounds = De(i), this._map && this._reset(), this;
        },
        getEvents: function() {
          var i = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(i) {
          return this.options.zIndex = i, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var i = this._url.tagName === "IMG", s = this._image = i ? this._url : ue("img");
          if (JA(s, "leaflet-image-layer"), this._zoomAnimated && JA(s, "leaflet-zoom-animated"), this.options.className && JA(s, this.options.className), s.onselectstart = oA, s.onmousemove = oA, s.onload = z(this.fire, this, "load"), s.onerror = z(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), i) {
            this._url = s.src;
            return;
          }
          s.src = this._url, s.alt = this.options.alt;
        },
        _animateZoom: function(i) {
          var s = this._map.getZoomScale(i.zoom), u = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
          Te(this._image, u, s);
        },
        _reset: function() {
          var i = this._image, s = new ke(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), u = s.getSize();
          Ue(i, s.min), i.style.width = u.x + "px", i.style.height = u.y + "px";
        },
        _updateOpacity: function() {
          Lt(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var i = this.options.errorOverlayUrl;
          i && this._url !== i && (this._url = i, this._image.src = i);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), Gs = function(i, s, u) {
        return new e0(i, s, u);
      }, t0 = e0.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var i = this._url.tagName === "VIDEO", s = this._image = i ? this._url : ue("video");
          if (JA(s, "leaflet-image-layer"), this._zoomAnimated && JA(s, "leaflet-zoom-animated"), this.options.className && JA(s, this.options.className), s.onselectstart = oA, s.onmousemove = oA, s.onloadeddata = z(this.fire, this, "load"), i) {
            for (var u = s.getElementsByTagName("source"), _ = [], g = 0; g < u.length; g++)
              _.push(u[g].src);
            this._url = u.length > 0 ? _ : [s.src];
            return;
          }
          LA(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(s.style, "objectFit") && (s.style.objectFit = "fill"), s.autoplay = !!this.options.autoplay, s.loop = !!this.options.loop, s.muted = !!this.options.muted, s.playsInline = !!this.options.playsInline;
          for (var k = 0; k < this._url.length; k++) {
            var I = ue("source");
            I.src = this._url[k], s.appendChild(I);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Fo(i, s, u) {
        return new t0(i, s, u);
      }
      var i0 = e0.extend({
        _initImage: function() {
          var i = this._image = this._url;
          JA(i, "leaflet-image-layer"), this._zoomAnimated && JA(i, "leaflet-zoom-animated"), this.options.className && JA(i, this.options.className), i.onselectstart = oA, i.onmousemove = oA;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function _r(i, s, u) {
        return new i0(i, s, u);
      }
      var gt = Ht.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(i, s) {
          i && (i instanceof de || LA(i)) ? (this._latlng = ee(i), _A(this, s)) : (_A(this, i), this._source = s), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(i) {
          return i = arguments.length ? i : this._source._map, i.hasLayer(this) || i.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(i) {
          return this._map ? this.close() : (arguments.length ? this._source = i : i = this._source, this._prepareOpen(), this.openOn(i._map)), this;
        },
        onAdd: function(i) {
          this._zoomAnimated = i._zoomAnimated, this._container || this._initLayout(), i._fadeAnimated && Lt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), i._fadeAnimated && Lt(this._container, 1), this.bringToFront(), this.options.interactive && (JA(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(i) {
          i._fadeAnimated ? (Lt(this._container, 0), this._removeTimeout = setTimeout(z(Ie, void 0, this._container), 200)) : Ie(this._container), this.options.interactive && (Fe(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(i) {
          return this._latlng = ee(i), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(i) {
          return this._content = i, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var i = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && zn(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Sn(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(i) {
          var s = this._source;
          if (!s._map)
            return !1;
          if (s instanceof oi) {
            s = null;
            var u = this._source._layers;
            for (var _ in u)
              if (u[_]._map) {
                s = u[_];
                break;
              }
            if (!s)
              return !1;
            this._source = s;
          }
          if (!i)
            if (s.getCenter)
              i = s.getCenter();
            else if (s.getLatLng)
              i = s.getLatLng();
            else if (s.getBounds)
              i = s.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(i), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var i = this._contentNode, s = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof s == "string")
              i.innerHTML = s;
            else {
              for (; i.hasChildNodes(); )
                i.removeChild(i.firstChild);
              i.appendChild(s);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var i = this._map.latLngToLayerPoint(this._latlng), s = SA(this.options.offset), u = this._getAnchor();
            this._zoomAnimated ? Ue(this._container, i.add(u)) : s = s.add(i).add(u);
            var _ = this._containerBottom = -s.y, g = this._containerLeft = -Math.round(this._containerWidth / 2) + s.x;
            this._container.style.bottom = _ + "px", this._container.style.left = g + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      XA.include({
        _initOverlay: function(i, s, u, _) {
          var g = s;
          return g instanceof i || (g = new i(_).setContent(s)), u && g.setLatLng(u), g;
        }
      }), Ht.include({
        _initOverlay: function(i, s, u, _) {
          var g = u;
          return g instanceof i ? (_A(g, _), g._source = this) : (g = s && !_ ? s : new i(_, this), g.setContent(u)), g;
        }
      });
      var at = gt.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(i) {
          return i = arguments.length ? i : this._source._map, !i.hasLayer(this) && i._popup && i._popup.options.autoClose && i.removeLayer(i._popup), i._popup = this, gt.prototype.openOn.call(this, i);
        },
        onAdd: function(i) {
          gt.prototype.onAdd.call(this, i), i.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Si || this._source.on("preclick", wn));
        },
        onRemove: function(i) {
          gt.prototype.onRemove.call(this, i), i.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Si || this._source.off("preclick", wn));
        },
        getEvents: function() {
          var i = gt.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (i.preclick = this.close), this.options.keepInView && (i.moveend = this._adjustPan), i;
        },
        _initLayout: function() {
          var i = "leaflet-popup", s = this._container = ue(
            "div",
            i + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), u = this._wrapper = ue("div", i + "-content-wrapper", s);
          if (this._contentNode = ue("div", i + "-content", u), yn(s), fr(this._contentNode), NA(s, "contextmenu", wn), this._tipContainer = ue("div", i + "-tip-container", s), this._tip = ue("div", i + "-tip", this._tipContainer), this.options.closeButton) {
            var _ = this._closeButton = ue("a", i + "-close-button", s);
            _.setAttribute("role", "button"), _.setAttribute("aria-label", "Close popup"), _.href = "#close", _.innerHTML = '<span aria-hidden="true">&#215;</span>', NA(_, "click", function(g) {
              nt(g), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var i = this._contentNode, s = i.style;
          s.width = "", s.whiteSpace = "nowrap";
          var u = i.offsetWidth;
          u = Math.min(u, this.options.maxWidth), u = Math.max(u, this.options.minWidth), s.width = u + 1 + "px", s.whiteSpace = "", s.height = "";
          var _ = i.offsetHeight, g = this.options.maxHeight, k = "leaflet-popup-scrolled";
          g && _ > g ? (s.height = g + "px", JA(i, k)) : Fe(i, k), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(i) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center), u = this._getAnchor();
          Ue(this._container, s.add(u));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var i = this._map, s = parseInt(or(this._container, "marginBottom"), 10) || 0, u = this._container.offsetHeight + s, _ = this._containerWidth, g = new QA(this._containerLeft, -u - this._containerBottom);
            g._add(Vi(this._container));
            var k = i.layerPointToContainerPoint(g), I = SA(this.options.autoPanPadding), N = SA(this.options.autoPanPaddingTopLeft || I), j = SA(this.options.autoPanPaddingBottomRight || I), AA = i.getSize(), hA = 0, TA = 0;
            k.x + _ + j.x > AA.x && (hA = k.x + _ - AA.x + j.x), k.x - hA - N.x < 0 && (hA = k.x - N.x), k.y + u + j.y > AA.y && (TA = k.y + u - AA.y + j.y), k.y - TA - N.y < 0 && (TA = k.y - N.y), (hA || TA) && (this.options.keepInView && (this._autopanning = !0), i.fire("autopanstart").panBy([hA, TA]));
          }
        },
        _getAnchor: function() {
          return SA(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), Ws = function(i, s) {
        return new at(i, s);
      };
      XA.mergeOptions({
        closePopupOnClick: !0
      }), XA.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(i, s, u) {
          return this._initOverlay(at, i, s, u).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(i) {
          return i = arguments.length ? i : this._popup, i && i.close(), this;
        }
      }), Ht.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(i, s) {
          return this._popup = this._initOverlay(at, this._popup, i, s), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(i) {
          return this._popup && (this instanceof oi || (this._popup._source = this), this._popup._prepareOpen(i || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(i) {
          return this._popup && this._popup.setContent(i), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(i) {
          if (!(!this._popup || !this._map)) {
            ji(i);
            var s = i.layer || i.target;
            if (this._popup._source === s && !(s instanceof Si)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(i.latlng);
              return;
            }
            this._popup._source = s, this.openPopup(i.latlng);
          }
        },
        _movePopup: function(i) {
          this._popup.setLatLng(i.latlng);
        },
        _onKeyPress: function(i) {
          i.originalEvent.keyCode === 13 && this._openPopup(i);
        }
      });
      var Ji = gt.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(i) {
          gt.prototype.onAdd.call(this, i), this.setOpacity(this.options.opacity), i.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(i) {
          gt.prototype.onRemove.call(this, i), i.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var i = gt.prototype.getEvents.call(this);
          return this.options.permanent || (i.preclick = this.close), i;
        },
        _initLayout: function() {
          var i = "leaflet-tooltip", s = i + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = ue("div", s), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + D(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(i) {
          var s, u, _ = this._map, g = this._container, k = _.latLngToContainerPoint(_.getCenter()), I = _.layerPointToContainerPoint(i), N = this.options.direction, j = g.offsetWidth, AA = g.offsetHeight, hA = SA(this.options.offset), TA = this._getAnchor();
          N === "top" ? (s = j / 2, u = AA) : N === "bottom" ? (s = j / 2, u = 0) : N === "center" ? (s = j / 2, u = AA / 2) : N === "right" ? (s = 0, u = AA / 2) : N === "left" ? (s = j, u = AA / 2) : I.x < k.x ? (N = "right", s = 0, u = AA / 2) : (N = "left", s = j + (hA.x + TA.x) * 2, u = AA / 2), i = i.subtract(SA(s, u, !0)).add(hA).add(TA), Fe(g, "leaflet-tooltip-right"), Fe(g, "leaflet-tooltip-left"), Fe(g, "leaflet-tooltip-top"), Fe(g, "leaflet-tooltip-bottom"), JA(g, "leaflet-tooltip-" + N), Ue(g, i);
        },
        _updatePosition: function() {
          var i = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(i);
        },
        setOpacity: function(i) {
          this.options.opacity = i, this._container && Lt(this._container, i);
        },
        _animateZoom: function(i) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center);
          this._setPosition(s);
        },
        _getAnchor: function() {
          return SA(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Vs = function(i, s) {
        return new Ji(i, s);
      };
      XA.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(i, s, u) {
          return this._initOverlay(Ji, i, s, u).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(i) {
          return i.close(), this;
        }
      }), Ht.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(i, s) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ji, this._tooltip, i, s), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(i) {
          if (!(!i && this._tooltipHandlersAdded)) {
            var s = i ? "off" : "on", u = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? u.add = this._openTooltip : (u.mouseover = this._openTooltip, u.mouseout = this.closeTooltip, u.click = this._openTooltip, this._map ? this._addFocusListeners() : u.add = this._addFocusListeners), this._tooltip.options.sticky && (u.mousemove = this._moveTooltip), this[s](u), this._tooltipHandlersAdded = !i;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(i) {
          return this._tooltip && (this instanceof oi || (this._tooltip._source = this), this._tooltip._prepareOpen(i) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(i) {
          return this._tooltip && this._tooltip.setContent(i), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(i) {
          var s = typeof i.getElement == "function" && i.getElement();
          s && (NA(s, "focus", function() {
            this._tooltip._source = i, this.openTooltip();
          }, this), NA(s, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(i) {
          var s = typeof i.getElement == "function" && i.getElement();
          s && s.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(i) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var s = this;
              this._map.once("moveend", function() {
                s._openOnceFlag = !1, s._openTooltip(i);
              });
              return;
            }
            this._tooltip._source = i.layer || i.target, this.openTooltip(this._tooltip.options.sticky ? i.latlng : void 0);
          }
        },
        _moveTooltip: function(i) {
          var s = i.latlng, u, _;
          this._tooltip.options.sticky && i.originalEvent && (u = this._map.mouseEventToContainerPoint(i.originalEvent), _ = this._map.containerPointToLayerPoint(u), s = this._map.layerPointToLatLng(_)), this._tooltip.setLatLng(s);
        }
      });
      var No = qi.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(i) {
          var s = i && i.tagName === "DIV" ? i : document.createElement("div"), u = this.options;
          if (u.html instanceof Element ? (b(s), s.appendChild(u.html)) : s.innerHTML = u.html !== !1 ? u.html : "", u.bgPos) {
            var _ = SA(u.bgPos);
            s.style.backgroundPosition = -_.x + "px " + -_.y + "px";
          }
          return this._setIconStyles(s, "icon"), s;
        },
        createShadow: function() {
          return null;
        }
      });
      function js(i) {
        return new No(i);
      }
      qi.Default = zi;
      var Nn = Ht.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: A.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(i) {
          _A(this, i);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(i) {
          i._addZoomLimit(this);
        },
        onRemove: function(i) {
          this._removeAllTiles(), Ie(this._container), i._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (zn(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Sn(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(i) {
          return this.options.opacity = i, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(i) {
          return this.options.zIndex = i, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var i = this._clampZoom(this._map.getZoom());
            i !== this._tileZoom && (this._tileZoom = i, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var i = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = Y(this._onMoveEnd, this.options.updateInterval, this)), i.move = this._onMove), this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var i = this.options.tileSize;
          return i instanceof QA ? i : new QA(i, i);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(i) {
          for (var s = this.getPane().children, u = -i(-1 / 0, 1 / 0), _ = 0, g = s.length, k; _ < g; _++)
            k = s[_].style.zIndex, s[_] !== this._container && k && (u = i(u, +k));
          isFinite(u) && (this.options.zIndex = u + i(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !A.ielt9) {
            Lt(this._container, this.options.opacity);
            var i = +/* @__PURE__ */ new Date(), s = !1, u = !1;
            for (var _ in this._tiles) {
              var g = this._tiles[_];
              if (!(!g.current || !g.loaded)) {
                var k = Math.min(1, (i - g.loaded) / 200);
                Lt(g.el, k), k < 1 ? s = !0 : (g.active ? u = !0 : this._onOpaqueTile(g), g.active = !0);
              }
            }
            u && !this._noPrune && this._pruneTiles(), s && (ve(this._fadeFrame), this._fadeFrame = Le(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: oA,
        _initContainer: function() {
          this._container || (this._container = ue("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var i = this._tileZoom, s = this.options.maxZoom;
          if (i !== void 0) {
            for (var u in this._levels)
              u = Number(u), this._levels[u].el.children.length || u === i ? (this._levels[u].el.style.zIndex = s - Math.abs(i - u), this._onUpdateLevel(u)) : (Ie(this._levels[u].el), this._removeTilesAtZoom(u), this._onRemoveLevel(u), delete this._levels[u]);
            var _ = this._levels[i], g = this._map;
            return _ || (_ = this._levels[i] = {}, _.el = ue("div", "leaflet-tile-container leaflet-zoom-animated", this._container), _.el.style.zIndex = s, _.origin = g.project(g.unproject(g.getPixelOrigin()), i).round(), _.zoom = i, this._setZoomTransform(_, g.getCenter(), g.getZoom()), oA(_.el.offsetWidth), this._onCreateLevel(_)), this._level = _, _;
          }
        },
        _onUpdateLevel: oA,
        _onRemoveLevel: oA,
        _onCreateLevel: oA,
        _pruneTiles: function() {
          if (this._map) {
            var i, s, u = this._map.getZoom();
            if (u > this.options.maxZoom || u < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (i in this._tiles)
              s = this._tiles[i], s.retain = s.current;
            for (i in this._tiles)
              if (s = this._tiles[i], s.current && !s.active) {
                var _ = s.coords;
                this._retainParent(_.x, _.y, _.z, _.z - 5) || this._retainChildren(_.x, _.y, _.z, _.z + 2);
              }
            for (i in this._tiles)
              this._tiles[i].retain || this._removeTile(i);
          }
        },
        _removeTilesAtZoom: function(i) {
          for (var s in this._tiles)
            this._tiles[s].coords.z === i && this._removeTile(s);
        },
        _removeAllTiles: function() {
          for (var i in this._tiles)
            this._removeTile(i);
        },
        _invalidateAll: function() {
          for (var i in this._levels)
            Ie(this._levels[i].el), this._onRemoveLevel(Number(i)), delete this._levels[i];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(i, s, u, _) {
          var g = Math.floor(i / 2), k = Math.floor(s / 2), I = u - 1, N = new QA(+g, +k);
          N.z = +I;
          var j = this._tileCoordsToKey(N), AA = this._tiles[j];
          return AA && AA.active ? (AA.retain = !0, !0) : (AA && AA.loaded && (AA.retain = !0), I > _ ? this._retainParent(g, k, I, _) : !1);
        },
        _retainChildren: function(i, s, u, _) {
          for (var g = 2 * i; g < 2 * i + 2; g++)
            for (var k = 2 * s; k < 2 * s + 2; k++) {
              var I = new QA(g, k);
              I.z = u + 1;
              var N = this._tileCoordsToKey(I), j = this._tiles[N];
              if (j && j.active) {
                j.retain = !0;
                continue;
              } else j && j.loaded && (j.retain = !0);
              u + 1 < _ && this._retainChildren(g, k, u + 1, _);
            }
        },
        _resetView: function(i) {
          var s = i && (i.pinch || i.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), s, s);
        },
        _animateZoom: function(i) {
          this._setView(i.center, i.zoom, !0, i.noUpdate);
        },
        _clampZoom: function(i) {
          var s = this.options;
          return s.minNativeZoom !== void 0 && i < s.minNativeZoom ? s.minNativeZoom : s.maxNativeZoom !== void 0 && s.maxNativeZoom < i ? s.maxNativeZoom : i;
        },
        _setView: function(i, s, u, _) {
          var g = Math.round(s);
          this.options.maxZoom !== void 0 && g > this.options.maxZoom || this.options.minZoom !== void 0 && g < this.options.minZoom ? g = void 0 : g = this._clampZoom(g);
          var k = this.options.updateWhenZooming && g !== this._tileZoom;
          (!_ || k) && (this._tileZoom = g, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), g !== void 0 && this._update(i), u || this._pruneTiles(), this._noPrune = !!u), this._setZoomTransforms(i, s);
        },
        _setZoomTransforms: function(i, s) {
          for (var u in this._levels)
            this._setZoomTransform(this._levels[u], i, s);
        },
        _setZoomTransform: function(i, s, u) {
          var _ = this._map.getZoomScale(u, i.zoom), g = i.origin.multiplyBy(_).subtract(this._map._getNewPixelOrigin(s, u)).round();
          A.any3d ? Te(i.el, g, _) : Ue(i.el, g);
        },
        _resetGrid: function() {
          var i = this._map, s = i.options.crs, u = this._tileSize = this.getTileSize(), _ = this._tileZoom, g = this._map.getPixelWorldBounds(this._tileZoom);
          g && (this._globalTileRange = this._pxBoundsToTileRange(g)), this._wrapX = s.wrapLng && !this.options.noWrap && [
            Math.floor(i.project([0, s.wrapLng[0]], _).x / u.x),
            Math.ceil(i.project([0, s.wrapLng[1]], _).x / u.y)
          ], this._wrapY = s.wrapLat && !this.options.noWrap && [
            Math.floor(i.project([s.wrapLat[0], 0], _).y / u.x),
            Math.ceil(i.project([s.wrapLat[1], 0], _).y / u.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(i) {
          var s = this._map, u = s._animatingZoom ? Math.max(s._animateToZoom, s.getZoom()) : s.getZoom(), _ = s.getZoomScale(u, this._tileZoom), g = s.project(i, this._tileZoom).floor(), k = s.getSize().divideBy(_ * 2);
          return new ke(g.subtract(k), g.add(k));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(i) {
          var s = this._map;
          if (s) {
            var u = this._clampZoom(s.getZoom());
            if (i === void 0 && (i = s.getCenter()), this._tileZoom !== void 0) {
              var _ = this._getTiledPixelBounds(i), g = this._pxBoundsToTileRange(_), k = g.getCenter(), I = [], N = this.options.keepBuffer, j = new ke(
                g.getBottomLeft().subtract([N, -N]),
                g.getTopRight().add([N, -N])
              );
              if (!(isFinite(g.min.x) && isFinite(g.min.y) && isFinite(g.max.x) && isFinite(g.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var AA in this._tiles) {
                var hA = this._tiles[AA].coords;
                (hA.z !== this._tileZoom || !j.contains(new QA(hA.x, hA.y))) && (this._tiles[AA].current = !1);
              }
              if (Math.abs(u - this._tileZoom) > 1) {
                this._setView(i, u);
                return;
              }
              for (var TA = g.min.y; TA <= g.max.y; TA++)
                for (var VA = g.min.x; VA <= g.max.x; VA++) {
                  var lt = new QA(VA, TA);
                  if (lt.z = this._tileZoom, !!this._isValidTile(lt)) {
                    var At = this._tiles[this._tileCoordsToKey(lt)];
                    At ? At.current = !0 : I.push(lt);
                  }
                }
              if (I.sort(function(Pt, Un) {
                return Pt.distanceTo(k) - Un.distanceTo(k);
              }), I.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var Gt = document.createDocumentFragment();
                for (VA = 0; VA < I.length; VA++)
                  this._addTile(I[VA], Gt);
                this._level.el.appendChild(Gt);
              }
            }
          }
        },
        _isValidTile: function(i) {
          var s = this._map.options.crs;
          if (!s.infinite) {
            var u = this._globalTileRange;
            if (!s.wrapLng && (i.x < u.min.x || i.x > u.max.x) || !s.wrapLat && (i.y < u.min.y || i.y > u.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var _ = this._tileCoordsToBounds(i);
          return De(this.options.bounds).overlaps(_);
        },
        _keyToBounds: function(i) {
          return this._tileCoordsToBounds(this._keyToTileCoords(i));
        },
        _tileCoordsToNwSe: function(i) {
          var s = this._map, u = this.getTileSize(), _ = i.scaleBy(u), g = _.add(u), k = s.unproject(_, i.z), I = s.unproject(g, i.z);
          return [k, I];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(i) {
          var s = this._tileCoordsToNwSe(i), u = new $e(s[0], s[1]);
          return this.options.noWrap || (u = this._map.wrapLatLngBounds(u)), u;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(i) {
          return i.x + ":" + i.y + ":" + i.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(i) {
          var s = i.split(":"), u = new QA(+s[0], +s[1]);
          return u.z = +s[2], u;
        },
        _removeTile: function(i) {
          var s = this._tiles[i];
          s && (Ie(s.el), delete this._tiles[i], this.fire("tileunload", {
            tile: s.el,
            coords: this._keyToTileCoords(i)
          }));
        },
        _initTile: function(i) {
          JA(i, "leaflet-tile");
          var s = this.getTileSize();
          i.style.width = s.x + "px", i.style.height = s.y + "px", i.onselectstart = oA, i.onmousemove = oA, A.ielt9 && this.options.opacity < 1 && Lt(i, this.options.opacity);
        },
        _addTile: function(i, s) {
          var u = this._getTilePos(i), _ = this._tileCoordsToKey(i), g = this.createTile(this._wrapCoords(i), z(this._tileReady, this, i));
          this._initTile(g), this.createTile.length < 2 && Le(z(this._tileReady, this, i, null, g)), Ue(g, u), this._tiles[_] = {
            el: g,
            coords: i,
            current: !0
          }, s.appendChild(g), this.fire("tileloadstart", {
            tile: g,
            coords: i
          });
        },
        _tileReady: function(i, s, u) {
          s && this.fire("tileerror", {
            error: s,
            tile: u,
            coords: i
          });
          var _ = this._tileCoordsToKey(i);
          u = this._tiles[_], u && (u.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Lt(u.el, 0), ve(this._fadeFrame), this._fadeFrame = Le(this._updateOpacity, this)) : (u.active = !0, this._pruneTiles()), s || (JA(u.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: u.el,
            coords: i
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), A.ielt9 || !this._map._fadeAnimated ? Le(this._pruneTiles, this) : setTimeout(z(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(i) {
          return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(i) {
          var s = new QA(
            this._wrapX ? J(i.x, this._wrapX) : i.x,
            this._wrapY ? J(i.y, this._wrapY) : i.y
          );
          return s.z = i.z, s;
        },
        _pxBoundsToTileRange: function(i) {
          var s = this.getTileSize();
          return new ke(
            i.min.unscaleBy(s).floor(),
            i.max.unscaleBy(s).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var i in this._tiles)
            if (!this._tiles[i].loaded)
              return !1;
          return !0;
        }
      });
      function Ys(i) {
        return new Nn(i);
      }
      var Hn = Nn.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(i, s) {
          this._url = i, s = _A(this, s), s.detectRetina && A.retina && s.maxZoom > 0 ? (s.tileSize = Math.floor(s.tileSize / 2), s.zoomReverse ? (s.zoomOffset--, s.minZoom = Math.min(s.maxZoom, s.minZoom + 1)) : (s.zoomOffset++, s.maxZoom = Math.max(s.minZoom, s.maxZoom - 1)), s.minZoom = Math.max(0, s.minZoom)) : s.zoomReverse ? s.minZoom = Math.min(s.maxZoom, s.minZoom) : s.maxZoom = Math.max(s.minZoom, s.maxZoom), typeof s.subdomains == "string" && (s.subdomains = s.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(i, s) {
          return this._url === i && s === void 0 && (s = !0), this._url = i, s || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(i, s) {
          var u = document.createElement("img");
          return NA(u, "load", z(this._tileOnLoad, this, s, u)), NA(u, "error", z(this._tileOnError, this, s, u)), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (u.referrerPolicy = this.options.referrerPolicy), u.alt = "", u.src = this.getTileUrl(i), u;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(i) {
          var s = {
            r: A.retina ? "@2x" : "",
            s: this._getSubdomain(i),
            x: i.x,
            y: i.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var u = this._globalTileRange.max.y - i.y;
            this.options.tms && (s.y = u), s["-y"] = u;
          }
          return we(this._url, x(s, this.options));
        },
        _tileOnLoad: function(i, s) {
          A.ielt9 ? setTimeout(z(i, this, null, s), 0) : i(null, s);
        },
        _tileOnError: function(i, s, u) {
          var _ = this.options.errorTileUrl;
          _ && s.getAttribute("src") !== _ && (s.src = _), i(u, s);
        },
        _onTileRemove: function(i) {
          i.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var i = this._tileZoom, s = this.options.maxZoom, u = this.options.zoomReverse, _ = this.options.zoomOffset;
          return u && (i = s - i), i + _;
        },
        _getSubdomain: function(i) {
          var s = Math.abs(i.x + i.y) % this.options.subdomains.length;
          return this.options.subdomains[s];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var i, s;
          for (i in this._tiles)
            if (this._tiles[i].coords.z !== this._tileZoom && (s = this._tiles[i].el, s.onload = oA, s.onerror = oA, !s.complete)) {
              s.src = Ee;
              var u = this._tiles[i].coords;
              Ie(s), delete this._tiles[i], this.fire("tileabort", {
                tile: s,
                coords: u
              });
            }
        },
        _removeTile: function(i) {
          var s = this._tiles[i];
          if (s)
            return s.el.setAttribute("src", Ee), Nn.prototype._removeTile.call(this, i);
        },
        _tileReady: function(i, s, u) {
          if (!(!this._map || u && u.getAttribute("src") === Ee))
            return Nn.prototype._tileReady.call(this, i, s, u);
        }
      });
      function Ho(i, s) {
        return new Hn(i, s);
      }
      var pr = Hn.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(i, s) {
          this._url = i;
          var u = x({}, this.defaultWmsParams);
          for (var _ in s)
            _ in this.options || (u[_] = s[_]);
          s = _A(this, s);
          var g = s.detectRetina && A.retina ? 2 : 1, k = this.getTileSize();
          u.width = k.x * g, u.height = k.y * g, this.wmsParams = u;
        },
        onAdd: function(i) {
          this._crs = this.options.crs || i.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var s = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[s] = this._crs.code, Hn.prototype.onAdd.call(this, i);
        },
        getTileUrl: function(i) {
          var s = this._tileCoordsToNwSe(i), u = this._crs, _ = Ve(u.project(s[0]), u.project(s[1])), g = _.min, k = _.max, I = (this._wmsVersion >= 1.3 && this._crs === q0 ? [g.y, g.x, k.y, k.x] : [g.x, g.y, k.x, k.y]).join(","), N = Hn.prototype.getTileUrl.call(this, i);
          return N + aA(this.wmsParams, N, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + I;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(i, s) {
          return x(this.wmsParams, i), s || this.redraw(), this;
        }
      });
      function Uo(i, s) {
        return new pr(i, s);
      }
      Hn.WMS = pr, Ho.wms = Uo;
      var li = Ht.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(i) {
          _A(this, i), D(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), JA(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var i = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i;
        },
        _onAnimZoom: function(i) {
          this._updateTransform(i.center, i.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(i, s) {
          var u = this._map.getZoomScale(s, this._zoom), _ = this._map.getSize().multiplyBy(0.5 + this.options.padding), g = this._map.project(this._center, s), k = _.multiplyBy(-u).add(g).subtract(this._map._getNewPixelOrigin(i, s));
          A.any3d ? Te(this._container, k, u) : Ue(this._container, k);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var i in this._layers)
            this._layers[i]._reset();
        },
        _onZoomEnd: function() {
          for (var i in this._layers)
            this._layers[i]._project();
        },
        _updatePaths: function() {
          for (var i in this._layers)
            this._layers[i]._update();
        },
        _update: function() {
          var i = this.options.padding, s = this._map.getSize(), u = this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();
          this._bounds = new ke(u, u.add(s.multiplyBy(1 + i * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), Go = li.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var i = li.prototype.getEvents.call(this);
          return i.viewprereset = this._onViewPreReset, i;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          li.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var i = this._container = document.createElement("canvas");
          NA(i, "mousemove", this._onMouseMove, this), NA(i, "click dblclick mousedown mouseup contextmenu", this._onClick, this), NA(i, "mouseout", this._handleMouseOut, this), i._leaflet_disable_events = !0, this._ctx = i.getContext("2d");
        },
        _destroyContainer: function() {
          ve(this._redrawRequest), delete this._ctx, Ie(this._container), me(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var i;
            this._redrawBounds = null;
            for (var s in this._layers)
              i = this._layers[s], i._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            li.prototype._update.call(this);
            var i = this._bounds, s = this._container, u = i.getSize(), _ = A.retina ? 2 : 1;
            Ue(s, i.min), s.width = _ * u.x, s.height = _ * u.y, s.style.width = u.x + "px", s.style.height = u.y + "px", A.retina && this._ctx.scale(2, 2), this._ctx.translate(-i.min.x, -i.min.y), this.fire("update");
          }
        },
        _reset: function() {
          li.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(i) {
          this._updateDashArray(i), this._layers[D(i)] = i;
          var s = i._order = {
            layer: i,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = s), this._drawLast = s, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(i) {
          this._requestRedraw(i);
        },
        _removePath: function(i) {
          var s = i._order, u = s.next, _ = s.prev;
          u ? u.prev = _ : this._drawLast = _, _ ? _.next = u : this._drawFirst = u, delete i._order, delete this._layers[D(i)], this._requestRedraw(i);
        },
        _updatePath: function(i) {
          this._extendRedrawBounds(i), i._project(), i._update(), this._requestRedraw(i);
        },
        _updateStyle: function(i) {
          this._updateDashArray(i), this._requestRedraw(i);
        },
        _updateDashArray: function(i) {
          if (typeof i.options.dashArray == "string") {
            var s = i.options.dashArray.split(/[, ]+/), u = [], _, g;
            for (g = 0; g < s.length; g++) {
              if (_ = Number(s[g]), isNaN(_))
                return;
              u.push(_);
            }
            i.options._dashArray = u;
          } else
            i.options._dashArray = i.options.dashArray;
        },
        _requestRedraw: function(i) {
          this._map && (this._extendRedrawBounds(i), this._redrawRequest = this._redrawRequest || Le(this._redraw, this));
        },
        _extendRedrawBounds: function(i) {
          if (i._pxBounds) {
            var s = (i.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new ke(), this._redrawBounds.extend(i._pxBounds.min.subtract([s, s])), this._redrawBounds.extend(i._pxBounds.max.add([s, s]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var i = this._redrawBounds;
          if (i) {
            var s = i.getSize();
            this._ctx.clearRect(i.min.x, i.min.y, s.x, s.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var i, s = this._redrawBounds;
          if (this._ctx.save(), s) {
            var u = s.getSize();
            this._ctx.beginPath(), this._ctx.rect(s.min.x, s.min.y, u.x, u.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var _ = this._drawFirst; _; _ = _.next)
            i = _.layer, (!s || i._pxBounds && i._pxBounds.intersects(s)) && i._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(i, s) {
          if (this._drawing) {
            var u, _, g, k, I = i._parts, N = I.length, j = this._ctx;
            if (N) {
              for (j.beginPath(), u = 0; u < N; u++) {
                for (_ = 0, g = I[u].length; _ < g; _++)
                  k = I[u][_], j[_ ? "lineTo" : "moveTo"](k.x, k.y);
                s && j.closePath();
              }
              this._fillStroke(j, i);
            }
          }
        },
        _updateCircle: function(i) {
          if (!(!this._drawing || i._empty())) {
            var s = i._point, u = this._ctx, _ = Math.max(Math.round(i._radius), 1), g = (Math.max(Math.round(i._radiusY), 1) || _) / _;
            g !== 1 && (u.save(), u.scale(1, g)), u.beginPath(), u.arc(s.x, s.y / g, _, 0, Math.PI * 2, !1), g !== 1 && u.restore(), this._fillStroke(u, i);
          }
        },
        _fillStroke: function(i, s) {
          var u = s.options;
          u.fill && (i.globalAlpha = u.fillOpacity, i.fillStyle = u.fillColor || u.color, i.fill(u.fillRule || "evenodd")), u.stroke && u.weight !== 0 && (i.setLineDash && i.setLineDash(s.options && s.options._dashArray || []), i.globalAlpha = u.opacity, i.lineWidth = u.weight, i.strokeStyle = u.color, i.lineCap = u.lineCap, i.lineJoin = u.lineJoin, i.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(i) {
          for (var s = this._map.mouseEventToLayerPoint(i), u, _, g = this._drawFirst; g; g = g.next)
            u = g.layer, u.options.interactive && u._containsPoint(s) && (!(i.type === "click" || i.type === "preclick") || !this._map._draggableMoved(u)) && (_ = u);
          this._fireEvent(_ ? [_] : !1, i);
        },
        _onMouseMove: function(i) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var s = this._map.mouseEventToLayerPoint(i);
            this._handleMouseHover(i, s);
          }
        },
        _handleMouseOut: function(i) {
          var s = this._hoveredLayer;
          s && (Fe(this._container, "leaflet-interactive"), this._fireEvent([s], i, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(i, s) {
          if (!this._mouseHoverThrottled) {
            for (var u, _, g = this._drawFirst; g; g = g.next)
              u = g.layer, u.options.interactive && u._containsPoint(s) && (_ = u);
            _ !== this._hoveredLayer && (this._handleMouseOut(i), _ && (JA(this._container, "leaflet-interactive"), this._fireEvent([_], i, "mouseover"), this._hoveredLayer = _)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, i), this._mouseHoverThrottled = !0, setTimeout(z(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(i, s, u) {
          this._map._fireDOMEvent(s, u || s.type, i);
        },
        _bringToFront: function(i) {
          var s = i._order;
          if (s) {
            var u = s.next, _ = s.prev;
            if (u)
              u.prev = _;
            else
              return;
            _ ? _.next = u : u && (this._drawFirst = u), s.prev = this._drawLast, this._drawLast.next = s, s.next = null, this._drawLast = s, this._requestRedraw(i);
          }
        },
        _bringToBack: function(i) {
          var s = i._order;
          if (s) {
            var u = s.next, _ = s.prev;
            if (_)
              _.next = u;
            else
              return;
            u ? u.prev = _ : _ && (this._drawLast = _), s.prev = null, s.next = this._drawFirst, this._drawFirst.prev = s, this._drawFirst = s, this._requestRedraw(i);
          }
        }
      });
      function Wo(i) {
        return A.canvas ? new Go(i) : null;
      }
      var vr = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(i) {
            return document.createElement("<lvml:" + i + ' class="lvml">');
          };
        } catch {
        }
        return function(i) {
          return document.createElement("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), qs = {
        _initContainer: function() {
          this._container = ue("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (li.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(i) {
          var s = i._container = vr("shape");
          JA(s, "leaflet-vml-shape " + (this.options.className || "")), s.coordsize = "1 1", i._path = vr("path"), s.appendChild(i._path), this._updateStyle(i), this._layers[D(i)] = i;
        },
        _addPath: function(i) {
          var s = i._container;
          this._container.appendChild(s), i.options.interactive && i.addInteractiveTarget(s);
        },
        _removePath: function(i) {
          var s = i._container;
          Ie(s), i.removeInteractiveTarget(s), delete this._layers[D(i)];
        },
        _updateStyle: function(i) {
          var s = i._stroke, u = i._fill, _ = i.options, g = i._container;
          g.stroked = !!_.stroke, g.filled = !!_.fill, _.stroke ? (s || (s = i._stroke = vr("stroke")), g.appendChild(s), s.weight = _.weight + "px", s.color = _.color, s.opacity = _.opacity, _.dashArray ? s.dashStyle = LA(_.dashArray) ? _.dashArray.join(" ") : _.dashArray.replace(/( *, *)/g, " ") : s.dashStyle = "", s.endcap = _.lineCap.replace("butt", "flat"), s.joinstyle = _.lineJoin) : s && (g.removeChild(s), i._stroke = null), _.fill ? (u || (u = i._fill = vr("fill")), g.appendChild(u), u.color = _.fillColor || _.color, u.opacity = _.fillOpacity) : u && (g.removeChild(u), i._fill = null);
        },
        _updateCircle: function(i) {
          var s = i._point.round(), u = Math.round(i._radius), _ = Math.round(i._radiusY || u);
          this._setPath(i, i._empty() ? "M0 0" : "AL " + s.x + "," + s.y + " " + u + "," + _ + " 0," + 65535 * 360);
        },
        _setPath: function(i, s) {
          i._path.v = s;
        },
        _bringToFront: function(i) {
          zn(i._container);
        },
        _bringToBack: function(i) {
          Sn(i._container);
        }
      }, n0 = A.vml ? vr : Nr, mr = li.extend({
        _initContainer: function() {
          this._container = n0("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = n0("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          Ie(this._container), me(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            li.prototype._update.call(this);
            var i = this._bounds, s = i.getSize(), u = this._container;
            (!this._svgSize || !this._svgSize.equals(s)) && (this._svgSize = s, u.setAttribute("width", s.x), u.setAttribute("height", s.y)), Ue(u, i.min), u.setAttribute("viewBox", [i.min.x, i.min.y, s.x, s.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(i) {
          var s = i._path = n0("path");
          i.options.className && JA(s, i.options.className), i.options.interactive && JA(s, "leaflet-interactive"), this._updateStyle(i), this._layers[D(i)] = i;
        },
        _addPath: function(i) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(i._path), i.addInteractiveTarget(i._path);
        },
        _removePath: function(i) {
          Ie(i._path), i.removeInteractiveTarget(i._path), delete this._layers[D(i)];
        },
        _updatePath: function(i) {
          i._project(), i._update();
        },
        _updateStyle: function(i) {
          var s = i._path, u = i.options;
          s && (u.stroke ? (s.setAttribute("stroke", u.color), s.setAttribute("stroke-opacity", u.opacity), s.setAttribute("stroke-width", u.weight), s.setAttribute("stroke-linecap", u.lineCap), s.setAttribute("stroke-linejoin", u.lineJoin), u.dashArray ? s.setAttribute("stroke-dasharray", u.dashArray) : s.removeAttribute("stroke-dasharray"), u.dashOffset ? s.setAttribute("stroke-dashoffset", u.dashOffset) : s.removeAttribute("stroke-dashoffset")) : s.setAttribute("stroke", "none"), u.fill ? (s.setAttribute("fill", u.fillColor || u.color), s.setAttribute("fill-opacity", u.fillOpacity), s.setAttribute("fill-rule", u.fillRule || "evenodd")) : s.setAttribute("fill", "none"));
        },
        _updatePoly: function(i, s) {
          this._setPath(i, Hr(i._parts, s));
        },
        _updateCircle: function(i) {
          var s = i._point, u = Math.max(Math.round(i._radius), 1), _ = Math.max(Math.round(i._radiusY), 1) || u, g = "a" + u + "," + _ + " 0 1,0 ", k = i._empty() ? "M0 0" : "M" + (s.x - u) + "," + s.y + g + u * 2 + ",0 " + g + -u * 2 + ",0 ";
          this._setPath(i, k);
        },
        _setPath: function(i, s) {
          i._path.setAttribute("d", s);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(i) {
          zn(i._path);
        },
        _bringToBack: function(i) {
          Sn(i._path);
        }
      });
      A.vml && mr.include(qs);
      function Vo(i) {
        return A.svg || A.vml ? new mr(i) : null;
      }
      XA.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(i) {
          var s = i.options.renderer || this._getPaneRenderer(i.options.pane) || this.options.renderer || this._renderer;
          return s || (s = this._renderer = this._createRenderer()), this.hasLayer(s) || this.addLayer(s), s;
        },
        _getPaneRenderer: function(i) {
          if (i === "overlayPane" || i === void 0)
            return !1;
          var s = this._paneRenderers[i];
          return s === void 0 && (s = this._createRenderer({ pane: i }), this._paneRenderers[i] = s), s;
        },
        _createRenderer: function(i) {
          return this.options.preferCanvas && Wo(i) || Vo(i);
        }
      });
      var Ao = Ut.extend({
        initialize: function(i, s) {
          Ut.prototype.initialize.call(this, this._boundsToLatLngs(i), s);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(i) {
          return this.setLatLngs(this._boundsToLatLngs(i));
        },
        _boundsToLatLngs: function(i) {
          return i = De(i), [
            i.getSouthWest(),
            i.getNorthWest(),
            i.getNorthEast(),
            i.getSouthEast()
          ];
        }
      });
      function Ks(i, s) {
        return new Ao(i, s);
      }
      mr.create = n0, mr.pointsToPath = Hr, si.geometryToLayer = Xr, si.coordsToLatLng = dr, si.coordsToLatLngs = Fn, si.latLngToCoords = Ki, si.latLngsToCoords = mi, si.getFeature = ai, si.asFeature = $r, XA.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var eo = Dt.extend({
        initialize: function(i) {
          this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
        },
        addHooks: function() {
          NA(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          me(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          Ie(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(i) {
          if (!i.shiftKey || i.which !== 1 && i.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), ar(), D0(), this._startPoint = this._map.mouseEventToContainerPoint(i), NA(document, {
            contextmenu: ji,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(i) {
          this._moved || (this._moved = !0, this._box = ue("div", "leaflet-zoom-box", this._container), JA(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i);
          var s = new ke(this._point, this._startPoint), u = s.getSize();
          Ue(this._box, s.min), this._box.style.width = u.x + "px", this._box.style.height = u.y + "px";
        },
        _finish: function() {
          this._moved && (Ie(this._box), Fe(this._container, "leaflet-crosshair")), gn(), I0(), me(document, {
            contextmenu: ji,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(i) {
          if (!(i.which !== 1 && i.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(z(this._resetState, this), 0);
            var s = new $e(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(s).fire("boxzoomend", { boxZoomBounds: s });
          }
        },
        _onKeyDown: function(i) {
          i.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      XA.addInitHook("addHandler", "boxZoom", eo), XA.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var gi = Dt.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(i) {
          var s = this._map, u = s.getZoom(), _ = s.options.zoomDelta, g = i.originalEvent.shiftKey ? u - _ : u + _;
          s.options.doubleClickZoom === "center" ? s.setZoom(g) : s.setZoomAround(i.containerPoint, g);
        }
      });
      XA.addInitHook("addHandler", "doubleClickZoom", gi), XA.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var to = Dt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var i = this._map;
            this._draggable = new Ii(i._mapPane, i._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), i.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), i.on("zoomend", this._onZoomEnd, this), i.whenReady(this._onZoomEnd, this));
          }
          JA(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          Fe(this._map._container, "leaflet-grab"), Fe(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var i = this._map;
          if (i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var s = De(this._map.options.maxBounds);
            this._offsetLimit = Ve(
              this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(i) {
          if (this._map.options.inertia) {
            var s = this._lastTime = +/* @__PURE__ */ new Date(), u = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(u), this._times.push(s), this._prunePositions(s);
          }
          this._map.fire("move", i).fire("drag", i);
        },
        _prunePositions: function(i) {
          for (; this._positions.length > 1 && i - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var i = this._map.getSize().divideBy(2), s = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = s.subtract(i).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(i, s) {
          return i - (i - s) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var i = this._draggable._newPos.subtract(this._draggable._startPos), s = this._offsetLimit;
            i.x < s.min.x && (i.x = this._viscousLimit(i.x, s.min.x)), i.y < s.min.y && (i.y = this._viscousLimit(i.y, s.min.y)), i.x > s.max.x && (i.x = this._viscousLimit(i.x, s.max.x)), i.y > s.max.y && (i.y = this._viscousLimit(i.y, s.max.y)), this._draggable._newPos = this._draggable._startPos.add(i);
          }
        },
        _onPreDragWrap: function() {
          var i = this._worldWidth, s = Math.round(i / 2), u = this._initialWorldOffset, _ = this._draggable._newPos.x, g = (_ - s + u) % i + s - u, k = (_ + s + u) % i - s - u, I = Math.abs(g + u) < Math.abs(k + u) ? g : k;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = I;
        },
        _onDragEnd: function(i) {
          var s = this._map, u = s.options, _ = !u.inertia || i.noInertia || this._times.length < 2;
          if (s.fire("dragend", i), _)
            s.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var g = this._lastPos.subtract(this._positions[0]), k = (this._lastTime - this._times[0]) / 1e3, I = u.easeLinearity, N = g.multiplyBy(I / k), j = N.distanceTo([0, 0]), AA = Math.min(u.inertiaMaxSpeed, j), hA = N.multiplyBy(AA / j), TA = AA / (u.inertiaDeceleration * I), VA = hA.multiplyBy(-TA / 2).round();
            !VA.x && !VA.y ? s.fire("moveend") : (VA = s._limitOffset(VA, s.options.maxBounds), Le(function() {
              s.panBy(VA, {
                duration: TA,
                easeLinearity: I,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      XA.addInitHook("addHandler", "dragging", to), XA.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var jo = Dt.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(i) {
          this._map = i, this._setPanDelta(i.options.keyboardPanDelta), this._setZoomDelta(i.options.zoomDelta);
        },
        addHooks: function() {
          var i = this._map._container;
          i.tabIndex <= 0 && (i.tabIndex = "0"), NA(i, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), me(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var i = document.body, s = document.documentElement, u = i.scrollTop || s.scrollTop, _ = i.scrollLeft || s.scrollLeft;
            this._map._container.focus(), window.scrollTo(_, u);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(i) {
          var s = this._panKeys = {}, u = this.keyCodes, _, g;
          for (_ = 0, g = u.left.length; _ < g; _++)
            s[u.left[_]] = [-1 * i, 0];
          for (_ = 0, g = u.right.length; _ < g; _++)
            s[u.right[_]] = [i, 0];
          for (_ = 0, g = u.down.length; _ < g; _++)
            s[u.down[_]] = [0, i];
          for (_ = 0, g = u.up.length; _ < g; _++)
            s[u.up[_]] = [0, -1 * i];
        },
        _setZoomDelta: function(i) {
          var s = this._zoomKeys = {}, u = this.keyCodes, _, g;
          for (_ = 0, g = u.zoomIn.length; _ < g; _++)
            s[u.zoomIn[_]] = i;
          for (_ = 0, g = u.zoomOut.length; _ < g; _++)
            s[u.zoomOut[_]] = -i;
        },
        _addHooks: function() {
          NA(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          me(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(i) {
          if (!(i.altKey || i.ctrlKey || i.metaKey)) {
            var s = i.keyCode, u = this._map, _;
            if (s in this._panKeys) {
              if (!u._panAnim || !u._panAnim._inProgress)
                if (_ = this._panKeys[s], i.shiftKey && (_ = SA(_).multiplyBy(3)), u.options.maxBounds && (_ = u._limitOffset(SA(_), u.options.maxBounds)), u.options.worldCopyJump) {
                  var g = u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(_)));
                  u.panTo(g);
                } else
                  u.panBy(_);
            } else if (s in this._zoomKeys)
              u.setZoom(u.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[s]);
            else if (s === 27 && u._popup && u._popup.options.closeOnEscapeKey)
              u.closePopup();
            else
              return;
            ji(i);
          }
        }
      });
      XA.addInitHook("addHandler", "keyboard", jo), XA.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var Yo = Dt.extend({
        addHooks: function() {
          NA(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          me(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(i) {
          var s = Io(i), u = this._map.options.wheelDebounceTime;
          this._delta += s, this._lastMousePos = this._map.mouseEventToContainerPoint(i), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var _ = Math.max(u - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(z(this._performZoom, this), _), ji(i);
        },
        _performZoom: function() {
          var i = this._map, s = i.getZoom(), u = this._map.options.zoomSnap || 0;
          i._stop();
          var _ = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), g = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(_)))) / Math.LN2, k = u ? Math.ceil(g / u) * u : g, I = i._limitZoom(s + (this._delta > 0 ? k : -k)) - s;
          this._delta = 0, this._startTime = null, I && (i.options.scrollWheelZoom === "center" ? i.setZoom(s + I) : i.setZoomAround(this._lastMousePos, s + I));
        }
      });
      XA.addInitHook("addHandler", "scrollWheelZoom", Yo);
      var Js = 600;
      XA.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: A.touchNative && A.safari && A.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var qo = Dt.extend({
        addHooks: function() {
          NA(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          me(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(i) {
          if (clearTimeout(this._holdTimeout), i.touches.length === 1) {
            var s = i.touches[0];
            this._startPos = this._newPos = new QA(s.clientX, s.clientY), this._holdTimeout = setTimeout(z(function() {
              this._cancel(), this._isTapValid() && (NA(document, "touchend", nt), NA(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", s));
            }, this), Js), NA(document, "touchend touchcancel contextmenu", this._cancel, this), NA(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function i() {
          me(document, "touchend", nt), me(document, "touchend touchcancel", i);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), me(document, "touchend touchcancel contextmenu", this._cancel, this), me(document, "touchmove", this._onMove, this);
        },
        _onMove: function(i) {
          var s = i.touches[0];
          this._newPos = new QA(s.clientX, s.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(i, s) {
          var u = new MouseEvent(i, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: s.screenX,
            screenY: s.screenY,
            clientX: s.clientX,
            clientY: s.clientY
            // button: 2,
            // buttons: 2
          });
          u._simulated = !0, s.target.dispatchEvent(u);
        }
      });
      XA.addInitHook("addHandler", "tapHold", qo), XA.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: A.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var Ko = Dt.extend({
        addHooks: function() {
          JA(this._map._container, "leaflet-touch-zoom"), NA(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          Fe(this._map._container, "leaflet-touch-zoom"), me(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(i) {
          var s = this._map;
          if (!(!i.touches || i.touches.length !== 2 || s._animatingZoom || this._zooming)) {
            var u = s.mouseEventToContainerPoint(i.touches[0]), _ = s.mouseEventToContainerPoint(i.touches[1]);
            this._centerPoint = s.getSize()._divideBy(2), this._startLatLng = s.containerPointToLatLng(this._centerPoint), s.options.touchZoom !== "center" && (this._pinchStartLatLng = s.containerPointToLatLng(u.add(_)._divideBy(2))), this._startDist = u.distanceTo(_), this._startZoom = s.getZoom(), this._moved = !1, this._zooming = !0, s._stop(), NA(document, "touchmove", this._onTouchMove, this), NA(document, "touchend touchcancel", this._onTouchEnd, this), nt(i);
          }
        },
        _onTouchMove: function(i) {
          if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
            var s = this._map, u = s.mouseEventToContainerPoint(i.touches[0]), _ = s.mouseEventToContainerPoint(i.touches[1]), g = u.distanceTo(_) / this._startDist;
            if (this._zoom = s.getScaleZoom(g, this._startZoom), !s.options.bounceAtZoomLimits && (this._zoom < s.getMinZoom() && g < 1 || this._zoom > s.getMaxZoom() && g > 1) && (this._zoom = s._limitZoom(this._zoom)), s.options.touchZoom === "center") {
              if (this._center = this._startLatLng, g === 1)
                return;
            } else {
              var k = u._add(_)._divideBy(2)._subtract(this._centerPoint);
              if (g === 1 && k.x === 0 && k.y === 0)
                return;
              this._center = s.unproject(s.project(this._pinchStartLatLng, this._zoom).subtract(k), this._zoom);
            }
            this._moved || (s._moveStart(!0, !1), this._moved = !0), ve(this._animRequest);
            var I = z(s._move, s, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = Le(I, this, !0), nt(i);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, ve(this._animRequest), me(document, "touchmove", this._onTouchMove, this), me(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      XA.addInitHook("addHandler", "touchZoom", Ko), XA.BoxZoom = eo, XA.DoubleClickZoom = gi, XA.Drag = to, XA.Keyboard = jo, XA.ScrollWheelZoom = Yo, XA.TapHold = qo, XA.TouchZoom = Ko, p.Bounds = ke, p.Browser = A, p.CRS = $t, p.Canvas = Go, p.Circle = J0, p.CircleMarker = Jr, p.Class = kt, p.Control = Mt, p.DivIcon = No, p.DivOverlay = gt, p.DomEvent = Ls, p.DomUtil = Bs, p.Draggable = Ii, p.Evented = Xt, p.FeatureGroup = oi, p.GeoJSON = si, p.GridLayer = Nn, p.Handler = Dt, p.Icon = qi, p.ImageOverlay = e0, p.LatLng = de, p.LatLngBounds = $e, p.Layer = Ht, p.LayerGroup = Zn, p.LineUtil = j0, p.Map = XA, p.Marker = Kr, p.Mixin = xn, p.Path = Si, p.Point = QA, p.PolyUtil = Ds, p.Polygon = Ut, p.Polyline = Qe, p.Popup = at, p.PosAnimation = rt, p.Projection = Qs, p.Rectangle = Ao, p.Renderer = li, p.SVG = mr, p.SVGOverlay = i0, p.TileLayer = Hn, p.Tooltip = Ji, p.Transformation = cn, p.Util = xt, p.VideoOverlay = t0, p.bind = z, p.bounds = Ve, p.canvas = Wo, p.circle = Hs, p.circleMarker = Ns, p.control = Qn, p.divIcon = js, p.extend = x, p.featureGroup = Fs, p.geoJSON = Zo, p.geoJson = $0, p.gridLayer = Ys, p.icon = K0, p.imageOverlay = Gs, p.latLng = ee, p.latLngBounds = De, p.layerGroup = Zs, p.map = mt, p.marker = Ro, p.point = SA, p.polygon = Us, p.polyline = X0, p.popup = Ws, p.rectangle = Ks, p.setOptions = _A, p.stamp = D, p.svg = Vo, p.svgOverlay = _r, p.tileLayer = Ho, p.tooltip = Vs, p.transformation = Ni, p.version = w, p.videoOverlay = Fo;
      var Xi = window.L;
      p.noConflict = function() {
        return window.L = Xi, this;
      }, window.L = p;
    }));
  })(ao, ao.exports)), ao.exports;
}
var ou = gh();
const su = /* @__PURE__ */ vh(ou), wh = /* @__PURE__ */ Du({
  __proto__: null,
  default: su
}, [ou]);
var U = (function(h) {
  h = h || {};
  var c = typeof h < "u" ? h : {}, p = {}, w;
  for (w in c)
    c.hasOwnProperty(w) && (p[w] = c[w]);
  var x = "";
  function B(G) {
    return c.locateFile ? c.locateFile(G, x) : x + G;
  }
  var z;
  typeof document < "u" && document.currentScript && (x = document.currentScript.src), x.indexOf("blob:") !== 0 ? x = x.substr(0, x.lastIndexOf("/") + 1) : x = "", z = function(K, uA, q) {
    var A = new XMLHttpRequest();
    A.open("GET", K, !0), A.responseType = "arraybuffer", A.onload = function() {
      if (A.status == 200 || A.status == 0 && A.response) {
        uA(A.response);
        return;
      }
      var qA = Ce(K);
      if (qA) {
        uA(qA.buffer);
        return;
      }
      q();
    }, A.onerror = q, A.send(null);
  };
  var Q = c.print || console.log.bind(console), D = c.printErr || console.warn.bind(console);
  for (w in p)
    p.hasOwnProperty(w) && (c[w] = p[w]);
  p = null, c.arguments && c.arguments;
  var Y = 0, J = function(G) {
    Y = G;
  }, oA = function() {
    return Y;
  }, nA = 8;
  function sA(G, K, uA, q) {
    switch (uA = uA || "i8", uA.charAt(uA.length - 1) === "*" && (uA = "i32"), uA) {
      case "i1":
        ve[G >> 0] = K;
        break;
      case "i8":
        ve[G >> 0] = K;
        break;
      case "i16":
        kt[G >> 1] = K;
        break;
      case "i32":
        Rt[G >> 2] = K;
        break;
      case "i64":
        Ze = [K >>> 0, (re = K, +rr(re) >= 1 ? re > 0 ? (Hr(+Nr(re / 4294967296), 4294967295) | 0) >>> 0 : ~~+E0((re - +(~~re >>> 0)) / 4294967296) >>> 0 : 0)], Rt[G >> 2] = Ze[0], Rt[G + 4 >> 2] = Ze[1];
        break;
      case "float":
        tt[G >> 2] = K;
        break;
      case "double":
        Xt[G >> 3] = K;
        break;
      default:
        ri("invalid type for setValue: " + uA);
    }
  }
  function rA(G, K, uA) {
    switch (K = K || "i8", K.charAt(K.length - 1) === "*" && (K = "i32"), K) {
      case "i1":
        return ve[G >> 0];
      case "i8":
        return ve[G >> 0];
      case "i16":
        return kt[G >> 1];
      case "i32":
        return Rt[G >> 2];
      case "i64":
        return Rt[G >> 2];
      case "float":
        return tt[G >> 2];
      case "double":
        return Xt[G >> 3];
      default:
        ri("invalid type for getValue: " + K);
    }
    return null;
  }
  var _A = !1;
  function aA(G, K) {
    G || ri("Assertion failed: " + K);
  }
  function $A(G) {
    var K = c["_" + G];
    return aA(K, "Cannot call unknown function " + G + ", make sure it is exported"), K;
  }
  function we(G, K, uA, q, A) {
    var y = {
      string: function(ZA) {
        var vt = 0;
        if (ZA != null && ZA !== 0) {
          var In = (ZA.length << 2) + 1;
          vt = Ui(In), Qt(ZA, vt, In);
        }
        return vt;
      },
      array: function(ZA) {
        var vt = Ui(ZA.length);
        return bt(ZA, vt), vt;
      }
    };
    function qA(ZA) {
      return K === "string" ? ce(ZA) : K === "boolean" ? !!ZA : ZA;
    }
    var gA = $A(G), ne = [], EA = 0;
    if (q)
      for (var KA = 0; KA < q.length; KA++) {
        var pt = y[uA[KA]];
        pt ? (EA === 0 && (EA = _n()), ne[KA] = pt(q[KA])) : ne[KA] = q[KA];
      }
    var oe = gA.apply(null, ne);
    return oe = qA(oe), EA !== 0 && Dn(EA), oe;
  }
  function LA(G, K, uA, q) {
    uA = uA || [];
    var A = uA.every(function(qA) {
      return qA === "number";
    }), y = K !== "string";
    return y && A && !q ? $A(G) : function() {
      return we(G, K, uA, arguments);
    };
  }
  var fe = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function Ee(G, K, uA) {
    for (var q = K + uA, A = K; G[A] && !(A >= q); )
      ++A;
    if (A - K > 16 && G.subarray && fe)
      return fe.decode(G.subarray(K, A));
    for (var y = ""; K < A; ) {
      var qA = G[K++];
      if (!(qA & 128)) {
        y += String.fromCharCode(qA);
        continue;
      }
      var gA = G[K++] & 63;
      if ((qA & 224) == 192) {
        y += String.fromCharCode((qA & 31) << 6 | gA);
        continue;
      }
      var ne = G[K++] & 63;
      if ((qA & 240) == 224 ? qA = (qA & 15) << 12 | gA << 6 | ne : qA = (qA & 7) << 18 | gA << 12 | ne << 6 | G[K++] & 63, qA < 65536)
        y += String.fromCharCode(qA);
      else {
        var EA = qA - 65536;
        y += String.fromCharCode(55296 | EA >> 10, 56320 | EA & 1023);
      }
    }
    return y;
  }
  function ce(G, K) {
    return G ? Ee(xt, G, K) : "";
  }
  function We(G, K, uA, q) {
    if (!(q > 0))
      return 0;
    for (var A = uA, y = uA + q - 1, qA = 0; qA < G.length; ++qA) {
      var gA = G.charCodeAt(qA);
      if (gA >= 55296 && gA <= 57343) {
        var ne = G.charCodeAt(++qA);
        gA = 65536 + ((gA & 1023) << 10) | ne & 1023;
      }
      if (gA <= 127) {
        if (uA >= y)
          break;
        K[uA++] = gA;
      } else if (gA <= 2047) {
        if (uA + 1 >= y)
          break;
        K[uA++] = 192 | gA >> 6, K[uA++] = 128 | gA & 63;
      } else if (gA <= 65535) {
        if (uA + 2 >= y)
          break;
        K[uA++] = 224 | gA >> 12, K[uA++] = 128 | gA >> 6 & 63, K[uA++] = 128 | gA & 63;
      } else {
        if (uA + 3 >= y)
          break;
        K[uA++] = 240 | gA >> 18, K[uA++] = 128 | gA >> 12 & 63, K[uA++] = 128 | gA >> 6 & 63, K[uA++] = 128 | gA & 63;
      }
    }
    return K[uA] = 0, uA - A;
  }
  function Qt(G, K, uA) {
    return We(G, xt, K, uA);
  }
  typeof TextDecoder < "u" && new TextDecoder("utf-16le");
  function bt(G, K) {
    ve.set(G, K);
  }
  function Me(G, K) {
    return G % K > 0 && (G += K - G % K), G;
  }
  var Le, ve, xt, kt, Rt, tt, Xt;
  function QA(G) {
    Le = G, c.HEAP8 = ve = new Int8Array(G), c.HEAP16 = kt = new Int16Array(G), c.HEAP32 = Rt = new Int32Array(G), c.HEAPU8 = xt = new Uint8Array(G), c.HEAPU16 = new Uint16Array(G), c.HEAPU32 = new Uint32Array(G), c.HEAPF32 = tt = new Float32Array(G), c.HEAPF64 = Xt = new Float64Array(G);
  }
  var Zr = 5271536, SA = 28624, ke = c.TOTAL_MEMORY || 33554432;
  c.buffer ? Le = c.buffer : Le = new ArrayBuffer(ke), ke = Le.byteLength, QA(Le), Rt[SA >> 2] = Zr;
  function Ve(G) {
    for (; G.length > 0; ) {
      var K = G.shift();
      if (typeof K == "function") {
        K();
        continue;
      }
      var uA = K.func;
      typeof uA == "number" ? K.arg === void 0 ? c.dynCall_v(uA) : c.dynCall_vi(uA, K.arg) : uA(K.arg === void 0 ? null : K.arg);
    }
  }
  var $e = [], De = [], de = [], ee = [];
  function $t() {
    if (c.preRun)
      for (typeof c.preRun == "function" && (c.preRun = [c.preRun]); c.preRun.length; )
        cn(c.preRun.shift());
    Ve($e);
  }
  function Ai() {
    Ve(De);
  }
  function Fr() {
    Ve(de);
  }
  function hn() {
    if (c.postRun)
      for (typeof c.postRun == "function" && (c.postRun = [c.postRun]); c.postRun.length; )
        Ni(c.postRun.shift());
    Ve(ee);
  }
  function cn(G) {
    $e.unshift(G);
  }
  function Ni(G) {
    ee.unshift(G);
  }
  var rr = Math.abs, E0 = Math.ceil, Nr = Math.floor, Hr = Math.min, ei = 0, lA = null;
  function pA(G) {
    ei++, c.monitorRunDependencies && c.monitorRunDependencies(ei);
  }
  function Be(G) {
    if (ei--, c.monitorRunDependencies && c.monitorRunDependencies(ei), ei == 0 && lA) {
      var K = lA;
      lA = null, K();
    }
  }
  c.preloadedImages = {}, c.preloadedAudios = {};
  var GA = null, YA = "data:application/octet-stream;base64,";
  function Pe(G) {
    return String.prototype.startsWith ? G.startsWith(YA) : G.indexOf(YA) === 0;
  }
  var re, Ze;
  GA = "data:application/octet-stream;base64,AAAAAAAAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAAAQAAAAQAAAADAAAABgAAAAUAAAACAAAAAAAAAAIAAAADAAAAAQAAAAQAAAAGAAAAAAAAAAUAAAADAAAABgAAAAQAAAAFAAAAAAAAAAEAAAACAAAABAAAAAUAAAAGAAAAAAAAAAIAAAADAAAAAQAAAAUAAAACAAAAAAAAAAEAAAADAAAABgAAAAQAAAAGAAAAAAAAAAUAAAACAAAAAQAAAAQAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAIAAAADAAAAAAAAAAAAAAACAAAAAAAAAAEAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAYAAAAAAAAABQAAAAAAAAAAAAAABAAAAAUAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAYAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAYAAAAAAAAAAwAAAAIAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAFAAAABAAAAAAAAAABAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAYAAAAAAAAABAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAgAAAAQAAAADAAAACAAAAAEAAAAHAAAABgAAAAkAAAAAAAAAAwAAAAIAAAACAAAABgAAAAoAAAALAAAAAAAAAAEAAAAFAAAAAwAAAA0AAAABAAAABwAAAAQAAAAMAAAAAAAAAAQAAAB/AAAADwAAAAgAAAADAAAAAAAAAAwAAAAFAAAAAgAAABIAAAAKAAAACAAAAAAAAAAQAAAABgAAAA4AAAALAAAAEQAAAAEAAAAJAAAAAgAAAAcAAAAVAAAACQAAABMAAAADAAAADQAAAAEAAAAIAAAABQAAABYAAAAQAAAABAAAAAAAAAAPAAAACQAAABMAAAAOAAAAFAAAAAEAAAAHAAAABgAAAAoAAAALAAAAGAAAABcAAAAFAAAAAgAAABIAAAALAAAAEQAAABcAAAAZAAAAAgAAAAYAAAAKAAAADAAAABwAAAANAAAAGgAAAAQAAAAPAAAAAwAAAA0AAAAaAAAAFQAAAB0AAAADAAAADAAAAAcAAAAOAAAAfwAAABEAAAAbAAAACQAAABQAAAAGAAAADwAAABYAAAAcAAAAHwAAAAQAAAAIAAAADAAAABAAAAASAAAAIQAAAB4AAAAIAAAABQAAABYAAAARAAAACwAAAA4AAAAGAAAAIwAAABkAAAAbAAAAEgAAABgAAAAeAAAAIAAAAAUAAAAKAAAAEAAAABMAAAAiAAAAFAAAACQAAAAHAAAAFQAAAAkAAAAUAAAADgAAABMAAAAJAAAAKAAAABsAAAAkAAAAFQAAACYAAAATAAAAIgAAAA0AAAAdAAAABwAAABYAAAAQAAAAKQAAACEAAAAPAAAACAAAAB8AAAAXAAAAGAAAAAsAAAAKAAAAJwAAACUAAAAZAAAAGAAAAH8AAAAgAAAAJQAAAAoAAAAXAAAAEgAAABkAAAAXAAAAEQAAAAsAAAAtAAAAJwAAACMAAAAaAAAAKgAAAB0AAAArAAAADAAAABwAAAANAAAAGwAAACgAAAAjAAAALgAAAA4AAAAUAAAAEQAAABwAAAAfAAAAKgAAACwAAAAMAAAADwAAABoAAAAdAAAAKwAAACYAAAAvAAAADQAAABoAAAAVAAAAHgAAACAAAAAwAAAAMgAAABAAAAASAAAAIQAAAB8AAAApAAAALAAAADUAAAAPAAAAFgAAABwAAAAgAAAAHgAAABgAAAASAAAANAAAADIAAAAlAAAAIQAAAB4AAAAxAAAAMAAAABYAAAAQAAAAKQAAACIAAAATAAAAJgAAABUAAAA2AAAAJAAAADMAAAAjAAAALgAAAC0AAAA4AAAAEQAAABsAAAAZAAAAJAAAABQAAAAiAAAAEwAAADcAAAAoAAAANgAAACUAAAAnAAAANAAAADkAAAAYAAAAFwAAACAAAAAmAAAAfwAAACIAAAAzAAAAHQAAAC8AAAAVAAAAJwAAACUAAAAZAAAAFwAAADsAAAA5AAAALQAAACgAAAAbAAAAJAAAABQAAAA8AAAALgAAADcAAAApAAAAMQAAADUAAAA9AAAAFgAAACEAAAAfAAAAKgAAADoAAAArAAAAPgAAABwAAAAsAAAAGgAAACsAAAA+AAAALwAAAEAAAAAaAAAAKgAAAB0AAAAsAAAANQAAADoAAABBAAAAHAAAAB8AAAAqAAAALQAAACcAAAAjAAAAGQAAAD8AAAA7AAAAOAAAAC4AAAA8AAAAOAAAAEQAAAAbAAAAKAAAACMAAAAvAAAAJgAAACsAAAAdAAAARQAAADMAAABAAAAAMAAAADEAAAAeAAAAIQAAAEMAAABCAAAAMgAAADEAAAB/AAAAPQAAAEIAAAAhAAAAMAAAACkAAAAyAAAAMAAAACAAAAAeAAAARgAAAEMAAAA0AAAAMwAAAEUAAAA2AAAARwAAACYAAAAvAAAAIgAAADQAAAA5AAAARgAAAEoAAAAgAAAAJQAAADIAAAA1AAAAPQAAAEEAAABLAAAAHwAAACkAAAAsAAAANgAAAEcAAAA3AAAASQAAACIAAAAzAAAAJAAAADcAAAAoAAAANgAAACQAAABIAAAAPAAAAEkAAAA4AAAARAAAAD8AAABNAAAAIwAAAC4AAAAtAAAAOQAAADsAAABKAAAATgAAACUAAAAnAAAANAAAADoAAAB/AAAAPgAAAEwAAAAsAAAAQQAAACoAAAA7AAAAPwAAAE4AAABPAAAAJwAAAC0AAAA5AAAAPAAAAEgAAABEAAAAUAAAACgAAAA3AAAALgAAAD0AAAA1AAAAMQAAACkAAABRAAAASwAAAEIAAAA+AAAAKwAAADoAAAAqAAAAUgAAAEAAAABMAAAAPwAAAH8AAAA4AAAALQAAAE8AAAA7AAAATQAAAEAAAAAvAAAAPgAAACsAAABUAAAARQAAAFIAAABBAAAAOgAAADUAAAAsAAAAVgAAAEwAAABLAAAAQgAAAEMAAABRAAAAVQAAADEAAAAwAAAAPQAAAEMAAABCAAAAMgAAADAAAABXAAAAVQAAAEYAAABEAAAAOAAAADwAAAAuAAAAWgAAAE0AAABQAAAARQAAADMAAABAAAAALwAAAFkAAABHAAAAVAAAAEYAAABDAAAANAAAADIAAABTAAAAVwAAAEoAAABHAAAAWQAAAEkAAABbAAAAMwAAAEUAAAA2AAAASAAAAH8AAABJAAAANwAAAFAAAAA8AAAAWAAAAEkAAABbAAAASAAAAFgAAAA2AAAARwAAADcAAABKAAAATgAAAFMAAABcAAAANAAAADkAAABGAAAASwAAAEEAAAA9AAAANQAAAF4AAABWAAAAUQAAAEwAAABWAAAAUgAAAGAAAAA6AAAAQQAAAD4AAABNAAAAPwAAAEQAAAA4AAAAXQAAAE8AAABaAAAATgAAAEoAAAA7AAAAOQAAAF8AAABcAAAATwAAAE8AAABOAAAAPwAAADsAAABdAAAAXwAAAE0AAABQAAAARAAAAEgAAAA8AAAAYwAAAFoAAABYAAAAUQAAAFUAAABeAAAAZQAAAD0AAABCAAAASwAAAFIAAABgAAAAVAAAAGIAAAA+AAAATAAAAEAAAABTAAAAfwAAAEoAAABGAAAAZAAAAFcAAABcAAAAVAAAAEUAAABSAAAAQAAAAGEAAABZAAAAYgAAAFUAAABXAAAAZQAAAGYAAABCAAAAQwAAAFEAAABWAAAATAAAAEsAAABBAAAAaAAAAGAAAABeAAAAVwAAAFMAAABmAAAAZAAAAEMAAABGAAAAVQAAAFgAAABIAAAAWwAAAEkAAABjAAAAUAAAAGkAAABZAAAAYQAAAFsAAABnAAAARQAAAFQAAABHAAAAWgAAAE0AAABQAAAARAAAAGoAAABdAAAAYwAAAFsAAABJAAAAWQAAAEcAAABpAAAAWAAAAGcAAABcAAAAUwAAAE4AAABKAAAAbAAAAGQAAABfAAAAXQAAAE8AAABaAAAATQAAAG0AAABfAAAAagAAAF4AAABWAAAAUQAAAEsAAABrAAAAaAAAAGUAAABfAAAAXAAAAE8AAABOAAAAbQAAAGwAAABdAAAAYAAAAGgAAABiAAAAbgAAAEwAAABWAAAAUgAAAGEAAAB/AAAAYgAAAFQAAABnAAAAWQAAAG8AAABiAAAAbgAAAGEAAABvAAAAUgAAAGAAAABUAAAAYwAAAFAAAABpAAAAWAAAAGoAAABaAAAAcQAAAGQAAABmAAAAUwAAAFcAAABsAAAAcgAAAFwAAABlAAAAZgAAAGsAAABwAAAAUQAAAFUAAABeAAAAZgAAAGUAAABXAAAAVQAAAHIAAABwAAAAZAAAAGcAAABbAAAAYQAAAFkAAAB0AAAAaQAAAG8AAABoAAAAawAAAG4AAABzAAAAVgAAAF4AAABgAAAAaQAAAFgAAABnAAAAWwAAAHEAAABjAAAAdAAAAGoAAABdAAAAYwAAAFoAAAB1AAAAbQAAAHEAAABrAAAAfwAAAGUAAABeAAAAcwAAAGgAAABwAAAAbAAAAGQAAABfAAAAXAAAAHYAAAByAAAAbQAAAG0AAABsAAAAXQAAAF8AAAB1AAAAdgAAAGoAAABuAAAAYgAAAGgAAABgAAAAdwAAAG8AAABzAAAAbwAAAGEAAABuAAAAYgAAAHQAAABnAAAAdwAAAHAAAABrAAAAZgAAAGUAAAB4AAAAcwAAAHIAAABxAAAAYwAAAHQAAABpAAAAdQAAAGoAAAB5AAAAcgAAAHAAAABkAAAAZgAAAHYAAAB4AAAAbAAAAHMAAABuAAAAawAAAGgAAAB4AAAAdwAAAHAAAAB0AAAAZwAAAHcAAABvAAAAcQAAAGkAAAB5AAAAdQAAAH8AAABtAAAAdgAAAHEAAAB5AAAAagAAAHYAAAB4AAAAbAAAAHIAAAB1AAAAeQAAAG0AAAB3AAAAbwAAAHMAAABuAAAAeQAAAHQAAAB4AAAAeAAAAHMAAAByAAAAcAAAAHkAAAB3AAAAdgAAAHkAAAB0AAAAeAAAAHcAAAB1AAAAcQAAAHYAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAACAAAABQAAAAEAAAAAAAAA/////wEAAAAAAAAAAwAAAAQAAAACAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAEAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAUAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAABAAAAAUAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAD/////AQAAAAAAAAADAAAABAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAUAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAD//////////wEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAACAAAAAAAAAAAAAAABAAAAAgAAAAYAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAKAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAFAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAAAAAAAAAAABAAAAAwAAAAcAAAAGAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADgAAAAIAAAAAAAAAAAAAAAEAAAAAAAAACQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAAAAAAAAAAAAAEAAAAEAAAACAAAAAoAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAAAAAAAAAAAAQAAAAsAAAAPAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAIAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAAAAAAAAAAAAQAAAAwAAAAQAAAADAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAADwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAAAAAAAAAAABAAAACgAAABMAAAAIAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAIAAAAAAAAAAAAAAAEAAAANAAAAEQAAAA0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAACAAAAAAAAAAAAAAABAAAADgAAABIAAAAPAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABIAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAAAAAAAAQAAAP//////////EwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAASAAAAAAAAABgAAAAAAAAAIQAAAAAAAAAeAAAAAAAAACAAAAADAAAAMQAAAAEAAAAwAAAAAwAAADIAAAADAAAACAAAAAAAAAAFAAAABQAAAAoAAAAFAAAAFgAAAAAAAAAQAAAAAAAAABIAAAAAAAAAKQAAAAEAAAAhAAAAAAAAAB4AAAAAAAAABAAAAAAAAAAAAAAABQAAAAIAAAAFAAAADwAAAAEAAAAIAAAAAAAAAAUAAAAFAAAAHwAAAAEAAAAWAAAAAAAAABAAAAAAAAAAAgAAAAAAAAAGAAAAAAAAAA4AAAAAAAAACgAAAAAAAAALAAAAAAAAABEAAAADAAAAGAAAAAEAAAAXAAAAAwAAABkAAAADAAAAAAAAAAAAAAABAAAABQAAAAkAAAAFAAAABQAAAAAAAAACAAAAAAAAAAYAAAAAAAAAEgAAAAEAAAAKAAAAAAAAAAsAAAAAAAAABAAAAAEAAAADAAAABQAAAAcAAAAFAAAACAAAAAEAAAAAAAAAAAAAAAEAAAAFAAAAEAAAAAEAAAAFAAAAAAAAAAIAAAAAAAAABwAAAAAAAAAVAAAAAAAAACYAAAAAAAAACQAAAAAAAAATAAAAAAAAACIAAAADAAAADgAAAAEAAAAUAAAAAwAAACQAAAADAAAAAwAAAAAAAAANAAAABQAAAB0AAAAFAAAAAQAAAAAAAAAHAAAAAAAAABUAAAAAAAAABgAAAAEAAAAJAAAAAAAAABMAAAAAAAAABAAAAAIAAAAMAAAABQAAABoAAAAFAAAAAAAAAAEAAAADAAAAAAAAAA0AAAAFAAAAAgAAAAEAAAABAAAAAAAAAAcAAAAAAAAAGgAAAAAAAAAqAAAAAAAAADoAAAAAAAAAHQAAAAAAAAArAAAAAAAAAD4AAAADAAAAJgAAAAEAAAAvAAAAAwAAAEAAAAADAAAADAAAAAAAAAAcAAAABQAAACwAAAAFAAAADQAAAAAAAAAaAAAAAAAAACoAAAAAAAAAFQAAAAEAAAAdAAAAAAAAACsAAAAAAAAABAAAAAMAAAAPAAAABQAAAB8AAAAFAAAAAwAAAAEAAAAMAAAAAAAAABwAAAAFAAAABwAAAAEAAAANAAAAAAAAABoAAAAAAAAAHwAAAAAAAAApAAAAAAAAADEAAAAAAAAALAAAAAAAAAA1AAAAAAAAAD0AAAADAAAAOgAAAAEAAABBAAAAAwAAAEsAAAADAAAADwAAAAAAAAAWAAAABQAAACEAAAAFAAAAHAAAAAAAAAAfAAAAAAAAACkAAAAAAAAAKgAAAAEAAAAsAAAAAAAAADUAAAAAAAAABAAAAAQAAAAIAAAABQAAABAAAAAFAAAADAAAAAEAAAAPAAAAAAAAABYAAAAFAAAAGgAAAAEAAAAcAAAAAAAAAB8AAAAAAAAAMgAAAAAAAAAwAAAAAAAAADEAAAADAAAAIAAAAAAAAAAeAAAAAwAAACEAAAADAAAAGAAAAAMAAAASAAAAAwAAABAAAAADAAAARgAAAAAAAABDAAAAAAAAAEIAAAADAAAANAAAAAMAAAAyAAAAAAAAADAAAAAAAAAAJQAAAAMAAAAgAAAAAAAAAB4AAAADAAAAUwAAAAAAAABXAAAAAwAAAFUAAAADAAAASgAAAAMAAABGAAAAAAAAAEMAAAAAAAAAOQAAAAEAAAA0AAAAAwAAADIAAAAAAAAAGQAAAAAAAAAXAAAAAAAAABgAAAADAAAAEQAAAAAAAAALAAAAAwAAAAoAAAADAAAADgAAAAMAAAAGAAAAAwAAAAIAAAADAAAALQAAAAAAAAAnAAAAAAAAACUAAAADAAAAIwAAAAMAAAAZAAAAAAAAABcAAAAAAAAAGwAAAAMAAAARAAAAAAAAAAsAAAADAAAAPwAAAAAAAAA7AAAAAwAAADkAAAADAAAAOAAAAAMAAAAtAAAAAAAAACcAAAAAAAAALgAAAAMAAAAjAAAAAwAAABkAAAAAAAAAJAAAAAAAAAAUAAAAAAAAAA4AAAADAAAAIgAAAAAAAAATAAAAAwAAAAkAAAADAAAAJgAAAAMAAAAVAAAAAwAAAAcAAAADAAAANwAAAAAAAAAoAAAAAAAAABsAAAADAAAANgAAAAMAAAAkAAAAAAAAABQAAAAAAAAAMwAAAAMAAAAiAAAAAAAAABMAAAADAAAASAAAAAAAAAA8AAAAAwAAAC4AAAADAAAASQAAAAMAAAA3AAAAAAAAACgAAAAAAAAARwAAAAMAAAA2AAAAAwAAACQAAAAAAAAAQAAAAAAAAAAvAAAAAAAAACYAAAADAAAAPgAAAAAAAAArAAAAAwAAAB0AAAADAAAAOgAAAAMAAAAqAAAAAwAAABoAAAADAAAAVAAAAAAAAABFAAAAAAAAADMAAAADAAAAUgAAAAMAAABAAAAAAAAAAC8AAAAAAAAATAAAAAMAAAA+AAAAAAAAACsAAAADAAAAYQAAAAAAAABZAAAAAwAAAEcAAAADAAAAYgAAAAMAAABUAAAAAAAAAEUAAAAAAAAAYAAAAAMAAABSAAAAAwAAAEAAAAAAAAAASwAAAAAAAABBAAAAAAAAADoAAAADAAAAPQAAAAAAAAA1AAAAAwAAACwAAAADAAAAMQAAAAMAAAApAAAAAwAAAB8AAAADAAAAXgAAAAAAAABWAAAAAAAAAEwAAAADAAAAUQAAAAMAAABLAAAAAAAAAEEAAAAAAAAAQgAAAAMAAAA9AAAAAAAAADUAAAADAAAAawAAAAAAAABoAAAAAwAAAGAAAAADAAAAZQAAAAMAAABeAAAAAAAAAFYAAAAAAAAAVQAAAAMAAABRAAAAAwAAAEsAAAAAAAAAOQAAAAAAAAA7AAAAAAAAAD8AAAADAAAASgAAAAAAAABOAAAAAwAAAE8AAAADAAAAUwAAAAMAAABcAAAAAwAAAF8AAAADAAAAJQAAAAAAAAAnAAAAAwAAAC0AAAADAAAANAAAAAAAAAA5AAAAAAAAADsAAAAAAAAARgAAAAMAAABKAAAAAAAAAE4AAAADAAAAGAAAAAAAAAAXAAAAAwAAABkAAAADAAAAIAAAAAMAAAAlAAAAAAAAACcAAAADAAAAMgAAAAMAAAA0AAAAAAAAADkAAAAAAAAALgAAAAAAAAA8AAAAAAAAAEgAAAADAAAAOAAAAAAAAABEAAAAAwAAAFAAAAADAAAAPwAAAAMAAABNAAAAAwAAAFoAAAADAAAAGwAAAAAAAAAoAAAAAwAAADcAAAADAAAAIwAAAAAAAAAuAAAAAAAAADwAAAAAAAAALQAAAAMAAAA4AAAAAAAAAEQAAAADAAAADgAAAAAAAAAUAAAAAwAAACQAAAADAAAAEQAAAAMAAAAbAAAAAAAAACgAAAADAAAAGQAAAAMAAAAjAAAAAAAAAC4AAAAAAAAARwAAAAAAAABZAAAAAAAAAGEAAAADAAAASQAAAAAAAABbAAAAAwAAAGcAAAADAAAASAAAAAMAAABYAAAAAwAAAGkAAAADAAAAMwAAAAAAAABFAAAAAwAAAFQAAAADAAAANgAAAAAAAABHAAAAAAAAAFkAAAAAAAAANwAAAAMAAABJAAAAAAAAAFsAAAADAAAAJgAAAAAAAAAvAAAAAwAAAEAAAAADAAAAIgAAAAMAAAAzAAAAAAAAAEUAAAADAAAAJAAAAAMAAAA2AAAAAAAAAEcAAAAAAAAAYAAAAAAAAABoAAAAAAAAAGsAAAADAAAAYgAAAAAAAABuAAAAAwAAAHMAAAADAAAAYQAAAAMAAABvAAAAAwAAAHcAAAADAAAATAAAAAAAAABWAAAAAwAAAF4AAAADAAAAUgAAAAAAAABgAAAAAAAAAGgAAAAAAAAAVAAAAAMAAABiAAAAAAAAAG4AAAADAAAAOgAAAAAAAABBAAAAAwAAAEsAAAADAAAAPgAAAAMAAABMAAAAAAAAAFYAAAADAAAAQAAAAAMAAABSAAAAAAAAAGAAAAAAAAAAVQAAAAAAAABXAAAAAAAAAFMAAAADAAAAZQAAAAAAAABmAAAAAwAAAGQAAAADAAAAawAAAAMAAABwAAAAAwAAAHIAAAADAAAAQgAAAAAAAABDAAAAAwAAAEYAAAADAAAAUQAAAAAAAABVAAAAAAAAAFcAAAAAAAAAXgAAAAMAAABlAAAAAAAAAGYAAAADAAAAMQAAAAAAAAAwAAAAAwAAADIAAAADAAAAPQAAAAMAAABCAAAAAAAAAEMAAAADAAAASwAAAAMAAABRAAAAAAAAAFUAAAAAAAAAXwAAAAAAAABcAAAAAAAAAFMAAAAAAAAATwAAAAAAAABOAAAAAAAAAEoAAAADAAAAPwAAAAEAAAA7AAAAAwAAADkAAAADAAAAbQAAAAAAAABsAAAAAAAAAGQAAAAFAAAAXQAAAAEAAABfAAAAAAAAAFwAAAAAAAAATQAAAAEAAABPAAAAAAAAAE4AAAAAAAAAdQAAAAQAAAB2AAAABQAAAHIAAAAFAAAAagAAAAEAAABtAAAAAAAAAGwAAAAAAAAAWgAAAAEAAABdAAAAAQAAAF8AAAAAAAAAWgAAAAAAAABNAAAAAAAAAD8AAAAAAAAAUAAAAAAAAABEAAAAAAAAADgAAAADAAAASAAAAAEAAAA8AAAAAwAAAC4AAAADAAAAagAAAAAAAABdAAAAAAAAAE8AAAAFAAAAYwAAAAEAAABaAAAAAAAAAE0AAAAAAAAAWAAAAAEAAABQAAAAAAAAAEQAAAAAAAAAdQAAAAMAAABtAAAABQAAAF8AAAAFAAAAcQAAAAEAAABqAAAAAAAAAF0AAAAAAAAAaQAAAAEAAABjAAAAAQAAAFoAAAAAAAAAaQAAAAAAAABYAAAAAAAAAEgAAAAAAAAAZwAAAAAAAABbAAAAAAAAAEkAAAADAAAAYQAAAAEAAABZAAAAAwAAAEcAAAADAAAAcQAAAAAAAABjAAAAAAAAAFAAAAAFAAAAdAAAAAEAAABpAAAAAAAAAFgAAAAAAAAAbwAAAAEAAABnAAAAAAAAAFsAAAAAAAAAdQAAAAIAAABqAAAABQAAAFoAAAAFAAAAeQAAAAEAAABxAAAAAAAAAGMAAAAAAAAAdwAAAAEAAAB0AAAAAQAAAGkAAAAAAAAAdwAAAAAAAABvAAAAAAAAAGEAAAAAAAAAcwAAAAAAAABuAAAAAAAAAGIAAAADAAAAawAAAAEAAABoAAAAAwAAAGAAAAADAAAAeQAAAAAAAAB0AAAAAAAAAGcAAAAFAAAAeAAAAAEAAAB3AAAAAAAAAG8AAAAAAAAAcAAAAAEAAABzAAAAAAAAAG4AAAAAAAAAdQAAAAEAAABxAAAABQAAAGkAAAAFAAAAdgAAAAEAAAB5AAAAAAAAAHQAAAAAAAAAcgAAAAEAAAB4AAAAAQAAAHcAAAAAAAAAcgAAAAAAAABwAAAAAAAAAGsAAAAAAAAAZAAAAAAAAABmAAAAAAAAAGUAAAADAAAAUwAAAAEAAABXAAAAAwAAAFUAAAADAAAAdgAAAAAAAAB4AAAAAAAAAHMAAAAFAAAAbAAAAAEAAAByAAAAAAAAAHAAAAAAAAAAXAAAAAEAAABkAAAAAAAAAGYAAAAAAAAAdQAAAAAAAAB5AAAABQAAAHcAAAAFAAAAbQAAAAEAAAB2AAAAAAAAAHgAAAAAAAAAXwAAAAEAAABsAAAAAQAAAHIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAGAAAAAgAAAAUAAAABAAAABAAAAAAAAAAAAAAABQAAAAMAAAABAAAABgAAAAQAAAACAAAAAAAAAH6iBfbytuk/Gq6akm/58z/Xrm0Liez0P5doSdOpSwRAWs602ULg8D/dT7Rcbo/1v1N1RQHFNOM/g9Snx7HW3L8HWsP8Q3jfP6VwOLosutk/9rjk1YQcxj+gnmKMsNn6P/HDeuPFY+M/YHwDjqKhB0Ci19/fCVrbP4UxKkDWOP6/pvljWa09tL9wi7wrQXjnv/Z6yLImkM2/3yTlOzY14D+m+WNZrT20PzwKVQnrQwNA9nrIsiaQzT/g40rFrRQFwPa45NWEHMa/kbslHEZq97/xw3rjxWPjv4cLC2SMBci/otff3wla27+rKF5oIAv0P1N1RQHFNOO/iDJPGyWHBUAHWsP8Q3jfvwQf/by16gXAfqIF9vK26b8XrO0Vh0r+v9eubQuJ7PS/BxLrA0ZZ479azrTZQuDwv1MK1EuItPw/yscgV9Z6FkAwHBR2WjQMQJNRzXsQ5vY/GlUHVJYKF0DONuFv2lMNQNCGZ28QJfk/0WUwoIL36D8ggDOMQuATQNqMOeAy/wZAWFYOYM+M2z/LWC4uH3oSQDE+LyTsMgRAkJzhRGWFGEDd4soovCQQQKqk0DJMEP8/rGmNdwOLBUAW2X/9xCbjP4hu3dcqJhNAzuYItRvdB0CgzW3zJW/sPxotm/Y2TxRAQAk9XmdDDEC1Kx9MKgT3P1M+NctcghZAFVqcLlb0C0Bgzd3sB2b2P77mZDPUWhZAFROHJpUGCEDAfma5CxXtPz1DWq/zYxRAmhYY5824F0DOuQKWSbAOQNCMqrvu3fs/L6DR22K2wT9nAAxPBU8RQGiN6mW43AFAZhu25b633D8c1YgmzowSQNM25BRKWARArGS08/lNxD+LFssHwmMRQLC5aNcxBgJABL9HT0WRF0CjCmJmOGEOQHsuaVzMP/s/TWJCaGGwBUCeu1PAPLzjP9nqN9DZOBNAKE4JcydbCkCGtbd1qjPzP8dgm9U8jhVAtPeKTkVwDkCeCLss5l37P401XMPLmBdAFd29VMVQDUBg0yA55h75Pz6odcYLCRdApBM4rBrkAkDyAVWgQxbRP4XDMnK20hFAymLlF7EmzD8GUgo9XBHlP3lbK7T9COc/k+OhPthhy7+YGEpnrOvCPzBFhLs15u4/epbqB6H4uz9IuuLF5svev6lzLKY31es/CaQ0envF5z8ZY0xlUADXv7zaz7HYEuI/CfbK1sn16T8uAQfWwxLWPzKn/YuFN94/5KdbC1AFu793fyCSnlfvPzK2y4doAMY/NRg5t1/X6b/shq4QJaHDP5yNIAKPOeI/vpn7BSE30r/X4YQrO6nrv78Ziv/Thto/DqJ1Y6+y5z9l51NaxFrlv8QlA65HOLS/86dxiEc96z+Hj0+LFjneP6LzBZ8LTc2/DaJ1Y6+y579l51NaxFrlP8QlA65HOLQ/8qdxiEc967+Jj0+LFjnev6LzBZ8LTc0/1qdbC1AFuz93fyCSnlfvvzK2y4doAMa/NRg5t1/X6T/vhq4QJaHDv5yNIAKPOeK/wJn7BSE30j/W4YQrO6nrP78Ziv/Thtq/CaQ0envF578XY0xlUADXP7zaz7HYEuK/CvbK1sn16b8rAQfWwxLWvzKn/YuFN96/zWLlF7EmzL8GUgo9XBHlv3lbK7T9COe/kOOhPthhyz+cGEpnrOvCvzBFhLs15u6/c5bqB6H4u79IuuLF5sveP6lzLKY31eu/AQAAAP////8HAAAA/////zEAAAD/////VwEAAP////9hCQAA/////6dBAAD/////kcsBAP/////3kAwA/////8H2VwAAAAAAAAAAAAAAAAACAAAA/////w4AAAD/////YgAAAP////+uAgAA/////8ISAAD/////ToMAAP////8ilwMA/////+4hGQD/////gu2vAAAAAAAAAAAAAAAAAAAAAAACAAAA//////////8BAAAAAwAAAP//////////////////////////////////////////////////////////////////////////AQAAAAAAAAACAAAA////////////////AwAAAP//////////////////////////////////////////////////////////////////////////AQAAAAAAAAACAAAA////////////////AwAAAP//////////////////////////////////////////////////////////////////////////AQAAAAAAAAACAAAA////////////////AwAAAP//////////////////////////////////////////////////////////AgAAAP//////////AQAAAAAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD/////////////////////AQAAAP///////////////wIAAAD///////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP///////////////////////////////wIAAAD///////////////8BAAAA/////////////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAABAAAA//////////8CAAAA//////////////////////////////////////////////////////////8DAAAA////////////////AgAAAAAAAAABAAAA//////////////////////////////////////////////////////////////////////////8DAAAA////////////////AgAAAAAAAAABAAAA//////////////////////////////////////////////////////////////////////////8DAAAA////////////////AgAAAAAAAAABAAAA//////////////////////////////////////////////////////////////////////////8DAAAAAQAAAP//////////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAACAAAAAAAAAAIAAAABAAAAAQAAAAIAAAACAAAAAAAAAAUAAAAFAAAAAAAAAAIAAAACAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAEAAAACAAAAAgAAAAIAAAAAAAAABQAAAAYAAAAAAAAAAgAAAAIAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAAAAAACAAAAAQAAAAMAAAACAAAAAgAAAAAAAAAFAAAABwAAAAAAAAACAAAAAgAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAACAAAAAAAAAAIAAAABAAAABAAAAAIAAAACAAAAAAAAAAUAAAAIAAAAAAAAAAIAAAACAAAAAwAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAIAAAAAAAAAAgAAAAEAAAAAAAAAAgAAAAIAAAAAAAAABQAAAAkAAAAAAAAAAgAAAAIAAAADAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAgAAAAIAAAAAAAAAAwAAAA4AAAACAAAAAAAAAAIAAAADAAAAAAAAAAAAAAACAAAAAgAAAAMAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAACAAAAAgAAAAAAAAADAAAACgAAAAIAAAAAAAAAAgAAAAMAAAABAAAAAAAAAAIAAAACAAAAAwAAAAcAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAIAAAACAAAAAAAAAAMAAAALAAAAAgAAAAAAAAACAAAAAwAAAAIAAAAAAAAAAgAAAAIAAAADAAAACAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAgAAAAIAAAAAAAAAAwAAAAwAAAACAAAAAAAAAAIAAAADAAAAAwAAAAAAAAACAAAAAgAAAAMAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAACAAAAAgAAAAAAAAADAAAADQAAAAIAAAAAAAAAAgAAAAMAAAAEAAAAAAAAAAIAAAACAAAAAwAAAAoAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAIAAAACAAAAAAAAAAMAAAAGAAAAAgAAAAAAAAACAAAAAwAAAA8AAAAAAAAAAgAAAAIAAAADAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAIAAAAAAAAAAwAAAAcAAAACAAAAAAAAAAIAAAADAAAAEAAAAAAAAAACAAAAAgAAAAMAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAACAAAAAgAAAAAAAAADAAAACAAAAAIAAAAAAAAAAgAAAAMAAAARAAAAAAAAAAIAAAACAAAAAwAAAA0AAAAAAAAAAAAAAAAAAAAAAAAACAAAAAIAAAACAAAAAAAAAAMAAAAJAAAAAgAAAAAAAAACAAAAAwAAABIAAAAAAAAAAgAAAAIAAAADAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAAgAAAAIAAAAAAAAAAwAAAAUAAAACAAAAAAAAAAIAAAADAAAAEwAAAAAAAAACAAAAAgAAAAMAAAAPAAAAAAAAAAAAAAAAAAAAAAAAABAAAAACAAAAAAAAAAIAAAABAAAAEwAAAAIAAAACAAAAAAAAAAUAAAAKAAAAAAAAAAIAAAACAAAAAwAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAIAAAAAAAAAAgAAAAEAAAAPAAAAAgAAAAIAAAAAAAAABQAAAAsAAAAAAAAAAgAAAAIAAAADAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAgAAAAAAAAACAAAAAQAAABAAAAACAAAAAgAAAAAAAAAFAAAADAAAAAAAAAACAAAAAgAAAAMAAAASAAAAAAAAAAAAAAAAAAAAAAAAABMAAAACAAAAAAAAAAIAAAABAAAAEQAAAAIAAAACAAAAAAAAAAUAAAANAAAAAAAAAAIAAAACAAAAAwAAABMAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAIAAAAAAAAAAgAAAAEAAAASAAAAAgAAAAIAAAAAAAAABQAAAA4AAAAAAAAAAgAAAAIAAAADAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAEAAAACAAAAAQAAAAAAAAACAAAAAAAAAAUAAAAEAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAQAAAAAAAAABQAAAAAAAAACAAAAAQAAAAAAAAABAAAAAgAAAAAAAAAAAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAABAAAAAAAAAAIAAAACAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAEAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAQAAAAAAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAEAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAA6B6FaUp9QQTPXMuL4myJBraiDfBwx9UBYJseitzTIQOL5if9jqZtAnXX+Z+ycb0C3pucbhRBCQG8wJBYqpRRAlWbDCzCY5z/eFWBUEve6P/+qo4Q50Y4/D9YM3iCcYT8fcA2QJSA0P4ADxu0qAAc/BNcGolVJ2j5d9FACqwquPh9z7MthtI9CSUSYJke/YUJQ/64OyjU0Qpi0+HCmFQdCm3GfIVdh2kHsJ11kAyauQYC3UDFJOoFBSJsFV1OwU0FK5fcxX4AmQWhy/zZIt/lACqaCPsBjzUDbdUNIScugQMYQlVJ4MXNANiuq8GTvRUDxTXnulxEZQFZ8QX5kpuw/qmG/JwYFlEAluh3Q6DB+QKn4vyNq0GZAKOXekas+UUB8xabXXhI6QG63C2pLtSNAdDBtyNfLDUDyOcu67ID2P0rCMvRXAeE/Ki2TSVyzyT9Dk+8Sz2uzP5J+w5ARWp0/NQAoOiMuhj9YnP+RyMJwPxgW7TvQVFk/KgsLYF0kQz9g5dAC6IwzQcgHPVvDex1B1XjppodHBkHJq3OMM9fwQNvcmJ7wddlAInGPpQs/w0BRobq5EBmtQJZ2ai7n+ZVAtv2G5E+bgECG+gIfKBlpQK5f8jdI91JAL39sL/WpPEB8rGxhDqklQK6yUf43XhBAxL9y/tK8+D86XyZpgrHiPwAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAP////8AAAAAAAAAAAAAAAABAAAAAAAAAAAAAAD/////AAAAAAAAAAABAAAAAQAAAAAAAAAAAAAA/////wAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAP////8FAAAABQAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAEAAAAAAAAABQAAAAEAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAQABAAABAQAAAAAAAQAAAAEAAAABAAEAAAAAAAAAAAAAAAAAAAAAquJYWJZl+D9jaeZNtj/zPwwdI9KqaeO/qGefXwdHdz+q4lhYlmX4P+OrlPMN3PI/DB0j0qpp47+7SQLV4VIEQKriWFiWZfg/r2kma3tz8T82eQmLqNIGwMRIWXMqSvo/fcCszPux9j+jara6ozTwP6hnn18HR3c/MSoKLequ8r+SabgA2nj0P7jBLbDOHO8/1Ym/ICfH4T+6lxjvlFXHv73m373LRPU/0vXyDVxo7T+ToKRHJXMAQF/33578aPE/pAyy64tD9T8+U/hCvyruPwxv8Y7YYwLAuXYr8NAiCEB4+LDK0Sn0P1Qeuy4j+eo/OMx50n7K7L+TrGB/nyf8v5ehC2fbYPM/aXMKexiT6z8mFRIMjg/zP7yUVwGGBNw/E6opHERf8z/z0wR2g9DqPw4pBpcOhvu/NbA29uWAA8DMaTExyXzyP02biiQ+Ruk/S8jz2/FKBEB1pzZnpbb9P7pQU4wLfPI//7ZcQXeG6D9CqEQvAYoIwDB2VB6sSgRAVyv8H5We8T+EHWF8XNPmPzB2wT8Nrrg/SEi+cX+w4L8of+GtdSDxP1sjk5AdouU/6ZjOVru13r8K0obqI6bxvwVbdNXyhfA/w5GG024n5z+rwmtMzP8BwLw9pSX49QXABe/2uQxP8D+b6wCzCvXkP7uGT87fK+Q/pz/JWw4coj+qoBf2J0nwP/yE3PUo0+I/vFJeHcaC+D96luSIqvntP/bf8sHUYu8/gZNN41mL4z9bhOqVOF4FwO6lmAh1hQhAbCVxbdhk7z+1C8NdDcfiPwG36x/0OQBAx0WJ76c2+D9nlSHXANfuP2HlfZ3gqOE/EwnVlVPg9r96+oHzEH//v5bXzdT1Auw/DM3GwLsA4D9p/8uoKcr+v+U9x5DQVAPAehjSdghb7D9sc1IetODgP8MVwwB1pu6/azPk6OGe978W8t/TUc3rP+0QMvYfP+A/RsG/QpSE8D+l3uwScxzgPwQaifgujuw/k1Vti1I43z8MAwLnSh0GQH5nYnwwZgJAiGUzWC5s6j8WyyI/BbLgPw4iUapGeQJAB3W+imnp/j9BLWR4ssrpP2t+gG5Pstk/cpBsfm6DCMCOpU9dOZsFQEv8nFypHeo/ehJ6i+6S2D9jqlGEmarLv7STC5TRiOa/bC+x8WZD6D9H3yUkWpDZP8gZvmCMuQLAreY19/eRBsCoPOc8UzzpP6KI/QV+y9g/t/MoboyWzT+Hv5q3Zu3Mvy2xROCT4uY/9gQitMMg1T9abAqhWMDkv1oLTavoUfG/PMUJP9CD5j+fHRX3t6fSPz7W2gk6bvs/WRnuHwqN9D8YFturGCTmP1EZczv0b9I/5t4exabB5D/1ESLh5fTEP9X2z6SYweQ/6lv3I2zT0D9zkRGNUNMAQKoSvc4EIfs/Xggt8wQI5T+mJHHg/w/SP4lhT/9t8vQ/DrZ/DbwH7D+XlhbYZrjkP34LIpFt6c4/lwfp8fLX9L+j96CTTf76v3WdNhEv9uM/d8c3o4lV0D/vFdCHVcsFwAHeDq0F1QhApbYqcZiN5D9KoilqByXLPwX0/diA0vq/0fo0GxnxAMBbaTkvlCzjP/RrFrWXrMs/UYTrky7jA0DB9f4FiZYAQEGAk/3QzeE/r/TeqE8t0D/OqjlsnPbvvz8RKU8JOfW/smSEbK/O4T8MzuyPm3DDP/rFtctq9gZAfb1EVEaSA0Dts5dVInnhP18SFMc79MM/7y34cw6LAMDFrRJsZO0DwC2KLvLSYuA/hx5wcUHewz+49SnK/4ruPyeS0PX9a+E/ZxaaLvvZ3z8WPu5T2QS8Pygo4RIvMqa/BJ0Kqsd0279cKW4ay8jdP3b05bmZ364/10/qtdxk2r+Bcz6CDMvpv54qOw+Amdw/qLV71pW7sT/YKc80nIPUP8OfIaBJ77G/LyTuD1un2z+diYu8efWzP1wU7ACkfwjAZroyPL1yBkAmv3lKJJbbPysKSE4W+p0/dIgqY79TA8ATLTOQ3tsGwJ2zweD/Xdg/XO/jXeFUaL8VW2qLFKfov1cA9Aa6XfK/tIa7YGgI2T+f3hu/sxqPv2nXdPpf3Pc/jkw8Jbda8j+tT/z8tGPVP1yBHpJd35k/KYvYOy1s8j/yz+kCQjPrP9+agH7x59g/PZfJ9aBhpr/rDKzvYBb+PwtkiaGCt/c/vb1mVr+f1T/JIHwHc8Govw7aeF6+9vG/Xv7kD6fp979isYioQYHVP7AIQZuSFrG/3z1AdUTnAUDN3XY9O7f9P0AdQ9ljYNQ/dJANJPTOrb8kLECUiiPlP4yF7UgmStA/9xGmXxCG1T9qZzix4W2zv2SGJRJVrPe/Fh9a2M/B/b8IexzFCoPSP9y1QFD2bLe/Q86cWLJe/b+mOOfYm78BwOTjkPAGE9E/8aPCUKu/ub9pPZyLCiUGwBA7Mev/BQlALOmrlRi+0j+AMJ/dKULBv7iLtL6a6QRAEMDV/yajAUDa62dE3crJP1P70RgBUbq/38hVnR6esT/s1tG10Z/Ov/zLwalHPss/dTS9NKTXx78nMcRzCIEHQAabxDsAmQRA0tyLK3gSyT+Aui7nOhDGv5Gs58z3WgHATN3forJuBMCAui7nOhDGP9Lciyt4Esm/WAJyHQ4c7z8UP5HFIs3iP3U0vTSk18c//MvBqUc+y7+cvv8HLg/Kvy1I/mHsI+K/U/vRGAFRuj/a62dE3crJv8p+WV8KlQjAuQ/nOP43B0CAMJ/dKULBPyzpq5UYvtK/ZoU+VoLh4L9etLlRUfvtv/GjwlCrv7k/5OOQ8AYT0b9DfT9FhufXPwUX8hJp+4u/3LVAUPZstz8IexzFCoPSv9+L609E5fQ/q9Fz7X2J7T9qZzix4W2zP/cRpl8QhtW/vtNilqGX+j8MOy7QJoL0P3SQDST0zq0/QB1D2WNg1L8IIjSvGNkDwGB8Jou2GAfAsAhBm5IWsT9isYioQYHVvyS9D3zb6uy/gnwRa7uM9L/JIHwHc8GoP729Zla/n9W/CsAHJZwmAEDEW6OYT1r6Pz2XyfWgYaY/35qAfvHn2L83Tdy4lS30vxf2/gZ0jPq/XIEekl3fmb+tT/z8tGPVvybPr2zJ1/+/K7mJ0ypVAsCf3hu/sxqPPwCGu2BoCNm/5oITrpZn+r+UDUyDP+n/v1zv413hVGg/nbPB4P9d2L9MlmkxNvgCQMtZlKE85v8/KwpIThb6nb8mv3lKJJbbv8+SZsTvOOc/pQCIIOYw0j+diYu8efWzvy8k7g9bp9u/kxYDa+pKtD9XlYvA8HnVv6i1e9aVu7G/nio7D4CZ3L/WR6rNh5EGwCkgQweBkghAdvTluZnfrr9cKW4ay8jdvxbjhr1f1QVAR5C0MzivAkAWPu5T2QS8v2cWmi772d+/cKj4lzLJCEBx2QJfYrMFQIcecHFB3sO/LYou8tJi4L+jr7lhO38BwIcI0Nb7xgTAXxIUxzv0w7/ts5dVInnhv0T+l8DZLfE/MP3FoFvS5D8MzuyPm3DDv7JkhGyvzuG/tzhzRIRc0b9Ovv3/0z7mv6/03qhPLdC/m4CT/dDN4b9dwjU5VCQBQBBJX1ntCv0/9GsWtZesy79baTkvlCzjv1mjYgEz++S/oW6KnOQW8b9KoilqByXLv6W2KnGYjeS/SmaKz3Vx9z+BZB5yxGHwP3fHN6OJVdC/dZ02ES/2478PuaBjLrXaP4/JU81pPaO/fgsikW3pzr+XlhbYZrjkv4tSn7YDbP0/f2LnFKlF9z+mJHHg/w/Sv14ILfMECOW/mfg4qYhR/b+OP+RQDCACwOpb9yNs09C/1fbPpJjB5L9pN2WOVZ3wv3hHy9nxIve/URlzO/Rv0r8YFturGCTmv1d1/KKR8QPA8gsy9qzSB8CfHRX3t6fSvzzFCT/Qg+a/EYStnrzV9r/2QJqI7Lb9v/YEIrTDINW/LbFE4JPi5r/7kQEs5fEDQHunnf4GeQBAooj9BX7L2L+oPOc8Uzzpv+ydYY2SSAfAL4HK6CRTB0BH3yUkWpDZv2wvsfFmQ+i/Ik0Yzruh6T8fM3LoGoDUP3oSeovukti/S/ycXKkd6r9rEv+7UWcHQCRIQe/GfwNAa36Abk+y2b9BLWR4ssrpv9KT87qa0bM/FTyktw823L8WyyI/BbLgv4hlM1gubOq/DizMp9Ki6r8b5ckdjVrzv5NVbYtSON+/BBqJ+C6O7L/dUBFqgyXYv00Wh18r7+q/7RAy9h8/4L8W8t/TUc3rv4RM5DKx3wDAfvWIj94aBcBsc1IetODgv3oY0nYIW+y/oGcTFF54AUDkJqS/FKX6PwzNxsC7AOC/ltfN1PUC7L+5Wrz/zHnzP6688w2rNOc/YeV9neCo4b9nlSHXANfuvw9RsxKjY/s/1V8GteXE8j+1C8NdDcfiv2wlcW3YZO+/IOywaA7Q8b9bFP+4Tg36v4GTTeNZi+O/9t/ywdRi77+tRc3yFR7eP2bkcHXJkLO//ITc9SjT4r+qoBf2J0nwv2YHKoswwfm/iQcLspCjAcCb6wCzCvXkvwXv9rkMT/C/YkuwYAMXBMApCNUai9kIwMORhtNuJ+e/BVt01fKF8L+ZqWEfvIjsP6h693QZYNk/WyOTkB2i5b8of+GtdSDxvwpaaulDSwVADMQAX+lOAECEHWF8XNPmv1cr/B+VnvG/XyFG6opcCMD/mtR32/UEQP+2XEF3hui/ulBTjAt88r/imfCfRP+yP9zbvtc8XeO/TZuKJD5G6b/MaTExyXzyvxiTQeElXOO/rbJRQVGN9L/z0wR2g9DqvxOqKRxEX/O/FDGCEei99j9x8zV4VYTmP2lzCnsYk+u/l6ELZ9tg878pRXacaDT/v3k6GZRqoQXAVB67LiP56r94+LDK0Sn0vwO6pZ9b7wFAvK0nKVcc9j8+U/hCvyruv6QMsuuLQ/W/FPhKFYv46j8MyxaDTOW/v9L18g1caO2/vebfvctE9b/7GD8ZrF3xv3gx1AR9bQDAuMEtsM4c77+SabgA2nj0v5xKFIwxsATArKNSBaKsB0Cjara6ozTwv33ArMz7sfa/dF2U0FcWCcDxL357DJX/P69pJmt7c/G/quJYWJZl+L/YntVJlnrSP4sRLzXM+fe/46uU8w3c8r+q4lhYlmX4v85lu5+QRwRAsI0H/WU8479jaeZNtj/zv6riWFiWZfi/sI0H/WU847/OZbufkEcEQHAoPUBrnss/9exKzDtFtT88wM8kax+gP9OqeKeAYog/MW0ItiZvcj+ph+smvt5bP2lCaV5dEUU/StaUmQDaLz+kK9y22BMYP0O3whZuMwI/IIbgZGWE6z7UkjYaEM3UPuezxwa9cr8+LybxRMnFpz6E1N8DbPiRPsYjySMvK3s+//////8fAAj//////zMQCP////9/MiAI/////28yMAj/////YzJACP///z9iMlAI////N2IyYAj///8zYjJwCP//vzNiMoAI//+rM2IykAj/f6szYjKgCP8PqzNiMrAI/wOrM2IywAi/A6szYjLQCJ8DqzNiMuAImQOrM2Iy8Aj//////z8PCP//////Kx8I/////38pLwj/////Pyk/CP////85KU8I////PzgpXwj///8POClvCP///w44KX8I//8fDjgpjwj//w8OOCmfCP9/DQ44Ka8I/w8NDjgpvwj/DQ0OOCnPCP8MDQ44Kd8IxwwNDjgp7wjEDA0OOCn/CAcAAAAHAAAAAQAAAAIAAAAEAAAAAwAAAAAAAAAAAAAABwAAAAMAAAABAAAAAgAAAAUAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAACAAAAAQAAAAMAAAAOAAAABgAAAAsAAAACAAAABwAAAAEAAAAYAAAABQAAAAoAAAABAAAABgAAAAAAAAAmAAAABwAAAAwAAAADAAAACAAAAAIAAAAxAAAACQAAAA4AAAAAAAAABQAAAAQAAAA6AAAACAAAAA0AAAAEAAAACQAAAAMAAAA/AAAACwAAAAYAAAAPAAAACgAAABAAAABIAAAADAAAAAcAAAAQAAAACwAAABEAAABTAAAACgAAAAUAAAATAAAADgAAAA8AAABhAAAADQAAAAgAAAARAAAADAAAABIAAABrAAAADgAAAAkAAAASAAAADQAAABMAAAB1AAAADwAAABMAAAARAAAAEgAAABAAAAAGAAAAAgAAAAMAAAAFAAAABAAAAAAAAAAAAAAAAAAAAAYAAAACAAAAAwAAAAEAAAAFAAAABAAAAAAAAAAAAAAABwAAAAUAAAADAAAABAAAAAEAAAAAAAAAAgAAAAAAAAACAAAAAwAAAAEAAAAFAAAABAAAAAYAAAAAAAAAAAAAABgtRFT7Ifk/GC1EVPsh+b8YLURU+yEJQBgtRFT7IQnAYWxnb3MuYwBoM05laWdoYm9yUm90YXRpb25zAGNvb3JkaWprLmMAX3VwQXA3Q2hlY2tlZABfdXBBcDdyQ2hlY2tlZABkaXJlY3RlZEVkZ2UuYwBkaXJlY3RlZEVkZ2VUb0JvdW5kYXJ5AGFkamFjZW50RmFjZURpclt0bXBGaWprLmZhY2VdW2ZpamsuZmFjZV0gPT0gS0kAZmFjZWlqay5jAF9mYWNlSWprUGVudFRvQ2VsbEJvdW5kYXJ5AGFkamFjZW50RmFjZURpcltjZW50ZXJJSksuZmFjZV1bZmFjZTJdID09IEtJAF9mYWNlSWprVG9DZWxsQm91bmRhcnkAaDNJbmRleC5jAGNvbXBhY3RDZWxscwBsYXRMbmdUb0NlbGwAY2VsbFRvQ2hpbGRQb3MAdmFsaWRhdGVDaGlsZFBvcwBsYXRMbmcuYwBjZWxsQXJlYVJhZHMyAHBvbHlnb24tPm5leHQgPT0gTlVMTABsaW5rZWRHZW8uYwBhZGROZXdMaW5rZWRQb2x5Z29uAG5leHQgIT0gTlVMTABsb29wICE9IE5VTEwAYWRkTmV3TGlua2VkTG9vcABwb2x5Z29uLT5maXJzdCA9PSBOVUxMAGFkZExpbmtlZExvb3AAY29vcmQgIT0gTlVMTABhZGRMaW5rZWRDb29yZABsb29wLT5maXJzdCA9PSBOVUxMAGlubmVyTG9vcHMgIT0gTlVMTABub3JtYWxpemVNdWx0aVBvbHlnb24AYmJveGVzICE9IE5VTEwAY2FuZGlkYXRlcyAhPSBOVUxMAGZpbmRQb2x5Z29uRm9ySG9sZQBjYW5kaWRhdGVCQm94ZXMgIT0gTlVMTAByZXZEaXIgIT0gSU5WQUxJRF9ESUdJVABsb2NhbGlqLmMAY2VsbFRvTG9jYWxJamsAYmFzZUNlbGwgIT0gb3JpZ2luQmFzZUNlbGwAIShvcmlnaW5PblBlbnQgJiYgaW5kZXhPblBlbnQpAGJhc2VDZWxsID09IG9yaWdpbkJhc2VDZWxsAGJhc2VDZWxsICE9IElOVkFMSURfQkFTRV9DRUxMAGxvY2FsSWprVG9DZWxsACFfaXNCYXNlQ2VsbFBlbnRhZ29uKGJhc2VDZWxsKQBiYXNlQ2VsbFJvdGF0aW9ucyA+PSAwAGdyaWRQYXRoQ2VsbHMAcG9seWZpbGwuYwBpdGVyU3RlcFBvbHlnb25Db21wYWN0ADAAdmVydGV4LmMAdmVydGV4Um90YXRpb25zAGNlbGxUb1ZlcnRleABncmFwaC0+YnVja2V0cyAhPSBOVUxMAHZlcnRleEdyYXBoLmMAaW5pdFZlcnRleEdyYXBoAG5vZGUgIT0gTlVMTABhZGRWZXJ0ZXhOb2Rl";
  var Ct = 28640;
  function st(G, K, uA, q) {
    ri("Assertion failed: " + ce(G) + ", at: " + [K ? ce(K) : "unknown filename", uA, q ? ce(q) : "unknown function"]);
  }
  function _e() {
    return ve.length;
  }
  function je(G, K, uA) {
    xt.set(xt.subarray(K, K + uA), G);
  }
  function _t(G) {
    return c.___errno_location && (Rt[c.___errno_location() >> 2] = G), G;
  }
  function pi(G) {
    ri("OOM");
  }
  function Hi(G) {
    try {
      var K = new ArrayBuffer(G);
      return K.byteLength != G ? void 0 : (new Int8Array(K).set(ve), Zt(K), QA(K), 1);
    } catch {
    }
  }
  function Ti(G) {
    var K = _e(), uA = 16777216, q = 2147483648 - uA;
    if (G > q)
      return !1;
    for (var A = 16777216, y = Math.max(K, A); y < G; )
      y <= 536870912 ? y = Me(2 * y, uA) : y = Math.min(Me((3 * y + 2147483648) / 4, uA), q);
    var qA = Hi(y);
    return !!qA;
  }
  var dn = typeof atob == "function" ? atob : function(G) {
    var K = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", uA = "", q, A, y, qA, gA, ne, EA, KA = 0;
    G = G.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do
      qA = K.indexOf(G.charAt(KA++)), gA = K.indexOf(G.charAt(KA++)), ne = K.indexOf(G.charAt(KA++)), EA = K.indexOf(G.charAt(KA++)), q = qA << 2 | gA >> 4, A = (gA & 15) << 4 | ne >> 2, y = (ne & 3) << 6 | EA, uA = uA + String.fromCharCode(q), ne !== 64 && (uA = uA + String.fromCharCode(A)), EA !== 64 && (uA = uA + String.fromCharCode(y));
    while (KA < G.length);
    return uA;
  };
  function ti(G) {
    try {
      for (var K = dn(G), uA = new Uint8Array(K.length), q = 0; q < K.length; ++q)
        uA[q] = K.charCodeAt(q);
      return uA;
    } catch {
      throw new Error("Converting base64 string to bytes failed.");
    }
  }
  function Ce(G) {
    if (Pe(G))
      return ti(G.slice(YA.length));
  }
  var it = {
    Math,
    Int8Array,
    Int32Array,
    Uint8Array,
    Float32Array,
    Float64Array
  }, ii = {
    b: J,
    c: oA,
    d: st,
    e: _t,
    f: _e,
    g: je,
    h: Ti,
    i: pi,
    o: Ct,
    p: SA
  }, $ = (
    /** @suppress {uselessCode} */
    (function(G, K, uA) {
      "almost asm";
      var q = new G.Int8Array(uA), A = new G.Int32Array(uA);
      new G.Uint8Array(uA), new G.Float32Array(uA);
      var y = new G.Float64Array(uA), qA = K.o | 0, gA = K.p | 0, ne = G.Math.floor, EA = G.Math.abs, KA = G.Math.sqrt, pt = G.Math.pow, oe = G.Math.cos, ZA = G.Math.sin, vt = G.Math.tan, In = G.Math.acos, WA = G.Math.asin, Oe = G.Math.atan, he = G.Math.atan2, Ye = G.Math.ceil, qe = G.Math.imul, B0 = G.Math.min, Es = G.Math.max, Mi = G.Math.clz32, OA = K.b, E = K.c, kA = K.d, C0 = K.e, Lo = K.f, or = K.g, ue = K.h, Ie = K.i, b = 28656;
      function zn(t) {
        return q = new Int8Array(t), A = new Int32Array(t), y = new Float64Array(t), uA = t, !0;
      }
      function Sn(t) {
        t = t | 0;
        var e = 0;
        return e = b, b = b + t | 0, b = b + 15 & -16, e | 0;
      }
      function L0() {
        return b | 0;
      }
      function JA(t) {
        t = t | 0, b = t;
      }
      function Fe(t, e) {
        t = t | 0, b = t;
      }
      function T0(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0;
        return (t | 0) < 0 ? (e = 2, e | 0) : (t | 0) > 13780509 ? (e = pr(15, e) | 0, e | 0) : (n = ((t | 0) < 0) << 31 >> 31, o = ft(t | 0, n | 0, 3, 0) | 0, r = E() | 0, n = yA(t | 0, n | 0, 1, 0) | 0, n = ft(o | 0, r | 0, n | 0, E() | 0) | 0, n = yA(n | 0, E() | 0, 1, 0) | 0, t = E() | 0, A[e >> 2] = n, A[e + 4 >> 2] = t, e = 0, e | 0);
      }
      function sr(t, e, n, r) {
        return t = t | 0, e = e | 0, n = n | 0, r = r | 0, Lt(t, e, n, r, 0) | 0;
      }
      function Lt(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0;
        if (d = b, b = b + 16 | 0, l = d, !(To(t, e, n, r, o) | 0))
          return r = 0, b = d, r | 0;
        do
          if ((n | 0) >= 0) {
            if ((n | 0) > 13780509) {
              if (a = pr(15, l) | 0, a | 0)
                break;
              f = l, l = A[f >> 2] | 0, f = A[f + 4 >> 2] | 0;
            } else
              a = ((n | 0) < 0) << 31 >> 31, v = ft(n | 0, a | 0, 3, 0) | 0, f = E() | 0, a = yA(n | 0, a | 0, 1, 0) | 0, a = ft(v | 0, f | 0, a | 0, E() | 0) | 0, a = yA(a | 0, E() | 0, 1, 0) | 0, f = E() | 0, A[l >> 2] = a, A[l + 4 >> 2] = f, l = a;
            if (Vn(r | 0, 0, l << 3 | 0) | 0, o | 0) {
              Vn(o | 0, 0, l << 2 | 0) | 0, a = Tt(t, e, n, r, o, l, f, 0) | 0;
              break;
            }
            a = Wt(l, 4) | 0, a ? (v = Tt(t, e, n, r, a, l, f, 0) | 0, xA(a), a = v) : a = 13;
          } else
            a = 2;
        while (!1);
        return v = a, b = d, v | 0;
      }
      function To(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0;
        if (S = b, b = b + 16 | 0, T = S, M = S + 8 | 0, C = T, A[C >> 2] = t, A[C + 4 >> 2] = e, (n | 0) < 0)
          return M = 2, b = S, M | 0;
        if (a = r, A[a >> 2] = t, A[a + 4 >> 2] = e, a = (o | 0) != 0, a && (A[o >> 2] = 0), pe(t, e) | 0)
          return M = 9, b = S, M | 0;
        A[M >> 2] = 0;
        A: do
          if ((n | 0) >= 1)
            if (a)
              for (m = 1, v = 0, P = 0, C = 1, a = t; ; ) {
                if (!(v | P)) {
                  if (a = Te(a, e, 4, M, T) | 0, a | 0)
                    break A;
                  if (e = T, a = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, pe(a, e) | 0) {
                    a = 9;
                    break A;
                  }
                }
                if (a = Te(a, e, A[26800 + (P << 2) >> 2] | 0, M, T) | 0, a | 0)
                  break A;
                if (e = T, a = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, t = r + (m << 3) | 0, A[t >> 2] = a, A[t + 4 >> 2] = e, A[o + (m << 2) >> 2] = C, t = v + 1 | 0, l = (t | 0) == (C | 0), f = P + 1 | 0, d = (f | 0) == 6, pe(a, e) | 0) {
                  a = 9;
                  break A;
                }
                if (C = C + (d & l & 1) | 0, (C | 0) > (n | 0)) {
                  a = 0;
                  break;
                } else
                  m = m + 1 | 0, v = l ? 0 : t, P = l ? d ? 0 : f : P;
              }
            else
              for (m = 1, v = 0, P = 0, C = 1, a = t; ; ) {
                if (!(v | P)) {
                  if (a = Te(a, e, 4, M, T) | 0, a | 0)
                    break A;
                  if (e = T, a = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, pe(a, e) | 0) {
                    a = 9;
                    break A;
                  }
                }
                if (a = Te(a, e, A[26800 + (P << 2) >> 2] | 0, M, T) | 0, a | 0)
                  break A;
                if (e = T, a = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, t = r + (m << 3) | 0, A[t >> 2] = a, A[t + 4 >> 2] = e, t = v + 1 | 0, l = (t | 0) == (C | 0), f = P + 1 | 0, d = (f | 0) == 6, pe(a, e) | 0) {
                  a = 9;
                  break A;
                }
                if (C = C + (d & l & 1) | 0, (C | 0) > (n | 0)) {
                  a = 0;
                  break;
                } else
                  m = m + 1 | 0, v = l ? 0 : t, P = l ? d ? 0 : f : P;
              }
          else
            a = 0;
        while (!1);
        return M = a, b = S, M | 0;
      }
      function Tt(t, e, n, r, o, a, l, f) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0, l = l | 0, f = f | 0;
        var d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0;
        if (S = b, b = b + 16 | 0, T = S + 8 | 0, M = S, d = o0(t | 0, e | 0, a | 0, l | 0) | 0, m = E() | 0, P = r + (d << 3) | 0, R = P, W = A[R >> 2] | 0, R = A[R + 4 >> 2] | 0, v = (W | 0) == (t | 0) & (R | 0) == (e | 0), !((W | 0) == 0 & (R | 0) == 0 | v))
          do
            d = yA(d | 0, m | 0, 1, 0) | 0, d = r0(d | 0, E() | 0, a | 0, l | 0) | 0, m = E() | 0, P = r + (d << 3) | 0, W = P, R = A[W >> 2] | 0, W = A[W + 4 >> 2] | 0, v = (R | 0) == (t | 0) & (W | 0) == (e | 0);
          while (!((R | 0) == 0 & (W | 0) == 0 | v));
        if (d = o + (d << 2) | 0, v && (A[d >> 2] | 0) <= (f | 0) || (W = P, A[W >> 2] = t, A[W + 4 >> 2] = e, A[d >> 2] = f, (f | 0) >= (n | 0)))
          return W = 0, b = S, W | 0;
        switch (v = f + 1 | 0, A[T >> 2] = 0, d = Te(t, e, 2, T, M) | 0, d | 0) {
          case 9: {
            C = 9;
            break;
          }
          case 0: {
            d = M, d = Tt(A[d >> 2] | 0, A[d + 4 >> 2] | 0, n, r, o, a, l, v) | 0, d || (C = 9);
            break;
          }
        }
        A: do
          if ((C | 0) == 9) {
            switch (A[T >> 2] = 0, d = Te(t, e, 3, T, M) | 0, d | 0) {
              case 9:
                break;
              case 0: {
                if (d = M, d = Tt(A[d >> 2] | 0, A[d + 4 >> 2] | 0, n, r, o, a, l, v) | 0, d | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[T >> 2] = 0, d = Te(t, e, 1, T, M) | 0, d | 0) {
              case 9:
                break;
              case 0: {
                if (d = M, d = Tt(A[d >> 2] | 0, A[d + 4 >> 2] | 0, n, r, o, a, l, v) | 0, d | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[T >> 2] = 0, d = Te(t, e, 5, T, M) | 0, d | 0) {
              case 9:
                break;
              case 0: {
                if (d = M, d = Tt(A[d >> 2] | 0, A[d + 4 >> 2] | 0, n, r, o, a, l, v) | 0, d | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[T >> 2] = 0, d = Te(t, e, 4, T, M) | 0, d | 0) {
              case 9:
                break;
              case 0: {
                if (d = M, d = Tt(A[d >> 2] | 0, A[d + 4 >> 2] | 0, n, r, o, a, l, v) | 0, d | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[T >> 2] = 0, d = Te(t, e, 6, T, M) | 0, d | 0) {
              case 9:
                break;
              case 0: {
                if (d = M, d = Tt(A[d >> 2] | 0, A[d + 4 >> 2] | 0, n, r, o, a, l, v) | 0, d | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            return W = 0, b = S, W | 0;
          }
        while (!1);
        return W = d, b = S, W | 0;
      }
      function Te(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0;
        if (n >>> 0 > 6)
          return o = 1, o | 0;
        if (P = (A[r >> 2] | 0) % 6 | 0, A[r >> 2] = P, (P | 0) > 0) {
          a = 0;
          do
            n = xn(n) | 0, a = a + 1 | 0;
          while ((a | 0) < (A[r >> 2] | 0));
        }
        if (P = X(t | 0, e | 0, 45) | 0, E() | 0, m = P & 127, m >>> 0 > 121)
          return o = 5, o | 0;
        d = Qe(t, e) | 0, a = X(t | 0, e | 0, 52) | 0, E() | 0, a = a & 15;
        A: do
          if (!a)
            v = 8;
          else {
            for (; ; ) {
              if (l = (15 - a | 0) * 3 | 0, f = X(t | 0, e | 0, l | 0) | 0, E() | 0, f = f & 7, (f | 0) == 7) {
                e = 5;
                break;
              }
              if (M = (It(a) | 0) == 0, a = a + -1 | 0, C = eA(7, 0, l | 0) | 0, e = e & ~(E() | 0), T = eA(A[(M ? 432 : 16) + (f * 28 | 0) + (n << 2) >> 2] | 0, 0, l | 0) | 0, l = E() | 0, n = A[(M ? 640 : 224) + (f * 28 | 0) + (n << 2) >> 2] | 0, t = T | t & ~C, e = l | e, !n) {
                n = 0;
                break A;
              }
              if (!a) {
                v = 8;
                break A;
              }
            }
            return e | 0;
          }
        while (!1);
        (v | 0) == 8 && (M = A[848 + (m * 28 | 0) + (n << 2) >> 2] | 0, T = eA(M | 0, 0, 45) | 0, t = T | t, e = E() | 0 | e & -1040385, n = A[4272 + (m * 28 | 0) + (n << 2) >> 2] | 0, (M & 127 | 0) == 127 && (M = eA(A[848 + (m * 28 | 0) + 20 >> 2] | 0, 0, 45) | 0, e = E() | 0 | e & -1040385, n = A[4272 + (m * 28 | 0) + 20 >> 2] | 0, t = Ut(M | t, e) | 0, e = E() | 0, A[r >> 2] = (A[r >> 2] | 0) + 1)), f = X(t | 0, e | 0, 45) | 0, E() | 0, f = f & 127;
        A: do
          if (ye(f) | 0) {
            e: do
              if ((Qe(t, e) | 0) == 1) {
                if ((m | 0) != (f | 0))
                  if (NA(f, A[7696 + (m * 28 | 0) >> 2] | 0) | 0) {
                    t = si(t, e) | 0, l = 1, e = E() | 0;
                    break;
                  } else
                    kA(27795, 26864, 533, 26872);
                switch (d | 0) {
                  case 3: {
                    t = Ut(t, e) | 0, e = E() | 0, A[r >> 2] = (A[r >> 2] | 0) + 1, l = 0;
                    break e;
                  }
                  case 5: {
                    t = si(t, e) | 0, e = E() | 0, A[r >> 2] = (A[r >> 2] | 0) + 5, l = 0;
                    break e;
                  }
                  case 0:
                    return M = 9, M | 0;
                  default:
                    return M = 1, M | 0;
                }
              } else
                l = 0;
            while (!1);
            if ((n | 0) > 0) {
              a = 0;
              do
                t = X0(t, e) | 0, e = E() | 0, a = a + 1 | 0;
              while ((a | 0) != (n | 0));
            }
            if ((m | 0) != (f | 0)) {
              if (!(lr(f) | 0)) {
                if ((l | 0) != 0 | (Qe(t, e) | 0) != 5)
                  break;
                A[r >> 2] = (A[r >> 2] | 0) + 1;
                break;
              }
              switch (P & 127) {
                case 8:
                case 118:
                  break A;
              }
              (Qe(t, e) | 0) != 3 && (A[r >> 2] = (A[r >> 2] | 0) + 1);
            }
          } else if ((n | 0) > 0) {
            a = 0;
            do
              t = Ut(t, e) | 0, e = E() | 0, a = a + 1 | 0;
            while ((a | 0) != (n | 0));
          }
        while (!1);
        return A[r >> 2] = ((A[r >> 2] | 0) + n | 0) % 6 | 0, M = o, A[M >> 2] = t, A[M + 4 >> 2] = e, M = 0, M | 0;
      }
      function Ue(t, e, n, r) {
        return t = t | 0, e = e | 0, n = n | 0, r = r | 0, Vi(t, e, n, r) | 0 ? (Vn(r | 0, 0, n * 48 | 0) | 0, r = ar(t, e, n, r) | 0, r | 0) : (r = 0, r | 0);
      }
      function Vi(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0;
        if (M = b, b = b + 16 | 0, C = M, T = M + 8 | 0, P = C, A[P >> 2] = t, A[P + 4 >> 2] = e, (n | 0) < 0)
          return T = 2, b = M, T | 0;
        if (!n)
          return T = r, A[T >> 2] = t, A[T + 4 >> 2] = e, T = 0, b = M, T | 0;
        A[T >> 2] = 0;
        A: do
          if (pe(t, e) | 0)
            t = 9;
          else {
            o = 0, P = t;
            do {
              if (t = Te(P, e, 4, T, C) | 0, t | 0)
                break A;
              if (e = C, P = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, o = o + 1 | 0, pe(P, e) | 0) {
                t = 9;
                break A;
              }
            } while ((o | 0) < (n | 0));
            m = r, A[m >> 2] = P, A[m + 4 >> 2] = e, m = n + -1 | 0, v = 0, t = 1;
            do {
              if (o = 26800 + (v << 2) | 0, (v | 0) == 5)
                for (l = A[o >> 2] | 0, a = 0, o = t; ; ) {
                  if (t = C, t = Te(A[t >> 2] | 0, A[t + 4 >> 2] | 0, l, T, C) | 0, t | 0)
                    break A;
                  if ((a | 0) != (m | 0))
                    if (d = C, f = A[d >> 2] | 0, d = A[d + 4 >> 2] | 0, t = r + (o << 3) | 0, A[t >> 2] = f, A[t + 4 >> 2] = d, !(pe(f, d) | 0))
                      t = o + 1 | 0;
                    else {
                      t = 9;
                      break A;
                    }
                  else
                    t = o;
                  if (a = a + 1 | 0, (a | 0) >= (n | 0))
                    break;
                  o = t;
                }
              else
                for (l = C, d = A[o >> 2] | 0, f = 0, o = t, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0; ; ) {
                  if (t = Te(a, l, d, T, C) | 0, t | 0)
                    break A;
                  if (l = C, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, t = r + (o << 3) | 0, A[t >> 2] = a, A[t + 4 >> 2] = l, t = o + 1 | 0, pe(a, l) | 0) {
                    t = 9;
                    break A;
                  }
                  if (f = f + 1 | 0, (f | 0) >= (n | 0))
                    break;
                  o = t;
                }
              v = v + 1 | 0;
            } while (v >>> 0 < 6);
            t = C, t = (P | 0) == (A[t >> 2] | 0) && (e | 0) == (A[t + 4 >> 2] | 0) ? 0 : 9;
          }
        while (!1);
        return T = t, b = M, T | 0;
      }
      function ar(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0;
        if (P = b, b = b + 16 | 0, l = P, !n)
          return A[r >> 2] = t, A[r + 4 >> 2] = e, r = 0, b = P, r | 0;
        do
          if ((n | 0) >= 0) {
            if ((n | 0) > 13780509) {
              if (o = pr(15, l) | 0, o | 0)
                break;
              a = l, o = A[a >> 2] | 0, a = A[a + 4 >> 2] | 0;
            } else
              o = ((n | 0) < 0) << 31 >> 31, m = ft(n | 0, o | 0, 3, 0) | 0, a = E() | 0, o = yA(n | 0, o | 0, 1, 0) | 0, o = ft(m | 0, a | 0, o | 0, E() | 0) | 0, o = yA(o | 0, E() | 0, 1, 0) | 0, a = E() | 0, m = l, A[m >> 2] = o, A[m + 4 >> 2] = a;
            if (v = Wt(o, 8) | 0, !v)
              o = 13;
            else {
              if (m = Wt(o, 4) | 0, !m) {
                xA(v), o = 13;
                break;
              }
              if (o = Tt(t, e, n, v, m, o, a, 0) | 0, o | 0) {
                xA(v), xA(m);
                break;
              }
              if (e = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, (l | 0) > 0 | (l | 0) == 0 & e >>> 0 > 0) {
                o = 0, f = 0, d = 0;
                do
                  t = v + (f << 3) | 0, a = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, !((a | 0) == 0 & (t | 0) == 0) && (A[m + (f << 2) >> 2] | 0) == (n | 0) && (C = r + (o << 3) | 0, A[C >> 2] = a, A[C + 4 >> 2] = t, o = o + 1 | 0), f = yA(f | 0, d | 0, 1, 0) | 0, d = E() | 0;
                while ((d | 0) < (l | 0) | (d | 0) == (l | 0) & f >>> 0 < e >>> 0);
              }
              xA(v), xA(m), o = 0;
            }
          } else
            o = 2;
        while (!1);
        return C = o, b = P, C | 0;
      }
      function gn(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0;
        for (f = b, b = b + 16 | 0, a = f, l = f + 8 | 0, o = (pe(t, e) | 0) == 0, o = o ? 1 : 2; ; ) {
          if (A[l >> 2] = 0, v = (Te(t, e, o, l, a) | 0) == 0, d = a, v & ((A[d >> 2] | 0) == (n | 0) ? (A[d + 4 >> 2] | 0) == (r | 0) : 0)) {
            t = 4;
            break;
          }
          if (o = o + 1 | 0, o >>> 0 >= 7) {
            o = 7, t = 4;
            break;
          }
        }
        return (t | 0) == 4 ? (b = f, o | 0) : 0;
      }
      function M0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0;
        if (f = b, b = b + 48 | 0, o = f + 16 | 0, a = f + 8 | 0, l = f, n = j(n) | 0, n | 0)
          return l = n, b = f, l | 0;
        if (v = t, d = A[v + 4 >> 2] | 0, n = a, A[n >> 2] = A[v >> 2], A[n + 4 >> 2] = d, N(a, o), n = R0(o, e, l) | 0, !n) {
          if (e = A[a >> 2] | 0, a = A[t + 8 >> 2] | 0, (a | 0) > 0) {
            o = A[t + 12 >> 2] | 0, n = 0;
            do
              e = (A[o + (n << 3) >> 2] | 0) + e | 0, n = n + 1 | 0;
            while ((n | 0) < (a | 0));
          }
          n = l, o = A[n >> 2] | 0, n = A[n + 4 >> 2] | 0, a = ((e | 0) < 0) << 31 >> 31, (n | 0) < (a | 0) | (n | 0) == (a | 0) & o >>> 0 < e >>> 0 ? (n = l, A[n >> 2] = e, A[n + 4 >> 2] = a, n = a) : e = o, d = yA(e | 0, n | 0, 12, 0) | 0, v = E() | 0, n = l, A[n >> 2] = d, A[n + 4 >> 2] = v, n = r, A[n >> 2] = d, A[n + 4 >> 2] = v, n = 0;
        }
        return v = n, b = f, v | 0;
      }
      function On(t, e, n, r, o, a, l) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0, l = l | 0;
        var f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0, FA = 0, te = 0, DA = 0, mA = 0, tA = 0, jA = 0, be = 0, HA = 0, xe = 0, zt = 0, $a = 0;
        if (be = b, b = b + 64 | 0, DA = be + 48 | 0, mA = be + 32 | 0, tA = be + 24 | 0, iA = be + 8 | 0, vA = be, d = A[t >> 2] | 0, (d | 0) <= 0)
          return jA = 0, b = be, jA | 0;
        for (dA = t + 4 | 0, RA = DA + 8 | 0, FA = mA + 8 | 0, te = iA + 8 | 0, f = 0, Z = 0; ; ) {
          v = A[dA >> 2] | 0, F = v + (Z << 4) | 0, A[DA >> 2] = A[F >> 2], A[DA + 4 >> 2] = A[F + 4 >> 2], A[DA + 8 >> 2] = A[F + 8 >> 2], A[DA + 12 >> 2] = A[F + 12 >> 2], (Z | 0) == (d + -1 | 0) ? (A[mA >> 2] = A[v >> 2], A[mA + 4 >> 2] = A[v + 4 >> 2], A[mA + 8 >> 2] = A[v + 8 >> 2], A[mA + 12 >> 2] = A[v + 12 >> 2]) : (F = v + (Z + 1 << 4) | 0, A[mA >> 2] = A[F >> 2], A[mA + 4 >> 2] = A[F + 4 >> 2], A[mA + 8 >> 2] = A[F + 8 >> 2], A[mA + 12 >> 2] = A[F + 12 >> 2]), d = Cs(DA, mA, r, tA) | 0;
          A: do
            if (d)
              v = 0, f = d;
            else if (d = tA, v = A[d >> 2] | 0, d = A[d + 4 >> 2] | 0, (d | 0) > 0 | (d | 0) == 0 & v >>> 0 > 0) {
              W = 0, F = 0;
              e: for (; ; ) {
                if (xe = 1 / (+(v >>> 0) + 4294967296 * +(d | 0)), $a = +y[DA >> 3], d = ut(v | 0, d | 0, W | 0, F | 0) | 0, zt = +(d >>> 0) + 4294967296 * +(E() | 0), HA = +(W >>> 0) + 4294967296 * +(F | 0), y[iA >> 3] = xe * ($a * zt) + xe * (+y[mA >> 3] * HA), y[te >> 3] = xe * (+y[RA >> 3] * zt) + xe * (+y[FA >> 3] * HA), d = dr(iA, r, vA) | 0, d | 0) {
                  f = d;
                  break;
                }
                R = vA, S = A[R >> 2] | 0, R = A[R + 4 >> 2] | 0, C = o0(S | 0, R | 0, e | 0, n | 0) | 0, m = E() | 0, d = l + (C << 3) | 0, P = d, v = A[P >> 2] | 0, P = A[P + 4 >> 2] | 0;
                t: do
                  if ((v | 0) == 0 & (P | 0) == 0)
                    O = d, jA = 16;
                  else
                    for (T = 0, M = 0; ; ) {
                      if ((T | 0) > (n | 0) | (T | 0) == (n | 0) & M >>> 0 > e >>> 0) {
                        f = 1;
                        break e;
                      }
                      if ((v | 0) == (S | 0) & (P | 0) == (R | 0))
                        break t;
                      if (d = yA(C | 0, m | 0, 1, 0) | 0, C = r0(d | 0, E() | 0, e | 0, n | 0) | 0, m = E() | 0, M = yA(M | 0, T | 0, 1, 0) | 0, T = E() | 0, d = l + (C << 3) | 0, P = d, v = A[P >> 2] | 0, P = A[P + 4 >> 2] | 0, (v | 0) == 0 & (P | 0) == 0) {
                        O = d, jA = 16;
                        break;
                      }
                    }
                while (!1);
                if ((jA | 0) == 16 && (jA = 0, !((S | 0) == 0 & (R | 0) == 0)) && (M = O, A[M >> 2] = S, A[M + 4 >> 2] = R, M = a + (A[o >> 2] << 3) | 0, A[M >> 2] = S, A[M + 4 >> 2] = R, M = o, M = yA(A[M >> 2] | 0, A[M + 4 >> 2] | 0, 1, 0) | 0, S = E() | 0, R = o, A[R >> 2] = M, A[R + 4 >> 2] = S), W = yA(W | 0, F | 0, 1, 0) | 0, F = E() | 0, d = tA, v = A[d >> 2] | 0, d = A[d + 4 >> 2] | 0, !((d | 0) > (F | 0) | (d | 0) == (F | 0) & v >>> 0 > W >>> 0)) {
                  v = 1;
                  break A;
                }
              }
              v = 0;
            } else
              v = 1;
          while (!1);
          if (Z = Z + 1 | 0, !v) {
            jA = 21;
            break;
          }
          if (d = A[t >> 2] | 0, (Z | 0) >= (d | 0)) {
            f = 0, jA = 21;
            break;
          }
        }
        return (jA | 0) == 21 ? (b = be, f | 0) : 0;
      }
      function D0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0, FA = 0, te = 0, DA = 0, mA = 0, tA = 0, jA = 0, be = 0, HA = 0, xe = 0, zt = 0;
        if (zt = b, b = b + 112 | 0, jA = zt + 80 | 0, d = zt + 72 | 0, be = zt, HA = zt + 56 | 0, o = j(n) | 0, o | 0)
          return xe = o, b = zt, xe | 0;
        if (v = t + 8 | 0, xe = $i((A[v >> 2] << 5) + 32 | 0) | 0, !xe)
          return xe = 13, b = zt, xe | 0;
        if (AA(t, xe), o = j(n) | 0, !o) {
          if (mA = t, tA = A[mA + 4 >> 2] | 0, o = d, A[o >> 2] = A[mA >> 2], A[o + 4 >> 2] = tA, N(d, jA), o = R0(jA, e, be) | 0, o)
            mA = 0, tA = 0;
          else {
            if (o = A[d >> 2] | 0, a = A[v >> 2] | 0, (a | 0) > 0) {
              l = A[t + 12 >> 2] | 0, n = 0;
              do
                o = (A[l + (n << 3) >> 2] | 0) + o | 0, n = n + 1 | 0;
              while ((n | 0) != (a | 0));
              n = o;
            } else
              n = o;
            o = be, a = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, l = ((n | 0) < 0) << 31 >> 31, (o | 0) < (l | 0) | (o | 0) == (l | 0) & a >>> 0 < n >>> 0 ? (o = be, A[o >> 2] = n, A[o + 4 >> 2] = l, o = l) : n = a, mA = yA(n | 0, o | 0, 12, 0) | 0, tA = E() | 0, o = be, A[o >> 2] = mA, A[o + 4 >> 2] = tA, o = 0;
          }
          if (!o) {
            if (n = Wt(mA, 8) | 0, !n)
              return xA(xe), xe = 13, b = zt, xe | 0;
            if (f = Wt(mA, 8) | 0, !f)
              return xA(xe), xA(n), xe = 13, b = zt, xe | 0;
            te = jA, A[te >> 2] = 0, A[te + 4 >> 2] = 0, te = t, DA = A[te + 4 >> 2] | 0, o = d, A[o >> 2] = A[te >> 2], A[o + 4 >> 2] = DA, o = On(d, mA, tA, e, jA, n, f) | 0;
            A: do
              if (o)
                xA(n), xA(f), xA(xe);
              else {
                e: do
                  if ((A[v >> 2] | 0) > 0) {
                    for (l = t + 12 | 0, a = 0; o = On((A[l >> 2] | 0) + (a << 3) | 0, mA, tA, e, jA, n, f) | 0, a = a + 1 | 0, !(o | 0); )
                      if ((a | 0) >= (A[v >> 2] | 0))
                        break e;
                    xA(n), xA(f), xA(xe);
                    break A;
                  }
                while (!1);
                (tA | 0) > 0 | (tA | 0) == 0 & mA >>> 0 > 0 && Vn(f | 0, 0, mA << 3 | 0) | 0, DA = jA, te = A[DA + 4 >> 2] | 0;
                e: do
                  if ((te | 0) > 0 | (te | 0) == 0 & (A[DA >> 2] | 0) >>> 0 > 0) {
                    dA = n, RA = f, FA = n, te = f, DA = n, o = n, O = n, iA = f, vA = f, n = f;
                    t: for (; ; ) {
                      for (R = 0, W = 0, F = 0, Z = 0, a = 0, l = 0; ; ) {
                        f = be, d = f + 56 | 0;
                        do
                          A[f >> 2] = 0, f = f + 4 | 0;
                        while ((f | 0) < (d | 0));
                        if (e = dA + (R << 3) | 0, v = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, To(v, e, 1, be, 0) | 0) {
                          f = be, d = f + 56 | 0;
                          do
                            A[f >> 2] = 0, f = f + 4 | 0;
                          while ((f | 0) < (d | 0));
                          f = Wt(7, 4) | 0, f | 0 && (Tt(v, e, 1, be, f, 7, 0, 0) | 0, xA(f));
                        }
                        for (S = 0; ; ) {
                          M = be + (S << 3) | 0, T = A[M >> 2] | 0, M = A[M + 4 >> 2] | 0;
                          i: do
                            if ((T | 0) == 0 & (M | 0) == 0)
                              f = a, d = l;
                            else {
                              if (m = o0(T | 0, M | 0, mA | 0, tA | 0) | 0, v = E() | 0, f = r + (m << 3) | 0, e = f, d = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, !((d | 0) == 0 & (e | 0) == 0)) {
                                P = 0, C = 0;
                                do {
                                  if ((P | 0) > (tA | 0) | (P | 0) == (tA | 0) & C >>> 0 > mA >>> 0)
                                    break t;
                                  if ((d | 0) == (T | 0) & (e | 0) == (M | 0)) {
                                    f = a, d = l;
                                    break i;
                                  }
                                  f = yA(m | 0, v | 0, 1, 0) | 0, m = r0(f | 0, E() | 0, mA | 0, tA | 0) | 0, v = E() | 0, C = yA(C | 0, P | 0, 1, 0) | 0, P = E() | 0, f = r + (m << 3) | 0, e = f, d = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0;
                                } while (!((d | 0) == 0 & (e | 0) == 0));
                              }
                              if ((T | 0) == 0 & (M | 0) == 0) {
                                f = a, d = l;
                                break;
                              }
                              mi(T, M, HA) | 0, hA(t, xe, HA) | 0 && (C = yA(a | 0, l | 0, 1, 0) | 0, l = E() | 0, P = f, A[P >> 2] = T, A[P + 4 >> 2] = M, a = RA + (a << 3) | 0, A[a >> 2] = T, A[a + 4 >> 2] = M, a = C), f = a, d = l;
                            }
                          while (!1);
                          if (S = S + 1 | 0, S >>> 0 >= 7)
                            break;
                          a = f, l = d;
                        }
                        if (R = yA(R | 0, W | 0, 1, 0) | 0, W = E() | 0, F = yA(F | 0, Z | 0, 1, 0) | 0, Z = E() | 0, l = jA, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, (Z | 0) < (l | 0) | (Z | 0) == (l | 0) & F >>> 0 < a >>> 0)
                          a = f, l = d;
                        else
                          break;
                      }
                      if ((l | 0) > 0 | (l | 0) == 0 & a >>> 0 > 0) {
                        a = 0, l = 0;
                        do
                          Z = dA + (a << 3) | 0, A[Z >> 2] = 0, A[Z + 4 >> 2] = 0, a = yA(a | 0, l | 0, 1, 0) | 0, l = E() | 0, Z = jA, F = A[Z + 4 >> 2] | 0;
                        while ((l | 0) < (F | 0) | ((l | 0) == (F | 0) ? a >>> 0 < (A[Z >> 2] | 0) >>> 0 : 0));
                      }
                      if (Z = jA, A[Z >> 2] = f, A[Z + 4 >> 2] = d, (d | 0) > 0 | (d | 0) == 0 & f >>> 0 > 0)
                        S = n, R = vA, W = DA, F = iA, Z = RA, n = O, vA = o, iA = FA, O = S, o = R, DA = te, te = W, FA = F, RA = dA, dA = Z;
                      else
                        break e;
                    }
                    xA(FA), xA(te), xA(xe), o = 1;
                    break A;
                  } else
                    o = f;
                while (!1);
                xA(xe), xA(n), xA(o), o = 0;
              }
            while (!1);
            return xe = o, b = zt, xe | 0;
          }
        }
        return xA(xe), xe = o, b = zt, xe | 0;
      }
      function I0(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (m = b, b = b + 176 | 0, d = m, (e | 0) < 1)
          return Wa(n, 0, 0), v = 0, b = m, v | 0;
        for (f = t, f = X(A[f >> 2] | 0, A[f + 4 >> 2] | 0, 52) | 0, E() | 0, Wa(n, (e | 0) > 6 ? e : 6, f & 15), f = 0; r = t + (f << 3) | 0, r = ai(A[r >> 2] | 0, A[r + 4 >> 2] | 0, d) | 0, !(r | 0); ) {
          if (r = A[d >> 2] | 0, (r | 0) > 0) {
            l = 0;
            do
              a = d + 8 + (l << 4) | 0, l = l + 1 | 0, r = d + 8 + (((l | 0) % (r | 0) | 0) << 4) | 0, o = Eu(n, r, a) | 0, o ? Ya(n, o) | 0 : Pu(n, a, r) | 0, r = A[d >> 2] | 0;
            while ((l | 0) < (r | 0));
          }
          if (f = f + 1 | 0, (f | 0) >= (e | 0)) {
            r = 0, v = 13;
            break;
          }
        }
        return (v | 0) == 13 ? (b = m, r | 0) : (Va(n), v = r, b = m, v | 0);
      }
      function Ur(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        if (a = b, b = b + 32 | 0, r = a, o = a + 16 | 0, t = I0(t, e, o) | 0, t | 0)
          return n = t, b = a, n | 0;
        if (A[n >> 2] = 0, A[n + 4 >> 2] = 0, A[n + 8 >> 2] = 0, t = ja(o) | 0, t | 0)
          do {
            e = mr(n) | 0;
            do
              Vo(e, t) | 0, l = t + 16 | 0, A[r >> 2] = A[l >> 2], A[r + 4 >> 2] = A[l + 4 >> 2], A[r + 8 >> 2] = A[l + 8 >> 2], A[r + 12 >> 2] = A[l + 12 >> 2], Ya(o, t) | 0, t = Bu(o, r) | 0;
            while ((t | 0) != 0);
            t = ja(o) | 0;
          } while ((t | 0) != 0);
        return Va(o), t = Ks(n) | 0, t ? (Ao(n), l = t, b = a, l | 0) : (l = 0, b = a, l | 0);
      }
      function ye(t) {
        return t = t | 0, t >>> 0 > 121 ? (t = 0, t | 0) : (t = A[7696 + (t * 28 | 0) + 16 >> 2] | 0, t | 0);
      }
      function lr(t) {
        return t = t | 0, (t | 0) == 4 | (t | 0) == 117 | 0;
      }
      function ur(t) {
        return t = t | 0, A[11120 + ((A[t >> 2] | 0) * 216 | 0) + ((A[t + 4 >> 2] | 0) * 72 | 0) + ((A[t + 8 >> 2] | 0) * 24 | 0) + (A[t + 12 >> 2] << 3) >> 2] | 0;
      }
      function Mo(t) {
        return t = t | 0, A[11120 + ((A[t >> 2] | 0) * 216 | 0) + ((A[t + 4 >> 2] | 0) * 72 | 0) + ((A[t + 8 >> 2] | 0) * 24 | 0) + (A[t + 12 >> 2] << 3) + 4 >> 2] | 0;
      }
      function z0(t, e) {
        t = t | 0, e = e | 0, t = 7696 + (t * 28 | 0) | 0, A[e >> 2] = A[t >> 2], A[e + 4 >> 2] = A[t + 4 >> 2], A[e + 8 >> 2] = A[t + 8 >> 2], A[e + 12 >> 2] = A[t + 12 >> 2];
      }
      function Bs(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0;
        if (e >>> 0 > 20)
          return e = -1, e | 0;
        do
          if ((A[11120 + (e * 216 | 0) >> 2] | 0) != (t | 0))
            if ((A[11120 + (e * 216 | 0) + 8 >> 2] | 0) != (t | 0))
              if ((A[11120 + (e * 216 | 0) + 16 >> 2] | 0) != (t | 0))
                if ((A[11120 + (e * 216 | 0) + 24 >> 2] | 0) != (t | 0))
                  if ((A[11120 + (e * 216 | 0) + 32 >> 2] | 0) != (t | 0))
                    if ((A[11120 + (e * 216 | 0) + 40 >> 2] | 0) != (t | 0))
                      if ((A[11120 + (e * 216 | 0) + 48 >> 2] | 0) != (t | 0))
                        if ((A[11120 + (e * 216 | 0) + 56 >> 2] | 0) != (t | 0))
                          if ((A[11120 + (e * 216 | 0) + 64 >> 2] | 0) != (t | 0))
                            if ((A[11120 + (e * 216 | 0) + 72 >> 2] | 0) != (t | 0))
                              if ((A[11120 + (e * 216 | 0) + 80 >> 2] | 0) != (t | 0))
                                if ((A[11120 + (e * 216 | 0) + 88 >> 2] | 0) != (t | 0))
                                  if ((A[11120 + (e * 216 | 0) + 96 >> 2] | 0) != (t | 0))
                                    if ((A[11120 + (e * 216 | 0) + 104 >> 2] | 0) != (t | 0))
                                      if ((A[11120 + (e * 216 | 0) + 112 >> 2] | 0) != (t | 0))
                                        if ((A[11120 + (e * 216 | 0) + 120 >> 2] | 0) != (t | 0))
                                          if ((A[11120 + (e * 216 | 0) + 128 >> 2] | 0) != (t | 0))
                                            if ((A[11120 + (e * 216 | 0) + 136 >> 2] | 0) == (t | 0))
                                              t = 2, n = 1, r = 2;
                                            else {
                                              if ((A[11120 + (e * 216 | 0) + 144 >> 2] | 0) == (t | 0)) {
                                                t = 0, n = 2, r = 0;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 152 >> 2] | 0) == (t | 0)) {
                                                t = 0, n = 2, r = 1;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 160 >> 2] | 0) == (t | 0)) {
                                                t = 0, n = 2, r = 2;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 168 >> 2] | 0) == (t | 0)) {
                                                t = 1, n = 2, r = 0;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 176 >> 2] | 0) == (t | 0)) {
                                                t = 1, n = 2, r = 1;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 184 >> 2] | 0) == (t | 0)) {
                                                t = 1, n = 2, r = 2;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 192 >> 2] | 0) == (t | 0)) {
                                                t = 2, n = 2, r = 0;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 200 >> 2] | 0) == (t | 0)) {
                                                t = 2, n = 2, r = 1;
                                                break;
                                              }
                                              if ((A[11120 + (e * 216 | 0) + 208 >> 2] | 0) == (t | 0)) {
                                                t = 2, n = 2, r = 2;
                                                break;
                                              } else
                                                t = -1;
                                              return t | 0;
                                            }
                                          else
                                            t = 2, n = 1, r = 1;
                                        else
                                          t = 2, n = 1, r = 0;
                                      else
                                        t = 1, n = 1, r = 2;
                                    else
                                      t = 1, n = 1, r = 1;
                                  else
                                    t = 1, n = 1, r = 0;
                                else
                                  t = 0, n = 1, r = 2;
                              else
                                t = 0, n = 1, r = 1;
                            else
                              t = 0, n = 1, r = 0;
                          else
                            t = 2, n = 0, r = 2;
                        else
                          t = 2, n = 0, r = 1;
                      else
                        t = 2, n = 0, r = 0;
                    else
                      t = 1, n = 0, r = 2;
                  else
                    t = 1, n = 0, r = 1;
                else
                  t = 1, n = 0, r = 0;
              else
                t = 0, n = 0, r = 2;
            else
              t = 0, n = 0, r = 1;
          else
            t = 0, n = 0, r = 0;
        while (!1);
        return e = A[11120 + (e * 216 | 0) + (n * 72 | 0) + (t * 24 | 0) + (r << 3) + 4 >> 2] | 0, e | 0;
      }
      function NA(t, e) {
        return t = t | 0, e = e | 0, (A[7696 + (t * 28 | 0) + 20 >> 2] | 0) == (e | 0) ? (e = 1, e | 0) : (e = (A[7696 + (t * 28 | 0) + 24 >> 2] | 0) == (e | 0), e | 0);
      }
      function Ft(t, e) {
        return t = t | 0, e = e | 0, A[848 + (t * 28 | 0) + (e << 2) >> 2] | 0;
      }
      function me(t, e) {
        return t = t | 0, e = e | 0, (A[848 + (t * 28 | 0) >> 2] | 0) == (e | 0) ? (e = 0, e | 0) : (A[848 + (t * 28 | 0) + 4 >> 2] | 0) == (e | 0) ? (e = 1, e | 0) : (A[848 + (t * 28 | 0) + 8 >> 2] | 0) == (e | 0) ? (e = 2, e | 0) : (A[848 + (t * 28 | 0) + 12 >> 2] | 0) == (e | 0) ? (e = 3, e | 0) : (A[848 + (t * 28 | 0) + 16 >> 2] | 0) == (e | 0) ? (e = 4, e | 0) : (A[848 + (t * 28 | 0) + 20 >> 2] | 0) == (e | 0) ? (e = 5, e | 0) : ((A[848 + (t * 28 | 0) + 24 >> 2] | 0) == (e | 0) ? 6 : 7) | 0;
      }
      function Do() {
        return 122;
      }
      function S0(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0;
        e = 0;
        do
          eA(e | 0, 0, 45) | 0, r = E() | 0 | 134225919, n = t + (e << 3) | 0, A[n >> 2] = -1, A[n + 4 >> 2] = r, e = e + 1 | 0;
        while ((e | 0) != 122);
        return 0;
      }
      function O0(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0;
        return r = +y[t + 16 >> 3], n = +y[t + 24 >> 3], e = r - n, +(r < n ? e + 6.283185307179586 : e);
      }
      function Gr(t) {
        return t = t | 0, +y[t + 16 >> 3] < +y[t + 24 >> 3] | 0;
      }
      function wn(t) {
        return t = t | 0, +(+y[t >> 3] - +y[t + 8 >> 3]);
      }
      function fr(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0;
        return n = +y[e >> 3], !(n >= +y[t + 8 >> 3]) || !(n <= +y[t >> 3]) ? (e = 0, e | 0) : (r = +y[t + 16 >> 3], n = +y[t + 24 >> 3], o = +y[e + 8 >> 3], e = o >= n, t = o <= r & 1, r < n ? e && (t = 1) : e || (t = 0), e = (t | 0) != 0, e | 0);
      }
      function yn(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        return +y[t >> 3] < +y[e + 8 >> 3] || +y[t + 8 >> 3] > +y[e >> 3] ? (r = 0, r | 0) : (a = +y[t + 16 >> 3], n = t + 24 | 0, m = +y[n >> 3], l = a < m, r = e + 16 | 0, v = +y[r >> 3], o = e + 24 | 0, d = +y[o >> 3], f = v < d, e = m - v < d - a, t = l ? f | e ? 1 : 2 : 0, e = f ? l ? 1 : e ? 2 : 1 : 0, a = +at(a, t), a < +at(+y[o >> 3], e) || (m = +at(+y[n >> 3], t), m > +at(+y[r >> 3], e)) ? (f = 0, f | 0) : (f = 1, f | 0));
      }
      function nt(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0;
        a = +y[t + 16 >> 3], d = +y[t + 24 >> 3], t = a < d, f = +y[e + 16 >> 3], l = +y[e + 24 >> 3], o = f < l, e = d - f < l - a, A[n >> 2] = t ? o | e ? 1 : 2 : 0, A[r >> 2] = o ? t ? 1 : e ? 2 : 1 : 0;
      }
      function ji(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        return +y[t >> 3] < +y[e >> 3] || +y[t + 8 >> 3] > +y[e + 8 >> 3] ? (r = 0, r | 0) : (r = t + 16 | 0, d = +y[r >> 3], a = +y[t + 24 >> 3], l = d < a, n = e + 16 | 0, m = +y[n >> 3], o = e + 24 | 0, v = +y[o >> 3], f = m < v, e = a - m < v - d, t = l ? f | e ? 1 : 2 : 0, e = f ? l ? 1 : e ? 2 : 1 : 0, a = +at(a, t), a <= +at(+y[o >> 3], e) ? (m = +at(+y[r >> 3], t), f = m >= +at(+y[n >> 3], e), f | 0) : (f = 0, f | 0));
      }
      function Q0(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = b, b = b + 176 | 0, r = o, A[r >> 2] = 4, f = +y[e >> 3], y[r + 8 >> 3] = f, a = +y[e + 16 >> 3], y[r + 16 >> 3] = a, y[r + 24 >> 3] = f, f = +y[e + 24 >> 3], y[r + 32 >> 3] = f, l = +y[e + 8 >> 3], y[r + 40 >> 3] = l, y[r + 48 >> 3] = f, y[r + 56 >> 3] = l, y[r + 64 >> 3] = a, e = r + 72 | 0, n = e + 96 | 0;
        do
          A[e >> 2] = 0, e = e + 4 | 0;
        while ((e | 0) < (n | 0));
        s0(t | 0, r | 0, 168) | 0, b = o;
      }
      function R0(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0;
        M = b, b = b + 288 | 0, m = M + 264 | 0, P = M + 96 | 0, v = M, f = v, d = f + 96 | 0;
        do
          A[f >> 2] = 0, f = f + 4 | 0;
        while ((f | 0) < (d | 0));
        return e = $0(e, v) | 0, e | 0 ? (T = e, b = M, T | 0) : (d = v, v = A[d >> 2] | 0, d = A[d + 4 >> 2] | 0, mi(v, d, m) | 0, ai(v, d, P) | 0, l = +Ji(m, P + 8 | 0), y[m >> 3] = +y[t >> 3], d = m + 8 | 0, y[d >> 3] = +y[t + 16 >> 3], y[P >> 3] = +y[t + 8 >> 3], v = P + 8 | 0, y[v >> 3] = +y[t + 24 >> 3], o = +Ji(m, P), R = +y[d >> 3] - +y[v >> 3], a = +EA(+R), S = +y[m >> 3] - +y[P >> 3], r = +EA(+S), !(R == 0 | S == 0) && (R = +Ja(+a, +r), R = +Ye(+(o * o / +$o(+(R / +$o(+a, +r)), 3) / (l * (l * 2.59807621135) * 0.8))), y[qA >> 3] = R, C = ~~R >>> 0, T = +EA(R) >= 1 ? R > 0 ? ~~+B0(+ne(R / 4294967296), 4294967295) >>> 0 : ~~+Ye((R - +(~~R >>> 0)) / 4294967296) >>> 0 : 0, (A[qA + 4 >> 2] & 2146435072 | 0) != 2146435072) ? (P = (C | 0) == 0 & (T | 0) == 0, e = n, A[e >> 2] = P ? 1 : C, A[e + 4 >> 2] = P ? 0 : T, e = 0) : e = 1, T = e, b = M, T | 0);
      }
      function Cs(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        v = b, b = b + 288 | 0, l = v + 264 | 0, f = v + 96 | 0, d = v, o = d, a = o + 96 | 0;
        do
          A[o >> 2] = 0, o = o + 4 | 0;
        while ((o | 0) < (a | 0));
        return n = $0(n, d) | 0, n | 0 ? (r = n, b = v, r | 0) : (n = d, o = A[n >> 2] | 0, n = A[n + 4 >> 2] | 0, mi(o, n, l) | 0, ai(o, n, f) | 0, m = +Ji(l, f + 8 | 0), m = +Ye(+(+Ji(t, e) / (m * 2))), y[qA >> 3] = m, n = ~~m >>> 0, o = +EA(m) >= 1 ? m > 0 ? ~~+B0(+ne(m / 4294967296), 4294967295) >>> 0 : ~~+Ye((m - +(~~m >>> 0)) / 4294967296) >>> 0 : 0, (A[qA + 4 >> 2] & 2146435072 | 0) == 2146435072 ? (r = 1, b = v, r | 0) : (d = (n | 0) == 0 & (o | 0) == 0, A[r >> 2] = d ? 1 : n, A[r + 4 >> 2] = d ? 0 : o, r = 0, b = v, r | 0));
      }
      function Io(t, e) {
        t = t | 0, e = +e;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        a = t + 16 | 0, l = +y[a >> 3], n = t + 24 | 0, o = +y[n >> 3], r = l - o, r = l < o ? r + 6.283185307179586 : r, v = +y[t >> 3], f = t + 8 | 0, d = +y[f >> 3], m = v - d, r = (r * e - r) * 0.5, e = (m * e - m) * 0.5, v = v + e, y[t >> 3] = v > 1.5707963267948966 ? 1.5707963267948966 : v, e = d - e, y[f >> 3] = e < -1.5707963267948966 ? -1.5707963267948966 : e, e = l + r, e = e > 3.141592653589793 ? e + -6.283185307179586 : e, y[a >> 3] = e < -3.141592653589793 ? e + 6.283185307179586 : e, e = o - r, e = e > 3.141592653589793 ? e + -6.283185307179586 : e, y[n >> 3] = e < -3.141592653589793 ? e + 6.283185307179586 : e;
      }
      function Z0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, A[t >> 2] = e, A[t + 4 >> 2] = n, A[t + 8 >> 2] = r;
      }
      function Ls(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0;
        P = e + 8 | 0, A[P >> 2] = 0, d = +y[t >> 3], l = +EA(+d), v = +y[t + 8 >> 3], f = +EA(+v) * 1.1547005383792515, l = l + f * 0.5, n = ~~l, t = ~~f, l = l - +(n | 0), f = f - +(t | 0);
        do
          if (l < 0.5)
            if (l < 0.3333333333333333)
              if (A[e >> 2] = n, f < (l + 1) * 0.5) {
                A[e + 4 >> 2] = t;
                break;
              } else {
                t = t + 1 | 0, A[e + 4 >> 2] = t;
                break;
              }
            else if (C = 1 - l, t = (!(f < C) & 1) + t | 0, A[e + 4 >> 2] = t, C <= f & f < l * 2) {
              n = n + 1 | 0, A[e >> 2] = n;
              break;
            } else {
              A[e >> 2] = n;
              break;
            }
          else {
            if (!(l < 0.6666666666666666))
              if (n = n + 1 | 0, A[e >> 2] = n, f < l * 0.5) {
                A[e + 4 >> 2] = t;
                break;
              } else {
                t = t + 1 | 0, A[e + 4 >> 2] = t;
                break;
              }
            if (f < 1 - l) {
              if (A[e + 4 >> 2] = t, l * 2 + -1 < f) {
                A[e >> 2] = n;
                break;
              }
            } else
              t = t + 1 | 0, A[e + 4 >> 2] = t;
            n = n + 1 | 0, A[e >> 2] = n;
          }
        while (!1);
        do
          if (d < 0)
            if (t & 1) {
              m = (t + 1 | 0) / 2 | 0, m = ut(n | 0, ((n | 0) < 0) << 31 >> 31 | 0, m | 0, ((m | 0) < 0) << 31 >> 31 | 0) | 0, n = ~~(+(n | 0) - ((+(m >>> 0) + 4294967296 * +(E() | 0)) * 2 + 1)), A[e >> 2] = n;
              break;
            } else {
              m = (t | 0) / 2 | 0, m = ut(n | 0, ((n | 0) < 0) << 31 >> 31 | 0, m | 0, ((m | 0) < 0) << 31 >> 31 | 0) | 0, n = ~~(+(n | 0) - (+(m >>> 0) + 4294967296 * +(E() | 0)) * 2), A[e >> 2] = n;
              break;
            }
        while (!1);
        m = e + 4 | 0, v < 0 && (n = n - ((t << 1 | 1 | 0) / 2 | 0) | 0, A[e >> 2] = n, t = 0 - t | 0, A[m >> 2] = t), r = t - n | 0, (n | 0) < 0 ? (o = 0 - n | 0, A[m >> 2] = r, A[P >> 2] = o, A[e >> 2] = 0, t = r, n = 0) : o = 0, (t | 0) < 0 && (n = n - t | 0, A[e >> 2] = n, o = o - t | 0, A[P >> 2] = o, A[m >> 2] = 0, t = 0), a = n - o | 0, r = t - o | 0, (o | 0) < 0 && (A[e >> 2] = a, A[m >> 2] = r, A[P >> 2] = 0, t = r, n = a, o = 0), r = (t | 0) < (n | 0) ? t : n, r = (o | 0) < (r | 0) ? o : r, !((r | 0) <= 0) && (A[e >> 2] = n - r, A[m >> 2] = t - r, A[P >> 2] = o - r);
      }
      function rt(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0;
        e = A[t >> 2] | 0, l = t + 4 | 0, n = A[l >> 2] | 0, (e | 0) < 0 && (n = n - e | 0, A[l >> 2] = n, a = t + 8 | 0, A[a >> 2] = (A[a >> 2] | 0) - e, A[t >> 2] = 0, e = 0), (n | 0) < 0 ? (e = e - n | 0, A[t >> 2] = e, a = t + 8 | 0, o = (A[a >> 2] | 0) - n | 0, A[a >> 2] = o, A[l >> 2] = 0, n = 0) : (o = t + 8 | 0, a = o, o = A[o >> 2] | 0), (o | 0) < 0 && (e = e - o | 0, A[t >> 2] = e, n = n - o | 0, A[l >> 2] = n, A[a >> 2] = 0, o = 0), r = (n | 0) < (e | 0) ? n : e, r = (o | 0) < (r | 0) ? o : r, !((r | 0) <= 0) && (A[t >> 2] = e - r, A[l >> 2] = n - r, A[a >> 2] = o - r);
      }
      function XA(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0;
        r = A[t + 8 >> 2] | 0, n = +((A[t + 4 >> 2] | 0) - r | 0), y[e >> 3] = +((A[t >> 2] | 0) - r | 0) - n * 0.5, y[e + 8 >> 3] = n * 0.8660254037844386;
      }
      function mt(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0, A[n >> 2] = (A[e >> 2] | 0) + (A[t >> 2] | 0), A[n + 4 >> 2] = (A[e + 4 >> 2] | 0) + (A[t + 4 >> 2] | 0), A[n + 8 >> 2] = (A[e + 8 >> 2] | 0) + (A[t + 8 >> 2] | 0);
      }
      function Mt(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0, A[n >> 2] = (A[t >> 2] | 0) - (A[e >> 2] | 0), A[n + 4 >> 2] = (A[t + 4 >> 2] | 0) - (A[e + 4 >> 2] | 0), A[n + 8 >> 2] = (A[t + 8 >> 2] | 0) - (A[e + 8 >> 2] | 0);
      }
      function Qn(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0;
        n = qe(A[t >> 2] | 0, e) | 0, A[t >> 2] = n, n = t + 4 | 0, r = qe(A[n >> 2] | 0, e) | 0, A[n >> 2] = r, t = t + 8 | 0, e = qe(A[t >> 2] | 0, e) | 0, A[t >> 2] = e;
      }
      function hr(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        l = A[t >> 2] | 0, f = (l | 0) < 0, r = (A[t + 4 >> 2] | 0) - (f ? l : 0) | 0, a = (r | 0) < 0, o = (a ? 0 - r | 0 : 0) + ((A[t + 8 >> 2] | 0) - (f ? l : 0)) | 0, n = (o | 0) < 0, t = n ? 0 : o, e = (a ? 0 : r) - (n ? o : 0) | 0, o = (f ? 0 : l) - (a ? r : 0) - (n ? o : 0) | 0, n = (e | 0) < (o | 0) ? e : o, n = (t | 0) < (n | 0) ? t : n, r = (n | 0) > 0, t = t - (r ? n : 0) | 0, e = e - (r ? n : 0) | 0;
        A: do
          switch (o - (r ? n : 0) | 0) {
            case 0:
              switch (e | 0) {
                case 0:
                  return f = (t | 0) == 0 ? 0 : (t | 0) == 1 ? 1 : 7, f | 0;
                case 1:
                  return f = (t | 0) == 0 ? 2 : (t | 0) == 1 ? 3 : 7, f | 0;
                default:
                  break A;
              }
            case 1:
              switch (e | 0) {
                case 0:
                  return f = (t | 0) == 0 ? 4 : (t | 0) == 1 ? 5 : 7, f | 0;
                case 1: {
                  if (!t)
                    t = 6;
                  else
                    break A;
                  return t | 0;
                }
                default:
                  break A;
              }
          }
        while (!1);
        return f = 7, f | 0;
      }
      function Ts(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0;
        if (d = t + 8 | 0, l = A[d >> 2] | 0, f = (A[t >> 2] | 0) - l | 0, v = t + 4 | 0, l = (A[v >> 2] | 0) - l | 0, f >>> 0 > 715827881 | l >>> 0 > 715827881) {
          if (r = (f | 0) > 0, o = 2147483647 - f | 0, a = -2147483648 - f | 0, (r ? (o | 0) < (f | 0) : (a | 0) > (f | 0)) || (n = f << 1, r ? (2147483647 - n | 0) < (f | 0) : (-2147483648 - n | 0) > (f | 0)) || ((l | 0) > 0 ? (2147483647 - l | 0) < (l | 0) : (-2147483648 - l | 0) > (l | 0)) || (e = f * 3 | 0, n = l << 1, (r ? (o | 0) < (n | 0) : (a | 0) > (n | 0)) || ((f | 0) > -1 ? (e | -2147483648 | 0) >= (l | 0) : (e ^ -2147483648 | 0) < (l | 0))))
            return v = 1, v | 0;
        } else
          n = l << 1, e = f * 3 | 0;
        return r = Gn(+(e - l | 0) * 0.14285714285714285) | 0, A[t >> 2] = r, o = Gn(+(n + f | 0) * 0.14285714285714285) | 0, A[v >> 2] = o, A[d >> 2] = 0, n = (o | 0) < (r | 0), e = n ? r : o, n = n ? o : r, (n | 0) < 0 && (((n | 0) == -2147483648 || ((e | 0) > 0 ? (2147483647 - e | 0) < (n | 0) : (-2147483648 - e | 0) > (n | 0))) && kA(27795, 26892, 354, 26903), ((e | 0) > -1 ? (e | -2147483648 | 0) >= (n | 0) : (e ^ -2147483648 | 0) < (n | 0)) && kA(27795, 26892, 354, 26903)), e = o - r | 0, (r | 0) < 0 ? (n = 0 - r | 0, A[v >> 2] = e, A[d >> 2] = n, A[t >> 2] = 0, r = 0) : (e = o, n = 0), (e | 0) < 0 && (r = r - e | 0, A[t >> 2] = r, n = n - e | 0, A[d >> 2] = n, A[v >> 2] = 0, e = 0), a = r - n | 0, o = e - n | 0, (n | 0) < 0 ? (A[t >> 2] = a, A[v >> 2] = o, A[d >> 2] = 0, e = o, o = a, n = 0) : o = r, r = (e | 0) < (o | 0) ? e : o, r = (n | 0) < (r | 0) ? n : r, (r | 0) <= 0 ? (v = 0, v | 0) : (A[t >> 2] = o - r, A[v >> 2] = e - r, A[d >> 2] = n - r, v = 0, v | 0);
      }
      function F0(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        if (l = t + 8 | 0, o = A[l >> 2] | 0, a = (A[t >> 2] | 0) - o | 0, f = t + 4 | 0, o = (A[f >> 2] | 0) - o | 0, a >>> 0 > 715827881 | o >>> 0 > 715827881) {
          if (n = (a | 0) > 0, (n ? (2147483647 - a | 0) < (a | 0) : (-2147483648 - a | 0) > (a | 0)) || (e = a << 1, r = (o | 0) > 0, r ? (2147483647 - o | 0) < (o | 0) : (-2147483648 - o | 0) > (o | 0)))
            return f = 1, f | 0;
          if (d = o << 1, (r ? (2147483647 - d | 0) < (o | 0) : (-2147483648 - d | 0) > (o | 0)) || (n ? (2147483647 - e | 0) < (o | 0) : (-2147483648 - e | 0) > (o | 0)) || (n = o * 3 | 0, (o | 0) > -1 ? (n | -2147483648 | 0) >= (a | 0) : (n ^ -2147483648 | 0) < (a | 0)))
            return d = 1, d | 0;
        } else
          n = o * 3 | 0, e = a << 1;
        return r = Gn(+(e + o | 0) * 0.14285714285714285) | 0, A[t >> 2] = r, o = Gn(+(n - a | 0) * 0.14285714285714285) | 0, A[f >> 2] = o, A[l >> 2] = 0, n = (o | 0) < (r | 0), e = n ? r : o, n = n ? o : r, (n | 0) < 0 && (((n | 0) == -2147483648 || ((e | 0) > 0 ? (2147483647 - e | 0) < (n | 0) : (-2147483648 - e | 0) > (n | 0))) && kA(27795, 26892, 402, 26917), ((e | 0) > -1 ? (e | -2147483648 | 0) >= (n | 0) : (e ^ -2147483648 | 0) < (n | 0)) && kA(27795, 26892, 402, 26917)), e = o - r | 0, (r | 0) < 0 ? (n = 0 - r | 0, A[f >> 2] = e, A[l >> 2] = n, A[t >> 2] = 0, r = 0) : (e = o, n = 0), (e | 0) < 0 && (r = r - e | 0, A[t >> 2] = r, n = n - e | 0, A[l >> 2] = n, A[f >> 2] = 0, e = 0), a = r - n | 0, o = e - n | 0, (n | 0) < 0 ? (A[t >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, e = o, o = a, n = 0) : o = r, r = (e | 0) < (o | 0) ? e : o, r = (n | 0) < (r | 0) ? n : r, (r | 0) <= 0 ? (d = 0, d | 0) : (A[t >> 2] = o - r, A[f >> 2] = e - r, A[l >> 2] = n - r, d = 0, d | 0);
      }
      function Ms(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        l = t + 8 | 0, n = A[l >> 2] | 0, e = (A[t >> 2] | 0) - n | 0, f = t + 4 | 0, n = (A[f >> 2] | 0) - n | 0, r = Gn(+((e * 3 | 0) - n | 0) * 0.14285714285714285) | 0, A[t >> 2] = r, e = Gn(+((n << 1) + e | 0) * 0.14285714285714285) | 0, A[f >> 2] = e, A[l >> 2] = 0, n = e - r | 0, (r | 0) < 0 ? (a = 0 - r | 0, A[f >> 2] = n, A[l >> 2] = a, A[t >> 2] = 0, e = n, r = 0, n = a) : n = 0, (e | 0) < 0 && (r = r - e | 0, A[t >> 2] = r, n = n - e | 0, A[l >> 2] = n, A[f >> 2] = 0, e = 0), a = r - n | 0, o = e - n | 0, (n | 0) < 0 ? (A[t >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, e = o, o = a, n = 0) : o = r, r = (e | 0) < (o | 0) ? e : o, r = (n | 0) < (r | 0) ? n : r, !((r | 0) <= 0) && (A[t >> 2] = o - r, A[f >> 2] = e - r, A[l >> 2] = n - r);
      }
      function N0(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        l = t + 8 | 0, n = A[l >> 2] | 0, e = (A[t >> 2] | 0) - n | 0, f = t + 4 | 0, n = (A[f >> 2] | 0) - n | 0, r = Gn(+((e << 1) + n | 0) * 0.14285714285714285) | 0, A[t >> 2] = r, e = Gn(+((n * 3 | 0) - e | 0) * 0.14285714285714285) | 0, A[f >> 2] = e, A[l >> 2] = 0, n = e - r | 0, (r | 0) < 0 ? (a = 0 - r | 0, A[f >> 2] = n, A[l >> 2] = a, A[t >> 2] = 0, e = n, r = 0, n = a) : n = 0, (e | 0) < 0 && (r = r - e | 0, A[t >> 2] = r, n = n - e | 0, A[l >> 2] = n, A[f >> 2] = 0, e = 0), a = r - n | 0, o = e - n | 0, (n | 0) < 0 ? (A[t >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, e = o, o = a, n = 0) : o = r, r = (e | 0) < (o | 0) ? e : o, r = (n | 0) < (r | 0) ? n : r, !((r | 0) <= 0) && (A[t >> 2] = o - r, A[f >> 2] = e - r, A[l >> 2] = n - r);
      }
      function Wr(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        e = A[t >> 2] | 0, l = t + 4 | 0, n = A[l >> 2] | 0, f = t + 8 | 0, r = A[f >> 2] | 0, o = n + (e * 3 | 0) | 0, A[t >> 2] = o, n = r + (n * 3 | 0) | 0, A[l >> 2] = n, e = (r * 3 | 0) + e | 0, A[f >> 2] = e, r = n - o | 0, (o | 0) < 0 ? (e = e - o | 0, A[l >> 2] = r, A[f >> 2] = e, A[t >> 2] = 0, n = r, r = 0) : r = o, (n | 0) < 0 && (r = r - n | 0, A[t >> 2] = r, e = e - n | 0, A[f >> 2] = e, A[l >> 2] = 0, n = 0), a = r - e | 0, o = n - e | 0, (e | 0) < 0 ? (A[t >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, e = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (e | 0) < (n | 0) ? e : n, !((n | 0) <= 0) && (A[t >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = e - n);
      }
      function bn(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = A[t >> 2] | 0, l = t + 4 | 0, e = A[l >> 2] | 0, f = t + 8 | 0, n = A[f >> 2] | 0, r = (e * 3 | 0) + o | 0, o = n + (o * 3 | 0) | 0, A[t >> 2] = o, A[l >> 2] = r, e = (n * 3 | 0) + e | 0, A[f >> 2] = e, n = r - o | 0, (o | 0) < 0 ? (e = e - o | 0, A[l >> 2] = n, A[f >> 2] = e, A[t >> 2] = 0, o = 0) : n = r, (n | 0) < 0 && (o = o - n | 0, A[t >> 2] = o, e = e - n | 0, A[f >> 2] = e, A[l >> 2] = 0, n = 0), a = o - e | 0, r = n - e | 0, (e | 0) < 0 ? (A[t >> 2] = a, A[l >> 2] = r, A[f >> 2] = 0, o = a, e = 0) : r = n, n = (r | 0) < (o | 0) ? r : o, n = (e | 0) < (n | 0) ? e : n, !((n | 0) <= 0) && (A[t >> 2] = o - n, A[l >> 2] = r - n, A[f >> 2] = e - n);
      }
      function Vr(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        (e + -1 | 0) >>> 0 >= 6 || (o = (A[15440 + (e * 12 | 0) >> 2] | 0) + (A[t >> 2] | 0) | 0, A[t >> 2] = o, f = t + 4 | 0, r = (A[15440 + (e * 12 | 0) + 4 >> 2] | 0) + (A[f >> 2] | 0) | 0, A[f >> 2] = r, l = t + 8 | 0, e = (A[15440 + (e * 12 | 0) + 8 >> 2] | 0) + (A[l >> 2] | 0) | 0, A[l >> 2] = e, n = r - o | 0, (o | 0) < 0 ? (e = e - o | 0, A[f >> 2] = n, A[l >> 2] = e, A[t >> 2] = 0, r = 0) : (n = r, r = o), (n | 0) < 0 && (r = r - n | 0, A[t >> 2] = r, e = e - n | 0, A[l >> 2] = e, A[f >> 2] = 0, n = 0), a = r - e | 0, o = n - e | 0, (e | 0) < 0 ? (A[t >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, r = a, e = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (e | 0) < (n | 0) ? e : n, !((n | 0) <= 0) && (A[t >> 2] = r - n, A[f >> 2] = o - n, A[l >> 2] = e - n));
      }
      function zo(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = A[t >> 2] | 0, l = t + 4 | 0, e = A[l >> 2] | 0, f = t + 8 | 0, n = A[f >> 2] | 0, r = e + o | 0, o = n + o | 0, A[t >> 2] = o, A[l >> 2] = r, e = n + e | 0, A[f >> 2] = e, n = r - o | 0, (o | 0) < 0 ? (e = e - o | 0, A[l >> 2] = n, A[f >> 2] = e, A[t >> 2] = 0, r = 0) : (n = r, r = o), (n | 0) < 0 && (r = r - n | 0, A[t >> 2] = r, e = e - n | 0, A[f >> 2] = e, A[l >> 2] = 0, n = 0), a = r - e | 0, o = n - e | 0, (e | 0) < 0 ? (A[t >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, e = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (e | 0) < (n | 0) ? e : n, !((n | 0) <= 0) && (A[t >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = e - n);
      }
      function Dt(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        e = A[t >> 2] | 0, l = t + 4 | 0, r = A[l >> 2] | 0, f = t + 8 | 0, n = A[f >> 2] | 0, o = r + e | 0, A[t >> 2] = o, r = n + r | 0, A[l >> 2] = r, e = n + e | 0, A[f >> 2] = e, n = r - o | 0, (o | 0) < 0 ? (e = e - o | 0, A[l >> 2] = n, A[f >> 2] = e, A[t >> 2] = 0, r = 0) : (n = r, r = o), (n | 0) < 0 && (r = r - n | 0, A[t >> 2] = r, e = e - n | 0, A[f >> 2] = e, A[l >> 2] = 0, n = 0), a = r - e | 0, o = n - e | 0, (e | 0) < 0 ? (A[t >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, e = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (e | 0) < (n | 0) ? e : n, !((n | 0) <= 0) && (A[t >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = e - n);
      }
      function xn(t) {
        switch (t = t | 0, t | 0) {
          case 1: {
            t = 5;
            break;
          }
          case 5: {
            t = 4;
            break;
          }
          case 4: {
            t = 6;
            break;
          }
          case 6: {
            t = 2;
            break;
          }
          case 2: {
            t = 3;
            break;
          }
          case 3: {
            t = 1;
            break;
          }
        }
        return t | 0;
      }
      function Di(t) {
        switch (t = t | 0, t | 0) {
          case 1: {
            t = 3;
            break;
          }
          case 3: {
            t = 2;
            break;
          }
          case 2: {
            t = 6;
            break;
          }
          case 6: {
            t = 4;
            break;
          }
          case 4: {
            t = 5;
            break;
          }
          case 5: {
            t = 1;
            break;
          }
        }
        return t | 0;
      }
      function Ii(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        e = A[t >> 2] | 0, l = t + 4 | 0, n = A[l >> 2] | 0, f = t + 8 | 0, r = A[f >> 2] | 0, o = n + (e << 1) | 0, A[t >> 2] = o, n = r + (n << 1) | 0, A[l >> 2] = n, e = (r << 1) + e | 0, A[f >> 2] = e, r = n - o | 0, (o | 0) < 0 ? (e = e - o | 0, A[l >> 2] = r, A[f >> 2] = e, A[t >> 2] = 0, n = r, r = 0) : r = o, (n | 0) < 0 && (r = r - n | 0, A[t >> 2] = r, e = e - n | 0, A[f >> 2] = e, A[l >> 2] = 0, n = 0), a = r - e | 0, o = n - e | 0, (e | 0) < 0 ? (A[t >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, e = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (e | 0) < (n | 0) ? e : n, !((n | 0) <= 0) && (A[t >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = e - n);
      }
      function H0(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = A[t >> 2] | 0, l = t + 4 | 0, e = A[l >> 2] | 0, f = t + 8 | 0, n = A[f >> 2] | 0, r = (e << 1) + o | 0, o = n + (o << 1) | 0, A[t >> 2] = o, A[l >> 2] = r, e = (n << 1) + e | 0, A[f >> 2] = e, n = r - o | 0, (o | 0) < 0 ? (e = e - o | 0, A[l >> 2] = n, A[f >> 2] = e, A[t >> 2] = 0, o = 0) : n = r, (n | 0) < 0 && (o = o - n | 0, A[t >> 2] = o, e = e - n | 0, A[f >> 2] = e, A[l >> 2] = 0, n = 0), a = o - e | 0, r = n - e | 0, (e | 0) < 0 ? (A[t >> 2] = a, A[l >> 2] = r, A[f >> 2] = 0, o = a, e = 0) : r = n, n = (r | 0) < (o | 0) ? r : o, n = (e | 0) < (n | 0) ? e : n, !((n | 0) <= 0) && (A[t >> 2] = o - n, A[l >> 2] = r - n, A[f >> 2] = e - n);
      }
      function jr(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        return l = (A[t >> 2] | 0) - (A[e >> 2] | 0) | 0, f = (l | 0) < 0, r = (A[t + 4 >> 2] | 0) - (A[e + 4 >> 2] | 0) - (f ? l : 0) | 0, a = (r | 0) < 0, o = (f ? 0 - l | 0 : 0) + (A[t + 8 >> 2] | 0) - (A[e + 8 >> 2] | 0) + (a ? 0 - r | 0 : 0) | 0, t = (o | 0) < 0, e = t ? 0 : o, n = (a ? 0 : r) - (t ? o : 0) | 0, o = (f ? 0 : l) - (a ? r : 0) - (t ? o : 0) | 0, t = (n | 0) < (o | 0) ? n : o, t = (e | 0) < (t | 0) ? e : t, r = (t | 0) > 0, e = e - (r ? t : 0) | 0, n = n - (r ? t : 0) | 0, t = o - (r ? t : 0) | 0, t = (t | 0) > -1 ? t : 0 - t | 0, n = (n | 0) > -1 ? n : 0 - n | 0, e = (e | 0) > -1 ? e : 0 - e | 0, e = (n | 0) > (e | 0) ? n : e, ((t | 0) > (e | 0) ? t : e) | 0;
      }
      function U0(t, e) {
        t = t | 0, e = e | 0;
        var n = 0;
        n = A[t + 8 >> 2] | 0, A[e >> 2] = (A[t >> 2] | 0) - n, A[e + 4 >> 2] = (A[t + 4 >> 2] | 0) - n;
      }
      function Ds(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        return r = A[t >> 2] | 0, A[e >> 2] = r, o = A[t + 4 >> 2] | 0, l = e + 4 | 0, A[l >> 2] = o, f = e + 8 | 0, A[f >> 2] = 0, n = (o | 0) < (r | 0), t = n ? r : o, n = n ? o : r, (n | 0) < 0 && ((n | 0) == -2147483648 || ((t | 0) > 0 ? (2147483647 - t | 0) < (n | 0) : (-2147483648 - t | 0) > (n | 0)) || ((t | 0) > -1 ? (t | -2147483648 | 0) >= (n | 0) : (t ^ -2147483648 | 0) < (n | 0))) ? (e = 1, e | 0) : (t = o - r | 0, (r | 0) < 0 ? (n = 0 - r | 0, A[l >> 2] = t, A[f >> 2] = n, A[e >> 2] = 0, r = 0) : (t = o, n = 0), (t | 0) < 0 && (r = r - t | 0, A[e >> 2] = r, n = n - t | 0, A[f >> 2] = n, A[l >> 2] = 0, t = 0), a = r - n | 0, o = t - n | 0, (n | 0) < 0 ? (A[e >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, t = o, o = a, n = 0) : o = r, r = (t | 0) < (o | 0) ? t : o, r = (n | 0) < (r | 0) ? n : r, (r | 0) <= 0 ? (e = 0, e | 0) : (A[e >> 2] = o - r, A[l >> 2] = t - r, A[f >> 2] = n - r, e = 0, e | 0));
      }
      function G0(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0;
        e = t + 8 | 0, o = A[e >> 2] | 0, n = o - (A[t >> 2] | 0) | 0, A[t >> 2] = n, r = t + 4 | 0, t = (A[r >> 2] | 0) - o | 0, A[r >> 2] = t, A[e >> 2] = 0 - (t + n);
      }
      function So(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        n = A[t >> 2] | 0, e = 0 - n | 0, A[t >> 2] = e, l = t + 8 | 0, A[l >> 2] = 0, f = t + 4 | 0, r = A[f >> 2] | 0, o = r + n | 0, (n | 0) > 0 ? (A[f >> 2] = o, A[l >> 2] = n, A[t >> 2] = 0, e = 0, r = o) : n = 0, (r | 0) < 0 ? (a = e - r | 0, A[t >> 2] = a, n = n - r | 0, A[l >> 2] = n, A[f >> 2] = 0, o = a - n | 0, e = 0 - n | 0, (n | 0) < 0 ? (A[t >> 2] = o, A[f >> 2] = e, A[l >> 2] = 0, r = e, n = 0) : (r = 0, o = a)) : o = e, e = (r | 0) < (o | 0) ? r : o, e = (n | 0) < (e | 0) ? n : e, !((e | 0) <= 0) && (A[t >> 2] = o - e, A[f >> 2] = r - e, A[l >> 2] = n - e);
      }
      function Is(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0;
        if (P = b, b = b + 64 | 0, m = P, f = P + 56 | 0, !(!0 & (e & 2013265920 | 0) == 134217728 & (!0 & (r & 2013265920 | 0) == 134217728)))
          return o = 5, b = P, o | 0;
        if ((t | 0) == (n | 0) & (e | 0) == (r | 0))
          return A[o >> 2] = 0, o = 0, b = P, o | 0;
        if (l = X(t | 0, e | 0, 52) | 0, E() | 0, l = l & 15, v = X(n | 0, r | 0, 52) | 0, E() | 0, (l | 0) != (v & 15 | 0))
          return o = 12, b = P, o | 0;
        if (a = l + -1 | 0, l >>> 0 > 1) {
          K0(t, e, a, m) | 0, K0(n, r, a, f) | 0, v = m, d = A[v >> 2] | 0, v = A[v + 4 >> 2] | 0;
          A: do
            if ((d | 0) == (A[f >> 2] | 0) && (v | 0) == (A[f + 4 >> 2] | 0)) {
              l = (l ^ 15) * 3 | 0, a = X(t | 0, e | 0, l | 0) | 0, E() | 0, a = a & 7, l = X(n | 0, r | 0, l | 0) | 0, E() | 0, l = l & 7;
              do
                if ((a | 0) == 0 | (l | 0) == 0)
                  A[o >> 2] = 1, a = 0;
                else if ((a | 0) == 7)
                  a = 5;
                else {
                  if ((a | 0) == 1 | (l | 0) == 1 && pe(d, v) | 0) {
                    a = 5;
                    break;
                  }
                  if ((A[15536 + (a << 2) >> 2] | 0) != (l | 0) && (A[15568 + (a << 2) >> 2] | 0) != (l | 0))
                    break A;
                  A[o >> 2] = 1, a = 0;
                }
              while (!1);
              return o = a, b = P, o | 0;
            }
          while (!1);
        }
        a = m, l = a + 56 | 0;
        do
          A[a >> 2] = 0, a = a + 4 | 0;
        while ((a | 0) < (l | 0));
        return sr(t, e, 1, m) | 0, e = m, !((A[e >> 2] | 0) == (n | 0) && (A[e + 4 >> 2] | 0) == (r | 0)) && (e = m + 8 | 0, !((A[e >> 2] | 0) == (n | 0) && (A[e + 4 >> 2] | 0) == (r | 0))) && (e = m + 16 | 0, !((A[e >> 2] | 0) == (n | 0) && (A[e + 4 >> 2] | 0) == (r | 0))) && (e = m + 24 | 0, !((A[e >> 2] | 0) == (n | 0) && (A[e + 4 >> 2] | 0) == (r | 0))) && (e = m + 32 | 0, !((A[e >> 2] | 0) == (n | 0) && (A[e + 4 >> 2] | 0) == (r | 0))) && (e = m + 40 | 0, !((A[e >> 2] | 0) == (n | 0) && (A[e + 4 >> 2] | 0) == (r | 0))) ? (a = m + 48 | 0, a = ((A[a >> 2] | 0) == (n | 0) ? (A[a + 4 >> 2] | 0) == (r | 0) : 0) & 1) : a = 1, A[o >> 2] = a, o = 0, b = P, o | 0;
      }
      function zs(t, e, n, r, o) {
        return t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, n = gn(t, e, n, r) | 0, (n | 0) == 7 ? (o = 11, o | 0) : (r = eA(n | 0, 0, 56) | 0, e = e & -2130706433 | (E() | 0) | 268435456, A[o >> 2] = t | r, A[o + 4 >> 2] = e, o = 0, o | 0);
      }
      function W0(t, e, n) {
        return t = t | 0, e = e | 0, n = n | 0, !0 & (e & 2013265920 | 0) == 268435456 ? (A[n >> 2] = t, A[n + 4 >> 2] = e & -2130706433 | 134217728, n = 0, n | 0) : (n = 6, n | 0);
      }
      function Ss(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        return o = b, b = b + 16 | 0, r = o, A[r >> 2] = 0, !0 & (e & 2013265920 | 0) == 268435456 ? (a = X(t | 0, e | 0, 56) | 0, E() | 0, r = Te(t, e & -2130706433 | 134217728, a & 7, r, n) | 0, b = o, r | 0) : (r = 6, b = o, r | 0);
      }
      function V0(t, e) {
        t = t | 0, e = e | 0;
        var n = 0;
        switch (n = X(t | 0, e | 0, 56) | 0, E() | 0, n & 7) {
          case 0:
          case 7:
            return n = 0, n | 0;
        }
        return n = e & -2130706433 | 134217728, !(!0 & (e & 2013265920 | 0) == 268435456) || !0 & (e & 117440512 | 0) == 16777216 & (pe(t, n) | 0) != 0 ? (n = 0, n | 0) : (n = oi(t, n) | 0, n | 0);
      }
      function Oo(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        return o = b, b = b + 16 | 0, r = o, !0 & (e & 2013265920 | 0) == 268435456 ? (a = e & -2130706433 | 134217728, l = n, A[l >> 2] = t, A[l + 4 >> 2] = a, A[r >> 2] = 0, e = X(t | 0, e | 0, 56) | 0, E() | 0, r = Te(t, a, e & 7, r, n + 8 | 0) | 0, b = o, r | 0) : (r = 6, b = o, r | 0);
      }
      function Yr(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0;
        return o = (pe(t, e) | 0) == 0, e = e & -2130706433, r = n, A[r >> 2] = o ? t : 0, A[r + 4 >> 2] = o ? e | 285212672 : 0, r = n + 8 | 0, A[r >> 2] = t, A[r + 4 >> 2] = e | 301989888, r = n + 16 | 0, A[r >> 2] = t, A[r + 4 >> 2] = e | 318767104, r = n + 24 | 0, A[r >> 2] = t, A[r + 4 >> 2] = e | 335544320, r = n + 32 | 0, A[r >> 2] = t, A[r + 4 >> 2] = e | 352321536, n = n + 40 | 0, A[n >> 2] = t, A[n + 4 >> 2] = e | 369098752, 0;
      }
      function vi(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        return l = b, b = b + 16 | 0, o = l, a = e & -2130706433 | 134217728, !0 & (e & 2013265920 | 0) == 268435456 ? (r = X(t | 0, e | 0, 56) | 0, E() | 0, r = ia(t, a, r & 7) | 0, (r | 0) == -1 ? (A[n >> 2] = 0, a = 6, b = l, a | 0) : (Ki(t, a, o) | 0 && kA(27795, 26932, 282, 26947), e = X(t | 0, e | 0, 52) | 0, E() | 0, e = e & 15, pe(t, a) | 0 ? j0(o, e, r, 2, n) : Y0(o, e, r, 2, n), a = 0, b = l, a | 0)) : (a = 6, b = l, a | 0);
      }
      function Os(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0;
        r = b, b = b + 16 | 0, o = r, cr(t, e, n, o), Ls(o, n + 4 | 0), b = r;
      }
      function cr(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0;
        if (f = b, b = b + 16 | 0, d = f, Nt(t, n, d), a = +In(+(1 - +y[d >> 3] * 0.5)), a < 1e-16) {
          A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[r + 8 >> 2] = 0, A[r + 12 >> 2] = 0, b = f;
          return;
        }
        if (d = A[n >> 2] | 0, o = +y[15920 + (d * 24 | 0) >> 3], o = +_r(o - +_r(+No(15600 + (d << 4) | 0, t))), It(e) | 0 ? l = +_r(o + -0.3334731722518321) : l = o, o = +vt(+a) * 2.618033988749896, (e | 0) > 0) {
          t = 0;
          do
            o = o * 2.6457513110645907, t = t + 1 | 0;
          while ((t | 0) != (e | 0));
        }
        a = +oe(+l) * o, y[r >> 3] = a, l = +ZA(+l) * o, y[r + 8 >> 3] = l, b = f;
      }
      function Nt(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (a = b, b = b + 32 | 0, o = a, ta(t, o), A[e >> 2] = 0, y[n >> 3] = 5, r = +ze(16400, o), r < +y[n >> 3] && (A[e >> 2] = 0, y[n >> 3] = r), r = +ze(16424, o), r < +y[n >> 3] && (A[e >> 2] = 1, y[n >> 3] = r), r = +ze(16448, o), r < +y[n >> 3] && (A[e >> 2] = 2, y[n >> 3] = r), r = +ze(16472, o), r < +y[n >> 3] && (A[e >> 2] = 3, y[n >> 3] = r), r = +ze(16496, o), r < +y[n >> 3] && (A[e >> 2] = 4, y[n >> 3] = r), r = +ze(16520, o), r < +y[n >> 3] && (A[e >> 2] = 5, y[n >> 3] = r), r = +ze(16544, o), r < +y[n >> 3] && (A[e >> 2] = 6, y[n >> 3] = r), r = +ze(16568, o), r < +y[n >> 3] && (A[e >> 2] = 7, y[n >> 3] = r), r = +ze(16592, o), r < +y[n >> 3] && (A[e >> 2] = 8, y[n >> 3] = r), r = +ze(16616, o), r < +y[n >> 3] && (A[e >> 2] = 9, y[n >> 3] = r), r = +ze(16640, o), r < +y[n >> 3] && (A[e >> 2] = 10, y[n >> 3] = r), r = +ze(16664, o), r < +y[n >> 3] && (A[e >> 2] = 11, y[n >> 3] = r), r = +ze(16688, o), r < +y[n >> 3] && (A[e >> 2] = 12, y[n >> 3] = r), r = +ze(16712, o), r < +y[n >> 3] && (A[e >> 2] = 13, y[n >> 3] = r), r = +ze(16736, o), r < +y[n >> 3] && (A[e >> 2] = 14, y[n >> 3] = r), r = +ze(16760, o), r < +y[n >> 3] && (A[e >> 2] = 15, y[n >> 3] = r), r = +ze(16784, o), r < +y[n >> 3] && (A[e >> 2] = 16, y[n >> 3] = r), r = +ze(16808, o), r < +y[n >> 3] && (A[e >> 2] = 17, y[n >> 3] = r), r = +ze(16832, o), r < +y[n >> 3] && (A[e >> 2] = 18, y[n >> 3] = r), r = +ze(16856, o), !(r < +y[n >> 3])) {
          b = a;
          return;
        }
        A[e >> 2] = 19, y[n >> 3] = r, b = a;
      }
      function Rn(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0;
        if (a = +ea(t), a < 1e-16) {
          e = 15600 + (e << 4) | 0, A[o >> 2] = A[e >> 2], A[o + 4 >> 2] = A[e + 4 >> 2], A[o + 8 >> 2] = A[e + 8 >> 2], A[o + 12 >> 2] = A[e + 12 >> 2];
          return;
        }
        if (l = +he(+ +y[t + 8 >> 3], + +y[t >> 3]), (n | 0) > 0) {
          t = 0;
          do
            a = a * 0.37796447300922725, t = t + 1 | 0;
          while ((t | 0) != (n | 0));
        }
        f = a * 0.3333333333333333, r ? (n = (It(n) | 0) == 0, a = +Oe(+((n ? f : f * 0.37796447300922725) * 0.381966011250105))) : (a = +Oe(+(a * 0.381966011250105)), It(n) | 0 && (l = +_r(l + 0.3334731722518321))), js(15600 + (e << 4) | 0, +_r(+y[15920 + (e * 24 | 0) >> 3] - l), a, o);
      }
      function Qo(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0;
        r = b, b = b + 16 | 0, o = r, XA(t + 4 | 0, o), Rn(o, A[t >> 2] | 0, e, 0, n), b = r;
      }
      function j0(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0, FA = 0, te = 0, DA = 0, mA = 0, tA = 0, jA = 0, be = 0, HA = 0;
        if (jA = b, b = b + 272 | 0, a = jA + 256 | 0, F = jA + 240 | 0, DA = jA, mA = jA + 224 | 0, tA = jA + 208 | 0, Z = jA + 176 | 0, O = jA + 160 | 0, iA = jA + 192 | 0, vA = jA + 144 | 0, dA = jA + 128 | 0, RA = jA + 112 | 0, FA = jA + 96 | 0, te = jA + 80 | 0, A[a >> 2] = e, A[F >> 2] = A[t >> 2], A[F + 4 >> 2] = A[t + 4 >> 2], A[F + 8 >> 2] = A[t + 8 >> 2], A[F + 12 >> 2] = A[t + 12 >> 2], qr(F, a, DA), A[o >> 2] = 0, F = r + n + ((r | 0) == 5 & 1) | 0, (F | 0) <= (n | 0)) {
          b = jA;
          return;
        }
        d = A[a >> 2] | 0, v = mA + 4 | 0, m = Z + 4 | 0, P = n + 5 | 0, C = 16880 + (d << 2) | 0, T = 16960 + (d << 2) | 0, M = dA + 8 | 0, S = RA + 8 | 0, R = FA + 8 | 0, W = tA + 4 | 0, f = n;
        A: for (; ; ) {
          l = DA + (((f | 0) % 5 | 0) << 4) | 0, A[tA >> 2] = A[l >> 2], A[tA + 4 >> 2] = A[l + 4 >> 2], A[tA + 8 >> 2] = A[l + 8 >> 2], A[tA + 12 >> 2] = A[l + 12 >> 2];
          do
            ;
          while ((Yi(tA, d, 0, 1) | 0) == 2);
          if ((f | 0) > (n | 0) & (It(e) | 0) != 0) {
            if (A[Z >> 2] = A[tA >> 2], A[Z + 4 >> 2] = A[tA + 4 >> 2], A[Z + 8 >> 2] = A[tA + 8 >> 2], A[Z + 12 >> 2] = A[tA + 12 >> 2], XA(v, O), r = A[Z >> 2] | 0, a = A[17040 + (r * 80 | 0) + (A[mA >> 2] << 2) >> 2] | 0, A[Z >> 2] = A[18640 + (r * 80 | 0) + (a * 20 | 0) >> 2], l = A[18640 + (r * 80 | 0) + (a * 20 | 0) + 16 >> 2] | 0, (l | 0) > 0) {
              t = 0;
              do
                zo(m), t = t + 1 | 0;
              while ((t | 0) < (l | 0));
            }
            switch (l = 18640 + (r * 80 | 0) + (a * 20 | 0) + 4 | 0, A[iA >> 2] = A[l >> 2], A[iA + 4 >> 2] = A[l + 4 >> 2], A[iA + 8 >> 2] = A[l + 8 >> 2], Qn(iA, (A[C >> 2] | 0) * 3 | 0), mt(m, iA, m), rt(m), XA(m, vA), be = +(A[T >> 2] | 0), y[dA >> 3] = be * 3, y[M >> 3] = 0, HA = be * -1.5, y[RA >> 3] = HA, y[S >> 3] = be * 2.598076211353316, y[FA >> 3] = HA, y[R >> 3] = be * -2.598076211353316, A[17040 + ((A[Z >> 2] | 0) * 80 | 0) + (A[tA >> 2] << 2) >> 2] | 0) {
              case 1: {
                t = RA, r = dA;
                break;
              }
              case 3: {
                t = FA, r = RA;
                break;
              }
              case 2: {
                t = dA, r = FA;
                break;
              }
              default: {
                t = 12;
                break A;
              }
            }
            io(O, vA, r, t, te), Rn(te, A[Z >> 2] | 0, d, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1;
          }
          if ((f | 0) < (P | 0) && (XA(W, Z), Rn(Z, A[tA >> 2] | 0, d, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1), A[mA >> 2] = A[tA >> 2], A[mA + 4 >> 2] = A[tA + 4 >> 2], A[mA + 8 >> 2] = A[tA + 8 >> 2], A[mA + 12 >> 2] = A[tA + 12 >> 2], f = f + 1 | 0, (f | 0) >= (F | 0)) {
            t = 3;
            break;
          }
        }
        if ((t | 0) == 3) {
          b = jA;
          return;
        } else (t | 0) == 12 && kA(26970, 27017, 572, 27027);
      }
      function qr(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        d = b, b = b + 128 | 0, r = d + 64 | 0, o = d, a = r, l = 20240, f = a + 60 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        a = o, l = 20304, f = a + 60 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        f = (It(A[e >> 2] | 0) | 0) == 0, r = f ? r : o, o = t + 4 | 0, Ii(o), H0(o), It(A[e >> 2] | 0) | 0 && (bn(o), A[e >> 2] = (A[e >> 2] | 0) + 1), A[n >> 2] = A[t >> 2], e = n + 4 | 0, mt(o, r, e), rt(e), A[n + 16 >> 2] = A[t >> 2], e = n + 20 | 0, mt(o, r + 12 | 0, e), rt(e), A[n + 32 >> 2] = A[t >> 2], e = n + 36 | 0, mt(o, r + 24 | 0, e), rt(e), A[n + 48 >> 2] = A[t >> 2], e = n + 52 | 0, mt(o, r + 36 | 0, e), rt(e), A[n + 64 >> 2] = A[t >> 2], n = n + 68 | 0, mt(o, r + 48 | 0, n), rt(n), b = d;
      }
      function Yi(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0;
        if (M = b, b = b + 32 | 0, C = M + 12 | 0, f = M, T = t + 4 | 0, P = A[16960 + (e << 2) >> 2] | 0, m = (r | 0) != 0, P = m ? P * 3 | 0 : P, o = A[T >> 2] | 0, v = t + 8 | 0, l = A[v >> 2] | 0, m) {
          if (a = t + 12 | 0, r = A[a >> 2] | 0, o = l + o + r | 0, (o | 0) == (P | 0))
            return T = 1, b = M, T | 0;
          d = a;
        } else
          d = t + 12 | 0, r = A[d >> 2] | 0, o = l + o + r | 0;
        if ((o | 0) <= (P | 0))
          return T = 0, b = M, T | 0;
        do
          if ((r | 0) > 0) {
            if (r = A[t >> 2] | 0, (l | 0) > 0) {
              a = 18640 + (r * 80 | 0) + 60 | 0, r = t;
              break;
            }
            r = 18640 + (r * 80 | 0) + 40 | 0, n ? (Z0(C, P, 0, 0), Mt(T, C, f), Dt(f), mt(f, C, T), a = r, r = t) : (a = r, r = t);
          } else
            a = 18640 + ((A[t >> 2] | 0) * 80 | 0) + 20 | 0, r = t;
        while (!1);
        if (A[r >> 2] = A[a >> 2], o = a + 16 | 0, (A[o >> 2] | 0) > 0) {
          r = 0;
          do
            zo(T), r = r + 1 | 0;
          while ((r | 0) < (A[o >> 2] | 0));
        }
        return t = a + 4 | 0, A[C >> 2] = A[t >> 2], A[C + 4 >> 2] = A[t + 4 >> 2], A[C + 8 >> 2] = A[t + 8 >> 2], e = A[16880 + (e << 2) >> 2] | 0, Qn(C, m ? e * 3 | 0 : e), mt(T, C, T), rt(T), m ? r = ((A[v >> 2] | 0) + (A[T >> 2] | 0) + (A[d >> 2] | 0) | 0) == (P | 0) ? 1 : 2 : r = 2, T = r, b = M, T | 0;
      }
      function Qs(t, e) {
        t = t | 0, e = e | 0;
        var n = 0;
        do
          n = Yi(t, e, 0, 1) | 0;
        while ((n | 0) == 2);
        return n | 0;
      }
      function Y0(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0, FA = 0, te = 0, DA = 0;
        if (FA = b, b = b + 240 | 0, a = FA + 224 | 0, iA = FA + 208 | 0, vA = FA, dA = FA + 192 | 0, RA = FA + 176 | 0, R = FA + 160 | 0, W = FA + 144 | 0, F = FA + 128 | 0, Z = FA + 112 | 0, O = FA + 96 | 0, A[a >> 2] = e, A[iA >> 2] = A[t >> 2], A[iA + 4 >> 2] = A[t + 4 >> 2], A[iA + 8 >> 2] = A[t + 8 >> 2], A[iA + 12 >> 2] = A[t + 12 >> 2], q0(iA, a, vA), A[o >> 2] = 0, S = r + n + ((r | 0) == 6 & 1) | 0, (S | 0) <= (n | 0)) {
          b = FA;
          return;
        }
        d = A[a >> 2] | 0, v = n + 6 | 0, m = 16960 + (d << 2) | 0, P = W + 8 | 0, C = F + 8 | 0, T = Z + 8 | 0, M = dA + 4 | 0, l = 0, f = n, r = -1;
        A: for (; ; ) {
          if (a = (f | 0) % 6 | 0, t = vA + (a << 4) | 0, A[dA >> 2] = A[t >> 2], A[dA + 4 >> 2] = A[t + 4 >> 2], A[dA + 8 >> 2] = A[t + 8 >> 2], A[dA + 12 >> 2] = A[t + 12 >> 2], t = l, l = Yi(dA, d, 0, 1) | 0, (f | 0) > (n | 0) & (It(e) | 0) != 0 && (t | 0) != 1 && (A[dA >> 2] | 0) != (r | 0)) {
            switch (XA(vA + (((a + 5 | 0) % 6 | 0) << 4) + 4 | 0, RA), XA(vA + (a << 4) + 4 | 0, R), te = +(A[m >> 2] | 0), y[W >> 3] = te * 3, y[P >> 3] = 0, DA = te * -1.5, y[F >> 3] = DA, y[C >> 3] = te * 2.598076211353316, y[Z >> 3] = DA, y[T >> 3] = te * -2.598076211353316, a = A[iA >> 2] | 0, A[17040 + (a * 80 | 0) + (((r | 0) == (a | 0) ? A[dA >> 2] | 0 : r) << 2) >> 2] | 0) {
              case 1: {
                t = F, r = W;
                break;
              }
              case 3: {
                t = Z, r = F;
                break;
              }
              case 2: {
                t = W, r = Z;
                break;
              }
              default: {
                t = 8;
                break A;
              }
            }
            io(RA, R, r, t, O), !(Ne(RA, O) | 0) && !(Ne(R, O) | 0) && (Rn(O, A[iA >> 2] | 0, d, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1);
          }
          if ((f | 0) < (v | 0) && (XA(M, RA), Rn(RA, A[dA >> 2] | 0, d, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1), f = f + 1 | 0, (f | 0) >= (S | 0)) {
            t = 3;
            break;
          } else
            r = A[dA >> 2] | 0;
        }
        if ((t | 0) == 3) {
          b = FA;
          return;
        } else (t | 0) == 8 && kA(27054, 27017, 737, 27099);
      }
      function q0(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        d = b, b = b + 160 | 0, r = d + 80 | 0, o = d, a = r, l = 20368, f = a + 72 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        a = o, l = 20448, f = a + 72 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        f = (It(A[e >> 2] | 0) | 0) == 0, r = f ? r : o, o = t + 4 | 0, Ii(o), H0(o), It(A[e >> 2] | 0) | 0 && (bn(o), A[e >> 2] = (A[e >> 2] | 0) + 1), A[n >> 2] = A[t >> 2], e = n + 4 | 0, mt(o, r, e), rt(e), A[n + 16 >> 2] = A[t >> 2], e = n + 20 | 0, mt(o, r + 12 | 0, e), rt(e), A[n + 32 >> 2] = A[t >> 2], e = n + 36 | 0, mt(o, r + 24 | 0, e), rt(e), A[n + 48 >> 2] = A[t >> 2], e = n + 52 | 0, mt(o, r + 36 | 0, e), rt(e), A[n + 64 >> 2] = A[t >> 2], e = n + 68 | 0, mt(o, r + 48 | 0, e), rt(e), A[n + 80 >> 2] = A[t >> 2], n = n + 84 | 0, mt(o, r + 60 | 0, n), rt(n), b = d;
      }
      function Rs(t, e) {
        return t = t | 0, e = e | 0, e = X(t | 0, e | 0, 52) | 0, E() | 0, e & 15 | 0;
      }
      function Ht(t, e) {
        return t = t | 0, e = e | 0, e = X(t | 0, e | 0, 45) | 0, E() | 0, e & 127 | 0;
      }
      function Zn(t, e, n, r) {
        return t = t | 0, e = e | 0, n = n | 0, r = r | 0, (n + -1 | 0) >>> 0 > 14 ? (r = 4, r | 0) : (n = X(t | 0, e | 0, (15 - n | 0) * 3 | 0) | 0, E() | 0, A[r >> 2] = n & 7, r = 0, r | 0);
      }
      function Zs(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0;
        if (t >>> 0 > 15)
          return r = 4, r | 0;
        if (e >>> 0 > 121)
          return r = 17, r | 0;
        l = eA(t | 0, 0, 52) | 0, o = E() | 0, f = eA(e | 0, 0, 45) | 0, o = o | (E() | 0) | 134225919;
        A: do
          if ((t | 0) >= 1) {
            for (f = 1, l = (q[20528 + e >> 0] | 0) != 0, a = -1; ; ) {
              if (e = A[n + (f + -1 << 2) >> 2] | 0, e >>> 0 > 6) {
                o = 18, e = 10;
                break;
              }
              if (!((e | 0) == 0 | l ^ 1))
                if ((e | 0) == 1) {
                  o = 19, e = 10;
                  break;
                } else
                  l = 0;
              if (v = (15 - f | 0) * 3 | 0, d = eA(7, 0, v | 0) | 0, o = o & ~(E() | 0), e = eA(e | 0, ((e | 0) < 0) << 31 >> 31 | 0, v | 0) | 0, a = e | a & ~d, o = E() | 0 | o, (f | 0) < (t | 0))
                f = f + 1 | 0;
              else
                break A;
            }
            if ((e | 0) == 10)
              return o | 0;
          } else
            a = -1;
        while (!1);
        return v = r, A[v >> 2] = a, A[v + 4 >> 2] = o, v = 0, v | 0;
      }
      function oi(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        return !(!0 & (e & -16777216 | 0) == 134217728) || (r = X(t | 0, e | 0, 52) | 0, E() | 0, r = r & 15, n = X(t | 0, e | 0, 45) | 0, E() | 0, n = n & 127, n >>> 0 > 121) ? (t = 0, t | 0) : (l = (r ^ 15) * 3 | 0, o = X(t | 0, e | 0, l | 0) | 0, l = eA(o | 0, E() | 0, l | 0) | 0, o = E() | 0, a = ut(-1227133514, -1171, l | 0, o | 0) | 0, !((l & 613566756 & a | 0) == 0 & (o & 4681 & (E() | 0) | 0) == 0) || (l = (r * 3 | 0) + 19 | 0, a = eA(~t | 0, ~e | 0, l | 0) | 0, l = X(a | 0, E() | 0, l | 0) | 0, !((r | 0) == 15 | (l | 0) == 0 & (E() | 0) == 0)) ? (l = 0, l | 0) : !(q[20528 + n >> 0] | 0) || (e = e & 8191, (t | 0) == 0 & (e | 0) == 0) ? (l = 1, l | 0) : (l = oa(t | 0, e | 0) | 0, E() | 0, ((63 - l | 0) % 3 | 0 | 0) != 0 | 0));
      }
      function Fs(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        return !0 & (e & -16777216 | 0) == 134217728 && (r = X(t | 0, e | 0, 52) | 0, E() | 0, r = r & 15, n = X(t | 0, e | 0, 45) | 0, E() | 0, n = n & 127, n >>> 0 <= 121) && (l = (r ^ 15) * 3 | 0, o = X(t | 0, e | 0, l | 0) | 0, l = eA(o | 0, E() | 0, l | 0) | 0, o = E() | 0, a = ut(-1227133514, -1171, l | 0, o | 0) | 0, (l & 613566756 & a | 0) == 0 & (o & 4681 & (E() | 0) | 0) == 0) && (l = (r * 3 | 0) + 19 | 0, a = eA(~t | 0, ~e | 0, l | 0) | 0, l = X(a | 0, E() | 0, l | 0) | 0, (r | 0) == 15 | (l | 0) == 0 & (E() | 0) == 0) && (!(q[20528 + n >> 0] | 0) || (n = e & 8191, (t | 0) == 0 & (n | 0) == 0) || (l = oa(t | 0, n | 0) | 0, E() | 0, (63 - l | 0) % 3 | 0 | 0)) || V0(t, e) | 0 ? (l = 1, l | 0) : (l = (Ga(t, e) | 0) != 0 & 1, l | 0);
      }
      function qi(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0;
        if (o = eA(e | 0, 0, 52) | 0, a = E() | 0, n = eA(n | 0, 0, 45) | 0, n = a | (E() | 0) | 134225919, (e | 0) < 1) {
          a = -1, r = n, e = t, A[e >> 2] = a, t = t + 4 | 0, A[t >> 2] = r;
          return;
        }
        for (a = 1, o = -1; l = (15 - a | 0) * 3 | 0, f = eA(7, 0, l | 0) | 0, n = n & ~(E() | 0), l = eA(r | 0, 0, l | 0) | 0, o = o & ~f | l, n = n | (E() | 0), (a | 0) != (e | 0); )
          a = a + 1 | 0;
        f = t, l = f, A[l >> 2] = o, f = f + 4 | 0, A[f >> 2] = n;
      }
      function K0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        if (a = X(t | 0, e | 0, 52) | 0, E() | 0, a = a & 15, n >>> 0 > 15)
          return r = 4, r | 0;
        if ((a | 0) < (n | 0))
          return r = 12, r | 0;
        if ((a | 0) == (n | 0))
          return A[r >> 2] = t, A[r + 4 >> 2] = e, r = 0, r | 0;
        if (o = eA(n | 0, 0, 52) | 0, o = o | t, t = E() | 0 | e & -15728641, (a | 0) > (n | 0))
          do
            e = eA(7, 0, (14 - n | 0) * 3 | 0) | 0, n = n + 1 | 0, o = e | o, t = E() | 0 | t;
          while ((n | 0) < (a | 0));
        return A[r >> 2] = o, A[r + 4 >> 2] = t, r = 0, r | 0;
      }
      function zi(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        if (a = X(t | 0, e | 0, 52) | 0, E() | 0, a = a & 15, !((n | 0) < 16 & (a | 0) <= (n | 0)))
          return r = 4, r | 0;
        o = n - a | 0, n = X(t | 0, e | 0, 45) | 0, E() | 0;
        A: do
          if (!(ye(n & 127) | 0))
            n = Xi(7, 0, o, ((o | 0) < 0) << 31 >> 31) | 0, o = E() | 0;
          else {
            e: do
              if (a | 0) {
                for (n = 1; l = eA(7, 0, (15 - n | 0) * 3 | 0) | 0, !!((l & t | 0) == 0 & ((E() | 0) & e | 0) == 0); )
                  if (n >>> 0 < a >>> 0)
                    n = n + 1 | 0;
                  else
                    break e;
                n = Xi(7, 0, o, ((o | 0) < 0) << 31 >> 31) | 0, o = E() | 0;
                break A;
              }
            while (!1);
            n = Xi(7, 0, o, ((o | 0) < 0) << 31 >> 31) | 0, n = ft(n | 0, E() | 0, 5, 0) | 0, n = yA(n | 0, E() | 0, -5, -1) | 0, n = Wn(n | 0, E() | 0, 6, 0) | 0, n = yA(n | 0, E() | 0, 1, 0) | 0, o = E() | 0;
          }
        while (!1);
        return l = r, A[l >> 2] = n, A[l + 4 >> 2] = o, l = 0, l | 0;
      }
      function pe(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0;
        if (o = X(t | 0, e | 0, 45) | 0, E() | 0, !(ye(o & 127) | 0))
          return o = 0, o | 0;
        o = X(t | 0, e | 0, 52) | 0, E() | 0, o = o & 15;
        A: do
          if (!o)
            n = 0;
          else
            for (r = 1; ; ) {
              if (n = X(t | 0, e | 0, (15 - r | 0) * 3 | 0) | 0, E() | 0, n = n & 7, n | 0)
                break A;
              if (r >>> 0 < o >>> 0)
                r = r + 1 | 0;
              else {
                n = 0;
                break;
              }
            }
        while (!1);
        return o = (n | 0) == 0 & 1, o | 0;
      }
      function Kr(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0;
        if (l = b, b = b + 16 | 0, a = l, t0(a, t, e, n), e = a, t = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, (t | 0) == 0 & (e | 0) == 0)
          return b = l, 0;
        o = 0, n = 0;
        do
          f = r + (o << 3) | 0, A[f >> 2] = t, A[f + 4 >> 2] = e, o = yA(o | 0, n | 0, 1, 0) | 0, n = E() | 0, i0(a), f = a, t = A[f >> 2] | 0, e = A[f + 4 >> 2] | 0;
        while (!((t | 0) == 0 & (e | 0) == 0));
        return b = l, 0;
      }
      function Ro(t, e, n, r) {
        return t = t | 0, e = e | 0, n = n | 0, r = r | 0, (r | 0) < (n | 0) ? (n = e, r = t, OA(n | 0), r | 0) : (n = eA(-1, -1, ((r - n | 0) * 3 | 0) + 3 | 0) | 0, r = eA(~n | 0, ~(E() | 0) | 0, (15 - r | 0) * 3 | 0) | 0, n = ~(E() | 0) & e, r = ~r & t, OA(n | 0), r | 0);
      }
      function Si(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0;
        return o = X(t | 0, e | 0, 52) | 0, E() | 0, o = o & 15, (n | 0) < 16 & (o | 0) <= (n | 0) ? ((o | 0) < (n | 0) && (o = eA(-1, -1, ((n + -1 - o | 0) * 3 | 0) + 3 | 0) | 0, o = eA(~o | 0, ~(E() | 0) | 0, (15 - n | 0) * 3 | 0) | 0, e = ~(E() | 0) & e, t = ~o & t), o = eA(n | 0, 0, 52) | 0, n = e & -15728641 | (E() | 0), A[r >> 2] = t | o, A[r + 4 >> 2] = n, r = 0, r | 0) : (r = 4, r | 0);
      }
      function Jr(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0, FA = 0, te = 0, DA = 0, mA = 0, tA = 0;
        if ((n | 0) == 0 & (r | 0) == 0)
          return tA = 0, tA | 0;
        if (o = t, a = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, !0 & (o & 15728640 | 0) == 0) {
          if (!((r | 0) > 0 | (r | 0) == 0 & n >>> 0 > 0) || (tA = e, A[tA >> 2] = a, A[tA + 4 >> 2] = o, (n | 0) == 1 & (r | 0) == 0))
            return tA = 0, tA | 0;
          o = 1, a = 0;
          do
            DA = t + (o << 3) | 0, mA = A[DA + 4 >> 2] | 0, tA = e + (o << 3) | 0, A[tA >> 2] = A[DA >> 2], A[tA + 4 >> 2] = mA, o = yA(o | 0, a | 0, 1, 0) | 0, a = E() | 0;
          while ((a | 0) < (r | 0) | (a | 0) == (r | 0) & o >>> 0 < n >>> 0);
          return o = 0, o | 0;
        }
        if (te = n << 3, mA = $i(te) | 0, !mA)
          return tA = 13, tA | 0;
        if (s0(mA | 0, t | 0, te | 0) | 0, DA = Wt(n, 8) | 0, !DA)
          return xA(mA), tA = 13, tA | 0;
        A: for (; ; ) {
          o = mA, v = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, RA = X(v | 0, o | 0, 52) | 0, E() | 0, RA = RA & 15, FA = RA + -1 | 0, dA = (RA | 0) != 0, vA = (r | 0) > 0 | (r | 0) == 0 & n >>> 0 > 0;
          e: do
            if (dA & vA) {
              if (F = eA(FA | 0, 0, 52) | 0, Z = E() | 0, FA >>> 0 > 15) {
                if (!((v | 0) == 0 & (o | 0) == 0)) {
                  tA = 16;
                  break A;
                }
                for (a = 0, t = 0; ; ) {
                  if (a = yA(a | 0, t | 0, 1, 0) | 0, t = E() | 0, !((t | 0) < (r | 0) | (t | 0) == (r | 0) & a >>> 0 < n >>> 0))
                    break e;
                  if (l = mA + (a << 3) | 0, iA = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, !((iA | 0) == 0 & (l | 0) == 0)) {
                    o = l, tA = 16;
                    break A;
                  }
                }
              }
              for (f = v, t = o, a = 0, l = 0; ; ) {
                if (!((f | 0) == 0 & (t | 0) == 0)) {
                  if (!(!0 & (t & 117440512 | 0) == 0)) {
                    tA = 21;
                    break A;
                  }
                  if (m = X(f | 0, t | 0, 52) | 0, E() | 0, m = m & 15, (m | 0) < (FA | 0)) {
                    o = 12, tA = 27;
                    break A;
                  }
                  if ((m | 0) != (FA | 0) && (f = f | F, t = t & -15728641 | Z, m >>> 0 >= RA >>> 0)) {
                    d = FA;
                    do
                      iA = eA(7, 0, (14 - d | 0) * 3 | 0) | 0, d = d + 1 | 0, f = iA | f, t = E() | 0 | t;
                    while (d >>> 0 < m >>> 0);
                  }
                  if (C = o0(f | 0, t | 0, n | 0, r | 0) | 0, T = E() | 0, d = DA + (C << 3) | 0, m = d, P = A[m >> 2] | 0, m = A[m + 4 >> 2] | 0, !((P | 0) == 0 & (m | 0) == 0)) {
                    R = 0, W = 0;
                    do {
                      if ((R | 0) > (r | 0) | (R | 0) == (r | 0) & W >>> 0 > n >>> 0) {
                        tA = 31;
                        break A;
                      }
                      if ((P | 0) == (f | 0) & (m & -117440513 | 0) == (t | 0)) {
                        M = X(P | 0, m | 0, 56) | 0, E() | 0, M = M & 7, S = M + 1 | 0, iA = X(P | 0, m | 0, 45) | 0, E() | 0;
                        t: do
                          if (!(ye(iA & 127) | 0))
                            m = 7;
                          else {
                            if (P = X(P | 0, m | 0, 52) | 0, E() | 0, P = P & 15, !P) {
                              m = 6;
                              break;
                            }
                            for (m = 1; ; ) {
                              if (iA = eA(7, 0, (15 - m | 0) * 3 | 0) | 0, !((iA & f | 0) == 0 & ((E() | 0) & t | 0) == 0)) {
                                m = 7;
                                break t;
                              }
                              if (m >>> 0 < P >>> 0)
                                m = m + 1 | 0;
                              else {
                                m = 6;
                                break;
                              }
                            }
                          }
                        while (!1);
                        if ((M + 2 | 0) >>> 0 > m >>> 0) {
                          tA = 41;
                          break A;
                        }
                        iA = eA(S | 0, 0, 56) | 0, t = E() | 0 | t & -117440513, O = d, A[O >> 2] = 0, A[O + 4 >> 2] = 0, f = iA | f;
                      } else
                        C = yA(C | 0, T | 0, 1, 0) | 0, C = r0(C | 0, E() | 0, n | 0, r | 0) | 0, T = E() | 0;
                      W = yA(W | 0, R | 0, 1, 0) | 0, R = E() | 0, d = DA + (C << 3) | 0, m = d, P = A[m >> 2] | 0, m = A[m + 4 >> 2] | 0;
                    } while (!((P | 0) == 0 & (m | 0) == 0));
                  }
                  iA = d, A[iA >> 2] = f, A[iA + 4 >> 2] = t;
                }
                if (a = yA(a | 0, l | 0, 1, 0) | 0, l = E() | 0, !((l | 0) < (r | 0) | (l | 0) == (r | 0) & a >>> 0 < n >>> 0))
                  break e;
                t = mA + (a << 3) | 0, f = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0;
              }
            }
          while (!1);
          if (iA = yA(n | 0, r | 0, 5, 0) | 0, O = E() | 0, O >>> 0 < 0 | (O | 0) == 0 & iA >>> 0 < 11) {
            tA = 85;
            break;
          }
          if (iA = Wn(n | 0, r | 0, 6, 0) | 0, E() | 0, iA = Wt(iA, 8) | 0, !iA) {
            tA = 48;
            break;
          }
          do
            if (vA) {
              for (S = 0, t = 0, M = 0, R = 0; ; ) {
                if (m = DA + (S << 3) | 0, l = m, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, (a | 0) == 0 & (l | 0) == 0)
                  O = M;
                else {
                  P = X(a | 0, l | 0, 56) | 0, E() | 0, P = P & 7, f = P + 1 | 0, C = l & -117440513, O = X(a | 0, l | 0, 45) | 0, E() | 0;
                  e: do
                    if (ye(O & 127) | 0) {
                      if (T = X(a | 0, l | 0, 52) | 0, E() | 0, T = T & 15, T | 0)
                        for (d = 1; ; ) {
                          if (O = eA(7, 0, (15 - d | 0) * 3 | 0) | 0, !((a & O | 0) == 0 & (C & (E() | 0) | 0) == 0))
                            break e;
                          if (d >>> 0 < T >>> 0)
                            d = d + 1 | 0;
                          else
                            break;
                        }
                      l = eA(f | 0, 0, 56) | 0, a = l | a, l = E() | 0 | C, f = m, A[f >> 2] = a, A[f + 4 >> 2] = l, f = P + 2 | 0;
                    }
                  while (!1);
                  (f | 0) == 7 ? (O = iA + (t << 3) | 0, A[O >> 2] = a, A[O + 4 >> 2] = l & -117440513, t = yA(t | 0, M | 0, 1, 0) | 0, O = E() | 0) : O = M;
                }
                if (S = yA(S | 0, R | 0, 1, 0) | 0, R = E() | 0, (R | 0) < (r | 0) | (R | 0) == (r | 0) & S >>> 0 < n >>> 0)
                  M = O;
                else
                  break;
              }
              if (vA) {
                if (W = FA >>> 0 > 15, F = eA(FA | 0, 0, 52) | 0, Z = E() | 0, !dA) {
                  for (a = 0, d = 0, f = 0, l = 0; (v | 0) == 0 & (o | 0) == 0 || (FA = e + (a << 3) | 0, A[FA >> 2] = v, A[FA + 4 >> 2] = o, a = yA(a | 0, d | 0, 1, 0) | 0, d = E() | 0), f = yA(f | 0, l | 0, 1, 0) | 0, l = E() | 0, !!((l | 0) < (r | 0) | (l | 0) == (r | 0) & f >>> 0 < n >>> 0); )
                    o = mA + (f << 3) | 0, v = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0;
                  o = O;
                  break;
                }
                for (a = 0, d = 0, l = 0, f = 0; ; ) {
                  do
                    if (!((v | 0) == 0 & (o | 0) == 0)) {
                      if (T = X(v | 0, o | 0, 52) | 0, E() | 0, T = T & 15, W | (T | 0) < (FA | 0)) {
                        tA = 80;
                        break A;
                      }
                      if ((T | 0) != (FA | 0)) {
                        if (m = v | F, P = o & -15728641 | Z, T >>> 0 >= RA >>> 0) {
                          C = FA;
                          do
                            dA = eA(7, 0, (14 - C | 0) * 3 | 0) | 0, C = C + 1 | 0, m = dA | m, P = E() | 0 | P;
                          while (C >>> 0 < T >>> 0);
                        }
                      } else
                        m = v, P = o;
                      M = o0(m | 0, P | 0, n | 0, r | 0) | 0, C = 0, T = 0, R = E() | 0;
                      do {
                        if ((C | 0) > (r | 0) | (C | 0) == (r | 0) & T >>> 0 > n >>> 0) {
                          tA = 81;
                          break A;
                        }
                        if (dA = DA + (M << 3) | 0, S = A[dA + 4 >> 2] | 0, (S & -117440513 | 0) == (P | 0) && (A[dA >> 2] | 0) == (m | 0)) {
                          tA = 65;
                          break;
                        }
                        dA = yA(M | 0, R | 0, 1, 0) | 0, M = r0(dA | 0, E() | 0, n | 0, r | 0) | 0, R = E() | 0, T = yA(T | 0, C | 0, 1, 0) | 0, C = E() | 0, dA = DA + (M << 3) | 0;
                      } while (!((A[dA >> 2] | 0) == (m | 0) && (A[dA + 4 >> 2] | 0) == (P | 0)));
                      if ((tA | 0) == 65 && (tA = 0, !0 & (S & 117440512 | 0) == 100663296))
                        break;
                      dA = e + (a << 3) | 0, A[dA >> 2] = v, A[dA + 4 >> 2] = o, a = yA(a | 0, d | 0, 1, 0) | 0, d = E() | 0;
                    }
                  while (!1);
                  if (l = yA(l | 0, f | 0, 1, 0) | 0, f = E() | 0, !((f | 0) < (r | 0) | (f | 0) == (r | 0) & l >>> 0 < n >>> 0))
                    break;
                  o = mA + (l << 3) | 0, v = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0;
                }
                o = O;
              } else
                a = 0, o = O;
            } else
              a = 0, t = 0, o = 0;
          while (!1);
          if (Vn(DA | 0, 0, te | 0) | 0, s0(mA | 0, iA | 0, t << 3 | 0) | 0, xA(iA), (t | 0) == 0 & (o | 0) == 0) {
            tA = 89;
            break;
          } else
            e = e + (a << 3) | 0, r = o, n = t;
        }
        if ((tA | 0) == 16)
          !0 & (o & 117440512 | 0) == 0 ? (o = 4, tA = 27) : tA = 21;
        else if ((tA | 0) == 31)
          kA(27795, 27122, 620, 27132);
        else {
          if ((tA | 0) == 41)
            return xA(mA), xA(DA), tA = 10, tA | 0;
          if ((tA | 0) == 48)
            return xA(mA), xA(DA), tA = 13, tA | 0;
          (tA | 0) == 80 ? kA(27795, 27122, 711, 27132) : (tA | 0) == 81 ? kA(27795, 27122, 723, 27132) : (tA | 0) == 85 && (s0(e | 0, mA | 0, n << 3 | 0) | 0, tA = 89);
        }
        return (tA | 0) == 21 ? (xA(mA), xA(DA), tA = 5, tA | 0) : (tA | 0) == 27 ? (xA(mA), xA(DA), tA = o, tA | 0) : (tA | 0) == 89 ? (xA(mA), xA(DA), tA = 0, tA | 0) : 0;
      }
      function Ns(t, e, n, r, o, a, l) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0, l = l | 0;
        var f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0;
        if (S = b, b = b + 16 | 0, M = S, !((n | 0) > 0 | (n | 0) == 0 & e >>> 0 > 0))
          return M = 0, b = S, M | 0;
        if ((l | 0) >= 16)
          return M = 12, b = S, M | 0;
        C = 0, T = 0, P = 0, f = 0;
        A: for (; ; ) {
          if (v = t + (C << 3) | 0, d = A[v >> 2] | 0, v = A[v + 4 >> 2] | 0, m = X(d | 0, v | 0, 52) | 0, E() | 0, (m & 15 | 0) > (l | 0)) {
            f = 12, d = 11;
            break;
          }
          if (t0(M, d, v, l), m = M, v = A[m >> 2] | 0, m = A[m + 4 >> 2] | 0, (v | 0) == 0 & (m | 0) == 0)
            d = P;
          else {
            d = P;
            do {
              if (!((f | 0) < (a | 0) | (f | 0) == (a | 0) & d >>> 0 < o >>> 0)) {
                d = 10;
                break A;
              }
              P = r + (d << 3) | 0, A[P >> 2] = v, A[P + 4 >> 2] = m, d = yA(d | 0, f | 0, 1, 0) | 0, f = E() | 0, i0(M), P = M, v = A[P >> 2] | 0, m = A[P + 4 >> 2] | 0;
            } while (!((v | 0) == 0 & (m | 0) == 0));
          }
          if (C = yA(C | 0, T | 0, 1, 0) | 0, T = E() | 0, (T | 0) < (n | 0) | (T | 0) == (n | 0) & C >>> 0 < e >>> 0)
            P = d;
          else {
            f = 0, d = 11;
            break;
          }
        }
        return (d | 0) == 10 ? (M = 14, b = S, M | 0) : (d | 0) == 11 ? (b = S, f | 0) : 0;
      }
      function J0(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0;
        C = b, b = b + 16 | 0, P = C;
        A: do
          if ((n | 0) > 0 | (n | 0) == 0 & e >>> 0 > 0) {
            for (v = 0, l = 0, a = 0, m = 0; ; ) {
              if (d = t + (v << 3) | 0, f = A[d >> 2] | 0, d = A[d + 4 >> 2] | 0, !((f | 0) == 0 & (d | 0) == 0) && (d = (zi(f, d, r, P) | 0) == 0, f = P, l = yA(A[f >> 2] | 0, A[f + 4 >> 2] | 0, l | 0, a | 0) | 0, a = E() | 0, !d)) {
                a = 12;
                break;
              }
              if (v = yA(v | 0, m | 0, 1, 0) | 0, m = E() | 0, !((m | 0) < (n | 0) | (m | 0) == (n | 0) & v >>> 0 < e >>> 0))
                break A;
            }
            return b = C, a | 0;
          } else
            l = 0, a = 0;
        while (!1);
        return A[o >> 2] = l, A[o + 4 >> 2] = a, o = 0, b = C, o | 0;
      }
      function Hs(t, e) {
        return t = t | 0, e = e | 0, e = X(t | 0, e | 0, 52) | 0, E() | 0, e & 1 | 0;
      }
      function Qe(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0;
        if (o = X(t | 0, e | 0, 52) | 0, E() | 0, o = o & 15, !o)
          return o = 0, o | 0;
        for (r = 1; ; ) {
          if (n = X(t | 0, e | 0, (15 - r | 0) * 3 | 0) | 0, E() | 0, n = n & 7, n | 0) {
            r = 5;
            break;
          }
          if (r >>> 0 < o >>> 0)
            r = r + 1 | 0;
          else {
            n = 0, r = 5;
            break;
          }
        }
        return (r | 0) == 5 ? n | 0 : 0;
      }
      function X0(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        if (d = X(t | 0, e | 0, 52) | 0, E() | 0, d = d & 15, !d)
          return f = e, d = t, OA(f | 0), d | 0;
        for (f = 1, n = 0; ; ) {
          a = (15 - f | 0) * 3 | 0, r = eA(7, 0, a | 0) | 0, o = E() | 0, l = X(t | 0, e | 0, a | 0) | 0, E() | 0, a = eA(xn(l & 7) | 0, 0, a | 0) | 0, l = E() | 0, t = a | t & ~r, e = l | e & ~o;
          A: do
            if (!n)
              if ((a & r | 0) == 0 & (l & o | 0) == 0)
                n = 0;
              else if (r = X(t | 0, e | 0, 52) | 0, E() | 0, r = r & 15, !r)
                n = 1;
              else {
                n = 1;
                e: for (; ; ) {
                  switch (l = X(t | 0, e | 0, (15 - n | 0) * 3 | 0) | 0, E() | 0, l & 7) {
                    case 1:
                      break e;
                    case 0:
                      break;
                    default: {
                      n = 1;
                      break A;
                    }
                  }
                  if (n >>> 0 < r >>> 0)
                    n = n + 1 | 0;
                  else {
                    n = 1;
                    break A;
                  }
                }
                for (n = 1; ; )
                  if (l = (15 - n | 0) * 3 | 0, o = X(t | 0, e | 0, l | 0) | 0, E() | 0, a = eA(7, 0, l | 0) | 0, e = e & ~(E() | 0), l = eA(xn(o & 7) | 0, 0, l | 0) | 0, t = t & ~a | l, e = e | (E() | 0), n >>> 0 < r >>> 0)
                    n = n + 1 | 0;
                  else {
                    n = 1;
                    break;
                  }
              }
          while (!1);
          if (f >>> 0 < d >>> 0)
            f = f + 1 | 0;
          else
            break;
        }
        return OA(e | 0), t | 0;
      }
      function Ut(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        if (r = X(t | 0, e | 0, 52) | 0, E() | 0, r = r & 15, !r)
          return n = e, r = t, OA(n | 0), r | 0;
        for (n = 1; a = (15 - n | 0) * 3 | 0, l = X(t | 0, e | 0, a | 0) | 0, E() | 0, o = eA(7, 0, a | 0) | 0, e = e & ~(E() | 0), a = eA(xn(l & 7) | 0, 0, a | 0) | 0, t = a | t & ~o, e = E() | 0 | e, n >>> 0 < r >>> 0; )
          n = n + 1 | 0;
        return OA(e | 0), t | 0;
      }
      function Us(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        if (d = X(t | 0, e | 0, 52) | 0, E() | 0, d = d & 15, !d)
          return f = e, d = t, OA(f | 0), d | 0;
        for (f = 1, n = 0; ; ) {
          a = (15 - f | 0) * 3 | 0, r = eA(7, 0, a | 0) | 0, o = E() | 0, l = X(t | 0, e | 0, a | 0) | 0, E() | 0, a = eA(Di(l & 7) | 0, 0, a | 0) | 0, l = E() | 0, t = a | t & ~r, e = l | e & ~o;
          A: do
            if (!n)
              if ((a & r | 0) == 0 & (l & o | 0) == 0)
                n = 0;
              else if (r = X(t | 0, e | 0, 52) | 0, E() | 0, r = r & 15, !r)
                n = 1;
              else {
                n = 1;
                e: for (; ; ) {
                  switch (l = X(t | 0, e | 0, (15 - n | 0) * 3 | 0) | 0, E() | 0, l & 7) {
                    case 1:
                      break e;
                    case 0:
                      break;
                    default: {
                      n = 1;
                      break A;
                    }
                  }
                  if (n >>> 0 < r >>> 0)
                    n = n + 1 | 0;
                  else {
                    n = 1;
                    break A;
                  }
                }
                for (n = 1; ; )
                  if (o = (15 - n | 0) * 3 | 0, a = eA(7, 0, o | 0) | 0, l = e & ~(E() | 0), e = X(t | 0, e | 0, o | 0) | 0, E() | 0, e = eA(Di(e & 7) | 0, 0, o | 0) | 0, t = t & ~a | e, e = l | (E() | 0), n >>> 0 < r >>> 0)
                    n = n + 1 | 0;
                  else {
                    n = 1;
                    break;
                  }
              }
          while (!1);
          if (f >>> 0 < d >>> 0)
            f = f + 1 | 0;
          else
            break;
        }
        return OA(e | 0), t | 0;
      }
      function si(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        if (r = X(t | 0, e | 0, 52) | 0, E() | 0, r = r & 15, !r)
          return n = e, r = t, OA(n | 0), r | 0;
        for (n = 1; l = (15 - n | 0) * 3 | 0, a = eA(7, 0, l | 0) | 0, o = e & ~(E() | 0), e = X(t | 0, e | 0, l | 0) | 0, E() | 0, e = eA(Di(e & 7) | 0, 0, l | 0) | 0, t = e | t & ~a, e = E() | 0 | o, n >>> 0 < r >>> 0; )
          n = n + 1 | 0;
        return OA(e | 0), t | 0;
      }
      function Xr(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (d = b, b = b + 64 | 0, f = d + 40 | 0, r = d + 24 | 0, o = d + 12 | 0, a = d, eA(e | 0, 0, 52) | 0, n = E() | 0 | 134225919, !e)
          return (A[t + 4 >> 2] | 0) > 2 || (A[t + 8 >> 2] | 0) > 2 || (A[t + 12 >> 2] | 0) > 2 ? (l = 0, f = 0, OA(l | 0), b = d, f | 0) : (eA(ur(t) | 0, 0, 45) | 0, l = E() | 0 | n, f = -1, OA(l | 0), b = d, f | 0);
        if (A[f >> 2] = A[t >> 2], A[f + 4 >> 2] = A[t + 4 >> 2], A[f + 8 >> 2] = A[t + 8 >> 2], A[f + 12 >> 2] = A[t + 12 >> 2], l = f + 4 | 0, (e | 0) > 0)
          for (t = -1; A[r >> 2] = A[l >> 2], A[r + 4 >> 2] = A[l + 4 >> 2], A[r + 8 >> 2] = A[l + 8 >> 2], e & 1 ? (Ms(l), A[o >> 2] = A[l >> 2], A[o + 4 >> 2] = A[l + 4 >> 2], A[o + 8 >> 2] = A[l + 8 >> 2], Wr(o)) : (N0(l), A[o >> 2] = A[l >> 2], A[o + 4 >> 2] = A[l + 4 >> 2], A[o + 8 >> 2] = A[l + 8 >> 2], bn(o)), Mt(r, o, a), rt(a), m = (15 - e | 0) * 3 | 0, v = eA(7, 0, m | 0) | 0, n = n & ~(E() | 0), m = eA(hr(a) | 0, 0, m | 0) | 0, t = m | t & ~v, n = E() | 0 | n, (e | 0) > 1; )
            e = e + -1 | 0;
        else
          t = -1;
        A: do
          if ((A[l >> 2] | 0) <= 2 && (A[f + 8 >> 2] | 0) <= 2 && (A[f + 12 >> 2] | 0) <= 2) {
            if (r = ur(f) | 0, e = eA(r | 0, 0, 45) | 0, e = e | t, t = E() | 0 | n & -1040385, a = Mo(f) | 0, !(ye(r) | 0)) {
              if ((a | 0) <= 0)
                break;
              for (o = 0; ; ) {
                if (r = X(e | 0, t | 0, 52) | 0, E() | 0, r = r & 15, r)
                  for (n = 1; m = (15 - n | 0) * 3 | 0, f = X(e | 0, t | 0, m | 0) | 0, E() | 0, v = eA(7, 0, m | 0) | 0, t = t & ~(E() | 0), m = eA(xn(f & 7) | 0, 0, m | 0) | 0, e = e & ~v | m, t = t | (E() | 0), n >>> 0 < r >>> 0; )
                    n = n + 1 | 0;
                if (o = o + 1 | 0, (o | 0) == (a | 0))
                  break A;
              }
            }
            o = X(e | 0, t | 0, 52) | 0, E() | 0, o = o & 15;
            e: do
              if (o) {
                n = 1;
                t: for (; ; ) {
                  switch (m = X(e | 0, t | 0, (15 - n | 0) * 3 | 0) | 0, E() | 0, m & 7) {
                    case 1:
                      break t;
                    case 0:
                      break;
                    default:
                      break e;
                  }
                  if (n >>> 0 < o >>> 0)
                    n = n + 1 | 0;
                  else
                    break e;
                }
                if (NA(r, A[f >> 2] | 0) | 0)
                  for (n = 1; f = (15 - n | 0) * 3 | 0, v = eA(7, 0, f | 0) | 0, m = t & ~(E() | 0), t = X(e | 0, t | 0, f | 0) | 0, E() | 0, t = eA(Di(t & 7) | 0, 0, f | 0) | 0, e = e & ~v | t, t = m | (E() | 0), n >>> 0 < o >>> 0; )
                    n = n + 1 | 0;
                else
                  for (n = 1; m = (15 - n | 0) * 3 | 0, f = X(e | 0, t | 0, m | 0) | 0, E() | 0, v = eA(7, 0, m | 0) | 0, t = t & ~(E() | 0), m = eA(xn(f & 7) | 0, 0, m | 0) | 0, e = e & ~v | m, t = t | (E() | 0), n >>> 0 < o >>> 0; )
                    n = n + 1 | 0;
              }
            while (!1);
            if ((a | 0) > 0) {
              n = 0;
              do
                e = X0(e, t) | 0, t = E() | 0, n = n + 1 | 0;
              while ((n | 0) != (a | 0));
            }
          } else
            e = 0, t = 0;
        while (!1);
        return v = t, m = e, OA(v | 0), b = d, m | 0;
      }
      function It(t) {
        return t = t | 0, (t | 0) % 2 | 0 | 0;
      }
      function dr(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0;
        return o = b, b = b + 16 | 0, r = o, e >>> 0 > 15 ? (r = 4, b = o, r | 0) : (A[t + 4 >> 2] & 2146435072 | 0) == 2146435072 || (A[t + 8 + 4 >> 2] & 2146435072 | 0) == 2146435072 ? (r = 3, b = o, r | 0) : (Os(t, e, r), e = Xr(r, e) | 0, r = E() | 0, A[n >> 2] = e, A[n + 4 >> 2] = r, (e | 0) == 0 & (r | 0) == 0 && kA(27795, 27122, 1050, 27145), r = 0, b = o, r | 0);
      }
      function Fn(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        if (o = n + 4 | 0, a = X(t | 0, e | 0, 52) | 0, E() | 0, a = a & 15, l = X(t | 0, e | 0, 45) | 0, E() | 0, r = (a | 0) == 0, ye(l & 127) | 0) {
          if (r)
            return l = 1, l | 0;
          r = 1;
        } else {
          if (r)
            return l = 0, l | 0;
          (A[o >> 2] | 0) == 0 && (A[n + 8 >> 2] | 0) == 0 ? r = (A[n + 12 >> 2] | 0) != 0 & 1 : r = 1;
        }
        for (n = 1; n & 1 ? Wr(o) : bn(o), l = X(t | 0, e | 0, (15 - n | 0) * 3 | 0) | 0, E() | 0, Vr(o, l & 7), n >>> 0 < a >>> 0; )
          n = n + 1 | 0;
        return r | 0;
      }
      function Ki(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (m = b, b = b + 16 | 0, d = m, v = X(t | 0, e | 0, 45) | 0, E() | 0, v = v & 127, v >>> 0 > 121)
          return A[n >> 2] = 0, A[n + 4 >> 2] = 0, A[n + 8 >> 2] = 0, A[n + 12 >> 2] = 0, v = 5, b = m, v | 0;
        A: do
          if ((ye(v) | 0) != 0 && (a = X(t | 0, e | 0, 52) | 0, E() | 0, a = a & 15, (a | 0) != 0)) {
            r = 1;
            e: for (; ; ) {
              switch (f = X(t | 0, e | 0, (15 - r | 0) * 3 | 0) | 0, E() | 0, f & 7) {
                case 5:
                  break e;
                case 0:
                  break;
                default: {
                  r = e;
                  break A;
                }
              }
              if (r >>> 0 < a >>> 0)
                r = r + 1 | 0;
              else {
                r = e;
                break A;
              }
            }
            for (o = 1, r = e; e = (15 - o | 0) * 3 | 0, l = eA(7, 0, e | 0) | 0, f = r & ~(E() | 0), r = X(t | 0, r | 0, e | 0) | 0, E() | 0, r = eA(Di(r & 7) | 0, 0, e | 0) | 0, t = t & ~l | r, r = f | (E() | 0), o >>> 0 < a >>> 0; )
              o = o + 1 | 0;
          } else
            r = e;
        while (!1);
        if (f = 7696 + (v * 28 | 0) | 0, A[n >> 2] = A[f >> 2], A[n + 4 >> 2] = A[f + 4 >> 2], A[n + 8 >> 2] = A[f + 8 >> 2], A[n + 12 >> 2] = A[f + 12 >> 2], !(Fn(t, r, n) | 0))
          return v = 0, b = m, v | 0;
        if (l = n + 4 | 0, A[d >> 2] = A[l >> 2], A[d + 4 >> 2] = A[l + 4 >> 2], A[d + 8 >> 2] = A[l + 8 >> 2], a = X(t | 0, r | 0, 52) | 0, E() | 0, f = a & 15, a & 1 ? (bn(l), a = f + 1 | 0) : a = f, !(ye(v) | 0))
          r = 0;
        else {
          A: do
            if (!f)
              r = 0;
            else
              for (e = 1; ; ) {
                if (o = X(t | 0, r | 0, (15 - e | 0) * 3 | 0) | 0, E() | 0, o = o & 7, o | 0) {
                  r = o;
                  break A;
                }
                if (e >>> 0 < f >>> 0)
                  e = e + 1 | 0;
                else {
                  r = 0;
                  break;
                }
              }
          while (!1);
          r = (r | 0) == 4 & 1;
        }
        if (!(Yi(n, a, r, 0) | 0))
          (a | 0) != (f | 0) && (A[l >> 2] = A[d >> 2], A[l + 4 >> 2] = A[d + 4 >> 2], A[l + 8 >> 2] = A[d + 8 >> 2]);
        else {
          if (ye(v) | 0)
            do
              ;
            while ((Yi(n, a, 0, 0) | 0) != 0);
          (a | 0) != (f | 0) && N0(l);
        }
        return v = 0, b = m, v | 0;
      }
      function mi(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        return a = b, b = b + 16 | 0, r = a, o = Ki(t, e, r) | 0, o | 0 ? (b = a, o | 0) : (o = X(t | 0, e | 0, 52) | 0, E() | 0, Qo(r, o & 15, n), o = 0, b = a, o | 0);
      }
      function ai(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0;
        if (l = b, b = b + 16 | 0, a = l, r = Ki(t, e, a) | 0, r | 0)
          return a = r, b = l, a | 0;
        r = X(t | 0, e | 0, 45) | 0, E() | 0, r = (ye(r & 127) | 0) == 0, o = X(t | 0, e | 0, 52) | 0, E() | 0, o = o & 15;
        A: do
          if (!r) {
            if (o | 0)
              for (r = 1; ; ) {
                if (f = eA(7, 0, (15 - r | 0) * 3 | 0) | 0, !((f & t | 0) == 0 & ((E() | 0) & e | 0) == 0))
                  break A;
                if (r >>> 0 < o >>> 0)
                  r = r + 1 | 0;
                else
                  break;
              }
            return j0(a, o, 0, 5, n), f = 0, b = l, f | 0;
          }
        while (!1);
        return Y0(a, o, 0, 6, n), f = 0, b = l, f | 0;
      }
      function $r(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (o = X(t | 0, e | 0, 45) | 0, E() | 0, !(ye(o & 127) | 0))
          return o = 2, A[n >> 2] = o, 0;
        if (o = X(t | 0, e | 0, 52) | 0, E() | 0, o = o & 15, !o)
          return o = 5, A[n >> 2] = o, 0;
        for (r = 1; ; ) {
          if (a = eA(7, 0, (15 - r | 0) * 3 | 0) | 0, !((a & t | 0) == 0 & ((E() | 0) & e | 0) == 0)) {
            r = 2, t = 6;
            break;
          }
          if (r >>> 0 < o >>> 0)
            r = r + 1 | 0;
          else {
            r = 5, t = 6;
            break;
          }
        }
        return (t | 0) == 6 && (A[n >> 2] = r), 0;
      }
      function A0(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0;
        P = b, b = b + 128 | 0, v = P + 112 | 0, a = P + 96 | 0, m = P, o = X(t | 0, e | 0, 52) | 0, E() | 0, f = o & 15, A[v >> 2] = f, l = X(t | 0, e | 0, 45) | 0, E() | 0, l = l & 127;
        A: do
          if (ye(l) | 0) {
            if (f | 0)
              for (r = 1; ; ) {
                if (d = eA(7, 0, (15 - r | 0) * 3 | 0) | 0, !((d & t | 0) == 0 & ((E() | 0) & e | 0) == 0)) {
                  o = 0;
                  break A;
                }
                if (r >>> 0 < f >>> 0)
                  r = r + 1 | 0;
                else
                  break;
              }
            if (o & 1)
              o = 1;
            else
              return d = eA(f + 1 | 0, 0, 52) | 0, m = E() | 0 | e & -15728641, v = eA(7, 0, (14 - f | 0) * 3 | 0) | 0, m = A0((d | t) & ~v, m & ~(E() | 0), n) | 0, b = P, m | 0;
          } else
            o = 0;
        while (!1);
        if (r = Ki(t, e, a) | 0, !r) {
          o ? (qr(a, v, m), d = 5) : (q0(a, v, m), d = 6);
          A: do
            if (ye(l) | 0)
              if (!f)
                t = 5;
              else
                for (r = 1; ; ) {
                  if (l = eA(7, 0, (15 - r | 0) * 3 | 0) | 0, !((l & t | 0) == 0 & ((E() | 0) & e | 0) == 0)) {
                    t = 2;
                    break A;
                  }
                  if (r >>> 0 < f >>> 0)
                    r = r + 1 | 0;
                  else {
                    t = 5;
                    break;
                  }
                }
            else
              t = 2;
          while (!1);
          Vn(n | 0, -1, t << 2 | 0) | 0;
          A: do
            if (o)
              for (a = 0; ; ) {
                if (l = m + (a << 4) | 0, Qs(l, A[v >> 2] | 0) | 0, l = A[l >> 2] | 0, f = A[n >> 2] | 0, (f | 0) == -1 | (f | 0) == (l | 0))
                  r = n;
                else {
                  o = 0;
                  do {
                    if (o = o + 1 | 0, o >>> 0 >= t >>> 0) {
                      r = 1;
                      break A;
                    }
                    r = n + (o << 2) | 0, f = A[r >> 2] | 0;
                  } while (!((f | 0) == -1 | (f | 0) == (l | 0)));
                }
                if (A[r >> 2] = l, a = a + 1 | 0, a >>> 0 >= d >>> 0) {
                  r = 0;
                  break;
                }
              }
            else
              for (a = 0; ; ) {
                if (l = m + (a << 4) | 0, Yi(l, A[v >> 2] | 0, 0, 1) | 0, l = A[l >> 2] | 0, f = A[n >> 2] | 0, (f | 0) == -1 | (f | 0) == (l | 0))
                  r = n;
                else {
                  o = 0;
                  do {
                    if (o = o + 1 | 0, o >>> 0 >= t >>> 0) {
                      r = 1;
                      break A;
                    }
                    r = n + (o << 2) | 0, f = A[r >> 2] | 0;
                  } while (!((f | 0) == -1 | (f | 0) == (l | 0)));
                }
                if (A[r >> 2] = l, a = a + 1 | 0, a >>> 0 >= d >>> 0) {
                  r = 0;
                  break;
                }
              }
          while (!1);
        }
        return m = r, b = P, m | 0;
      }
      function Zo() {
        return 12;
      }
      function $0(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        if (t >>> 0 > 15)
          return f = 4, f | 0;
        if (eA(t | 0, 0, 52) | 0, f = E() | 0 | 134225919, !t) {
          n = 0, r = 0;
          do
            ye(r) | 0 && (eA(r | 0, 0, 45) | 0, l = f | (E() | 0), t = e + (n << 3) | 0, A[t >> 2] = -1, A[t + 4 >> 2] = l, n = n + 1 | 0), r = r + 1 | 0;
          while ((r | 0) != 122);
          return n = 0, n | 0;
        }
        n = 0, l = 0;
        do {
          if (ye(l) | 0) {
            for (eA(l | 0, 0, 45) | 0, r = 1, o = -1, a = f | (E() | 0); d = eA(7, 0, (15 - r | 0) * 3 | 0) | 0, o = o & ~d, a = a & ~(E() | 0), (r | 0) != (t | 0); )
              r = r + 1 | 0;
            d = e + (n << 3) | 0, A[d >> 2] = o, A[d + 4 >> 2] = a, n = n + 1 | 0;
          }
          l = l + 1 | 0;
        } while ((l | 0) != 122);
        return n = 0, n | 0;
      }
      function e0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0;
        if (F = b, b = b + 16 | 0, R = F, W = X(t | 0, e | 0, 52) | 0, E() | 0, W = W & 15, n >>> 0 > 15)
          return W = 4, b = F, W | 0;
        if ((W | 0) < (n | 0))
          return W = 12, b = F, W | 0;
        if ((W | 0) != (n | 0))
          if (a = eA(n | 0, 0, 52) | 0, a = a | t, f = E() | 0 | e & -15728641, (W | 0) > (n | 0)) {
            d = n;
            do
              S = eA(7, 0, (14 - d | 0) * 3 | 0) | 0, d = d + 1 | 0, a = S | a, f = E() | 0 | f;
            while ((d | 0) < (W | 0));
            S = a;
          } else
            S = a;
        else
          S = t, f = e;
        M = X(S | 0, f | 0, 45) | 0, E() | 0;
        A: do
          if (ye(M & 127) | 0) {
            if (d = X(S | 0, f | 0, 52) | 0, E() | 0, d = d & 15, d | 0)
              for (a = 1; ; ) {
                if (M = eA(7, 0, (15 - a | 0) * 3 | 0) | 0, !((M & S | 0) == 0 & ((E() | 0) & f | 0) == 0)) {
                  v = 33;
                  break A;
                }
                if (a >>> 0 < d >>> 0)
                  a = a + 1 | 0;
                else
                  break;
              }
            if (M = r, A[M >> 2] = 0, A[M + 4 >> 2] = 0, (W | 0) > (n | 0)) {
              for (M = e & -15728641, T = W; ; ) {
                if (C = T, T = T + -1 | 0, T >>> 0 > 15 | (W | 0) < (T | 0)) {
                  v = 19;
                  break;
                }
                if ((W | 0) != (T | 0))
                  if (a = eA(T | 0, 0, 52) | 0, a = a | t, d = E() | 0 | M, (W | 0) < (C | 0))
                    P = a;
                  else {
                    v = T;
                    do
                      P = eA(7, 0, (14 - v | 0) * 3 | 0) | 0, v = v + 1 | 0, a = P | a, d = E() | 0 | d;
                    while ((v | 0) < (W | 0));
                    P = a;
                  }
                else
                  P = t, d = e;
                if (m = X(P | 0, d | 0, 45) | 0, E() | 0, !(ye(m & 127) | 0))
                  a = 0;
                else {
                  m = X(P | 0, d | 0, 52) | 0, E() | 0, m = m & 15;
                  e: do
                    if (!m)
                      a = 0;
                    else
                      for (v = 1; ; ) {
                        if (a = X(P | 0, d | 0, (15 - v | 0) * 3 | 0) | 0, E() | 0, a = a & 7, a | 0)
                          break e;
                        if (v >>> 0 < m >>> 0)
                          v = v + 1 | 0;
                        else {
                          a = 0;
                          break;
                        }
                      }
                  while (!1);
                  a = (a | 0) == 0 & 1;
                }
                if (d = X(t | 0, e | 0, (15 - C | 0) * 3 | 0) | 0, E() | 0, d = d & 7, (d | 0) == 7) {
                  o = 5, v = 42;
                  break;
                }
                if (a = (a | 0) != 0, (d | 0) == 1 & a) {
                  o = 5, v = 42;
                  break;
                }
                if (P = d + (((d | 0) != 0 & a) << 31 >> 31) | 0, P | 0 && (v = W - C | 0, v = Xi(7, 0, v, ((v | 0) < 0) << 31 >> 31) | 0, m = E() | 0, a ? (a = ft(v | 0, m | 0, 5, 0) | 0, a = yA(a | 0, E() | 0, -5, -1) | 0, a = Wn(a | 0, E() | 0, 6, 0) | 0, a = yA(a | 0, E() | 0, 1, 0) | 0, d = E() | 0) : (a = v, d = m), C = P + -1 | 0, C = ft(v | 0, m | 0, C | 0, ((C | 0) < 0) << 31 >> 31 | 0) | 0, C = yA(a | 0, d | 0, C | 0, E() | 0) | 0, P = E() | 0, m = r, m = yA(C | 0, P | 0, A[m >> 2] | 0, A[m + 4 >> 2] | 0) | 0, P = E() | 0, C = r, A[C >> 2] = m, A[C + 4 >> 2] = P), (T | 0) <= (n | 0)) {
                  v = 37;
                  break;
                }
              }
              if ((v | 0) == 19)
                kA(27795, 27122, 1367, 27158);
              else if ((v | 0) == 37) {
                l = r, o = A[l + 4 >> 2] | 0, l = A[l >> 2] | 0;
                break;
              } else if ((v | 0) == 42)
                return b = F, o | 0;
            } else
              o = 0, l = 0;
          } else
            v = 33;
        while (!1);
        A: do
          if ((v | 0) == 33)
            if (M = r, A[M >> 2] = 0, A[M + 4 >> 2] = 0, (W | 0) > (n | 0)) {
              for (a = W; ; ) {
                if (o = X(t | 0, e | 0, (15 - a | 0) * 3 | 0) | 0, E() | 0, o = o & 7, (o | 0) == 7) {
                  o = 5;
                  break;
                }
                if (l = W - a | 0, l = Xi(7, 0, l, ((l | 0) < 0) << 31 >> 31) | 0, o = ft(l | 0, E() | 0, o | 0, 0) | 0, l = E() | 0, M = r, l = yA(A[M >> 2] | 0, A[M + 4 >> 2] | 0, o | 0, l | 0) | 0, o = E() | 0, M = r, A[M >> 2] = l, A[M + 4 >> 2] = o, a = a + -1 | 0, (a | 0) <= (n | 0))
                  break A;
              }
              return b = F, o | 0;
            } else
              o = 0, l = 0;
        while (!1);
        return zi(S, f, W, R) | 0 && kA(27795, 27122, 1327, 27173), W = R, R = A[W + 4 >> 2] | 0, ((o | 0) > -1 | (o | 0) == -1 & l >>> 0 > 4294967295) & ((R | 0) > (o | 0) | ((R | 0) == (o | 0) ? (A[W >> 2] | 0) >>> 0 > l >>> 0 : 0)) ? (W = 0, b = F, W | 0) : (kA(27795, 27122, 1407, 27158), 0);
      }
      function Gs(t, e, n, r, o, a) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0;
        var l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0;
        if (P = b, b = b + 16 | 0, l = P, o >>> 0 > 15)
          return a = 4, b = P, a | 0;
        if (f = X(n | 0, r | 0, 52) | 0, E() | 0, f = f & 15, (f | 0) > (o | 0))
          return a = 12, b = P, a | 0;
        if (zi(n, r, o, l) | 0 && kA(27795, 27122, 1327, 27173), m = l, v = A[m + 4 >> 2] | 0, !(((e | 0) > -1 | (e | 0) == -1 & t >>> 0 > 4294967295) & ((v | 0) > (e | 0) | ((v | 0) == (e | 0) ? (A[m >> 2] | 0) >>> 0 > t >>> 0 : 0))))
          return a = 2, b = P, a | 0;
        m = o - f | 0, o = eA(o | 0, 0, 52) | 0, d = E() | 0 | r & -15728641, v = a, A[v >> 2] = o | n, A[v + 4 >> 2] = d, v = X(n | 0, r | 0, 45) | 0, E() | 0;
        A: do
          if (ye(v & 127) | 0) {
            if (f | 0)
              for (l = 1; ; ) {
                if (v = eA(7, 0, (15 - l | 0) * 3 | 0) | 0, !((v & n | 0) == 0 & ((E() | 0) & r | 0) == 0))
                  break A;
                if (l >>> 0 < f >>> 0)
                  l = l + 1 | 0;
                else
                  break;
              }
            if ((m | 0) < 1)
              return a = 0, b = P, a | 0;
            for (v = f ^ 15, r = -1, d = 1, l = 1; ; ) {
              f = m - d | 0, f = Xi(7, 0, f, ((f | 0) < 0) << 31 >> 31) | 0, n = E() | 0;
              do
                if (l)
                  if (l = ft(f | 0, n | 0, 5, 0) | 0, l = yA(l | 0, E() | 0, -5, -1) | 0, l = Wn(l | 0, E() | 0, 6, 0) | 0, o = E() | 0, (e | 0) > (o | 0) | (e | 0) == (o | 0) & t >>> 0 > l >>> 0) {
                    e = yA(t | 0, e | 0, -1, -1) | 0, e = ut(e | 0, E() | 0, l | 0, o | 0) | 0, l = E() | 0, C = a, M = A[C >> 2] | 0, C = A[C + 4 >> 2] | 0, S = (v + r | 0) * 3 | 0, T = eA(7, 0, S | 0) | 0, C = C & ~(E() | 0), r = Wn(e | 0, l | 0, f | 0, n | 0) | 0, t = E() | 0, o = yA(r | 0, t | 0, 2, 0) | 0, S = eA(o | 0, E() | 0, S | 0) | 0, C = E() | 0 | C, o = a, A[o >> 2] = S | M & ~T, A[o + 4 >> 2] = C, t = ft(r | 0, t | 0, f | 0, n | 0) | 0, t = ut(e | 0, l | 0, t | 0, E() | 0) | 0, l = 0, e = E() | 0;
                    break;
                  } else {
                    S = a, T = A[S >> 2] | 0, S = A[S + 4 >> 2] | 0, M = eA(7, 0, (v + r | 0) * 3 | 0) | 0, S = S & ~(E() | 0), l = a, A[l >> 2] = T & ~M, A[l + 4 >> 2] = S, l = 1;
                    break;
                  }
                else
                  T = a, o = A[T >> 2] | 0, T = A[T + 4 >> 2] | 0, r = (v + r | 0) * 3 | 0, C = eA(7, 0, r | 0) | 0, T = T & ~(E() | 0), S = Wn(t | 0, e | 0, f | 0, n | 0) | 0, l = E() | 0, r = eA(S | 0, l | 0, r | 0) | 0, T = E() | 0 | T, M = a, A[M >> 2] = r | o & ~C, A[M + 4 >> 2] = T, l = ft(S | 0, l | 0, f | 0, n | 0) | 0, t = ut(t | 0, e | 0, l | 0, E() | 0) | 0, l = 0, e = E() | 0;
              while (!1);
              if ((m | 0) > (d | 0))
                r = ~d, d = d + 1 | 0;
              else {
                e = 0;
                break;
              }
            }
            return b = P, e | 0;
          }
        while (!1);
        if ((m | 0) < 1)
          return S = 0, b = P, S | 0;
        for (o = f ^ 15, l = 1; ; )
          if (M = m - l | 0, M = Xi(7, 0, M, ((M | 0) < 0) << 31 >> 31) | 0, S = E() | 0, d = a, n = A[d >> 2] | 0, d = A[d + 4 >> 2] | 0, f = (o - l | 0) * 3 | 0, r = eA(7, 0, f | 0) | 0, d = d & ~(E() | 0), C = Wn(t | 0, e | 0, M | 0, S | 0) | 0, T = E() | 0, f = eA(C | 0, T | 0, f | 0) | 0, d = E() | 0 | d, v = a, A[v >> 2] = f | n & ~r, A[v + 4 >> 2] = d, S = ft(C | 0, T | 0, M | 0, S | 0) | 0, t = ut(t | 0, e | 0, S | 0, E() | 0) | 0, e = E() | 0, (m | 0) <= (l | 0)) {
            e = 0;
            break;
          } else
            l = l + 1 | 0;
        return b = P, e | 0;
      }
      function t0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        o = X(e | 0, n | 0, 52) | 0, E() | 0, o = o & 15, (e | 0) == 0 & (n | 0) == 0 | ((r | 0) > 15 | (o | 0) > (r | 0)) ? (a = -1, e = -1, n = 0, o = 0) : (e = Ro(e, n, o + 1 | 0, r) | 0, l = (E() | 0) & -15728641, n = eA(r | 0, 0, 52) | 0, n = e | n, l = l | (E() | 0), e = (pe(n, l) | 0) == 0, a = o, e = e ? -1 : r, o = l), l = t, A[l >> 2] = n, A[l + 4 >> 2] = o, A[t + 8 >> 2] = a, A[t + 12 >> 2] = e;
      }
      function Fo(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        if (o = X(t | 0, e | 0, 52) | 0, E() | 0, o = o & 15, a = r + 8 | 0, A[a >> 2] = o, (t | 0) == 0 & (e | 0) == 0 | ((n | 0) > 15 | (o | 0) > (n | 0))) {
          n = r, A[n >> 2] = 0, A[n + 4 >> 2] = 0, A[a >> 2] = -1, A[r + 12 >> 2] = -1;
          return;
        }
        if (t = Ro(t, e, o + 1 | 0, n) | 0, a = (E() | 0) & -15728641, o = eA(n | 0, 0, 52) | 0, o = t | o, a = a | (E() | 0), t = r, A[t >> 2] = o, A[t + 4 >> 2] = a, t = r + 12 | 0, pe(o, a) | 0) {
          A[t >> 2] = n;
          return;
        } else {
          A[t >> 2] = -1;
          return;
        }
      }
      function i0(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0;
        if (n = t, e = A[n >> 2] | 0, n = A[n + 4 >> 2] | 0, !((e | 0) == 0 & (n | 0) == 0) && (r = X(e | 0, n | 0, 52) | 0, E() | 0, r = r & 15, f = eA(1, 0, (r ^ 15) * 3 | 0) | 0, e = yA(f | 0, E() | 0, e | 0, n | 0) | 0, n = E() | 0, f = t, A[f >> 2] = e, A[f + 4 >> 2] = n, f = t + 8 | 0, l = A[f >> 2] | 0, !((r | 0) < (l | 0)))) {
          for (d = t + 12 | 0, a = r; ; ) {
            if ((a | 0) == (l | 0)) {
              r = 5;
              break;
            }
            if (v = (a | 0) == (A[d >> 2] | 0), o = (15 - a | 0) * 3 | 0, r = X(e | 0, n | 0, o | 0) | 0, E() | 0, r = r & 7, v & ((r | 0) == 1 & !0)) {
              r = 7;
              break;
            }
            if (!((r | 0) == 7 & !0)) {
              r = 10;
              break;
            }
            if (v = eA(1, 0, o | 0) | 0, e = yA(e | 0, n | 0, v | 0, E() | 0) | 0, n = E() | 0, v = t, A[v >> 2] = e, A[v + 4 >> 2] = n, (a | 0) > (l | 0))
              a = a + -1 | 0;
            else {
              r = 10;
              break;
            }
          }
          if ((r | 0) == 5) {
            v = t, A[v >> 2] = 0, A[v + 4 >> 2] = 0, A[f >> 2] = -1, A[d >> 2] = -1;
            return;
          } else if ((r | 0) == 7) {
            l = eA(1, 0, o | 0) | 0, l = yA(e | 0, n | 0, l | 0, E() | 0) | 0, f = E() | 0, v = t, A[v >> 2] = l, A[v + 4 >> 2] = f, A[d >> 2] = a + -1;
            return;
          } else if ((r | 0) == 10)
            return;
        }
      }
      function _r(t) {
        t = +t;
        var e = 0;
        return e = t < 0 ? t + 6.283185307179586 : t, +(t >= 6.283185307179586 ? e + -6.283185307179586 : e);
      }
      function gt(t, e) {
        return t = t | 0, e = e | 0, +EA(+(+y[t >> 3] - +y[e >> 3])) < 17453292519943298e-27 ? (e = +EA(+(+y[t + 8 >> 3] - +y[e + 8 >> 3])) < 17453292519943298e-27, e | 0) : (e = 0, e | 0);
      }
      function at(t, e) {
        switch (t = +t, e = e | 0, e | 0) {
          case 1: {
            t = t < 0 ? t + 6.283185307179586 : t;
            break;
          }
          case 2: {
            t = t > 0 ? t + -6.283185307179586 : t;
            break;
          }
        }
        return +t;
      }
      function Ws(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = +y[e >> 3], r = +y[t >> 3], a = +ZA(+((o - r) * 0.5)), n = +ZA(+((+y[e + 8 >> 3] - +y[t + 8 >> 3]) * 0.5)), n = a * a + n * (+oe(+o) * +oe(+r) * n), +(+he(+ +KA(+n), + +KA(+(1 - n))) * 2);
      }
      function Ji(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = +y[e >> 3], r = +y[t >> 3], a = +ZA(+((o - r) * 0.5)), n = +ZA(+((+y[e + 8 >> 3] - +y[t + 8 >> 3]) * 0.5)), n = a * a + n * (+oe(+o) * +oe(+r) * n), +(+he(+ +KA(+n), + +KA(+(1 - n))) * 2 * 6371.007180918475);
      }
      function Vs(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = +y[e >> 3], r = +y[t >> 3], a = +ZA(+((o - r) * 0.5)), n = +ZA(+((+y[e + 8 >> 3] - +y[t + 8 >> 3]) * 0.5)), n = a * a + n * (+oe(+o) * +oe(+r) * n), +(+he(+ +KA(+n), + +KA(+(1 - n))) * 2 * 6371.007180918475 * 1e3);
      }
      function No(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        return a = +y[e >> 3], r = +oe(+a), o = +y[e + 8 >> 3] - +y[t + 8 >> 3], l = r * +ZA(+o), n = +y[t >> 3], + +he(+l, +(+ZA(+a) * +oe(+n) - +oe(+o) * (r * +ZA(+n))));
      }
      function js(t, e, n, r) {
        t = t | 0, e = +e, n = +n, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0;
        if (n < 1e-16) {
          A[r >> 2] = A[t >> 2], A[r + 4 >> 2] = A[t + 4 >> 2], A[r + 8 >> 2] = A[t + 8 >> 2], A[r + 12 >> 2] = A[t + 12 >> 2];
          return;
        }
        a = e < 0 ? e + 6.283185307179586 : e, a = e >= 6.283185307179586 ? a + -6.283185307179586 : a;
        do
          if (a < 1e-16)
            e = +y[t >> 3] + n, y[r >> 3] = e, o = r;
          else {
            if (o = +EA(+(a + -3.141592653589793)) < 1e-16, e = +y[t >> 3], o) {
              e = e - n, y[r >> 3] = e, o = r;
              break;
            }
            if (l = +oe(+n), n = +ZA(+n), e = l * +ZA(+e) + +oe(+a) * (n * +oe(+e)), e = e > 1 ? 1 : e, e = +WA(+(e < -1 ? -1 : e)), y[r >> 3] = e, +EA(+(e + -1.5707963267948966)) < 1e-16) {
              y[r >> 3] = 1.5707963267948966, y[r + 8 >> 3] = 0;
              return;
            }
            if (+EA(+(e + 1.5707963267948966)) < 1e-16) {
              y[r >> 3] = -1.5707963267948966, y[r + 8 >> 3] = 0;
              return;
            }
            if (f = 1 / +oe(+e), a = n * +ZA(+a) * f, n = +y[t >> 3], e = f * ((l - +ZA(+e) * +ZA(+n)) / +oe(+n)), l = a > 1 ? 1 : a, e = e > 1 ? 1 : e, e = +y[t + 8 >> 3] + +he(+(l < -1 ? -1 : l), +(e < -1 ? -1 : e)), e > 3.141592653589793)
              do
                e = e + -6.283185307179586;
              while (e > 3.141592653589793);
            if (e < -3.141592653589793)
              do
                e = e + 6.283185307179586;
              while (e < -3.141592653589793);
            y[r + 8 >> 3] = e;
            return;
          }
        while (!1);
        if (+EA(+(e + -1.5707963267948966)) < 1e-16) {
          y[o >> 3] = 1.5707963267948966, y[r + 8 >> 3] = 0;
          return;
        }
        if (+EA(+(e + 1.5707963267948966)) < 1e-16) {
          y[o >> 3] = -1.5707963267948966, y[r + 8 >> 3] = 0;
          return;
        }
        if (e = +y[t + 8 >> 3], e > 3.141592653589793)
          do
            e = e + -6.283185307179586;
          while (e > 3.141592653589793);
        if (e < -3.141592653589793)
          do
            e = e + 6.283185307179586;
          while (e < -3.141592653589793);
        y[r + 8 >> 3] = e;
      }
      function Nn(t, e) {
        return t = t | 0, e = e | 0, t >>> 0 > 15 ? (e = 4, e | 0) : (y[e >> 3] = +y[20656 + (t << 3) >> 3], e = 0, e | 0);
      }
      function Ys(t, e) {
        return t = t | 0, e = e | 0, t >>> 0 > 15 ? (e = 4, e | 0) : (y[e >> 3] = +y[20784 + (t << 3) >> 3], e = 0, e | 0);
      }
      function Hn(t, e) {
        return t = t | 0, e = e | 0, t >>> 0 > 15 ? (e = 4, e | 0) : (y[e >> 3] = +y[20912 + (t << 3) >> 3], e = 0, e | 0);
      }
      function Ho(t, e) {
        return t = t | 0, e = e | 0, t >>> 0 > 15 ? (e = 4, e | 0) : (y[e >> 3] = +y[21040 + (t << 3) >> 3], e = 0, e | 0);
      }
      function pr(t, e) {
        t = t | 0, e = e | 0;
        var n = 0;
        return t >>> 0 > 15 ? (e = 4, e | 0) : (n = Xi(7, 0, t, ((t | 0) < 0) << 31 >> 31) | 0, n = ft(n | 0, E() | 0, 120, 0) | 0, t = E() | 0, A[e >> 2] = n | 2, A[e + 4 >> 2] = t, e = 0, e | 0);
      }
      function Uo(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0;
        return C = +y[e >> 3], m = +y[t >> 3], d = +ZA(+((C - m) * 0.5)), a = +y[e + 8 >> 3], v = +y[t + 8 >> 3], l = +ZA(+((a - v) * 0.5)), f = +oe(+m), P = +oe(+C), l = d * d + l * (P * f * l), l = +he(+ +KA(+l), + +KA(+(1 - l))) * 2, d = +y[n >> 3], C = +ZA(+((d - C) * 0.5)), r = +y[n + 8 >> 3], a = +ZA(+((r - a) * 0.5)), o = +oe(+d), a = C * C + a * (P * o * a), a = +he(+ +KA(+a), + +KA(+(1 - a))) * 2, d = +ZA(+((m - d) * 0.5)), r = +ZA(+((v - r) * 0.5)), r = d * d + r * (f * o * r), r = +he(+ +KA(+r), + +KA(+(1 - r))) * 2, o = (l + a + r) * 0.5, +(+Oe(+ +KA(+(+vt(+(o * 0.5)) * +vt(+((o - l) * 0.5)) * +vt(+((o - a) * 0.5)) * +vt(+((o - r) * 0.5))))) * 4);
      }
      function li(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0;
        if (f = b, b = b + 192 | 0, a = f + 168 | 0, l = f, o = mi(t, e, a) | 0, o | 0)
          return n = o, b = f, n | 0;
        if (ai(t, e, l) | 0 && kA(27795, 27190, 415, 27199), e = A[l >> 2] | 0, (e | 0) > 0) {
          if (r = +Uo(l + 8 | 0, l + 8 + (((e | 0) != 1 & 1) << 4) | 0, a) + 0, (e | 0) != 1) {
            t = 1;
            do
              o = t, t = t + 1 | 0, r = r + +Uo(l + 8 + (o << 4) | 0, l + 8 + (((t | 0) % (e | 0) | 0) << 4) | 0, a);
            while ((t | 0) < (e | 0));
          }
        } else
          r = 0;
        return y[n >> 3] = r, n = 0, b = f, n | 0;
      }
      function Go(t, e, n) {
        return t = t | 0, e = e | 0, n = n | 0, t = li(t, e, n) | 0, t | 0 || (y[n >> 3] = +y[n >> 3] * 6371.007180918475 * 6371.007180918475), t | 0;
      }
      function Wo(t, e, n) {
        return t = t | 0, e = e | 0, n = n | 0, t = li(t, e, n) | 0, t | 0 || (y[n >> 3] = +y[n >> 3] * 6371.007180918475 * 6371.007180918475 * 1e3 * 1e3), t | 0;
      }
      function vr(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (f = b, b = b + 176 | 0, l = f, t = vi(t, e, l) | 0, t | 0)
          return l = t, b = f, l | 0;
        if (y[n >> 3] = 0, t = A[l >> 2] | 0, (t | 0) <= 1)
          return l = 0, b = f, l | 0;
        e = t + -1 | 0, t = 0, r = +y[l + 8 >> 3], o = +y[l + 16 >> 3], a = 0;
        do
          t = t + 1 | 0, v = r, r = +y[l + 8 + (t << 4) >> 3], m = +ZA(+((r - v) * 0.5)), d = o, o = +y[l + 8 + (t << 4) + 8 >> 3], d = +ZA(+((o - d) * 0.5)), d = m * m + d * (+oe(+r) * +oe(+v) * d), a = a + +he(+ +KA(+d), + +KA(+(1 - d))) * 2;
        while ((t | 0) < (e | 0));
        return y[n >> 3] = a, l = 0, b = f, l | 0;
      }
      function qs(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (f = b, b = b + 176 | 0, l = f, t = vi(t, e, l) | 0, t | 0)
          return l = t, a = +y[n >> 3], a = a * 6371.007180918475, y[n >> 3] = a, b = f, l | 0;
        if (y[n >> 3] = 0, t = A[l >> 2] | 0, (t | 0) <= 1)
          return l = 0, a = 0, a = a * 6371.007180918475, y[n >> 3] = a, b = f, l | 0;
        e = t + -1 | 0, t = 0, r = +y[l + 8 >> 3], o = +y[l + 16 >> 3], a = 0;
        do
          t = t + 1 | 0, v = r, r = +y[l + 8 + (t << 4) >> 3], m = +ZA(+((r - v) * 0.5)), d = o, o = +y[l + 8 + (t << 4) + 8 >> 3], d = +ZA(+((o - d) * 0.5)), d = m * m + d * (+oe(+v) * +oe(+r) * d), a = a + +he(+ +KA(+d), + +KA(+(1 - d))) * 2;
        while ((t | 0) != (e | 0));
        return y[n >> 3] = a, l = 0, m = a, m = m * 6371.007180918475, y[n >> 3] = m, b = f, l | 0;
      }
      function n0(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (f = b, b = b + 176 | 0, l = f, t = vi(t, e, l) | 0, t | 0)
          return l = t, a = +y[n >> 3], a = a * 6371.007180918475, a = a * 1e3, y[n >> 3] = a, b = f, l | 0;
        if (y[n >> 3] = 0, t = A[l >> 2] | 0, (t | 0) <= 1)
          return l = 0, a = 0, a = a * 6371.007180918475, a = a * 1e3, y[n >> 3] = a, b = f, l | 0;
        e = t + -1 | 0, t = 0, r = +y[l + 8 >> 3], o = +y[l + 16 >> 3], a = 0;
        do
          t = t + 1 | 0, v = r, r = +y[l + 8 + (t << 4) >> 3], m = +ZA(+((r - v) * 0.5)), d = o, o = +y[l + 8 + (t << 4) + 8 >> 3], d = +ZA(+((o - d) * 0.5)), d = m * m + d * (+oe(+v) * +oe(+r) * d), a = a + +he(+ +KA(+d), + +KA(+(1 - d))) * 2;
        while ((t | 0) != (e | 0));
        return y[n >> 3] = a, l = 0, m = a, m = m * 6371.007180918475, m = m * 1e3, y[n >> 3] = m, b = f, l | 0;
      }
      function mr(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0;
        return e = Wt(1, 12) | 0, e || kA(27280, 27235, 49, 27293), n = t + 4 | 0, r = A[n >> 2] | 0, r | 0 ? (r = r + 8 | 0, A[r >> 2] = e, A[n >> 2] = e, e | 0) : (A[t >> 2] | 0 && kA(27310, 27235, 61, 27333), r = t, A[r >> 2] = e, A[n >> 2] = e, e | 0);
      }
      function Vo(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0;
        return r = $i(24) | 0, r || kA(27347, 27235, 78, 27361), A[r >> 2] = A[e >> 2], A[r + 4 >> 2] = A[e + 4 >> 2], A[r + 8 >> 2] = A[e + 8 >> 2], A[r + 12 >> 2] = A[e + 12 >> 2], A[r + 16 >> 2] = 0, e = t + 4 | 0, n = A[e >> 2] | 0, n | 0 ? (A[n + 16 >> 2] = r, A[e >> 2] = r, r | 0) : (A[t >> 2] | 0 && kA(27376, 27235, 82, 27361), A[t >> 2] = r, A[e >> 2] = r, r | 0);
      }
      function Ao(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0;
        if (t)
          for (r = 1; ; ) {
            if (e = A[t >> 2] | 0, e | 0)
              do {
                if (n = A[e >> 2] | 0, n | 0)
                  do
                    o = n, n = A[n + 16 >> 2] | 0, xA(o);
                  while ((n | 0) != 0);
                o = e, e = A[e + 8 >> 2] | 0, xA(o);
              } while ((e | 0) != 0);
            if (e = t, t = A[t + 8 >> 2] | 0, r || xA(e), t)
              r = 0;
            else
              break;
          }
      }
      function Ks(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0, FA = 0, te = 0, DA = 0, mA = 0, tA = 0, jA = 0, be = 0, HA = 0;
        if (o = t + 8 | 0, A[o >> 2] | 0)
          return HA = 1, HA | 0;
        if (r = A[t >> 2] | 0, !r)
          return HA = 0, HA | 0;
        e = r, n = 0;
        do
          n = n + 1 | 0, e = A[e + 8 >> 2] | 0;
        while ((e | 0) != 0);
        if (n >>> 0 < 2)
          return HA = 0, HA | 0;
        jA = $i(n << 2) | 0, jA || kA(27396, 27235, 317, 27415), tA = $i(n << 5) | 0, tA || kA(27437, 27235, 321, 27415), A[t >> 2] = 0, vA = t + 4 | 0, A[vA >> 2] = 0, A[o >> 2] = 0, n = 0, mA = 0, iA = 0, P = 0;
        A: for (; ; ) {
          if (m = A[r >> 2] | 0, m) {
            a = 0, l = m;
            do {
              if (d = +y[l + 8 >> 3], e = l, l = A[l + 16 >> 2] | 0, v = (l | 0) == 0, o = v ? m : l, f = +y[o + 8 >> 3], +EA(+(d - f)) > 3.141592653589793) {
                HA = 14;
                break;
              }
              a = a + (f - d) * (+y[e >> 3] + +y[o >> 3]);
            } while (!v);
            if ((HA | 0) == 14) {
              HA = 0, a = 0, e = m;
              do
                O = +y[e + 8 >> 3], DA = e + 16 | 0, te = A[DA >> 2] | 0, te = (te | 0) == 0 ? m : te, Z = +y[te + 8 >> 3], a = a + (+y[e >> 3] + +y[te >> 3]) * ((Z < 0 ? Z + 6.283185307179586 : Z) - (O < 0 ? O + 6.283185307179586 : O)), e = A[((e | 0) == 0 ? r : DA) >> 2] | 0;
              while ((e | 0) != 0);
            }
            a > 0 ? (A[jA + (mA << 2) >> 2] = r, mA = mA + 1 | 0, o = iA, e = P) : HA = 19;
          } else
            HA = 19;
          if ((HA | 0) == 19) {
            HA = 0;
            do
              if (n) {
                if (e = n + 8 | 0, A[e >> 2] | 0) {
                  HA = 21;
                  break A;
                }
                if (n = Wt(1, 12) | 0, !n) {
                  HA = 23;
                  break A;
                }
                A[e >> 2] = n, o = n + 4 | 0, l = n, e = P;
              } else if (P) {
                o = vA, l = P + 8 | 0, e = r, n = t;
                break;
              } else if (A[t >> 2] | 0) {
                HA = 27;
                break A;
              } else {
                o = vA, l = t, e = r, n = t;
                break;
              }
            while (!1);
            if (A[l >> 2] = r, A[o >> 2] = r, l = tA + (iA << 5) | 0, v = A[r >> 2] | 0, v) {
              for (m = tA + (iA << 5) + 8 | 0, y[m >> 3] = 17976931348623157e292, P = tA + (iA << 5) + 24 | 0, y[P >> 3] = 17976931348623157e292, y[l >> 3] = -17976931348623157e292, C = tA + (iA << 5) + 16 | 0, y[C >> 3] = -17976931348623157e292, W = 17976931348623157e292, F = -17976931348623157e292, o = 0, T = v, d = 17976931348623157e292, S = 17976931348623157e292, R = -17976931348623157e292, f = -17976931348623157e292; a = +y[T >> 3], O = +y[T + 8 >> 3], T = A[T + 16 >> 2] | 0, M = (T | 0) == 0, Z = +y[(M ? v : T) + 8 >> 3], a < d && (y[m >> 3] = a, d = a), O < S && (y[P >> 3] = O, S = O), a > R ? y[l >> 3] = a : a = R, O > f && (y[C >> 3] = O, f = O), W = O > 0 & O < W ? O : W, F = O < 0 & O > F ? O : F, o = o | +EA(+(O - Z)) > 3.141592653589793, !M; )
                R = a;
              o && (y[C >> 3] = F, y[P >> 3] = W);
            } else
              A[l >> 2] = 0, A[l + 4 >> 2] = 0, A[l + 8 >> 2] = 0, A[l + 12 >> 2] = 0, A[l + 16 >> 2] = 0, A[l + 20 >> 2] = 0, A[l + 24 >> 2] = 0, A[l + 28 >> 2] = 0;
            o = iA + 1 | 0;
          }
          if (DA = r + 8 | 0, r = A[DA >> 2] | 0, A[DA >> 2] = 0, r)
            iA = o, P = e;
          else {
            HA = 45;
            break;
          }
        }
        if ((HA | 0) == 21)
          kA(27213, 27235, 35, 27247);
        else if ((HA | 0) == 23)
          kA(27267, 27235, 37, 27247);
        else if ((HA | 0) == 27)
          kA(27310, 27235, 61, 27333);
        else if ((HA | 0) == 45) {
          A: do
            if ((mA | 0) > 0) {
              for (DA = (o | 0) == 0, FA = o << 2, te = (t | 0) == 0, RA = 0, e = 0; ; ) {
                if (dA = A[jA + (RA << 2) >> 2] | 0, DA)
                  HA = 73;
                else {
                  if (iA = $i(FA) | 0, !iA) {
                    HA = 50;
                    break;
                  }
                  if (vA = $i(FA) | 0, !vA) {
                    HA = 52;
                    break;
                  }
                  e: do
                    if (te)
                      n = 0;
                    else {
                      for (o = 0, n = 0, l = t; r = tA + (o << 5) | 0, eo(A[l >> 2] | 0, r, A[dA >> 2] | 0) | 0 ? (A[iA + (n << 2) >> 2] = l, A[vA + (n << 2) >> 2] = r, M = n + 1 | 0) : M = n, l = A[l + 8 >> 2] | 0, l; )
                        o = o + 1 | 0, n = M;
                      if ((M | 0) > 0)
                        if (r = A[iA >> 2] | 0, (M | 0) == 1)
                          n = r;
                        else
                          for (C = 0, T = -1, n = r, P = r; ; ) {
                            for (v = A[P >> 2] | 0, r = 0, l = 0; o = A[A[iA + (l << 2) >> 2] >> 2] | 0, (o | 0) == (v | 0) ? m = r : m = r + ((eo(o, A[vA + (l << 2) >> 2] | 0, A[v >> 2] | 0) | 0) & 1) | 0, l = l + 1 | 0, (l | 0) != (M | 0); )
                              r = m;
                            if (o = (m | 0) > (T | 0), n = o ? P : n, r = C + 1 | 0, (r | 0) == (M | 0))
                              break e;
                            C = r, T = o ? m : T, P = A[iA + (r << 2) >> 2] | 0;
                          }
                      else
                        n = 0;
                    }
                  while (!1);
                  if (xA(iA), xA(vA), n) {
                    if (o = n + 4 | 0, r = A[o >> 2] | 0, r)
                      n = r + 8 | 0;
                    else if (A[n >> 2] | 0) {
                      HA = 70;
                      break;
                    }
                    A[n >> 2] = dA, A[o >> 2] = dA;
                  } else
                    HA = 73;
                }
                if ((HA | 0) == 73) {
                  if (HA = 0, e = A[dA >> 2] | 0, e | 0)
                    do
                      vA = e, e = A[e + 16 >> 2] | 0, xA(vA);
                    while ((e | 0) != 0);
                  xA(dA), e = 1;
                }
                if (RA = RA + 1 | 0, (RA | 0) >= (mA | 0)) {
                  be = e;
                  break A;
                }
              }
              (HA | 0) == 50 ? kA(27452, 27235, 249, 27471) : (HA | 0) == 52 ? kA(27490, 27235, 252, 27471) : (HA | 0) == 70 && kA(27310, 27235, 61, 27333);
            } else
              be = 0;
          while (!1);
          return xA(jA), xA(tA), HA = be, HA | 0;
        }
        return 0;
      }
      function eo(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (!(fr(e, n) | 0) || (e = Gr(e) | 0, r = +y[n >> 3], o = +y[n + 8 >> 3], o = e & o < 0 ? o + 6.283185307179586 : o, t = A[t >> 2] | 0, !t))
          return t = 0, t | 0;
        if (e) {
          e = 0, v = o, n = t;
          A: for (; ; ) {
            for (; l = +y[n >> 3], o = +y[n + 8 >> 3], n = n + 16 | 0, m = A[n >> 2] | 0, m = (m | 0) == 0 ? t : m, a = +y[m >> 3], f = +y[m + 8 >> 3], l > a ? (d = l, l = f) : (d = a, a = l, l = o, o = f), r = r == a | r == d ? r + 2220446049250313e-31 : r, !!(r < a | r > d); )
              if (n = A[n >> 2] | 0, !n) {
                n = 22;
                break A;
              }
            if (f = l < 0 ? l + 6.283185307179586 : l, l = o < 0 ? o + 6.283185307179586 : o, v = f == v | l == v ? v + -2220446049250313e-31 : v, d = f + (l - f) * ((r - a) / (d - a)), (d < 0 ? d + 6.283185307179586 : d) > v && (e = e ^ 1), n = A[n >> 2] | 0, !n) {
              n = 22;
              break;
            }
          }
          if ((n | 0) == 22)
            return e | 0;
        } else {
          e = 0, v = o, n = t;
          A: for (; ; ) {
            for (; l = +y[n >> 3], o = +y[n + 8 >> 3], n = n + 16 | 0, m = A[n >> 2] | 0, m = (m | 0) == 0 ? t : m, a = +y[m >> 3], f = +y[m + 8 >> 3], l > a ? (d = l, l = f) : (d = a, a = l, l = o, o = f), r = r == a | r == d ? r + 2220446049250313e-31 : r, !!(r < a | r > d); )
              if (n = A[n >> 2] | 0, !n) {
                n = 22;
                break A;
              }
            if (v = l == v | o == v ? v + -2220446049250313e-31 : v, l + (o - l) * ((r - a) / (d - a)) > v && (e = e ^ 1), n = A[n >> 2] | 0, !n) {
              n = 22;
              break;
            }
          }
          if ((n | 0) == 22)
            return e | 0;
        }
        return 0;
      }
      function gi(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0;
        if (F = b, b = b + 32 | 0, W = F + 16 | 0, R = F, a = X(t | 0, e | 0, 52) | 0, E() | 0, a = a & 15, T = X(n | 0, r | 0, 52) | 0, E() | 0, (a | 0) != (T & 15 | 0))
          return W = 12, b = F, W | 0;
        if (v = X(t | 0, e | 0, 45) | 0, E() | 0, v = v & 127, m = X(n | 0, r | 0, 45) | 0, E() | 0, m = m & 127, v >>> 0 > 121 | m >>> 0 > 121)
          return W = 5, b = F, W | 0;
        if (T = (v | 0) != (m | 0), T) {
          if (f = me(v, m) | 0, (f | 0) == 7)
            return W = 1, b = F, W | 0;
          d = me(m, v) | 0, (d | 0) == 7 ? kA(27514, 27538, 161, 27548) : (M = f, l = d);
        } else
          M = 0, l = 0;
        P = ye(v) | 0, C = ye(m) | 0, A[W >> 2] = 0, A[W + 4 >> 2] = 0, A[W + 8 >> 2] = 0, A[W + 12 >> 2] = 0;
        do
          if (M) {
            if (m = A[4272 + (v * 28 | 0) + (M << 2) >> 2] | 0, f = (m | 0) > 0, C)
              if (f) {
                v = 0, d = n, f = r;
                do
                  d = Us(d, f) | 0, f = E() | 0, l = Di(l) | 0, (l | 0) == 1 && (l = Di(1) | 0), v = v + 1 | 0;
                while ((v | 0) != (m | 0));
                m = l, v = d, d = f;
              } else
                m = l, v = n, d = r;
            else if (f) {
              v = 0, d = n, f = r;
              do
                d = si(d, f) | 0, f = E() | 0, l = Di(l) | 0, v = v + 1 | 0;
              while ((v | 0) != (m | 0));
              m = l, v = d, d = f;
            } else
              m = l, v = n, d = r;
            if (Fn(v, d, W) | 0, T || kA(27563, 27538, 191, 27548), f = (P | 0) != 0, l = (C | 0) != 0, f & l && kA(27590, 27538, 192, 27548), f) {
              if (l = Qe(t, e) | 0, (l | 0) == 7) {
                a = 5;
                break;
              }
              if (q[22e3 + (l * 7 | 0) + M >> 0] | 0) {
                a = 1;
                break;
              }
              d = A[21168 + (l * 28 | 0) + (M << 2) >> 2] | 0, v = d;
            } else if (l) {
              if (l = Qe(v, d) | 0, (l | 0) == 7) {
                a = 5;
                break;
              }
              if (q[22e3 + (l * 7 | 0) + m >> 0] | 0) {
                a = 1;
                break;
              }
              v = 0, d = A[21168 + (m * 28 | 0) + (l << 2) >> 2] | 0;
            } else
              v = 0, d = 0;
            if ((v | d | 0) < 0)
              a = 5;
            else {
              if ((d | 0) > 0) {
                f = W + 4 | 0, l = 0;
                do
                  Dt(f), l = l + 1 | 0;
                while ((l | 0) != (d | 0));
              }
              if (A[R >> 2] = 0, A[R + 4 >> 2] = 0, A[R + 8 >> 2] = 0, Vr(R, M), a | 0)
                for (; It(a) | 0 ? Wr(R) : bn(R), (a | 0) > 1; )
                  a = a + -1 | 0;
              if ((v | 0) > 0) {
                a = 0;
                do
                  Dt(R), a = a + 1 | 0;
                while ((a | 0) != (v | 0));
              }
              S = W + 4 | 0, mt(S, R, S), rt(S), S = 51;
            }
          } else if (Fn(n, r, W) | 0, (P | 0) != 0 & (C | 0) != 0)
            if ((m | 0) != (v | 0) && kA(27621, 27538, 261, 27548), l = Qe(t, e) | 0, a = Qe(n, r) | 0, (l | 0) == 7 | (a | 0) == 7)
              a = 5;
            else if (q[22e3 + (l * 7 | 0) + a >> 0] | 0)
              a = 1;
            else if (l = A[21168 + (l * 28 | 0) + (a << 2) >> 2] | 0, (l | 0) > 0) {
              f = W + 4 | 0, a = 0;
              do
                Dt(f), a = a + 1 | 0;
              while ((a | 0) != (l | 0));
              S = 51;
            } else
              S = 51;
          else
            S = 51;
        while (!1);
        return (S | 0) == 51 && (a = W + 4 | 0, A[o >> 2] = A[a >> 2], A[o + 4 >> 2] = A[a + 4 >> 2], A[o + 8 >> 2] = A[a + 8 >> 2], a = 0), W = a, b = F, W | 0;
      }
      function to(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0;
        if (S = b, b = b + 48 | 0, v = S + 36 | 0, l = S + 24 | 0, f = S + 12 | 0, d = S, o = X(t | 0, e | 0, 52) | 0, E() | 0, o = o & 15, C = X(t | 0, e | 0, 45) | 0, E() | 0, C = C & 127, C >>> 0 > 121)
          return r = 5, b = S, r | 0;
        if (m = ye(C) | 0, eA(o | 0, 0, 52) | 0, R = E() | 0 | 134225919, a = r, A[a >> 2] = -1, A[a + 4 >> 2] = R, !o)
          return o = hr(n) | 0, (o | 0) == 7 || (o = Ft(C, o) | 0, (o | 0) == 127) ? (R = 1, b = S, R | 0) : (T = eA(o | 0, 0, 45) | 0, M = E() | 0, C = r, M = A[C + 4 >> 2] & -1040385 | M, R = r, A[R >> 2] = A[C >> 2] | T, A[R + 4 >> 2] = M, R = 0, b = S, R | 0);
        for (A[v >> 2] = A[n >> 2], A[v + 4 >> 2] = A[n + 4 >> 2], A[v + 8 >> 2] = A[n + 8 >> 2], n = o; ; ) {
          if (a = n, n = n + -1 | 0, A[l >> 2] = A[v >> 2], A[l + 4 >> 2] = A[v + 4 >> 2], A[l + 8 >> 2] = A[v + 8 >> 2], It(a) | 0) {
            if (o = Ts(v) | 0, o | 0) {
              n = 13;
              break;
            }
            A[f >> 2] = A[v >> 2], A[f + 4 >> 2] = A[v + 4 >> 2], A[f + 8 >> 2] = A[v + 8 >> 2], Wr(f);
          } else {
            if (o = F0(v) | 0, o | 0) {
              n = 13;
              break;
            }
            A[f >> 2] = A[v >> 2], A[f + 4 >> 2] = A[v + 4 >> 2], A[f + 8 >> 2] = A[v + 8 >> 2], bn(f);
          }
          if (Mt(l, f, d), rt(d), o = r, F = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, Z = (15 - a | 0) * 3 | 0, W = eA(7, 0, Z | 0) | 0, o = o & ~(E() | 0), Z = eA(hr(d) | 0, 0, Z | 0) | 0, o = E() | 0 | o, R = r, A[R >> 2] = Z | F & ~W, A[R + 4 >> 2] = o, (a | 0) <= 1) {
            n = 14;
            break;
          }
        }
        A: do
          if ((n | 0) != 13 && (n | 0) == 14)
            if ((A[v >> 2] | 0) <= 1 && (A[v + 4 >> 2] | 0) <= 1 && (A[v + 8 >> 2] | 0) <= 1) {
              n = hr(v) | 0, o = Ft(C, n) | 0, (o | 0) == 127 ? d = 0 : d = ye(o) | 0;
              e: do
                if (n) {
                  if (m) {
                    if (o = Qe(t, e) | 0, (o | 0) == 7) {
                      o = 5;
                      break A;
                    }
                    if (a = A[21376 + (o * 28 | 0) + (n << 2) >> 2] | 0, (a | 0) > 0) {
                      o = n, n = 0;
                      do
                        o = xn(o) | 0, n = n + 1 | 0;
                      while ((n | 0) != (a | 0));
                    } else
                      o = n;
                    if ((o | 0) == 1) {
                      o = 9;
                      break A;
                    }
                    n = Ft(C, o) | 0, (n | 0) == 127 && kA(27648, 27538, 411, 27678), ye(n) | 0 ? kA(27693, 27538, 412, 27678) : (M = n, T = a, P = o);
                  } else
                    M = o, T = 0, P = n;
                  if (f = A[4272 + (C * 28 | 0) + (P << 2) >> 2] | 0, (f | 0) <= -1 && kA(27724, 27538, 419, 27678), !d) {
                    if ((T | 0) < 0) {
                      o = 5;
                      break A;
                    }
                    if (T | 0) {
                      a = r, o = 0, n = A[a >> 2] | 0, a = A[a + 4 >> 2] | 0;
                      do
                        n = Ut(n, a) | 0, a = E() | 0, Z = r, A[Z >> 2] = n, A[Z + 4 >> 2] = a, o = o + 1 | 0;
                      while ((o | 0) < (T | 0));
                    }
                    if ((f | 0) <= 0) {
                      o = M, n = 58;
                      break;
                    }
                    for (a = r, o = 0, n = A[a >> 2] | 0, a = A[a + 4 >> 2] | 0; ; )
                      if (n = Ut(n, a) | 0, a = E() | 0, Z = r, A[Z >> 2] = n, A[Z + 4 >> 2] = a, o = o + 1 | 0, (o | 0) == (f | 0)) {
                        o = M, n = 58;
                        break e;
                      }
                  }
                  if (l = me(M, C) | 0, (l | 0) == 7 && kA(27514, 27538, 428, 27678), o = r, n = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, (f | 0) > 0) {
                    a = 0;
                    do
                      n = Ut(n, o) | 0, o = E() | 0, Z = r, A[Z >> 2] = n, A[Z + 4 >> 2] = o, a = a + 1 | 0;
                    while ((a | 0) != (f | 0));
                  }
                  if (o = Qe(n, o) | 0, (o | 0) == 7 && kA(27795, 27538, 440, 27678), n = lr(M) | 0, n = A[(n ? 21792 : 21584) + (l * 28 | 0) + (o << 2) >> 2] | 0, (n | 0) < 0 && kA(27795, 27538, 454, 27678), !n)
                    o = M, n = 58;
                  else {
                    l = r, o = 0, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0;
                    do
                      a = X0(a, l) | 0, l = E() | 0, Z = r, A[Z >> 2] = a, A[Z + 4 >> 2] = l, o = o + 1 | 0;
                    while ((o | 0) < (n | 0));
                    o = M, n = 58;
                  }
                } else if ((m | 0) != 0 & (d | 0) != 0) {
                  if (n = Qe(t, e) | 0, a = r, a = Qe(A[a >> 2] | 0, A[a + 4 >> 2] | 0) | 0, (n | 0) == 7 | (a | 0) == 7) {
                    o = 5;
                    break A;
                  }
                  if (a = A[21376 + (n * 28 | 0) + (a << 2) >> 2] | 0, (a | 0) < 0) {
                    o = 5;
                    break A;
                  }
                  if (!a)
                    n = 59;
                  else {
                    f = r, n = 0, l = A[f >> 2] | 0, f = A[f + 4 >> 2] | 0;
                    do
                      l = Ut(l, f) | 0, f = E() | 0, Z = r, A[Z >> 2] = l, A[Z + 4 >> 2] = f, n = n + 1 | 0;
                    while ((n | 0) < (a | 0));
                    n = 58;
                  }
                } else
                  n = 58;
              while (!1);
              if ((n | 0) == 58 && d && (n = 59), (n | 0) == 59 && (Z = r, (Qe(A[Z >> 2] | 0, A[Z + 4 >> 2] | 0) | 0) == 1)) {
                o = 9;
                break;
              }
              Z = r, W = A[Z >> 2] | 0, Z = A[Z + 4 >> 2] & -1040385, F = eA(o | 0, 0, 45) | 0, Z = Z | (E() | 0), o = r, A[o >> 2] = W | F, A[o + 4 >> 2] = Z, o = 0;
            } else
              o = 1;
        while (!1);
        return Z = o, b = S, Z | 0;
      }
      function jo(t, e, n, r, o, a) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0;
        var l = 0, f = 0;
        return f = b, b = b + 16 | 0, l = f, o ? t = 15 : (t = gi(t, e, n, r, l) | 0, t || (U0(l, a), t = 0)), b = f, t | 0;
      }
      function Yo(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0;
        return l = b, b = b + 16 | 0, a = l, r ? n = 15 : (n = Ds(n, a) | 0, n || (n = to(t, e, a, o) | 0)), b = l, n | 0;
      }
      function Js(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0;
        return d = b, b = b + 32 | 0, l = d + 12 | 0, f = d, a = gi(t, e, t, e, l) | 0, a | 0 ? (f = a, b = d, f | 0) : (t = gi(t, e, n, r, f) | 0, t | 0 ? (f = t, b = d, f | 0) : (l = jr(l, f) | 0, f = o, A[f >> 2] = l, A[f + 4 >> 2] = ((l | 0) < 0) << 31 >> 31, f = 0, b = d, f | 0));
      }
      function qo(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0;
        return d = b, b = b + 32 | 0, l = d + 12 | 0, f = d, a = gi(t, e, t, e, l) | 0, !a && (a = gi(t, e, n, r, f) | 0, !a) ? (r = jr(l, f) | 0, r = yA(r | 0, ((r | 0) < 0) << 31 >> 31 | 0, 1, 0) | 0, l = E() | 0, f = o, A[f >> 2] = r, A[f + 4 >> 2] = l, f = 0, b = d, f | 0) : (f = a, b = d, f | 0);
      }
      function Ko(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0;
        if (dA = b, b = b + 48 | 0, iA = dA + 24 | 0, l = dA + 12 | 0, vA = dA, a = gi(t, e, t, e, iA) | 0, !a && (a = gi(t, e, n, r, l) | 0, !a)) {
          Z = jr(iA, l) | 0, O = ((Z | 0) < 0) << 31 >> 31, A[iA >> 2] = 0, A[iA + 4 >> 2] = 0, A[iA + 8 >> 2] = 0, A[l >> 2] = 0, A[l + 4 >> 2] = 0, A[l + 8 >> 2] = 0, gi(t, e, t, e, iA) | 0 && kA(27795, 27538, 692, 27747), gi(t, e, n, r, l) | 0 && kA(27795, 27538, 697, 27747), G0(iA), G0(l), m = (Z | 0) == 0 ? 0 : 1 / +(Z | 0), n = A[iA >> 2] | 0, S = m * +((A[l >> 2] | 0) - n | 0), R = iA + 4 | 0, r = A[R >> 2] | 0, W = m * +((A[l + 4 >> 2] | 0) - r | 0), F = iA + 8 | 0, a = A[F >> 2] | 0, m = m * +((A[l + 8 >> 2] | 0) - a | 0), A[vA >> 2] = n, P = vA + 4 | 0, A[P >> 2] = r, C = vA + 8 | 0, A[C >> 2] = a;
          A: do
            if ((Z | 0) < 0)
              a = 0;
            else
              for (T = 0, M = 0; ; ) {
                d = +(M >>> 0) + 4294967296 * +(T | 0), RA = S * d + +(n | 0), f = W * d + +(r | 0), d = m * d + +(a | 0), n = ~~+As(+RA), l = ~~+As(+f), a = ~~+As(+d), RA = +EA(+(+(n | 0) - RA)), f = +EA(+(+(l | 0) - f)), d = +EA(+(+(a | 0) - d));
                do
                  if (RA > f & RA > d)
                    n = 0 - (l + a) | 0, r = l;
                  else if (v = 0 - n | 0, f > d) {
                    r = v - a | 0;
                    break;
                  } else {
                    r = l, a = v - l | 0;
                    break;
                  }
                while (!1);
                if (A[vA >> 2] = n, A[P >> 2] = r, A[C >> 2] = a, So(vA), a = to(t, e, vA, o + (M << 3) | 0) | 0, a | 0)
                  break A;
                if (!((T | 0) < (O | 0) | (T | 0) == (O | 0) & M >>> 0 < Z >>> 0)) {
                  a = 0;
                  break A;
                }
                n = yA(M | 0, T | 0, 1, 0) | 0, r = E() | 0, T = r, M = n, n = A[iA >> 2] | 0, r = A[R >> 2] | 0, a = A[F >> 2] | 0;
              }
          while (!1);
          return vA = a, b = dA, vA | 0;
        }
        return vA = a, b = dA, vA | 0;
      }
      function Xi(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        if ((n | 0) == 0 & (r | 0) == 0)
          return o = 0, a = 1, OA(o | 0), a | 0;
        a = t, o = e, t = 1, e = 0;
        do
          l = (n & 1 | 0) == 0 & !0, t = ft((l ? 1 : a) | 0, (l ? 0 : o) | 0, t | 0, e | 0) | 0, e = E() | 0, n = Ka(n | 0, r | 0, 1) | 0, r = E() | 0, a = ft(a | 0, o | 0, a | 0, o | 0) | 0, o = E() | 0;
        while (!((n | 0) == 0 & (r | 0) == 0));
        return OA(e | 0), t | 0;
      }
      function i(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        f = b, b = b + 16 | 0, a = f, l = X(t | 0, e | 0, 52) | 0, E() | 0, l = l & 15;
        do
          if (l) {
            if (o = mi(t, e, a) | 0, !o) {
              v = +y[a >> 3], d = 1 / +oe(+v), m = +y[25968 + (l << 3) >> 3], y[n >> 3] = v + m, y[n + 8 >> 3] = v - m, v = +y[a + 8 >> 3], d = m * d, y[n + 16 >> 3] = d + v, y[n + 24 >> 3] = v - d;
              break;
            }
            return l = o, b = f, l | 0;
          } else {
            if (o = X(t | 0, e | 0, 45) | 0, E() | 0, o = o & 127, o >>> 0 > 121)
              return l = 5, b = f, l | 0;
            a = 22064 + (o << 5) | 0, A[n >> 2] = A[a >> 2], A[n + 4 >> 2] = A[a + 4 >> 2], A[n + 8 >> 2] = A[a + 8 >> 2], A[n + 12 >> 2] = A[a + 12 >> 2], A[n + 16 >> 2] = A[a + 16 >> 2], A[n + 20 >> 2] = A[a + 20 >> 2], A[n + 24 >> 2] = A[a + 24 >> 2], A[n + 28 >> 2] = A[a + 28 >> 2];
            break;
          }
        while (!1);
        return Io(n, r ? 1.4 : 1.1), r = 26096 + (l << 3) | 0, (A[r >> 2] | 0) == (t | 0) && (A[r + 4 >> 2] | 0) == (e | 0) && (y[n >> 3] = 1.5707963267948966), l = 26224 + (l << 3) | 0, (A[l >> 2] | 0) == (t | 0) && (A[l + 4 >> 2] | 0) == (e | 0) && (y[n + 8 >> 3] = -1.5707963267948966), +y[n >> 3] != 1.5707963267948966 && +y[n + 8 >> 3] != -1.5707963267948966 ? (l = 0, b = f, l | 0) : (y[n + 16 >> 3] = 3.141592653589793, y[n + 24 >> 3] = -3.141592653589793, l = 0, b = f, l | 0);
      }
      function s(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        v = b, b = b + 48 | 0, l = v + 32 | 0, a = v + 40 | 0, f = v, qi(l, 0, 0, 0), d = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0;
        do
          if (n >>> 0 <= 15) {
            if (o = j(r) | 0, o | 0) {
              r = f, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[f + 8 >> 2] = o, A[f + 12 >> 2] = -1, r = f + 16 | 0, d = f + 29 | 0, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[r + 8 >> 2] = 0, q[r + 12 >> 0] = 0, q[d >> 0] = q[a >> 0] | 0, q[d + 1 >> 0] = q[a + 1 >> 0] | 0, q[d + 2 >> 0] = q[a + 2 >> 0] | 0;
              break;
            }
            if (o = Wt((A[e + 8 >> 2] | 0) + 1 | 0, 32) | 0, o) {
              AA(e, o), m = f, A[m >> 2] = d, A[m + 4 >> 2] = l, A[f + 8 >> 2] = 0, A[f + 12 >> 2] = n, A[f + 16 >> 2] = r, A[f + 20 >> 2] = e, A[f + 24 >> 2] = o, q[f + 28 >> 0] = 0, d = f + 29 | 0, q[d >> 0] = q[a >> 0] | 0, q[d + 1 >> 0] = q[a + 1 >> 0] | 0, q[d + 2 >> 0] = q[a + 2 >> 0] | 0;
              break;
            } else {
              r = f, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[f + 8 >> 2] = 13, A[f + 12 >> 2] = -1, r = f + 16 | 0, d = f + 29 | 0, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[r + 8 >> 2] = 0, q[r + 12 >> 0] = 0, q[d >> 0] = q[a >> 0] | 0, q[d + 1 >> 0] = q[a + 1 >> 0] | 0, q[d + 2 >> 0] = q[a + 2 >> 0] | 0;
              break;
            }
          } else
            d = f, A[d >> 2] = 0, A[d + 4 >> 2] = 0, A[f + 8 >> 2] = 4, A[f + 12 >> 2] = -1, d = f + 16 | 0, m = f + 29 | 0, A[d >> 2] = 0, A[d + 4 >> 2] = 0, A[d + 8 >> 2] = 0, q[d + 12 >> 0] = 0, q[m >> 0] = q[a >> 0] | 0, q[m + 1 >> 0] = q[a + 1 >> 0] | 0, q[m + 2 >> 0] = q[a + 2 >> 0] | 0;
        while (!1);
        u(f), A[t >> 2] = A[f >> 2], A[t + 4 >> 2] = A[f + 4 >> 2], A[t + 8 >> 2] = A[f + 8 >> 2], A[t + 12 >> 2] = A[f + 12 >> 2], A[t + 16 >> 2] = A[f + 16 >> 2], A[t + 20 >> 2] = A[f + 20 >> 2], A[t + 24 >> 2] = A[f + 24 >> 2], A[t + 28 >> 2] = A[f + 28 >> 2], b = v;
      }
      function u(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0;
        if (O = b, b = b + 336 | 0, T = O + 168 | 0, M = O, r = t, n = A[r >> 2] | 0, r = A[r + 4 >> 2] | 0, (n | 0) == 0 & (r | 0) == 0) {
          b = O;
          return;
        }
        if (e = t + 28 | 0, q[e >> 0] | 0 ? (n = _(n, r) | 0, r = E() | 0) : q[e >> 0] = 1, Z = t + 20 | 0, !(A[A[Z >> 2] >> 2] | 0)) {
          e = t + 24 | 0, n = A[e >> 2] | 0, n | 0 && xA(n), F = t, A[F >> 2] = 0, A[F + 4 >> 2] = 0, A[t + 8 >> 2] = 0, A[Z >> 2] = 0, A[t + 12 >> 2] = -1, A[t + 16 >> 2] = 0, A[e >> 2] = 0, b = O;
          return;
        }
        F = t + 16 | 0, e = A[F >> 2] | 0, o = e & 15;
        A: do
          if ((n | 0) == 0 & (r | 0) == 0)
            W = t + 24 | 0;
          else {
            S = t + 12 | 0, P = (o | 0) == 3, m = e & 255, d = (o | 1 | 0) == 3, C = t + 24 | 0, v = (o + -1 | 0) >>> 0 < 3, l = (o | 2 | 0) == 3, f = M + 8 | 0;
            e: for (; ; ) {
              if (a = X(n | 0, r | 0, 52) | 0, E() | 0, a = a & 15, (a | 0) == (A[S >> 2] | 0)) {
                switch (m & 15) {
                  case 0:
                  case 2:
                  case 3: {
                    if (o = mi(n, r, T) | 0, o | 0) {
                      R = 15;
                      break e;
                    }
                    if (hA(A[Z >> 2] | 0, A[C >> 2] | 0, T) | 0) {
                      R = 19;
                      break e;
                    }
                    break;
                  }
                }
                if (d && (o = A[(A[Z >> 2] | 0) + 4 >> 2] | 0, A[T >> 2] = A[o >> 2], A[T + 4 >> 2] = A[o + 4 >> 2], A[T + 8 >> 2] = A[o + 8 >> 2], A[T + 12 >> 2] = A[o + 12 >> 2], fr(26832, T) | 0)) {
                  if (dr(A[(A[Z >> 2] | 0) + 4 >> 2] | 0, a, M) | 0) {
                    R = 25;
                    break;
                  }
                  if (o = M, (A[o >> 2] | 0) == (n | 0) && (A[o + 4 >> 2] | 0) == (r | 0)) {
                    R = 29;
                    break;
                  }
                }
                if (v) {
                  if (o = ai(n, r, T) | 0, o | 0) {
                    R = 32;
                    break;
                  }
                  if (i(n, r, M, 0) | 0) {
                    R = 36;
                    break;
                  }
                  if (l && TA(A[Z >> 2] | 0, A[C >> 2] | 0, T, M) | 0) {
                    R = 42;
                    break;
                  }
                  if (d && lt(A[Z >> 2] | 0, A[C >> 2] | 0, T, M) | 0) {
                    R = 42;
                    break;
                  }
                }
                if (P) {
                  if (e = i(n, r, T, 1) | 0, o = A[C >> 2] | 0, e | 0) {
                    R = 45;
                    break;
                  }
                  if (yn(o, T) | 0) {
                    if (Q0(M, T), ji(T, A[C >> 2] | 0) | 0) {
                      R = 53;
                      break;
                    }
                    if (hA(A[Z >> 2] | 0, A[C >> 2] | 0, f) | 0) {
                      R = 53;
                      break;
                    }
                    if (lt(A[Z >> 2] | 0, A[C >> 2] | 0, M, T) | 0) {
                      R = 53;
                      break;
                    }
                  }
                }
              }
              do
                if ((a | 0) < (A[S >> 2] | 0)) {
                  if (e = i(n, r, T, 1) | 0, o = A[C >> 2] | 0, e | 0) {
                    R = 58;
                    break e;
                  }
                  if (!(yn(o, T) | 0)) {
                    R = 73;
                    break;
                  }
                  if (ji(A[C >> 2] | 0, T) | 0 && (Q0(M, T), TA(A[Z >> 2] | 0, A[C >> 2] | 0, M, T) | 0)) {
                    R = 65;
                    break e;
                  }
                  if (n = Si(n, r, a + 1 | 0, M) | 0, n | 0) {
                    R = 67;
                    break e;
                  }
                  r = M, n = A[r >> 2] | 0, r = A[r + 4 >> 2] | 0;
                } else
                  R = 73;
              while (!1);
              if ((R | 0) == 73 && (R = 0, n = _(n, r) | 0, r = E() | 0), (n | 0) == 0 & (r | 0) == 0) {
                W = C;
                break A;
              }
            }
            switch (R | 0) {
              case 15: {
                e = A[C >> 2] | 0, e | 0 && xA(e), R = t, A[R >> 2] = 0, A[R + 4 >> 2] = 0, A[Z >> 2] = 0, A[S >> 2] = -1, A[F >> 2] = 0, A[C >> 2] = 0, A[t + 8 >> 2] = o, R = 20;
                break;
              }
              case 19: {
                A[t >> 2] = n, A[t + 4 >> 2] = r, R = 20;
                break;
              }
              case 25: {
                kA(27795, 27761, 470, 27772);
                break;
              }
              case 29: {
                A[t >> 2] = n, A[t + 4 >> 2] = r, b = O;
                return;
              }
              case 32: {
                e = A[C >> 2] | 0, e | 0 && xA(e), W = t, A[W >> 2] = 0, A[W + 4 >> 2] = 0, A[Z >> 2] = 0, A[S >> 2] = -1, A[F >> 2] = 0, A[C >> 2] = 0, A[t + 8 >> 2] = o, b = O;
                return;
              }
              case 36: {
                kA(27795, 27761, 493, 27772);
                break;
              }
              case 42: {
                A[t >> 2] = n, A[t + 4 >> 2] = r, b = O;
                return;
              }
              case 45: {
                o | 0 && xA(o), R = t, A[R >> 2] = 0, A[R + 4 >> 2] = 0, A[Z >> 2] = 0, A[S >> 2] = -1, A[F >> 2] = 0, A[C >> 2] = 0, A[t + 8 >> 2] = e, R = 55;
                break;
              }
              case 53: {
                A[t >> 2] = n, A[t + 4 >> 2] = r, R = 55;
                break;
              }
              case 58: {
                o | 0 && xA(o), R = t, A[R >> 2] = 0, A[R + 4 >> 2] = 0, A[Z >> 2] = 0, A[S >> 2] = -1, A[F >> 2] = 0, A[C >> 2] = 0, A[t + 8 >> 2] = e, R = 71;
                break;
              }
              case 65: {
                A[t >> 2] = n, A[t + 4 >> 2] = r, R = 71;
                break;
              }
              case 67: {
                e = A[C >> 2] | 0, e | 0 && xA(e), W = t, A[W >> 2] = 0, A[W + 4 >> 2] = 0, A[Z >> 2] = 0, A[S >> 2] = -1, A[F >> 2] = 0, A[C >> 2] = 0, A[t + 8 >> 2] = n, b = O;
                return;
              }
            }
            if ((R | 0) == 20) {
              b = O;
              return;
            } else if ((R | 0) == 55) {
              b = O;
              return;
            } else if ((R | 0) == 71) {
              b = O;
              return;
            }
          }
        while (!1);
        e = A[W >> 2] | 0, e | 0 && xA(e), R = t, A[R >> 2] = 0, A[R + 4 >> 2] = 0, A[t + 8 >> 2] = 0, A[Z >> 2] = 0, A[t + 12 >> 2] = -1, A[F >> 2] = 0, A[W >> 2] = 0, b = O;
      }
      function _(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0;
        P = b, b = b + 16 | 0, m = P, r = X(t | 0, e | 0, 52) | 0, E() | 0, r = r & 15, n = X(t | 0, e | 0, 45) | 0, E() | 0;
        do
          if (r) {
            for (; n = eA(r + 4095 | 0, 0, 52) | 0, o = E() | 0 | e & -15728641, a = (15 - r | 0) * 3 | 0, l = eA(7, 0, a | 0) | 0, f = E() | 0, n = n | t | l, o = o | f, d = X(t | 0, e | 0, a | 0) | 0, E() | 0, d = d & 7, r = r + -1 | 0, !(d >>> 0 < 6); )
              if (r)
                e = o, t = n;
              else {
                v = 4;
                break;
              }
            if ((v | 0) == 4) {
              n = X(n | 0, o | 0, 45) | 0, E() | 0;
              break;
            }
            return m = (d | 0) == 0 & (pe(n, o) | 0) != 0, m = eA((m ? 2 : 1) + d | 0, 0, a | 0) | 0, v = E() | 0 | e & ~f, m = m | t & ~l, OA(v | 0), b = P, m | 0;
          }
        while (!1);
        return n = n & 127, n >>> 0 > 120 ? (v = 0, m = 0, OA(v | 0), b = P, m | 0) : (qi(m, 0, n + 1 | 0, 0), v = A[m + 4 >> 2] | 0, m = A[m >> 2] | 0, OA(v | 0), b = P, m | 0);
      }
      function g(t, e, n, r, o, a) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0;
        var l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0;
        R = b, b = b + 160 | 0, P = R + 80 | 0, f = R + 64 | 0, C = R + 112 | 0, S = R, s(P, t, e, n), v = P, t0(f, A[v >> 2] | 0, A[v + 4 >> 2] | 0, e), v = f, d = A[v >> 2] | 0, v = A[v + 4 >> 2] | 0, l = A[P + 8 >> 2] | 0, T = C + 4 | 0, A[T >> 2] = A[P >> 2], A[T + 4 >> 2] = A[P + 4 >> 2], A[T + 8 >> 2] = A[P + 8 >> 2], A[T + 12 >> 2] = A[P + 12 >> 2], A[T + 16 >> 2] = A[P + 16 >> 2], A[T + 20 >> 2] = A[P + 20 >> 2], A[T + 24 >> 2] = A[P + 24 >> 2], A[T + 28 >> 2] = A[P + 28 >> 2], T = S, A[T >> 2] = d, A[T + 4 >> 2] = v, T = S + 8 | 0, A[T >> 2] = l, t = S + 12 | 0, e = C, n = t + 36 | 0;
        do
          A[t >> 2] = A[e >> 2], t = t + 4 | 0, e = e + 4 | 0;
        while ((t | 0) < (n | 0));
        if (C = S + 48 | 0, A[C >> 2] = A[f >> 2], A[C + 4 >> 2] = A[f + 4 >> 2], A[C + 8 >> 2] = A[f + 8 >> 2], A[C + 12 >> 2] = A[f + 12 >> 2], (d | 0) == 0 & (v | 0) == 0)
          return S = l, b = R, S | 0;
        n = S + 16 | 0, m = S + 24 | 0, P = S + 28 | 0, l = 0, f = 0, e = d, t = v;
        do {
          if (!((l | 0) < (o | 0) | (l | 0) == (o | 0) & f >>> 0 < r >>> 0)) {
            M = 4;
            break;
          }
          if (v = f, f = yA(f | 0, l | 0, 1, 0) | 0, l = E() | 0, v = a + (v << 3) | 0, A[v >> 2] = e, A[v + 4 >> 2] = t, i0(C), t = C, e = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, (e | 0) == 0 & (t | 0) == 0) {
            if (u(n), e = n, t = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, (t | 0) == 0 & (e | 0) == 0) {
              M = 10;
              break;
            }
            Fo(t, e, A[P >> 2] | 0, C), t = C, e = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0;
          }
          v = S, A[v >> 2] = e, A[v + 4 >> 2] = t;
        } while (!((e | 0) == 0 & (t | 0) == 0));
        return (M | 0) == 4 ? (t = S + 40 | 0, e = A[t >> 2] | 0, e | 0 && xA(e), M = S + 16 | 0, A[M >> 2] = 0, A[M + 4 >> 2] = 0, A[m >> 2] = 0, A[S + 36 >> 2] = 0, A[P >> 2] = -1, A[S + 32 >> 2] = 0, A[t >> 2] = 0, Fo(0, 0, 0, C), A[S >> 2] = 0, A[S + 4 >> 2] = 0, A[T >> 2] = 0, S = 14, b = R, S | 0) : ((M | 0) == 10 && (A[S >> 2] = 0, A[S + 4 >> 2] = 0, A[T >> 2] = A[m >> 2]), S = A[T >> 2] | 0, b = R, S | 0);
      }
      function k(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0;
        if (P = b, b = b + 48 | 0, d = P + 32 | 0, f = P + 40 | 0, v = P, !(A[t >> 2] | 0))
          return m = r, A[m >> 2] = 0, A[m + 4 >> 2] = 0, m = 0, b = P, m | 0;
        qi(d, 0, 0, 0), l = d, o = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0;
        do
          if (e >>> 0 > 15)
            m = v, A[m >> 2] = 0, A[m + 4 >> 2] = 0, A[v + 8 >> 2] = 4, A[v + 12 >> 2] = -1, m = v + 16 | 0, n = v + 29 | 0, A[m >> 2] = 0, A[m + 4 >> 2] = 0, A[m + 8 >> 2] = 0, q[m + 12 >> 0] = 0, q[n >> 0] = q[f >> 0] | 0, q[n + 1 >> 0] = q[f + 1 >> 0] | 0, q[n + 2 >> 0] = q[f + 2 >> 0] | 0, n = 4, m = 9;
          else {
            if (n = j(n) | 0, n | 0) {
              d = v, A[d >> 2] = 0, A[d + 4 >> 2] = 0, A[v + 8 >> 2] = n, A[v + 12 >> 2] = -1, d = v + 16 | 0, m = v + 29 | 0, A[d >> 2] = 0, A[d + 4 >> 2] = 0, A[d + 8 >> 2] = 0, q[d + 12 >> 0] = 0, q[m >> 0] = q[f >> 0] | 0, q[m + 1 >> 0] = q[f + 1 >> 0] | 0, q[m + 2 >> 0] = q[f + 2 >> 0] | 0, m = 9;
              break;
            }
            if (n = Wt((A[t + 8 >> 2] | 0) + 1 | 0, 32) | 0, !n) {
              m = v, A[m >> 2] = 0, A[m + 4 >> 2] = 0, A[v + 8 >> 2] = 13, A[v + 12 >> 2] = -1, m = v + 16 | 0, n = v + 29 | 0, A[m >> 2] = 0, A[m + 4 >> 2] = 0, A[m + 8 >> 2] = 0, q[m + 12 >> 0] = 0, q[n >> 0] = q[f >> 0] | 0, q[n + 1 >> 0] = q[f + 1 >> 0] | 0, q[n + 2 >> 0] = q[f + 2 >> 0] | 0, n = 13, m = 9;
              break;
            }
            AA(t, n), T = v, A[T >> 2] = o, A[T + 4 >> 2] = l, l = v + 8 | 0, A[l >> 2] = 0, A[v + 12 >> 2] = e, A[v + 20 >> 2] = t, A[v + 24 >> 2] = n, q[v + 28 >> 0] = 0, o = v + 29 | 0, q[o >> 0] = q[f >> 0] | 0, q[o + 1 >> 0] = q[f + 1 >> 0] | 0, q[o + 2 >> 0] = q[f + 2 >> 0] | 0, A[v + 16 >> 2] = 3, C = +wn(n), C = C * +O0(n), a = +EA(+ +y[n >> 3]), a = C / +oe(+ +$o(+a, + +EA(+ +y[n + 8 >> 3]))) * 6371.007180918475 * 6371.007180918475, o = v + 12 | 0, n = A[o >> 2] | 0;
            A: do
              if ((n | 0) > 0)
                do {
                  if (Nn(n + -1 | 0, d) | 0, !(a / +y[d >> 3] > 10))
                    break A;
                  T = A[o >> 2] | 0, n = T + -1 | 0, A[o >> 2] = n;
                } while ((T | 0) > 1);
            while (!1);
            if (u(v), o = r, A[o >> 2] = 0, A[o + 4 >> 2] = 0, o = v, n = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, !((n | 0) == 0 & (o | 0) == 0))
              do
                zi(n, o, e, d) | 0, f = d, t = r, f = yA(A[t >> 2] | 0, A[t + 4 >> 2] | 0, A[f >> 2] | 0, A[f + 4 >> 2] | 0) | 0, t = E() | 0, T = r, A[T >> 2] = f, A[T + 4 >> 2] = t, u(v), T = v, n = A[T >> 2] | 0, o = A[T + 4 >> 2] | 0;
              while (!((n | 0) == 0 & (o | 0) == 0));
            n = A[l >> 2] | 0;
          }
        while (!1);
        return T = n, b = P, T | 0;
      }
      function I(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0;
        if (!(fr(e, n) | 0) || (e = Gr(e) | 0, r = +y[n >> 3], o = +y[n + 8 >> 3], o = e & o < 0 ? o + 6.283185307179586 : o, C = A[t >> 2] | 0, (C | 0) <= 0))
          return C = 0, C | 0;
        if (P = A[t + 4 >> 2] | 0, e) {
          e = 0, m = o, n = -1, t = 0;
          A: for (; ; ) {
            for (v = t; l = +y[P + (v << 4) >> 3], o = +y[P + (v << 4) + 8 >> 3], t = (n + 2 | 0) % (C | 0) | 0, a = +y[P + (t << 4) >> 3], f = +y[P + (t << 4) + 8 >> 3], l > a ? (d = l, l = f) : (d = a, a = l, l = o, o = f), r = r == a | r == d ? r + 2220446049250313e-31 : r, !!(r < a | r > d); )
              if (n = v + 1 | 0, (n | 0) >= (C | 0)) {
                n = 22;
                break A;
              } else
                t = v, v = n, n = t;
            if (f = l < 0 ? l + 6.283185307179586 : l, l = o < 0 ? o + 6.283185307179586 : o, m = f == m | l == m ? m + -2220446049250313e-31 : m, d = f + (l - f) * ((r - a) / (d - a)), (d < 0 ? d + 6.283185307179586 : d) > m && (e = e ^ 1), t = v + 1 | 0, (t | 0) >= (C | 0)) {
              n = 22;
              break;
            } else
              n = v;
          }
          if ((n | 0) == 22)
            return e | 0;
        } else {
          e = 0, m = o, n = -1, t = 0;
          A: for (; ; ) {
            for (v = t; l = +y[P + (v << 4) >> 3], o = +y[P + (v << 4) + 8 >> 3], t = (n + 2 | 0) % (C | 0) | 0, a = +y[P + (t << 4) >> 3], f = +y[P + (t << 4) + 8 >> 3], l > a ? (d = l, l = f) : (d = a, a = l, l = o, o = f), r = r == a | r == d ? r + 2220446049250313e-31 : r, !!(r < a | r > d); )
              if (n = v + 1 | 0, (n | 0) >= (C | 0)) {
                n = 22;
                break A;
              } else
                t = v, v = n, n = t;
            if (m = l == m | o == m ? m + -2220446049250313e-31 : m, l + (o - l) * ((r - a) / (d - a)) > m && (e = e ^ 1), t = v + 1 | 0, (t | 0) >= (C | 0)) {
              n = 22;
              break;
            } else
              n = v;
          }
          if ((n | 0) == 22)
            return e | 0;
        }
        return 0;
      }
      function N(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0;
        if (M = A[t >> 2] | 0, !M) {
          A[e >> 2] = 0, A[e + 4 >> 2] = 0, A[e + 8 >> 2] = 0, A[e + 12 >> 2] = 0, A[e + 16 >> 2] = 0, A[e + 20 >> 2] = 0, A[e + 24 >> 2] = 0, A[e + 28 >> 2] = 0;
          return;
        }
        if (S = e + 8 | 0, y[S >> 3] = 17976931348623157e292, R = e + 24 | 0, y[R >> 3] = 17976931348623157e292, y[e >> 3] = -17976931348623157e292, W = e + 16 | 0, y[W >> 3] = -17976931348623157e292, !((M | 0) <= 0)) {
          for (C = A[t + 4 >> 2] | 0, v = 17976931348623157e292, m = -17976931348623157e292, P = 0, t = -1, a = 17976931348623157e292, l = 17976931348623157e292, d = -17976931348623157e292, r = -17976931348623157e292, T = 0; n = +y[C + (T << 4) >> 3], f = +y[C + (T << 4) + 8 >> 3], t = t + 2 | 0, o = +y[C + (((t | 0) == (M | 0) ? 0 : t) << 4) + 8 >> 3], n < a && (y[S >> 3] = n, a = n), f < l && (y[R >> 3] = f, l = f), n > d ? y[e >> 3] = n : n = d, f > r && (y[W >> 3] = f, r = f), v = f > 0 & f < v ? f : v, m = f < 0 & f > m ? f : m, P = P | +EA(+(f - o)) > 3.141592653589793, t = T + 1 | 0, (t | 0) != (M | 0); )
            F = T, d = n, T = t, t = F;
          P && (y[W >> 3] = m, y[R >> 3] = v);
        }
      }
      function j(t) {
        return t = t | 0, (t >>> 0 < 4 ? 0 : 15) | 0;
      }
      function AA(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0;
        if (M = A[t >> 2] | 0, M) {
          if (S = e + 8 | 0, y[S >> 3] = 17976931348623157e292, R = e + 24 | 0, y[R >> 3] = 17976931348623157e292, y[e >> 3] = -17976931348623157e292, W = e + 16 | 0, y[W >> 3] = -17976931348623157e292, (M | 0) > 0) {
            for (o = A[t + 4 >> 2] | 0, C = 17976931348623157e292, T = -17976931348623157e292, r = 0, n = -1, d = 17976931348623157e292, v = 17976931348623157e292, P = -17976931348623157e292, l = -17976931348623157e292, F = 0; a = +y[o + (F << 4) >> 3], m = +y[o + (F << 4) + 8 >> 3], vA = n + 2 | 0, f = +y[o + (((vA | 0) == (M | 0) ? 0 : vA) << 4) + 8 >> 3], a < d && (y[S >> 3] = a, d = a), m < v && (y[R >> 3] = m, v = m), a > P ? y[e >> 3] = a : a = P, m > l && (y[W >> 3] = m, l = m), C = m > 0 & m < C ? m : C, T = m < 0 & m > T ? m : T, r = r | +EA(+(m - f)) > 3.141592653589793, n = F + 1 | 0, (n | 0) != (M | 0); )
              vA = F, P = a, F = n, n = vA;
            r && (y[W >> 3] = T, y[R >> 3] = C);
          }
        } else
          A[e >> 2] = 0, A[e + 4 >> 2] = 0, A[e + 8 >> 2] = 0, A[e + 12 >> 2] = 0, A[e + 16 >> 2] = 0, A[e + 20 >> 2] = 0, A[e + 24 >> 2] = 0, A[e + 28 >> 2] = 0;
        if (vA = t + 8 | 0, n = A[vA >> 2] | 0, !((n | 0) <= 0)) {
          iA = t + 12 | 0, O = 0;
          do
            if (o = A[iA >> 2] | 0, r = O, O = O + 1 | 0, R = e + (O << 5) | 0, W = A[o + (r << 3) >> 2] | 0, W) {
              if (F = e + (O << 5) + 8 | 0, y[F >> 3] = 17976931348623157e292, t = e + (O << 5) + 24 | 0, y[t >> 3] = 17976931348623157e292, y[R >> 3] = -17976931348623157e292, Z = e + (O << 5) + 16 | 0, y[Z >> 3] = -17976931348623157e292, (W | 0) > 0) {
                for (M = A[o + (r << 3) + 4 >> 2] | 0, C = 17976931348623157e292, T = -17976931348623157e292, o = 0, r = -1, S = 0, d = 17976931348623157e292, v = 17976931348623157e292, m = -17976931348623157e292, l = -17976931348623157e292; a = +y[M + (S << 4) >> 3], P = +y[M + (S << 4) + 8 >> 3], r = r + 2 | 0, f = +y[M + (((r | 0) == (W | 0) ? 0 : r) << 4) + 8 >> 3], a < d && (y[F >> 3] = a, d = a), P < v && (y[t >> 3] = P, v = P), a > m ? y[R >> 3] = a : a = m, P > l && (y[Z >> 3] = P, l = P), C = P > 0 & P < C ? P : C, T = P < 0 & P > T ? P : T, o = o | +EA(+(P - f)) > 3.141592653589793, r = S + 1 | 0, (r | 0) != (W | 0); )
                  dA = S, S = r, m = a, r = dA;
                o && (y[Z >> 3] = T, y[t >> 3] = C);
              }
            } else
              A[R >> 2] = 0, A[R + 4 >> 2] = 0, A[R + 8 >> 2] = 0, A[R + 12 >> 2] = 0, A[R + 16 >> 2] = 0, A[R + 20 >> 2] = 0, A[R + 24 >> 2] = 0, A[R + 28 >> 2] = 0, n = A[vA >> 2] | 0;
          while ((O | 0) < (n | 0));
        }
      }
      function hA(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (!(I(t, e, n) | 0))
          return o = 0, o | 0;
        if (o = t + 8 | 0, (A[o >> 2] | 0) <= 0)
          return o = 1, o | 0;
        for (r = t + 12 | 0, t = 0; ; ) {
          if (a = t, t = t + 1 | 0, I((A[r >> 2] | 0) + (a << 3) | 0, e + (t << 5) | 0, n) | 0) {
            t = 0, r = 6;
            break;
          }
          if ((t | 0) >= (A[o >> 2] | 0)) {
            t = 1, r = 6;
            break;
          }
        }
        return (r | 0) == 6 ? t | 0 : 0;
      }
      function TA(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (v = b, b = b + 16 | 0, f = v, l = n + 8 | 0, !(I(t, e, l) | 0))
          return d = 0, b = v, d | 0;
        d = t + 8 | 0;
        A: do
          if ((A[d >> 2] | 0) > 0) {
            for (a = t + 12 | 0, o = 0; ; ) {
              if (m = o, o = o + 1 | 0, I((A[a >> 2] | 0) + (m << 3) | 0, e + (o << 5) | 0, l) | 0) {
                o = 0;
                break;
              }
              if ((o | 0) >= (A[d >> 2] | 0))
                break A;
            }
            return b = v, o | 0;
          }
        while (!1);
        if (VA(t, e, n, r) | 0)
          return m = 0, b = v, m | 0;
        A[f >> 2] = A[n >> 2], A[f + 4 >> 2] = l, o = A[d >> 2] | 0;
        A: do
          if ((o | 0) > 0)
            for (t = t + 12 | 0, l = 0, a = o; ; ) {
              if (o = A[t >> 2] | 0, (A[o + (l << 3) >> 2] | 0) > 0) {
                if (I(f, r, A[o + (l << 3) + 4 >> 2] | 0) | 0) {
                  o = 0;
                  break A;
                }
                if (o = l + 1 | 0, VA((A[t >> 2] | 0) + (l << 3) | 0, e + (o << 5) | 0, n, r) | 0) {
                  o = 0;
                  break A;
                }
                a = A[d >> 2] | 0;
              } else
                o = l + 1 | 0;
              if ((o | 0) < (a | 0))
                l = o;
              else {
                o = 1;
                break;
              }
            }
          else
            o = 1;
        while (!1);
        return m = o, b = v, m | 0;
      }
      function VA(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0, vA = 0, dA = 0, RA = 0;
        if (vA = b, b = b + 176 | 0, F = vA + 172 | 0, o = vA + 168 | 0, Z = vA, !(yn(e, r) | 0))
          return t = 0, b = vA, t | 0;
        if (nt(e, r, F, o), s0(Z | 0, n | 0, 168) | 0, (A[n >> 2] | 0) > 0) {
          e = 0;
          do
            dA = Z + 8 + (e << 4) + 8 | 0, W = +at(+y[dA >> 3], A[o >> 2] | 0), y[dA >> 3] = W, e = e + 1 | 0;
          while ((e | 0) < (A[n >> 2] | 0));
        }
        S = +y[r >> 3], R = +y[r + 8 >> 3], W = +at(+y[r + 16 >> 3], A[o >> 2] | 0), T = +at(+y[r + 24 >> 3], A[o >> 2] | 0);
        A: do
          if ((A[t >> 2] | 0) > 0) {
            if (r = t + 4 | 0, o = A[Z >> 2] | 0, (o | 0) <= 0) {
              for (e = 0; ; )
                if (e = e + 1 | 0, (e | 0) >= (A[t >> 2] | 0)) {
                  e = 0;
                  break A;
                }
            }
            for (n = 0; ; ) {
              if (e = A[r >> 2] | 0, C = +y[e + (n << 4) >> 3], M = +at(+y[e + (n << 4) + 8 >> 3], A[F >> 2] | 0), e = A[r >> 2] | 0, n = n + 1 | 0, dA = (n | 0) % (A[t >> 2] | 0) | 0, a = +y[e + (dA << 4) >> 3], l = +at(+y[e + (dA << 4) + 8 >> 3], A[F >> 2] | 0), !(C >= S) | !(a >= S) && !(C <= R) | !(a <= R) && !(M <= T) | !(l <= T) && !(M >= W) | !(l >= W)) {
                P = a - C, v = l - M, e = 0;
                do
                  if (RA = e, e = e + 1 | 0, dA = (e | 0) == (o | 0) ? 0 : e, a = +y[Z + 8 + (RA << 4) + 8 >> 3], l = +y[Z + 8 + (dA << 4) + 8 >> 3] - a, f = +y[Z + 8 + (RA << 4) >> 3], d = +y[Z + 8 + (dA << 4) >> 3] - f, m = P * l - v * d, m != 0 && (O = M - a, iA = C - f, d = (O * d - l * iA) / m, !(d < 0 | d > 1)) && (m = (P * O - v * iA) / m, m >= 0 & m <= 1)) {
                    e = 1;
                    break A;
                  }
                while ((e | 0) < (o | 0));
              }
              if ((n | 0) >= (A[t >> 2] | 0)) {
                e = 0;
                break;
              }
            }
          } else
            e = 0;
        while (!1);
        return RA = e, b = vA, RA | 0;
      }
      function lt(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        if (VA(t, e, n, r) | 0)
          return a = 1, a | 0;
        if (a = t + 8 | 0, (A[a >> 2] | 0) <= 0)
          return a = 0, a | 0;
        for (o = t + 12 | 0, t = 0; ; ) {
          if (l = t, t = t + 1 | 0, VA((A[o >> 2] | 0) + (l << 3) | 0, e + (t << 5) | 0, n, r) | 0) {
            t = 1, o = 6;
            break;
          }
          if ((t | 0) >= (A[a >> 2] | 0)) {
            t = 0, o = 6;
            break;
          }
        }
        return (o | 0) == 6 ? t | 0 : 0;
      }
      function At() {
        return 8;
      }
      function Gt() {
        return 16;
      }
      function Pt() {
        return 168;
      }
      function Un() {
        return 8;
      }
      function Xs() {
        return 16;
      }
      function $s() {
        return 12;
      }
      function Aa() {
        return 8;
      }
      function Jo(t) {
        return t = t | 0, +(+((A[t >> 2] | 0) >>> 0) + 4294967296 * +(A[t + 4 >> 2] | 0));
      }
      function ea(t) {
        t = t | 0;
        var e = 0, n = 0;
        return n = +y[t >> 3], e = +y[t + 8 >> 3], + +KA(+(n * n + e * e));
      }
      function io(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0;
        v = +y[t >> 3], d = +y[e >> 3] - v, f = +y[t + 8 >> 3], l = +y[e + 8 >> 3] - f, P = +y[n >> 3], a = +y[r >> 3] - P, C = +y[n + 8 >> 3], m = +y[r + 8 >> 3] - C, a = (a * (f - C) - (v - P) * m) / (d * m - l * a), y[o >> 3] = v + d * a, y[o + 8 >> 3] = f + l * a;
      }
      function Ne(t, e) {
        return t = t | 0, e = e | 0, +EA(+(+y[t >> 3] - +y[e >> 3])) < 11920928955078125e-23 ? (e = +EA(+(+y[t + 8 >> 3] - +y[e + 8 >> 3])) < 11920928955078125e-23, e | 0) : (e = 0, e | 0);
      }
      function ze(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0;
        return o = +y[t >> 3] - +y[e >> 3], r = +y[t + 8 >> 3] - +y[e + 8 >> 3], n = +y[t + 16 >> 3] - +y[e + 16 >> 3], +(o * o + r * r + n * n);
      }
      function ta(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0;
        n = +y[t >> 3], r = +oe(+n), n = +ZA(+n), y[e + 16 >> 3] = n, n = +y[t + 8 >> 3], o = r * +oe(+n), y[e >> 3] = o, n = r * +ZA(+n), y[e + 8 >> 3] = n;
      }
      function ia(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (a = b, b = b + 16 | 0, o = a, r = pe(t, e) | 0, (n + -1 | 0) >>> 0 > 5 || (r = (r | 0) != 0, (n | 0) == 1 & r))
          return o = -1, b = a, o | 0;
        do
          if (gr(t, e, o) | 0)
            r = -1;
          else if (r) {
            r = ((A[26352 + (n << 2) >> 2] | 0) + 5 - (A[o >> 2] | 0) | 0) % 5 | 0;
            break;
          } else {
            r = ((A[26384 + (n << 2) >> 2] | 0) + 6 - (A[o >> 2] | 0) | 0) % 6 | 0;
            break;
          }
        while (!1);
        return o = r, b = a, o | 0;
      }
      function gr(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0;
        if (m = b, b = b + 32 | 0, f = m + 16 | 0, d = m, r = Ki(t, e, f) | 0, r | 0)
          return n = r, b = m, n | 0;
        a = Ht(t, e) | 0, v = Qe(t, e) | 0, z0(a, d), r = Bs(a, A[f >> 2] | 0) | 0;
        do
          if (ye(a) | 0) {
            do
              switch (a | 0) {
                case 4: {
                  o = 0;
                  break;
                }
                case 14: {
                  o = 1;
                  break;
                }
                case 24: {
                  o = 2;
                  break;
                }
                case 38: {
                  o = 3;
                  break;
                }
                case 49: {
                  o = 4;
                  break;
                }
                case 58: {
                  o = 5;
                  break;
                }
                case 63: {
                  o = 6;
                  break;
                }
                case 72: {
                  o = 7;
                  break;
                }
                case 83: {
                  o = 8;
                  break;
                }
                case 97: {
                  o = 9;
                  break;
                }
                case 107: {
                  o = 10;
                  break;
                }
                case 117: {
                  o = 11;
                  break;
                }
                default:
                  kA(27795, 27797, 75, 27806);
              }
            while (!1);
            if (l = A[26416 + (o * 24 | 0) + 8 >> 2] | 0, e = A[26416 + (o * 24 | 0) + 16 >> 2] | 0, t = A[f >> 2] | 0, (t | 0) != (A[d >> 2] | 0) && (d = lr(a) | 0, t = A[f >> 2] | 0, d | (t | 0) == (e | 0) && (r = (r + 1 | 0) % 6 | 0)), (v | 0) == 3 & (t | 0) == (e | 0)) {
              r = (r + 5 | 0) % 6 | 0;
              break;
            }
            (v | 0) == 5 & (t | 0) == (l | 0) && (r = (r + 1 | 0) % 6 | 0);
          }
        while (!1);
        return A[n >> 2] = r, n = 0, b = m, n | 0;
      }
      function Et(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0;
        if (Z = b, b = b + 32 | 0, F = Z + 24 | 0, R = Z + 20 | 0, M = Z + 8 | 0, T = Z + 16 | 0, C = Z, d = (pe(t, e) | 0) == 0, d = d ? 6 : 5, m = X(t | 0, e | 0, 52) | 0, E() | 0, m = m & 15, d >>> 0 <= n >>> 0)
          return r = 2, b = Z, r | 0;
        P = (m | 0) == 0, !P && (S = eA(7, 0, (m ^ 15) * 3 | 0) | 0, (S & t | 0) == 0 & ((E() | 0) & e | 0) == 0) ? o = n : a = 4;
        A: do
          if ((a | 0) == 4) {
            if (o = (pe(t, e) | 0) != 0, ((o ? 4 : 5) | 0) < (n | 0) || gr(t, e, F) | 0 || (a = (A[F >> 2] | 0) + n | 0, o ? o = 26704 + (((a | 0) % 5 | 0) << 2) | 0 : o = 26736 + (((a | 0) % 6 | 0) << 2) | 0, S = A[o >> 2] | 0, (S | 0) == 7))
              return r = 1, b = Z, r | 0;
            A[R >> 2] = 0, o = Te(t, e, S, R, M) | 0;
            do
              if (!o) {
                if (f = M, v = A[f >> 2] | 0, f = A[f + 4 >> 2] | 0, l = f >>> 0 < e >>> 0 | (f | 0) == (e | 0) & v >>> 0 < t >>> 0, a = l ? v : t, l = l ? f : e, !P && (P = eA(7, 0, (m ^ 15) * 3 | 0) | 0, (v & P | 0) == 0 & (f & (E() | 0) | 0) == 0))
                  o = n;
                else {
                  if (f = (n + -1 + d | 0) % (d | 0) | 0, o = pe(t, e) | 0, (f | 0) < 0 && kA(27795, 27797, 248, 27822), d = (o | 0) != 0, ((d ? 4 : 5) | 0) < (f | 0) && kA(27795, 27797, 248, 27822), gr(t, e, F) | 0 && kA(27795, 27797, 248, 27822), o = (A[F >> 2] | 0) + f | 0, d ? o = 26704 + (((o | 0) % 5 | 0) << 2) | 0 : o = 26736 + (((o | 0) % 6 | 0) << 2) | 0, f = A[o >> 2] | 0, (f | 0) == 7 && kA(27795, 27797, 248, 27822), A[T >> 2] = 0, o = Te(t, e, f, T, C) | 0, o | 0)
                    break;
                  v = C, d = A[v >> 2] | 0, v = A[v + 4 >> 2] | 0;
                  do
                    if (v >>> 0 < l >>> 0 | (v | 0) == (l | 0) & d >>> 0 < a >>> 0) {
                      if (pe(d, v) | 0 ? a = gn(d, v, t, e) | 0 : a = A[26800 + ((((A[T >> 2] | 0) + (A[26768 + (f << 2) >> 2] | 0) | 0) % 6 | 0) << 2) >> 2] | 0, o = pe(d, v) | 0, (a + -1 | 0) >>> 0 > 5) {
                        o = -1, a = d, l = v;
                        break;
                      }
                      if (o = (o | 0) != 0, (a | 0) == 1 & o) {
                        o = -1, a = d, l = v;
                        break;
                      }
                      do
                        if (gr(d, v, F) | 0)
                          o = -1;
                        else if (o) {
                          o = ((A[26352 + (a << 2) >> 2] | 0) + 5 - (A[F >> 2] | 0) | 0) % 5 | 0;
                          break;
                        } else {
                          o = ((A[26384 + (a << 2) >> 2] | 0) + 6 - (A[F >> 2] | 0) | 0) % 6 | 0;
                          break;
                        }
                      while (!1);
                      a = d, l = v;
                    } else
                      o = n;
                  while (!1);
                  f = M, v = A[f >> 2] | 0, f = A[f + 4 >> 2] | 0;
                }
                if ((a | 0) == (v | 0) & (l | 0) == (f | 0)) {
                  if (d = (pe(v, f) | 0) != 0, d ? t = gn(v, f, t, e) | 0 : t = A[26800 + ((((A[R >> 2] | 0) + (A[26768 + (S << 2) >> 2] | 0) | 0) % 6 | 0) << 2) >> 2] | 0, o = pe(v, f) | 0, (t + -1 | 0) >>> 0 <= 5 && (W = (o | 0) != 0, !((t | 0) == 1 & W)))
                    do
                      if (gr(v, f, F) | 0)
                        o = -1;
                      else if (W) {
                        o = ((A[26352 + (t << 2) >> 2] | 0) + 5 - (A[F >> 2] | 0) | 0) % 5 | 0;
                        break;
                      } else {
                        o = ((A[26384 + (t << 2) >> 2] | 0) + 6 - (A[F >> 2] | 0) | 0) % 6 | 0;
                        break;
                      }
                    while (!1);
                  else
                    o = -1;
                  o = o + 1 | 0, o = (o | 0) == 6 | d & (o | 0) == 5 ? 0 : o;
                }
                e = l, t = a;
                break A;
              }
            while (!1);
            return r = o, b = Z, r | 0;
          }
        while (!1);
        return W = eA(o | 0, 0, 56) | 0, F = E() | 0 | e & -2130706433 | 536870912, A[r >> 2] = W | t, A[r + 4 >> 2] = F, r = 0, b = Z, r | 0;
      }
      function Xo(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        return a = (pe(t, e) | 0) == 0, r = Et(t, e, 0, n) | 0, o = (r | 0) == 0, a ? !o || (r = Et(t, e, 1, n + 8 | 0) | 0, r | 0) || (r = Et(t, e, 2, n + 16 | 0) | 0, r | 0) || (r = Et(t, e, 3, n + 24 | 0) | 0, r | 0) || (r = Et(t, e, 4, n + 32 | 0) | 0, r) ? (a = r, a | 0) : Et(t, e, 5, n + 40 | 0) | 0 : !o || (r = Et(t, e, 1, n + 8 | 0) | 0, r | 0) || (r = Et(t, e, 2, n + 16 | 0) | 0, r | 0) || (r = Et(t, e, 3, n + 24 | 0) | 0, r | 0) || (r = Et(t, e, 4, n + 32 | 0) | 0, r | 0) ? (a = r, a | 0) : (a = n + 40 | 0, A[a >> 2] = 0, A[a + 4 >> 2] = 0, a = 0, a | 0);
      }
      function na(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        return d = b, b = b + 192 | 0, o = d, a = d + 168 | 0, l = X(t | 0, e | 0, 56) | 0, E() | 0, l = l & 7, f = e & -2130706433 | 134217728, r = Ki(t, f, a) | 0, r | 0 ? (f = r, b = d, f | 0) : (e = X(t | 0, e | 0, 52) | 0, E() | 0, e = e & 15, pe(t, f) | 0 ? j0(a, e, l, 1, o) : Y0(a, e, l, 1, o), f = o + 8 | 0, A[n >> 2] = A[f >> 2], A[n + 4 >> 2] = A[f + 4 >> 2], A[n + 8 >> 2] = A[f + 8 >> 2], A[n + 12 >> 2] = A[f + 12 >> 2], f = 0, b = d, f | 0);
      }
      function Ga(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = b, b = b + 16 | 0, n = o, !(!0 & (e & 2013265920 | 0) == 536870912) || (r = e & -2130706433 | 134217728, !(oi(t, r) | 0)) ? (r = 0, b = o, r | 0) : (a = X(t | 0, e | 0, 56) | 0, E() | 0, a = (Et(t, r, a & 7, n) | 0) == 0, r = n, r = a & ((A[r >> 2] | 0) == (t | 0) ? (A[r + 4 >> 2] | 0) == (e | 0) : 0) & 1, b = o, r | 0);
      }
      function Wa(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0;
        (e | 0) > 0 ? (r = Wt(e, 4) | 0, A[t >> 2] = r, r || kA(27835, 27858, 40, 27872)) : A[t >> 2] = 0, A[t + 4 >> 2] = e, A[t + 8 >> 2] = 0, A[t + 12 >> 2] = n;
      }
      function Va(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = t + 4 | 0, a = t + 12 | 0, l = t + 8 | 0;
        A: for (; ; ) {
          for (n = A[o >> 2] | 0, e = 0; ; ) {
            if ((e | 0) >= (n | 0))
              break A;
            if (r = A[t >> 2] | 0, f = A[r + (e << 2) >> 2] | 0, !f)
              e = e + 1 | 0;
            else
              break;
          }
          e = r + (~~(+EA(+(+pt(10, + +(15 - (A[a >> 2] | 0) | 0)) * (+y[f >> 3] + +y[f + 8 >> 3]))) % +(n | 0)) >>> 0 << 2) | 0, n = A[e >> 2] | 0;
          e: do
            if (n | 0) {
              if (r = f + 32 | 0, (n | 0) == (f | 0))
                A[e >> 2] = A[r >> 2];
              else {
                if (n = n + 32 | 0, e = A[n >> 2] | 0, !e)
                  break;
                for (; (e | 0) != (f | 0); )
                  if (n = e + 32 | 0, e = A[n >> 2] | 0, !e)
                    break e;
                A[n >> 2] = A[r >> 2];
              }
              xA(f), A[l >> 2] = (A[l >> 2] | 0) + -1;
            }
          while (!1);
        }
        xA(A[t >> 2] | 0);
      }
      function ja(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0;
        for (r = A[t + 4 >> 2] | 0, n = 0; ; ) {
          if ((n | 0) >= (r | 0)) {
            e = 0, n = 4;
            break;
          }
          if (e = A[(A[t >> 2] | 0) + (n << 2) >> 2] | 0, !e)
            n = n + 1 | 0;
          else {
            n = 4;
            break;
          }
        }
        return (n | 0) == 4 ? e | 0 : 0;
      }
      function Ya(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0;
        if (n = ~~(+EA(+(+pt(10, + +(15 - (A[t + 12 >> 2] | 0) | 0)) * (+y[e >> 3] + +y[e + 8 >> 3]))) % +(A[t + 4 >> 2] | 0)) >>> 0, n = (A[t >> 2] | 0) + (n << 2) | 0, r = A[n >> 2] | 0, !r)
          return a = 1, a | 0;
        a = e + 32 | 0;
        do
          if ((r | 0) != (e | 0)) {
            if (n = A[r + 32 >> 2] | 0, !n)
              return a = 1, a | 0;
            for (o = n; ; ) {
              if ((o | 0) == (e | 0)) {
                o = 8;
                break;
              }
              if (n = A[o + 32 >> 2] | 0, n)
                r = o, o = n;
              else {
                n = 1, o = 10;
                break;
              }
            }
            if ((o | 0) == 8) {
              A[r + 32 >> 2] = A[a >> 2];
              break;
            } else if ((o | 0) == 10)
              return n | 0;
          } else
            A[n >> 2] = A[a >> 2];
        while (!1);
        return xA(e), a = t + 8 | 0, A[a >> 2] = (A[a >> 2] | 0) + -1, a = 0, a | 0;
      }
      function Pu(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        a = $i(40) | 0, a || kA(27888, 27858, 98, 27901), A[a >> 2] = A[e >> 2], A[a + 4 >> 2] = A[e + 4 >> 2], A[a + 8 >> 2] = A[e + 8 >> 2], A[a + 12 >> 2] = A[e + 12 >> 2], o = a + 16 | 0, A[o >> 2] = A[n >> 2], A[o + 4 >> 2] = A[n + 4 >> 2], A[o + 8 >> 2] = A[n + 8 >> 2], A[o + 12 >> 2] = A[n + 12 >> 2], A[a + 32 >> 2] = 0, o = ~~(+EA(+(+pt(10, + +(15 - (A[t + 12 >> 2] | 0) | 0)) * (+y[e >> 3] + +y[e + 8 >> 3]))) % +(A[t + 4 >> 2] | 0)) >>> 0, o = (A[t >> 2] | 0) + (o << 2) | 0, r = A[o >> 2] | 0;
        do
          if (!r)
            A[o >> 2] = a;
          else {
            for (; !(gt(r, e) | 0 && gt(r + 16 | 0, n) | 0); )
              if (o = A[r + 32 >> 2] | 0, r = (o | 0) == 0 ? r : o, !(A[r + 32 >> 2] | 0)) {
                l = 10;
                break;
              }
            if ((l | 0) == 10) {
              A[r + 32 >> 2] = a;
              break;
            }
            return xA(a), l = r, l | 0;
          }
        while (!1);
        return l = t + 8 | 0, A[l >> 2] = (A[l >> 2] | 0) + 1, l = a, l | 0;
      }
      function Eu(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0;
        if (o = ~~(+EA(+(+pt(10, + +(15 - (A[t + 12 >> 2] | 0) | 0)) * (+y[e >> 3] + +y[e + 8 >> 3]))) % +(A[t + 4 >> 2] | 0)) >>> 0, o = A[(A[t >> 2] | 0) + (o << 2) >> 2] | 0, !o)
          return n = 0, n | 0;
        if (!n) {
          for (t = o; ; ) {
            if (gt(t, e) | 0) {
              r = 10;
              break;
            }
            if (t = A[t + 32 >> 2] | 0, !t) {
              t = 0, r = 10;
              break;
            }
          }
          if ((r | 0) == 10)
            return t | 0;
        }
        for (t = o; ; ) {
          if (gt(t, e) | 0 && gt(t + 16 | 0, n) | 0) {
            r = 10;
            break;
          }
          if (t = A[t + 32 >> 2] | 0, !t) {
            t = 0, r = 10;
            break;
          }
        }
        return (r | 0) == 10 ? t | 0 : 0;
      }
      function Bu(t, e) {
        t = t | 0, e = e | 0;
        var n = 0;
        if (n = ~~(+EA(+(+pt(10, + +(15 - (A[t + 12 >> 2] | 0) | 0)) * (+y[e >> 3] + +y[e + 8 >> 3]))) % +(A[t + 4 >> 2] | 0)) >>> 0, t = A[(A[t >> 2] | 0) + (n << 2) >> 2] | 0, !t)
          return n = 0, n | 0;
        for (; ; ) {
          if (gt(t, e) | 0) {
            e = 5;
            break;
          }
          if (t = A[t + 32 >> 2] | 0, !t) {
            t = 0, e = 5;
            break;
          }
        }
        return (e | 0) == 5 ? t | 0 : 0;
      }
      function Cu() {
        return 27920;
      }
      function Gn(t) {
        return t = +t, ~~+Xa(+t) | 0;
      }
      function $i(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0, S = 0, R = 0, W = 0, F = 0, Z = 0, O = 0, iA = 0;
        iA = b, b = b + 16 | 0, C = iA;
        do
          if (t >>> 0 < 245) {
            if (v = t >>> 0 < 11 ? 16 : t + 11 & -8, t = v >>> 3, P = A[6981] | 0, n = P >>> t, n & 3 | 0)
              return e = (n & 1 ^ 1) + t | 0, t = 27964 + (e << 1 << 2) | 0, n = t + 8 | 0, r = A[n >> 2] | 0, o = r + 8 | 0, a = A[o >> 2] | 0, (a | 0) == (t | 0) ? A[6981] = P & ~(1 << e) : (A[a + 12 >> 2] = t, A[n >> 2] = a), O = e << 3, A[r + 4 >> 2] = O | 3, O = r + O + 4 | 0, A[O >> 2] = A[O >> 2] | 1, O = o, b = iA, O | 0;
            if (m = A[6983] | 0, v >>> 0 > m >>> 0) {
              if (n | 0)
                return e = 2 << t, e = n << t & (e | 0 - e), e = (e & 0 - e) + -1 | 0, f = e >>> 12 & 16, e = e >>> f, n = e >>> 5 & 8, e = e >>> n, a = e >>> 2 & 4, e = e >>> a, t = e >>> 1 & 2, e = e >>> t, r = e >>> 1 & 1, r = (n | f | a | t | r) + (e >>> r) | 0, e = 27964 + (r << 1 << 2) | 0, t = e + 8 | 0, a = A[t >> 2] | 0, f = a + 8 | 0, n = A[f >> 2] | 0, (n | 0) == (e | 0) ? (t = P & ~(1 << r), A[6981] = t) : (A[n + 12 >> 2] = e, A[t >> 2] = n, t = P), O = r << 3, l = O - v | 0, A[a + 4 >> 2] = v | 3, o = a + v | 0, A[o + 4 >> 2] = l | 1, A[a + O >> 2] = l, m | 0 && (r = A[6986] | 0, e = m >>> 3, n = 27964 + (e << 1 << 2) | 0, e = 1 << e, t & e ? (t = n + 8 | 0, e = A[t >> 2] | 0) : (A[6981] = t | e, e = n, t = n + 8 | 0), A[t >> 2] = r, A[e + 12 >> 2] = r, A[r + 8 >> 2] = e, A[r + 12 >> 2] = n), A[6983] = l, A[6986] = o, O = f, b = iA, O | 0;
              if (a = A[6982] | 0, a) {
                for (n = (a & 0 - a) + -1 | 0, o = n >>> 12 & 16, n = n >>> o, r = n >>> 5 & 8, n = n >>> r, l = n >>> 2 & 4, n = n >>> l, f = n >>> 1 & 2, n = n >>> f, d = n >>> 1 & 1, d = A[28228 + ((r | o | l | f | d) + (n >>> d) << 2) >> 2] | 0, n = d, f = d, d = (A[d + 4 >> 2] & -8) - v | 0; t = A[n + 16 >> 2] | 0, !(!t && (t = A[n + 20 >> 2] | 0, !t)); )
                  l = (A[t + 4 >> 2] & -8) - v | 0, o = l >>> 0 < d >>> 0, n = t, f = o ? t : f, d = o ? l : d;
                if (l = f + v | 0, l >>> 0 > f >>> 0) {
                  o = A[f + 24 >> 2] | 0, e = A[f + 12 >> 2] | 0;
                  do
                    if ((e | 0) == (f | 0)) {
                      if (t = f + 20 | 0, e = A[t >> 2] | 0, !e && (t = f + 16 | 0, e = A[t >> 2] | 0, !e)) {
                        n = 0;
                        break;
                      }
                      for (; ; )
                        if (r = e + 20 | 0, n = A[r >> 2] | 0, n)
                          e = n, t = r;
                        else if (r = e + 16 | 0, n = A[r >> 2] | 0, n)
                          e = n, t = r;
                        else
                          break;
                      A[t >> 2] = 0, n = e;
                    } else
                      n = A[f + 8 >> 2] | 0, A[n + 12 >> 2] = e, A[e + 8 >> 2] = n, n = e;
                  while (!1);
                  do
                    if (o | 0) {
                      if (e = A[f + 28 >> 2] | 0, t = 28228 + (e << 2) | 0, (f | 0) == (A[t >> 2] | 0)) {
                        if (A[t >> 2] = n, !n) {
                          A[6982] = a & ~(1 << e);
                          break;
                        }
                      } else if (O = o + 16 | 0, A[((A[O >> 2] | 0) == (f | 0) ? O : o + 20 | 0) >> 2] = n, !n)
                        break;
                      A[n + 24 >> 2] = o, e = A[f + 16 >> 2] | 0, e | 0 && (A[n + 16 >> 2] = e, A[e + 24 >> 2] = n), e = A[f + 20 >> 2] | 0, e | 0 && (A[n + 20 >> 2] = e, A[e + 24 >> 2] = n);
                    }
                  while (!1);
                  return d >>> 0 < 16 ? (O = d + v | 0, A[f + 4 >> 2] = O | 3, O = f + O + 4 | 0, A[O >> 2] = A[O >> 2] | 1) : (A[f + 4 >> 2] = v | 3, A[l + 4 >> 2] = d | 1, A[l + d >> 2] = d, m | 0 && (r = A[6986] | 0, e = m >>> 3, n = 27964 + (e << 1 << 2) | 0, e = 1 << e, e & P ? (t = n + 8 | 0, e = A[t >> 2] | 0) : (A[6981] = e | P, e = n, t = n + 8 | 0), A[t >> 2] = r, A[e + 12 >> 2] = r, A[r + 8 >> 2] = e, A[r + 12 >> 2] = n), A[6983] = d, A[6986] = l), O = f + 8 | 0, b = iA, O | 0;
                } else
                  P = v;
              } else
                P = v;
            } else
              P = v;
          } else if (t >>> 0 <= 4294967231)
            if (t = t + 11 | 0, v = t & -8, r = A[6982] | 0, r) {
              o = 0 - v | 0, t = t >>> 8, t ? v >>> 0 > 16777215 ? d = 31 : (P = (t + 1048320 | 0) >>> 16 & 8, S = t << P, f = (S + 520192 | 0) >>> 16 & 4, S = S << f, d = (S + 245760 | 0) >>> 16 & 2, d = 14 - (f | P | d) + (S << d >>> 15) | 0, d = v >>> (d + 7 | 0) & 1 | d << 1) : d = 0, n = A[28228 + (d << 2) >> 2] | 0;
              A: do
                if (!n)
                  n = 0, t = 0, S = 61;
                else
                  for (t = 0, f = v << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0), a = 0; ; ) {
                    if (l = (A[n + 4 >> 2] & -8) - v | 0, l >>> 0 < o >>> 0)
                      if (l)
                        t = n, o = l;
                      else {
                        t = n, o = 0, S = 65;
                        break A;
                      }
                    if (S = A[n + 20 >> 2] | 0, n = A[n + 16 + (f >>> 31 << 2) >> 2] | 0, a = (S | 0) == 0 | (S | 0) == (n | 0) ? a : S, n)
                      f = f << 1;
                    else {
                      n = a, S = 61;
                      break;
                    }
                  }
              while (!1);
              if ((S | 0) == 61) {
                if ((n | 0) == 0 & (t | 0) == 0) {
                  if (t = 2 << d, t = (t | 0 - t) & r, !t) {
                    P = v;
                    break;
                  }
                  P = (t & 0 - t) + -1 | 0, l = P >>> 12 & 16, P = P >>> l, a = P >>> 5 & 8, P = P >>> a, f = P >>> 2 & 4, P = P >>> f, d = P >>> 1 & 2, P = P >>> d, n = P >>> 1 & 1, t = 0, n = A[28228 + ((a | l | f | d | n) + (P >>> n) << 2) >> 2] | 0;
                }
                n ? S = 65 : (f = t, l = o);
              }
              if ((S | 0) == 65)
                for (a = n; ; )
                  if (P = (A[a + 4 >> 2] & -8) - v | 0, n = P >>> 0 < o >>> 0, o = n ? P : o, t = n ? a : t, n = A[a + 16 >> 2] | 0, n || (n = A[a + 20 >> 2] | 0), n)
                    a = n;
                  else {
                    f = t, l = o;
                    break;
                  }
              if ((f | 0) != 0 && l >>> 0 < ((A[6983] | 0) - v | 0) >>> 0 && (m = f + v | 0, m >>> 0 > f >>> 0)) {
                a = A[f + 24 >> 2] | 0, e = A[f + 12 >> 2] | 0;
                do
                  if ((e | 0) == (f | 0)) {
                    if (t = f + 20 | 0, e = A[t >> 2] | 0, !e && (t = f + 16 | 0, e = A[t >> 2] | 0, !e)) {
                      e = 0;
                      break;
                    }
                    for (; ; )
                      if (o = e + 20 | 0, n = A[o >> 2] | 0, n)
                        e = n, t = o;
                      else if (o = e + 16 | 0, n = A[o >> 2] | 0, n)
                        e = n, t = o;
                      else
                        break;
                    A[t >> 2] = 0;
                  } else
                    O = A[f + 8 >> 2] | 0, A[O + 12 >> 2] = e, A[e + 8 >> 2] = O;
                while (!1);
                do
                  if (a) {
                    if (t = A[f + 28 >> 2] | 0, n = 28228 + (t << 2) | 0, (f | 0) == (A[n >> 2] | 0)) {
                      if (A[n >> 2] = e, !e) {
                        r = r & ~(1 << t), A[6982] = r;
                        break;
                      }
                    } else if (O = a + 16 | 0, A[((A[O >> 2] | 0) == (f | 0) ? O : a + 20 | 0) >> 2] = e, !e)
                      break;
                    A[e + 24 >> 2] = a, t = A[f + 16 >> 2] | 0, t | 0 && (A[e + 16 >> 2] = t, A[t + 24 >> 2] = e), t = A[f + 20 >> 2] | 0, t && (A[e + 20 >> 2] = t, A[t + 24 >> 2] = e);
                  }
                while (!1);
                A: do
                  if (l >>> 0 < 16)
                    O = l + v | 0, A[f + 4 >> 2] = O | 3, O = f + O + 4 | 0, A[O >> 2] = A[O >> 2] | 1;
                  else {
                    if (A[f + 4 >> 2] = v | 3, A[m + 4 >> 2] = l | 1, A[m + l >> 2] = l, e = l >>> 3, l >>> 0 < 256) {
                      n = 27964 + (e << 1 << 2) | 0, t = A[6981] | 0, e = 1 << e, t & e ? (t = n + 8 | 0, e = A[t >> 2] | 0) : (A[6981] = t | e, e = n, t = n + 8 | 0), A[t >> 2] = m, A[e + 12 >> 2] = m, A[m + 8 >> 2] = e, A[m + 12 >> 2] = n;
                      break;
                    }
                    if (e = l >>> 8, e ? l >>> 0 > 16777215 ? n = 31 : (Z = (e + 1048320 | 0) >>> 16 & 8, O = e << Z, F = (O + 520192 | 0) >>> 16 & 4, O = O << F, n = (O + 245760 | 0) >>> 16 & 2, n = 14 - (F | Z | n) + (O << n >>> 15) | 0, n = l >>> (n + 7 | 0) & 1 | n << 1) : n = 0, e = 28228 + (n << 2) | 0, A[m + 28 >> 2] = n, t = m + 16 | 0, A[t + 4 >> 2] = 0, A[t >> 2] = 0, t = 1 << n, !(r & t)) {
                      A[6982] = r | t, A[e >> 2] = m, A[m + 24 >> 2] = e, A[m + 12 >> 2] = m, A[m + 8 >> 2] = m;
                      break;
                    }
                    e = A[e >> 2] | 0;
                    e: do
                      if ((A[e + 4 >> 2] & -8 | 0) != (l | 0)) {
                        for (r = l << ((n | 0) == 31 ? 0 : 25 - (n >>> 1) | 0); n = e + 16 + (r >>> 31 << 2) | 0, t = A[n >> 2] | 0, !!t; )
                          if ((A[t + 4 >> 2] & -8 | 0) == (l | 0)) {
                            e = t;
                            break e;
                          } else
                            r = r << 1, e = t;
                        A[n >> 2] = m, A[m + 24 >> 2] = e, A[m + 12 >> 2] = m, A[m + 8 >> 2] = m;
                        break A;
                      }
                    while (!1);
                    Z = e + 8 | 0, O = A[Z >> 2] | 0, A[O + 12 >> 2] = m, A[Z >> 2] = m, A[m + 8 >> 2] = O, A[m + 12 >> 2] = e, A[m + 24 >> 2] = 0;
                  }
                while (!1);
                return O = f + 8 | 0, b = iA, O | 0;
              } else
                P = v;
            } else
              P = v;
          else
            P = -1;
        while (!1);
        if (n = A[6983] | 0, n >>> 0 >= P >>> 0)
          return e = n - P | 0, t = A[6986] | 0, e >>> 0 > 15 ? (O = t + P | 0, A[6986] = O, A[6983] = e, A[O + 4 >> 2] = e | 1, A[t + n >> 2] = e, A[t + 4 >> 2] = P | 3) : (A[6983] = 0, A[6986] = 0, A[t + 4 >> 2] = n | 3, O = t + n + 4 | 0, A[O >> 2] = A[O >> 2] | 1), O = t + 8 | 0, b = iA, O | 0;
        if (l = A[6984] | 0, l >>> 0 > P >>> 0)
          return F = l - P | 0, A[6984] = F, O = A[6987] | 0, Z = O + P | 0, A[6987] = Z, A[Z + 4 >> 2] = F | 1, A[O + 4 >> 2] = P | 3, O = O + 8 | 0, b = iA, O | 0;
        if (A[7099] | 0 ? t = A[7101] | 0 : (A[7101] = 4096, A[7100] = 4096, A[7102] = -1, A[7103] = -1, A[7104] = 0, A[7092] = 0, A[7099] = C & -16 ^ 1431655768, t = 4096), f = P + 48 | 0, d = P + 47 | 0, a = t + d | 0, o = 0 - t | 0, v = a & o, v >>> 0 <= P >>> 0 || (t = A[7091] | 0, t | 0 && (m = A[7089] | 0, C = m + v | 0, C >>> 0 <= m >>> 0 | C >>> 0 > t >>> 0)))
          return O = 0, b = iA, O | 0;
        A: do
          if (A[7092] & 4)
            e = 0, S = 143;
          else {
            n = A[6987] | 0;
            e: do
              if (n) {
                for (r = 28372; C = A[r >> 2] | 0, !(C >>> 0 <= n >>> 0 && (C + (A[r + 4 >> 2] | 0) | 0) >>> 0 > n >>> 0); )
                  if (t = A[r + 8 >> 2] | 0, t)
                    r = t;
                  else {
                    S = 128;
                    break e;
                  }
                if (e = a - l & o, e >>> 0 < 2147483647)
                  if (t = jn(e | 0) | 0, (t | 0) == ((A[r >> 2] | 0) + (A[r + 4 >> 2] | 0) | 0)) {
                    if ((t | 0) != -1) {
                      l = e, a = t, S = 145;
                      break A;
                    }
                  } else
                    r = t, S = 136;
                else
                  e = 0;
              } else
                S = 128;
            while (!1);
            do
              if ((S | 0) == 128)
                if (n = jn(0) | 0, (n | 0) != -1 && (e = n, T = A[7100] | 0, M = T + -1 | 0, e = ((M & e | 0) == 0 ? 0 : (M + e & 0 - T) - e | 0) + v | 0, T = A[7089] | 0, M = e + T | 0, e >>> 0 > P >>> 0 & e >>> 0 < 2147483647)) {
                  if (C = A[7091] | 0, C | 0 && M >>> 0 <= T >>> 0 | M >>> 0 > C >>> 0) {
                    e = 0;
                    break;
                  }
                  if (t = jn(e | 0) | 0, (t | 0) == (n | 0)) {
                    l = e, a = n, S = 145;
                    break A;
                  } else
                    r = t, S = 136;
                } else
                  e = 0;
            while (!1);
            do
              if ((S | 0) == 136) {
                if (n = 0 - e | 0, !(f >>> 0 > e >>> 0 & (e >>> 0 < 2147483647 & (r | 0) != -1)))
                  if ((r | 0) == -1) {
                    e = 0;
                    break;
                  } else {
                    l = e, a = r, S = 145;
                    break A;
                  }
                if (t = A[7101] | 0, t = d - e + t & 0 - t, t >>> 0 >= 2147483647) {
                  l = e, a = r, S = 145;
                  break A;
                }
                if ((jn(t | 0) | 0) == -1) {
                  jn(n | 0) | 0, e = 0;
                  break;
                } else {
                  l = t + e | 0, a = r, S = 145;
                  break A;
                }
              }
            while (!1);
            A[7092] = A[7092] | 4, S = 143;
          }
        while (!1);
        if ((S | 0) == 143 && v >>> 0 < 2147483647 && (F = jn(v | 0) | 0, M = jn(0) | 0, R = M - F | 0, W = R >>> 0 > (P + 40 | 0) >>> 0, !((F | 0) == -1 | W ^ 1 | F >>> 0 < M >>> 0 & ((F | 0) != -1 & (M | 0) != -1) ^ 1)) && (l = W ? R : e, a = F, S = 145), (S | 0) == 145) {
          e = (A[7089] | 0) + l | 0, A[7089] = e, e >>> 0 > (A[7090] | 0) >>> 0 && (A[7090] = e), d = A[6987] | 0;
          A: do
            if (d) {
              for (e = 28372; ; ) {
                if (t = A[e >> 2] | 0, n = A[e + 4 >> 2] | 0, (a | 0) == (t + n | 0)) {
                  S = 154;
                  break;
                }
                if (r = A[e + 8 >> 2] | 0, r)
                  e = r;
                else
                  break;
              }
              if ((S | 0) == 154 && (Z = e + 4 | 0, (A[e + 12 >> 2] & 8 | 0) == 0) && a >>> 0 > d >>> 0 & t >>> 0 <= d >>> 0) {
                A[Z >> 2] = n + l, O = (A[6984] | 0) + l | 0, F = d + 8 | 0, F = (F & 7 | 0) == 0 ? 0 : 0 - F & 7, Z = d + F | 0, F = O - F | 0, A[6987] = Z, A[6984] = F, A[Z + 4 >> 2] = F | 1, A[d + O + 4 >> 2] = 40, A[6988] = A[7103];
                break;
              }
              for (a >>> 0 < (A[6985] | 0) >>> 0 && (A[6985] = a), n = a + l | 0, e = 28372; ; ) {
                if ((A[e >> 2] | 0) == (n | 0)) {
                  S = 162;
                  break;
                }
                if (t = A[e + 8 >> 2] | 0, t)
                  e = t;
                else
                  break;
              }
              if ((S | 0) == 162 && (A[e + 12 >> 2] & 8 | 0) == 0) {
                A[e >> 2] = a, m = e + 4 | 0, A[m >> 2] = (A[m >> 2] | 0) + l, m = a + 8 | 0, m = a + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0, e = n + 8 | 0, e = n + ((e & 7 | 0) == 0 ? 0 : 0 - e & 7) | 0, v = m + P | 0, f = e - m - P | 0, A[m + 4 >> 2] = P | 3;
                e: do
                  if ((d | 0) == (e | 0))
                    O = (A[6984] | 0) + f | 0, A[6984] = O, A[6987] = v, A[v + 4 >> 2] = O | 1;
                  else {
                    if ((A[6986] | 0) == (e | 0)) {
                      O = (A[6983] | 0) + f | 0, A[6983] = O, A[6986] = v, A[v + 4 >> 2] = O | 1, A[v + O >> 2] = O;
                      break;
                    }
                    if (t = A[e + 4 >> 2] | 0, (t & 3 | 0) == 1) {
                      l = t & -8, r = t >>> 3;
                      t: do
                        if (t >>> 0 < 256)
                          if (t = A[e + 8 >> 2] | 0, n = A[e + 12 >> 2] | 0, (n | 0) == (t | 0)) {
                            A[6981] = A[6981] & ~(1 << r);
                            break;
                          } else {
                            A[t + 12 >> 2] = n, A[n + 8 >> 2] = t;
                            break;
                          }
                        else {
                          a = A[e + 24 >> 2] | 0, t = A[e + 12 >> 2] | 0;
                          do
                            if ((t | 0) == (e | 0)) {
                              if (n = e + 16 | 0, r = n + 4 | 0, t = A[r >> 2] | 0, t)
                                n = r;
                              else if (t = A[n >> 2] | 0, !t) {
                                t = 0;
                                break;
                              }
                              for (; ; )
                                if (o = t + 20 | 0, r = A[o >> 2] | 0, r)
                                  t = r, n = o;
                                else if (o = t + 16 | 0, r = A[o >> 2] | 0, r)
                                  t = r, n = o;
                                else
                                  break;
                              A[n >> 2] = 0;
                            } else
                              O = A[e + 8 >> 2] | 0, A[O + 12 >> 2] = t, A[t + 8 >> 2] = O;
                          while (!1);
                          if (!a)
                            break;
                          n = A[e + 28 >> 2] | 0, r = 28228 + (n << 2) | 0;
                          do
                            if ((A[r >> 2] | 0) != (e | 0)) {
                              if (O = a + 16 | 0, A[((A[O >> 2] | 0) == (e | 0) ? O : a + 20 | 0) >> 2] = t, !t)
                                break t;
                            } else {
                              if (A[r >> 2] = t, t | 0)
                                break;
                              A[6982] = A[6982] & ~(1 << n);
                              break t;
                            }
                          while (!1);
                          if (A[t + 24 >> 2] = a, n = e + 16 | 0, r = A[n >> 2] | 0, r | 0 && (A[t + 16 >> 2] = r, A[r + 24 >> 2] = t), n = A[n + 4 >> 2] | 0, !n)
                            break;
                          A[t + 20 >> 2] = n, A[n + 24 >> 2] = t;
                        }
                      while (!1);
                      e = e + l | 0, o = l + f | 0;
                    } else
                      o = f;
                    if (e = e + 4 | 0, A[e >> 2] = A[e >> 2] & -2, A[v + 4 >> 2] = o | 1, A[v + o >> 2] = o, e = o >>> 3, o >>> 0 < 256) {
                      n = 27964 + (e << 1 << 2) | 0, t = A[6981] | 0, e = 1 << e, t & e ? (t = n + 8 | 0, e = A[t >> 2] | 0) : (A[6981] = t | e, e = n, t = n + 8 | 0), A[t >> 2] = v, A[e + 12 >> 2] = v, A[v + 8 >> 2] = e, A[v + 12 >> 2] = n;
                      break;
                    }
                    e = o >>> 8;
                    do
                      if (!e)
                        r = 0;
                      else {
                        if (o >>> 0 > 16777215) {
                          r = 31;
                          break;
                        }
                        Z = (e + 1048320 | 0) >>> 16 & 8, O = e << Z, F = (O + 520192 | 0) >>> 16 & 4, O = O << F, r = (O + 245760 | 0) >>> 16 & 2, r = 14 - (F | Z | r) + (O << r >>> 15) | 0, r = o >>> (r + 7 | 0) & 1 | r << 1;
                      }
                    while (!1);
                    if (e = 28228 + (r << 2) | 0, A[v + 28 >> 2] = r, t = v + 16 | 0, A[t + 4 >> 2] = 0, A[t >> 2] = 0, t = A[6982] | 0, n = 1 << r, !(t & n)) {
                      A[6982] = t | n, A[e >> 2] = v, A[v + 24 >> 2] = e, A[v + 12 >> 2] = v, A[v + 8 >> 2] = v;
                      break;
                    }
                    e = A[e >> 2] | 0;
                    t: do
                      if ((A[e + 4 >> 2] & -8 | 0) != (o | 0)) {
                        for (r = o << ((r | 0) == 31 ? 0 : 25 - (r >>> 1) | 0); n = e + 16 + (r >>> 31 << 2) | 0, t = A[n >> 2] | 0, !!t; )
                          if ((A[t + 4 >> 2] & -8 | 0) == (o | 0)) {
                            e = t;
                            break t;
                          } else
                            r = r << 1, e = t;
                        A[n >> 2] = v, A[v + 24 >> 2] = e, A[v + 12 >> 2] = v, A[v + 8 >> 2] = v;
                        break e;
                      }
                    while (!1);
                    Z = e + 8 | 0, O = A[Z >> 2] | 0, A[O + 12 >> 2] = v, A[Z >> 2] = v, A[v + 8 >> 2] = O, A[v + 12 >> 2] = e, A[v + 24 >> 2] = 0;
                  }
                while (!1);
                return O = m + 8 | 0, b = iA, O | 0;
              }
              for (e = 28372; t = A[e >> 2] | 0, !(t >>> 0 <= d >>> 0 && (O = t + (A[e + 4 >> 2] | 0) | 0, O >>> 0 > d >>> 0)); )
                e = A[e + 8 >> 2] | 0;
              o = O + -47 | 0, t = o + 8 | 0, t = o + ((t & 7 | 0) == 0 ? 0 : 0 - t & 7) | 0, o = d + 16 | 0, t = t >>> 0 < o >>> 0 ? d : t, e = t + 8 | 0, n = l + -40 | 0, F = a + 8 | 0, F = (F & 7 | 0) == 0 ? 0 : 0 - F & 7, Z = a + F | 0, F = n - F | 0, A[6987] = Z, A[6984] = F, A[Z + 4 >> 2] = F | 1, A[a + n + 4 >> 2] = 40, A[6988] = A[7103], n = t + 4 | 0, A[n >> 2] = 27, A[e >> 2] = A[7093], A[e + 4 >> 2] = A[7094], A[e + 8 >> 2] = A[7095], A[e + 12 >> 2] = A[7096], A[7093] = a, A[7094] = l, A[7096] = 0, A[7095] = e, e = t + 24 | 0;
              do
                Z = e, e = e + 4 | 0, A[e >> 2] = 7;
              while ((Z + 8 | 0) >>> 0 < O >>> 0);
              if ((t | 0) != (d | 0)) {
                if (a = t - d | 0, A[n >> 2] = A[n >> 2] & -2, A[d + 4 >> 2] = a | 1, A[t >> 2] = a, e = a >>> 3, a >>> 0 < 256) {
                  n = 27964 + (e << 1 << 2) | 0, t = A[6981] | 0, e = 1 << e, t & e ? (t = n + 8 | 0, e = A[t >> 2] | 0) : (A[6981] = t | e, e = n, t = n + 8 | 0), A[t >> 2] = d, A[e + 12 >> 2] = d, A[d + 8 >> 2] = e, A[d + 12 >> 2] = n;
                  break;
                }
                if (e = a >>> 8, e ? a >>> 0 > 16777215 ? r = 31 : (Z = (e + 1048320 | 0) >>> 16 & 8, O = e << Z, F = (O + 520192 | 0) >>> 16 & 4, O = O << F, r = (O + 245760 | 0) >>> 16 & 2, r = 14 - (F | Z | r) + (O << r >>> 15) | 0, r = a >>> (r + 7 | 0) & 1 | r << 1) : r = 0, n = 28228 + (r << 2) | 0, A[d + 28 >> 2] = r, A[d + 20 >> 2] = 0, A[o >> 2] = 0, e = A[6982] | 0, t = 1 << r, !(e & t)) {
                  A[6982] = e | t, A[n >> 2] = d, A[d + 24 >> 2] = n, A[d + 12 >> 2] = d, A[d + 8 >> 2] = d;
                  break;
                }
                e = A[n >> 2] | 0;
                e: do
                  if ((A[e + 4 >> 2] & -8 | 0) != (a | 0)) {
                    for (r = a << ((r | 0) == 31 ? 0 : 25 - (r >>> 1) | 0); n = e + 16 + (r >>> 31 << 2) | 0, t = A[n >> 2] | 0, !!t; )
                      if ((A[t + 4 >> 2] & -8 | 0) == (a | 0)) {
                        e = t;
                        break e;
                      } else
                        r = r << 1, e = t;
                    A[n >> 2] = d, A[d + 24 >> 2] = e, A[d + 12 >> 2] = d, A[d + 8 >> 2] = d;
                    break A;
                  }
                while (!1);
                Z = e + 8 | 0, O = A[Z >> 2] | 0, A[O + 12 >> 2] = d, A[Z >> 2] = d, A[d + 8 >> 2] = O, A[d + 12 >> 2] = e, A[d + 24 >> 2] = 0;
              }
            } else
              O = A[6985] | 0, (O | 0) == 0 | a >>> 0 < O >>> 0 && (A[6985] = a), A[7093] = a, A[7094] = l, A[7096] = 0, A[6990] = A[7099], A[6989] = -1, A[6994] = 27964, A[6993] = 27964, A[6996] = 27972, A[6995] = 27972, A[6998] = 27980, A[6997] = 27980, A[7e3] = 27988, A[6999] = 27988, A[7002] = 27996, A[7001] = 27996, A[7004] = 28004, A[7003] = 28004, A[7006] = 28012, A[7005] = 28012, A[7008] = 28020, A[7007] = 28020, A[7010] = 28028, A[7009] = 28028, A[7012] = 28036, A[7011] = 28036, A[7014] = 28044, A[7013] = 28044, A[7016] = 28052, A[7015] = 28052, A[7018] = 28060, A[7017] = 28060, A[7020] = 28068, A[7019] = 28068, A[7022] = 28076, A[7021] = 28076, A[7024] = 28084, A[7023] = 28084, A[7026] = 28092, A[7025] = 28092, A[7028] = 28100, A[7027] = 28100, A[7030] = 28108, A[7029] = 28108, A[7032] = 28116, A[7031] = 28116, A[7034] = 28124, A[7033] = 28124, A[7036] = 28132, A[7035] = 28132, A[7038] = 28140, A[7037] = 28140, A[7040] = 28148, A[7039] = 28148, A[7042] = 28156, A[7041] = 28156, A[7044] = 28164, A[7043] = 28164, A[7046] = 28172, A[7045] = 28172, A[7048] = 28180, A[7047] = 28180, A[7050] = 28188, A[7049] = 28188, A[7052] = 28196, A[7051] = 28196, A[7054] = 28204, A[7053] = 28204, A[7056] = 28212, A[7055] = 28212, O = l + -40 | 0, F = a + 8 | 0, F = (F & 7 | 0) == 0 ? 0 : 0 - F & 7, Z = a + F | 0, F = O - F | 0, A[6987] = Z, A[6984] = F, A[Z + 4 >> 2] = F | 1, A[a + O + 4 >> 2] = 40, A[6988] = A[7103];
          while (!1);
          if (e = A[6984] | 0, e >>> 0 > P >>> 0)
            return F = e - P | 0, A[6984] = F, O = A[6987] | 0, Z = O + P | 0, A[6987] = Z, A[Z + 4 >> 2] = F | 1, A[O + 4 >> 2] = P | 3, O = O + 8 | 0, b = iA, O | 0;
        }
        return O = Cu() | 0, A[O >> 2] = 12, O = 0, b = iA, O | 0;
      }
      function xA(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, d = 0;
        if (t) {
          n = t + -8 | 0, o = A[6985] | 0, t = A[t + -4 >> 2] | 0, e = t & -8, d = n + e | 0;
          do
            if (t & 1)
              f = n, l = n;
            else {
              if (r = A[n >> 2] | 0, !(t & 3) || (l = n + (0 - r) | 0, a = r + e | 0, l >>> 0 < o >>> 0))
                return;
              if ((A[6986] | 0) == (l | 0)) {
                if (t = d + 4 | 0, e = A[t >> 2] | 0, (e & 3 | 0) != 3) {
                  f = l, e = a;
                  break;
                }
                A[6983] = a, A[t >> 2] = e & -2, A[l + 4 >> 2] = a | 1, A[l + a >> 2] = a;
                return;
              }
              if (n = r >>> 3, r >>> 0 < 256)
                if (t = A[l + 8 >> 2] | 0, e = A[l + 12 >> 2] | 0, (e | 0) == (t | 0)) {
                  A[6981] = A[6981] & ~(1 << n), f = l, e = a;
                  break;
                } else {
                  A[t + 12 >> 2] = e, A[e + 8 >> 2] = t, f = l, e = a;
                  break;
                }
              o = A[l + 24 >> 2] | 0, t = A[l + 12 >> 2] | 0;
              do
                if ((t | 0) == (l | 0)) {
                  if (e = l + 16 | 0, n = e + 4 | 0, t = A[n >> 2] | 0, t)
                    e = n;
                  else if (t = A[e >> 2] | 0, !t) {
                    t = 0;
                    break;
                  }
                  for (; ; )
                    if (r = t + 20 | 0, n = A[r >> 2] | 0, n)
                      t = n, e = r;
                    else if (r = t + 16 | 0, n = A[r >> 2] | 0, n)
                      t = n, e = r;
                    else
                      break;
                  A[e >> 2] = 0;
                } else
                  f = A[l + 8 >> 2] | 0, A[f + 12 >> 2] = t, A[t + 8 >> 2] = f;
              while (!1);
              if (o) {
                if (e = A[l + 28 >> 2] | 0, n = 28228 + (e << 2) | 0, (A[n >> 2] | 0) == (l | 0)) {
                  if (A[n >> 2] = t, !t) {
                    A[6982] = A[6982] & ~(1 << e), f = l, e = a;
                    break;
                  }
                } else if (f = o + 16 | 0, A[((A[f >> 2] | 0) == (l | 0) ? f : o + 20 | 0) >> 2] = t, !t) {
                  f = l, e = a;
                  break;
                }
                A[t + 24 >> 2] = o, e = l + 16 | 0, n = A[e >> 2] | 0, n | 0 && (A[t + 16 >> 2] = n, A[n + 24 >> 2] = t), e = A[e + 4 >> 2] | 0, e ? (A[t + 20 >> 2] = e, A[e + 24 >> 2] = t, f = l, e = a) : (f = l, e = a);
              } else
                f = l, e = a;
            }
          while (!1);
          if (!(l >>> 0 >= d >>> 0) && (t = d + 4 | 0, r = A[t >> 2] | 0, !!(r & 1))) {
            if (r & 2)
              A[t >> 2] = r & -2, A[f + 4 >> 2] = e | 1, A[l + e >> 2] = e, o = e;
            else {
              if ((A[6987] | 0) == (d | 0)) {
                if (d = (A[6984] | 0) + e | 0, A[6984] = d, A[6987] = f, A[f + 4 >> 2] = d | 1, (f | 0) != (A[6986] | 0))
                  return;
                A[6986] = 0, A[6983] = 0;
                return;
              }
              if ((A[6986] | 0) == (d | 0)) {
                d = (A[6983] | 0) + e | 0, A[6983] = d, A[6986] = l, A[f + 4 >> 2] = d | 1, A[l + d >> 2] = d;
                return;
              }
              o = (r & -8) + e | 0, n = r >>> 3;
              do
                if (r >>> 0 < 256)
                  if (e = A[d + 8 >> 2] | 0, t = A[d + 12 >> 2] | 0, (t | 0) == (e | 0)) {
                    A[6981] = A[6981] & ~(1 << n);
                    break;
                  } else {
                    A[e + 12 >> 2] = t, A[t + 8 >> 2] = e;
                    break;
                  }
                else {
                  a = A[d + 24 >> 2] | 0, t = A[d + 12 >> 2] | 0;
                  do
                    if ((t | 0) == (d | 0)) {
                      if (e = d + 16 | 0, n = e + 4 | 0, t = A[n >> 2] | 0, t)
                        e = n;
                      else if (t = A[e >> 2] | 0, !t) {
                        n = 0;
                        break;
                      }
                      for (; ; )
                        if (r = t + 20 | 0, n = A[r >> 2] | 0, n)
                          t = n, e = r;
                        else if (r = t + 16 | 0, n = A[r >> 2] | 0, n)
                          t = n, e = r;
                        else
                          break;
                      A[e >> 2] = 0, n = t;
                    } else
                      n = A[d + 8 >> 2] | 0, A[n + 12 >> 2] = t, A[t + 8 >> 2] = n, n = t;
                  while (!1);
                  if (a | 0) {
                    if (t = A[d + 28 >> 2] | 0, e = 28228 + (t << 2) | 0, (A[e >> 2] | 0) == (d | 0)) {
                      if (A[e >> 2] = n, !n) {
                        A[6982] = A[6982] & ~(1 << t);
                        break;
                      }
                    } else if (r = a + 16 | 0, A[((A[r >> 2] | 0) == (d | 0) ? r : a + 20 | 0) >> 2] = n, !n)
                      break;
                    A[n + 24 >> 2] = a, t = d + 16 | 0, e = A[t >> 2] | 0, e | 0 && (A[n + 16 >> 2] = e, A[e + 24 >> 2] = n), t = A[t + 4 >> 2] | 0, t | 0 && (A[n + 20 >> 2] = t, A[t + 24 >> 2] = n);
                  }
                }
              while (!1);
              if (A[f + 4 >> 2] = o | 1, A[l + o >> 2] = o, (f | 0) == (A[6986] | 0)) {
                A[6983] = o;
                return;
              }
            }
            if (t = o >>> 3, o >>> 0 < 256) {
              n = 27964 + (t << 1 << 2) | 0, e = A[6981] | 0, t = 1 << t, e & t ? (e = n + 8 | 0, t = A[e >> 2] | 0) : (A[6981] = e | t, t = n, e = n + 8 | 0), A[e >> 2] = f, A[t + 12 >> 2] = f, A[f + 8 >> 2] = t, A[f + 12 >> 2] = n;
              return;
            }
            t = o >>> 8, t ? o >>> 0 > 16777215 ? r = 31 : (l = (t + 1048320 | 0) >>> 16 & 8, d = t << l, a = (d + 520192 | 0) >>> 16 & 4, d = d << a, r = (d + 245760 | 0) >>> 16 & 2, r = 14 - (a | l | r) + (d << r >>> 15) | 0, r = o >>> (r + 7 | 0) & 1 | r << 1) : r = 0, t = 28228 + (r << 2) | 0, A[f + 28 >> 2] = r, A[f + 20 >> 2] = 0, A[f + 16 >> 2] = 0, e = A[6982] | 0, n = 1 << r;
            A: do
              if (!(e & n))
                A[6982] = e | n, A[t >> 2] = f, A[f + 24 >> 2] = t, A[f + 12 >> 2] = f, A[f + 8 >> 2] = f;
              else {
                t = A[t >> 2] | 0;
                e: do
                  if ((A[t + 4 >> 2] & -8 | 0) != (o | 0)) {
                    for (r = o << ((r | 0) == 31 ? 0 : 25 - (r >>> 1) | 0); n = t + 16 + (r >>> 31 << 2) | 0, e = A[n >> 2] | 0, !!e; )
                      if ((A[e + 4 >> 2] & -8 | 0) == (o | 0)) {
                        t = e;
                        break e;
                      } else
                        r = r << 1, t = e;
                    A[n >> 2] = f, A[f + 24 >> 2] = t, A[f + 12 >> 2] = f, A[f + 8 >> 2] = f;
                    break A;
                  }
                while (!1);
                l = t + 8 | 0, d = A[l >> 2] | 0, A[d + 12 >> 2] = f, A[l >> 2] = f, A[f + 8 >> 2] = d, A[f + 12 >> 2] = t, A[f + 24 >> 2] = 0;
              }
            while (!1);
            if (d = (A[6989] | 0) + -1 | 0, A[6989] = d, !(d | 0)) {
              for (t = 28380; t = A[t >> 2] | 0, t; )
                t = t + 8 | 0;
              A[6989] = -1;
            }
          }
        }
      }
      function Wt(t, e) {
        t = t | 0, e = e | 0;
        var n = 0;
        return t ? (n = qe(e, t) | 0, (e | t) >>> 0 > 65535 && (n = ((n >>> 0) / (t >>> 0) | 0 | 0) == (e | 0) ? n : -1)) : n = 0, t = $i(n) | 0, !t || !(A[t + -4 >> 2] & 3) || Vn(t | 0, 0, n | 0) | 0, t | 0;
      }
      function yA(t, e, n, r) {
        return t = t | 0, e = e | 0, n = n | 0, r = r | 0, n = t + n >>> 0, OA(e + r + (n >>> 0 < t >>> 0 | 0) >>> 0 | 0), n | 0 | 0;
      }
      function ut(t, e, n, r) {
        return t = t | 0, e = e | 0, n = n | 0, r = r | 0, r = e - r - (n >>> 0 > t >>> 0 | 0) >>> 0, OA(r | 0), t - n >>> 0 | 0 | 0;
      }
      function qa(t) {
        return t = t | 0, (t ? 31 - (Mi(t ^ t - 1) | 0) | 0 : 32) | 0;
      }
      function ra(t, e, n, r, o) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, d = 0, v = 0, m = 0, P = 0, C = 0, T = 0, M = 0;
        if (m = t, d = e, v = d, l = n, C = r, f = C, !v)
          return a = (o | 0) != 0, f ? a ? (A[o >> 2] = t | 0, A[o + 4 >> 2] = e & 0, C = 0, o = 0, OA(C | 0), o | 0) : (C = 0, o = 0, OA(C | 0), o | 0) : (a && (A[o >> 2] = (m >>> 0) % (l >>> 0), A[o + 4 >> 2] = 0), C = 0, o = (m >>> 0) / (l >>> 0) >>> 0, OA(C | 0), o | 0);
        a = (f | 0) == 0;
        do
          if (l) {
            if (!a) {
              if (a = (Mi(f | 0) | 0) - (Mi(v | 0) | 0) | 0, a >>> 0 <= 31) {
                P = a + 1 | 0, f = 31 - a | 0, e = a - 31 >> 31, l = P, t = m >>> (P >>> 0) & e | v << f, e = v >>> (P >>> 0) & e, a = 0, f = m << f;
                break;
              }
              return o ? (A[o >> 2] = t | 0, A[o + 4 >> 2] = d | e & 0, C = 0, o = 0, OA(C | 0), o | 0) : (C = 0, o = 0, OA(C | 0), o | 0);
            }
            if (a = l - 1 | 0, a & l | 0) {
              f = (Mi(l | 0) | 0) + 33 - (Mi(v | 0) | 0) | 0, M = 64 - f | 0, P = 32 - f | 0, d = P >> 31, T = f - 32 | 0, e = T >> 31, l = f, t = P - 1 >> 31 & v >>> (T >>> 0) | (v << P | m >>> (f >>> 0)) & e, e = e & v >>> (f >>> 0), a = m << M & d, f = (v << M | m >>> (T >>> 0)) & d | m << P & f - 33 >> 31;
              break;
            }
            return o | 0 && (A[o >> 2] = a & m, A[o + 4 >> 2] = 0), (l | 0) == 1 ? (T = d | e & 0, M = t | 0 | 0, OA(T | 0), M | 0) : (M = qa(l | 0) | 0, T = v >>> (M >>> 0) | 0, M = v << 32 - M | m >>> (M >>> 0) | 0, OA(T | 0), M | 0);
          } else {
            if (a)
              return o | 0 && (A[o >> 2] = (v >>> 0) % (l >>> 0), A[o + 4 >> 2] = 0), T = 0, M = (v >>> 0) / (l >>> 0) >>> 0, OA(T | 0), M | 0;
            if (!m)
              return o | 0 && (A[o >> 2] = 0, A[o + 4 >> 2] = (v >>> 0) % (f >>> 0)), T = 0, M = (v >>> 0) / (f >>> 0) >>> 0, OA(T | 0), M | 0;
            if (a = f - 1 | 0, !(a & f))
              return o | 0 && (A[o >> 2] = t | 0, A[o + 4 >> 2] = a & v | e & 0), T = 0, M = v >>> ((qa(f | 0) | 0) >>> 0), OA(T | 0), M | 0;
            if (a = (Mi(f | 0) | 0) - (Mi(v | 0) | 0) | 0, a >>> 0 <= 30) {
              e = a + 1 | 0, f = 31 - a | 0, l = e, t = v << f | m >>> (e >>> 0), e = v >>> (e >>> 0), a = 0, f = m << f;
              break;
            }
            return o ? (A[o >> 2] = t | 0, A[o + 4 >> 2] = d | e & 0, T = 0, M = 0, OA(T | 0), M | 0) : (T = 0, M = 0, OA(T | 0), M | 0);
          }
        while (!1);
        if (!l)
          v = f, d = 0, f = 0;
        else {
          P = n | 0 | 0, m = C | r & 0, v = yA(P | 0, m | 0, -1, -1) | 0, n = E() | 0, d = f, f = 0;
          do
            r = d, d = a >>> 31 | d << 1, a = f | a << 1, r = t << 1 | r >>> 31 | 0, C = t >>> 31 | e << 1 | 0, ut(v | 0, n | 0, r | 0, C | 0) | 0, M = E() | 0, T = M >> 31 | ((M | 0) < 0 ? -1 : 0) << 1, f = T & 1, t = ut(r | 0, C | 0, T & P | 0, (((M | 0) < 0 ? -1 : 0) >> 31 | ((M | 0) < 0 ? -1 : 0) << 1) & m | 0) | 0, e = E() | 0, l = l - 1 | 0;
          while ((l | 0) != 0);
          v = d, d = 0;
        }
        return l = 0, o | 0 && (A[o >> 2] = t, A[o + 4 >> 2] = e), T = (a | 0) >>> 31 | (v | l) << 1 | (l << 1 | a >>> 31) & 0 | d, M = (a << 1 | 0) & -2 | f, OA(T | 0), M | 0;
      }
      function Wn(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0;
        return v = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1, d = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1, a = r >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, o = ((r | 0) < 0 ? -1 : 0) >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, f = ut(v ^ t | 0, d ^ e | 0, v | 0, d | 0) | 0, l = E() | 0, t = a ^ v, e = o ^ d, ut((ra(f, l, ut(a ^ n | 0, o ^ r | 0, a | 0, o | 0) | 0, E() | 0, 0) | 0) ^ t | 0, (E() | 0) ^ e | 0, t | 0, e | 0) | 0;
      }
      function Lu(t, e) {
        t = t | 0, e = e | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return a = t & 65535, o = e & 65535, n = qe(o, a) | 0, r = t >>> 16, t = (n >>> 16) + (qe(o, r) | 0) | 0, o = e >>> 16, e = qe(o, a) | 0, OA((t >>> 16) + (qe(o, r) | 0) + (((t & 65535) + e | 0) >>> 16) | 0), t + e << 16 | n & 65535 | 0 | 0;
      }
      function ft(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        return o = t, a = n, n = Lu(o, a) | 0, t = E() | 0, OA((qe(e, a) | 0) + (qe(r, o) | 0) + t | t & 0 | 0), n | 0 | 0 | 0;
      }
      function r0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, d = 0, v = 0;
        return o = b, b = b + 16 | 0, f = o | 0, l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1, a = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1, v = r >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, d = ((r | 0) < 0 ? -1 : 0) >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, t = ut(l ^ t | 0, a ^ e | 0, l | 0, a | 0) | 0, e = E() | 0, ra(t, e, ut(v ^ n | 0, d ^ r | 0, v | 0, d | 0) | 0, E() | 0, f) | 0, r = ut(A[f >> 2] ^ l | 0, A[f + 4 >> 2] ^ a | 0, l | 0, a | 0) | 0, n = E() | 0, b = o, OA(n | 0), r | 0;
      }
      function o0(t, e, n, r) {
        t = t | 0, e = e | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        return a = b, b = b + 16 | 0, o = a | 0, ra(t, e, n, r, o) | 0, b = a, OA(A[o + 4 >> 2] | 0), A[o >> 2] | 0 | 0;
      }
      function Ka(t, e, n) {
        return t = t | 0, e = e | 0, n = n | 0, (n | 0) < 32 ? (OA(e >> n | 0), t >>> n | (e & (1 << n) - 1) << 32 - n) : (OA(((e | 0) < 0 ? -1 : 0) | 0), e >> n - 32 | 0);
      }
      function X(t, e, n) {
        return t = t | 0, e = e | 0, n = n | 0, (n | 0) < 32 ? (OA(e >>> n | 0), t >>> n | (e & (1 << n) - 1) << 32 - n) : (OA(0), e >>> n - 32 | 0);
      }
      function eA(t, e, n) {
        return t = t | 0, e = e | 0, n = n | 0, (n | 0) < 32 ? (OA(e << n | (t & (1 << n) - 1 << 32 - n) >>> 32 - n | 0), t << n) : (OA(t << n - 32 | 0), 0);
      }
      function oa(t, e, n) {
        return t = t | 0, e = e | 0, e = Mi(e) | 0, (e | 0) == 32 && (e = e + (Mi(t) | 0) | 0), OA(0), e | 0;
      }
      function Ja(t, e) {
        return t = +t, e = +e, t != t ? +e : e != e ? +t : +Es(+t, +e);
      }
      function $o(t, e) {
        return t = +t, e = +e, t != t ? +e : e != e ? +t : +B0(+t, +e);
      }
      function As(t) {
        return t = +t, t >= 0 ? +ne(t + 0.5) : +Ye(t - 0.5);
      }
      function s0(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if ((n | 0) >= 8192)
          return or(t | 0, e | 0, n | 0) | 0, t | 0;
        if (a = t | 0, o = t + n | 0, (t & 3) == (e & 3)) {
          for (; t & 3; ) {
            if (!n)
              return a | 0;
            q[t >> 0] = q[e >> 0] | 0, t = t + 1 | 0, e = e + 1 | 0, n = n - 1 | 0;
          }
          for (n = o & -4 | 0, r = n - 64 | 0; (t | 0) <= (r | 0); )
            A[t >> 2] = A[e >> 2], A[t + 4 >> 2] = A[e + 4 >> 2], A[t + 8 >> 2] = A[e + 8 >> 2], A[t + 12 >> 2] = A[e + 12 >> 2], A[t + 16 >> 2] = A[e + 16 >> 2], A[t + 20 >> 2] = A[e + 20 >> 2], A[t + 24 >> 2] = A[e + 24 >> 2], A[t + 28 >> 2] = A[e + 28 >> 2], A[t + 32 >> 2] = A[e + 32 >> 2], A[t + 36 >> 2] = A[e + 36 >> 2], A[t + 40 >> 2] = A[e + 40 >> 2], A[t + 44 >> 2] = A[e + 44 >> 2], A[t + 48 >> 2] = A[e + 48 >> 2], A[t + 52 >> 2] = A[e + 52 >> 2], A[t + 56 >> 2] = A[e + 56 >> 2], A[t + 60 >> 2] = A[e + 60 >> 2], t = t + 64 | 0, e = e + 64 | 0;
          for (; (t | 0) < (n | 0); )
            A[t >> 2] = A[e >> 2], t = t + 4 | 0, e = e + 4 | 0;
        } else
          for (n = o - 4 | 0; (t | 0) < (n | 0); )
            q[t >> 0] = q[e >> 0] | 0, q[t + 1 >> 0] = q[e + 1 >> 0] | 0, q[t + 2 >> 0] = q[e + 2 >> 0] | 0, q[t + 3 >> 0] = q[e + 3 >> 0] | 0, t = t + 4 | 0, e = e + 4 | 0;
        for (; (t | 0) < (o | 0); )
          q[t >> 0] = q[e >> 0] | 0, t = t + 1 | 0, e = e + 1 | 0;
        return a | 0;
      }
      function Vn(t, e, n) {
        t = t | 0, e = e | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        if (a = t + n | 0, e = e & 255, (n | 0) >= 67) {
          for (; t & 3; )
            q[t >> 0] = e, t = t + 1 | 0;
          for (r = a & -4 | 0, l = e | e << 8 | e << 16 | e << 24, o = r - 64 | 0; (t | 0) <= (o | 0); )
            A[t >> 2] = l, A[t + 4 >> 2] = l, A[t + 8 >> 2] = l, A[t + 12 >> 2] = l, A[t + 16 >> 2] = l, A[t + 20 >> 2] = l, A[t + 24 >> 2] = l, A[t + 28 >> 2] = l, A[t + 32 >> 2] = l, A[t + 36 >> 2] = l, A[t + 40 >> 2] = l, A[t + 44 >> 2] = l, A[t + 48 >> 2] = l, A[t + 52 >> 2] = l, A[t + 56 >> 2] = l, A[t + 60 >> 2] = l, t = t + 64 | 0;
          for (; (t | 0) < (r | 0); )
            A[t >> 2] = l, t = t + 4 | 0;
        }
        for (; (t | 0) < (a | 0); )
          q[t >> 0] = e, t = t + 1 | 0;
        return a - n | 0;
      }
      function Xa(t) {
        return t = +t, t >= 0 ? +ne(t + 0.5) : +Ye(t - 0.5);
      }
      function jn(t) {
        t = t | 0;
        var e = 0, n = 0, r = 0;
        return r = Lo() | 0, n = A[gA >> 2] | 0, e = n + t | 0, (t | 0) > 0 & (e | 0) < (n | 0) | (e | 0) < 0 ? (Ie(e | 0) | 0, C0(12), -1) : (e | 0) > (r | 0) && !(ue(e | 0) | 0) ? (C0(12), -1) : (A[gA >> 2] = e, n | 0);
      }
      return {
        ___divdi3: Wn,
        ___muldi3: ft,
        ___remdi3: r0,
        ___uremdi3: o0,
        _areNeighborCells: Is,
        _bitshift64Ashr: Ka,
        _bitshift64Lshr: X,
        _bitshift64Shl: eA,
        _calloc: Wt,
        _cellAreaKm2: Go,
        _cellAreaM2: Wo,
        _cellAreaRads2: li,
        _cellToBoundary: ai,
        _cellToCenterChild: Si,
        _cellToChildPos: e0,
        _cellToChildren: Kr,
        _cellToChildrenSize: zi,
        _cellToLatLng: mi,
        _cellToLocalIj: jo,
        _cellToParent: K0,
        _cellToVertex: Et,
        _cellToVertexes: Xo,
        _cellsToDirectedEdge: zs,
        _cellsToLinkedMultiPolygon: Ur,
        _childPosToCell: Gs,
        _compactCells: Jr,
        _constructCell: Zs,
        _destroyLinkedMultiPolygon: Ao,
        _directedEdgeToBoundary: vi,
        _directedEdgeToCells: Oo,
        _edgeLengthKm: qs,
        _edgeLengthM: n0,
        _edgeLengthRads: vr,
        _emscripten_replace_memory: zn,
        _free: xA,
        _getBaseCellNumber: Ht,
        _getDirectedEdgeDestination: Ss,
        _getDirectedEdgeOrigin: W0,
        _getHexagonAreaAvgKm2: Nn,
        _getHexagonAreaAvgM2: Ys,
        _getHexagonEdgeLengthAvgKm: Hn,
        _getHexagonEdgeLengthAvgM: Ho,
        _getIcosahedronFaces: A0,
        _getIndexDigit: Zn,
        _getNumCells: pr,
        _getPentagons: $0,
        _getRes0Cells: S0,
        _getResolution: Rs,
        _greatCircleDistanceKm: Ji,
        _greatCircleDistanceM: Vs,
        _greatCircleDistanceRads: Ws,
        _gridDisk: sr,
        _gridDiskDistances: Lt,
        _gridDistance: Js,
        _gridPathCells: Ko,
        _gridPathCellsSize: qo,
        _gridRing: Ue,
        _gridRingUnsafe: Vi,
        _i64Add: yA,
        _i64Subtract: ut,
        _isPentagon: pe,
        _isResClassIII: Hs,
        _isValidCell: oi,
        _isValidDirectedEdge: V0,
        _isValidIndex: Fs,
        _isValidVertex: Ga,
        _latLngToCell: dr,
        _llvm_ctlz_i64: oa,
        _llvm_maxnum_f64: Ja,
        _llvm_minnum_f64: $o,
        _llvm_round_f64: As,
        _localIjToCell: Yo,
        _malloc: $i,
        _maxFaceCount: $r,
        _maxGridDiskSize: T0,
        _maxPolygonToCellsSize: M0,
        _maxPolygonToCellsSizeExperimental: k,
        _memcpy: s0,
        _memset: Vn,
        _originToDirectedEdges: Yr,
        _pentagonCount: Zo,
        _polygonToCells: D0,
        _polygonToCellsExperimental: g,
        _readInt64AsDoubleFromPointer: Jo,
        _res0CellCount: Do,
        _round: Xa,
        _sbrk: jn,
        _sizeOfCellBoundary: Pt,
        _sizeOfCoordIJ: Aa,
        _sizeOfGeoLoop: Un,
        _sizeOfGeoPolygon: Xs,
        _sizeOfH3Index: At,
        _sizeOfLatLng: Gt,
        _sizeOfLinkedGeoPolygon: $s,
        _uncompactCells: Ns,
        _uncompactCellsSize: J0,
        _vertexToLatLng: na,
        establishStackSpace: Fe,
        stackAlloc: Sn,
        stackRestore: JA,
        stackSave: L0
      };
    })(it, ii, Le)
  );
  c.___divdi3 = $.___divdi3, c.___muldi3 = $.___muldi3, c.___remdi3 = $.___remdi3, c.___uremdi3 = $.___uremdi3, c._areNeighborCells = $._areNeighborCells, c._bitshift64Ashr = $._bitshift64Ashr, c._bitshift64Lshr = $._bitshift64Lshr, c._bitshift64Shl = $._bitshift64Shl, c._calloc = $._calloc, c._cellAreaKm2 = $._cellAreaKm2, c._cellAreaM2 = $._cellAreaM2, c._cellAreaRads2 = $._cellAreaRads2, c._cellToBoundary = $._cellToBoundary, c._cellToCenterChild = $._cellToCenterChild, c._cellToChildPos = $._cellToChildPos, c._cellToChildren = $._cellToChildren, c._cellToChildrenSize = $._cellToChildrenSize, c._cellToLatLng = $._cellToLatLng, c._cellToLocalIj = $._cellToLocalIj, c._cellToParent = $._cellToParent, c._cellToVertex = $._cellToVertex, c._cellToVertexes = $._cellToVertexes, c._cellsToDirectedEdge = $._cellsToDirectedEdge, c._cellsToLinkedMultiPolygon = $._cellsToLinkedMultiPolygon, c._childPosToCell = $._childPosToCell, c._compactCells = $._compactCells, c._constructCell = $._constructCell, c._destroyLinkedMultiPolygon = $._destroyLinkedMultiPolygon, c._directedEdgeToBoundary = $._directedEdgeToBoundary, c._directedEdgeToCells = $._directedEdgeToCells, c._edgeLengthKm = $._edgeLengthKm, c._edgeLengthM = $._edgeLengthM, c._edgeLengthRads = $._edgeLengthRads;
  var Zt = c._emscripten_replace_memory = $._emscripten_replace_memory;
  c._free = $._free, c._getBaseCellNumber = $._getBaseCellNumber, c._getDirectedEdgeDestination = $._getDirectedEdgeDestination, c._getDirectedEdgeOrigin = $._getDirectedEdgeOrigin, c._getHexagonAreaAvgKm2 = $._getHexagonAreaAvgKm2, c._getHexagonAreaAvgM2 = $._getHexagonAreaAvgM2, c._getHexagonEdgeLengthAvgKm = $._getHexagonEdgeLengthAvgKm, c._getHexagonEdgeLengthAvgM = $._getHexagonEdgeLengthAvgM, c._getIcosahedronFaces = $._getIcosahedronFaces, c._getIndexDigit = $._getIndexDigit, c._getNumCells = $._getNumCells, c._getPentagons = $._getPentagons, c._getRes0Cells = $._getRes0Cells, c._getResolution = $._getResolution, c._greatCircleDistanceKm = $._greatCircleDistanceKm, c._greatCircleDistanceM = $._greatCircleDistanceM, c._greatCircleDistanceRads = $._greatCircleDistanceRads, c._gridDisk = $._gridDisk, c._gridDiskDistances = $._gridDiskDistances, c._gridDistance = $._gridDistance, c._gridPathCells = $._gridPathCells, c._gridPathCellsSize = $._gridPathCellsSize, c._gridRing = $._gridRing, c._gridRingUnsafe = $._gridRingUnsafe, c._i64Add = $._i64Add, c._i64Subtract = $._i64Subtract, c._isPentagon = $._isPentagon, c._isResClassIII = $._isResClassIII, c._isValidCell = $._isValidCell, c._isValidDirectedEdge = $._isValidDirectedEdge, c._isValidIndex = $._isValidIndex, c._isValidVertex = $._isValidVertex, c._latLngToCell = $._latLngToCell, c._llvm_ctlz_i64 = $._llvm_ctlz_i64, c._llvm_maxnum_f64 = $._llvm_maxnum_f64, c._llvm_minnum_f64 = $._llvm_minnum_f64, c._llvm_round_f64 = $._llvm_round_f64, c._localIjToCell = $._localIjToCell, c._malloc = $._malloc, c._maxFaceCount = $._maxFaceCount, c._maxGridDiskSize = $._maxGridDiskSize, c._maxPolygonToCellsSize = $._maxPolygonToCellsSize, c._maxPolygonToCellsSizeExperimental = $._maxPolygonToCellsSizeExperimental, c._memcpy = $._memcpy, c._memset = $._memset, c._originToDirectedEdges = $._originToDirectedEdges, c._pentagonCount = $._pentagonCount, c._polygonToCells = $._polygonToCells, c._polygonToCellsExperimental = $._polygonToCellsExperimental, c._readInt64AsDoubleFromPointer = $._readInt64AsDoubleFromPointer, c._res0CellCount = $._res0CellCount, c._round = $._round, c._sbrk = $._sbrk, c._sizeOfCellBoundary = $._sizeOfCellBoundary, c._sizeOfCoordIJ = $._sizeOfCoordIJ, c._sizeOfGeoLoop = $._sizeOfGeoLoop, c._sizeOfGeoPolygon = $._sizeOfGeoPolygon, c._sizeOfH3Index = $._sizeOfH3Index, c._sizeOfLatLng = $._sizeOfLatLng, c._sizeOfLinkedGeoPolygon = $._sizeOfLinkedGeoPolygon, c._uncompactCells = $._uncompactCells, c._uncompactCellsSize = $._uncompactCellsSize, c._vertexToLatLng = $._vertexToLatLng, c.establishStackSpace = $.establishStackSpace;
  var Ui = c.stackAlloc = $.stackAlloc, Dn = c.stackRestore = $.stackRestore, _n = c.stackSave = $.stackSave;
  if (c.asm = $, c.cwrap = LA, c.setValue = sA, c.getValue = rA, GA) {
    Pe(GA) || (GA = B(GA));
    {
      pA();
      var pn = function(G) {
        G.byteLength && (G = new Uint8Array(G)), xt.set(G, nA), c.memoryInitializerRequest && delete c.memoryInitializerRequest.response, Be();
      }, vn = function() {
        z(GA, pn, function() {
          throw "could not load memory initializer " + GA;
        });
      }, mn = Ce(GA);
      if (mn)
        pn(mn.buffer);
      else if (c.memoryInitializerRequest) {
        var Gi = function() {
          var G = c.memoryInitializerRequest, K = G.response;
          if (G.status !== 200 && G.status !== 0) {
            var uA = Ce(c.memoryInitializerRequestURL);
            if (uA)
              K = uA.buffer;
            else {
              console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + G.status + ", retrying " + GA), vn();
              return;
            }
          }
          pn(K);
        };
        c.memoryInitializerRequest.response ? setTimeout(Gi, 0) : c.memoryInitializerRequest.addEventListener("load", Gi);
      } else
        vn();
    }
  }
  var Wi;
  lA = function G() {
    Wi || ni(), Wi || (lA = G);
  };
  function ni(G) {
    if (ei > 0 || ($t(), ei > 0))
      return;
    function K() {
      Wi || (Wi = !0, !_A && (Ai(), Fr(), c.onRuntimeInitialized && c.onRuntimeInitialized(), hn()));
    }
    c.setStatus ? (c.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        c.setStatus("");
      }, 1), K();
    }, 1)) : K();
  }
  c.run = ni;
  function ri(G) {
    throw c.onAbort && c.onAbort(G), G += "", Q(G), D(G), _A = !0, "abort(" + G + "). Build with -s ASSERTIONS=1 for more info.";
  }
  if (c.abort = ri, c.preInit)
    for (typeof c.preInit == "function" && (c.preInit = [c.preInit]); c.preInit.length > 0; )
      c.preInit.pop()();
  return ni(), h;
})(typeof U == "object" ? U : {}), MA = "number", BA = MA, l0 = MA, IA = MA, zA = MA, ht = MA, cA = MA, yh = [
  // The size functions are inserted via build/sizes.h
  ["sizeOfH3Index", MA],
  ["sizeOfLatLng", MA],
  ["sizeOfCellBoundary", MA],
  ["sizeOfGeoLoop", MA],
  ["sizeOfGeoPolygon", MA],
  ["sizeOfLinkedGeoPolygon", MA],
  ["sizeOfCoordIJ", MA],
  ["readInt64AsDoubleFromPointer", MA],
  // The remaining functions are defined in the core lib in h3Api.h
  ["isValidCell", l0, [IA, zA]],
  ["isValidIndex", l0, [IA, zA]],
  ["latLngToCell", BA, [MA, MA, ht, cA]],
  ["cellToLatLng", BA, [IA, zA, cA]],
  ["cellToBoundary", BA, [IA, zA, cA]],
  ["maxGridDiskSize", BA, [MA, cA]],
  ["gridDisk", BA, [IA, zA, MA, cA]],
  ["gridDiskDistances", BA, [IA, zA, MA, cA, cA]],
  ["gridRing", BA, [IA, zA, MA, cA]],
  ["gridRingUnsafe", BA, [IA, zA, MA, cA]],
  ["maxPolygonToCellsSize", BA, [cA, ht, MA, cA]],
  ["polygonToCells", BA, [cA, ht, MA, cA]],
  ["maxPolygonToCellsSizeExperimental", BA, [cA, ht, MA, cA]],
  ["polygonToCellsExperimental", BA, [cA, ht, MA, MA, MA, cA]],
  ["cellsToLinkedMultiPolygon", BA, [cA, MA, cA]],
  ["destroyLinkedMultiPolygon", null, [cA]],
  ["compactCells", BA, [cA, cA, MA, MA]],
  ["uncompactCells", BA, [cA, MA, MA, cA, MA, ht]],
  ["uncompactCellsSize", BA, [cA, MA, MA, ht, cA]],
  ["isPentagon", l0, [IA, zA]],
  ["isResClassIII", l0, [IA, zA]],
  ["getBaseCellNumber", MA, [IA, zA]],
  ["getResolution", MA, [IA, zA]],
  ["getIndexDigit", MA, [IA, zA, MA]],
  ["constructCell", BA, [MA, MA, cA, cA]],
  ["maxFaceCount", BA, [IA, zA, cA]],
  ["getIcosahedronFaces", BA, [IA, zA, cA]],
  ["cellToParent", BA, [IA, zA, ht, cA]],
  ["cellToChildren", BA, [IA, zA, ht, cA]],
  ["cellToCenterChild", BA, [IA, zA, ht, cA]],
  ["cellToChildrenSize", BA, [IA, zA, ht, cA]],
  ["cellToChildPos", BA, [IA, zA, ht, cA]],
  ["childPosToCell", BA, [MA, MA, IA, zA, ht, cA]],
  ["areNeighborCells", BA, [IA, zA, IA, zA, cA]],
  ["cellsToDirectedEdge", BA, [IA, zA, IA, zA, cA]],
  ["getDirectedEdgeOrigin", BA, [IA, zA, cA]],
  ["getDirectedEdgeDestination", BA, [IA, zA, cA]],
  ["isValidDirectedEdge", l0, [IA, zA]],
  ["directedEdgeToCells", BA, [IA, zA, cA]],
  ["originToDirectedEdges", BA, [IA, zA, cA]],
  ["directedEdgeToBoundary", BA, [IA, zA, cA]],
  ["gridDistance", BA, [IA, zA, IA, zA, cA]],
  ["gridPathCells", BA, [IA, zA, IA, zA, cA]],
  ["gridPathCellsSize", BA, [IA, zA, IA, zA, cA]],
  ["cellToLocalIj", BA, [IA, zA, IA, zA, MA, cA]],
  ["localIjToCell", BA, [IA, zA, cA, MA, cA]],
  ["getHexagonAreaAvgM2", BA, [ht, cA]],
  ["getHexagonAreaAvgKm2", BA, [ht, cA]],
  ["getHexagonEdgeLengthAvgM", BA, [ht, cA]],
  ["getHexagonEdgeLengthAvgKm", BA, [ht, cA]],
  ["greatCircleDistanceM", MA, [cA, cA]],
  ["greatCircleDistanceKm", MA, [cA, cA]],
  ["greatCircleDistanceRads", MA, [cA, cA]],
  ["cellAreaM2", BA, [IA, zA, cA]],
  ["cellAreaKm2", BA, [IA, zA, cA]],
  ["cellAreaRads2", BA, [IA, zA, cA]],
  ["edgeLengthM", BA, [IA, zA, cA]],
  ["edgeLengthKm", BA, [IA, zA, cA]],
  ["edgeLengthRads", BA, [IA, zA, cA]],
  ["getNumCells", BA, [ht, cA]],
  ["getRes0Cells", BA, [cA]],
  ["res0CellCount", MA],
  ["getPentagons", BA, [MA, cA]],
  ["pentagonCount", MA],
  ["cellToVertex", BA, [IA, zA, MA, cA]],
  ["cellToVertexes", BA, [IA, zA, cA]],
  ["vertexToLatLng", BA, [IA, zA, cA]],
  ["isValidVertex", l0, [IA, zA]]
], bh = 0, xh = 1, kh = 2, Ph = 3, au = 4, lu = 5, Eh = 6, Bh = 7, Ch = 8, Lh = 9, Th = 10, Mh = 11, Dh = 12, Ih = 13, zh = 14, uu = 15, Sh = 16, Oh = 17, Ba = 18, Qh = 19, Xe = {};
Xe[bh] = "Success";
Xe[xh] = "The operation failed but a more specific error is not available";
Xe[kh] = "Argument was outside of acceptable range";
Xe[Ph] = "Latitude or longitude arguments were outside of acceptable range";
Xe[au] = "Resolution argument was outside of acceptable range";
Xe[lu] = "Cell argument was not valid";
Xe[Eh] = "Directed edge argument was not valid";
Xe[Bh] = "Undirected edge argument was not valid";
Xe[Ch] = "Vertex argument was not valid";
Xe[Lh] = "Pentagon distortion was encountered";
Xe[Th] = "Duplicate input";
Xe[Mh] = "Cell arguments were not neighbors";
Xe[Dh] = "Cell arguments had incompatible resolutions";
Xe[Ih] = "Memory allocation failed";
Xe[zh] = "Bounds of provided memory were insufficient";
Xe[uu] = "Mode or flags argument was not valid";
Xe[Sh] = "Index argument was not valid";
Xe[Oh] = "Base cell number was outside of acceptable range";
Xe[Ba] = "Child indexing digits invalid";
Xe[Qh] = "Child indexing digits refer to a deleted subsequence";
var P0 = 1e3, fu = 1001, hu = 1002, bs = {};
bs[P0] = "Unknown unit";
bs[fu] = "Array length out of bounds";
bs[hu] = "Got unexpected null value for H3 index";
var Rh = "Unknown error";
function cu(h, c, p) {
  var w = p && "value" in p, x = new Error((h[c] || Rh) + " (code: " + c + (w ? ", value: " + p.value : "") + ")");
  return x.code = c, x;
}
function go(h, c) {
  var p = arguments.length === 2 ? {
    value: c
  } : {};
  return cu(Xe, h, p);
}
function nr(h, c) {
  var p = arguments.length === 2 ? {
    value: c
  } : {};
  return cu(bs, h, p);
}
function PA(h) {
  if (h !== 0)
    throw go(h);
}
var fA = {};
yh.forEach(function(c) {
  fA[c[0]] = U.cwrap.apply(U, c);
});
var f0 = 16, _o = 0, dt = 4, cl = 4, _i = 8, ln = 8, ge = fA.sizeOfH3Index(), Co = fA.sizeOfLatLng(), du = fA.sizeOfCellBoundary(), Zh = fA.sizeOfGeoPolygon(), po = fA.sizeOfGeoLoop(), Fh = fA.sizeOfLinkedGeoPolygon(), _u = fA.sizeOfCoordIJ(), qt = {
  m: "m",
  m2: "m2",
  km: "km",
  km2: "km2",
  rads: "rads",
  rads2: "rads2"
}, lo = {
  containmentCenter: "containmentCenter",
  containmentFull: "containmentFull",
  containmentOverlapping: "containmentOverlapping",
  containmentOverlappingBbox: "containmentOverlappingBbox"
};
function Nh(h) {
  switch (h) {
    case lo.containmentCenter:
      return 0;
    case lo.containmentFull:
      return 1;
    case lo.containmentOverlapping:
      return 2;
    case lo.containmentOverlappingBbox:
      return 3;
    default:
      throw nr(uu, h);
  }
}
function Qr(h) {
  if (typeof h != "number" || h < 0 || h > 15 || Math.floor(h) !== h)
    throw go(au, h);
  return h;
}
function un(h) {
  if (!h)
    throw nr(hu);
  return h;
}
var Hh = Math.pow(2, 32) - 1;
function Rr(h) {
  if (h > Hh)
    throw nr(fu, h);
  return h;
}
var Uh = /[^0-9a-fA-F]/;
function UA(h) {
  if (Array.isArray(h) && h.length === 2 && Number.isInteger(h[0]) && Number.isInteger(h[1]))
    return h;
  if (typeof h != "string" || Uh.test(h))
    return [0, 0];
  var c = parseInt(h.substring(0, h.length - 8), f0), p = parseInt(h.substring(h.length - 8), f0);
  return [p, c];
}
function dl(h) {
  if (h >= 0)
    return h.toString(f0);
  h = h & 2147483647;
  var c = vu(8, h.toString(f0)), p = (parseInt(c[0], f0) + 8).toString(f0);
  return c = p + c.substring(1), c;
}
function pu(h, c) {
  return dl(c) + vu(8, dl(h));
}
function vu(h, c) {
  for (var p = h - c.length, w = "", x = 0; x < p; x++)
    w += "0";
  return w = w + c, w;
}
var Gh = Math.pow(2, 32);
function Wh(h) {
  return typeof h != "number" ? [0, 0] : [h | 0, h / Gh | 0];
}
function _l(h, c, p) {
  for (var w = h.length, x = U._calloc(w, Co), B = p ? 1 : 0, z = p ? 0 : 1, Q = 0; Q < w * 2; Q += 2)
    U.HEAPF64.set([h[Q / 2][B], h[Q / 2][z]].map(Ps), x / _i + Q);
  return U.HEAPU32.set([w, x], c / dt), c;
}
function mu(h, c) {
  var p = h.length - 1, w = U._calloc(Zh), x = 0, B = x + po, z = B + dt;
  _l(h[0], w + x, c);
  var Q;
  if (p > 0) {
    Q = U._calloc(p, po);
    for (var D = 0; D < p; D++)
      _l(h[D + 1], Q + po * D, c);
  }
  return U.setValue(w + B, p, "i32"), U.setValue(w + z, Q, "i32"), w;
}
function gu(h) {
  var c = 0, p = c + po, w = p + dt, x = dt;
  U._free(U.getValue(h + c + x, "i8*"));
  var B = U.getValue(h + p, "i32");
  if (B > 0) {
    for (var z = U.getValue(h + w, "i32"), Q = 0; Q < B; Q++)
      U._free(U.getValue(z + po * Q + x, "i8*"));
    U._free(z);
  }
  U._free(h);
}
function Li(h, c) {
  c === void 0 && (c = 0);
  var p = U.getValue(h + ge * c, "i32"), w = U.getValue(h + ge * c + dt, "i32");
  return w ? pu(p, w) : null;
}
function Vh(h, c) {
  c === void 0 && (c = 0);
  var p = U.getValue(h + dt * c, "i32");
  return !!p;
}
function xs(h, c) {
  return c === void 0 && (c = 0), U.getValue(h + _i * c, "double");
}
function fn(h) {
  return fA.readInt64AsDoubleFromPointer(h);
}
function jh(h, c, p) {
  U.HEAPU32.set(UA(h), c / dt + 2 * p);
}
function Jt(h, c) {
  for (var p = [], w = 0; w < c; w++) {
    var x = Li(h, w);
    x !== null && p.push(x);
  }
  return p;
}
function Ha(h, c) {
  for (var p = c.length, w = 0; w < p; w++)
    jh(c[w], h, w);
}
function pl(h, c) {
  var p = U._calloc(1, Co);
  return U.HEAPF64.set([h, c].map(Ps), p / _i), p;
}
function ds(h) {
  return ku(U.getValue(h, "double"));
}
function ks(h) {
  return [ds(h), ds(h + _i)];
}
function wu(h) {
  return [ds(h + _i), ds(h)];
}
function yu(h, c, p) {
  for (var w = U.getValue(h, "i32"), x = h + _i, B = [], z = c ? wu : ks, Q = 0; Q < w * 2; Q += 2)
    B.push(z(x + _i * Q));
  return p && B.push(B[0]), B;
}
function Yh(h, c) {
  for (var p = [], w = c ? wu : ks, x, B, z, Q; h; ) {
    for (p.push(x = []), B = U.getValue(h, "i8*"); B; ) {
      for (x.push(z = []), Q = U.getValue(B, "i8*"); Q; )
        z.push(w(Q)), Q = U.getValue(Q + _i * 2, "i8*");
      c && z.push(z[0]), B = U.getValue(B + cl * 2, "i8*");
    }
    h = U.getValue(h + cl * 2, "i8*");
  }
  return p;
}
function qh(h) {
  return {
    i: U.getValue(h, "i32"),
    j: U.getValue(h + dt, "i32")
  };
}
function Kh(h, c) {
  var p = c.i, w = c.j;
  U.setValue(h, p, "i32"), U.setValue(h + dt, w, "i32");
}
function Jh(h, c) {
  for (var p = [], w = 0; w < c; w++) {
    var x = U.getValue(h + dt * w, "i32");
    x >= 0 && p.push(x);
  }
  return p;
}
function Ua(h) {
  var c = UA(h), p = c[0], w = c[1];
  return !!fA.isValidCell(p, w);
}
function Xh(h) {
  var c = UA(h), p = c[0], w = c[1];
  return !!fA.isValidIndex(p, w);
}
function $h(h) {
  var c = UA(h), p = c[0], w = c[1];
  return !!fA.isPentagon(p, w);
}
function A2(h) {
  var c = UA(h), p = c[0], w = c[1];
  return !!fA.isResClassIII(p, w);
}
function e2(h) {
  var c = UA(h), p = c[0], w = c[1];
  return fA.getBaseCellNumber(p, w);
}
function t2(h, c) {
  var p = U._malloc(dt), w = UA(h), x = w[0], B = w[1];
  try {
    return PA(fA.getIndexDigit(x, B, c, p)), U.getValue(p, "i32");
  } finally {
    U._free(p);
  }
}
function i2(h) {
  var c = UA(h), p = c[0], w = c[1], x = U._malloc(dt);
  try {
    PA(fA.maxFaceCount(p, w, x));
    var B = U.getValue(x, "i32"), z = U._malloc(dt * B);
    try {
      return PA(fA.getIcosahedronFaces(p, w, z)), Jh(z, B);
    } finally {
      U._free(z);
    }
  } finally {
    U._free(x);
  }
}
function n2(h) {
  var c = UA(h), p = c[0], w = c[1];
  return fA.isValidCell(p, w) ? fA.getResolution(p, w) : -1;
}
function r2(h, c, p) {
  if (p === void 0 && (p = c.length), c.length !== p || c.length > 15)
    throw go(Ba, c.length);
  var w = U._malloc(dt * c.length), x = U._malloc(ge);
  try {
    return c.forEach(function(B, z) {
      U.setValue(w + dt * z, B, "i32");
    }), PA(fA.constructCell(p, h, w, x)), un(Li(x));
  } finally {
    U._free(x), U._free(w);
  }
}
function o2(h, c, p) {
  var w = U._malloc(Co);
  U.HEAPF64.set([h, c].map(Ps), w / _i);
  var x = U._malloc(ge);
  try {
    return PA(fA.latLngToCell(w, p, x)), un(Li(x));
  } finally {
    U._free(x), U._free(w);
  }
}
function s2(h) {
  var c = U._malloc(Co), p = UA(h), w = p[0], x = p[1];
  try {
    return PA(fA.cellToLatLng(w, x, c)), ks(c);
  } finally {
    U._free(c);
  }
}
function a2(h, c) {
  var p = U._malloc(du), w = UA(h), x = w[0], B = w[1];
  try {
    return PA(fA.cellToBoundary(x, B, p)), yu(p, c, c);
  } finally {
    U._free(p);
  }
}
function l2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(ge);
  try {
    return PA(fA.cellToParent(w, x, c, B)), un(Li(B));
  } finally {
    U._free(B);
  }
}
function u2(h, c) {
  if (!Ua(h))
    return [];
  var p = UA(h), w = p[0], x = p[1], B = Rr(bu(h, c)), z = U._calloc(B, ge);
  try {
    return PA(fA.cellToChildren(w, x, c, z)), Jt(z, B);
  } finally {
    U._free(z);
  }
}
function bu(h, c) {
  if (!Ua(h))
    throw go(lu);
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(ln);
  try {
    return PA(fA.cellToChildrenSize(w, x, c, B)), fn(B);
  } finally {
    U._free(B);
  }
}
function f2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(ge);
  try {
    return PA(fA.cellToCenterChild(w, x, c, B)), un(Li(B));
  } finally {
    U._free(B);
  }
}
function h2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(ln);
  try {
    return PA(fA.cellToChildPos(w, x, c, B)), fn(B);
  } finally {
    U._free(B);
  }
}
function c2(h, c, p) {
  var w = Wh(h), x = w[0], B = w[1], z = UA(c), Q = z[0], D = z[1], Y = U._malloc(ge);
  try {
    return PA(fA.childPosToCell(x, B, Q, D, p, Y)), un(Li(Y));
  } finally {
    U._free(Y);
  }
}
function d2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(ln);
  try {
    PA(fA.maxGridDiskSize(c, B));
    var z = Rr(fn(B)), Q = U._calloc(z, ge);
    try {
      return PA(fA.gridDisk(w, x, c, Q)), Jt(Q, z);
    } finally {
      U._free(Q);
    }
  } finally {
    U._free(B);
  }
}
function _2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(ln);
  try {
    PA(fA.maxGridDiskSize(c, B));
    var z = Rr(fn(B)), Q = U._calloc(z, ge), D = U._calloc(z, dt);
    try {
      PA(fA.gridDiskDistances(w, x, c, Q, D));
      for (var Y = [], J = 0; J < c + 1; J++)
        Y.push([]);
      for (var oA = 0; oA < z; oA++) {
        var nA = Li(Q, oA), sA = U.getValue(D + dt * oA, "i32");
        nA !== null && Y[sA].push(nA);
      }
      return Y;
    } finally {
      U._free(Q), U._free(D);
    }
  } finally {
    U._free(B);
  }
}
function p2(h, c) {
  var p = c === 0 ? 1 : 6 * c, w = U._calloc(p, ge);
  try {
    return PA(fA.gridRing.apply(fA, UA(h).concat([c], [w]))), Jt(w, p);
  } finally {
    U._free(w);
  }
}
function v2(h, c) {
  var p = c === 0 ? 1 : 6 * c, w = U._calloc(p, ge);
  try {
    return PA(fA.gridRingUnsafe.apply(fA, UA(h).concat([c], [w]))), Jt(w, p);
  } finally {
    U._free(w);
  }
}
function m2(h, c, p) {
  if (Qr(c), p = !!p, h.length === 0 || h[0].length === 0)
    return [];
  var w = typeof h[0][0] == "number" ? [h] : h, x = mu(
    // @ts-expect-error - There's no way to convince TS that polygon is now number[][][]
    w,
    p
  ), B = U._malloc(ln);
  try {
    PA(fA.maxPolygonToCellsSize(x, c, 0, B));
    var z = Rr(fn(B)), Q = U._calloc(z, ge);
    try {
      return PA(fA.polygonToCells(x, c, 0, Q)), Jt(Q, z);
    } finally {
      U._free(Q);
    }
  } finally {
    U._free(B), gu(x);
  }
}
function g2(h, c, p, w) {
  Qr(c), w = !!w;
  var x = Nh(p);
  if (h.length === 0 || h[0].length === 0)
    return [];
  var B = typeof h[0][0] == "number" ? [h] : h, z = mu(
    // @ts-expect-error - There's no way to convince TS that polygon is now number[][][]
    B,
    w
  ), Q = U._malloc(ln);
  try {
    PA(fA.maxPolygonToCellsSizeExperimental(z, c, x, Q));
    var D = Rr(fn(Q)), Y = U._calloc(D, ge);
    try {
      return PA(fA.polygonToCellsExperimental(z, c, x, D, _o, Y)), Jt(Y, D);
    } finally {
      U._free(Y);
    }
  } finally {
    U._free(Q), gu(z);
  }
}
function w2(h, c) {
  if (!h || !h.length)
    return [];
  var p = h.length, w = U._calloc(p, ge);
  Ha(w, h);
  var x = U._calloc(Fh);
  try {
    return PA(fA.cellsToLinkedMultiPolygon(w, p, x)), Yh(x, c);
  } finally {
    fA.destroyLinkedMultiPolygon(x), U._free(x), U._free(w);
  }
}
function y2(h) {
  if (!h || !h.length)
    return [];
  var c = h.length, p = U._calloc(c, ge);
  Ha(p, h);
  var w = U._calloc(c, ge);
  try {
    return PA(fA.compactCells(p, w, c, _o)), Jt(w, c);
  } finally {
    U._free(p), U._free(w);
  }
}
function b2(h, c) {
  if (Qr(c), !h || !h.length)
    return [];
  var p = h.length, w = U._calloc(p, ge);
  Ha(w, h);
  var x = U._malloc(ln);
  try {
    PA(fA.uncompactCellsSize(w, p, _o, c, x));
    var B = Rr(fn(x)), z = U._calloc(B, ge);
    try {
      return PA(fA.uncompactCells(w, p, _o, z, B, _o, c)), Jt(z, B);
    } finally {
      U._free(w), U._free(z);
    }
  } finally {
    U._free(x);
  }
}
function x2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = UA(c), z = B[0], Q = B[1], D = U._malloc(dt);
  try {
    return PA(fA.areNeighborCells(w, x, z, Q, D)), Vh(D);
  } finally {
    U._free(D);
  }
}
function k2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = UA(c), z = B[0], Q = B[1], D = U._malloc(ge);
  try {
    return PA(fA.cellsToDirectedEdge(w, x, z, Q, D)), un(Li(D));
  } finally {
    U._free(D);
  }
}
function P2(h) {
  var c = UA(h), p = c[0], w = c[1], x = U._malloc(ge);
  try {
    return PA(fA.getDirectedEdgeOrigin(p, w, x)), un(Li(x));
  } finally {
    U._free(x);
  }
}
function E2(h) {
  var c = UA(h), p = c[0], w = c[1], x = U._malloc(ge);
  try {
    return PA(fA.getDirectedEdgeDestination(p, w, x)), un(Li(x));
  } finally {
    U._free(x);
  }
}
function B2(h) {
  var c = UA(h), p = c[0], w = c[1];
  return !!fA.isValidDirectedEdge(p, w);
}
function C2(h) {
  var c = UA(h), p = c[0], w = c[1], x = 2, B = U._calloc(x, ge);
  try {
    return PA(fA.directedEdgeToCells(p, w, B)), Jt(B, x);
  } finally {
    U._free(B);
  }
}
function L2(h) {
  var c = UA(h), p = c[0], w = c[1], x = 6, B = U._calloc(x, ge);
  try {
    return PA(fA.originToDirectedEdges(p, w, B)), Jt(B, x);
  } finally {
    U._free(B);
  }
}
function T2(h, c) {
  var p = U._malloc(du), w = UA(h), x = w[0], B = w[1];
  try {
    return PA(fA.directedEdgeToBoundary(x, B, p)), yu(p, c);
  } finally {
    U._free(p);
  }
}
function M2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = UA(c), z = B[0], Q = B[1], D = U._malloc(ln);
  try {
    return PA(fA.gridDistance(w, x, z, Q, D)), fn(D);
  } finally {
    U._free(D);
  }
}
function D2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = UA(c), z = B[0], Q = B[1], D = U._malloc(ln);
  try {
    PA(fA.gridPathCellsSize(w, x, z, Q, D));
    var Y = Rr(fn(D)), J = U._calloc(Y, ge);
    try {
      return fA.gridPathCells(w, x, z, Q, J), Jt(J, Y);
    } finally {
      U._free(J);
    }
  } finally {
    U._free(D);
  }
}
var xu = 0;
function I2(h, c) {
  var p = U._malloc(_u);
  try {
    return PA(fA.cellToLocalIj.apply(fA, UA(h).concat(UA(c), [xu], [p]))), qh(p);
  } finally {
    U._free(p);
  }
}
function z2(h, c) {
  if (!c || typeof c.i != "number" || typeof c.j != "number")
    throw new Error("Coordinates must be provided as an {i, j} object");
  var p = U._malloc(_u), w = U._malloc(ge);
  Kh(p, c);
  try {
    return PA(fA.localIjToCell.apply(fA, UA(h).concat([p], [xu], [w]))), un(Li(w));
  } finally {
    U._free(p), U._free(w);
  }
}
function S2(h, c, p) {
  var w = pl(h[0], h[1]), x = pl(c[0], c[1]), B;
  switch (p) {
    case qt.m:
      B = fA.greatCircleDistanceM(w, x);
      break;
    case qt.km:
      B = fA.greatCircleDistanceKm(w, x);
      break;
    case qt.rads:
      B = fA.greatCircleDistanceRads(w, x);
      break;
    default:
      B = null;
  }
  if (U._free(w), U._free(x), B === null)
    throw nr(P0, p);
  return B;
}
function O2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(_i);
  try {
    switch (c) {
      case qt.m2:
        PA(fA.cellAreaM2(w, x, B));
        break;
      case qt.km2:
        PA(fA.cellAreaKm2(w, x, B));
        break;
      case qt.rads2:
        PA(fA.cellAreaRads2(w, x, B));
        break;
      default:
        throw nr(P0, c);
    }
    return xs(B);
  } finally {
    U._free(B);
  }
}
function Q2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(_i);
  try {
    switch (c) {
      case qt.m:
        PA(fA.edgeLengthM(w, x, B));
        break;
      case qt.km:
        PA(fA.edgeLengthKm(w, x, B));
        break;
      case qt.rads:
        PA(fA.edgeLengthRads(w, x, B));
        break;
      default:
        throw nr(P0, c);
    }
    return xs(B);
  } finally {
    U._free(B);
  }
}
function R2(h, c) {
  Qr(h);
  var p = U._malloc(_i);
  try {
    switch (c) {
      case qt.m2:
        PA(fA.getHexagonAreaAvgM2(h, p));
        break;
      case qt.km2:
        PA(fA.getHexagonAreaAvgKm2(h, p));
        break;
      default:
        throw nr(P0, c);
    }
    return xs(p);
  } finally {
    U._free(p);
  }
}
function Z2(h, c) {
  Qr(h);
  var p = U._malloc(_i);
  try {
    switch (c) {
      case qt.m:
        PA(fA.getHexagonEdgeLengthAvgM(h, p));
        break;
      case qt.km:
        PA(fA.getHexagonEdgeLengthAvgKm(h, p));
        break;
      default:
        throw nr(P0, c);
    }
    return xs(p);
  } finally {
    U._free(p);
  }
}
function F2(h, c) {
  var p = UA(h), w = p[0], x = p[1], B = U._malloc(ge);
  try {
    return PA(fA.cellToVertex(w, x, c, B)), un(Li(B));
  } finally {
    U._free(B);
  }
}
function N2(h) {
  var c = UA(h), p = c[0], w = c[1], x = 6, B = U._calloc(x, ge);
  try {
    return PA(fA.cellToVertexes(p, w, B)), Jt(B, x);
  } finally {
    U._free(B);
  }
}
function H2(h) {
  var c = U._malloc(Co), p = UA(h), w = p[0], x = p[1];
  try {
    return PA(fA.vertexToLatLng(w, x, c)), ks(c);
  } finally {
    U._free(c);
  }
}
function U2(h) {
  var c = UA(h), p = c[0], w = c[1];
  return !!fA.isValidVertex(p, w);
}
function G2(h) {
  Qr(h);
  var c = U._malloc(ln);
  try {
    return PA(fA.getNumCells(h, c)), fn(c);
  } finally {
    U._free(c);
  }
}
function W2() {
  var h = fA.res0CellCount(), c = U._malloc(ge * h);
  try {
    return PA(fA.getRes0Cells(c)), Jt(c, h);
  } finally {
    U._free(c);
  }
}
function V2(h) {
  Qr(h);
  var c = fA.pentagonCount(), p = U._malloc(ge * c);
  try {
    return PA(fA.getPentagons(h, p)), Jt(p, c);
  } finally {
    U._free(p);
  }
}
function Ps(h) {
  return h * Math.PI / 180;
}
function ku(h) {
  return h * 180 / Math.PI;
}
const j2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POLYGON_TO_CELLS_FLAGS: lo,
  UNITS: qt,
  areNeighborCells: x2,
  cellArea: O2,
  cellToBoundary: a2,
  cellToCenterChild: f2,
  cellToChildPos: h2,
  cellToChildren: u2,
  cellToChildrenSize: bu,
  cellToLatLng: s2,
  cellToLocalIj: I2,
  cellToParent: l2,
  cellToVertex: F2,
  cellToVertexes: N2,
  cellsToDirectedEdge: k2,
  cellsToMultiPolygon: w2,
  childPosToCell: c2,
  compactCells: y2,
  constructCell: r2,
  degsToRads: Ps,
  directedEdgeToBoundary: T2,
  directedEdgeToCells: C2,
  edgeLength: Q2,
  getBaseCellNumber: e2,
  getDirectedEdgeDestination: E2,
  getDirectedEdgeOrigin: P2,
  getHexagonAreaAvg: R2,
  getHexagonEdgeLengthAvg: Z2,
  getIcosahedronFaces: i2,
  getIndexDigit: t2,
  getNumCells: G2,
  getPentagons: V2,
  getRes0Cells: W2,
  getResolution: n2,
  greatCircleDistance: S2,
  gridDisk: d2,
  gridDiskDistances: _2,
  gridDistance: M2,
  gridPathCells: D2,
  gridRing: p2,
  gridRingUnsafe: v2,
  h3IndexToSplitLong: UA,
  isPentagon: $h,
  isResClassIII: A2,
  isValidCell: Ua,
  isValidDirectedEdge: B2,
  isValidIndex: Xh,
  isValidVertex: U2,
  latLngToCell: o2,
  localIjToCell: z2,
  originToDirectedEdges: L2,
  polygonToCells: m2,
  polygonToCellsExperimental: g2,
  radsToDegs: ku,
  splitLongToH3Index: pu,
  uncompactCells: b2,
  vertexToLatLng: H2
}, Symbol.toStringTag, { value: "Module" })), Y2 = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';
var q2 = /* @__PURE__ */ He('<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), K2 = /* @__PURE__ */ He('<div class="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), J2 = /* @__PURE__ */ He('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading lands...</span></div>'), X2 = /* @__PURE__ */ He('<div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded"></span> <span class="capitalize text-gray-600"> </span></div>'), $2 = /* @__PURE__ */ He('<div><div class="mb-4"><h3 class="text-lg font-semibold mb-2 text-gray-800">Land Registry Map</h3> <p class="text-sm text-gray-500 mb-3">Land parcels displayed as H3 hexagonal zones</p> <div class="flex flex-wrap gap-4 text-xs"></div></div> <div class="w-full rounded-lg border border-gray-300 relative z-0" style="height:500px;min-height:400px"></div> <div class="mt-3 flex items-center gap-4 text-xs text-gray-500"><div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border-2 border-gray-800"></span><span>Owned</span></div> <div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border border-gray-400"></span><span>Available</span></div> <button class="ml-auto px-3 py-1 bg-gray-100 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors">Refresh</button></div></div>'), Ac = /* @__PURE__ */ He('<span class="text-gray-400">-</span>'), ec = /* @__PURE__ */ He('<span class="text-green-600 font-medium">For Sale</span>'), tc = /* @__PURE__ */ He('<span class="text-gray-600">Owned</span>'), ic = /* @__PURE__ */ He('<span class="text-blue-600">Available</span>'), nc = /* @__PURE__ */ He('<span class="text-green-700 font-semibold"> </span>'), rc = /* @__PURE__ */ He('<span class="text-gray-400">-</span>'), oc = /* @__PURE__ */ He('<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3 text-sm font-medium text-gray-900"> </td><td class="px-4 py-3 text-sm"><span> </span></td><td class="px-4 py-3 text-sm text-gray-600"><!></td><td class="px-4 py-3 text-sm text-gray-600"> </td><td class="px-4 py-3 text-sm"><!></td><td class="px-4 py-3 text-sm"><!></td></tr>'), sc = /* @__PURE__ */ He('<div class="flex justify-center items-center mt-4 gap-2"><button>Previous</button> <span class="text-sm text-gray-600"> </span> <button>Next</button></div>'), ac = /* @__PURE__ */ He('<div class="overflow-x-auto rounded-lg border border-gray-200"><table class="min-w-full"><thead class="bg-gray-50"><tr><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"></tbody></table></div> <!>', 1), lc = /* @__PURE__ */ He('<div class="text-center py-8 text-gray-500">No land parcels registered yet.</div>'), uc = /* @__PURE__ */ He('<div><div class="mb-4 flex items-center justify-between"><div><h3 class="text-lg font-semibold text-gray-800">Land Registry Table</h3> <p class="text-sm text-gray-500"> </p></div> <button class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors">Refresh</button></div> <!></div>'), fc = /* @__PURE__ */ He("<option> </option>"), hc = /* @__PURE__ */ He('<div><label for="own-uid" class="block text-sm font-medium text-gray-700 mb-1">User ID</label> <input id="own-uid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter user ID" required=""/></div>'), cc = /* @__PURE__ */ He('<div><label for="own-oid" class="block text-sm font-medium text-gray-700 mb-1">Organization ID</label> <input id="own-oid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter organization ID" required=""/></div>'), dc = /* @__PURE__ */ He("<option> </option>"), _c = /* @__PURE__ */ He("<option> </option>"), pc = /* @__PURE__ */ He('<div class="space-y-6"><div><h3 class="text-lg font-semibold text-gray-800">Admin Controls</h3> <p class="text-gray-500 text-sm">Create new land parcels and manage ownership</p></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Create New Land Parcel</h4> <form class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label for="lr-x" class="block text-sm font-medium text-gray-700 mb-1">X Coordinate</label> <input id="lr-x" type="number" min="0" max="19" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" required=""/></div> <div><label for="lr-y" class="block text-sm font-medium text-gray-700 mb-1">Y Coordinate</label> <input id="lr-y" type="number" min="0" max="19" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" required=""/></div></div> <div><label for="lr-type" class="block text-sm font-medium text-gray-700 mb-1">Land Type</label> <select id="lr-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"></select></div> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Update Land Ownership</h4> <form class="space-y-4"><div><label for="own-id" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="own-id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID" required=""/></div> <div><label for="own-type" class="block text-sm font-medium text-gray-700 mb-1">Owner Type</label> <select id="own-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>No Owner</option><option>Citizen</option><option>Organization</option></select></div> <!> <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Update Land Properties</h4> <form class="space-y-4"><div><label for="upd-id" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="upd-id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID" required=""/></div> <div><label for="upd-type" class="block text-sm font-medium text-gray-700 mb-1">Land Type (optional)</label> <select id="upd-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>-- No change --</option><!></select></div> <div><label for="upd-status" class="block text-sm font-medium text-gray-700 mb-1">Status (optional)</label> <select id="upd-status" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>-- No change --</option><!></select></div> <button type="submit" class="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-2 text-gray-800">Mint Land NFT</h4> <p class="text-sm text-gray-500 mb-4">Register a land parcel and mint an NFT representing ownership</p> <form class="space-y-4"><div><label for="nft-lid" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="nft-lid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID to mint NFT for" required=""/></div> <div><label for="nft-own" class="block text-sm font-medium text-gray-700 mb-1">Owner Principal</label> <input id="nft-own" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Principal ID of the NFT owner" required=""/></div> <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div></div>'), vc = /* @__PURE__ */ He('<div class="max-w-5xl mx-auto p-4"><div class="mb-6"><h2 class="text-2xl font-bold text-gray-900">Land Registry</h2> <p class="text-gray-600 text-sm mt-1">Manage land parcels, ownership, and NFT minting</p></div> <!> <!> <div class="border-b border-gray-200 mb-6"><nav class="-mb-px flex space-x-8"><button>Map View</button> <button>Table View</button> <button>Admin Controls</button></nav></div> <!></div>');
function mc(h, c) {
  xl(c, !0);
  let p = /* @__PURE__ */ Ke("geographic"), w = /* @__PURE__ */ Ke(nn([])), x = /* @__PURE__ */ Ke(!0), B = /* @__PURE__ */ Ke(""), z = /* @__PURE__ */ Ke(""), Q = /* @__PURE__ */ Ke(void 0), D = /* @__PURE__ */ Ke(null), Y = null, J = null, oA = null, nA = null, sA = null, rA = /* @__PURE__ */ Ke(0);
  const _A = 10;
  let aA = /* @__PURE__ */ la(() => Math.ceil(V(w).length / _A)), $A = /* @__PURE__ */ la(() => V(w).slice(V(rA) * _A, (V(rA) + 1) * _A)), we = /* @__PURE__ */ Ke(nn({
    x_coordinate: 0,
    y_coordinate: 0,
    land_type: "unassigned",
    size_width: 1,
    size_height: 1
  })), LA = /* @__PURE__ */ Ke(nn({
    land_id: "",
    owner_user_id: "",
    owner_organization_id: "",
    owner_type: "none"
  })), fe = /* @__PURE__ */ Ke(nn({ land_id: "", land_type: "", status: "" })), Ee = /* @__PURE__ */ Ke(nn({ land_id: "", owner_principal: "" })), ce = /* @__PURE__ */ Ke(!1);
  const We = [
    { value: "unassigned", label: "Unassigned" },
    { value: "residential", label: "Residential" },
    { value: "agricultural", label: "Agricultural" },
    { value: "industrial", label: "Industrial" },
    { value: "commercial", label: "Commercial" }
  ], Qt = [
    { value: "active", label: "Active" },
    { value: "disputed", label: "Disputed" },
    { value: "transferred", label: "Transferred" },
    { value: "revoked", label: "Revoked" }
  ], bt = {
    residential: "#4ade80",
    agricultural: "#fbbf24",
    industrial: "#6b7280",
    commercial: "#3b82f6",
    unassigned: "#e5e7eb"
  }, Me = "#f59e0b", Le = 2;
  async function ve(lA, pA = {}) {
    return await c.ctx.callSync(lA, pA);
  }
  async function xt() {
    CA(x, !0), CA(B, "");
    try {
      const lA = await ve("get_lands");
      lA?.success ? CA(w, lA.data ?? [], !0) : CA(w, lA?.data ?? (Array.isArray(lA) ? lA : []), !0);
    } catch (lA) {
      CA(B, lA?.message || String(lA), !0);
    } finally {
      CA(x, !1);
    }
  }
  async function kt() {
    if (!V(Q) || V(D)) return;
    if (Y = su ?? wh, J = j2, !document.querySelector("style[data-leaflet-css]")) {
      const pA = document.createElement("style");
      pA.setAttribute("data-leaflet-css", ""), pA.textContent = Y2, document.head.appendChild(pA);
    }
    CA(D, Y.map(V(Q)).setView([20, 0], 2), !0);
    const lA = Y.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    lA.on("tileerror", () => {
      V(D)._fb || (V(D)._fb = !0, V(D).removeLayer(lA), Y.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(V(D)));
    }), lA.addTo(V(D)), nA = Y.layerGroup().addTo(V(D)), oA = Y.layerGroup().addTo(V(D)), sA = Y.layerGroup().addTo(V(D)), V(D).on("zoomend", Rt), Rt(), Xt();
  }
  function Rt() {
    if (!V(D) || !nA || !oA) return;
    V(D).getZoom() < 10 ? (nA.addTo(V(D)), V(D).removeLayer(oA)) : (oA.addTo(V(D)), V(D).removeLayer(nA));
  }
  function tt() {
    if (!Y || !V(D) || !J || !sA) return;
    sA.clearLayers();
    const lA = /* @__PURE__ */ new Map();
    for (const GA of V(w)) {
      let YA = null;
      if (GA.metadata)
        try {
          YA = (typeof GA.metadata == "string" ? JSON.parse(GA.metadata) : GA.metadata).parent_zone;
        } catch {
        }
      if (!YA) continue;
      lA.has(YA) || lA.set(YA, { landCount: 0, landTypes: {} });
      const Pe = lA.get(YA);
      Pe.landCount++, Pe.landTypes[GA.land_type] = (Pe.landTypes[GA.land_type] || 0) + 1;
    }
    if (lA.size === 0) return;
    const pA = {};
    lA.forEach((GA, YA) => {
      let Pe;
      try {
        Pe = J.gridDisk(YA, Le);
      } catch {
        Pe = [YA];
      }
      for (const re of Pe) {
        let Ze;
        try {
          Ze = J.gridDistance(YA, re);
        } catch {
          Ze = re === YA ? 0 : 1;
        }
        pA[re] ? pA[re].minDistance = Math.min(pA[re].minDistance, Ze) : pA[re] = { minDistance: Ze, landCount: 0, landTypes: {} }, Ze === 0 && (pA[re].landCount += GA.landCount, pA[re].landTypes = GA.landTypes);
      }
    });
    const Be = [];
    for (const [GA, YA] of Object.entries(pA))
      try {
        const re = J.cellToBoundary(GA).map((_e) => [_e[0], _e[1]]), Ze = 1 - YA.minDistance / (Le + 1) * 0.7, Ct = YA.minDistance === 0 ? 0.5 : 0.25, st = Y.polygon(re, {
          color: Me,
          fillColor: Me,
          fillOpacity: Ct * Ze,
          weight: YA.minDistance === 0 ? 2 : 1,
          opacity: YA.minDistance === 0 ? 0.8 : 0.4,
          dashArray: YA.minDistance > 0 ? "4 4" : void 0
        });
        if (YA.minDistance === 0) {
          const _e = Object.entries(YA.landTypes).map(([je, _t]) => `${je}: ${_t}`).join(", ");
          st.bindPopup(`<div style="padding:4px"><strong>Land Zone</strong><br>Parcels: ${YA.landCount}<br>${_e ? `Types: ${_e}<br>` : ""}<span style="font-size:10px;color:#9ca3af">H3: ${GA}</span></div>`);
        }
        st.addTo(sA), Be.push(...re);
      } catch {
      }
    Be.length > 0 && V(D).fitBounds(Y.latLngBounds(Be), { padding: [50, 50], maxZoom: 12 });
  }
  function Xt() {
    if (!Y || !V(D) || !oA || !nA) return;
    oA.clearLayers(), nA.clearLayers(), tt();
    const lA = [];
    for (const pA of V(w)) {
      const Be = bt[pA.land_type] || bt.unassigned, GA = pA.owner_user_id || pA.owner_organization_id;
      let YA = null, Pe = null, re = pA.h3_index;
      if (pA.latitude && pA.longitude)
        YA = pA.latitude, Pe = pA.longitude;
      else if (J && re && !re.includes("manual"))
        try {
          const _e = J.cellToLatLng(re);
          YA = _e[0], Pe = _e[1];
        } catch {
          re = null;
        }
      if (YA == null && J) {
        let _e = null;
        if (pA.metadata)
          try {
            _e = (typeof pA.metadata == "string" ? JSON.parse(pA.metadata) : pA.metadata).parent_zone;
          } catch {
          }
        if (_e)
          try {
            const je = J.cellToLatLng(_e);
            YA = je[0], Pe = je[1], re = _e;
          } catch {
          }
      }
      if (YA == null || Pe == null) continue;
      lA.push([YA, Pe]);
      const Ze = pA.for_sale && pA.price_realm_tokens ? `<br><span style="color:#16a34a;font-weight:600">${pA.price_realm_tokens} REALM</span>` : "", Ct = pA.owner_user_id ? `<br>Owner: User ${pA.owner_user_id}` : pA.owner_organization_id ? `<br>Owner: Org ${pA.owner_organization_id}` : '<br><span style="color:#2563eb">Available</span>', st = `<div style="padding:4px"><strong>${pA.id}</strong><br>Type: <span style="color:${Be}">${pA.land_type}</span>${Ct}${Ze}${re ? `<br><span style="font-size:10px;color:#9ca3af">H3: ${re}</span>` : ""}</div>`;
      if (Y.circleMarker([YA, Pe], {
        radius: 18,
        fillColor: Be,
        color: GA ? "#1f2937" : "#22c55e",
        weight: 3,
        opacity: 1,
        fillOpacity: 0.85
      }).bindPopup(st).addTo(nA), J && re && !re.includes("manual"))
        try {
          const je = J.cellToBoundary(re).map((_t) => [_t[0], _t[1]]);
          Y.polygon(je, {
            color: GA ? "#1f2937" : "#9ca3af",
            fillColor: Be,
            fillOpacity: GA ? 0.7 : 0.5,
            weight: GA ? 2 : 1
          }).bindPopup(st).addTo(oA);
        } catch {
        }
    }
    lA.length > 0 && sA && sA.getLayers().length === 0 && V(D).fitBounds(Y.latLngBounds(lA), { padding: [50, 50], maxZoom: 12 }), Rt();
  }
  function QA(lA) {
    return {
      residential: "bg-green-100 text-green-800",
      agricultural: "bg-yellow-100 text-yellow-800",
      industrial: "bg-gray-100 text-gray-800",
      commercial: "bg-blue-100 text-blue-800"
    }[lA] || "bg-gray-100 text-gray-600";
  }
  async function Zr() {
    CA(ce, !0), CA(B, ""), CA(z, "");
    try {
      const lA = await ve("create_land", V(we));
      lA?.success ? (CA(z, "Land created successfully!"), CA(
        we,
        {
          x_coordinate: 0,
          y_coordinate: 0,
          land_type: "unassigned",
          size_width: 1,
          size_height: 1
        },
        !0
      ), await xt()) : CA(B, lA?.error || "Failed to create land", !0);
    } catch (lA) {
      CA(B, lA?.message || String(lA), !0);
    } finally {
      CA(ce, !1);
    }
  }
  async function SA() {
    CA(ce, !0), CA(B, ""), CA(z, "");
    try {
      const lA = { land_id: V(LA).land_id };
      V(LA).owner_type === "user" ? lA.owner_user_id = V(LA).owner_user_id : V(LA).owner_type === "organization" && (lA.owner_organization_id = V(LA).owner_organization_id);
      const pA = await ve("update_land_ownership", lA);
      pA?.success ? (CA(z, "Ownership updated!"), CA(
        LA,
        {
          land_id: "",
          owner_user_id: "",
          owner_organization_id: "",
          owner_type: "none"
        },
        !0
      ), await xt()) : CA(B, pA?.error || "Failed to update ownership", !0);
    } catch (lA) {
      CA(B, lA?.message || String(lA), !0);
    } finally {
      CA(ce, !1);
    }
  }
  async function ke() {
    CA(ce, !0), CA(B, ""), CA(z, "");
    try {
      const lA = { land_id: V(fe).land_id };
      V(fe).land_type && (lA.land_type = V(fe).land_type), V(fe).status && (lA.status = V(fe).status);
      const pA = await ve("update_land", lA);
      pA?.success ? (CA(z, pA?.data?.message || "Land updated!", !0), CA(fe, { land_id: "", land_type: "", status: "" }, !0), await xt()) : CA(B, pA?.error || "Failed to update land", !0);
    } catch (lA) {
      CA(B, lA?.message || String(lA), !0);
    } finally {
      CA(ce, !1);
    }
  }
  async function Ve() {
    CA(ce, !0), CA(B, ""), CA(z, "");
    try {
      const lA = await ve("register_land_nft", {
        land_id: V(Ee).land_id,
        owner_principal: V(Ee).owner_principal,
        registered_by: c.ctx.principal || "admin"
      });
      if (!lA?.success) {
        CA(B, lA?.error || "Failed to prepare NFT", !0);
        return;
      }
      const pA = lA.data, Be = await c.ctx.backend.mint_land_nft_for_parcel(V(Ee).land_id, V(Ee).owner_principal, BigInt(pA.token_id), ""), GA = JSON.parse(Be);
      GA.success ? (await ve("update_land_nft_token", {
        land_id: V(Ee).land_id,
        nft_token_id: GA.token_id
      }), CA(z, `NFT minted! Token ID: ${GA.token_id}`), CA(Ee, { land_id: "", owner_principal: "" }, !0), await xt()) : CA(B, GA.error || "Mint failed", !0);
    } catch (lA) {
      CA(B, lA?.message || String(lA), !0);
    } finally {
      CA(ce, !1);
    }
  }
  Gl(() => {
    V(p) === "geographic" && V(w).length > 0 && V(D) && Xt();
  }), _h(async () => {
    await xt(), await ya(), V(Q) && await kt();
  });
  var $e = vc(), De = bA(wA($e), 2);
  {
    var de = (lA) => {
      var pA = q2(), Be = wA(pA);
      ui(() => wt(Be, V(B))), Re(lA, pA);
    };
    kn(De, (lA) => {
      V(B) && lA(de);
    });
  }
  var ee = bA(De, 2);
  {
    var $t = (lA) => {
      var pA = K2(), Be = wA(pA);
      ui(() => wt(Be, V(z))), Re(lA, pA);
    };
    kn(ee, (lA) => {
      V(z) && lA($t);
    });
  }
  var Ai = bA(ee, 2), Fr = wA(Ai), hn = wA(Fr), cn = bA(hn, 2), Ni = bA(cn, 2), rr = bA(Ai, 2);
  {
    var E0 = (lA) => {
      var pA = J2();
      Re(lA, pA);
    }, Nr = (lA) => {
      var pA = $2(), Be = wA(pA), GA = bA(wA(Be), 4);
      ro(GA, 21, () => Object.entries(bt), no, (Ze, Ct) => {
        var st = /* @__PURE__ */ la(() => Nu(V(Ct), 2));
        let _e = () => V(st)[0], je = () => V(st)[1];
        var _t = X2(), pi = wA(_t), Hi = bA(pi, 2), Ti = wA(Hi);
        ui(() => {
          hh(pi, `background-color:${je() ?? ""}`), wt(Ti, _e());
        }), Re(Ze, _t);
      });
      var YA = bA(Be, 2);
      dh(YA, (Ze) => CA(Q, Ze), () => V(Q));
      var Pe = bA(YA, 2), re = bA(wA(Pe), 4);
      yr("click", re, xt), Re(lA, pA);
    }, Hr = (lA) => {
      var pA = uc(), Be = wA(pA), GA = wA(Be), YA = bA(wA(GA), 2), Pe = wA(YA), re = bA(GA, 2), Ze = bA(Be, 2);
      {
        var Ct = (_e) => {
          var je = ac(), _t = Qf(je), pi = wA(_t), Hi = bA(wA(pi));
          ro(Hi, 21, () => V($A), no, (ti, Ce) => {
            var it = oc(), ii = wA(it), $ = wA(ii), Zt = bA(ii), Ui = wA(Zt), Dn = wA(Ui), _n = bA(Zt), pn = wA(_n);
            {
              var vn = (gA) => {
                var ne = th();
                ui((EA, KA) => wt(ne, `${EA ?? ""}, ${KA ?? ""}`), [
                  () => V(Ce).latitude.toFixed(4),
                  () => V(Ce).longitude.toFixed(4)
                ]), Re(gA, ne);
              }, mn = (gA) => {
                var ne = Ac();
                Re(gA, ne);
              };
              kn(pn, (gA) => {
                V(Ce).latitude && V(Ce).longitude ? gA(vn) : gA(mn, -1);
              });
            }
            var Gi = bA(_n), Wi = wA(Gi), ni = bA(Gi), ri = wA(ni);
            {
              var G = (gA) => {
                var ne = ec();
                Re(gA, ne);
              }, K = (gA) => {
                var ne = tc();
                Re(gA, ne);
              }, uA = (gA) => {
                var ne = ic();
                Re(gA, ne);
              };
              kn(ri, (gA) => {
                V(Ce).for_sale ? gA(G) : V(Ce).owner_user_id || V(Ce).owner_organization_id ? gA(K, 1) : gA(uA, -1);
              });
            }
            var q = bA(ni), A = wA(q);
            {
              var y = (gA) => {
                var ne = nc(), EA = wA(ne);
                ui(() => wt(EA, `${V(Ce).price_realm_tokens ?? ""} REALM`)), Re(gA, ne);
              }, qA = (gA) => {
                var ne = rc();
                Re(gA, ne);
              };
              kn(A, (gA) => {
                V(Ce).for_sale && V(Ce).price_realm_tokens ? gA(y) : gA(qA, -1);
              });
            }
            ui(
              (gA) => {
                wt($, V(Ce).id), a0(Ui, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${gA ?? ""}`), wt(Dn, V(Ce).land_type), wt(Wi, V(Ce).owner_user_id || V(Ce).owner_organization_id || "-");
              },
              [() => QA(V(Ce).land_type)]
            ), Re(ti, it);
          });
          var Ti = bA(_t, 2);
          {
            var dn = (ti) => {
              var Ce = sc(), it = wA(Ce), ii = bA(it, 2), $ = wA(ii), Zt = bA(ii, 2);
              ui(() => {
                a0(it, 1, `px-3 py-1 rounded border text-sm ${V(rA) > 0 ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`), it.disabled = V(rA) === 0, wt($, `Page ${V(rA) + 1} of ${V(aA) ?? ""}`), a0(Zt, 1, `px-3 py-1 rounded border text-sm ${V(rA) < V(aA) - 1 ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`), Zt.disabled = V(rA) >= V(aA) - 1;
              }), yr("click", it, () => CA(rA, Math.max(0, V(rA) - 1), !0)), yr("click", Zt, () => CA(rA, Math.min(V(aA) - 1, V(rA) + 1), !0)), Re(ti, Ce);
            };
            kn(Ti, (ti) => {
              V(aA) > 1 && ti(dn);
            });
          }
          Re(_e, je);
        }, st = (_e) => {
          var je = lc();
          Re(_e, je);
        };
        kn(Ze, (_e) => {
          V(w).length > 0 ? _e(Ct) : _e(st, -1);
        });
      }
      ui(() => wt(Pe, `Showing ${V($A).length ?? ""} of ${V(w).length ?? ""} parcels`)), yr("click", re, xt), Re(lA, pA);
    }, ei = (lA) => {
      var pA = pc(), Be = bA(wA(pA), 2), GA = bA(wA(Be), 2), YA = wA(GA), Pe = wA(YA), re = bA(wA(Pe), 2), Ze = bA(Pe, 2), Ct = bA(wA(Ze), 2), st = bA(YA, 2), _e = bA(wA(st), 2);
      ro(_e, 21, () => We, no, (WA, Oe) => {
        var he = fc(), Ye = wA(he), qe = {};
        ui(() => {
          wt(Ye, V(Oe).label), qe !== (qe = V(Oe).value) && (he.value = (he.__value = V(Oe).value) ?? "");
        }), Re(WA, he);
      });
      var je = bA(st, 2), _t = wA(je), pi = bA(Be, 2), Hi = bA(wA(pi), 2), Ti = wA(Hi), dn = bA(wA(Ti), 2), ti = bA(Ti, 2), Ce = bA(wA(ti), 2), it = wA(Ce);
      it.value = it.__value = "none";
      var ii = bA(it);
      ii.value = ii.__value = "user";
      var $ = bA(ii);
      $.value = $.__value = "organization";
      var Zt = bA(ti, 2);
      {
        var Ui = (WA) => {
          var Oe = hc(), he = bA(wA(Oe), 2);
          qn(he, () => V(LA).owner_user_id, (Ye) => V(LA).owner_user_id = Ye), Re(WA, Oe);
        }, Dn = (WA) => {
          var Oe = cc(), he = bA(wA(Oe), 2);
          qn(he, () => V(LA).owner_organization_id, (Ye) => V(LA).owner_organization_id = Ye), Re(WA, Oe);
        };
        kn(Zt, (WA) => {
          V(LA).owner_type === "user" ? WA(Ui) : V(LA).owner_type === "organization" && WA(Dn, 1);
        });
      }
      var _n = bA(Zt, 2), pn = wA(_n), vn = bA(pi, 2), mn = bA(wA(vn), 2), Gi = wA(mn), Wi = bA(wA(Gi), 2), ni = bA(Gi, 2), ri = bA(wA(ni), 2), G = wA(ri);
      G.value = G.__value = "";
      var K = bA(G);
      ro(K, 17, () => We, no, (WA, Oe) => {
        var he = dc(), Ye = wA(he), qe = {};
        ui(() => {
          wt(Ye, V(Oe).label), qe !== (qe = V(Oe).value) && (he.value = (he.__value = V(Oe).value) ?? "");
        }), Re(WA, he);
      });
      var uA = bA(ni, 2), q = bA(wA(uA), 2), A = wA(q);
      A.value = A.__value = "";
      var y = bA(A);
      ro(y, 17, () => Qt, no, (WA, Oe) => {
        var he = _c(), Ye = wA(he), qe = {};
        ui(() => {
          wt(Ye, V(Oe).label), qe !== (qe = V(Oe).value) && (he.value = (he.__value = V(Oe).value) ?? "");
        }), Re(WA, he);
      });
      var qA = bA(uA, 2), gA = wA(qA), ne = bA(vn, 2), EA = bA(wA(ne), 4), KA = wA(EA), pt = bA(wA(KA), 2), oe = bA(KA, 2), ZA = bA(wA(oe), 2), vt = bA(oe, 2), In = wA(vt);
      ui(() => {
        je.disabled = V(ce), wt(_t, V(ce) ? "Creating..." : "Create Land Parcel"), _n.disabled = V(ce), wt(pn, V(ce) ? "Updating..." : "Update Ownership"), qA.disabled = V(ce), wt(gA, V(ce) ? "Updating..." : "Update Land"), vt.disabled = V(ce), wt(In, V(ce) ? "Minting..." : "Mint NFT");
      }), es("submit", GA, (WA) => {
        WA.preventDefault(), Zr();
      }), qn(re, () => V(we).x_coordinate, (WA) => V(we).x_coordinate = WA), qn(Ct, () => V(we).y_coordinate, (WA) => V(we).y_coordinate = WA), is(_e, () => V(we).land_type, (WA) => V(we).land_type = WA), es("submit", Hi, (WA) => {
        WA.preventDefault(), SA();
      }), qn(dn, () => V(LA).land_id, (WA) => V(LA).land_id = WA), is(Ce, () => V(LA).owner_type, (WA) => V(LA).owner_type = WA), es("submit", mn, (WA) => {
        WA.preventDefault(), ke();
      }), qn(Wi, () => V(fe).land_id, (WA) => V(fe).land_id = WA), is(ri, () => V(fe).land_type, (WA) => V(fe).land_type = WA), is(q, () => V(fe).status, (WA) => V(fe).status = WA), es("submit", EA, (WA) => {
        WA.preventDefault(), Ve();
      }), qn(pt, () => V(Ee).land_id, (WA) => V(Ee).land_id = WA), qn(ZA, () => V(Ee).owner_principal, (WA) => V(Ee).owner_principal = WA), Re(lA, pA);
    };
    kn(rr, (lA) => {
      V(x) ? lA(E0) : V(p) === "geographic" ? lA(Nr, 1) : V(p) === "table" ? lA(Hr, 2) : V(p) === "admin" && lA(ei, 3);
    });
  }
  ui(() => {
    a0(hn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${V(p) === "geographic" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), a0(cn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${V(p) === "table" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), a0(Ni, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${V(p) === "admin" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`);
  }), yr("click", hn, () => {
    CA(p, "geographic"), ya().then(() => {
      V(Q) && !V(D) ? kt() : V(D) && (V(D).invalidateSize(), Xt());
    });
  }), yr("click", cn, () => CA(p, "table")), yr("click", Ni, () => CA(p, "admin")), Re(h, $e), kl();
}
Xf(["click"]);
function yc(h, c) {
  const p = ih(mc, { target: h, props: { ctx: c } });
  return {
    unmount() {
      try {
        rh(p);
      } catch {
      }
    }
  };
}
export {
  yc as default
};
