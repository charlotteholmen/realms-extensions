var Rl = Object.defineProperty;
var wa = (d) => {
  throw TypeError(d);
};
var Zl = (d, c, g) => c in d ? Rl(d, c, { enumerable: !0, configurable: !0, writable: !0, value: g }) : d[c] = g;
var ai = (d, c, g) => Zl(d, typeof c != "symbol" ? c + "" : c, g), Is = (d, c, g) => c.has(d) || wa("Cannot " + g);
var N = (d, c, g) => (Is(d, c, "read from private field"), g ? g.call(d) : c.get(d)), FA = (d, c, g) => c.has(d) ? wa("Cannot add the same private member more than once") : c instanceof WeakSet ? c.add(d) : c.set(d, g), UA = (d, c, g, C) => (Is(d, c, "write to private field"), C ? C.call(d, g) : c.set(d, g), g), pt = (d, c, g) => (Is(d, c, "access private method"), g);
function Fl(d, c) {
  for (var g = 0; g < c.length; g++) {
    const C = c[g];
    if (typeof C != "string" && !Array.isArray(C)) {
      for (const T in C)
        if (T !== "default" && !(T in d)) {
          const S = Object.getOwnPropertyDescriptor(C, T);
          S && Object.defineProperty(d, T, S.get ? S : {
            enumerable: !0,
            get: () => C[T]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
const Nl = !1;
var Za = Array.isArray, Gl = Array.prototype.indexOf, T0 = Array.prototype.includes, No = Array.from, Hl = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, Ul = Object.getOwnPropertyDescriptors, Wl = Object.prototype, jl = Array.prototype, Fa = Object.getPrototypeOf, ya = Object.isExtensible;
const Yl = () => {
};
function Vl(d) {
  for (var c = 0; c < d.length; c++)
    d[c]();
}
function Na() {
  var d, c, g = new Promise((C, T) => {
    d = C, c = T;
  });
  return { promise: g, resolve: d, reject: c };
}
const Xt = 2, M0 = 4, Go = 8, Ga = 1 << 24, Pi = 16, hi = 32, un = 64, Rs = 128, qe = 512, Qt = 1024, Kt = 2048, Bi = 4096, le = 8192, Je = 16384, Vn = 32768, Zs = 1 << 25, D0 = 65536, Fs = 1 << 17, Ha = 1 << 18, Kn = 1 << 19, Kl = 1 << 20, Ri = 1 << 25, Wn = 65536, Io = 1 << 21, Lr = 1 << 22, an = 1 << 23, Bo = Symbol("$state"), ql = Symbol(""), Ii = new class extends Error {
  constructor() {
    super(...arguments);
    ai(this, "name", "StaleReactionError");
    ai(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Jl(d) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Xl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function $l(d, c, g) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Au(d) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function tu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function eu(d) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function iu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function nu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ru() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ou() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function su() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const au = 1, lu = 2, uu = 16, fu = 1, hu = 2, Ut = Symbol(), Ua = "http://www.w3.org/1999/xhtml";
function _u() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function cu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Wa(d) {
  return d === this.v;
}
function du(d, c) {
  return d != d ? c == c : d !== c || d !== null && typeof d == "object" || typeof d == "function";
}
function ja(d) {
  return !du(d, this.v);
}
let mu = !1, Pe = null;
function I0(d) {
  Pe = d;
}
function Ya(d, c = !1, g) {
  Pe = {
    p: Pe,
    i: !1,
    c: null,
    e: null,
    s: d,
    x: null,
    r: (
      /** @type {Effect} */
      KA
    ),
    l: null
  };
}
function Va(d) {
  var c = (
    /** @type {ComponentContext} */
    Pe
  ), g = c.e;
  if (g !== null) {
    c.e = null;
    for (var C of g)
      cl(C);
  }
  return c.i = !0, Pe = c.p, /** @type {T} */
  {};
}
function Ka() {
  return !0;
}
let In = [];
function qa() {
  var d = In;
  In = [], Vl(d);
}
function Nn(d) {
  if (In.length === 0 && !xr) {
    var c = In;
    queueMicrotask(() => {
      c === In && qa();
    });
  }
  In.push(d);
}
function pu() {
  for (; In.length > 0; )
    qa();
}
function Ja(d) {
  var c = KA;
  if (c === null)
    return VA.f |= an, d;
  if ((c.f & Vn) === 0 && (c.f & M0) === 0)
    throw d;
  sn(d, c);
}
function sn(d, c) {
  for (; c !== null; ) {
    if ((c.f & Rs) !== 0) {
      if ((c.f & Vn) === 0)
        throw d;
      try {
        c.b.error(d);
        return;
      } catch (g) {
        d = g;
      }
    }
    c = c.parent;
  }
  throw d;
}
const vu = -7169;
function Ct(d, c) {
  d.f = d.f & vu | c;
}
function $s(d) {
  (d.f & qe) !== 0 || d.deps === null ? Ct(d, Qt) : Ct(d, Bi);
}
function Xa(d) {
  if (d !== null)
    for (const c of d)
      (c.f & Xt) === 0 || (c.f & Wn) === 0 || (c.f ^= Wn, Xa(
        /** @type {Derived} */
        c.deps
      ));
}
function $a(d, c, g) {
  (d.f & Kt) !== 0 ? c.add(d) : (d.f & Bi) !== 0 && g.add(d), Xa(d.deps), Ct(d, Qt);
}
const Ln = /* @__PURE__ */ new Set();
let NA = null, ui = null, Ns = null, xr = !1, Ss = !1, k0 = null, Eo = null;
var ba = 0;
let gu = 1;
var B0, E0, On, Si, yi, Mr, ze, Dr, rn, zi, bi, x0, C0, Qn, Dt, xo, Al, Co, Gs, Lo, wu;
const Ro = class Ro {
  constructor() {
    FA(this, Dt);
    ai(this, "id", gu++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ai(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ai(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    FA(this, B0, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    FA(this, E0, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    FA(this, On, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    FA(this, Si, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    FA(this, yi, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    FA(this, Mr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    FA(this, ze, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    FA(this, Dr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    FA(this, rn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    FA(this, zi, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    FA(this, bi, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    FA(this, x0, /* @__PURE__ */ new Set());
    ai(this, "is_fork", !1);
    FA(this, C0, !1);
    /** @type {Set<Batch>} */
    FA(this, Qn, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(c) {
    N(this, bi).has(c) || N(this, bi).set(c, { d: [], m: [] }), N(this, x0).delete(c);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(c, g = (C) => this.schedule(C)) {
    var C = N(this, bi).get(c);
    if (C) {
      N(this, bi).delete(c);
      for (var T of C.d)
        Ct(T, Kt), g(T);
      for (T of C.m)
        Ct(T, Bi), g(T);
    }
    N(this, x0).add(c);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(c, g, C = !1) {
    c.v !== Ut && !this.previous.has(c) && this.previous.set(c, c.v), (c.f & an) === 0 && (this.current.set(c, [g, C]), ui?.set(c, g)), this.is_fork || (c.v = g);
  }
  activate() {
    NA = this;
  }
  deactivate() {
    NA = null, ui = null;
  }
  flush() {
    try {
      Ss = !0, NA = this, pt(this, Dt, Co).call(this);
    } finally {
      ba = 0, Ns = null, k0 = null, Eo = null, Ss = !1, NA = null, ui = null, Gn.clear();
    }
  }
  discard() {
    for (const c of N(this, E0)) c(this);
    N(this, E0).clear(), N(this, On).clear(), Ln.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(c) {
    N(this, Dr).push(c);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(c, g) {
    let C = N(this, Si).get(g) ?? 0;
    if (N(this, Si).set(g, C + 1), c) {
      let T = N(this, yi).get(g) ?? 0;
      N(this, yi).set(g, T + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(c, g, C) {
    let T = N(this, Si).get(g) ?? 0;
    if (T === 1 ? N(this, Si).delete(g) : N(this, Si).set(g, T - 1), c) {
      let S = N(this, yi).get(g) ?? 0;
      S === 1 ? N(this, yi).delete(g) : N(this, yi).set(g, S - 1);
    }
    N(this, C0) || C || (UA(this, C0, !0), Nn(() => {
      UA(this, C0, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(c, g) {
    for (const C of c)
      N(this, rn).add(C);
    for (const C of g)
      N(this, zi).add(C);
    c.clear(), g.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(c) {
    N(this, B0).add(c);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(c) {
    N(this, E0).add(c);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(c) {
    N(this, On).add(c);
  }
  run_fork_commit_callbacks() {
    for (const c of N(this, On)) c(this);
    N(this, On).clear();
  }
  settled() {
    return (N(this, Mr) ?? UA(this, Mr, Na())).promise;
  }
  static ensure() {
    if (NA === null) {
      const c = NA = new Ro();
      Ss || (Ln.add(NA), xr || Nn(() => {
        NA === c && c.flush();
      }));
    }
    return NA;
  }
  apply() {
    {
      ui = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(c) {
    if (Ns = c, c.b?.is_pending && (c.f & (M0 | Go | Ga)) !== 0 && (c.f & Vn) === 0) {
      c.b.defer_effect(c);
      return;
    }
    for (var g = c; g.parent !== null; ) {
      g = g.parent;
      var C = g.f;
      if (k0 !== null && g === KA && (VA === null || (VA.f & Xt) === 0))
        return;
      if ((C & (un | hi)) !== 0) {
        if ((C & Qt) === 0)
          return;
        g.f ^= Qt;
      }
    }
    N(this, ze).push(g);
  }
};
B0 = new WeakMap(), E0 = new WeakMap(), On = new WeakMap(), Si = new WeakMap(), yi = new WeakMap(), Mr = new WeakMap(), ze = new WeakMap(), Dr = new WeakMap(), rn = new WeakMap(), zi = new WeakMap(), bi = new WeakMap(), x0 = new WeakMap(), C0 = new WeakMap(), Qn = new WeakMap(), Dt = new WeakSet(), xo = function() {
  return this.is_fork || N(this, yi).size > 0;
}, Al = function() {
  for (const C of N(this, Qn))
    for (const T of N(C, yi).keys()) {
      for (var c = !1, g = T; g.parent !== null; ) {
        if (N(this, bi).has(g)) {
          c = !0;
          break;
        }
        g = g.parent;
      }
      if (!c)
        return !0;
    }
  return !1;
}, Co = function() {
  var G;
  if (ba++ > 1e3 && (Ln.delete(this), bu()), !pt(this, Dt, xo).call(this)) {
    for (const O of N(this, rn))
      N(this, zi).delete(O), Ct(O, Kt), this.schedule(O);
    for (const O of N(this, zi))
      Ct(O, Bi), this.schedule(O);
  }
  const c = N(this, ze);
  UA(this, ze, []), this.apply();
  var g = k0 = [], C = [], T = Eo = [];
  for (const O of c)
    try {
      pt(this, Dt, Gs).call(this, O, g, C);
    } catch (j) {
      throw il(O), j;
    }
  if (NA = null, T.length > 0) {
    var S = Ro.ensure();
    for (const O of T)
      S.schedule(O);
  }
  if (k0 = null, Eo = null, pt(this, Dt, xo).call(this) || pt(this, Dt, Al).call(this)) {
    pt(this, Dt, Lo).call(this, C), pt(this, Dt, Lo).call(this, g);
    for (const [O, j] of N(this, bi))
      el(O, j);
  } else {
    N(this, Si).size === 0 && Ln.delete(this), N(this, rn).clear(), N(this, zi).clear();
    for (const O of N(this, B0)) O(this);
    N(this, B0).clear(), ka(C), ka(g), N(this, Mr)?.resolve();
  }
  var Z = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    NA
  );
  if (N(this, ze).length > 0) {
    const O = Z ?? (Z = this);
    N(O, ze).push(...N(this, ze).filter((j) => !N(O, ze).includes(j)));
  }
  Z !== null && (Ln.add(Z), pt(G = Z, Dt, Co).call(G));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Gs = function(c, g, C) {
  c.f ^= Qt;
  for (var T = c.first; T !== null; ) {
    var S = T.f, Z = (S & (hi | un)) !== 0, G = Z && (S & Qt) !== 0, O = G || (S & le) !== 0 || N(this, bi).has(T);
    if (!O && T.fn !== null) {
      Z ? T.f ^= Qt : (S & M0) !== 0 ? g.push(T) : Rr(T) && ((S & Pi) !== 0 && N(this, zi).add(T), z0(T));
      var j = T.first;
      if (j !== null) {
        T = j;
        continue;
      }
    }
    for (; T !== null; ) {
      var iA = T.next;
      if (iA !== null) {
        T = iA;
        break;
      }
      T = T.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Lo = function(c) {
  for (var g = 0; g < c.length; g += 1)
    $a(c[g], N(this, rn), N(this, zi));
}, wu = function() {
  var iA, eA, oA;
  for (const nA of Ln) {
    var c = nA.id < this.id, g = [];
    for (const [V, [uA, QA]] of this.current) {
      if (nA.current.has(V)) {
        var C = (
          /** @type {[any, boolean]} */
          nA.current.get(V)[0]
        );
        if (c && uA !== C)
          nA.current.set(V, [uA, QA]);
        else
          continue;
      }
      g.push(V);
    }
    var T = [...nA.current.keys()].filter((V) => !this.current.has(V));
    if (T.length === 0)
      c && nA.discard();
    else if (g.length > 0) {
      if (c)
        for (const V of N(this, x0))
          nA.unskip_effect(V, (uA) => {
            var QA;
            (uA.f & (Pi | Lr)) !== 0 ? nA.schedule(uA) : pt(QA = nA, Dt, Lo).call(QA, [uA]);
          });
      nA.activate();
      var S = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Map();
      for (var G of g)
        tl(G, T, S, Z);
      Z = /* @__PURE__ */ new Map();
      var O = [...nA.current.keys()].filter(
        (V) => this.current.has(V) ? (
          /** @type {[any, boolean]} */
          this.current.get(V)[0] !== V
        ) : !0
      );
      for (const V of N(this, Dr))
        (V.f & (Je | le | Fs)) === 0 && Aa(V, O, Z) && ((V.f & (Lr | Pi)) !== 0 ? (Ct(V, Kt), nA.schedule(V)) : N(nA, rn).add(V));
      if (N(nA, ze).length > 0) {
        nA.apply();
        for (var j of N(nA, ze))
          pt(iA = nA, Dt, Gs).call(iA, j, [], []);
        UA(nA, ze, []);
      }
      nA.deactivate();
    }
  }
  for (const nA of Ln)
    N(nA, Qn).has(this) && (N(nA, Qn).delete(this), N(nA, Qn).size === 0 && !pt(eA = nA, Dt, xo).call(eA) && (nA.activate(), pt(oA = nA, Dt, Co).call(oA)));
};
let jn = Ro;
function yu(d) {
  var c = xr;
  xr = !0;
  try {
    for (var g; ; ) {
      if (pu(), NA === null)
        return (
          /** @type {T} */
          g
        );
      NA.flush();
    }
  } finally {
    xr = c;
  }
}
function bu() {
  try {
    iu();
  } catch (d) {
    sn(d, Ns);
  }
}
let Di = null;
function ka(d) {
  var c = d.length;
  if (c !== 0) {
    for (var g = 0; g < c; ) {
      var C = d[g++];
      if ((C.f & (Je | le)) === 0 && Rr(C) && (Di = /* @__PURE__ */ new Set(), z0(C), C.deps === null && C.first === null && C.nodes === null && C.teardown === null && C.ac === null && ml(C), Di?.size > 0)) {
        Gn.clear();
        for (const T of Di) {
          if ((T.f & (Je | le)) !== 0) continue;
          const S = [T];
          let Z = T.parent;
          for (; Z !== null; )
            Di.has(Z) && (Di.delete(Z), S.push(Z)), Z = Z.parent;
          for (let G = S.length - 1; G >= 0; G--) {
            const O = S[G];
            (O.f & (Je | le)) === 0 && z0(O);
          }
        }
        Di.clear();
      }
    }
    Di = null;
  }
}
function tl(d, c, g, C) {
  if (!g.has(d) && (g.add(d), d.reactions !== null))
    for (const T of d.reactions) {
      const S = T.f;
      (S & Xt) !== 0 ? tl(
        /** @type {Derived} */
        T,
        c,
        g,
        C
      ) : (S & (Lr | Pi)) !== 0 && (S & Kt) === 0 && Aa(T, c, C) && (Ct(T, Kt), ta(
        /** @type {Effect} */
        T
      ));
    }
}
function Aa(d, c, g) {
  const C = g.get(d);
  if (C !== void 0) return C;
  if (d.deps !== null)
    for (const T of d.deps) {
      if (T0.call(c, T))
        return !0;
      if ((T.f & Xt) !== 0 && Aa(
        /** @type {Derived} */
        T,
        c,
        g
      ))
        return g.set(
          /** @type {Derived} */
          T,
          !0
        ), !0;
    }
  return g.set(d, !1), !1;
}
function ta(d) {
  NA.schedule(d);
}
function el(d, c) {
  if (!((d.f & hi) !== 0 && (d.f & Qt) !== 0)) {
    (d.f & Kt) !== 0 ? c.d.push(d) : (d.f & Bi) !== 0 && c.m.push(d), Ct(d, Qt);
    for (var g = d.first; g !== null; )
      el(g, c), g = g.next;
  }
}
function il(d) {
  Ct(d, Qt);
  for (var c = d.first; c !== null; )
    il(c), c = c.next;
}
function ku(d) {
  let c = 0, g = Yn(0), C;
  return () => {
    na() && (mA(g), ra(() => (c === 0 && (C = Wo(() => d(() => Cr(g)))), c += 1, () => {
      Nn(() => {
        c -= 1, c === 0 && (C?.(), C = void 0, Cr(g));
      });
    })));
  };
}
var Pu = D0 | Kn;
function Bu(d, c, g, C) {
  new Eu(d, c, g, C);
}
var je, Xs, Ye, Rn, we, Ve, oe, Oe, Oi, Zn, on, L0, Ir, Sr, Qi, Zo, Pt, xu, Cu, Lu, Hs, To, Mo, Us, Ws;
class Eu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(c, g, C, T) {
    FA(this, Pt);
    /** @type {Boundary | null} */
    ai(this, "parent");
    ai(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ai(this, "transform_error");
    /** @type {TemplateNode} */
    FA(this, je);
    /** @type {TemplateNode | null} */
    FA(this, Xs, null);
    /** @type {BoundaryProps} */
    FA(this, Ye);
    /** @type {((anchor: Node) => void)} */
    FA(this, Rn);
    /** @type {Effect} */
    FA(this, we);
    /** @type {Effect | null} */
    FA(this, Ve, null);
    /** @type {Effect | null} */
    FA(this, oe, null);
    /** @type {Effect | null} */
    FA(this, Oe, null);
    /** @type {DocumentFragment | null} */
    FA(this, Oi, null);
    FA(this, Zn, 0);
    FA(this, on, 0);
    FA(this, L0, !1);
    /** @type {Set<Effect>} */
    FA(this, Ir, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    FA(this, Sr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    FA(this, Qi, null);
    FA(this, Zo, ku(() => (UA(this, Qi, Yn(N(this, Zn))), () => {
      UA(this, Qi, null);
    })));
    UA(this, je, c), UA(this, Ye, g), UA(this, Rn, (S) => {
      var Z = (
        /** @type {Effect} */
        KA
      );
      Z.b = this, Z.f |= Rs, C(S);
    }), this.parent = /** @type {Effect} */
    KA.b, this.transform_error = T ?? this.parent?.transform_error ?? ((S) => S), UA(this, we, Uo(() => {
      pt(this, Pt, Hs).call(this);
    }, Pu));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(c) {
    $a(c, N(this, Ir), N(this, Sr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!N(this, Ye).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(c, g) {
    pt(this, Pt, Us).call(this, c, g), UA(this, Zn, N(this, Zn) + c), !(!N(this, Qi) || N(this, L0)) && (UA(this, L0, !0), Nn(() => {
      UA(this, L0, !1), N(this, Qi) && S0(N(this, Qi), N(this, Zn));
    }));
  }
  get_effect_pending() {
    return N(this, Zo).call(this), mA(
      /** @type {Source<number>} */
      N(this, Qi)
    );
  }
  /** @param {unknown} error */
  error(c) {
    if (!N(this, Ye).onerror && !N(this, Ye).failed)
      throw c;
    NA?.is_fork ? (N(this, Ve) && NA.skip_effect(N(this, Ve)), N(this, oe) && NA.skip_effect(N(this, oe)), N(this, Oe) && NA.skip_effect(N(this, Oe)), NA.on_fork_commit(() => {
      pt(this, Pt, Ws).call(this, c);
    })) : pt(this, Pt, Ws).call(this, c);
  }
}
je = new WeakMap(), Xs = new WeakMap(), Ye = new WeakMap(), Rn = new WeakMap(), we = new WeakMap(), Ve = new WeakMap(), oe = new WeakMap(), Oe = new WeakMap(), Oi = new WeakMap(), Zn = new WeakMap(), on = new WeakMap(), L0 = new WeakMap(), Ir = new WeakMap(), Sr = new WeakMap(), Qi = new WeakMap(), Zo = new WeakMap(), Pt = new WeakSet(), xu = function() {
  try {
    UA(this, Ve, Ke(() => N(this, Rn).call(this, N(this, je))));
  } catch (c) {
    this.error(c);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Cu = function(c) {
  const g = N(this, Ye).failed;
  g && UA(this, Oe, Ke(() => {
    g(
      N(this, je),
      () => c,
      () => () => {
      }
    );
  }));
}, Lu = function() {
  const c = N(this, Ye).pending;
  c && (this.is_pending = !0, UA(this, oe, Ke(() => c(N(this, je)))), Nn(() => {
    var g = UA(this, Oi, document.createDocumentFragment()), C = ln();
    g.append(C), UA(this, Ve, pt(this, Pt, Mo).call(this, () => Ke(() => N(this, Rn).call(this, C)))), N(this, on) === 0 && (N(this, je).before(g), UA(this, Oi, null), Hn(
      /** @type {Effect} */
      N(this, oe),
      () => {
        UA(this, oe, null);
      }
    ), pt(this, Pt, To).call(
      this,
      /** @type {Batch} */
      NA
    ));
  }));
}, Hs = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), UA(this, on, 0), UA(this, Zn, 0), UA(this, Ve, Ke(() => {
      N(this, Rn).call(this, N(this, je));
    })), N(this, on) > 0) {
      var c = UA(this, Oi, document.createDocumentFragment());
      aa(N(this, Ve), c);
      const g = (
        /** @type {(anchor: Node) => void} */
        N(this, Ye).pending
      );
      UA(this, oe, Ke(() => g(N(this, je))));
    } else
      pt(this, Pt, To).call(
        this,
        /** @type {Batch} */
        NA
      );
  } catch (g) {
    this.error(g);
  }
}, /**
 * @param {Batch} batch
 */
To = function(c) {
  this.is_pending = !1, c.transfer_effects(N(this, Ir), N(this, Sr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Mo = function(c) {
  var g = KA, C = VA, T = Pe;
  Ei(N(this, we)), $e(N(this, we)), I0(N(this, we).ctx);
  try {
    return jn.ensure(), c();
  } catch (S) {
    return Ja(S), null;
  } finally {
    Ei(g), $e(C), I0(T);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Us = function(c, g) {
  var C;
  if (!this.has_pending_snippet()) {
    this.parent && pt(C = this.parent, Pt, Us).call(C, c, g);
    return;
  }
  UA(this, on, N(this, on) + c), N(this, on) === 0 && (pt(this, Pt, To).call(this, g), N(this, oe) && Hn(N(this, oe), () => {
    UA(this, oe, null);
  }), N(this, Oi) && (N(this, je).before(N(this, Oi)), UA(this, Oi, null)));
}, /**
 * @param {unknown} error
 */
Ws = function(c) {
  N(this, Ve) && (ke(N(this, Ve)), UA(this, Ve, null)), N(this, oe) && (ke(N(this, oe)), UA(this, oe, null)), N(this, Oe) && (ke(N(this, Oe)), UA(this, Oe, null));
  var g = N(this, Ye).onerror;
  let C = N(this, Ye).failed;
  var T = !1, S = !1;
  const Z = () => {
    if (T) {
      cu();
      return;
    }
    T = !0, S && su(), N(this, Oe) !== null && Hn(N(this, Oe), () => {
      UA(this, Oe, null);
    }), pt(this, Pt, Mo).call(this, () => {
      pt(this, Pt, Hs).call(this);
    });
  }, G = (O) => {
    try {
      S = !0, g?.(O, Z), S = !1;
    } catch (j) {
      sn(j, N(this, we) && N(this, we).parent);
    }
    C && UA(this, Oe, pt(this, Pt, Mo).call(this, () => {
      try {
        return Ke(() => {
          var j = (
            /** @type {Effect} */
            KA
          );
          j.b = this, j.f |= Rs, C(
            N(this, je),
            () => O,
            () => Z
          );
        });
      } catch (j) {
        return sn(
          j,
          /** @type {Effect} */
          N(this, we).parent
        ), null;
      }
    }));
  };
  Nn(() => {
    var O;
    try {
      O = this.transform_error(c);
    } catch (j) {
      sn(j, N(this, we) && N(this, we).parent);
      return;
    }
    O !== null && typeof O == "object" && typeof /** @type {any} */
    O.then == "function" ? O.then(
      G,
      /** @param {unknown} e */
      (j) => sn(j, N(this, we) && N(this, we).parent)
    ) : G(O);
  });
};
function Tu(d, c, g, C) {
  const T = ea;
  var S = d.filter((oA) => !oA.settled);
  if (g.length === 0 && S.length === 0) {
    C(c.map(T));
    return;
  }
  var Z = (
    /** @type {Effect} */
    KA
  ), G = Mu(), O = S.length === 1 ? S[0].promise : S.length > 1 ? Promise.all(S.map((oA) => oA.promise)) : null;
  function j(oA) {
    G();
    try {
      C(oA);
    } catch (nA) {
      (Z.f & Je) === 0 && sn(nA, Z);
    }
    So();
  }
  if (g.length === 0) {
    O.then(() => j(c.map(T)));
    return;
  }
  var iA = nl();
  function eA() {
    Promise.all(g.map((oA) => /* @__PURE__ */ Du(oA))).then((oA) => j([...c.map(T), ...oA])).catch((oA) => sn(oA, Z)).finally(() => iA());
  }
  O ? O.then(() => {
    G(), eA(), So();
  }) : eA();
}
function Mu() {
  var d = (
    /** @type {Effect} */
    KA
  ), c = VA, g = Pe, C = (
    /** @type {Batch} */
    NA
  );
  return function(S = !0) {
    Ei(d), $e(c), I0(g), S && (d.f & Je) === 0 && (C?.activate(), C?.apply());
  };
}
function So(d = !0) {
  Ei(null), $e(null), I0(null), d && NA?.deactivate();
}
function nl() {
  var d = (
    /** @type {Effect} */
    KA
  ), c = (
    /** @type {Boundary} */
    d.b
  ), g = (
    /** @type {Batch} */
    NA
  ), C = c.is_rendered();
  return c.update_pending_count(1, g), g.increment(C, d), (T = !1) => {
    c.update_pending_count(-1, g), g.decrement(C, d, T);
  };
}
// @__NO_SIDE_EFFECTS__
function ea(d) {
  var c = Xt | Kt;
  return KA !== null && (KA.f |= Kn), {
    ctx: Pe,
    deps: null,
    effects: null,
    equals: Wa,
    f: c,
    fn: d,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ut
    ),
    wv: 0,
    parent: KA,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Du(d, c, g) {
  let C = (
    /** @type {Effect | null} */
    KA
  );
  C === null && Xl();
  var T = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), S = Yn(
    /** @type {V} */
    Ut
  ), Z = !VA, G = /* @__PURE__ */ new Map();
  return Ku(() => {
    var O = (
      /** @type {Effect} */
      KA
    ), j = Na();
    T = j.promise;
    try {
      Promise.resolve(d()).then(j.resolve, j.reject).finally(So);
    } catch (nA) {
      j.reject(nA), So();
    }
    var iA = (
      /** @type {Batch} */
      NA
    );
    if (Z) {
      if ((O.f & Vn) !== 0)
        var eA = nl();
      if (
        /** @type {Boundary} */
        C.b.is_rendered()
      )
        G.get(iA)?.reject(Ii), G.delete(iA);
      else {
        for (const nA of G.values())
          nA.reject(Ii);
        G.clear();
      }
      G.set(iA, j);
    }
    const oA = (nA, V = void 0) => {
      if (eA) {
        var uA = V === Ii;
        eA(uA);
      }
      if (!(V === Ii || (O.f & Je) !== 0)) {
        if (iA.activate(), V)
          S.f |= an, S0(S, V);
        else {
          (S.f & an) !== 0 && (S.f ^= an), S0(S, nA);
          for (const [QA, st] of G) {
            if (G.delete(QA), QA === iA) break;
            st.reject(Ii);
          }
        }
        iA.deactivate();
      }
    };
    j.promise.then(oA, (nA) => oA(null, nA || "unknown"));
  }), _l(() => {
    for (const O of G.values())
      O.reject(Ii);
  }), new Promise((O) => {
    function j(iA) {
      function eA() {
        iA === T ? O(S) : j(T);
      }
      iA.then(eA, eA);
    }
    j(T);
  });
}
// @__NO_SIDE_EFFECTS__
function zs(d) {
  const c = /* @__PURE__ */ ea(d);
  return gl(c), c;
}
// @__NO_SIDE_EFFECTS__
function Iu(d) {
  const c = /* @__PURE__ */ ea(d);
  return c.equals = ja, c;
}
function Su(d) {
  var c = d.effects;
  if (c !== null) {
    d.effects = null;
    for (var g = 0; g < c.length; g += 1)
      ke(
        /** @type {Effect} */
        c[g]
      );
  }
}
function ia(d) {
  var c, g = KA, C = d.parent;
  if (!fn && C !== null && (C.f & (Je | le)) !== 0)
    return _u(), d.v;
  Ei(C);
  try {
    d.f &= ~Wn, Su(d), c = kl(d);
  } finally {
    Ei(g);
  }
  return c;
}
function rl(d) {
  var c = ia(d);
  if (!d.equals(c) && (d.wv = yl(), (!NA?.is_fork || d.deps === null) && (NA !== null ? NA.capture(d, c, !0) : d.v = c, d.deps === null))) {
    Ct(d, Qt);
    return;
  }
  fn || (ui !== null ? (na() || NA?.is_fork) && ui.set(d, c) : $s(d));
}
function zu(d) {
  if (d.effects !== null)
    for (const c of d.effects)
      (c.teardown || c.ac) && (c.teardown?.(), c.ac?.abort(Ii), c.teardown = Yl, c.ac = null, Tr(c, 0), oa(c));
}
function ol(d) {
  if (d.effects !== null)
    for (const c of d.effects)
      c.teardown && z0(c);
}
let js = /* @__PURE__ */ new Set();
const Gn = /* @__PURE__ */ new Map();
let sl = !1;
function Yn(d, c) {
  var g = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: d,
    reactions: null,
    equals: Wa,
    rv: 0,
    wv: 0
  };
  return g;
}
// @__NO_SIDE_EFFECTS__
function se(d, c) {
  const g = Yn(d);
  return gl(g), g;
}
// @__NO_SIDE_EFFECTS__
function Ou(d, c = !1, g = !0) {
  const C = Yn(d);
  return c || (C.equals = ja), C;
}
function ae(d, c, g = !1) {
  VA !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!fi || (VA.f & Fs) !== 0) && Ka() && (VA.f & (Xt | Pi | Lr | Fs)) !== 0 && (Xe === null || !T0.call(Xe, d)) && ou();
  let C = g ? Sn(c) : c;
  return S0(d, C, Eo);
}
function S0(d, c, g = null) {
  if (!d.equals(c)) {
    Gn.set(d, fn ? c : d.v);
    var C = jn.ensure();
    if (C.capture(d, c), (d.f & Xt) !== 0) {
      const T = (
        /** @type {Derived} */
        d
      );
      (d.f & Kt) !== 0 && ia(T), ui === null && $s(T);
    }
    d.wv = yl(), al(d, Kt, g), KA !== null && (KA.f & Qt) !== 0 && (KA.f & (hi | un)) === 0 && (We === null ? Xu([d]) : We.push(d)), !C.is_fork && js.size > 0 && !sl && Qu();
  }
  return c;
}
function Qu() {
  sl = !1;
  for (const d of js)
    (d.f & Qt) !== 0 && Ct(d, Bi), Rr(d) && z0(d);
  js.clear();
}
function Cr(d) {
  ae(d, d.v + 1);
}
function al(d, c, g) {
  var C = d.reactions;
  if (C !== null)
    for (var T = C.length, S = 0; S < T; S++) {
      var Z = C[S], G = Z.f, O = (G & Kt) === 0;
      if (O && Ct(Z, c), (G & Xt) !== 0) {
        var j = (
          /** @type {Derived} */
          Z
        );
        ui?.delete(j), (G & Wn) === 0 && (G & qe && (KA === null || (KA.f & Io) === 0) && (Z.f |= Wn), al(j, Bi, g));
      } else if (O) {
        var iA = (
          /** @type {Effect} */
          Z
        );
        (G & Pi) !== 0 && Di !== null && Di.add(iA), g !== null ? g.push(iA) : ta(iA);
      }
    }
}
function Sn(d) {
  if (typeof d != "object" || d === null || Bo in d)
    return d;
  const c = Fa(d);
  if (c !== Wl && c !== jl)
    return d;
  var g = /* @__PURE__ */ new Map(), C = Za(d), T = /* @__PURE__ */ se(0), S = Un, Z = (G) => {
    if (Un === S)
      return G();
    var O = VA, j = Un;
    $e(null), xa(S);
    var iA = G();
    return $e(O), xa(j), iA;
  };
  return C && g.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    d.length
  )), new Proxy(
    /** @type {any} */
    d,
    {
      defineProperty(G, O, j) {
        (!("value" in j) || j.configurable === !1 || j.enumerable === !1 || j.writable === !1) && nu();
        var iA = g.get(O);
        return iA === void 0 ? Z(() => {
          var eA = /* @__PURE__ */ se(j.value);
          return g.set(O, eA), eA;
        }) : ae(iA, j.value, !0), !0;
      },
      deleteProperty(G, O) {
        var j = g.get(O);
        if (j === void 0) {
          if (O in G) {
            const iA = Z(() => /* @__PURE__ */ se(Ut));
            g.set(O, iA), Cr(T);
          }
        } else
          ae(j, Ut), Cr(T);
        return !0;
      },
      get(G, O, j) {
        if (O === Bo)
          return d;
        var iA = g.get(O), eA = O in G;
        if (iA === void 0 && (!eA || Er(G, O)?.writable) && (iA = Z(() => {
          var nA = Sn(eA ? G[O] : Ut), V = /* @__PURE__ */ se(nA);
          return V;
        }), g.set(O, iA)), iA !== void 0) {
          var oA = mA(iA);
          return oA === Ut ? void 0 : oA;
        }
        return Reflect.get(G, O, j);
      },
      getOwnPropertyDescriptor(G, O) {
        var j = Reflect.getOwnPropertyDescriptor(G, O);
        if (j && "value" in j) {
          var iA = g.get(O);
          iA && (j.value = mA(iA));
        } else if (j === void 0) {
          var eA = g.get(O), oA = eA?.v;
          if (eA !== void 0 && oA !== Ut)
            return {
              enumerable: !0,
              configurable: !0,
              value: oA,
              writable: !0
            };
        }
        return j;
      },
      has(G, O) {
        if (O === Bo)
          return !0;
        var j = g.get(O), iA = j !== void 0 && j.v !== Ut || Reflect.has(G, O);
        if (j !== void 0 || KA !== null && (!iA || Er(G, O)?.writable)) {
          j === void 0 && (j = Z(() => {
            var oA = iA ? Sn(G[O]) : Ut, nA = /* @__PURE__ */ se(oA);
            return nA;
          }), g.set(O, j));
          var eA = mA(j);
          if (eA === Ut)
            return !1;
        }
        return iA;
      },
      set(G, O, j, iA) {
        var eA = g.get(O), oA = O in G;
        if (C && O === "length")
          for (var nA = j; nA < /** @type {Source<number>} */
          eA.v; nA += 1) {
            var V = g.get(nA + "");
            V !== void 0 ? ae(V, Ut) : nA in G && (V = Z(() => /* @__PURE__ */ se(Ut)), g.set(nA + "", V));
          }
        if (eA === void 0)
          (!oA || Er(G, O)?.writable) && (eA = Z(() => /* @__PURE__ */ se(void 0)), ae(eA, Sn(j)), g.set(O, eA));
        else {
          oA = eA.v !== Ut;
          var uA = Z(() => Sn(j));
          ae(eA, uA);
        }
        var QA = Reflect.getOwnPropertyDescriptor(G, O);
        if (QA?.set && QA.set.call(iA, j), !oA) {
          if (C && typeof O == "string") {
            var st = (
              /** @type {Source<number>} */
              g.get("length")
            ), WA = Number(O);
            Number.isInteger(WA) && WA >= st.v && ae(st, WA + 1);
          }
          Cr(T);
        }
        return !0;
      },
      ownKeys(G) {
        mA(T);
        var O = Reflect.ownKeys(G).filter((eA) => {
          var oA = g.get(eA);
          return oA === void 0 || oA.v !== Ut;
        });
        for (var [j, iA] of g)
          iA.v !== Ut && !(j in G) && O.push(j);
        return O;
      },
      setPrototypeOf() {
        ru();
      }
    }
  );
}
var Pa, ll, ul, fl;
function Ru() {
  if (Pa === void 0) {
    Pa = window, ll = /Firefox/.test(navigator.userAgent);
    var d = Element.prototype, c = Node.prototype, g = Text.prototype;
    ul = Er(c, "firstChild").get, fl = Er(c, "nextSibling").get, ya(d) && (d.__click = void 0, d.__className = void 0, d.__attributes = null, d.__style = void 0, d.__e = void 0), ya(g) && (g.__t = void 0);
  }
}
function ln(d = "") {
  return document.createTextNode(d);
}
// @__NO_SIDE_EFFECTS__
function zo(d) {
  return (
    /** @type {TemplateNode | null} */
    ul.call(d)
  );
}
// @__NO_SIDE_EFFECTS__
function Qr(d) {
  return (
    /** @type {TemplateNode | null} */
    fl.call(d)
  );
}
function Vt(d, c) {
  return /* @__PURE__ */ zo(d);
}
function Zu(d, c = !1) {
  {
    var g = /* @__PURE__ */ zo(d);
    return g instanceof Comment && g.data === "" ? /* @__PURE__ */ Qr(g) : g;
  }
}
function ge(d, c = 1, g = !1) {
  let C = d;
  for (; c--; )
    C = /** @type {TemplateNode} */
    /* @__PURE__ */ Qr(C);
  return C;
}
function Fu(d) {
  d.textContent = "";
}
function hl() {
  return !1;
}
function Nu(d, c, g) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ua, d, void 0)
  );
}
let Ba = !1;
function Gu() {
  Ba || (Ba = !0, document.addEventListener(
    "reset",
    (d) => {
      Promise.resolve().then(() => {
        if (!d.defaultPrevented)
          for (
            const c of
            /**@type {HTMLFormElement} */
            d.target.elements
          )
            c.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ho(d) {
  var c = VA, g = KA;
  $e(null), Ei(null);
  try {
    return d();
  } finally {
    $e(c), Ei(g);
  }
}
function Hu(d, c, g, C = g) {
  d.addEventListener(c, () => Ho(g));
  const T = d.__on_r;
  T ? d.__on_r = () => {
    T(), C(!0);
  } : d.__on_r = () => C(!0), Gu();
}
function Uu(d) {
  KA === null && (VA === null && eu(), tu()), fn && Au();
}
function Wu(d, c) {
  var g = c.last;
  g === null ? c.last = c.first = d : (g.next = d, d.prev = g, c.last = d);
}
function Zi(d, c) {
  var g = KA;
  g !== null && (g.f & le) !== 0 && (d |= le);
  var C = {
    ctx: Pe,
    deps: null,
    nodes: null,
    f: d | Kt | qe,
    first: null,
    fn: c,
    last: null,
    next: null,
    parent: g,
    b: g && g.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  NA?.register_created_effect(C);
  var T = C;
  if ((d & M0) !== 0)
    k0 !== null ? k0.push(C) : jn.ensure().schedule(C);
  else if (c !== null) {
    try {
      z0(C);
    } catch (Z) {
      throw ke(C), Z;
    }
    T.deps === null && T.teardown === null && T.nodes === null && T.first === T.last && // either `null`, or a singular child
    (T.f & Kn) === 0 && (T = T.first, (d & Pi) !== 0 && (d & D0) !== 0 && T !== null && (T.f |= D0));
  }
  if (T !== null && (T.parent = g, g !== null && Wu(T, g), VA !== null && (VA.f & Xt) !== 0 && (d & un) === 0)) {
    var S = (
      /** @type {Derived} */
      VA
    );
    (S.effects ?? (S.effects = [])).push(T);
  }
  return C;
}
function na() {
  return VA !== null && !fi;
}
function _l(d) {
  const c = Zi(Go, null);
  return Ct(c, Qt), c.teardown = d, c;
}
function ju(d) {
  Uu();
  var c = (
    /** @type {Effect} */
    KA.f
  ), g = !VA && (c & hi) !== 0 && (c & Vn) === 0;
  if (g) {
    var C = (
      /** @type {ComponentContext} */
      Pe
    );
    (C.e ?? (C.e = [])).push(d);
  } else
    return cl(d);
}
function cl(d) {
  return Zi(M0 | Kl, d);
}
function Yu(d) {
  jn.ensure();
  const c = Zi(un | Kn, d);
  return (g = {}) => new Promise((C) => {
    g.outro ? Hn(c, () => {
      ke(c), C(void 0);
    }) : (ke(c), C(void 0));
  });
}
function Vu(d) {
  return Zi(M0, d);
}
function Ku(d) {
  return Zi(Lr | Kn, d);
}
function ra(d, c = 0) {
  return Zi(Go | c, d);
}
function Tn(d, c = [], g = [], C = []) {
  Tu(C, c, g, (T) => {
    Zi(Go, () => d(...T.map(mA)));
  });
}
function Uo(d, c = 0) {
  var g = Zi(Pi | c, d);
  return g;
}
function Ke(d) {
  return Zi(hi | Kn, d);
}
function dl(d) {
  var c = d.teardown;
  if (c !== null) {
    const g = fn, C = VA;
    Ea(!0), $e(null);
    try {
      c.call(null);
    } finally {
      Ea(g), $e(C);
    }
  }
}
function oa(d, c = !1) {
  var g = d.first;
  for (d.first = d.last = null; g !== null; ) {
    const T = g.ac;
    T !== null && Ho(() => {
      T.abort(Ii);
    });
    var C = g.next;
    (g.f & un) !== 0 ? g.parent = null : ke(g, c), g = C;
  }
}
function qu(d) {
  for (var c = d.first; c !== null; ) {
    var g = c.next;
    (c.f & hi) === 0 && ke(c), c = g;
  }
}
function ke(d, c = !0) {
  var g = !1;
  (c || (d.f & Ha) !== 0) && d.nodes !== null && d.nodes.end !== null && (Ju(
    d.nodes.start,
    /** @type {TemplateNode} */
    d.nodes.end
  ), g = !0), Ct(d, Zs), oa(d, c && !g), Tr(d, 0);
  var C = d.nodes && d.nodes.t;
  if (C !== null)
    for (const S of C)
      S.stop();
  dl(d), d.f ^= Zs, d.f |= Je;
  var T = d.parent;
  T !== null && T.first !== null && ml(d), d.next = d.prev = d.teardown = d.ctx = d.deps = d.fn = d.nodes = d.ac = d.b = null;
}
function Ju(d, c) {
  for (; d !== null; ) {
    var g = d === c ? null : /* @__PURE__ */ Qr(d);
    d.remove(), d = g;
  }
}
function ml(d) {
  var c = d.parent, g = d.prev, C = d.next;
  g !== null && (g.next = C), C !== null && (C.prev = g), c !== null && (c.first === d && (c.first = C), c.last === d && (c.last = g));
}
function Hn(d, c, g = !0) {
  var C = [];
  pl(d, C, !0);
  var T = () => {
    g && ke(d), c && c();
  }, S = C.length;
  if (S > 0) {
    var Z = () => --S || T();
    for (var G of C)
      G.out(Z);
  } else
    T();
}
function pl(d, c, g) {
  if ((d.f & le) === 0) {
    d.f ^= le;
    var C = d.nodes && d.nodes.t;
    if (C !== null)
      for (const G of C)
        (G.is_global || g) && c.push(G);
    for (var T = d.first; T !== null; ) {
      var S = T.next;
      if ((T.f & un) === 0) {
        var Z = (T.f & D0) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (T.f & hi) !== 0 && (d.f & Pi) !== 0;
        pl(T, c, Z ? g : !1);
      }
      T = S;
    }
  }
}
function sa(d) {
  vl(d, !0);
}
function vl(d, c) {
  if ((d.f & le) !== 0) {
    d.f ^= le, (d.f & Qt) === 0 && (Ct(d, Kt), jn.ensure().schedule(d));
    for (var g = d.first; g !== null; ) {
      var C = g.next, T = (g.f & D0) !== 0 || (g.f & hi) !== 0;
      vl(g, T ? c : !1), g = C;
    }
    var S = d.nodes && d.nodes.t;
    if (S !== null)
      for (const Z of S)
        (Z.is_global || c) && Z.in();
  }
}
function aa(d, c) {
  if (d.nodes)
    for (var g = d.nodes.start, C = d.nodes.end; g !== null; ) {
      var T = g === C ? null : /* @__PURE__ */ Qr(g);
      c.append(g), g = T;
    }
}
let Do = !1, fn = !1;
function Ea(d) {
  fn = d;
}
let VA = null, fi = !1;
function $e(d) {
  VA = d;
}
let KA = null;
function Ei(d) {
  KA = d;
}
let Xe = null;
function gl(d) {
  VA !== null && (Xe === null ? Xe = [d] : Xe.push(d));
}
let ye = null, Se = 0, We = null;
function Xu(d) {
  We = d;
}
let wl = 1, zn = 0, Un = zn;
function xa(d) {
  Un = d;
}
function yl() {
  return ++wl;
}
function Rr(d) {
  var c = d.f;
  if ((c & Kt) !== 0)
    return !0;
  if (c & Xt && (d.f &= ~Wn), (c & Bi) !== 0) {
    for (var g = (
      /** @type {Value[]} */
      d.deps
    ), C = g.length, T = 0; T < C; T++) {
      var S = g[T];
      if (Rr(
        /** @type {Derived} */
        S
      ) && rl(
        /** @type {Derived} */
        S
      ), S.wv > d.wv)
        return !0;
    }
    (c & qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ui === null && Ct(d, Qt);
  }
  return !1;
}
function bl(d, c, g = !0) {
  var C = d.reactions;
  if (C !== null && !(Xe !== null && T0.call(Xe, d)))
    for (var T = 0; T < C.length; T++) {
      var S = C[T];
      (S.f & Xt) !== 0 ? bl(
        /** @type {Derived} */
        S,
        c,
        !1
      ) : c === S && (g ? Ct(S, Kt) : (S.f & Qt) !== 0 && Ct(S, Bi), ta(
        /** @type {Effect} */
        S
      ));
    }
}
function kl(d) {
  var uA;
  var c = ye, g = Se, C = We, T = VA, S = Xe, Z = Pe, G = fi, O = Un, j = d.f;
  ye = /** @type {null | Value[]} */
  null, Se = 0, We = null, VA = (j & (hi | un)) === 0 ? d : null, Xe = null, I0(d.ctx), fi = !1, Un = ++zn, d.ac !== null && (Ho(() => {
    d.ac.abort(Ii);
  }), d.ac = null);
  try {
    d.f |= Io;
    var iA = (
      /** @type {Function} */
      d.fn
    ), eA = iA();
    d.f |= Vn;
    var oA = d.deps, nA = NA?.is_fork;
    if (ye !== null) {
      var V;
      if (nA || Tr(d, Se), oA !== null && Se > 0)
        for (oA.length = Se + ye.length, V = 0; V < ye.length; V++)
          oA[Se + V] = ye[V];
      else
        d.deps = oA = ye;
      if (na() && (d.f & qe) !== 0)
        for (V = Se; V < oA.length; V++)
          ((uA = oA[V]).reactions ?? (uA.reactions = [])).push(d);
    } else !nA && oA !== null && Se < oA.length && (Tr(d, Se), oA.length = Se);
    if (Ka() && We !== null && !fi && oA !== null && (d.f & (Xt | Bi | Kt)) === 0)
      for (V = 0; V < /** @type {Source[]} */
      We.length; V++)
        bl(
          We[V],
          /** @type {Effect} */
          d
        );
    if (T !== null && T !== d) {
      if (zn++, T.deps !== null)
        for (let QA = 0; QA < g; QA += 1)
          T.deps[QA].rv = zn;
      if (c !== null)
        for (const QA of c)
          QA.rv = zn;
      We !== null && (C === null ? C = We : C.push(.../** @type {Source[]} */
      We));
    }
    return (d.f & an) !== 0 && (d.f ^= an), eA;
  } catch (QA) {
    return Ja(QA);
  } finally {
    d.f ^= Io, ye = c, Se = g, We = C, VA = T, Xe = S, I0(Z), fi = G, Un = O;
  }
}
function $u(d, c) {
  let g = c.reactions;
  if (g !== null) {
    var C = Gl.call(g, d);
    if (C !== -1) {
      var T = g.length - 1;
      T === 0 ? g = c.reactions = null : (g[C] = g[T], g.pop());
    }
  }
  if (g === null && (c.f & Xt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ye === null || !T0.call(ye, c))) {
    var S = (
      /** @type {Derived} */
      c
    );
    (S.f & qe) !== 0 && (S.f ^= qe, S.f &= ~Wn), S.v !== Ut && $s(S), zu(S), Tr(S, 0);
  }
}
function Tr(d, c) {
  var g = d.deps;
  if (g !== null)
    for (var C = c; C < g.length; C++)
      $u(d, g[C]);
}
function z0(d) {
  var c = d.f;
  if ((c & Je) === 0) {
    Ct(d, Qt);
    var g = KA, C = Do;
    KA = d, Do = !0;
    try {
      (c & (Pi | Ga)) !== 0 ? qu(d) : oa(d), dl(d);
      var T = kl(d);
      d.teardown = typeof T == "function" ? T : null, d.wv = wl;
      var S;
      Nl && mu && (d.f & Kt) !== 0 && d.deps;
    } finally {
      Do = C, KA = g;
    }
  }
}
async function Pl() {
  await Promise.resolve(), yu();
}
function mA(d) {
  var c = d.f, g = (c & Xt) !== 0;
  if (VA !== null && !fi) {
    var C = KA !== null && (KA.f & Je) !== 0;
    if (!C && (Xe === null || !T0.call(Xe, d))) {
      var T = VA.deps;
      if ((VA.f & Io) !== 0)
        d.rv < zn && (d.rv = zn, ye === null && T !== null && T[Se] === d ? Se++ : ye === null ? ye = [d] : ye.push(d));
      else {
        (VA.deps ?? (VA.deps = [])).push(d);
        var S = d.reactions;
        S === null ? d.reactions = [VA] : T0.call(S, VA) || S.push(VA);
      }
    }
  }
  if (fn && Gn.has(d))
    return Gn.get(d);
  if (g) {
    var Z = (
      /** @type {Derived} */
      d
    );
    if (fn) {
      var G = Z.v;
      return ((Z.f & Qt) === 0 && Z.reactions !== null || El(Z)) && (G = ia(Z)), Gn.set(Z, G), G;
    }
    var O = (Z.f & qe) === 0 && !fi && VA !== null && (Do || (VA.f & qe) !== 0), j = (Z.f & Vn) === 0;
    Rr(Z) && (O && (Z.f |= qe), rl(Z)), O && !j && (ol(Z), Bl(Z));
  }
  if (ui?.has(d))
    return ui.get(d);
  if ((d.f & an) !== 0)
    throw d.v;
  return d.v;
}
function Bl(d) {
  if (d.f |= qe, d.deps !== null)
    for (const c of d.deps)
      (c.reactions ?? (c.reactions = [])).push(d), (c.f & Xt) !== 0 && (c.f & qe) === 0 && (ol(
        /** @type {Derived} */
        c
      ), Bl(
        /** @type {Derived} */
        c
      ));
}
function El(d) {
  if (d.v === Ut) return !0;
  if (d.deps === null) return !1;
  for (const c of d.deps)
    if (Gn.has(c) || (c.f & Xt) !== 0 && El(
      /** @type {Derived} */
      c
    ))
      return !0;
  return !1;
}
function Wo(d) {
  var c = fi;
  try {
    return fi = !0, d();
  } finally {
    fi = c;
  }
}
const Af = ["touchstart", "touchmove"];
function tf(d) {
  return Af.includes(d);
}
const ko = Symbol("events"), ef = /* @__PURE__ */ new Set(), Ca = /* @__PURE__ */ new Set();
function nf(d, c, g, C = {}) {
  function T(S) {
    if (C.capture || Ys.call(c, S), !S.cancelBubble)
      return Ho(() => g?.call(this, S));
  }
  return d.startsWith("pointer") || d.startsWith("touch") || d === "wheel" ? Nn(() => {
    c.addEventListener(d, T, C);
  }) : c.addEventListener(d, T, C), T;
}
function rf(d, c, g, C, T) {
  var S = { capture: C, passive: T }, Z = nf(d, c, g, S);
  (c === document.body || // @ts-ignore
  c === window || // @ts-ignore
  c === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  c instanceof HTMLMediaElement) && _l(() => {
    c.removeEventListener(d, Z, S);
  });
}
let La = null;
function Ys(d) {
  var c = this, g = (
    /** @type {Node} */
    c.ownerDocument
  ), C = d.type, T = d.composedPath?.() || [], S = (
    /** @type {null | Element} */
    T[0] || d.target
  );
  La = d;
  var Z = 0, G = La === d && d[ko];
  if (G) {
    var O = T.indexOf(G);
    if (O !== -1 && (c === document || c === /** @type {any} */
    window)) {
      d[ko] = c;
      return;
    }
    var j = T.indexOf(c);
    if (j === -1)
      return;
    O <= j && (Z = O);
  }
  if (S = /** @type {Element} */
  T[Z] || d.target, S !== c) {
    Hl(d, "currentTarget", {
      configurable: !0,
      get() {
        return S || g;
      }
    });
    var iA = VA, eA = KA;
    $e(null), Ei(null);
    try {
      for (var oA, nA = []; S !== null; ) {
        var V = S.assignedSlot || S.parentNode || /** @type {any} */
        S.host || null;
        try {
          var uA = S[ko]?.[C];
          uA != null && (!/** @type {any} */
          S.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          d.target === S) && uA.call(S, d);
        } catch (QA) {
          oA ? nA.push(QA) : oA = QA;
        }
        if (d.cancelBubble || V === c || V === null)
          break;
        S = V;
      }
      if (oA) {
        for (let QA of nA)
          queueMicrotask(() => {
            throw QA;
          });
        throw oA;
      }
    } finally {
      d[ko] = c, delete d.currentTarget, $e(iA), Ei(eA);
    }
  }
}
const of = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (d) => d
  })
);
function sf(d) {
  return (
    /** @type {string} */
    of?.createHTML(d) ?? d
  );
}
function af(d) {
  var c = Nu("template");
  return c.innerHTML = sf(d.replaceAll("<!>", "<!---->")), c.content;
}
function Ta(d, c) {
  var g = (
    /** @type {Effect} */
    KA
  );
  g.nodes === null && (g.nodes = { start: d, end: c, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ti(d, c) {
  var g = (c & fu) !== 0, C = (c & hu) !== 0, T, S = !d.startsWith("<!>");
  return () => {
    T === void 0 && (T = af(S ? d : "<!>" + d), g || (T = /** @type {TemplateNode} */
    /* @__PURE__ */ zo(T)));
    var Z = (
      /** @type {TemplateNode} */
      C || ll ? document.importNode(T, !0) : T.cloneNode(!0)
    );
    if (g) {
      var G = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zo(Z)
      ), O = (
        /** @type {TemplateNode} */
        Z.lastChild
      );
      Ta(G, O);
    } else
      Ta(Z, Z);
    return Z;
  };
}
function Ue(d, c) {
  d !== null && d.before(
    /** @type {Node} */
    c
  );
}
function Mn(d, c) {
  var g = c == null ? "" : typeof c == "object" ? `${c}` : c;
  g !== (d.__t ?? (d.__t = d.nodeValue)) && (d.__t = g, d.nodeValue = `${g}`);
}
function lf(d, c) {
  return uf(d, c);
}
const Po = /* @__PURE__ */ new Map();
function uf(d, { target: c, anchor: g, props: C = {}, events: T, context: S, intro: Z = !0, transformError: G }) {
  Ru();
  var O = void 0, j = Yu(() => {
    var iA = g ?? c.appendChild(ln());
    Bu(
      /** @type {TemplateNode} */
      iA,
      {
        pending: () => {
        }
      },
      (nA) => {
        Ya({});
        var V = (
          /** @type {ComponentContext} */
          Pe
        );
        S && (V.c = S), T && (C.$$events = T), O = d(nA, C) || {}, Va();
      },
      G
    );
    var eA = /* @__PURE__ */ new Set(), oA = (nA) => {
      for (var V = 0; V < nA.length; V++) {
        var uA = nA[V];
        if (!eA.has(uA)) {
          eA.add(uA);
          var QA = tf(uA);
          for (const gA of [c, document]) {
            var st = Po.get(gA);
            st === void 0 && (st = /* @__PURE__ */ new Map(), Po.set(gA, st));
            var WA = st.get(uA);
            WA === void 0 ? (gA.addEventListener(uA, Ys, { passive: QA }), st.set(uA, 1)) : st.set(uA, WA + 1);
          }
        }
      }
    };
    return oA(No(ef)), Ca.add(oA), () => {
      for (var nA of eA)
        for (const QA of [c, document]) {
          var V = (
            /** @type {Map<string, number>} */
            Po.get(QA)
          ), uA = (
            /** @type {number} */
            V.get(nA)
          );
          --uA == 0 ? (QA.removeEventListener(nA, Ys), V.delete(nA), V.size === 0 && Po.delete(QA)) : V.set(nA, uA);
        }
      Ca.delete(oA), iA !== g && iA.parentNode?.removeChild(iA);
    };
  });
  return Vs.set(O, j), O;
}
let Vs = /* @__PURE__ */ new WeakMap();
function ff(d, c) {
  const g = Vs.get(d);
  return g ? (Vs.delete(d), g(c)) : Promise.resolve();
}
var li, ki, Qe, Fn, zr, Or, Fo;
class hf {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(c, g = !0) {
    /** @type {TemplateNode} */
    ai(this, "anchor");
    /** @type {Map<Batch, Key>} */
    FA(this, li, /* @__PURE__ */ new Map());
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
    FA(this, ki, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    FA(this, Qe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    FA(this, Fn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    FA(this, zr, !0);
    /**
     * @param {Batch} batch
     */
    FA(this, Or, (c) => {
      if (N(this, li).has(c)) {
        var g = (
          /** @type {Key} */
          N(this, li).get(c)
        ), C = N(this, ki).get(g);
        if (C)
          sa(C), N(this, Fn).delete(g);
        else {
          var T = N(this, Qe).get(g);
          T && (N(this, ki).set(g, T.effect), N(this, Qe).delete(g), T.fragment.lastChild.remove(), this.anchor.before(T.fragment), C = T.effect);
        }
        for (const [S, Z] of N(this, li)) {
          if (N(this, li).delete(S), S === c)
            break;
          const G = N(this, Qe).get(Z);
          G && (ke(G.effect), N(this, Qe).delete(Z));
        }
        for (const [S, Z] of N(this, ki)) {
          if (S === g || N(this, Fn).has(S)) continue;
          const G = () => {
            if (Array.from(N(this, li).values()).includes(S)) {
              var j = document.createDocumentFragment();
              aa(Z, j), j.append(ln()), N(this, Qe).set(S, { effect: Z, fragment: j });
            } else
              ke(Z);
            N(this, Fn).delete(S), N(this, ki).delete(S);
          };
          N(this, zr) || !C ? (N(this, Fn).add(S), Hn(Z, G, !1)) : G();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    FA(this, Fo, (c) => {
      N(this, li).delete(c);
      const g = Array.from(N(this, li).values());
      for (const [C, T] of N(this, Qe))
        g.includes(C) || (ke(T.effect), N(this, Qe).delete(C));
    });
    this.anchor = c, UA(this, zr, g);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(c, g) {
    var C = (
      /** @type {Batch} */
      NA
    ), T = hl();
    if (g && !N(this, ki).has(c) && !N(this, Qe).has(c))
      if (T) {
        var S = document.createDocumentFragment(), Z = ln();
        S.append(Z), N(this, Qe).set(c, {
          effect: Ke(() => g(Z)),
          fragment: S
        });
      } else
        N(this, ki).set(
          c,
          Ke(() => g(this.anchor))
        );
    if (N(this, li).set(C, c), T) {
      for (const [G, O] of N(this, ki))
        G === c ? C.unskip_effect(O) : C.skip_effect(O);
      for (const [G, O] of N(this, Qe))
        G === c ? C.unskip_effect(O.effect) : C.skip_effect(O.effect);
      C.oncommit(N(this, Or)), C.ondiscard(N(this, Fo));
    } else
      N(this, Or).call(this, C);
  }
}
li = new WeakMap(), ki = new WeakMap(), Qe = new WeakMap(), Fn = new WeakMap(), zr = new WeakMap(), Or = new WeakMap(), Fo = new WeakMap();
function Dn(d, c, g = !1) {
  var C = new hf(d), T = g ? D0 : 0;
  function S(Z, G) {
    C.ensure(Z, G);
  }
  Uo(() => {
    var Z = !1;
    c((G, O = 0) => {
      Z = !0, S(O, G);
    }), Z || S(-1, null);
  }, T);
}
function Ma(d, c) {
  return c;
}
function _f(d, c, g) {
  for (var C = [], T = c.length, S, Z = c.length, G = 0; G < T; G++) {
    let eA = c[G];
    Hn(
      eA,
      () => {
        if (S) {
          if (S.pending.delete(eA), S.done.add(eA), S.pending.size === 0) {
            var oA = (
              /** @type {Set<EachOutroGroup>} */
              d.outrogroups
            );
            Ks(d, No(S.done)), oA.delete(S), oA.size === 0 && (d.outrogroups = null);
          }
        } else
          Z -= 1;
      },
      !1
    );
  }
  if (Z === 0) {
    var O = C.length === 0 && g !== null;
    if (O) {
      var j = (
        /** @type {Element} */
        g
      ), iA = (
        /** @type {Element} */
        j.parentNode
      );
      Fu(iA), iA.append(j), d.items.clear();
    }
    Ks(d, c, !O);
  } else
    S = {
      pending: new Set(c),
      done: /* @__PURE__ */ new Set()
    }, (d.outrogroups ?? (d.outrogroups = /* @__PURE__ */ new Set())).add(S);
}
function Ks(d, c, g = !0) {
  var C;
  if (d.pending.size > 0) {
    C = /* @__PURE__ */ new Set();
    for (const Z of d.pending.values())
      for (const G of Z)
        C.add(
          /** @type {EachItem} */
          d.items.get(G).e
        );
  }
  for (var T = 0; T < c.length; T++) {
    var S = c[T];
    if (C?.has(S)) {
      S.f |= Ri;
      const Z = document.createDocumentFragment();
      aa(S, Z);
    } else
      ke(c[T], g);
  }
}
var Da;
function Ia(d, c, g, C, T, S = null) {
  var Z = d, G = /* @__PURE__ */ new Map();
  {
    var O = (
      /** @type {Element} */
      d
    );
    Z = O.appendChild(ln());
  }
  var j = null, iA = /* @__PURE__ */ Iu(() => {
    var WA = g();
    return Za(WA) ? WA : WA == null ? [] : No(WA);
  }), eA, oA = /* @__PURE__ */ new Map(), nA = !0;
  function V(WA) {
    (st.effect.f & Je) === 0 && (st.pending.delete(WA), st.fallback = j, cf(st, eA, Z, c, C), j !== null && (eA.length === 0 ? (j.f & Ri) === 0 ? sa(j) : (j.f ^= Ri, Pr(j, null, Z)) : Hn(j, () => {
      j = null;
    })));
  }
  function uA(WA) {
    st.pending.delete(WA);
  }
  var QA = Uo(() => {
    eA = /** @type {V[]} */
    mA(iA);
    for (var WA = eA.length, gA = /* @__PURE__ */ new Set(), tt = (
      /** @type {Batch} */
      NA
    ), Bt = hl(), it = 0; it < WA; it += 1) {
      var It = eA[it], at = C(It, it), wt = nA ? null : G.get(at);
      wt ? (wt.v && S0(wt.v, It), wt.i && S0(wt.i, it), Bt && tt.unskip_effect(wt.e)) : (wt = df(
        G,
        nA ? Z : Da ?? (Da = ln()),
        It,
        at,
        it,
        T,
        c,
        g
      ), nA || (wt.e.f |= Ri), G.set(at, wt)), gA.add(at);
    }
    if (WA === 0 && S && !j && (nA ? j = Ke(() => S(Z)) : (j = Ke(() => S(Da ?? (Da = ln()))), j.f |= Ri)), WA > gA.size && $l(), !nA)
      if (oA.set(tt, gA), Bt) {
        for (const [ht, XA] of G)
          gA.has(ht) || tt.skip_effect(XA.e);
        tt.oncommit(V), tt.ondiscard(uA);
      } else
        V(tt);
    mA(iA);
  }), st = { effect: QA, items: G, pending: oA, outrogroups: null, fallback: j };
  nA = !1;
}
function br(d) {
  for (; d !== null && (d.f & hi) === 0; )
    d = d.next;
  return d;
}
function cf(d, c, g, C, T) {
  var S = c.length, Z = d.items, G = br(d.effect.first), O, j = null, iA = [], eA = [], oA, nA, V, uA;
  for (uA = 0; uA < S; uA += 1) {
    if (oA = c[uA], nA = T(oA, uA), V = /** @type {EachItem} */
    Z.get(nA).e, d.outrogroups !== null)
      for (const at of d.outrogroups)
        at.pending.delete(V), at.done.delete(V);
    if ((V.f & le) !== 0 && sa(V), (V.f & Ri) !== 0)
      if (V.f ^= Ri, V === G)
        Pr(V, null, g);
      else {
        var QA = j ? j.next : G;
        V === d.effect.last && (d.effect.last = V.prev), V.prev && (V.prev.next = V.next), V.next && (V.next.prev = V.prev), nn(d, j, V), nn(d, V, QA), Pr(V, QA, g), j = V, iA = [], eA = [], G = br(j.next);
        continue;
      }
    if (V !== G) {
      if (O !== void 0 && O.has(V)) {
        if (iA.length < eA.length) {
          var st = eA[0], WA;
          j = st.prev;
          var gA = iA[0], tt = iA[iA.length - 1];
          for (WA = 0; WA < iA.length; WA += 1)
            Pr(iA[WA], st, g);
          for (WA = 0; WA < eA.length; WA += 1)
            O.delete(eA[WA]);
          nn(d, gA.prev, tt.next), nn(d, j, gA), nn(d, tt, st), G = st, j = tt, uA -= 1, iA = [], eA = [];
        } else
          O.delete(V), Pr(V, G, g), nn(d, V.prev, V.next), nn(d, V, j === null ? d.effect.first : j.next), nn(d, j, V), j = V;
        continue;
      }
      for (iA = [], eA = []; G !== null && G !== V; )
        (O ?? (O = /* @__PURE__ */ new Set())).add(G), eA.push(G), G = br(G.next);
      if (G === null)
        continue;
    }
    (V.f & Ri) === 0 && iA.push(V), j = V, G = br(V.next);
  }
  if (d.outrogroups !== null) {
    for (const at of d.outrogroups)
      at.pending.size === 0 && (Ks(d, No(at.done)), d.outrogroups?.delete(at));
    d.outrogroups.size === 0 && (d.outrogroups = null);
  }
  if (G !== null || O !== void 0) {
    var Bt = [];
    if (O !== void 0)
      for (V of O)
        (V.f & le) === 0 && Bt.push(V);
    for (; G !== null; )
      (G.f & le) === 0 && G !== d.fallback && Bt.push(G), G = br(G.next);
    var it = Bt.length;
    if (it > 0) {
      var It = S === 0 ? g : null;
      _f(d, Bt, It);
    }
  }
}
function df(d, c, g, C, T, S, Z, G) {
  var O = (Z & au) !== 0 ? (Z & uu) === 0 ? /* @__PURE__ */ Ou(g, !1, !1) : Yn(g) : null, j = (Z & lu) !== 0 ? Yn(T) : null;
  return {
    v: O,
    i: j,
    e: Ke(() => (S(c, O ?? g, j ?? T, G), () => {
      d.delete(C);
    }))
  };
}
function Pr(d, c, g) {
  if (d.nodes)
    for (var C = d.nodes.start, T = d.nodes.end, S = c && (c.f & Ri) === 0 ? (
      /** @type {EffectNodes} */
      c.nodes.start
    ) : g; C !== null; ) {
      var Z = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qr(C)
      );
      if (S.before(C), C === T)
        return;
      C = Z;
    }
}
function nn(d, c, g) {
  c === null ? d.effect.first = g : c.next = g, g === null ? d.effect.last = c : g.prev = c;
}
function mf(d, c) {
  var g;
  g = document.head.appendChild(ln());
  try {
    Uo(() => c(g), Ha | Kn);
  } finally {
  }
}
function pf(d, c) {
  return d == null ? null : String(d);
}
function vf(d, c, g, C) {
  var T = d.__style;
  if (T !== c) {
    var S = pf(c);
    S == null ? d.removeAttribute("style") : d.style.cssText = S, d.__style = c;
  }
  return C;
}
const gf = Symbol("is custom element"), wf = Symbol("is html");
function kr(d, c, g, C) {
  var T = yf(d);
  T[c] !== (T[c] = g) && (c === "loading" && (d[ql] = g), g == null ? d.removeAttribute(c) : typeof g != "string" && bf(d).includes(c) ? d[c] = g : d.setAttribute(c, g));
}
function yf(d) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    d.__attributes ?? (d.__attributes = {
      [gf]: d.nodeName.includes("-"),
      [wf]: d.namespaceURI === Ua
    })
  );
}
var Sa = /* @__PURE__ */ new Map();
function bf(d) {
  var c = d.getAttribute("is") || d.nodeName, g = Sa.get(c);
  if (g) return g;
  Sa.set(c, g = []);
  for (var C, T = d, S = Element.prototype; S !== T; ) {
    C = Ul(T);
    for (var Z in C)
      C[Z].set && g.push(Z);
    T = Fa(T);
  }
  return g;
}
function kf(d, c, g = c) {
  var C = /* @__PURE__ */ new WeakSet();
  Hu(d, "input", async (T) => {
    var S = T ? d.defaultValue : d.value;
    if (S = Os(d) ? Qs(S) : S, g(S), NA !== null && C.add(NA), await Pl(), S !== (S = c())) {
      var Z = d.selectionStart, G = d.selectionEnd, O = d.value.length;
      if (d.value = S ?? "", G !== null) {
        var j = d.value.length;
        Z === G && G === O && j > O ? (d.selectionStart = j, d.selectionEnd = j) : (d.selectionStart = Z, d.selectionEnd = Math.min(G, j));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Wo(c) == null && d.value && (g(Os(d) ? Qs(d.value) : d.value), NA !== null && C.add(NA)), ra(() => {
    var T = c();
    if (d === document.activeElement) {
      var S = (
        /** @type {Batch} */
        NA
      );
      if (C.has(S))
        return;
    }
    Os(d) && T === Qs(d.value) || d.type === "date" && !T && !d.value || T !== d.value && (d.value = T ?? "");
  });
}
function Os(d) {
  var c = d.type;
  return c === "number" || c === "range";
}
function Qs(d) {
  return d === "" ? null : +d;
}
function za(d, c) {
  return d === c || d?.[Bo] === c;
}
function Pf(d = {}, c, g, C) {
  var T = (
    /** @type {ComponentContext} */
    Pe.r
  ), S = (
    /** @type {Effect} */
    KA
  );
  return Vu(() => {
    var Z, G;
    return ra(() => {
      Z = G, G = [], Wo(() => {
        d !== g(...G) && (c(d, ...G), Z && za(g(...Z), d) && c(null, ...Z));
      });
    }), () => {
      let O = S;
      for (; O !== T && O.parent !== null && O.parent.f & Zs; )
        O = O.parent;
      const j = () => {
        G && za(g(...G), d) && c(null, ...G);
      }, iA = O.teardown;
      O.teardown = () => {
        j(), iA?.();
      };
    };
  }), d;
}
function Bf(d) {
  Pe === null && Jl(), ju(() => {
    const c = Wo(d);
    if (typeof c == "function") return (
      /** @type {() => void} */
      c
    );
  });
}
const Ef = "5";
var Ra;
typeof window < "u" && ((Ra = window.__svelte ?? (window.__svelte = {})).v ?? (Ra.v = /* @__PURE__ */ new Set())).add(Ef);
var xf = /* @__PURE__ */ ti('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>'), Cf = /* @__PURE__ */ ti('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading dashboard...</span></div>'), Lf = /* @__PURE__ */ ti('<p class="text-base text-gray-700 leading-relaxed mb-2 max-w-3xl"> </p>'), Tf = /* @__PURE__ */ ti('<p class="text-sm text-gray-600 italic mb-6 max-w-3xl"> </p>'), Mf = /* @__PURE__ */ ti('<div class="rounded-lg bg-white/60 backdrop-blur-sm border border-white/80 p-3"><p class="text-xs text-gray-500 font-medium"> </p> <p class="text-2xl font-bold text-gray-900"> </p></div>'), Df = /* @__PURE__ */ ti('<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6"></div>'), If = /* @__PURE__ */ ti('<div class="rounded-lg border border-gray-200 shadow-md relative"><div class="p-8"><div class="flex items-center gap-3 mb-3"><img class="w-12 h-12 object-contain"/> <h1 class="text-3xl font-bold text-gray-900"> </h1></div> <!> <!> <!> <a href="/join" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors shadow-md">Join this Realm <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></div>'), Sf = /* @__PURE__ */ ti('<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6"><h3 class="text-xl font-semibold text-gray-900 mb-1">Realm Zones</h3> <p class="text-sm text-gray-500 mb-4"> </p> <div class="w-full h-80 rounded-lg overflow-hidden border border-gray-200 relative z-0"></div></div>'), zf = /* @__PURE__ */ ti('<div class="flex flex-col items-center space-y-2"><img class="w-14 h-14 rounded-full ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200"/> <span class="text-xs text-gray-600 text-center truncate w-full"> </span></div>'), Of = /* @__PURE__ */ ti('<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6"><h3 class="text-lg font-semibold text-gray-900 mb-4">Latest Members</h3> <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4"></div></div>'), Qf = /* @__PURE__ */ ti('<!> <div class="rounded-lg border border-gray-200 shadow-md bg-white p-5"><div class="flex items-center gap-3 mb-3"><div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div> <div><h3 class="text-lg font-semibold text-gray-900">Ask the AI Assistant</h3> <p class="text-xs text-gray-500">Get answers about this realm, its governance, and services</p></div></div> <form class="flex gap-2"><input type="text" placeholder="Ask anything about this realm..." class="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/> <button type="submit" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Ask</button></form></div> <!> <!>', 1), Rf = /* @__PURE__ */ ti('<div class="mt-px pt-20 space-y-4"><!></div>');
function Zf(d, c) {
  Ya(c, !0);
  let g = /* @__PURE__ */ se(null), C = /* @__PURE__ */ se(null), T = /* @__PURE__ */ se(Sn([])), S = /* @__PURE__ */ se(Sn([])), Z = /* @__PURE__ */ se(!0), G = /* @__PURE__ */ se(""), O = /* @__PURE__ */ se(void 0);
  function j(gA) {
    return gA?.success && gA?.data?.objectsListPaginated ? (gA.data.objectsListPaginated.objects || []).map((tt) => JSON.parse(tt)) : [];
  }
  async function iA() {
    ae(Z, !0);
    try {
      const gA = c.ctx.backend, [tt, Bt, it, It] = await Promise.all([
        gA.status(),
        gA.get_objects_paginated("Realm", 0, 1, "asc"),
        gA.get_objects_paginated("Zone", 0, 200, "asc"),
        gA.get_objects_paginated("User", 0, 8, "desc")
      ]);
      tt?.success && tt?.data?.status && ae(g, tt.data.status, !0);
      const at = j(Bt);
      at.length > 0 && ae(C, at[0], !0);
      const wt = j(it);
      ae(T, wt.filter((ht) => ht.h3_index || ht.latitude && ht.longitude), !0), ae(S, j(It), !0);
    } catch (gA) {
      console.error("Error loading dashboard data:", gA);
    }
    ae(Z, !1);
  }
  const eA = 3;
  async function oA() {
    if (!mA(O) || mA(T).length === 0) return;
    const gA = await Promise.resolve().then(() => Uf), { cellToBoundary: tt, gridDisk: Bt } = await Promise.resolve().then(() => Mh), it = gA.map(mA(O)).setView([20, 0], 2), It = gA.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    It.on("tileerror", function() {
      it._fallbackTiles || (it._fallbackTiles = !0, it.removeLayer(It), gA.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(it));
    }), It.addTo(it);
    const at = [], wt = /* @__PURE__ */ new Set();
    for (const ht of mA(T)) {
      if (ht.h3_index)
        try {
          const XA = Bt(ht.h3_index, eA);
          for (const $A of XA) {
            if (wt.has($A)) continue;
            wt.add($A);
            const Tt = tt($A).map((_A) => [_A[0], _A[1]]), jA = $A === ht.h3_index, rt = jA ? 0.45 : 0.15, Rt = jA ? 2 : 0.8;
            gA.polygon(Tt, {
              color: "#4338ca",
              weight: Rt,
              fillColor: "#6366f1",
              fillOpacity: rt
            }).addTo(it), jA && Tt.forEach((_A) => at.push(_A));
          }
        } catch {
          ht.latitude && ht.longitude && at.push([Number(ht.latitude), Number(ht.longitude)]);
        }
      if (ht.latitude && ht.longitude) {
        const XA = Number(ht.latitude), $A = Number(ht.longitude);
        gA.circleMarker([XA, $A], {
          radius: 14,
          fillColor: "#6366f1",
          color: "#6366f1",
          weight: 0,
          fillOpacity: 0.25
        }).addTo(it);
        const Be = gA.circleMarker([XA, $A], {
          radius: 8,
          fillColor: "#6366f1",
          color: "#fff",
          weight: 2,
          fillOpacity: 0.9
        }).addTo(it), Tt = ht.name || ht.h3_index || "", jA = ht.description || "";
        Be.bindPopup(`<strong>${Tt}</strong>${jA ? "<br/>" + jA : ""}`), at.some((rt) => rt[0] === XA && rt[1] === $A) || at.push([XA, $A]);
      }
    }
    at.length > 0 && it.fitBounds(gA.latLngBounds(at), { padding: [40, 40], maxZoom: 5 });
  }
  function nA() {
    mA(G).trim() && c.ctx.navigate(`/extensions/llm_chat?q=${encodeURIComponent(mA(G).trim())}`);
  }
  let V = /* @__PURE__ */ zs(() => mA(g) ? [
    {
      label: "Users",
      value: Number(mA(g).users_count),
      color: "blue"
    },
    {
      label: "Organizations",
      value: Number(mA(g).organizations_count),
      color: "purple"
    },
    {
      label: "Proposals",
      value: Number(mA(g).proposals_count),
      color: "amber"
    },
    {
      label: "Votes",
      value: Number(mA(g).votes_count),
      color: "green"
    },
    {
      label: "Transfers",
      value: Number(mA(g).transfers_count),
      color: "rose"
    },
    {
      label: "Licenses",
      value: Number(mA(g).licenses_count),
      color: "cyan"
    }
  ] : []);
  Bf(async () => {
    await iA(), await Pl(), await oA();
  });
  var uA = Rf();
  mf("fq8fhm", (gA) => {
    var tt = xf();
    Ue(gA, tt);
  });
  var QA = Vt(uA);
  {
    var st = (gA) => {
      var tt = Cf();
      Ue(gA, tt);
    }, WA = (gA) => {
      var tt = Qf(), Bt = Zu(tt);
      {
        var it = (jA) => {
          const rt = /* @__PURE__ */ zs(() => mA(C).welcome_image ? mA(C).welcome_image.split(".").pop() || "png" : ""), Rt = /* @__PURE__ */ zs(() => mA(C).welcome_image ? `/images/welcome.${mA(rt)}` : "/images/default_welcome.jpg");
          var _A = If(), Wt = Vt(_A), vA = Vt(Wt), qA = Vt(vA), vt = ge(qA, 2), Et = Vt(vt), _t = ge(vA, 2);
          {
            var et = (St) => {
              var ue = Lf(), xe = Vt(ue);
              Tn(() => Mn(xe, mA(C).description)), Ue(St, ue);
            };
            Dn(_t, (St) => {
              mA(C).description && St(et);
            });
          }
          var RA = ge(_t, 2);
          {
            var Ee = (St) => {
              var ue = Tf(), xe = Vt(ue);
              Tn(() => Mn(xe, mA(C).welcome_message)), Ue(St, ue);
            };
            Dn(RA, (St) => {
              mA(C).welcome_message && St(Ee);
            });
          }
          var Re = ge(RA, 2);
          {
            var qn = (St) => {
              var ue = Df();
              Ia(ue, 21, () => mA(V), Ma, (xe, Fi) => {
                var Jn = Mf(), hn = Vt(Jn), Xn = Vt(hn), Ce = ge(hn, 2), Ze = Vt(Ce);
                Tn(
                  (O0) => {
                    Mn(Xn, mA(Fi).label), Mn(Ze, O0);
                  },
                  [() => mA(Fi).value.toLocaleString()]
                ), Ue(xe, Jn);
              }), Ue(St, ue);
            };
            Dn(Re, (St) => {
              mA(V).length > 0 && St(qn);
            });
          }
          Tn(
            (St) => {
              vf(_A, `background: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('${mA(Rt) ?? ""}') center/cover no-repeat;`), kr(qA, "src", St), kr(qA, "alt", mA(C).name || "Realm"), Mn(Et, mA(C).name || "Realm");
            },
            [
              () => mA(C).logo ? `/images/realm_logo.${mA(C).logo.split(".").pop() || "svg"}` : "/images/logo_sphere_only.svg"
            ]
          ), Ue(jA, _A);
        };
        Dn(Bt, (jA) => {
          mA(C) && jA(it);
        });
      }
      var It = ge(Bt, 2), at = ge(Vt(It), 2), wt = Vt(at), ht = ge(wt, 2), XA = ge(It, 2);
      {
        var $A = (jA) => {
          var rt = Sf(), Rt = ge(Vt(rt), 2), _A = Vt(Rt), Wt = ge(Rt, 2);
          Pf(Wt, (vA) => ae(O, vA), () => mA(O)), Tn(() => Mn(_A, `${mA(T).length ?? ""} zone${mA(T).length !== 1 ? "s" : ""} in this realm`)), Ue(jA, rt);
        };
        Dn(XA, (jA) => {
          mA(T).length > 0 && jA($A);
        });
      }
      var Be = ge(XA, 2);
      {
        var Tt = (jA) => {
          var rt = Of(), Rt = ge(Vt(rt), 2);
          Ia(Rt, 21, () => mA(S), Ma, (_A, Wt) => {
            var vA = zf(), qA = Vt(vA), vt = ge(qA, 2), Et = Vt(vt);
            Tn(
              (_t) => {
                kr(qA, "src", `https://api.dicebear.com/9.x/glass/svg?seed=${mA(Wt).name || mA(Wt).id}`), kr(qA, "alt", mA(Wt).name || mA(Wt).id), kr(vt, "title", mA(Wt).name || mA(Wt).id), Mn(Et, _t);
              },
              [() => mA(Wt).name || mA(Wt).id.substring(0, 8)]
            ), Ue(_A, vA);
          }), Ue(jA, rt);
        };
        Dn(Be, (jA) => {
          mA(S).length > 0 && jA(Tt);
        });
      }
      Tn((jA) => ht.disabled = jA, [() => !mA(G).trim()]), rf("submit", at, (jA) => {
        jA.preventDefault(), nA();
      }), kf(wt, () => mA(G), (jA) => ae(G, jA)), Ue(gA, tt);
    };
    Dn(QA, (gA) => {
      mA(Z) ? gA(st) : gA(WA, -1);
    });
  }
  Ue(d, uA), Va();
}
function Sh(d, c) {
  const g = lf(Zf, { target: d, props: { ctx: c } });
  return {
    unmount() {
      try {
        ff(g);
      } catch {
      }
    }
  };
}
function Ff(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Br = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var Nf = Br.exports, Oa;
function Gf() {
  return Oa || (Oa = 1, (function(d, c) {
    (function(g, C) {
      C(c);
    })(Nf, (function(g) {
      var C = "1.9.4";
      function T(i) {
        var s, u, _, v;
        for (u = 1, _ = arguments.length; u < _; u++) {
          v = arguments[u];
          for (s in v)
            i[s] = v[s];
        }
        return i;
      }
      var S = Object.create || /* @__PURE__ */ (function() {
        function i() {
        }
        return function(s) {
          return i.prototype = s, new i();
        };
      })();
      function Z(i, s) {
        var u = Array.prototype.slice;
        if (i.bind)
          return i.bind.apply(i, u.call(arguments, 1));
        var _ = u.call(arguments, 2);
        return function() {
          return i.apply(s, _.length ? _.concat(u.call(arguments)) : arguments);
        };
      }
      var G = 0;
      function O(i) {
        return "_leaflet_id" in i || (i._leaflet_id = ++G), i._leaflet_id;
      }
      function j(i, s, u) {
        var _, v, b, M;
        return M = function() {
          _ = !1, v && (b.apply(u, v), v = !1);
        }, b = function() {
          _ ? v = arguments : (i.apply(u, arguments), setTimeout(M, s), _ = !0);
        }, b;
      }
      function iA(i, s, u) {
        var _ = s[1], v = s[0], b = _ - v;
        return i === _ && u ? i : ((i - v) % b + b) % b + v;
      }
      function eA() {
        return !1;
      }
      function oA(i, s) {
        if (s === !1)
          return i;
        var u = Math.pow(10, s === void 0 ? 6 : s);
        return Math.round(i * u) / u;
      }
      function nA(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
      }
      function V(i) {
        return nA(i).split(/\s+/);
      }
      function uA(i, s) {
        Object.prototype.hasOwnProperty.call(i, "options") || (i.options = i.options ? S(i.options) : {});
        for (var u in s)
          i.options[u] = s[u];
        return i.options;
      }
      function QA(i, s, u) {
        var _ = [];
        for (var v in i)
          _.push(encodeURIComponent(u ? v.toUpperCase() : v) + "=" + encodeURIComponent(i[v]));
        return (!s || s.indexOf("?") === -1 ? "?" : "&") + _.join("&");
      }
      var st = /\{ *([\w_ -]+) *\}/g;
      function WA(i, s) {
        return i.replace(st, function(u, _) {
          var v = s[_];
          if (v === void 0)
            throw new Error("No value provided for variable " + u);
          return typeof v == "function" && (v = v(s)), v;
        });
      }
      var gA = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      };
      function tt(i, s) {
        for (var u = 0; u < i.length; u++)
          if (i[u] === s)
            return u;
        return -1;
      }
      var Bt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function it(i) {
        return window["webkit" + i] || window["moz" + i] || window["ms" + i];
      }
      var It = 0;
      function at(i) {
        var s = +/* @__PURE__ */ new Date(), u = Math.max(0, 16 - (s - It));
        return It = s + u, window.setTimeout(i, u);
      }
      var wt = window.requestAnimationFrame || it("RequestAnimationFrame") || at, ht = window.cancelAnimationFrame || it("CancelAnimationFrame") || it("CancelRequestAnimationFrame") || function(i) {
        window.clearTimeout(i);
      };
      function XA(i, s, u) {
        if (u && wt === at)
          i.call(s);
        else
          return wt.call(window, Z(i, s));
      }
      function $A(i) {
        i && ht.call(window, i);
      }
      var Be = {
        __proto__: null,
        extend: T,
        create: S,
        bind: Z,
        get lastId() {
          return G;
        },
        stamp: O,
        throttle: j,
        wrapNum: iA,
        falseFn: eA,
        formatNum: oA,
        trim: nA,
        splitWords: V,
        setOptions: uA,
        getParamString: QA,
        template: WA,
        isArray: gA,
        indexOf: tt,
        emptyImageUrl: Bt,
        requestFn: wt,
        cancelFn: ht,
        requestAnimFrame: XA,
        cancelAnimFrame: $A
      };
      function Tt() {
      }
      Tt.extend = function(i) {
        var s = function() {
          uA(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, u = s.__super__ = this.prototype, _ = S(u);
        _.constructor = s, s.prototype = _;
        for (var v in this)
          Object.prototype.hasOwnProperty.call(this, v) && v !== "prototype" && v !== "__super__" && (s[v] = this[v]);
        return i.statics && T(s, i.statics), i.includes && (jA(i.includes), T.apply(null, [_].concat(i.includes))), T(_, i), delete _.statics, delete _.includes, _.options && (_.options = u.options ? S(u.options) : {}, T(_.options, i.options)), _._initHooks = [], _.callInitHooks = function() {
          if (!this._initHooksCalled) {
            u.callInitHooks && u.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var b = 0, M = _._initHooks.length; b < M; b++)
              _._initHooks[b].call(this);
          }
        }, s;
      }, Tt.include = function(i) {
        var s = this.prototype.options;
        return T(this.prototype, i), i.options && (this.prototype.options = s, this.mergeOptions(i.options)), this;
      }, Tt.mergeOptions = function(i) {
        return T(this.prototype.options, i), this;
      }, Tt.addInitHook = function(i) {
        var s = Array.prototype.slice.call(arguments, 1), u = typeof i == "function" ? i : function() {
          this[i].apply(this, s);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(u), this;
      };
      function jA(i) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          i = gA(i) ? i : [i];
          for (var s = 0; s < i.length; s++)
            i[s] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var rt = {
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
            i = V(i);
            for (var v = 0, b = i.length; v < b; v++)
              this._on(i[v], s, u);
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
            i = V(i);
            for (var v = arguments.length === 1, b = 0, M = i.length; b < M; b++)
              v ? this._off(i[b]) : this._off(i[b], s, u);
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
            var v = { fn: s, ctx: u };
            _ && (v.once = !0), this._events = this._events || {}, this._events[i] = this._events[i] || [], this._events[i].push(v);
          }
        },
        _off: function(i, s, u) {
          var _, v, b;
          if (this._events && (_ = this._events[i], !!_)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (v = 0, b = _.length; v < b; v++)
                  _[v].fn = eA;
              delete this._events[i];
              return;
            }
            if (typeof s != "function") {
              console.warn("wrong listener type: " + typeof s);
              return;
            }
            var M = this._listens(i, s, u);
            if (M !== !1) {
              var F = _[M];
              this._firingCount && (F.fn = eA, this._events[i] = _ = _.slice()), _.splice(M, 1);
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
          var _ = T({}, s, {
            type: i,
            target: this,
            sourceTarget: s && s.sourceTarget || this
          });
          if (this._events) {
            var v = this._events[i];
            if (v) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var b = 0, M = v.length; b < M; b++) {
                var F = v[b], U = F.fn;
                F.once && this.off(i, U, F.ctx), U.call(F.ctx || this, _);
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
          var v = s;
          typeof s != "function" && (_ = !!s, v = void 0, u = void 0);
          var b = this._events && this._events[i];
          if (b && b.length && this._listens(i, v, u) !== !1)
            return !0;
          if (_) {
            for (var M in this._eventParents)
              if (this._eventParents[M].listens(i, s, u, _))
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
          for (var v = 0, b = _.length; v < b; v++)
            if (_[v].fn === s && _[v].ctx === u)
              return v;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(i, s, u) {
          if (typeof i == "object")
            for (var _ in i)
              this._on(_, i[_], s, !0);
          else {
            i = V(i);
            for (var v = 0, b = i.length; v < b; v++)
              this._on(i[v], s, u, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(i) {
          return this._eventParents = this._eventParents || {}, this._eventParents[O(i)] = i, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(i) {
          return this._eventParents && delete this._eventParents[O(i)], this;
        },
        _propagateEvent: function(i) {
          for (var s in this._eventParents)
            this._eventParents[s].fire(i.type, T({
              layer: i.target,
              propagatedFrom: i.target
            }, i), !0);
        }
      };
      rt.addEventListener = rt.on, rt.removeEventListener = rt.clearAllEventListeners = rt.off, rt.addOneTimeEventListener = rt.once, rt.fireEvent = rt.fire, rt.hasEventListeners = rt.listens;
      var Rt = Tt.extend(rt);
      function _A(i, s, u) {
        this.x = u ? Math.round(i) : i, this.y = u ? Math.round(s) : s;
      }
      var Wt = Math.trunc || function(i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i);
      };
      _A.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new _A(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(i) {
          return this.clone()._add(vA(i));
        },
        _add: function(i) {
          return this.x += i.x, this.y += i.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(i) {
          return this.clone()._subtract(vA(i));
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
          return new _A(this.x * i.x, this.y * i.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(i) {
          return new _A(this.x / i.x, this.y / i.y);
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
          return this.x = Wt(this.x), this.y = Wt(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(i) {
          i = vA(i);
          var s = i.x - this.x, u = i.y - this.y;
          return Math.sqrt(s * s + u * u);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(i) {
          return i = vA(i), i.x === this.x && i.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(i) {
          return i = vA(i), Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + oA(this.x) + ", " + oA(this.y) + ")";
        }
      };
      function vA(i, s, u) {
        return i instanceof _A ? i : gA(i) ? new _A(i[0], i[1]) : i == null ? i : typeof i == "object" && "x" in i && "y" in i ? new _A(i.x, i.y) : new _A(i, s, u);
      }
      function qA(i, s) {
        if (i)
          for (var u = s ? [i, s] : i, _ = 0, v = u.length; _ < v; _++)
            this.extend(u[_]);
      }
      qA.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(i) {
          var s, u;
          if (!i)
            return this;
          if (i instanceof _A || typeof i[0] == "number" || "x" in i)
            s = u = vA(i);
          else if (i = vt(i), s = i.min, u = i.max, !s || !u)
            return this;
          return !this.min && !this.max ? (this.min = s.clone(), this.max = u.clone()) : (this.min.x = Math.min(s.x, this.min.x), this.max.x = Math.max(u.x, this.max.x), this.min.y = Math.min(s.y, this.min.y), this.max.y = Math.max(u.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(i) {
          return vA(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            i
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return vA(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return vA(this.max.x, this.min.y);
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
          return typeof i[0] == "number" || i instanceof _A ? i = vA(i) : i = vt(i), i instanceof qA ? (s = i.min, u = i.max) : s = u = i, s.x >= this.min.x && u.x <= this.max.x && s.y >= this.min.y && u.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(i) {
          i = vt(i);
          var s = this.min, u = this.max, _ = i.min, v = i.max, b = v.x >= s.x && _.x <= u.x, M = v.y >= s.y && _.y <= u.y;
          return b && M;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(i) {
          i = vt(i);
          var s = this.min, u = this.max, _ = i.min, v = i.max, b = v.x > s.x && _.x < u.x, M = v.y > s.y && _.y < u.y;
          return b && M;
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
          var s = this.min, u = this.max, _ = Math.abs(s.x - u.x) * i, v = Math.abs(s.y - u.y) * i;
          return vt(
            vA(s.x - _, s.y - v),
            vA(u.x + _, u.y + v)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(i) {
          return i ? (i = vt(i), this.min.equals(i.getTopLeft()) && this.max.equals(i.getBottomRight())) : !1;
        }
      };
      function vt(i, s) {
        return !i || i instanceof qA ? i : new qA(i, s);
      }
      function Et(i, s) {
        if (i)
          for (var u = s ? [i, s] : i, _ = 0, v = u.length; _ < v; _++)
            this.extend(u[_]);
      }
      Et.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(i) {
          var s = this._southWest, u = this._northEast, _, v;
          if (i instanceof et)
            _ = i, v = i;
          else if (i instanceof Et) {
            if (_ = i._southWest, v = i._northEast, !_ || !v)
              return this;
          } else
            return i ? this.extend(RA(i) || _t(i)) : this;
          return !s && !u ? (this._southWest = new et(_.lat, _.lng), this._northEast = new et(v.lat, v.lng)) : (s.lat = Math.min(_.lat, s.lat), s.lng = Math.min(_.lng, s.lng), u.lat = Math.max(v.lat, u.lat), u.lng = Math.max(v.lng, u.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(i) {
          var s = this._southWest, u = this._northEast, _ = Math.abs(s.lat - u.lat) * i, v = Math.abs(s.lng - u.lng) * i;
          return new Et(
            new et(s.lat - _, s.lng - v),
            new et(u.lat + _, u.lng + v)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new et(
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
          return new et(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new et(this.getSouth(), this.getEast());
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
          typeof i[0] == "number" || i instanceof et || "lat" in i ? i = RA(i) : i = _t(i);
          var s = this._southWest, u = this._northEast, _, v;
          return i instanceof Et ? (_ = i.getSouthWest(), v = i.getNorthEast()) : _ = v = i, _.lat >= s.lat && v.lat <= u.lat && _.lng >= s.lng && v.lng <= u.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(i) {
          i = _t(i);
          var s = this._southWest, u = this._northEast, _ = i.getSouthWest(), v = i.getNorthEast(), b = v.lat >= s.lat && _.lat <= u.lat, M = v.lng >= s.lng && _.lng <= u.lng;
          return b && M;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(i) {
          i = _t(i);
          var s = this._southWest, u = this._northEast, _ = i.getSouthWest(), v = i.getNorthEast(), b = v.lat > s.lat && _.lat < u.lat, M = v.lng > s.lng && _.lng < u.lng;
          return b && M;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(i, s) {
          return i ? (i = _t(i), this._southWest.equals(i.getSouthWest(), s) && this._northEast.equals(i.getNorthEast(), s)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function _t(i, s) {
        return i instanceof Et ? i : new Et(i, s);
      }
      function et(i, s, u) {
        if (isNaN(i) || isNaN(s))
          throw new Error("Invalid LatLng object: (" + i + ", " + s + ")");
        this.lat = +i, this.lng = +s, u !== void 0 && (this.alt = +u);
      }
      et.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(i, s) {
          if (!i)
            return !1;
          i = RA(i);
          var u = Math.max(
            Math.abs(this.lat - i.lat),
            Math.abs(this.lng - i.lng)
          );
          return u <= (s === void 0 ? 1e-9 : s);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(i) {
          return "LatLng(" + oA(this.lat, i) + ", " + oA(this.lng, i) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(i) {
          return Re.distance(this, RA(i));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Re.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(i) {
          var s = 180 * i / 40075017, u = s / Math.cos(Math.PI / 180 * this.lat);
          return _t(
            [this.lat - s, this.lng - u],
            [this.lat + s, this.lng + u]
          );
        },
        clone: function() {
          return new et(this.lat, this.lng, this.alt);
        }
      };
      function RA(i, s, u) {
        return i instanceof et ? i : gA(i) && typeof i[0] != "object" ? i.length === 3 ? new et(i[0], i[1], i[2]) : i.length === 2 ? new et(i[0], i[1]) : null : i == null ? i : typeof i == "object" && "lat" in i ? new et(i.lat, "lng" in i ? i.lng : i.lon, i.alt) : s === void 0 ? null : new et(i, s, u);
      }
      var Ee = {
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
          var s = this.projection.bounds, u = this.scale(i), _ = this.transformation.transform(s.min, u), v = this.transformation.transform(s.max, u);
          return new qA(_, v);
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
          var s = this.wrapLng ? iA(i.lng, this.wrapLng, !0) : i.lng, u = this.wrapLat ? iA(i.lat, this.wrapLat, !0) : i.lat, _ = i.alt;
          return new et(u, s, _);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(i) {
          var s = i.getCenter(), u = this.wrapLatLng(s), _ = s.lat - u.lat, v = s.lng - u.lng;
          if (_ === 0 && v === 0)
            return i;
          var b = i.getSouthWest(), M = i.getNorthEast(), F = new et(b.lat - _, b.lng - v), U = new et(M.lat - _, M.lng - v);
          return new Et(F, U);
        }
      }, Re = T({}, Ee, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(i, s) {
          var u = Math.PI / 180, _ = i.lat * u, v = s.lat * u, b = Math.sin((s.lat - i.lat) * u / 2), M = Math.sin((s.lng - i.lng) * u / 2), F = b * b + Math.cos(_) * Math.cos(v) * M * M, U = 2 * Math.atan2(Math.sqrt(F), Math.sqrt(1 - F));
          return this.R * U;
        }
      }), qn = 6378137, St = {
        R: qn,
        MAX_LATITUDE: 85.0511287798,
        project: function(i) {
          var s = Math.PI / 180, u = this.MAX_LATITUDE, _ = Math.max(Math.min(u, i.lat), -u), v = Math.sin(_ * s);
          return new _A(
            this.R * i.lng * s,
            this.R * Math.log((1 + v) / (1 - v)) / 2
          );
        },
        unproject: function(i) {
          var s = 180 / Math.PI;
          return new et(
            (2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * s,
            i.x * s / this.R
          );
        },
        bounds: (function() {
          var i = qn * Math.PI;
          return new qA([-i, -i], [i, i]);
        })()
      };
      function ue(i, s, u, _) {
        if (gA(i)) {
          this._a = i[0], this._b = i[1], this._c = i[2], this._d = i[3];
          return;
        }
        this._a = i, this._b = s, this._c = u, this._d = _;
      }
      ue.prototype = {
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
          return s = s || 1, new _A(
            (i.x / s - this._b) / this._a,
            (i.y / s - this._d) / this._c
          );
        }
      };
      function xe(i, s, u, _) {
        return new ue(i, s, u, _);
      }
      var Fi = T({}, Re, {
        code: "EPSG:3857",
        projection: St,
        transformation: (function() {
          var i = 0.5 / (Math.PI * St.R);
          return xe(i, 0.5, -i, 0.5);
        })()
      }), Jn = T({}, Fi, {
        code: "EPSG:900913"
      });
      function hn(i) {
        return document.createElementNS("http://www.w3.org/2000/svg", i);
      }
      function Xn(i, s) {
        var u = "", _, v, b, M, F, U;
        for (_ = 0, b = i.length; _ < b; _++) {
          for (F = i[_], v = 0, M = F.length; v < M; v++)
            U = F[v], u += (v ? "L" : "M") + U.x + " " + U.y;
          u += s ? A.svg ? "z" : "x" : "";
        }
        return u || "M0 0";
      }
      var Ce = document.documentElement.style, Ze = "ActiveXObject" in window, O0 = Ze && !document.addEventListener, Zr = "msLaunchUri" in navigator && !("documentMode" in document), Le = Y("webkit"), $n = Y("android"), Q0 = Y("android 2") || Y("android 3"), Ni = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), R0 = $n && Y("Google") && Ni < 537 && !("AudioNode" in window), Z0 = !!window.opera, Fr = !Zr && Y("chrome"), F0 = Y("gecko") && !Le && !Z0 && !Ze, Yo = !Fr && Y("safari"), Nr = Y("phantom"), Gr = "OTransition" in Ce, Vo = navigator.platform.indexOf("Win") === 0, Hr = Ze && "transition" in Ce, N0 = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Q0, Ur = "MozPerspective" in Ce, G0 = !window.L_DISABLE_3D && (Hr || N0 || Ur) && !Gr && !Nr, _n = typeof orientation < "u" || Y("mobile"), Ko = _n && Le, X = _n && N0, Wr = !window.PointerEvent && window.MSPointerEvent, H0 = !!(window.PointerEvent || Wr), jr = "ontouchstart" in window || !!window.TouchEvent, qo = !window.L_NO_TOUCH && (jr || H0), U0 = _n && Z0, Yr = _n && F0, Vr = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Kr = (function() {
        var i = !1;
        try {
          var s = Object.defineProperty({}, "passive", {
            get: function() {
              i = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", eA, s), window.removeEventListener("testPassiveEventSupport", eA, s);
        } catch {
        }
        return i;
      })(), A0 = (function() {
        return !!document.createElement("canvas").getContext;
      })(), cn = !!(document.createElementNS && hn("svg").createSVGRect), Gi = !!cn && (function() {
        var i = document.createElement("div");
        return i.innerHTML = "<svg/>", (i.firstChild && i.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), W = !cn && (function() {
        try {
          var i = document.createElement("div");
          i.innerHTML = '<v:shape adj="1"/>';
          var s = i.firstChild;
          return s.style.behavior = "url(#default#VML)", s && typeof s.adj == "object";
        } catch {
          return !1;
        }
      })(), K = navigator.platform.indexOf("Mac") === 0, rA = navigator.platform.indexOf("Linux") === 0;
      function Y(i) {
        return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
      }
      var A = {
        ie: Ze,
        ielt9: O0,
        edge: Zr,
        webkit: Le,
        android: $n,
        android23: Q0,
        androidStock: R0,
        opera: Z0,
        chrome: Fr,
        gecko: F0,
        safari: Yo,
        phantom: Nr,
        opera12: Gr,
        win: Vo,
        ie3d: Hr,
        webkit3d: N0,
        gecko3d: Ur,
        any3d: G0,
        mobile: _n,
        mobileWebkit: Ko,
        mobileWebkit3d: X,
        msPointer: Wr,
        pointer: H0,
        touch: qo,
        touchNative: jr,
        mobileOpera: U0,
        mobileGecko: Yr,
        retina: Vr,
        passiveEvents: Kr,
        canvas: A0,
        svg: cn,
        vml: W,
        inlineSvg: Gi,
        mac: K,
        linux: rA
      }, w = A.msPointer ? "MSPointerDown" : "pointerdown", GA = A.msPointer ? "MSPointerMove" : "pointermove", At = A.msPointer ? "MSPointerUp" : "pointerup", xt = A.msPointer ? "MSPointerCancel" : "pointercancel", CA = {
        touchstart: w,
        touchmove: GA,
        touchend: At,
        touchcancel: xt
      }, HA = {
        touchstart: Fe,
        touchmove: ei,
        touchend: ei,
        touchcancel: ei
      }, $t = {}, YA = !1;
      function DA(i, s, u) {
        return s === "touchstart" && he(), HA[s] ? (u = HA[s].bind(this, u), i.addEventListener(CA[s], u, !1), u) : (console.warn("wrong event specified:", s), eA);
      }
      function fe(i, s, u) {
        if (!CA[s]) {
          console.warn("wrong event specified:", s);
          return;
        }
        i.removeEventListener(CA[s], u, !1);
      }
      function t0(i) {
        $t[i.pointerId] = i;
      }
      function Jo(i) {
        $t[i.pointerId] && ($t[i.pointerId] = i);
      }
      function e0(i) {
        delete $t[i.pointerId];
      }
      function he() {
        YA || (document.addEventListener(w, t0, !0), document.addEventListener(GA, Jo, !0), document.addEventListener(At, e0, !0), document.addEventListener(xt, e0, !0), YA = !0);
      }
      function ei(i, s) {
        if (s.pointerType !== (s.MSPOINTER_TYPE_MOUSE || "mouse")) {
          s.touches = [];
          for (var u in $t)
            s.touches.push($t[u]);
          s.changedTouches = [s], i(s);
        }
      }
      function Fe(i, s) {
        s.MSPOINTER_TYPE_TOUCH && s.pointerType === s.MSPOINTER_TYPE_TOUCH && zt(s), ei(i, s);
      }
      function W0(i) {
        var s = {}, u, _;
        for (_ in i)
          u = i[_], s[_] = u && u.bind ? u.bind(i) : u;
        return i = s, s.type = "dblclick", s.detail = 2, s.isTrusted = !1, s._simulated = !0, s;
      }
      var Xo = 200;
      function ii(i, s) {
        i.addEventListener("dblclick", s);
        var u = 0, _;
        function v(b) {
          if (b.detail !== 1) {
            _ = b.detail;
            return;
          }
          if (!(b.pointerType === "mouse" || b.sourceCapabilities && !b.sourceCapabilities.firesTouchEvents)) {
            var M = tr(b);
            if (!(M.some(function(U) {
              return U instanceof HTMLLabelElement && U.attributes.for;
            }) && !M.some(function(U) {
              return U instanceof HTMLInputElement || U instanceof HTMLSelectElement;
            }))) {
              var F = Date.now();
              F - u <= Xo ? (_++, _ === 2 && s(W0(b))) : _ = 1, u = F;
            }
          }
        }
        return i.addEventListener("click", v), {
          dblclick: s,
          simDblclick: v
        };
      }
      function EA(i, s) {
        i.removeEventListener("dblclick", s.dblclick), i.removeEventListener("click", s.simDblclick);
      }
      var P = te(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), pA = te(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), j0 = pA === "webkitTransition" || pA === "OTransition" ? pA + "End" : "transitionend";
      function qr(i) {
        return typeof i == "string" ? document.getElementById(i) : i;
      }
      function dn(i, s) {
        var u = i.style[s] || i.currentStyle && i.currentStyle[s];
        if ((!u || u === "auto") && document.defaultView) {
          var _ = document.defaultView.getComputedStyle(i, null);
          u = _ ? _[s] : null;
        }
        return u === "auto" ? null : u;
      }
      function JA(i, s, u) {
        var _ = document.createElement(i);
        return _.className = s || "", u && u.appendChild(_), _;
      }
      function dt(i) {
        var s = i.parentNode;
        s && s.removeChild(i);
      }
      function y(i) {
        for (; i.firstChild; )
          i.removeChild(i.firstChild);
      }
      function Hi(i) {
        var s = i.parentNode;
        s && s.lastChild !== i && s.appendChild(i);
      }
      function Ui(i) {
        var s = i.parentNode;
        s && s.firstChild !== i && s.insertBefore(i, s.firstChild);
      }
      function Y0(i, s) {
        if (i.classList !== void 0)
          return i.classList.contains(s);
        var u = mn(i);
        return u.length > 0 && new RegExp("(^|\\s)" + s + "(\\s|$)").test(u);
      }
      function zA(i, s) {
        if (i.classList !== void 0)
          for (var u = V(s), _ = 0, v = u.length; _ < v; _++)
            i.classList.add(u[_]);
        else if (!Y0(i, s)) {
          var b = mn(i);
          V0(i, (b ? b + " " : "") + s);
        }
      }
      function yt(i, s) {
        i.classList !== void 0 ? i.classList.remove(s) : V0(i, nA((" " + mn(i) + " ").replace(" " + s + " ", " ")));
      }
      function V0(i, s) {
        i.className.baseVal === void 0 ? i.className = s : i.className.baseVal = s;
      }
      function mn(i) {
        return i.correspondingElement && (i = i.correspondingElement), i.className.baseVal === void 0 ? i.className : i.className.baseVal;
      }
      function Ae(i, s) {
        "opacity" in i.style ? i.style.opacity = s : "filter" in i.style && Jr(i, s);
      }
      function Jr(i, s) {
        var u = !1, _ = "DXImageTransform.Microsoft.Alpha";
        try {
          u = i.filters.item(_);
        } catch {
          if (s === 1)
            return;
        }
        s = Math.round(s * 100), u ? (u.Enabled = s !== 100, u.Opacity = s) : i.style.filter += " progid:" + _ + "(opacity=" + s + ")";
      }
      function te(i) {
        for (var s = document.documentElement.style, u = 0; u < i.length; u++)
          if (i[u] in s)
            return i[u];
        return !1;
      }
      function ct(i, s, u) {
        var _ = s || new _A(0, 0);
        i.style[P] = (A.ie3d ? "translate(" + _.x + "px," + _.y + "px)" : "translate3d(" + _.x + "px," + _.y + "px,0)") + (u ? " scale(" + u + ")" : "");
      }
      function kt(i, s) {
        i._leaflet_pos = s, A.any3d ? ct(i, s) : (i.style.left = s.x + "px", i.style.top = s.y + "px");
      }
      function _i(i) {
        return i._leaflet_pos || new _A(0, 0);
      }
      var pn, xi, K0;
      if ("onselectstart" in document)
        pn = function() {
          TA(window, "selectstart", zt);
        }, xi = function() {
          ot(window, "selectstart", zt);
        };
      else {
        var Wi = te(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        pn = function() {
          if (Wi) {
            var i = document.documentElement.style;
            K0 = i[Wi], i[Wi] = "none";
          }
        }, xi = function() {
          Wi && (document.documentElement.style[Wi] = K0, K0 = void 0);
        };
      }
      function q0() {
        TA(window, "dragstart", zt);
      }
      function J0() {
        ot(window, "dragstart", zt);
      }
      var i0, lt;
      function vn(i) {
        for (; i.tabIndex === -1; )
          i = i.parentNode;
        i.style && (gn(), i0 = i, lt = i.style.outlineStyle, i.style.outlineStyle = "none", TA(window, "keydown", gn));
      }
      function gn() {
        i0 && (i0.style.outlineStyle = lt, i0 = void 0, lt = void 0, ot(window, "keydown", gn));
      }
      function Xr(i) {
        do
          i = i.parentNode;
        while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
        return i;
      }
      function X0(i) {
        var s = i.getBoundingClientRect();
        return {
          x: s.width / i.offsetWidth || 1,
          y: s.height / i.offsetHeight || 1,
          boundingClientRect: s
        };
      }
      var $o = {
        __proto__: null,
        TRANSFORM: P,
        TRANSITION: pA,
        TRANSITION_END: j0,
        get: qr,
        getStyle: dn,
        create: JA,
        remove: dt,
        empty: y,
        toFront: Hi,
        toBack: Ui,
        hasClass: Y0,
        addClass: zA,
        removeClass: yt,
        setClass: V0,
        getClass: mn,
        setOpacity: Ae,
        testProp: te,
        setTransform: ct,
        setPosition: kt,
        getPosition: _i,
        get disableTextSelection() {
          return pn;
        },
        get enableTextSelection() {
          return xi;
        },
        disableImageDrag: q0,
        enableImageDrag: J0,
        preventOutline: vn,
        restoreOutline: gn,
        getSizedParentNode: Xr,
        getScale: X0
      };
      function TA(i, s, u, _) {
        if (s && typeof s == "object")
          for (var v in s)
            Ar(i, v, s[v], u);
        else {
          s = V(s);
          for (var b = 0, M = s.length; b < M; b++)
            Ar(i, s[b], u, _);
        }
        return this;
      }
      var _e = "_leaflet_events";
      function ot(i, s, u, _) {
        if (arguments.length === 1)
          $r(i), delete i[_e];
        else if (s && typeof s == "object")
          for (var v in s)
            n0(i, v, s[v], u);
        else if (s = V(s), arguments.length === 2)
          $r(i, function(F) {
            return tt(s, F) !== -1;
          });
        else
          for (var b = 0, M = s.length; b < M; b++)
            n0(i, s[b], u, _);
        return this;
      }
      function $r(i, s) {
        for (var u in i[_e]) {
          var _ = u.split(/\d/)[0];
          (!s || s(_)) && n0(i, _, null, null, u);
        }
      }
      var $0 = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Ar(i, s, u, _) {
        var v = s + O(u) + (_ ? "_" + O(_) : "");
        if (i[_e] && i[_e][v])
          return this;
        var b = function(F) {
          return u.call(_ || i, F || window.event);
        }, M = b;
        !A.touchNative && A.pointer && s.indexOf("touch") === 0 ? b = DA(i, s, b) : A.touch && s === "dblclick" ? b = ii(i, b) : "addEventListener" in i ? s === "touchstart" || s === "touchmove" || s === "wheel" || s === "mousewheel" ? i.addEventListener($0[s] || s, b, A.passiveEvents ? { passive: !1 } : !1) : s === "mouseenter" || s === "mouseleave" ? (b = function(F) {
          F = F || window.event, ir(i, F) && M(F);
        }, i.addEventListener($0[s], b, !1)) : i.addEventListener(s, M, !1) : i.attachEvent("on" + s, b), i[_e] = i[_e] || {}, i[_e][v] = b;
      }
      function n0(i, s, u, _, v) {
        v = v || s + O(u) + (_ ? "_" + O(_) : "");
        var b = i[_e] && i[_e][v];
        if (!b)
          return this;
        !A.touchNative && A.pointer && s.indexOf("touch") === 0 ? fe(i, s, b) : A.touch && s === "dblclick" ? EA(i, b) : "removeEventListener" in i ? i.removeEventListener($0[s] || s, b, !1) : i.detachEvent("on" + s, b), i[_e][v] = null;
      }
      function Ci(i) {
        return i.stopPropagation ? i.stopPropagation() : i.originalEvent ? i.originalEvent._stopped = !0 : i.cancelBubble = !0, this;
      }
      function wn(i) {
        return Ar(i, "wheel", Ci), this;
      }
      function Li(i) {
        return TA(i, "mousedown touchstart dblclick contextmenu", Ci), i._leaflet_disable_click = !0, this;
      }
      function zt(i) {
        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, this;
      }
      function ci(i) {
        return zt(i), Ci(i), this;
      }
      function tr(i) {
        if (i.composedPath)
          return i.composedPath();
        for (var s = [], u = i.target; u; )
          s.push(u), u = u.parentNode;
        return s;
      }
      function er(i, s) {
        if (!s)
          return new _A(i.clientX, i.clientY);
        var u = X0(s), _ = u.boundingClientRect;
        return new _A(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (i.clientX - _.left) / u.x - s.clientLeft,
          (i.clientY - _.top) / u.y - s.clientTop
        );
      }
      var As = A.linux && A.chrome ? window.devicePixelRatio : A.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Ao(i) {
        return A.edge ? i.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          i.deltaY && i.deltaMode === 0 ? -i.deltaY / As : (
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
      function ir(i, s) {
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
      var ts = {
        __proto__: null,
        on: TA,
        off: ot,
        stopPropagation: Ci,
        disableScrollPropagation: wn,
        disableClickPropagation: Li,
        preventDefault: zt,
        stop: ci,
        getPropagationPath: tr,
        getMousePosition: er,
        getWheelDelta: Ao,
        isExternalTarget: ir,
        addListener: TA,
        removeListener: ot
      }, Ot = Rt.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(i, s, u, _) {
          this.stop(), this._el = i, this._inProgress = !0, this._duration = u || 0.25, this._easeOutPower = 1 / Math.max(_ || 0.5, 0.2), this._startPos = _i(i), this._offset = s.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = XA(this._animate, this), this._step();
        },
        _step: function(i) {
          var s = +/* @__PURE__ */ new Date() - this._startTime, u = this._duration * 1e3;
          s < u ? this._runFrame(this._easeOut(s / u), i) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(i, s) {
          var u = this._startPos.add(this._offset.multiplyBy(i));
          s && u._round(), kt(this._el, u), this.fire("step");
        },
        _complete: function() {
          $A(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(i) {
          return 1 - Math.pow(1 - i, this._easeOutPower);
        }
      }), OA = Rt.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: Fi,
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
          s = uA(this, s), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(i), this._initLayout(), this._onResize = Z(this._onResize, this), this._initEvents(), s.maxBounds && this.setMaxBounds(s.maxBounds), s.zoom !== void 0 && (this._zoom = this._limitZoom(s.zoom)), s.center && s.zoom !== void 0 && this.setView(RA(s.center), s.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = pA && A.any3d && !A.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), TA(this._proxy, j0, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(i, s, u) {
          if (s = s === void 0 ? this._zoom : this._limitZoom(s), i = this._limitCenter(RA(i), s, this.options.maxBounds), u = u || {}, this._stop(), this._loaded && !u.reset && u !== !0) {
            u.animate !== void 0 && (u.zoom = T({ animate: u.animate }, u.zoom), u.pan = T({ animate: u.animate, duration: u.duration }, u.pan));
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
          var _ = this.getZoomScale(s), v = this.getSize().divideBy(2), b = i instanceof _A ? i : this.latLngToContainerPoint(i), M = b.subtract(v).multiplyBy(1 - 1 / _), F = this.containerPointToLatLng(v.add(M));
          return this.setView(F, s, { zoom: u });
        },
        _getBoundsCenterZoom: function(i, s) {
          s = s || {}, i = i.getBounds ? i.getBounds() : _t(i);
          var u = vA(s.paddingTopLeft || s.padding || [0, 0]), _ = vA(s.paddingBottomRight || s.padding || [0, 0]), v = this.getBoundsZoom(i, !1, u.add(_));
          if (v = typeof s.maxZoom == "number" ? Math.min(s.maxZoom, v) : v, v === 1 / 0)
            return {
              center: i.getCenter(),
              zoom: v
            };
          var b = _.subtract(u).divideBy(2), M = this.project(i.getSouthWest(), v), F = this.project(i.getNorthEast(), v), U = this.unproject(M.add(F).divideBy(2).add(b), v);
          return {
            center: U,
            zoom: v
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(i, s) {
          if (i = _t(i), !i.isValid())
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
          if (i = vA(i).round(), s = s || {}, !i.x && !i.y)
            return this.fire("moveend");
          if (s.animate !== !0 && !this.getSize().contains(i))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(i)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new Ot(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), s.noMoveStart || this.fire("movestart"), s.animate !== !1) {
            zA(this._mapPane, "leaflet-pan-anim");
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
          var _ = this.project(this.getCenter()), v = this.project(i), b = this.getSize(), M = this._zoom;
          i = RA(i), s = s === void 0 ? M : s;
          var F = Math.max(b.x, b.y), U = F * this.getZoomScale(M, s), J = v.distanceTo(_) || 1, sA = 1.42, yA = sA * sA;
          function IA(bt) {
            var mt = bt ? -1 : 1, Cs = bt ? U : F, Ls = U * U - F * F + mt * yA * yA * J * J, Cn = 2 * Cs * yA * J, Jt = Ls / Cn, wo = Math.sqrt(Jt * Jt + 1) - Jt, Ts = wo < 1e-9 ? -18 : Math.log(wo);
            return Ts;
          }
          function Ft(bt) {
            return (Math.exp(bt) - Math.exp(-bt)) / 2;
          }
          function Mt(bt) {
            return (Math.exp(bt) + Math.exp(-bt)) / 2;
          }
          function pe(bt) {
            return Ft(bt) / Mt(bt);
          }
          var qt = IA(0);
          function Xi(bt) {
            return F * (Mt(qt) / Mt(qt + sA * bt));
          }
          function Ps(bt) {
            return F * (Mt(qt) * pe(qt + sA * bt) - Ft(qt)) / yA;
          }
          function Bs(bt) {
            return 1 - Math.pow(1 - bt, 1.5);
          }
          var Es = Date.now(), go = (IA(1) - qt) / sA, xs = u.duration ? 1e3 * u.duration : 1e3 * go * 0.8;
          function yr() {
            var bt = (Date.now() - Es) / xs, mt = Bs(bt) * go;
            bt <= 1 ? (this._flyToFrame = XA(yr, this), this._move(
              this.unproject(_.add(v.subtract(_).multiplyBy(Ps(mt) / J)), M),
              this.getScaleZoom(F / Xi(mt), M),
              { flyTo: !0 }
            )) : this._move(i, s)._moveEnd(!0);
          }
          return this._moveStart(!0, u.noMoveStart), yr.call(this), this;
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
          return i = _t(i), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), i.isValid() ? (this.options.maxBounds = i, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
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
          var u = this.getCenter(), _ = this._limitCenter(u, this._zoom, _t(i));
          return u.equals(_) || this.panTo(_, s), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(i, s) {
          s = s || {};
          var u = vA(s.paddingTopLeft || s.padding || [0, 0]), _ = vA(s.paddingBottomRight || s.padding || [0, 0]), v = this.project(this.getCenter()), b = this.project(i), M = this.getPixelBounds(), F = vt([M.min.add(u), M.max.subtract(_)]), U = F.getSize();
          if (!F.contains(b)) {
            this._enforcingBounds = !0;
            var J = b.subtract(F.getCenter()), sA = F.extend(b).getSize().subtract(U);
            v.x += J.x < 0 ? -sA.x : sA.x, v.y += J.y < 0 ? -sA.y : sA.y, this.panTo(this.unproject(v), s), this._enforcingBounds = !1;
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
          i = T({
            animate: !1,
            pan: !0
          }, i === !0 ? { animate: !0 } : i);
          var s = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var u = this.getSize(), _ = s.divideBy(2).round(), v = u.divideBy(2).round(), b = _.subtract(v);
          return !b.x && !b.y ? this : (i.animate && i.pan ? this.panBy(b) : (i.pan && this._rawPanBy(b), this.fire("move"), i.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(Z(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
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
          if (i = this._locateOptions = T({
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
          var s = Z(this._handleGeolocationResponse, this), u = Z(this._handleGeolocationError, this);
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
            var s = i.coords.latitude, u = i.coords.longitude, _ = new et(s, u), v = _.toBounds(i.coords.accuracy * 2), b = this._locateOptions;
            if (b.setView) {
              var M = this.getBoundsZoom(v);
              this.setView(_, b.maxZoom ? Math.min(M, b.maxZoom) : M);
            }
            var F = {
              latlng: _,
              bounds: v,
              timestamp: i.timestamp
            };
            for (var U in i.coords)
              typeof i.coords[U] == "number" && (F[U] = i.coords[U]);
            this.fire("locationfound", F);
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), dt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && ($A(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var i;
          for (i in this._layers)
            this._layers[i].remove();
          for (i in this._panes)
            dt(this._panes[i]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(i, s) {
          var u = "leaflet-pane" + (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""), _ = JA("div", u, s || this._mapPane);
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
          return new Et(s, u);
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
          i = _t(i), u = vA(u || [0, 0]);
          var _ = this.getZoom() || 0, v = this.getMinZoom(), b = this.getMaxZoom(), M = i.getNorthWest(), F = i.getSouthEast(), U = this.getSize().subtract(u), J = vt(this.project(F, _), this.project(M, _)).getSize(), sA = A.any3d ? this.options.zoomSnap : 1, yA = U.x / J.x, IA = U.y / J.y, Ft = s ? Math.max(yA, IA) : Math.min(yA, IA);
          return _ = this.getScaleZoom(Ft, _), sA && (_ = Math.round(_ / (sA / 100)) * (sA / 100), _ = s ? Math.ceil(_ / sA) * sA : Math.floor(_ / sA) * sA), Math.max(v, Math.min(b, _));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new _A(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(i, s) {
          var u = this._getTopLeftPoint(i, s);
          return new qA(u, u.add(this.getSize()));
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
          return s = s === void 0 ? this._zoom : s, this.options.crs.latLngToPoint(RA(i), s);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(i, s) {
          return s = s === void 0 ? this._zoom : s, this.options.crs.pointToLatLng(vA(i), s);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(i) {
          var s = vA(i).add(this.getPixelOrigin());
          return this.unproject(s);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(i) {
          var s = this.project(RA(i))._round();
          return s._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(i) {
          return this.options.crs.wrapLatLng(RA(i));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(i) {
          return this.options.crs.wrapLatLngBounds(_t(i));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(i, s) {
          return this.options.crs.distance(RA(i), RA(s));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(i) {
          return vA(i).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(i) {
          return vA(i).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(i) {
          var s = this.containerPointToLayerPoint(vA(i));
          return this.layerPointToLatLng(s);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(i) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(RA(i)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(i) {
          return er(i, this._container);
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
          var s = this._container = qr(i);
          if (s) {
            if (s._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          TA(s, "scroll", this._onScroll, this), this._containerId = O(s);
        },
        _initLayout: function() {
          var i = this._container;
          this._fadeAnimated = this.options.fadeAnimation && A.any3d, zA(i, "leaflet-container" + (A.touch ? " leaflet-touch" : "") + (A.retina ? " leaflet-retina" : "") + (A.ielt9 ? " leaflet-oldie" : "") + (A.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var s = dn(i, "position");
          s !== "absolute" && s !== "relative" && s !== "fixed" && s !== "sticky" && (i.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var i = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), kt(this._mapPane, new _A(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (zA(i.markerPane, "leaflet-zoom-hide"), zA(i.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(i, s, u) {
          kt(this._mapPane, new _A(0, 0));
          var _ = !this._loaded;
          this._loaded = !0, s = this._limitZoom(s), this.fire("viewprereset");
          var v = this._zoom !== s;
          this._moveStart(v, u)._move(i, s)._moveEnd(v), this.fire("viewreset"), _ && this.fire("load");
        },
        _moveStart: function(i, s) {
          return i && this.fire("zoomstart"), s || this.fire("movestart"), this;
        },
        _move: function(i, s, u, _) {
          s === void 0 && (s = this._zoom);
          var v = this._zoom !== s;
          return this._zoom = s, this._lastCenter = i, this._pixelOrigin = this._getNewPixelOrigin(i), _ ? u && u.pinch && this.fire("zoom", u) : ((v || u && u.pinch) && this.fire("zoom", u), this.fire("move", u)), this;
        },
        _moveEnd: function(i) {
          return i && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return $A(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(i) {
          kt(this._mapPane, this._getMapPanePos().subtract(i));
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
          this._targets = {}, this._targets[O(this._container)] = this;
          var s = i ? ot : TA;
          s(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && s(window, "resize", this._onResize, this), A.any3d && this.options.transform3DLimit && (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          $A(this._resizeRequest), this._resizeRequest = XA(
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
          for (var u = [], _, v = s === "mouseout" || s === "mouseover", b = i.target || i.srcElement, M = !1; b; ) {
            if (_ = this._targets[O(b)], _ && (s === "click" || s === "preclick") && this._draggableMoved(_)) {
              M = !0;
              break;
            }
            if (_ && _.listens(s, !0) && (v && !ir(b, i) || (u.push(_), v)) || b === this._container)
              break;
            b = b.parentNode;
          }
          return !u.length && !M && !v && this.listens(s, !0) && (u = [this]), u;
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
            u === "mousedown" && vn(s), this._fireDOMEvent(i, u);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(i, s, u) {
          if (i.type === "click") {
            var _ = T({}, i);
            _.type = "preclick", this._fireDOMEvent(_, _.type, u);
          }
          var v = this._findEventTargets(i, s);
          if (u) {
            for (var b = [], M = 0; M < u.length; M++)
              u[M].listens(s, !0) && b.push(u[M]);
            v = b.concat(v);
          }
          if (v.length) {
            s === "contextmenu" && zt(i);
            var F = v[0], U = {
              originalEvent: i
            };
            if (i.type !== "keypress" && i.type !== "keydown" && i.type !== "keyup") {
              var J = F.getLatLng && (!F._radius || F._radius <= 10);
              U.containerPoint = J ? this.latLngToContainerPoint(F.getLatLng()) : this.mouseEventToContainerPoint(i), U.layerPoint = this.containerPointToLayerPoint(U.containerPoint), U.latlng = J ? F.getLatLng() : this.layerPointToLatLng(U.layerPoint);
            }
            for (M = 0; M < v.length; M++)
              if (v[M].fire(s, U, !0), U.originalEvent._stopped || v[M].options.bubblingMouseEvents === !1 && tt(this._mouseEvents, s) !== -1)
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
          return _i(this._mapPane) || new _A(0, 0);
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
          return vt([
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
          var _ = this.project(i, s), v = this.getSize().divideBy(2), b = new qA(_.subtract(v), _.add(v)), M = this._getBoundsOffset(b, u, s);
          return Math.abs(M.x) <= 1 && Math.abs(M.y) <= 1 ? i : this.unproject(_.add(M), s);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(i, s) {
          if (!s)
            return i;
          var u = this.getPixelBounds(), _ = new qA(u.min.add(i), u.max.add(i));
          return i.add(this._getBoundsOffset(_, s));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(i, s, u) {
          var _ = vt(
            this.project(s.getNorthEast(), u),
            this.project(s.getSouthWest(), u)
          ), v = _.min.subtract(i.min), b = _.max.subtract(i.max), M = this._rebound(v.x, -b.x), F = this._rebound(v.y, -b.y);
          return new _A(M, F);
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
          yt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(i, s) {
          var u = this._getCenterOffset(i)._trunc();
          return (s && s.animate) !== !0 && !this.getSize().contains(u) ? !1 : (this.panBy(u, s), !0);
        },
        _createAnimProxy: function() {
          var i = this._proxy = JA("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(i), this.on("zoomanim", function(s) {
            var u = P, _ = this._proxy.style[u];
            ct(this._proxy, this.project(s.center, s.zoom), this.getZoomScale(s.zoom, 1)), _ === this._proxy.style[u] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          dt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var i = this.getCenter(), s = this.getZoom();
          ct(this._proxy, this.project(i, s), this.getZoomScale(s, 1));
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
          var _ = this.getZoomScale(s), v = this._getCenterOffset(i)._divideBy(1 - 1 / _);
          return u.animate !== !0 && !this.getSize().contains(v) ? !1 : (XA(function() {
            this._moveStart(!0, u.noMoveStart || !1)._animateZoom(i, s, !0);
          }, this), !0);
        },
        _animateZoom: function(i, s, u, _) {
          this._mapPane && (u && (this._animatingZoom = !0, this._animateToCenter = i, this._animateToZoom = s, zA(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: i,
            zoom: s,
            noUpdate: _
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(Z(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && yt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function jt(i, s) {
        return new OA(i, s);
      }
      var ee = Tt.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(i) {
          uA(this, i);
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
          return zA(s, "leaflet-control"), u.indexOf("bottom") !== -1 ? _.insertBefore(s, _.firstChild) : _.appendChild(s), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (dt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(i) {
          this._map && i && i.screenX > 0 && i.screenY > 0 && this._map.getContainer().focus();
        }
      }), ji = function(i) {
        return new ee(i);
      };
      OA.include({
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
          var i = this._controlCorners = {}, s = "leaflet-", u = this._controlContainer = JA("div", s + "control-container", this._container);
          function _(v, b) {
            var M = s + v + " " + s + b;
            i[v + b] = JA("div", M, u);
          }
          _("top", "left"), _("top", "right"), _("bottom", "left"), _("bottom", "right");
        },
        _clearControlPos: function() {
          for (var i in this._controlCorners)
            dt(this._controlCorners[i]);
          dt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var yn = ee.extend({
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
          uA(this, u), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
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
          return ee.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
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
          var s = this._getLayer(O(i));
          return s && this._layers.splice(this._layers.indexOf(s), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          zA(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var i = this._map.getSize().y - (this._container.offsetTop + 50);
          return i < this._section.clientHeight ? (zA(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = i + "px") : yt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return yt(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var i = "leaflet-control-layers", s = this._container = JA("div", i), u = this.options.collapsed;
          s.setAttribute("aria-haspopup", !0), Li(s), wn(s);
          var _ = this._section = JA("section", i + "-list");
          u && (this._map.on("click", this.collapse, this), TA(s, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var v = this._layersLink = JA("a", i + "-toggle", s);
          v.href = "#", v.title = "Layers", v.setAttribute("role", "button"), TA(v, {
            keydown: function(b) {
              b.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(b) {
              zt(b), this._expandSafely();
            }
          }, this), u || this.expand(), this._baseLayersList = JA("div", i + "-base", _), this._separator = JA("div", i + "-separator", _), this._overlaysList = JA("div", i + "-overlays", _), s.appendChild(_);
        },
        _getLayer: function(i) {
          for (var s = 0; s < this._layers.length; s++)
            if (this._layers[s] && O(this._layers[s].layer) === i)
              return this._layers[s];
        },
        _addLayer: function(i, s, u) {
          this._map && i.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: i,
            name: s,
            overlay: u
          }), this.options.sortLayers && this._layers.sort(Z(function(_, v) {
            return this.options.sortFunction(_.layer, v.layer, _.name, v.name);
          }, this)), this.options.autoZIndex && i.setZIndex && (this._lastZIndex++, i.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          y(this._baseLayersList), y(this._overlaysList), this._layerControlInputs = [];
          var i, s, u, _, v = 0;
          for (u = 0; u < this._layers.length; u++)
            _ = this._layers[u], this._addItem(_), s = s || _.overlay, i = i || !_.overlay, v += _.overlay ? 0 : 1;
          return this.options.hideSingleBase && (i = i && v > 1, this._baseLayersList.style.display = i ? "" : "none"), this._separator.style.display = s && i ? "" : "none", this;
        },
        _onLayerChange: function(i) {
          this._handlingClick || this._update();
          var s = this._getLayer(O(i.target)), u = s.overlay ? i.type === "add" ? "overlayadd" : "overlayremove" : i.type === "add" ? "baselayerchange" : null;
          u && this._map.fire(u, s);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(i, s) {
          var u = '<input type="radio" class="leaflet-control-layers-selector" name="' + i + '"' + (s ? ' checked="checked"' : "") + "/>", _ = document.createElement("div");
          return _.innerHTML = u, _.firstChild;
        },
        _addItem: function(i) {
          var s = document.createElement("label"), u = this._map.hasLayer(i.layer), _;
          i.overlay ? (_ = document.createElement("input"), _.type = "checkbox", _.className = "leaflet-control-layers-selector", _.defaultChecked = u) : _ = this._createRadioElement("leaflet-base-layers_" + O(this), u), this._layerControlInputs.push(_), _.layerId = O(i.layer), TA(_, "click", this._onInputClick, this);
          var v = document.createElement("span");
          v.innerHTML = " " + i.name;
          var b = document.createElement("span");
          s.appendChild(b), b.appendChild(_), b.appendChild(v);
          var M = i.overlay ? this._overlaysList : this._baseLayersList;
          return M.appendChild(s), this._checkDisabledLayers(), s;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var i = this._layerControlInputs, s, u, _ = [], v = [];
            this._handlingClick = !0;
            for (var b = i.length - 1; b >= 0; b--)
              s = i[b], u = this._getLayer(s.layerId).layer, s.checked ? _.push(u) : s.checked || v.push(u);
            for (b = 0; b < v.length; b++)
              this._map.hasLayer(v[b]) && this._map.removeLayer(v[b]);
            for (b = 0; b < _.length; b++)
              this._map.hasLayer(_[b]) || this._map.addLayer(_[b]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var i = this._layerControlInputs, s, u, _ = this._map.getZoom(), v = i.length - 1; v >= 0; v--)
            s = i[v], u = this._getLayer(s.layerId).layer, s.disabled = u.options.minZoom !== void 0 && _ < u.options.minZoom || u.options.maxZoom !== void 0 && _ > u.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var i = this._section;
          this._preventClick = !0, TA(i, "click", zt), this.expand();
          var s = this;
          setTimeout(function() {
            ot(i, "click", zt), s._preventClick = !1;
          });
        }
      }), es = function(i, s, u) {
        return new yn(i, s, u);
      }, nr = ee.extend({
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
          var s = "leaflet-control-zoom", u = JA("div", s + " leaflet-bar"), _ = this.options;
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
        _createButton: function(i, s, u, _, v) {
          var b = JA("a", u, _);
          return b.innerHTML = i, b.href = "#", b.title = s, b.setAttribute("role", "button"), b.setAttribute("aria-label", s), Li(b), TA(b, "click", ci), TA(b, "click", v, this), TA(b, "click", this._refocusOnMap, this), b;
        },
        _updateDisabled: function() {
          var i = this._map, s = "leaflet-disabled";
          yt(this._zoomInButton, s), yt(this._zoomOutButton, s), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || i._zoom === i.getMinZoom()) && (zA(this._zoomOutButton, s), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || i._zoom === i.getMaxZoom()) && (zA(this._zoomInButton, s), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      OA.mergeOptions({
        zoomControl: !0
      }), OA.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new nr(), this.addControl(this.zoomControl));
      });
      var is = function(i) {
        return new nr(i);
      }, rr = ee.extend({
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
          var s = "leaflet-control-scale", u = JA("div", s), _ = this.options;
          return this._addScales(_, s + "-line", u), i.on(_.updateWhenIdle ? "moveend" : "move", this._update, this), i.whenReady(this._update, this), u;
        },
        onRemove: function(i) {
          i.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(i, s, u) {
          i.metric && (this._mScale = JA("div", s, u)), i.imperial && (this._iScale = JA("div", s, u));
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
          var s = i * 3.2808399, u, _, v;
          s > 5280 ? (u = s / 5280, _ = this._getRoundNum(u), this._updateScale(this._iScale, _ + " mi", _ / u)) : (v = this._getRoundNum(s), this._updateScale(this._iScale, v + " ft", v / s));
        },
        _updateScale: function(i, s, u) {
          i.style.width = Math.round(this.options.maxWidth * u) + "px", i.innerHTML = s;
        },
        _getRoundNum: function(i) {
          var s = Math.pow(10, (Math.floor(i) + "").length - 1), u = i / s;
          return u = u >= 10 ? 10 : u >= 5 ? 5 : u >= 3 ? 3 : u >= 2 ? 2 : 1, s * u;
        }
      }), r0 = function(i) {
        return new rr(i);
      }, Ti = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', o0 = ee.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (A.inlineSvg ? Ti + " " : "") + "Leaflet</a>"
        },
        initialize: function(i) {
          uA(this, i), this._attributions = {};
        },
        onAdd: function(i) {
          i.attributionControl = this, this._container = JA("div", "leaflet-control-attribution"), Li(this._container);
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
      OA.mergeOptions({
        attributionControl: !0
      }), OA.addInitHook(function() {
        this.options.attributionControl && new o0().addTo(this);
      });
      var to = function(i) {
        return new o0(i);
      };
      ee.Layers = yn, ee.Zoom = nr, ee.Scale = rr, ee.Attribution = o0, ji.layers = es, ji.zoom = is, ji.scale = r0, ji.attribution = to;
      var ie = Tt.extend({
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
      ie.addTo = function(i, s) {
        return i.addHandler(s, this), this;
      };
      var Mi = { Events: rt }, ni = A.touch ? "touchstart mousedown" : "mousedown", ri = Rt.extend({
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
          uA(this, _), this._element = i, this._dragStartTarget = s || i, this._preventOutline = u;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (TA(this._dragStartTarget, ni, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (ri._dragging === this && this.finishDrag(!0), ot(this._dragStartTarget, ni, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(i) {
          if (this._enabled && (this._moved = !1, !Y0(this._element, "leaflet-zoom-anim"))) {
            if (i.touches && i.touches.length !== 1) {
              ri._dragging === this && this.finishDrag();
              return;
            }
            if (!(ri._dragging || i.shiftKey || i.which !== 1 && i.button !== 1 && !i.touches) && (ri._dragging = this, this._preventOutline && vn(this._element), q0(), pn(), !this._moving)) {
              this.fire("down");
              var s = i.touches ? i.touches[0] : i, u = Xr(this._element);
              this._startPoint = new _A(s.clientX, s.clientY), this._startPos = _i(this._element), this._parentScale = X0(u);
              var _ = i.type === "mousedown";
              TA(document, _ ? "mousemove" : "touchmove", this._onMove, this), TA(document, _ ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(i) {
          if (this._enabled) {
            if (i.touches && i.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var s = i.touches && i.touches.length === 1 ? i.touches[0] : i, u = new _A(s.clientX, s.clientY)._subtract(this._startPoint);
            !u.x && !u.y || Math.abs(u.x) + Math.abs(u.y) < this.options.clickTolerance || (u.x /= this._parentScale.x, u.y /= this._parentScale.y, zt(i), this._moved || (this.fire("dragstart"), this._moved = !0, zA(document.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), zA(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(u), this._moving = !0, this._lastEvent = i, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var i = { originalEvent: this._lastEvent };
          this.fire("predrag", i), kt(this._element, this._newPos), this.fire("drag", i);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(i) {
          yt(document.body, "leaflet-dragging"), this._lastTarget && (yt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ot(document, "mousemove touchmove", this._onMove, this), ot(document, "mouseup touchend touchcancel", this._onUp, this), J0(), xi();
          var s = this._moved && this._moving;
          this._moving = !1, ri._dragging = !1, s && this.fire("dragend", {
            noInertia: i,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function or(i, s, u) {
        var _, v = [1, 4, 2, 8], b, M, F, U, J, sA, yA, IA;
        for (b = 0, sA = i.length; b < sA; b++)
          i[b]._code = Ne(i[b], s);
        for (F = 0; F < 4; F++) {
          for (yA = v[F], _ = [], b = 0, sA = i.length, M = sA - 1; b < sA; M = b++)
            U = i[b], J = i[M], U._code & yA ? J._code & yA || (IA = a0(J, U, yA, s, u), IA._code = Ne(IA, s), _.push(IA)) : (J._code & yA && (IA = a0(J, U, yA, s, u), IA._code = Ne(IA, s), _.push(IA)), _.push(U));
          i = _;
        }
        return i;
      }
      function s0(i, s) {
        var u, _, v, b, M, F, U, J, sA;
        if (!i || i.length === 0)
          throw new Error("latlngs not passed");
        ce(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var yA = RA([0, 0]), IA = _t(i), Ft = IA.getNorthWest().distanceTo(IA.getSouthWest()) * IA.getNorthEast().distanceTo(IA.getNorthWest());
        Ft < 1700 && (yA = sr(i));
        var Mt = i.length, pe = [];
        for (u = 0; u < Mt; u++) {
          var qt = RA(i[u]);
          pe.push(s.project(RA([qt.lat - yA.lat, qt.lng - yA.lng])));
        }
        for (F = U = J = 0, u = 0, _ = Mt - 1; u < Mt; _ = u++)
          v = pe[u], b = pe[_], M = v.y * b.x - b.y * v.x, U += (v.x + b.x) * M, J += (v.y + b.y) * M, F += M * 3;
        F === 0 ? sA = pe[0] : sA = [U / F, J / F];
        var Xi = s.unproject(vA(sA));
        return RA([Xi.lat + yA.lat, Xi.lng + yA.lng]);
      }
      function sr(i) {
        for (var s = 0, u = 0, _ = 0, v = 0; v < i.length; v++) {
          var b = RA(i[v]);
          s += b.lat, u += b.lng, _++;
        }
        return RA([s / _, u / _]);
      }
      var ns = {
        __proto__: null,
        clipPolygon: or,
        polygonCenter: s0,
        centroid: sr
      };
      function ar(i, s) {
        if (!s || !i.length)
          return i.slice();
        var u = s * s;
        return i = ss(i, u), i = os(i, u), i;
      }
      function eo(i, s, u) {
        return Math.sqrt(bn(i, s, u, !0));
      }
      function rs(i, s, u) {
        return bn(i, s, u);
      }
      function os(i, s) {
        var u = i.length, _ = typeof Uint8Array < "u" ? Uint8Array : Array, v = new _(u);
        v[0] = v[u - 1] = 1, lr(i, v, s, 0, u - 1);
        var b, M = [];
        for (b = 0; b < u; b++)
          v[b] && M.push(i[b]);
        return M;
      }
      function lr(i, s, u, _, v) {
        var b = 0, M, F, U;
        for (F = _ + 1; F <= v - 1; F++)
          U = bn(i[F], i[_], i[v], !0), U > b && (M = F, b = U);
        b > u && (s[M] = 1, lr(i, s, u, _, M), lr(i, s, u, M, v));
      }
      function ss(i, s) {
        for (var u = [i[0]], _ = 1, v = 0, b = i.length; _ < b; _++)
          as(i[_], i[v]) > s && (u.push(i[_]), v = _);
        return v < b - 1 && u.push(i[b - 1]), u;
      }
      var ur;
      function io(i, s, u, _, v) {
        var b = _ ? ur : Ne(i, u), M = Ne(s, u), F, U, J;
        for (ur = M; ; ) {
          if (!(b | M))
            return [i, s];
          if (b & M)
            return !1;
          F = b || M, U = a0(i, s, F, u, v), J = Ne(U, u), F === b ? (i = U, b = J) : (s = U, M = J);
        }
      }
      function a0(i, s, u, _, v) {
        var b = s.x - i.x, M = s.y - i.y, F = _.min, U = _.max, J, sA;
        return u & 8 ? (J = i.x + b * (U.y - i.y) / M, sA = U.y) : u & 4 ? (J = i.x + b * (F.y - i.y) / M, sA = F.y) : u & 2 ? (J = U.x, sA = i.y + M * (U.x - i.x) / b) : u & 1 && (J = F.x, sA = i.y + M * (F.x - i.x) / b), new _A(J, sA, v);
      }
      function Ne(i, s) {
        var u = 0;
        return i.x < s.min.x ? u |= 1 : i.x > s.max.x && (u |= 2), i.y < s.min.y ? u |= 4 : i.y > s.max.y && (u |= 8), u;
      }
      function as(i, s) {
        var u = s.x - i.x, _ = s.y - i.y;
        return u * u + _ * _;
      }
      function bn(i, s, u, _) {
        var v = s.x, b = s.y, M = u.x - v, F = u.y - b, U = M * M + F * F, J;
        return U > 0 && (J = ((i.x - v) * M + (i.y - b) * F) / U, J > 1 ? (v = u.x, b = u.y) : J > 0 && (v += M * J, b += F * J)), M = i.x - v, F = i.y - b, _ ? M * M + F * F : new _A(v, b);
      }
      function ce(i) {
        return !gA(i[0]) || typeof i[0][0] != "object" && typeof i[0][0] < "u";
      }
      function Yi(i) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ce(i);
      }
      function no(i, s) {
        var u, _, v, b, M, F, U, J;
        if (!i || i.length === 0)
          throw new Error("latlngs not passed");
        ce(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var sA = RA([0, 0]), yA = _t(i), IA = yA.getNorthWest().distanceTo(yA.getSouthWest()) * yA.getNorthEast().distanceTo(yA.getNorthWest());
        IA < 1700 && (sA = sr(i));
        var Ft = i.length, Mt = [];
        for (u = 0; u < Ft; u++) {
          var pe = RA(i[u]);
          Mt.push(s.project(RA([pe.lat - sA.lat, pe.lng - sA.lng])));
        }
        for (u = 0, _ = 0; u < Ft - 1; u++)
          _ += Mt[u].distanceTo(Mt[u + 1]) / 2;
        if (_ === 0)
          J = Mt[0];
        else
          for (u = 0, b = 0; u < Ft - 1; u++)
            if (M = Mt[u], F = Mt[u + 1], v = M.distanceTo(F), b += v, b > _) {
              U = (b - _) / v, J = [
                F.x - U * (F.x - M.x),
                F.y - U * (F.y - M.y)
              ];
              break;
            }
        var qt = s.unproject(vA(J));
        return RA([qt.lat + sA.lat, qt.lng + sA.lng]);
      }
      var fr = {
        __proto__: null,
        simplify: ar,
        pointToSegmentDistance: eo,
        closestPointOnSegment: rs,
        clipSegment: io,
        _getEdgeIntersection: a0,
        _getBitCode: Ne,
        _sqClosestPointOnSegment: bn,
        isFlat: ce,
        _flat: Yi,
        polylineCenter: no
      }, l0 = {
        project: function(i) {
          return new _A(i.lng, i.lat);
        },
        unproject: function(i) {
          return new et(i.y, i.x);
        },
        bounds: new qA([-180, -90], [180, 90])
      }, di = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new qA([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(i) {
          var s = Math.PI / 180, u = this.R, _ = i.lat * s, v = this.R_MINOR / u, b = Math.sqrt(1 - v * v), M = b * Math.sin(_), F = Math.tan(Math.PI / 4 - _ / 2) / Math.pow((1 - M) / (1 + M), b / 2);
          return _ = -u * Math.log(Math.max(F, 1e-10)), new _A(i.lng * s * u, _);
        },
        unproject: function(i) {
          for (var s = 180 / Math.PI, u = this.R, _ = this.R_MINOR / u, v = Math.sqrt(1 - _ * _), b = Math.exp(-i.y / u), M = Math.PI / 2 - 2 * Math.atan(b), F = 0, U = 0.1, J; F < 15 && Math.abs(U) > 1e-7; F++)
            J = v * Math.sin(M), J = Math.pow((1 - J) / (1 + J), v / 2), U = Math.PI / 2 - 2 * Math.atan(b * J) - M, M += U;
          return new et(M * s, i.x * s / u);
        }
      }, ls = {
        __proto__: null,
        LonLat: l0,
        Mercator: di,
        SphericalMercator: St
      }, hr = T({}, Re, {
        code: "EPSG:3395",
        projection: di,
        transformation: (function() {
          var i = 0.5 / (Math.PI * di.R);
          return xe(i, 0.5, -i, 0.5);
        })()
      }), _r = T({}, Re, {
        code: "EPSG:4326",
        projection: l0,
        transformation: xe(1 / 180, 1, -1 / 180, 0.5)
      }), us = T({}, Ee, {
        projection: l0,
        transformation: xe(1, 0, -1, 0),
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
      Ee.Earth = Re, Ee.EPSG3395 = hr, Ee.EPSG3857 = Fi, Ee.EPSG900913 = Jn, Ee.EPSG4326 = _r, Ee.Simple = us;
      var de = Rt.extend({
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
          return this._map._targets[O(i)] = this, this;
        },
        removeInteractiveTarget: function(i) {
          return delete this._map._targets[O(i)], this;
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
      OA.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(i) {
          if (!i._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var s = O(i);
          return this._layers[s] ? this : (this._layers[s] = i, i._mapToAdd = this, i.beforeAdd && i.beforeAdd(this), this.whenReady(i._layerAdd, i), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(i) {
          var s = O(i);
          return this._layers[s] ? (this._loaded && i.onRemove(this), delete this._layers[s], this._loaded && (this.fire("layerremove", { layer: i }), i.fire("remove")), i._map = i._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(i) {
          return O(i) in this._layers;
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
          i = i ? gA(i) ? i : [i] : [];
          for (var s = 0, u = i.length; s < u; s++)
            this.addLayer(i[s]);
        },
        _addZoomLimit: function(i) {
          (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) && (this._zoomBoundLayers[O(i)] = i, this._updateZoomLevels());
        },
        _removeZoomLimit: function(i) {
          var s = O(i);
          this._zoomBoundLayers[s] && (delete this._zoomBoundLayers[s], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var i = 1 / 0, s = -1 / 0, u = this._getZoomSpan();
          for (var _ in this._zoomBoundLayers) {
            var v = this._zoomBoundLayers[_].options;
            i = v.minZoom === void 0 ? i : Math.min(i, v.minZoom), s = v.maxZoom === void 0 ? s : Math.max(s, v.maxZoom);
          }
          this._layersMaxZoom = s === -1 / 0 ? void 0 : s, this._layersMinZoom = i === 1 / 0 ? void 0 : i, u !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Vi = de.extend({
        initialize: function(i, s) {
          uA(this, s), this._layers = {};
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
          return O(i);
        }
      }), fs = function(i, s) {
        return new Vi(i, s);
      }, Te = Vi.extend({
        addLayer: function(i) {
          return this.hasLayer(i) ? this : (i.addEventParent(this), Vi.prototype.addLayer.call(this, i), this.fire("layeradd", { layer: i }));
        },
        removeLayer: function(i) {
          return this.hasLayer(i) ? (i in this._layers && (i = this._layers[i]), i.removeEventParent(this), Vi.prototype.removeLayer.call(this, i), this.fire("layerremove", { layer: i })) : this;
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
          var i = new Et();
          for (var s in this._layers) {
            var u = this._layers[s];
            i.extend(u.getBounds ? u.getBounds() : u.getLatLng());
          }
          return i;
        }
      }), hs = function(i, s) {
        return new Te(i, s);
      }, mi = Tt.extend({
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
          uA(this, i);
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
          var v = vA(_), b = vA(s === "shadow" && u.shadowAnchor || u.iconAnchor || v && v.divideBy(2, !0));
          i.className = "leaflet-marker-" + s + " " + (u.className || ""), b && (i.style.marginLeft = -b.x + "px", i.style.marginTop = -b.y + "px"), v && (i.style.width = v.x + "px", i.style.height = v.y + "px");
        },
        _createImg: function(i, s) {
          return s = s || document.createElement("img"), s.src = i, s;
        },
        _getIconUrl: function(i) {
          return A.retina && this.options[i + "RetinaUrl"] || this.options[i + "Url"];
        }
      });
      function cr(i) {
        return new mi(i);
      }
      var oi = mi.extend({
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
          return typeof oi.imagePath != "string" && (oi.imagePath = this._detectIconPath()), (this.options.imagePath || oi.imagePath) + mi.prototype._getIconUrl.call(this, i);
        },
        _stripUrl: function(i) {
          var s = function(u, _, v) {
            var b = _.exec(u);
            return b && b[v];
          };
          return i = s(i, /^url\((['"])?(.+)\1\)$/, 2), i && s(i, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var i = JA("div", "leaflet-default-icon-path", document.body), s = dn(i, "background-image") || dn(i, "backgroundImage");
          if (document.body.removeChild(i), s = this._stripUrl(s), s)
            return s;
          var u = document.querySelector('link[href$="leaflet.css"]');
          return u ? u.href.substring(0, u.href.length - 11 - 1) : "";
        }
      }), nt = ie.extend({
        initialize: function(i) {
          this._marker = i;
        },
        addHooks: function() {
          var i = this._marker._icon;
          this._draggable || (this._draggable = new ri(i, i, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), zA(i, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && yt(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(i) {
          var s = this._marker, u = s._map, _ = this._marker.options.autoPanSpeed, v = this._marker.options.autoPanPadding, b = _i(s._icon), M = u.getPixelBounds(), F = u.getPixelOrigin(), U = vt(
            M.min._subtract(F).add(v),
            M.max._subtract(F).subtract(v)
          );
          if (!U.contains(b)) {
            var J = vA(
              (Math.max(U.max.x, b.x) - U.max.x) / (M.max.x - U.max.x) - (Math.min(U.min.x, b.x) - U.min.x) / (M.min.x - U.min.x),
              (Math.max(U.max.y, b.y) - U.max.y) / (M.max.y - U.max.y) - (Math.min(U.min.y, b.y) - U.min.y) / (M.min.y - U.min.y)
            ).multiplyBy(_);
            u.panBy(J, { animate: !1 }), this._draggable._newPos._add(J), this._draggable._startPos._add(J), kt(s._icon, this._draggable._newPos), this._onDrag(i), this._panRequest = XA(this._adjustPan.bind(this, i));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(i) {
          this._marker.options.autoPan && ($A(this._panRequest), this._panRequest = XA(this._adjustPan.bind(this, i)));
        },
        _onDrag: function(i) {
          var s = this._marker, u = s._shadow, _ = _i(s._icon), v = s._map.layerPointToLatLng(_);
          u && kt(u, _), s._latlng = v, i.latlng = v, i.oldLatLng = this._oldLatLng, s.fire("move", i).fire("drag", i);
        },
        _onDragEnd: function(i) {
          $A(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", i);
        }
      }), u0 = de.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new oi(),
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
          uA(this, s), this._latlng = RA(i);
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
          return this._latlng = RA(i), this.update(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
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
          u !== this._icon && (this._icon && this._removeIcon(), _ = !0, i.title && (u.title = i.title), u.tagName === "IMG" && (u.alt = i.alt || "")), zA(u, s), i.keyboard && (u.tabIndex = "0", u.setAttribute("role", "button")), this._icon = u, i.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && TA(u, "focus", this._panOnFocus, this);
          var v = i.icon.createShadow(this._shadow), b = !1;
          v !== this._shadow && (this._removeShadow(), b = !0), v && (zA(v, s), v.alt = ""), this._shadow = v, i.opacity < 1 && this._updateOpacity(), _ && this.getPane().appendChild(this._icon), this._initInteraction(), v && b && this.getPane(i.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && ot(this._icon, "focus", this._panOnFocus, this), dt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && dt(this._shadow), this._shadow = null;
        },
        _setPos: function(i) {
          this._icon && kt(this._icon, i), this._shadow && kt(this._shadow, i), this._zIndex = i.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(i) {
          this._icon && (this._icon.style.zIndex = this._zIndex + i);
        },
        _animateZoom: function(i) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center).round();
          this._setPos(s);
        },
        _initInteraction: function() {
          if (this.options.interactive && (zA(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), nt)) {
            var i = this.options.draggable;
            this.dragging && (i = this.dragging.enabled(), this.dragging.disable()), this.dragging = new nt(this), i && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(i) {
          return this.options.opacity = i, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var i = this.options.opacity;
          this._icon && Ae(this._icon, i), this._shadow && Ae(this._shadow, i);
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
            var s = this.options.icon.options, u = s.iconSize ? vA(s.iconSize) : vA(0, 0), _ = s.iconAnchor ? vA(s.iconAnchor) : vA(0, 0);
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
      function ro(i, s) {
        return new u0(i, s);
      }
      var si = de.extend({
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
          return uA(this, i), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && i && Object.prototype.hasOwnProperty.call(i, "weight") && this._updateBounds()), this;
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
      }), f0 = si.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(i, s) {
          uA(this, s), this._latlng = RA(i), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(i) {
          var s = this._latlng;
          return this._latlng = RA(i), this.redraw(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
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
          return si.prototype.setStyle.call(this, i), this.setRadius(s), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var i = this._radius, s = this._radiusY || i, u = this._clickTolerance(), _ = [i + u, s + u];
          this._pxBounds = new qA(this._point.subtract(_), this._point.add(_));
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
      function _s(i, s) {
        return new f0(i, s);
      }
      var dr = f0.extend({
        initialize: function(i, s, u) {
          if (typeof s == "number" && (s = T({}, u, { radius: s })), uA(this, s), this._latlng = RA(i), isNaN(this.options.radius))
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
          return new Et(
            this._map.layerPointToLatLng(this._point.subtract(i)),
            this._map.layerPointToLatLng(this._point.add(i))
          );
        },
        setStyle: si.prototype.setStyle,
        _project: function() {
          var i = this._latlng.lng, s = this._latlng.lat, u = this._map, _ = u.options.crs;
          if (_.distance === Re.distance) {
            var v = Math.PI / 180, b = this._mRadius / Re.R / v, M = u.project([s + b, i]), F = u.project([s - b, i]), U = M.add(F).divideBy(2), J = u.unproject(U).lat, sA = Math.acos((Math.cos(b * v) - Math.sin(s * v) * Math.sin(J * v)) / (Math.cos(s * v) * Math.cos(J * v))) / v;
            (isNaN(sA) || sA === 0) && (sA = b / Math.cos(Math.PI / 180 * s)), this._point = U.subtract(u.getPixelOrigin()), this._radius = isNaN(sA) ? 0 : U.x - u.project([J, i - sA]).x, this._radiusY = U.y - M.y;
          } else {
            var yA = _.unproject(_.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = u.latLngToLayerPoint(this._latlng), this._radius = this._point.x - u.latLngToLayerPoint(yA).x;
          }
          this._updateBounds();
        }
      });
      function cs(i, s, u) {
        return new dr(i, s, u);
      }
      var gt = si.extend({
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
          uA(this, s), this._setLatLngs(i);
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
          for (var s = 1 / 0, u = null, _ = bn, v, b, M = 0, F = this._parts.length; M < F; M++)
            for (var U = this._parts[M], J = 1, sA = U.length; J < sA; J++) {
              v = U[J - 1], b = U[J];
              var yA = _(i, v, b, !0);
              yA < s && (s = yA, u = _(i, v, b));
            }
          return u && (u.distance = Math.sqrt(s)), u;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return no(this._defaultShape(), this._map.options.crs);
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
          return s = s || this._defaultShape(), i = RA(i), s.push(i), this._bounds.extend(i), this.redraw();
        },
        _setLatLngs: function(i) {
          this._bounds = new Et(), this._latlngs = this._convertLatLngs(i);
        },
        _defaultShape: function() {
          return ce(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(i) {
          for (var s = [], u = ce(i), _ = 0, v = i.length; _ < v; _++)
            u ? (s[_] = RA(i[_]), this._bounds.extend(s[_])) : s[_] = this._convertLatLngs(i[_]);
          return s;
        },
        _project: function() {
          var i = new qA();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, i), this._bounds.isValid() && i.isValid() && (this._rawPxBounds = i, this._updateBounds());
        },
        _updateBounds: function() {
          var i = this._clickTolerance(), s = new _A(i, i);
          this._rawPxBounds && (this._pxBounds = new qA([
            this._rawPxBounds.min.subtract(s),
            this._rawPxBounds.max.add(s)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(i, s, u) {
          var _ = i[0] instanceof et, v = i.length, b, M;
          if (_) {
            for (M = [], b = 0; b < v; b++)
              M[b] = this._map.latLngToLayerPoint(i[b]), u.extend(M[b]);
            s.push(M);
          } else
            for (b = 0; b < v; b++)
              this._projectLatlngs(i[b], s, u);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var i = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var s = this._parts, u, _, v, b, M, F, U;
            for (u = 0, v = 0, b = this._rings.length; u < b; u++)
              for (U = this._rings[u], _ = 0, M = U.length; _ < M - 1; _++)
                F = io(U[_], U[_ + 1], i, _, !0), F && (s[v] = s[v] || [], s[v].push(F[0]), (F[1] !== U[_ + 1] || _ === M - 2) && (s[v].push(F[1]), v++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var i = this._parts, s = this.options.smoothFactor, u = 0, _ = i.length; u < _; u++)
            i[u] = ar(i[u], s);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i, s) {
          var u, _, v, b, M, F, U = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(i))
            return !1;
          for (u = 0, b = this._parts.length; u < b; u++)
            for (F = this._parts[u], _ = 0, M = F.length, v = M - 1; _ < M; v = _++)
              if (!(!s && _ === 0) && eo(i, F[v], F[_]) <= U)
                return !0;
          return !1;
        }
      });
      function mr(i, s) {
        return new gt(i, s);
      }
      gt._flat = Yi;
      var me = gt.extend({
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
          return s0(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(i) {
          var s = gt.prototype._convertLatLngs.call(this, i), u = s.length;
          return u >= 2 && s[0] instanceof et && s[0].equals(s[u - 1]) && s.pop(), s;
        },
        _setLatLngs: function(i) {
          gt.prototype._setLatLngs.call(this, i), ce(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return ce(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var i = this._renderer._bounds, s = this.options.weight, u = new _A(s, s);
          if (i = new qA(i.min.subtract(u), i.max.add(u)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var _ = 0, v = this._rings.length, b; _ < v; _++)
              b = or(this._rings[_], i, !0), b.length && this._parts.push(b);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i) {
          var s = !1, u, _, v, b, M, F, U, J;
          if (!this._pxBounds || !this._pxBounds.contains(i))
            return !1;
          for (b = 0, U = this._parts.length; b < U; b++)
            for (u = this._parts[b], M = 0, J = u.length, F = J - 1; M < J; F = M++)
              _ = u[M], v = u[F], _.y > i.y != v.y > i.y && i.x < (v.x - _.x) * (i.y - _.y) / (v.y - _.y) + _.x && (s = !s);
          return s || gt.prototype._containsPoint.call(this, i, !0);
        }
      });
      function ds(i, s) {
        return new me(i, s);
      }
      var Me = Te.extend({
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
          uA(this, s), this._layers = {}, i && this.addData(i);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(i) {
          var s = gA(i) ? i : i.features, u, _, v;
          if (s) {
            for (u = 0, _ = s.length; u < _; u++)
              v = s[u], (v.geometries || v.geometry || v.features || v.coordinates) && this.addData(v);
            return this;
          }
          var b = this.options;
          if (b.filter && !b.filter(i))
            return this;
          var M = h0(i, b);
          return M ? (M.feature = _0(i), M.defaultOptions = M.options, this.resetStyle(M), b.onEachFeature && b.onEachFeature(i, M), this.addLayer(M)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(i) {
          return i === void 0 ? this.eachLayer(this.resetStyle, this) : (i.options = T({}, i.defaultOptions), this._setLayerStyle(i, this.options.style), this);
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
      function h0(i, s) {
        var u = i.type === "Feature" ? i.geometry : i, _ = u ? u.coordinates : null, v = [], b = s && s.pointToLayer, M = s && s.coordsToLatLng || kn, F, U, J, sA;
        if (!_ && !u)
          return null;
        switch (u.type) {
          case "Point":
            return F = M(_), ne(b, i, F, s);
          case "MultiPoint":
            for (J = 0, sA = _.length; J < sA; J++)
              F = M(_[J]), v.push(ne(b, i, F, s));
            return new Te(v);
          case "LineString":
          case "MultiLineString":
            return U = Ki(_, u.type === "LineString" ? 0 : 1, M), new gt(U, s);
          case "Polygon":
          case "MultiPolygon":
            return U = Ki(_, u.type === "Polygon" ? 1 : 2, M), new me(U, s);
          case "GeometryCollection":
            for (J = 0, sA = u.geometries.length; J < sA; J++) {
              var yA = h0({
                geometry: u.geometries[J],
                type: "Feature",
                properties: i.properties
              }, s);
              yA && v.push(yA);
            }
            return new Te(v);
          case "FeatureCollection":
            for (J = 0, sA = u.features.length; J < sA; J++) {
              var IA = h0(u.features[J], s);
              IA && v.push(IA);
            }
            return new Te(v);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function ne(i, s, u, _) {
        return i ? i(s, u) : new u0(u, _ && _.markersInheritOptions && _);
      }
      function kn(i) {
        return new et(i[1], i[0], i[2]);
      }
      function Ki(i, s, u) {
        for (var _ = [], v = 0, b = i.length, M; v < b; v++)
          M = s ? Ki(i[v], s - 1, u) : (u || kn)(i[v]), _.push(M);
        return _;
      }
      function pi(i, s) {
        return i = RA(i), i.alt !== void 0 ? [oA(i.lng, s), oA(i.lat, s), oA(i.alt, s)] : [oA(i.lng, s), oA(i.lat, s)];
      }
      function Ge(i, s, u, _) {
        for (var v = [], b = 0, M = i.length; b < M; b++)
          v.push(s ? Ge(i[b], ce(i[b]) ? 0 : s - 1, u, _) : pi(i[b], _));
        return !s && u && v.length > 0 && v.push(v[0].slice()), v;
      }
      function De(i, s) {
        return i.feature ? T({}, i.feature, { geometry: s }) : _0(s);
      }
      function _0(i) {
        return i.type === "Feature" || i.type === "FeatureCollection" ? i : {
          type: "Feature",
          properties: {},
          geometry: i
        };
      }
      var c0 = {
        toGeoJSON: function(i) {
          return De(this, {
            type: "Point",
            coordinates: pi(this.getLatLng(), i)
          });
        }
      };
      u0.include(c0), dr.include(c0), f0.include(c0), gt.include({
        toGeoJSON: function(i) {
          var s = !ce(this._latlngs), u = Ge(this._latlngs, s ? 1 : 0, !1, i);
          return De(this, {
            type: (s ? "Multi" : "") + "LineString",
            coordinates: u
          });
        }
      }), me.include({
        toGeoJSON: function(i) {
          var s = !ce(this._latlngs), u = s && !ce(this._latlngs[0]), _ = Ge(this._latlngs, u ? 2 : s ? 1 : 0, !0, i);
          return s || (_ = [_]), De(this, {
            type: (u ? "Multi" : "") + "Polygon",
            coordinates: _
          });
        }
      }), Vi.include({
        toMultiPoint: function(i) {
          var s = [];
          return this.eachLayer(function(u) {
            s.push(u.toGeoJSON(i).geometry.coordinates);
          }), De(this, {
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
          return this.eachLayer(function(v) {
            if (v.toGeoJSON) {
              var b = v.toGeoJSON(i);
              if (u)
                _.push(b.geometry);
              else {
                var M = _0(b);
                M.type === "FeatureCollection" ? _.push.apply(_, M.features) : _.push(M);
              }
            }
          }), u ? De(this, {
            geometries: _,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: _
          };
        }
      });
      function oo(i, s) {
        return new Me(i, s);
      }
      var pr = oo, d0 = de.extend({
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
          this._url = i, this._bounds = _t(s), uA(this, u);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (zA(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          dt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
          return this._map && Hi(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Ui(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(i) {
          return this._url = i, this._image && (this._image.src = i), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(i) {
          return this._bounds = _t(i), this._map && this._reset(), this;
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
          var i = this._url.tagName === "IMG", s = this._image = i ? this._url : JA("img");
          if (zA(s, "leaflet-image-layer"), this._zoomAnimated && zA(s, "leaflet-zoom-animated"), this.options.className && zA(s, this.options.className), s.onselectstart = eA, s.onmousemove = eA, s.onload = Z(this.fire, this, "load"), s.onerror = Z(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), i) {
            this._url = s.src;
            return;
          }
          s.src = this._url, s.alt = this.options.alt;
        },
        _animateZoom: function(i) {
          var s = this._map.getZoomScale(i.zoom), u = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
          ct(this._image, u, s);
        },
        _reset: function() {
          var i = this._image, s = new qA(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), u = s.getSize();
          kt(i, s.min), i.style.width = u.x + "px", i.style.height = u.y + "px";
        },
        _updateOpacity: function() {
          Ae(this._image, this.options.opacity);
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
      }), ms = function(i, s, u) {
        return new d0(i, s, u);
      }, m0 = d0.extend({
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
          var i = this._url.tagName === "VIDEO", s = this._image = i ? this._url : JA("video");
          if (zA(s, "leaflet-image-layer"), this._zoomAnimated && zA(s, "leaflet-zoom-animated"), this.options.className && zA(s, this.options.className), s.onselectstart = eA, s.onmousemove = eA, s.onloadeddata = Z(this.fire, this, "load"), i) {
            for (var u = s.getElementsByTagName("source"), _ = [], v = 0; v < u.length; v++)
              _.push(u[v].src);
            this._url = u.length > 0 ? _ : [s.src];
            return;
          }
          gA(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(s.style, "objectFit") && (s.style.objectFit = "fill"), s.autoplay = !!this.options.autoplay, s.loop = !!this.options.loop, s.muted = !!this.options.muted, s.playsInline = !!this.options.playsInline;
          for (var b = 0; b < this._url.length; b++) {
            var M = JA("source");
            M.src = this._url[b], s.appendChild(M);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function so(i, s, u) {
        return new m0(i, s, u);
      }
      var p0 = d0.extend({
        _initImage: function() {
          var i = this._image = this._url;
          zA(i, "leaflet-image-layer"), this._zoomAnimated && zA(i, "leaflet-zoom-animated"), this.options.className && zA(i, this.options.className), i.onselectstart = eA, i.onmousemove = eA;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Pn(i, s, u) {
        return new p0(i, s, u);
      }
      var Yt = de.extend({
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
          i && (i instanceof et || gA(i)) ? (this._latlng = RA(i), uA(this, s)) : (uA(this, i), this._source = s), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = i._zoomAnimated, this._container || this._initLayout(), i._fadeAnimated && Ae(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), i._fadeAnimated && Ae(this._container, 1), this.bringToFront(), this.options.interactive && (zA(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(i) {
          i._fadeAnimated ? (Ae(this._container, 0), this._removeTimeout = setTimeout(Z(dt, void 0, this._container), 200)) : dt(this._container), this.options.interactive && (yt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._latlng = RA(i), this._map && (this._updatePosition(), this._adjustPan()), this;
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
          return this._map && Hi(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Ui(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(i) {
          var s = this._source;
          if (!s._map)
            return !1;
          if (s instanceof Te) {
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
            var i = this._map.latLngToLayerPoint(this._latlng), s = vA(this.options.offset), u = this._getAnchor();
            this._zoomAnimated ? kt(this._container, i.add(u)) : s = s.add(i).add(u);
            var _ = this._containerBottom = -s.y, v = this._containerLeft = -Math.round(this._containerWidth / 2) + s.x;
            this._container.style.bottom = _ + "px", this._container.style.left = v + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      OA.include({
        _initOverlay: function(i, s, u, _) {
          var v = s;
          return v instanceof i || (v = new i(_).setContent(s)), u && v.setLatLng(u), v;
        }
      }), de.include({
        _initOverlay: function(i, s, u, _) {
          var v = u;
          return v instanceof i ? (uA(v, _), v._source = this) : (v = s && !_ ? s : new i(_, this), v.setContent(u)), v;
        }
      });
      var Zt = Yt.extend({
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
          return i = arguments.length ? i : this._source._map, !i.hasLayer(this) && i._popup && i._popup.options.autoClose && i.removeLayer(i._popup), i._popup = this, Yt.prototype.openOn.call(this, i);
        },
        onAdd: function(i) {
          Yt.prototype.onAdd.call(this, i), i.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof si || this._source.on("preclick", Ci));
        },
        onRemove: function(i) {
          Yt.prototype.onRemove.call(this, i), i.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof si || this._source.off("preclick", Ci));
        },
        getEvents: function() {
          var i = Yt.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (i.preclick = this.close), this.options.keepInView && (i.moveend = this._adjustPan), i;
        },
        _initLayout: function() {
          var i = "leaflet-popup", s = this._container = JA(
            "div",
            i + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), u = this._wrapper = JA("div", i + "-content-wrapper", s);
          if (this._contentNode = JA("div", i + "-content", u), Li(s), wn(this._contentNode), TA(s, "contextmenu", Ci), this._tipContainer = JA("div", i + "-tip-container", s), this._tip = JA("div", i + "-tip", this._tipContainer), this.options.closeButton) {
            var _ = this._closeButton = JA("a", i + "-close-button", s);
            _.setAttribute("role", "button"), _.setAttribute("aria-label", "Close popup"), _.href = "#close", _.innerHTML = '<span aria-hidden="true">&#215;</span>', TA(_, "click", function(v) {
              zt(v), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var i = this._contentNode, s = i.style;
          s.width = "", s.whiteSpace = "nowrap";
          var u = i.offsetWidth;
          u = Math.min(u, this.options.maxWidth), u = Math.max(u, this.options.minWidth), s.width = u + 1 + "px", s.whiteSpace = "", s.height = "";
          var _ = i.offsetHeight, v = this.options.maxHeight, b = "leaflet-popup-scrolled";
          v && _ > v ? (s.height = v + "px", zA(i, b)) : yt(i, b), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(i) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center), u = this._getAnchor();
          kt(this._container, s.add(u));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var i = this._map, s = parseInt(dn(this._container, "marginBottom"), 10) || 0, u = this._container.offsetHeight + s, _ = this._containerWidth, v = new _A(this._containerLeft, -u - this._containerBottom);
            v._add(_i(this._container));
            var b = i.layerPointToContainerPoint(v), M = vA(this.options.autoPanPadding), F = vA(this.options.autoPanPaddingTopLeft || M), U = vA(this.options.autoPanPaddingBottomRight || M), J = i.getSize(), sA = 0, yA = 0;
            b.x + _ + U.x > J.x && (sA = b.x + _ - J.x + U.x), b.x - sA - F.x < 0 && (sA = b.x - F.x), b.y + u + U.y > J.y && (yA = b.y + u - J.y + U.y), b.y - yA - F.y < 0 && (yA = b.y - F.y), (sA || yA) && (this.options.keepInView && (this._autopanning = !0), i.fire("autopanstart").panBy([sA, yA]));
          }
        },
        _getAnchor: function() {
          return vA(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), ps = function(i, s) {
        return new Zt(i, s);
      };
      OA.mergeOptions({
        closePopupOnClick: !0
      }), OA.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(i, s, u) {
          return this._initOverlay(Zt, i, s, u).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(i) {
          return i = arguments.length ? i : this._popup, i && i.close(), this;
        }
      }), de.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(i, s) {
          return this._popup = this._initOverlay(Zt, this._popup, i, s), this._popupHandlersAdded || (this.on({
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
          return this._popup && (this instanceof Te || (this._popup._source = this), this._popup._prepareOpen(i || this._latlng) && this._popup.openOn(this._map)), this;
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
            ci(i);
            var s = i.layer || i.target;
            if (this._popup._source === s && !(s instanceof si)) {
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
      var vi = Yt.extend({
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
          Yt.prototype.onAdd.call(this, i), this.setOpacity(this.options.opacity), i.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(i) {
          Yt.prototype.onRemove.call(this, i), i.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var i = Yt.prototype.getEvents.call(this);
          return this.options.permanent || (i.preclick = this.close), i;
        },
        _initLayout: function() {
          var i = "leaflet-tooltip", s = i + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = JA("div", s), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + O(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(i) {
          var s, u, _ = this._map, v = this._container, b = _.latLngToContainerPoint(_.getCenter()), M = _.layerPointToContainerPoint(i), F = this.options.direction, U = v.offsetWidth, J = v.offsetHeight, sA = vA(this.options.offset), yA = this._getAnchor();
          F === "top" ? (s = U / 2, u = J) : F === "bottom" ? (s = U / 2, u = 0) : F === "center" ? (s = U / 2, u = J / 2) : F === "right" ? (s = 0, u = J / 2) : F === "left" ? (s = U, u = J / 2) : M.x < b.x ? (F = "right", s = 0, u = J / 2) : (F = "left", s = U + (sA.x + yA.x) * 2, u = J / 2), i = i.subtract(vA(s, u, !0)).add(sA).add(yA), yt(v, "leaflet-tooltip-right"), yt(v, "leaflet-tooltip-left"), yt(v, "leaflet-tooltip-top"), yt(v, "leaflet-tooltip-bottom"), zA(v, "leaflet-tooltip-" + F), kt(v, i);
        },
        _updatePosition: function() {
          var i = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(i);
        },
        setOpacity: function(i) {
          this.options.opacity = i, this._container && Ae(this._container, i);
        },
        _animateZoom: function(i) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center);
          this._setPosition(s);
        },
        _getAnchor: function() {
          return vA(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), vs = function(i, s) {
        return new vi(i, s);
      };
      OA.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(i, s, u) {
          return this._initOverlay(vi, i, s, u).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(i) {
          return i.close(), this;
        }
      }), de.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(i, s) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(vi, this._tooltip, i, s), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
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
          return this._tooltip && (this instanceof Te || (this._tooltip._source = this), this._tooltip._prepareOpen(i) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
          s && (TA(s, "focus", function() {
            this._tooltip._source = i, this.openTooltip();
          }, this), TA(s, "blur", this.closeTooltip, this));
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
      var ao = mi.extend({
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
          if (u.html instanceof Element ? (y(s), s.appendChild(u.html)) : s.innerHTML = u.html !== !1 ? u.html : "", u.bgPos) {
            var _ = vA(u.bgPos);
            s.style.backgroundPosition = -_.x + "px " + -_.y + "px";
          }
          return this._setIconStyles(s, "icon"), s;
        },
        createShadow: function() {
          return null;
        }
      });
      function gs(i) {
        return new ao(i);
      }
      mi.Default = oi;
      var qi = de.extend({
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
          uA(this, i);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(i) {
          i._addZoomLimit(this);
        },
        onRemove: function(i) {
          this._removeAllTiles(), dt(this._container), i._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Hi(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Ui(this._container), this._setAutoZIndex(Math.min)), this;
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
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), i.move = this._onMove), this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
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
          return i instanceof _A ? i : new _A(i, i);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(i) {
          for (var s = this.getPane().children, u = -i(-1 / 0, 1 / 0), _ = 0, v = s.length, b; _ < v; _++)
            b = s[_].style.zIndex, s[_] !== this._container && b && (u = i(u, +b));
          isFinite(u) && (this.options.zIndex = u + i(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !A.ielt9) {
            Ae(this._container, this.options.opacity);
            var i = +/* @__PURE__ */ new Date(), s = !1, u = !1;
            for (var _ in this._tiles) {
              var v = this._tiles[_];
              if (!(!v.current || !v.loaded)) {
                var b = Math.min(1, (i - v.loaded) / 200);
                Ae(v.el, b), b < 1 ? s = !0 : (v.active ? u = !0 : this._onOpaqueTile(v), v.active = !0);
              }
            }
            u && !this._noPrune && this._pruneTiles(), s && ($A(this._fadeFrame), this._fadeFrame = XA(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: eA,
        _initContainer: function() {
          this._container || (this._container = JA("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var i = this._tileZoom, s = this.options.maxZoom;
          if (i !== void 0) {
            for (var u in this._levels)
              u = Number(u), this._levels[u].el.children.length || u === i ? (this._levels[u].el.style.zIndex = s - Math.abs(i - u), this._onUpdateLevel(u)) : (dt(this._levels[u].el), this._removeTilesAtZoom(u), this._onRemoveLevel(u), delete this._levels[u]);
            var _ = this._levels[i], v = this._map;
            return _ || (_ = this._levels[i] = {}, _.el = JA("div", "leaflet-tile-container leaflet-zoom-animated", this._container), _.el.style.zIndex = s, _.origin = v.project(v.unproject(v.getPixelOrigin()), i).round(), _.zoom = i, this._setZoomTransform(_, v.getCenter(), v.getZoom()), eA(_.el.offsetWidth), this._onCreateLevel(_)), this._level = _, _;
          }
        },
        _onUpdateLevel: eA,
        _onRemoveLevel: eA,
        _onCreateLevel: eA,
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
            dt(this._levels[i].el), this._onRemoveLevel(Number(i)), delete this._levels[i];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(i, s, u, _) {
          var v = Math.floor(i / 2), b = Math.floor(s / 2), M = u - 1, F = new _A(+v, +b);
          F.z = +M;
          var U = this._tileCoordsToKey(F), J = this._tiles[U];
          return J && J.active ? (J.retain = !0, !0) : (J && J.loaded && (J.retain = !0), M > _ ? this._retainParent(v, b, M, _) : !1);
        },
        _retainChildren: function(i, s, u, _) {
          for (var v = 2 * i; v < 2 * i + 2; v++)
            for (var b = 2 * s; b < 2 * s + 2; b++) {
              var M = new _A(v, b);
              M.z = u + 1;
              var F = this._tileCoordsToKey(M), U = this._tiles[F];
              if (U && U.active) {
                U.retain = !0;
                continue;
              } else U && U.loaded && (U.retain = !0);
              u + 1 < _ && this._retainChildren(v, b, u + 1, _);
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
          var v = Math.round(s);
          this.options.maxZoom !== void 0 && v > this.options.maxZoom || this.options.minZoom !== void 0 && v < this.options.minZoom ? v = void 0 : v = this._clampZoom(v);
          var b = this.options.updateWhenZooming && v !== this._tileZoom;
          (!_ || b) && (this._tileZoom = v, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), v !== void 0 && this._update(i), u || this._pruneTiles(), this._noPrune = !!u), this._setZoomTransforms(i, s);
        },
        _setZoomTransforms: function(i, s) {
          for (var u in this._levels)
            this._setZoomTransform(this._levels[u], i, s);
        },
        _setZoomTransform: function(i, s, u) {
          var _ = this._map.getZoomScale(u, i.zoom), v = i.origin.multiplyBy(_).subtract(this._map._getNewPixelOrigin(s, u)).round();
          A.any3d ? ct(i.el, v, _) : kt(i.el, v);
        },
        _resetGrid: function() {
          var i = this._map, s = i.options.crs, u = this._tileSize = this.getTileSize(), _ = this._tileZoom, v = this._map.getPixelWorldBounds(this._tileZoom);
          v && (this._globalTileRange = this._pxBoundsToTileRange(v)), this._wrapX = s.wrapLng && !this.options.noWrap && [
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
          var s = this._map, u = s._animatingZoom ? Math.max(s._animateToZoom, s.getZoom()) : s.getZoom(), _ = s.getZoomScale(u, this._tileZoom), v = s.project(i, this._tileZoom).floor(), b = s.getSize().divideBy(_ * 2);
          return new qA(v.subtract(b), v.add(b));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(i) {
          var s = this._map;
          if (s) {
            var u = this._clampZoom(s.getZoom());
            if (i === void 0 && (i = s.getCenter()), this._tileZoom !== void 0) {
              var _ = this._getTiledPixelBounds(i), v = this._pxBoundsToTileRange(_), b = v.getCenter(), M = [], F = this.options.keepBuffer, U = new qA(
                v.getBottomLeft().subtract([F, -F]),
                v.getTopRight().add([F, -F])
              );
              if (!(isFinite(v.min.x) && isFinite(v.min.y) && isFinite(v.max.x) && isFinite(v.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var J in this._tiles) {
                var sA = this._tiles[J].coords;
                (sA.z !== this._tileZoom || !U.contains(new _A(sA.x, sA.y))) && (this._tiles[J].current = !1);
              }
              if (Math.abs(u - this._tileZoom) > 1) {
                this._setView(i, u);
                return;
              }
              for (var yA = v.min.y; yA <= v.max.y; yA++)
                for (var IA = v.min.x; IA <= v.max.x; IA++) {
                  var Ft = new _A(IA, yA);
                  if (Ft.z = this._tileZoom, !!this._isValidTile(Ft)) {
                    var Mt = this._tiles[this._tileCoordsToKey(Ft)];
                    Mt ? Mt.current = !0 : M.push(Ft);
                  }
                }
              if (M.sort(function(qt, Xi) {
                return qt.distanceTo(b) - Xi.distanceTo(b);
              }), M.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var pe = document.createDocumentFragment();
                for (IA = 0; IA < M.length; IA++)
                  this._addTile(M[IA], pe);
                this._level.el.appendChild(pe);
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
          return _t(this.options.bounds).overlaps(_);
        },
        _keyToBounds: function(i) {
          return this._tileCoordsToBounds(this._keyToTileCoords(i));
        },
        _tileCoordsToNwSe: function(i) {
          var s = this._map, u = this.getTileSize(), _ = i.scaleBy(u), v = _.add(u), b = s.unproject(_, i.z), M = s.unproject(v, i.z);
          return [b, M];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(i) {
          var s = this._tileCoordsToNwSe(i), u = new Et(s[0], s[1]);
          return this.options.noWrap || (u = this._map.wrapLatLngBounds(u)), u;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(i) {
          return i.x + ":" + i.y + ":" + i.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(i) {
          var s = i.split(":"), u = new _A(+s[0], +s[1]);
          return u.z = +s[2], u;
        },
        _removeTile: function(i) {
          var s = this._tiles[i];
          s && (dt(s.el), delete this._tiles[i], this.fire("tileunload", {
            tile: s.el,
            coords: this._keyToTileCoords(i)
          }));
        },
        _initTile: function(i) {
          zA(i, "leaflet-tile");
          var s = this.getTileSize();
          i.style.width = s.x + "px", i.style.height = s.y + "px", i.onselectstart = eA, i.onmousemove = eA, A.ielt9 && this.options.opacity < 1 && Ae(i, this.options.opacity);
        },
        _addTile: function(i, s) {
          var u = this._getTilePos(i), _ = this._tileCoordsToKey(i), v = this.createTile(this._wrapCoords(i), Z(this._tileReady, this, i));
          this._initTile(v), this.createTile.length < 2 && XA(Z(this._tileReady, this, i, null, v)), kt(v, u), this._tiles[_] = {
            el: v,
            coords: i,
            current: !0
          }, s.appendChild(v), this.fire("tileloadstart", {
            tile: v,
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
          u = this._tiles[_], u && (u.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Ae(u.el, 0), $A(this._fadeFrame), this._fadeFrame = XA(this._updateOpacity, this)) : (u.active = !0, this._pruneTiles()), s || (zA(u.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: u.el,
            coords: i
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), A.ielt9 || !this._map._fadeAnimated ? XA(this._pruneTiles, this) : setTimeout(Z(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(i) {
          return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(i) {
          var s = new _A(
            this._wrapX ? iA(i.x, this._wrapX) : i.x,
            this._wrapY ? iA(i.y, this._wrapY) : i.y
          );
          return s.z = i.z, s;
        },
        _pxBoundsToTileRange: function(i) {
          var s = this.getTileSize();
          return new qA(
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
      function ws(i) {
        return new qi(i);
      }
      var Ji = qi.extend({
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
          this._url = i, s = uA(this, s), s.detectRetina && A.retina && s.maxZoom > 0 ? (s.tileSize = Math.floor(s.tileSize / 2), s.zoomReverse ? (s.zoomOffset--, s.minZoom = Math.min(s.maxZoom, s.minZoom + 1)) : (s.zoomOffset++, s.maxZoom = Math.max(s.minZoom, s.maxZoom - 1)), s.minZoom = Math.max(0, s.minZoom)) : s.zoomReverse ? s.minZoom = Math.min(s.maxZoom, s.minZoom) : s.maxZoom = Math.max(s.minZoom, s.maxZoom), typeof s.subdomains == "string" && (s.subdomains = s.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
          return TA(u, "load", Z(this._tileOnLoad, this, s, u)), TA(u, "error", Z(this._tileOnError, this, s, u)), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (u.referrerPolicy = this.options.referrerPolicy), u.alt = "", u.src = this.getTileUrl(i), u;
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
          return WA(this._url, T(s, this.options));
        },
        _tileOnLoad: function(i, s) {
          A.ielt9 ? setTimeout(Z(i, this, null, s), 0) : i(null, s);
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
            if (this._tiles[i].coords.z !== this._tileZoom && (s = this._tiles[i].el, s.onload = eA, s.onerror = eA, !s.complete)) {
              s.src = Bt;
              var u = this._tiles[i].coords;
              dt(s), delete this._tiles[i], this.fire("tileabort", {
                tile: s,
                coords: u
              });
            }
        },
        _removeTile: function(i) {
          var s = this._tiles[i];
          if (s)
            return s.el.setAttribute("src", Bt), qi.prototype._removeTile.call(this, i);
        },
        _tileReady: function(i, s, u) {
          if (!(!this._map || u && u.getAttribute("src") === Bt))
            return qi.prototype._tileReady.call(this, i, s, u);
        }
      });
      function lo(i, s) {
        return new Ji(i, s);
      }
      var Bn = Ji.extend({
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
          var u = T({}, this.defaultWmsParams);
          for (var _ in s)
            _ in this.options || (u[_] = s[_]);
          s = uA(this, s);
          var v = s.detectRetina && A.retina ? 2 : 1, b = this.getTileSize();
          u.width = b.x * v, u.height = b.y * v, this.wmsParams = u;
        },
        onAdd: function(i) {
          this._crs = this.options.crs || i.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var s = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[s] = this._crs.code, Ji.prototype.onAdd.call(this, i);
        },
        getTileUrl: function(i) {
          var s = this._tileCoordsToNwSe(i), u = this._crs, _ = vt(u.project(s[0]), u.project(s[1])), v = _.min, b = _.max, M = (this._wmsVersion >= 1.3 && this._crs === _r ? [v.y, v.x, b.y, b.x] : [v.x, v.y, b.x, b.y]).join(","), F = Ji.prototype.getTileUrl.call(this, i);
          return F + QA(this.wmsParams, F, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + M;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(i, s) {
          return T(this.wmsParams, i), s || this.redraw(), this;
        }
      });
      function uo(i, s) {
        return new Bn(i, s);
      }
      Ji.WMS = Bn, lo.wms = uo;
      var Ie = de.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(i) {
          uA(this, i), O(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), zA(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
          var u = this._map.getZoomScale(s, this._zoom), _ = this._map.getSize().multiplyBy(0.5 + this.options.padding), v = this._map.project(this._center, s), b = _.multiplyBy(-u).add(v).subtract(this._map._getNewPixelOrigin(i, s));
          A.any3d ? ct(this._container, b, u) : kt(this._container, b);
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
          this._bounds = new qA(u, u.add(s.multiplyBy(1 + i * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), fo = Ie.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var i = Ie.prototype.getEvents.call(this);
          return i.viewprereset = this._onViewPreReset, i;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Ie.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var i = this._container = document.createElement("canvas");
          TA(i, "mousemove", this._onMouseMove, this), TA(i, "click dblclick mousedown mouseup contextmenu", this._onClick, this), TA(i, "mouseout", this._handleMouseOut, this), i._leaflet_disable_events = !0, this._ctx = i.getContext("2d");
        },
        _destroyContainer: function() {
          $A(this._redrawRequest), delete this._ctx, dt(this._container), ot(this._container), delete this._container;
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
            Ie.prototype._update.call(this);
            var i = this._bounds, s = this._container, u = i.getSize(), _ = A.retina ? 2 : 1;
            kt(s, i.min), s.width = _ * u.x, s.height = _ * u.y, s.style.width = u.x + "px", s.style.height = u.y + "px", A.retina && this._ctx.scale(2, 2), this._ctx.translate(-i.min.x, -i.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Ie.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(i) {
          this._updateDashArray(i), this._layers[O(i)] = i;
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
          u ? u.prev = _ : this._drawLast = _, _ ? _.next = u : this._drawFirst = u, delete i._order, delete this._layers[O(i)], this._requestRedraw(i);
        },
        _updatePath: function(i) {
          this._extendRedrawBounds(i), i._project(), i._update(), this._requestRedraw(i);
        },
        _updateStyle: function(i) {
          this._updateDashArray(i), this._requestRedraw(i);
        },
        _updateDashArray: function(i) {
          if (typeof i.options.dashArray == "string") {
            var s = i.options.dashArray.split(/[, ]+/), u = [], _, v;
            for (v = 0; v < s.length; v++) {
              if (_ = Number(s[v]), isNaN(_))
                return;
              u.push(_);
            }
            i.options._dashArray = u;
          } else
            i.options._dashArray = i.options.dashArray;
        },
        _requestRedraw: function(i) {
          this._map && (this._extendRedrawBounds(i), this._redrawRequest = this._redrawRequest || XA(this._redraw, this));
        },
        _extendRedrawBounds: function(i) {
          if (i._pxBounds) {
            var s = (i.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new qA(), this._redrawBounds.extend(i._pxBounds.min.subtract([s, s])), this._redrawBounds.extend(i._pxBounds.max.add([s, s]));
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
            var u, _, v, b, M = i._parts, F = M.length, U = this._ctx;
            if (F) {
              for (U.beginPath(), u = 0; u < F; u++) {
                for (_ = 0, v = M[u].length; _ < v; _++)
                  b = M[u][_], U[_ ? "lineTo" : "moveTo"](b.x, b.y);
                s && U.closePath();
              }
              this._fillStroke(U, i);
            }
          }
        },
        _updateCircle: function(i) {
          if (!(!this._drawing || i._empty())) {
            var s = i._point, u = this._ctx, _ = Math.max(Math.round(i._radius), 1), v = (Math.max(Math.round(i._radiusY), 1) || _) / _;
            v !== 1 && (u.save(), u.scale(1, v)), u.beginPath(), u.arc(s.x, s.y / v, _, 0, Math.PI * 2, !1), v !== 1 && u.restore(), this._fillStroke(u, i);
          }
        },
        _fillStroke: function(i, s) {
          var u = s.options;
          u.fill && (i.globalAlpha = u.fillOpacity, i.fillStyle = u.fillColor || u.color, i.fill(u.fillRule || "evenodd")), u.stroke && u.weight !== 0 && (i.setLineDash && i.setLineDash(s.options && s.options._dashArray || []), i.globalAlpha = u.opacity, i.lineWidth = u.weight, i.strokeStyle = u.color, i.lineCap = u.lineCap, i.lineJoin = u.lineJoin, i.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(i) {
          for (var s = this._map.mouseEventToLayerPoint(i), u, _, v = this._drawFirst; v; v = v.next)
            u = v.layer, u.options.interactive && u._containsPoint(s) && (!(i.type === "click" || i.type === "preclick") || !this._map._draggableMoved(u)) && (_ = u);
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
          s && (yt(this._container, "leaflet-interactive"), this._fireEvent([s], i, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(i, s) {
          if (!this._mouseHoverThrottled) {
            for (var u, _, v = this._drawFirst; v; v = v.next)
              u = v.layer, u.options.interactive && u._containsPoint(s) && (_ = u);
            _ !== this._hoveredLayer && (this._handleMouseOut(i), _ && (zA(this._container, "leaflet-interactive"), this._fireEvent([_], i, "mouseover"), this._hoveredLayer = _)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, i), this._mouseHoverThrottled = !0, setTimeout(Z(function() {
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
      function ho(i) {
        return A.canvas ? new fo(i) : null;
      }
      var En = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(i) {
            return document.createElement("<lvml:" + i + ' class="lvml">');
          };
        } catch {
        }
        return function(i) {
          return document.createElement("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), ys = {
        _initContainer: function() {
          this._container = JA("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Ie.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(i) {
          var s = i._container = En("shape");
          zA(s, "leaflet-vml-shape " + (this.options.className || "")), s.coordsize = "1 1", i._path = En("path"), s.appendChild(i._path), this._updateStyle(i), this._layers[O(i)] = i;
        },
        _addPath: function(i) {
          var s = i._container;
          this._container.appendChild(s), i.options.interactive && i.addInteractiveTarget(s);
        },
        _removePath: function(i) {
          var s = i._container;
          dt(s), i.removeInteractiveTarget(s), delete this._layers[O(i)];
        },
        _updateStyle: function(i) {
          var s = i._stroke, u = i._fill, _ = i.options, v = i._container;
          v.stroked = !!_.stroke, v.filled = !!_.fill, _.stroke ? (s || (s = i._stroke = En("stroke")), v.appendChild(s), s.weight = _.weight + "px", s.color = _.color, s.opacity = _.opacity, _.dashArray ? s.dashStyle = gA(_.dashArray) ? _.dashArray.join(" ") : _.dashArray.replace(/( *, *)/g, " ") : s.dashStyle = "", s.endcap = _.lineCap.replace("butt", "flat"), s.joinstyle = _.lineJoin) : s && (v.removeChild(s), i._stroke = null), _.fill ? (u || (u = i._fill = En("fill")), v.appendChild(u), u.color = _.fillColor || _.color, u.opacity = _.fillOpacity) : u && (v.removeChild(u), i._fill = null);
        },
        _updateCircle: function(i) {
          var s = i._point.round(), u = Math.round(i._radius), _ = Math.round(i._radiusY || u);
          this._setPath(i, i._empty() ? "M0 0" : "AL " + s.x + "," + s.y + " " + u + "," + _ + " 0," + 65535 * 360);
        },
        _setPath: function(i, s) {
          i._path.v = s;
        },
        _bringToFront: function(i) {
          Hi(i._container);
        },
        _bringToBack: function(i) {
          Ui(i._container);
        }
      }, v0 = A.vml ? En : hn, xn = Ie.extend({
        _initContainer: function() {
          this._container = v0("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = v0("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          dt(this._container), ot(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Ie.prototype._update.call(this);
            var i = this._bounds, s = i.getSize(), u = this._container;
            (!this._svgSize || !this._svgSize.equals(s)) && (this._svgSize = s, u.setAttribute("width", s.x), u.setAttribute("height", s.y)), kt(u, i.min), u.setAttribute("viewBox", [i.min.x, i.min.y, s.x, s.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(i) {
          var s = i._path = v0("path");
          i.options.className && zA(s, i.options.className), i.options.interactive && zA(s, "leaflet-interactive"), this._updateStyle(i), this._layers[O(i)] = i;
        },
        _addPath: function(i) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(i._path), i.addInteractiveTarget(i._path);
        },
        _removePath: function(i) {
          dt(i._path), i.removeInteractiveTarget(i._path), delete this._layers[O(i)];
        },
        _updatePath: function(i) {
          i._project(), i._update();
        },
        _updateStyle: function(i) {
          var s = i._path, u = i.options;
          s && (u.stroke ? (s.setAttribute("stroke", u.color), s.setAttribute("stroke-opacity", u.opacity), s.setAttribute("stroke-width", u.weight), s.setAttribute("stroke-linecap", u.lineCap), s.setAttribute("stroke-linejoin", u.lineJoin), u.dashArray ? s.setAttribute("stroke-dasharray", u.dashArray) : s.removeAttribute("stroke-dasharray"), u.dashOffset ? s.setAttribute("stroke-dashoffset", u.dashOffset) : s.removeAttribute("stroke-dashoffset")) : s.setAttribute("stroke", "none"), u.fill ? (s.setAttribute("fill", u.fillColor || u.color), s.setAttribute("fill-opacity", u.fillOpacity), s.setAttribute("fill-rule", u.fillRule || "evenodd")) : s.setAttribute("fill", "none"));
        },
        _updatePoly: function(i, s) {
          this._setPath(i, Xn(i._parts, s));
        },
        _updateCircle: function(i) {
          var s = i._point, u = Math.max(Math.round(i._radius), 1), _ = Math.max(Math.round(i._radiusY), 1) || u, v = "a" + u + "," + _ + " 0 1,0 ", b = i._empty() ? "M0 0" : "M" + (s.x - u) + "," + s.y + v + u * 2 + ",0 " + v + -u * 2 + ",0 ";
          this._setPath(i, b);
        },
        _setPath: function(i, s) {
          i._path.setAttribute("d", s);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(i) {
          Hi(i._path);
        },
        _bringToBack: function(i) {
          Ui(i._path);
        }
      });
      A.vml && xn.include(ys);
      function _o(i) {
        return A.svg || A.vml ? new xn(i) : null;
      }
      OA.include({
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
          return this.options.preferCanvas && ho(i) || _o(i);
        }
      });
      var vr = me.extend({
        initialize: function(i, s) {
          me.prototype.initialize.call(this, this._boundsToLatLngs(i), s);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(i) {
          return this.setLatLngs(this._boundsToLatLngs(i));
        },
        _boundsToLatLngs: function(i) {
          return i = _t(i), [
            i.getSouthWest(),
            i.getNorthWest(),
            i.getNorthEast(),
            i.getSouthEast()
          ];
        }
      });
      function bs(i, s) {
        return new vr(i, s);
      }
      xn.create = v0, xn.pointsToPath = Xn, Me.geometryToLayer = h0, Me.coordsToLatLng = kn, Me.coordsToLatLngs = Ki, Me.latLngToCoords = pi, Me.latLngsToCoords = Ge, Me.getFeature = De, Me.asFeature = _0, OA.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var gr = ie.extend({
        initialize: function(i) {
          this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
        },
        addHooks: function() {
          TA(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          ot(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          dt(this._pane), delete this._pane;
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
          this._clearDeferredResetState(), this._resetState(), pn(), q0(), this._startPoint = this._map.mouseEventToContainerPoint(i), TA(document, {
            contextmenu: ci,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(i) {
          this._moved || (this._moved = !0, this._box = JA("div", "leaflet-zoom-box", this._container), zA(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i);
          var s = new qA(this._point, this._startPoint), u = s.getSize();
          kt(this._box, s.min), this._box.style.width = u.x + "px", this._box.style.height = u.y + "px";
        },
        _finish: function() {
          this._moved && (dt(this._box), yt(this._container, "leaflet-crosshair")), xi(), J0(), ot(document, {
            contextmenu: ci,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(i) {
          if (!(i.which !== 1 && i.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(Z(this._resetState, this), 0);
            var s = new Et(
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
      OA.addInitHook("addHandler", "boxZoom", gr), OA.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var He = ie.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(i) {
          var s = this._map, u = s.getZoom(), _ = s.options.zoomDelta, v = i.originalEvent.shiftKey ? u - _ : u + _;
          s.options.doubleClickZoom === "center" ? s.setZoom(v) : s.setZoomAround(i.containerPoint, v);
        }
      });
      OA.addInitHook("addHandler", "doubleClickZoom", He), OA.mergeOptions({
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
      var wr = ie.extend({
        addHooks: function() {
          if (!this._draggable) {
            var i = this._map;
            this._draggable = new ri(i._mapPane, i._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), i.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), i.on("zoomend", this._onZoomEnd, this), i.whenReady(this._onZoomEnd, this));
          }
          zA(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          yt(this._map._container, "leaflet-grab"), yt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
            var s = _t(this._map.options.maxBounds);
            this._offsetLimit = vt(
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
          var i = this._worldWidth, s = Math.round(i / 2), u = this._initialWorldOffset, _ = this._draggable._newPos.x, v = (_ - s + u) % i + s - u, b = (_ + s + u) % i - s - u, M = Math.abs(v + u) < Math.abs(b + u) ? v : b;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = M;
        },
        _onDragEnd: function(i) {
          var s = this._map, u = s.options, _ = !u.inertia || i.noInertia || this._times.length < 2;
          if (s.fire("dragend", i), _)
            s.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var v = this._lastPos.subtract(this._positions[0]), b = (this._lastTime - this._times[0]) / 1e3, M = u.easeLinearity, F = v.multiplyBy(M / b), U = F.distanceTo([0, 0]), J = Math.min(u.inertiaMaxSpeed, U), sA = F.multiplyBy(J / U), yA = J / (u.inertiaDeceleration * M), IA = sA.multiplyBy(-yA / 2).round();
            !IA.x && !IA.y ? s.fire("moveend") : (IA = s._limitOffset(IA, s.options.maxBounds), XA(function() {
              s.panBy(IA, {
                duration: yA,
                easeLinearity: M,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      OA.addInitHook("addHandler", "dragging", wr), OA.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var co = ie.extend({
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
          i.tabIndex <= 0 && (i.tabIndex = "0"), TA(i, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), ot(this._map._container, {
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
          var s = this._panKeys = {}, u = this.keyCodes, _, v;
          for (_ = 0, v = u.left.length; _ < v; _++)
            s[u.left[_]] = [-1 * i, 0];
          for (_ = 0, v = u.right.length; _ < v; _++)
            s[u.right[_]] = [i, 0];
          for (_ = 0, v = u.down.length; _ < v; _++)
            s[u.down[_]] = [0, i];
          for (_ = 0, v = u.up.length; _ < v; _++)
            s[u.up[_]] = [0, -1 * i];
        },
        _setZoomDelta: function(i) {
          var s = this._zoomKeys = {}, u = this.keyCodes, _, v;
          for (_ = 0, v = u.zoomIn.length; _ < v; _++)
            s[u.zoomIn[_]] = i;
          for (_ = 0, v = u.zoomOut.length; _ < v; _++)
            s[u.zoomOut[_]] = -i;
        },
        _addHooks: function() {
          TA(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          ot(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(i) {
          if (!(i.altKey || i.ctrlKey || i.metaKey)) {
            var s = i.keyCode, u = this._map, _;
            if (s in this._panKeys) {
              if (!u._panAnim || !u._panAnim._inProgress)
                if (_ = this._panKeys[s], i.shiftKey && (_ = vA(_).multiplyBy(3)), u.options.maxBounds && (_ = u._limitOffset(vA(_), u.options.maxBounds)), u.options.worldCopyJump) {
                  var v = u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(_)));
                  u.panTo(v);
                } else
                  u.panBy(_);
            } else if (s in this._zoomKeys)
              u.setZoom(u.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[s]);
            else if (s === 27 && u._popup && u._popup.options.closeOnEscapeKey)
              u.closePopup();
            else
              return;
            ci(i);
          }
        }
      });
      OA.addInitHook("addHandler", "keyboard", co), OA.mergeOptions({
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
      var mo = ie.extend({
        addHooks: function() {
          TA(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          ot(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(i) {
          var s = Ao(i), u = this._map.options.wheelDebounceTime;
          this._delta += s, this._lastMousePos = this._map.mouseEventToContainerPoint(i), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var _ = Math.max(u - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(Z(this._performZoom, this), _), ci(i);
        },
        _performZoom: function() {
          var i = this._map, s = i.getZoom(), u = this._map.options.zoomSnap || 0;
          i._stop();
          var _ = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), v = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(_)))) / Math.LN2, b = u ? Math.ceil(v / u) * u : v, M = i._limitZoom(s + (this._delta > 0 ? b : -b)) - s;
          this._delta = 0, this._startTime = null, M && (i.options.scrollWheelZoom === "center" ? i.setZoom(s + M) : i.setZoomAround(this._lastMousePos, s + M));
        }
      });
      OA.addInitHook("addHandler", "scrollWheelZoom", mo);
      var ks = 600;
      OA.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: A.touchNative && A.safari && A.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var po = ie.extend({
        addHooks: function() {
          TA(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          ot(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(i) {
          if (clearTimeout(this._holdTimeout), i.touches.length === 1) {
            var s = i.touches[0];
            this._startPos = this._newPos = new _A(s.clientX, s.clientY), this._holdTimeout = setTimeout(Z(function() {
              this._cancel(), this._isTapValid() && (TA(document, "touchend", zt), TA(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", s));
            }, this), ks), TA(document, "touchend touchcancel contextmenu", this._cancel, this), TA(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function i() {
          ot(document, "touchend", zt), ot(document, "touchend touchcancel", i);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), ot(document, "touchend touchcancel contextmenu", this._cancel, this), ot(document, "touchmove", this._onMove, this);
        },
        _onMove: function(i) {
          var s = i.touches[0];
          this._newPos = new _A(s.clientX, s.clientY);
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
      OA.addInitHook("addHandler", "tapHold", po), OA.mergeOptions({
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
      var vo = ie.extend({
        addHooks: function() {
          zA(this._map._container, "leaflet-touch-zoom"), TA(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          yt(this._map._container, "leaflet-touch-zoom"), ot(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(i) {
          var s = this._map;
          if (!(!i.touches || i.touches.length !== 2 || s._animatingZoom || this._zooming)) {
            var u = s.mouseEventToContainerPoint(i.touches[0]), _ = s.mouseEventToContainerPoint(i.touches[1]);
            this._centerPoint = s.getSize()._divideBy(2), this._startLatLng = s.containerPointToLatLng(this._centerPoint), s.options.touchZoom !== "center" && (this._pinchStartLatLng = s.containerPointToLatLng(u.add(_)._divideBy(2))), this._startDist = u.distanceTo(_), this._startZoom = s.getZoom(), this._moved = !1, this._zooming = !0, s._stop(), TA(document, "touchmove", this._onTouchMove, this), TA(document, "touchend touchcancel", this._onTouchEnd, this), zt(i);
          }
        },
        _onTouchMove: function(i) {
          if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
            var s = this._map, u = s.mouseEventToContainerPoint(i.touches[0]), _ = s.mouseEventToContainerPoint(i.touches[1]), v = u.distanceTo(_) / this._startDist;
            if (this._zoom = s.getScaleZoom(v, this._startZoom), !s.options.bounceAtZoomLimits && (this._zoom < s.getMinZoom() && v < 1 || this._zoom > s.getMaxZoom() && v > 1) && (this._zoom = s._limitZoom(this._zoom)), s.options.touchZoom === "center") {
              if (this._center = this._startLatLng, v === 1)
                return;
            } else {
              var b = u._add(_)._divideBy(2)._subtract(this._centerPoint);
              if (v === 1 && b.x === 0 && b.y === 0)
                return;
              this._center = s.unproject(s.project(this._pinchStartLatLng, this._zoom).subtract(b), this._zoom);
            }
            this._moved || (s._moveStart(!0, !1), this._moved = !0), $A(this._animRequest);
            var M = Z(s._move, s, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = XA(M, this, !0), zt(i);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, $A(this._animRequest), ot(document, "touchmove", this._onTouchMove, this), ot(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      OA.addInitHook("addHandler", "touchZoom", vo), OA.BoxZoom = gr, OA.DoubleClickZoom = He, OA.Drag = wr, OA.Keyboard = co, OA.ScrollWheelZoom = mo, OA.TapHold = po, OA.TouchZoom = vo, g.Bounds = qA, g.Browser = A, g.CRS = Ee, g.Canvas = fo, g.Circle = dr, g.CircleMarker = f0, g.Class = Tt, g.Control = ee, g.DivIcon = ao, g.DivOverlay = Yt, g.DomEvent = ts, g.DomUtil = $o, g.Draggable = ri, g.Evented = Rt, g.FeatureGroup = Te, g.GeoJSON = Me, g.GridLayer = qi, g.Handler = ie, g.Icon = mi, g.ImageOverlay = d0, g.LatLng = et, g.LatLngBounds = Et, g.Layer = de, g.LayerGroup = Vi, g.LineUtil = fr, g.Map = OA, g.Marker = u0, g.Mixin = Mi, g.Path = si, g.Point = _A, g.PolyUtil = ns, g.Polygon = me, g.Polyline = gt, g.Popup = Zt, g.PosAnimation = Ot, g.Projection = ls, g.Rectangle = vr, g.Renderer = Ie, g.SVG = xn, g.SVGOverlay = p0, g.TileLayer = Ji, g.Tooltip = vi, g.Transformation = ue, g.Util = Be, g.VideoOverlay = m0, g.bind = Z, g.bounds = vt, g.canvas = ho, g.circle = cs, g.circleMarker = _s, g.control = ji, g.divIcon = gs, g.extend = T, g.featureGroup = hs, g.geoJSON = oo, g.geoJson = pr, g.gridLayer = ws, g.icon = cr, g.imageOverlay = ms, g.latLng = RA, g.latLngBounds = _t, g.layerGroup = fs, g.map = jt, g.marker = ro, g.point = vA, g.polygon = ds, g.polyline = mr, g.popup = ps, g.rectangle = bs, g.setOptions = uA, g.stamp = O, g.svg = _o, g.svgOverlay = Pn, g.tileLayer = lo, g.tooltip = vs, g.transformation = xe, g.version = C, g.videoOverlay = so;
      var gi = window.L;
      g.noConflict = function() {
        return window.L = gi, this;
      }, window.L = g;
    }));
  })(Br, Br.exports)), Br.exports;
}
var xl = Gf();
const Hf = /* @__PURE__ */ Ff(xl), Uf = /* @__PURE__ */ Fl({
  __proto__: null,
  default: Hf
}, [xl]);
var be = (function(d) {
  d = d || {};
  var c = typeof d < "u" ? d : {}, g = {}, C;
  for (C in c)
    c.hasOwnProperty(C) && (g[C] = c[C]);
  var T = "";
  function S(W) {
    return c.locateFile ? c.locateFile(W, T) : T + W;
  }
  var Z;
  typeof document < "u" && document.currentScript && (T = document.currentScript.src), T.indexOf("blob:") !== 0 ? T = T.substr(0, T.lastIndexOf("/") + 1) : T = "", Z = function(K, rA, Y) {
    var A = new XMLHttpRequest();
    A.open("GET", K, !0), A.responseType = "arraybuffer", A.onload = function() {
      if (A.status == 200 || A.status == 0 && A.response) {
        rA(A.response);
        return;
      }
      var GA = G0(K);
      if (GA) {
        rA(GA.buffer);
        return;
      }
      Y();
    }, A.onerror = Y, A.send(null);
  };
  var G = c.print || console.log.bind(console), O = c.printErr || console.warn.bind(console);
  for (C in g)
    g.hasOwnProperty(C) && (c[C] = g[C]);
  g = null, c.arguments && c.arguments;
  var j = 0, iA = function(W) {
    j = W;
  }, eA = function() {
    return j;
  }, oA = 8;
  function nA(W, K, rA, Y) {
    switch (rA = rA || "i8", rA.charAt(rA.length - 1) === "*" && (rA = "i32"), rA) {
      case "i1":
        $A[W >> 0] = K;
        break;
      case "i8":
        $A[W >> 0] = K;
        break;
      case "i16":
        Tt[W >> 1] = K;
        break;
      case "i32":
        jA[W >> 2] = K;
        break;
      case "i64":
        R0 = [K >>> 0, (Ni = K, +Fi(Ni) >= 1 ? Ni > 0 ? (Xn(+hn(Ni / 4294967296), 4294967295) | 0) >>> 0 : ~~+Jn((Ni - +(~~Ni >>> 0)) / 4294967296) >>> 0 : 0)], jA[W >> 2] = R0[0], jA[W + 4 >> 2] = R0[1];
        break;
      case "float":
        rt[W >> 2] = K;
        break;
      case "double":
        Rt[W >> 3] = K;
        break;
      default:
        Gi("invalid type for setValue: " + rA);
    }
  }
  function V(W, K, rA) {
    switch (K = K || "i8", K.charAt(K.length - 1) === "*" && (K = "i32"), K) {
      case "i1":
        return $A[W >> 0];
      case "i8":
        return $A[W >> 0];
      case "i16":
        return Tt[W >> 1];
      case "i32":
        return jA[W >> 2];
      case "i64":
        return jA[W >> 2];
      case "float":
        return rt[W >> 2];
      case "double":
        return Rt[W >> 3];
      default:
        Gi("invalid type for getValue: " + K);
    }
    return null;
  }
  var uA = !1;
  function QA(W, K) {
    W || Gi("Assertion failed: " + K);
  }
  function st(W) {
    var K = c["_" + W];
    return QA(K, "Cannot call unknown function " + W + ", make sure it is exported"), K;
  }
  function WA(W, K, rA, Y, A) {
    var w = {
      string: function(DA) {
        var fe = 0;
        if (DA != null && DA !== 0) {
          var t0 = (DA.length << 2) + 1;
          fe = H0(t0), at(DA, fe, t0);
        }
        return fe;
      },
      array: function(DA) {
        var fe = H0(DA.length);
        return wt(DA, fe), fe;
      }
    };
    function GA(DA) {
      return K === "string" ? it(DA) : K === "boolean" ? !!DA : DA;
    }
    var At = st(W), xt = [], CA = 0;
    if (Y)
      for (var HA = 0; HA < Y.length; HA++) {
        var $t = w[rA[HA]];
        $t ? (CA === 0 && (CA = qo()), xt[HA] = $t(Y[HA])) : xt[HA] = Y[HA];
      }
    var YA = At.apply(null, xt);
    return YA = GA(YA), CA !== 0 && jr(CA), YA;
  }
  function gA(W, K, rA, Y) {
    rA = rA || [];
    var A = rA.every(function(GA) {
      return GA === "number";
    }), w = K !== "string";
    return w && A && !Y ? st(W) : function() {
      return WA(W, K, rA, arguments);
    };
  }
  var tt = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function Bt(W, K, rA) {
    for (var Y = K + rA, A = K; W[A] && !(A >= Y); )
      ++A;
    if (A - K > 16 && W.subarray && tt)
      return tt.decode(W.subarray(K, A));
    for (var w = ""; K < A; ) {
      var GA = W[K++];
      if (!(GA & 128)) {
        w += String.fromCharCode(GA);
        continue;
      }
      var At = W[K++] & 63;
      if ((GA & 224) == 192) {
        w += String.fromCharCode((GA & 31) << 6 | At);
        continue;
      }
      var xt = W[K++] & 63;
      if ((GA & 240) == 224 ? GA = (GA & 15) << 12 | At << 6 | xt : GA = (GA & 7) << 18 | At << 12 | xt << 6 | W[K++] & 63, GA < 65536)
        w += String.fromCharCode(GA);
      else {
        var CA = GA - 65536;
        w += String.fromCharCode(55296 | CA >> 10, 56320 | CA & 1023);
      }
    }
    return w;
  }
  function it(W, K) {
    return W ? Bt(Be, W, K) : "";
  }
  function It(W, K, rA, Y) {
    if (!(Y > 0))
      return 0;
    for (var A = rA, w = rA + Y - 1, GA = 0; GA < W.length; ++GA) {
      var At = W.charCodeAt(GA);
      if (At >= 55296 && At <= 57343) {
        var xt = W.charCodeAt(++GA);
        At = 65536 + ((At & 1023) << 10) | xt & 1023;
      }
      if (At <= 127) {
        if (rA >= w)
          break;
        K[rA++] = At;
      } else if (At <= 2047) {
        if (rA + 1 >= w)
          break;
        K[rA++] = 192 | At >> 6, K[rA++] = 128 | At & 63;
      } else if (At <= 65535) {
        if (rA + 2 >= w)
          break;
        K[rA++] = 224 | At >> 12, K[rA++] = 128 | At >> 6 & 63, K[rA++] = 128 | At & 63;
      } else {
        if (rA + 3 >= w)
          break;
        K[rA++] = 240 | At >> 18, K[rA++] = 128 | At >> 12 & 63, K[rA++] = 128 | At >> 6 & 63, K[rA++] = 128 | At & 63;
      }
    }
    return K[rA] = 0, rA - A;
  }
  function at(W, K, rA) {
    return It(W, Be, K, rA);
  }
  typeof TextDecoder < "u" && new TextDecoder("utf-16le");
  function wt(W, K) {
    $A.set(W, K);
  }
  function ht(W, K) {
    return W % K > 0 && (W += K - W % K), W;
  }
  var XA, $A, Be, Tt, jA, rt, Rt;
  function _A(W) {
    XA = W, c.HEAP8 = $A = new Int8Array(W), c.HEAP16 = Tt = new Int16Array(W), c.HEAP32 = jA = new Int32Array(W), c.HEAPU8 = Be = new Uint8Array(W), c.HEAPU16 = new Uint16Array(W), c.HEAPU32 = new Uint32Array(W), c.HEAPF32 = rt = new Float32Array(W), c.HEAPF64 = Rt = new Float64Array(W);
  }
  var Wt = 5271536, vA = 28624, qA = c.TOTAL_MEMORY || 33554432;
  c.buffer ? XA = c.buffer : XA = new ArrayBuffer(qA), qA = XA.byteLength, _A(XA), jA[vA >> 2] = Wt;
  function vt(W) {
    for (; W.length > 0; ) {
      var K = W.shift();
      if (typeof K == "function") {
        K();
        continue;
      }
      var rA = K.func;
      typeof rA == "number" ? K.arg === void 0 ? c.dynCall_v(rA) : c.dynCall_vi(rA, K.arg) : rA(K.arg === void 0 ? null : K.arg);
    }
  }
  var Et = [], _t = [], et = [], RA = [];
  function Ee() {
    if (c.preRun)
      for (typeof c.preRun == "function" && (c.preRun = [c.preRun]); c.preRun.length; )
        ue(c.preRun.shift());
    vt(Et);
  }
  function Re() {
    vt(_t);
  }
  function qn() {
    vt(et);
  }
  function St() {
    if (c.postRun)
      for (typeof c.postRun == "function" && (c.postRun = [c.postRun]); c.postRun.length; )
        xe(c.postRun.shift());
    vt(RA);
  }
  function ue(W) {
    Et.unshift(W);
  }
  function xe(W) {
    RA.unshift(W);
  }
  var Fi = Math.abs, Jn = Math.ceil, hn = Math.floor, Xn = Math.min, Ce = 0, Ze = null;
  function O0(W) {
    Ce++, c.monitorRunDependencies && c.monitorRunDependencies(Ce);
  }
  function Zr(W) {
    if (Ce--, c.monitorRunDependencies && c.monitorRunDependencies(Ce), Ce == 0 && Ze) {
      var K = Ze;
      Ze = null, K();
    }
  }
  c.preloadedImages = {}, c.preloadedAudios = {};
  var Le = null, $n = "data:application/octet-stream;base64,";
  function Q0(W) {
    return String.prototype.startsWith ? W.startsWith($n) : W.indexOf($n) === 0;
  }
  var Ni, R0;
  Le = "data:application/octet-stream;base64,AAAAAAAAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAAAQAAAAQAAAADAAAABgAAAAUAAAACAAAAAAAAAAIAAAADAAAAAQAAAAQAAAAGAAAAAAAAAAUAAAADAAAABgAAAAQAAAAFAAAAAAAAAAEAAAACAAAABAAAAAUAAAAGAAAAAAAAAAIAAAADAAAAAQAAAAUAAAACAAAAAAAAAAEAAAADAAAABgAAAAQAAAAGAAAAAAAAAAUAAAACAAAAAQAAAAQAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAIAAAADAAAAAAAAAAAAAAACAAAAAAAAAAEAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAYAAAAAAAAABQAAAAAAAAAAAAAABAAAAAUAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAYAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAYAAAAAAAAAAwAAAAIAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAFAAAABAAAAAAAAAABAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAYAAAAAAAAABAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAgAAAAQAAAADAAAACAAAAAEAAAAHAAAABgAAAAkAAAAAAAAAAwAAAAIAAAACAAAABgAAAAoAAAALAAAAAAAAAAEAAAAFAAAAAwAAAA0AAAABAAAABwAAAAQAAAAMAAAAAAAAAAQAAAB/AAAADwAAAAgAAAADAAAAAAAAAAwAAAAFAAAAAgAAABIAAAAKAAAACAAAAAAAAAAQAAAABgAAAA4AAAALAAAAEQAAAAEAAAAJAAAAAgAAAAcAAAAVAAAACQAAABMAAAADAAAADQAAAAEAAAAIAAAABQAAABYAAAAQAAAABAAAAAAAAAAPAAAACQAAABMAAAAOAAAAFAAAAAEAAAAHAAAABgAAAAoAAAALAAAAGAAAABcAAAAFAAAAAgAAABIAAAALAAAAEQAAABcAAAAZAAAAAgAAAAYAAAAKAAAADAAAABwAAAANAAAAGgAAAAQAAAAPAAAAAwAAAA0AAAAaAAAAFQAAAB0AAAADAAAADAAAAAcAAAAOAAAAfwAAABEAAAAbAAAACQAAABQAAAAGAAAADwAAABYAAAAcAAAAHwAAAAQAAAAIAAAADAAAABAAAAASAAAAIQAAAB4AAAAIAAAABQAAABYAAAARAAAACwAAAA4AAAAGAAAAIwAAABkAAAAbAAAAEgAAABgAAAAeAAAAIAAAAAUAAAAKAAAAEAAAABMAAAAiAAAAFAAAACQAAAAHAAAAFQAAAAkAAAAUAAAADgAAABMAAAAJAAAAKAAAABsAAAAkAAAAFQAAACYAAAATAAAAIgAAAA0AAAAdAAAABwAAABYAAAAQAAAAKQAAACEAAAAPAAAACAAAAB8AAAAXAAAAGAAAAAsAAAAKAAAAJwAAACUAAAAZAAAAGAAAAH8AAAAgAAAAJQAAAAoAAAAXAAAAEgAAABkAAAAXAAAAEQAAAAsAAAAtAAAAJwAAACMAAAAaAAAAKgAAAB0AAAArAAAADAAAABwAAAANAAAAGwAAACgAAAAjAAAALgAAAA4AAAAUAAAAEQAAABwAAAAfAAAAKgAAACwAAAAMAAAADwAAABoAAAAdAAAAKwAAACYAAAAvAAAADQAAABoAAAAVAAAAHgAAACAAAAAwAAAAMgAAABAAAAASAAAAIQAAAB8AAAApAAAALAAAADUAAAAPAAAAFgAAABwAAAAgAAAAHgAAABgAAAASAAAANAAAADIAAAAlAAAAIQAAAB4AAAAxAAAAMAAAABYAAAAQAAAAKQAAACIAAAATAAAAJgAAABUAAAA2AAAAJAAAADMAAAAjAAAALgAAAC0AAAA4AAAAEQAAABsAAAAZAAAAJAAAABQAAAAiAAAAEwAAADcAAAAoAAAANgAAACUAAAAnAAAANAAAADkAAAAYAAAAFwAAACAAAAAmAAAAfwAAACIAAAAzAAAAHQAAAC8AAAAVAAAAJwAAACUAAAAZAAAAFwAAADsAAAA5AAAALQAAACgAAAAbAAAAJAAAABQAAAA8AAAALgAAADcAAAApAAAAMQAAADUAAAA9AAAAFgAAACEAAAAfAAAAKgAAADoAAAArAAAAPgAAABwAAAAsAAAAGgAAACsAAAA+AAAALwAAAEAAAAAaAAAAKgAAAB0AAAAsAAAANQAAADoAAABBAAAAHAAAAB8AAAAqAAAALQAAACcAAAAjAAAAGQAAAD8AAAA7AAAAOAAAAC4AAAA8AAAAOAAAAEQAAAAbAAAAKAAAACMAAAAvAAAAJgAAACsAAAAdAAAARQAAADMAAABAAAAAMAAAADEAAAAeAAAAIQAAAEMAAABCAAAAMgAAADEAAAB/AAAAPQAAAEIAAAAhAAAAMAAAACkAAAAyAAAAMAAAACAAAAAeAAAARgAAAEMAAAA0AAAAMwAAAEUAAAA2AAAARwAAACYAAAAvAAAAIgAAADQAAAA5AAAARgAAAEoAAAAgAAAAJQAAADIAAAA1AAAAPQAAAEEAAABLAAAAHwAAACkAAAAsAAAANgAAAEcAAAA3AAAASQAAACIAAAAzAAAAJAAAADcAAAAoAAAANgAAACQAAABIAAAAPAAAAEkAAAA4AAAARAAAAD8AAABNAAAAIwAAAC4AAAAtAAAAOQAAADsAAABKAAAATgAAACUAAAAnAAAANAAAADoAAAB/AAAAPgAAAEwAAAAsAAAAQQAAACoAAAA7AAAAPwAAAE4AAABPAAAAJwAAAC0AAAA5AAAAPAAAAEgAAABEAAAAUAAAACgAAAA3AAAALgAAAD0AAAA1AAAAMQAAACkAAABRAAAASwAAAEIAAAA+AAAAKwAAADoAAAAqAAAAUgAAAEAAAABMAAAAPwAAAH8AAAA4AAAALQAAAE8AAAA7AAAATQAAAEAAAAAvAAAAPgAAACsAAABUAAAARQAAAFIAAABBAAAAOgAAADUAAAAsAAAAVgAAAEwAAABLAAAAQgAAAEMAAABRAAAAVQAAADEAAAAwAAAAPQAAAEMAAABCAAAAMgAAADAAAABXAAAAVQAAAEYAAABEAAAAOAAAADwAAAAuAAAAWgAAAE0AAABQAAAARQAAADMAAABAAAAALwAAAFkAAABHAAAAVAAAAEYAAABDAAAANAAAADIAAABTAAAAVwAAAEoAAABHAAAAWQAAAEkAAABbAAAAMwAAAEUAAAA2AAAASAAAAH8AAABJAAAANwAAAFAAAAA8AAAAWAAAAEkAAABbAAAASAAAAFgAAAA2AAAARwAAADcAAABKAAAATgAAAFMAAABcAAAANAAAADkAAABGAAAASwAAAEEAAAA9AAAANQAAAF4AAABWAAAAUQAAAEwAAABWAAAAUgAAAGAAAAA6AAAAQQAAAD4AAABNAAAAPwAAAEQAAAA4AAAAXQAAAE8AAABaAAAATgAAAEoAAAA7AAAAOQAAAF8AAABcAAAATwAAAE8AAABOAAAAPwAAADsAAABdAAAAXwAAAE0AAABQAAAARAAAAEgAAAA8AAAAYwAAAFoAAABYAAAAUQAAAFUAAABeAAAAZQAAAD0AAABCAAAASwAAAFIAAABgAAAAVAAAAGIAAAA+AAAATAAAAEAAAABTAAAAfwAAAEoAAABGAAAAZAAAAFcAAABcAAAAVAAAAEUAAABSAAAAQAAAAGEAAABZAAAAYgAAAFUAAABXAAAAZQAAAGYAAABCAAAAQwAAAFEAAABWAAAATAAAAEsAAABBAAAAaAAAAGAAAABeAAAAVwAAAFMAAABmAAAAZAAAAEMAAABGAAAAVQAAAFgAAABIAAAAWwAAAEkAAABjAAAAUAAAAGkAAABZAAAAYQAAAFsAAABnAAAARQAAAFQAAABHAAAAWgAAAE0AAABQAAAARAAAAGoAAABdAAAAYwAAAFsAAABJAAAAWQAAAEcAAABpAAAAWAAAAGcAAABcAAAAUwAAAE4AAABKAAAAbAAAAGQAAABfAAAAXQAAAE8AAABaAAAATQAAAG0AAABfAAAAagAAAF4AAABWAAAAUQAAAEsAAABrAAAAaAAAAGUAAABfAAAAXAAAAE8AAABOAAAAbQAAAGwAAABdAAAAYAAAAGgAAABiAAAAbgAAAEwAAABWAAAAUgAAAGEAAAB/AAAAYgAAAFQAAABnAAAAWQAAAG8AAABiAAAAbgAAAGEAAABvAAAAUgAAAGAAAABUAAAAYwAAAFAAAABpAAAAWAAAAGoAAABaAAAAcQAAAGQAAABmAAAAUwAAAFcAAABsAAAAcgAAAFwAAABlAAAAZgAAAGsAAABwAAAAUQAAAFUAAABeAAAAZgAAAGUAAABXAAAAVQAAAHIAAABwAAAAZAAAAGcAAABbAAAAYQAAAFkAAAB0AAAAaQAAAG8AAABoAAAAawAAAG4AAABzAAAAVgAAAF4AAABgAAAAaQAAAFgAAABnAAAAWwAAAHEAAABjAAAAdAAAAGoAAABdAAAAYwAAAFoAAAB1AAAAbQAAAHEAAABrAAAAfwAAAGUAAABeAAAAcwAAAGgAAABwAAAAbAAAAGQAAABfAAAAXAAAAHYAAAByAAAAbQAAAG0AAABsAAAAXQAAAF8AAAB1AAAAdgAAAGoAAABuAAAAYgAAAGgAAABgAAAAdwAAAG8AAABzAAAAbwAAAGEAAABuAAAAYgAAAHQAAABnAAAAdwAAAHAAAABrAAAAZgAAAGUAAAB4AAAAcwAAAHIAAABxAAAAYwAAAHQAAABpAAAAdQAAAGoAAAB5AAAAcgAAAHAAAABkAAAAZgAAAHYAAAB4AAAAbAAAAHMAAABuAAAAawAAAGgAAAB4AAAAdwAAAHAAAAB0AAAAZwAAAHcAAABvAAAAcQAAAGkAAAB5AAAAdQAAAH8AAABtAAAAdgAAAHEAAAB5AAAAagAAAHYAAAB4AAAAbAAAAHIAAAB1AAAAeQAAAG0AAAB3AAAAbwAAAHMAAABuAAAAeQAAAHQAAAB4AAAAeAAAAHMAAAByAAAAcAAAAHkAAAB3AAAAdgAAAHkAAAB0AAAAeAAAAHcAAAB1AAAAcQAAAHYAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAACAAAABQAAAAEAAAAAAAAA/////wEAAAAAAAAAAwAAAAQAAAACAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAEAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAUAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAABAAAAAUAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAD/////AQAAAAAAAAADAAAABAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAUAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAD//////////wEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAACAAAAAAAAAAAAAAABAAAAAgAAAAYAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAKAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAFAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAAAAAAAAAAABAAAAAwAAAAcAAAAGAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADgAAAAIAAAAAAAAAAAAAAAEAAAAAAAAACQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAAAAAAAAAAAAAEAAAAEAAAACAAAAAoAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAAAAAAAAAAAAQAAAAsAAAAPAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAIAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAAAAAAAAAAAAQAAAAwAAAAQAAAADAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAADwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAAAAAAAAAAABAAAACgAAABMAAAAIAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAIAAAAAAAAAAAAAAAEAAAANAAAAEQAAAA0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAACAAAAAAAAAAAAAAABAAAADgAAABIAAAAPAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABIAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAAAAAAAAQAAAP//////////EwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAASAAAAAAAAABgAAAAAAAAAIQAAAAAAAAAeAAAAAAAAACAAAAADAAAAMQAAAAEAAAAwAAAAAwAAADIAAAADAAAACAAAAAAAAAAFAAAABQAAAAoAAAAFAAAAFgAAAAAAAAAQAAAAAAAAABIAAAAAAAAAKQAAAAEAAAAhAAAAAAAAAB4AAAAAAAAABAAAAAAAAAAAAAAABQAAAAIAAAAFAAAADwAAAAEAAAAIAAAAAAAAAAUAAAAFAAAAHwAAAAEAAAAWAAAAAAAAABAAAAAAAAAAAgAAAAAAAAAGAAAAAAAAAA4AAAAAAAAACgAAAAAAAAALAAAAAAAAABEAAAADAAAAGAAAAAEAAAAXAAAAAwAAABkAAAADAAAAAAAAAAAAAAABAAAABQAAAAkAAAAFAAAABQAAAAAAAAACAAAAAAAAAAYAAAAAAAAAEgAAAAEAAAAKAAAAAAAAAAsAAAAAAAAABAAAAAEAAAADAAAABQAAAAcAAAAFAAAACAAAAAEAAAAAAAAAAAAAAAEAAAAFAAAAEAAAAAEAAAAFAAAAAAAAAAIAAAAAAAAABwAAAAAAAAAVAAAAAAAAACYAAAAAAAAACQAAAAAAAAATAAAAAAAAACIAAAADAAAADgAAAAEAAAAUAAAAAwAAACQAAAADAAAAAwAAAAAAAAANAAAABQAAAB0AAAAFAAAAAQAAAAAAAAAHAAAAAAAAABUAAAAAAAAABgAAAAEAAAAJAAAAAAAAABMAAAAAAAAABAAAAAIAAAAMAAAABQAAABoAAAAFAAAAAAAAAAEAAAADAAAAAAAAAA0AAAAFAAAAAgAAAAEAAAABAAAAAAAAAAcAAAAAAAAAGgAAAAAAAAAqAAAAAAAAADoAAAAAAAAAHQAAAAAAAAArAAAAAAAAAD4AAAADAAAAJgAAAAEAAAAvAAAAAwAAAEAAAAADAAAADAAAAAAAAAAcAAAABQAAACwAAAAFAAAADQAAAAAAAAAaAAAAAAAAACoAAAAAAAAAFQAAAAEAAAAdAAAAAAAAACsAAAAAAAAABAAAAAMAAAAPAAAABQAAAB8AAAAFAAAAAwAAAAEAAAAMAAAAAAAAABwAAAAFAAAABwAAAAEAAAANAAAAAAAAABoAAAAAAAAAHwAAAAAAAAApAAAAAAAAADEAAAAAAAAALAAAAAAAAAA1AAAAAAAAAD0AAAADAAAAOgAAAAEAAABBAAAAAwAAAEsAAAADAAAADwAAAAAAAAAWAAAABQAAACEAAAAFAAAAHAAAAAAAAAAfAAAAAAAAACkAAAAAAAAAKgAAAAEAAAAsAAAAAAAAADUAAAAAAAAABAAAAAQAAAAIAAAABQAAABAAAAAFAAAADAAAAAEAAAAPAAAAAAAAABYAAAAFAAAAGgAAAAEAAAAcAAAAAAAAAB8AAAAAAAAAMgAAAAAAAAAwAAAAAAAAADEAAAADAAAAIAAAAAAAAAAeAAAAAwAAACEAAAADAAAAGAAAAAMAAAASAAAAAwAAABAAAAADAAAARgAAAAAAAABDAAAAAAAAAEIAAAADAAAANAAAAAMAAAAyAAAAAAAAADAAAAAAAAAAJQAAAAMAAAAgAAAAAAAAAB4AAAADAAAAUwAAAAAAAABXAAAAAwAAAFUAAAADAAAASgAAAAMAAABGAAAAAAAAAEMAAAAAAAAAOQAAAAEAAAA0AAAAAwAAADIAAAAAAAAAGQAAAAAAAAAXAAAAAAAAABgAAAADAAAAEQAAAAAAAAALAAAAAwAAAAoAAAADAAAADgAAAAMAAAAGAAAAAwAAAAIAAAADAAAALQAAAAAAAAAnAAAAAAAAACUAAAADAAAAIwAAAAMAAAAZAAAAAAAAABcAAAAAAAAAGwAAAAMAAAARAAAAAAAAAAsAAAADAAAAPwAAAAAAAAA7AAAAAwAAADkAAAADAAAAOAAAAAMAAAAtAAAAAAAAACcAAAAAAAAALgAAAAMAAAAjAAAAAwAAABkAAAAAAAAAJAAAAAAAAAAUAAAAAAAAAA4AAAADAAAAIgAAAAAAAAATAAAAAwAAAAkAAAADAAAAJgAAAAMAAAAVAAAAAwAAAAcAAAADAAAANwAAAAAAAAAoAAAAAAAAABsAAAADAAAANgAAAAMAAAAkAAAAAAAAABQAAAAAAAAAMwAAAAMAAAAiAAAAAAAAABMAAAADAAAASAAAAAAAAAA8AAAAAwAAAC4AAAADAAAASQAAAAMAAAA3AAAAAAAAACgAAAAAAAAARwAAAAMAAAA2AAAAAwAAACQAAAAAAAAAQAAAAAAAAAAvAAAAAAAAACYAAAADAAAAPgAAAAAAAAArAAAAAwAAAB0AAAADAAAAOgAAAAMAAAAqAAAAAwAAABoAAAADAAAAVAAAAAAAAABFAAAAAAAAADMAAAADAAAAUgAAAAMAAABAAAAAAAAAAC8AAAAAAAAATAAAAAMAAAA+AAAAAAAAACsAAAADAAAAYQAAAAAAAABZAAAAAwAAAEcAAAADAAAAYgAAAAMAAABUAAAAAAAAAEUAAAAAAAAAYAAAAAMAAABSAAAAAwAAAEAAAAAAAAAASwAAAAAAAABBAAAAAAAAADoAAAADAAAAPQAAAAAAAAA1AAAAAwAAACwAAAADAAAAMQAAAAMAAAApAAAAAwAAAB8AAAADAAAAXgAAAAAAAABWAAAAAAAAAEwAAAADAAAAUQAAAAMAAABLAAAAAAAAAEEAAAAAAAAAQgAAAAMAAAA9AAAAAAAAADUAAAADAAAAawAAAAAAAABoAAAAAwAAAGAAAAADAAAAZQAAAAMAAABeAAAAAAAAAFYAAAAAAAAAVQAAAAMAAABRAAAAAwAAAEsAAAAAAAAAOQAAAAAAAAA7AAAAAAAAAD8AAAADAAAASgAAAAAAAABOAAAAAwAAAE8AAAADAAAAUwAAAAMAAABcAAAAAwAAAF8AAAADAAAAJQAAAAAAAAAnAAAAAwAAAC0AAAADAAAANAAAAAAAAAA5AAAAAAAAADsAAAAAAAAARgAAAAMAAABKAAAAAAAAAE4AAAADAAAAGAAAAAAAAAAXAAAAAwAAABkAAAADAAAAIAAAAAMAAAAlAAAAAAAAACcAAAADAAAAMgAAAAMAAAA0AAAAAAAAADkAAAAAAAAALgAAAAAAAAA8AAAAAAAAAEgAAAADAAAAOAAAAAAAAABEAAAAAwAAAFAAAAADAAAAPwAAAAMAAABNAAAAAwAAAFoAAAADAAAAGwAAAAAAAAAoAAAAAwAAADcAAAADAAAAIwAAAAAAAAAuAAAAAAAAADwAAAAAAAAALQAAAAMAAAA4AAAAAAAAAEQAAAADAAAADgAAAAAAAAAUAAAAAwAAACQAAAADAAAAEQAAAAMAAAAbAAAAAAAAACgAAAADAAAAGQAAAAMAAAAjAAAAAAAAAC4AAAAAAAAARwAAAAAAAABZAAAAAAAAAGEAAAADAAAASQAAAAAAAABbAAAAAwAAAGcAAAADAAAASAAAAAMAAABYAAAAAwAAAGkAAAADAAAAMwAAAAAAAABFAAAAAwAAAFQAAAADAAAANgAAAAAAAABHAAAAAAAAAFkAAAAAAAAANwAAAAMAAABJAAAAAAAAAFsAAAADAAAAJgAAAAAAAAAvAAAAAwAAAEAAAAADAAAAIgAAAAMAAAAzAAAAAAAAAEUAAAADAAAAJAAAAAMAAAA2AAAAAAAAAEcAAAAAAAAAYAAAAAAAAABoAAAAAAAAAGsAAAADAAAAYgAAAAAAAABuAAAAAwAAAHMAAAADAAAAYQAAAAMAAABvAAAAAwAAAHcAAAADAAAATAAAAAAAAABWAAAAAwAAAF4AAAADAAAAUgAAAAAAAABgAAAAAAAAAGgAAAAAAAAAVAAAAAMAAABiAAAAAAAAAG4AAAADAAAAOgAAAAAAAABBAAAAAwAAAEsAAAADAAAAPgAAAAMAAABMAAAAAAAAAFYAAAADAAAAQAAAAAMAAABSAAAAAAAAAGAAAAAAAAAAVQAAAAAAAABXAAAAAAAAAFMAAAADAAAAZQAAAAAAAABmAAAAAwAAAGQAAAADAAAAawAAAAMAAABwAAAAAwAAAHIAAAADAAAAQgAAAAAAAABDAAAAAwAAAEYAAAADAAAAUQAAAAAAAABVAAAAAAAAAFcAAAAAAAAAXgAAAAMAAABlAAAAAAAAAGYAAAADAAAAMQAAAAAAAAAwAAAAAwAAADIAAAADAAAAPQAAAAMAAABCAAAAAAAAAEMAAAADAAAASwAAAAMAAABRAAAAAAAAAFUAAAAAAAAAXwAAAAAAAABcAAAAAAAAAFMAAAAAAAAATwAAAAAAAABOAAAAAAAAAEoAAAADAAAAPwAAAAEAAAA7AAAAAwAAADkAAAADAAAAbQAAAAAAAABsAAAAAAAAAGQAAAAFAAAAXQAAAAEAAABfAAAAAAAAAFwAAAAAAAAATQAAAAEAAABPAAAAAAAAAE4AAAAAAAAAdQAAAAQAAAB2AAAABQAAAHIAAAAFAAAAagAAAAEAAABtAAAAAAAAAGwAAAAAAAAAWgAAAAEAAABdAAAAAQAAAF8AAAAAAAAAWgAAAAAAAABNAAAAAAAAAD8AAAAAAAAAUAAAAAAAAABEAAAAAAAAADgAAAADAAAASAAAAAEAAAA8AAAAAwAAAC4AAAADAAAAagAAAAAAAABdAAAAAAAAAE8AAAAFAAAAYwAAAAEAAABaAAAAAAAAAE0AAAAAAAAAWAAAAAEAAABQAAAAAAAAAEQAAAAAAAAAdQAAAAMAAABtAAAABQAAAF8AAAAFAAAAcQAAAAEAAABqAAAAAAAAAF0AAAAAAAAAaQAAAAEAAABjAAAAAQAAAFoAAAAAAAAAaQAAAAAAAABYAAAAAAAAAEgAAAAAAAAAZwAAAAAAAABbAAAAAAAAAEkAAAADAAAAYQAAAAEAAABZAAAAAwAAAEcAAAADAAAAcQAAAAAAAABjAAAAAAAAAFAAAAAFAAAAdAAAAAEAAABpAAAAAAAAAFgAAAAAAAAAbwAAAAEAAABnAAAAAAAAAFsAAAAAAAAAdQAAAAIAAABqAAAABQAAAFoAAAAFAAAAeQAAAAEAAABxAAAAAAAAAGMAAAAAAAAAdwAAAAEAAAB0AAAAAQAAAGkAAAAAAAAAdwAAAAAAAABvAAAAAAAAAGEAAAAAAAAAcwAAAAAAAABuAAAAAAAAAGIAAAADAAAAawAAAAEAAABoAAAAAwAAAGAAAAADAAAAeQAAAAAAAAB0AAAAAAAAAGcAAAAFAAAAeAAAAAEAAAB3AAAAAAAAAG8AAAAAAAAAcAAAAAEAAABzAAAAAAAAAG4AAAAAAAAAdQAAAAEAAABxAAAABQAAAGkAAAAFAAAAdgAAAAEAAAB5AAAAAAAAAHQAAAAAAAAAcgAAAAEAAAB4AAAAAQAAAHcAAAAAAAAAcgAAAAAAAABwAAAAAAAAAGsAAAAAAAAAZAAAAAAAAABmAAAAAAAAAGUAAAADAAAAUwAAAAEAAABXAAAAAwAAAFUAAAADAAAAdgAAAAAAAAB4AAAAAAAAAHMAAAAFAAAAbAAAAAEAAAByAAAAAAAAAHAAAAAAAAAAXAAAAAEAAABkAAAAAAAAAGYAAAAAAAAAdQAAAAAAAAB5AAAABQAAAHcAAAAFAAAAbQAAAAEAAAB2AAAAAAAAAHgAAAAAAAAAXwAAAAEAAABsAAAAAQAAAHIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAGAAAAAgAAAAUAAAABAAAABAAAAAAAAAAAAAAABQAAAAMAAAABAAAABgAAAAQAAAACAAAAAAAAAH6iBfbytuk/Gq6akm/58z/Xrm0Liez0P5doSdOpSwRAWs602ULg8D/dT7Rcbo/1v1N1RQHFNOM/g9Snx7HW3L8HWsP8Q3jfP6VwOLosutk/9rjk1YQcxj+gnmKMsNn6P/HDeuPFY+M/YHwDjqKhB0Ci19/fCVrbP4UxKkDWOP6/pvljWa09tL9wi7wrQXjnv/Z6yLImkM2/3yTlOzY14D+m+WNZrT20PzwKVQnrQwNA9nrIsiaQzT/g40rFrRQFwPa45NWEHMa/kbslHEZq97/xw3rjxWPjv4cLC2SMBci/otff3wla27+rKF5oIAv0P1N1RQHFNOO/iDJPGyWHBUAHWsP8Q3jfvwQf/by16gXAfqIF9vK26b8XrO0Vh0r+v9eubQuJ7PS/BxLrA0ZZ479azrTZQuDwv1MK1EuItPw/yscgV9Z6FkAwHBR2WjQMQJNRzXsQ5vY/GlUHVJYKF0DONuFv2lMNQNCGZ28QJfk/0WUwoIL36D8ggDOMQuATQNqMOeAy/wZAWFYOYM+M2z/LWC4uH3oSQDE+LyTsMgRAkJzhRGWFGEDd4soovCQQQKqk0DJMEP8/rGmNdwOLBUAW2X/9xCbjP4hu3dcqJhNAzuYItRvdB0CgzW3zJW/sPxotm/Y2TxRAQAk9XmdDDEC1Kx9MKgT3P1M+NctcghZAFVqcLlb0C0Bgzd3sB2b2P77mZDPUWhZAFROHJpUGCEDAfma5CxXtPz1DWq/zYxRAmhYY5824F0DOuQKWSbAOQNCMqrvu3fs/L6DR22K2wT9nAAxPBU8RQGiN6mW43AFAZhu25b633D8c1YgmzowSQNM25BRKWARArGS08/lNxD+LFssHwmMRQLC5aNcxBgJABL9HT0WRF0CjCmJmOGEOQHsuaVzMP/s/TWJCaGGwBUCeu1PAPLzjP9nqN9DZOBNAKE4JcydbCkCGtbd1qjPzP8dgm9U8jhVAtPeKTkVwDkCeCLss5l37P401XMPLmBdAFd29VMVQDUBg0yA55h75Pz6odcYLCRdApBM4rBrkAkDyAVWgQxbRP4XDMnK20hFAymLlF7EmzD8GUgo9XBHlP3lbK7T9COc/k+OhPthhy7+YGEpnrOvCPzBFhLs15u4/epbqB6H4uz9IuuLF5svev6lzLKY31es/CaQ0envF5z8ZY0xlUADXv7zaz7HYEuI/CfbK1sn16T8uAQfWwxLWPzKn/YuFN94/5KdbC1AFu793fyCSnlfvPzK2y4doAMY/NRg5t1/X6b/shq4QJaHDP5yNIAKPOeI/vpn7BSE30r/X4YQrO6nrv78Ziv/Thto/DqJ1Y6+y5z9l51NaxFrlv8QlA65HOLS/86dxiEc96z+Hj0+LFjneP6LzBZ8LTc2/DaJ1Y6+y579l51NaxFrlP8QlA65HOLQ/8qdxiEc967+Jj0+LFjnev6LzBZ8LTc0/1qdbC1AFuz93fyCSnlfvvzK2y4doAMa/NRg5t1/X6T/vhq4QJaHDv5yNIAKPOeK/wJn7BSE30j/W4YQrO6nrP78Ziv/Thtq/CaQ0envF578XY0xlUADXP7zaz7HYEuK/CvbK1sn16b8rAQfWwxLWvzKn/YuFN96/zWLlF7EmzL8GUgo9XBHlv3lbK7T9COe/kOOhPthhyz+cGEpnrOvCvzBFhLs15u6/c5bqB6H4u79IuuLF5sveP6lzLKY31eu/AQAAAP////8HAAAA/////zEAAAD/////VwEAAP////9hCQAA/////6dBAAD/////kcsBAP/////3kAwA/////8H2VwAAAAAAAAAAAAAAAAACAAAA/////w4AAAD/////YgAAAP////+uAgAA/////8ISAAD/////ToMAAP////8ilwMA/////+4hGQD/////gu2vAAAAAAAAAAAAAAAAAAAAAAACAAAA//////////8BAAAAAwAAAP//////////////////////////////////////////////////////////////////////////AQAAAAAAAAACAAAA////////////////AwAAAP//////////////////////////////////////////////////////////////////////////AQAAAAAAAAACAAAA////////////////AwAAAP//////////////////////////////////////////////////////////////////////////AQAAAAAAAAACAAAA////////////////AwAAAP//////////////////////////////////////////////////////////AgAAAP//////////AQAAAAAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD/////////////////////AQAAAP///////////////wIAAAD///////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAD///////////////8CAAAAAQAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8BAAAAAgAAAP///////////////wAAAAD/////////////////////AwAAAP///////////////////////////////wIAAAD///////////////8BAAAA/////////////////////wAAAAD/////////////////////AwAAAP////////////////////////////////////////////////////8DAAAA/////////////////////wAAAAABAAAA//////////8CAAAA//////////////////////////////////////////////////////////8DAAAA////////////////AgAAAAAAAAABAAAA//////////////////////////////////////////////////////////////////////////8DAAAA////////////////AgAAAAAAAAABAAAA//////////////////////////////////////////////////////////////////////////8DAAAA////////////////AgAAAAAAAAABAAAA//////////////////////////////////////////////////////////////////////////8DAAAAAQAAAP//////////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAACAAAAAAAAAAIAAAABAAAAAQAAAAIAAAACAAAAAAAAAAUAAAAFAAAAAAAAAAIAAAACAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAEAAAACAAAAAgAAAAIAAAAAAAAABQAAAAYAAAAAAAAAAgAAAAIAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAAAAAACAAAAAQAAAAMAAAACAAAAAgAAAAAAAAAFAAAABwAAAAAAAAACAAAAAgAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAACAAAAAAAAAAIAAAABAAAABAAAAAIAAAACAAAAAAAAAAUAAAAIAAAAAAAAAAIAAAACAAAAAwAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAIAAAAAAAAAAgAAAAEAAAAAAAAAAgAAAAIAAAAAAAAABQAAAAkAAAAAAAAAAgAAAAIAAAADAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAgAAAAIAAAAAAAAAAwAAAA4AAAACAAAAAAAAAAIAAAADAAAAAAAAAAAAAAACAAAAAgAAAAMAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAACAAAAAgAAAAAAAAADAAAACgAAAAIAAAAAAAAAAgAAAAMAAAABAAAAAAAAAAIAAAACAAAAAwAAAAcAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAIAAAACAAAAAAAAAAMAAAALAAAAAgAAAAAAAAACAAAAAwAAAAIAAAAAAAAAAgAAAAIAAAADAAAACAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAgAAAAIAAAAAAAAAAwAAAAwAAAACAAAAAAAAAAIAAAADAAAAAwAAAAAAAAACAAAAAgAAAAMAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAACAAAAAgAAAAAAAAADAAAADQAAAAIAAAAAAAAAAgAAAAMAAAAEAAAAAAAAAAIAAAACAAAAAwAAAAoAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAIAAAACAAAAAAAAAAMAAAAGAAAAAgAAAAAAAAACAAAAAwAAAA8AAAAAAAAAAgAAAAIAAAADAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAIAAAAAAAAAAwAAAAcAAAACAAAAAAAAAAIAAAADAAAAEAAAAAAAAAACAAAAAgAAAAMAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAACAAAAAgAAAAAAAAADAAAACAAAAAIAAAAAAAAAAgAAAAMAAAARAAAAAAAAAAIAAAACAAAAAwAAAA0AAAAAAAAAAAAAAAAAAAAAAAAACAAAAAIAAAACAAAAAAAAAAMAAAAJAAAAAgAAAAAAAAACAAAAAwAAABIAAAAAAAAAAgAAAAIAAAADAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAAgAAAAIAAAAAAAAAAwAAAAUAAAACAAAAAAAAAAIAAAADAAAAEwAAAAAAAAACAAAAAgAAAAMAAAAPAAAAAAAAAAAAAAAAAAAAAAAAABAAAAACAAAAAAAAAAIAAAABAAAAEwAAAAIAAAACAAAAAAAAAAUAAAAKAAAAAAAAAAIAAAACAAAAAwAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAIAAAAAAAAAAgAAAAEAAAAPAAAAAgAAAAIAAAAAAAAABQAAAAsAAAAAAAAAAgAAAAIAAAADAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAgAAAAAAAAACAAAAAQAAABAAAAACAAAAAgAAAAAAAAAFAAAADAAAAAAAAAACAAAAAgAAAAMAAAASAAAAAAAAAAAAAAAAAAAAAAAAABMAAAACAAAAAAAAAAIAAAABAAAAEQAAAAIAAAACAAAAAAAAAAUAAAANAAAAAAAAAAIAAAACAAAAAwAAABMAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAIAAAAAAAAAAgAAAAEAAAASAAAAAgAAAAIAAAAAAAAABQAAAA4AAAAAAAAAAgAAAAIAAAADAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAEAAAACAAAAAQAAAAAAAAACAAAAAAAAAAUAAAAEAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAQAAAAAAAAABQAAAAAAAAACAAAAAQAAAAAAAAABAAAAAgAAAAAAAAAAAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAABAAAAAAAAAAIAAAACAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAEAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAQAAAAAAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAEAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAA6B6FaUp9QQTPXMuL4myJBraiDfBwx9UBYJseitzTIQOL5if9jqZtAnXX+Z+ycb0C3pucbhRBCQG8wJBYqpRRAlWbDCzCY5z/eFWBUEve6P/+qo4Q50Y4/D9YM3iCcYT8fcA2QJSA0P4ADxu0qAAc/BNcGolVJ2j5d9FACqwquPh9z7MthtI9CSUSYJke/YUJQ/64OyjU0Qpi0+HCmFQdCm3GfIVdh2kHsJ11kAyauQYC3UDFJOoFBSJsFV1OwU0FK5fcxX4AmQWhy/zZIt/lACqaCPsBjzUDbdUNIScugQMYQlVJ4MXNANiuq8GTvRUDxTXnulxEZQFZ8QX5kpuw/qmG/JwYFlEAluh3Q6DB+QKn4vyNq0GZAKOXekas+UUB8xabXXhI6QG63C2pLtSNAdDBtyNfLDUDyOcu67ID2P0rCMvRXAeE/Ki2TSVyzyT9Dk+8Sz2uzP5J+w5ARWp0/NQAoOiMuhj9YnP+RyMJwPxgW7TvQVFk/KgsLYF0kQz9g5dAC6IwzQcgHPVvDex1B1XjppodHBkHJq3OMM9fwQNvcmJ7wddlAInGPpQs/w0BRobq5EBmtQJZ2ai7n+ZVAtv2G5E+bgECG+gIfKBlpQK5f8jdI91JAL39sL/WpPEB8rGxhDqklQK6yUf43XhBAxL9y/tK8+D86XyZpgrHiPwAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAP////8AAAAAAAAAAAAAAAABAAAAAAAAAAAAAAD/////AAAAAAAAAAABAAAAAQAAAAAAAAAAAAAA/////wAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAP////8FAAAABQAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAEAAAAAAAAABQAAAAEAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAQABAAABAQAAAAAAAQAAAAEAAAABAAEAAAAAAAAAAAAAAAAAAAAAquJYWJZl+D9jaeZNtj/zPwwdI9KqaeO/qGefXwdHdz+q4lhYlmX4P+OrlPMN3PI/DB0j0qpp47+7SQLV4VIEQKriWFiWZfg/r2kma3tz8T82eQmLqNIGwMRIWXMqSvo/fcCszPux9j+jara6ozTwP6hnn18HR3c/MSoKLequ8r+SabgA2nj0P7jBLbDOHO8/1Ym/ICfH4T+6lxjvlFXHv73m373LRPU/0vXyDVxo7T+ToKRHJXMAQF/33578aPE/pAyy64tD9T8+U/hCvyruPwxv8Y7YYwLAuXYr8NAiCEB4+LDK0Sn0P1Qeuy4j+eo/OMx50n7K7L+TrGB/nyf8v5ehC2fbYPM/aXMKexiT6z8mFRIMjg/zP7yUVwGGBNw/E6opHERf8z/z0wR2g9DqPw4pBpcOhvu/NbA29uWAA8DMaTExyXzyP02biiQ+Ruk/S8jz2/FKBEB1pzZnpbb9P7pQU4wLfPI//7ZcQXeG6D9CqEQvAYoIwDB2VB6sSgRAVyv8H5We8T+EHWF8XNPmPzB2wT8Nrrg/SEi+cX+w4L8of+GtdSDxP1sjk5AdouU/6ZjOVru13r8K0obqI6bxvwVbdNXyhfA/w5GG024n5z+rwmtMzP8BwLw9pSX49QXABe/2uQxP8D+b6wCzCvXkP7uGT87fK+Q/pz/JWw4coj+qoBf2J0nwP/yE3PUo0+I/vFJeHcaC+D96luSIqvntP/bf8sHUYu8/gZNN41mL4z9bhOqVOF4FwO6lmAh1hQhAbCVxbdhk7z+1C8NdDcfiPwG36x/0OQBAx0WJ76c2+D9nlSHXANfuP2HlfZ3gqOE/EwnVlVPg9r96+oHzEH//v5bXzdT1Auw/DM3GwLsA4D9p/8uoKcr+v+U9x5DQVAPAehjSdghb7D9sc1IetODgP8MVwwB1pu6/azPk6OGe978W8t/TUc3rP+0QMvYfP+A/RsG/QpSE8D+l3uwScxzgPwQaifgujuw/k1Vti1I43z8MAwLnSh0GQH5nYnwwZgJAiGUzWC5s6j8WyyI/BbLgPw4iUapGeQJAB3W+imnp/j9BLWR4ssrpP2t+gG5Pstk/cpBsfm6DCMCOpU9dOZsFQEv8nFypHeo/ehJ6i+6S2D9jqlGEmarLv7STC5TRiOa/bC+x8WZD6D9H3yUkWpDZP8gZvmCMuQLAreY19/eRBsCoPOc8UzzpP6KI/QV+y9g/t/MoboyWzT+Hv5q3Zu3Mvy2xROCT4uY/9gQitMMg1T9abAqhWMDkv1oLTavoUfG/PMUJP9CD5j+fHRX3t6fSPz7W2gk6bvs/WRnuHwqN9D8YFturGCTmP1EZczv0b9I/5t4exabB5D/1ESLh5fTEP9X2z6SYweQ/6lv3I2zT0D9zkRGNUNMAQKoSvc4EIfs/Xggt8wQI5T+mJHHg/w/SP4lhT/9t8vQ/DrZ/DbwH7D+XlhbYZrjkP34LIpFt6c4/lwfp8fLX9L+j96CTTf76v3WdNhEv9uM/d8c3o4lV0D/vFdCHVcsFwAHeDq0F1QhApbYqcZiN5D9KoilqByXLPwX0/diA0vq/0fo0GxnxAMBbaTkvlCzjP/RrFrWXrMs/UYTrky7jA0DB9f4FiZYAQEGAk/3QzeE/r/TeqE8t0D/OqjlsnPbvvz8RKU8JOfW/smSEbK/O4T8MzuyPm3DDP/rFtctq9gZAfb1EVEaSA0Dts5dVInnhP18SFMc79MM/7y34cw6LAMDFrRJsZO0DwC2KLvLSYuA/hx5wcUHewz+49SnK/4ruPyeS0PX9a+E/ZxaaLvvZ3z8WPu5T2QS8Pygo4RIvMqa/BJ0Kqsd0279cKW4ay8jdP3b05bmZ364/10/qtdxk2r+Bcz6CDMvpv54qOw+Amdw/qLV71pW7sT/YKc80nIPUP8OfIaBJ77G/LyTuD1un2z+diYu8efWzP1wU7ACkfwjAZroyPL1yBkAmv3lKJJbbPysKSE4W+p0/dIgqY79TA8ATLTOQ3tsGwJ2zweD/Xdg/XO/jXeFUaL8VW2qLFKfov1cA9Aa6XfK/tIa7YGgI2T+f3hu/sxqPv2nXdPpf3Pc/jkw8Jbda8j+tT/z8tGPVP1yBHpJd35k/KYvYOy1s8j/yz+kCQjPrP9+agH7x59g/PZfJ9aBhpr/rDKzvYBb+PwtkiaGCt/c/vb1mVr+f1T/JIHwHc8Govw7aeF6+9vG/Xv7kD6fp979isYioQYHVP7AIQZuSFrG/3z1AdUTnAUDN3XY9O7f9P0AdQ9ljYNQ/dJANJPTOrb8kLECUiiPlP4yF7UgmStA/9xGmXxCG1T9qZzix4W2zv2SGJRJVrPe/Fh9a2M/B/b8IexzFCoPSP9y1QFD2bLe/Q86cWLJe/b+mOOfYm78BwOTjkPAGE9E/8aPCUKu/ub9pPZyLCiUGwBA7Mev/BQlALOmrlRi+0j+AMJ/dKULBv7iLtL6a6QRAEMDV/yajAUDa62dE3crJP1P70RgBUbq/38hVnR6esT/s1tG10Z/Ov/zLwalHPss/dTS9NKTXx78nMcRzCIEHQAabxDsAmQRA0tyLK3gSyT+Aui7nOhDGv5Gs58z3WgHATN3forJuBMCAui7nOhDGP9Lciyt4Esm/WAJyHQ4c7z8UP5HFIs3iP3U0vTSk18c//MvBqUc+y7+cvv8HLg/Kvy1I/mHsI+K/U/vRGAFRuj/a62dE3crJv8p+WV8KlQjAuQ/nOP43B0CAMJ/dKULBPyzpq5UYvtK/ZoU+VoLh4L9etLlRUfvtv/GjwlCrv7k/5OOQ8AYT0b9DfT9FhufXPwUX8hJp+4u/3LVAUPZstz8IexzFCoPSv9+L609E5fQ/q9Fz7X2J7T9qZzix4W2zP/cRpl8QhtW/vtNilqGX+j8MOy7QJoL0P3SQDST0zq0/QB1D2WNg1L8IIjSvGNkDwGB8Jou2GAfAsAhBm5IWsT9isYioQYHVvyS9D3zb6uy/gnwRa7uM9L/JIHwHc8GoP729Zla/n9W/CsAHJZwmAEDEW6OYT1r6Pz2XyfWgYaY/35qAfvHn2L83Tdy4lS30vxf2/gZ0jPq/XIEekl3fmb+tT/z8tGPVvybPr2zJ1/+/K7mJ0ypVAsCf3hu/sxqPPwCGu2BoCNm/5oITrpZn+r+UDUyDP+n/v1zv413hVGg/nbPB4P9d2L9MlmkxNvgCQMtZlKE85v8/KwpIThb6nb8mv3lKJJbbv8+SZsTvOOc/pQCIIOYw0j+diYu8efWzvy8k7g9bp9u/kxYDa+pKtD9XlYvA8HnVv6i1e9aVu7G/nio7D4CZ3L/WR6rNh5EGwCkgQweBkghAdvTluZnfrr9cKW4ay8jdvxbjhr1f1QVAR5C0MzivAkAWPu5T2QS8v2cWmi772d+/cKj4lzLJCEBx2QJfYrMFQIcecHFB3sO/LYou8tJi4L+jr7lhO38BwIcI0Nb7xgTAXxIUxzv0w7/ts5dVInnhv0T+l8DZLfE/MP3FoFvS5D8MzuyPm3DDv7JkhGyvzuG/tzhzRIRc0b9Ovv3/0z7mv6/03qhPLdC/m4CT/dDN4b9dwjU5VCQBQBBJX1ntCv0/9GsWtZesy79baTkvlCzjv1mjYgEz++S/oW6KnOQW8b9KoilqByXLv6W2KnGYjeS/SmaKz3Vx9z+BZB5yxGHwP3fHN6OJVdC/dZ02ES/2478PuaBjLrXaP4/JU81pPaO/fgsikW3pzr+XlhbYZrjkv4tSn7YDbP0/f2LnFKlF9z+mJHHg/w/Sv14ILfMECOW/mfg4qYhR/b+OP+RQDCACwOpb9yNs09C/1fbPpJjB5L9pN2WOVZ3wv3hHy9nxIve/URlzO/Rv0r8YFturGCTmv1d1/KKR8QPA8gsy9qzSB8CfHRX3t6fSvzzFCT/Qg+a/EYStnrzV9r/2QJqI7Lb9v/YEIrTDINW/LbFE4JPi5r/7kQEs5fEDQHunnf4GeQBAooj9BX7L2L+oPOc8Uzzpv+ydYY2SSAfAL4HK6CRTB0BH3yUkWpDZv2wvsfFmQ+i/Ik0Yzruh6T8fM3LoGoDUP3oSeovukti/S/ycXKkd6r9rEv+7UWcHQCRIQe/GfwNAa36Abk+y2b9BLWR4ssrpv9KT87qa0bM/FTyktw823L8WyyI/BbLgv4hlM1gubOq/DizMp9Ki6r8b5ckdjVrzv5NVbYtSON+/BBqJ+C6O7L/dUBFqgyXYv00Wh18r7+q/7RAy9h8/4L8W8t/TUc3rv4RM5DKx3wDAfvWIj94aBcBsc1IetODgv3oY0nYIW+y/oGcTFF54AUDkJqS/FKX6PwzNxsC7AOC/ltfN1PUC7L+5Wrz/zHnzP6688w2rNOc/YeV9neCo4b9nlSHXANfuvw9RsxKjY/s/1V8GteXE8j+1C8NdDcfiv2wlcW3YZO+/IOywaA7Q8b9bFP+4Tg36v4GTTeNZi+O/9t/ywdRi77+tRc3yFR7eP2bkcHXJkLO//ITc9SjT4r+qoBf2J0nwv2YHKoswwfm/iQcLspCjAcCb6wCzCvXkvwXv9rkMT/C/YkuwYAMXBMApCNUai9kIwMORhtNuJ+e/BVt01fKF8L+ZqWEfvIjsP6h693QZYNk/WyOTkB2i5b8of+GtdSDxvwpaaulDSwVADMQAX+lOAECEHWF8XNPmv1cr/B+VnvG/XyFG6opcCMD/mtR32/UEQP+2XEF3hui/ulBTjAt88r/imfCfRP+yP9zbvtc8XeO/TZuKJD5G6b/MaTExyXzyvxiTQeElXOO/rbJRQVGN9L/z0wR2g9DqvxOqKRxEX/O/FDGCEei99j9x8zV4VYTmP2lzCnsYk+u/l6ELZ9tg878pRXacaDT/v3k6GZRqoQXAVB67LiP56r94+LDK0Sn0vwO6pZ9b7wFAvK0nKVcc9j8+U/hCvyruv6QMsuuLQ/W/FPhKFYv46j8MyxaDTOW/v9L18g1caO2/vebfvctE9b/7GD8ZrF3xv3gx1AR9bQDAuMEtsM4c77+SabgA2nj0v5xKFIwxsATArKNSBaKsB0Cjara6ozTwv33ArMz7sfa/dF2U0FcWCcDxL357DJX/P69pJmt7c/G/quJYWJZl+L/YntVJlnrSP4sRLzXM+fe/46uU8w3c8r+q4lhYlmX4v85lu5+QRwRAsI0H/WU8479jaeZNtj/zv6riWFiWZfi/sI0H/WU847/OZbufkEcEQHAoPUBrnss/9exKzDtFtT88wM8kax+gP9OqeKeAYog/MW0ItiZvcj+ph+smvt5bP2lCaV5dEUU/StaUmQDaLz+kK9y22BMYP0O3whZuMwI/IIbgZGWE6z7UkjYaEM3UPuezxwa9cr8+LybxRMnFpz6E1N8DbPiRPsYjySMvK3s+//////8fAAj//////zMQCP////9/MiAI/////28yMAj/////YzJACP///z9iMlAI////N2IyYAj///8zYjJwCP//vzNiMoAI//+rM2IykAj/f6szYjKgCP8PqzNiMrAI/wOrM2IywAi/A6szYjLQCJ8DqzNiMuAImQOrM2Iy8Aj//////z8PCP//////Kx8I/////38pLwj/////Pyk/CP////85KU8I////PzgpXwj///8POClvCP///w44KX8I//8fDjgpjwj//w8OOCmfCP9/DQ44Ka8I/w8NDjgpvwj/DQ0OOCnPCP8MDQ44Kd8IxwwNDjgp7wjEDA0OOCn/CAcAAAAHAAAAAQAAAAIAAAAEAAAAAwAAAAAAAAAAAAAABwAAAAMAAAABAAAAAgAAAAUAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAACAAAAAQAAAAMAAAAOAAAABgAAAAsAAAACAAAABwAAAAEAAAAYAAAABQAAAAoAAAABAAAABgAAAAAAAAAmAAAABwAAAAwAAAADAAAACAAAAAIAAAAxAAAACQAAAA4AAAAAAAAABQAAAAQAAAA6AAAACAAAAA0AAAAEAAAACQAAAAMAAAA/AAAACwAAAAYAAAAPAAAACgAAABAAAABIAAAADAAAAAcAAAAQAAAACwAAABEAAABTAAAACgAAAAUAAAATAAAADgAAAA8AAABhAAAADQAAAAgAAAARAAAADAAAABIAAABrAAAADgAAAAkAAAASAAAADQAAABMAAAB1AAAADwAAABMAAAARAAAAEgAAABAAAAAGAAAAAgAAAAMAAAAFAAAABAAAAAAAAAAAAAAAAAAAAAYAAAACAAAAAwAAAAEAAAAFAAAABAAAAAAAAAAAAAAABwAAAAUAAAADAAAABAAAAAEAAAAAAAAAAgAAAAAAAAACAAAAAwAAAAEAAAAFAAAABAAAAAYAAAAAAAAAAAAAABgtRFT7Ifk/GC1EVPsh+b8YLURU+yEJQBgtRFT7IQnAYWxnb3MuYwBoM05laWdoYm9yUm90YXRpb25zAGNvb3JkaWprLmMAX3VwQXA3Q2hlY2tlZABfdXBBcDdyQ2hlY2tlZABkaXJlY3RlZEVkZ2UuYwBkaXJlY3RlZEVkZ2VUb0JvdW5kYXJ5AGFkamFjZW50RmFjZURpclt0bXBGaWprLmZhY2VdW2ZpamsuZmFjZV0gPT0gS0kAZmFjZWlqay5jAF9mYWNlSWprUGVudFRvQ2VsbEJvdW5kYXJ5AGFkamFjZW50RmFjZURpcltjZW50ZXJJSksuZmFjZV1bZmFjZTJdID09IEtJAF9mYWNlSWprVG9DZWxsQm91bmRhcnkAaDNJbmRleC5jAGNvbXBhY3RDZWxscwBsYXRMbmdUb0NlbGwAY2VsbFRvQ2hpbGRQb3MAdmFsaWRhdGVDaGlsZFBvcwBsYXRMbmcuYwBjZWxsQXJlYVJhZHMyAHBvbHlnb24tPm5leHQgPT0gTlVMTABsaW5rZWRHZW8uYwBhZGROZXdMaW5rZWRQb2x5Z29uAG5leHQgIT0gTlVMTABsb29wICE9IE5VTEwAYWRkTmV3TGlua2VkTG9vcABwb2x5Z29uLT5maXJzdCA9PSBOVUxMAGFkZExpbmtlZExvb3AAY29vcmQgIT0gTlVMTABhZGRMaW5rZWRDb29yZABsb29wLT5maXJzdCA9PSBOVUxMAGlubmVyTG9vcHMgIT0gTlVMTABub3JtYWxpemVNdWx0aVBvbHlnb24AYmJveGVzICE9IE5VTEwAY2FuZGlkYXRlcyAhPSBOVUxMAGZpbmRQb2x5Z29uRm9ySG9sZQBjYW5kaWRhdGVCQm94ZXMgIT0gTlVMTAByZXZEaXIgIT0gSU5WQUxJRF9ESUdJVABsb2NhbGlqLmMAY2VsbFRvTG9jYWxJamsAYmFzZUNlbGwgIT0gb3JpZ2luQmFzZUNlbGwAIShvcmlnaW5PblBlbnQgJiYgaW5kZXhPblBlbnQpAGJhc2VDZWxsID09IG9yaWdpbkJhc2VDZWxsAGJhc2VDZWxsICE9IElOVkFMSURfQkFTRV9DRUxMAGxvY2FsSWprVG9DZWxsACFfaXNCYXNlQ2VsbFBlbnRhZ29uKGJhc2VDZWxsKQBiYXNlQ2VsbFJvdGF0aW9ucyA+PSAwAGdyaWRQYXRoQ2VsbHMAcG9seWZpbGwuYwBpdGVyU3RlcFBvbHlnb25Db21wYWN0ADAAdmVydGV4LmMAdmVydGV4Um90YXRpb25zAGNlbGxUb1ZlcnRleABncmFwaC0+YnVja2V0cyAhPSBOVUxMAHZlcnRleEdyYXBoLmMAaW5pdFZlcnRleEdyYXBoAG5vZGUgIT0gTlVMTABhZGRWZXJ0ZXhOb2Rl";
  var Z0 = 28640;
  function Fr(W, K, rA, Y) {
    Gi("Assertion failed: " + it(W) + ", at: " + [K ? it(K) : "unknown filename", rA, Y ? it(Y) : "unknown function"]);
  }
  function F0() {
    return $A.length;
  }
  function Yo(W, K, rA) {
    Be.set(Be.subarray(K, K + rA), W);
  }
  function Nr(W) {
    return c.___errno_location && (jA[c.___errno_location() >> 2] = W), W;
  }
  function Gr(W) {
    Gi("OOM");
  }
  function Vo(W) {
    try {
      var K = new ArrayBuffer(W);
      return K.byteLength != W ? void 0 : (new Int8Array(K).set($A), Wr(K), _A(K), 1);
    } catch {
    }
  }
  function Hr(W) {
    var K = F0(), rA = 16777216, Y = 2147483648 - rA;
    if (W > Y)
      return !1;
    for (var A = 16777216, w = Math.max(K, A); w < W; )
      w <= 536870912 ? w = ht(2 * w, rA) : w = Math.min(ht((3 * w + 2147483648) / 4, rA), Y);
    var GA = Vo(w);
    return !!GA;
  }
  var N0 = typeof atob == "function" ? atob : function(W) {
    var K = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", rA = "", Y, A, w, GA, At, xt, CA, HA = 0;
    W = W.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do
      GA = K.indexOf(W.charAt(HA++)), At = K.indexOf(W.charAt(HA++)), xt = K.indexOf(W.charAt(HA++)), CA = K.indexOf(W.charAt(HA++)), Y = GA << 2 | At >> 4, A = (At & 15) << 4 | xt >> 2, w = (xt & 3) << 6 | CA, rA = rA + String.fromCharCode(Y), xt !== 64 && (rA = rA + String.fromCharCode(A)), CA !== 64 && (rA = rA + String.fromCharCode(w));
    while (HA < W.length);
    return rA;
  };
  function Ur(W) {
    try {
      for (var K = N0(W), rA = new Uint8Array(K.length), Y = 0; Y < K.length; ++Y)
        rA[Y] = K.charCodeAt(Y);
      return rA;
    } catch {
      throw new Error("Converting base64 string to bytes failed.");
    }
  }
  function G0(W) {
    if (Q0(W))
      return Ur(W.slice($n.length));
  }
  var _n = {
    Math,
    Int8Array,
    Int32Array,
    Uint8Array,
    Float32Array,
    Float64Array
  }, Ko = {
    b: iA,
    c: eA,
    d: Fr,
    e: Nr,
    f: F0,
    g: Yo,
    h: Hr,
    i: Gr,
    o: Z0,
    p: vA
  }, X = (
    /** @suppress {uselessCode} */
    (function(W, K, rA) {
      "almost asm";
      var Y = new W.Int8Array(rA), A = new W.Int32Array(rA);
      new W.Uint8Array(rA), new W.Float32Array(rA);
      var w = new W.Float64Array(rA), GA = K.o | 0, At = K.p | 0, xt = W.Math.floor, CA = W.Math.abs, HA = W.Math.sqrt, $t = W.Math.pow, YA = W.Math.cos, DA = W.Math.sin, fe = W.Math.tan, t0 = W.Math.acos, Jo = W.Math.asin, e0 = W.Math.atan, he = W.Math.atan2, ei = W.Math.ceil, Fe = W.Math.imul, W0 = W.Math.min, Xo = W.Math.max, ii = W.Math.clz32, EA = K.b, P = K.c, pA = K.d, j0 = K.e, qr = K.f, dn = K.g, JA = K.h, dt = K.i, y = 28656;
      function Hi(e) {
        return Y = new Int8Array(e), A = new Int32Array(e), w = new Float64Array(e), rA = e, !0;
      }
      function Ui(e) {
        e = e | 0;
        var t = 0;
        return t = y, y = y + e | 0, y = y + 15 & -16, t | 0;
      }
      function Y0() {
        return y | 0;
      }
      function zA(e) {
        e = e | 0, y = e;
      }
      function yt(e, t) {
        e = e | 0, y = e;
      }
      function V0(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0;
        return (e | 0) < 0 ? (t = 2, t | 0) : (e | 0) > 13780509 ? (t = Bn(15, t) | 0, t | 0) : (n = ((e | 0) < 0) << 31 >> 31, o = Gt(e | 0, n | 0, 3, 0) | 0, r = P() | 0, n = cA(e | 0, n | 0, 1, 0) | 0, n = Gt(o | 0, r | 0, n | 0, P() | 0) | 0, n = cA(n | 0, P() | 0, 1, 0) | 0, e = P() | 0, A[t >> 2] = n, A[t + 4 >> 2] = e, t = 0, t | 0);
      }
      function mn(e, t, n, r) {
        return e = e | 0, t = t | 0, n = n | 0, r = r | 0, Ae(e, t, n, r, 0) | 0;
      }
      function Ae(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0;
        if (h = y, y = y + 16 | 0, l = h, !(Jr(e, t, n, r, o) | 0))
          return r = 0, y = h, r | 0;
        do
          if ((n | 0) >= 0) {
            if ((n | 0) > 13780509) {
              if (a = Bn(15, l) | 0, a | 0)
                break;
              f = l, l = A[f >> 2] | 0, f = A[f + 4 >> 2] | 0;
            } else
              a = ((n | 0) < 0) << 31 >> 31, m = Gt(n | 0, a | 0, 3, 0) | 0, f = P() | 0, a = cA(n | 0, a | 0, 1, 0) | 0, a = Gt(m | 0, f | 0, a | 0, P() | 0) | 0, a = cA(a | 0, P() | 0, 1, 0) | 0, f = P() | 0, A[l >> 2] = a, A[l + 4 >> 2] = f, l = a;
            if (tn(r | 0, 0, l << 3 | 0) | 0, o | 0) {
              tn(o | 0, 0, l << 2 | 0) | 0, a = te(e, t, n, r, o, l, f, 0) | 0;
              break;
            }
            a = ve(l, 4) | 0, a ? (m = te(e, t, n, r, a, l, f, 0) | 0, dA(a), a = m) : a = 13;
          } else
            a = 2;
        while (!1);
        return m = a, y = h, m | 0;
      }
      function Jr(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0;
        if (D = y, y = y + 16 | 0, E = D, x = D + 8 | 0, B = E, A[B >> 2] = e, A[B + 4 >> 2] = t, (n | 0) < 0)
          return x = 2, y = D, x | 0;
        if (a = r, A[a >> 2] = e, A[a + 4 >> 2] = t, a = (o | 0) != 0, a && (A[o >> 2] = 0), nt(e, t) | 0)
          return x = 9, y = D, x | 0;
        A[x >> 2] = 0;
        A: do
          if ((n | 0) >= 1)
            if (a)
              for (p = 1, m = 0, k = 0, B = 1, a = e; ; ) {
                if (!(m | k)) {
                  if (a = ct(a, t, 4, x, E) | 0, a | 0)
                    break A;
                  if (t = E, a = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, nt(a, t) | 0) {
                    a = 9;
                    break A;
                  }
                }
                if (a = ct(a, t, A[26800 + (k << 2) >> 2] | 0, x, E) | 0, a | 0)
                  break A;
                if (t = E, a = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, e = r + (p << 3) | 0, A[e >> 2] = a, A[e + 4 >> 2] = t, A[o + (p << 2) >> 2] = B, e = m + 1 | 0, l = (e | 0) == (B | 0), f = k + 1 | 0, h = (f | 0) == 6, nt(a, t) | 0) {
                  a = 9;
                  break A;
                }
                if (B = B + (h & l & 1) | 0, (B | 0) > (n | 0)) {
                  a = 0;
                  break;
                } else
                  p = p + 1 | 0, m = l ? 0 : e, k = l ? h ? 0 : f : k;
              }
            else
              for (p = 1, m = 0, k = 0, B = 1, a = e; ; ) {
                if (!(m | k)) {
                  if (a = ct(a, t, 4, x, E) | 0, a | 0)
                    break A;
                  if (t = E, a = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, nt(a, t) | 0) {
                    a = 9;
                    break A;
                  }
                }
                if (a = ct(a, t, A[26800 + (k << 2) >> 2] | 0, x, E) | 0, a | 0)
                  break A;
                if (t = E, a = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, e = r + (p << 3) | 0, A[e >> 2] = a, A[e + 4 >> 2] = t, e = m + 1 | 0, l = (e | 0) == (B | 0), f = k + 1 | 0, h = (f | 0) == 6, nt(a, t) | 0) {
                  a = 9;
                  break A;
                }
                if (B = B + (h & l & 1) | 0, (B | 0) > (n | 0)) {
                  a = 0;
                  break;
                } else
                  p = p + 1 | 0, m = l ? 0 : e, k = l ? h ? 0 : f : k;
              }
          else
            a = 0;
        while (!1);
        return x = a, y = D, x | 0;
      }
      function te(e, t, n, r, o, a, l, f) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0, l = l | 0, f = f | 0;
        var h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0;
        if (D = y, y = y + 16 | 0, E = D + 8 | 0, x = D, h = w0(e | 0, t | 0, a | 0, l | 0) | 0, p = P() | 0, k = r + (h << 3) | 0, z = k, H = A[z >> 2] | 0, z = A[z + 4 >> 2] | 0, m = (H | 0) == (e | 0) & (z | 0) == (t | 0), !((H | 0) == 0 & (z | 0) == 0 | m))
          do
            h = cA(h | 0, p | 0, 1, 0) | 0, h = g0(h | 0, P() | 0, a | 0, l | 0) | 0, p = P() | 0, k = r + (h << 3) | 0, H = k, z = A[H >> 2] | 0, H = A[H + 4 >> 2] | 0, m = (z | 0) == (e | 0) & (H | 0) == (t | 0);
          while (!((z | 0) == 0 & (H | 0) == 0 | m));
        if (h = o + (h << 2) | 0, m && (A[h >> 2] | 0) <= (f | 0) || (H = k, A[H >> 2] = e, A[H + 4 >> 2] = t, A[h >> 2] = f, (f | 0) >= (n | 0)))
          return H = 0, y = D, H | 0;
        switch (m = f + 1 | 0, A[E >> 2] = 0, h = ct(e, t, 2, E, x) | 0, h | 0) {
          case 9: {
            B = 9;
            break;
          }
          case 0: {
            h = x, h = te(A[h >> 2] | 0, A[h + 4 >> 2] | 0, n, r, o, a, l, m) | 0, h || (B = 9);
            break;
          }
        }
        A: do
          if ((B | 0) == 9) {
            switch (A[E >> 2] = 0, h = ct(e, t, 3, E, x) | 0, h | 0) {
              case 9:
                break;
              case 0: {
                if (h = x, h = te(A[h >> 2] | 0, A[h + 4 >> 2] | 0, n, r, o, a, l, m) | 0, h | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[E >> 2] = 0, h = ct(e, t, 1, E, x) | 0, h | 0) {
              case 9:
                break;
              case 0: {
                if (h = x, h = te(A[h >> 2] | 0, A[h + 4 >> 2] | 0, n, r, o, a, l, m) | 0, h | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[E >> 2] = 0, h = ct(e, t, 5, E, x) | 0, h | 0) {
              case 9:
                break;
              case 0: {
                if (h = x, h = te(A[h >> 2] | 0, A[h + 4 >> 2] | 0, n, r, o, a, l, m) | 0, h | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[E >> 2] = 0, h = ct(e, t, 4, E, x) | 0, h | 0) {
              case 9:
                break;
              case 0: {
                if (h = x, h = te(A[h >> 2] | 0, A[h + 4 >> 2] | 0, n, r, o, a, l, m) | 0, h | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            switch (A[E >> 2] = 0, h = ct(e, t, 6, E, x) | 0, h | 0) {
              case 9:
                break;
              case 0: {
                if (h = x, h = te(A[h >> 2] | 0, A[h + 4 >> 2] | 0, n, r, o, a, l, m) | 0, h | 0)
                  break A;
                break;
              }
              default:
                break A;
            }
            return H = 0, y = D, H | 0;
          }
        while (!1);
        return H = h, y = D, H | 0;
      }
      function ct(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0;
        if (n >>> 0 > 6)
          return o = 1, o | 0;
        if (k = (A[r >> 2] | 0) % 6 | 0, A[r >> 2] = k, (k | 0) > 0) {
          a = 0;
          do
            n = Mi(n) | 0, a = a + 1 | 0;
          while ((a | 0) < (A[r >> 2] | 0));
        }
        if (k = q(e | 0, t | 0, 45) | 0, P() | 0, p = k & 127, p >>> 0 > 121)
          return o = 5, o | 0;
        h = gt(e, t) | 0, a = q(e | 0, t | 0, 52) | 0, P() | 0, a = a & 15;
        A: do
          if (!a)
            m = 8;
          else {
            for (; ; ) {
              if (l = (15 - a | 0) * 3 | 0, f = q(e | 0, t | 0, l | 0) | 0, P() | 0, f = f & 7, (f | 0) == 7) {
                t = 5;
                break;
              }
              if (x = (ne(a) | 0) == 0, a = a + -1 | 0, B = $(7, 0, l | 0) | 0, t = t & ~(P() | 0), E = $(A[(x ? 432 : 16) + (f * 28 | 0) + (n << 2) >> 2] | 0, 0, l | 0) | 0, l = P() | 0, n = A[(x ? 640 : 224) + (f * 28 | 0) + (n << 2) >> 2] | 0, e = E | e & ~B, t = l | t, !n) {
                n = 0;
                break A;
              }
              if (!a) {
                m = 8;
                break A;
              }
            }
            return t | 0;
          }
        while (!1);
        (m | 0) == 8 && (x = A[848 + (p * 28 | 0) + (n << 2) >> 2] | 0, E = $(x | 0, 0, 45) | 0, e = E | e, t = P() | 0 | t & -1040385, n = A[4272 + (p * 28 | 0) + (n << 2) >> 2] | 0, (x & 127 | 0) == 127 && (x = $(A[848 + (p * 28 | 0) + 20 >> 2] | 0, 0, 45) | 0, t = P() | 0 | t & -1040385, n = A[4272 + (p * 28 | 0) + 20 >> 2] | 0, e = me(x | e, t) | 0, t = P() | 0, A[r >> 2] = (A[r >> 2] | 0) + 1)), f = q(e | 0, t | 0, 45) | 0, P() | 0, f = f & 127;
        A: do
          if (lt(f) | 0) {
            t: do
              if ((gt(e, t) | 0) == 1) {
                if ((p | 0) != (f | 0))
                  if (TA(f, A[7696 + (p * 28 | 0) >> 2] | 0) | 0) {
                    e = Me(e, t) | 0, l = 1, t = P() | 0;
                    break;
                  } else
                    pA(27795, 26864, 533, 26872);
                switch (h | 0) {
                  case 3: {
                    e = me(e, t) | 0, t = P() | 0, A[r >> 2] = (A[r >> 2] | 0) + 1, l = 0;
                    break t;
                  }
                  case 5: {
                    e = Me(e, t) | 0, t = P() | 0, A[r >> 2] = (A[r >> 2] | 0) + 5, l = 0;
                    break t;
                  }
                  case 0:
                    return x = 9, x | 0;
                  default:
                    return x = 1, x | 0;
                }
              } else
                l = 0;
            while (!1);
            if ((n | 0) > 0) {
              a = 0;
              do
                e = mr(e, t) | 0, t = P() | 0, a = a + 1 | 0;
              while ((a | 0) != (n | 0));
            }
            if ((p | 0) != (f | 0)) {
              if (!(vn(f) | 0)) {
                if ((l | 0) != 0 | (gt(e, t) | 0) != 5)
                  break;
                A[r >> 2] = (A[r >> 2] | 0) + 1;
                break;
              }
              switch (k & 127) {
                case 8:
                case 118:
                  break A;
              }
              (gt(e, t) | 0) != 3 && (A[r >> 2] = (A[r >> 2] | 0) + 1);
            }
          } else if ((n | 0) > 0) {
            a = 0;
            do
              e = me(e, t) | 0, t = P() | 0, a = a + 1 | 0;
            while ((a | 0) != (n | 0));
          }
        while (!1);
        return A[r >> 2] = ((A[r >> 2] | 0) + n | 0) % 6 | 0, x = o, A[x >> 2] = e, A[x + 4 >> 2] = t, x = 0, x | 0;
      }
      function kt(e, t, n, r) {
        return e = e | 0, t = t | 0, n = n | 0, r = r | 0, _i(e, t, n, r) | 0 ? (tn(r | 0, 0, n * 48 | 0) | 0, r = pn(e, t, n, r) | 0, r | 0) : (r = 0, r | 0);
      }
      function _i(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0;
        if (x = y, y = y + 16 | 0, B = x, E = x + 8 | 0, k = B, A[k >> 2] = e, A[k + 4 >> 2] = t, (n | 0) < 0)
          return E = 2, y = x, E | 0;
        if (!n)
          return E = r, A[E >> 2] = e, A[E + 4 >> 2] = t, E = 0, y = x, E | 0;
        A[E >> 2] = 0;
        A: do
          if (nt(e, t) | 0)
            e = 9;
          else {
            o = 0, k = e;
            do {
              if (e = ct(k, t, 4, E, B) | 0, e | 0)
                break A;
              if (t = B, k = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, o = o + 1 | 0, nt(k, t) | 0) {
                e = 9;
                break A;
              }
            } while ((o | 0) < (n | 0));
            p = r, A[p >> 2] = k, A[p + 4 >> 2] = t, p = n + -1 | 0, m = 0, e = 1;
            do {
              if (o = 26800 + (m << 2) | 0, (m | 0) == 5)
                for (l = A[o >> 2] | 0, a = 0, o = e; ; ) {
                  if (e = B, e = ct(A[e >> 2] | 0, A[e + 4 >> 2] | 0, l, E, B) | 0, e | 0)
                    break A;
                  if ((a | 0) != (p | 0))
                    if (h = B, f = A[h >> 2] | 0, h = A[h + 4 >> 2] | 0, e = r + (o << 3) | 0, A[e >> 2] = f, A[e + 4 >> 2] = h, !(nt(f, h) | 0))
                      e = o + 1 | 0;
                    else {
                      e = 9;
                      break A;
                    }
                  else
                    e = o;
                  if (a = a + 1 | 0, (a | 0) >= (n | 0))
                    break;
                  o = e;
                }
              else
                for (l = B, h = A[o >> 2] | 0, f = 0, o = e, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0; ; ) {
                  if (e = ct(a, l, h, E, B) | 0, e | 0)
                    break A;
                  if (l = B, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, e = r + (o << 3) | 0, A[e >> 2] = a, A[e + 4 >> 2] = l, e = o + 1 | 0, nt(a, l) | 0) {
                    e = 9;
                    break A;
                  }
                  if (f = f + 1 | 0, (f | 0) >= (n | 0))
                    break;
                  o = e;
                }
              m = m + 1 | 0;
            } while (m >>> 0 < 6);
            e = B, e = (k | 0) == (A[e >> 2] | 0) && (t | 0) == (A[e + 4 >> 2] | 0) ? 0 : 9;
          }
        while (!1);
        return E = e, y = x, E | 0;
      }
      function pn(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0;
        if (k = y, y = y + 16 | 0, l = k, !n)
          return A[r >> 2] = e, A[r + 4 >> 2] = t, r = 0, y = k, r | 0;
        do
          if ((n | 0) >= 0) {
            if ((n | 0) > 13780509) {
              if (o = Bn(15, l) | 0, o | 0)
                break;
              a = l, o = A[a >> 2] | 0, a = A[a + 4 >> 2] | 0;
            } else
              o = ((n | 0) < 0) << 31 >> 31, p = Gt(n | 0, o | 0, 3, 0) | 0, a = P() | 0, o = cA(n | 0, o | 0, 1, 0) | 0, o = Gt(p | 0, a | 0, o | 0, P() | 0) | 0, o = cA(o | 0, P() | 0, 1, 0) | 0, a = P() | 0, p = l, A[p >> 2] = o, A[p + 4 >> 2] = a;
            if (m = ve(o, 8) | 0, !m)
              o = 13;
            else {
              if (p = ve(o, 4) | 0, !p) {
                dA(m), o = 13;
                break;
              }
              if (o = te(e, t, n, m, p, o, a, 0) | 0, o | 0) {
                dA(m), dA(p);
                break;
              }
              if (t = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, (l | 0) > 0 | (l | 0) == 0 & t >>> 0 > 0) {
                o = 0, f = 0, h = 0;
                do
                  e = m + (f << 3) | 0, a = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, !((a | 0) == 0 & (e | 0) == 0) && (A[p + (f << 2) >> 2] | 0) == (n | 0) && (B = r + (o << 3) | 0, A[B >> 2] = a, A[B + 4 >> 2] = e, o = o + 1 | 0), f = cA(f | 0, h | 0, 1, 0) | 0, h = P() | 0;
                while ((h | 0) < (l | 0) | (h | 0) == (l | 0) & f >>> 0 < t >>> 0);
              }
              dA(m), dA(p), o = 0;
            }
          } else
            o = 2;
        while (!1);
        return B = o, y = k, B | 0;
      }
      function xi(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0;
        for (f = y, y = y + 16 | 0, a = f, l = f + 8 | 0, o = (nt(e, t) | 0) == 0, o = o ? 1 : 2; ; ) {
          if (A[l >> 2] = 0, m = (ct(e, t, o, l, a) | 0) == 0, h = a, m & ((A[h >> 2] | 0) == (n | 0) ? (A[h + 4 >> 2] | 0) == (r | 0) : 0)) {
            e = 4;
            break;
          }
          if (o = o + 1 | 0, o >>> 0 >= 7) {
            o = 7, e = 4;
            break;
          }
        }
        return (e | 0) == 4 ? (y = f, o | 0) : 0;
      }
      function K0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0;
        if (f = y, y = y + 48 | 0, o = f + 16 | 0, a = f + 8 | 0, l = f, n = U(n) | 0, n | 0)
          return l = n, y = f, l | 0;
        if (m = e, h = A[m + 4 >> 2] | 0, n = a, A[n >> 2] = A[m >> 2], A[n + 4 >> 2] = h, F(a, o), n = er(o, t, l) | 0, !n) {
          if (t = A[a >> 2] | 0, a = A[e + 8 >> 2] | 0, (a | 0) > 0) {
            o = A[e + 12 >> 2] | 0, n = 0;
            do
              t = (A[o + (n << 3) >> 2] | 0) + t | 0, n = n + 1 | 0;
            while ((n | 0) < (a | 0));
          }
          n = l, o = A[n >> 2] | 0, n = A[n + 4 >> 2] | 0, a = ((t | 0) < 0) << 31 >> 31, (n | 0) < (a | 0) | (n | 0) == (a | 0) & o >>> 0 < t >>> 0 ? (n = l, A[n >> 2] = t, A[n + 4 >> 2] = a, n = a) : t = o, h = cA(t | 0, n | 0, 12, 0) | 0, m = P() | 0, n = l, A[n >> 2] = h, A[n + 4 >> 2] = m, n = r, A[n >> 2] = h, A[n + 4 >> 2] = m, n = 0;
        }
        return m = n, y = f, m | 0;
      }
      function Wi(e, t, n, r, o, a, l) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0, l = l | 0;
        var f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0, LA = 0, ZA = 0, kA = 0, hA = 0, AA = 0, SA = 0, ut = 0, MA = 0, ft = 0, re = 0, ga = 0;
        if (ut = y, y = y + 64 | 0, kA = ut + 48 | 0, hA = ut + 32 | 0, AA = ut + 24 | 0, tA = ut + 8 | 0, fA = ut, h = A[e >> 2] | 0, (h | 0) <= 0)
          return SA = 0, y = ut, SA | 0;
        for (lA = e + 4 | 0, xA = kA + 8 | 0, LA = hA + 8 | 0, ZA = tA + 8 | 0, f = 0, Q = 0; ; ) {
          m = A[lA >> 2] | 0, R = m + (Q << 4) | 0, A[kA >> 2] = A[R >> 2], A[kA + 4 >> 2] = A[R + 4 >> 2], A[kA + 8 >> 2] = A[R + 8 >> 2], A[kA + 12 >> 2] = A[R + 12 >> 2], (Q | 0) == (h + -1 | 0) ? (A[hA >> 2] = A[m >> 2], A[hA + 4 >> 2] = A[m + 4 >> 2], A[hA + 8 >> 2] = A[m + 8 >> 2], A[hA + 12 >> 2] = A[m + 12 >> 2]) : (R = m + (Q + 1 << 4) | 0, A[hA >> 2] = A[R >> 2], A[hA + 4 >> 2] = A[R + 4 >> 2], A[hA + 8 >> 2] = A[R + 8 >> 2], A[hA + 12 >> 2] = A[R + 12 >> 2]), h = As(kA, hA, r, AA) | 0;
          A: do
            if (h)
              m = 0, f = h;
            else if (h = AA, m = A[h >> 2] | 0, h = A[h + 4 >> 2] | 0, (h | 0) > 0 | (h | 0) == 0 & m >>> 0 > 0) {
              H = 0, R = 0;
              t: for (; ; ) {
                if (ft = 1 / (+(m >>> 0) + 4294967296 * +(h | 0)), ga = +w[kA >> 3], h = Nt(m | 0, h | 0, H | 0, R | 0) | 0, re = +(h >>> 0) + 4294967296 * +(P() | 0), MA = +(H >>> 0) + 4294967296 * +(R | 0), w[tA >> 3] = ft * (ga * re) + ft * (+w[hA >> 3] * MA), w[ZA >> 3] = ft * (+w[xA >> 3] * re) + ft * (+w[LA >> 3] * MA), h = kn(tA, r, fA) | 0, h | 0) {
                  f = h;
                  break;
                }
                z = fA, D = A[z >> 2] | 0, z = A[z + 4 >> 2] | 0, B = w0(D | 0, z | 0, t | 0, n | 0) | 0, p = P() | 0, h = l + (B << 3) | 0, k = h, m = A[k >> 2] | 0, k = A[k + 4 >> 2] | 0;
                e: do
                  if ((m | 0) == 0 & (k | 0) == 0)
                    I = h, SA = 16;
                  else
                    for (E = 0, x = 0; ; ) {
                      if ((E | 0) > (n | 0) | (E | 0) == (n | 0) & x >>> 0 > t >>> 0) {
                        f = 1;
                        break t;
                      }
                      if ((m | 0) == (D | 0) & (k | 0) == (z | 0))
                        break e;
                      if (h = cA(B | 0, p | 0, 1, 0) | 0, B = g0(h | 0, P() | 0, t | 0, n | 0) | 0, p = P() | 0, x = cA(x | 0, E | 0, 1, 0) | 0, E = P() | 0, h = l + (B << 3) | 0, k = h, m = A[k >> 2] | 0, k = A[k + 4 >> 2] | 0, (m | 0) == 0 & (k | 0) == 0) {
                        I = h, SA = 16;
                        break;
                      }
                    }
                while (!1);
                if ((SA | 0) == 16 && (SA = 0, !((D | 0) == 0 & (z | 0) == 0)) && (x = I, A[x >> 2] = D, A[x + 4 >> 2] = z, x = a + (A[o >> 2] << 3) | 0, A[x >> 2] = D, A[x + 4 >> 2] = z, x = o, x = cA(A[x >> 2] | 0, A[x + 4 >> 2] | 0, 1, 0) | 0, D = P() | 0, z = o, A[z >> 2] = x, A[z + 4 >> 2] = D), H = cA(H | 0, R | 0, 1, 0) | 0, R = P() | 0, h = AA, m = A[h >> 2] | 0, h = A[h + 4 >> 2] | 0, !((h | 0) > (R | 0) | (h | 0) == (R | 0) & m >>> 0 > H >>> 0)) {
                  m = 1;
                  break A;
                }
              }
              m = 0;
            } else
              m = 1;
          while (!1);
          if (Q = Q + 1 | 0, !m) {
            SA = 21;
            break;
          }
          if (h = A[e >> 2] | 0, (Q | 0) >= (h | 0)) {
            f = 0, SA = 21;
            break;
          }
        }
        return (SA | 0) == 21 ? (y = ut, f | 0) : 0;
      }
      function q0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0, LA = 0, ZA = 0, kA = 0, hA = 0, AA = 0, SA = 0, ut = 0, MA = 0, ft = 0, re = 0;
        if (re = y, y = y + 112 | 0, SA = re + 80 | 0, h = re + 72 | 0, ut = re, MA = re + 56 | 0, o = U(n) | 0, o | 0)
          return ft = o, y = re, ft | 0;
        if (m = e + 8 | 0, ft = wi((A[m >> 2] << 5) + 32 | 0) | 0, !ft)
          return ft = 13, y = re, ft | 0;
        if (J(e, ft), o = U(n) | 0, !o) {
          if (hA = e, AA = A[hA + 4 >> 2] | 0, o = h, A[o >> 2] = A[hA >> 2], A[o + 4 >> 2] = AA, F(h, SA), o = er(SA, t, ut) | 0, o)
            hA = 0, AA = 0;
          else {
            if (o = A[h >> 2] | 0, a = A[m >> 2] | 0, (a | 0) > 0) {
              l = A[e + 12 >> 2] | 0, n = 0;
              do
                o = (A[l + (n << 3) >> 2] | 0) + o | 0, n = n + 1 | 0;
              while ((n | 0) != (a | 0));
              n = o;
            } else
              n = o;
            o = ut, a = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, l = ((n | 0) < 0) << 31 >> 31, (o | 0) < (l | 0) | (o | 0) == (l | 0) & a >>> 0 < n >>> 0 ? (o = ut, A[o >> 2] = n, A[o + 4 >> 2] = l, o = l) : n = a, hA = cA(n | 0, o | 0, 12, 0) | 0, AA = P() | 0, o = ut, A[o >> 2] = hA, A[o + 4 >> 2] = AA, o = 0;
          }
          if (!o) {
            if (n = ve(hA, 8) | 0, !n)
              return dA(ft), ft = 13, y = re, ft | 0;
            if (f = ve(hA, 8) | 0, !f)
              return dA(ft), dA(n), ft = 13, y = re, ft | 0;
            ZA = SA, A[ZA >> 2] = 0, A[ZA + 4 >> 2] = 0, ZA = e, kA = A[ZA + 4 >> 2] | 0, o = h, A[o >> 2] = A[ZA >> 2], A[o + 4 >> 2] = kA, o = Wi(h, hA, AA, t, SA, n, f) | 0;
            A: do
              if (o)
                dA(n), dA(f), dA(ft);
              else {
                t: do
                  if ((A[m >> 2] | 0) > 0) {
                    for (l = e + 12 | 0, a = 0; o = Wi((A[l >> 2] | 0) + (a << 3) | 0, hA, AA, t, SA, n, f) | 0, a = a + 1 | 0, !(o | 0); )
                      if ((a | 0) >= (A[m >> 2] | 0))
                        break t;
                    dA(n), dA(f), dA(ft);
                    break A;
                  }
                while (!1);
                (AA | 0) > 0 | (AA | 0) == 0 & hA >>> 0 > 0 && tn(f | 0, 0, hA << 3 | 0) | 0, kA = SA, ZA = A[kA + 4 >> 2] | 0;
                t: do
                  if ((ZA | 0) > 0 | (ZA | 0) == 0 & (A[kA >> 2] | 0) >>> 0 > 0) {
                    lA = n, xA = f, LA = n, ZA = f, kA = n, o = n, I = n, tA = f, fA = f, n = f;
                    e: for (; ; ) {
                      for (z = 0, H = 0, R = 0, Q = 0, a = 0, l = 0; ; ) {
                        f = ut, h = f + 56 | 0;
                        do
                          A[f >> 2] = 0, f = f + 4 | 0;
                        while ((f | 0) < (h | 0));
                        if (t = lA + (z << 3) | 0, m = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, Jr(m, t, 1, ut, 0) | 0) {
                          f = ut, h = f + 56 | 0;
                          do
                            A[f >> 2] = 0, f = f + 4 | 0;
                          while ((f | 0) < (h | 0));
                          f = ve(7, 4) | 0, f | 0 && (te(m, t, 1, ut, f, 7, 0, 0) | 0, dA(f));
                        }
                        for (D = 0; ; ) {
                          x = ut + (D << 3) | 0, E = A[x >> 2] | 0, x = A[x + 4 >> 2] | 0;
                          i: do
                            if ((E | 0) == 0 & (x | 0) == 0)
                              f = a, h = l;
                            else {
                              if (p = w0(E | 0, x | 0, hA | 0, AA | 0) | 0, m = P() | 0, f = r + (p << 3) | 0, t = f, h = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, !((h | 0) == 0 & (t | 0) == 0)) {
                                k = 0, B = 0;
                                do {
                                  if ((k | 0) > (AA | 0) | (k | 0) == (AA | 0) & B >>> 0 > hA >>> 0)
                                    break e;
                                  if ((h | 0) == (E | 0) & (t | 0) == (x | 0)) {
                                    f = a, h = l;
                                    break i;
                                  }
                                  f = cA(p | 0, m | 0, 1, 0) | 0, p = g0(f | 0, P() | 0, hA | 0, AA | 0) | 0, m = P() | 0, B = cA(B | 0, k | 0, 1, 0) | 0, k = P() | 0, f = r + (p << 3) | 0, t = f, h = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0;
                                } while (!((h | 0) == 0 & (t | 0) == 0));
                              }
                              if ((E | 0) == 0 & (x | 0) == 0) {
                                f = a, h = l;
                                break;
                              }
                              Ge(E, x, MA) | 0, sA(e, ft, MA) | 0 && (B = cA(a | 0, l | 0, 1, 0) | 0, l = P() | 0, k = f, A[k >> 2] = E, A[k + 4 >> 2] = x, a = xA + (a << 3) | 0, A[a >> 2] = E, A[a + 4 >> 2] = x, a = B), f = a, h = l;
                            }
                          while (!1);
                          if (D = D + 1 | 0, D >>> 0 >= 7)
                            break;
                          a = f, l = h;
                        }
                        if (z = cA(z | 0, H | 0, 1, 0) | 0, H = P() | 0, R = cA(R | 0, Q | 0, 1, 0) | 0, Q = P() | 0, l = SA, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, (Q | 0) < (l | 0) | (Q | 0) == (l | 0) & R >>> 0 < a >>> 0)
                          a = f, l = h;
                        else
                          break;
                      }
                      if ((l | 0) > 0 | (l | 0) == 0 & a >>> 0 > 0) {
                        a = 0, l = 0;
                        do
                          Q = lA + (a << 3) | 0, A[Q >> 2] = 0, A[Q + 4 >> 2] = 0, a = cA(a | 0, l | 0, 1, 0) | 0, l = P() | 0, Q = SA, R = A[Q + 4 >> 2] | 0;
                        while ((l | 0) < (R | 0) | ((l | 0) == (R | 0) ? a >>> 0 < (A[Q >> 2] | 0) >>> 0 : 0));
                      }
                      if (Q = SA, A[Q >> 2] = f, A[Q + 4 >> 2] = h, (h | 0) > 0 | (h | 0) == 0 & f >>> 0 > 0)
                        D = n, z = fA, H = kA, R = tA, Q = xA, n = I, fA = o, tA = LA, I = D, o = z, kA = ZA, ZA = H, LA = R, xA = lA, lA = Q;
                      else
                        break t;
                    }
                    dA(LA), dA(ZA), dA(ft), o = 1;
                    break A;
                  } else
                    o = f;
                while (!1);
                dA(ft), dA(n), dA(o), o = 0;
              }
            while (!1);
            return ft = o, y = re, ft | 0;
          }
        }
        return dA(ft), ft = o, y = re, ft | 0;
      }
      function J0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (p = y, y = y + 176 | 0, h = p, (t | 0) < 1)
          return fa(n, 0, 0), m = 0, y = p, m | 0;
        for (f = e, f = q(A[f >> 2] | 0, A[f + 4 >> 2] | 0, 52) | 0, P() | 0, fa(n, (t | 0) > 6 ? t : 6, f & 15), f = 0; r = e + (f << 3) | 0, r = De(A[r >> 2] | 0, A[r + 4 >> 2] | 0, h) | 0, !(r | 0); ) {
          if (r = A[h >> 2] | 0, (r | 0) > 0) {
            l = 0;
            do
              a = h + 8 + (l << 4) | 0, l = l + 1 | 0, r = h + 8 + (((l | 0) % (r | 0) | 0) << 4) | 0, o = Sl(n, r, a) | 0, o ? ca(n, o) | 0 : Il(n, a, r) | 0, r = A[h >> 2] | 0;
            while ((l | 0) < (r | 0));
          }
          if (f = f + 1 | 0, (f | 0) >= (t | 0)) {
            r = 0, m = 13;
            break;
          }
        }
        return (m | 0) == 13 ? (y = p, r | 0) : (ha(n), m = r, y = p, m | 0);
      }
      function i0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        if (a = y, y = y + 32 | 0, r = a, o = a + 16 | 0, e = J0(e, t, o) | 0, e | 0)
          return n = e, y = a, n | 0;
        if (A[n >> 2] = 0, A[n + 4 >> 2] = 0, A[n + 8 >> 2] = 0, e = _a(o) | 0, e | 0)
          do {
            t = xn(n) | 0;
            do
              _o(t, e) | 0, l = e + 16 | 0, A[r >> 2] = A[l >> 2], A[r + 4 >> 2] = A[l + 4 >> 2], A[r + 8 >> 2] = A[l + 8 >> 2], A[r + 12 >> 2] = A[l + 12 >> 2], ca(o, e) | 0, e = zl(o, r) | 0;
            while ((e | 0) != 0);
            e = _a(o) | 0;
          } while ((e | 0) != 0);
        return ha(o), e = bs(n) | 0, e ? (vr(n), l = e, y = a, l | 0) : (l = 0, y = a, l | 0);
      }
      function lt(e) {
        return e = e | 0, e >>> 0 > 121 ? (e = 0, e | 0) : (e = A[7696 + (e * 28 | 0) + 16 >> 2] | 0, e | 0);
      }
      function vn(e) {
        return e = e | 0, (e | 0) == 4 | (e | 0) == 117 | 0;
      }
      function gn(e) {
        return e = e | 0, A[11120 + ((A[e >> 2] | 0) * 216 | 0) + ((A[e + 4 >> 2] | 0) * 72 | 0) + ((A[e + 8 >> 2] | 0) * 24 | 0) + (A[e + 12 >> 2] << 3) >> 2] | 0;
      }
      function Xr(e) {
        return e = e | 0, A[11120 + ((A[e >> 2] | 0) * 216 | 0) + ((A[e + 4 >> 2] | 0) * 72 | 0) + ((A[e + 8 >> 2] | 0) * 24 | 0) + (A[e + 12 >> 2] << 3) + 4 >> 2] | 0;
      }
      function X0(e, t) {
        e = e | 0, t = t | 0, e = 7696 + (e * 28 | 0) | 0, A[t >> 2] = A[e >> 2], A[t + 4 >> 2] = A[e + 4 >> 2], A[t + 8 >> 2] = A[e + 8 >> 2], A[t + 12 >> 2] = A[e + 12 >> 2];
      }
      function $o(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0;
        if (t >>> 0 > 20)
          return t = -1, t | 0;
        do
          if ((A[11120 + (t * 216 | 0) >> 2] | 0) != (e | 0))
            if ((A[11120 + (t * 216 | 0) + 8 >> 2] | 0) != (e | 0))
              if ((A[11120 + (t * 216 | 0) + 16 >> 2] | 0) != (e | 0))
                if ((A[11120 + (t * 216 | 0) + 24 >> 2] | 0) != (e | 0))
                  if ((A[11120 + (t * 216 | 0) + 32 >> 2] | 0) != (e | 0))
                    if ((A[11120 + (t * 216 | 0) + 40 >> 2] | 0) != (e | 0))
                      if ((A[11120 + (t * 216 | 0) + 48 >> 2] | 0) != (e | 0))
                        if ((A[11120 + (t * 216 | 0) + 56 >> 2] | 0) != (e | 0))
                          if ((A[11120 + (t * 216 | 0) + 64 >> 2] | 0) != (e | 0))
                            if ((A[11120 + (t * 216 | 0) + 72 >> 2] | 0) != (e | 0))
                              if ((A[11120 + (t * 216 | 0) + 80 >> 2] | 0) != (e | 0))
                                if ((A[11120 + (t * 216 | 0) + 88 >> 2] | 0) != (e | 0))
                                  if ((A[11120 + (t * 216 | 0) + 96 >> 2] | 0) != (e | 0))
                                    if ((A[11120 + (t * 216 | 0) + 104 >> 2] | 0) != (e | 0))
                                      if ((A[11120 + (t * 216 | 0) + 112 >> 2] | 0) != (e | 0))
                                        if ((A[11120 + (t * 216 | 0) + 120 >> 2] | 0) != (e | 0))
                                          if ((A[11120 + (t * 216 | 0) + 128 >> 2] | 0) != (e | 0))
                                            if ((A[11120 + (t * 216 | 0) + 136 >> 2] | 0) == (e | 0))
                                              e = 2, n = 1, r = 2;
                                            else {
                                              if ((A[11120 + (t * 216 | 0) + 144 >> 2] | 0) == (e | 0)) {
                                                e = 0, n = 2, r = 0;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 152 >> 2] | 0) == (e | 0)) {
                                                e = 0, n = 2, r = 1;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 160 >> 2] | 0) == (e | 0)) {
                                                e = 0, n = 2, r = 2;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 168 >> 2] | 0) == (e | 0)) {
                                                e = 1, n = 2, r = 0;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 176 >> 2] | 0) == (e | 0)) {
                                                e = 1, n = 2, r = 1;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 184 >> 2] | 0) == (e | 0)) {
                                                e = 1, n = 2, r = 2;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 192 >> 2] | 0) == (e | 0)) {
                                                e = 2, n = 2, r = 0;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 200 >> 2] | 0) == (e | 0)) {
                                                e = 2, n = 2, r = 1;
                                                break;
                                              }
                                              if ((A[11120 + (t * 216 | 0) + 208 >> 2] | 0) == (e | 0)) {
                                                e = 2, n = 2, r = 2;
                                                break;
                                              } else
                                                e = -1;
                                              return e | 0;
                                            }
                                          else
                                            e = 2, n = 1, r = 1;
                                        else
                                          e = 2, n = 1, r = 0;
                                      else
                                        e = 1, n = 1, r = 2;
                                    else
                                      e = 1, n = 1, r = 1;
                                  else
                                    e = 1, n = 1, r = 0;
                                else
                                  e = 0, n = 1, r = 2;
                              else
                                e = 0, n = 1, r = 1;
                            else
                              e = 0, n = 1, r = 0;
                          else
                            e = 2, n = 0, r = 2;
                        else
                          e = 2, n = 0, r = 1;
                      else
                        e = 2, n = 0, r = 0;
                    else
                      e = 1, n = 0, r = 2;
                  else
                    e = 1, n = 0, r = 1;
                else
                  e = 1, n = 0, r = 0;
              else
                e = 0, n = 0, r = 2;
            else
              e = 0, n = 0, r = 1;
          else
            e = 0, n = 0, r = 0;
        while (!1);
        return t = A[11120 + (t * 216 | 0) + (n * 72 | 0) + (e * 24 | 0) + (r << 3) + 4 >> 2] | 0, t | 0;
      }
      function TA(e, t) {
        return e = e | 0, t = t | 0, (A[7696 + (e * 28 | 0) + 20 >> 2] | 0) == (t | 0) ? (t = 1, t | 0) : (t = (A[7696 + (e * 28 | 0) + 24 >> 2] | 0) == (t | 0), t | 0);
      }
      function _e(e, t) {
        return e = e | 0, t = t | 0, A[848 + (e * 28 | 0) + (t << 2) >> 2] | 0;
      }
      function ot(e, t) {
        return e = e | 0, t = t | 0, (A[848 + (e * 28 | 0) >> 2] | 0) == (t | 0) ? (t = 0, t | 0) : (A[848 + (e * 28 | 0) + 4 >> 2] | 0) == (t | 0) ? (t = 1, t | 0) : (A[848 + (e * 28 | 0) + 8 >> 2] | 0) == (t | 0) ? (t = 2, t | 0) : (A[848 + (e * 28 | 0) + 12 >> 2] | 0) == (t | 0) ? (t = 3, t | 0) : (A[848 + (e * 28 | 0) + 16 >> 2] | 0) == (t | 0) ? (t = 4, t | 0) : (A[848 + (e * 28 | 0) + 20 >> 2] | 0) == (t | 0) ? (t = 5, t | 0) : ((A[848 + (e * 28 | 0) + 24 >> 2] | 0) == (t | 0) ? 6 : 7) | 0;
      }
      function $r() {
        return 122;
      }
      function $0(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0;
        t = 0;
        do
          $(t | 0, 0, 45) | 0, r = P() | 0 | 134225919, n = e + (t << 3) | 0, A[n >> 2] = -1, A[n + 4 >> 2] = r, t = t + 1 | 0;
        while ((t | 0) != 122);
        return 0;
      }
      function Ar(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0;
        return r = +w[e + 16 >> 3], n = +w[e + 24 >> 3], t = r - n, +(r < n ? t + 6.283185307179586 : t);
      }
      function n0(e) {
        return e = e | 0, +w[e + 16 >> 3] < +w[e + 24 >> 3] | 0;
      }
      function Ci(e) {
        return e = e | 0, +(+w[e >> 3] - +w[e + 8 >> 3]);
      }
      function wn(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0;
        return n = +w[t >> 3], !(n >= +w[e + 8 >> 3]) || !(n <= +w[e >> 3]) ? (t = 0, t | 0) : (r = +w[e + 16 >> 3], n = +w[e + 24 >> 3], o = +w[t + 8 >> 3], t = o >= n, e = o <= r & 1, r < n ? t && (e = 1) : t || (e = 0), t = (e | 0) != 0, t | 0);
      }
      function Li(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        return +w[e >> 3] < +w[t + 8 >> 3] || +w[e + 8 >> 3] > +w[t >> 3] ? (r = 0, r | 0) : (a = +w[e + 16 >> 3], n = e + 24 | 0, p = +w[n >> 3], l = a < p, r = t + 16 | 0, m = +w[r >> 3], o = t + 24 | 0, h = +w[o >> 3], f = m < h, t = p - m < h - a, e = l ? f | t ? 1 : 2 : 0, t = f ? l ? 1 : t ? 2 : 1 : 0, a = +Zt(a, e), a < +Zt(+w[o >> 3], t) || (p = +Zt(+w[n >> 3], e), p > +Zt(+w[r >> 3], t)) ? (f = 0, f | 0) : (f = 1, f | 0));
      }
      function zt(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0;
        a = +w[e + 16 >> 3], h = +w[e + 24 >> 3], e = a < h, f = +w[t + 16 >> 3], l = +w[t + 24 >> 3], o = f < l, t = h - f < l - a, A[n >> 2] = e ? o | t ? 1 : 2 : 0, A[r >> 2] = o ? e ? 1 : t ? 2 : 1 : 0;
      }
      function ci(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        return +w[e >> 3] < +w[t >> 3] || +w[e + 8 >> 3] > +w[t + 8 >> 3] ? (r = 0, r | 0) : (r = e + 16 | 0, h = +w[r >> 3], a = +w[e + 24 >> 3], l = h < a, n = t + 16 | 0, p = +w[n >> 3], o = t + 24 | 0, m = +w[o >> 3], f = p < m, t = a - p < m - h, e = l ? f | t ? 1 : 2 : 0, t = f ? l ? 1 : t ? 2 : 1 : 0, a = +Zt(a, e), a <= +Zt(+w[o >> 3], t) ? (p = +Zt(+w[r >> 3], e), f = p >= +Zt(+w[n >> 3], t), f | 0) : (f = 0, f | 0));
      }
      function tr(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = y, y = y + 176 | 0, r = o, A[r >> 2] = 4, f = +w[t >> 3], w[r + 8 >> 3] = f, a = +w[t + 16 >> 3], w[r + 16 >> 3] = a, w[r + 24 >> 3] = f, f = +w[t + 24 >> 3], w[r + 32 >> 3] = f, l = +w[t + 8 >> 3], w[r + 40 >> 3] = l, w[r + 48 >> 3] = f, w[r + 56 >> 3] = l, w[r + 64 >> 3] = a, t = r + 72 | 0, n = t + 96 | 0;
        do
          A[t >> 2] = 0, t = t + 4 | 0;
        while ((t | 0) < (n | 0));
        y0(e | 0, r | 0, 168) | 0, y = o;
      }
      function er(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0;
        x = y, y = y + 288 | 0, p = x + 264 | 0, k = x + 96 | 0, m = x, f = m, h = f + 96 | 0;
        do
          A[f >> 2] = 0, f = f + 4 | 0;
        while ((f | 0) < (h | 0));
        return t = pr(t, m) | 0, t | 0 ? (E = t, y = x, E | 0) : (h = m, m = A[h >> 2] | 0, h = A[h + 4 >> 2] | 0, Ge(m, h, p) | 0, De(m, h, k) | 0, l = +vi(p, k + 8 | 0), w[p >> 3] = +w[e >> 3], h = p + 8 | 0, w[h >> 3] = +w[e + 16 >> 3], w[k >> 3] = +w[e + 8 >> 3], m = k + 8 | 0, w[m >> 3] = +w[e + 24 >> 3], o = +vi(p, k), z = +w[h >> 3] - +w[m >> 3], a = +CA(+z), D = +w[p >> 3] - +w[k >> 3], r = +CA(+D), !(z == 0 | D == 0) && (z = +pa(+a, +r), z = +ei(+(o * o / +yo(+(z / +yo(+a, +r)), 3) / (l * (l * 2.59807621135) * 0.8))), w[GA >> 3] = z, B = ~~z >>> 0, E = +CA(z) >= 1 ? z > 0 ? ~~+W0(+xt(z / 4294967296), 4294967295) >>> 0 : ~~+ei((z - +(~~z >>> 0)) / 4294967296) >>> 0 : 0, (A[GA + 4 >> 2] & 2146435072 | 0) != 2146435072) ? (k = (B | 0) == 0 & (E | 0) == 0, t = n, A[t >> 2] = k ? 1 : B, A[t + 4 >> 2] = k ? 0 : E, t = 0) : t = 1, E = t, y = x, E | 0);
      }
      function As(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        m = y, y = y + 288 | 0, l = m + 264 | 0, f = m + 96 | 0, h = m, o = h, a = o + 96 | 0;
        do
          A[o >> 2] = 0, o = o + 4 | 0;
        while ((o | 0) < (a | 0));
        return n = pr(n, h) | 0, n | 0 ? (r = n, y = m, r | 0) : (n = h, o = A[n >> 2] | 0, n = A[n + 4 >> 2] | 0, Ge(o, n, l) | 0, De(o, n, f) | 0, p = +vi(l, f + 8 | 0), p = +ei(+(+vi(e, t) / (p * 2))), w[GA >> 3] = p, n = ~~p >>> 0, o = +CA(p) >= 1 ? p > 0 ? ~~+W0(+xt(p / 4294967296), 4294967295) >>> 0 : ~~+ei((p - +(~~p >>> 0)) / 4294967296) >>> 0 : 0, (A[GA + 4 >> 2] & 2146435072 | 0) == 2146435072 ? (r = 1, y = m, r | 0) : (h = (n | 0) == 0 & (o | 0) == 0, A[r >> 2] = h ? 1 : n, A[r + 4 >> 2] = h ? 0 : o, r = 0, y = m, r | 0));
      }
      function Ao(e, t) {
        e = e | 0, t = +t;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        a = e + 16 | 0, l = +w[a >> 3], n = e + 24 | 0, o = +w[n >> 3], r = l - o, r = l < o ? r + 6.283185307179586 : r, m = +w[e >> 3], f = e + 8 | 0, h = +w[f >> 3], p = m - h, r = (r * t - r) * 0.5, t = (p * t - p) * 0.5, m = m + t, w[e >> 3] = m > 1.5707963267948966 ? 1.5707963267948966 : m, t = h - t, w[f >> 3] = t < -1.5707963267948966 ? -1.5707963267948966 : t, t = l + r, t = t > 3.141592653589793 ? t + -6.283185307179586 : t, w[a >> 3] = t < -3.141592653589793 ? t + 6.283185307179586 : t, t = o - r, t = t > 3.141592653589793 ? t + -6.283185307179586 : t, w[n >> 3] = t < -3.141592653589793 ? t + 6.283185307179586 : t;
      }
      function ir(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, A[e >> 2] = t, A[e + 4 >> 2] = n, A[e + 8 >> 2] = r;
      }
      function ts(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0;
        k = t + 8 | 0, A[k >> 2] = 0, h = +w[e >> 3], l = +CA(+h), m = +w[e + 8 >> 3], f = +CA(+m) * 1.1547005383792515, l = l + f * 0.5, n = ~~l, e = ~~f, l = l - +(n | 0), f = f - +(e | 0);
        do
          if (l < 0.5)
            if (l < 0.3333333333333333)
              if (A[t >> 2] = n, f < (l + 1) * 0.5) {
                A[t + 4 >> 2] = e;
                break;
              } else {
                e = e + 1 | 0, A[t + 4 >> 2] = e;
                break;
              }
            else if (B = 1 - l, e = (!(f < B) & 1) + e | 0, A[t + 4 >> 2] = e, B <= f & f < l * 2) {
              n = n + 1 | 0, A[t >> 2] = n;
              break;
            } else {
              A[t >> 2] = n;
              break;
            }
          else {
            if (!(l < 0.6666666666666666))
              if (n = n + 1 | 0, A[t >> 2] = n, f < l * 0.5) {
                A[t + 4 >> 2] = e;
                break;
              } else {
                e = e + 1 | 0, A[t + 4 >> 2] = e;
                break;
              }
            if (f < 1 - l) {
              if (A[t + 4 >> 2] = e, l * 2 + -1 < f) {
                A[t >> 2] = n;
                break;
              }
            } else
              e = e + 1 | 0, A[t + 4 >> 2] = e;
            n = n + 1 | 0, A[t >> 2] = n;
          }
        while (!1);
        do
          if (h < 0)
            if (e & 1) {
              p = (e + 1 | 0) / 2 | 0, p = Nt(n | 0, ((n | 0) < 0) << 31 >> 31 | 0, p | 0, ((p | 0) < 0) << 31 >> 31 | 0) | 0, n = ~~(+(n | 0) - ((+(p >>> 0) + 4294967296 * +(P() | 0)) * 2 + 1)), A[t >> 2] = n;
              break;
            } else {
              p = (e | 0) / 2 | 0, p = Nt(n | 0, ((n | 0) < 0) << 31 >> 31 | 0, p | 0, ((p | 0) < 0) << 31 >> 31 | 0) | 0, n = ~~(+(n | 0) - (+(p >>> 0) + 4294967296 * +(P() | 0)) * 2), A[t >> 2] = n;
              break;
            }
        while (!1);
        p = t + 4 | 0, m < 0 && (n = n - ((e << 1 | 1 | 0) / 2 | 0) | 0, A[t >> 2] = n, e = 0 - e | 0, A[p >> 2] = e), r = e - n | 0, (n | 0) < 0 ? (o = 0 - n | 0, A[p >> 2] = r, A[k >> 2] = o, A[t >> 2] = 0, e = r, n = 0) : o = 0, (e | 0) < 0 && (n = n - e | 0, A[t >> 2] = n, o = o - e | 0, A[k >> 2] = o, A[p >> 2] = 0, e = 0), a = n - o | 0, r = e - o | 0, (o | 0) < 0 && (A[t >> 2] = a, A[p >> 2] = r, A[k >> 2] = 0, e = r, n = a, o = 0), r = (e | 0) < (n | 0) ? e : n, r = (o | 0) < (r | 0) ? o : r, !((r | 0) <= 0) && (A[t >> 2] = n - r, A[p >> 2] = e - r, A[k >> 2] = o - r);
      }
      function Ot(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0;
        t = A[e >> 2] | 0, l = e + 4 | 0, n = A[l >> 2] | 0, (t | 0) < 0 && (n = n - t | 0, A[l >> 2] = n, a = e + 8 | 0, A[a >> 2] = (A[a >> 2] | 0) - t, A[e >> 2] = 0, t = 0), (n | 0) < 0 ? (t = t - n | 0, A[e >> 2] = t, a = e + 8 | 0, o = (A[a >> 2] | 0) - n | 0, A[a >> 2] = o, A[l >> 2] = 0, n = 0) : (o = e + 8 | 0, a = o, o = A[o >> 2] | 0), (o | 0) < 0 && (t = t - o | 0, A[e >> 2] = t, n = n - o | 0, A[l >> 2] = n, A[a >> 2] = 0, o = 0), r = (n | 0) < (t | 0) ? n : t, r = (o | 0) < (r | 0) ? o : r, !((r | 0) <= 0) && (A[e >> 2] = t - r, A[l >> 2] = n - r, A[a >> 2] = o - r);
      }
      function OA(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0;
        r = A[e + 8 >> 2] | 0, n = +((A[e + 4 >> 2] | 0) - r | 0), w[t >> 3] = +((A[e >> 2] | 0) - r | 0) - n * 0.5, w[t + 8 >> 3] = n * 0.8660254037844386;
      }
      function jt(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0, A[n >> 2] = (A[t >> 2] | 0) + (A[e >> 2] | 0), A[n + 4 >> 2] = (A[t + 4 >> 2] | 0) + (A[e + 4 >> 2] | 0), A[n + 8 >> 2] = (A[t + 8 >> 2] | 0) + (A[e + 8 >> 2] | 0);
      }
      function ee(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0, A[n >> 2] = (A[e >> 2] | 0) - (A[t >> 2] | 0), A[n + 4 >> 2] = (A[e + 4 >> 2] | 0) - (A[t + 4 >> 2] | 0), A[n + 8 >> 2] = (A[e + 8 >> 2] | 0) - (A[t + 8 >> 2] | 0);
      }
      function ji(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0;
        n = Fe(A[e >> 2] | 0, t) | 0, A[e >> 2] = n, n = e + 4 | 0, r = Fe(A[n >> 2] | 0, t) | 0, A[n >> 2] = r, e = e + 8 | 0, t = Fe(A[e >> 2] | 0, t) | 0, A[e >> 2] = t;
      }
      function yn(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        l = A[e >> 2] | 0, f = (l | 0) < 0, r = (A[e + 4 >> 2] | 0) - (f ? l : 0) | 0, a = (r | 0) < 0, o = (a ? 0 - r | 0 : 0) + ((A[e + 8 >> 2] | 0) - (f ? l : 0)) | 0, n = (o | 0) < 0, e = n ? 0 : o, t = (a ? 0 : r) - (n ? o : 0) | 0, o = (f ? 0 : l) - (a ? r : 0) - (n ? o : 0) | 0, n = (t | 0) < (o | 0) ? t : o, n = (e | 0) < (n | 0) ? e : n, r = (n | 0) > 0, e = e - (r ? n : 0) | 0, t = t - (r ? n : 0) | 0;
        A: do
          switch (o - (r ? n : 0) | 0) {
            case 0:
              switch (t | 0) {
                case 0:
                  return f = (e | 0) == 0 ? 0 : (e | 0) == 1 ? 1 : 7, f | 0;
                case 1:
                  return f = (e | 0) == 0 ? 2 : (e | 0) == 1 ? 3 : 7, f | 0;
                default:
                  break A;
              }
            case 1:
              switch (t | 0) {
                case 0:
                  return f = (e | 0) == 0 ? 4 : (e | 0) == 1 ? 5 : 7, f | 0;
                case 1: {
                  if (!e)
                    e = 6;
                  else
                    break A;
                  return e | 0;
                }
                default:
                  break A;
              }
          }
        while (!1);
        return f = 7, f | 0;
      }
      function es(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0;
        if (h = e + 8 | 0, l = A[h >> 2] | 0, f = (A[e >> 2] | 0) - l | 0, m = e + 4 | 0, l = (A[m >> 2] | 0) - l | 0, f >>> 0 > 715827881 | l >>> 0 > 715827881) {
          if (r = (f | 0) > 0, o = 2147483647 - f | 0, a = -2147483648 - f | 0, (r ? (o | 0) < (f | 0) : (a | 0) > (f | 0)) || (n = f << 1, r ? (2147483647 - n | 0) < (f | 0) : (-2147483648 - n | 0) > (f | 0)) || ((l | 0) > 0 ? (2147483647 - l | 0) < (l | 0) : (-2147483648 - l | 0) > (l | 0)) || (t = f * 3 | 0, n = l << 1, (r ? (o | 0) < (n | 0) : (a | 0) > (n | 0)) || ((f | 0) > -1 ? (t | -2147483648 | 0) >= (l | 0) : (t ^ -2147483648 | 0) < (l | 0))))
            return m = 1, m | 0;
        } else
          n = l << 1, t = f * 3 | 0;
        return r = $i(+(t - l | 0) * 0.14285714285714285) | 0, A[e >> 2] = r, o = $i(+(n + f | 0) * 0.14285714285714285) | 0, A[m >> 2] = o, A[h >> 2] = 0, n = (o | 0) < (r | 0), t = n ? r : o, n = n ? o : r, (n | 0) < 0 && (((n | 0) == -2147483648 || ((t | 0) > 0 ? (2147483647 - t | 0) < (n | 0) : (-2147483648 - t | 0) > (n | 0))) && pA(27795, 26892, 354, 26903), ((t | 0) > -1 ? (t | -2147483648 | 0) >= (n | 0) : (t ^ -2147483648 | 0) < (n | 0)) && pA(27795, 26892, 354, 26903)), t = o - r | 0, (r | 0) < 0 ? (n = 0 - r | 0, A[m >> 2] = t, A[h >> 2] = n, A[e >> 2] = 0, r = 0) : (t = o, n = 0), (t | 0) < 0 && (r = r - t | 0, A[e >> 2] = r, n = n - t | 0, A[h >> 2] = n, A[m >> 2] = 0, t = 0), a = r - n | 0, o = t - n | 0, (n | 0) < 0 ? (A[e >> 2] = a, A[m >> 2] = o, A[h >> 2] = 0, t = o, o = a, n = 0) : o = r, r = (t | 0) < (o | 0) ? t : o, r = (n | 0) < (r | 0) ? n : r, (r | 0) <= 0 ? (m = 0, m | 0) : (A[e >> 2] = o - r, A[m >> 2] = t - r, A[h >> 2] = n - r, m = 0, m | 0);
      }
      function nr(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        if (l = e + 8 | 0, o = A[l >> 2] | 0, a = (A[e >> 2] | 0) - o | 0, f = e + 4 | 0, o = (A[f >> 2] | 0) - o | 0, a >>> 0 > 715827881 | o >>> 0 > 715827881) {
          if (n = (a | 0) > 0, (n ? (2147483647 - a | 0) < (a | 0) : (-2147483648 - a | 0) > (a | 0)) || (t = a << 1, r = (o | 0) > 0, r ? (2147483647 - o | 0) < (o | 0) : (-2147483648 - o | 0) > (o | 0)))
            return f = 1, f | 0;
          if (h = o << 1, (r ? (2147483647 - h | 0) < (o | 0) : (-2147483648 - h | 0) > (o | 0)) || (n ? (2147483647 - t | 0) < (o | 0) : (-2147483648 - t | 0) > (o | 0)) || (n = o * 3 | 0, (o | 0) > -1 ? (n | -2147483648 | 0) >= (a | 0) : (n ^ -2147483648 | 0) < (a | 0)))
            return h = 1, h | 0;
        } else
          n = o * 3 | 0, t = a << 1;
        return r = $i(+(t + o | 0) * 0.14285714285714285) | 0, A[e >> 2] = r, o = $i(+(n - a | 0) * 0.14285714285714285) | 0, A[f >> 2] = o, A[l >> 2] = 0, n = (o | 0) < (r | 0), t = n ? r : o, n = n ? o : r, (n | 0) < 0 && (((n | 0) == -2147483648 || ((t | 0) > 0 ? (2147483647 - t | 0) < (n | 0) : (-2147483648 - t | 0) > (n | 0))) && pA(27795, 26892, 402, 26917), ((t | 0) > -1 ? (t | -2147483648 | 0) >= (n | 0) : (t ^ -2147483648 | 0) < (n | 0)) && pA(27795, 26892, 402, 26917)), t = o - r | 0, (r | 0) < 0 ? (n = 0 - r | 0, A[f >> 2] = t, A[l >> 2] = n, A[e >> 2] = 0, r = 0) : (t = o, n = 0), (t | 0) < 0 && (r = r - t | 0, A[e >> 2] = r, n = n - t | 0, A[l >> 2] = n, A[f >> 2] = 0, t = 0), a = r - n | 0, o = t - n | 0, (n | 0) < 0 ? (A[e >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, t = o, o = a, n = 0) : o = r, r = (t | 0) < (o | 0) ? t : o, r = (n | 0) < (r | 0) ? n : r, (r | 0) <= 0 ? (h = 0, h | 0) : (A[e >> 2] = o - r, A[f >> 2] = t - r, A[l >> 2] = n - r, h = 0, h | 0);
      }
      function is(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        l = e + 8 | 0, n = A[l >> 2] | 0, t = (A[e >> 2] | 0) - n | 0, f = e + 4 | 0, n = (A[f >> 2] | 0) - n | 0, r = $i(+((t * 3 | 0) - n | 0) * 0.14285714285714285) | 0, A[e >> 2] = r, t = $i(+((n << 1) + t | 0) * 0.14285714285714285) | 0, A[f >> 2] = t, A[l >> 2] = 0, n = t - r | 0, (r | 0) < 0 ? (a = 0 - r | 0, A[f >> 2] = n, A[l >> 2] = a, A[e >> 2] = 0, t = n, r = 0, n = a) : n = 0, (t | 0) < 0 && (r = r - t | 0, A[e >> 2] = r, n = n - t | 0, A[l >> 2] = n, A[f >> 2] = 0, t = 0), a = r - n | 0, o = t - n | 0, (n | 0) < 0 ? (A[e >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, t = o, o = a, n = 0) : o = r, r = (t | 0) < (o | 0) ? t : o, r = (n | 0) < (r | 0) ? n : r, !((r | 0) <= 0) && (A[e >> 2] = o - r, A[f >> 2] = t - r, A[l >> 2] = n - r);
      }
      function rr(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        l = e + 8 | 0, n = A[l >> 2] | 0, t = (A[e >> 2] | 0) - n | 0, f = e + 4 | 0, n = (A[f >> 2] | 0) - n | 0, r = $i(+((t << 1) + n | 0) * 0.14285714285714285) | 0, A[e >> 2] = r, t = $i(+((n * 3 | 0) - t | 0) * 0.14285714285714285) | 0, A[f >> 2] = t, A[l >> 2] = 0, n = t - r | 0, (r | 0) < 0 ? (a = 0 - r | 0, A[f >> 2] = n, A[l >> 2] = a, A[e >> 2] = 0, t = n, r = 0, n = a) : n = 0, (t | 0) < 0 && (r = r - t | 0, A[e >> 2] = r, n = n - t | 0, A[l >> 2] = n, A[f >> 2] = 0, t = 0), a = r - n | 0, o = t - n | 0, (n | 0) < 0 ? (A[e >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, t = o, o = a, n = 0) : o = r, r = (t | 0) < (o | 0) ? t : o, r = (n | 0) < (r | 0) ? n : r, !((r | 0) <= 0) && (A[e >> 2] = o - r, A[f >> 2] = t - r, A[l >> 2] = n - r);
      }
      function r0(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        t = A[e >> 2] | 0, l = e + 4 | 0, n = A[l >> 2] | 0, f = e + 8 | 0, r = A[f >> 2] | 0, o = n + (t * 3 | 0) | 0, A[e >> 2] = o, n = r + (n * 3 | 0) | 0, A[l >> 2] = n, t = (r * 3 | 0) + t | 0, A[f >> 2] = t, r = n - o | 0, (o | 0) < 0 ? (t = t - o | 0, A[l >> 2] = r, A[f >> 2] = t, A[e >> 2] = 0, n = r, r = 0) : r = o, (n | 0) < 0 && (r = r - n | 0, A[e >> 2] = r, t = t - n | 0, A[f >> 2] = t, A[l >> 2] = 0, n = 0), a = r - t | 0, o = n - t | 0, (t | 0) < 0 ? (A[e >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, t = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (t | 0) < (n | 0) ? t : n, !((n | 0) <= 0) && (A[e >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = t - n);
      }
      function Ti(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = A[e >> 2] | 0, l = e + 4 | 0, t = A[l >> 2] | 0, f = e + 8 | 0, n = A[f >> 2] | 0, r = (t * 3 | 0) + o | 0, o = n + (o * 3 | 0) | 0, A[e >> 2] = o, A[l >> 2] = r, t = (n * 3 | 0) + t | 0, A[f >> 2] = t, n = r - o | 0, (o | 0) < 0 ? (t = t - o | 0, A[l >> 2] = n, A[f >> 2] = t, A[e >> 2] = 0, o = 0) : n = r, (n | 0) < 0 && (o = o - n | 0, A[e >> 2] = o, t = t - n | 0, A[f >> 2] = t, A[l >> 2] = 0, n = 0), a = o - t | 0, r = n - t | 0, (t | 0) < 0 ? (A[e >> 2] = a, A[l >> 2] = r, A[f >> 2] = 0, o = a, t = 0) : r = n, n = (r | 0) < (o | 0) ? r : o, n = (t | 0) < (n | 0) ? t : n, !((n | 0) <= 0) && (A[e >> 2] = o - n, A[l >> 2] = r - n, A[f >> 2] = t - n);
      }
      function o0(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        (t + -1 | 0) >>> 0 >= 6 || (o = (A[15440 + (t * 12 | 0) >> 2] | 0) + (A[e >> 2] | 0) | 0, A[e >> 2] = o, f = e + 4 | 0, r = (A[15440 + (t * 12 | 0) + 4 >> 2] | 0) + (A[f >> 2] | 0) | 0, A[f >> 2] = r, l = e + 8 | 0, t = (A[15440 + (t * 12 | 0) + 8 >> 2] | 0) + (A[l >> 2] | 0) | 0, A[l >> 2] = t, n = r - o | 0, (o | 0) < 0 ? (t = t - o | 0, A[f >> 2] = n, A[l >> 2] = t, A[e >> 2] = 0, r = 0) : (n = r, r = o), (n | 0) < 0 && (r = r - n | 0, A[e >> 2] = r, t = t - n | 0, A[l >> 2] = t, A[f >> 2] = 0, n = 0), a = r - t | 0, o = n - t | 0, (t | 0) < 0 ? (A[e >> 2] = a, A[f >> 2] = o, A[l >> 2] = 0, r = a, t = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (t | 0) < (n | 0) ? t : n, !((n | 0) <= 0) && (A[e >> 2] = r - n, A[f >> 2] = o - n, A[l >> 2] = t - n));
      }
      function to(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = A[e >> 2] | 0, l = e + 4 | 0, t = A[l >> 2] | 0, f = e + 8 | 0, n = A[f >> 2] | 0, r = t + o | 0, o = n + o | 0, A[e >> 2] = o, A[l >> 2] = r, t = n + t | 0, A[f >> 2] = t, n = r - o | 0, (o | 0) < 0 ? (t = t - o | 0, A[l >> 2] = n, A[f >> 2] = t, A[e >> 2] = 0, r = 0) : (n = r, r = o), (n | 0) < 0 && (r = r - n | 0, A[e >> 2] = r, t = t - n | 0, A[f >> 2] = t, A[l >> 2] = 0, n = 0), a = r - t | 0, o = n - t | 0, (t | 0) < 0 ? (A[e >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, t = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (t | 0) < (n | 0) ? t : n, !((n | 0) <= 0) && (A[e >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = t - n);
      }
      function ie(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        t = A[e >> 2] | 0, l = e + 4 | 0, r = A[l >> 2] | 0, f = e + 8 | 0, n = A[f >> 2] | 0, o = r + t | 0, A[e >> 2] = o, r = n + r | 0, A[l >> 2] = r, t = n + t | 0, A[f >> 2] = t, n = r - o | 0, (o | 0) < 0 ? (t = t - o | 0, A[l >> 2] = n, A[f >> 2] = t, A[e >> 2] = 0, r = 0) : (n = r, r = o), (n | 0) < 0 && (r = r - n | 0, A[e >> 2] = r, t = t - n | 0, A[f >> 2] = t, A[l >> 2] = 0, n = 0), a = r - t | 0, o = n - t | 0, (t | 0) < 0 ? (A[e >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, t = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (t | 0) < (n | 0) ? t : n, !((n | 0) <= 0) && (A[e >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = t - n);
      }
      function Mi(e) {
        switch (e = e | 0, e | 0) {
          case 1: {
            e = 5;
            break;
          }
          case 5: {
            e = 4;
            break;
          }
          case 4: {
            e = 6;
            break;
          }
          case 6: {
            e = 2;
            break;
          }
          case 2: {
            e = 3;
            break;
          }
          case 3: {
            e = 1;
            break;
          }
        }
        return e | 0;
      }
      function ni(e) {
        switch (e = e | 0, e | 0) {
          case 1: {
            e = 3;
            break;
          }
          case 3: {
            e = 2;
            break;
          }
          case 2: {
            e = 6;
            break;
          }
          case 6: {
            e = 4;
            break;
          }
          case 4: {
            e = 5;
            break;
          }
          case 5: {
            e = 1;
            break;
          }
        }
        return e | 0;
      }
      function ri(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        t = A[e >> 2] | 0, l = e + 4 | 0, n = A[l >> 2] | 0, f = e + 8 | 0, r = A[f >> 2] | 0, o = n + (t << 1) | 0, A[e >> 2] = o, n = r + (n << 1) | 0, A[l >> 2] = n, t = (r << 1) + t | 0, A[f >> 2] = t, r = n - o | 0, (o | 0) < 0 ? (t = t - o | 0, A[l >> 2] = r, A[f >> 2] = t, A[e >> 2] = 0, n = r, r = 0) : r = o, (n | 0) < 0 && (r = r - n | 0, A[e >> 2] = r, t = t - n | 0, A[f >> 2] = t, A[l >> 2] = 0, n = 0), a = r - t | 0, o = n - t | 0, (t | 0) < 0 ? (A[e >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, r = a, t = 0) : o = n, n = (o | 0) < (r | 0) ? o : r, n = (t | 0) < (n | 0) ? t : n, !((n | 0) <= 0) && (A[e >> 2] = r - n, A[l >> 2] = o - n, A[f >> 2] = t - n);
      }
      function or(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = A[e >> 2] | 0, l = e + 4 | 0, t = A[l >> 2] | 0, f = e + 8 | 0, n = A[f >> 2] | 0, r = (t << 1) + o | 0, o = n + (o << 1) | 0, A[e >> 2] = o, A[l >> 2] = r, t = (n << 1) + t | 0, A[f >> 2] = t, n = r - o | 0, (o | 0) < 0 ? (t = t - o | 0, A[l >> 2] = n, A[f >> 2] = t, A[e >> 2] = 0, o = 0) : n = r, (n | 0) < 0 && (o = o - n | 0, A[e >> 2] = o, t = t - n | 0, A[f >> 2] = t, A[l >> 2] = 0, n = 0), a = o - t | 0, r = n - t | 0, (t | 0) < 0 ? (A[e >> 2] = a, A[l >> 2] = r, A[f >> 2] = 0, o = a, t = 0) : r = n, n = (r | 0) < (o | 0) ? r : o, n = (t | 0) < (n | 0) ? t : n, !((n | 0) <= 0) && (A[e >> 2] = o - n, A[l >> 2] = r - n, A[f >> 2] = t - n);
      }
      function s0(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        return l = (A[e >> 2] | 0) - (A[t >> 2] | 0) | 0, f = (l | 0) < 0, r = (A[e + 4 >> 2] | 0) - (A[t + 4 >> 2] | 0) - (f ? l : 0) | 0, a = (r | 0) < 0, o = (f ? 0 - l | 0 : 0) + (A[e + 8 >> 2] | 0) - (A[t + 8 >> 2] | 0) + (a ? 0 - r | 0 : 0) | 0, e = (o | 0) < 0, t = e ? 0 : o, n = (a ? 0 : r) - (e ? o : 0) | 0, o = (f ? 0 : l) - (a ? r : 0) - (e ? o : 0) | 0, e = (n | 0) < (o | 0) ? n : o, e = (t | 0) < (e | 0) ? t : e, r = (e | 0) > 0, t = t - (r ? e : 0) | 0, n = n - (r ? e : 0) | 0, e = o - (r ? e : 0) | 0, e = (e | 0) > -1 ? e : 0 - e | 0, n = (n | 0) > -1 ? n : 0 - n | 0, t = (t | 0) > -1 ? t : 0 - t | 0, t = (n | 0) > (t | 0) ? n : t, ((e | 0) > (t | 0) ? e : t) | 0;
      }
      function sr(e, t) {
        e = e | 0, t = t | 0;
        var n = 0;
        n = A[e + 8 >> 2] | 0, A[t >> 2] = (A[e >> 2] | 0) - n, A[t + 4 >> 2] = (A[e + 4 >> 2] | 0) - n;
      }
      function ns(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        return r = A[e >> 2] | 0, A[t >> 2] = r, o = A[e + 4 >> 2] | 0, l = t + 4 | 0, A[l >> 2] = o, f = t + 8 | 0, A[f >> 2] = 0, n = (o | 0) < (r | 0), e = n ? r : o, n = n ? o : r, (n | 0) < 0 && ((n | 0) == -2147483648 || ((e | 0) > 0 ? (2147483647 - e | 0) < (n | 0) : (-2147483648 - e | 0) > (n | 0)) || ((e | 0) > -1 ? (e | -2147483648 | 0) >= (n | 0) : (e ^ -2147483648 | 0) < (n | 0))) ? (t = 1, t | 0) : (e = o - r | 0, (r | 0) < 0 ? (n = 0 - r | 0, A[l >> 2] = e, A[f >> 2] = n, A[t >> 2] = 0, r = 0) : (e = o, n = 0), (e | 0) < 0 && (r = r - e | 0, A[t >> 2] = r, n = n - e | 0, A[f >> 2] = n, A[l >> 2] = 0, e = 0), a = r - n | 0, o = e - n | 0, (n | 0) < 0 ? (A[t >> 2] = a, A[l >> 2] = o, A[f >> 2] = 0, e = o, o = a, n = 0) : o = r, r = (e | 0) < (o | 0) ? e : o, r = (n | 0) < (r | 0) ? n : r, (r | 0) <= 0 ? (t = 0, t | 0) : (A[t >> 2] = o - r, A[l >> 2] = e - r, A[f >> 2] = n - r, t = 0, t | 0));
      }
      function ar(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0;
        t = e + 8 | 0, o = A[t >> 2] | 0, n = o - (A[e >> 2] | 0) | 0, A[e >> 2] = n, r = e + 4 | 0, e = (A[r >> 2] | 0) - o | 0, A[r >> 2] = e, A[t >> 2] = 0 - (e + n);
      }
      function eo(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        n = A[e >> 2] | 0, t = 0 - n | 0, A[e >> 2] = t, l = e + 8 | 0, A[l >> 2] = 0, f = e + 4 | 0, r = A[f >> 2] | 0, o = r + n | 0, (n | 0) > 0 ? (A[f >> 2] = o, A[l >> 2] = n, A[e >> 2] = 0, t = 0, r = o) : n = 0, (r | 0) < 0 ? (a = t - r | 0, A[e >> 2] = a, n = n - r | 0, A[l >> 2] = n, A[f >> 2] = 0, o = a - n | 0, t = 0 - n | 0, (n | 0) < 0 ? (A[e >> 2] = o, A[f >> 2] = t, A[l >> 2] = 0, r = t, n = 0) : (r = 0, o = a)) : o = t, t = (r | 0) < (o | 0) ? r : o, t = (n | 0) < (t | 0) ? n : t, !((t | 0) <= 0) && (A[e >> 2] = o - t, A[f >> 2] = r - t, A[l >> 2] = n - t);
      }
      function rs(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0;
        if (k = y, y = y + 64 | 0, p = k, f = k + 56 | 0, !(!0 & (t & 2013265920 | 0) == 134217728 & (!0 & (r & 2013265920 | 0) == 134217728)))
          return o = 5, y = k, o | 0;
        if ((e | 0) == (n | 0) & (t | 0) == (r | 0))
          return A[o >> 2] = 0, o = 0, y = k, o | 0;
        if (l = q(e | 0, t | 0, 52) | 0, P() | 0, l = l & 15, m = q(n | 0, r | 0, 52) | 0, P() | 0, (l | 0) != (m & 15 | 0))
          return o = 12, y = k, o | 0;
        if (a = l + -1 | 0, l >>> 0 > 1) {
          cr(e, t, a, p) | 0, cr(n, r, a, f) | 0, m = p, h = A[m >> 2] | 0, m = A[m + 4 >> 2] | 0;
          A: do
            if ((h | 0) == (A[f >> 2] | 0) && (m | 0) == (A[f + 4 >> 2] | 0)) {
              l = (l ^ 15) * 3 | 0, a = q(e | 0, t | 0, l | 0) | 0, P() | 0, a = a & 7, l = q(n | 0, r | 0, l | 0) | 0, P() | 0, l = l & 7;
              do
                if ((a | 0) == 0 | (l | 0) == 0)
                  A[o >> 2] = 1, a = 0;
                else if ((a | 0) == 7)
                  a = 5;
                else {
                  if ((a | 0) == 1 | (l | 0) == 1 && nt(h, m) | 0) {
                    a = 5;
                    break;
                  }
                  if ((A[15536 + (a << 2) >> 2] | 0) != (l | 0) && (A[15568 + (a << 2) >> 2] | 0) != (l | 0))
                    break A;
                  A[o >> 2] = 1, a = 0;
                }
              while (!1);
              return o = a, y = k, o | 0;
            }
          while (!1);
        }
        a = p, l = a + 56 | 0;
        do
          A[a >> 2] = 0, a = a + 4 | 0;
        while ((a | 0) < (l | 0));
        return mn(e, t, 1, p) | 0, t = p, !((A[t >> 2] | 0) == (n | 0) && (A[t + 4 >> 2] | 0) == (r | 0)) && (t = p + 8 | 0, !((A[t >> 2] | 0) == (n | 0) && (A[t + 4 >> 2] | 0) == (r | 0))) && (t = p + 16 | 0, !((A[t >> 2] | 0) == (n | 0) && (A[t + 4 >> 2] | 0) == (r | 0))) && (t = p + 24 | 0, !((A[t >> 2] | 0) == (n | 0) && (A[t + 4 >> 2] | 0) == (r | 0))) && (t = p + 32 | 0, !((A[t >> 2] | 0) == (n | 0) && (A[t + 4 >> 2] | 0) == (r | 0))) && (t = p + 40 | 0, !((A[t >> 2] | 0) == (n | 0) && (A[t + 4 >> 2] | 0) == (r | 0))) ? (a = p + 48 | 0, a = ((A[a >> 2] | 0) == (n | 0) ? (A[a + 4 >> 2] | 0) == (r | 0) : 0) & 1) : a = 1, A[o >> 2] = a, o = 0, y = k, o | 0;
      }
      function os(e, t, n, r, o) {
        return e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0, n = xi(e, t, n, r) | 0, (n | 0) == 7 ? (o = 11, o | 0) : (r = $(n | 0, 0, 56) | 0, t = t & -2130706433 | (P() | 0) | 268435456, A[o >> 2] = e | r, A[o + 4 >> 2] = t, o = 0, o | 0);
      }
      function lr(e, t, n) {
        return e = e | 0, t = t | 0, n = n | 0, !0 & (t & 2013265920 | 0) == 268435456 ? (A[n >> 2] = e, A[n + 4 >> 2] = t & -2130706433 | 134217728, n = 0, n | 0) : (n = 6, n | 0);
      }
      function ss(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        return o = y, y = y + 16 | 0, r = o, A[r >> 2] = 0, !0 & (t & 2013265920 | 0) == 268435456 ? (a = q(e | 0, t | 0, 56) | 0, P() | 0, r = ct(e, t & -2130706433 | 134217728, a & 7, r, n) | 0, y = o, r | 0) : (r = 6, y = o, r | 0);
      }
      function ur(e, t) {
        e = e | 0, t = t | 0;
        var n = 0;
        switch (n = q(e | 0, t | 0, 56) | 0, P() | 0, n & 7) {
          case 0:
          case 7:
            return n = 0, n | 0;
        }
        return n = t & -2130706433 | 134217728, !(!0 & (t & 2013265920 | 0) == 268435456) || !0 & (t & 117440512 | 0) == 16777216 & (nt(e, n) | 0) != 0 ? (n = 0, n | 0) : (n = Te(e, n) | 0, n | 0);
      }
      function io(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        return o = y, y = y + 16 | 0, r = o, !0 & (t & 2013265920 | 0) == 268435456 ? (a = t & -2130706433 | 134217728, l = n, A[l >> 2] = e, A[l + 4 >> 2] = a, A[r >> 2] = 0, t = q(e | 0, t | 0, 56) | 0, P() | 0, r = ct(e, a, t & 7, r, n + 8 | 0) | 0, y = o, r | 0) : (r = 6, y = o, r | 0);
      }
      function a0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0;
        return o = (nt(e, t) | 0) == 0, t = t & -2130706433, r = n, A[r >> 2] = o ? e : 0, A[r + 4 >> 2] = o ? t | 285212672 : 0, r = n + 8 | 0, A[r >> 2] = e, A[r + 4 >> 2] = t | 301989888, r = n + 16 | 0, A[r >> 2] = e, A[r + 4 >> 2] = t | 318767104, r = n + 24 | 0, A[r >> 2] = e, A[r + 4 >> 2] = t | 335544320, r = n + 32 | 0, A[r >> 2] = e, A[r + 4 >> 2] = t | 352321536, n = n + 40 | 0, A[n >> 2] = e, A[n + 4 >> 2] = t | 369098752, 0;
      }
      function Ne(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        return l = y, y = y + 16 | 0, o = l, a = t & -2130706433 | 134217728, !0 & (t & 2013265920 | 0) == 268435456 ? (r = q(e | 0, t | 0, 56) | 0, P() | 0, r = Ls(e, a, r & 7) | 0, (r | 0) == -1 ? (A[n >> 2] = 0, a = 6, y = l, a | 0) : (pi(e, a, o) | 0 && pA(27795, 26932, 282, 26947), t = q(e | 0, t | 0, 52) | 0, P() | 0, t = t & 15, nt(e, a) | 0 ? fr(o, t, r, 2, n) : hr(o, t, r, 2, n), a = 0, y = l, a | 0)) : (a = 6, y = l, a | 0);
      }
      function as(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0;
        r = y, y = y + 16 | 0, o = r, bn(e, t, n, o), ts(o, n + 4 | 0), y = r;
      }
      function bn(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0;
        if (f = y, y = y + 16 | 0, h = f, ce(e, n, h), a = +t0(+(1 - +w[h >> 3] * 0.5)), a < 1e-16) {
          A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[r + 8 >> 2] = 0, A[r + 12 >> 2] = 0, y = f;
          return;
        }
        if (h = A[n >> 2] | 0, o = +w[15920 + (h * 24 | 0) >> 3], o = +Pn(o - +Pn(+ao(15600 + (h << 4) | 0, e))), ne(t) | 0 ? l = +Pn(o + -0.3334731722518321) : l = o, o = +fe(+a) * 2.618033988749896, (t | 0) > 0) {
          e = 0;
          do
            o = o * 2.6457513110645907, e = e + 1 | 0;
          while ((e | 0) != (t | 0));
        }
        a = +YA(+l) * o, w[r >> 3] = a, l = +DA(+l) * o, w[r + 8 >> 3] = l, y = f;
      }
      function ce(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (a = y, y = y + 32 | 0, o = a, Cs(e, o), A[t >> 2] = 0, w[n >> 3] = 5, r = +mt(16400, o), r < +w[n >> 3] && (A[t >> 2] = 0, w[n >> 3] = r), r = +mt(16424, o), r < +w[n >> 3] && (A[t >> 2] = 1, w[n >> 3] = r), r = +mt(16448, o), r < +w[n >> 3] && (A[t >> 2] = 2, w[n >> 3] = r), r = +mt(16472, o), r < +w[n >> 3] && (A[t >> 2] = 3, w[n >> 3] = r), r = +mt(16496, o), r < +w[n >> 3] && (A[t >> 2] = 4, w[n >> 3] = r), r = +mt(16520, o), r < +w[n >> 3] && (A[t >> 2] = 5, w[n >> 3] = r), r = +mt(16544, o), r < +w[n >> 3] && (A[t >> 2] = 6, w[n >> 3] = r), r = +mt(16568, o), r < +w[n >> 3] && (A[t >> 2] = 7, w[n >> 3] = r), r = +mt(16592, o), r < +w[n >> 3] && (A[t >> 2] = 8, w[n >> 3] = r), r = +mt(16616, o), r < +w[n >> 3] && (A[t >> 2] = 9, w[n >> 3] = r), r = +mt(16640, o), r < +w[n >> 3] && (A[t >> 2] = 10, w[n >> 3] = r), r = +mt(16664, o), r < +w[n >> 3] && (A[t >> 2] = 11, w[n >> 3] = r), r = +mt(16688, o), r < +w[n >> 3] && (A[t >> 2] = 12, w[n >> 3] = r), r = +mt(16712, o), r < +w[n >> 3] && (A[t >> 2] = 13, w[n >> 3] = r), r = +mt(16736, o), r < +w[n >> 3] && (A[t >> 2] = 14, w[n >> 3] = r), r = +mt(16760, o), r < +w[n >> 3] && (A[t >> 2] = 15, w[n >> 3] = r), r = +mt(16784, o), r < +w[n >> 3] && (A[t >> 2] = 16, w[n >> 3] = r), r = +mt(16808, o), r < +w[n >> 3] && (A[t >> 2] = 17, w[n >> 3] = r), r = +mt(16832, o), r < +w[n >> 3] && (A[t >> 2] = 18, w[n >> 3] = r), r = +mt(16856, o), !(r < +w[n >> 3])) {
          y = a;
          return;
        }
        A[t >> 2] = 19, w[n >> 3] = r, y = a;
      }
      function Yi(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0;
        if (a = +xs(e), a < 1e-16) {
          t = 15600 + (t << 4) | 0, A[o >> 2] = A[t >> 2], A[o + 4 >> 2] = A[t + 4 >> 2], A[o + 8 >> 2] = A[t + 8 >> 2], A[o + 12 >> 2] = A[t + 12 >> 2];
          return;
        }
        if (l = +he(+ +w[e + 8 >> 3], + +w[e >> 3]), (n | 0) > 0) {
          e = 0;
          do
            a = a * 0.37796447300922725, e = e + 1 | 0;
          while ((e | 0) != (n | 0));
        }
        f = a * 0.3333333333333333, r ? (n = (ne(n) | 0) == 0, a = +e0(+((n ? f : f * 0.37796447300922725) * 0.381966011250105))) : (a = +e0(+(a * 0.381966011250105)), ne(n) | 0 && (l = +Pn(l + 0.3334731722518321))), gs(15600 + (t << 4) | 0, +Pn(+w[15920 + (t * 24 | 0) >> 3] - l), a, o);
      }
      function no(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0;
        r = y, y = y + 16 | 0, o = r, OA(e + 4 | 0, o), Yi(o, A[e >> 2] | 0, t, 0, n), y = r;
      }
      function fr(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0, LA = 0, ZA = 0, kA = 0, hA = 0, AA = 0, SA = 0, ut = 0, MA = 0;
        if (SA = y, y = y + 272 | 0, a = SA + 256 | 0, R = SA + 240 | 0, kA = SA, hA = SA + 224 | 0, AA = SA + 208 | 0, Q = SA + 176 | 0, I = SA + 160 | 0, tA = SA + 192 | 0, fA = SA + 144 | 0, lA = SA + 128 | 0, xA = SA + 112 | 0, LA = SA + 96 | 0, ZA = SA + 80 | 0, A[a >> 2] = t, A[R >> 2] = A[e >> 2], A[R + 4 >> 2] = A[e + 4 >> 2], A[R + 8 >> 2] = A[e + 8 >> 2], A[R + 12 >> 2] = A[e + 12 >> 2], l0(R, a, kA), A[o >> 2] = 0, R = r + n + ((r | 0) == 5 & 1) | 0, (R | 0) <= (n | 0)) {
          y = SA;
          return;
        }
        h = A[a >> 2] | 0, m = hA + 4 | 0, p = Q + 4 | 0, k = n + 5 | 0, B = 16880 + (h << 2) | 0, E = 16960 + (h << 2) | 0, x = lA + 8 | 0, D = xA + 8 | 0, z = LA + 8 | 0, H = AA + 4 | 0, f = n;
        A: for (; ; ) {
          l = kA + (((f | 0) % 5 | 0) << 4) | 0, A[AA >> 2] = A[l >> 2], A[AA + 4 >> 2] = A[l + 4 >> 2], A[AA + 8 >> 2] = A[l + 8 >> 2], A[AA + 12 >> 2] = A[l + 12 >> 2];
          do
            ;
          while ((di(AA, h, 0, 1) | 0) == 2);
          if ((f | 0) > (n | 0) & (ne(t) | 0) != 0) {
            if (A[Q >> 2] = A[AA >> 2], A[Q + 4 >> 2] = A[AA + 4 >> 2], A[Q + 8 >> 2] = A[AA + 8 >> 2], A[Q + 12 >> 2] = A[AA + 12 >> 2], OA(m, I), r = A[Q >> 2] | 0, a = A[17040 + (r * 80 | 0) + (A[hA >> 2] << 2) >> 2] | 0, A[Q >> 2] = A[18640 + (r * 80 | 0) + (a * 20 | 0) >> 2], l = A[18640 + (r * 80 | 0) + (a * 20 | 0) + 16 >> 2] | 0, (l | 0) > 0) {
              e = 0;
              do
                to(p), e = e + 1 | 0;
              while ((e | 0) < (l | 0));
            }
            switch (l = 18640 + (r * 80 | 0) + (a * 20 | 0) + 4 | 0, A[tA >> 2] = A[l >> 2], A[tA + 4 >> 2] = A[l + 4 >> 2], A[tA + 8 >> 2] = A[l + 8 >> 2], ji(tA, (A[B >> 2] | 0) * 3 | 0), jt(p, tA, p), Ot(p), OA(p, fA), ut = +(A[E >> 2] | 0), w[lA >> 3] = ut * 3, w[x >> 3] = 0, MA = ut * -1.5, w[xA >> 3] = MA, w[D >> 3] = ut * 2.598076211353316, w[LA >> 3] = MA, w[z >> 3] = ut * -2.598076211353316, A[17040 + ((A[Q >> 2] | 0) * 80 | 0) + (A[AA >> 2] << 2) >> 2] | 0) {
              case 1: {
                e = xA, r = lA;
                break;
              }
              case 3: {
                e = LA, r = xA;
                break;
              }
              case 2: {
                e = lA, r = LA;
                break;
              }
              default: {
                e = 12;
                break A;
              }
            }
            yr(I, fA, r, e, ZA), Yi(ZA, A[Q >> 2] | 0, h, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1;
          }
          if ((f | 0) < (k | 0) && (OA(H, Q), Yi(Q, A[AA >> 2] | 0, h, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1), A[hA >> 2] = A[AA >> 2], A[hA + 4 >> 2] = A[AA + 4 >> 2], A[hA + 8 >> 2] = A[AA + 8 >> 2], A[hA + 12 >> 2] = A[AA + 12 >> 2], f = f + 1 | 0, (f | 0) >= (R | 0)) {
            e = 3;
            break;
          }
        }
        if ((e | 0) == 3) {
          y = SA;
          return;
        } else (e | 0) == 12 && pA(26970, 27017, 572, 27027);
      }
      function l0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        h = y, y = y + 128 | 0, r = h + 64 | 0, o = h, a = r, l = 20240, f = a + 60 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        a = o, l = 20304, f = a + 60 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        f = (ne(A[t >> 2] | 0) | 0) == 0, r = f ? r : o, o = e + 4 | 0, ri(o), or(o), ne(A[t >> 2] | 0) | 0 && (Ti(o), A[t >> 2] = (A[t >> 2] | 0) + 1), A[n >> 2] = A[e >> 2], t = n + 4 | 0, jt(o, r, t), Ot(t), A[n + 16 >> 2] = A[e >> 2], t = n + 20 | 0, jt(o, r + 12 | 0, t), Ot(t), A[n + 32 >> 2] = A[e >> 2], t = n + 36 | 0, jt(o, r + 24 | 0, t), Ot(t), A[n + 48 >> 2] = A[e >> 2], t = n + 52 | 0, jt(o, r + 36 | 0, t), Ot(t), A[n + 64 >> 2] = A[e >> 2], n = n + 68 | 0, jt(o, r + 48 | 0, n), Ot(n), y = h;
      }
      function di(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0;
        if (x = y, y = y + 32 | 0, B = x + 12 | 0, f = x, E = e + 4 | 0, k = A[16960 + (t << 2) >> 2] | 0, p = (r | 0) != 0, k = p ? k * 3 | 0 : k, o = A[E >> 2] | 0, m = e + 8 | 0, l = A[m >> 2] | 0, p) {
          if (a = e + 12 | 0, r = A[a >> 2] | 0, o = l + o + r | 0, (o | 0) == (k | 0))
            return E = 1, y = x, E | 0;
          h = a;
        } else
          h = e + 12 | 0, r = A[h >> 2] | 0, o = l + o + r | 0;
        if ((o | 0) <= (k | 0))
          return E = 0, y = x, E | 0;
        do
          if ((r | 0) > 0) {
            if (r = A[e >> 2] | 0, (l | 0) > 0) {
              a = 18640 + (r * 80 | 0) + 60 | 0, r = e;
              break;
            }
            r = 18640 + (r * 80 | 0) + 40 | 0, n ? (ir(B, k, 0, 0), ee(E, B, f), ie(f), jt(f, B, E), a = r, r = e) : (a = r, r = e);
          } else
            a = 18640 + ((A[e >> 2] | 0) * 80 | 0) + 20 | 0, r = e;
        while (!1);
        if (A[r >> 2] = A[a >> 2], o = a + 16 | 0, (A[o >> 2] | 0) > 0) {
          r = 0;
          do
            to(E), r = r + 1 | 0;
          while ((r | 0) < (A[o >> 2] | 0));
        }
        return e = a + 4 | 0, A[B >> 2] = A[e >> 2], A[B + 4 >> 2] = A[e + 4 >> 2], A[B + 8 >> 2] = A[e + 8 >> 2], t = A[16880 + (t << 2) >> 2] | 0, ji(B, p ? t * 3 | 0 : t), jt(E, B, E), Ot(E), p ? r = ((A[m >> 2] | 0) + (A[E >> 2] | 0) + (A[h >> 2] | 0) | 0) == (k | 0) ? 1 : 2 : r = 2, E = r, y = x, E | 0;
      }
      function ls(e, t) {
        e = e | 0, t = t | 0;
        var n = 0;
        do
          n = di(e, t, 0, 1) | 0;
        while ((n | 0) == 2);
        return n | 0;
      }
      function hr(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0, LA = 0, ZA = 0, kA = 0;
        if (LA = y, y = y + 240 | 0, a = LA + 224 | 0, tA = LA + 208 | 0, fA = LA, lA = LA + 192 | 0, xA = LA + 176 | 0, z = LA + 160 | 0, H = LA + 144 | 0, R = LA + 128 | 0, Q = LA + 112 | 0, I = LA + 96 | 0, A[a >> 2] = t, A[tA >> 2] = A[e >> 2], A[tA + 4 >> 2] = A[e + 4 >> 2], A[tA + 8 >> 2] = A[e + 8 >> 2], A[tA + 12 >> 2] = A[e + 12 >> 2], _r(tA, a, fA), A[o >> 2] = 0, D = r + n + ((r | 0) == 6 & 1) | 0, (D | 0) <= (n | 0)) {
          y = LA;
          return;
        }
        h = A[a >> 2] | 0, m = n + 6 | 0, p = 16960 + (h << 2) | 0, k = H + 8 | 0, B = R + 8 | 0, E = Q + 8 | 0, x = lA + 4 | 0, l = 0, f = n, r = -1;
        A: for (; ; ) {
          if (a = (f | 0) % 6 | 0, e = fA + (a << 4) | 0, A[lA >> 2] = A[e >> 2], A[lA + 4 >> 2] = A[e + 4 >> 2], A[lA + 8 >> 2] = A[e + 8 >> 2], A[lA + 12 >> 2] = A[e + 12 >> 2], e = l, l = di(lA, h, 0, 1) | 0, (f | 0) > (n | 0) & (ne(t) | 0) != 0 && (e | 0) != 1 && (A[lA >> 2] | 0) != (r | 0)) {
            switch (OA(fA + (((a + 5 | 0) % 6 | 0) << 4) + 4 | 0, xA), OA(fA + (a << 4) + 4 | 0, z), ZA = +(A[p >> 2] | 0), w[H >> 3] = ZA * 3, w[k >> 3] = 0, kA = ZA * -1.5, w[R >> 3] = kA, w[B >> 3] = ZA * 2.598076211353316, w[Q >> 3] = kA, w[E >> 3] = ZA * -2.598076211353316, a = A[tA >> 2] | 0, A[17040 + (a * 80 | 0) + (((r | 0) == (a | 0) ? A[lA >> 2] | 0 : r) << 2) >> 2] | 0) {
              case 1: {
                e = R, r = H;
                break;
              }
              case 3: {
                e = Q, r = R;
                break;
              }
              case 2: {
                e = H, r = Q;
                break;
              }
              default: {
                e = 8;
                break A;
              }
            }
            yr(xA, z, r, e, I), !(bt(xA, I) | 0) && !(bt(z, I) | 0) && (Yi(I, A[tA >> 2] | 0, h, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1);
          }
          if ((f | 0) < (m | 0) && (OA(x, xA), Yi(xA, A[lA >> 2] | 0, h, 1, o + 8 + (A[o >> 2] << 4) | 0), A[o >> 2] = (A[o >> 2] | 0) + 1), f = f + 1 | 0, (f | 0) >= (D | 0)) {
            e = 3;
            break;
          } else
            r = A[lA >> 2] | 0;
        }
        if ((e | 0) == 3) {
          y = LA;
          return;
        } else (e | 0) == 8 && pA(27054, 27017, 737, 27099);
      }
      function _r(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        h = y, y = y + 160 | 0, r = h + 80 | 0, o = h, a = r, l = 20368, f = a + 72 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        a = o, l = 20448, f = a + 72 | 0;
        do
          A[a >> 2] = A[l >> 2], a = a + 4 | 0, l = l + 4 | 0;
        while ((a | 0) < (f | 0));
        f = (ne(A[t >> 2] | 0) | 0) == 0, r = f ? r : o, o = e + 4 | 0, ri(o), or(o), ne(A[t >> 2] | 0) | 0 && (Ti(o), A[t >> 2] = (A[t >> 2] | 0) + 1), A[n >> 2] = A[e >> 2], t = n + 4 | 0, jt(o, r, t), Ot(t), A[n + 16 >> 2] = A[e >> 2], t = n + 20 | 0, jt(o, r + 12 | 0, t), Ot(t), A[n + 32 >> 2] = A[e >> 2], t = n + 36 | 0, jt(o, r + 24 | 0, t), Ot(t), A[n + 48 >> 2] = A[e >> 2], t = n + 52 | 0, jt(o, r + 36 | 0, t), Ot(t), A[n + 64 >> 2] = A[e >> 2], t = n + 68 | 0, jt(o, r + 48 | 0, t), Ot(t), A[n + 80 >> 2] = A[e >> 2], n = n + 84 | 0, jt(o, r + 60 | 0, n), Ot(n), y = h;
      }
      function us(e, t) {
        return e = e | 0, t = t | 0, t = q(e | 0, t | 0, 52) | 0, P() | 0, t & 15 | 0;
      }
      function de(e, t) {
        return e = e | 0, t = t | 0, t = q(e | 0, t | 0, 45) | 0, P() | 0, t & 127 | 0;
      }
      function Vi(e, t, n, r) {
        return e = e | 0, t = t | 0, n = n | 0, r = r | 0, (n + -1 | 0) >>> 0 > 14 ? (r = 4, r | 0) : (n = q(e | 0, t | 0, (15 - n | 0) * 3 | 0) | 0, P() | 0, A[r >> 2] = n & 7, r = 0, r | 0);
      }
      function fs(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0;
        if (e >>> 0 > 15)
          return r = 4, r | 0;
        if (t >>> 0 > 121)
          return r = 17, r | 0;
        l = $(e | 0, 0, 52) | 0, o = P() | 0, f = $(t | 0, 0, 45) | 0, o = o | (P() | 0) | 134225919;
        A: do
          if ((e | 0) >= 1) {
            for (f = 1, l = (Y[20528 + t >> 0] | 0) != 0, a = -1; ; ) {
              if (t = A[n + (f + -1 << 2) >> 2] | 0, t >>> 0 > 6) {
                o = 18, t = 10;
                break;
              }
              if (!((t | 0) == 0 | l ^ 1))
                if ((t | 0) == 1) {
                  o = 19, t = 10;
                  break;
                } else
                  l = 0;
              if (m = (15 - f | 0) * 3 | 0, h = $(7, 0, m | 0) | 0, o = o & ~(P() | 0), t = $(t | 0, ((t | 0) < 0) << 31 >> 31 | 0, m | 0) | 0, a = t | a & ~h, o = P() | 0 | o, (f | 0) < (e | 0))
                f = f + 1 | 0;
              else
                break A;
            }
            if ((t | 0) == 10)
              return o | 0;
          } else
            a = -1;
        while (!1);
        return m = r, A[m >> 2] = a, A[m + 4 >> 2] = o, m = 0, m | 0;
      }
      function Te(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        return !(!0 & (t & -16777216 | 0) == 134217728) || (r = q(e | 0, t | 0, 52) | 0, P() | 0, r = r & 15, n = q(e | 0, t | 0, 45) | 0, P() | 0, n = n & 127, n >>> 0 > 121) ? (e = 0, e | 0) : (l = (r ^ 15) * 3 | 0, o = q(e | 0, t | 0, l | 0) | 0, l = $(o | 0, P() | 0, l | 0) | 0, o = P() | 0, a = Nt(-1227133514, -1171, l | 0, o | 0) | 0, !((l & 613566756 & a | 0) == 0 & (o & 4681 & (P() | 0) | 0) == 0) || (l = (r * 3 | 0) + 19 | 0, a = $(~e | 0, ~t | 0, l | 0) | 0, l = q(a | 0, P() | 0, l | 0) | 0, !((r | 0) == 15 | (l | 0) == 0 & (P() | 0) == 0)) ? (l = 0, l | 0) : !(Y[20528 + n >> 0] | 0) || (t = t & 8191, (e | 0) == 0 & (t | 0) == 0) ? (l = 1, l | 0) : (l = Ds(e | 0, t | 0) | 0, P() | 0, ((63 - l | 0) % 3 | 0 | 0) != 0 | 0));
      }
      function hs(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        return !0 & (t & -16777216 | 0) == 134217728 && (r = q(e | 0, t | 0, 52) | 0, P() | 0, r = r & 15, n = q(e | 0, t | 0, 45) | 0, P() | 0, n = n & 127, n >>> 0 <= 121) && (l = (r ^ 15) * 3 | 0, o = q(e | 0, t | 0, l | 0) | 0, l = $(o | 0, P() | 0, l | 0) | 0, o = P() | 0, a = Nt(-1227133514, -1171, l | 0, o | 0) | 0, (l & 613566756 & a | 0) == 0 & (o & 4681 & (P() | 0) | 0) == 0) && (l = (r * 3 | 0) + 19 | 0, a = $(~e | 0, ~t | 0, l | 0) | 0, l = q(a | 0, P() | 0, l | 0) | 0, (r | 0) == 15 | (l | 0) == 0 & (P() | 0) == 0) && (!(Y[20528 + n >> 0] | 0) || (n = t & 8191, (e | 0) == 0 & (n | 0) == 0) || (l = Ds(e | 0, n | 0) | 0, P() | 0, (63 - l | 0) % 3 | 0 | 0)) || ur(e, t) | 0 ? (l = 1, l | 0) : (l = (ua(e, t) | 0) != 0 & 1, l | 0);
      }
      function mi(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0;
        if (o = $(t | 0, 0, 52) | 0, a = P() | 0, n = $(n | 0, 0, 45) | 0, n = a | (P() | 0) | 134225919, (t | 0) < 1) {
          a = -1, r = n, t = e, A[t >> 2] = a, e = e + 4 | 0, A[e >> 2] = r;
          return;
        }
        for (a = 1, o = -1; l = (15 - a | 0) * 3 | 0, f = $(7, 0, l | 0) | 0, n = n & ~(P() | 0), l = $(r | 0, 0, l | 0) | 0, o = o & ~f | l, n = n | (P() | 0), (a | 0) != (t | 0); )
          a = a + 1 | 0;
        f = e, l = f, A[l >> 2] = o, f = f + 4 | 0, A[f >> 2] = n;
      }
      function cr(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        if (a = q(e | 0, t | 0, 52) | 0, P() | 0, a = a & 15, n >>> 0 > 15)
          return r = 4, r | 0;
        if ((a | 0) < (n | 0))
          return r = 12, r | 0;
        if ((a | 0) == (n | 0))
          return A[r >> 2] = e, A[r + 4 >> 2] = t, r = 0, r | 0;
        if (o = $(n | 0, 0, 52) | 0, o = o | e, e = P() | 0 | t & -15728641, (a | 0) > (n | 0))
          do
            t = $(7, 0, (14 - n | 0) * 3 | 0) | 0, n = n + 1 | 0, o = t | o, e = P() | 0 | e;
          while ((n | 0) < (a | 0));
        return A[r >> 2] = o, A[r + 4 >> 2] = e, r = 0, r | 0;
      }
      function oi(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        if (a = q(e | 0, t | 0, 52) | 0, P() | 0, a = a & 15, !((n | 0) < 16 & (a | 0) <= (n | 0)))
          return r = 4, r | 0;
        o = n - a | 0, n = q(e | 0, t | 0, 45) | 0, P() | 0;
        A: do
          if (!(lt(n & 127) | 0))
            n = gi(7, 0, o, ((o | 0) < 0) << 31 >> 31) | 0, o = P() | 0;
          else {
            t: do
              if (a | 0) {
                for (n = 1; l = $(7, 0, (15 - n | 0) * 3 | 0) | 0, !!((l & e | 0) == 0 & ((P() | 0) & t | 0) == 0); )
                  if (n >>> 0 < a >>> 0)
                    n = n + 1 | 0;
                  else
                    break t;
                n = gi(7, 0, o, ((o | 0) < 0) << 31 >> 31) | 0, o = P() | 0;
                break A;
              }
            while (!1);
            n = gi(7, 0, o, ((o | 0) < 0) << 31 >> 31) | 0, n = Gt(n | 0, P() | 0, 5, 0) | 0, n = cA(n | 0, P() | 0, -5, -1) | 0, n = An(n | 0, P() | 0, 6, 0) | 0, n = cA(n | 0, P() | 0, 1, 0) | 0, o = P() | 0;
          }
        while (!1);
        return l = r, A[l >> 2] = n, A[l + 4 >> 2] = o, l = 0, l | 0;
      }
      function nt(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0;
        if (o = q(e | 0, t | 0, 45) | 0, P() | 0, !(lt(o & 127) | 0))
          return o = 0, o | 0;
        o = q(e | 0, t | 0, 52) | 0, P() | 0, o = o & 15;
        A: do
          if (!o)
            n = 0;
          else
            for (r = 1; ; ) {
              if (n = q(e | 0, t | 0, (15 - r | 0) * 3 | 0) | 0, P() | 0, n = n & 7, n | 0)
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
      function u0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0;
        if (l = y, y = y + 16 | 0, a = l, m0(a, e, t, n), t = a, e = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, (e | 0) == 0 & (t | 0) == 0)
          return y = l, 0;
        o = 0, n = 0;
        do
          f = r + (o << 3) | 0, A[f >> 2] = e, A[f + 4 >> 2] = t, o = cA(o | 0, n | 0, 1, 0) | 0, n = P() | 0, p0(a), f = a, e = A[f >> 2] | 0, t = A[f + 4 >> 2] | 0;
        while (!((e | 0) == 0 & (t | 0) == 0));
        return y = l, 0;
      }
      function ro(e, t, n, r) {
        return e = e | 0, t = t | 0, n = n | 0, r = r | 0, (r | 0) < (n | 0) ? (n = t, r = e, EA(n | 0), r | 0) : (n = $(-1, -1, ((r - n | 0) * 3 | 0) + 3 | 0) | 0, r = $(~n | 0, ~(P() | 0) | 0, (15 - r | 0) * 3 | 0) | 0, n = ~(P() | 0) & t, r = ~r & e, EA(n | 0), r | 0);
      }
      function si(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0;
        return o = q(e | 0, t | 0, 52) | 0, P() | 0, o = o & 15, (n | 0) < 16 & (o | 0) <= (n | 0) ? ((o | 0) < (n | 0) && (o = $(-1, -1, ((n + -1 - o | 0) * 3 | 0) + 3 | 0) | 0, o = $(~o | 0, ~(P() | 0) | 0, (15 - n | 0) * 3 | 0) | 0, t = ~(P() | 0) & t, e = ~o & e), o = $(n | 0, 0, 52) | 0, n = t & -15728641 | (P() | 0), A[r >> 2] = e | o, A[r + 4 >> 2] = n, r = 0, r | 0) : (r = 4, r | 0);
      }
      function f0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0, LA = 0, ZA = 0, kA = 0, hA = 0, AA = 0;
        if ((n | 0) == 0 & (r | 0) == 0)
          return AA = 0, AA | 0;
        if (o = e, a = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, !0 & (o & 15728640 | 0) == 0) {
          if (!((r | 0) > 0 | (r | 0) == 0 & n >>> 0 > 0) || (AA = t, A[AA >> 2] = a, A[AA + 4 >> 2] = o, (n | 0) == 1 & (r | 0) == 0))
            return AA = 0, AA | 0;
          o = 1, a = 0;
          do
            kA = e + (o << 3) | 0, hA = A[kA + 4 >> 2] | 0, AA = t + (o << 3) | 0, A[AA >> 2] = A[kA >> 2], A[AA + 4 >> 2] = hA, o = cA(o | 0, a | 0, 1, 0) | 0, a = P() | 0;
          while ((a | 0) < (r | 0) | (a | 0) == (r | 0) & o >>> 0 < n >>> 0);
          return o = 0, o | 0;
        }
        if (ZA = n << 3, hA = wi(ZA) | 0, !hA)
          return AA = 13, AA | 0;
        if (y0(hA | 0, e | 0, ZA | 0) | 0, kA = ve(n, 8) | 0, !kA)
          return dA(hA), AA = 13, AA | 0;
        A: for (; ; ) {
          o = hA, m = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, xA = q(m | 0, o | 0, 52) | 0, P() | 0, xA = xA & 15, LA = xA + -1 | 0, lA = (xA | 0) != 0, fA = (r | 0) > 0 | (r | 0) == 0 & n >>> 0 > 0;
          t: do
            if (lA & fA) {
              if (R = $(LA | 0, 0, 52) | 0, Q = P() | 0, LA >>> 0 > 15) {
                if (!((m | 0) == 0 & (o | 0) == 0)) {
                  AA = 16;
                  break A;
                }
                for (a = 0, e = 0; ; ) {
                  if (a = cA(a | 0, e | 0, 1, 0) | 0, e = P() | 0, !((e | 0) < (r | 0) | (e | 0) == (r | 0) & a >>> 0 < n >>> 0))
                    break t;
                  if (l = hA + (a << 3) | 0, tA = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, !((tA | 0) == 0 & (l | 0) == 0)) {
                    o = l, AA = 16;
                    break A;
                  }
                }
              }
              for (f = m, e = o, a = 0, l = 0; ; ) {
                if (!((f | 0) == 0 & (e | 0) == 0)) {
                  if (!(!0 & (e & 117440512 | 0) == 0)) {
                    AA = 21;
                    break A;
                  }
                  if (p = q(f | 0, e | 0, 52) | 0, P() | 0, p = p & 15, (p | 0) < (LA | 0)) {
                    o = 12, AA = 27;
                    break A;
                  }
                  if ((p | 0) != (LA | 0) && (f = f | R, e = e & -15728641 | Q, p >>> 0 >= xA >>> 0)) {
                    h = LA;
                    do
                      tA = $(7, 0, (14 - h | 0) * 3 | 0) | 0, h = h + 1 | 0, f = tA | f, e = P() | 0 | e;
                    while (h >>> 0 < p >>> 0);
                  }
                  if (B = w0(f | 0, e | 0, n | 0, r | 0) | 0, E = P() | 0, h = kA + (B << 3) | 0, p = h, k = A[p >> 2] | 0, p = A[p + 4 >> 2] | 0, !((k | 0) == 0 & (p | 0) == 0)) {
                    z = 0, H = 0;
                    do {
                      if ((z | 0) > (r | 0) | (z | 0) == (r | 0) & H >>> 0 > n >>> 0) {
                        AA = 31;
                        break A;
                      }
                      if ((k | 0) == (f | 0) & (p & -117440513 | 0) == (e | 0)) {
                        x = q(k | 0, p | 0, 56) | 0, P() | 0, x = x & 7, D = x + 1 | 0, tA = q(k | 0, p | 0, 45) | 0, P() | 0;
                        e: do
                          if (!(lt(tA & 127) | 0))
                            p = 7;
                          else {
                            if (k = q(k | 0, p | 0, 52) | 0, P() | 0, k = k & 15, !k) {
                              p = 6;
                              break;
                            }
                            for (p = 1; ; ) {
                              if (tA = $(7, 0, (15 - p | 0) * 3 | 0) | 0, !((tA & f | 0) == 0 & ((P() | 0) & e | 0) == 0)) {
                                p = 7;
                                break e;
                              }
                              if (p >>> 0 < k >>> 0)
                                p = p + 1 | 0;
                              else {
                                p = 6;
                                break;
                              }
                            }
                          }
                        while (!1);
                        if ((x + 2 | 0) >>> 0 > p >>> 0) {
                          AA = 41;
                          break A;
                        }
                        tA = $(D | 0, 0, 56) | 0, e = P() | 0 | e & -117440513, I = h, A[I >> 2] = 0, A[I + 4 >> 2] = 0, f = tA | f;
                      } else
                        B = cA(B | 0, E | 0, 1, 0) | 0, B = g0(B | 0, P() | 0, n | 0, r | 0) | 0, E = P() | 0;
                      H = cA(H | 0, z | 0, 1, 0) | 0, z = P() | 0, h = kA + (B << 3) | 0, p = h, k = A[p >> 2] | 0, p = A[p + 4 >> 2] | 0;
                    } while (!((k | 0) == 0 & (p | 0) == 0));
                  }
                  tA = h, A[tA >> 2] = f, A[tA + 4 >> 2] = e;
                }
                if (a = cA(a | 0, l | 0, 1, 0) | 0, l = P() | 0, !((l | 0) < (r | 0) | (l | 0) == (r | 0) & a >>> 0 < n >>> 0))
                  break t;
                e = hA + (a << 3) | 0, f = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0;
              }
            }
          while (!1);
          if (tA = cA(n | 0, r | 0, 5, 0) | 0, I = P() | 0, I >>> 0 < 0 | (I | 0) == 0 & tA >>> 0 < 11) {
            AA = 85;
            break;
          }
          if (tA = An(n | 0, r | 0, 6, 0) | 0, P() | 0, tA = ve(tA, 8) | 0, !tA) {
            AA = 48;
            break;
          }
          do
            if (fA) {
              for (D = 0, e = 0, x = 0, z = 0; ; ) {
                if (p = kA + (D << 3) | 0, l = p, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0, (a | 0) == 0 & (l | 0) == 0)
                  I = x;
                else {
                  k = q(a | 0, l | 0, 56) | 0, P() | 0, k = k & 7, f = k + 1 | 0, B = l & -117440513, I = q(a | 0, l | 0, 45) | 0, P() | 0;
                  t: do
                    if (lt(I & 127) | 0) {
                      if (E = q(a | 0, l | 0, 52) | 0, P() | 0, E = E & 15, E | 0)
                        for (h = 1; ; ) {
                          if (I = $(7, 0, (15 - h | 0) * 3 | 0) | 0, !((a & I | 0) == 0 & (B & (P() | 0) | 0) == 0))
                            break t;
                          if (h >>> 0 < E >>> 0)
                            h = h + 1 | 0;
                          else
                            break;
                        }
                      l = $(f | 0, 0, 56) | 0, a = l | a, l = P() | 0 | B, f = p, A[f >> 2] = a, A[f + 4 >> 2] = l, f = k + 2 | 0;
                    }
                  while (!1);
                  (f | 0) == 7 ? (I = tA + (e << 3) | 0, A[I >> 2] = a, A[I + 4 >> 2] = l & -117440513, e = cA(e | 0, x | 0, 1, 0) | 0, I = P() | 0) : I = x;
                }
                if (D = cA(D | 0, z | 0, 1, 0) | 0, z = P() | 0, (z | 0) < (r | 0) | (z | 0) == (r | 0) & D >>> 0 < n >>> 0)
                  x = I;
                else
                  break;
              }
              if (fA) {
                if (H = LA >>> 0 > 15, R = $(LA | 0, 0, 52) | 0, Q = P() | 0, !lA) {
                  for (a = 0, h = 0, f = 0, l = 0; (m | 0) == 0 & (o | 0) == 0 || (LA = t + (a << 3) | 0, A[LA >> 2] = m, A[LA + 4 >> 2] = o, a = cA(a | 0, h | 0, 1, 0) | 0, h = P() | 0), f = cA(f | 0, l | 0, 1, 0) | 0, l = P() | 0, !!((l | 0) < (r | 0) | (l | 0) == (r | 0) & f >>> 0 < n >>> 0); )
                    o = hA + (f << 3) | 0, m = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0;
                  o = I;
                  break;
                }
                for (a = 0, h = 0, l = 0, f = 0; ; ) {
                  do
                    if (!((m | 0) == 0 & (o | 0) == 0)) {
                      if (E = q(m | 0, o | 0, 52) | 0, P() | 0, E = E & 15, H | (E | 0) < (LA | 0)) {
                        AA = 80;
                        break A;
                      }
                      if ((E | 0) != (LA | 0)) {
                        if (p = m | R, k = o & -15728641 | Q, E >>> 0 >= xA >>> 0) {
                          B = LA;
                          do
                            lA = $(7, 0, (14 - B | 0) * 3 | 0) | 0, B = B + 1 | 0, p = lA | p, k = P() | 0 | k;
                          while (B >>> 0 < E >>> 0);
                        }
                      } else
                        p = m, k = o;
                      x = w0(p | 0, k | 0, n | 0, r | 0) | 0, B = 0, E = 0, z = P() | 0;
                      do {
                        if ((B | 0) > (r | 0) | (B | 0) == (r | 0) & E >>> 0 > n >>> 0) {
                          AA = 81;
                          break A;
                        }
                        if (lA = kA + (x << 3) | 0, D = A[lA + 4 >> 2] | 0, (D & -117440513 | 0) == (k | 0) && (A[lA >> 2] | 0) == (p | 0)) {
                          AA = 65;
                          break;
                        }
                        lA = cA(x | 0, z | 0, 1, 0) | 0, x = g0(lA | 0, P() | 0, n | 0, r | 0) | 0, z = P() | 0, E = cA(E | 0, B | 0, 1, 0) | 0, B = P() | 0, lA = kA + (x << 3) | 0;
                      } while (!((A[lA >> 2] | 0) == (p | 0) && (A[lA + 4 >> 2] | 0) == (k | 0)));
                      if ((AA | 0) == 65 && (AA = 0, !0 & (D & 117440512 | 0) == 100663296))
                        break;
                      lA = t + (a << 3) | 0, A[lA >> 2] = m, A[lA + 4 >> 2] = o, a = cA(a | 0, h | 0, 1, 0) | 0, h = P() | 0;
                    }
                  while (!1);
                  if (l = cA(l | 0, f | 0, 1, 0) | 0, f = P() | 0, !((f | 0) < (r | 0) | (f | 0) == (r | 0) & l >>> 0 < n >>> 0))
                    break;
                  o = hA + (l << 3) | 0, m = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0;
                }
                o = I;
              } else
                a = 0, o = I;
            } else
              a = 0, e = 0, o = 0;
          while (!1);
          if (tn(kA | 0, 0, ZA | 0) | 0, y0(hA | 0, tA | 0, e << 3 | 0) | 0, dA(tA), (e | 0) == 0 & (o | 0) == 0) {
            AA = 89;
            break;
          } else
            t = t + (a << 3) | 0, r = o, n = e;
        }
        if ((AA | 0) == 16)
          !0 & (o & 117440512 | 0) == 0 ? (o = 4, AA = 27) : AA = 21;
        else if ((AA | 0) == 31)
          pA(27795, 27122, 620, 27132);
        else {
          if ((AA | 0) == 41)
            return dA(hA), dA(kA), AA = 10, AA | 0;
          if ((AA | 0) == 48)
            return dA(hA), dA(kA), AA = 13, AA | 0;
          (AA | 0) == 80 ? pA(27795, 27122, 711, 27132) : (AA | 0) == 81 ? pA(27795, 27122, 723, 27132) : (AA | 0) == 85 && (y0(t | 0, hA | 0, n << 3 | 0) | 0, AA = 89);
        }
        return (AA | 0) == 21 ? (dA(hA), dA(kA), AA = 5, AA | 0) : (AA | 0) == 27 ? (dA(hA), dA(kA), AA = o, AA | 0) : (AA | 0) == 89 ? (dA(hA), dA(kA), AA = 0, AA | 0) : 0;
      }
      function _s(e, t, n, r, o, a, l) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0, l = l | 0;
        var f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0;
        if (D = y, y = y + 16 | 0, x = D, !((n | 0) > 0 | (n | 0) == 0 & t >>> 0 > 0))
          return x = 0, y = D, x | 0;
        if ((l | 0) >= 16)
          return x = 12, y = D, x | 0;
        B = 0, E = 0, k = 0, f = 0;
        A: for (; ; ) {
          if (m = e + (B << 3) | 0, h = A[m >> 2] | 0, m = A[m + 4 >> 2] | 0, p = q(h | 0, m | 0, 52) | 0, P() | 0, (p & 15 | 0) > (l | 0)) {
            f = 12, h = 11;
            break;
          }
          if (m0(x, h, m, l), p = x, m = A[p >> 2] | 0, p = A[p + 4 >> 2] | 0, (m | 0) == 0 & (p | 0) == 0)
            h = k;
          else {
            h = k;
            do {
              if (!((f | 0) < (a | 0) | (f | 0) == (a | 0) & h >>> 0 < o >>> 0)) {
                h = 10;
                break A;
              }
              k = r + (h << 3) | 0, A[k >> 2] = m, A[k + 4 >> 2] = p, h = cA(h | 0, f | 0, 1, 0) | 0, f = P() | 0, p0(x), k = x, m = A[k >> 2] | 0, p = A[k + 4 >> 2] | 0;
            } while (!((m | 0) == 0 & (p | 0) == 0));
          }
          if (B = cA(B | 0, E | 0, 1, 0) | 0, E = P() | 0, (E | 0) < (n | 0) | (E | 0) == (n | 0) & B >>> 0 < t >>> 0)
            k = h;
          else {
            f = 0, h = 11;
            break;
          }
        }
        return (h | 0) == 10 ? (x = 14, y = D, x | 0) : (h | 0) == 11 ? (y = D, f | 0) : 0;
      }
      function dr(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0;
        B = y, y = y + 16 | 0, k = B;
        A: do
          if ((n | 0) > 0 | (n | 0) == 0 & t >>> 0 > 0) {
            for (m = 0, l = 0, a = 0, p = 0; ; ) {
              if (h = e + (m << 3) | 0, f = A[h >> 2] | 0, h = A[h + 4 >> 2] | 0, !((f | 0) == 0 & (h | 0) == 0) && (h = (oi(f, h, r, k) | 0) == 0, f = k, l = cA(A[f >> 2] | 0, A[f + 4 >> 2] | 0, l | 0, a | 0) | 0, a = P() | 0, !h)) {
                a = 12;
                break;
              }
              if (m = cA(m | 0, p | 0, 1, 0) | 0, p = P() | 0, !((p | 0) < (n | 0) | (p | 0) == (n | 0) & m >>> 0 < t >>> 0))
                break A;
            }
            return y = B, a | 0;
          } else
            l = 0, a = 0;
        while (!1);
        return A[o >> 2] = l, A[o + 4 >> 2] = a, o = 0, y = B, o | 0;
      }
      function cs(e, t) {
        return e = e | 0, t = t | 0, t = q(e | 0, t | 0, 52) | 0, P() | 0, t & 1 | 0;
      }
      function gt(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0;
        if (o = q(e | 0, t | 0, 52) | 0, P() | 0, o = o & 15, !o)
          return o = 0, o | 0;
        for (r = 1; ; ) {
          if (n = q(e | 0, t | 0, (15 - r | 0) * 3 | 0) | 0, P() | 0, n = n & 7, n | 0) {
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
      function mr(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        if (h = q(e | 0, t | 0, 52) | 0, P() | 0, h = h & 15, !h)
          return f = t, h = e, EA(f | 0), h | 0;
        for (f = 1, n = 0; ; ) {
          a = (15 - f | 0) * 3 | 0, r = $(7, 0, a | 0) | 0, o = P() | 0, l = q(e | 0, t | 0, a | 0) | 0, P() | 0, a = $(Mi(l & 7) | 0, 0, a | 0) | 0, l = P() | 0, e = a | e & ~r, t = l | t & ~o;
          A: do
            if (!n)
              if ((a & r | 0) == 0 & (l & o | 0) == 0)
                n = 0;
              else if (r = q(e | 0, t | 0, 52) | 0, P() | 0, r = r & 15, !r)
                n = 1;
              else {
                n = 1;
                t: for (; ; ) {
                  switch (l = q(e | 0, t | 0, (15 - n | 0) * 3 | 0) | 0, P() | 0, l & 7) {
                    case 1:
                      break t;
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
                  if (l = (15 - n | 0) * 3 | 0, o = q(e | 0, t | 0, l | 0) | 0, P() | 0, a = $(7, 0, l | 0) | 0, t = t & ~(P() | 0), l = $(Mi(o & 7) | 0, 0, l | 0) | 0, e = e & ~a | l, t = t | (P() | 0), n >>> 0 < r >>> 0)
                    n = n + 1 | 0;
                  else {
                    n = 1;
                    break;
                  }
              }
          while (!1);
          if (f >>> 0 < h >>> 0)
            f = f + 1 | 0;
          else
            break;
        }
        return EA(t | 0), e | 0;
      }
      function me(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        if (r = q(e | 0, t | 0, 52) | 0, P() | 0, r = r & 15, !r)
          return n = t, r = e, EA(n | 0), r | 0;
        for (n = 1; a = (15 - n | 0) * 3 | 0, l = q(e | 0, t | 0, a | 0) | 0, P() | 0, o = $(7, 0, a | 0) | 0, t = t & ~(P() | 0), a = $(Mi(l & 7) | 0, 0, a | 0) | 0, e = a | e & ~o, t = P() | 0 | t, n >>> 0 < r >>> 0; )
          n = n + 1 | 0;
        return EA(t | 0), e | 0;
      }
      function ds(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        if (h = q(e | 0, t | 0, 52) | 0, P() | 0, h = h & 15, !h)
          return f = t, h = e, EA(f | 0), h | 0;
        for (f = 1, n = 0; ; ) {
          a = (15 - f | 0) * 3 | 0, r = $(7, 0, a | 0) | 0, o = P() | 0, l = q(e | 0, t | 0, a | 0) | 0, P() | 0, a = $(ni(l & 7) | 0, 0, a | 0) | 0, l = P() | 0, e = a | e & ~r, t = l | t & ~o;
          A: do
            if (!n)
              if ((a & r | 0) == 0 & (l & o | 0) == 0)
                n = 0;
              else if (r = q(e | 0, t | 0, 52) | 0, P() | 0, r = r & 15, !r)
                n = 1;
              else {
                n = 1;
                t: for (; ; ) {
                  switch (l = q(e | 0, t | 0, (15 - n | 0) * 3 | 0) | 0, P() | 0, l & 7) {
                    case 1:
                      break t;
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
                  if (o = (15 - n | 0) * 3 | 0, a = $(7, 0, o | 0) | 0, l = t & ~(P() | 0), t = q(e | 0, t | 0, o | 0) | 0, P() | 0, t = $(ni(t & 7) | 0, 0, o | 0) | 0, e = e & ~a | t, t = l | (P() | 0), n >>> 0 < r >>> 0)
                    n = n + 1 | 0;
                  else {
                    n = 1;
                    break;
                  }
              }
          while (!1);
          if (f >>> 0 < h >>> 0)
            f = f + 1 | 0;
          else
            break;
        }
        return EA(t | 0), e | 0;
      }
      function Me(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        if (r = q(e | 0, t | 0, 52) | 0, P() | 0, r = r & 15, !r)
          return n = t, r = e, EA(n | 0), r | 0;
        for (n = 1; l = (15 - n | 0) * 3 | 0, a = $(7, 0, l | 0) | 0, o = t & ~(P() | 0), t = q(e | 0, t | 0, l | 0) | 0, P() | 0, t = $(ni(t & 7) | 0, 0, l | 0) | 0, e = t | e & ~a, t = P() | 0 | o, n >>> 0 < r >>> 0; )
          n = n + 1 | 0;
        return EA(t | 0), e | 0;
      }
      function h0(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (h = y, y = y + 64 | 0, f = h + 40 | 0, r = h + 24 | 0, o = h + 12 | 0, a = h, $(t | 0, 0, 52) | 0, n = P() | 0 | 134225919, !t)
          return (A[e + 4 >> 2] | 0) > 2 || (A[e + 8 >> 2] | 0) > 2 || (A[e + 12 >> 2] | 0) > 2 ? (l = 0, f = 0, EA(l | 0), y = h, f | 0) : ($(gn(e) | 0, 0, 45) | 0, l = P() | 0 | n, f = -1, EA(l | 0), y = h, f | 0);
        if (A[f >> 2] = A[e >> 2], A[f + 4 >> 2] = A[e + 4 >> 2], A[f + 8 >> 2] = A[e + 8 >> 2], A[f + 12 >> 2] = A[e + 12 >> 2], l = f + 4 | 0, (t | 0) > 0)
          for (e = -1; A[r >> 2] = A[l >> 2], A[r + 4 >> 2] = A[l + 4 >> 2], A[r + 8 >> 2] = A[l + 8 >> 2], t & 1 ? (is(l), A[o >> 2] = A[l >> 2], A[o + 4 >> 2] = A[l + 4 >> 2], A[o + 8 >> 2] = A[l + 8 >> 2], r0(o)) : (rr(l), A[o >> 2] = A[l >> 2], A[o + 4 >> 2] = A[l + 4 >> 2], A[o + 8 >> 2] = A[l + 8 >> 2], Ti(o)), ee(r, o, a), Ot(a), p = (15 - t | 0) * 3 | 0, m = $(7, 0, p | 0) | 0, n = n & ~(P() | 0), p = $(yn(a) | 0, 0, p | 0) | 0, e = p | e & ~m, n = P() | 0 | n, (t | 0) > 1; )
            t = t + -1 | 0;
        else
          e = -1;
        A: do
          if ((A[l >> 2] | 0) <= 2 && (A[f + 8 >> 2] | 0) <= 2 && (A[f + 12 >> 2] | 0) <= 2) {
            if (r = gn(f) | 0, t = $(r | 0, 0, 45) | 0, t = t | e, e = P() | 0 | n & -1040385, a = Xr(f) | 0, !(lt(r) | 0)) {
              if ((a | 0) <= 0)
                break;
              for (o = 0; ; ) {
                if (r = q(t | 0, e | 0, 52) | 0, P() | 0, r = r & 15, r)
                  for (n = 1; p = (15 - n | 0) * 3 | 0, f = q(t | 0, e | 0, p | 0) | 0, P() | 0, m = $(7, 0, p | 0) | 0, e = e & ~(P() | 0), p = $(Mi(f & 7) | 0, 0, p | 0) | 0, t = t & ~m | p, e = e | (P() | 0), n >>> 0 < r >>> 0; )
                    n = n + 1 | 0;
                if (o = o + 1 | 0, (o | 0) == (a | 0))
                  break A;
              }
            }
            o = q(t | 0, e | 0, 52) | 0, P() | 0, o = o & 15;
            t: do
              if (o) {
                n = 1;
                e: for (; ; ) {
                  switch (p = q(t | 0, e | 0, (15 - n | 0) * 3 | 0) | 0, P() | 0, p & 7) {
                    case 1:
                      break e;
                    case 0:
                      break;
                    default:
                      break t;
                  }
                  if (n >>> 0 < o >>> 0)
                    n = n + 1 | 0;
                  else
                    break t;
                }
                if (TA(r, A[f >> 2] | 0) | 0)
                  for (n = 1; f = (15 - n | 0) * 3 | 0, m = $(7, 0, f | 0) | 0, p = e & ~(P() | 0), e = q(t | 0, e | 0, f | 0) | 0, P() | 0, e = $(ni(e & 7) | 0, 0, f | 0) | 0, t = t & ~m | e, e = p | (P() | 0), n >>> 0 < o >>> 0; )
                    n = n + 1 | 0;
                else
                  for (n = 1; p = (15 - n | 0) * 3 | 0, f = q(t | 0, e | 0, p | 0) | 0, P() | 0, m = $(7, 0, p | 0) | 0, e = e & ~(P() | 0), p = $(Mi(f & 7) | 0, 0, p | 0) | 0, t = t & ~m | p, e = e | (P() | 0), n >>> 0 < o >>> 0; )
                    n = n + 1 | 0;
              }
            while (!1);
            if ((a | 0) > 0) {
              n = 0;
              do
                t = mr(t, e) | 0, e = P() | 0, n = n + 1 | 0;
              while ((n | 0) != (a | 0));
            }
          } else
            t = 0, e = 0;
        while (!1);
        return m = e, p = t, EA(m | 0), y = h, p | 0;
      }
      function ne(e) {
        return e = e | 0, (e | 0) % 2 | 0 | 0;
      }
      function kn(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0;
        return o = y, y = y + 16 | 0, r = o, t >>> 0 > 15 ? (r = 4, y = o, r | 0) : (A[e + 4 >> 2] & 2146435072 | 0) == 2146435072 || (A[e + 8 + 4 >> 2] & 2146435072 | 0) == 2146435072 ? (r = 3, y = o, r | 0) : (as(e, t, r), t = h0(r, t) | 0, r = P() | 0, A[n >> 2] = t, A[n + 4 >> 2] = r, (t | 0) == 0 & (r | 0) == 0 && pA(27795, 27122, 1050, 27145), r = 0, y = o, r | 0);
      }
      function Ki(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        if (o = n + 4 | 0, a = q(e | 0, t | 0, 52) | 0, P() | 0, a = a & 15, l = q(e | 0, t | 0, 45) | 0, P() | 0, r = (a | 0) == 0, lt(l & 127) | 0) {
          if (r)
            return l = 1, l | 0;
          r = 1;
        } else {
          if (r)
            return l = 0, l | 0;
          (A[o >> 2] | 0) == 0 && (A[n + 8 >> 2] | 0) == 0 ? r = (A[n + 12 >> 2] | 0) != 0 & 1 : r = 1;
        }
        for (n = 1; n & 1 ? r0(o) : Ti(o), l = q(e | 0, t | 0, (15 - n | 0) * 3 | 0) | 0, P() | 0, o0(o, l & 7), n >>> 0 < a >>> 0; )
          n = n + 1 | 0;
        return r | 0;
      }
      function pi(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (p = y, y = y + 16 | 0, h = p, m = q(e | 0, t | 0, 45) | 0, P() | 0, m = m & 127, m >>> 0 > 121)
          return A[n >> 2] = 0, A[n + 4 >> 2] = 0, A[n + 8 >> 2] = 0, A[n + 12 >> 2] = 0, m = 5, y = p, m | 0;
        A: do
          if ((lt(m) | 0) != 0 && (a = q(e | 0, t | 0, 52) | 0, P() | 0, a = a & 15, (a | 0) != 0)) {
            r = 1;
            t: for (; ; ) {
              switch (f = q(e | 0, t | 0, (15 - r | 0) * 3 | 0) | 0, P() | 0, f & 7) {
                case 5:
                  break t;
                case 0:
                  break;
                default: {
                  r = t;
                  break A;
                }
              }
              if (r >>> 0 < a >>> 0)
                r = r + 1 | 0;
              else {
                r = t;
                break A;
              }
            }
            for (o = 1, r = t; t = (15 - o | 0) * 3 | 0, l = $(7, 0, t | 0) | 0, f = r & ~(P() | 0), r = q(e | 0, r | 0, t | 0) | 0, P() | 0, r = $(ni(r & 7) | 0, 0, t | 0) | 0, e = e & ~l | r, r = f | (P() | 0), o >>> 0 < a >>> 0; )
              o = o + 1 | 0;
          } else
            r = t;
        while (!1);
        if (f = 7696 + (m * 28 | 0) | 0, A[n >> 2] = A[f >> 2], A[n + 4 >> 2] = A[f + 4 >> 2], A[n + 8 >> 2] = A[f + 8 >> 2], A[n + 12 >> 2] = A[f + 12 >> 2], !(Ki(e, r, n) | 0))
          return m = 0, y = p, m | 0;
        if (l = n + 4 | 0, A[h >> 2] = A[l >> 2], A[h + 4 >> 2] = A[l + 4 >> 2], A[h + 8 >> 2] = A[l + 8 >> 2], a = q(e | 0, r | 0, 52) | 0, P() | 0, f = a & 15, a & 1 ? (Ti(l), a = f + 1 | 0) : a = f, !(lt(m) | 0))
          r = 0;
        else {
          A: do
            if (!f)
              r = 0;
            else
              for (t = 1; ; ) {
                if (o = q(e | 0, r | 0, (15 - t | 0) * 3 | 0) | 0, P() | 0, o = o & 7, o | 0) {
                  r = o;
                  break A;
                }
                if (t >>> 0 < f >>> 0)
                  t = t + 1 | 0;
                else {
                  r = 0;
                  break;
                }
              }
          while (!1);
          r = (r | 0) == 4 & 1;
        }
        if (!(di(n, a, r, 0) | 0))
          (a | 0) != (f | 0) && (A[l >> 2] = A[h >> 2], A[l + 4 >> 2] = A[h + 4 >> 2], A[l + 8 >> 2] = A[h + 8 >> 2]);
        else {
          if (lt(m) | 0)
            do
              ;
            while ((di(n, a, 0, 0) | 0) != 0);
          (a | 0) != (f | 0) && rr(l);
        }
        return m = 0, y = p, m | 0;
      }
      function Ge(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        return a = y, y = y + 16 | 0, r = a, o = pi(e, t, r) | 0, o | 0 ? (y = a, o | 0) : (o = q(e | 0, t | 0, 52) | 0, P() | 0, no(r, o & 15, n), o = 0, y = a, o | 0);
      }
      function De(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0;
        if (l = y, y = y + 16 | 0, a = l, r = pi(e, t, a) | 0, r | 0)
          return a = r, y = l, a | 0;
        r = q(e | 0, t | 0, 45) | 0, P() | 0, r = (lt(r & 127) | 0) == 0, o = q(e | 0, t | 0, 52) | 0, P() | 0, o = o & 15;
        A: do
          if (!r) {
            if (o | 0)
              for (r = 1; ; ) {
                if (f = $(7, 0, (15 - r | 0) * 3 | 0) | 0, !((f & e | 0) == 0 & ((P() | 0) & t | 0) == 0))
                  break A;
                if (r >>> 0 < o >>> 0)
                  r = r + 1 | 0;
                else
                  break;
              }
            return fr(a, o, 0, 5, n), f = 0, y = l, f | 0;
          }
        while (!1);
        return hr(a, o, 0, 6, n), f = 0, y = l, f | 0;
      }
      function _0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (o = q(e | 0, t | 0, 45) | 0, P() | 0, !(lt(o & 127) | 0))
          return o = 2, A[n >> 2] = o, 0;
        if (o = q(e | 0, t | 0, 52) | 0, P() | 0, o = o & 15, !o)
          return o = 5, A[n >> 2] = o, 0;
        for (r = 1; ; ) {
          if (a = $(7, 0, (15 - r | 0) * 3 | 0) | 0, !((a & e | 0) == 0 & ((P() | 0) & t | 0) == 0)) {
            r = 2, e = 6;
            break;
          }
          if (r >>> 0 < o >>> 0)
            r = r + 1 | 0;
          else {
            r = 5, e = 6;
            break;
          }
        }
        return (e | 0) == 6 && (A[n >> 2] = r), 0;
      }
      function c0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0;
        k = y, y = y + 128 | 0, m = k + 112 | 0, a = k + 96 | 0, p = k, o = q(e | 0, t | 0, 52) | 0, P() | 0, f = o & 15, A[m >> 2] = f, l = q(e | 0, t | 0, 45) | 0, P() | 0, l = l & 127;
        A: do
          if (lt(l) | 0) {
            if (f | 0)
              for (r = 1; ; ) {
                if (h = $(7, 0, (15 - r | 0) * 3 | 0) | 0, !((h & e | 0) == 0 & ((P() | 0) & t | 0) == 0)) {
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
              return h = $(f + 1 | 0, 0, 52) | 0, p = P() | 0 | t & -15728641, m = $(7, 0, (14 - f | 0) * 3 | 0) | 0, p = c0((h | e) & ~m, p & ~(P() | 0), n) | 0, y = k, p | 0;
          } else
            o = 0;
        while (!1);
        if (r = pi(e, t, a) | 0, !r) {
          o ? (l0(a, m, p), h = 5) : (_r(a, m, p), h = 6);
          A: do
            if (lt(l) | 0)
              if (!f)
                e = 5;
              else
                for (r = 1; ; ) {
                  if (l = $(7, 0, (15 - r | 0) * 3 | 0) | 0, !((l & e | 0) == 0 & ((P() | 0) & t | 0) == 0)) {
                    e = 2;
                    break A;
                  }
                  if (r >>> 0 < f >>> 0)
                    r = r + 1 | 0;
                  else {
                    e = 5;
                    break;
                  }
                }
            else
              e = 2;
          while (!1);
          tn(n | 0, -1, e << 2 | 0) | 0;
          A: do
            if (o)
              for (a = 0; ; ) {
                if (l = p + (a << 4) | 0, ls(l, A[m >> 2] | 0) | 0, l = A[l >> 2] | 0, f = A[n >> 2] | 0, (f | 0) == -1 | (f | 0) == (l | 0))
                  r = n;
                else {
                  o = 0;
                  do {
                    if (o = o + 1 | 0, o >>> 0 >= e >>> 0) {
                      r = 1;
                      break A;
                    }
                    r = n + (o << 2) | 0, f = A[r >> 2] | 0;
                  } while (!((f | 0) == -1 | (f | 0) == (l | 0)));
                }
                if (A[r >> 2] = l, a = a + 1 | 0, a >>> 0 >= h >>> 0) {
                  r = 0;
                  break;
                }
              }
            else
              for (a = 0; ; ) {
                if (l = p + (a << 4) | 0, di(l, A[m >> 2] | 0, 0, 1) | 0, l = A[l >> 2] | 0, f = A[n >> 2] | 0, (f | 0) == -1 | (f | 0) == (l | 0))
                  r = n;
                else {
                  o = 0;
                  do {
                    if (o = o + 1 | 0, o >>> 0 >= e >>> 0) {
                      r = 1;
                      break A;
                    }
                    r = n + (o << 2) | 0, f = A[r >> 2] | 0;
                  } while (!((f | 0) == -1 | (f | 0) == (l | 0)));
                }
                if (A[r >> 2] = l, a = a + 1 | 0, a >>> 0 >= h >>> 0) {
                  r = 0;
                  break;
                }
              }
          while (!1);
        }
        return p = r, y = k, p | 0;
      }
      function oo() {
        return 12;
      }
      function pr(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        if (e >>> 0 > 15)
          return f = 4, f | 0;
        if ($(e | 0, 0, 52) | 0, f = P() | 0 | 134225919, !e) {
          n = 0, r = 0;
          do
            lt(r) | 0 && ($(r | 0, 0, 45) | 0, l = f | (P() | 0), e = t + (n << 3) | 0, A[e >> 2] = -1, A[e + 4 >> 2] = l, n = n + 1 | 0), r = r + 1 | 0;
          while ((r | 0) != 122);
          return n = 0, n | 0;
        }
        n = 0, l = 0;
        do {
          if (lt(l) | 0) {
            for ($(l | 0, 0, 45) | 0, r = 1, o = -1, a = f | (P() | 0); h = $(7, 0, (15 - r | 0) * 3 | 0) | 0, o = o & ~h, a = a & ~(P() | 0), (r | 0) != (e | 0); )
              r = r + 1 | 0;
            h = t + (n << 3) | 0, A[h >> 2] = o, A[h + 4 >> 2] = a, n = n + 1 | 0;
          }
          l = l + 1 | 0;
        } while ((l | 0) != 122);
        return n = 0, n | 0;
      }
      function d0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0;
        if (R = y, y = y + 16 | 0, z = R, H = q(e | 0, t | 0, 52) | 0, P() | 0, H = H & 15, n >>> 0 > 15)
          return H = 4, y = R, H | 0;
        if ((H | 0) < (n | 0))
          return H = 12, y = R, H | 0;
        if ((H | 0) != (n | 0))
          if (a = $(n | 0, 0, 52) | 0, a = a | e, f = P() | 0 | t & -15728641, (H | 0) > (n | 0)) {
            h = n;
            do
              D = $(7, 0, (14 - h | 0) * 3 | 0) | 0, h = h + 1 | 0, a = D | a, f = P() | 0 | f;
            while ((h | 0) < (H | 0));
            D = a;
          } else
            D = a;
        else
          D = e, f = t;
        x = q(D | 0, f | 0, 45) | 0, P() | 0;
        A: do
          if (lt(x & 127) | 0) {
            if (h = q(D | 0, f | 0, 52) | 0, P() | 0, h = h & 15, h | 0)
              for (a = 1; ; ) {
                if (x = $(7, 0, (15 - a | 0) * 3 | 0) | 0, !((x & D | 0) == 0 & ((P() | 0) & f | 0) == 0)) {
                  m = 33;
                  break A;
                }
                if (a >>> 0 < h >>> 0)
                  a = a + 1 | 0;
                else
                  break;
              }
            if (x = r, A[x >> 2] = 0, A[x + 4 >> 2] = 0, (H | 0) > (n | 0)) {
              for (x = t & -15728641, E = H; ; ) {
                if (B = E, E = E + -1 | 0, E >>> 0 > 15 | (H | 0) < (E | 0)) {
                  m = 19;
                  break;
                }
                if ((H | 0) != (E | 0))
                  if (a = $(E | 0, 0, 52) | 0, a = a | e, h = P() | 0 | x, (H | 0) < (B | 0))
                    k = a;
                  else {
                    m = E;
                    do
                      k = $(7, 0, (14 - m | 0) * 3 | 0) | 0, m = m + 1 | 0, a = k | a, h = P() | 0 | h;
                    while ((m | 0) < (H | 0));
                    k = a;
                  }
                else
                  k = e, h = t;
                if (p = q(k | 0, h | 0, 45) | 0, P() | 0, !(lt(p & 127) | 0))
                  a = 0;
                else {
                  p = q(k | 0, h | 0, 52) | 0, P() | 0, p = p & 15;
                  t: do
                    if (!p)
                      a = 0;
                    else
                      for (m = 1; ; ) {
                        if (a = q(k | 0, h | 0, (15 - m | 0) * 3 | 0) | 0, P() | 0, a = a & 7, a | 0)
                          break t;
                        if (m >>> 0 < p >>> 0)
                          m = m + 1 | 0;
                        else {
                          a = 0;
                          break;
                        }
                      }
                  while (!1);
                  a = (a | 0) == 0 & 1;
                }
                if (h = q(e | 0, t | 0, (15 - B | 0) * 3 | 0) | 0, P() | 0, h = h & 7, (h | 0) == 7) {
                  o = 5, m = 42;
                  break;
                }
                if (a = (a | 0) != 0, (h | 0) == 1 & a) {
                  o = 5, m = 42;
                  break;
                }
                if (k = h + (((h | 0) != 0 & a) << 31 >> 31) | 0, k | 0 && (m = H - B | 0, m = gi(7, 0, m, ((m | 0) < 0) << 31 >> 31) | 0, p = P() | 0, a ? (a = Gt(m | 0, p | 0, 5, 0) | 0, a = cA(a | 0, P() | 0, -5, -1) | 0, a = An(a | 0, P() | 0, 6, 0) | 0, a = cA(a | 0, P() | 0, 1, 0) | 0, h = P() | 0) : (a = m, h = p), B = k + -1 | 0, B = Gt(m | 0, p | 0, B | 0, ((B | 0) < 0) << 31 >> 31 | 0) | 0, B = cA(a | 0, h | 0, B | 0, P() | 0) | 0, k = P() | 0, p = r, p = cA(B | 0, k | 0, A[p >> 2] | 0, A[p + 4 >> 2] | 0) | 0, k = P() | 0, B = r, A[B >> 2] = p, A[B + 4 >> 2] = k), (E | 0) <= (n | 0)) {
                  m = 37;
                  break;
                }
              }
              if ((m | 0) == 19)
                pA(27795, 27122, 1367, 27158);
              else if ((m | 0) == 37) {
                l = r, o = A[l + 4 >> 2] | 0, l = A[l >> 2] | 0;
                break;
              } else if ((m | 0) == 42)
                return y = R, o | 0;
            } else
              o = 0, l = 0;
          } else
            m = 33;
        while (!1);
        A: do
          if ((m | 0) == 33)
            if (x = r, A[x >> 2] = 0, A[x + 4 >> 2] = 0, (H | 0) > (n | 0)) {
              for (a = H; ; ) {
                if (o = q(e | 0, t | 0, (15 - a | 0) * 3 | 0) | 0, P() | 0, o = o & 7, (o | 0) == 7) {
                  o = 5;
                  break;
                }
                if (l = H - a | 0, l = gi(7, 0, l, ((l | 0) < 0) << 31 >> 31) | 0, o = Gt(l | 0, P() | 0, o | 0, 0) | 0, l = P() | 0, x = r, l = cA(A[x >> 2] | 0, A[x + 4 >> 2] | 0, o | 0, l | 0) | 0, o = P() | 0, x = r, A[x >> 2] = l, A[x + 4 >> 2] = o, a = a + -1 | 0, (a | 0) <= (n | 0))
                  break A;
              }
              return y = R, o | 0;
            } else
              o = 0, l = 0;
        while (!1);
        return oi(D, f, H, z) | 0 && pA(27795, 27122, 1327, 27173), H = z, z = A[H + 4 >> 2] | 0, ((o | 0) > -1 | (o | 0) == -1 & l >>> 0 > 4294967295) & ((z | 0) > (o | 0) | ((z | 0) == (o | 0) ? (A[H >> 2] | 0) >>> 0 > l >>> 0 : 0)) ? (H = 0, y = R, H | 0) : (pA(27795, 27122, 1407, 27158), 0);
      }
      function ms(e, t, n, r, o, a) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0;
        var l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0;
        if (k = y, y = y + 16 | 0, l = k, o >>> 0 > 15)
          return a = 4, y = k, a | 0;
        if (f = q(n | 0, r | 0, 52) | 0, P() | 0, f = f & 15, (f | 0) > (o | 0))
          return a = 12, y = k, a | 0;
        if (oi(n, r, o, l) | 0 && pA(27795, 27122, 1327, 27173), p = l, m = A[p + 4 >> 2] | 0, !(((t | 0) > -1 | (t | 0) == -1 & e >>> 0 > 4294967295) & ((m | 0) > (t | 0) | ((m | 0) == (t | 0) ? (A[p >> 2] | 0) >>> 0 > e >>> 0 : 0))))
          return a = 2, y = k, a | 0;
        p = o - f | 0, o = $(o | 0, 0, 52) | 0, h = P() | 0 | r & -15728641, m = a, A[m >> 2] = o | n, A[m + 4 >> 2] = h, m = q(n | 0, r | 0, 45) | 0, P() | 0;
        A: do
          if (lt(m & 127) | 0) {
            if (f | 0)
              for (l = 1; ; ) {
                if (m = $(7, 0, (15 - l | 0) * 3 | 0) | 0, !((m & n | 0) == 0 & ((P() | 0) & r | 0) == 0))
                  break A;
                if (l >>> 0 < f >>> 0)
                  l = l + 1 | 0;
                else
                  break;
              }
            if ((p | 0) < 1)
              return a = 0, y = k, a | 0;
            for (m = f ^ 15, r = -1, h = 1, l = 1; ; ) {
              f = p - h | 0, f = gi(7, 0, f, ((f | 0) < 0) << 31 >> 31) | 0, n = P() | 0;
              do
                if (l)
                  if (l = Gt(f | 0, n | 0, 5, 0) | 0, l = cA(l | 0, P() | 0, -5, -1) | 0, l = An(l | 0, P() | 0, 6, 0) | 0, o = P() | 0, (t | 0) > (o | 0) | (t | 0) == (o | 0) & e >>> 0 > l >>> 0) {
                    t = cA(e | 0, t | 0, -1, -1) | 0, t = Nt(t | 0, P() | 0, l | 0, o | 0) | 0, l = P() | 0, B = a, x = A[B >> 2] | 0, B = A[B + 4 >> 2] | 0, D = (m + r | 0) * 3 | 0, E = $(7, 0, D | 0) | 0, B = B & ~(P() | 0), r = An(t | 0, l | 0, f | 0, n | 0) | 0, e = P() | 0, o = cA(r | 0, e | 0, 2, 0) | 0, D = $(o | 0, P() | 0, D | 0) | 0, B = P() | 0 | B, o = a, A[o >> 2] = D | x & ~E, A[o + 4 >> 2] = B, e = Gt(r | 0, e | 0, f | 0, n | 0) | 0, e = Nt(t | 0, l | 0, e | 0, P() | 0) | 0, l = 0, t = P() | 0;
                    break;
                  } else {
                    D = a, E = A[D >> 2] | 0, D = A[D + 4 >> 2] | 0, x = $(7, 0, (m + r | 0) * 3 | 0) | 0, D = D & ~(P() | 0), l = a, A[l >> 2] = E & ~x, A[l + 4 >> 2] = D, l = 1;
                    break;
                  }
                else
                  E = a, o = A[E >> 2] | 0, E = A[E + 4 >> 2] | 0, r = (m + r | 0) * 3 | 0, B = $(7, 0, r | 0) | 0, E = E & ~(P() | 0), D = An(e | 0, t | 0, f | 0, n | 0) | 0, l = P() | 0, r = $(D | 0, l | 0, r | 0) | 0, E = P() | 0 | E, x = a, A[x >> 2] = r | o & ~B, A[x + 4 >> 2] = E, l = Gt(D | 0, l | 0, f | 0, n | 0) | 0, e = Nt(e | 0, t | 0, l | 0, P() | 0) | 0, l = 0, t = P() | 0;
              while (!1);
              if ((p | 0) > (h | 0))
                r = ~h, h = h + 1 | 0;
              else {
                t = 0;
                break;
              }
            }
            return y = k, t | 0;
          }
        while (!1);
        if ((p | 0) < 1)
          return D = 0, y = k, D | 0;
        for (o = f ^ 15, l = 1; ; )
          if (x = p - l | 0, x = gi(7, 0, x, ((x | 0) < 0) << 31 >> 31) | 0, D = P() | 0, h = a, n = A[h >> 2] | 0, h = A[h + 4 >> 2] | 0, f = (o - l | 0) * 3 | 0, r = $(7, 0, f | 0) | 0, h = h & ~(P() | 0), B = An(e | 0, t | 0, x | 0, D | 0) | 0, E = P() | 0, f = $(B | 0, E | 0, f | 0) | 0, h = P() | 0 | h, m = a, A[m >> 2] = f | n & ~r, A[m + 4 >> 2] = h, D = Gt(B | 0, E | 0, x | 0, D | 0) | 0, e = Nt(e | 0, t | 0, D | 0, P() | 0) | 0, t = P() | 0, (p | 0) <= (l | 0)) {
            t = 0;
            break;
          } else
            l = l + 1 | 0;
        return y = k, t | 0;
      }
      function m0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        o = q(t | 0, n | 0, 52) | 0, P() | 0, o = o & 15, (t | 0) == 0 & (n | 0) == 0 | ((r | 0) > 15 | (o | 0) > (r | 0)) ? (a = -1, t = -1, n = 0, o = 0) : (t = ro(t, n, o + 1 | 0, r) | 0, l = (P() | 0) & -15728641, n = $(r | 0, 0, 52) | 0, n = t | n, l = l | (P() | 0), t = (nt(n, l) | 0) == 0, a = o, t = t ? -1 : r, o = l), l = e, A[l >> 2] = n, A[l + 4 >> 2] = o, A[e + 8 >> 2] = a, A[e + 12 >> 2] = t;
      }
      function so(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        if (o = q(e | 0, t | 0, 52) | 0, P() | 0, o = o & 15, a = r + 8 | 0, A[a >> 2] = o, (e | 0) == 0 & (t | 0) == 0 | ((n | 0) > 15 | (o | 0) > (n | 0))) {
          n = r, A[n >> 2] = 0, A[n + 4 >> 2] = 0, A[a >> 2] = -1, A[r + 12 >> 2] = -1;
          return;
        }
        if (e = ro(e, t, o + 1 | 0, n) | 0, a = (P() | 0) & -15728641, o = $(n | 0, 0, 52) | 0, o = e | o, a = a | (P() | 0), e = r, A[e >> 2] = o, A[e + 4 >> 2] = a, e = r + 12 | 0, nt(o, a) | 0) {
          A[e >> 2] = n;
          return;
        } else {
          A[e >> 2] = -1;
          return;
        }
      }
      function p0(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0;
        if (n = e, t = A[n >> 2] | 0, n = A[n + 4 >> 2] | 0, !((t | 0) == 0 & (n | 0) == 0) && (r = q(t | 0, n | 0, 52) | 0, P() | 0, r = r & 15, f = $(1, 0, (r ^ 15) * 3 | 0) | 0, t = cA(f | 0, P() | 0, t | 0, n | 0) | 0, n = P() | 0, f = e, A[f >> 2] = t, A[f + 4 >> 2] = n, f = e + 8 | 0, l = A[f >> 2] | 0, !((r | 0) < (l | 0)))) {
          for (h = e + 12 | 0, a = r; ; ) {
            if ((a | 0) == (l | 0)) {
              r = 5;
              break;
            }
            if (m = (a | 0) == (A[h >> 2] | 0), o = (15 - a | 0) * 3 | 0, r = q(t | 0, n | 0, o | 0) | 0, P() | 0, r = r & 7, m & ((r | 0) == 1 & !0)) {
              r = 7;
              break;
            }
            if (!((r | 0) == 7 & !0)) {
              r = 10;
              break;
            }
            if (m = $(1, 0, o | 0) | 0, t = cA(t | 0, n | 0, m | 0, P() | 0) | 0, n = P() | 0, m = e, A[m >> 2] = t, A[m + 4 >> 2] = n, (a | 0) > (l | 0))
              a = a + -1 | 0;
            else {
              r = 10;
              break;
            }
          }
          if ((r | 0) == 5) {
            m = e, A[m >> 2] = 0, A[m + 4 >> 2] = 0, A[f >> 2] = -1, A[h >> 2] = -1;
            return;
          } else if ((r | 0) == 7) {
            l = $(1, 0, o | 0) | 0, l = cA(t | 0, n | 0, l | 0, P() | 0) | 0, f = P() | 0, m = e, A[m >> 2] = l, A[m + 4 >> 2] = f, A[h >> 2] = a + -1;
            return;
          } else if ((r | 0) == 10)
            return;
        }
      }
      function Pn(e) {
        e = +e;
        var t = 0;
        return t = e < 0 ? e + 6.283185307179586 : e, +(e >= 6.283185307179586 ? t + -6.283185307179586 : t);
      }
      function Yt(e, t) {
        return e = e | 0, t = t | 0, +CA(+(+w[e >> 3] - +w[t >> 3])) < 17453292519943298e-27 ? (t = +CA(+(+w[e + 8 >> 3] - +w[t + 8 >> 3])) < 17453292519943298e-27, t | 0) : (t = 0, t | 0);
      }
      function Zt(e, t) {
        switch (e = +e, t = t | 0, t | 0) {
          case 1: {
            e = e < 0 ? e + 6.283185307179586 : e;
            break;
          }
          case 2: {
            e = e > 0 ? e + -6.283185307179586 : e;
            break;
          }
        }
        return +e;
      }
      function ps(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = +w[t >> 3], r = +w[e >> 3], a = +DA(+((o - r) * 0.5)), n = +DA(+((+w[t + 8 >> 3] - +w[e + 8 >> 3]) * 0.5)), n = a * a + n * (+YA(+o) * +YA(+r) * n), +(+he(+ +HA(+n), + +HA(+(1 - n))) * 2);
      }
      function vi(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = +w[t >> 3], r = +w[e >> 3], a = +DA(+((o - r) * 0.5)), n = +DA(+((+w[t + 8 >> 3] - +w[e + 8 >> 3]) * 0.5)), n = a * a + n * (+YA(+o) * +YA(+r) * n), +(+he(+ +HA(+n), + +HA(+(1 - n))) * 2 * 6371.007180918475);
      }
      function vs(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = +w[t >> 3], r = +w[e >> 3], a = +DA(+((o - r) * 0.5)), n = +DA(+((+w[t + 8 >> 3] - +w[e + 8 >> 3]) * 0.5)), n = a * a + n * (+YA(+o) * +YA(+r) * n), +(+he(+ +HA(+n), + +HA(+(1 - n))) * 2 * 6371.007180918475 * 1e3);
      }
      function ao(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0;
        return a = +w[t >> 3], r = +YA(+a), o = +w[t + 8 >> 3] - +w[e + 8 >> 3], l = r * +DA(+o), n = +w[e >> 3], + +he(+l, +(+DA(+a) * +YA(+n) - +YA(+o) * (r * +DA(+n))));
      }
      function gs(e, t, n, r) {
        e = e | 0, t = +t, n = +n, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0;
        if (n < 1e-16) {
          A[r >> 2] = A[e >> 2], A[r + 4 >> 2] = A[e + 4 >> 2], A[r + 8 >> 2] = A[e + 8 >> 2], A[r + 12 >> 2] = A[e + 12 >> 2];
          return;
        }
        a = t < 0 ? t + 6.283185307179586 : t, a = t >= 6.283185307179586 ? a + -6.283185307179586 : a;
        do
          if (a < 1e-16)
            t = +w[e >> 3] + n, w[r >> 3] = t, o = r;
          else {
            if (o = +CA(+(a + -3.141592653589793)) < 1e-16, t = +w[e >> 3], o) {
              t = t - n, w[r >> 3] = t, o = r;
              break;
            }
            if (l = +YA(+n), n = +DA(+n), t = l * +DA(+t) + +YA(+a) * (n * +YA(+t)), t = t > 1 ? 1 : t, t = +Jo(+(t < -1 ? -1 : t)), w[r >> 3] = t, +CA(+(t + -1.5707963267948966)) < 1e-16) {
              w[r >> 3] = 1.5707963267948966, w[r + 8 >> 3] = 0;
              return;
            }
            if (+CA(+(t + 1.5707963267948966)) < 1e-16) {
              w[r >> 3] = -1.5707963267948966, w[r + 8 >> 3] = 0;
              return;
            }
            if (f = 1 / +YA(+t), a = n * +DA(+a) * f, n = +w[e >> 3], t = f * ((l - +DA(+t) * +DA(+n)) / +YA(+n)), l = a > 1 ? 1 : a, t = t > 1 ? 1 : t, t = +w[e + 8 >> 3] + +he(+(l < -1 ? -1 : l), +(t < -1 ? -1 : t)), t > 3.141592653589793)
              do
                t = t + -6.283185307179586;
              while (t > 3.141592653589793);
            if (t < -3.141592653589793)
              do
                t = t + 6.283185307179586;
              while (t < -3.141592653589793);
            w[r + 8 >> 3] = t;
            return;
          }
        while (!1);
        if (+CA(+(t + -1.5707963267948966)) < 1e-16) {
          w[o >> 3] = 1.5707963267948966, w[r + 8 >> 3] = 0;
          return;
        }
        if (+CA(+(t + 1.5707963267948966)) < 1e-16) {
          w[o >> 3] = -1.5707963267948966, w[r + 8 >> 3] = 0;
          return;
        }
        if (t = +w[e + 8 >> 3], t > 3.141592653589793)
          do
            t = t + -6.283185307179586;
          while (t > 3.141592653589793);
        if (t < -3.141592653589793)
          do
            t = t + 6.283185307179586;
          while (t < -3.141592653589793);
        w[r + 8 >> 3] = t;
      }
      function qi(e, t) {
        return e = e | 0, t = t | 0, e >>> 0 > 15 ? (t = 4, t | 0) : (w[t >> 3] = +w[20656 + (e << 3) >> 3], t = 0, t | 0);
      }
      function ws(e, t) {
        return e = e | 0, t = t | 0, e >>> 0 > 15 ? (t = 4, t | 0) : (w[t >> 3] = +w[20784 + (e << 3) >> 3], t = 0, t | 0);
      }
      function Ji(e, t) {
        return e = e | 0, t = t | 0, e >>> 0 > 15 ? (t = 4, t | 0) : (w[t >> 3] = +w[20912 + (e << 3) >> 3], t = 0, t | 0);
      }
      function lo(e, t) {
        return e = e | 0, t = t | 0, e >>> 0 > 15 ? (t = 4, t | 0) : (w[t >> 3] = +w[21040 + (e << 3) >> 3], t = 0, t | 0);
      }
      function Bn(e, t) {
        e = e | 0, t = t | 0;
        var n = 0;
        return e >>> 0 > 15 ? (t = 4, t | 0) : (n = gi(7, 0, e, ((e | 0) < 0) << 31 >> 31) | 0, n = Gt(n | 0, P() | 0, 120, 0) | 0, e = P() | 0, A[t >> 2] = n | 2, A[t + 4 >> 2] = e, t = 0, t | 0);
      }
      function uo(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0;
        return B = +w[t >> 3], p = +w[e >> 3], h = +DA(+((B - p) * 0.5)), a = +w[t + 8 >> 3], m = +w[e + 8 >> 3], l = +DA(+((a - m) * 0.5)), f = +YA(+p), k = +YA(+B), l = h * h + l * (k * f * l), l = +he(+ +HA(+l), + +HA(+(1 - l))) * 2, h = +w[n >> 3], B = +DA(+((h - B) * 0.5)), r = +w[n + 8 >> 3], a = +DA(+((r - a) * 0.5)), o = +YA(+h), a = B * B + a * (k * o * a), a = +he(+ +HA(+a), + +HA(+(1 - a))) * 2, h = +DA(+((p - h) * 0.5)), r = +DA(+((m - r) * 0.5)), r = h * h + r * (f * o * r), r = +he(+ +HA(+r), + +HA(+(1 - r))) * 2, o = (l + a + r) * 0.5, +(+e0(+ +HA(+(+fe(+(o * 0.5)) * +fe(+((o - l) * 0.5)) * +fe(+((o - a) * 0.5)) * +fe(+((o - r) * 0.5))))) * 4);
      }
      function Ie(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0;
        if (f = y, y = y + 192 | 0, a = f + 168 | 0, l = f, o = Ge(e, t, a) | 0, o | 0)
          return n = o, y = f, n | 0;
        if (De(e, t, l) | 0 && pA(27795, 27190, 415, 27199), t = A[l >> 2] | 0, (t | 0) > 0) {
          if (r = +uo(l + 8 | 0, l + 8 + (((t | 0) != 1 & 1) << 4) | 0, a) + 0, (t | 0) != 1) {
            e = 1;
            do
              o = e, e = e + 1 | 0, r = r + +uo(l + 8 + (o << 4) | 0, l + 8 + (((e | 0) % (t | 0) | 0) << 4) | 0, a);
            while ((e | 0) < (t | 0));
          }
        } else
          r = 0;
        return w[n >> 3] = r, n = 0, y = f, n | 0;
      }
      function fo(e, t, n) {
        return e = e | 0, t = t | 0, n = n | 0, e = Ie(e, t, n) | 0, e | 0 || (w[n >> 3] = +w[n >> 3] * 6371.007180918475 * 6371.007180918475), e | 0;
      }
      function ho(e, t, n) {
        return e = e | 0, t = t | 0, n = n | 0, e = Ie(e, t, n) | 0, e | 0 || (w[n >> 3] = +w[n >> 3] * 6371.007180918475 * 6371.007180918475 * 1e3 * 1e3), e | 0;
      }
      function En(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (f = y, y = y + 176 | 0, l = f, e = Ne(e, t, l) | 0, e | 0)
          return l = e, y = f, l | 0;
        if (w[n >> 3] = 0, e = A[l >> 2] | 0, (e | 0) <= 1)
          return l = 0, y = f, l | 0;
        t = e + -1 | 0, e = 0, r = +w[l + 8 >> 3], o = +w[l + 16 >> 3], a = 0;
        do
          e = e + 1 | 0, m = r, r = +w[l + 8 + (e << 4) >> 3], p = +DA(+((r - m) * 0.5)), h = o, o = +w[l + 8 + (e << 4) + 8 >> 3], h = +DA(+((o - h) * 0.5)), h = p * p + h * (+YA(+r) * +YA(+m) * h), a = a + +he(+ +HA(+h), + +HA(+(1 - h))) * 2;
        while ((e | 0) < (t | 0));
        return w[n >> 3] = a, l = 0, y = f, l | 0;
      }
      function ys(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (f = y, y = y + 176 | 0, l = f, e = Ne(e, t, l) | 0, e | 0)
          return l = e, a = +w[n >> 3], a = a * 6371.007180918475, w[n >> 3] = a, y = f, l | 0;
        if (w[n >> 3] = 0, e = A[l >> 2] | 0, (e | 0) <= 1)
          return l = 0, a = 0, a = a * 6371.007180918475, w[n >> 3] = a, y = f, l | 0;
        t = e + -1 | 0, e = 0, r = +w[l + 8 >> 3], o = +w[l + 16 >> 3], a = 0;
        do
          e = e + 1 | 0, m = r, r = +w[l + 8 + (e << 4) >> 3], p = +DA(+((r - m) * 0.5)), h = o, o = +w[l + 8 + (e << 4) + 8 >> 3], h = +DA(+((o - h) * 0.5)), h = p * p + h * (+YA(+m) * +YA(+r) * h), a = a + +he(+ +HA(+h), + +HA(+(1 - h))) * 2;
        while ((e | 0) != (t | 0));
        return w[n >> 3] = a, l = 0, p = a, p = p * 6371.007180918475, w[n >> 3] = p, y = f, l | 0;
      }
      function v0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (f = y, y = y + 176 | 0, l = f, e = Ne(e, t, l) | 0, e | 0)
          return l = e, a = +w[n >> 3], a = a * 6371.007180918475, a = a * 1e3, w[n >> 3] = a, y = f, l | 0;
        if (w[n >> 3] = 0, e = A[l >> 2] | 0, (e | 0) <= 1)
          return l = 0, a = 0, a = a * 6371.007180918475, a = a * 1e3, w[n >> 3] = a, y = f, l | 0;
        t = e + -1 | 0, e = 0, r = +w[l + 8 >> 3], o = +w[l + 16 >> 3], a = 0;
        do
          e = e + 1 | 0, m = r, r = +w[l + 8 + (e << 4) >> 3], p = +DA(+((r - m) * 0.5)), h = o, o = +w[l + 8 + (e << 4) + 8 >> 3], h = +DA(+((o - h) * 0.5)), h = p * p + h * (+YA(+m) * +YA(+r) * h), a = a + +he(+ +HA(+h), + +HA(+(1 - h))) * 2;
        while ((e | 0) != (t | 0));
        return w[n >> 3] = a, l = 0, p = a, p = p * 6371.007180918475, p = p * 1e3, w[n >> 3] = p, y = f, l | 0;
      }
      function xn(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0;
        return t = ve(1, 12) | 0, t || pA(27280, 27235, 49, 27293), n = e + 4 | 0, r = A[n >> 2] | 0, r | 0 ? (r = r + 8 | 0, A[r >> 2] = t, A[n >> 2] = t, t | 0) : (A[e >> 2] | 0 && pA(27310, 27235, 61, 27333), r = e, A[r >> 2] = t, A[n >> 2] = t, t | 0);
      }
      function _o(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0;
        return r = wi(24) | 0, r || pA(27347, 27235, 78, 27361), A[r >> 2] = A[t >> 2], A[r + 4 >> 2] = A[t + 4 >> 2], A[r + 8 >> 2] = A[t + 8 >> 2], A[r + 12 >> 2] = A[t + 12 >> 2], A[r + 16 >> 2] = 0, t = e + 4 | 0, n = A[t >> 2] | 0, n | 0 ? (A[n + 16 >> 2] = r, A[t >> 2] = r, r | 0) : (A[e >> 2] | 0 && pA(27376, 27235, 82, 27361), A[e >> 2] = r, A[t >> 2] = r, r | 0);
      }
      function vr(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0;
        if (e)
          for (r = 1; ; ) {
            if (t = A[e >> 2] | 0, t | 0)
              do {
                if (n = A[t >> 2] | 0, n | 0)
                  do
                    o = n, n = A[n + 16 >> 2] | 0, dA(o);
                  while ((n | 0) != 0);
                o = t, t = A[t + 8 >> 2] | 0, dA(o);
              } while ((t | 0) != 0);
            if (t = e, e = A[e + 8 >> 2] | 0, r || dA(t), e)
              r = 0;
            else
              break;
          }
      }
      function bs(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0, LA = 0, ZA = 0, kA = 0, hA = 0, AA = 0, SA = 0, ut = 0, MA = 0;
        if (o = e + 8 | 0, A[o >> 2] | 0)
          return MA = 1, MA | 0;
        if (r = A[e >> 2] | 0, !r)
          return MA = 0, MA | 0;
        t = r, n = 0;
        do
          n = n + 1 | 0, t = A[t + 8 >> 2] | 0;
        while ((t | 0) != 0);
        if (n >>> 0 < 2)
          return MA = 0, MA | 0;
        SA = wi(n << 2) | 0, SA || pA(27396, 27235, 317, 27415), AA = wi(n << 5) | 0, AA || pA(27437, 27235, 321, 27415), A[e >> 2] = 0, fA = e + 4 | 0, A[fA >> 2] = 0, A[o >> 2] = 0, n = 0, hA = 0, tA = 0, k = 0;
        A: for (; ; ) {
          if (p = A[r >> 2] | 0, p) {
            a = 0, l = p;
            do {
              if (h = +w[l + 8 >> 3], t = l, l = A[l + 16 >> 2] | 0, m = (l | 0) == 0, o = m ? p : l, f = +w[o + 8 >> 3], +CA(+(h - f)) > 3.141592653589793) {
                MA = 14;
                break;
              }
              a = a + (f - h) * (+w[t >> 3] + +w[o >> 3]);
            } while (!m);
            if ((MA | 0) == 14) {
              MA = 0, a = 0, t = p;
              do
                I = +w[t + 8 >> 3], kA = t + 16 | 0, ZA = A[kA >> 2] | 0, ZA = (ZA | 0) == 0 ? p : ZA, Q = +w[ZA + 8 >> 3], a = a + (+w[t >> 3] + +w[ZA >> 3]) * ((Q < 0 ? Q + 6.283185307179586 : Q) - (I < 0 ? I + 6.283185307179586 : I)), t = A[((t | 0) == 0 ? r : kA) >> 2] | 0;
              while ((t | 0) != 0);
            }
            a > 0 ? (A[SA + (hA << 2) >> 2] = r, hA = hA + 1 | 0, o = tA, t = k) : MA = 19;
          } else
            MA = 19;
          if ((MA | 0) == 19) {
            MA = 0;
            do
              if (n) {
                if (t = n + 8 | 0, A[t >> 2] | 0) {
                  MA = 21;
                  break A;
                }
                if (n = ve(1, 12) | 0, !n) {
                  MA = 23;
                  break A;
                }
                A[t >> 2] = n, o = n + 4 | 0, l = n, t = k;
              } else if (k) {
                o = fA, l = k + 8 | 0, t = r, n = e;
                break;
              } else if (A[e >> 2] | 0) {
                MA = 27;
                break A;
              } else {
                o = fA, l = e, t = r, n = e;
                break;
              }
            while (!1);
            if (A[l >> 2] = r, A[o >> 2] = r, l = AA + (tA << 5) | 0, m = A[r >> 2] | 0, m) {
              for (p = AA + (tA << 5) + 8 | 0, w[p >> 3] = 17976931348623157e292, k = AA + (tA << 5) + 24 | 0, w[k >> 3] = 17976931348623157e292, w[l >> 3] = -17976931348623157e292, B = AA + (tA << 5) + 16 | 0, w[B >> 3] = -17976931348623157e292, H = 17976931348623157e292, R = -17976931348623157e292, o = 0, E = m, h = 17976931348623157e292, D = 17976931348623157e292, z = -17976931348623157e292, f = -17976931348623157e292; a = +w[E >> 3], I = +w[E + 8 >> 3], E = A[E + 16 >> 2] | 0, x = (E | 0) == 0, Q = +w[(x ? m : E) + 8 >> 3], a < h && (w[p >> 3] = a, h = a), I < D && (w[k >> 3] = I, D = I), a > z ? w[l >> 3] = a : a = z, I > f && (w[B >> 3] = I, f = I), H = I > 0 & I < H ? I : H, R = I < 0 & I > R ? I : R, o = o | +CA(+(I - Q)) > 3.141592653589793, !x; )
                z = a;
              o && (w[B >> 3] = R, w[k >> 3] = H);
            } else
              A[l >> 2] = 0, A[l + 4 >> 2] = 0, A[l + 8 >> 2] = 0, A[l + 12 >> 2] = 0, A[l + 16 >> 2] = 0, A[l + 20 >> 2] = 0, A[l + 24 >> 2] = 0, A[l + 28 >> 2] = 0;
            o = tA + 1 | 0;
          }
          if (kA = r + 8 | 0, r = A[kA >> 2] | 0, A[kA >> 2] = 0, r)
            tA = o, k = t;
          else {
            MA = 45;
            break;
          }
        }
        if ((MA | 0) == 21)
          pA(27213, 27235, 35, 27247);
        else if ((MA | 0) == 23)
          pA(27267, 27235, 37, 27247);
        else if ((MA | 0) == 27)
          pA(27310, 27235, 61, 27333);
        else if ((MA | 0) == 45) {
          A: do
            if ((hA | 0) > 0) {
              for (kA = (o | 0) == 0, LA = o << 2, ZA = (e | 0) == 0, xA = 0, t = 0; ; ) {
                if (lA = A[SA + (xA << 2) >> 2] | 0, kA)
                  MA = 73;
                else {
                  if (tA = wi(LA) | 0, !tA) {
                    MA = 50;
                    break;
                  }
                  if (fA = wi(LA) | 0, !fA) {
                    MA = 52;
                    break;
                  }
                  t: do
                    if (ZA)
                      n = 0;
                    else {
                      for (o = 0, n = 0, l = e; r = AA + (o << 5) | 0, gr(A[l >> 2] | 0, r, A[lA >> 2] | 0) | 0 ? (A[tA + (n << 2) >> 2] = l, A[fA + (n << 2) >> 2] = r, x = n + 1 | 0) : x = n, l = A[l + 8 >> 2] | 0, l; )
                        o = o + 1 | 0, n = x;
                      if ((x | 0) > 0)
                        if (r = A[tA >> 2] | 0, (x | 0) == 1)
                          n = r;
                        else
                          for (B = 0, E = -1, n = r, k = r; ; ) {
                            for (m = A[k >> 2] | 0, r = 0, l = 0; o = A[A[tA + (l << 2) >> 2] >> 2] | 0, (o | 0) == (m | 0) ? p = r : p = r + ((gr(o, A[fA + (l << 2) >> 2] | 0, A[m >> 2] | 0) | 0) & 1) | 0, l = l + 1 | 0, (l | 0) != (x | 0); )
                              r = p;
                            if (o = (p | 0) > (E | 0), n = o ? k : n, r = B + 1 | 0, (r | 0) == (x | 0))
                              break t;
                            B = r, E = o ? p : E, k = A[tA + (r << 2) >> 2] | 0;
                          }
                      else
                        n = 0;
                    }
                  while (!1);
                  if (dA(tA), dA(fA), n) {
                    if (o = n + 4 | 0, r = A[o >> 2] | 0, r)
                      n = r + 8 | 0;
                    else if (A[n >> 2] | 0) {
                      MA = 70;
                      break;
                    }
                    A[n >> 2] = lA, A[o >> 2] = lA;
                  } else
                    MA = 73;
                }
                if ((MA | 0) == 73) {
                  if (MA = 0, t = A[lA >> 2] | 0, t | 0)
                    do
                      fA = t, t = A[t + 16 >> 2] | 0, dA(fA);
                    while ((t | 0) != 0);
                  dA(lA), t = 1;
                }
                if (xA = xA + 1 | 0, (xA | 0) >= (hA | 0)) {
                  ut = t;
                  break A;
                }
              }
              (MA | 0) == 50 ? pA(27452, 27235, 249, 27471) : (MA | 0) == 52 ? pA(27490, 27235, 252, 27471) : (MA | 0) == 70 && pA(27310, 27235, 61, 27333);
            } else
              ut = 0;
          while (!1);
          return dA(SA), dA(AA), MA = ut, MA | 0;
        }
        return 0;
      }
      function gr(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (!(wn(t, n) | 0) || (t = n0(t) | 0, r = +w[n >> 3], o = +w[n + 8 >> 3], o = t & o < 0 ? o + 6.283185307179586 : o, e = A[e >> 2] | 0, !e))
          return e = 0, e | 0;
        if (t) {
          t = 0, m = o, n = e;
          A: for (; ; ) {
            for (; l = +w[n >> 3], o = +w[n + 8 >> 3], n = n + 16 | 0, p = A[n >> 2] | 0, p = (p | 0) == 0 ? e : p, a = +w[p >> 3], f = +w[p + 8 >> 3], l > a ? (h = l, l = f) : (h = a, a = l, l = o, o = f), r = r == a | r == h ? r + 2220446049250313e-31 : r, !!(r < a | r > h); )
              if (n = A[n >> 2] | 0, !n) {
                n = 22;
                break A;
              }
            if (f = l < 0 ? l + 6.283185307179586 : l, l = o < 0 ? o + 6.283185307179586 : o, m = f == m | l == m ? m + -2220446049250313e-31 : m, h = f + (l - f) * ((r - a) / (h - a)), (h < 0 ? h + 6.283185307179586 : h) > m && (t = t ^ 1), n = A[n >> 2] | 0, !n) {
              n = 22;
              break;
            }
          }
          if ((n | 0) == 22)
            return t | 0;
        } else {
          t = 0, m = o, n = e;
          A: for (; ; ) {
            for (; l = +w[n >> 3], o = +w[n + 8 >> 3], n = n + 16 | 0, p = A[n >> 2] | 0, p = (p | 0) == 0 ? e : p, a = +w[p >> 3], f = +w[p + 8 >> 3], l > a ? (h = l, l = f) : (h = a, a = l, l = o, o = f), r = r == a | r == h ? r + 2220446049250313e-31 : r, !!(r < a | r > h); )
              if (n = A[n >> 2] | 0, !n) {
                n = 22;
                break A;
              }
            if (m = l == m | o == m ? m + -2220446049250313e-31 : m, l + (o - l) * ((r - a) / (h - a)) > m && (t = t ^ 1), n = A[n >> 2] | 0, !n) {
              n = 22;
              break;
            }
          }
          if ((n | 0) == 22)
            return t | 0;
        }
        return 0;
      }
      function He(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0;
        if (R = y, y = y + 32 | 0, H = R + 16 | 0, z = R, a = q(e | 0, t | 0, 52) | 0, P() | 0, a = a & 15, E = q(n | 0, r | 0, 52) | 0, P() | 0, (a | 0) != (E & 15 | 0))
          return H = 12, y = R, H | 0;
        if (m = q(e | 0, t | 0, 45) | 0, P() | 0, m = m & 127, p = q(n | 0, r | 0, 45) | 0, P() | 0, p = p & 127, m >>> 0 > 121 | p >>> 0 > 121)
          return H = 5, y = R, H | 0;
        if (E = (m | 0) != (p | 0), E) {
          if (f = ot(m, p) | 0, (f | 0) == 7)
            return H = 1, y = R, H | 0;
          h = ot(p, m) | 0, (h | 0) == 7 ? pA(27514, 27538, 161, 27548) : (x = f, l = h);
        } else
          x = 0, l = 0;
        k = lt(m) | 0, B = lt(p) | 0, A[H >> 2] = 0, A[H + 4 >> 2] = 0, A[H + 8 >> 2] = 0, A[H + 12 >> 2] = 0;
        do
          if (x) {
            if (p = A[4272 + (m * 28 | 0) + (x << 2) >> 2] | 0, f = (p | 0) > 0, B)
              if (f) {
                m = 0, h = n, f = r;
                do
                  h = ds(h, f) | 0, f = P() | 0, l = ni(l) | 0, (l | 0) == 1 && (l = ni(1) | 0), m = m + 1 | 0;
                while ((m | 0) != (p | 0));
                p = l, m = h, h = f;
              } else
                p = l, m = n, h = r;
            else if (f) {
              m = 0, h = n, f = r;
              do
                h = Me(h, f) | 0, f = P() | 0, l = ni(l) | 0, m = m + 1 | 0;
              while ((m | 0) != (p | 0));
              p = l, m = h, h = f;
            } else
              p = l, m = n, h = r;
            if (Ki(m, h, H) | 0, E || pA(27563, 27538, 191, 27548), f = (k | 0) != 0, l = (B | 0) != 0, f & l && pA(27590, 27538, 192, 27548), f) {
              if (l = gt(e, t) | 0, (l | 0) == 7) {
                a = 5;
                break;
              }
              if (Y[22e3 + (l * 7 | 0) + x >> 0] | 0) {
                a = 1;
                break;
              }
              h = A[21168 + (l * 28 | 0) + (x << 2) >> 2] | 0, m = h;
            } else if (l) {
              if (l = gt(m, h) | 0, (l | 0) == 7) {
                a = 5;
                break;
              }
              if (Y[22e3 + (l * 7 | 0) + p >> 0] | 0) {
                a = 1;
                break;
              }
              m = 0, h = A[21168 + (p * 28 | 0) + (l << 2) >> 2] | 0;
            } else
              m = 0, h = 0;
            if ((m | h | 0) < 0)
              a = 5;
            else {
              if ((h | 0) > 0) {
                f = H + 4 | 0, l = 0;
                do
                  ie(f), l = l + 1 | 0;
                while ((l | 0) != (h | 0));
              }
              if (A[z >> 2] = 0, A[z + 4 >> 2] = 0, A[z + 8 >> 2] = 0, o0(z, x), a | 0)
                for (; ne(a) | 0 ? r0(z) : Ti(z), (a | 0) > 1; )
                  a = a + -1 | 0;
              if ((m | 0) > 0) {
                a = 0;
                do
                  ie(z), a = a + 1 | 0;
                while ((a | 0) != (m | 0));
              }
              D = H + 4 | 0, jt(D, z, D), Ot(D), D = 51;
            }
          } else if (Ki(n, r, H) | 0, (k | 0) != 0 & (B | 0) != 0)
            if ((p | 0) != (m | 0) && pA(27621, 27538, 261, 27548), l = gt(e, t) | 0, a = gt(n, r) | 0, (l | 0) == 7 | (a | 0) == 7)
              a = 5;
            else if (Y[22e3 + (l * 7 | 0) + a >> 0] | 0)
              a = 1;
            else if (l = A[21168 + (l * 28 | 0) + (a << 2) >> 2] | 0, (l | 0) > 0) {
              f = H + 4 | 0, a = 0;
              do
                ie(f), a = a + 1 | 0;
              while ((a | 0) != (l | 0));
              D = 51;
            } else
              D = 51;
          else
            D = 51;
        while (!1);
        return (D | 0) == 51 && (a = H + 4 | 0, A[o >> 2] = A[a >> 2], A[o + 4 >> 2] = A[a + 4 >> 2], A[o + 8 >> 2] = A[a + 8 >> 2], a = 0), H = a, y = R, H | 0;
      }
      function wr(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0;
        if (D = y, y = y + 48 | 0, m = D + 36 | 0, l = D + 24 | 0, f = D + 12 | 0, h = D, o = q(e | 0, t | 0, 52) | 0, P() | 0, o = o & 15, B = q(e | 0, t | 0, 45) | 0, P() | 0, B = B & 127, B >>> 0 > 121)
          return r = 5, y = D, r | 0;
        if (p = lt(B) | 0, $(o | 0, 0, 52) | 0, z = P() | 0 | 134225919, a = r, A[a >> 2] = -1, A[a + 4 >> 2] = z, !o)
          return o = yn(n) | 0, (o | 0) == 7 || (o = _e(B, o) | 0, (o | 0) == 127) ? (z = 1, y = D, z | 0) : (E = $(o | 0, 0, 45) | 0, x = P() | 0, B = r, x = A[B + 4 >> 2] & -1040385 | x, z = r, A[z >> 2] = A[B >> 2] | E, A[z + 4 >> 2] = x, z = 0, y = D, z | 0);
        for (A[m >> 2] = A[n >> 2], A[m + 4 >> 2] = A[n + 4 >> 2], A[m + 8 >> 2] = A[n + 8 >> 2], n = o; ; ) {
          if (a = n, n = n + -1 | 0, A[l >> 2] = A[m >> 2], A[l + 4 >> 2] = A[m + 4 >> 2], A[l + 8 >> 2] = A[m + 8 >> 2], ne(a) | 0) {
            if (o = es(m) | 0, o | 0) {
              n = 13;
              break;
            }
            A[f >> 2] = A[m >> 2], A[f + 4 >> 2] = A[m + 4 >> 2], A[f + 8 >> 2] = A[m + 8 >> 2], r0(f);
          } else {
            if (o = nr(m) | 0, o | 0) {
              n = 13;
              break;
            }
            A[f >> 2] = A[m >> 2], A[f + 4 >> 2] = A[m + 4 >> 2], A[f + 8 >> 2] = A[m + 8 >> 2], Ti(f);
          }
          if (ee(l, f, h), Ot(h), o = r, R = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, Q = (15 - a | 0) * 3 | 0, H = $(7, 0, Q | 0) | 0, o = o & ~(P() | 0), Q = $(yn(h) | 0, 0, Q | 0) | 0, o = P() | 0 | o, z = r, A[z >> 2] = Q | R & ~H, A[z + 4 >> 2] = o, (a | 0) <= 1) {
            n = 14;
            break;
          }
        }
        A: do
          if ((n | 0) != 13 && (n | 0) == 14)
            if ((A[m >> 2] | 0) <= 1 && (A[m + 4 >> 2] | 0) <= 1 && (A[m + 8 >> 2] | 0) <= 1) {
              n = yn(m) | 0, o = _e(B, n) | 0, (o | 0) == 127 ? h = 0 : h = lt(o) | 0;
              t: do
                if (n) {
                  if (p) {
                    if (o = gt(e, t) | 0, (o | 0) == 7) {
                      o = 5;
                      break A;
                    }
                    if (a = A[21376 + (o * 28 | 0) + (n << 2) >> 2] | 0, (a | 0) > 0) {
                      o = n, n = 0;
                      do
                        o = Mi(o) | 0, n = n + 1 | 0;
                      while ((n | 0) != (a | 0));
                    } else
                      o = n;
                    if ((o | 0) == 1) {
                      o = 9;
                      break A;
                    }
                    n = _e(B, o) | 0, (n | 0) == 127 && pA(27648, 27538, 411, 27678), lt(n) | 0 ? pA(27693, 27538, 412, 27678) : (x = n, E = a, k = o);
                  } else
                    x = o, E = 0, k = n;
                  if (f = A[4272 + (B * 28 | 0) + (k << 2) >> 2] | 0, (f | 0) <= -1 && pA(27724, 27538, 419, 27678), !h) {
                    if ((E | 0) < 0) {
                      o = 5;
                      break A;
                    }
                    if (E | 0) {
                      a = r, o = 0, n = A[a >> 2] | 0, a = A[a + 4 >> 2] | 0;
                      do
                        n = me(n, a) | 0, a = P() | 0, Q = r, A[Q >> 2] = n, A[Q + 4 >> 2] = a, o = o + 1 | 0;
                      while ((o | 0) < (E | 0));
                    }
                    if ((f | 0) <= 0) {
                      o = x, n = 58;
                      break;
                    }
                    for (a = r, o = 0, n = A[a >> 2] | 0, a = A[a + 4 >> 2] | 0; ; )
                      if (n = me(n, a) | 0, a = P() | 0, Q = r, A[Q >> 2] = n, A[Q + 4 >> 2] = a, o = o + 1 | 0, (o | 0) == (f | 0)) {
                        o = x, n = 58;
                        break t;
                      }
                  }
                  if (l = ot(x, B) | 0, (l | 0) == 7 && pA(27514, 27538, 428, 27678), o = r, n = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, (f | 0) > 0) {
                    a = 0;
                    do
                      n = me(n, o) | 0, o = P() | 0, Q = r, A[Q >> 2] = n, A[Q + 4 >> 2] = o, a = a + 1 | 0;
                    while ((a | 0) != (f | 0));
                  }
                  if (o = gt(n, o) | 0, (o | 0) == 7 && pA(27795, 27538, 440, 27678), n = vn(x) | 0, n = A[(n ? 21792 : 21584) + (l * 28 | 0) + (o << 2) >> 2] | 0, (n | 0) < 0 && pA(27795, 27538, 454, 27678), !n)
                    o = x, n = 58;
                  else {
                    l = r, o = 0, a = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0;
                    do
                      a = mr(a, l) | 0, l = P() | 0, Q = r, A[Q >> 2] = a, A[Q + 4 >> 2] = l, o = o + 1 | 0;
                    while ((o | 0) < (n | 0));
                    o = x, n = 58;
                  }
                } else if ((p | 0) != 0 & (h | 0) != 0) {
                  if (n = gt(e, t) | 0, a = r, a = gt(A[a >> 2] | 0, A[a + 4 >> 2] | 0) | 0, (n | 0) == 7 | (a | 0) == 7) {
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
                      l = me(l, f) | 0, f = P() | 0, Q = r, A[Q >> 2] = l, A[Q + 4 >> 2] = f, n = n + 1 | 0;
                    while ((n | 0) < (a | 0));
                    n = 58;
                  }
                } else
                  n = 58;
              while (!1);
              if ((n | 0) == 58 && h && (n = 59), (n | 0) == 59 && (Q = r, (gt(A[Q >> 2] | 0, A[Q + 4 >> 2] | 0) | 0) == 1)) {
                o = 9;
                break;
              }
              Q = r, H = A[Q >> 2] | 0, Q = A[Q + 4 >> 2] & -1040385, R = $(o | 0, 0, 45) | 0, Q = Q | (P() | 0), o = r, A[o >> 2] = H | R, A[o + 4 >> 2] = Q, o = 0;
            } else
              o = 1;
        while (!1);
        return Q = o, y = D, Q | 0;
      }
      function co(e, t, n, r, o, a) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0;
        var l = 0, f = 0;
        return f = y, y = y + 16 | 0, l = f, o ? e = 15 : (e = He(e, t, n, r, l) | 0, e || (sr(l, a), e = 0)), y = f, e | 0;
      }
      function mo(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0;
        return l = y, y = y + 16 | 0, a = l, r ? n = 15 : (n = ns(n, a) | 0, n || (n = wr(e, t, a, o) | 0)), y = l, n | 0;
      }
      function ks(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0;
        return h = y, y = y + 32 | 0, l = h + 12 | 0, f = h, a = He(e, t, e, t, l) | 0, a | 0 ? (f = a, y = h, f | 0) : (e = He(e, t, n, r, f) | 0, e | 0 ? (f = e, y = h, f | 0) : (l = s0(l, f) | 0, f = o, A[f >> 2] = l, A[f + 4 >> 2] = ((l | 0) < 0) << 31 >> 31, f = 0, y = h, f | 0));
      }
      function po(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0;
        return h = y, y = y + 32 | 0, l = h + 12 | 0, f = h, a = He(e, t, e, t, l) | 0, !a && (a = He(e, t, n, r, f) | 0, !a) ? (r = s0(l, f) | 0, r = cA(r | 0, ((r | 0) < 0) << 31 >> 31 | 0, 1, 0) | 0, l = P() | 0, f = o, A[f >> 2] = r, A[f + 4 >> 2] = l, f = 0, y = h, f | 0) : (f = a, y = h, f | 0);
      }
      function vo(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0;
        if (lA = y, y = y + 48 | 0, tA = lA + 24 | 0, l = lA + 12 | 0, fA = lA, a = He(e, t, e, t, tA) | 0, !a && (a = He(e, t, n, r, l) | 0, !a)) {
          Q = s0(tA, l) | 0, I = ((Q | 0) < 0) << 31 >> 31, A[tA >> 2] = 0, A[tA + 4 >> 2] = 0, A[tA + 8 >> 2] = 0, A[l >> 2] = 0, A[l + 4 >> 2] = 0, A[l + 8 >> 2] = 0, He(e, t, e, t, tA) | 0 && pA(27795, 27538, 692, 27747), He(e, t, n, r, l) | 0 && pA(27795, 27538, 697, 27747), ar(tA), ar(l), p = (Q | 0) == 0 ? 0 : 1 / +(Q | 0), n = A[tA >> 2] | 0, D = p * +((A[l >> 2] | 0) - n | 0), z = tA + 4 | 0, r = A[z >> 2] | 0, H = p * +((A[l + 4 >> 2] | 0) - r | 0), R = tA + 8 | 0, a = A[R >> 2] | 0, p = p * +((A[l + 8 >> 2] | 0) - a | 0), A[fA >> 2] = n, k = fA + 4 | 0, A[k >> 2] = r, B = fA + 8 | 0, A[B >> 2] = a;
          A: do
            if ((Q | 0) < 0)
              a = 0;
            else
              for (E = 0, x = 0; ; ) {
                h = +(x >>> 0) + 4294967296 * +(E | 0), xA = D * h + +(n | 0), f = H * h + +(r | 0), h = p * h + +(a | 0), n = ~~+bo(+xA), l = ~~+bo(+f), a = ~~+bo(+h), xA = +CA(+(+(n | 0) - xA)), f = +CA(+(+(l | 0) - f)), h = +CA(+(+(a | 0) - h));
                do
                  if (xA > f & xA > h)
                    n = 0 - (l + a) | 0, r = l;
                  else if (m = 0 - n | 0, f > h) {
                    r = m - a | 0;
                    break;
                  } else {
                    r = l, a = m - l | 0;
                    break;
                  }
                while (!1);
                if (A[fA >> 2] = n, A[k >> 2] = r, A[B >> 2] = a, eo(fA), a = wr(e, t, fA, o + (x << 3) | 0) | 0, a | 0)
                  break A;
                if (!((E | 0) < (I | 0) | (E | 0) == (I | 0) & x >>> 0 < Q >>> 0)) {
                  a = 0;
                  break A;
                }
                n = cA(x | 0, E | 0, 1, 0) | 0, r = P() | 0, E = r, x = n, n = A[tA >> 2] | 0, r = A[z >> 2] | 0, a = A[R >> 2] | 0;
              }
          while (!1);
          return fA = a, y = lA, fA | 0;
        }
        return fA = a, y = lA, fA | 0;
      }
      function gi(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        if ((n | 0) == 0 & (r | 0) == 0)
          return o = 0, a = 1, EA(o | 0), a | 0;
        a = e, o = t, e = 1, t = 0;
        do
          l = (n & 1 | 0) == 0 & !0, e = Gt((l ? 1 : a) | 0, (l ? 0 : o) | 0, e | 0, t | 0) | 0, t = P() | 0, n = ma(n | 0, r | 0, 1) | 0, r = P() | 0, a = Gt(a | 0, o | 0, a | 0, o | 0) | 0, o = P() | 0;
        while (!((n | 0) == 0 & (r | 0) == 0));
        return EA(t | 0), e | 0;
      }
      function i(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        f = y, y = y + 16 | 0, a = f, l = q(e | 0, t | 0, 52) | 0, P() | 0, l = l & 15;
        do
          if (l) {
            if (o = Ge(e, t, a) | 0, !o) {
              m = +w[a >> 3], h = 1 / +YA(+m), p = +w[25968 + (l << 3) >> 3], w[n >> 3] = m + p, w[n + 8 >> 3] = m - p, m = +w[a + 8 >> 3], h = p * h, w[n + 16 >> 3] = h + m, w[n + 24 >> 3] = m - h;
              break;
            }
            return l = o, y = f, l | 0;
          } else {
            if (o = q(e | 0, t | 0, 45) | 0, P() | 0, o = o & 127, o >>> 0 > 121)
              return l = 5, y = f, l | 0;
            a = 22064 + (o << 5) | 0, A[n >> 2] = A[a >> 2], A[n + 4 >> 2] = A[a + 4 >> 2], A[n + 8 >> 2] = A[a + 8 >> 2], A[n + 12 >> 2] = A[a + 12 >> 2], A[n + 16 >> 2] = A[a + 16 >> 2], A[n + 20 >> 2] = A[a + 20 >> 2], A[n + 24 >> 2] = A[a + 24 >> 2], A[n + 28 >> 2] = A[a + 28 >> 2];
            break;
          }
        while (!1);
        return Ao(n, r ? 1.4 : 1.1), r = 26096 + (l << 3) | 0, (A[r >> 2] | 0) == (e | 0) && (A[r + 4 >> 2] | 0) == (t | 0) && (w[n >> 3] = 1.5707963267948966), l = 26224 + (l << 3) | 0, (A[l >> 2] | 0) == (e | 0) && (A[l + 4 >> 2] | 0) == (t | 0) && (w[n + 8 >> 3] = -1.5707963267948966), +w[n >> 3] != 1.5707963267948966 && +w[n + 8 >> 3] != -1.5707963267948966 ? (l = 0, y = f, l | 0) : (w[n + 16 >> 3] = 3.141592653589793, w[n + 24 >> 3] = -3.141592653589793, l = 0, y = f, l | 0);
      }
      function s(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        m = y, y = y + 48 | 0, l = m + 32 | 0, a = m + 40 | 0, f = m, mi(l, 0, 0, 0), h = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0;
        do
          if (n >>> 0 <= 15) {
            if (o = U(r) | 0, o | 0) {
              r = f, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[f + 8 >> 2] = o, A[f + 12 >> 2] = -1, r = f + 16 | 0, h = f + 29 | 0, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[r + 8 >> 2] = 0, Y[r + 12 >> 0] = 0, Y[h >> 0] = Y[a >> 0] | 0, Y[h + 1 >> 0] = Y[a + 1 >> 0] | 0, Y[h + 2 >> 0] = Y[a + 2 >> 0] | 0;
              break;
            }
            if (o = ve((A[t + 8 >> 2] | 0) + 1 | 0, 32) | 0, o) {
              J(t, o), p = f, A[p >> 2] = h, A[p + 4 >> 2] = l, A[f + 8 >> 2] = 0, A[f + 12 >> 2] = n, A[f + 16 >> 2] = r, A[f + 20 >> 2] = t, A[f + 24 >> 2] = o, Y[f + 28 >> 0] = 0, h = f + 29 | 0, Y[h >> 0] = Y[a >> 0] | 0, Y[h + 1 >> 0] = Y[a + 1 >> 0] | 0, Y[h + 2 >> 0] = Y[a + 2 >> 0] | 0;
              break;
            } else {
              r = f, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[f + 8 >> 2] = 13, A[f + 12 >> 2] = -1, r = f + 16 | 0, h = f + 29 | 0, A[r >> 2] = 0, A[r + 4 >> 2] = 0, A[r + 8 >> 2] = 0, Y[r + 12 >> 0] = 0, Y[h >> 0] = Y[a >> 0] | 0, Y[h + 1 >> 0] = Y[a + 1 >> 0] | 0, Y[h + 2 >> 0] = Y[a + 2 >> 0] | 0;
              break;
            }
          } else
            h = f, A[h >> 2] = 0, A[h + 4 >> 2] = 0, A[f + 8 >> 2] = 4, A[f + 12 >> 2] = -1, h = f + 16 | 0, p = f + 29 | 0, A[h >> 2] = 0, A[h + 4 >> 2] = 0, A[h + 8 >> 2] = 0, Y[h + 12 >> 0] = 0, Y[p >> 0] = Y[a >> 0] | 0, Y[p + 1 >> 0] = Y[a + 1 >> 0] | 0, Y[p + 2 >> 0] = Y[a + 2 >> 0] | 0;
        while (!1);
        u(f), A[e >> 2] = A[f >> 2], A[e + 4 >> 2] = A[f + 4 >> 2], A[e + 8 >> 2] = A[f + 8 >> 2], A[e + 12 >> 2] = A[f + 12 >> 2], A[e + 16 >> 2] = A[f + 16 >> 2], A[e + 20 >> 2] = A[f + 20 >> 2], A[e + 24 >> 2] = A[f + 24 >> 2], A[e + 28 >> 2] = A[f + 28 >> 2], y = m;
      }
      function u(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0;
        if (I = y, y = y + 336 | 0, E = I + 168 | 0, x = I, r = e, n = A[r >> 2] | 0, r = A[r + 4 >> 2] | 0, (n | 0) == 0 & (r | 0) == 0) {
          y = I;
          return;
        }
        if (t = e + 28 | 0, Y[t >> 0] | 0 ? (n = _(n, r) | 0, r = P() | 0) : Y[t >> 0] = 1, Q = e + 20 | 0, !(A[A[Q >> 2] >> 2] | 0)) {
          t = e + 24 | 0, n = A[t >> 2] | 0, n | 0 && dA(n), R = e, A[R >> 2] = 0, A[R + 4 >> 2] = 0, A[e + 8 >> 2] = 0, A[Q >> 2] = 0, A[e + 12 >> 2] = -1, A[e + 16 >> 2] = 0, A[t >> 2] = 0, y = I;
          return;
        }
        R = e + 16 | 0, t = A[R >> 2] | 0, o = t & 15;
        A: do
          if ((n | 0) == 0 & (r | 0) == 0)
            H = e + 24 | 0;
          else {
            D = e + 12 | 0, k = (o | 0) == 3, p = t & 255, h = (o | 1 | 0) == 3, B = e + 24 | 0, m = (o + -1 | 0) >>> 0 < 3, l = (o | 2 | 0) == 3, f = x + 8 | 0;
            t: for (; ; ) {
              if (a = q(n | 0, r | 0, 52) | 0, P() | 0, a = a & 15, (a | 0) == (A[D >> 2] | 0)) {
                switch (p & 15) {
                  case 0:
                  case 2:
                  case 3: {
                    if (o = Ge(n, r, E) | 0, o | 0) {
                      z = 15;
                      break t;
                    }
                    if (sA(A[Q >> 2] | 0, A[B >> 2] | 0, E) | 0) {
                      z = 19;
                      break t;
                    }
                    break;
                  }
                }
                if (h && (o = A[(A[Q >> 2] | 0) + 4 >> 2] | 0, A[E >> 2] = A[o >> 2], A[E + 4 >> 2] = A[o + 4 >> 2], A[E + 8 >> 2] = A[o + 8 >> 2], A[E + 12 >> 2] = A[o + 12 >> 2], wn(26832, E) | 0)) {
                  if (kn(A[(A[Q >> 2] | 0) + 4 >> 2] | 0, a, x) | 0) {
                    z = 25;
                    break;
                  }
                  if (o = x, (A[o >> 2] | 0) == (n | 0) && (A[o + 4 >> 2] | 0) == (r | 0)) {
                    z = 29;
                    break;
                  }
                }
                if (m) {
                  if (o = De(n, r, E) | 0, o | 0) {
                    z = 32;
                    break;
                  }
                  if (i(n, r, x, 0) | 0) {
                    z = 36;
                    break;
                  }
                  if (l && yA(A[Q >> 2] | 0, A[B >> 2] | 0, E, x) | 0) {
                    z = 42;
                    break;
                  }
                  if (h && Ft(A[Q >> 2] | 0, A[B >> 2] | 0, E, x) | 0) {
                    z = 42;
                    break;
                  }
                }
                if (k) {
                  if (t = i(n, r, E, 1) | 0, o = A[B >> 2] | 0, t | 0) {
                    z = 45;
                    break;
                  }
                  if (Li(o, E) | 0) {
                    if (tr(x, E), ci(E, A[B >> 2] | 0) | 0) {
                      z = 53;
                      break;
                    }
                    if (sA(A[Q >> 2] | 0, A[B >> 2] | 0, f) | 0) {
                      z = 53;
                      break;
                    }
                    if (Ft(A[Q >> 2] | 0, A[B >> 2] | 0, x, E) | 0) {
                      z = 53;
                      break;
                    }
                  }
                }
              }
              do
                if ((a | 0) < (A[D >> 2] | 0)) {
                  if (t = i(n, r, E, 1) | 0, o = A[B >> 2] | 0, t | 0) {
                    z = 58;
                    break t;
                  }
                  if (!(Li(o, E) | 0)) {
                    z = 73;
                    break;
                  }
                  if (ci(A[B >> 2] | 0, E) | 0 && (tr(x, E), yA(A[Q >> 2] | 0, A[B >> 2] | 0, x, E) | 0)) {
                    z = 65;
                    break t;
                  }
                  if (n = si(n, r, a + 1 | 0, x) | 0, n | 0) {
                    z = 67;
                    break t;
                  }
                  r = x, n = A[r >> 2] | 0, r = A[r + 4 >> 2] | 0;
                } else
                  z = 73;
              while (!1);
              if ((z | 0) == 73 && (z = 0, n = _(n, r) | 0, r = P() | 0), (n | 0) == 0 & (r | 0) == 0) {
                H = B;
                break A;
              }
            }
            switch (z | 0) {
              case 15: {
                t = A[B >> 2] | 0, t | 0 && dA(t), z = e, A[z >> 2] = 0, A[z + 4 >> 2] = 0, A[Q >> 2] = 0, A[D >> 2] = -1, A[R >> 2] = 0, A[B >> 2] = 0, A[e + 8 >> 2] = o, z = 20;
                break;
              }
              case 19: {
                A[e >> 2] = n, A[e + 4 >> 2] = r, z = 20;
                break;
              }
              case 25: {
                pA(27795, 27761, 470, 27772);
                break;
              }
              case 29: {
                A[e >> 2] = n, A[e + 4 >> 2] = r, y = I;
                return;
              }
              case 32: {
                t = A[B >> 2] | 0, t | 0 && dA(t), H = e, A[H >> 2] = 0, A[H + 4 >> 2] = 0, A[Q >> 2] = 0, A[D >> 2] = -1, A[R >> 2] = 0, A[B >> 2] = 0, A[e + 8 >> 2] = o, y = I;
                return;
              }
              case 36: {
                pA(27795, 27761, 493, 27772);
                break;
              }
              case 42: {
                A[e >> 2] = n, A[e + 4 >> 2] = r, y = I;
                return;
              }
              case 45: {
                o | 0 && dA(o), z = e, A[z >> 2] = 0, A[z + 4 >> 2] = 0, A[Q >> 2] = 0, A[D >> 2] = -1, A[R >> 2] = 0, A[B >> 2] = 0, A[e + 8 >> 2] = t, z = 55;
                break;
              }
              case 53: {
                A[e >> 2] = n, A[e + 4 >> 2] = r, z = 55;
                break;
              }
              case 58: {
                o | 0 && dA(o), z = e, A[z >> 2] = 0, A[z + 4 >> 2] = 0, A[Q >> 2] = 0, A[D >> 2] = -1, A[R >> 2] = 0, A[B >> 2] = 0, A[e + 8 >> 2] = t, z = 71;
                break;
              }
              case 65: {
                A[e >> 2] = n, A[e + 4 >> 2] = r, z = 71;
                break;
              }
              case 67: {
                t = A[B >> 2] | 0, t | 0 && dA(t), H = e, A[H >> 2] = 0, A[H + 4 >> 2] = 0, A[Q >> 2] = 0, A[D >> 2] = -1, A[R >> 2] = 0, A[B >> 2] = 0, A[e + 8 >> 2] = n, y = I;
                return;
              }
            }
            if ((z | 0) == 20) {
              y = I;
              return;
            } else if ((z | 0) == 55) {
              y = I;
              return;
            } else if ((z | 0) == 71) {
              y = I;
              return;
            }
          }
        while (!1);
        t = A[H >> 2] | 0, t | 0 && dA(t), z = e, A[z >> 2] = 0, A[z + 4 >> 2] = 0, A[e + 8 >> 2] = 0, A[Q >> 2] = 0, A[e + 12 >> 2] = -1, A[R >> 2] = 0, A[H >> 2] = 0, y = I;
      }
      function _(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0;
        k = y, y = y + 16 | 0, p = k, r = q(e | 0, t | 0, 52) | 0, P() | 0, r = r & 15, n = q(e | 0, t | 0, 45) | 0, P() | 0;
        do
          if (r) {
            for (; n = $(r + 4095 | 0, 0, 52) | 0, o = P() | 0 | t & -15728641, a = (15 - r | 0) * 3 | 0, l = $(7, 0, a | 0) | 0, f = P() | 0, n = n | e | l, o = o | f, h = q(e | 0, t | 0, a | 0) | 0, P() | 0, h = h & 7, r = r + -1 | 0, !(h >>> 0 < 6); )
              if (r)
                t = o, e = n;
              else {
                m = 4;
                break;
              }
            if ((m | 0) == 4) {
              n = q(n | 0, o | 0, 45) | 0, P() | 0;
              break;
            }
            return p = (h | 0) == 0 & (nt(n, o) | 0) != 0, p = $((p ? 2 : 1) + h | 0, 0, a | 0) | 0, m = P() | 0 | t & ~f, p = p | e & ~l, EA(m | 0), y = k, p | 0;
          }
        while (!1);
        return n = n & 127, n >>> 0 > 120 ? (m = 0, p = 0, EA(m | 0), y = k, p | 0) : (mi(p, 0, n + 1 | 0, 0), m = A[p + 4 >> 2] | 0, p = A[p >> 2] | 0, EA(m | 0), y = k, p | 0);
      }
      function v(e, t, n, r, o, a) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0;
        var l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0;
        z = y, y = y + 160 | 0, k = z + 80 | 0, f = z + 64 | 0, B = z + 112 | 0, D = z, s(k, e, t, n), m = k, m0(f, A[m >> 2] | 0, A[m + 4 >> 2] | 0, t), m = f, h = A[m >> 2] | 0, m = A[m + 4 >> 2] | 0, l = A[k + 8 >> 2] | 0, E = B + 4 | 0, A[E >> 2] = A[k >> 2], A[E + 4 >> 2] = A[k + 4 >> 2], A[E + 8 >> 2] = A[k + 8 >> 2], A[E + 12 >> 2] = A[k + 12 >> 2], A[E + 16 >> 2] = A[k + 16 >> 2], A[E + 20 >> 2] = A[k + 20 >> 2], A[E + 24 >> 2] = A[k + 24 >> 2], A[E + 28 >> 2] = A[k + 28 >> 2], E = D, A[E >> 2] = h, A[E + 4 >> 2] = m, E = D + 8 | 0, A[E >> 2] = l, e = D + 12 | 0, t = B, n = e + 36 | 0;
        do
          A[e >> 2] = A[t >> 2], e = e + 4 | 0, t = t + 4 | 0;
        while ((e | 0) < (n | 0));
        if (B = D + 48 | 0, A[B >> 2] = A[f >> 2], A[B + 4 >> 2] = A[f + 4 >> 2], A[B + 8 >> 2] = A[f + 8 >> 2], A[B + 12 >> 2] = A[f + 12 >> 2], (h | 0) == 0 & (m | 0) == 0)
          return D = l, y = z, D | 0;
        n = D + 16 | 0, p = D + 24 | 0, k = D + 28 | 0, l = 0, f = 0, t = h, e = m;
        do {
          if (!((l | 0) < (o | 0) | (l | 0) == (o | 0) & f >>> 0 < r >>> 0)) {
            x = 4;
            break;
          }
          if (m = f, f = cA(f | 0, l | 0, 1, 0) | 0, l = P() | 0, m = a + (m << 3) | 0, A[m >> 2] = t, A[m + 4 >> 2] = e, p0(B), e = B, t = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0, (t | 0) == 0 & (e | 0) == 0) {
            if (u(n), t = n, e = A[t >> 2] | 0, t = A[t + 4 >> 2] | 0, (e | 0) == 0 & (t | 0) == 0) {
              x = 10;
              break;
            }
            so(e, t, A[k >> 2] | 0, B), e = B, t = A[e >> 2] | 0, e = A[e + 4 >> 2] | 0;
          }
          m = D, A[m >> 2] = t, A[m + 4 >> 2] = e;
        } while (!((t | 0) == 0 & (e | 0) == 0));
        return (x | 0) == 4 ? (e = D + 40 | 0, t = A[e >> 2] | 0, t | 0 && dA(t), x = D + 16 | 0, A[x >> 2] = 0, A[x + 4 >> 2] = 0, A[p >> 2] = 0, A[D + 36 >> 2] = 0, A[k >> 2] = -1, A[D + 32 >> 2] = 0, A[e >> 2] = 0, so(0, 0, 0, B), A[D >> 2] = 0, A[D + 4 >> 2] = 0, A[E >> 2] = 0, D = 14, y = z, D | 0) : ((x | 0) == 10 && (A[D >> 2] = 0, A[D + 4 >> 2] = 0, A[E >> 2] = A[p >> 2]), D = A[E >> 2] | 0, y = z, D | 0);
      }
      function b(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0;
        if (k = y, y = y + 48 | 0, h = k + 32 | 0, f = k + 40 | 0, m = k, !(A[e >> 2] | 0))
          return p = r, A[p >> 2] = 0, A[p + 4 >> 2] = 0, p = 0, y = k, p | 0;
        mi(h, 0, 0, 0), l = h, o = A[l >> 2] | 0, l = A[l + 4 >> 2] | 0;
        do
          if (t >>> 0 > 15)
            p = m, A[p >> 2] = 0, A[p + 4 >> 2] = 0, A[m + 8 >> 2] = 4, A[m + 12 >> 2] = -1, p = m + 16 | 0, n = m + 29 | 0, A[p >> 2] = 0, A[p + 4 >> 2] = 0, A[p + 8 >> 2] = 0, Y[p + 12 >> 0] = 0, Y[n >> 0] = Y[f >> 0] | 0, Y[n + 1 >> 0] = Y[f + 1 >> 0] | 0, Y[n + 2 >> 0] = Y[f + 2 >> 0] | 0, n = 4, p = 9;
          else {
            if (n = U(n) | 0, n | 0) {
              h = m, A[h >> 2] = 0, A[h + 4 >> 2] = 0, A[m + 8 >> 2] = n, A[m + 12 >> 2] = -1, h = m + 16 | 0, p = m + 29 | 0, A[h >> 2] = 0, A[h + 4 >> 2] = 0, A[h + 8 >> 2] = 0, Y[h + 12 >> 0] = 0, Y[p >> 0] = Y[f >> 0] | 0, Y[p + 1 >> 0] = Y[f + 1 >> 0] | 0, Y[p + 2 >> 0] = Y[f + 2 >> 0] | 0, p = 9;
              break;
            }
            if (n = ve((A[e + 8 >> 2] | 0) + 1 | 0, 32) | 0, !n) {
              p = m, A[p >> 2] = 0, A[p + 4 >> 2] = 0, A[m + 8 >> 2] = 13, A[m + 12 >> 2] = -1, p = m + 16 | 0, n = m + 29 | 0, A[p >> 2] = 0, A[p + 4 >> 2] = 0, A[p + 8 >> 2] = 0, Y[p + 12 >> 0] = 0, Y[n >> 0] = Y[f >> 0] | 0, Y[n + 1 >> 0] = Y[f + 1 >> 0] | 0, Y[n + 2 >> 0] = Y[f + 2 >> 0] | 0, n = 13, p = 9;
              break;
            }
            J(e, n), E = m, A[E >> 2] = o, A[E + 4 >> 2] = l, l = m + 8 | 0, A[l >> 2] = 0, A[m + 12 >> 2] = t, A[m + 20 >> 2] = e, A[m + 24 >> 2] = n, Y[m + 28 >> 0] = 0, o = m + 29 | 0, Y[o >> 0] = Y[f >> 0] | 0, Y[o + 1 >> 0] = Y[f + 1 >> 0] | 0, Y[o + 2 >> 0] = Y[f + 2 >> 0] | 0, A[m + 16 >> 2] = 3, B = +Ci(n), B = B * +Ar(n), a = +CA(+ +w[n >> 3]), a = B / +YA(+ +yo(+a, + +CA(+ +w[n + 8 >> 3]))) * 6371.007180918475 * 6371.007180918475, o = m + 12 | 0, n = A[o >> 2] | 0;
            A: do
              if ((n | 0) > 0)
                do {
                  if (qi(n + -1 | 0, h) | 0, !(a / +w[h >> 3] > 10))
                    break A;
                  E = A[o >> 2] | 0, n = E + -1 | 0, A[o >> 2] = n;
                } while ((E | 0) > 1);
            while (!1);
            if (u(m), o = r, A[o >> 2] = 0, A[o + 4 >> 2] = 0, o = m, n = A[o >> 2] | 0, o = A[o + 4 >> 2] | 0, !((n | 0) == 0 & (o | 0) == 0))
              do
                oi(n, o, t, h) | 0, f = h, e = r, f = cA(A[e >> 2] | 0, A[e + 4 >> 2] | 0, A[f >> 2] | 0, A[f + 4 >> 2] | 0) | 0, e = P() | 0, E = r, A[E >> 2] = f, A[E + 4 >> 2] = e, u(m), E = m, n = A[E >> 2] | 0, o = A[E + 4 >> 2] | 0;
              while (!((n | 0) == 0 & (o | 0) == 0));
            n = A[l >> 2] | 0;
          }
        while (!1);
        return E = n, y = k, E | 0;
      }
      function M(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0;
        if (!(wn(t, n) | 0) || (t = n0(t) | 0, r = +w[n >> 3], o = +w[n + 8 >> 3], o = t & o < 0 ? o + 6.283185307179586 : o, B = A[e >> 2] | 0, (B | 0) <= 0))
          return B = 0, B | 0;
        if (k = A[e + 4 >> 2] | 0, t) {
          t = 0, p = o, n = -1, e = 0;
          A: for (; ; ) {
            for (m = e; l = +w[k + (m << 4) >> 3], o = +w[k + (m << 4) + 8 >> 3], e = (n + 2 | 0) % (B | 0) | 0, a = +w[k + (e << 4) >> 3], f = +w[k + (e << 4) + 8 >> 3], l > a ? (h = l, l = f) : (h = a, a = l, l = o, o = f), r = r == a | r == h ? r + 2220446049250313e-31 : r, !!(r < a | r > h); )
              if (n = m + 1 | 0, (n | 0) >= (B | 0)) {
                n = 22;
                break A;
              } else
                e = m, m = n, n = e;
            if (f = l < 0 ? l + 6.283185307179586 : l, l = o < 0 ? o + 6.283185307179586 : o, p = f == p | l == p ? p + -2220446049250313e-31 : p, h = f + (l - f) * ((r - a) / (h - a)), (h < 0 ? h + 6.283185307179586 : h) > p && (t = t ^ 1), e = m + 1 | 0, (e | 0) >= (B | 0)) {
              n = 22;
              break;
            } else
              n = m;
          }
          if ((n | 0) == 22)
            return t | 0;
        } else {
          t = 0, p = o, n = -1, e = 0;
          A: for (; ; ) {
            for (m = e; l = +w[k + (m << 4) >> 3], o = +w[k + (m << 4) + 8 >> 3], e = (n + 2 | 0) % (B | 0) | 0, a = +w[k + (e << 4) >> 3], f = +w[k + (e << 4) + 8 >> 3], l > a ? (h = l, l = f) : (h = a, a = l, l = o, o = f), r = r == a | r == h ? r + 2220446049250313e-31 : r, !!(r < a | r > h); )
              if (n = m + 1 | 0, (n | 0) >= (B | 0)) {
                n = 22;
                break A;
              } else
                e = m, m = n, n = e;
            if (p = l == p | o == p ? p + -2220446049250313e-31 : p, l + (o - l) * ((r - a) / (h - a)) > p && (t = t ^ 1), e = m + 1 | 0, (e | 0) >= (B | 0)) {
              n = 22;
              break;
            } else
              n = m;
          }
          if ((n | 0) == 22)
            return t | 0;
        }
        return 0;
      }
      function F(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0;
        if (x = A[e >> 2] | 0, !x) {
          A[t >> 2] = 0, A[t + 4 >> 2] = 0, A[t + 8 >> 2] = 0, A[t + 12 >> 2] = 0, A[t + 16 >> 2] = 0, A[t + 20 >> 2] = 0, A[t + 24 >> 2] = 0, A[t + 28 >> 2] = 0;
          return;
        }
        if (D = t + 8 | 0, w[D >> 3] = 17976931348623157e292, z = t + 24 | 0, w[z >> 3] = 17976931348623157e292, w[t >> 3] = -17976931348623157e292, H = t + 16 | 0, w[H >> 3] = -17976931348623157e292, !((x | 0) <= 0)) {
          for (B = A[e + 4 >> 2] | 0, m = 17976931348623157e292, p = -17976931348623157e292, k = 0, e = -1, a = 17976931348623157e292, l = 17976931348623157e292, h = -17976931348623157e292, r = -17976931348623157e292, E = 0; n = +w[B + (E << 4) >> 3], f = +w[B + (E << 4) + 8 >> 3], e = e + 2 | 0, o = +w[B + (((e | 0) == (x | 0) ? 0 : e) << 4) + 8 >> 3], n < a && (w[D >> 3] = n, a = n), f < l && (w[z >> 3] = f, l = f), n > h ? w[t >> 3] = n : n = h, f > r && (w[H >> 3] = f, r = f), m = f > 0 & f < m ? f : m, p = f < 0 & f > p ? f : p, k = k | +CA(+(f - o)) > 3.141592653589793, e = E + 1 | 0, (e | 0) != (x | 0); )
            R = E, h = n, E = e, e = R;
          k && (w[H >> 3] = p, w[z >> 3] = m);
        }
      }
      function U(e) {
        return e = e | 0, (e >>> 0 < 4 ? 0 : 15) | 0;
      }
      function J(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0;
        if (x = A[e >> 2] | 0, x) {
          if (D = t + 8 | 0, w[D >> 3] = 17976931348623157e292, z = t + 24 | 0, w[z >> 3] = 17976931348623157e292, w[t >> 3] = -17976931348623157e292, H = t + 16 | 0, w[H >> 3] = -17976931348623157e292, (x | 0) > 0) {
            for (o = A[e + 4 >> 2] | 0, B = 17976931348623157e292, E = -17976931348623157e292, r = 0, n = -1, h = 17976931348623157e292, m = 17976931348623157e292, k = -17976931348623157e292, l = -17976931348623157e292, R = 0; a = +w[o + (R << 4) >> 3], p = +w[o + (R << 4) + 8 >> 3], fA = n + 2 | 0, f = +w[o + (((fA | 0) == (x | 0) ? 0 : fA) << 4) + 8 >> 3], a < h && (w[D >> 3] = a, h = a), p < m && (w[z >> 3] = p, m = p), a > k ? w[t >> 3] = a : a = k, p > l && (w[H >> 3] = p, l = p), B = p > 0 & p < B ? p : B, E = p < 0 & p > E ? p : E, r = r | +CA(+(p - f)) > 3.141592653589793, n = R + 1 | 0, (n | 0) != (x | 0); )
              fA = R, k = a, R = n, n = fA;
            r && (w[H >> 3] = E, w[z >> 3] = B);
          }
        } else
          A[t >> 2] = 0, A[t + 4 >> 2] = 0, A[t + 8 >> 2] = 0, A[t + 12 >> 2] = 0, A[t + 16 >> 2] = 0, A[t + 20 >> 2] = 0, A[t + 24 >> 2] = 0, A[t + 28 >> 2] = 0;
        if (fA = e + 8 | 0, n = A[fA >> 2] | 0, !((n | 0) <= 0)) {
          tA = e + 12 | 0, I = 0;
          do
            if (o = A[tA >> 2] | 0, r = I, I = I + 1 | 0, z = t + (I << 5) | 0, H = A[o + (r << 3) >> 2] | 0, H) {
              if (R = t + (I << 5) + 8 | 0, w[R >> 3] = 17976931348623157e292, e = t + (I << 5) + 24 | 0, w[e >> 3] = 17976931348623157e292, w[z >> 3] = -17976931348623157e292, Q = t + (I << 5) + 16 | 0, w[Q >> 3] = -17976931348623157e292, (H | 0) > 0) {
                for (x = A[o + (r << 3) + 4 >> 2] | 0, B = 17976931348623157e292, E = -17976931348623157e292, o = 0, r = -1, D = 0, h = 17976931348623157e292, m = 17976931348623157e292, p = -17976931348623157e292, l = -17976931348623157e292; a = +w[x + (D << 4) >> 3], k = +w[x + (D << 4) + 8 >> 3], r = r + 2 | 0, f = +w[x + (((r | 0) == (H | 0) ? 0 : r) << 4) + 8 >> 3], a < h && (w[R >> 3] = a, h = a), k < m && (w[e >> 3] = k, m = k), a > p ? w[z >> 3] = a : a = p, k > l && (w[Q >> 3] = k, l = k), B = k > 0 & k < B ? k : B, E = k < 0 & k > E ? k : E, o = o | +CA(+(k - f)) > 3.141592653589793, r = D + 1 | 0, (r | 0) != (H | 0); )
                  lA = D, D = r, p = a, r = lA;
                o && (w[Q >> 3] = E, w[e >> 3] = B);
              }
            } else
              A[z >> 2] = 0, A[z + 4 >> 2] = 0, A[z + 8 >> 2] = 0, A[z + 12 >> 2] = 0, A[z + 16 >> 2] = 0, A[z + 20 >> 2] = 0, A[z + 24 >> 2] = 0, A[z + 28 >> 2] = 0, n = A[fA >> 2] | 0;
          while ((I | 0) < (n | 0));
        }
      }
      function sA(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (!(M(e, t, n) | 0))
          return o = 0, o | 0;
        if (o = e + 8 | 0, (A[o >> 2] | 0) <= 0)
          return o = 1, o | 0;
        for (r = e + 12 | 0, e = 0; ; ) {
          if (a = e, e = e + 1 | 0, M((A[r >> 2] | 0) + (a << 3) | 0, t + (e << 5) | 0, n) | 0) {
            e = 0, r = 6;
            break;
          }
          if ((e | 0) >= (A[o >> 2] | 0)) {
            e = 1, r = 6;
            break;
          }
        }
        return (r | 0) == 6 ? e | 0 : 0;
      }
      function yA(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (m = y, y = y + 16 | 0, f = m, l = n + 8 | 0, !(M(e, t, l) | 0))
          return h = 0, y = m, h | 0;
        h = e + 8 | 0;
        A: do
          if ((A[h >> 2] | 0) > 0) {
            for (a = e + 12 | 0, o = 0; ; ) {
              if (p = o, o = o + 1 | 0, M((A[a >> 2] | 0) + (p << 3) | 0, t + (o << 5) | 0, l) | 0) {
                o = 0;
                break;
              }
              if ((o | 0) >= (A[h >> 2] | 0))
                break A;
            }
            return y = m, o | 0;
          }
        while (!1);
        if (IA(e, t, n, r) | 0)
          return p = 0, y = m, p | 0;
        A[f >> 2] = A[n >> 2], A[f + 4 >> 2] = l, o = A[h >> 2] | 0;
        A: do
          if ((o | 0) > 0)
            for (e = e + 12 | 0, l = 0, a = o; ; ) {
              if (o = A[e >> 2] | 0, (A[o + (l << 3) >> 2] | 0) > 0) {
                if (M(f, r, A[o + (l << 3) + 4 >> 2] | 0) | 0) {
                  o = 0;
                  break A;
                }
                if (o = l + 1 | 0, IA((A[e >> 2] | 0) + (l << 3) | 0, t + (o << 5) | 0, n, r) | 0) {
                  o = 0;
                  break A;
                }
                a = A[h >> 2] | 0;
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
        return p = o, y = m, p | 0;
      }
      function IA(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0, fA = 0, lA = 0, xA = 0;
        if (fA = y, y = y + 176 | 0, R = fA + 172 | 0, o = fA + 168 | 0, Q = fA, !(Li(t, r) | 0))
          return e = 0, y = fA, e | 0;
        if (zt(t, r, R, o), y0(Q | 0, n | 0, 168) | 0, (A[n >> 2] | 0) > 0) {
          t = 0;
          do
            lA = Q + 8 + (t << 4) + 8 | 0, H = +Zt(+w[lA >> 3], A[o >> 2] | 0), w[lA >> 3] = H, t = t + 1 | 0;
          while ((t | 0) < (A[n >> 2] | 0));
        }
        D = +w[r >> 3], z = +w[r + 8 >> 3], H = +Zt(+w[r + 16 >> 3], A[o >> 2] | 0), E = +Zt(+w[r + 24 >> 3], A[o >> 2] | 0);
        A: do
          if ((A[e >> 2] | 0) > 0) {
            if (r = e + 4 | 0, o = A[Q >> 2] | 0, (o | 0) <= 0) {
              for (t = 0; ; )
                if (t = t + 1 | 0, (t | 0) >= (A[e >> 2] | 0)) {
                  t = 0;
                  break A;
                }
            }
            for (n = 0; ; ) {
              if (t = A[r >> 2] | 0, B = +w[t + (n << 4) >> 3], x = +Zt(+w[t + (n << 4) + 8 >> 3], A[R >> 2] | 0), t = A[r >> 2] | 0, n = n + 1 | 0, lA = (n | 0) % (A[e >> 2] | 0) | 0, a = +w[t + (lA << 4) >> 3], l = +Zt(+w[t + (lA << 4) + 8 >> 3], A[R >> 2] | 0), !(B >= D) | !(a >= D) && !(B <= z) | !(a <= z) && !(x <= E) | !(l <= E) && !(x >= H) | !(l >= H)) {
                k = a - B, m = l - x, t = 0;
                do
                  if (xA = t, t = t + 1 | 0, lA = (t | 0) == (o | 0) ? 0 : t, a = +w[Q + 8 + (xA << 4) + 8 >> 3], l = +w[Q + 8 + (lA << 4) + 8 >> 3] - a, f = +w[Q + 8 + (xA << 4) >> 3], h = +w[Q + 8 + (lA << 4) >> 3] - f, p = k * l - m * h, p != 0 && (I = x - a, tA = B - f, h = (I * h - l * tA) / p, !(h < 0 | h > 1)) && (p = (k * I - m * tA) / p, p >= 0 & p <= 1)) {
                    t = 1;
                    break A;
                  }
                while ((t | 0) < (o | 0));
              }
              if ((n | 0) >= (A[e >> 2] | 0)) {
                t = 0;
                break;
              }
            }
          } else
            t = 0;
        while (!1);
        return xA = t, y = fA, xA | 0;
      }
      function Ft(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0;
        if (IA(e, t, n, r) | 0)
          return a = 1, a | 0;
        if (a = e + 8 | 0, (A[a >> 2] | 0) <= 0)
          return a = 0, a | 0;
        for (o = e + 12 | 0, e = 0; ; ) {
          if (l = e, e = e + 1 | 0, IA((A[o >> 2] | 0) + (l << 3) | 0, t + (e << 5) | 0, n, r) | 0) {
            e = 1, o = 6;
            break;
          }
          if ((e | 0) >= (A[a >> 2] | 0)) {
            e = 0, o = 6;
            break;
          }
        }
        return (o | 0) == 6 ? e | 0 : 0;
      }
      function Mt() {
        return 8;
      }
      function pe() {
        return 16;
      }
      function qt() {
        return 168;
      }
      function Xi() {
        return 8;
      }
      function Ps() {
        return 16;
      }
      function Bs() {
        return 12;
      }
      function Es() {
        return 8;
      }
      function go(e) {
        return e = e | 0, +(+((A[e >> 2] | 0) >>> 0) + 4294967296 * +(A[e + 4 >> 2] | 0));
      }
      function xs(e) {
        e = e | 0;
        var t = 0, n = 0;
        return n = +w[e >> 3], t = +w[e + 8 >> 3], + +HA(+(n * n + t * t));
      }
      function yr(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0;
        m = +w[e >> 3], h = +w[t >> 3] - m, f = +w[e + 8 >> 3], l = +w[t + 8 >> 3] - f, k = +w[n >> 3], a = +w[r >> 3] - k, B = +w[n + 8 >> 3], p = +w[r + 8 >> 3] - B, a = (a * (f - B) - (m - k) * p) / (h * p - l * a), w[o >> 3] = m + h * a, w[o + 8 >> 3] = f + l * a;
      }
      function bt(e, t) {
        return e = e | 0, t = t | 0, +CA(+(+w[e >> 3] - +w[t >> 3])) < 11920928955078125e-23 ? (t = +CA(+(+w[e + 8 >> 3] - +w[t + 8 >> 3])) < 11920928955078125e-23, t | 0) : (t = 0, t | 0);
      }
      function mt(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0;
        return o = +w[e >> 3] - +w[t >> 3], r = +w[e + 8 >> 3] - +w[t + 8 >> 3], n = +w[e + 16 >> 3] - +w[t + 16 >> 3], +(o * o + r * r + n * n);
      }
      function Cs(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0;
        n = +w[e >> 3], r = +YA(+n), n = +DA(+n), w[t + 16 >> 3] = n, n = +w[e + 8 >> 3], o = r * +YA(+n), w[t >> 3] = o, n = r * +DA(+n), w[t + 8 >> 3] = n;
      }
      function Ls(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if (a = y, y = y + 16 | 0, o = a, r = nt(e, t) | 0, (n + -1 | 0) >>> 0 > 5 || (r = (r | 0) != 0, (n | 0) == 1 & r))
          return o = -1, y = a, o | 0;
        do
          if (Cn(e, t, o) | 0)
            r = -1;
          else if (r) {
            r = ((A[26352 + (n << 2) >> 2] | 0) + 5 - (A[o >> 2] | 0) | 0) % 5 | 0;
            break;
          } else {
            r = ((A[26384 + (n << 2) >> 2] | 0) + 6 - (A[o >> 2] | 0) | 0) % 6 | 0;
            break;
          }
        while (!1);
        return o = r, y = a, o | 0;
      }
      function Cn(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0;
        if (p = y, y = y + 32 | 0, f = p + 16 | 0, h = p, r = pi(e, t, f) | 0, r | 0)
          return n = r, y = p, n | 0;
        a = de(e, t) | 0, m = gt(e, t) | 0, X0(a, h), r = $o(a, A[f >> 2] | 0) | 0;
        do
          if (lt(a) | 0) {
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
                  pA(27795, 27797, 75, 27806);
              }
            while (!1);
            if (l = A[26416 + (o * 24 | 0) + 8 >> 2] | 0, t = A[26416 + (o * 24 | 0) + 16 >> 2] | 0, e = A[f >> 2] | 0, (e | 0) != (A[h >> 2] | 0) && (h = vn(a) | 0, e = A[f >> 2] | 0, h | (e | 0) == (t | 0) && (r = (r + 1 | 0) % 6 | 0)), (m | 0) == 3 & (e | 0) == (t | 0)) {
              r = (r + 5 | 0) % 6 | 0;
              break;
            }
            (m | 0) == 5 & (e | 0) == (l | 0) && (r = (r + 1 | 0) % 6 | 0);
          }
        while (!1);
        return A[n >> 2] = r, n = 0, y = p, n | 0;
      }
      function Jt(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0;
        if (Q = y, y = y + 32 | 0, R = Q + 24 | 0, z = Q + 20 | 0, x = Q + 8 | 0, E = Q + 16 | 0, B = Q, h = (nt(e, t) | 0) == 0, h = h ? 6 : 5, p = q(e | 0, t | 0, 52) | 0, P() | 0, p = p & 15, h >>> 0 <= n >>> 0)
          return r = 2, y = Q, r | 0;
        k = (p | 0) == 0, !k && (D = $(7, 0, (p ^ 15) * 3 | 0) | 0, (D & e | 0) == 0 & ((P() | 0) & t | 0) == 0) ? o = n : a = 4;
        A: do
          if ((a | 0) == 4) {
            if (o = (nt(e, t) | 0) != 0, ((o ? 4 : 5) | 0) < (n | 0) || Cn(e, t, R) | 0 || (a = (A[R >> 2] | 0) + n | 0, o ? o = 26704 + (((a | 0) % 5 | 0) << 2) | 0 : o = 26736 + (((a | 0) % 6 | 0) << 2) | 0, D = A[o >> 2] | 0, (D | 0) == 7))
              return r = 1, y = Q, r | 0;
            A[z >> 2] = 0, o = ct(e, t, D, z, x) | 0;
            do
              if (!o) {
                if (f = x, m = A[f >> 2] | 0, f = A[f + 4 >> 2] | 0, l = f >>> 0 < t >>> 0 | (f | 0) == (t | 0) & m >>> 0 < e >>> 0, a = l ? m : e, l = l ? f : t, !k && (k = $(7, 0, (p ^ 15) * 3 | 0) | 0, (m & k | 0) == 0 & (f & (P() | 0) | 0) == 0))
                  o = n;
                else {
                  if (f = (n + -1 + h | 0) % (h | 0) | 0, o = nt(e, t) | 0, (f | 0) < 0 && pA(27795, 27797, 248, 27822), h = (o | 0) != 0, ((h ? 4 : 5) | 0) < (f | 0) && pA(27795, 27797, 248, 27822), Cn(e, t, R) | 0 && pA(27795, 27797, 248, 27822), o = (A[R >> 2] | 0) + f | 0, h ? o = 26704 + (((o | 0) % 5 | 0) << 2) | 0 : o = 26736 + (((o | 0) % 6 | 0) << 2) | 0, f = A[o >> 2] | 0, (f | 0) == 7 && pA(27795, 27797, 248, 27822), A[E >> 2] = 0, o = ct(e, t, f, E, B) | 0, o | 0)
                    break;
                  m = B, h = A[m >> 2] | 0, m = A[m + 4 >> 2] | 0;
                  do
                    if (m >>> 0 < l >>> 0 | (m | 0) == (l | 0) & h >>> 0 < a >>> 0) {
                      if (nt(h, m) | 0 ? a = xi(h, m, e, t) | 0 : a = A[26800 + ((((A[E >> 2] | 0) + (A[26768 + (f << 2) >> 2] | 0) | 0) % 6 | 0) << 2) >> 2] | 0, o = nt(h, m) | 0, (a + -1 | 0) >>> 0 > 5) {
                        o = -1, a = h, l = m;
                        break;
                      }
                      if (o = (o | 0) != 0, (a | 0) == 1 & o) {
                        o = -1, a = h, l = m;
                        break;
                      }
                      do
                        if (Cn(h, m, R) | 0)
                          o = -1;
                        else if (o) {
                          o = ((A[26352 + (a << 2) >> 2] | 0) + 5 - (A[R >> 2] | 0) | 0) % 5 | 0;
                          break;
                        } else {
                          o = ((A[26384 + (a << 2) >> 2] | 0) + 6 - (A[R >> 2] | 0) | 0) % 6 | 0;
                          break;
                        }
                      while (!1);
                      a = h, l = m;
                    } else
                      o = n;
                  while (!1);
                  f = x, m = A[f >> 2] | 0, f = A[f + 4 >> 2] | 0;
                }
                if ((a | 0) == (m | 0) & (l | 0) == (f | 0)) {
                  if (h = (nt(m, f) | 0) != 0, h ? e = xi(m, f, e, t) | 0 : e = A[26800 + ((((A[z >> 2] | 0) + (A[26768 + (D << 2) >> 2] | 0) | 0) % 6 | 0) << 2) >> 2] | 0, o = nt(m, f) | 0, (e + -1 | 0) >>> 0 <= 5 && (H = (o | 0) != 0, !((e | 0) == 1 & H)))
                    do
                      if (Cn(m, f, R) | 0)
                        o = -1;
                      else if (H) {
                        o = ((A[26352 + (e << 2) >> 2] | 0) + 5 - (A[R >> 2] | 0) | 0) % 5 | 0;
                        break;
                      } else {
                        o = ((A[26384 + (e << 2) >> 2] | 0) + 6 - (A[R >> 2] | 0) | 0) % 6 | 0;
                        break;
                      }
                    while (!1);
                  else
                    o = -1;
                  o = o + 1 | 0, o = (o | 0) == 6 | h & (o | 0) == 5 ? 0 : o;
                }
                t = l, e = a;
                break A;
              }
            while (!1);
            return r = o, y = Q, r | 0;
          }
        while (!1);
        return H = $(o | 0, 0, 56) | 0, R = P() | 0 | t & -2130706433 | 536870912, A[r >> 2] = H | e, A[r + 4 >> 2] = R, r = 0, y = Q, r | 0;
      }
      function wo(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        return a = (nt(e, t) | 0) == 0, r = Jt(e, t, 0, n) | 0, o = (r | 0) == 0, a ? !o || (r = Jt(e, t, 1, n + 8 | 0) | 0, r | 0) || (r = Jt(e, t, 2, n + 16 | 0) | 0, r | 0) || (r = Jt(e, t, 3, n + 24 | 0) | 0, r | 0) || (r = Jt(e, t, 4, n + 32 | 0) | 0, r) ? (a = r, a | 0) : Jt(e, t, 5, n + 40 | 0) | 0 : !o || (r = Jt(e, t, 1, n + 8 | 0) | 0, r | 0) || (r = Jt(e, t, 2, n + 16 | 0) | 0, r | 0) || (r = Jt(e, t, 3, n + 24 | 0) | 0, r | 0) || (r = Jt(e, t, 4, n + 32 | 0) | 0, r | 0) ? (a = r, a | 0) : (a = n + 40 | 0, A[a >> 2] = 0, A[a + 4 >> 2] = 0, a = 0, a | 0);
      }
      function Ts(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        return h = y, y = y + 192 | 0, o = h, a = h + 168 | 0, l = q(e | 0, t | 0, 56) | 0, P() | 0, l = l & 7, f = t & -2130706433 | 134217728, r = pi(e, f, a) | 0, r | 0 ? (f = r, y = h, f | 0) : (t = q(e | 0, t | 0, 52) | 0, P() | 0, t = t & 15, nt(e, f) | 0 ? fr(a, t, l, 1, o) : hr(a, t, l, 1, o), f = o + 8 | 0, A[n >> 2] = A[f >> 2], A[n + 4 >> 2] = A[f + 4 >> 2], A[n + 8 >> 2] = A[f + 8 >> 2], A[n + 12 >> 2] = A[f + 12 >> 2], f = 0, y = h, f | 0);
      }
      function ua(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return o = y, y = y + 16 | 0, n = o, !(!0 & (t & 2013265920 | 0) == 536870912) || (r = t & -2130706433 | 134217728, !(Te(e, r) | 0)) ? (r = 0, y = o, r | 0) : (a = q(e | 0, t | 0, 56) | 0, P() | 0, a = (Jt(e, r, a & 7, n) | 0) == 0, r = n, r = a & ((A[r >> 2] | 0) == (e | 0) ? (A[r + 4 >> 2] | 0) == (t | 0) : 0) & 1, y = o, r | 0);
      }
      function fa(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0;
        (t | 0) > 0 ? (r = ve(t, 4) | 0, A[e >> 2] = r, r || pA(27835, 27858, 40, 27872)) : A[e >> 2] = 0, A[e + 4 >> 2] = t, A[e + 8 >> 2] = 0, A[e + 12 >> 2] = n;
      }
      function ha(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0;
        o = e + 4 | 0, a = e + 12 | 0, l = e + 8 | 0;
        A: for (; ; ) {
          for (n = A[o >> 2] | 0, t = 0; ; ) {
            if ((t | 0) >= (n | 0))
              break A;
            if (r = A[e >> 2] | 0, f = A[r + (t << 2) >> 2] | 0, !f)
              t = t + 1 | 0;
            else
              break;
          }
          t = r + (~~(+CA(+(+$t(10, + +(15 - (A[a >> 2] | 0) | 0)) * (+w[f >> 3] + +w[f + 8 >> 3]))) % +(n | 0)) >>> 0 << 2) | 0, n = A[t >> 2] | 0;
          t: do
            if (n | 0) {
              if (r = f + 32 | 0, (n | 0) == (f | 0))
                A[t >> 2] = A[r >> 2];
              else {
                if (n = n + 32 | 0, t = A[n >> 2] | 0, !t)
                  break;
                for (; (t | 0) != (f | 0); )
                  if (n = t + 32 | 0, t = A[n >> 2] | 0, !t)
                    break t;
                A[n >> 2] = A[r >> 2];
              }
              dA(f), A[l >> 2] = (A[l >> 2] | 0) + -1;
            }
          while (!1);
        }
        dA(A[e >> 2] | 0);
      }
      function _a(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0;
        for (r = A[e + 4 >> 2] | 0, n = 0; ; ) {
          if ((n | 0) >= (r | 0)) {
            t = 0, n = 4;
            break;
          }
          if (t = A[(A[e >> 2] | 0) + (n << 2) >> 2] | 0, !t)
            n = n + 1 | 0;
          else {
            n = 4;
            break;
          }
        }
        return (n | 0) == 4 ? t | 0 : 0;
      }
      function ca(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0;
        if (n = ~~(+CA(+(+$t(10, + +(15 - (A[e + 12 >> 2] | 0) | 0)) * (+w[t >> 3] + +w[t + 8 >> 3]))) % +(A[e + 4 >> 2] | 0)) >>> 0, n = (A[e >> 2] | 0) + (n << 2) | 0, r = A[n >> 2] | 0, !r)
          return a = 1, a | 0;
        a = t + 32 | 0;
        do
          if ((r | 0) != (t | 0)) {
            if (n = A[r + 32 >> 2] | 0, !n)
              return a = 1, a | 0;
            for (o = n; ; ) {
              if ((o | 0) == (t | 0)) {
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
        return dA(t), a = e + 8 | 0, A[a >> 2] = (A[a >> 2] | 0) + -1, a = 0, a | 0;
      }
      function Il(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        a = wi(40) | 0, a || pA(27888, 27858, 98, 27901), A[a >> 2] = A[t >> 2], A[a + 4 >> 2] = A[t + 4 >> 2], A[a + 8 >> 2] = A[t + 8 >> 2], A[a + 12 >> 2] = A[t + 12 >> 2], o = a + 16 | 0, A[o >> 2] = A[n >> 2], A[o + 4 >> 2] = A[n + 4 >> 2], A[o + 8 >> 2] = A[n + 8 >> 2], A[o + 12 >> 2] = A[n + 12 >> 2], A[a + 32 >> 2] = 0, o = ~~(+CA(+(+$t(10, + +(15 - (A[e + 12 >> 2] | 0) | 0)) * (+w[t >> 3] + +w[t + 8 >> 3]))) % +(A[e + 4 >> 2] | 0)) >>> 0, o = (A[e >> 2] | 0) + (o << 2) | 0, r = A[o >> 2] | 0;
        do
          if (!r)
            A[o >> 2] = a;
          else {
            for (; !(Yt(r, t) | 0 && Yt(r + 16 | 0, n) | 0); )
              if (o = A[r + 32 >> 2] | 0, r = (o | 0) == 0 ? r : o, !(A[r + 32 >> 2] | 0)) {
                l = 10;
                break;
              }
            if ((l | 0) == 10) {
              A[r + 32 >> 2] = a;
              break;
            }
            return dA(a), l = r, l | 0;
          }
        while (!1);
        return l = e + 8 | 0, A[l >> 2] = (A[l >> 2] | 0) + 1, l = a, l | 0;
      }
      function Sl(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0;
        if (o = ~~(+CA(+(+$t(10, + +(15 - (A[e + 12 >> 2] | 0) | 0)) * (+w[t >> 3] + +w[t + 8 >> 3]))) % +(A[e + 4 >> 2] | 0)) >>> 0, o = A[(A[e >> 2] | 0) + (o << 2) >> 2] | 0, !o)
          return n = 0, n | 0;
        if (!n) {
          for (e = o; ; ) {
            if (Yt(e, t) | 0) {
              r = 10;
              break;
            }
            if (e = A[e + 32 >> 2] | 0, !e) {
              e = 0, r = 10;
              break;
            }
          }
          if ((r | 0) == 10)
            return e | 0;
        }
        for (e = o; ; ) {
          if (Yt(e, t) | 0 && Yt(e + 16 | 0, n) | 0) {
            r = 10;
            break;
          }
          if (e = A[e + 32 >> 2] | 0, !e) {
            e = 0, r = 10;
            break;
          }
        }
        return (r | 0) == 10 ? e | 0 : 0;
      }
      function zl(e, t) {
        e = e | 0, t = t | 0;
        var n = 0;
        if (n = ~~(+CA(+(+$t(10, + +(15 - (A[e + 12 >> 2] | 0) | 0)) * (+w[t >> 3] + +w[t + 8 >> 3]))) % +(A[e + 4 >> 2] | 0)) >>> 0, e = A[(A[e >> 2] | 0) + (n << 2) >> 2] | 0, !e)
          return n = 0, n | 0;
        for (; ; ) {
          if (Yt(e, t) | 0) {
            t = 5;
            break;
          }
          if (e = A[e + 32 >> 2] | 0, !e) {
            e = 0, t = 5;
            break;
          }
        }
        return (t | 0) == 5 ? e | 0 : 0;
      }
      function Ol() {
        return 27920;
      }
      function $i(e) {
        return e = +e, ~~+va(+e) | 0;
      }
      function wi(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0, D = 0, z = 0, H = 0, R = 0, Q = 0, I = 0, tA = 0;
        tA = y, y = y + 16 | 0, B = tA;
        do
          if (e >>> 0 < 245) {
            if (m = e >>> 0 < 11 ? 16 : e + 11 & -8, e = m >>> 3, k = A[6981] | 0, n = k >>> e, n & 3 | 0)
              return t = (n & 1 ^ 1) + e | 0, e = 27964 + (t << 1 << 2) | 0, n = e + 8 | 0, r = A[n >> 2] | 0, o = r + 8 | 0, a = A[o >> 2] | 0, (a | 0) == (e | 0) ? A[6981] = k & ~(1 << t) : (A[a + 12 >> 2] = e, A[n >> 2] = a), I = t << 3, A[r + 4 >> 2] = I | 3, I = r + I + 4 | 0, A[I >> 2] = A[I >> 2] | 1, I = o, y = tA, I | 0;
            if (p = A[6983] | 0, m >>> 0 > p >>> 0) {
              if (n | 0)
                return t = 2 << e, t = n << e & (t | 0 - t), t = (t & 0 - t) + -1 | 0, f = t >>> 12 & 16, t = t >>> f, n = t >>> 5 & 8, t = t >>> n, a = t >>> 2 & 4, t = t >>> a, e = t >>> 1 & 2, t = t >>> e, r = t >>> 1 & 1, r = (n | f | a | e | r) + (t >>> r) | 0, t = 27964 + (r << 1 << 2) | 0, e = t + 8 | 0, a = A[e >> 2] | 0, f = a + 8 | 0, n = A[f >> 2] | 0, (n | 0) == (t | 0) ? (e = k & ~(1 << r), A[6981] = e) : (A[n + 12 >> 2] = t, A[e >> 2] = n, e = k), I = r << 3, l = I - m | 0, A[a + 4 >> 2] = m | 3, o = a + m | 0, A[o + 4 >> 2] = l | 1, A[a + I >> 2] = l, p | 0 && (r = A[6986] | 0, t = p >>> 3, n = 27964 + (t << 1 << 2) | 0, t = 1 << t, e & t ? (e = n + 8 | 0, t = A[e >> 2] | 0) : (A[6981] = e | t, t = n, e = n + 8 | 0), A[e >> 2] = r, A[t + 12 >> 2] = r, A[r + 8 >> 2] = t, A[r + 12 >> 2] = n), A[6983] = l, A[6986] = o, I = f, y = tA, I | 0;
              if (a = A[6982] | 0, a) {
                for (n = (a & 0 - a) + -1 | 0, o = n >>> 12 & 16, n = n >>> o, r = n >>> 5 & 8, n = n >>> r, l = n >>> 2 & 4, n = n >>> l, f = n >>> 1 & 2, n = n >>> f, h = n >>> 1 & 1, h = A[28228 + ((r | o | l | f | h) + (n >>> h) << 2) >> 2] | 0, n = h, f = h, h = (A[h + 4 >> 2] & -8) - m | 0; e = A[n + 16 >> 2] | 0, !(!e && (e = A[n + 20 >> 2] | 0, !e)); )
                  l = (A[e + 4 >> 2] & -8) - m | 0, o = l >>> 0 < h >>> 0, n = e, f = o ? e : f, h = o ? l : h;
                if (l = f + m | 0, l >>> 0 > f >>> 0) {
                  o = A[f + 24 >> 2] | 0, t = A[f + 12 >> 2] | 0;
                  do
                    if ((t | 0) == (f | 0)) {
                      if (e = f + 20 | 0, t = A[e >> 2] | 0, !t && (e = f + 16 | 0, t = A[e >> 2] | 0, !t)) {
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
                      n = A[f + 8 >> 2] | 0, A[n + 12 >> 2] = t, A[t + 8 >> 2] = n, n = t;
                  while (!1);
                  do
                    if (o | 0) {
                      if (t = A[f + 28 >> 2] | 0, e = 28228 + (t << 2) | 0, (f | 0) == (A[e >> 2] | 0)) {
                        if (A[e >> 2] = n, !n) {
                          A[6982] = a & ~(1 << t);
                          break;
                        }
                      } else if (I = o + 16 | 0, A[((A[I >> 2] | 0) == (f | 0) ? I : o + 20 | 0) >> 2] = n, !n)
                        break;
                      A[n + 24 >> 2] = o, t = A[f + 16 >> 2] | 0, t | 0 && (A[n + 16 >> 2] = t, A[t + 24 >> 2] = n), t = A[f + 20 >> 2] | 0, t | 0 && (A[n + 20 >> 2] = t, A[t + 24 >> 2] = n);
                    }
                  while (!1);
                  return h >>> 0 < 16 ? (I = h + m | 0, A[f + 4 >> 2] = I | 3, I = f + I + 4 | 0, A[I >> 2] = A[I >> 2] | 1) : (A[f + 4 >> 2] = m | 3, A[l + 4 >> 2] = h | 1, A[l + h >> 2] = h, p | 0 && (r = A[6986] | 0, t = p >>> 3, n = 27964 + (t << 1 << 2) | 0, t = 1 << t, t & k ? (e = n + 8 | 0, t = A[e >> 2] | 0) : (A[6981] = t | k, t = n, e = n + 8 | 0), A[e >> 2] = r, A[t + 12 >> 2] = r, A[r + 8 >> 2] = t, A[r + 12 >> 2] = n), A[6983] = h, A[6986] = l), I = f + 8 | 0, y = tA, I | 0;
                } else
                  k = m;
              } else
                k = m;
            } else
              k = m;
          } else if (e >>> 0 <= 4294967231)
            if (e = e + 11 | 0, m = e & -8, r = A[6982] | 0, r) {
              o = 0 - m | 0, e = e >>> 8, e ? m >>> 0 > 16777215 ? h = 31 : (k = (e + 1048320 | 0) >>> 16 & 8, D = e << k, f = (D + 520192 | 0) >>> 16 & 4, D = D << f, h = (D + 245760 | 0) >>> 16 & 2, h = 14 - (f | k | h) + (D << h >>> 15) | 0, h = m >>> (h + 7 | 0) & 1 | h << 1) : h = 0, n = A[28228 + (h << 2) >> 2] | 0;
              A: do
                if (!n)
                  n = 0, e = 0, D = 61;
                else
                  for (e = 0, f = m << ((h | 0) == 31 ? 0 : 25 - (h >>> 1) | 0), a = 0; ; ) {
                    if (l = (A[n + 4 >> 2] & -8) - m | 0, l >>> 0 < o >>> 0)
                      if (l)
                        e = n, o = l;
                      else {
                        e = n, o = 0, D = 65;
                        break A;
                      }
                    if (D = A[n + 20 >> 2] | 0, n = A[n + 16 + (f >>> 31 << 2) >> 2] | 0, a = (D | 0) == 0 | (D | 0) == (n | 0) ? a : D, n)
                      f = f << 1;
                    else {
                      n = a, D = 61;
                      break;
                    }
                  }
              while (!1);
              if ((D | 0) == 61) {
                if ((n | 0) == 0 & (e | 0) == 0) {
                  if (e = 2 << h, e = (e | 0 - e) & r, !e) {
                    k = m;
                    break;
                  }
                  k = (e & 0 - e) + -1 | 0, l = k >>> 12 & 16, k = k >>> l, a = k >>> 5 & 8, k = k >>> a, f = k >>> 2 & 4, k = k >>> f, h = k >>> 1 & 2, k = k >>> h, n = k >>> 1 & 1, e = 0, n = A[28228 + ((a | l | f | h | n) + (k >>> n) << 2) >> 2] | 0;
                }
                n ? D = 65 : (f = e, l = o);
              }
              if ((D | 0) == 65)
                for (a = n; ; )
                  if (k = (A[a + 4 >> 2] & -8) - m | 0, n = k >>> 0 < o >>> 0, o = n ? k : o, e = n ? a : e, n = A[a + 16 >> 2] | 0, n || (n = A[a + 20 >> 2] | 0), n)
                    a = n;
                  else {
                    f = e, l = o;
                    break;
                  }
              if ((f | 0) != 0 && l >>> 0 < ((A[6983] | 0) - m | 0) >>> 0 && (p = f + m | 0, p >>> 0 > f >>> 0)) {
                a = A[f + 24 >> 2] | 0, t = A[f + 12 >> 2] | 0;
                do
                  if ((t | 0) == (f | 0)) {
                    if (e = f + 20 | 0, t = A[e >> 2] | 0, !t && (e = f + 16 | 0, t = A[e >> 2] | 0, !t)) {
                      t = 0;
                      break;
                    }
                    for (; ; )
                      if (o = t + 20 | 0, n = A[o >> 2] | 0, n)
                        t = n, e = o;
                      else if (o = t + 16 | 0, n = A[o >> 2] | 0, n)
                        t = n, e = o;
                      else
                        break;
                    A[e >> 2] = 0;
                  } else
                    I = A[f + 8 >> 2] | 0, A[I + 12 >> 2] = t, A[t + 8 >> 2] = I;
                while (!1);
                do
                  if (a) {
                    if (e = A[f + 28 >> 2] | 0, n = 28228 + (e << 2) | 0, (f | 0) == (A[n >> 2] | 0)) {
                      if (A[n >> 2] = t, !t) {
                        r = r & ~(1 << e), A[6982] = r;
                        break;
                      }
                    } else if (I = a + 16 | 0, A[((A[I >> 2] | 0) == (f | 0) ? I : a + 20 | 0) >> 2] = t, !t)
                      break;
                    A[t + 24 >> 2] = a, e = A[f + 16 >> 2] | 0, e | 0 && (A[t + 16 >> 2] = e, A[e + 24 >> 2] = t), e = A[f + 20 >> 2] | 0, e && (A[t + 20 >> 2] = e, A[e + 24 >> 2] = t);
                  }
                while (!1);
                A: do
                  if (l >>> 0 < 16)
                    I = l + m | 0, A[f + 4 >> 2] = I | 3, I = f + I + 4 | 0, A[I >> 2] = A[I >> 2] | 1;
                  else {
                    if (A[f + 4 >> 2] = m | 3, A[p + 4 >> 2] = l | 1, A[p + l >> 2] = l, t = l >>> 3, l >>> 0 < 256) {
                      n = 27964 + (t << 1 << 2) | 0, e = A[6981] | 0, t = 1 << t, e & t ? (e = n + 8 | 0, t = A[e >> 2] | 0) : (A[6981] = e | t, t = n, e = n + 8 | 0), A[e >> 2] = p, A[t + 12 >> 2] = p, A[p + 8 >> 2] = t, A[p + 12 >> 2] = n;
                      break;
                    }
                    if (t = l >>> 8, t ? l >>> 0 > 16777215 ? n = 31 : (Q = (t + 1048320 | 0) >>> 16 & 8, I = t << Q, R = (I + 520192 | 0) >>> 16 & 4, I = I << R, n = (I + 245760 | 0) >>> 16 & 2, n = 14 - (R | Q | n) + (I << n >>> 15) | 0, n = l >>> (n + 7 | 0) & 1 | n << 1) : n = 0, t = 28228 + (n << 2) | 0, A[p + 28 >> 2] = n, e = p + 16 | 0, A[e + 4 >> 2] = 0, A[e >> 2] = 0, e = 1 << n, !(r & e)) {
                      A[6982] = r | e, A[t >> 2] = p, A[p + 24 >> 2] = t, A[p + 12 >> 2] = p, A[p + 8 >> 2] = p;
                      break;
                    }
                    t = A[t >> 2] | 0;
                    t: do
                      if ((A[t + 4 >> 2] & -8 | 0) != (l | 0)) {
                        for (r = l << ((n | 0) == 31 ? 0 : 25 - (n >>> 1) | 0); n = t + 16 + (r >>> 31 << 2) | 0, e = A[n >> 2] | 0, !!e; )
                          if ((A[e + 4 >> 2] & -8 | 0) == (l | 0)) {
                            t = e;
                            break t;
                          } else
                            r = r << 1, t = e;
                        A[n >> 2] = p, A[p + 24 >> 2] = t, A[p + 12 >> 2] = p, A[p + 8 >> 2] = p;
                        break A;
                      }
                    while (!1);
                    Q = t + 8 | 0, I = A[Q >> 2] | 0, A[I + 12 >> 2] = p, A[Q >> 2] = p, A[p + 8 >> 2] = I, A[p + 12 >> 2] = t, A[p + 24 >> 2] = 0;
                  }
                while (!1);
                return I = f + 8 | 0, y = tA, I | 0;
              } else
                k = m;
            } else
              k = m;
          else
            k = -1;
        while (!1);
        if (n = A[6983] | 0, n >>> 0 >= k >>> 0)
          return t = n - k | 0, e = A[6986] | 0, t >>> 0 > 15 ? (I = e + k | 0, A[6986] = I, A[6983] = t, A[I + 4 >> 2] = t | 1, A[e + n >> 2] = t, A[e + 4 >> 2] = k | 3) : (A[6983] = 0, A[6986] = 0, A[e + 4 >> 2] = n | 3, I = e + n + 4 | 0, A[I >> 2] = A[I >> 2] | 1), I = e + 8 | 0, y = tA, I | 0;
        if (l = A[6984] | 0, l >>> 0 > k >>> 0)
          return R = l - k | 0, A[6984] = R, I = A[6987] | 0, Q = I + k | 0, A[6987] = Q, A[Q + 4 >> 2] = R | 1, A[I + 4 >> 2] = k | 3, I = I + 8 | 0, y = tA, I | 0;
        if (A[7099] | 0 ? e = A[7101] | 0 : (A[7101] = 4096, A[7100] = 4096, A[7102] = -1, A[7103] = -1, A[7104] = 0, A[7092] = 0, A[7099] = B & -16 ^ 1431655768, e = 4096), f = k + 48 | 0, h = k + 47 | 0, a = e + h | 0, o = 0 - e | 0, m = a & o, m >>> 0 <= k >>> 0 || (e = A[7091] | 0, e | 0 && (p = A[7089] | 0, B = p + m | 0, B >>> 0 <= p >>> 0 | B >>> 0 > e >>> 0)))
          return I = 0, y = tA, I | 0;
        A: do
          if (A[7092] & 4)
            t = 0, D = 143;
          else {
            n = A[6987] | 0;
            t: do
              if (n) {
                for (r = 28372; B = A[r >> 2] | 0, !(B >>> 0 <= n >>> 0 && (B + (A[r + 4 >> 2] | 0) | 0) >>> 0 > n >>> 0); )
                  if (e = A[r + 8 >> 2] | 0, e)
                    r = e;
                  else {
                    D = 128;
                    break t;
                  }
                if (t = a - l & o, t >>> 0 < 2147483647)
                  if (e = en(t | 0) | 0, (e | 0) == ((A[r >> 2] | 0) + (A[r + 4 >> 2] | 0) | 0)) {
                    if ((e | 0) != -1) {
                      l = t, a = e, D = 145;
                      break A;
                    }
                  } else
                    r = e, D = 136;
                else
                  t = 0;
              } else
                D = 128;
            while (!1);
            do
              if ((D | 0) == 128)
                if (n = en(0) | 0, (n | 0) != -1 && (t = n, E = A[7100] | 0, x = E + -1 | 0, t = ((x & t | 0) == 0 ? 0 : (x + t & 0 - E) - t | 0) + m | 0, E = A[7089] | 0, x = t + E | 0, t >>> 0 > k >>> 0 & t >>> 0 < 2147483647)) {
                  if (B = A[7091] | 0, B | 0 && x >>> 0 <= E >>> 0 | x >>> 0 > B >>> 0) {
                    t = 0;
                    break;
                  }
                  if (e = en(t | 0) | 0, (e | 0) == (n | 0)) {
                    l = t, a = n, D = 145;
                    break A;
                  } else
                    r = e, D = 136;
                } else
                  t = 0;
            while (!1);
            do
              if ((D | 0) == 136) {
                if (n = 0 - t | 0, !(f >>> 0 > t >>> 0 & (t >>> 0 < 2147483647 & (r | 0) != -1)))
                  if ((r | 0) == -1) {
                    t = 0;
                    break;
                  } else {
                    l = t, a = r, D = 145;
                    break A;
                  }
                if (e = A[7101] | 0, e = h - t + e & 0 - e, e >>> 0 >= 2147483647) {
                  l = t, a = r, D = 145;
                  break A;
                }
                if ((en(e | 0) | 0) == -1) {
                  en(n | 0) | 0, t = 0;
                  break;
                } else {
                  l = e + t | 0, a = r, D = 145;
                  break A;
                }
              }
            while (!1);
            A[7092] = A[7092] | 4, D = 143;
          }
        while (!1);
        if ((D | 0) == 143 && m >>> 0 < 2147483647 && (R = en(m | 0) | 0, x = en(0) | 0, z = x - R | 0, H = z >>> 0 > (k + 40 | 0) >>> 0, !((R | 0) == -1 | H ^ 1 | R >>> 0 < x >>> 0 & ((R | 0) != -1 & (x | 0) != -1) ^ 1)) && (l = H ? z : t, a = R, D = 145), (D | 0) == 145) {
          t = (A[7089] | 0) + l | 0, A[7089] = t, t >>> 0 > (A[7090] | 0) >>> 0 && (A[7090] = t), h = A[6987] | 0;
          A: do
            if (h) {
              for (t = 28372; ; ) {
                if (e = A[t >> 2] | 0, n = A[t + 4 >> 2] | 0, (a | 0) == (e + n | 0)) {
                  D = 154;
                  break;
                }
                if (r = A[t + 8 >> 2] | 0, r)
                  t = r;
                else
                  break;
              }
              if ((D | 0) == 154 && (Q = t + 4 | 0, (A[t + 12 >> 2] & 8 | 0) == 0) && a >>> 0 > h >>> 0 & e >>> 0 <= h >>> 0) {
                A[Q >> 2] = n + l, I = (A[6984] | 0) + l | 0, R = h + 8 | 0, R = (R & 7 | 0) == 0 ? 0 : 0 - R & 7, Q = h + R | 0, R = I - R | 0, A[6987] = Q, A[6984] = R, A[Q + 4 >> 2] = R | 1, A[h + I + 4 >> 2] = 40, A[6988] = A[7103];
                break;
              }
              for (a >>> 0 < (A[6985] | 0) >>> 0 && (A[6985] = a), n = a + l | 0, t = 28372; ; ) {
                if ((A[t >> 2] | 0) == (n | 0)) {
                  D = 162;
                  break;
                }
                if (e = A[t + 8 >> 2] | 0, e)
                  t = e;
                else
                  break;
              }
              if ((D | 0) == 162 && (A[t + 12 >> 2] & 8 | 0) == 0) {
                A[t >> 2] = a, p = t + 4 | 0, A[p >> 2] = (A[p >> 2] | 0) + l, p = a + 8 | 0, p = a + ((p & 7 | 0) == 0 ? 0 : 0 - p & 7) | 0, t = n + 8 | 0, t = n + ((t & 7 | 0) == 0 ? 0 : 0 - t & 7) | 0, m = p + k | 0, f = t - p - k | 0, A[p + 4 >> 2] = k | 3;
                t: do
                  if ((h | 0) == (t | 0))
                    I = (A[6984] | 0) + f | 0, A[6984] = I, A[6987] = m, A[m + 4 >> 2] = I | 1;
                  else {
                    if ((A[6986] | 0) == (t | 0)) {
                      I = (A[6983] | 0) + f | 0, A[6983] = I, A[6986] = m, A[m + 4 >> 2] = I | 1, A[m + I >> 2] = I;
                      break;
                    }
                    if (e = A[t + 4 >> 2] | 0, (e & 3 | 0) == 1) {
                      l = e & -8, r = e >>> 3;
                      e: do
                        if (e >>> 0 < 256)
                          if (e = A[t + 8 >> 2] | 0, n = A[t + 12 >> 2] | 0, (n | 0) == (e | 0)) {
                            A[6981] = A[6981] & ~(1 << r);
                            break;
                          } else {
                            A[e + 12 >> 2] = n, A[n + 8 >> 2] = e;
                            break;
                          }
                        else {
                          a = A[t + 24 >> 2] | 0, e = A[t + 12 >> 2] | 0;
                          do
                            if ((e | 0) == (t | 0)) {
                              if (n = t + 16 | 0, r = n + 4 | 0, e = A[r >> 2] | 0, e)
                                n = r;
                              else if (e = A[n >> 2] | 0, !e) {
                                e = 0;
                                break;
                              }
                              for (; ; )
                                if (o = e + 20 | 0, r = A[o >> 2] | 0, r)
                                  e = r, n = o;
                                else if (o = e + 16 | 0, r = A[o >> 2] | 0, r)
                                  e = r, n = o;
                                else
                                  break;
                              A[n >> 2] = 0;
                            } else
                              I = A[t + 8 >> 2] | 0, A[I + 12 >> 2] = e, A[e + 8 >> 2] = I;
                          while (!1);
                          if (!a)
                            break;
                          n = A[t + 28 >> 2] | 0, r = 28228 + (n << 2) | 0;
                          do
                            if ((A[r >> 2] | 0) != (t | 0)) {
                              if (I = a + 16 | 0, A[((A[I >> 2] | 0) == (t | 0) ? I : a + 20 | 0) >> 2] = e, !e)
                                break e;
                            } else {
                              if (A[r >> 2] = e, e | 0)
                                break;
                              A[6982] = A[6982] & ~(1 << n);
                              break e;
                            }
                          while (!1);
                          if (A[e + 24 >> 2] = a, n = t + 16 | 0, r = A[n >> 2] | 0, r | 0 && (A[e + 16 >> 2] = r, A[r + 24 >> 2] = e), n = A[n + 4 >> 2] | 0, !n)
                            break;
                          A[e + 20 >> 2] = n, A[n + 24 >> 2] = e;
                        }
                      while (!1);
                      t = t + l | 0, o = l + f | 0;
                    } else
                      o = f;
                    if (t = t + 4 | 0, A[t >> 2] = A[t >> 2] & -2, A[m + 4 >> 2] = o | 1, A[m + o >> 2] = o, t = o >>> 3, o >>> 0 < 256) {
                      n = 27964 + (t << 1 << 2) | 0, e = A[6981] | 0, t = 1 << t, e & t ? (e = n + 8 | 0, t = A[e >> 2] | 0) : (A[6981] = e | t, t = n, e = n + 8 | 0), A[e >> 2] = m, A[t + 12 >> 2] = m, A[m + 8 >> 2] = t, A[m + 12 >> 2] = n;
                      break;
                    }
                    t = o >>> 8;
                    do
                      if (!t)
                        r = 0;
                      else {
                        if (o >>> 0 > 16777215) {
                          r = 31;
                          break;
                        }
                        Q = (t + 1048320 | 0) >>> 16 & 8, I = t << Q, R = (I + 520192 | 0) >>> 16 & 4, I = I << R, r = (I + 245760 | 0) >>> 16 & 2, r = 14 - (R | Q | r) + (I << r >>> 15) | 0, r = o >>> (r + 7 | 0) & 1 | r << 1;
                      }
                    while (!1);
                    if (t = 28228 + (r << 2) | 0, A[m + 28 >> 2] = r, e = m + 16 | 0, A[e + 4 >> 2] = 0, A[e >> 2] = 0, e = A[6982] | 0, n = 1 << r, !(e & n)) {
                      A[6982] = e | n, A[t >> 2] = m, A[m + 24 >> 2] = t, A[m + 12 >> 2] = m, A[m + 8 >> 2] = m;
                      break;
                    }
                    t = A[t >> 2] | 0;
                    e: do
                      if ((A[t + 4 >> 2] & -8 | 0) != (o | 0)) {
                        for (r = o << ((r | 0) == 31 ? 0 : 25 - (r >>> 1) | 0); n = t + 16 + (r >>> 31 << 2) | 0, e = A[n >> 2] | 0, !!e; )
                          if ((A[e + 4 >> 2] & -8 | 0) == (o | 0)) {
                            t = e;
                            break e;
                          } else
                            r = r << 1, t = e;
                        A[n >> 2] = m, A[m + 24 >> 2] = t, A[m + 12 >> 2] = m, A[m + 8 >> 2] = m;
                        break t;
                      }
                    while (!1);
                    Q = t + 8 | 0, I = A[Q >> 2] | 0, A[I + 12 >> 2] = m, A[Q >> 2] = m, A[m + 8 >> 2] = I, A[m + 12 >> 2] = t, A[m + 24 >> 2] = 0;
                  }
                while (!1);
                return I = p + 8 | 0, y = tA, I | 0;
              }
              for (t = 28372; e = A[t >> 2] | 0, !(e >>> 0 <= h >>> 0 && (I = e + (A[t + 4 >> 2] | 0) | 0, I >>> 0 > h >>> 0)); )
                t = A[t + 8 >> 2] | 0;
              o = I + -47 | 0, e = o + 8 | 0, e = o + ((e & 7 | 0) == 0 ? 0 : 0 - e & 7) | 0, o = h + 16 | 0, e = e >>> 0 < o >>> 0 ? h : e, t = e + 8 | 0, n = l + -40 | 0, R = a + 8 | 0, R = (R & 7 | 0) == 0 ? 0 : 0 - R & 7, Q = a + R | 0, R = n - R | 0, A[6987] = Q, A[6984] = R, A[Q + 4 >> 2] = R | 1, A[a + n + 4 >> 2] = 40, A[6988] = A[7103], n = e + 4 | 0, A[n >> 2] = 27, A[t >> 2] = A[7093], A[t + 4 >> 2] = A[7094], A[t + 8 >> 2] = A[7095], A[t + 12 >> 2] = A[7096], A[7093] = a, A[7094] = l, A[7096] = 0, A[7095] = t, t = e + 24 | 0;
              do
                Q = t, t = t + 4 | 0, A[t >> 2] = 7;
              while ((Q + 8 | 0) >>> 0 < I >>> 0);
              if ((e | 0) != (h | 0)) {
                if (a = e - h | 0, A[n >> 2] = A[n >> 2] & -2, A[h + 4 >> 2] = a | 1, A[e >> 2] = a, t = a >>> 3, a >>> 0 < 256) {
                  n = 27964 + (t << 1 << 2) | 0, e = A[6981] | 0, t = 1 << t, e & t ? (e = n + 8 | 0, t = A[e >> 2] | 0) : (A[6981] = e | t, t = n, e = n + 8 | 0), A[e >> 2] = h, A[t + 12 >> 2] = h, A[h + 8 >> 2] = t, A[h + 12 >> 2] = n;
                  break;
                }
                if (t = a >>> 8, t ? a >>> 0 > 16777215 ? r = 31 : (Q = (t + 1048320 | 0) >>> 16 & 8, I = t << Q, R = (I + 520192 | 0) >>> 16 & 4, I = I << R, r = (I + 245760 | 0) >>> 16 & 2, r = 14 - (R | Q | r) + (I << r >>> 15) | 0, r = a >>> (r + 7 | 0) & 1 | r << 1) : r = 0, n = 28228 + (r << 2) | 0, A[h + 28 >> 2] = r, A[h + 20 >> 2] = 0, A[o >> 2] = 0, t = A[6982] | 0, e = 1 << r, !(t & e)) {
                  A[6982] = t | e, A[n >> 2] = h, A[h + 24 >> 2] = n, A[h + 12 >> 2] = h, A[h + 8 >> 2] = h;
                  break;
                }
                t = A[n >> 2] | 0;
                t: do
                  if ((A[t + 4 >> 2] & -8 | 0) != (a | 0)) {
                    for (r = a << ((r | 0) == 31 ? 0 : 25 - (r >>> 1) | 0); n = t + 16 + (r >>> 31 << 2) | 0, e = A[n >> 2] | 0, !!e; )
                      if ((A[e + 4 >> 2] & -8 | 0) == (a | 0)) {
                        t = e;
                        break t;
                      } else
                        r = r << 1, t = e;
                    A[n >> 2] = h, A[h + 24 >> 2] = t, A[h + 12 >> 2] = h, A[h + 8 >> 2] = h;
                    break A;
                  }
                while (!1);
                Q = t + 8 | 0, I = A[Q >> 2] | 0, A[I + 12 >> 2] = h, A[Q >> 2] = h, A[h + 8 >> 2] = I, A[h + 12 >> 2] = t, A[h + 24 >> 2] = 0;
              }
            } else
              I = A[6985] | 0, (I | 0) == 0 | a >>> 0 < I >>> 0 && (A[6985] = a), A[7093] = a, A[7094] = l, A[7096] = 0, A[6990] = A[7099], A[6989] = -1, A[6994] = 27964, A[6993] = 27964, A[6996] = 27972, A[6995] = 27972, A[6998] = 27980, A[6997] = 27980, A[7e3] = 27988, A[6999] = 27988, A[7002] = 27996, A[7001] = 27996, A[7004] = 28004, A[7003] = 28004, A[7006] = 28012, A[7005] = 28012, A[7008] = 28020, A[7007] = 28020, A[7010] = 28028, A[7009] = 28028, A[7012] = 28036, A[7011] = 28036, A[7014] = 28044, A[7013] = 28044, A[7016] = 28052, A[7015] = 28052, A[7018] = 28060, A[7017] = 28060, A[7020] = 28068, A[7019] = 28068, A[7022] = 28076, A[7021] = 28076, A[7024] = 28084, A[7023] = 28084, A[7026] = 28092, A[7025] = 28092, A[7028] = 28100, A[7027] = 28100, A[7030] = 28108, A[7029] = 28108, A[7032] = 28116, A[7031] = 28116, A[7034] = 28124, A[7033] = 28124, A[7036] = 28132, A[7035] = 28132, A[7038] = 28140, A[7037] = 28140, A[7040] = 28148, A[7039] = 28148, A[7042] = 28156, A[7041] = 28156, A[7044] = 28164, A[7043] = 28164, A[7046] = 28172, A[7045] = 28172, A[7048] = 28180, A[7047] = 28180, A[7050] = 28188, A[7049] = 28188, A[7052] = 28196, A[7051] = 28196, A[7054] = 28204, A[7053] = 28204, A[7056] = 28212, A[7055] = 28212, I = l + -40 | 0, R = a + 8 | 0, R = (R & 7 | 0) == 0 ? 0 : 0 - R & 7, Q = a + R | 0, R = I - R | 0, A[6987] = Q, A[6984] = R, A[Q + 4 >> 2] = R | 1, A[a + I + 4 >> 2] = 40, A[6988] = A[7103];
          while (!1);
          if (t = A[6984] | 0, t >>> 0 > k >>> 0)
            return R = t - k | 0, A[6984] = R, I = A[6987] | 0, Q = I + k | 0, A[6987] = Q, A[Q + 4 >> 2] = R | 1, A[I + 4 >> 2] = k | 3, I = I + 8 | 0, y = tA, I | 0;
        }
        return I = Ol() | 0, A[I >> 2] = 12, I = 0, y = tA, I | 0;
      }
      function dA(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0, o = 0, a = 0, l = 0, f = 0, h = 0;
        if (e) {
          n = e + -8 | 0, o = A[6985] | 0, e = A[e + -4 >> 2] | 0, t = e & -8, h = n + t | 0;
          do
            if (e & 1)
              f = n, l = n;
            else {
              if (r = A[n >> 2] | 0, !(e & 3) || (l = n + (0 - r) | 0, a = r + t | 0, l >>> 0 < o >>> 0))
                return;
              if ((A[6986] | 0) == (l | 0)) {
                if (e = h + 4 | 0, t = A[e >> 2] | 0, (t & 3 | 0) != 3) {
                  f = l, t = a;
                  break;
                }
                A[6983] = a, A[e >> 2] = t & -2, A[l + 4 >> 2] = a | 1, A[l + a >> 2] = a;
                return;
              }
              if (n = r >>> 3, r >>> 0 < 256)
                if (e = A[l + 8 >> 2] | 0, t = A[l + 12 >> 2] | 0, (t | 0) == (e | 0)) {
                  A[6981] = A[6981] & ~(1 << n), f = l, t = a;
                  break;
                } else {
                  A[e + 12 >> 2] = t, A[t + 8 >> 2] = e, f = l, t = a;
                  break;
                }
              o = A[l + 24 >> 2] | 0, e = A[l + 12 >> 2] | 0;
              do
                if ((e | 0) == (l | 0)) {
                  if (t = l + 16 | 0, n = t + 4 | 0, e = A[n >> 2] | 0, e)
                    t = n;
                  else if (e = A[t >> 2] | 0, !e) {
                    e = 0;
                    break;
                  }
                  for (; ; )
                    if (r = e + 20 | 0, n = A[r >> 2] | 0, n)
                      e = n, t = r;
                    else if (r = e + 16 | 0, n = A[r >> 2] | 0, n)
                      e = n, t = r;
                    else
                      break;
                  A[t >> 2] = 0;
                } else
                  f = A[l + 8 >> 2] | 0, A[f + 12 >> 2] = e, A[e + 8 >> 2] = f;
              while (!1);
              if (o) {
                if (t = A[l + 28 >> 2] | 0, n = 28228 + (t << 2) | 0, (A[n >> 2] | 0) == (l | 0)) {
                  if (A[n >> 2] = e, !e) {
                    A[6982] = A[6982] & ~(1 << t), f = l, t = a;
                    break;
                  }
                } else if (f = o + 16 | 0, A[((A[f >> 2] | 0) == (l | 0) ? f : o + 20 | 0) >> 2] = e, !e) {
                  f = l, t = a;
                  break;
                }
                A[e + 24 >> 2] = o, t = l + 16 | 0, n = A[t >> 2] | 0, n | 0 && (A[e + 16 >> 2] = n, A[n + 24 >> 2] = e), t = A[t + 4 >> 2] | 0, t ? (A[e + 20 >> 2] = t, A[t + 24 >> 2] = e, f = l, t = a) : (f = l, t = a);
              } else
                f = l, t = a;
            }
          while (!1);
          if (!(l >>> 0 >= h >>> 0) && (e = h + 4 | 0, r = A[e >> 2] | 0, !!(r & 1))) {
            if (r & 2)
              A[e >> 2] = r & -2, A[f + 4 >> 2] = t | 1, A[l + t >> 2] = t, o = t;
            else {
              if ((A[6987] | 0) == (h | 0)) {
                if (h = (A[6984] | 0) + t | 0, A[6984] = h, A[6987] = f, A[f + 4 >> 2] = h | 1, (f | 0) != (A[6986] | 0))
                  return;
                A[6986] = 0, A[6983] = 0;
                return;
              }
              if ((A[6986] | 0) == (h | 0)) {
                h = (A[6983] | 0) + t | 0, A[6983] = h, A[6986] = l, A[f + 4 >> 2] = h | 1, A[l + h >> 2] = h;
                return;
              }
              o = (r & -8) + t | 0, n = r >>> 3;
              do
                if (r >>> 0 < 256)
                  if (t = A[h + 8 >> 2] | 0, e = A[h + 12 >> 2] | 0, (e | 0) == (t | 0)) {
                    A[6981] = A[6981] & ~(1 << n);
                    break;
                  } else {
                    A[t + 12 >> 2] = e, A[e + 8 >> 2] = t;
                    break;
                  }
                else {
                  a = A[h + 24 >> 2] | 0, e = A[h + 12 >> 2] | 0;
                  do
                    if ((e | 0) == (h | 0)) {
                      if (t = h + 16 | 0, n = t + 4 | 0, e = A[n >> 2] | 0, e)
                        t = n;
                      else if (e = A[t >> 2] | 0, !e) {
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
                      n = A[h + 8 >> 2] | 0, A[n + 12 >> 2] = e, A[e + 8 >> 2] = n, n = e;
                  while (!1);
                  if (a | 0) {
                    if (e = A[h + 28 >> 2] | 0, t = 28228 + (e << 2) | 0, (A[t >> 2] | 0) == (h | 0)) {
                      if (A[t >> 2] = n, !n) {
                        A[6982] = A[6982] & ~(1 << e);
                        break;
                      }
                    } else if (r = a + 16 | 0, A[((A[r >> 2] | 0) == (h | 0) ? r : a + 20 | 0) >> 2] = n, !n)
                      break;
                    A[n + 24 >> 2] = a, e = h + 16 | 0, t = A[e >> 2] | 0, t | 0 && (A[n + 16 >> 2] = t, A[t + 24 >> 2] = n), e = A[e + 4 >> 2] | 0, e | 0 && (A[n + 20 >> 2] = e, A[e + 24 >> 2] = n);
                  }
                }
              while (!1);
              if (A[f + 4 >> 2] = o | 1, A[l + o >> 2] = o, (f | 0) == (A[6986] | 0)) {
                A[6983] = o;
                return;
              }
            }
            if (e = o >>> 3, o >>> 0 < 256) {
              n = 27964 + (e << 1 << 2) | 0, t = A[6981] | 0, e = 1 << e, t & e ? (t = n + 8 | 0, e = A[t >> 2] | 0) : (A[6981] = t | e, e = n, t = n + 8 | 0), A[t >> 2] = f, A[e + 12 >> 2] = f, A[f + 8 >> 2] = e, A[f + 12 >> 2] = n;
              return;
            }
            e = o >>> 8, e ? o >>> 0 > 16777215 ? r = 31 : (l = (e + 1048320 | 0) >>> 16 & 8, h = e << l, a = (h + 520192 | 0) >>> 16 & 4, h = h << a, r = (h + 245760 | 0) >>> 16 & 2, r = 14 - (a | l | r) + (h << r >>> 15) | 0, r = o >>> (r + 7 | 0) & 1 | r << 1) : r = 0, e = 28228 + (r << 2) | 0, A[f + 28 >> 2] = r, A[f + 20 >> 2] = 0, A[f + 16 >> 2] = 0, t = A[6982] | 0, n = 1 << r;
            A: do
              if (!(t & n))
                A[6982] = t | n, A[e >> 2] = f, A[f + 24 >> 2] = e, A[f + 12 >> 2] = f, A[f + 8 >> 2] = f;
              else {
                e = A[e >> 2] | 0;
                t: do
                  if ((A[e + 4 >> 2] & -8 | 0) != (o | 0)) {
                    for (r = o << ((r | 0) == 31 ? 0 : 25 - (r >>> 1) | 0); n = e + 16 + (r >>> 31 << 2) | 0, t = A[n >> 2] | 0, !!t; )
                      if ((A[t + 4 >> 2] & -8 | 0) == (o | 0)) {
                        e = t;
                        break t;
                      } else
                        r = r << 1, e = t;
                    A[n >> 2] = f, A[f + 24 >> 2] = e, A[f + 12 >> 2] = f, A[f + 8 >> 2] = f;
                    break A;
                  }
                while (!1);
                l = e + 8 | 0, h = A[l >> 2] | 0, A[h + 12 >> 2] = f, A[l >> 2] = f, A[f + 8 >> 2] = h, A[f + 12 >> 2] = e, A[f + 24 >> 2] = 0;
              }
            while (!1);
            if (h = (A[6989] | 0) + -1 | 0, A[6989] = h, !(h | 0)) {
              for (e = 28380; e = A[e >> 2] | 0, e; )
                e = e + 8 | 0;
              A[6989] = -1;
            }
          }
        }
      }
      function ve(e, t) {
        e = e | 0, t = t | 0;
        var n = 0;
        return e ? (n = Fe(t, e) | 0, (t | e) >>> 0 > 65535 && (n = ((n >>> 0) / (e >>> 0) | 0 | 0) == (t | 0) ? n : -1)) : n = 0, e = wi(n) | 0, !e || !(A[e + -4 >> 2] & 3) || tn(e | 0, 0, n | 0) | 0, e | 0;
      }
      function cA(e, t, n, r) {
        return e = e | 0, t = t | 0, n = n | 0, r = r | 0, n = e + n >>> 0, EA(t + r + (n >>> 0 < e >>> 0 | 0) >>> 0 | 0), n | 0 | 0;
      }
      function Nt(e, t, n, r) {
        return e = e | 0, t = t | 0, n = n | 0, r = r | 0, r = t - r - (n >>> 0 > e >>> 0 | 0) >>> 0, EA(r | 0), e - n >>> 0 | 0 | 0;
      }
      function da(e) {
        return e = e | 0, (e ? 31 - (ii(e ^ e - 1) | 0) | 0 : 32) | 0;
      }
      function Ms(e, t, n, r, o) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0, o = o | 0;
        var a = 0, l = 0, f = 0, h = 0, m = 0, p = 0, k = 0, B = 0, E = 0, x = 0;
        if (p = e, h = t, m = h, l = n, B = r, f = B, !m)
          return a = (o | 0) != 0, f ? a ? (A[o >> 2] = e | 0, A[o + 4 >> 2] = t & 0, B = 0, o = 0, EA(B | 0), o | 0) : (B = 0, o = 0, EA(B | 0), o | 0) : (a && (A[o >> 2] = (p >>> 0) % (l >>> 0), A[o + 4 >> 2] = 0), B = 0, o = (p >>> 0) / (l >>> 0) >>> 0, EA(B | 0), o | 0);
        a = (f | 0) == 0;
        do
          if (l) {
            if (!a) {
              if (a = (ii(f | 0) | 0) - (ii(m | 0) | 0) | 0, a >>> 0 <= 31) {
                k = a + 1 | 0, f = 31 - a | 0, t = a - 31 >> 31, l = k, e = p >>> (k >>> 0) & t | m << f, t = m >>> (k >>> 0) & t, a = 0, f = p << f;
                break;
              }
              return o ? (A[o >> 2] = e | 0, A[o + 4 >> 2] = h | t & 0, B = 0, o = 0, EA(B | 0), o | 0) : (B = 0, o = 0, EA(B | 0), o | 0);
            }
            if (a = l - 1 | 0, a & l | 0) {
              f = (ii(l | 0) | 0) + 33 - (ii(m | 0) | 0) | 0, x = 64 - f | 0, k = 32 - f | 0, h = k >> 31, E = f - 32 | 0, t = E >> 31, l = f, e = k - 1 >> 31 & m >>> (E >>> 0) | (m << k | p >>> (f >>> 0)) & t, t = t & m >>> (f >>> 0), a = p << x & h, f = (m << x | p >>> (E >>> 0)) & h | p << k & f - 33 >> 31;
              break;
            }
            return o | 0 && (A[o >> 2] = a & p, A[o + 4 >> 2] = 0), (l | 0) == 1 ? (E = h | t & 0, x = e | 0 | 0, EA(E | 0), x | 0) : (x = da(l | 0) | 0, E = m >>> (x >>> 0) | 0, x = m << 32 - x | p >>> (x >>> 0) | 0, EA(E | 0), x | 0);
          } else {
            if (a)
              return o | 0 && (A[o >> 2] = (m >>> 0) % (l >>> 0), A[o + 4 >> 2] = 0), E = 0, x = (m >>> 0) / (l >>> 0) >>> 0, EA(E | 0), x | 0;
            if (!p)
              return o | 0 && (A[o >> 2] = 0, A[o + 4 >> 2] = (m >>> 0) % (f >>> 0)), E = 0, x = (m >>> 0) / (f >>> 0) >>> 0, EA(E | 0), x | 0;
            if (a = f - 1 | 0, !(a & f))
              return o | 0 && (A[o >> 2] = e | 0, A[o + 4 >> 2] = a & m | t & 0), E = 0, x = m >>> ((da(f | 0) | 0) >>> 0), EA(E | 0), x | 0;
            if (a = (ii(f | 0) | 0) - (ii(m | 0) | 0) | 0, a >>> 0 <= 30) {
              t = a + 1 | 0, f = 31 - a | 0, l = t, e = m << f | p >>> (t >>> 0), t = m >>> (t >>> 0), a = 0, f = p << f;
              break;
            }
            return o ? (A[o >> 2] = e | 0, A[o + 4 >> 2] = h | t & 0, E = 0, x = 0, EA(E | 0), x | 0) : (E = 0, x = 0, EA(E | 0), x | 0);
          }
        while (!1);
        if (!l)
          m = f, h = 0, f = 0;
        else {
          k = n | 0 | 0, p = B | r & 0, m = cA(k | 0, p | 0, -1, -1) | 0, n = P() | 0, h = f, f = 0;
          do
            r = h, h = a >>> 31 | h << 1, a = f | a << 1, r = e << 1 | r >>> 31 | 0, B = e >>> 31 | t << 1 | 0, Nt(m | 0, n | 0, r | 0, B | 0) | 0, x = P() | 0, E = x >> 31 | ((x | 0) < 0 ? -1 : 0) << 1, f = E & 1, e = Nt(r | 0, B | 0, E & k | 0, (((x | 0) < 0 ? -1 : 0) >> 31 | ((x | 0) < 0 ? -1 : 0) << 1) & p | 0) | 0, t = P() | 0, l = l - 1 | 0;
          while ((l | 0) != 0);
          m = h, h = 0;
        }
        return l = 0, o | 0 && (A[o >> 2] = e, A[o + 4 >> 2] = t), E = (a | 0) >>> 31 | (m | l) << 1 | (l << 1 | a >>> 31) & 0 | h, x = (a << 1 | 0) & -2 | f, EA(E | 0), x | 0;
      }
      function An(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0;
        return m = t >> 31 | ((t | 0) < 0 ? -1 : 0) << 1, h = ((t | 0) < 0 ? -1 : 0) >> 31 | ((t | 0) < 0 ? -1 : 0) << 1, a = r >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, o = ((r | 0) < 0 ? -1 : 0) >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, f = Nt(m ^ e | 0, h ^ t | 0, m | 0, h | 0) | 0, l = P() | 0, e = a ^ m, t = o ^ h, Nt((Ms(f, l, Nt(a ^ n | 0, o ^ r | 0, a | 0, o | 0) | 0, P() | 0, 0) | 0) ^ e | 0, (P() | 0) ^ t | 0, e | 0, t | 0) | 0;
      }
      function Ql(e, t) {
        e = e | 0, t = t | 0;
        var n = 0, r = 0, o = 0, a = 0;
        return a = e & 65535, o = t & 65535, n = Fe(o, a) | 0, r = e >>> 16, e = (n >>> 16) + (Fe(o, r) | 0) | 0, o = t >>> 16, t = Fe(o, a) | 0, EA((e >>> 16) + (Fe(o, r) | 0) + (((e & 65535) + t | 0) >>> 16) | 0), e + t << 16 | n & 65535 | 0 | 0;
      }
      function Gt(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        return o = e, a = n, n = Ql(o, a) | 0, e = P() | 0, EA((Fe(t, a) | 0) + (Fe(r, o) | 0) + e | e & 0 | 0), n | 0 | 0 | 0;
      }
      function g0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0, l = 0, f = 0, h = 0, m = 0;
        return o = y, y = y + 16 | 0, f = o | 0, l = t >> 31 | ((t | 0) < 0 ? -1 : 0) << 1, a = ((t | 0) < 0 ? -1 : 0) >> 31 | ((t | 0) < 0 ? -1 : 0) << 1, m = r >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, h = ((r | 0) < 0 ? -1 : 0) >> 31 | ((r | 0) < 0 ? -1 : 0) << 1, e = Nt(l ^ e | 0, a ^ t | 0, l | 0, a | 0) | 0, t = P() | 0, Ms(e, t, Nt(m ^ n | 0, h ^ r | 0, m | 0, h | 0) | 0, P() | 0, f) | 0, r = Nt(A[f >> 2] ^ l | 0, A[f + 4 >> 2] ^ a | 0, l | 0, a | 0) | 0, n = P() | 0, y = o, EA(n | 0), r | 0;
      }
      function w0(e, t, n, r) {
        e = e | 0, t = t | 0, n = n | 0, r = r | 0;
        var o = 0, a = 0;
        return a = y, y = y + 16 | 0, o = a | 0, Ms(e, t, n, r, o) | 0, y = a, EA(A[o + 4 >> 2] | 0), A[o >> 2] | 0 | 0;
      }
      function ma(e, t, n) {
        return e = e | 0, t = t | 0, n = n | 0, (n | 0) < 32 ? (EA(t >> n | 0), e >>> n | (t & (1 << n) - 1) << 32 - n) : (EA(((t | 0) < 0 ? -1 : 0) | 0), t >> n - 32 | 0);
      }
      function q(e, t, n) {
        return e = e | 0, t = t | 0, n = n | 0, (n | 0) < 32 ? (EA(t >>> n | 0), e >>> n | (t & (1 << n) - 1) << 32 - n) : (EA(0), t >>> n - 32 | 0);
      }
      function $(e, t, n) {
        return e = e | 0, t = t | 0, n = n | 0, (n | 0) < 32 ? (EA(t << n | (e & (1 << n) - 1 << 32 - n) >>> 32 - n | 0), e << n) : (EA(e << n - 32 | 0), 0);
      }
      function Ds(e, t, n) {
        return e = e | 0, t = t | 0, t = ii(t) | 0, (t | 0) == 32 && (t = t + (ii(e) | 0) | 0), EA(0), t | 0;
      }
      function pa(e, t) {
        return e = +e, t = +t, e != e ? +t : t != t ? +e : +Xo(+e, +t);
      }
      function yo(e, t) {
        return e = +e, t = +t, e != e ? +t : t != t ? +e : +W0(+e, +t);
      }
      function bo(e) {
        return e = +e, e >= 0 ? +xt(e + 0.5) : +ei(e - 0.5);
      }
      function y0(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0;
        if ((n | 0) >= 8192)
          return dn(e | 0, t | 0, n | 0) | 0, e | 0;
        if (a = e | 0, o = e + n | 0, (e & 3) == (t & 3)) {
          for (; e & 3; ) {
            if (!n)
              return a | 0;
            Y[e >> 0] = Y[t >> 0] | 0, e = e + 1 | 0, t = t + 1 | 0, n = n - 1 | 0;
          }
          for (n = o & -4 | 0, r = n - 64 | 0; (e | 0) <= (r | 0); )
            A[e >> 2] = A[t >> 2], A[e + 4 >> 2] = A[t + 4 >> 2], A[e + 8 >> 2] = A[t + 8 >> 2], A[e + 12 >> 2] = A[t + 12 >> 2], A[e + 16 >> 2] = A[t + 16 >> 2], A[e + 20 >> 2] = A[t + 20 >> 2], A[e + 24 >> 2] = A[t + 24 >> 2], A[e + 28 >> 2] = A[t + 28 >> 2], A[e + 32 >> 2] = A[t + 32 >> 2], A[e + 36 >> 2] = A[t + 36 >> 2], A[e + 40 >> 2] = A[t + 40 >> 2], A[e + 44 >> 2] = A[t + 44 >> 2], A[e + 48 >> 2] = A[t + 48 >> 2], A[e + 52 >> 2] = A[t + 52 >> 2], A[e + 56 >> 2] = A[t + 56 >> 2], A[e + 60 >> 2] = A[t + 60 >> 2], e = e + 64 | 0, t = t + 64 | 0;
          for (; (e | 0) < (n | 0); )
            A[e >> 2] = A[t >> 2], e = e + 4 | 0, t = t + 4 | 0;
        } else
          for (n = o - 4 | 0; (e | 0) < (n | 0); )
            Y[e >> 0] = Y[t >> 0] | 0, Y[e + 1 >> 0] = Y[t + 1 >> 0] | 0, Y[e + 2 >> 0] = Y[t + 2 >> 0] | 0, Y[e + 3 >> 0] = Y[t + 3 >> 0] | 0, e = e + 4 | 0, t = t + 4 | 0;
        for (; (e | 0) < (o | 0); )
          Y[e >> 0] = Y[t >> 0] | 0, e = e + 1 | 0, t = t + 1 | 0;
        return a | 0;
      }
      function tn(e, t, n) {
        e = e | 0, t = t | 0, n = n | 0;
        var r = 0, o = 0, a = 0, l = 0;
        if (a = e + n | 0, t = t & 255, (n | 0) >= 67) {
          for (; e & 3; )
            Y[e >> 0] = t, e = e + 1 | 0;
          for (r = a & -4 | 0, l = t | t << 8 | t << 16 | t << 24, o = r - 64 | 0; (e | 0) <= (o | 0); )
            A[e >> 2] = l, A[e + 4 >> 2] = l, A[e + 8 >> 2] = l, A[e + 12 >> 2] = l, A[e + 16 >> 2] = l, A[e + 20 >> 2] = l, A[e + 24 >> 2] = l, A[e + 28 >> 2] = l, A[e + 32 >> 2] = l, A[e + 36 >> 2] = l, A[e + 40 >> 2] = l, A[e + 44 >> 2] = l, A[e + 48 >> 2] = l, A[e + 52 >> 2] = l, A[e + 56 >> 2] = l, A[e + 60 >> 2] = l, e = e + 64 | 0;
          for (; (e | 0) < (r | 0); )
            A[e >> 2] = l, e = e + 4 | 0;
        }
        for (; (e | 0) < (a | 0); )
          Y[e >> 0] = t, e = e + 1 | 0;
        return a - n | 0;
      }
      function va(e) {
        return e = +e, e >= 0 ? +xt(e + 0.5) : +ei(e - 0.5);
      }
      function en(e) {
        e = e | 0;
        var t = 0, n = 0, r = 0;
        return r = qr() | 0, n = A[At >> 2] | 0, t = n + e | 0, (e | 0) > 0 & (t | 0) < (n | 0) | (t | 0) < 0 ? (dt(t | 0) | 0, j0(12), -1) : (t | 0) > (r | 0) && !(JA(t | 0) | 0) ? (j0(12), -1) : (A[At >> 2] = t, n | 0);
      }
      return {
        ___divdi3: An,
        ___muldi3: Gt,
        ___remdi3: g0,
        ___uremdi3: w0,
        _areNeighborCells: rs,
        _bitshift64Ashr: ma,
        _bitshift64Lshr: q,
        _bitshift64Shl: $,
        _calloc: ve,
        _cellAreaKm2: fo,
        _cellAreaM2: ho,
        _cellAreaRads2: Ie,
        _cellToBoundary: De,
        _cellToCenterChild: si,
        _cellToChildPos: d0,
        _cellToChildren: u0,
        _cellToChildrenSize: oi,
        _cellToLatLng: Ge,
        _cellToLocalIj: co,
        _cellToParent: cr,
        _cellToVertex: Jt,
        _cellToVertexes: wo,
        _cellsToDirectedEdge: os,
        _cellsToLinkedMultiPolygon: i0,
        _childPosToCell: ms,
        _compactCells: f0,
        _constructCell: fs,
        _destroyLinkedMultiPolygon: vr,
        _directedEdgeToBoundary: Ne,
        _directedEdgeToCells: io,
        _edgeLengthKm: ys,
        _edgeLengthM: v0,
        _edgeLengthRads: En,
        _emscripten_replace_memory: Hi,
        _free: dA,
        _getBaseCellNumber: de,
        _getDirectedEdgeDestination: ss,
        _getDirectedEdgeOrigin: lr,
        _getHexagonAreaAvgKm2: qi,
        _getHexagonAreaAvgM2: ws,
        _getHexagonEdgeLengthAvgKm: Ji,
        _getHexagonEdgeLengthAvgM: lo,
        _getIcosahedronFaces: c0,
        _getIndexDigit: Vi,
        _getNumCells: Bn,
        _getPentagons: pr,
        _getRes0Cells: $0,
        _getResolution: us,
        _greatCircleDistanceKm: vi,
        _greatCircleDistanceM: vs,
        _greatCircleDistanceRads: ps,
        _gridDisk: mn,
        _gridDiskDistances: Ae,
        _gridDistance: ks,
        _gridPathCells: vo,
        _gridPathCellsSize: po,
        _gridRing: kt,
        _gridRingUnsafe: _i,
        _i64Add: cA,
        _i64Subtract: Nt,
        _isPentagon: nt,
        _isResClassIII: cs,
        _isValidCell: Te,
        _isValidDirectedEdge: ur,
        _isValidIndex: hs,
        _isValidVertex: ua,
        _latLngToCell: kn,
        _llvm_ctlz_i64: Ds,
        _llvm_maxnum_f64: pa,
        _llvm_minnum_f64: yo,
        _llvm_round_f64: bo,
        _localIjToCell: mo,
        _malloc: wi,
        _maxFaceCount: _0,
        _maxGridDiskSize: V0,
        _maxPolygonToCellsSize: K0,
        _maxPolygonToCellsSizeExperimental: b,
        _memcpy: y0,
        _memset: tn,
        _originToDirectedEdges: a0,
        _pentagonCount: oo,
        _polygonToCells: q0,
        _polygonToCellsExperimental: v,
        _readInt64AsDoubleFromPointer: go,
        _res0CellCount: $r,
        _round: va,
        _sbrk: en,
        _sizeOfCellBoundary: qt,
        _sizeOfCoordIJ: Es,
        _sizeOfGeoLoop: Xi,
        _sizeOfGeoPolygon: Ps,
        _sizeOfH3Index: Mt,
        _sizeOfLatLng: pe,
        _sizeOfLinkedGeoPolygon: Bs,
        _uncompactCells: _s,
        _uncompactCellsSize: dr,
        _vertexToLatLng: Ts,
        establishStackSpace: yt,
        stackAlloc: Ui,
        stackRestore: zA,
        stackSave: Y0
      };
    })(_n, Ko, XA)
  );
  c.___divdi3 = X.___divdi3, c.___muldi3 = X.___muldi3, c.___remdi3 = X.___remdi3, c.___uremdi3 = X.___uremdi3, c._areNeighborCells = X._areNeighborCells, c._bitshift64Ashr = X._bitshift64Ashr, c._bitshift64Lshr = X._bitshift64Lshr, c._bitshift64Shl = X._bitshift64Shl, c._calloc = X._calloc, c._cellAreaKm2 = X._cellAreaKm2, c._cellAreaM2 = X._cellAreaM2, c._cellAreaRads2 = X._cellAreaRads2, c._cellToBoundary = X._cellToBoundary, c._cellToCenterChild = X._cellToCenterChild, c._cellToChildPos = X._cellToChildPos, c._cellToChildren = X._cellToChildren, c._cellToChildrenSize = X._cellToChildrenSize, c._cellToLatLng = X._cellToLatLng, c._cellToLocalIj = X._cellToLocalIj, c._cellToParent = X._cellToParent, c._cellToVertex = X._cellToVertex, c._cellToVertexes = X._cellToVertexes, c._cellsToDirectedEdge = X._cellsToDirectedEdge, c._cellsToLinkedMultiPolygon = X._cellsToLinkedMultiPolygon, c._childPosToCell = X._childPosToCell, c._compactCells = X._compactCells, c._constructCell = X._constructCell, c._destroyLinkedMultiPolygon = X._destroyLinkedMultiPolygon, c._directedEdgeToBoundary = X._directedEdgeToBoundary, c._directedEdgeToCells = X._directedEdgeToCells, c._edgeLengthKm = X._edgeLengthKm, c._edgeLengthM = X._edgeLengthM, c._edgeLengthRads = X._edgeLengthRads;
  var Wr = c._emscripten_replace_memory = X._emscripten_replace_memory;
  c._free = X._free, c._getBaseCellNumber = X._getBaseCellNumber, c._getDirectedEdgeDestination = X._getDirectedEdgeDestination, c._getDirectedEdgeOrigin = X._getDirectedEdgeOrigin, c._getHexagonAreaAvgKm2 = X._getHexagonAreaAvgKm2, c._getHexagonAreaAvgM2 = X._getHexagonAreaAvgM2, c._getHexagonEdgeLengthAvgKm = X._getHexagonEdgeLengthAvgKm, c._getHexagonEdgeLengthAvgM = X._getHexagonEdgeLengthAvgM, c._getIcosahedronFaces = X._getIcosahedronFaces, c._getIndexDigit = X._getIndexDigit, c._getNumCells = X._getNumCells, c._getPentagons = X._getPentagons, c._getRes0Cells = X._getRes0Cells, c._getResolution = X._getResolution, c._greatCircleDistanceKm = X._greatCircleDistanceKm, c._greatCircleDistanceM = X._greatCircleDistanceM, c._greatCircleDistanceRads = X._greatCircleDistanceRads, c._gridDisk = X._gridDisk, c._gridDiskDistances = X._gridDiskDistances, c._gridDistance = X._gridDistance, c._gridPathCells = X._gridPathCells, c._gridPathCellsSize = X._gridPathCellsSize, c._gridRing = X._gridRing, c._gridRingUnsafe = X._gridRingUnsafe, c._i64Add = X._i64Add, c._i64Subtract = X._i64Subtract, c._isPentagon = X._isPentagon, c._isResClassIII = X._isResClassIII, c._isValidCell = X._isValidCell, c._isValidDirectedEdge = X._isValidDirectedEdge, c._isValidIndex = X._isValidIndex, c._isValidVertex = X._isValidVertex, c._latLngToCell = X._latLngToCell, c._llvm_ctlz_i64 = X._llvm_ctlz_i64, c._llvm_maxnum_f64 = X._llvm_maxnum_f64, c._llvm_minnum_f64 = X._llvm_minnum_f64, c._llvm_round_f64 = X._llvm_round_f64, c._localIjToCell = X._localIjToCell, c._malloc = X._malloc, c._maxFaceCount = X._maxFaceCount, c._maxGridDiskSize = X._maxGridDiskSize, c._maxPolygonToCellsSize = X._maxPolygonToCellsSize, c._maxPolygonToCellsSizeExperimental = X._maxPolygonToCellsSizeExperimental, c._memcpy = X._memcpy, c._memset = X._memset, c._originToDirectedEdges = X._originToDirectedEdges, c._pentagonCount = X._pentagonCount, c._polygonToCells = X._polygonToCells, c._polygonToCellsExperimental = X._polygonToCellsExperimental, c._readInt64AsDoubleFromPointer = X._readInt64AsDoubleFromPointer, c._res0CellCount = X._res0CellCount, c._round = X._round, c._sbrk = X._sbrk, c._sizeOfCellBoundary = X._sizeOfCellBoundary, c._sizeOfCoordIJ = X._sizeOfCoordIJ, c._sizeOfGeoLoop = X._sizeOfGeoLoop, c._sizeOfGeoPolygon = X._sizeOfGeoPolygon, c._sizeOfH3Index = X._sizeOfH3Index, c._sizeOfLatLng = X._sizeOfLatLng, c._sizeOfLinkedGeoPolygon = X._sizeOfLinkedGeoPolygon, c._uncompactCells = X._uncompactCells, c._uncompactCellsSize = X._uncompactCellsSize, c._vertexToLatLng = X._vertexToLatLng, c.establishStackSpace = X.establishStackSpace;
  var H0 = c.stackAlloc = X.stackAlloc, jr = c.stackRestore = X.stackRestore, qo = c.stackSave = X.stackSave;
  if (c.asm = X, c.cwrap = gA, c.setValue = nA, c.getValue = V, Le) {
    Q0(Le) || (Le = S(Le));
    {
      O0();
      var U0 = function(W) {
        W.byteLength && (W = new Uint8Array(W)), Be.set(W, oA), c.memoryInitializerRequest && delete c.memoryInitializerRequest.response, Zr();
      }, Yr = function() {
        Z(Le, U0, function() {
          throw "could not load memory initializer " + Le;
        });
      }, Vr = G0(Le);
      if (Vr)
        U0(Vr.buffer);
      else if (c.memoryInitializerRequest) {
        var Kr = function() {
          var W = c.memoryInitializerRequest, K = W.response;
          if (W.status !== 200 && W.status !== 0) {
            var rA = G0(c.memoryInitializerRequestURL);
            if (rA)
              K = rA.buffer;
            else {
              console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + W.status + ", retrying " + Le), Yr();
              return;
            }
          }
          U0(K);
        };
        c.memoryInitializerRequest.response ? setTimeout(Kr, 0) : c.memoryInitializerRequest.addEventListener("load", Kr);
      } else
        Yr();
    }
  }
  var A0;
  Ze = function W() {
    A0 || cn(), A0 || (Ze = W);
  };
  function cn(W) {
    if (Ce > 0 || (Ee(), Ce > 0))
      return;
    function K() {
      A0 || (A0 = !0, !uA && (Re(), qn(), c.onRuntimeInitialized && c.onRuntimeInitialized(), St()));
    }
    c.setStatus ? (c.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        c.setStatus("");
      }, 1), K();
    }, 1)) : K();
  }
  c.run = cn;
  function Gi(W) {
    throw c.onAbort && c.onAbort(W), W += "", G(W), O(W), uA = !0, "abort(" + W + "). Build with -s ASSERTIONS=1 for more info.";
  }
  if (c.abort = Gi, c.preInit)
    for (typeof c.preInit == "function" && (c.preInit = [c.preInit]); c.preInit.length > 0; )
      c.preInit.pop()();
  return cn(), d;
})(typeof be == "object" ? be : {}), bA = "number", wA = bA, b0 = bA, PA = bA, BA = bA, Ht = bA, aA = bA, Wf = [
  // The size functions are inserted via build/sizes.h
  ["sizeOfH3Index", bA],
  ["sizeOfLatLng", bA],
  ["sizeOfCellBoundary", bA],
  ["sizeOfGeoLoop", bA],
  ["sizeOfGeoPolygon", bA],
  ["sizeOfLinkedGeoPolygon", bA],
  ["sizeOfCoordIJ", bA],
  ["readInt64AsDoubleFromPointer", bA],
  // The remaining functions are defined in the core lib in h3Api.h
  ["isValidCell", b0, [PA, BA]],
  ["isValidIndex", b0, [PA, BA]],
  ["latLngToCell", wA, [bA, bA, Ht, aA]],
  ["cellToLatLng", wA, [PA, BA, aA]],
  ["cellToBoundary", wA, [PA, BA, aA]],
  ["maxGridDiskSize", wA, [bA, aA]],
  ["gridDisk", wA, [PA, BA, bA, aA]],
  ["gridDiskDistances", wA, [PA, BA, bA, aA, aA]],
  ["gridRing", wA, [PA, BA, bA, aA]],
  ["gridRingUnsafe", wA, [PA, BA, bA, aA]],
  ["maxPolygonToCellsSize", wA, [aA, Ht, bA, aA]],
  ["polygonToCells", wA, [aA, Ht, bA, aA]],
  ["maxPolygonToCellsSizeExperimental", wA, [aA, Ht, bA, aA]],
  ["polygonToCellsExperimental", wA, [aA, Ht, bA, bA, bA, aA]],
  ["cellsToLinkedMultiPolygon", wA, [aA, bA, aA]],
  ["destroyLinkedMultiPolygon", null, [aA]],
  ["compactCells", wA, [aA, aA, bA, bA]],
  ["uncompactCells", wA, [aA, bA, bA, aA, bA, Ht]],
  ["uncompactCellsSize", wA, [aA, bA, bA, Ht, aA]],
  ["isPentagon", b0, [PA, BA]],
  ["isResClassIII", b0, [PA, BA]],
  ["getBaseCellNumber", bA, [PA, BA]],
  ["getResolution", bA, [PA, BA]],
  ["getIndexDigit", bA, [PA, BA, bA]],
  ["constructCell", wA, [bA, bA, aA, aA]],
  ["maxFaceCount", wA, [PA, BA, aA]],
  ["getIcosahedronFaces", wA, [PA, BA, aA]],
  ["cellToParent", wA, [PA, BA, Ht, aA]],
  ["cellToChildren", wA, [PA, BA, Ht, aA]],
  ["cellToCenterChild", wA, [PA, BA, Ht, aA]],
  ["cellToChildrenSize", wA, [PA, BA, Ht, aA]],
  ["cellToChildPos", wA, [PA, BA, Ht, aA]],
  ["childPosToCell", wA, [bA, bA, PA, BA, Ht, aA]],
  ["areNeighborCells", wA, [PA, BA, PA, BA, aA]],
  ["cellsToDirectedEdge", wA, [PA, BA, PA, BA, aA]],
  ["getDirectedEdgeOrigin", wA, [PA, BA, aA]],
  ["getDirectedEdgeDestination", wA, [PA, BA, aA]],
  ["isValidDirectedEdge", b0, [PA, BA]],
  ["directedEdgeToCells", wA, [PA, BA, aA]],
  ["originToDirectedEdges", wA, [PA, BA, aA]],
  ["directedEdgeToBoundary", wA, [PA, BA, aA]],
  ["gridDistance", wA, [PA, BA, PA, BA, aA]],
  ["gridPathCells", wA, [PA, BA, PA, BA, aA]],
  ["gridPathCellsSize", wA, [PA, BA, PA, BA, aA]],
  ["cellToLocalIj", wA, [PA, BA, PA, BA, bA, aA]],
  ["localIjToCell", wA, [PA, BA, aA, bA, aA]],
  ["getHexagonAreaAvgM2", wA, [Ht, aA]],
  ["getHexagonAreaAvgKm2", wA, [Ht, aA]],
  ["getHexagonEdgeLengthAvgM", wA, [Ht, aA]],
  ["getHexagonEdgeLengthAvgKm", wA, [Ht, aA]],
  ["greatCircleDistanceM", bA, [aA, aA]],
  ["greatCircleDistanceKm", bA, [aA, aA]],
  ["greatCircleDistanceRads", bA, [aA, aA]],
  ["cellAreaM2", wA, [PA, BA, aA]],
  ["cellAreaKm2", wA, [PA, BA, aA]],
  ["cellAreaRads2", wA, [PA, BA, aA]],
  ["edgeLengthM", wA, [PA, BA, aA]],
  ["edgeLengthKm", wA, [PA, BA, aA]],
  ["edgeLengthRads", wA, [PA, BA, aA]],
  ["getNumCells", wA, [Ht, aA]],
  ["getRes0Cells", wA, [aA]],
  ["res0CellCount", bA],
  ["getPentagons", wA, [bA, aA]],
  ["pentagonCount", bA],
  ["cellToVertex", wA, [PA, BA, bA, aA]],
  ["cellToVertexes", wA, [PA, BA, aA]],
  ["vertexToLatLng", wA, [PA, BA, aA]],
  ["isValidVertex", b0, [PA, BA]]
], jf = 0, Yf = 1, Vf = 2, Kf = 3, qf = 4, Jf = 5, Xf = 6, $f = 7, Ah = 8, th = 9, eh = 10, ih = 11, nh = 12, rh = 13, oh = 14, sh = 15, ah = 16, lh = 17, uh = 18, fh = 19, Lt = {};
Lt[jf] = "Success";
Lt[Yf] = "The operation failed but a more specific error is not available";
Lt[Vf] = "Argument was outside of acceptable range";
Lt[Kf] = "Latitude or longitude arguments were outside of acceptable range";
Lt[qf] = "Resolution argument was outside of acceptable range";
Lt[Jf] = "Cell argument was not valid";
Lt[Xf] = "Directed edge argument was not valid";
Lt[$f] = "Undirected edge argument was not valid";
Lt[Ah] = "Vertex argument was not valid";
Lt[th] = "Pentagon distortion was encountered";
Lt[eh] = "Duplicate input";
Lt[ih] = "Cell arguments were not neighbors";
Lt[nh] = "Cell arguments had incompatible resolutions";
Lt[rh] = "Memory allocation failed";
Lt[oh] = "Bounds of provided memory were insufficient";
Lt[sh] = "Mode or flags argument was not valid";
Lt[ah] = "Index argument was not valid";
Lt[lh] = "Base cell number was outside of acceptable range";
Lt[uh] = "Child indexing digits invalid";
Lt[fh] = "Child indexing digits refer to a deleted subsequence";
var hh = 1e3, Cl = 1001, _h = 1002, jo = {};
jo[hh] = "Unknown unit";
jo[Cl] = "Array length out of bounds";
jo[_h] = "Got unexpected null value for H3 index";
var ch = "Unknown error";
function Ll(d, c, g) {
  var C = g && "value" in g, T = new Error((d[c] || ch) + " (code: " + c + (C ? ", value: " + g.value : "") + ")");
  return T.code = c, T;
}
function dh(d, c) {
  var g = arguments.length === 2 ? {
    value: c
  } : {};
  return Ll(Lt, d, g);
}
function mh(d, c) {
  var g = arguments.length === 2 ? {
    value: c
  } : {};
  return Ll(jo, d, g);
}
function qs(d) {
  if (d !== 0)
    throw dh(d);
}
var Ai = {};
Wf.forEach(function(c) {
  Ai[c[0]] = be.cwrap.apply(be, c);
});
var P0 = 16, ph = 4, Oo = 8, vh = 8, Js = Ai.sizeOfH3Index();
Ai.sizeOfLatLng();
var gh = Ai.sizeOfCellBoundary();
Ai.sizeOfGeoPolygon();
Ai.sizeOfGeoLoop();
Ai.sizeOfLinkedGeoPolygon();
Ai.sizeOfCoordIJ();
var wh = Math.pow(2, 32) - 1;
function yh(d) {
  if (d > wh)
    throw mh(Cl, d);
  return d;
}
var bh = /[^0-9a-fA-F]/;
function la(d) {
  if (Array.isArray(d) && d.length === 2 && Number.isInteger(d[0]) && Number.isInteger(d[1]))
    return d;
  if (typeof d != "string" || bh.test(d))
    return [0, 0];
  var c = parseInt(d.substring(0, d.length - 8), P0), g = parseInt(d.substring(d.length - 8), P0);
  return [g, c];
}
function Qa(d) {
  if (d >= 0)
    return d.toString(P0);
  d = d & 2147483647;
  var c = Ml(8, d.toString(P0)), g = (parseInt(c[0], P0) + 8).toString(P0);
  return c = g + c.substring(1), c;
}
function Tl(d, c) {
  return Qa(c) + Ml(8, Qa(d));
}
function Ml(d, c) {
  for (var g = d - c.length, C = "", T = 0; T < g; T++)
    C += "0";
  return C = C + c, C;
}
function kh(d, c) {
  c === void 0 && (c = 0);
  var g = be.getValue(d + Js * c, "i32"), C = be.getValue(d + Js * c + ph, "i32");
  return C ? Tl(g, C) : null;
}
function Ph(d) {
  return Ai.readInt64AsDoubleFromPointer(d);
}
function Bh(d, c) {
  for (var g = [], C = 0; C < c; C++) {
    var T = kh(d, C);
    T !== null && g.push(T);
  }
  return g;
}
function Qo(d) {
  return Dl(be.getValue(d, "double"));
}
function Eh(d) {
  return [Qo(d), Qo(d + Oo)];
}
function xh(d) {
  return [Qo(d + Oo), Qo(d)];
}
function Ch(d, c, g) {
  for (var C = be.getValue(d, "i32"), T = d + Oo, S = [], Z = c ? xh : Eh, G = 0; G < C * 2; G += 2)
    S.push(Z(T + Oo * G));
  return g && S.push(S[0]), S;
}
function Lh(d, c) {
  var g = be._malloc(gh), C = la(d), T = C[0], S = C[1];
  try {
    return qs(Ai.cellToBoundary(T, S, g)), Ch(g, c, c);
  } finally {
    be._free(g);
  }
}
function Th(d, c) {
  var g = la(d), C = g[0], T = g[1], S = be._malloc(vh);
  try {
    qs(Ai.maxGridDiskSize(c, S));
    var Z = yh(Ph(S)), G = be._calloc(Z, Js);
    try {
      return qs(Ai.gridDisk(C, T, c, G)), Bh(G, Z);
    } finally {
      be._free(G);
    }
  } finally {
    be._free(S);
  }
}
function Dl(d) {
  return d * 180 / Math.PI;
}
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cellToBoundary: Lh,
  gridDisk: Th,
  h3IndexToSplitLong: la,
  radsToDegs: Dl,
  splitLongToH3Index: Tl
}, Symbol.toStringTag, { value: "Module" }));
export {
  Sh as default
};
