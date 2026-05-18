var wi = Object.defineProperty;
var Ka = (e) => {
  throw TypeError(e);
};
var ki = (e, t, r) => t in e ? wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => ki(e, typeof t != "symbol" ? t + "" : t, r), ia = (e, t, r) => t.has(e) || Ka("Cannot " + r);
var o = (e, t, r) => (ia(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? Ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), S = (e, t, r, n) => (ia(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), H = (e, t, r) => (ia(e, t, "access private method"), r);
var Sa = Array.isArray, Ei = Array.prototype.indexOf, Ir = Array.prototype.includes, Un = Array.from, Ci = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, Mi = Object.prototype, Si = Array.prototype, Ti = Object.getPrototypeOf, Ja = Object.isExtensible;
const Ai = () => {
};
function ji(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ds() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const ve = 2, qr = 4, Yn = 8, fs = 1 << 24, at = 16, lt = 32, Qt = 64, va = 128, Ze = 512, oe = 1024, fe = 2048, yt = 4096, me = 8192, ot = 16384, kr = 32768, Za = 1 << 25, Ur = 65536, Fn = 1 << 17, Li = 1 << 18, Kr = 1 << 19, Ni = 1 << 20, Bt = 1 << 25, yr = 65536, On = 1 << 21, Rr = 1 << 22, Zt = 1 << 23, on = Symbol("$state"), Ri = Symbol("attributes"), ca = Symbol("class"), ha = Symbol("style"), rn = Symbol("text"), Ln = Symbol("form reset"), $n = new class extends Error {
  constructor() {
    super(...arguments);
    Ae(this, "name", "StaleReactionError");
    Ae(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Bi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Di(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Pi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Hi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ii() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ui = 1, Yi = 2, $i = 16, vs = 1, Gi = 2, le = Symbol(), Wi = "http://www.w3.org/1999/xhtml";
function Ki() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ji() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Zi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function cs(e) {
  return e === this.v;
}
function Qi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function hs(e) {
  return !Qi(e, this.v);
}
let Xe = null;
function Yr(e) {
  Xe = e;
}
function ps(e, t = !1, r) {
  Xe = {
    p: Xe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      O
    ),
    l: null
  };
}
function _s(e) {
  var t = (
    /** @type {ComponentContext} */
    Xe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      zs(n);
  }
  return t.i = !0, Xe = t.p, /** @type {T} */
  {};
}
function gs() {
  return !0;
}
let ur = [];
function xs() {
  var e = ur;
  ur = [], ji(e);
}
function Br(e) {
  if (ur.length === 0 && !ln) {
    var t = ur;
    queueMicrotask(() => {
      t === ur && xs();
    });
  }
  ur.push(e);
}
function Xi() {
  for (; ur.length > 0; )
    xs();
}
function bs(e) {
  var t = O;
  if (t === null)
    return F.f |= Zt, e;
  if ((t.f & kr) === 0 && (t.f & qr) === 0)
    throw e;
  Jt(e, t);
}
function Jt(e, t) {
  for (; t !== null; ) {
    if ((t.f & va) !== 0) {
      if ((t.f & kr) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    }
    t = t.parent;
  }
  throw e;
}
const eo = -7169;
function X(e, t) {
  e.f = e.f & eo | t;
}
function Ta(e) {
  (e.f & Ze) !== 0 || e.deps === null ? X(e, oe) : X(e, yt);
}
function ys(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ve) === 0 || (t.f & yr) === 0 || (t.f ^= yr, ys(
        /** @type {Derived} */
        t.deps
      ));
}
function ms(e, t, r) {
  (e.f & fe) !== 0 ? t.add(e) : (e.f & yt) !== 0 && r.add(e), ys(e.deps), X(e, oe);
}
let oa = null, jr = null, j = null, pa = null, st = null, _a = null, ln = !1, la = !1, Nr = null, Nn = null;
var Qa = 0;
let to = 1;
var Dr, Gt, vr, Pr, Fr, cr, Or, jt, vn, ze, cn, Wt, gt, xt, zr, Hr, V, ga, nn, xa, ws, ks, Rn, ro, ba, Lr;
const Vn = class Vn {
  constructor() {
    T(this, V);
    Ae(this, "id", to++);
    /** True as soon as `#process` was called */
    T(this, Dr, !1);
    Ae(this, "linked", !0);
    /** @type {Batch | null} */
    T(this, Gt, null);
    /** @type {Batch | null} */
    T(this, vr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ae(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ae(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ae(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    Ae(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Pr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Fr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, cr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    T(this, Or, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, jt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, vn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, ze, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, cn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, Wt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, gt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, xt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, zr, /* @__PURE__ */ new Set());
    Ae(this, "is_fork", !1);
    T(this, Hr, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, xt).has(t) || o(this, xt).set(t, { d: [], m: [] }), o(this, zr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = o(this, xt).get(t);
    if (n) {
      o(this, xt).delete(t);
      for (var a of n.d)
        X(a, fe), r(a);
      for (a of n.m)
        X(a, yt), r(a);
    }
    o(this, zr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== le && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Zt) === 0 && (this.current.set(t, [r, n]), st?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    j = this;
  }
  deactivate() {
    j = null, st = null;
  }
  flush() {
    try {
      la = !0, j = this, H(this, V, nn).call(this);
    } finally {
      Qa = 0, _a = null, Nr = null, Nn = null, la = !1, j = null, st = null, gr.clear();
    }
  }
  discard() {
    for (const t of o(this, Fr)) t(this);
    o(this, Fr).clear(), o(this, cr).clear(), H(this, V, Lr).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, cn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (S(this, Or, o(this, Or) + 1), t) {
      let n = o(this, jt).get(r) ?? 0;
      o(this, jt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (S(this, Or, o(this, Or) - 1), t) {
      let n = o(this, jt).get(r) ?? 0;
      n === 1 ? o(this, jt).delete(r) : o(this, jt).set(r, n - 1);
    }
    o(this, Hr) || (S(this, Hr, !0), Br(() => {
      S(this, Hr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, Wt).add(n);
    for (const n of r)
      o(this, gt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Pr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, Fr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    o(this, cr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of o(this, cr)) t(this);
    o(this, cr).clear();
  }
  settled() {
    return (o(this, vn) ?? S(this, vn, ds())).promise;
  }
  static ensure() {
    var t;
    if (j === null) {
      const r = j = new Vn();
      H(t = r, V, ba).call(t), !la && !ln && Br(() => {
        o(r, Dr) || r.flush();
      });
    }
    return j;
  }
  apply() {
    {
      st = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (_a = t, t.b?.is_pending && (t.f & (qr | Yn | fs)) !== 0 && (t.f & kr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Nr !== null && r === O && (F === null || (F.f & ve) === 0))
        return;
      if ((n & (Qt | lt)) !== 0) {
        if ((n & oe) === 0)
          return;
        r.f ^= oe;
      }
    }
    o(this, ze).push(r);
  }
};
Dr = new WeakMap(), Gt = new WeakMap(), vr = new WeakMap(), Pr = new WeakMap(), Fr = new WeakMap(), cr = new WeakMap(), Or = new WeakMap(), jt = new WeakMap(), vn = new WeakMap(), ze = new WeakMap(), cn = new WeakMap(), Wt = new WeakMap(), gt = new WeakMap(), xt = new WeakMap(), zr = new WeakMap(), Hr = new WeakMap(), V = new WeakSet(), ga = function() {
  if (this.is_fork) return !0;
  for (const n of o(this, jt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (o(this, xt).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, nn = function() {
  var f, d, x;
  if (S(this, Dr, !0), Qa++ > 1e3 && (H(this, V, Lr).call(this), ao()), !H(this, V, ga).call(this)) {
    for (const c of o(this, Wt))
      o(this, gt).delete(c), X(c, fe), this.schedule(c);
    for (const c of o(this, gt))
      X(c, yt), this.schedule(c);
  }
  const t = o(this, ze);
  S(this, ze, []), this.apply();
  var r = Nr = [], n = [], a = Nn = [];
  for (const c of t)
    try {
      H(this, V, xa).call(this, c, r, n);
    } catch (_) {
      throw Ms(c), _;
    }
  if (j = null, a.length > 0) {
    var i = Vn.ensure();
    for (const c of a)
      i.schedule(c);
  }
  if (Nr = null, Nn = null, H(this, V, ga).call(this)) {
    H(this, V, Rn).call(this, n), H(this, V, Rn).call(this, r);
    for (const [c, _] of o(this, xt))
      Cs(c, _);
    a.length > 0 && /** @type {unknown} */
    H(f = j, V, nn).call(f);
    return;
  }
  const u = H(this, V, ws).call(this);
  if (u) {
    H(d = u, V, ks).call(d, this);
    return;
  }
  o(this, Wt).clear(), o(this, gt).clear();
  for (const c of o(this, Pr)) c(this);
  o(this, Pr).clear(), pa = this, Xa(n), Xa(r), pa = null, o(this, vn)?.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    j
  );
  if (this.linked && o(this, Or) === 0 && H(this, V, Lr).call(this), o(this, ze).length > 0) {
    l === null && (l = this, H(this, V, ba).call(this));
    const c = l;
    o(c, ze).push(...o(this, ze).filter((_) => !o(c, ze).includes(_)));
  }
  l !== null && H(x = l, V, nn).call(x);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
xa = function(t, r, n) {
  t.f ^= oe;
  for (var a = t.first; a !== null; ) {
    var i = a.f, u = (i & (lt | Qt)) !== 0, l = u && (i & oe) !== 0, f = l || (i & me) !== 0 || o(this, xt).has(a);
    if (!f && a.fn !== null) {
      u ? a.f ^= oe : (i & qr) !== 0 ? r.push(a) : bn(a) && ((i & at) !== 0 && o(this, gt).add(a), Gr(a));
      var d = a.first;
      if (d !== null) {
        a = d;
        continue;
      }
    }
    for (; a !== null; ) {
      var x = a.next;
      if (x !== null) {
        a = x;
        break;
      }
      a = a.parent;
    }
  }
}, ws = function() {
  for (var t = o(this, Gt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = o(t, Gt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ks = function(t) {
  var n;
  for (const [a, i] of t.current)
    !this.previous.has(a) && t.previous.has(a) && this.previous.set(a, t.previous.get(a)), this.current.set(a, i);
  for (const [a, i] of t.async_deriveds) {
    const u = this.async_deriveds.get(a);
    u && i.promise.then(u.resolve);
  }
  const r = (a) => {
    var i = a.reactions;
    if (i !== null)
      for (const f of i) {
        var u = f.f;
        if ((u & ve) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var l = (
            /** @type {Effect} */
            f
          );
          u & (Rr | at) && !this.async_deriveds.has(l) && (o(this, gt).delete(l), X(l, fe), this.schedule(l));
        }
      }
  };
  for (const a of this.current.keys())
    r(a);
  this.oncommit(() => t.discard()), H(n = t, V, Lr).call(n), j = this, H(this, V, nn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Rn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ms(t[r], o(this, Wt), o(this, gt));
}, ro = function() {
  var x;
  H(this, V, Lr).call(this);
  for (let c = oa; c !== null; c = o(c, vr)) {
    var t = c.id < this.id, r = [];
    for (const [_, [y, p]] of this.current) {
      if (c.current.has(_)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(_)[0]
        );
        if (t && y !== n)
          c.current.set(_, [y, p]);
        else
          continue;
      }
      r.push(_);
    }
    if (t)
      for (const [_, y] of this.async_deriveds) {
        const p = c.async_deriveds.get(_);
        p && y.promise.then(p.resolve);
      }
    if (o(c, Dr)) {
      var a = [...c.current.keys()].filter((_) => !this.current.has(_));
      if (a.length === 0)
        t && c.discard();
      else if (r.length > 0) {
        if (t)
          for (const _ of o(this, zr))
            c.unskip_effect(_, (y) => {
              var p;
              (y.f & (at | Rr)) !== 0 ? c.schedule(y) : H(p = c, V, Rn).call(p, [y]);
            });
        c.activate();
        var i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (var l of r)
          Es(l, a, i, u);
        u = /* @__PURE__ */ new Map();
        var f = [...c.current.keys()].filter(
          (_) => this.current.has(_) ? (
            /** @type {[any, boolean]} */
            this.current.get(_)[0] !== _.v
          ) : !0
        );
        if (f.length > 0)
          for (const _ of o(this, cn))
            (_.f & (ot | me | Fn)) === 0 && Aa(_, f, u) && ((_.f & (Rr | at)) !== 0 ? (X(_, fe), c.schedule(_)) : o(c, Wt).add(_));
        if (o(c, ze).length > 0) {
          c.apply();
          for (var d of o(c, ze))
            H(x = c, V, xa).call(x, d, [], []);
          S(c, ze, []);
        }
        c.deactivate();
      }
    }
  }
}, ba = function() {
  jr === null ? oa = jr = this : (S(jr, vr, this), S(this, Gt, jr)), jr = this;
}, Lr = function() {
  var t = o(this, Gt), r = o(this, vr);
  t === null ? oa = r : S(t, vr, r), r === null ? jr = t : S(r, Gt, t), this.linked = !1;
};
let mr = Vn;
function no(e) {
  var t = ln;
  ln = !0;
  try {
    for (var r; ; ) {
      if (Xi(), j === null)
        return (
          /** @type {T} */
          r
        );
      j.flush();
    }
  } finally {
    ln = t;
  }
}
function ao() {
  try {
    zi();
  } catch (e) {
    Jt(e, _a);
  }
}
let At = null;
function Xa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ot | me)) === 0 && bn(n) && (At = /* @__PURE__ */ new Set(), Gr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && qs(n), At?.size > 0)) {
        gr.clear();
        for (const a of At) {
          if ((a.f & (ot | me)) !== 0) continue;
          const i = [a];
          let u = a.parent;
          for (; u !== null; )
            At.has(u) && (At.delete(u), i.push(u)), u = u.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const f = i[l];
            (f.f & (ot | me)) === 0 && Gr(f);
          }
        }
        At.clear();
      }
    }
    At = null;
  }
}
function Es(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & ve) !== 0 ? Es(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (i & (Rr | at)) !== 0 && (i & fe) === 0 && Aa(a, t, n) && (X(a, fe), ja(
        /** @type {Effect} */
        a
      ));
    }
}
function Aa(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Ir.call(t, a))
        return !0;
      if ((a.f & ve) !== 0 && Aa(
        /** @type {Derived} */
        a,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function ja(e) {
  j.schedule(e);
}
function Cs(e, t) {
  if (!((e.f & lt) !== 0 && (e.f & oe) !== 0)) {
    (e.f & fe) !== 0 ? t.d.push(e) : (e.f & yt) !== 0 && t.m.push(e), X(e, oe);
    for (var r = e.first; r !== null; )
      Cs(r, t), r = r.next;
  }
}
function Ms(e) {
  X(e, oe);
  for (var t = e.first; t !== null; )
    Ms(t), t = t.next;
}
function so(e) {
  let t = 0, r = wr(0), n;
  return () => {
    Ba() && (s(r), Vs(() => (t === 0 && (n = Xs(() => e(() => un(r)))), t += 1, () => {
      Br(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, un(r));
      });
    })));
  };
}
var io = Ur | Kr;
function oo(e, t, r, n) {
  new lo(e, t, r, n);
}
var Ge, Ma, We, hr, je, Ke, ye, He, Lt, pr, Kt, Vr, hn, pn, Nt, In, ee, uo, fo, vo, ya, Bn, Dn, ma, wa;
class lo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    T(this, ee);
    /** @type {Boundary | null} */
    Ae(this, "parent");
    Ae(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ae(this, "transform_error");
    /** @type {TemplateNode} */
    T(this, Ge);
    /** @type {TemplateNode | null} */
    T(this, Ma, null);
    /** @type {BoundaryProps} */
    T(this, We);
    /** @type {((anchor: Node) => void)} */
    T(this, hr);
    /** @type {Effect} */
    T(this, je);
    /** @type {Effect | null} */
    T(this, Ke, null);
    /** @type {Effect | null} */
    T(this, ye, null);
    /** @type {Effect | null} */
    T(this, He, null);
    /** @type {DocumentFragment | null} */
    T(this, Lt, null);
    T(this, pr, 0);
    T(this, Kt, 0);
    T(this, Vr, !1);
    /** @type {Set<Effect>} */
    T(this, hn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, pn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, Nt, null);
    T(this, In, so(() => (S(this, Nt, wr(o(this, pr))), () => {
      S(this, Nt, null);
    })));
    S(this, Ge, t), S(this, We, r), S(this, hr, (i) => {
      var u = (
        /** @type {Effect} */
        O
      );
      u.b = this, u.f |= va, n(i);
    }), this.parent = /** @type {Effect} */
    O.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), S(this, je, Da(() => {
      H(this, ee, ya).call(this);
    }, io));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ms(t, o(this, hn), o(this, pn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, We).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    H(this, ee, ma).call(this, t, r), S(this, pr, o(this, pr) + t), !(!o(this, Nt) || o(this, Vr)) && (S(this, Vr, !0), Br(() => {
      S(this, Vr, !1), o(this, Nt) && $r(o(this, Nt), o(this, pr));
    }));
  }
  get_effect_pending() {
    return o(this, In).call(this), s(
      /** @type {Source<number>} */
      o(this, Nt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, We).onerror && !o(this, We).failed)
      throw t;
    j?.is_fork ? (o(this, Ke) && j.skip_effect(o(this, Ke)), o(this, ye) && j.skip_effect(o(this, ye)), o(this, He) && j.skip_effect(o(this, He)), j.on_fork_commit(() => {
      H(this, ee, wa).call(this, t);
    })) : H(this, ee, wa).call(this, t);
  }
}
Ge = new WeakMap(), Ma = new WeakMap(), We = new WeakMap(), hr = new WeakMap(), je = new WeakMap(), Ke = new WeakMap(), ye = new WeakMap(), He = new WeakMap(), Lt = new WeakMap(), pr = new WeakMap(), Kt = new WeakMap(), Vr = new WeakMap(), hn = new WeakMap(), pn = new WeakMap(), Nt = new WeakMap(), In = new WeakMap(), ee = new WeakSet(), uo = function() {
  try {
    S(this, Ke, Je(() => o(this, hr).call(this, o(this, Ge))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
fo = function(t) {
  const r = o(this, We).failed;
  r && S(this, He, Je(() => {
    r(
      o(this, Ge),
      () => t,
      () => () => {
      }
    );
  }));
}, vo = function() {
  const t = o(this, We).pending;
  t && (this.is_pending = !0, S(this, ye, Je(() => t(o(this, Ge)))), Br(() => {
    var r = S(this, Lt, document.createDocumentFragment()), n = Dt();
    r.append(n), S(this, Ke, H(this, ee, Dn).call(this, () => Je(() => o(this, hr).call(this, n)))), o(this, Kt) === 0 && (o(this, Ge).before(r), S(this, Lt, null), xr(
      /** @type {Effect} */
      o(this, ye),
      () => {
        S(this, ye, null);
      }
    ), H(this, ee, Bn).call(
      this,
      /** @type {Batch} */
      j
    ));
  }));
}, ya = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), S(this, Kt, 0), S(this, pr, 0), S(this, Ke, Je(() => {
      o(this, hr).call(this, o(this, Ge));
    })), o(this, Kt) > 0) {
      var t = S(this, Lt, document.createDocumentFragment());
      Oa(o(this, Ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, We).pending
      );
      S(this, ye, Je(() => r(o(this, Ge))));
    } else
      H(this, ee, Bn).call(
        this,
        /** @type {Batch} */
        j
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Bn = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, hn), o(this, pn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Dn = function(t) {
  var r = O, n = F, a = Xe;
  mt(o(this, je)), et(o(this, je)), Yr(o(this, je).ctx);
  try {
    return mr.ensure(), t();
  } catch (i) {
    return bs(i), null;
  } finally {
    mt(r), et(n), Yr(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ma = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && H(n = this.parent, ee, ma).call(n, t, r);
    return;
  }
  S(this, Kt, o(this, Kt) + t), o(this, Kt) === 0 && (H(this, ee, Bn).call(this, r), o(this, ye) && xr(o(this, ye), () => {
    S(this, ye, null);
  }), o(this, Lt) && (o(this, Ge).before(o(this, Lt)), S(this, Lt, null)));
}, /**
 * @param {unknown} error
 */
wa = function(t) {
  o(this, Ke) && (Ne(o(this, Ke)), S(this, Ke, null)), o(this, ye) && (Ne(o(this, ye)), S(this, ye, null)), o(this, He) && (Ne(o(this, He)), S(this, He, null));
  var r = o(this, We).onerror;
  let n = o(this, We).failed;
  var a = !1, i = !1;
  const u = () => {
    if (a) {
      Zi();
      return;
    }
    a = !0, i && qi(), o(this, He) !== null && xr(o(this, He), () => {
      S(this, He, null);
    }), H(this, ee, Dn).call(this, () => {
      H(this, ee, ya).call(this);
    });
  }, l = (f) => {
    try {
      i = !0, r?.(f, u), i = !1;
    } catch (d) {
      Jt(d, o(this, je) && o(this, je).parent);
    }
    n && S(this, He, H(this, ee, Dn).call(this, () => {
      try {
        return Je(() => {
          var d = (
            /** @type {Effect} */
            O
          );
          d.b = this, d.f |= va, n(
            o(this, Ge),
            () => f,
            () => u
          );
        });
      } catch (d) {
        return Jt(
          d,
          /** @type {Effect} */
          o(this, je).parent
        ), null;
      }
    }));
  };
  Br(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (d) {
      Jt(d, o(this, je) && o(this, je).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      l,
      /** @param {unknown} e */
      (d) => Jt(d, o(this, je) && o(this, je).parent)
    ) : l(f);
  });
};
function co(e, t, r, n) {
  const a = La;
  var i = e.filter((_) => !_.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var u = (
    /** @type {Effect} */
    O
  ), l = ho(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function d(_) {
    if ((u.f & ot) === 0) {
      l();
      try {
        n(_);
      } catch (y) {
        Jt(y, u);
      }
      zn();
    }
  }
  var x = Ss();
  if (r.length === 0) {
    f.then(() => d(t.map(a))).finally(x);
    return;
  }
  function c() {
    Promise.all(r.map((_) => /* @__PURE__ */ po(_))).then((_) => d([...t.map(a), ..._])).catch((_) => Jt(_, u)).finally(x);
  }
  f ? f.then(() => {
    l(), c(), zn();
  }) : c();
}
function ho() {
  var e = (
    /** @type {Effect} */
    O
  ), t = F, r = Xe, n = (
    /** @type {Batch} */
    j
  );
  return function(i = !0) {
    mt(e), et(t), Yr(r), i && (e.f & ot) === 0 && (n?.activate(), n?.apply());
  };
}
function zn(e = !0) {
  mt(null), et(null), Yr(null), e && j?.deactivate();
}
function Ss() {
  var e = (
    /** @type {Effect} */
    O
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    j
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function La(e) {
  var t = ve | fe;
  return O !== null && (O.f |= Kr), {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: cs,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      le
    ),
    wv: 0,
    parent: O,
    ac: null
  };
}
const An = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function po(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    O
  );
  n === null && Bi();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = wr(
    /** @type {V} */
    le
  ), u = !F, l = /* @__PURE__ */ new Set();
  return jo(() => {
    var f = (
      /** @type {Effect} */
      O
    ), d = ds();
    a = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, (y) => {
        y !== $n && d.reject(y);
      }).finally(zn);
    } catch (y) {
      d.reject(y), zn();
    }
    var x = (
      /** @type {Batch} */
      j
    );
    if (u) {
      if ((f.f & kr) !== 0)
        var c = Ss();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        x.async_deriveds.get(f)?.reject(An);
      else
        for (const y of l.values())
          y.reject(An);
      l.add(d), x.async_deriveds.set(f, d);
    }
    const _ = (y, p = void 0) => {
      c?.(), l.delete(d), p !== An && (x.activate(), p ? (i.f |= Zt, $r(i, p)) : ((i.f & Zt) !== 0 && (i.f ^= Zt), $r(i, y)), x.deactivate());
    };
    d.promise.then(_, (y) => _(null, y || "unknown"));
  }), Os(() => {
    for (const f of l)
      f.reject(An);
  }), new Promise((f) => {
    function d(x) {
      function c() {
        x === a ? f(i) : d(a);
      }
      x.then(c, c);
    }
    d(a);
  });
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  const t = /* @__PURE__ */ La(e);
  return $s(t), t;
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  const t = /* @__PURE__ */ La(e);
  return t.equals = hs, t;
}
function go(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ne(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Na(e) {
  var t, r = O, n = e.parent;
  if (!Xt && n !== null && (n.f & (ot | me)) !== 0)
    return Ki(), e.v;
  mt(n);
  try {
    e.f &= ~yr, go(e), t = Js(e);
  } finally {
    mt(r);
  }
  return t;
}
function Ts(e) {
  var t = Na(e);
  if (!e.equals(t) && (e.wv = Ws(), (!j?.is_fork || e.deps === null) && (j !== null ? (j.capture(e, t, !0), pa?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    X(e, oe);
    return;
  }
  Xt || (st !== null ? (Ba() || j?.is_fork) && st.set(e, t) : Ta(e));
}
function xo(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort($n), t.teardown = Ai, t.ac = null, fn(t, 0), Pa(t));
}
function As(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Gr(t);
}
let Hn = /* @__PURE__ */ new Set();
const gr = /* @__PURE__ */ new Map();
let js = !1;
function wr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: cs,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  const r = wr(e);
  return $s(r), r;
}
// @__NO_SIDE_EFFECTS__
function bo(e, t = !1, r = !0) {
  const n = wr(e);
  return t || (n.equals = hs), n;
}
function E(e, t, r = !1) {
  F !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!it || (F.f & Fn) !== 0) && gs() && (F.f & (ve | at | Rr | Fn)) !== 0 && (Qe === null || !Ir.call(Qe, e)) && Ii();
  let n = r ? Ie(t) : t;
  return $r(e, n, Nn);
}
function $r(e, t, r = null) {
  if (!e.equals(t)) {
    gr.set(e, Xt ? t : e.v);
    var n = mr.ensure();
    if (n.capture(e, t), (e.f & ve) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & fe) !== 0 && Na(a), st === null && Ta(a);
    }
    e.wv = Ws(), Ls(e, fe, r), O !== null && (O.f & oe) !== 0 && (O.f & (lt | Qt)) === 0 && ($e === null ? Ro([e]) : $e.push(e)), !n.is_fork && Hn.size > 0 && !js && yo();
  }
  return t;
}
function yo() {
  js = !1;
  for (const e of Hn) {
    (e.f & oe) !== 0 && X(e, yt);
    let t;
    try {
      t = bn(e);
    } catch {
      t = !0;
    }
    t && Gr(e);
  }
  Hn.clear();
}
function mo(e, t = 1) {
  var r = s(e);
  return E(e, t === 1 ? ++r : --r);
}
function un(e) {
  E(e, e.v + 1);
}
function Ls(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var u = n[i], l = u.f, f = (l & fe) === 0;
      if (f && X(u, t), (l & Fn) !== 0)
        Hn.add(
          /** @type {Effect} */
          u
        );
      else if ((l & ve) !== 0) {
        var d = (
          /** @type {Derived} */
          u
        );
        st?.delete(d), (l & yr) === 0 && (l & Ze && (O === null || (O.f & On) === 0) && (u.f |= yr), Ls(d, yt, r));
      } else if (f) {
        var x = (
          /** @type {Effect} */
          u
        );
        (l & at) !== 0 && At !== null && At.add(x), r !== null ? r.push(x) : ja(x);
      }
    }
}
function Ie(e) {
  if (typeof e != "object" || e === null || on in e)
    return e;
  const t = Ti(e);
  if (t !== Mi && t !== Si)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Sa(e), a = /* @__PURE__ */ W(0), i = br, u = (l) => {
    if (br === i)
      return l();
    var f = F, d = br;
    et(null), as(i);
    var x = l();
    return et(f), as(d), x;
  };
  return n && r.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Hi();
        var x = r.get(f);
        return x === void 0 ? u(() => {
          var c = /* @__PURE__ */ W(d.value);
          return r.set(f, c), c;
        }) : E(x, d.value, !0), !0;
      },
      deleteProperty(l, f) {
        var d = r.get(f);
        if (d === void 0) {
          if (f in l) {
            const x = u(() => /* @__PURE__ */ W(le));
            r.set(f, x), un(a);
          }
        } else
          E(d, le), un(a);
        return !0;
      },
      get(l, f, d) {
        if (f === on)
          return e;
        var x = r.get(f), c = f in l;
        if (x === void 0 && (!c || sn(l, f)?.writable) && (x = u(() => {
          var y = Ie(c ? l[f] : le), p = /* @__PURE__ */ W(y);
          return p;
        }), r.set(f, x)), x !== void 0) {
          var _ = s(x);
          return _ === le ? void 0 : _;
        }
        return Reflect.get(l, f, d);
      },
      getOwnPropertyDescriptor(l, f) {
        var d = Reflect.getOwnPropertyDescriptor(l, f);
        if (d && "value" in d) {
          var x = r.get(f);
          x && (d.value = s(x));
        } else if (d === void 0) {
          var c = r.get(f), _ = c?.v;
          if (c !== void 0 && _ !== le)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return d;
      },
      has(l, f) {
        if (f === on)
          return !0;
        var d = r.get(f), x = d !== void 0 && d.v !== le || Reflect.has(l, f);
        if (d !== void 0 || O !== null && (!x || sn(l, f)?.writable)) {
          d === void 0 && (d = u(() => {
            var _ = x ? Ie(l[f]) : le, y = /* @__PURE__ */ W(_);
            return y;
          }), r.set(f, d));
          var c = s(d);
          if (c === le)
            return !1;
        }
        return x;
      },
      set(l, f, d, x) {
        var c = r.get(f), _ = f in l;
        if (n && f === "length")
          for (var y = d; y < /** @type {Source<number>} */
          c.v; y += 1) {
            var p = r.get(y + "");
            p !== void 0 ? E(p, le) : y in l && (p = u(() => /* @__PURE__ */ W(le)), r.set(y + "", p));
          }
        if (c === void 0)
          (!_ || sn(l, f)?.writable) && (c = u(() => /* @__PURE__ */ W(void 0)), E(c, Ie(d)), r.set(f, c));
        else {
          _ = c.v !== le;
          var I = u(() => Ie(d));
          E(c, I);
        }
        var B = Reflect.getOwnPropertyDescriptor(l, f);
        if (B?.set && B.set.call(x, d), !_) {
          if (n && typeof f == "string") {
            var P = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(f);
            Number.isInteger(m) && m >= P.v && E(P, m + 1);
          }
          un(a);
        }
        return !0;
      },
      ownKeys(l) {
        s(a);
        var f = Reflect.ownKeys(l).filter((c) => {
          var _ = r.get(c);
          return _ === void 0 || _.v !== le;
        });
        for (var [d, x] of r)
          x.v !== le && !(d in l) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        Vi();
      }
    }
  );
}
function es(e) {
  try {
    if (e !== null && typeof e == "object" && on in e)
      return e[on];
  } catch {
  }
  return e;
}
function wo(e, t) {
  return Object.is(es(e), es(t));
}
var ts, Ns, Rs, Bs;
function ko() {
  if (ts === void 0) {
    ts = window, Ns = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Rs = sn(t, "firstChild").get, Bs = sn(t, "nextSibling").get, Ja(e) && (e[ca] = void 0, e[Ri] = null, e[ha] = void 0, e.__e = void 0), Ja(r) && (r[rn] = void 0);
  }
}
function Dt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  return (
    /** @type {TemplateNode | null} */
    Rs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return (
    /** @type {TemplateNode | null} */
    Bs.call(e)
  );
}
function v(e, t) {
  return /* @__PURE__ */ Rt(e);
}
function Tt(e, t = !1) {
  {
    var r = /* @__PURE__ */ Rt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ xn(r) : r;
  }
}
function g(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ xn(n);
  return n;
}
function Eo(e) {
  e.textContent = "";
}
function Ds() {
  return !1;
}
function Ps(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Wi, e, void 0)
  );
}
let rs = !1;
function Co() {
  rs || (rs = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Ln]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ra(e) {
  var t = F, r = O;
  et(null), mt(null);
  try {
    return e();
  } finally {
    et(t), mt(r);
  }
}
function Fs(e, t, r, n = r) {
  e.addEventListener(t, () => Ra(r));
  const a = (
    /** @type {any} */
    e[Ln]
  );
  a ? e[Ln] = () => {
    a(), n(!0);
  } : e[Ln] = () => n(!0), Co();
}
function Mo(e) {
  O === null && (F === null && Oi(), Fi()), Xt && Pi();
}
function So(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Pt(e, t) {
  var r = O;
  r !== null && (r.f & me) !== 0 && (e |= me);
  var n = {
    ctx: Xe,
    deps: null,
    nodes: null,
    f: e | fe | Ze,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  j?.register_created_effect(n);
  var a = n;
  if ((e & qr) !== 0)
    Nr !== null ? Nr.push(n) : mr.ensure().schedule(n);
  else if (t !== null) {
    try {
      Gr(n);
    } catch (u) {
      throw Ne(n), u;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Kr) === 0 && (a = a.first, (e & at) !== 0 && (e & Ur) !== 0 && a !== null && (a.f |= Ur));
  }
  if (a !== null && (a.parent = r, r !== null && So(a, r), F !== null && (F.f & ve) !== 0 && (e & Qt) === 0)) {
    var i = (
      /** @type {Derived} */
      F
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function Ba() {
  return F !== null && !it;
}
function Os(e) {
  const t = Pt(Yn, null);
  return X(t, oe), t.teardown = e, t;
}
function To(e) {
  Mo();
  var t = (
    /** @type {Effect} */
    O.f
  ), r = !F && (t & lt) !== 0 && (t & kr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Xe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return zs(e);
}
function zs(e) {
  return Pt(qr | Ni, e);
}
function Ao(e) {
  mr.ensure();
  const t = Pt(Qt | Kr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? xr(t, () => {
      Ne(t), n(void 0);
    }) : (Ne(t), n(void 0));
  });
}
function Hs(e) {
  return Pt(qr, e);
}
function jo(e) {
  return Pt(Rr | Kr, e);
}
function Vs(e, t = 0) {
  return Pt(Yn | t, e);
}
function G(e, t = [], r = [], n = []) {
  co(n, t, r, (a) => {
    Pt(Yn, () => e(...a.map(s)));
  });
}
function Da(e, t = 0) {
  var r = Pt(at | t, e);
  return r;
}
function Je(e) {
  return Pt(lt | Kr, e);
}
function Is(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Xt, n = F;
    ns(!0), et(null);
    try {
      t.call(null);
    } finally {
      ns(r), et(n);
    }
  }
}
function Pa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Ra(() => {
      a.abort($n);
    });
    var n = r.next;
    (r.f & Qt) !== 0 ? r.parent = null : Ne(r, t), r = n;
  }
}
function Lo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & lt) === 0 && Ne(t), t = r;
  }
}
function Ne(e, t = !0) {
  var r = !1;
  (t || (e.f & Li) !== 0) && e.nodes !== null && e.nodes.end !== null && (No(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), X(e, Za), Pa(e, t && !r), fn(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Is(e), e.f ^= Za, e.f |= ot;
  var a = e.parent;
  a !== null && a.first !== null && qs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function No(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ xn(e);
    e.remove(), e = r;
  }
}
function qs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function xr(e, t, r = !0) {
  var n = [];
  Us(e, n, !0);
  var a = () => {
    r && Ne(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var u = () => --i || a();
    for (var l of n)
      l.out(u);
  } else
    a();
}
function Us(e, t, r) {
  if ((e.f & me) === 0) {
    e.f ^= me;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & Qt) === 0) {
        var u = (a.f & Ur) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & lt) !== 0 && (e.f & at) !== 0;
        Us(a, t, u ? r : !1);
      }
      a = i;
    }
  }
}
function Fa(e) {
  Ys(e, !0);
}
function Ys(e, t) {
  if ((e.f & me) !== 0) {
    e.f ^= me, (e.f & oe) === 0 && (X(e, fe), mr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Ur) !== 0 || (r.f & lt) !== 0;
      Ys(r, a ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && u.in();
  }
}
function Oa(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ xn(r);
      t.append(r), r = a;
    }
}
let Pn = !1, Xt = !1;
function ns(e) {
  Xt = e;
}
let F = null, it = !1;
function et(e) {
  F = e;
}
let O = null;
function mt(e) {
  O = e;
}
let Qe = null;
function $s(e) {
  F !== null && (Qe === null ? Qe = [e] : Qe.push(e));
}
let Le = null, Oe = 0, $e = null;
function Ro(e) {
  $e = e;
}
let Gs = 1, dr = 0, br = dr;
function as(e) {
  br = e;
}
function Ws() {
  return ++Gs;
}
function bn(e) {
  var t = e.f;
  if ((t & fe) !== 0)
    return !0;
  if (t & ve && (e.f &= ~yr), (t & yt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (bn(
        /** @type {Derived} */
        i
      ) && Ts(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    st === null && X(e, oe);
  }
  return !1;
}
function Ks(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Qe !== null && Ir.call(Qe, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & ve) !== 0 ? Ks(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? X(i, fe) : (i.f & oe) !== 0 && X(i, yt), ja(
        /** @type {Effect} */
        i
      ));
    }
}
function Js(e) {
  var I;
  var t = Le, r = Oe, n = $e, a = F, i = Qe, u = Xe, l = it, f = br, d = e.f;
  Le = /** @type {null | Value[]} */
  null, Oe = 0, $e = null, F = (d & (lt | Qt)) === 0 ? e : null, Qe = null, Yr(e.ctx), it = !1, br = ++dr, e.ac !== null && (Ra(() => {
    e.ac.abort($n);
  }), e.ac = null);
  try {
    e.f |= On;
    var x = (
      /** @type {Function} */
      e.fn
    ), c = x();
    e.f |= kr;
    var _ = e.deps, y = j?.is_fork;
    if (Le !== null) {
      var p;
      if (y || fn(e, Oe), _ !== null && Oe > 0)
        for (_.length = Oe + Le.length, p = 0; p < Le.length; p++)
          _[Oe + p] = Le[p];
      else
        e.deps = _ = Le;
      if (Ba() && (e.f & Ze) !== 0)
        for (p = Oe; p < _.length; p++)
          ((I = _[p]).reactions ?? (I.reactions = [])).push(e);
    } else !y && _ !== null && Oe < _.length && (fn(e, Oe), _.length = Oe);
    if (gs() && $e !== null && !it && _ !== null && (e.f & (ve | yt | fe)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      $e.length; p++)
        Ks(
          $e[p],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (dr++, a.deps !== null)
        for (let B = 0; B < r; B += 1)
          a.deps[B].rv = dr;
      if (t !== null)
        for (const B of t)
          B.rv = dr;
      $e !== null && (n === null ? n = $e : n.push(.../** @type {Source[]} */
      $e));
    }
    return (e.f & Zt) !== 0 && (e.f ^= Zt), c;
  } catch (B) {
    return bs(B);
  } finally {
    e.f ^= On, Le = t, Oe = r, $e = n, F = a, Qe = i, Yr(u), it = l, br = f;
  }
}
function Bo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ei.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ve) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Le === null || !Ir.call(Le, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ze) !== 0 && (i.f ^= Ze, i.f &= ~yr), i.v !== le && Ta(i), xo(i), fn(i, 0);
  }
}
function fn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Bo(e, r[n]);
}
function Gr(e) {
  var t = e.f;
  if ((t & ot) === 0) {
    X(e, oe);
    var r = O, n = Pn;
    O = e, Pn = !0;
    try {
      (t & (at | fs)) !== 0 ? Lo(e) : Pa(e), Is(e);
      var a = Js(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Gs;
      var i;
    } finally {
      Pn = n, O = r;
    }
  }
}
async function Do() {
  await Promise.resolve(), no();
}
function s(e) {
  var t = e.f, r = (t & ve) !== 0;
  if (F !== null && !it) {
    var n = O !== null && (O.f & ot) !== 0;
    if (!n && (Qe === null || !Ir.call(Qe, e))) {
      var a = F.deps;
      if ((F.f & On) !== 0)
        e.rv < dr && (e.rv = dr, Le === null && a !== null && a[Oe] === e ? Oe++ : Le === null ? Le = [e] : Le.push(e));
      else {
        (F.deps ?? (F.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [F] : Ir.call(i, F) || i.push(F);
      }
    }
  }
  if (Xt && gr.has(e))
    return gr.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Xt) {
      var l = u.v;
      return ((u.f & oe) === 0 && u.reactions !== null || Qs(u)) && (l = Na(u)), gr.set(u, l), l;
    }
    var f = (u.f & Ze) === 0 && !it && F !== null && (Pn || (F.f & Ze) !== 0), d = (u.f & kr) === 0;
    bn(u) && (f && (u.f |= Ze), Ts(u)), f && !d && (As(u), Zs(u));
  }
  if (st?.has(e))
    return st.get(e);
  if ((e.f & Zt) !== 0)
    throw e.v;
  return e.v;
}
function Zs(e) {
  if (e.f |= Ze, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ve) !== 0 && (t.f & Ze) === 0 && (As(
        /** @type {Derived} */
        t
      ), Zs(
        /** @type {Derived} */
        t
      ));
}
function Qs(e) {
  if (e.v === le) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (gr.has(t) || (t.f & ve) !== 0 && Qs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xs(e) {
  var t = it;
  try {
    return it = !0, e();
  } finally {
    it = t;
  }
}
const Po = ["touchstart", "touchmove"];
function Fo(e) {
  return Po.includes(e);
}
const fr = Symbol("events"), ei = /* @__PURE__ */ new Set(), ka = /* @__PURE__ */ new Set();
function re(e, t, r) {
  (t[fr] ?? (t[fr] = {}))[e] = r;
}
function Oo(e) {
  for (var t = 0; t < e.length; t++)
    ei.add(e[t]);
  for (var r of ka)
    r(e);
}
let ss = null;
function is(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  ss = e;
  var u = 0, l = ss === e && e[fr];
  if (l) {
    var f = a.indexOf(l);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[fr] = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    f <= d && (u = f);
  }
  if (i = /** @type {Element} */
  a[u] || e.target, i !== t) {
    Ci(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var x = F, c = O;
    et(null), mt(null);
    try {
      for (var _, y = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var I = i[fr]?.[n];
          I != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && I.call(i, e);
        } catch (B) {
          _ ? y.push(B) : _ = B;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (_) {
        for (let B of y)
          queueMicrotask(() => {
            throw B;
          });
        throw _;
      }
    } finally {
      e[fr] = t, delete e.currentTarget, et(x), mt(c);
    }
  }
}
const zo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ho(e) {
  return (
    /** @type {string} */
    zo?.createHTML(e) ?? e
  );
}
function ti(e) {
  var t = Ps("template");
  return t.innerHTML = Ho(e.replaceAll("<!>", "<!---->")), t.content;
}
function Wr(e, t) {
  var r = (
    /** @type {Effect} */
    O
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function w(e, t) {
  var r = (t & vs) !== 0, n = (t & Gi) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = ti(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Rt(a)));
    var u = (
      /** @type {TemplateNode} */
      n || Ns ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rt(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Wr(l, f);
    } else
      Wr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Vo(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), a = (t & vs) !== 0, i = `<${r}>${n ? e : "<!>" + e}</${r}>`, u;
  return () => {
    if (!u) {
      var l = (
        /** @type {DocumentFragment} */
        ti(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Rt(l)
      );
      if (a)
        for (u = document.createDocumentFragment(); /* @__PURE__ */ Rt(f); )
          u.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Rt(f)
          );
      else
        u = /** @type {Element} */
        /* @__PURE__ */ Rt(f);
    }
    var d = (
      /** @type {TemplateNode} */
      u.cloneNode(!0)
    );
    if (a) {
      var x = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rt(d)
      ), c = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Wr(x, c);
    } else
      Wr(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  return /* @__PURE__ */ Vo(e, t, "svg");
}
function Io(e = "") {
  {
    var t = Dt(e + "");
    return Wr(t, t), t;
  }
}
function qo() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Dt();
  return e.append(t, r), Wr(t, r), e;
}
function b(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function C(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[rn] ?? (e[rn] = e.nodeValue)) && (e[rn] = r, e.nodeValue = `${r}`);
}
function Uo(e, t) {
  return Yo(e, t);
}
const jn = /* @__PURE__ */ new Map();
function Yo(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: u = !0, transformError: l }) {
  ko();
  var f = void 0, d = Ao(() => {
    var x = r ?? t.appendChild(Dt());
    oo(
      /** @type {TemplateNode} */
      x,
      {
        pending: () => {
        }
      },
      (y) => {
        ps({});
        var p = (
          /** @type {ComponentContext} */
          Xe
        );
        i && (p.c = i), a && (n.$$events = a), f = e(y, n) || {}, _s();
      },
      l
    );
    var c = /* @__PURE__ */ new Set(), _ = (y) => {
      for (var p = 0; p < y.length; p++) {
        var I = y[p];
        if (!c.has(I)) {
          c.add(I);
          var B = Fo(I);
          for (const we of [t, document]) {
            var P = jn.get(we);
            P === void 0 && (P = /* @__PURE__ */ new Map(), jn.set(we, P));
            var m = P.get(I);
            m === void 0 ? (we.addEventListener(I, is, { passive: B }), P.set(I, 1)) : P.set(I, m + 1);
          }
        }
      }
    };
    return _(Un(ei)), ka.add(_), () => {
      for (var y of c)
        for (const B of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            jn.get(B)
          ), I = (
            /** @type {number} */
            p.get(y)
          );
          --I == 0 ? (B.removeEventListener(y, is), p.delete(y), p.size === 0 && jn.delete(B)) : p.set(y, I);
        }
      ka.delete(_), x !== r && x.parentNode?.removeChild(x);
    };
  });
  return Ea.set(f, d), f;
}
let Ea = /* @__PURE__ */ new WeakMap();
function $o(e, t) {
  const r = Ea.get(e);
  return r ? (Ea.delete(e), r(t)) : Promise.resolve();
}
var nt, bt, Ve, _r, _n, gn, qn;
class Go {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ae(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, nt, /* @__PURE__ */ new Map());
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
    T(this, bt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, _r, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, _n, !0);
    /**
     * @param {Batch} batch
     */
    T(this, gn, (t) => {
      if (o(this, nt).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, nt).get(t)
        ), n = o(this, bt).get(r);
        if (n)
          Fa(n), o(this, _r).delete(r);
        else {
          var a = o(this, Ve).get(r);
          a && (o(this, bt).set(r, a.effect), o(this, Ve).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, u] of o(this, nt)) {
          if (o(this, nt).delete(i), i === t)
            break;
          const l = o(this, Ve).get(u);
          l && (Ne(l.effect), o(this, Ve).delete(u));
        }
        for (const [i, u] of o(this, bt)) {
          if (i === r || o(this, _r).has(i)) continue;
          const l = () => {
            if (Array.from(o(this, nt).values()).includes(i)) {
              var d = document.createDocumentFragment();
              Oa(u, d), d.append(Dt()), o(this, Ve).set(i, { effect: u, fragment: d });
            } else
              Ne(u);
            o(this, _r).delete(i), o(this, bt).delete(i);
          };
          o(this, _n) || !n ? (o(this, _r).add(i), xr(u, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, qn, (t) => {
      o(this, nt).delete(t);
      const r = Array.from(o(this, nt).values());
      for (const [n, a] of o(this, Ve))
        r.includes(n) || (Ne(a.effect), o(this, Ve).delete(n));
    });
    this.anchor = t, S(this, _n, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      j
    ), a = Ds();
    if (r && !o(this, bt).has(t) && !o(this, Ve).has(t))
      if (a) {
        var i = document.createDocumentFragment(), u = Dt();
        i.append(u), o(this, Ve).set(t, {
          effect: Je(() => r(u)),
          fragment: i
        });
      } else
        o(this, bt).set(
          t,
          Je(() => r(this.anchor))
        );
    if (o(this, nt).set(n, t), a) {
      for (const [l, f] of o(this, bt))
        l === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [l, f] of o(this, Ve))
        l === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(o(this, gn)), n.ondiscard(o(this, qn));
    } else
      o(this, gn).call(this, n);
  }
}
nt = new WeakMap(), bt = new WeakMap(), Ve = new WeakMap(), _r = new WeakMap(), _n = new WeakMap(), gn = new WeakMap(), qn = new WeakMap();
function M(e, t, r = !1) {
  var n = new Go(e), a = r ? Ur : 0;
  function i(u, l) {
    n.ensure(u, l);
  }
  Da(() => {
    var u = !1;
    t((l, f = 0) => {
      u = !0, i(f, l);
    }), u || i(-1, null);
  }, a);
}
function ua(e, t) {
  return t;
}
function Wo(e, t, r) {
  for (var n = [], a = t.length, i, u = t.length, l = 0; l < a; l++) {
    let c = t[l];
    xr(
      c,
      () => {
        if (i) {
          if (i.pending.delete(c), i.done.add(c), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ca(e, Un(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var d = (
        /** @type {Element} */
        r
      ), x = (
        /** @type {Element} */
        d.parentNode
      );
      Eo(x), x.append(d), e.items.clear();
    }
    Ca(e, t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Ca(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const l of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    if (n?.has(i)) {
      i.f |= Bt;
      const u = document.createDocumentFragment();
      Oa(i, u);
    } else
      Ne(t[a], r);
  }
}
var os;
function en(e, t, r, n, a, i = null) {
  var u = e, l = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    u = f.appendChild(Dt());
  }
  var d = null, x = /* @__PURE__ */ _o(() => {
    var m = r();
    return Sa(m) ? m : m == null ? [] : Un(m);
  }), c, _ = /* @__PURE__ */ new Map(), y = !0;
  function p(m) {
    (P.effect.f & ot) === 0 && (P.pending.delete(m), P.fallback = d, Ko(P, c, u, t, n), d !== null && (c.length === 0 ? (d.f & Bt) === 0 ? Fa(d) : (d.f ^= Bt, an(d, null, u)) : xr(d, () => {
      d = null;
    })));
  }
  function I(m) {
    P.pending.delete(m);
  }
  var B = Da(() => {
    c = /** @type {V[]} */
    s(x);
    for (var m = c.length, we = /* @__PURE__ */ new Set(), pe = (
      /** @type {Batch} */
      j
    ), ke = Ds(), _e = 0; _e < m; _e += 1) {
      var wt = c[_e], ge = n(wt, _e), ue = y ? null : l.get(ge);
      ue ? (ue.v && $r(ue.v, wt), ue.i && $r(ue.i, _e), ke && pe.unskip_effect(ue.e)) : (ue = Jo(
        l,
        y ? u : os ?? (os = Dt()),
        wt,
        ge,
        _e,
        a,
        t,
        r
      ), y || (ue.e.f |= Bt), l.set(ge, ue)), we.add(ge);
    }
    if (m === 0 && i && !d && (y ? d = Je(() => i(u)) : (d = Je(() => i(os ?? (os = Dt()))), d.f |= Bt)), m > we.size && Di(), !y)
      if (_.set(pe, we), ke) {
        for (const [qe, Ft] of l)
          we.has(qe) || pe.skip_effect(Ft.e);
        pe.oncommit(p), pe.ondiscard(I);
      } else
        p(pe);
    s(x);
  }), P = { effect: B, items: l, pending: _, outrogroups: null, fallback: d };
  y = !1;
}
function tn(e) {
  for (; e !== null && (e.f & lt) === 0; )
    e = e.next;
  return e;
}
function Ko(e, t, r, n, a) {
  var i = t.length, u = e.items, l = tn(e.effect.first), f, d = null, x = [], c = [], _, y, p, I;
  for (I = 0; I < i; I += 1) {
    if (_ = t[I], y = a(_, I), p = /** @type {EachItem} */
    u.get(y).e, e.outrogroups !== null)
      for (const ge of e.outrogroups)
        ge.pending.delete(p), ge.done.delete(p);
    if ((p.f & me) !== 0 && Fa(p), (p.f & Bt) !== 0)
      if (p.f ^= Bt, p === l)
        an(p, null, r);
      else {
        var B = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), $t(e, d, p), $t(e, p, B), an(p, B, r), d = p, x = [], c = [], l = tn(d.next);
        continue;
      }
    if (p !== l) {
      if (f !== void 0 && f.has(p)) {
        if (x.length < c.length) {
          var P = c[0], m;
          d = P.prev;
          var we = x[0], pe = x[x.length - 1];
          for (m = 0; m < x.length; m += 1)
            an(x[m], P, r);
          for (m = 0; m < c.length; m += 1)
            f.delete(c[m]);
          $t(e, we.prev, pe.next), $t(e, d, we), $t(e, pe, P), l = P, d = pe, I -= 1, x = [], c = [];
        } else
          f.delete(p), an(p, l, r), $t(e, p.prev, p.next), $t(e, p, d === null ? e.effect.first : d.next), $t(e, d, p), d = p;
        continue;
      }
      for (x = [], c = []; l !== null && l !== p; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(l), c.push(l), l = tn(l.next);
      if (l === null)
        continue;
    }
    (p.f & Bt) === 0 && x.push(p), d = p, l = tn(p.next);
  }
  if (e.outrogroups !== null) {
    for (const ge of e.outrogroups)
      ge.pending.size === 0 && (Ca(e, Un(ge.done)), e.outrogroups?.delete(ge));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var ke = [];
    if (f !== void 0)
      for (p of f)
        (p.f & me) === 0 && ke.push(p);
    for (; l !== null; )
      (l.f & me) === 0 && l !== e.fallback && ke.push(l), l = tn(l.next);
    var _e = ke.length;
    if (_e > 0) {
      var wt = i === 0 ? r : null;
      Wo(e, ke, wt);
    }
  }
}
function Jo(e, t, r, n, a, i, u, l) {
  var f = (u & Ui) !== 0 ? (u & $i) === 0 ? /* @__PURE__ */ bo(r, !1, !1) : wr(r) : null, d = (u & Yi) !== 0 ? wr(a) : null;
  return {
    v: f,
    i: d,
    e: Je(() => (i(t, f ?? r, d ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function an(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & Bt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xn(n)
      );
      if (i.before(n), n === a)
        return;
      n = u;
    }
}
function $t(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Zo(e, t) {
  Hs(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const a = Ps("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function ri(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = ri(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Qo() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = ri(e)) && (n && (n += " "), n += t);
  return n;
}
function ls(e) {
  return typeof e == "object" ? Qo(e) : e ?? "";
}
function Xo(e, t, r) {
  var n = e == null ? "" : "" + e;
  return t && (n = n ? n + " " + t : t), n === "" ? null : n;
}
function el(e, t) {
  return e == null ? null : String(e);
}
function Fe(e, t, r, n, a, i) {
  var u = (
    /** @type {any} */
    e[ca]
  );
  if (u !== r || u === void 0) {
    var l = Xo(r, n);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e[ca] = r;
  }
  return i;
}
function tl(e, t, r, n) {
  var a = (
    /** @type {any} */
    e[ha]
  );
  if (a !== t) {
    var i = el(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e[ha] = t;
  }
  return n;
}
function ni(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Sa(t))
      return Ji();
    for (var n of e.options)
      n.selected = t.includes(dn(n));
    return;
  }
  for (n of e.options) {
    var a = dn(n);
    if (wo(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function rl(e) {
  var t = new MutationObserver(() => {
    ni(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Os(() => {
    t.disconnect();
  });
}
function nl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  Fs(e, "change", (i) => {
    var u = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(u), dn);
    else {
      var f = e.querySelector(u) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = f && dn(f);
    }
    r(l), e.__value = l, j !== null && n.add(j);
  }), Hs(() => {
    var i = t();
    if (e === document.activeElement) {
      var u = (
        /** @type {Batch} */
        j
      );
      if (n.has(u))
        return;
    }
    if (ni(e, i, a), a && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = dn(l), r(i));
    }
    e.__value = i, a = !1;
  }), rl(e);
}
function dn(e) {
  return "__value" in e ? e.__value : e.value;
}
function al(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Fs(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = da(e) ? fa(i) : i, r(i), j !== null && n.add(j), await Do(), i !== (i = t())) {
      var u = e.selectionStart, l = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var d = e.value.length;
        u === l && l === f && d > f ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = u, e.selectionEnd = Math.min(l, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xs(t) == null && e.value && (r(da(e) ? fa(e.value) : e.value), j !== null && n.add(j)), Vs(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        j
      );
      if (n.has(i))
        return;
    }
    da(e) && a === fa(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function da(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function fa(e) {
  return e === "" ? null : +e;
}
const sl = "5";
var us;
typeof window < "u" && ((us = window.__svelte ?? (window.__svelte = {})).v ?? (us.v = /* @__PURE__ */ new Set())).add(sl);
var il = /* @__PURE__ */ Re('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), ol = /* @__PURE__ */ Re('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), ll = /* @__PURE__ */ Re('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'), ul = /* @__PURE__ */ w("<div><!> </div>"), dl = /* @__PURE__ */ w('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width:300px"></div>'), fl = /* @__PURE__ */ w('<p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"> </p>'), vl = /* @__PURE__ */ w('<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/50 backdrop-blur-sm" role="button" tabindex="-1" aria-label="Close modal"></div> <div class="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"><div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700"><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white"> </h3> <!></div> <button aria-label="Close" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-auto p-6"><pre class="text-sm font-mono bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap"> </pre></div></div></div>'), cl = /* @__PURE__ */ w('<div class="flex justify-center py-16"><svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), hl = /* @__PURE__ */ w("<span> </span>"), pl = /* @__PURE__ */ Re('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Starting...', 1), _l = /* @__PURE__ */ Re('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg> Run Now', 1), gl = /* @__PURE__ */ Re('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), xl = /* @__PURE__ */ Re('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), bl = /* @__PURE__ */ w('<span class="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"> </span>'), yl = /* @__PURE__ */ w('<span class="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"> </span>'), ml = /* @__PURE__ */ w('<p class="text-sm text-gray-600 dark:text-gray-400"> </p>'), wl = /* @__PURE__ */ w('<div><div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"><span>Step Progress</span> <span> </span></div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full transition-all"></div></div></div>'), kl = /* @__PURE__ */ w('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">Paused</span>'), El = /* @__PURE__ */ w('<span class="text-xs text-gray-400"> </span>'), Cl = /* @__PURE__ */ w('<div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-2 text-sm"><div class="flex items-center gap-2"><span> </span> <!> <!></div> <button class="text-xs text-blue-600 dark:text-blue-400 hover:underline"> </button></div>'), Ml = /* @__PURE__ */ w('<div><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Schedules</h3> <div class="space-y-2"></div></div>'), Sl = /* @__PURE__ */ w('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="p-6 space-y-4"><!> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div><span class="block text-gray-500 dark:text-gray-400">Created</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Updated</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Executions</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Progress</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div></div> <!> <!></div></div>'), Tl = /* @__PURE__ */ w('<div class="p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400">No steps defined for this task</p></div>'), Al = /* @__PURE__ */ Re('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), jl = /* @__PURE__ */ Re('<svg class="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Ll = /* @__PURE__ */ Re('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), Nl = /* @__PURE__ */ w('<span class="px-1.5 py-0.5 rounded text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400">async</span>'), Rl = /* @__PURE__ */ w('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), Bl = /* @__PURE__ */ w('<div class="mt-1.5 flex items-center gap-2"><svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <span class="text-xs text-gray-500 dark:text-gray-400 font-mono"> </span> <!></div>'), Dl = /* @__PURE__ */ w('<p class="text-xs text-gray-400 mt-1"> </p>'), Pl = /* @__PURE__ */ w('<button class="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> View Code</button>'), Fl = /* @__PURE__ */ w('<div class="p-4"><div class="flex items-start justify-between gap-3"><div class="flex items-start gap-3"><div><!></div> <div><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-900 dark:text-white"></span> <span> </span> <!></div> <!> <!></div></div> <!></div></div>'), Ol = /* @__PURE__ */ w('<div class="divide-y divide-gray-100 dark:divide-gray-700"></div>'), zl = /* @__PURE__ */ w('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><!></div>'), Hl = /* @__PURE__ */ w('<div class="p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> <p class="text-gray-500 dark:text-gray-400">No executions recorded yet</p></div>'), Vl = /* @__PURE__ */ w('<div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center"><svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>'), Il = /* @__PURE__ */ w('<div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center"><svg class="animate-spin w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), ql = /* @__PURE__ */ w('<div class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center"><svg class="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>'), Ul = /* @__PURE__ */ w('<div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>'), Yl = /* @__PURE__ */ w('<span class="truncate max-w-xs"> </span>'), $l = /* @__PURE__ */ w('<div class="mb-3"><span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Result</span> <p class="mt-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-lg p-3 font-mono whitespace-pre-wrap break-words"> </p></div>'), Gl = /* @__PURE__ */ w('<div class="mt-2 flex items-center gap-2 text-sm text-gray-500"><svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Loading logs...</div>'), Wl = /* @__PURE__ */ w('<pre class="mt-2 text-xs font-mono bg-gray-900 text-gray-100 rounded-lg p-3 overflow-x-auto max-h-64 overflow-y-auto whitespace-pre-wrap"> </pre>'), Kl = /* @__PURE__ */ w('<p class="mt-2 text-sm text-gray-400">No logs available for this execution</p>'), Jl = /* @__PURE__ */ w('<div class="px-5 pb-4 pl-16"><!> <div><span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Logs</span> <!></div></div>'), Zl = /* @__PURE__ */ w('<div><button class="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-900 dark:text-white truncate"> </span> <span> </span></div> <div class="flex items-center gap-3 mt-0.5 text-xs text-gray-500 dark:text-gray-400"><span> </span> <!></div></div> <div class="flex-shrink-0"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></button> <!></div>'), Ql = /* @__PURE__ */ w('<div class="px-5 py-3 border-t border-gray-100 dark:border-gray-700 text-center"><button class="text-sm text-blue-600 dark:text-blue-400 hover:underline">Load more executions...</button></div>'), Xl = /* @__PURE__ */ w('<div class="divide-y divide-gray-100 dark:divide-gray-700"></div> <!>', 1), eu = /* @__PURE__ */ w('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><!></div>'), tu = /* @__PURE__ */ w('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="p-6 border-b border-gray-100 dark:border-gray-700"><div class="flex items-start justify-between gap-4"><div><h2 class="text-xl font-bold text-gray-900 dark:text-white"> </h2> <p class="text-xs text-gray-400 mt-1 font-mono"> </p></div> <!></div></div> <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 flex gap-3"><button class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!></button> <button class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!> Delete</button></div></div> <div class="mb-6 border-b border-gray-200 dark:border-gray-700"><nav class="flex gap-6" aria-label="Tabs"><button>Overview</button> <button>Steps <!></button> <button>Executions <!></button></nav></div> <!>', 1), ru = /* @__PURE__ */ w('<div class="mb-4"><button class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to tasks</button></div> <!>', 1), nu = /* @__PURE__ */ w('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-sm"><svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg> </div>'), au = /* @__PURE__ */ w('<div class="flex justify-center items-center py-16"><svg class="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), su = /* @__PURE__ */ w('<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>'), iu = /* @__PURE__ */ w('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), ou = /* @__PURE__ */ w('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), lu = /* @__PURE__ */ w('<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 svelte-11d5b98"> </p>'), uu = /* @__PURE__ */ w('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">Paused</span>'), du = /* @__PURE__ */ w('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><span> </span></div>'), fu = /* @__PURE__ */ w('<div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <!></div> <!>', 1), vu = /* @__PURE__ */ w('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>One-time task</span></div>'), cu = /* @__PURE__ */ Re('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), hu = /* @__PURE__ */ Re('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>'), pu = /* @__PURE__ */ w("<button> </button>"), _u = /* @__PURE__ */ Re('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), gu = /* @__PURE__ */ Re('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), xu = /* @__PURE__ */ w('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"><div class="p-4 border-b border-gray-100 dark:border-gray-700"><div class="flex justify-between items-start gap-2"><div class="flex-1 min-w-0"><h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3> <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p></div> <div class="flex items-center gap-2"><!> <span> </span></div></div></div> <div class="p-4 space-y-3 flex-1"><!> <div class="flex flex-wrap gap-3 text-sm"><!> <button class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> </button></div></div> <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-xl flex gap-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors"><!> Run</button> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 transition-colors"><!></button></div></div>'), bu = /* @__PURE__ */ w('<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"></div> <div class="flex items-center justify-between mt-6"><button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Previous</button> <span class="text-xs text-gray-500 dark:text-gray-400"> </span> <button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Next</button></div>', 1), yu = /* @__PURE__ */ w('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 mb-4"><div class="flex flex-wrap items-center gap-x-4 gap-y-2"><div class="flex items-center gap-4 text-sm"><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium"><!> </span> <span class="text-yellow-600 dark:text-yellow-400 font-medium"> </span> <span class="text-green-600 dark:text-green-400 font-medium"> </span> <span class="text-red-600 dark:text-red-400 font-medium"> </span></div> <div class="flex flex-1 items-center gap-2 ml-auto min-w-0"><div class="flex-1 relative min-w-[150px]"><svg class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search tasks..." class="w-full pl-8 pr-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <select class="w-36 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"><option>All Status</option><option>Running</option><option>Pending</option><option>Completed</option><option>Failed</option></select></div></div></div> <!>', 1), mu = /* @__PURE__ */ w('<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Task Monitor</h1> <button class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!>', 1), wu = /* @__PURE__ */ w('<!> <div class="p-6 max-w-7xl mx-auto"><!> <!></div>', 1);
const ku = {
  hash: "svelte-11d5b98",
  code: ".line-clamp-2.svelte-11d5b98 {display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}"
};
function Eu(e, t) {
  ps(t, !0), Zo(e, ku);
  let r = /* @__PURE__ */ W(Ie([])), n = /* @__PURE__ */ W(!0), a = /* @__PURE__ */ W(""), i = /* @__PURE__ */ W(""), u = /* @__PURE__ */ W(""), l = /* @__PURE__ */ W(Ie([])), f = /* @__PURE__ */ W(0), d = Ie({}), x = Ie({});
  const c = 10;
  let _ = /* @__PURE__ */ W(1), y = /* @__PURE__ */ W(0), p = /* @__PURE__ */ W(null), I = /* @__PURE__ */ W(!1), B = /* @__PURE__ */ W(Ie([1])), P = /* @__PURE__ */ W(null), m = /* @__PURE__ */ W(null), we = /* @__PURE__ */ W(Ie([])), pe = /* @__PURE__ */ W(!1), ke = /* @__PURE__ */ W(null), _e = /* @__PURE__ */ W(Ie({})), wt = Ie({}), ge = /* @__PURE__ */ W(!1), ue = /* @__PURE__ */ W(null), qe = /* @__PURE__ */ W("overview"), Ft = /* @__PURE__ */ lr(() => ({
    total: s(r).length,
    running: s(r).filter((h) => h.status?.toLowerCase() === "running").length,
    pending: s(r).filter((h) => h.status?.toLowerCase() === "pending").length,
    completed: s(r).filter((h) => h.status?.toLowerCase() === "completed").length,
    failed: s(r).filter((h) => h.status?.toLowerCase() === "failed").length
  })), za = /* @__PURE__ */ lr(() => s(r).filter((h) => {
    const k = !s(i) || h.name.toLowerCase().includes(s(i).toLowerCase()) || wn(h.metadata).toLowerCase().includes(s(i).toLowerCase()), N = !s(u) || h.status?.toLowerCase() === s(u).toLowerCase();
    return k && N;
  }));
  function Er(h, k = "info") {
    const N = mo(f);
    E(l, [...s(l), { id: N, message: h, type: k }], !0), setTimeout(
      () => {
        E(l, s(l).filter((q) => q.id !== N), !0);
      },
      4e3
    );
  }
  async function er(h, k = {}) {
    return await t.ctx.callSync(h, k);
  }
  async function Ot() {
    try {
      const h = await er("get_all_tasks", { from_id: s(_), page_size: c });
      E(r, h?.tasks ?? h?.data?.tasks ?? (Array.isArray(h) ? h : []), !0), E(y, h?.max_id ?? 0, !0), E(p, h?.next_from_id ?? null, !0), E(I, h?.has_more ?? !1, !0), E(a, "");
    } catch (h) {
      E(a, "Error loading tasks: " + (h?.message || String(h)));
    } finally {
      E(n, !1);
    }
  }
  function ai() {
    s(p) && (E(B, [...s(B), s(p)], !0), E(_, s(p), !0), Ot());
  }
  function si() {
    s(B).length > 1 && (E(B, s(B).slice(0, -1), !0), E(_, s(B)[s(B).length - 1], !0), Ot());
  }
  async function yn(h) {
    E(P, h, !0), E(pe, !0);
    try {
      const [k, N] = await Promise.all([
        er("get_task_details", { task_id: h }).catch(() => null),
        er("get_task_logs", { task_id: h }).catch(() => ({ data: [] }))
      ]), q = k?.task ?? k?.data?.task ?? k?.data ?? k;
      q && (q.executions_count == null && q.executions && (q.executions_count = q.executions.length), q.total_steps = q.steps?.length ?? 0), E(m, q, !0), E(we, N?.data ?? (Array.isArray(N) ? N : []), !0);
    } catch (k) {
      E(a, k?.message || String(k), !0);
    } finally {
      E(pe, !1);
    }
  }
  function Ha() {
    E(P, null), E(m, null), E(we, [], !0), E(qe, "overview"), E(ke, null), E(_e, {}, !0);
  }
  async function ii(h, k) {
    if (s(ke) === h) {
      E(ke, null);
      return;
    }
    if (E(ke, h, !0), !s(_e)[h]) {
      wt[h] = !0;
      try {
        const N = await er("get_execution_logs", { logger_name: k, limit: 200 });
        s(_e)[h] = N?.logs || N?.data?.logs || "No logs available";
      } catch (N) {
        s(_e)[h] = "Error loading logs: " + (N?.message || String(N));
      } finally {
        delete wt[h];
      }
    }
  }
  function oi(h) {
    E(ue, h, !0), E(ge, !0);
  }
  function Gn() {
    E(ge, !1), E(ue, null);
  }
  async function Va(h, k) {
    try {
      const N = await er("toggle_schedule", { schedule_id: h, disabled: !k });
      Er(k ? "Schedule resumed" : "Schedule paused", "success"), await Ot();
    } catch (N) {
      Er(N?.message || "Error toggling schedule", "error");
    }
  }
  async function Ia(h) {
    d[h] = !0;
    try {
      const k = await er("run_task_now", { task_id: h });
      Er(k?.message || "Task started", "success"), await Ot(), s(P) === h && await yn(h);
    } catch (k) {
      Er(k?.message || "Error running task", "error");
    } finally {
      delete d[h];
    }
  }
  async function qa(h) {
    x[h] = !0;
    try {
      const k = await er("delete_task", { task_id: h });
      Er(k?.message || "Task deleted", "success"), s(P) === h && Ha(), await Ot();
    } catch (k) {
      Er(k?.message || "Error deleting task", "error");
    } finally {
      delete x[h];
    }
  }
  function mn(h) {
    const k = h?.toLowerCase();
    return k === "running" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : k === "pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : k === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : k === "failed" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
  function wn(h) {
    if (!h) return "";
    try {
      const k = JSON.parse(h);
      return k.description || k.desc || "";
    } catch {
      return h.length > 80 ? h.substring(0, 80) + "..." : h;
    }
  }
  function Ua(h) {
    if (!h) return "-";
    const k = h > 1e15 ? h / 1e6 : h > 1e12 ? h : h * 1e3, N = Date.now() - k, q = Math.floor(N / 1e3), xe = Math.floor(q / 60), Be = Math.floor(xe / 60), ut = Math.floor(Be / 24);
    return q < 60 ? "Just now" : xe < 60 ? `${xe}m ago` : Be < 24 ? `${Be}h ago` : `${ut}d ago`;
  }
  function Ya(h) {
    if (!h) return "One-time";
    const k = Math.floor(h / 86400), N = Math.floor(h % 86400 / 3600), q = Math.floor(h % 3600 / 60);
    return k > 0 ? `Every ${k}d ${N}h` : N > 0 ? `Every ${N}h ${q}m` : q > 0 ? `Every ${q}m` : `Every ${h}s`;
  }
  function Wn(h) {
    if (!h) return "-";
    const k = h > 1e15 ? h / 1e6 : h > 1e12 ? h : h * 1e3;
    return new Date(k).toLocaleString();
  }
  To(() => {
    Ot();
    const h = setInterval(Ot, 1e4);
    return () => clearInterval(h);
  });
  var $a = wu(), Ga = Tt($a);
  {
    var li = (h) => {
      var k = dl();
      en(k, 21, () => s(l), (N) => N.id, (N, q) => {
        var xe = ul(), Be = v(xe);
        {
          var ut = (Q) => {
            var Ee = il();
            b(Q, Ee);
          }, Ue = (Q) => {
            var Ee = ol();
            b(Q, Ee);
          }, dt = (Q) => {
            var Ee = ll();
            b(Q, Ee);
          };
          M(Be, (Q) => {
            s(q).type === "success" ? Q(ut) : s(q).type === "error" ? Q(Ue, 1) : Q(dt, -1);
          });
        }
        var de = g(Be);
        G(() => {
          Fe(xe, 1, `px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
					${s(q).type === "success" ? "bg-green-600 text-white" : ""}
					${s(q).type === "error" ? "bg-red-600 text-white" : ""}
					${s(q).type === "info" ? "bg-blue-600 text-white" : ""}`), C(de, ` ${s(q).message ?? ""}`);
        }), b(N, xe);
      }), b(h, k);
    };
    M(Ga, (h) => {
      s(l).length > 0 && h(li);
    });
  }
  var ui = g(Ga, 2), Wa = v(ui);
  {
    var di = (h) => {
      var k = vl(), N = v(k), q = g(N, 2), xe = v(q), Be = v(xe), ut = v(Be), Ue = v(ut), dt = g(ut, 2);
      {
        var de = (ft) => {
          var Mr = fl(), Sr = v(Mr);
          G(() => C(Sr, s(ue).description)), b(ft, Mr);
        };
        M(dt, (ft) => {
          s(ue).description && ft(de);
        });
      }
      var Q = g(Be, 2), Ee = g(xe, 2), Cr = v(Ee), tr = v(Cr);
      G(() => {
        C(Ue, s(ue).name), C(tr, s(ue).code || "No code available");
      }), re("click", N, Gn), re("keydown", N, (ft) => {
        ft.key === "Escape" && Gn();
      }), re("click", Q, Gn), b(h, k);
    };
    M(Wa, (h) => {
      s(ge) && s(ue) && h(di);
    });
  }
  var fi = g(Wa, 2);
  {
    var vi = (h) => {
      var k = ru(), N = Tt(k), q = v(N), xe = g(N, 2);
      {
        var Be = (Ue) => {
          var dt = cl();
          b(Ue, dt);
        }, ut = (Ue) => {
          var dt = tu(), de = Tt(dt), Q = v(de), Ee = v(Q), Cr = v(Ee), tr = v(Cr), ft = v(tr), Mr = g(tr, 2), Sr = v(Mr), kn = g(Cr, 2);
          {
            var Kn = (L) => {
              var U = hl(), Ce = v(U);
              G(
                (vt) => {
                  Fe(U, 1, `px-2.5 py-1 rounded-full text-xs font-medium ${vt ?? ""}`, "svelte-11d5b98"), C(Ce, s(m).status);
                },
                [() => mn(s(m).status)]
              ), b(L, U);
            };
            M(kn, (L) => {
              s(m).status && L(Kn);
            });
          }
          var Jn = g(Q, 2), rr = v(Jn), Zn = v(rr);
          {
            var En = (L) => {
              var U = pl();
              b(L, U);
            }, Qn = (L) => {
              var U = _l();
              b(L, U);
            };
            M(Zn, (L) => {
              d[s(P)] ? L(En) : L(Qn, -1);
            });
          }
          var Jr = g(rr, 2), Xn = v(Jr);
          {
            var ea = (L) => {
              var U = gl();
              b(L, U);
            }, Cn = (L) => {
              var U = xl();
              b(L, U);
            };
            M(Xn, (L) => {
              x[s(P)] ? L(ea) : L(Cn, -1);
            });
          }
          var Mn = g(de, 2), Sn = v(Mn), nr = v(Sn), zt = g(nr, 2), Zr = g(v(zt));
          {
            var Qr = (L) => {
              var U = bl(), Ce = v(U);
              G(() => C(Ce, s(m).steps.length)), b(L, U);
            };
            M(Zr, (L) => {
              s(m).steps?.length && L(Qr);
            });
          }
          var Tr = g(zt, 2), ta = g(v(Tr));
          {
            var ra = (L) => {
              var U = yl(), Ce = v(U);
              G(() => C(Ce, s(m).executions_count)), b(L, U);
            };
            M(ta, (L) => {
              s(m).executions_count && L(ra);
            });
          }
          var na = g(Mn, 2);
          {
            var ce = (L) => {
              var U = Sl(), Ce = v(U), vt = v(Ce);
              {
                var Ht = (Z) => {
                  const he = /* @__PURE__ */ lr(() => wn(s(m).metadata));
                  var Me = qo(), rt = Tt(Me);
                  {
                    var ae = (be) => {
                      var Pe = ml(), Se = v(Pe);
                      G(() => C(Se, s(he))), b(be, Pe);
                    };
                    M(rt, (be) => {
                      s(he) && be(ae);
                    });
                  }
                  b(Z, Me);
                };
                M(vt, (Z) => {
                  s(m).metadata && Z(Ht);
                });
              }
              var ne = g(vt, 2), z = v(ne), Et = g(v(z), 2), J = v(Et), Ct = g(z, 2), De = g(v(Ct), 2), Y = v(De), Ye = g(Ct, 2), tt = g(v(Ye), 2), Vt = v(tt), ar = g(Ye, 2), It = g(v(ar), 2), sr = v(It), qt = g(ne, 2);
              {
                var Ut = (Z) => {
                  var he = wl(), Me = v(he), rt = g(v(Me), 2), ae = v(rt), be = g(Me, 2), Pe = v(be);
                  G(
                    (Se) => {
                      C(ae, `${Se ?? ""}%`), tl(Pe, `width: ${(s(m).step_to_execute ?? 0) / s(m).total_steps * 100}%`);
                    },
                    [
                      () => Math.round((s(m).step_to_execute ?? 0) / s(m).total_steps * 100)
                    ]
                  ), b(Z, he);
                };
                M(qt, (Z) => {
                  s(m).total_steps > 0 && Z(Ut);
                });
              }
              var Mt = g(qt, 2);
              {
                var ct = (Z) => {
                  var he = Ml(), Me = g(v(he), 2);
                  en(Me, 21, () => s(m).schedules, ua, (rt, ae) => {
                    var be = Cl(), Pe = v(be), Se = v(Pe), ir = v(Se), Yt = g(Se, 2);
                    {
                      var R = (se) => {
                        var Te = kl();
                        b(se, Te);
                      };
                      M(Yt, (se) => {
                        s(ae).disabled && se(R);
                      });
                    }
                    var K = g(Yt, 2);
                    {
                      var ht = (se) => {
                        var Te = El(), pt = v(Te);
                        G((or) => C(pt, `Last: ${or ?? ""}`), [() => Ua(s(ae).last_run_at)]), b(se, Te);
                      };
                      M(K, (se) => {
                        s(ae).last_run_at && se(ht);
                      });
                    }
                    var $ = g(Pe, 2), te = v($);
                    G(
                      (se) => {
                        Fe(Se, 1, ls(s(ae).disabled ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300")), C(ir, se), C(te, s(ae).disabled ? "Resume" : "Pause");
                      },
                      [() => Ya(s(ae).repeat_every)]
                    ), re("click", $, () => Va(s(ae)._id, s(ae).disabled)), b(rt, be);
                  }), b(Z, he);
                };
                M(Mt, (Z) => {
                  s(m).schedules?.length > 0 && Z(ct);
                });
              }
              G(
                (Z, he) => {
                  C(J, Z), C(Y, he), C(Vt, s(m).executions_count ?? "-"), C(sr, `${s(m).step_to_execute ?? 0 ?? ""} / ${s(m).total_steps ?? 0 ?? ""}`);
                },
                [
                  () => Wn(s(m).created_at),
                  () => Wn(s(m).updated_at)
                ]
              ), b(L, U);
            }, kt = (L) => {
              var U = zl(), Ce = v(U);
              {
                var vt = (ne) => {
                  var z = Tl();
                  b(ne, z);
                }, Ht = (ne) => {
                  var z = Ol();
                  en(z, 21, () => s(m).steps, ua, (Et, J, Ct) => {
                    var De = Fl(), Y = v(De), Ye = v(Y), tt = v(Ye), Vt = v(tt);
                    {
                      var ar = (R) => {
                        var K = Al();
                        b(R, K);
                      }, It = (R) => {
                        var K = jl();
                        b(R, K);
                      }, sr = (R) => {
                        var K = Ll();
                        b(R, K);
                      }, qt = (R) => {
                        var K = Io();
                        K.nodeValue = Ct + 1, b(R, K);
                      };
                      M(Vt, (R) => {
                        s(J).status === "completed" ? R(ar) : s(J).status === "running" ? R(It, 1) : s(J).status === "failed" ? R(sr, 2) : R(qt, -1);
                      });
                    }
                    var Ut = g(tt, 2), Mt = v(Ut), ct = v(Mt);
                    ct.textContent = `Step ${Ct + 1}`;
                    var Z = g(ct, 2), he = v(Z), Me = g(Z, 2);
                    {
                      var rt = (R) => {
                        var K = Nl();
                        b(R, K);
                      };
                      M(Me, (R) => {
                        s(J).is_async && R(rt);
                      });
                    }
                    var ae = g(Mt, 2);
                    {
                      var be = (R) => {
                        var K = Bl(), ht = g(v(K), 2), $ = v(ht), te = g(ht, 2);
                        {
                          var se = (Te) => {
                            var pt = Rl(), or = v(pt);
                            G(() => C(or, `— ${s(J).codex.description ?? ""}`)), b(Te, pt);
                          };
                          M(te, (Te) => {
                            s(J).codex.description && Te(se);
                          });
                        }
                        G(() => C($, s(J).codex.name)), b(R, K);
                      };
                      M(ae, (R) => {
                        s(J).codex && R(be);
                      });
                    }
                    var Pe = g(ae, 2);
                    {
                      var Se = (R) => {
                        var K = Dl(), ht = v(K);
                        G(() => C(ht, `Delay before next: ${s(J).run_next_after ?? ""}s`)), b(R, K);
                      };
                      M(Pe, (R) => {
                        s(J).run_next_after && R(Se);
                      });
                    }
                    var ir = g(Ye, 2);
                    {
                      var Yt = (R) => {
                        var K = Pl();
                        re("click", K, () => oi(s(J).codex)), b(R, K);
                      };
                      M(ir, (R) => {
                        s(J).codex?.code && R(Yt);
                      });
                    }
                    G(
                      (R) => {
                        Fe(tt, 1, `flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
												${s(J).status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" : s(J).status === "running" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" : s(J).status === "failed" ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"}`), Fe(Z, 1, `px-1.5 py-0.5 rounded text-xs font-medium ${R ?? ""}`, "svelte-11d5b98"), C(he, s(J).status || "pending");
                      },
                      [() => mn(s(J).status || "pending")]
                    ), b(Et, De);
                  }), b(ne, z);
                };
                M(Ce, (ne) => {
                  s(m).steps?.length ? ne(Ht, -1) : ne(vt);
                });
              }
              b(L, U);
            }, Ar = (L) => {
              var U = eu(), Ce = v(U);
              {
                var vt = (ne) => {
                  var z = Hl();
                  b(ne, z);
                }, Ht = (ne) => {
                  var z = Xl(), Et = Tt(z);
                  en(Et, 21, () => s(m).executions, ua, (De, Y) => {
                    var Ye = Zl(), tt = v(Ye), Vt = v(tt), ar = v(Vt);
                    {
                      var It = ($) => {
                        var te = Vl();
                        b($, te);
                      }, sr = ($) => {
                        var te = Il();
                        b($, te);
                      }, qt = ($) => {
                        var te = ql();
                        b($, te);
                      }, Ut = ($) => {
                        var te = Ul();
                        b($, te);
                      };
                      M(ar, ($) => {
                        s(Y).status === "completed" ? $(It) : s(Y).status === "running" ? $(sr, 1) : s(Y).status === "failed" ? $(qt, 2) : $(Ut, -1);
                      });
                    }
                    var Mt = g(Vt, 2), ct = v(Mt), Z = v(ct), he = v(Z), Me = g(Z, 2), rt = v(Me), ae = g(ct, 2), be = v(ae), Pe = v(be), Se = g(be, 2);
                    {
                      var ir = ($) => {
                        var te = Yl(), se = v(te);
                        G((Te) => C(se, `${Te ?? ""}${s(Y).result.length > 80 ? "..." : ""}`), [() => s(Y).result.substring(0, 80)]), b($, te);
                      };
                      M(Se, ($) => {
                        s(Y).result && $(ir);
                      });
                    }
                    var Yt = g(Mt, 2), R = v(Yt), K = g(tt, 2);
                    {
                      var ht = ($) => {
                        var te = Jl(), se = v(te);
                        {
                          var Te = (A) => {
                            var ie = $l(), _t = g(v(ie), 2), Xr = v(_t);
                            G(() => C(Xr, s(Y).result)), b(A, ie);
                          };
                          M(se, (A) => {
                            s(Y).result && A(Te);
                          });
                        }
                        var pt = g(se, 2), or = g(v(pt), 2);
                        {
                          var aa = (A) => {
                            var ie = Gl();
                            b(A, ie);
                          }, sa = (A) => {
                            var ie = Wl(), _t = v(ie);
                            G(() => C(_t, s(_e)[s(Y)._id])), b(A, ie);
                          }, D = (A) => {
                            var ie = Kl();
                            b(A, ie);
                          };
                          M(or, (A) => {
                            wt[s(Y)._id] ? A(aa) : s(_e)[s(Y)._id] ? A(sa, 1) : A(D, -1);
                          });
                        }
                        b($, te);
                      };
                      M(K, ($) => {
                        s(ke) === s(Y)._id && $(ht);
                      });
                    }
                    G(
                      ($, te) => {
                        C(he, s(Y).name || `Execution #${s(Y)._id}`), Fe(Me, 1, `px-1.5 py-0.5 rounded text-xs font-medium ${$ ?? ""}`, "svelte-11d5b98"), C(rt, s(Y).status), C(Pe, te), Fe(R, 0, `w-4 h-4 text-gray-400 transition-transform ${s(ke) === s(Y)._id ? "rotate-180" : ""}`);
                      },
                      [
                        () => mn(s(Y).status),
                        () => Wn(s(Y).created_at)
                      ]
                    ), re("click", tt, () => ii(s(Y)._id, s(Y).logger_name)), b(De, Ye);
                  });
                  var J = g(Et, 2);
                  {
                    var Ct = (De) => {
                      var Y = Ql(), Ye = v(Y);
                      re("click", Ye, async () => {
                        E(pe, !0), await yn(s(P));
                      }), b(De, Y);
                    };
                    M(J, (De) => {
                      s(m).exec_has_more && De(Ct);
                    });
                  }
                  b(ne, z);
                };
                M(Ce, (ne) => {
                  s(m).executions?.length ? ne(Ht, -1) : ne(vt);
                });
              }
              b(L, U);
            };
            M(na, (L) => {
              s(qe) === "overview" ? L(ce) : s(qe) === "steps" ? L(kt, 1) : s(qe) === "executions" && L(Ar, 2);
            });
          }
          G(() => {
            C(ft, s(m).name || s(P)), C(Sr, `ID: ${s(P) ?? ""}`), rr.disabled = d[s(P)], Jr.disabled = x[s(P)], Fe(nr, 1, `pb-3 text-sm font-medium border-b-2 transition-colors
							${s(qe) === "overview" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`), Fe(zt, 1, `pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5
							${s(qe) === "steps" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`), Fe(Tr, 1, `pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5
							${s(qe) === "executions" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`);
          }), re("click", rr, () => Ia(s(P))), re("click", Jr, () => qa(s(P))), re("click", nr, () => E(qe, "overview")), re("click", zt, () => E(qe, "steps")), re("click", Tr, () => E(qe, "executions")), b(Ue, dt);
        };
        M(xe, (Ue) => {
          s(pe) ? Ue(Be) : s(m) && Ue(ut, 1);
        });
      }
      re("click", q, Ha), b(h, k);
    }, ci = (h) => {
      var k = mu(), N = Tt(k), q = g(v(N), 2), xe = g(N, 2);
      {
        var Be = (de) => {
          var Q = nu(), Ee = g(v(Q));
          G(() => C(Ee, ` ${s(a) ?? ""}`)), b(de, Q);
        };
        M(xe, (de) => {
          s(a) && de(Be);
        });
      }
      var ut = g(xe, 2);
      {
        var Ue = (de) => {
          var Q = au();
          b(de, Q);
        }, dt = (de) => {
          var Q = yu(), Ee = Tt(Q), Cr = v(Ee), tr = v(Cr), ft = v(tr), Mr = v(ft), Sr = g(ft, 2), kn = v(Sr);
          {
            var Kn = (ce) => {
              var kt = su();
              b(ce, kt);
            };
            M(kn, (ce) => {
              s(Ft).running > 0 && ce(Kn);
            });
          }
          var Jn = g(kn), rr = g(Sr, 2), Zn = v(rr), En = g(rr, 2), Qn = v(En), Jr = g(En, 2), Xn = v(Jr), ea = g(tr, 2), Cn = v(ea), Mn = g(v(Cn), 2), Sn = g(Cn, 2), nr = v(Sn);
          nr.value = nr.__value = "";
          var zt = g(nr);
          zt.value = zt.__value = "running";
          var Zr = g(zt);
          Zr.value = Zr.__value = "pending";
          var Qr = g(Zr);
          Qr.value = Qr.__value = "completed";
          var Tr = g(Qr);
          Tr.value = Tr.__value = "failed";
          var ta = g(Ee, 2);
          {
            var ra = (ce) => {
              var kt = iu(), Ar = g(v(kt), 2), L = v(Ar);
              G(() => C(L, s(i) || s(u) ? "No matching tasks" : "No tasks found")), b(ce, kt);
            }, na = (ce) => {
              var kt = bu(), Ar = Tt(kt);
              en(Ar, 21, () => s(za), (ne) => ne._id, (ne, z) => {
                var Et = xu(), J = v(Et), Ct = v(J), De = v(Ct), Y = v(De), Ye = v(Y), tt = g(Y, 2), Vt = v(tt), ar = g(De, 2), It = v(ar);
                {
                  var sr = (D) => {
                    var A = ou();
                    b(D, A);
                  }, qt = /* @__PURE__ */ lr(() => s(z).status?.toLowerCase() === "running");
                  M(It, (D) => {
                    s(qt) && D(sr);
                  });
                }
                var Ut = g(It, 2), Mt = v(Ut), ct = g(J, 2), Z = v(ct);
                {
                  var he = (D) => {
                    var A = lu(), ie = v(A);
                    G((_t) => C(ie, _t), [() => wn(s(z).metadata)]), b(D, A);
                  }, Me = /* @__PURE__ */ lr(() => wn(s(z).metadata));
                  M(Z, (D) => {
                    s(Me) && D(he);
                  });
                }
                var rt = g(Z, 2), ae = v(rt);
                {
                  var be = (D) => {
                    const A = /* @__PURE__ */ lr(() => s(z).schedules[0]);
                    var ie = fu(), _t = Tt(ie), Xr = g(v(_t), 2), hi = v(Xr), pi = g(Xr, 2);
                    {
                      var _i = (St) => {
                        var Tn = uu();
                        b(St, Tn);
                      };
                      M(pi, (St) => {
                        s(A).disabled && St(_i);
                      });
                    }
                    var gi = g(_t, 2);
                    {
                      var xi = (St) => {
                        var Tn = du(), bi = v(Tn), yi = v(bi);
                        G((mi) => C(yi, `Last: ${mi ?? ""}`), [() => Ua(s(A).last_run_at)]), b(St, Tn);
                      };
                      M(gi, (St) => {
                        s(A).last_run_at && St(xi);
                      });
                    }
                    G(
                      (St) => {
                        Fe(Xr, 1, ls(s(A).disabled ? "line-through text-gray-400" : "")), C(hi, St);
                      },
                      [() => Ya(s(A).repeat_every)]
                    ), b(D, ie);
                  }, Pe = (D) => {
                    var A = vu();
                    b(D, A);
                  };
                  M(ae, (D) => {
                    s(z).schedules?.length > 0 ? D(be) : D(Pe, -1);
                  });
                }
                var Se = g(ae, 2), ir = g(v(Se)), Yt = g(ct, 2), R = v(Yt), K = g(R, 2), ht = v(K);
                {
                  var $ = (D) => {
                    var A = cu();
                    b(D, A);
                  }, te = (D) => {
                    var A = hu();
                    b(D, A);
                  };
                  M(ht, (D) => {
                    d[s(z)._id] ? D($) : D(te, -1);
                  });
                }
                var se = g(K, 2);
                {
                  var Te = (D) => {
                    const A = /* @__PURE__ */ lr(() => s(z).schedules[0]);
                    var ie = pu(), _t = v(ie);
                    G(() => {
                      Fe(ie, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${s(A).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), C(_t, s(A).disabled ? "Resume" : "Pause");
                    }), re("click", ie, () => Va(s(A)._id, s(A).disabled)), b(D, ie);
                  };
                  M(se, (D) => {
                    s(z).schedules?.length > 0 && D(Te);
                  });
                }
                var pt = g(se, 2), or = v(pt);
                {
                  var aa = (D) => {
                    var A = _u();
                    b(D, A);
                  }, sa = (D) => {
                    var A = gu();
                    b(D, A);
                  };
                  M(or, (D) => {
                    x[s(z)._id] ? D(aa) : D(sa, -1);
                  });
                }
                G(
                  (D, A) => {
                    C(Ye, s(z).name), C(Vt, `ID: ${D ?? ""}`), Fe(Ut, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${A ?? ""}`, "svelte-11d5b98"), C(Mt, s(z).status || "Unknown"), C(ir, ` ${s(z).executions_count ?? 0 ?? ""} runs`), K.disabled = d[s(z)._id], pt.disabled = x[s(z)._id];
                  },
                  [
                    () => s(z)._id.substring(0, 12),
                    () => mn(s(z).status)
                  ]
                ), re("click", Se, () => yn(s(z)._id)), re("click", R, () => yn(s(z)._id)), re("click", K, () => Ia(s(z)._id)), re("click", pt, () => qa(s(z)._id)), b(ne, Et);
              });
              var L = g(Ar, 2), U = v(L), Ce = g(U, 2), vt = v(Ce), Ht = g(Ce, 2);
              G(() => {
                U.disabled = s(B).length <= 1, C(vt, `Page ${s(B).length ?? ""}`), Ht.disabled = !s(I);
              }), re("click", U, si), re("click", Ht, ai), b(ce, kt);
            };
            M(ta, (ce) => {
              s(za).length === 0 ? ce(ra) : ce(na, -1);
            });
          }
          G(() => {
            C(Mr, `${s(Ft).total ?? ""} tasks`), C(Jn, ` ${s(Ft).running ?? ""} running`), C(Zn, `${s(Ft).pending ?? ""} pending`), C(Qn, `${s(Ft).completed ?? ""} completed`), C(Xn, `${s(Ft).failed ?? ""} failed`);
          }), al(Mn, () => s(i), (ce) => E(i, ce)), nl(Sn, () => s(u), (ce) => E(u, ce)), b(de, Q);
        };
        M(ut, (de) => {
          s(n) ? de(Ue) : de(dt, -1);
        });
      }
      re("click", q, Ot), b(h, k);
    };
    M(fi, (h) => {
      s(P) ? h(vi) : h(ci, -1);
    });
  }
  b(e, $a), _s();
}
Oo(["click", "keydown"]);
function Su(e, t) {
  const r = Uo(Eu, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        $o(r);
      } catch {
      }
    }
  };
}
export {
  Su as default
};
