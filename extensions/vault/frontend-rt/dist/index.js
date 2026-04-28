var eo = Object.defineProperty;
var ba = (e) => {
  throw TypeError(e);
};
var to = (e, r, t) => r in e ? eo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var ot = (e, r, t) => to(e, typeof r != "symbol" ? r + "" : r, t), Pn = (e, r, t) => r.has(e) || ba("Cannot " + t);
var l = (e, r, t) => (Pn(e, r, "read from private field"), t ? t.call(e) : r.get(e)), H = (e, r, t) => r.has(e) ? ba("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), W = (e, r, t, n) => (Pn(e, r, "write to private field"), n ? n.call(e, t) : r.set(e, t), t), fe = (e, r, t) => (Pn(e, r, "access private method"), t);
var Xn = Array.isArray, ro = Array.prototype.indexOf, Er = Array.prototype.includes, gn = Array.from, no = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, ao = Object.prototype, io = Array.prototype, oo = Object.getPrototypeOf, xa = Object.isExtensible;
const so = () => {
};
function lo(e) {
  for (var r = 0; r < e.length; r++)
    e[r]();
}
function Pa() {
  var e, r, t = new Promise((n, a) => {
    e = n, r = a;
  });
  return { promise: t, resolve: e, reject: r };
}
function fo(e, r) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const t = [];
  for (const n of e)
    if (t.push(n), t.length === r) break;
  return t;
}
const Pe = 2, Sr = 4, bn = 8, Ra = 1 << 24, bt = 16, dt = 32, zt = 64, In = 128, et = 512, Te = 1024, Le = 2048, xt = 4096, Ie = 8192, tt = 16384, hr = 32768, ya = 1 << 25, Tr = 65536, jn = 1 << 17, uo = 1 << 18, Or = 1 << 19, co = 1 << 20, gt = 1 << 25, vr = 65536, cn = 1 << 21, Vr = 1 << 22, Ht = 1 << 23, Dr = Symbol("$state"), Nt = new class extends Error {
  constructor() {
    super(...arguments);
    ot(this, "name", "StaleReactionError");
    ot(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function vo() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function _o(e, r, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function po(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ho() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function go(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function yo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function mo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ko() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const wo = 1, Eo = 2, Ca = 4, So = 8, To = 16, Ao = 1, No = 2, Ne = Symbol(), Fa = "http://www.w3.org/1999/xhtml", Mo = "http://www.w3.org/2000/svg", Oo = "http://www.w3.org/1998/Math/MathML";
function Lo() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Po() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ro() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Da(e) {
  return e === this.v;
}
function Co(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
function Ia(e) {
  return !Co(e, this.v);
}
let nt = null;
function Ar(e) {
  nt = e;
}
function ja(e, r = !1, t) {
  nt = {
    p: nt,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      K
    ),
    l: null
  };
}
function Ba(e) {
  var r = (
    /** @type {ComponentContext} */
    nt
  ), t = r.e;
  if (t !== null) {
    r.e = null;
    for (var n of t)
      oi(n);
  }
  return r.i = !0, nt = r.p, /** @type {T} */
  {};
}
function Va() {
  return !0;
}
let rr = [];
function Ha() {
  var e = rr;
  rr = [], lo(e);
}
function qt(e) {
  if (rr.length === 0 && !Ir) {
    var r = rr;
    queueMicrotask(() => {
      r === rr && Ha();
    });
  }
  rr.push(e);
}
function Fo() {
  for (; rr.length > 0; )
    Ha();
}
function qa(e) {
  var r = K;
  if (r === null)
    return G.f |= Ht, e;
  if ((r.f & hr) === 0 && (r.f & Sr) === 0)
    throw e;
  Bt(e, r);
}
function Bt(e, r) {
  for (; r !== null; ) {
    if ((r.f & In) !== 0) {
      if ((r.f & hr) === 0)
        throw e;
      try {
        r.b.error(e);
        return;
      } catch (t) {
        e = t;
      }
    }
    r = r.parent;
  }
  throw e;
}
const Do = -7169;
function me(e, r) {
  e.f = e.f & Do | r;
}
function Zn(e) {
  (e.f & et) !== 0 || e.deps === null ? me(e, Te) : me(e, xt);
}
function Ja(e) {
  if (e !== null)
    for (const r of e)
      (r.f & Pe) === 0 || (r.f & vr) === 0 || (r.f ^= vr, Ja(
        /** @type {Derived} */
        r.deps
      ));
}
function za(e, r, t) {
  (e.f & Le) !== 0 ? r.add(e) : (e.f & xt) !== 0 && t.add(e), Ja(e.deps), me(e, Te);
}
const Qt = /* @__PURE__ */ new Set();
let j = null, ft = null, Bn = null, Ir = !1, Rn = !1, br = null, an = null;
var ma = 0;
let Io = 1;
var xr, yr, ir, Mt, vt, Jr, Ue, zr, It, Ot, _t, mr, kr, or, Ee, on, Ua, sn, Vn, ln, jo;
const _n = class _n {
  constructor() {
    H(this, Ee);
    ot(this, "id", Io++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ot(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ot(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, xr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, yr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, ir, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    H(this, Mt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    H(this, vt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    H(this, Jr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    H(this, Ue, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    H(this, zr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    H(this, It, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    H(this, Ot, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    H(this, _t, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    H(this, mr, /* @__PURE__ */ new Set());
    ot(this, "is_fork", !1);
    H(this, kr, !1);
    /** @type {Set<Batch>} */
    H(this, or, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(r) {
    l(this, _t).has(r) || l(this, _t).set(r, { d: [], m: [] }), l(this, mr).delete(r);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(r, t = (n) => this.schedule(n)) {
    var n = l(this, _t).get(r);
    if (n) {
      l(this, _t).delete(r);
      for (var a of n.d)
        me(a, Le), t(a);
      for (a of n.m)
        me(a, xt), t(a);
    }
    l(this, mr).add(r);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(r, t, n = !1) {
    r.v !== Ne && !this.previous.has(r) && this.previous.set(r, r.v), (r.f & Ht) === 0 && (this.current.set(r, [t, n]), ft?.set(r, t)), this.is_fork || (r.v = t);
  }
  activate() {
    j = this;
  }
  deactivate() {
    j = null, ft = null;
  }
  flush() {
    try {
      Rn = !0, j = this, fe(this, Ee, sn).call(this);
    } finally {
      ma = 0, Bn = null, br = null, an = null, Rn = !1, j = null, ft = null, ur.clear();
    }
  }
  discard() {
    for (const r of l(this, yr)) r(this);
    l(this, yr).clear(), l(this, ir).clear(), Qt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(r) {
    l(this, zr).push(r);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(r, t) {
    let n = l(this, Mt).get(t) ?? 0;
    if (l(this, Mt).set(t, n + 1), r) {
      let a = l(this, vt).get(t) ?? 0;
      l(this, vt).set(t, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(r, t, n) {
    let a = l(this, Mt).get(t) ?? 0;
    if (a === 1 ? l(this, Mt).delete(t) : l(this, Mt).set(t, a - 1), r) {
      let o = l(this, vt).get(t) ?? 0;
      o === 1 ? l(this, vt).delete(t) : l(this, vt).set(t, o - 1);
    }
    l(this, kr) || n || (W(this, kr, !0), qt(() => {
      W(this, kr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(r, t) {
    for (const n of r)
      l(this, It).add(n);
    for (const n of t)
      l(this, Ot).add(n);
    r.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(r) {
    l(this, xr).add(r);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(r) {
    l(this, yr).add(r);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(r) {
    l(this, ir).add(r);
  }
  run_fork_commit_callbacks() {
    for (const r of l(this, ir)) r(this);
    l(this, ir).clear();
  }
  settled() {
    return (l(this, Jr) ?? W(this, Jr, Pa())).promise;
  }
  static ensure() {
    if (j === null) {
      const r = j = new _n();
      Rn || (Qt.add(j), Ir || qt(() => {
        j === r && r.flush();
      }));
    }
    return j;
  }
  apply() {
    {
      ft = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(r) {
    if (Bn = r, r.b?.is_pending && (r.f & (Sr | bn | Ra)) !== 0 && (r.f & hr) === 0) {
      r.b.defer_effect(r);
      return;
    }
    for (var t = r; t.parent !== null; ) {
      t = t.parent;
      var n = t.f;
      if (br !== null && t === K && (G === null || (G.f & Pe) === 0))
        return;
      if ((n & (zt | dt)) !== 0) {
        if ((n & Te) === 0)
          return;
        t.f ^= Te;
      }
    }
    l(this, Ue).push(t);
  }
};
xr = new WeakMap(), yr = new WeakMap(), ir = new WeakMap(), Mt = new WeakMap(), vt = new WeakMap(), Jr = new WeakMap(), Ue = new WeakMap(), zr = new WeakMap(), It = new WeakMap(), Ot = new WeakMap(), _t = new WeakMap(), mr = new WeakMap(), kr = new WeakMap(), or = new WeakMap(), Ee = new WeakSet(), on = function() {
  return this.is_fork || l(this, vt).size > 0;
}, Ua = function() {
  for (const n of l(this, or))
    for (const a of l(n, vt).keys()) {
      for (var r = !1, t = a; t.parent !== null; ) {
        if (l(this, _t).has(t)) {
          r = !0;
          break;
        }
        t = t.parent;
      }
      if (!r)
        return !0;
    }
  return !1;
}, sn = function() {
  var c;
  if (ma++ > 1e3 && (Qt.delete(this), Vo()), !fe(this, Ee, on).call(this)) {
    for (const s of l(this, It))
      l(this, Ot).delete(s), me(s, Le), this.schedule(s);
    for (const s of l(this, Ot))
      me(s, xt), this.schedule(s);
  }
  const r = l(this, Ue);
  W(this, Ue, []), this.apply();
  var t = br = [], n = [], a = an = [];
  for (const s of r)
    try {
      fe(this, Ee, Vn).call(this, s, t, n);
    } catch (v) {
      throw Ga(s), v;
    }
  if (j = null, a.length > 0) {
    var o = _n.ensure();
    for (const s of a)
      o.schedule(s);
  }
  if (br = null, an = null, fe(this, Ee, on).call(this) || fe(this, Ee, Ua).call(this)) {
    fe(this, Ee, ln).call(this, n), fe(this, Ee, ln).call(this, t);
    for (const [s, v] of l(this, _t))
      Ya(s, v);
  } else {
    l(this, Mt).size === 0 && Qt.delete(this), l(this, It).clear(), l(this, Ot).clear();
    for (const s of l(this, xr)) s(this);
    l(this, xr).clear(), ka(n), ka(t), l(this, Jr)?.resolve();
  }
  var d = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    j
  );
  if (l(this, Ue).length > 0) {
    const s = d ?? (d = this);
    l(s, Ue).push(...l(this, Ue).filter((v) => !l(s, Ue).includes(v)));
  }
  d !== null && (Qt.add(d), fe(c = d, Ee, sn).call(c));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Vn = function(r, t, n) {
  r.f ^= Te;
  for (var a = r.first; a !== null; ) {
    var o = a.f, d = (o & (dt | zt)) !== 0, c = d && (o & Te) !== 0, s = c || (o & Ie) !== 0 || l(this, _t).has(a);
    if (!s && a.fn !== null) {
      d ? a.f ^= Te : (o & Sr) !== 0 ? t.push(a) : Xr(a) && ((o & bt) !== 0 && l(this, Ot).add(a), Mr(a));
      var v = a.first;
      if (v !== null) {
        a = v;
        continue;
      }
    }
    for (; a !== null; ) {
      var g = a.next;
      if (g !== null) {
        a = g;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
ln = function(r) {
  for (var t = 0; t < r.length; t += 1)
    za(r[t], l(this, It), l(this, Ot));
}, jo = function() {
  var g, N, m;
  for (const w of Qt) {
    var r = w.id < this.id, t = [];
    for (const [S, [B, k]] of this.current) {
      if (w.current.has(S)) {
        var n = (
          /** @type {[any, boolean]} */
          w.current.get(S)[0]
        );
        if (r && B !== n)
          w.current.set(S, [B, k]);
        else
          continue;
      }
      t.push(S);
    }
    var a = [...w.current.keys()].filter((S) => !this.current.has(S));
    if (a.length === 0)
      r && w.discard();
    else if (t.length > 0) {
      if (r)
        for (const S of l(this, mr))
          w.unskip_effect(S, (B) => {
            var k;
            (B.f & (bt | Vr)) !== 0 ? w.schedule(B) : fe(k = w, Ee, ln).call(k, [B]);
          });
      w.activate();
      var o = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
      for (var c of t)
        Wa(c, a, o, d);
      d = /* @__PURE__ */ new Map();
      var s = [...w.current.keys()].filter(
        (S) => this.current.has(S) ? (
          /** @type {[any, boolean]} */
          this.current.get(S)[0] !== S
        ) : !0
      );
      for (const S of l(this, zr))
        (S.f & (tt | Ie | jn)) === 0 && Qn(S, s, d) && ((S.f & (Vr | bt)) !== 0 ? (me(S, Le), w.schedule(S)) : l(w, It).add(S));
      if (l(w, Ue).length > 0) {
        w.apply();
        for (var v of l(w, Ue))
          fe(g = w, Ee, Vn).call(g, v, [], []);
        W(w, Ue, []);
      }
      w.deactivate();
    }
  }
  for (const w of Qt)
    l(w, or).has(this) && (l(w, or).delete(this), l(w, or).size === 0 && !fe(N = w, Ee, on).call(N) && (w.activate(), fe(m = w, Ee, sn).call(m)));
};
let _r = _n;
function Bo(e) {
  var r = Ir;
  Ir = !0;
  try {
    for (var t; ; ) {
      if (Fo(), j === null)
        return (
          /** @type {T} */
          t
        );
      j.flush();
    }
  } finally {
    Ir = r;
  }
}
function Vo() {
  try {
    bo();
  } catch (e) {
    Bt(e, Bn);
  }
}
let At = null;
function ka(e) {
  var r = e.length;
  if (r !== 0) {
    for (var t = 0; t < r; ) {
      var n = e[t++];
      if ((n.f & (tt | Ie)) === 0 && Xr(n) && (At = /* @__PURE__ */ new Set(), Mr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ui(n), At?.size > 0)) {
        ur.clear();
        for (const a of At) {
          if ((a.f & (tt | Ie)) !== 0) continue;
          const o = [a];
          let d = a.parent;
          for (; d !== null; )
            At.has(d) && (At.delete(d), o.push(d)), d = d.parent;
          for (let c = o.length - 1; c >= 0; c--) {
            const s = o[c];
            (s.f & (tt | Ie)) === 0 && Mr(s);
          }
        }
        At.clear();
      }
    }
    At = null;
  }
}
function Wa(e, r, t, n) {
  if (!t.has(e) && (t.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const o = a.f;
      (o & Pe) !== 0 ? Wa(
        /** @type {Derived} */
        a,
        r,
        t,
        n
      ) : (o & (Vr | bt)) !== 0 && (o & Le) === 0 && Qn(a, r, n) && (me(a, Le), $n(
        /** @type {Effect} */
        a
      ));
    }
}
function Qn(e, r, t) {
  const n = t.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Er.call(r, a))
        return !0;
      if ((a.f & Pe) !== 0 && Qn(
        /** @type {Derived} */
        a,
        r,
        t
      ))
        return t.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return t.set(e, !1), !1;
}
function $n(e) {
  j.schedule(e);
}
function Ya(e, r) {
  if (!((e.f & dt) !== 0 && (e.f & Te) !== 0)) {
    (e.f & Le) !== 0 ? r.d.push(e) : (e.f & xt) !== 0 && r.m.push(e), me(e, Te);
    for (var t = e.first; t !== null; )
      Ya(t, r), t = t.next;
  }
}
function Ga(e) {
  me(e, Te);
  for (var r = e.first; r !== null; )
    Ga(r), r = r.next;
}
function Ho(e) {
  let r = 0, t = pr(0), n;
  return () => {
    ra() && (i(t), si(() => (r === 0 && (n = yi(() => e(() => jr(t)))), r += 1, () => {
      qt(() => {
        r -= 1, r === 0 && (n?.(), n = void 0, jr(t));
      });
    })));
  };
}
var qo = Tr | Or;
function Jo(e, r, t, n) {
  new zo(e, r, t, n);
}
var Xe, Kn, Ze, sr, Be, Qe, De, We, Lt, lr, jt, wr, Ur, Wr, Pt, pn, be, Uo, Wo, Yo, Hn, fn, un, qn, Jn;
class zo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(r, t, n, a) {
    H(this, be);
    /** @type {Boundary | null} */
    ot(this, "parent");
    ot(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ot(this, "transform_error");
    /** @type {TemplateNode} */
    H(this, Xe);
    /** @type {TemplateNode | null} */
    H(this, Kn, null);
    /** @type {BoundaryProps} */
    H(this, Ze);
    /** @type {((anchor: Node) => void)} */
    H(this, sr);
    /** @type {Effect} */
    H(this, Be);
    /** @type {Effect | null} */
    H(this, Qe, null);
    /** @type {Effect | null} */
    H(this, De, null);
    /** @type {Effect | null} */
    H(this, We, null);
    /** @type {DocumentFragment | null} */
    H(this, Lt, null);
    H(this, lr, 0);
    H(this, jt, 0);
    H(this, wr, !1);
    /** @type {Set<Effect>} */
    H(this, Ur, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    H(this, Wr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    H(this, Pt, null);
    H(this, pn, Ho(() => (W(this, Pt, pr(l(this, lr))), () => {
      W(this, Pt, null);
    })));
    W(this, Xe, r), W(this, Ze, t), W(this, sr, (o) => {
      var d = (
        /** @type {Effect} */
        K
      );
      d.b = this, d.f |= In, n(o);
    }), this.parent = /** @type {Effect} */
    K.b, this.transform_error = a ?? this.parent?.transform_error ?? ((o) => o), W(this, Be, aa(() => {
      fe(this, be, Hn).call(this);
    }, qo));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(r) {
    za(r, l(this, Ur), l(this, Wr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, Ze).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(r, t) {
    fe(this, be, qn).call(this, r, t), W(this, lr, l(this, lr) + r), !(!l(this, Pt) || l(this, wr)) && (W(this, wr, !0), qt(() => {
      W(this, wr, !1), l(this, Pt) && Nr(l(this, Pt), l(this, lr));
    }));
  }
  get_effect_pending() {
    return l(this, pn).call(this), i(
      /** @type {Source<number>} */
      l(this, Pt)
    );
  }
  /** @param {unknown} error */
  error(r) {
    if (!l(this, Ze).onerror && !l(this, Ze).failed)
      throw r;
    j?.is_fork ? (l(this, Qe) && j.skip_effect(l(this, Qe)), l(this, De) && j.skip_effect(l(this, De)), l(this, We) && j.skip_effect(l(this, We)), j.on_fork_commit(() => {
      fe(this, be, Jn).call(this, r);
    })) : fe(this, be, Jn).call(this, r);
  }
}
Xe = new WeakMap(), Kn = new WeakMap(), Ze = new WeakMap(), sr = new WeakMap(), Be = new WeakMap(), Qe = new WeakMap(), De = new WeakMap(), We = new WeakMap(), Lt = new WeakMap(), lr = new WeakMap(), jt = new WeakMap(), wr = new WeakMap(), Ur = new WeakMap(), Wr = new WeakMap(), Pt = new WeakMap(), pn = new WeakMap(), be = new WeakSet(), Uo = function() {
  try {
    W(this, Qe, $e(() => l(this, sr).call(this, l(this, Xe))));
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Wo = function(r) {
  const t = l(this, Ze).failed;
  t && W(this, We, $e(() => {
    t(
      l(this, Xe),
      () => r,
      () => () => {
      }
    );
  }));
}, Yo = function() {
  const r = l(this, Ze).pending;
  r && (this.is_pending = !0, W(this, De, $e(() => r(l(this, Xe)))), qt(() => {
    var t = W(this, Lt, document.createDocumentFragment()), n = Jt();
    t.append(n), W(this, Qe, fe(this, be, un).call(this, () => $e(() => l(this, sr).call(this, n)))), l(this, jt) === 0 && (l(this, Xe).before(t), W(this, Lt, null), dr(
      /** @type {Effect} */
      l(this, De),
      () => {
        W(this, De, null);
      }
    ), fe(this, be, fn).call(
      this,
      /** @type {Batch} */
      j
    ));
  }));
}, Hn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), W(this, jt, 0), W(this, lr, 0), W(this, Qe, $e(() => {
      l(this, sr).call(this, l(this, Xe));
    })), l(this, jt) > 0) {
      var r = W(this, Lt, document.createDocumentFragment());
      sa(l(this, Qe), r);
      const t = (
        /** @type {(anchor: Node) => void} */
        l(this, Ze).pending
      );
      W(this, De, $e(() => t(l(this, Xe))));
    } else
      fe(this, be, fn).call(
        this,
        /** @type {Batch} */
        j
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
fn = function(r) {
  this.is_pending = !1, r.transfer_effects(l(this, Ur), l(this, Wr));
}, /**
 * @template T
 * @param {() => T} fn
 */
un = function(r) {
  var t = K, n = G, a = nt;
  yt(l(this, Be)), at(l(this, Be)), Ar(l(this, Be).ctx);
  try {
    return _r.ensure(), r();
  } catch (o) {
    return qa(o), null;
  } finally {
    yt(t), at(n), Ar(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
qn = function(r, t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && fe(n = this.parent, be, qn).call(n, r, t);
    return;
  }
  W(this, jt, l(this, jt) + r), l(this, jt) === 0 && (fe(this, be, fn).call(this, t), l(this, De) && dr(l(this, De), () => {
    W(this, De, null);
  }), l(this, Lt) && (l(this, Xe).before(l(this, Lt)), W(this, Lt, null)));
}, /**
 * @param {unknown} error
 */
Jn = function(r) {
  l(this, Qe) && (He(l(this, Qe)), W(this, Qe, null)), l(this, De) && (He(l(this, De)), W(this, De, null)), l(this, We) && (He(l(this, We)), W(this, We, null));
  var t = l(this, Ze).onerror;
  let n = l(this, Ze).failed;
  var a = !1, o = !1;
  const d = () => {
    if (a) {
      Ro();
      return;
    }
    a = !0, o && ko(), l(this, We) !== null && dr(l(this, We), () => {
      W(this, We, null);
    }), fe(this, be, un).call(this, () => {
      fe(this, be, Hn).call(this);
    });
  }, c = (s) => {
    try {
      o = !0, t?.(s, d), o = !1;
    } catch (v) {
      Bt(v, l(this, Be) && l(this, Be).parent);
    }
    n && W(this, We, fe(this, be, un).call(this, () => {
      try {
        return $e(() => {
          var v = (
            /** @type {Effect} */
            K
          );
          v.b = this, v.f |= In, n(
            l(this, Xe),
            () => s,
            () => d
          );
        });
      } catch (v) {
        return Bt(
          v,
          /** @type {Effect} */
          l(this, Be).parent
        ), null;
      }
    }));
  };
  qt(() => {
    var s;
    try {
      s = this.transform_error(r);
    } catch (v) {
      Bt(v, l(this, Be) && l(this, Be).parent);
      return;
    }
    s !== null && typeof s == "object" && typeof /** @type {any} */
    s.then == "function" ? s.then(
      c,
      /** @param {unknown} e */
      (v) => Bt(v, l(this, Be) && l(this, Be).parent)
    ) : c(s);
  });
};
function Go(e, r, t, n) {
  const a = ea;
  var o = e.filter((m) => !m.settled);
  if (t.length === 0 && o.length === 0) {
    n(r.map(a));
    return;
  }
  var d = (
    /** @type {Effect} */
    K
  ), c = Ko(), s = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((m) => m.promise)) : null;
  function v(m) {
    c();
    try {
      n(m);
    } catch (w) {
      (d.f & tt) === 0 && Bt(w, d);
    }
    vn();
  }
  if (t.length === 0) {
    s.then(() => v(r.map(a)));
    return;
  }
  var g = Ka();
  function N() {
    Promise.all(t.map((m) => /* @__PURE__ */ Xo(m))).then((m) => v([...r.map(a), ...m])).catch((m) => Bt(m, d)).finally(() => g());
  }
  s ? s.then(() => {
    c(), N(), vn();
  }) : N();
}
function Ko() {
  var e = (
    /** @type {Effect} */
    K
  ), r = G, t = nt, n = (
    /** @type {Batch} */
    j
  );
  return function(o = !0) {
    yt(e), at(r), Ar(t), o && (e.f & tt) === 0 && (n?.activate(), n?.apply());
  };
}
function vn(e = !0) {
  yt(null), at(null), Ar(null), e && j?.deactivate();
}
function Ka() {
  var e = (
    /** @type {Effect} */
    K
  ), r = (
    /** @type {Boundary} */
    e.b
  ), t = (
    /** @type {Batch} */
    j
  ), n = r.is_rendered();
  return r.update_pending_count(1, t), t.increment(n, e), (a = !1) => {
    r.update_pending_count(-1, t), t.decrement(n, e, a);
  };
}
// @__NO_SIDE_EFFECTS__
function ea(e) {
  var r = Pe | Le;
  return K !== null && (K.f |= Or), {
    ctx: nt,
    deps: null,
    effects: null,
    equals: Da,
    f: r,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ne
    ),
    wv: 0,
    parent: K,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Xo(e, r, t) {
  let n = (
    /** @type {Effect | null} */
    K
  );
  n === null && vo();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = pr(
    /** @type {V} */
    Ne
  ), d = !G, c = /* @__PURE__ */ new Map();
  return ds(() => {
    var s = (
      /** @type {Effect} */
      K
    ), v = Pa();
    a = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(vn);
    } catch (w) {
      v.reject(w), vn();
    }
    var g = (
      /** @type {Batch} */
      j
    );
    if (d) {
      if ((s.f & hr) !== 0)
        var N = Ka();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        c.get(g)?.reject(Nt), c.delete(g);
      else {
        for (const w of c.values())
          w.reject(Nt);
        c.clear();
      }
      c.set(g, v);
    }
    const m = (w, S = void 0) => {
      if (N) {
        var B = S === Nt;
        N(B);
      }
      if (!(S === Nt || (s.f & tt) !== 0)) {
        if (g.activate(), S)
          o.f |= Ht, Nr(o, S);
        else {
          (o.f & Ht) !== 0 && (o.f ^= Ht), Nr(o, w);
          for (const [k, F] of c) {
            if (c.delete(k), k === g) break;
            F.reject(Nt);
          }
        }
        g.deactivate();
      }
    };
    v.promise.then(m, (w) => m(null, w || "unknown"));
  }), na(() => {
    for (const s of c.values())
      s.reject(Nt);
  }), new Promise((s) => {
    function v(g) {
      function N() {
        g === a ? s(o) : v(a);
      }
      g.then(N, N);
    }
    v(a);
  });
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  const r = /* @__PURE__ */ ea(e);
  return vi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Zo(e) {
  const r = /* @__PURE__ */ ea(e);
  return r.equals = Ia, r;
}
function Qo(e) {
  var r = e.effects;
  if (r !== null) {
    e.effects = null;
    for (var t = 0; t < r.length; t += 1)
      He(
        /** @type {Effect} */
        r[t]
      );
  }
}
function ta(e) {
  var r, t = K, n = e.parent;
  if (!Ut && n !== null && (n.f & (tt | Ie)) !== 0)
    return Lo(), e.v;
  yt(n);
  try {
    e.f &= ~vr, Qo(e), r = gi(e);
  } finally {
    yt(t);
  }
  return r;
}
function Xa(e) {
  var r = ta(e);
  if (!e.equals(r) && (e.wv = pi(), (!j?.is_fork || e.deps === null) && (j !== null ? j.capture(e, r, !0) : e.v = r, e.deps === null))) {
    me(e, Te);
    return;
  }
  Ut || (ft !== null ? (ra() || j?.is_fork) && ft.set(e, r) : Zn(e));
}
function $o(e) {
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && (r.teardown?.(), r.ac?.abort(Nt), r.teardown = so, r.ac = null, Hr(r, 0), ia(r));
}
function Za(e) {
  if (e.effects !== null)
    for (const r of e.effects)
      r.teardown && Mr(r);
}
let zn = /* @__PURE__ */ new Set();
const ur = /* @__PURE__ */ new Map();
let Qa = !1;
function pr(e, r) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Da,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function U(e, r) {
  const t = pr(e);
  return vi(t), t;
}
// @__NO_SIDE_EFFECTS__
function es(e, r = !1, t = !0) {
  const n = pr(e);
  return r || (n.equals = Ia), n;
}
function b(e, r, t = !1) {
  G !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ut || (G.f & jn) !== 0) && Va() && (G.f & (Pe | bt | Vr | jn)) !== 0 && (rt === null || !Er.call(rt, e)) && mo();
  let n = t ? ht(r) : r;
  return Nr(e, n, an);
}
function Nr(e, r, t = null) {
  if (!e.equals(r)) {
    ur.set(e, Ut ? r : e.v);
    var n = _r.ensure();
    if (n.capture(e, r), (e.f & Pe) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & Le) !== 0 && ta(a), ft === null && Zn(a);
    }
    e.wv = pi(), $a(e, Le, t), K !== null && (K.f & Te) !== 0 && (K.f & (dt | zt)) === 0 && (Ke === null ? vs([e]) : Ke.push(e)), !n.is_fork && zn.size > 0 && !Qa && ts();
  }
  return r;
}
function ts() {
  Qa = !1;
  for (const e of zn)
    (e.f & Te) !== 0 && me(e, xt), Xr(e) && Mr(e);
  zn.clear();
}
function jr(e) {
  b(e, e.v + 1);
}
function $a(e, r, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, o = 0; o < a; o++) {
      var d = n[o], c = d.f, s = (c & Le) === 0;
      if (s && me(d, r), (c & Pe) !== 0) {
        var v = (
          /** @type {Derived} */
          d
        );
        ft?.delete(v), (c & vr) === 0 && (c & et && (K === null || (K.f & cn) === 0) && (d.f |= vr), $a(v, xt, t));
      } else if (s) {
        var g = (
          /** @type {Effect} */
          d
        );
        (c & bt) !== 0 && At !== null && At.add(g), t !== null ? t.push(g) : $n(g);
      }
    }
}
function ht(e) {
  if (typeof e != "object" || e === null || Dr in e)
    return e;
  const r = oo(e);
  if (r !== ao && r !== io)
    return e;
  var t = /* @__PURE__ */ new Map(), n = Xn(e), a = /* @__PURE__ */ U(0), o = cr, d = (c) => {
    if (cr === o)
      return c();
    var s = G, v = cr;
    at(null), Aa(o);
    var g = c();
    return at(s), Aa(v), g;
  };
  return n && t.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, s, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && xo();
        var g = t.get(s);
        return g === void 0 ? d(() => {
          var N = /* @__PURE__ */ U(v.value);
          return t.set(s, N), N;
        }) : b(g, v.value, !0), !0;
      },
      deleteProperty(c, s) {
        var v = t.get(s);
        if (v === void 0) {
          if (s in c) {
            const g = d(() => /* @__PURE__ */ U(Ne));
            t.set(s, g), jr(a);
          }
        } else
          b(v, Ne), jr(a);
        return !0;
      },
      get(c, s, v) {
        if (s === Dr)
          return e;
        var g = t.get(s), N = s in c;
        if (g === void 0 && (!N || Fr(c, s)?.writable) && (g = d(() => {
          var w = ht(N ? c[s] : Ne), S = /* @__PURE__ */ U(w);
          return S;
        }), t.set(s, g)), g !== void 0) {
          var m = i(g);
          return m === Ne ? void 0 : m;
        }
        return Reflect.get(c, s, v);
      },
      getOwnPropertyDescriptor(c, s) {
        var v = Reflect.getOwnPropertyDescriptor(c, s);
        if (v && "value" in v) {
          var g = t.get(s);
          g && (v.value = i(g));
        } else if (v === void 0) {
          var N = t.get(s), m = N?.v;
          if (N !== void 0 && m !== Ne)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return v;
      },
      has(c, s) {
        if (s === Dr)
          return !0;
        var v = t.get(s), g = v !== void 0 && v.v !== Ne || Reflect.has(c, s);
        if (v !== void 0 || K !== null && (!g || Fr(c, s)?.writable)) {
          v === void 0 && (v = d(() => {
            var m = g ? ht(c[s]) : Ne, w = /* @__PURE__ */ U(m);
            return w;
          }), t.set(s, v));
          var N = i(v);
          if (N === Ne)
            return !1;
        }
        return g;
      },
      set(c, s, v, g) {
        var N = t.get(s), m = s in c;
        if (n && s === "length")
          for (var w = v; w < /** @type {Source<number>} */
          N.v; w += 1) {
            var S = t.get(w + "");
            S !== void 0 ? b(S, Ne) : w in c && (S = d(() => /* @__PURE__ */ U(Ne)), t.set(w + "", S));
          }
        if (N === void 0)
          (!m || Fr(c, s)?.writable) && (N = d(() => /* @__PURE__ */ U(void 0)), b(N, ht(v)), t.set(s, N));
        else {
          m = N.v !== Ne;
          var B = d(() => ht(v));
          b(N, B);
        }
        var k = Reflect.getOwnPropertyDescriptor(c, s);
        if (k?.set && k.set.call(g, v), !m) {
          if (n && typeof s == "string") {
            var F = (
              /** @type {Source<number>} */
              t.get("length")
            ), oe = Number(s);
            Number.isInteger(oe) && oe >= F.v && b(F, oe + 1);
          }
          jr(a);
        }
        return !0;
      },
      ownKeys(c) {
        i(a);
        var s = Reflect.ownKeys(c).filter((N) => {
          var m = t.get(N);
          return m === void 0 || m.v !== Ne;
        });
        for (var [v, g] of t)
          g.v !== Ne && !(v in c) && s.push(v);
        return s;
      },
      setPrototypeOf() {
        yo();
      }
    }
  );
}
function wa(e) {
  try {
    if (e !== null && typeof e == "object" && Dr in e)
      return e[Dr];
  } catch {
  }
  return e;
}
function rs(e, r) {
  return Object.is(wa(e), wa(r));
}
var Ea, ei, ti, ri;
function ns() {
  if (Ea === void 0) {
    Ea = window, ei = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, r = Node.prototype, t = Text.prototype;
    ti = Fr(r, "firstChild").get, ri = Fr(r, "nextSibling").get, xa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), xa(t) && (t.__t = void 0);
  }
}
function Jt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return (
    /** @type {TemplateNode | null} */
    ti.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return (
    /** @type {TemplateNode | null} */
    ri.call(e)
  );
}
function h(e, r) {
  return /* @__PURE__ */ Vt(e);
}
function Tt(e, r = !1) {
  {
    var t = /* @__PURE__ */ Vt(e);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Kr(t) : t;
  }
}
function x(e, r = 1, t = !1) {
  let n = e;
  for (; r--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Kr(n);
  return n;
}
function as(e) {
  e.textContent = "";
}
function ni() {
  return !1;
}
function ai(e, r, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(r ?? Fa, e, void 0)
  );
}
let Sa = !1;
function is() {
  Sa || (Sa = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            r.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function xn(e) {
  var r = G, t = K;
  at(null), yt(null);
  try {
    return e();
  } finally {
    at(r), yt(t);
  }
}
function ii(e, r, t, n = t) {
  e.addEventListener(r, () => xn(t));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), is();
}
function os(e) {
  K === null && (G === null && go(), ho()), Ut && po();
}
function ss(e, r) {
  var t = r.last;
  t === null ? r.last = r.first = e : (t.next = e, e.prev = t, r.last = e);
}
function Rt(e, r) {
  var t = K;
  t !== null && (t.f & Ie) !== 0 && (e |= Ie);
  var n = {
    ctx: nt,
    deps: null,
    nodes: null,
    f: e | Le | et,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: t,
    b: t && t.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  j?.register_created_effect(n);
  var a = n;
  if ((e & Sr) !== 0)
    br !== null ? br.push(n) : _r.ensure().schedule(n);
  else if (r !== null) {
    try {
      Mr(n);
    } catch (d) {
      throw He(n), d;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Or) === 0 && (a = a.first, (e & bt) !== 0 && (e & Tr) !== 0 && a !== null && (a.f |= Tr));
  }
  if (a !== null && (a.parent = t, t !== null && ss(a, t), G !== null && (G.f & Pe) !== 0 && (e & zt) === 0)) {
    var o = (
      /** @type {Derived} */
      G
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return n;
}
function ra() {
  return G !== null && !ut;
}
function na(e) {
  const r = Rt(bn, null);
  return me(r, Te), r.teardown = e, r;
}
function ls(e) {
  os();
  var r = (
    /** @type {Effect} */
    K.f
  ), t = !G && (r & dt) !== 0 && (r & hr) === 0;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      nt
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return oi(e);
}
function oi(e) {
  return Rt(Sr | co, e);
}
function fs(e) {
  _r.ensure();
  const r = Rt(zt | Or, e);
  return (t = {}) => new Promise((n) => {
    t.outro ? dr(r, () => {
      He(r), n(void 0);
    }) : (He(r), n(void 0));
  });
}
function us(e) {
  return Rt(Sr, e);
}
function ds(e) {
  return Rt(Vr | Or, e);
}
function si(e, r = 0) {
  return Rt(bn | r, e);
}
function P(e, r = [], t = [], n = []) {
  Go(n, r, t, (a) => {
    Rt(bn, () => e(...a.map(i)));
  });
}
function aa(e, r = 0) {
  var t = Rt(bt | r, e);
  return t;
}
function $e(e) {
  return Rt(dt | Or, e);
}
function li(e) {
  var r = e.teardown;
  if (r !== null) {
    const t = Ut, n = G;
    Ta(!0), at(null);
    try {
      r.call(null);
    } finally {
      Ta(t), at(n);
    }
  }
}
function ia(e, r = !1) {
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    const a = t.ac;
    a !== null && xn(() => {
      a.abort(Nt);
    });
    var n = t.next;
    (t.f & zt) !== 0 ? t.parent = null : He(t, r), t = n;
  }
}
function cs(e) {
  for (var r = e.first; r !== null; ) {
    var t = r.next;
    (r.f & dt) === 0 && He(r), r = t;
  }
}
function He(e, r = !0) {
  var t = !1;
  (r || (e.f & uo) !== 0) && e.nodes !== null && e.nodes.end !== null && (fi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), t = !0), me(e, ya), ia(e, r && !t), Hr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const o of n)
      o.stop();
  li(e), e.f ^= ya, e.f |= tt;
  var a = e.parent;
  a !== null && a.first !== null && ui(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function fi(e, r) {
  for (; e !== null; ) {
    var t = e === r ? null : /* @__PURE__ */ Kr(e);
    e.remove(), e = t;
  }
}
function ui(e) {
  var r = e.parent, t = e.prev, n = e.next;
  t !== null && (t.next = n), n !== null && (n.prev = t), r !== null && (r.first === e && (r.first = n), r.last === e && (r.last = t));
}
function dr(e, r, t = !0) {
  var n = [];
  di(e, n, !0);
  var a = () => {
    t && He(e), r && r();
  }, o = n.length;
  if (o > 0) {
    var d = () => --o || a();
    for (var c of n)
      c.out(d);
  } else
    a();
}
function di(e, r, t) {
  if ((e.f & Ie) === 0) {
    e.f ^= Ie;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const c of n)
        (c.is_global || t) && r.push(c);
    for (var a = e.first; a !== null; ) {
      var o = a.next;
      if ((a.f & zt) === 0) {
        var d = (a.f & Tr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & dt) !== 0 && (e.f & bt) !== 0;
        di(a, r, d ? t : !1);
      }
      a = o;
    }
  }
}
function oa(e) {
  ci(e, !0);
}
function ci(e, r) {
  if ((e.f & Ie) !== 0) {
    e.f ^= Ie, (e.f & Te) === 0 && (me(e, Le), _r.ensure().schedule(e));
    for (var t = e.first; t !== null; ) {
      var n = t.next, a = (t.f & Tr) !== 0 || (t.f & dt) !== 0;
      ci(t, a ? r : !1), t = n;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const d of o)
        (d.is_global || r) && d.in();
  }
}
function sa(e, r) {
  if (e.nodes)
    for (var t = e.nodes.start, n = e.nodes.end; t !== null; ) {
      var a = t === n ? null : /* @__PURE__ */ Kr(t);
      r.append(t), t = a;
    }
}
let dn = !1, Ut = !1;
function Ta(e) {
  Ut = e;
}
let G = null, ut = !1;
function at(e) {
  G = e;
}
let K = null;
function yt(e) {
  K = e;
}
let rt = null;
function vi(e) {
  G !== null && (rt === null ? rt = [e] : rt.push(e));
}
let Ve = null, ze = 0, Ke = null;
function vs(e) {
  Ke = e;
}
let _i = 1, nr = 0, cr = nr;
function Aa(e) {
  cr = e;
}
function pi() {
  return ++_i;
}
function Xr(e) {
  var r = e.f;
  if ((r & Le) !== 0)
    return !0;
  if (r & Pe && (e.f &= ~vr), (r & xt) !== 0) {
    for (var t = (
      /** @type {Value[]} */
      e.deps
    ), n = t.length, a = 0; a < n; a++) {
      var o = t[a];
      if (Xr(
        /** @type {Derived} */
        o
      ) && Xa(
        /** @type {Derived} */
        o
      ), o.wv > e.wv)
        return !0;
    }
    (r & et) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ft === null && me(e, Te);
  }
  return !1;
}
function hi(e, r, t = !0) {
  var n = e.reactions;
  if (n !== null && !(rt !== null && Er.call(rt, e)))
    for (var a = 0; a < n.length; a++) {
      var o = n[a];
      (o.f & Pe) !== 0 ? hi(
        /** @type {Derived} */
        o,
        r,
        !1
      ) : r === o && (t ? me(o, Le) : (o.f & Te) !== 0 && me(o, xt), $n(
        /** @type {Effect} */
        o
      ));
    }
}
function gi(e) {
  var B;
  var r = Ve, t = ze, n = Ke, a = G, o = rt, d = nt, c = ut, s = cr, v = e.f;
  Ve = /** @type {null | Value[]} */
  null, ze = 0, Ke = null, G = (v & (dt | zt)) === 0 ? e : null, rt = null, Ar(e.ctx), ut = !1, cr = ++nr, e.ac !== null && (xn(() => {
    e.ac.abort(Nt);
  }), e.ac = null);
  try {
    e.f |= cn;
    var g = (
      /** @type {Function} */
      e.fn
    ), N = g();
    e.f |= hr;
    var m = e.deps, w = j?.is_fork;
    if (Ve !== null) {
      var S;
      if (w || Hr(e, ze), m !== null && ze > 0)
        for (m.length = ze + Ve.length, S = 0; S < Ve.length; S++)
          m[ze + S] = Ve[S];
      else
        e.deps = m = Ve;
      if (ra() && (e.f & et) !== 0)
        for (S = ze; S < m.length; S++)
          ((B = m[S]).reactions ?? (B.reactions = [])).push(e);
    } else !w && m !== null && ze < m.length && (Hr(e, ze), m.length = ze);
    if (Va() && Ke !== null && !ut && m !== null && (e.f & (Pe | xt | Le)) === 0)
      for (S = 0; S < /** @type {Source[]} */
      Ke.length; S++)
        hi(
          Ke[S],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (nr++, a.deps !== null)
        for (let k = 0; k < t; k += 1)
          a.deps[k].rv = nr;
      if (r !== null)
        for (const k of r)
          k.rv = nr;
      Ke !== null && (n === null ? n = Ke : n.push(.../** @type {Source[]} */
      Ke));
    }
    return (e.f & Ht) !== 0 && (e.f ^= Ht), N;
  } catch (k) {
    return qa(k);
  } finally {
    e.f ^= cn, Ve = r, ze = t, Ke = n, G = a, rt = o, Ar(d), ut = c, cr = s;
  }
}
function _s(e, r) {
  let t = r.reactions;
  if (t !== null) {
    var n = ro.call(t, e);
    if (n !== -1) {
      var a = t.length - 1;
      a === 0 ? t = r.reactions = null : (t[n] = t[a], t.pop());
    }
  }
  if (t === null && (r.f & Pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ve === null || !Er.call(Ve, r))) {
    var o = (
      /** @type {Derived} */
      r
    );
    (o.f & et) !== 0 && (o.f ^= et, o.f &= ~vr), o.v !== Ne && Zn(o), $o(o), Hr(o, 0);
  }
}
function Hr(e, r) {
  var t = e.deps;
  if (t !== null)
    for (var n = r; n < t.length; n++)
      _s(e, t[n]);
}
function Mr(e) {
  var r = e.f;
  if ((r & tt) === 0) {
    me(e, Te);
    var t = K, n = dn;
    K = e, dn = !0;
    try {
      (r & (bt | Ra)) !== 0 ? cs(e) : ia(e), li(e);
      var a = gi(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = _i;
      var o;
    } finally {
      dn = n, K = t;
    }
  }
}
async function ps() {
  await Promise.resolve(), Bo();
}
function i(e) {
  var r = e.f, t = (r & Pe) !== 0;
  if (G !== null && !ut) {
    var n = K !== null && (K.f & tt) !== 0;
    if (!n && (rt === null || !Er.call(rt, e))) {
      var a = G.deps;
      if ((G.f & cn) !== 0)
        e.rv < nr && (e.rv = nr, Ve === null && a !== null && a[ze] === e ? ze++ : Ve === null ? Ve = [e] : Ve.push(e));
      else {
        (G.deps ?? (G.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [G] : Er.call(o, G) || o.push(G);
      }
    }
  }
  if (Ut && ur.has(e))
    return ur.get(e);
  if (t) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (Ut) {
      var c = d.v;
      return ((d.f & Te) === 0 && d.reactions !== null || xi(d)) && (c = ta(d)), ur.set(d, c), c;
    }
    var s = (d.f & et) === 0 && !ut && G !== null && (dn || (G.f & et) !== 0), v = (d.f & hr) === 0;
    Xr(d) && (s && (d.f |= et), Xa(d)), s && !v && (Za(d), bi(d));
  }
  if (ft?.has(e))
    return ft.get(e);
  if ((e.f & Ht) !== 0)
    throw e.v;
  return e.v;
}
function bi(e) {
  if (e.f |= et, e.deps !== null)
    for (const r of e.deps)
      (r.reactions ?? (r.reactions = [])).push(e), (r.f & Pe) !== 0 && (r.f & et) === 0 && (Za(
        /** @type {Derived} */
        r
      ), bi(
        /** @type {Derived} */
        r
      ));
}
function xi(e) {
  if (e.v === Ne) return !0;
  if (e.deps === null) return !1;
  for (const r of e.deps)
    if (ur.has(r) || (r.f & Pe) !== 0 && xi(
      /** @type {Derived} */
      r
    ))
      return !0;
  return !1;
}
function yi(e) {
  var r = ut;
  try {
    return ut = !0, e();
  } finally {
    ut = r;
  }
}
const hs = ["touchstart", "touchmove"];
function gs(e) {
  return hs.includes(e);
}
const ar = Symbol("events"), mi = /* @__PURE__ */ new Set(), Un = /* @__PURE__ */ new Set();
function bs(e, r, t, n = {}) {
  function a(o) {
    if (n.capture || Wn.call(r, o), !o.cancelBubble)
      return xn(() => t?.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? qt(() => {
    r.addEventListener(e, a, n);
  }) : r.addEventListener(e, a, n), a;
}
function Na(e, r, t, n, a) {
  var o = { capture: n, passive: a }, d = bs(e, r, t, o);
  (r === document.body || // @ts-ignore
  r === window || // @ts-ignore
  r === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  r instanceof HTMLMediaElement) && na(() => {
    r.removeEventListener(e, d, o);
  });
}
function Fe(e, r, t) {
  (r[ar] ?? (r[ar] = {}))[e] = t;
}
function xs(e) {
  for (var r = 0; r < e.length; r++)
    mi.add(e[r]);
  for (var t of Un)
    t(e);
}
let Ma = null;
function Wn(e) {
  var r = this, t = (
    /** @type {Node} */
    r.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Ma = e;
  var d = 0, c = Ma === e && e[ar];
  if (c) {
    var s = a.indexOf(c);
    if (s !== -1 && (r === document || r === /** @type {any} */
    window)) {
      e[ar] = r;
      return;
    }
    var v = a.indexOf(r);
    if (v === -1)
      return;
    s <= v && (d = s);
  }
  if (o = /** @type {Element} */
  a[d] || e.target, o !== r) {
    no(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || t;
      }
    });
    var g = G, N = K;
    at(null), yt(null);
    try {
      for (var m, w = []; o !== null; ) {
        var S = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var B = o[ar]?.[n];
          B != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && B.call(o, e);
        } catch (k) {
          m ? w.push(k) : m = k;
        }
        if (e.cancelBubble || S === r || S === null)
          break;
        o = S;
      }
      if (m) {
        for (let k of w)
          queueMicrotask(() => {
            throw k;
          });
        throw m;
      }
    } finally {
      e[ar] = r, delete e.currentTarget, at(g), yt(N);
    }
  }
}
const ys = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ms(e) {
  return (
    /** @type {string} */
    ys?.createHTML(e) ?? e
  );
}
function ks(e) {
  var r = ai("template");
  return r.innerHTML = ms(e.replaceAll("<!>", "<!---->")), r.content;
}
function qr(e, r) {
  var t = (
    /** @type {Effect} */
    K
  );
  t.nodes === null && (t.nodes = { start: e, end: r, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function R(e, r) {
  var t = (r & Ao) !== 0, n = (r & No) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = ks(o ? e : "<!>" + e), t || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Vt(a)));
    var d = (
      /** @type {TemplateNode} */
      n || ei ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (t) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vt(d)
      ), s = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      qr(c, s);
    } else
      qr(d, d);
    return d;
  };
}
function er() {
  var e = document.createDocumentFragment(), r = document.createComment(""), t = Jt();
  return e.append(r, t), qr(r, t), e;
}
function M(e, r) {
  e !== null && e.before(
    /** @type {Node} */
    r
  );
}
function I(e, r) {
  var t = r == null ? "" : typeof r == "object" ? `${r}` : r;
  t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = `${t}`);
}
function ws(e, r) {
  return Es(e, r);
}
const nn = /* @__PURE__ */ new Map();
function Es(e, { target: r, anchor: t, props: n = {}, events: a, context: o, intro: d = !0, transformError: c }) {
  ns();
  var s = void 0, v = fs(() => {
    var g = t ?? r.appendChild(Jt());
    Jo(
      /** @type {TemplateNode} */
      g,
      {
        pending: () => {
        }
      },
      (w) => {
        ja({});
        var S = (
          /** @type {ComponentContext} */
          nt
        );
        o && (S.c = o), a && (n.$$events = a), s = e(w, n) || {}, Ba();
      },
      c
    );
    var N = /* @__PURE__ */ new Set(), m = (w) => {
      for (var S = 0; S < w.length; S++) {
        var B = w[S];
        if (!N.has(B)) {
          N.add(B);
          var k = gs(B);
          for (const de of [r, document]) {
            var F = nn.get(de);
            F === void 0 && (F = /* @__PURE__ */ new Map(), nn.set(de, F));
            var oe = F.get(B);
            oe === void 0 ? (de.addEventListener(B, Wn, { passive: k }), F.set(B, 1)) : F.set(B, oe + 1);
          }
        }
      }
    };
    return m(gn(mi)), Un.add(m), () => {
      for (var w of N)
        for (const k of [r, document]) {
          var S = (
            /** @type {Map<string, number>} */
            nn.get(k)
          ), B = (
            /** @type {number} */
            S.get(w)
          );
          --B == 0 ? (k.removeEventListener(w, Wn), S.delete(w), S.size === 0 && nn.delete(k)) : S.set(w, B);
        }
      Un.delete(m), g !== t && g.parentNode?.removeChild(g);
    };
  });
  return Yn.set(s, v), s;
}
let Yn = /* @__PURE__ */ new WeakMap();
function Ss(e, r) {
  const t = Yn.get(e);
  return t ? (Yn.delete(e), t(r)) : Promise.resolve();
}
var lt, pt, Ye, fr, Yr, Gr, hn;
class Ts {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(r, t = !0) {
    /** @type {TemplateNode} */
    ot(this, "anchor");
    /** @type {Map<Batch, Key>} */
    H(this, lt, /* @__PURE__ */ new Map());
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
    H(this, pt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    H(this, Ye, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    H(this, fr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    H(this, Yr, !0);
    /**
     * @param {Batch} batch
     */
    H(this, Gr, (r) => {
      if (l(this, lt).has(r)) {
        var t = (
          /** @type {Key} */
          l(this, lt).get(r)
        ), n = l(this, pt).get(t);
        if (n)
          oa(n), l(this, fr).delete(t);
        else {
          var a = l(this, Ye).get(t);
          a && (l(this, pt).set(t, a.effect), l(this, Ye).delete(t), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [o, d] of l(this, lt)) {
          if (l(this, lt).delete(o), o === r)
            break;
          const c = l(this, Ye).get(d);
          c && (He(c.effect), l(this, Ye).delete(d));
        }
        for (const [o, d] of l(this, pt)) {
          if (o === t || l(this, fr).has(o)) continue;
          const c = () => {
            if (Array.from(l(this, lt).values()).includes(o)) {
              var v = document.createDocumentFragment();
              sa(d, v), v.append(Jt()), l(this, Ye).set(o, { effect: d, fragment: v });
            } else
              He(d);
            l(this, fr).delete(o), l(this, pt).delete(o);
          };
          l(this, Yr) || !n ? (l(this, fr).add(o), dr(d, c, !1)) : c();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, hn, (r) => {
      l(this, lt).delete(r);
      const t = Array.from(l(this, lt).values());
      for (const [n, a] of l(this, Ye))
        t.includes(n) || (He(a.effect), l(this, Ye).delete(n));
    });
    this.anchor = r, W(this, Yr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(r, t) {
    var n = (
      /** @type {Batch} */
      j
    ), a = ni();
    if (t && !l(this, pt).has(r) && !l(this, Ye).has(r))
      if (a) {
        var o = document.createDocumentFragment(), d = Jt();
        o.append(d), l(this, Ye).set(r, {
          effect: $e(() => t(d)),
          fragment: o
        });
      } else
        l(this, pt).set(
          r,
          $e(() => t(this.anchor))
        );
    if (l(this, lt).set(n, r), a) {
      for (const [c, s] of l(this, pt))
        c === r ? n.unskip_effect(s) : n.skip_effect(s);
      for (const [c, s] of l(this, Ye))
        c === r ? n.unskip_effect(s.effect) : n.skip_effect(s.effect);
      n.oncommit(l(this, Gr)), n.ondiscard(l(this, hn));
    } else
      l(this, Gr).call(this, n);
  }
}
lt = new WeakMap(), pt = new WeakMap(), Ye = new WeakMap(), fr = new WeakMap(), Yr = new WeakMap(), Gr = new WeakMap(), hn = new WeakMap();
function ee(e, r, t = !1) {
  var n = new Ts(e), a = t ? Tr : 0;
  function o(d, c) {
    n.ensure(d, c);
  }
  aa(() => {
    var d = !1;
    r((c, s = 0) => {
      d = !0, o(s, c);
    }), d || o(-1, null);
  }, a);
}
function ct(e, r) {
  return r;
}
function As(e, r, t) {
  for (var n = [], a = r.length, o, d = r.length, c = 0; c < a; c++) {
    let N = r[c];
    dr(
      N,
      () => {
        if (o) {
          if (o.pending.delete(N), o.done.add(N), o.pending.size === 0) {
            var m = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Gn(e, gn(o.done)), m.delete(o), m.size === 0 && (e.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var s = n.length === 0 && t !== null;
    if (s) {
      var v = (
        /** @type {Element} */
        t
      ), g = (
        /** @type {Element} */
        v.parentNode
      );
      as(g), g.append(v), e.items.clear();
    }
    Gn(e, r, !s);
  } else
    o = {
      pending: new Set(r),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function Gn(e, r, t = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const d of e.pending.values())
      for (const c of d)
        n.add(
          /** @type {EachItem} */
          e.items.get(c).e
        );
  }
  for (var a = 0; a < r.length; a++) {
    var o = r[a];
    if (n?.has(o)) {
      o.f |= gt;
      const d = document.createDocumentFragment();
      sa(o, d);
    } else
      He(r[a], t);
  }
}
var Oa;
function st(e, r, t, n, a, o = null) {
  var d = e, c = /* @__PURE__ */ new Map(), s = (r & Ca) !== 0;
  if (s) {
    var v = (
      /** @type {Element} */
      e
    );
    d = v.appendChild(Jt());
  }
  var g = null, N = /* @__PURE__ */ Zo(() => {
    var de = t();
    return Xn(de) ? de : de == null ? [] : gn(de);
  }), m, w = /* @__PURE__ */ new Map(), S = !0;
  function B(de) {
    (oe.effect.f & tt) === 0 && (oe.pending.delete(de), oe.fallback = g, Ns(oe, m, d, r, n), g !== null && (m.length === 0 ? (g.f & gt) === 0 ? oa(g) : (g.f ^= gt, Cr(g, null, d)) : dr(g, () => {
      g = null;
    })));
  }
  function k(de) {
    oe.pending.delete(de);
  }
  var F = aa(() => {
    m = /** @type {V[]} */
    i(N);
    for (var de = m.length, xe = /* @__PURE__ */ new Set(), Oe = (
      /** @type {Batch} */
      j
    ), Ge = ni(), pe = 0; pe < de; pe += 1) {
      var je = m[pe], qe = n(je, pe), he = S ? null : c.get(qe);
      he ? (he.v && Nr(he.v, je), he.i && Nr(he.i, pe), Ge && Oe.unskip_effect(he.e)) : (he = Ms(
        c,
        S ? d : Oa ?? (Oa = Jt()),
        je,
        qe,
        pe,
        a,
        r,
        t
      ), S || (he.e.f |= gt), c.set(qe, he)), xe.add(qe);
    }
    if (de === 0 && o && !g && (S ? g = $e(() => o(d)) : (g = $e(() => o(Oa ?? (Oa = Jt()))), g.f |= gt)), de > xe.size && _o(), !S)
      if (w.set(Oe, xe), Ge) {
        for (const [Wt, mt] of c)
          xe.has(Wt) || Oe.skip_effect(mt.e);
        Oe.oncommit(B), Oe.ondiscard(k);
      } else
        B(Oe);
    i(N);
  }), oe = { effect: F, items: c, pending: w, outrogroups: null, fallback: g };
  S = !1;
}
function Rr(e) {
  for (; e !== null && (e.f & dt) === 0; )
    e = e.next;
  return e;
}
function Ns(e, r, t, n, a) {
  var o = (n & So) !== 0, d = r.length, c = e.items, s = Rr(e.effect.first), v, g = null, N, m = [], w = [], S, B, k, F;
  if (o)
    for (F = 0; F < d; F += 1)
      S = r[F], B = a(S, F), k = /** @type {EachItem} */
      c.get(B).e, (k.f & gt) === 0 && (k.nodes?.a?.measure(), (N ?? (N = /* @__PURE__ */ new Set())).add(k));
  for (F = 0; F < d; F += 1) {
    if (S = r[F], B = a(S, F), k = /** @type {EachItem} */
    c.get(B).e, e.outrogroups !== null)
      for (const he of e.outrogroups)
        he.pending.delete(k), he.done.delete(k);
    if ((k.f & Ie) !== 0 && (oa(k), o && (k.nodes?.a?.unfix(), (N ?? (N = /* @__PURE__ */ new Set())).delete(k))), (k.f & gt) !== 0)
      if (k.f ^= gt, k === s)
        Cr(k, null, t);
      else {
        var oe = g ? g.next : s;
        k === e.effect.last && (e.effect.last = k.prev), k.prev && (k.prev.next = k.next), k.next && (k.next.prev = k.prev), Dt(e, g, k), Dt(e, k, oe), Cr(k, oe, t), g = k, m = [], w = [], s = Rr(g.next);
        continue;
      }
    if (k !== s) {
      if (v !== void 0 && v.has(k)) {
        if (m.length < w.length) {
          var de = w[0], xe;
          g = de.prev;
          var Oe = m[0], Ge = m[m.length - 1];
          for (xe = 0; xe < m.length; xe += 1)
            Cr(m[xe], de, t);
          for (xe = 0; xe < w.length; xe += 1)
            v.delete(w[xe]);
          Dt(e, Oe.prev, Ge.next), Dt(e, g, Oe), Dt(e, Ge, de), s = de, g = Ge, F -= 1, m = [], w = [];
        } else
          v.delete(k), Cr(k, s, t), Dt(e, k.prev, k.next), Dt(e, k, g === null ? e.effect.first : g.next), Dt(e, g, k), g = k;
        continue;
      }
      for (m = [], w = []; s !== null && s !== k; )
        (v ?? (v = /* @__PURE__ */ new Set())).add(s), w.push(s), s = Rr(s.next);
      if (s === null)
        continue;
    }
    (k.f & gt) === 0 && m.push(k), g = k, s = Rr(k.next);
  }
  if (e.outrogroups !== null) {
    for (const he of e.outrogroups)
      he.pending.size === 0 && (Gn(e, gn(he.done)), e.outrogroups?.delete(he));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || v !== void 0) {
    var pe = [];
    if (v !== void 0)
      for (k of v)
        (k.f & Ie) === 0 && pe.push(k);
    for (; s !== null; )
      (s.f & Ie) === 0 && s !== e.fallback && pe.push(s), s = Rr(s.next);
    var je = pe.length;
    if (je > 0) {
      var qe = (n & Ca) !== 0 && d === 0 ? t : null;
      if (o) {
        for (F = 0; F < je; F += 1)
          pe[F].nodes?.a?.measure();
        for (F = 0; F < je; F += 1)
          pe[F].nodes?.a?.fix();
      }
      As(e, pe, qe);
    }
  }
  o && qt(() => {
    if (N !== void 0)
      for (k of N)
        k.nodes?.a?.apply();
  });
}
function Ms(e, r, t, n, a, o, d, c) {
  var s = (d & wo) !== 0 ? (d & To) === 0 ? /* @__PURE__ */ es(t, !1, !1) : pr(t) : null, v = (d & Eo) !== 0 ? pr(a) : null;
  return {
    v: s,
    i: v,
    e: $e(() => (o(r, s ?? t, v ?? a, c), () => {
      e.delete(n);
    }))
  };
}
function Cr(e, r, t) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, o = r && (r.f & gt) === 0 ? (
      /** @type {EffectNodes} */
      r.nodes.start
    ) : t; n !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kr(n)
      );
      if (o.before(n), n === a)
        return;
      n = d;
    }
}
function Dt(e, r, t) {
  r === null ? e.effect.first = t : r.next = t, t === null ? e.effect.last = r : t.prev = r;
}
function Cn(e, r, t = !1, n = !1, a = !1, o = !1) {
  var d = e, c = "";
  if (t)
    var s = (
      /** @type {Element} */
      e
    );
  P(() => {
    var v = (
      /** @type {Effect} */
      K
    );
    if (c !== (c = r() ?? "")) {
      if (t) {
        v.nodes = null, s.innerHTML = /** @type {string} */
        c, c !== "" && qr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Vt(s),
          /** @type {TemplateNode} */
          s.lastChild
        );
        return;
      }
      if (v.nodes !== null && (fi(
        v.nodes.start,
        /** @type {TemplateNode} */
        v.nodes.end
      ), v.nodes = null), c !== "") {
        var g = n ? Mo : a ? Oo : void 0, N = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          ai(n ? "svg" : a ? "math" : "template", g)
        );
        N.innerHTML = /** @type {any} */
        c;
        var m = n || a ? N : (
          /** @type {HTMLTemplateElement} */
          N.content
        );
        if (qr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Vt(m),
          /** @type {TemplateNode} */
          m.lastChild
        ), n || a)
          for (; /* @__PURE__ */ Vt(m); )
            d.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Vt(m)
            );
        else
          d.before(m);
      }
    }
  });
}
function ki(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (r = 0; r < a; r++) e[r] && (t = ki(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Os() {
  for (var e, r, t = 0, n = "", a = arguments.length; t < a; t++) (e = arguments[t]) && (r = ki(e)) && (n && (n += " "), n += r);
  return n;
}
function f(e) {
  return typeof e == "object" ? Os(e) : e ?? "";
}
function Ls(e, r, t) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function u(e, r, t, n, a, o) {
  var d = e.__className;
  if (d !== t || d === void 0) {
    var c = Ls(t);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = t;
  }
  return o;
}
function wi(e, r, t = !1) {
  if (e.multiple) {
    if (r == null)
      return;
    if (!Xn(r))
      return Po();
    for (var n of e.options)
      n.selected = r.includes(Br(n));
    return;
  }
  for (n of e.options) {
    var a = Br(n);
    if (rs(a, r)) {
      n.selected = !0;
      return;
    }
  }
  (!t || r !== void 0) && (e.selectedIndex = -1);
}
function Ps(e) {
  var r = new MutationObserver(() => {
    wi(e, e.__value);
  });
  r.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), na(() => {
    r.disconnect();
  });
}
function Rs(e, r, t = r) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  ii(e, "change", (o) => {
    var d = o ? "[selected]" : ":checked", c;
    if (e.multiple)
      c = [].map.call(e.querySelectorAll(d), Br);
    else {
      var s = e.querySelector(d) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      c = s && Br(s);
    }
    t(c), e.__value = c, j !== null && n.add(j);
  }), us(() => {
    var o = r();
    if (e === document.activeElement) {
      var d = (
        /** @type {Batch} */
        j
      );
      if (n.has(d))
        return;
    }
    if (wi(e, o, a), a && o === void 0) {
      var c = e.querySelector(":checked");
      c !== null && (o = Br(c), t(o));
    }
    e.__value = o, a = !1;
  }), Ps(e);
}
function Br(e) {
  return "__value" in e ? e.__value : e.value;
}
const Cs = Symbol("is custom element"), Fs = Symbol("is html");
function Ds(e, r) {
  var t = Is(e);
  t.checked !== (t.checked = // treat null and undefined the same for the initial value
  r ?? void 0) && (e.checked = r);
}
function Is(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Cs]: e.nodeName.includes("-"),
      [Fs]: e.namespaceURI === Fa
    })
  );
}
function tr(e, r, t = r) {
  var n = /* @__PURE__ */ new WeakSet();
  ii(e, "input", async (a) => {
    var o = a ? e.defaultValue : e.value;
    if (o = Fn(e) ? Dn(o) : o, t(o), j !== null && n.add(j), await ps(), o !== (o = r())) {
      var d = e.selectionStart, c = e.selectionEnd, s = e.value.length;
      if (e.value = o ?? "", c !== null) {
        var v = e.value.length;
        d === c && c === s && v > s ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = d, e.selectionEnd = Math.min(c, v));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  yi(r) == null && e.value && (t(Fn(e) ? Dn(e.value) : e.value), j !== null && n.add(j)), si(() => {
    var a = r();
    if (e === document.activeElement) {
      var o = (
        /** @type {Batch} */
        j
      );
      if (n.has(o))
        return;
    }
    Fn(e) && a === Dn(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function Fn(e) {
  var r = e.type;
  return r === "number" || r === "range";
}
function Dn(e) {
  return e === "" ? null : +e;
}
const js = "5";
var La;
typeof window < "u" && ((La = window.__svelte ?? (window.__svelte = {})).v ?? (La.v = /* @__PURE__ */ new Set())).add(js);
var Bs = /* @__PURE__ */ R("<div><span> </span> <div><div> </div> <div> </div></div></div>"), Vs = /* @__PURE__ */ R("<p>Select at least one token to view balances</p>"), Hs = /* @__PURE__ */ R("<div><h3>Vault Balances</h3> <div><!> <!></div> <p>On-chain ledger balances for the vault canister</p></div>"), qs = /* @__PURE__ */ R("<span>Copied!</span>"), Js = /* @__PURE__ */ R("<div><span>Last Refresh:</span> <span> </span></div>"), zs = /* @__PURE__ */ R('<label><input type="checkbox"/> <span> </span></label>'), Us = /* @__PURE__ */ R("<div><h3>Active Tokens</h3> <div></div></div>"), Ws = /* @__PURE__ */ R("<div><div> </div> <div><span>Ledger:</span> <button> </button></div> <div><span>Indexer:</span> <button> </button></div></div>"), Ys = /* @__PURE__ */ R("<div><h3>Ledger Canisters</h3> <div></div></div>"), Gs = /* @__PURE__ */ R("<div> </div>"), Ks = /* @__PURE__ */ R("<button> </button>"), Xs = /* @__PURE__ */ R("<div><span> </span> <div><div> </div> <div> </div></div></div>"), Zs = /* @__PURE__ */ R("<p>Select at least one token to view balances</p>"), Qs = /* @__PURE__ */ R("<div><p><span>Principal:</span> <span> </span></p></div>"), $s = /* @__PURE__ */ R("<p> </p>"), el = /* @__PURE__ */ R("<div><h2>Your Balance</h2> <div><!> <!></div> <!> <!></div>"), tl = /* @__PURE__ */ R("<span>✓</span>"), rl = /* @__PURE__ */ R("<button> </button> <!>", 1), nl = /* @__PURE__ */ R("<span>N/A</span>"), al = /* @__PURE__ */ R("<span>✓</span>"), il = /* @__PURE__ */ R("<button> </button> <!>", 1), ol = /* @__PURE__ */ R("<span>N/A</span>"), sl = /* @__PURE__ */ R("<button> </button>"), ll = /* @__PURE__ */ R("<span>N/A</span>"), fl = /* @__PURE__ */ R("<tr><td> </td><td><span> </span></td><td><!></td><td><!></td><td> </td><td><!></td><td><span> </span></td></tr>"), ul = /* @__PURE__ */ R('<tr><td colspan="7">No transactions found</td></tr>'), dl = /* @__PURE__ */ R("<span>…</span>"), cl = /* @__PURE__ */ R("<button> </button>"), vl = /* @__PURE__ */ R("<div><span> </span> <div><button>Prev</button> <!> <button>Next</button></div></div>"), _l = /* @__PURE__ */ R("<div><h2>Transaction History</h2> <div><table><thead><tr><th>ID</th><th>Token</th><th>From</th><th>To</th><th>Amount</th><th>When</th><th>Type</th></tr></thead><tbody></tbody></table></div> <!></div>"), pl = /* @__PURE__ */ R("<option> </option>"), hl = /* @__PURE__ */ R('<div><h2>Transfer Tokens (Admin Only)</h2> <form><div><label for="v-token">Token</label> <select id="v-token"></select></div> <div><label for="v-to">Recipient Principal</label> <input id="v-to" type="text" placeholder="xxxxx-xxxxx-xxxxx-xxxxx-xxx"/></div> <div><label for="v-amount"> </label> <input id="v-amount" type="number" placeholder="100000000"/></div> <div><label for="v-to-sub">To Subaccount (optional, 64-char hex)</label> <input id="v-to-sub" type="text" placeholder="0000000000000000000000000000000000000000000000000000000000000000"/></div> <div><label for="v-from-sub">From Subaccount (optional, 64-char hex)</label> <input id="v-from-sub" type="text" placeholder="0000000000000000000000000000000000000000000000000000000000000000"/></div> <button type="submit"> </button></form></div>'), gl = /* @__PURE__ */ R("<button> </button>"), bl = /* @__PURE__ */ R('<input type="text" placeholder="Enter principal ID"/>'), xl = /* @__PURE__ */ R('<input type="text" placeholder="Enter invoice ID"/>'), yl = /* @__PURE__ */ R('<input type="text" placeholder="Enter 64-char hex subaccount"/>'), ml = /* @__PURE__ */ R("<div><span> </span> <div><div> </div> <div> </div></div></div>"), kl = /* @__PURE__ */ R("<p>No balances found for this subaccount.</p>"), wl = /* @__PURE__ */ R("<div><div><div><span>Account:</span> <span> </span></div> <button> </button></div> <div></div> <!></div>"), El = /* @__PURE__ */ R(`<div><h2>Subaccount Lookup</h2> <p>Look up token balances for a user (by principal) or an invoice (by ID).
					The subaccount is derived using the <code>usr_</code> / <code>inv_</code> prefix convention.</p> <div></div> <form><!> <button type="submit"><!> </button></form> <!></div>`), Sl = /* @__PURE__ */ R("<div> </div>"), Tl = /* @__PURE__ */ R("<div><div> </div> <div> </div> <!></div>"), Al = /* @__PURE__ */ R("<div></div>"), Nl = /* @__PURE__ */ R("<p>No balances found in system</p>"), Ml = /* @__PURE__ */ R("<p> </p>"), Ol = /* @__PURE__ */ R("<p>No transfer data available</p>"), Ll = /* @__PURE__ */ R("<div><h2>Vault Admin</h2> <div><button><!> </button></div> <div><div><h3> </h3> <!></div> <div><h3>All Transfers in System</h3> <!></div></div></div>"), Pl = /* @__PURE__ */ R("<div><div><h1>Vault</h1> <button><!> </button></div> <!> <div><div><span>Vault Principal:</span> <button> </button> <!></div> <!></div> <!> <!> <!> <nav></nav> <div><!></div></div>");
function Rl(e, r) {
  ja(r, !0);
  const t = r.ctx.theme?.cn ?? ((..._) => _.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ U("balance"), a = /* @__PURE__ */ U(!1), o = /* @__PURE__ */ U(""), d = /* @__PURE__ */ U(""), c = /* @__PURE__ */ U(""), s = /* @__PURE__ */ U(ht({})), v = /* @__PURE__ */ U(ht({})), g = /* @__PURE__ */ U(ht({})), N = /* @__PURE__ */ U(!1), m = /* @__PURE__ */ U(0), w = /* @__PURE__ */ U(null), S = /* @__PURE__ */ U(ht([])), B = /* @__PURE__ */ U(null), k = /* @__PURE__ */ U(ht([])), F = /* @__PURE__ */ U(null), oe = /* @__PURE__ */ U(0);
  const de = 10;
  let xe = /* @__PURE__ */ U(!1), Oe = /* @__PURE__ */ U(null), Ge = /* @__PURE__ */ U(""), pe = /* @__PURE__ */ U(""), je = /* @__PURE__ */ U(""), qe = /* @__PURE__ */ U(0), he = /* @__PURE__ */ U(""), Wt = /* @__PURE__ */ U(""), mt = /* @__PURE__ */ U("user"), Zr = /* @__PURE__ */ U(""), Qr = /* @__PURE__ */ U(""), $r = /* @__PURE__ */ U(""), kt = /* @__PURE__ */ U(null), Yt = /* @__PURE__ */ U(!1), Ct = /* @__PURE__ */ $t(() => Object.keys(i(s))), yn = /* @__PURE__ */ $t(() => Object.values(i(v)).some(Boolean));
  function Ft(_) {
    return typeof _ == "string" ? JSON.parse(_) : _;
  }
  async function Gt(_) {
    try {
      await navigator.clipboard.writeText(_), b(Ge, _, !0), setTimeout(() => b(Ge, ""), 2e3);
    } catch {
    }
  }
  function la(_) {
    const p = Math.floor((Date.now() - _.getTime()) / 1e3);
    if (p < 60) return `${p}s ago`;
    const E = Math.floor(p / 60);
    if (E < 60) return `${E}m ago`;
    const y = Math.floor(E / 60);
    return y < 24 ? `${y}h ago` : `${Math.floor(y / 24)}d ago`;
  }
  function Ei(_) {
    const p = String(_);
    if (p.includes("T") || p.includes("-") || p.includes(":")) return new Date(p);
    try {
      return new Date(Number(BigInt(p) / BigInt(1e6)));
    } catch {
      return /* @__PURE__ */ new Date();
    }
  }
  function mn(_, p) {
    return (_ / Math.pow(10, p)).toFixed(p);
  }
  function fa(_, p = 20) {
    return _.length > p ? `${_.substring(0, p)}…` : _;
  }
  async function Si() {
    try {
      const _ = await r.ctx.backend.get_objects_paginated("Token", 0, 100, "asc"), p = Ft(_);
      if (p?.success && p?.data?.objectsListPaginated) {
        const E = p.data.objectsListPaginated.objects.map((D) => JSON.parse(D)), y = {}, V = {}, J = {};
        for (const D of E) {
          const Q = D.enabled ?? D._prop_enabled ?? "true", Y = D.symbol ?? D._prop_symbol ?? D.name, ne = D.ledger_canister_id ?? D.ledger ?? "", z = D.indexer_canister_id ?? D.indexer ?? "";
          Q === "true" && Y && (y[Y] = {
            ledger: ne,
            indexer: z,
            decimals: D.decimals || 8,
            symbol: Y,
            name: D.name
          }, V[Y] = !0, J[Y] = 0);
        }
        b(s, y, !0), b(v, V, !0), b(g, J, !0);
        const X = Object.keys(y);
        X.length > 0 && !i(pe) && b(pe, X[0], !0), b(N, !0);
      }
    } catch (_) {
      console.error("Failed to load tokens:", _);
    }
  }
  async function kn() {
    b(a, !0), b(o, "");
    try {
      i(d) || b(d, r.ctx.principal || "", !0);
      const _ = await r.ctx.backend.get_objects_paginated("WalletBalance", 0, 100, "asc"), p = Ft(_);
      if (p?.success && p?.data?.objectsListPaginated) {
        const E = p.data.objectsListPaginated;
        b(B, E.pagination, !0), b(S, E.objects.map((y) => JSON.parse(y)), !0), b(w, i(S).find((y) => y.principal === i(d) || y.id === i(d) || y._id === i(d)), !0), b(m, i(w) && i(w).amount || 0, !0);
      } else
        b(m, 0), b(w, null);
    } catch (_) {
      b(o, _?.message || "Failed to load balance", !0);
    } finally {
      b(a, !1);
    }
  }
  async function en(_ = i(oe)) {
    b(a, !0), b(o, "");
    try {
      if (!i(c))
        try {
          if (typeof r.ctx.backend.get_canister_id == "function") {
            const y = await r.ctx.backend.get_canister_id();
            b(c, y || "", !0);
          }
        } catch {
          b(c, "");
        }
      const p = await r.ctx.backend.get_objects_paginated("WalletTransfer", _, de, "desc"), E = Ft(p);
      if (E?.success && E?.data?.objectsListPaginated) {
        const y = E.data.objectsListPaginated;
        b(F, y.pagination, !0), b(k, y.objects.map((V) => JSON.parse(V)), !0);
      } else
        b(k, [], !0);
    } catch (p) {
      b(o, p?.message || "Failed to load transactions", !0);
    } finally {
      b(a, !1);
    }
  }
  async function Ti(_) {
    try {
      const p = await r.ctx.backend.extension_sync_call(JSON.stringify({
        extension_name: "vault",
        function_name: "get_vault_balance",
        args: JSON.stringify({ token: _ })
      })), E = Ft(p);
      let y;
      try {
        y = typeof E?.response == "string" ? JSON.parse(E.response) : E;
      } catch {
        return;
      }
      y?.success && y?.data?.Balance && (i(g)[_] = y.data.Balance.amount || 0, b(g, { ...i(g) }, !0), b(c, y.data.Balance.principal_id || i(c), !0));
    } catch (p) {
      console.error(`Failed to load vault balance for ${_}:`, p);
    }
  }
  async function ua() {
    for (const _ of i(Ct))
      i(v)[_] && await Ti(_);
  }
  async function Ai(_) {
    b(xe, !0), b(o, "");
    try {
      const p = await r.ctx.backend.extension_async_call(JSON.stringify({
        extension_name: "vault",
        function_name: "refresh_vault_balance",
        args: JSON.stringify({ token: _ })
      })), E = Ft(p);
      let y;
      try {
        y = typeof E?.response == "string" ? JSON.parse(E.response) : E;
      } catch {
        b(o, E?.response || "Refresh failed", !0);
        return;
      }
      y?.success && y?.data?.Balance ? (i(g)[_] = y.data.Balance.amount || 0, b(g, { ...i(g) }, !0), b(Oe, /* @__PURE__ */ new Date(), !0)) : b(o, y?.error || "Failed to refresh vault balance", !0);
    } catch (p) {
      b(o, p?.message || "Failed to refresh vault balance", !0);
    } finally {
      b(xe, !1);
    }
  }
  async function Ni() {
    b(xe, !0);
    for (const _ of i(Ct))
      i(v)[_] && await Ai(_);
    b(xe, !1), b(Oe, /* @__PURE__ */ new Date(), !0);
  }
  async function Mi() {
    b(a, !0), b(o, "");
    try {
      const _ = await r.ctx.backend.extension_async_call(JSON.stringify({
        extension_name: "vault",
        function_name: "refresh",
        args: "{}"
      })), p = Ft(_);
      let E;
      try {
        E = typeof p?.response == "string" ? JSON.parse(p.response) : p;
      } catch {
        b(o, p?.response || "Refresh failed", !0);
        return;
      }
      E?.success ? (b(Oe, /* @__PURE__ */ new Date(), !0), await kn(), await ua(), await en(0)) : b(o, E?.error || "Refresh failed", !0);
    } catch (_) {
      b(o, _?.message || "Failed to refresh vault", !0);
    } finally {
      b(a, !1);
    }
  }
  async function Oi() {
    if (!i(je) || i(qe) <= 0) {
      b(o, "Please enter valid recipient and amount");
      return;
    }
    b(a, !0), b(o, "");
    try {
      const _ = {
        to_principal: i(je),
        amount: i(qe)
      };
      i(he).trim() && (_.to_subaccount = i(he).trim()), i(Wt).trim() && (_.from_subaccount = i(Wt).trim()), i(pe) && (_.token = i(pe));
      const p = await r.ctx.backend.extension_async_call(JSON.stringify({
        extension_name: "vault",
        function_name: "transfer",
        args: JSON.stringify(_)
      })), E = Ft(p);
      let y;
      try {
        y = typeof E?.response == "string" ? JSON.parse(E.response) : E;
      } catch {
        b(o, E?.response || "Transfer failed", !0);
        return;
      }
      y?.success ? (b(je, ""), b(qe, 0), b(he, ""), b(Wt, ""), await kn(), await en()) : b(o, y?.error || "Transfer failed", !0);
    } catch (_) {
      b(o, _?.message || "Failed to perform transfer", !0);
    } finally {
      b(a, !1);
    }
  }
  async function Li() {
    b(Yt, !0), b(kt, null), b(o, "");
    try {
      const _ = {};
      if (i(mt) === "user" && i(Zr).trim())
        _.principal = i(Zr).trim();
      else if (i(mt) === "invoice" && i(Qr).trim())
        _.invoice_id = i(Qr).trim();
      else if (i(mt) === "raw" && i($r).trim())
        _.subaccount_hex = i($r).trim();
      else {
        b(o, "Please enter a value to look up"), b(Yt, !1);
        return;
      }
      const p = await r.ctx.backend.extension_async_call(JSON.stringify({
        extension_name: "vault",
        function_name: "lookup_balance",
        args: JSON.stringify(_)
      })), E = Ft(p);
      let y;
      try {
        y = typeof E?.response == "string" ? JSON.parse(E.response) : E;
      } catch {
        b(o, "Failed to parse response"), b(Yt, !1);
        return;
      }
      y?.success && y?.data?.LookupBalance ? b(kt, y.data.LookupBalance, !0) : b(o, y?.error || "Lookup failed", !0);
    } catch (_) {
      b(o, _?.message || "Failed to look up balance", !0);
    } finally {
      b(Yt, !1);
    }
  }
  async function wn(_) {
    b(oe, _, !0), await en(_);
  }
  function Pi(_, p) {
    if (_ <= 7) return Array.from({ length: _ }, (y, V) => V);
    const E = [0];
    p > 3 && E.push("...");
    for (let y = Math.max(1, p - 1); y <= Math.min(_ - 2, p + 1); y++) E.push(y);
    return p < _ - 4 && E.push("..."), E.push(_ - 1), E;
  }
  const Ri = [
    { id: "balance", label: "Balances" },
    { id: "transactions", label: "Transactions" },
    { id: "transfer", label: "Transfer" },
    { id: "lookup", label: "Lookup" },
    { id: "admin", label: "Admin" }
  ], En = '<svg class="inline-block w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>';
  ls(() => {
    (async () => (await Si(), await kn(), await ua(), await en(0)))();
  });
  var Sn = Pl(), Tn = h(Sn), da = h(Tn), tn = x(da, 2), ca = h(tn);
  {
    var Ci = (_) => {
      var p = er(), E = Tt(p);
      Cn(E, () => En), M(_, p);
    };
    ee(ca, (_) => {
      (i(a) || i(xe)) && _(Ci);
    });
  }
  var Fi = x(ca), va = x(Tn, 2);
  {
    var Di = (_) => {
      var p = Hs(), E = h(p), y = x(E, 2), V = h(y);
      st(V, 17, () => i(Ct), ct, (Q, Y) => {
        var ne = er(), z = Tt(ne);
        {
          var Z = (te) => {
            var ce = Bs(), ve = h(ce), Se = h(ve), ke = x(ve, 2), O = h(ke), A = h(O), T = x(O, 2), C = h(T);
            P(
              (L, q, $, re, ae, ie, we) => {
                u(ce, 1, L), u(ve, 1, q), I(Se, i(s)[i(Y)].symbol), u(ke, 1, $), u(O, 1, re), I(A, ae), u(T, 1, ie), I(C, `${we ?? ""} units`);
              },
              [
                () => f(t("flex items-center justify-between bg-white/60 dark:bg-gray-800/40 rounded-lg p-3")),
                () => f(t("text-base font-semibold text-indigo-900 dark:text-indigo-200")),
                () => f(t("text-right")),
                () => f(t("text-xl font-bold text-indigo-900 dark:text-indigo-100")),
                () => mn(i(g)[i(Y)] || 0, i(s)[i(Y)].decimals),
                () => f(t("text-xs text-indigo-600 dark:text-indigo-400")),
                () => (i(g)[i(Y)] || 0).toLocaleString()
              ]
            ), M(te, ce);
          };
          ee(z, (te) => {
            i(v)[i(Y)] && te(Z);
          });
        }
        M(Q, ne);
      });
      var J = x(V, 2);
      {
        var X = (Q) => {
          var Y = Vs();
          P((ne) => u(Y, 1, ne), [() => f(t("text-sm text-gray-500 italic"))]), M(Q, Y);
        };
        ee(J, (Q) => {
          i(yn) || Q(X);
        });
      }
      var D = x(y, 2);
      P(
        (Q, Y, ne, z) => {
          u(p, 1, Q), u(E, 1, Y), u(y, 1, ne), u(D, 1, z);
        },
        [
          () => f(t("bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl p-5")),
          () => f(t("text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-3")),
          () => f(t("space-y-2")),
          () => f(t("mt-3 text-xs text-indigo-600 dark:text-indigo-400 font-medium"))
        ]
      ), M(_, p);
    };
    ee(va, (_) => {
      i(N) && _(Di);
    });
  }
  var An = x(va, 2), Nn = h(An), _a = h(Nn), rn = x(_a, 2), Ii = h(rn), ji = x(rn, 2);
  {
    var Bi = (_) => {
      var p = qs();
      P((E) => u(p, 1, E), [
        () => f(t("text-xs text-green-600 dark:text-green-400"))
      ]), M(_, p);
    };
    ee(ji, (_) => {
      i(Ge) === i(c) && i(c) && _(Bi);
    });
  }
  var Vi = x(Nn, 2);
  {
    var Hi = (_) => {
      var p = Js(), E = h(p), y = x(E, 2), V = h(y);
      P(
        (J, X, D, Q) => {
          u(E, 1, J), u(y, 1, X), I(V, `${D ?? ""} (${Q ?? ""})`);
        },
        [
          () => f(t("text-sm font-medium text-gray-600 dark:text-gray-400")),
          () => f(t("ml-2 text-sm text-gray-700 dark:text-gray-300")),
          () => i(Oe).toLocaleString(),
          () => la(i(Oe))
        ]
      ), M(_, p);
    };
    ee(Vi, (_) => {
      i(Oe) && _(Hi);
    });
  }
  var pa = x(An, 2);
  {
    var qi = (_) => {
      var p = Us(), E = h(p), y = x(E, 2);
      st(y, 21, () => i(Ct), ct, (V, J) => {
        var X = zs(), D = h(X), Q = x(D, 2), Y = h(Q);
        P(
          (ne, z, Z) => {
            u(X, 1, ne), Ds(D, i(v)[i(J)]), u(D, 1, z), u(Q, 1, Z), I(Y, i(s)[i(J)].symbol);
          },
          [
            () => f(t("flex items-center gap-2 cursor-pointer")),
            () => f(t("w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500")),
            () => f(t("text-sm font-medium text-gray-700 dark:text-gray-300"))
          ]
        ), Fe("change", D, () => {
          i(v)[i(J)] = !i(v)[i(J)], b(v, { ...i(v) }, !0);
        }), M(V, X);
      }), P(
        (V, J, X) => {
          u(p, 1, V), u(E, 1, J), u(y, 1, X);
        },
        [
          () => f(t("bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4")),
          () => f(t("text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2")),
          () => f(t("flex flex-wrap gap-4"))
        ]
      ), M(_, p);
    };
    ee(pa, (_) => {
      i(N) && i(Ct).length > 0 && _(qi);
    });
  }
  var ha = x(pa, 2);
  {
    var Ji = (_) => {
      var p = Ys(), E = h(p), y = x(E, 2);
      st(y, 21, () => i(Ct), ct, (V, J) => {
        var X = er(), D = Tt(X);
        {
          var Q = (Y) => {
            var ne = Ws(), z = h(ne), Z = h(z), te = x(z, 2), ce = h(te), ve = x(ce, 2), Se = h(ve), ke = x(te, 2), O = h(ke), A = x(O, 2), T = h(A);
            P(
              (C, L, q, $, re, ae, ie, we) => {
                u(ne, 1, C), u(z, 1, L), I(Z, i(s)[i(J)].symbol), u(te, 1, q), u(ce, 1, $), u(ve, 1, re), I(Se, i(s)[i(J)].ledger), u(ke, 1, ae), u(O, 1, ie), u(A, 1, we), I(T, i(s)[i(J)].indexer);
              },
              [
                () => f(t("border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0 last:pb-0")),
                () => f(t("text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1")),
                () => f(t("flex items-center justify-between text-xs")),
                () => f(t("text-gray-600 dark:text-gray-400")),
                () => f(t("font-mono text-indigo-600 dark:text-indigo-400 hover:underline")),
                () => f(t("flex items-center justify-between text-xs mt-1")),
                () => f(t("text-gray-600 dark:text-gray-400")),
                () => f(t("font-mono text-indigo-600 dark:text-indigo-400 hover:underline"))
              ]
            ), Fe("click", ve, () => Gt(i(s)[i(J)].ledger)), Fe("click", A, () => Gt(i(s)[i(J)].indexer)), M(Y, ne);
          };
          ee(D, (Y) => {
            i(v)[i(J)] && Y(Q);
          });
        }
        M(V, X);
      }), P(
        (V, J, X) => {
          u(p, 1, V), u(E, 1, J), u(y, 1, X);
        },
        [
          () => f(t("bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4")),
          () => f(t("text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2")),
          () => f(t("space-y-2"))
        ]
      ), M(_, p);
    };
    ee(ha, (_) => {
      i(N) && i(yn) && _(Ji);
    });
  }
  var ga = x(ha, 2);
  {
    var zi = (_) => {
      var p = Gs(), E = h(p);
      P(
        (y) => {
          u(p, 1, y), I(E, i(o));
        },
        [
          () => f(t("p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300"))
        ]
      ), M(_, p);
    };
    ee(ga, (_) => {
      i(o) && _(zi);
    });
  }
  var Mn = x(ga, 2);
  st(Mn, 21, () => Ri, ct, (_, p) => {
    var E = Ks(), y = h(E);
    P(
      (V) => {
        u(E, 1, V), I(y, i(p).label);
      },
      [
        () => f(t("px-4 py-2.5 text-sm font-medium border-b-2 transition-colors", i(n) === i(p).id ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"))
      ]
    ), Fe("click", E, () => {
      b(n, i(p).id, !0);
    }), M(_, E);
  });
  var Ui = x(Mn, 2), Wi = h(Ui);
  {
    var Yi = (_) => {
      var p = el(), E = h(p), y = x(E, 2), V = h(y);
      st(V, 17, () => i(Ct), ct, (z, Z) => {
        var te = er(), ce = Tt(te);
        {
          var ve = (Se) => {
            var ke = Xs(), O = h(ke), A = h(O), T = x(O, 2), C = h(T), L = h(C), q = x(C, 2), $ = h(q);
            P(
              (re, ae, ie, we, Re, Me, se) => {
                u(ke, 1, re), u(O, 1, ae), I(A, i(s)[i(Z)].symbol), u(T, 1, ie), u(C, 1, we), I(L, Re), u(q, 1, Me), I($, `${se ?? ""} units`);
              },
              [
                () => f(t("flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg")),
                () => f(t("text-base font-semibold text-gray-700 dark:text-gray-300")),
                () => f(t("text-right")),
                () => f(t("text-xl font-bold text-indigo-600 dark:text-indigo-400")),
                () => mn(i(m), i(s)[i(Z)].decimals),
                () => f(t("text-xs text-gray-500 dark:text-gray-400")),
                () => i(m).toLocaleString()
              ]
            ), M(Se, ke);
          };
          ee(ce, (Se) => {
            i(v)[i(Z)] && Se(ve);
          });
        }
        M(z, te);
      });
      var J = x(V, 2);
      {
        var X = (z) => {
          var Z = Zs();
          P((te) => u(Z, 1, te), [() => f(t("text-sm text-gray-500 italic"))]), M(z, Z);
        };
        ee(J, (z) => {
          i(yn) || z(X);
        });
      }
      var D = x(y, 2);
      {
        var Q = (z) => {
          var Z = Qs(), te = h(Z), ce = h(te), ve = x(ce, 2), Se = h(ve);
          P(
            (ke, O, A, T) => {
              u(Z, 1, ke), u(te, 1, O), u(ce, 1, A), u(ve, 1, T), I(Se, i(w)._id || i(w).id);
            },
            [
              () => f(t("mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg")),
              () => f(t("text-sm text-gray-600 dark:text-gray-400")),
              () => f(t("font-medium")),
              () => f(t("font-mono text-xs ml-1"))
            ]
          ), M(z, Z);
        };
        ee(D, (z) => {
          i(w) && z(Q);
        });
      }
      var Y = x(D, 2);
      {
        var ne = (z) => {
          var Z = $s(), te = h(Z);
          P(
            (ce, ve) => {
              u(Z, 1, ce), I(te, `Showing ${i(S).length ?? ""} balance(s) (Page ${ve ?? ""} of ${i(B).total_pages ?? ""})`);
            },
            [
              () => f(t("mt-3 text-xs text-gray-500 dark:text-gray-400")),
              () => Number(i(B).page_num) + 1
            ]
          ), M(z, Z);
        };
        ee(Y, (z) => {
          i(B) && z(ne);
        });
      }
      P(
        (z, Z, te) => {
          u(p, 1, z), u(E, 1, Z), u(y, 1, te);
        },
        [
          () => f(t("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6")),
          () => f(t("text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4")),
          () => f(t("space-y-3"))
        ]
      ), M(_, p);
    }, Gi = (_) => {
      var p = _l(), E = h(p), y = x(E, 2), V = h(y), J = h(V), X = h(J), D = h(X), Q = x(D), Y = x(Q), ne = x(Y), z = x(ne), Z = x(z), te = x(Z), ce = x(J);
      st(
        ce,
        21,
        () => i(k),
        (O) => O._id || O.tx_id || Math.random(),
        (O, A) => {
          var T = fl(), C = h(T), L = h(C), q = x(C), $ = h(q), re = h($), ae = x(q), ie = h(ae);
          {
            var we = (le) => {
              var ye = rl(), ue = Tt(ye), wt = h(ue), Et = x(ue, 2);
              {
                var St = (Ce) => {
                  var Je = tl();
                  P((Zt) => u(Je, 1, Zt), [() => f(t("ml-1 text-xs text-green-600"))]), M(Ce, Je);
                };
                ee(Et, (Ce) => {
                  i(Ge) === i(A).principal_from && Ce(St);
                });
              }
              P(
                (Ce, Je) => {
                  u(ue, 1, Ce), I(wt, Je);
                },
                [
                  () => f(t("text-indigo-600 dark:text-indigo-400 hover:underline text-left")),
                  () => fa(i(A).principal_from)
                ]
              ), Fe("click", ue, () => Gt(i(A).principal_from)), M(le, ye);
            }, Re = (le) => {
              var ye = nl();
              P((ue) => u(ye, 1, ue), [() => f(t("text-gray-400"))]), M(le, ye);
            };
            ee(ie, (le) => {
              i(A).principal_from ? le(we) : le(Re, -1);
            });
          }
          var Me = x(ae), se = h(Me);
          {
            var _e = (le) => {
              var ye = il(), ue = Tt(ye), wt = h(ue), Et = x(ue, 2);
              {
                var St = (Ce) => {
                  var Je = al();
                  P((Zt) => u(Je, 1, Zt), [() => f(t("ml-1 text-xs text-green-600"))]), M(Ce, Je);
                };
                ee(Et, (Ce) => {
                  i(Ge) === i(A).principal_to && Ce(St);
                });
              }
              P(
                (Ce, Je) => {
                  u(ue, 1, Ce), I(wt, Je);
                },
                [
                  () => f(t("text-indigo-600 dark:text-indigo-400 hover:underline text-left")),
                  () => fa(i(A).principal_to)
                ]
              ), Fe("click", ue, () => Gt(i(A).principal_to)), M(le, ye);
            }, ge = (le) => {
              var ye = ol();
              P((ue) => u(ye, 1, ue), [() => f(t("text-gray-400"))]), M(le, ye);
            };
            ee(se, (le) => {
              i(A).principal_to ? le(_e) : le(ge, -1);
            });
          }
          var Ae = x(Me), it = h(Ae), Kt = x(Ae), Xt = h(Kt);
          {
            var Lr = (le) => {
              const ye = /* @__PURE__ */ $t(() => Ei(i(A).timestamp));
              var ue = sl(), wt = h(ue);
              P(
                (Et, St) => {
                  u(ue, 1, Et), I(wt, St);
                },
                [
                  () => f(t("text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline text-left")),
                  () => la(i(ye))
                ]
              ), Fe("click", ue, () => Gt(i(ye).toLocaleString())), M(le, ue);
            }, On = (le) => {
              var ye = ll();
              P((ue) => u(ye, 1, ue), [() => f(t("text-gray-400"))]), M(le, ye);
            };
            ee(Xt, (le) => {
              i(A).timestamp ? le(Lr) : le(On, -1);
            });
          }
          var Pr = x(Kt), gr = h(Pr), Ln = h(gr);
          P(
            (le, ye, ue, wt, Et, St, Ce, Je, Zt, Qi, $i) => {
              u(T, 1, le), u(C, 1, ye), I(L, i(A).tx_id || i(A)._id), u(q, 1, ue), u($, 1, wt), I(re, i(A).token || "—"), u(ae, 1, Et), u(Me, 1, St), u(Ae, 1, Ce), I(it, Je), u(Kt, 1, Zt), u(Pr, 1, Qi), u(gr, 1, $i), I(Ln, i(A).kind || "transfer");
            },
            [
              () => f(t("hover:bg-gray-50 dark:hover:bg-gray-700/30")),
              () => f(t("px-4 py-3 text-gray-700 dark:text-gray-300")),
              () => f(t("px-4 py-3")),
              () => f(t("px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 rounded text-xs font-medium")),
              () => f(t("px-4 py-3 font-mono text-xs")),
              () => f(t("px-4 py-3 font-mono text-xs")),
              () => f(t("px-4 py-3 text-gray-700 dark:text-gray-300")),
              () => (i(A).amount || 0).toLocaleString(),
              () => f(t("px-4 py-3")),
              () => f(t("px-4 py-3")),
              () => f(t("px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded text-xs"))
            ]
          ), M(O, T);
        },
        (O) => {
          var A = ul(), T = h(A);
          P((C) => u(T, 1, C), [
            () => f(t("px-4 py-8 text-center text-gray-500 dark:text-gray-400"))
          ]), M(O, A);
        }
      );
      var ve = x(y, 2);
      {
        var Se = (O) => {
          var A = vl(), T = h(A), C = h(T), L = x(T, 2), q = h(L), $ = x(q, 2);
          st($, 17, () => Pi(Number(i(F).total_pages), i(oe)), ct, (ae, ie) => {
            var we = er(), Re = Tt(we);
            {
              var Me = (_e) => {
                var ge = dl();
                P((Ae) => u(ge, 1, Ae), [() => f(t("px-1.5 text-xs text-gray-400"))]), M(_e, ge);
              }, se = (_e) => {
                var ge = cl(), Ae = h(ge);
                P(
                  (it) => {
                    u(ge, 1, it), I(Ae, i(ie) + 1);
                  },
                  [
                    () => f(t("px-2.5 py-1 text-xs border rounded", i(oe) === i(ie) ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"))
                  ]
                ), Fe("click", ge, () => wn(i(ie))), M(_e, ge);
              };
              ee(Re, (_e) => {
                i(ie) === "..." ? _e(Me) : _e(se, -1);
              });
            }
            M(ae, we);
          });
          var re = x($, 2);
          P(
            (ae, ie, we, Re, Me, se) => {
              u(A, 1, ae), u(T, 1, ie), I(C, `${i(k).length ?? ""} of ${i(F).total_items_count ?? ""} (Page ${i(oe) + 1} / ${i(F).total_pages ?? ""})`), u(L, 1, we), q.disabled = i(oe) === 0, u(q, 1, Re), re.disabled = Me, u(re, 1, se);
            },
            [
              () => f(t("p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between")),
              () => f(t("text-xs text-gray-500 dark:text-gray-400")),
              () => f(t("flex items-center gap-1")),
              () => f(t("px-2.5 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed")),
              () => i(oe) >= Number(i(F).total_pages) - 1,
              () => f(t("px-2.5 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"))
            ]
          ), Fe("click", q, () => wn(i(oe) - 1)), Fe("click", re, () => wn(i(oe) + 1)), M(O, A);
        }, ke = /* @__PURE__ */ $t(() => i(F) && Number(i(F).total_pages) > 1);
        ee(ve, (O) => {
          i(ke) && O(Se);
        });
      }
      P(
        (O, A, T, C, L, q, $, re, ae, ie, we, Re, Me) => {
          u(p, 1, O), u(E, 1, A), u(y, 1, T), u(V, 1, C), u(J, 1, L), u(D, 1, q), u(Q, 1, $), u(Y, 1, re), u(ne, 1, ae), u(z, 1, ie), u(Z, 1, we), u(te, 1, Re), u(ce, 1, Me);
        },
        [
          () => f(t("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden")),
          () => f(t("text-lg font-semibold p-6 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100")),
          () => f(t("overflow-x-auto")),
          () => f(t("w-full text-sm")),
          () => f(t("bg-gray-50 dark:bg-gray-700/50")),
          () => f(t("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase")),
          () => f(t("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase")),
          () => f(t("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase")),
          () => f(t("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase")),
          () => f(t("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase")),
          () => f(t("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase")),
          () => f(t("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase")),
          () => f(t("divide-y divide-gray-100 dark:divide-gray-700"))
        ]
      ), M(_, p);
    }, Ki = (_) => {
      var p = hl(), E = h(p), y = x(E, 2), V = h(y), J = h(V), X = x(J, 2);
      st(X, 21, () => i(Ct), ct, (L, q) => {
        var $ = pl(), re = h($), ae = {};
        P(() => {
          I(re, i(s)[i(q)].symbol), ae !== (ae = i(q)) && ($.value = ($.__value = i(q)) ?? "");
        }), M(L, $);
      });
      var D = x(V, 2), Q = h(D), Y = x(Q, 2), ne = x(D, 2), z = h(ne), Z = h(z), te = x(z, 2), ce = x(ne, 2), ve = h(ce), Se = x(ve, 2), ke = x(ce, 2), O = h(ke), A = x(O, 2), T = x(ke, 2), C = h(T);
      P(
        (L, q, $, re, ae, ie, we, Re, Me, se, _e, ge, Ae, it) => {
          u(p, 1, L), u(E, 1, q), u(y, 1, $), u(J, 1, re), u(X, 1, ae), u(Q, 1, ie), u(Y, 1, we), u(z, 1, Re), I(Z, `Amount (${(i(s)[i(pe)]?.symbol || i(pe) || "") ?? ""} units)`), u(te, 1, Me), u(ve, 1, se), u(Se, 1, _e), u(O, 1, ge), u(A, 1, Ae), T.disabled = i(a) || !i(je) || i(qe) <= 0, u(T, 1, it), I(C, i(a) ? "Processing…" : "Transfer");
        },
        [
          () => f(t("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6")),
          () => f(t("text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4")),
          () => f(t("space-y-4")),
          () => f(t("block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5")),
          () => f(t("w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40")),
          () => f(t("block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5")),
          () => f(t("w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40")),
          () => f(t("block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5")),
          () => f(t("w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40")),
          () => f(t("block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5")),
          () => f(t("w-full px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40")),
          () => f(t("block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5")),
          () => f(t("w-full px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40")),
          () => f(t("w-full px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg", "hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"))
        ]
      ), Na("submit", y, (L) => {
        L.preventDefault(), Oi();
      }), Rs(X, () => i(pe), (L) => b(pe, L)), tr(Y, () => i(je), (L) => b(je, L)), tr(te, () => i(qe), (L) => b(qe, L)), tr(Se, () => i(he), (L) => b(he, L)), tr(A, () => i(Wt), (L) => b(Wt, L)), M(_, p);
    }, Xi = (_) => {
      var p = El(), E = h(p), y = x(E, 2), V = x(h(y)), J = x(V, 2), X = x(y, 2);
      st(
        X,
        20,
        () => [
          { id: "user", label: "User (usr_)" },
          { id: "invoice", label: "Invoice (inv_)" },
          { id: "raw", label: "Raw Hex" }
        ],
        ct,
        (O, A) => {
          var T = gl(), C = h(T);
          P(
            (L) => {
              u(T, 1, L), I(C, A.label);
            },
            [
              () => f(t("px-3 py-1.5 rounded-lg text-sm font-medium transition-colors", i(mt) === A.id ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"))
            ]
          ), Fe("click", T, () => {
            b(mt, A.id, !0), b(kt, null);
          }), M(O, T);
        }
      );
      var D = x(X, 2), Q = h(D);
      {
        var Y = (O) => {
          var A = bl();
          P((T) => u(A, 1, T), [
            () => f(t("flex-1 px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40"))
          ]), tr(A, () => i(Zr), (T) => b(Zr, T)), M(O, A);
        }, ne = (O) => {
          var A = xl();
          P((T) => u(A, 1, T), [
            () => f(t("flex-1 px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40"))
          ]), tr(A, () => i(Qr), (T) => b(Qr, T)), M(O, A);
        }, z = (O) => {
          var A = yl();
          P((T) => u(A, 1, T), [
            () => f(t("flex-1 px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40"))
          ]), tr(A, () => i($r), (T) => b($r, T)), M(O, A);
        };
        ee(Q, (O) => {
          i(mt) === "user" ? O(Y) : i(mt) === "invoice" ? O(ne, 1) : O(z, -1);
        });
      }
      var Z = x(Q, 2), te = h(Z);
      {
        var ce = (O) => {
          var A = er(), T = Tt(A);
          Cn(T, () => En), M(O, A);
        };
        ee(te, (O) => {
          i(Yt) && O(ce);
        });
      }
      var ve = x(te), Se = x(D, 2);
      {
        var ke = (O) => {
          var A = wl(), T = h(A), C = h(T), L = h(C), q = x(L, 2), $ = h(q), re = x(C, 2), ae = h(re), ie = x(T, 2);
          st(ie, 21, () => Object.entries(i(kt).balances), ct, (se, _e) => {
            var ge = /* @__PURE__ */ $t(() => fo(i(_e), 2));
            let Ae = () => i(ge)[0], it = () => i(ge)[1];
            const Kt = /* @__PURE__ */ $t(() => i(s)[Ae()]?.decimals || 8);
            var Xt = ml(), Lr = h(Xt), On = h(Lr), Pr = x(Lr, 2), gr = h(Pr), Ln = h(gr), le = x(gr, 2), ye = h(le);
            P(
              (ue, wt, Et, St, Ce, Je, Zt) => {
                u(Xt, 1, ue), u(Lr, 1, wt), I(On, Ae()), u(Pr, 1, Et), u(gr, 1, St), I(Ln, Ce), u(le, 1, Je), I(ye, `${Zt ?? ""} units`);
              },
              [
                () => f(t("flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3")),
                () => f(t("text-sm font-semibold text-gray-700 dark:text-gray-300")),
                () => f(t("text-right")),
                () => f(t("text-lg font-bold", Number(it()) > 0 ? "text-green-700 dark:text-green-400" : "text-gray-400")),
                () => mn(Number(it()), i(Kt)),
                () => f(t("text-xs text-gray-500 dark:text-gray-400")),
                () => Number(it()).toLocaleString()
              ]
            ), M(se, Xt);
          });
          var we = x(ie, 2);
          {
            var Re = (se) => {
              var _e = kl();
              P((ge) => u(_e, 1, ge), [() => f(t("text-sm text-gray-500 italic"))]), M(se, _e);
            }, Me = /* @__PURE__ */ $t(() => Object.values(i(kt).balances).every((se) => Number(se) === 0));
            ee(we, (se) => {
              i(Me) && se(Re);
            });
          }
          P(
            (se, _e, ge, Ae, it, Kt, Xt) => {
              u(A, 1, se), u(T, 1, _e), u(L, 1, ge), u(q, 1, Ae), I($, i(kt).label), u(re, 1, it), I(ae, `${Kt ?? ""}…`), u(ie, 1, Xt);
            },
            [
              () => f(t("bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 space-y-3")),
              () => f(t("flex items-center justify-between")),
              () => f(t("text-sm font-medium text-gray-600 dark:text-gray-400")),
              () => f(t("ml-2 text-sm font-semibold text-gray-800 dark:text-gray-200")),
              () => f(t("text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-mono")),
              () => i(kt).subaccount_hex.substring(0, 16),
              () => f(t("space-y-2"))
            ]
          ), Fe("click", re, () => Gt(i(kt)?.subaccount_hex || "")), M(O, A);
        };
        ee(Se, (O) => {
          i(kt) && O(ke);
        });
      }
      P(
        (O, A, T, C, L, q, $, re) => {
          u(p, 1, O), u(E, 1, A), u(y, 1, T), u(V, 1, C), u(J, 1, L), u(X, 1, q), u(D, 1, $), Z.disabled = i(Yt), u(Z, 1, re), I(ve, ` ${i(Yt) ? "Looking up…" : "Lookup"}`);
        },
        [
          () => f(t("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6")),
          () => f(t("text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2")),
          () => f(t("text-sm text-gray-500 dark:text-gray-400 mb-4")),
          () => f(t("bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs")),
          () => f(t("bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs")),
          () => f(t("flex gap-2 mb-4")),
          () => f(t("flex gap-2 mb-4")),
          () => f(t("px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 inline-flex items-center gap-2"))
        ]
      ), Na("submit", D, (O) => {
        O.preventDefault(), Li();
      }), M(_, p);
    }, Zi = (_) => {
      var p = Ll(), E = h(p), y = x(E, 2), V = h(y), J = h(V);
      {
        var X = (T) => {
          var C = er(), L = Tt(C);
          Cn(L, () => En), M(T, C);
        };
        ee(J, (T) => {
          i(a) && T(X);
        });
      }
      var D = x(J), Q = x(y, 2), Y = h(Q), ne = h(Y), z = h(ne), Z = x(ne, 2);
      {
        var te = (T) => {
          var C = Al();
          st(C, 21, () => i(S), ct, (L, q) => {
            var $ = Tl(), re = h($), ae = h(re), ie = x(re, 2), we = h(ie), Re = x(ie, 2);
            {
              var Me = (se) => {
                var _e = Sl(), ge = h(_e);
                P(
                  (Ae) => {
                    u(_e, 1, Ae), I(ge, `Token: ${i(q).token ?? ""}`);
                  },
                  [
                    () => f(t("text-xs text-gray-500 dark:text-gray-400 mt-1"))
                  ]
                ), M(se, _e);
              };
              ee(Re, (se) => {
                i(q).token && se(Me);
              });
            }
            P(
              (se, _e, ge, Ae) => {
                u($, 1, se), u(re, 1, _e), I(ae, `Principal: ${(i(q).principal || i(q)._id || i(q).id) ?? ""}`), u(ie, 1, ge), I(we, `${Ae ?? ""} units`);
              },
              [
                () => f(t("p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg")),
                () => f(t("font-mono text-xs text-gray-600 dark:text-gray-400 mb-1")),
                () => f(t("text-sm font-semibold text-gray-800 dark:text-gray-200")),
                () => (i(q).amount || 0).toLocaleString()
              ]
            ), M(L, $);
          }), P((L) => u(C, 1, L), [() => f(t("space-y-2 max-h-80 overflow-auto"))]), M(T, C);
        }, ce = (T) => {
          var C = Nl();
          P((L) => u(C, 1, L), [() => f(t("text-gray-500 dark:text-gray-400 text-sm"))]), M(T, C);
        };
        ee(Z, (T) => {
          i(S).length > 0 ? T(te) : T(ce, -1);
        });
      }
      var ve = x(Y, 2), Se = h(ve), ke = x(Se, 2);
      {
        var O = (T) => {
          var C = Ml(), L = h(C);
          P(
            (q) => {
              u(C, 1, q), I(L, `Total transfers: ${i(F).total_items_count ?? ""}`);
            },
            [() => f(t("text-sm text-gray-600 dark:text-gray-400"))]
          ), M(T, C);
        }, A = (T) => {
          var C = Ol();
          P((L) => u(C, 1, L), [() => f(t("text-gray-500 dark:text-gray-400 text-sm"))]), M(T, C);
        };
        ee(ke, (T) => {
          i(F) ? T(O) : T(A, -1);
        });
      }
      P(
        (T, C, L, q, $, re, ae) => {
          u(p, 1, T), u(E, 1, C), u(y, 1, L), V.disabled = i(a), u(V, 1, q), I(D, ` ${i(a) ? "Refreshing…" : "Full Vault Refresh"}`), u(Q, 1, $), u(ne, 1, re), I(z, `All Balances in System (${i(S).length ?? ""})`), u(Se, 1, ae);
        },
        [
          () => f(t("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6")),
          () => f(t("text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4")),
          () => f(t("mb-4")),
          () => f(t("px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 inline-flex items-center gap-2")),
          () => f(t("space-y-6")),
          () => f(t("font-semibold text-gray-700 dark:text-gray-300 mb-2")),
          () => f(t("font-semibold text-gray-700 dark:text-gray-300 mb-2"))
        ]
      ), Fe("click", V, Mi), M(_, p);
    };
    ee(Wi, (_) => {
      i(n) === "balance" ? _(Yi) : i(n) === "transactions" ? _(Gi, 1) : i(n) === "transfer" ? _(Ki, 2) : i(n) === "lookup" ? _(Xi, 3) : i(n) === "admin" && _(Zi, 4);
    });
  }
  P(
    (_, p, E, y, V, J, X, D, Q) => {
      u(Sn, 1, _), u(Tn, 1, p), u(da, 1, E), tn.disabled = i(a) || i(xe), u(tn, 1, y), I(Fi, ` ${i(a) || i(xe) ? "Refreshing…" : "Refresh"}`), u(An, 1, V), u(Nn, 1, J), u(_a, 1, X), u(rn, 1, D), I(Ii, i(c) || "Loading…"), u(Mn, 1, Q);
    },
    [
      () => f(t("max-w-4xl mx-auto p-6 space-y-6")),
      () => f(t("flex justify-between items-center")),
      () => f(t("text-2xl font-bold text-gray-900 dark:text-gray-100")),
      () => f(t("px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg", "hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed", "inline-flex items-center gap-2 transition-colors")),
      () => f(t("bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-2")),
      () => f(t("flex items-center gap-2")),
      () => f(t("text-sm font-medium text-gray-600 dark:text-gray-400")),
      () => f(t("font-mono text-xs text-indigo-600 dark:text-indigo-400 hover:underline")),
      () => f(t("flex border-b border-gray-200 dark:border-gray-700"))
    ]
  ), Fe("click", tn, Ni), Fe("click", rn, () => Gt(i(c))), M(e, Sn), Ba();
}
xs(["click", "change"]);
function Dl(e, r) {
  const t = ws(Rl, { target: e, props: { ctx: r } });
  return {
    unmount() {
      try {
        Ss(t);
      } catch {
      }
    }
  };
}
export {
  Dl as default
};
