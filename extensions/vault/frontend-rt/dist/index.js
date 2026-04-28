var eo = Object.defineProperty;
var ba = (e) => {
  throw TypeError(e);
};
var to = (e, r, t) => r in e ? eo(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var ot = (e, r, t) => to(e, typeof r != "symbol" ? r + "" : r, t), Cn = (e, r, t) => r.has(e) || ba("Cannot " + t);
var l = (e, r, t) => (Cn(e, r, "read from private field"), t ? t.call(e) : r.get(e)), H = (e, r, t) => r.has(e) ? ba("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), Y = (e, r, t, n) => (Cn(e, r, "write to private field"), n ? n.call(e, t) : r.set(e, t), t), fe = (e, r, t) => (Cn(e, r, "access private method"), t);
var Xn = Array.isArray, ro = Array.prototype.indexOf, wr = Array.prototype.includes, pn = Array.from, no = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, ao = Object.prototype, io = Array.prototype, oo = Object.getPrototypeOf, xa = Object.isExtensible;
const so = () => {
};
function lo(e) {
  for (var r = 0; r < e.length; r++)
    e[r]();
}
function Ca() {
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
const Ce = 2, Er = 4, gn = 8, Ra = 1 << 24, bt = 16, dt = 32, zt = 64, In = 128, et = 512, Te = 1024, Pe = 2048, xt = 4096, Ie = 8192, tt = 16384, _r = 32768, ya = 1 << 25, Sr = 65536, jn = 1 << 17, uo = 1 << 18, Mr = 1 << 19, co = 1 << 20, gt = 1 << 25, dr = 65536, dn = 1 << 21, Br = 1 << 22, Vt = 1 << 23, Dr = Symbol("$state"), Nt = new class extends Error {
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
function ho(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function po() {
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
const wo = 1, Eo = 2, Fa = 4, So = 8, To = 16, Ao = 1, No = 2, Ne = Symbol(), Da = "http://www.w3.org/1999/xhtml", Mo = "http://www.w3.org/2000/svg", Lo = "http://www.w3.org/1998/Math/MathML";
function Po() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Co() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ro() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Oa(e) {
  return e === this.v;
}
function Fo(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
function Ia(e) {
  return !Fo(e, this.v);
}
let nt = null;
function Tr(e) {
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
      J
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
let er = [];
function Ha() {
  var e = er;
  er = [], lo(e);
}
function Ht(e) {
  if (er.length === 0 && !Or) {
    var r = er;
    queueMicrotask(() => {
      r === er && Ha();
    });
  }
  er.push(e);
}
function Do() {
  for (; er.length > 0; )
    Ha();
}
function qa(e) {
  var r = J;
  if (r === null)
    return K.f |= Vt, e;
  if ((r.f & _r) === 0 && (r.f & Er) === 0)
    throw e;
  jt(e, r);
}
function jt(e, r) {
  for (; r !== null; ) {
    if ((r.f & In) !== 0) {
      if ((r.f & _r) === 0)
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
const Oo = -7169;
function me(e, r) {
  e.f = e.f & Oo | r;
}
function Zn(e) {
  (e.f & et) !== 0 || e.deps === null ? me(e, Te) : me(e, xt);
}
function za(e) {
  if (e !== null)
    for (const r of e)
      (r.f & Ce) === 0 || (r.f & dr) === 0 || (r.f ^= dr, za(
        /** @type {Derived} */
        r.deps
      ));
}
function Ua(e, r, t) {
  (e.f & Pe) !== 0 ? r.add(e) : (e.f & xt) !== 0 && t.add(e), za(e.deps), me(e, Te);
}
const Xt = /* @__PURE__ */ new Set();
let j = null, ft = null, Bn = null, Or = !1, Rn = !1, gr = null, nn = null;
var ma = 0;
let Io = 1;
var br, xr, nr, Mt, vt, qr, We, zr, Ot, Lt, _t, yr, mr, ar, Ee, an, Wa, on, Vn, sn, jo;
const vn = class vn {
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
    H(this, br, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, xr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    H(this, nr, /* @__PURE__ */ new Set());
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
    H(this, qr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    H(this, We, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    H(this, zr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    H(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    H(this, Lt, /* @__PURE__ */ new Set());
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
    H(this, yr, /* @__PURE__ */ new Set());
    ot(this, "is_fork", !1);
    H(this, mr, !1);
    /** @type {Set<Batch>} */
    H(this, ar, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(r) {
    l(this, _t).has(r) || l(this, _t).set(r, { d: [], m: [] }), l(this, yr).delete(r);
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
        me(a, Pe), t(a);
      for (a of n.m)
        me(a, xt), t(a);
    }
    l(this, yr).add(r);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(r, t, n = !1) {
    r.v !== Ne && !this.previous.has(r) && this.previous.set(r, r.v), (r.f & Vt) === 0 && (this.current.set(r, [t, n]), ft?.set(r, t)), this.is_fork || (r.v = t);
  }
  activate() {
    j = this;
  }
  deactivate() {
    j = null, ft = null;
  }
  flush() {
    try {
      Rn = !0, j = this, fe(this, Ee, on).call(this);
    } finally {
      ma = 0, Bn = null, gr = null, nn = null, Rn = !1, j = null, ft = null, lr.clear();
    }
  }
  discard() {
    for (const r of l(this, xr)) r(this);
    l(this, xr).clear(), l(this, nr).clear(), Xt.delete(this);
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
    l(this, mr) || n || (Y(this, mr, !0), Ht(() => {
      Y(this, mr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(r, t) {
    for (const n of r)
      l(this, Ot).add(n);
    for (const n of t)
      l(this, Lt).add(n);
    r.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(r) {
    l(this, br).add(r);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(r) {
    l(this, xr).add(r);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(r) {
    l(this, nr).add(r);
  }
  run_fork_commit_callbacks() {
    for (const r of l(this, nr)) r(this);
    l(this, nr).clear();
  }
  settled() {
    return (l(this, qr) ?? Y(this, qr, Ca())).promise;
  }
  static ensure() {
    if (j === null) {
      const r = j = new vn();
      Rn || (Xt.add(j), Or || Ht(() => {
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
    if (Bn = r, r.b?.is_pending && (r.f & (Er | gn | Ra)) !== 0 && (r.f & _r) === 0) {
      r.b.defer_effect(r);
      return;
    }
    for (var t = r; t.parent !== null; ) {
      t = t.parent;
      var n = t.f;
      if (gr !== null && t === J && (K === null || (K.f & Ce) === 0))
        return;
      if ((n & (zt | dt)) !== 0) {
        if ((n & Te) === 0)
          return;
        t.f ^= Te;
      }
    }
    l(this, We).push(t);
  }
};
br = new WeakMap(), xr = new WeakMap(), nr = new WeakMap(), Mt = new WeakMap(), vt = new WeakMap(), qr = new WeakMap(), We = new WeakMap(), zr = new WeakMap(), Ot = new WeakMap(), Lt = new WeakMap(), _t = new WeakMap(), yr = new WeakMap(), mr = new WeakMap(), ar = new WeakMap(), Ee = new WeakSet(), an = function() {
  return this.is_fork || l(this, vt).size > 0;
}, Wa = function() {
  for (const n of l(this, ar))
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
}, on = function() {
  var c;
  if (ma++ > 1e3 && (Xt.delete(this), Vo()), !fe(this, Ee, an).call(this)) {
    for (const s of l(this, Ot))
      l(this, Lt).delete(s), me(s, Pe), this.schedule(s);
    for (const s of l(this, Lt))
      me(s, xt), this.schedule(s);
  }
  const r = l(this, We);
  Y(this, We, []), this.apply();
  var t = gr = [], n = [], a = nn = [];
  for (const s of r)
    try {
      fe(this, Ee, Vn).call(this, s, t, n);
    } catch (v) {
      throw Ka(s), v;
    }
  if (j = null, a.length > 0) {
    var o = vn.ensure();
    for (const s of a)
      o.schedule(s);
  }
  if (gr = null, nn = null, fe(this, Ee, an).call(this) || fe(this, Ee, Wa).call(this)) {
    fe(this, Ee, sn).call(this, n), fe(this, Ee, sn).call(this, t);
    for (const [s, v] of l(this, _t))
      Ga(s, v);
  } else {
    l(this, Mt).size === 0 && Xt.delete(this), l(this, Ot).clear(), l(this, Lt).clear();
    for (const s of l(this, br)) s(this);
    l(this, br).clear(), ka(n), ka(t), l(this, qr)?.resolve();
  }
  var d = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    j
  );
  if (l(this, We).length > 0) {
    const s = d ?? (d = this);
    l(s, We).push(...l(this, We).filter((v) => !l(s, We).includes(v)));
  }
  d !== null && (Xt.add(d), fe(c = d, Ee, on).call(c));
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
      d ? a.f ^= Te : (o & Er) !== 0 ? t.push(a) : Jr(a) && ((o & bt) !== 0 && l(this, Lt).add(a), Nr(a));
      var v = a.first;
      if (v !== null) {
        a = v;
        continue;
      }
    }
    for (; a !== null; ) {
      var p = a.next;
      if (p !== null) {
        a = p;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
sn = function(r) {
  for (var t = 0; t < r.length; t += 1)
    Ua(r[t], l(this, Ot), l(this, Lt));
}, jo = function() {
  var p, A, x;
  for (const m of Xt) {
    var r = m.id < this.id, t = [];
    for (const [w, [B, y]] of this.current) {
      if (m.current.has(w)) {
        var n = (
          /** @type {[any, boolean]} */
          m.current.get(w)[0]
        );
        if (r && B !== n)
          m.current.set(w, [B, y]);
        else
          continue;
      }
      t.push(w);
    }
    var a = [...m.current.keys()].filter((w) => !this.current.has(w));
    if (a.length === 0)
      r && m.discard();
    else if (t.length > 0) {
      if (r)
        for (const w of l(this, yr))
          m.unskip_effect(w, (B) => {
            var y;
            (B.f & (bt | Br)) !== 0 ? m.schedule(B) : fe(y = m, Ee, sn).call(y, [B]);
          });
      m.activate();
      var o = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
      for (var c of t)
        Ya(c, a, o, d);
      d = /* @__PURE__ */ new Map();
      var s = [...m.current.keys()].filter(
        (w) => this.current.has(w) ? (
          /** @type {[any, boolean]} */
          this.current.get(w)[0] !== w
        ) : !0
      );
      for (const w of l(this, zr))
        (w.f & (tt | Ie | jn)) === 0 && Qn(w, s, d) && ((w.f & (Br | bt)) !== 0 ? (me(w, Pe), m.schedule(w)) : l(m, Ot).add(w));
      if (l(m, We).length > 0) {
        m.apply();
        for (var v of l(m, We))
          fe(p = m, Ee, Vn).call(p, v, [], []);
        Y(m, We, []);
      }
      m.deactivate();
    }
  }
  for (const m of Xt)
    l(m, ar).has(this) && (l(m, ar).delete(this), l(m, ar).size === 0 && !fe(A = m, Ee, an).call(A) && (m.activate(), fe(x = m, Ee, on).call(x)));
};
let cr = vn;
function Bo(e) {
  var r = Or;
  Or = !0;
  try {
    for (var t; ; ) {
      if (Do(), j === null)
        return (
          /** @type {T} */
          t
        );
      j.flush();
    }
  } finally {
    Or = r;
  }
}
function Vo() {
  try {
    bo();
  } catch (e) {
    jt(e, Bn);
  }
}
let At = null;
function ka(e) {
  var r = e.length;
  if (r !== 0) {
    for (var t = 0; t < r; ) {
      var n = e[t++];
      if ((n.f & (tt | Ie)) === 0 && Jr(n) && (At = /* @__PURE__ */ new Set(), Nr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ui(n), At?.size > 0)) {
        lr.clear();
        for (const a of At) {
          if ((a.f & (tt | Ie)) !== 0) continue;
          const o = [a];
          let d = a.parent;
          for (; d !== null; )
            At.has(d) && (At.delete(d), o.push(d)), d = d.parent;
          for (let c = o.length - 1; c >= 0; c--) {
            const s = o[c];
            (s.f & (tt | Ie)) === 0 && Nr(s);
          }
        }
        At.clear();
      }
    }
    At = null;
  }
}
function Ya(e, r, t, n) {
  if (!t.has(e) && (t.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const o = a.f;
      (o & Ce) !== 0 ? Ya(
        /** @type {Derived} */
        a,
        r,
        t,
        n
      ) : (o & (Br | bt)) !== 0 && (o & Pe) === 0 && Qn(a, r, n) && (me(a, Pe), $n(
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
      if (wr.call(r, a))
        return !0;
      if ((a.f & Ce) !== 0 && Qn(
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
function Ga(e, r) {
  if (!((e.f & dt) !== 0 && (e.f & Te) !== 0)) {
    (e.f & Pe) !== 0 ? r.d.push(e) : (e.f & xt) !== 0 && r.m.push(e), me(e, Te);
    for (var t = e.first; t !== null; )
      Ga(t, r), t = t.next;
  }
}
function Ka(e) {
  me(e, Te);
  for (var r = e.first; r !== null; )
    Ka(r), r = r.next;
}
function Ho(e) {
  let r = 0, t = vr(0), n;
  return () => {
    ra() && (i(t), si(() => (r === 0 && (n = yi(() => e(() => Ir(t)))), r += 1, () => {
      Ht(() => {
        r -= 1, r === 0 && (n?.(), n = void 0, Ir(t));
      });
    })));
  };
}
var qo = Sr | Mr;
function zo(e, r, t, n) {
  new Uo(e, r, t, n);
}
var Xe, Jn, Ze, ir, Be, Qe, Oe, Ye, Pt, or, It, kr, Ur, Wr, Ct, _n, be, Wo, Yo, Go, Hn, ln, fn, qn, zn;
class Uo {
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
    H(this, Jn, null);
    /** @type {BoundaryProps} */
    H(this, Ze);
    /** @type {((anchor: Node) => void)} */
    H(this, ir);
    /** @type {Effect} */
    H(this, Be);
    /** @type {Effect | null} */
    H(this, Qe, null);
    /** @type {Effect | null} */
    H(this, Oe, null);
    /** @type {Effect | null} */
    H(this, Ye, null);
    /** @type {DocumentFragment | null} */
    H(this, Pt, null);
    H(this, or, 0);
    H(this, It, 0);
    H(this, kr, !1);
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
    H(this, Ct, null);
    H(this, _n, Ho(() => (Y(this, Ct, vr(l(this, or))), () => {
      Y(this, Ct, null);
    })));
    Y(this, Xe, r), Y(this, Ze, t), Y(this, ir, (o) => {
      var d = (
        /** @type {Effect} */
        J
      );
      d.b = this, d.f |= In, n(o);
    }), this.parent = /** @type {Effect} */
    J.b, this.transform_error = a ?? this.parent?.transform_error ?? ((o) => o), Y(this, Be, aa(() => {
      fe(this, be, Hn).call(this);
    }, qo));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(r) {
    Ua(r, l(this, Ur), l(this, Wr));
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
    fe(this, be, qn).call(this, r, t), Y(this, or, l(this, or) + r), !(!l(this, Ct) || l(this, kr)) && (Y(this, kr, !0), Ht(() => {
      Y(this, kr, !1), l(this, Ct) && Ar(l(this, Ct), l(this, or));
    }));
  }
  get_effect_pending() {
    return l(this, _n).call(this), i(
      /** @type {Source<number>} */
      l(this, Ct)
    );
  }
  /** @param {unknown} error */
  error(r) {
    if (!l(this, Ze).onerror && !l(this, Ze).failed)
      throw r;
    j?.is_fork ? (l(this, Qe) && j.skip_effect(l(this, Qe)), l(this, Oe) && j.skip_effect(l(this, Oe)), l(this, Ye) && j.skip_effect(l(this, Ye)), j.on_fork_commit(() => {
      fe(this, be, zn).call(this, r);
    })) : fe(this, be, zn).call(this, r);
  }
}
Xe = new WeakMap(), Jn = new WeakMap(), Ze = new WeakMap(), ir = new WeakMap(), Be = new WeakMap(), Qe = new WeakMap(), Oe = new WeakMap(), Ye = new WeakMap(), Pt = new WeakMap(), or = new WeakMap(), It = new WeakMap(), kr = new WeakMap(), Ur = new WeakMap(), Wr = new WeakMap(), Ct = new WeakMap(), _n = new WeakMap(), be = new WeakSet(), Wo = function() {
  try {
    Y(this, Qe, $e(() => l(this, ir).call(this, l(this, Xe))));
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Yo = function(r) {
  const t = l(this, Ze).failed;
  t && Y(this, Ye, $e(() => {
    t(
      l(this, Xe),
      () => r,
      () => () => {
      }
    );
  }));
}, Go = function() {
  const r = l(this, Ze).pending;
  r && (this.is_pending = !0, Y(this, Oe, $e(() => r(l(this, Xe)))), Ht(() => {
    var t = Y(this, Pt, document.createDocumentFragment()), n = qt();
    t.append(n), Y(this, Qe, fe(this, be, fn).call(this, () => $e(() => l(this, ir).call(this, n)))), l(this, It) === 0 && (l(this, Xe).before(t), Y(this, Pt, null), fr(
      /** @type {Effect} */
      l(this, Oe),
      () => {
        Y(this, Oe, null);
      }
    ), fe(this, be, ln).call(
      this,
      /** @type {Batch} */
      j
    ));
  }));
}, Hn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Y(this, It, 0), Y(this, or, 0), Y(this, Qe, $e(() => {
      l(this, ir).call(this, l(this, Xe));
    })), l(this, It) > 0) {
      var r = Y(this, Pt, document.createDocumentFragment());
      sa(l(this, Qe), r);
      const t = (
        /** @type {(anchor: Node) => void} */
        l(this, Ze).pending
      );
      Y(this, Oe, $e(() => t(l(this, Xe))));
    } else
      fe(this, be, ln).call(
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
ln = function(r) {
  this.is_pending = !1, r.transfer_effects(l(this, Ur), l(this, Wr));
}, /**
 * @template T
 * @param {() => T} fn
 */
fn = function(r) {
  var t = J, n = K, a = nt;
  yt(l(this, Be)), at(l(this, Be)), Tr(l(this, Be).ctx);
  try {
    return cr.ensure(), r();
  } catch (o) {
    return qa(o), null;
  } finally {
    yt(t), at(n), Tr(a);
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
  Y(this, It, l(this, It) + r), l(this, It) === 0 && (fe(this, be, ln).call(this, t), l(this, Oe) && fr(l(this, Oe), () => {
    Y(this, Oe, null);
  }), l(this, Pt) && (l(this, Xe).before(l(this, Pt)), Y(this, Pt, null)));
}, /**
 * @param {unknown} error
 */
zn = function(r) {
  l(this, Qe) && (He(l(this, Qe)), Y(this, Qe, null)), l(this, Oe) && (He(l(this, Oe)), Y(this, Oe, null)), l(this, Ye) && (He(l(this, Ye)), Y(this, Ye, null));
  var t = l(this, Ze).onerror;
  let n = l(this, Ze).failed;
  var a = !1, o = !1;
  const d = () => {
    if (a) {
      Ro();
      return;
    }
    a = !0, o && ko(), l(this, Ye) !== null && fr(l(this, Ye), () => {
      Y(this, Ye, null);
    }), fe(this, be, fn).call(this, () => {
      fe(this, be, Hn).call(this);
    });
  }, c = (s) => {
    try {
      o = !0, t?.(s, d), o = !1;
    } catch (v) {
      jt(v, l(this, Be) && l(this, Be).parent);
    }
    n && Y(this, Ye, fe(this, be, fn).call(this, () => {
      try {
        return $e(() => {
          var v = (
            /** @type {Effect} */
            J
          );
          v.b = this, v.f |= In, n(
            l(this, Xe),
            () => s,
            () => d
          );
        });
      } catch (v) {
        return jt(
          v,
          /** @type {Effect} */
          l(this, Be).parent
        ), null;
      }
    }));
  };
  Ht(() => {
    var s;
    try {
      s = this.transform_error(r);
    } catch (v) {
      jt(v, l(this, Be) && l(this, Be).parent);
      return;
    }
    s !== null && typeof s == "object" && typeof /** @type {any} */
    s.then == "function" ? s.then(
      c,
      /** @param {unknown} e */
      (v) => jt(v, l(this, Be) && l(this, Be).parent)
    ) : c(s);
  });
};
function Ko(e, r, t, n) {
  const a = ea;
  var o = e.filter((x) => !x.settled);
  if (t.length === 0 && o.length === 0) {
    n(r.map(a));
    return;
  }
  var d = (
    /** @type {Effect} */
    J
  ), c = Jo(), s = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((x) => x.promise)) : null;
  function v(x) {
    c();
    try {
      n(x);
    } catch (m) {
      (d.f & tt) === 0 && jt(m, d);
    }
    cn();
  }
  if (t.length === 0) {
    s.then(() => v(r.map(a)));
    return;
  }
  var p = Ja();
  function A() {
    Promise.all(t.map((x) => /* @__PURE__ */ Xo(x))).then((x) => v([...r.map(a), ...x])).catch((x) => jt(x, d)).finally(() => p());
  }
  s ? s.then(() => {
    c(), A(), cn();
  }) : A();
}
function Jo() {
  var e = (
    /** @type {Effect} */
    J
  ), r = K, t = nt, n = (
    /** @type {Batch} */
    j
  );
  return function(o = !0) {
    yt(e), at(r), Tr(t), o && (e.f & tt) === 0 && (n?.activate(), n?.apply());
  };
}
function cn(e = !0) {
  yt(null), at(null), Tr(null), e && j?.deactivate();
}
function Ja() {
  var e = (
    /** @type {Effect} */
    J
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
  var r = Ce | Pe;
  return J !== null && (J.f |= Mr), {
    ctx: nt,
    deps: null,
    effects: null,
    equals: Oa,
    f: r,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ne
    ),
    wv: 0,
    parent: J,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Xo(e, r, t) {
  let n = (
    /** @type {Effect | null} */
    J
  );
  n === null && vo();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = vr(
    /** @type {V} */
    Ne
  ), d = !K, c = /* @__PURE__ */ new Map();
  return ds(() => {
    var s = (
      /** @type {Effect} */
      J
    ), v = Ca();
    a = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(cn);
    } catch (m) {
      v.reject(m), cn();
    }
    var p = (
      /** @type {Batch} */
      j
    );
    if (d) {
      if ((s.f & _r) !== 0)
        var A = Ja();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        c.get(p)?.reject(Nt), c.delete(p);
      else {
        for (const m of c.values())
          m.reject(Nt);
        c.clear();
      }
      c.set(p, v);
    }
    const x = (m, w = void 0) => {
      if (A) {
        var B = w === Nt;
        A(B);
      }
      if (!(w === Nt || (s.f & tt) !== 0)) {
        if (p.activate(), w)
          o.f |= Vt, Ar(o, w);
        else {
          (o.f & Vt) !== 0 && (o.f ^= Vt), Ar(o, m);
          for (const [y, D] of c) {
            if (c.delete(y), y === p) break;
            D.reject(Nt);
          }
        }
        p.deactivate();
      }
    };
    v.promise.then(x, (m) => x(null, m || "unknown"));
  }), na(() => {
    for (const s of c.values())
      s.reject(Nt);
  }), new Promise((s) => {
    function v(p) {
      function A() {
        p === a ? s(o) : v(a);
      }
      p.then(A, A);
    }
    v(a);
  });
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
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
  var r, t = J, n = e.parent;
  if (!Ut && n !== null && (n.f & (tt | Ie)) !== 0)
    return Po(), e.v;
  yt(n);
  try {
    e.f &= ~dr, Qo(e), r = gi(e);
  } finally {
    yt(t);
  }
  return r;
}
function Xa(e) {
  var r = ta(e);
  if (!e.equals(r) && (e.wv = hi(), (!j?.is_fork || e.deps === null) && (j !== null ? j.capture(e, r, !0) : e.v = r, e.deps === null))) {
    me(e, Te);
    return;
  }
  Ut || (ft !== null ? (ra() || j?.is_fork) && ft.set(e, r) : Zn(e));
}
function $o(e) {
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && (r.teardown?.(), r.ac?.abort(Nt), r.teardown = so, r.ac = null, Vr(r, 0), ia(r));
}
function Za(e) {
  if (e.effects !== null)
    for (const r of e.effects)
      r.teardown && Nr(r);
}
let Un = /* @__PURE__ */ new Set();
const lr = /* @__PURE__ */ new Map();
let Qa = !1;
function vr(e, r) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Oa,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function W(e, r) {
  const t = vr(e);
  return vi(t), t;
}
// @__NO_SIDE_EFFECTS__
function es(e, r = !1, t = !0) {
  const n = vr(e);
  return r || (n.equals = Ia), n;
}
function k(e, r, t = !1) {
  K !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ut || (K.f & jn) !== 0) && Va() && (K.f & (Ce | bt | Br | jn)) !== 0 && (rt === null || !wr.call(rt, e)) && mo();
  let n = t ? pt(r) : r;
  return Ar(e, n, nn);
}
function Ar(e, r, t = null) {
  if (!e.equals(r)) {
    lr.set(e, Ut ? r : e.v);
    var n = cr.ensure();
    if (n.capture(e, r), (e.f & Ce) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & Pe) !== 0 && ta(a), ft === null && Zn(a);
    }
    e.wv = hi(), $a(e, Pe, t), J !== null && (J.f & Te) !== 0 && (J.f & (dt | zt)) === 0 && (Je === null ? vs([e]) : Je.push(e)), !n.is_fork && Un.size > 0 && !Qa && ts();
  }
  return r;
}
function ts() {
  Qa = !1;
  for (const e of Un)
    (e.f & Te) !== 0 && me(e, xt), Jr(e) && Nr(e);
  Un.clear();
}
function Ir(e) {
  k(e, e.v + 1);
}
function $a(e, r, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, o = 0; o < a; o++) {
      var d = n[o], c = d.f, s = (c & Pe) === 0;
      if (s && me(d, r), (c & Ce) !== 0) {
        var v = (
          /** @type {Derived} */
          d
        );
        ft?.delete(v), (c & dr) === 0 && (c & et && (J === null || (J.f & dn) === 0) && (d.f |= dr), $a(v, xt, t));
      } else if (s) {
        var p = (
          /** @type {Effect} */
          d
        );
        (c & bt) !== 0 && At !== null && At.add(p), t !== null ? t.push(p) : $n(p);
      }
    }
}
function pt(e) {
  if (typeof e != "object" || e === null || Dr in e)
    return e;
  const r = oo(e);
  if (r !== ao && r !== io)
    return e;
  var t = /* @__PURE__ */ new Map(), n = Xn(e), a = /* @__PURE__ */ W(0), o = ur, d = (c) => {
    if (ur === o)
      return c();
    var s = K, v = ur;
    at(null), Aa(o);
    var p = c();
    return at(s), Aa(v), p;
  };
  return n && t.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, s, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && xo();
        var p = t.get(s);
        return p === void 0 ? d(() => {
          var A = /* @__PURE__ */ W(v.value);
          return t.set(s, A), A;
        }) : k(p, v.value, !0), !0;
      },
      deleteProperty(c, s) {
        var v = t.get(s);
        if (v === void 0) {
          if (s in c) {
            const p = d(() => /* @__PURE__ */ W(Ne));
            t.set(s, p), Ir(a);
          }
        } else
          k(v, Ne), Ir(a);
        return !0;
      },
      get(c, s, v) {
        if (s === Dr)
          return e;
        var p = t.get(s), A = s in c;
        if (p === void 0 && (!A || Fr(c, s)?.writable) && (p = d(() => {
          var m = pt(A ? c[s] : Ne), w = /* @__PURE__ */ W(m);
          return w;
        }), t.set(s, p)), p !== void 0) {
          var x = i(p);
          return x === Ne ? void 0 : x;
        }
        return Reflect.get(c, s, v);
      },
      getOwnPropertyDescriptor(c, s) {
        var v = Reflect.getOwnPropertyDescriptor(c, s);
        if (v && "value" in v) {
          var p = t.get(s);
          p && (v.value = i(p));
        } else if (v === void 0) {
          var A = t.get(s), x = A?.v;
          if (A !== void 0 && x !== Ne)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return v;
      },
      has(c, s) {
        if (s === Dr)
          return !0;
        var v = t.get(s), p = v !== void 0 && v.v !== Ne || Reflect.has(c, s);
        if (v !== void 0 || J !== null && (!p || Fr(c, s)?.writable)) {
          v === void 0 && (v = d(() => {
            var x = p ? pt(c[s]) : Ne, m = /* @__PURE__ */ W(x);
            return m;
          }), t.set(s, v));
          var A = i(v);
          if (A === Ne)
            return !1;
        }
        return p;
      },
      set(c, s, v, p) {
        var A = t.get(s), x = s in c;
        if (n && s === "length")
          for (var m = v; m < /** @type {Source<number>} */
          A.v; m += 1) {
            var w = t.get(m + "");
            w !== void 0 ? k(w, Ne) : m in c && (w = d(() => /* @__PURE__ */ W(Ne)), t.set(m + "", w));
          }
        if (A === void 0)
          (!x || Fr(c, s)?.writable) && (A = d(() => /* @__PURE__ */ W(void 0)), k(A, pt(v)), t.set(s, A));
        else {
          x = A.v !== Ne;
          var B = d(() => pt(v));
          k(A, B);
        }
        var y = Reflect.getOwnPropertyDescriptor(c, s);
        if (y?.set && y.set.call(p, v), !x) {
          if (n && typeof s == "string") {
            var D = (
              /** @type {Source<number>} */
              t.get("length")
            ), oe = Number(s);
            Number.isInteger(oe) && oe >= D.v && k(D, oe + 1);
          }
          Ir(a);
        }
        return !0;
      },
      ownKeys(c) {
        i(a);
        var s = Reflect.ownKeys(c).filter((A) => {
          var x = t.get(A);
          return x === void 0 || x.v !== Ne;
        });
        for (var [v, p] of t)
          p.v !== Ne && !(v in c) && s.push(v);
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
function qt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
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
  return /* @__PURE__ */ Bt(e);
}
function Tt(e, r = !1) {
  {
    var t = /* @__PURE__ */ Bt(e);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Kr(t) : t;
  }
}
function b(e, r = 1, t = !1) {
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
    document.createElementNS(r ?? Da, e, void 0)
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
function bn(e) {
  var r = K, t = J;
  at(null), yt(null);
  try {
    return e();
  } finally {
    at(r), yt(t);
  }
}
function ii(e, r, t, n = t) {
  e.addEventListener(r, () => bn(t));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), is();
}
function os(e) {
  J === null && (K === null && go(), po()), Ut && ho();
}
function ss(e, r) {
  var t = r.last;
  t === null ? r.last = r.first = e : (t.next = e, e.prev = t, r.last = e);
}
function Rt(e, r) {
  var t = J;
  t !== null && (t.f & Ie) !== 0 && (e |= Ie);
  var n = {
    ctx: nt,
    deps: null,
    nodes: null,
    f: e | Pe | et,
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
  if ((e & Er) !== 0)
    gr !== null ? gr.push(n) : cr.ensure().schedule(n);
  else if (r !== null) {
    try {
      Nr(n);
    } catch (d) {
      throw He(n), d;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Mr) === 0 && (a = a.first, (e & bt) !== 0 && (e & Sr) !== 0 && a !== null && (a.f |= Sr));
  }
  if (a !== null && (a.parent = t, t !== null && ss(a, t), K !== null && (K.f & Ce) !== 0 && (e & zt) === 0)) {
    var o = (
      /** @type {Derived} */
      K
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return n;
}
function ra() {
  return K !== null && !ut;
}
function na(e) {
  const r = Rt(gn, null);
  return me(r, Te), r.teardown = e, r;
}
function ls(e) {
  os();
  var r = (
    /** @type {Effect} */
    J.f
  ), t = !K && (r & dt) !== 0 && (r & _r) === 0;
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
  return Rt(Er | co, e);
}
function fs(e) {
  cr.ensure();
  const r = Rt(zt | Mr, e);
  return (t = {}) => new Promise((n) => {
    t.outro ? fr(r, () => {
      He(r), n(void 0);
    }) : (He(r), n(void 0));
  });
}
function us(e) {
  return Rt(Er, e);
}
function ds(e) {
  return Rt(Br | Mr, e);
}
function si(e, r = 0) {
  return Rt(gn | r, e);
}
function C(e, r = [], t = [], n = []) {
  Ko(n, r, t, (a) => {
    Rt(gn, () => e(...a.map(i)));
  });
}
function aa(e, r = 0) {
  var t = Rt(bt | r, e);
  return t;
}
function $e(e) {
  return Rt(dt | Mr, e);
}
function li(e) {
  var r = e.teardown;
  if (r !== null) {
    const t = Ut, n = K;
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
    a !== null && bn(() => {
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
  ), t = !0), me(e, ya), ia(e, r && !t), Vr(e, 0);
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
function fr(e, r, t = !0) {
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
        var d = (a.f & Sr) !== 0 || // If this is a branch effect without a block effect parent,
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
    e.f ^= Ie, (e.f & Te) === 0 && (me(e, Pe), cr.ensure().schedule(e));
    for (var t = e.first; t !== null; ) {
      var n = t.next, a = (t.f & Sr) !== 0 || (t.f & dt) !== 0;
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
let un = !1, Ut = !1;
function Ta(e) {
  Ut = e;
}
let K = null, ut = !1;
function at(e) {
  K = e;
}
let J = null;
function yt(e) {
  J = e;
}
let rt = null;
function vi(e) {
  K !== null && (rt === null ? rt = [e] : rt.push(e));
}
let Ve = null, Ue = 0, Je = null;
function vs(e) {
  Je = e;
}
let _i = 1, tr = 0, ur = tr;
function Aa(e) {
  ur = e;
}
function hi() {
  return ++_i;
}
function Jr(e) {
  var r = e.f;
  if ((r & Pe) !== 0)
    return !0;
  if (r & Ce && (e.f &= ~dr), (r & xt) !== 0) {
    for (var t = (
      /** @type {Value[]} */
      e.deps
    ), n = t.length, a = 0; a < n; a++) {
      var o = t[a];
      if (Jr(
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
function pi(e, r, t = !0) {
  var n = e.reactions;
  if (n !== null && !(rt !== null && wr.call(rt, e)))
    for (var a = 0; a < n.length; a++) {
      var o = n[a];
      (o.f & Ce) !== 0 ? pi(
        /** @type {Derived} */
        o,
        r,
        !1
      ) : r === o && (t ? me(o, Pe) : (o.f & Te) !== 0 && me(o, xt), $n(
        /** @type {Effect} */
        o
      ));
    }
}
function gi(e) {
  var B;
  var r = Ve, t = Ue, n = Je, a = K, o = rt, d = nt, c = ut, s = ur, v = e.f;
  Ve = /** @type {null | Value[]} */
  null, Ue = 0, Je = null, K = (v & (dt | zt)) === 0 ? e : null, rt = null, Tr(e.ctx), ut = !1, ur = ++tr, e.ac !== null && (bn(() => {
    e.ac.abort(Nt);
  }), e.ac = null);
  try {
    e.f |= dn;
    var p = (
      /** @type {Function} */
      e.fn
    ), A = p();
    e.f |= _r;
    var x = e.deps, m = j?.is_fork;
    if (Ve !== null) {
      var w;
      if (m || Vr(e, Ue), x !== null && Ue > 0)
        for (x.length = Ue + Ve.length, w = 0; w < Ve.length; w++)
          x[Ue + w] = Ve[w];
      else
        e.deps = x = Ve;
      if (ra() && (e.f & et) !== 0)
        for (w = Ue; w < x.length; w++)
          ((B = x[w]).reactions ?? (B.reactions = [])).push(e);
    } else !m && x !== null && Ue < x.length && (Vr(e, Ue), x.length = Ue);
    if (Va() && Je !== null && !ut && x !== null && (e.f & (Ce | xt | Pe)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Je.length; w++)
        pi(
          Je[w],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (tr++, a.deps !== null)
        for (let y = 0; y < t; y += 1)
          a.deps[y].rv = tr;
      if (r !== null)
        for (const y of r)
          y.rv = tr;
      Je !== null && (n === null ? n = Je : n.push(.../** @type {Source[]} */
      Je));
    }
    return (e.f & Vt) !== 0 && (e.f ^= Vt), A;
  } catch (y) {
    return qa(y);
  } finally {
    e.f ^= dn, Ve = r, Ue = t, Je = n, K = a, rt = o, Tr(d), ut = c, ur = s;
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
  if (t === null && (r.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ve === null || !wr.call(Ve, r))) {
    var o = (
      /** @type {Derived} */
      r
    );
    (o.f & et) !== 0 && (o.f ^= et, o.f &= ~dr), o.v !== Ne && Zn(o), $o(o), Vr(o, 0);
  }
}
function Vr(e, r) {
  var t = e.deps;
  if (t !== null)
    for (var n = r; n < t.length; n++)
      _s(e, t[n]);
}
function Nr(e) {
  var r = e.f;
  if ((r & tt) === 0) {
    me(e, Te);
    var t = J, n = un;
    J = e, un = !0;
    try {
      (r & (bt | Ra)) !== 0 ? cs(e) : ia(e), li(e);
      var a = gi(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = _i;
      var o;
    } finally {
      un = n, J = t;
    }
  }
}
async function hs() {
  await Promise.resolve(), Bo();
}
function i(e) {
  var r = e.f, t = (r & Ce) !== 0;
  if (K !== null && !ut) {
    var n = J !== null && (J.f & tt) !== 0;
    if (!n && (rt === null || !wr.call(rt, e))) {
      var a = K.deps;
      if ((K.f & dn) !== 0)
        e.rv < tr && (e.rv = tr, Ve === null && a !== null && a[Ue] === e ? Ue++ : Ve === null ? Ve = [e] : Ve.push(e));
      else {
        (K.deps ?? (K.deps = [])).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [K] : wr.call(o, K) || o.push(K);
      }
    }
  }
  if (Ut && lr.has(e))
    return lr.get(e);
  if (t) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (Ut) {
      var c = d.v;
      return ((d.f & Te) === 0 && d.reactions !== null || xi(d)) && (c = ta(d)), lr.set(d, c), c;
    }
    var s = (d.f & et) === 0 && !ut && K !== null && (un || (K.f & et) !== 0), v = (d.f & _r) === 0;
    Jr(d) && (s && (d.f |= et), Xa(d)), s && !v && (Za(d), bi(d));
  }
  if (ft?.has(e))
    return ft.get(e);
  if ((e.f & Vt) !== 0)
    throw e.v;
  return e.v;
}
function bi(e) {
  if (e.f |= et, e.deps !== null)
    for (const r of e.deps)
      (r.reactions ?? (r.reactions = [])).push(e), (r.f & Ce) !== 0 && (r.f & et) === 0 && (Za(
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
    if (lr.has(r) || (r.f & Ce) !== 0 && xi(
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
const ps = ["touchstart", "touchmove"];
function gs(e) {
  return ps.includes(e);
}
const rr = Symbol("events"), mi = /* @__PURE__ */ new Set(), Wn = /* @__PURE__ */ new Set();
function bs(e, r, t, n = {}) {
  function a(o) {
    if (n.capture || Yn.call(r, o), !o.cancelBubble)
      return bn(() => t?.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ht(() => {
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
function De(e, r, t) {
  (r[rr] ?? (r[rr] = {}))[e] = t;
}
function xs(e) {
  for (var r = 0; r < e.length; r++)
    mi.add(e[r]);
  for (var t of Wn)
    t(e);
}
let Ma = null;
function Yn(e) {
  var r = this, t = (
    /** @type {Node} */
    r.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Ma = e;
  var d = 0, c = Ma === e && e[rr];
  if (c) {
    var s = a.indexOf(c);
    if (s !== -1 && (r === document || r === /** @type {any} */
    window)) {
      e[rr] = r;
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
    var p = K, A = J;
    at(null), yt(null);
    try {
      for (var x, m = []; o !== null; ) {
        var w = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var B = o[rr]?.[n];
          B != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && B.call(o, e);
        } catch (y) {
          x ? m.push(y) : x = y;
        }
        if (e.cancelBubble || w === r || w === null)
          break;
        o = w;
      }
      if (x) {
        for (let y of m)
          queueMicrotask(() => {
            throw y;
          });
        throw x;
      }
    } finally {
      e[rr] = r, delete e.currentTarget, at(p), yt(A);
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
function Hr(e, r) {
  var t = (
    /** @type {Effect} */
    J
  );
  t.nodes === null && (t.nodes = { start: e, end: r, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function R(e, r) {
  var t = (r & Ao) !== 0, n = (r & No) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = ks(o ? e : "<!>" + e), t || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(a)));
    var d = (
      /** @type {TemplateNode} */
      n || ei ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (t) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bt(d)
      ), s = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Hr(c, s);
    } else
      Hr(d, d);
    return d;
  };
}
function Qt() {
  var e = document.createDocumentFragment(), r = document.createComment(""), t = qt();
  return e.append(r, t), Hr(r, t), e;
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
const rn = /* @__PURE__ */ new Map();
function Es(e, { target: r, anchor: t, props: n = {}, events: a, context: o, intro: d = !0, transformError: c }) {
  ns();
  var s = void 0, v = fs(() => {
    var p = t ?? r.appendChild(qt());
    zo(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (m) => {
        ja({});
        var w = (
          /** @type {ComponentContext} */
          nt
        );
        o && (w.c = o), a && (n.$$events = a), s = e(m, n) || {}, Ba();
      },
      c
    );
    var A = /* @__PURE__ */ new Set(), x = (m) => {
      for (var w = 0; w < m.length; w++) {
        var B = m[w];
        if (!A.has(B)) {
          A.add(B);
          var y = gs(B);
          for (const de of [r, document]) {
            var D = rn.get(de);
            D === void 0 && (D = /* @__PURE__ */ new Map(), rn.set(de, D));
            var oe = D.get(B);
            oe === void 0 ? (de.addEventListener(B, Yn, { passive: y }), D.set(B, 1)) : D.set(B, oe + 1);
          }
        }
      }
    };
    return x(pn(mi)), Wn.add(x), () => {
      for (var m of A)
        for (const y of [r, document]) {
          var w = (
            /** @type {Map<string, number>} */
            rn.get(y)
          ), B = (
            /** @type {number} */
            w.get(m)
          );
          --B == 0 ? (y.removeEventListener(m, Yn), w.delete(m), w.size === 0 && rn.delete(y)) : w.set(m, B);
        }
      Wn.delete(x), p !== t && p.parentNode?.removeChild(p);
    };
  });
  return Gn.set(s, v), s;
}
let Gn = /* @__PURE__ */ new WeakMap();
function Ss(e, r) {
  const t = Gn.get(e);
  return t ? (Gn.delete(e), t(r)) : Promise.resolve();
}
var lt, ht, Ge, sr, Yr, Gr, hn;
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
    H(this, ht, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    H(this, Ge, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    H(this, sr, /* @__PURE__ */ new Set());
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
        ), n = l(this, ht).get(t);
        if (n)
          oa(n), l(this, sr).delete(t);
        else {
          var a = l(this, Ge).get(t);
          a && (l(this, ht).set(t, a.effect), l(this, Ge).delete(t), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [o, d] of l(this, lt)) {
          if (l(this, lt).delete(o), o === r)
            break;
          const c = l(this, Ge).get(d);
          c && (He(c.effect), l(this, Ge).delete(d));
        }
        for (const [o, d] of l(this, ht)) {
          if (o === t || l(this, sr).has(o)) continue;
          const c = () => {
            if (Array.from(l(this, lt).values()).includes(o)) {
              var v = document.createDocumentFragment();
              sa(d, v), v.append(qt()), l(this, Ge).set(o, { effect: d, fragment: v });
            } else
              He(d);
            l(this, sr).delete(o), l(this, ht).delete(o);
          };
          l(this, Yr) || !n ? (l(this, sr).add(o), fr(d, c, !1)) : c();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    H(this, hn, (r) => {
      l(this, lt).delete(r);
      const t = Array.from(l(this, lt).values());
      for (const [n, a] of l(this, Ge))
        t.includes(n) || (He(a.effect), l(this, Ge).delete(n));
    });
    this.anchor = r, Y(this, Yr, t);
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
    if (t && !l(this, ht).has(r) && !l(this, Ge).has(r))
      if (a) {
        var o = document.createDocumentFragment(), d = qt();
        o.append(d), l(this, Ge).set(r, {
          effect: $e(() => t(d)),
          fragment: o
        });
      } else
        l(this, ht).set(
          r,
          $e(() => t(this.anchor))
        );
    if (l(this, lt).set(n, r), a) {
      for (const [c, s] of l(this, ht))
        c === r ? n.unskip_effect(s) : n.skip_effect(s);
      for (const [c, s] of l(this, Ge))
        c === r ? n.unskip_effect(s.effect) : n.skip_effect(s.effect);
      n.oncommit(l(this, Gr)), n.ondiscard(l(this, hn));
    } else
      l(this, Gr).call(this, n);
  }
}
lt = new WeakMap(), ht = new WeakMap(), Ge = new WeakMap(), sr = new WeakMap(), Yr = new WeakMap(), Gr = new WeakMap(), hn = new WeakMap();
function ee(e, r, t = !1) {
  var n = new Ts(e), a = t ? Sr : 0;
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
    let A = r[c];
    fr(
      A,
      () => {
        if (o) {
          if (o.pending.delete(A), o.done.add(A), o.pending.size === 0) {
            var x = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Kn(e, pn(o.done)), x.delete(o), x.size === 0 && (e.outrogroups = null);
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
      ), p = (
        /** @type {Element} */
        v.parentNode
      );
      as(p), p.append(v), e.items.clear();
    }
    Kn(e, r, !s);
  } else
    o = {
      pending: new Set(r),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function Kn(e, r, t = !0) {
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
var La;
function st(e, r, t, n, a, o = null) {
  var d = e, c = /* @__PURE__ */ new Map(), s = (r & Fa) !== 0;
  if (s) {
    var v = (
      /** @type {Element} */
      e
    );
    d = v.appendChild(qt());
  }
  var p = null, A = /* @__PURE__ */ Zo(() => {
    var de = t();
    return Xn(de) ? de : de == null ? [] : pn(de);
  }), x, m = /* @__PURE__ */ new Map(), w = !0;
  function B(de) {
    (oe.effect.f & tt) === 0 && (oe.pending.delete(de), oe.fallback = p, Ns(oe, x, d, r, n), p !== null && (x.length === 0 ? (p.f & gt) === 0 ? oa(p) : (p.f ^= gt, Rr(p, null, d)) : fr(p, () => {
      p = null;
    })));
  }
  function y(de) {
    oe.pending.delete(de);
  }
  var D = aa(() => {
    x = /** @type {V[]} */
    i(A);
    for (var de = x.length, xe = /* @__PURE__ */ new Set(), Le = (
      /** @type {Batch} */
      j
    ), Ke = ni(), he = 0; he < de; he += 1) {
      var je = x[he], qe = n(je, he), pe = w ? null : c.get(qe);
      pe ? (pe.v && Ar(pe.v, je), pe.i && Ar(pe.i, he), Ke && Le.unskip_effect(pe.e)) : (pe = Ms(
        c,
        w ? d : La ?? (La = qt()),
        je,
        qe,
        he,
        a,
        r,
        t
      ), w || (pe.e.f |= gt), c.set(qe, pe)), xe.add(qe);
    }
    if (de === 0 && o && !p && (w ? p = $e(() => o(d)) : (p = $e(() => o(La ?? (La = qt()))), p.f |= gt)), de > xe.size && _o(), !w)
      if (m.set(Le, xe), Ke) {
        for (const [Wt, mt] of c)
          xe.has(Wt) || Le.skip_effect(mt.e);
        Le.oncommit(B), Le.ondiscard(y);
      } else
        B(Le);
    i(A);
  }), oe = { effect: D, items: c, pending: m, outrogroups: null, fallback: p };
  w = !1;
}
function Cr(e) {
  for (; e !== null && (e.f & dt) === 0; )
    e = e.next;
  return e;
}
function Ns(e, r, t, n, a) {
  var o = (n & So) !== 0, d = r.length, c = e.items, s = Cr(e.effect.first), v, p = null, A, x = [], m = [], w, B, y, D;
  if (o)
    for (D = 0; D < d; D += 1)
      w = r[D], B = a(w, D), y = /** @type {EachItem} */
      c.get(B).e, (y.f & gt) === 0 && (y.nodes?.a?.measure(), (A ?? (A = /* @__PURE__ */ new Set())).add(y));
  for (D = 0; D < d; D += 1) {
    if (w = r[D], B = a(w, D), y = /** @type {EachItem} */
    c.get(B).e, e.outrogroups !== null)
      for (const pe of e.outrogroups)
        pe.pending.delete(y), pe.done.delete(y);
    if ((y.f & Ie) !== 0 && (oa(y), o && (y.nodes?.a?.unfix(), (A ?? (A = /* @__PURE__ */ new Set())).delete(y))), (y.f & gt) !== 0)
      if (y.f ^= gt, y === s)
        Rr(y, null, t);
      else {
        var oe = p ? p.next : s;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), Dt(e, p, y), Dt(e, y, oe), Rr(y, oe, t), p = y, x = [], m = [], s = Cr(p.next);
        continue;
      }
    if (y !== s) {
      if (v !== void 0 && v.has(y)) {
        if (x.length < m.length) {
          var de = m[0], xe;
          p = de.prev;
          var Le = x[0], Ke = x[x.length - 1];
          for (xe = 0; xe < x.length; xe += 1)
            Rr(x[xe], de, t);
          for (xe = 0; xe < m.length; xe += 1)
            v.delete(m[xe]);
          Dt(e, Le.prev, Ke.next), Dt(e, p, Le), Dt(e, Ke, de), s = de, p = Ke, D -= 1, x = [], m = [];
        } else
          v.delete(y), Rr(y, s, t), Dt(e, y.prev, y.next), Dt(e, y, p === null ? e.effect.first : p.next), Dt(e, p, y), p = y;
        continue;
      }
      for (x = [], m = []; s !== null && s !== y; )
        (v ?? (v = /* @__PURE__ */ new Set())).add(s), m.push(s), s = Cr(s.next);
      if (s === null)
        continue;
    }
    (y.f & gt) === 0 && x.push(y), p = y, s = Cr(y.next);
  }
  if (e.outrogroups !== null) {
    for (const pe of e.outrogroups)
      pe.pending.size === 0 && (Kn(e, pn(pe.done)), e.outrogroups?.delete(pe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || v !== void 0) {
    var he = [];
    if (v !== void 0)
      for (y of v)
        (y.f & Ie) === 0 && he.push(y);
    for (; s !== null; )
      (s.f & Ie) === 0 && s !== e.fallback && he.push(s), s = Cr(s.next);
    var je = he.length;
    if (je > 0) {
      var qe = (n & Fa) !== 0 && d === 0 ? t : null;
      if (o) {
        for (D = 0; D < je; D += 1)
          he[D].nodes?.a?.measure();
        for (D = 0; D < je; D += 1)
          he[D].nodes?.a?.fix();
      }
      As(e, he, qe);
    }
  }
  o && Ht(() => {
    if (A !== void 0)
      for (y of A)
        y.nodes?.a?.apply();
  });
}
function Ms(e, r, t, n, a, o, d, c) {
  var s = (d & wo) !== 0 ? (d & To) === 0 ? /* @__PURE__ */ es(t, !1, !1) : vr(t) : null, v = (d & Eo) !== 0 ? vr(a) : null;
  return {
    v: s,
    i: v,
    e: $e(() => (o(r, s ?? t, v ?? a, c), () => {
      e.delete(n);
    }))
  };
}
function Rr(e, r, t) {
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
function Fn(e, r, t = !1, n = !1, a = !1, o = !1) {
  var d = e, c = "";
  if (t)
    var s = (
      /** @type {Element} */
      e
    );
  C(() => {
    var v = (
      /** @type {Effect} */
      J
    );
    if (c !== (c = r() ?? "")) {
      if (t) {
        v.nodes = null, s.innerHTML = /** @type {string} */
        c, c !== "" && Hr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Bt(s),
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
        var p = n ? Mo : a ? Lo : void 0, A = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          ai(n ? "svg" : a ? "math" : "template", p)
        );
        A.innerHTML = /** @type {any} */
        c;
        var x = n || a ? A : (
          /** @type {HTMLTemplateElement} */
          A.content
        );
        if (Hr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Bt(x),
          /** @type {TemplateNode} */
          x.lastChild
        ), n || a)
          for (; /* @__PURE__ */ Bt(x); )
            d.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Bt(x)
            );
        else
          d.before(x);
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
function Ls() {
  for (var e, r, t = 0, n = "", a = arguments.length; t < a; t++) (e = arguments[t]) && (r = ki(e)) && (n && (n += " "), n += r);
  return n;
}
function f(e) {
  return typeof e == "object" ? Ls(e) : e ?? "";
}
function Ps(e, r, t) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function u(e, r, t, n, a, o) {
  var d = e.__className;
  if (d !== t || d === void 0) {
    var c = Ps(t);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = t;
  }
  return o;
}
function wi(e, r, t = !1) {
  if (e.multiple) {
    if (r == null)
      return;
    if (!Xn(r))
      return Co();
    for (var n of e.options)
      n.selected = r.includes(jr(n));
    return;
  }
  for (n of e.options) {
    var a = jr(n);
    if (rs(a, r)) {
      n.selected = !0;
      return;
    }
  }
  (!t || r !== void 0) && (e.selectedIndex = -1);
}
function Cs(e) {
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
      c = [].map.call(e.querySelectorAll(d), jr);
    else {
      var s = e.querySelector(d) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      c = s && jr(s);
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
      c !== null && (o = jr(c), t(o));
    }
    e.__value = o, a = !1;
  }), Cs(e);
}
function jr(e) {
  return "__value" in e ? e.__value : e.value;
}
const Fs = Symbol("is custom element"), Ds = Symbol("is html");
function Os(e, r) {
  var t = Is(e);
  t.checked !== (t.checked = // treat null and undefined the same for the initial value
  r ?? void 0) && (e.checked = r);
}
function Is(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Fs]: e.nodeName.includes("-"),
      [Ds]: e.namespaceURI === Da
    })
  );
}
function $t(e, r, t = r) {
  var n = /* @__PURE__ */ new WeakSet();
  ii(e, "input", async (a) => {
    var o = a ? e.defaultValue : e.value;
    if (o = Dn(e) ? On(o) : o, t(o), j !== null && n.add(j), await hs(), o !== (o = r())) {
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
  yi(r) == null && e.value && (t(Dn(e) ? On(e.value) : e.value), j !== null && n.add(j)), si(() => {
    var a = r();
    if (e === document.activeElement) {
      var o = (
        /** @type {Batch} */
        j
      );
      if (n.has(o))
        return;
    }
    Dn(e) && a === On(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function Dn(e) {
  var r = e.type;
  return r === "number" || r === "range";
}
function On(e) {
  return e === "" ? null : +e;
}
const js = "5";
var Pa;
typeof window < "u" && ((Pa = window.__svelte ?? (window.__svelte = {})).v ?? (Pa.v = /* @__PURE__ */ new Set())).add(js);
var Bs = /* @__PURE__ */ R("<div><span> </span> <div><div> </div> <div> </div></div></div>"), Vs = /* @__PURE__ */ R("<p>Select at least one token to view balances</p>"), Hs = /* @__PURE__ */ R("<div><h3>Vault Balances</h3> <div><!> <!></div> <p>On-chain ledger balances for the vault canister</p></div>"), qs = /* @__PURE__ */ R("<span>Copied!</span>"), zs = /* @__PURE__ */ R("<div><span>Last Refresh:</span> <span> </span></div>"), Us = /* @__PURE__ */ R('<label><input type="checkbox"/> <span> </span></label>'), Ws = /* @__PURE__ */ R("<div><h3>Active Tokens</h3> <div></div></div>"), Ys = /* @__PURE__ */ R("<div><div> </div> <div><span>Ledger:</span> <button> </button></div> <div><span>Indexer:</span> <button> </button></div></div>"), Gs = /* @__PURE__ */ R("<div><h3>Ledger Canisters</h3> <div></div></div>"), Ks = /* @__PURE__ */ R("<div> </div>"), Js = /* @__PURE__ */ R("<button> </button>"), Xs = /* @__PURE__ */ R("<div><span> </span> <div><div> </div> <div> </div></div></div>"), Zs = /* @__PURE__ */ R("<p>Select at least one token to view balances</p>"), Qs = /* @__PURE__ */ R("<div><p><span>Principal:</span> <span> </span></p></div>"), $s = /* @__PURE__ */ R("<p> </p>"), el = /* @__PURE__ */ R("<div><h2>Your Balance</h2> <div><!> <!></div> <!> <!></div>"), tl = /* @__PURE__ */ R("<span>✓</span>"), rl = /* @__PURE__ */ R("<button> </button> <!>", 1), nl = /* @__PURE__ */ R("<span>N/A</span>"), al = /* @__PURE__ */ R("<span>✓</span>"), il = /* @__PURE__ */ R("<button> </button> <!>", 1), ol = /* @__PURE__ */ R("<span>N/A</span>"), sl = /* @__PURE__ */ R("<button> </button>"), ll = /* @__PURE__ */ R("<span>N/A</span>"), fl = /* @__PURE__ */ R("<tr><td> </td><td><span> </span></td><td><!></td><td><!></td><td> </td><td><!></td><td><span> </span></td></tr>"), ul = /* @__PURE__ */ R('<tr><td colspan="7">No transactions found</td></tr>'), dl = /* @__PURE__ */ R("<span>…</span>"), cl = /* @__PURE__ */ R("<button> </button>"), vl = /* @__PURE__ */ R("<div><span> </span> <div><button>Prev</button> <!> <button>Next</button></div></div>"), _l = /* @__PURE__ */ R("<div><h2>Transaction History</h2> <div><table><thead><tr><th>ID</th><th>Token</th><th>From</th><th>To</th><th>Amount</th><th>When</th><th>Type</th></tr></thead><tbody></tbody></table></div> <!></div>"), hl = /* @__PURE__ */ R("<option> </option>"), pl = /* @__PURE__ */ R('<div><h2>Transfer Tokens (Admin Only)</h2> <form><div><label for="v-token">Token</label> <select id="v-token"></select></div> <div><label for="v-to">Recipient Principal</label> <input id="v-to" type="text" placeholder="xxxxx-xxxxx-xxxxx-xxxxx-xxx"/></div> <div><label for="v-amount"> </label> <input id="v-amount" type="number" placeholder="100000000"/></div> <div><label for="v-to-sub">To Subaccount (optional, 64-char hex)</label> <input id="v-to-sub" type="text" placeholder="0000000000000000000000000000000000000000000000000000000000000000"/></div> <div><label for="v-from-sub">From Subaccount (optional, 64-char hex)</label> <input id="v-from-sub" type="text" placeholder="0000000000000000000000000000000000000000000000000000000000000000"/></div> <button type="submit"> </button></form></div>'), gl = /* @__PURE__ */ R("<button> </button>"), bl = /* @__PURE__ */ R('<input type="text" placeholder="Enter principal ID"/>'), xl = /* @__PURE__ */ R('<input type="text" placeholder="Enter invoice ID"/>'), yl = /* @__PURE__ */ R('<input type="text" placeholder="Enter 64-char hex subaccount"/>'), ml = /* @__PURE__ */ R("<div><span> </span> <div><div> </div> <div> </div></div></div>"), kl = /* @__PURE__ */ R("<p>No balances found for this subaccount.</p>"), wl = /* @__PURE__ */ R("<div><div><div><span>Account:</span> <span> </span></div> <button> </button></div> <div></div> <!></div>"), El = /* @__PURE__ */ R(`<div><h2>Subaccount Lookup</h2> <p>Look up token balances for a user (by principal) or an invoice (by ID).
					The subaccount is derived using the <code>usr_</code> / <code>inv_</code> prefix convention.</p> <div></div> <form><!> <button type="submit"><!> </button></form> <!></div>`), Sl = /* @__PURE__ */ R("<div> </div>"), Tl = /* @__PURE__ */ R("<div><div> </div> <div> </div> <!></div>"), Al = /* @__PURE__ */ R("<div></div>"), Nl = /* @__PURE__ */ R("<p>No balances found in system</p>"), Ml = /* @__PURE__ */ R("<p> </p>"), Ll = /* @__PURE__ */ R("<p>No transfer data available</p>"), Pl = /* @__PURE__ */ R("<div><h2>Vault Admin</h2> <div><button><!> </button></div> <div><div><h3> </h3> <!></div> <div><h3>All Transfers in System</h3> <!></div></div></div>"), Cl = /* @__PURE__ */ R("<div><div><h1>Vault</h1> <button><!> </button></div> <!> <div><div><span>Vault Principal:</span> <button> </button> <!></div> <!></div> <!> <!> <!> <nav></nav> <div><!></div></div>");
function Rl(e, r) {
  ja(r, !0);
  const t = r.ctx.theme?.cn ?? ((..._) => _.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ W("balance"), a = /* @__PURE__ */ W(!1), o = /* @__PURE__ */ W(""), d = /* @__PURE__ */ W(""), c = /* @__PURE__ */ W(""), s = /* @__PURE__ */ W(pt({})), v = /* @__PURE__ */ W(pt({})), p = /* @__PURE__ */ W(pt({})), A = /* @__PURE__ */ W(!1), x = /* @__PURE__ */ W(0), m = /* @__PURE__ */ W(null), w = /* @__PURE__ */ W(pt([])), B = /* @__PURE__ */ W(null), y = /* @__PURE__ */ W(pt([])), D = /* @__PURE__ */ W(null), oe = /* @__PURE__ */ W(0);
  const de = 10;
  let xe = /* @__PURE__ */ W(!1), Le = /* @__PURE__ */ W(null), Ke = /* @__PURE__ */ W(""), he = /* @__PURE__ */ W(""), je = /* @__PURE__ */ W(""), qe = /* @__PURE__ */ W(0), pe = /* @__PURE__ */ W(""), Wt = /* @__PURE__ */ W(""), mt = /* @__PURE__ */ W("user"), Xr = /* @__PURE__ */ W(""), Zr = /* @__PURE__ */ W(""), Qr = /* @__PURE__ */ W(""), kt = /* @__PURE__ */ W(null), hr = /* @__PURE__ */ W(!1), Ft = /* @__PURE__ */ Zt(() => Object.keys(i(s))), xn = /* @__PURE__ */ Zt(() => Object.values(i(v)).some(Boolean));
  function yn(_) {
    return typeof _ == "string" ? JSON.parse(_) : _;
  }
  async function Yt(_) {
    try {
      await navigator.clipboard.writeText(_), k(Ke, _, !0), setTimeout(() => k(Ke, ""), 2e3);
    } catch {
    }
  }
  function la(_) {
    const g = Math.floor((Date.now() - _.getTime()) / 1e3);
    if (g < 60) return `${g}s ago`;
    const N = Math.floor(g / 60);
    if (N < 60) return `${N}m ago`;
    const T = Math.floor(N / 60);
    return T < 24 ? `${T}h ago` : `${Math.floor(T / 24)}d ago`;
  }
  function Ei(_) {
    const g = String(_);
    if (g.includes("T") || g.includes("-") || g.includes(":")) return new Date(g);
    try {
      return new Date(Number(BigInt(g) / BigInt(1e6)));
    } catch {
      return /* @__PURE__ */ new Date();
    }
  }
  function mn(_, g) {
    return (_ / Math.pow(10, g)).toFixed(g);
  }
  function fa(_, g = 20) {
    return _.length > g ? `${_.substring(0, g)}…` : _;
  }
  async function Si() {
    try {
      const _ = await r.ctx.backend.get_objects_paginated("Token", 0, 100, "asc"), g = yn(_);
      if (g?.success && g?.data?.objectsListPaginated) {
        const N = g.data.objectsListPaginated.objects.map((O) => JSON.parse(O)), T = {}, V = {}, z = {};
        for (const O of N) {
          const Q = O.enabled ?? O._prop_enabled ?? "true", G = O.symbol ?? O._prop_symbol ?? O.name, ne = O.ledger_canister_id ?? O.ledger ?? "", U = O.indexer_canister_id ?? O.indexer ?? "";
          Q === "true" && G && (T[G] = {
            ledger: ne,
            indexer: U,
            decimals: O.decimals || 8,
            symbol: G,
            name: O.name
          }, V[G] = !0, z[G] = 0);
        }
        k(s, T, !0), k(v, V, !0), k(p, z, !0);
        const X = Object.keys(T);
        X.length > 0 && !i(he) && k(he, X[0], !0), k(A, !0);
      }
    } catch (_) {
      console.error("Failed to load tokens:", _);
    }
  }
  async function kn() {
    k(a, !0), k(o, "");
    try {
      i(d) || k(d, r.ctx.principal || "", !0);
      const _ = await r.ctx.backend.get_objects_paginated("WalletBalance", 0, 100, "asc"), g = yn(_);
      if (g?.success && g?.data?.objectsListPaginated) {
        const N = g.data.objectsListPaginated;
        k(B, N.pagination, !0), k(w, N.objects.map((T) => JSON.parse(T)), !0), k(m, i(w).find((T) => T.principal === i(d) || T.id === i(d) || T._id === i(d)), !0), k(x, i(m) && i(m).amount || 0, !0);
      } else
        k(x, 0), k(m, null);
    } catch (_) {
      k(o, _?.message || "Failed to load balance", !0);
    } finally {
      k(a, !1);
    }
  }
  async function $r(_ = i(oe)) {
    k(a, !0), k(o, "");
    try {
      if (!i(c))
        try {
          if (typeof r.ctx.backend.get_canister_id == "function") {
            const T = await r.ctx.backend.get_canister_id();
            k(c, T || "", !0);
          }
        } catch {
          k(c, "");
        }
      const g = await r.ctx.backend.get_objects_paginated("WalletTransfer", _, de, "desc"), N = yn(g);
      if (N?.success && N?.data?.objectsListPaginated) {
        const T = N.data.objectsListPaginated;
        k(D, T.pagination, !0), k(y, T.objects.map((V) => JSON.parse(V)), !0);
      } else
        k(y, [], !0);
    } catch (g) {
      k(o, g?.message || "Failed to load transactions", !0);
    } finally {
      k(a, !1);
    }
  }
  async function Ti(_) {
    try {
      const g = await r.ctx.callSync("get_vault_balance", { token: _ });
      g?.Balance && (i(p)[_] = g.Balance.amount || 0, k(p, { ...i(p) }, !0), k(c, g.Balance.principal_id || i(c), !0));
    } catch (g) {
      console.error(`Failed to load vault balance for ${_}:`, g);
    }
  }
  async function ua() {
    for (const _ of i(Ft))
      i(v)[_] && await Ti(_);
  }
  async function Ai(_) {
    k(xe, !0), k(o, "");
    try {
      const g = await r.ctx.callAsync("refresh_vault_balance", { token: _ });
      g?.Balance ? (i(p)[_] = g.Balance.amount || 0, k(p, { ...i(p) }, !0), k(Le, /* @__PURE__ */ new Date(), !0)) : k(o, "Failed to refresh vault balance");
    } catch (g) {
      k(o, g?.message || "Failed to refresh vault balance", !0);
    } finally {
      k(xe, !1);
    }
  }
  async function Ni() {
    k(xe, !0);
    for (const _ of i(Ft))
      i(v)[_] && await Ai(_);
    k(xe, !1), k(Le, /* @__PURE__ */ new Date(), !0);
  }
  async function Mi() {
    k(a, !0), k(o, "");
    try {
      await r.ctx.callAsync("refresh", {}), k(Le, /* @__PURE__ */ new Date(), !0), await kn(), await ua(), await $r(0);
    } catch (_) {
      k(o, _?.message || "Failed to refresh vault", !0);
    } finally {
      k(a, !1);
    }
  }
  async function Li() {
    if (!i(je) || i(qe) <= 0) {
      k(o, "Please enter valid recipient and amount");
      return;
    }
    k(a, !0), k(o, "");
    try {
      const _ = {
        to_principal: i(je),
        amount: i(qe)
      };
      i(pe).trim() && (_.to_subaccount = i(pe).trim()), i(Wt).trim() && (_.from_subaccount = i(Wt).trim()), i(he) && (_.token = i(he)), await r.ctx.callAsync("transfer", _), k(je, ""), k(qe, 0), k(pe, ""), k(Wt, ""), await kn(), await $r();
    } catch (_) {
      k(o, _?.message || "Failed to perform transfer", !0);
    } finally {
      k(a, !1);
    }
  }
  async function Pi() {
    k(hr, !0), k(kt, null), k(o, "");
    try {
      const _ = {};
      if (i(mt) === "user" && i(Xr).trim())
        _.principal = i(Xr).trim();
      else if (i(mt) === "invoice" && i(Zr).trim())
        _.invoice_id = i(Zr).trim();
      else if (i(mt) === "raw" && i(Qr).trim())
        _.subaccount_hex = i(Qr).trim();
      else {
        k(o, "Please enter a value to look up"), k(hr, !1);
        return;
      }
      const g = await r.ctx.callAsync("lookup_balance", _);
      g?.LookupBalance ? k(kt, g.LookupBalance, !0) : k(o, "Lookup failed");
    } catch (_) {
      k(o, _?.message || "Failed to look up balance", !0);
    } finally {
      k(hr, !1);
    }
  }
  async function wn(_) {
    k(oe, _, !0), await $r(_);
  }
  function Ci(_, g) {
    if (_ <= 7) return Array.from({ length: _ }, (T, V) => V);
    const N = [0];
    g > 3 && N.push("...");
    for (let T = Math.max(1, g - 1); T <= Math.min(_ - 2, g + 1); T++) N.push(T);
    return g < _ - 4 && N.push("..."), N.push(_ - 1), N;
  }
  const Ri = [
    { id: "balance", label: "Balances" },
    { id: "transactions", label: "Transactions" },
    { id: "transfer", label: "Transfer" },
    { id: "lookup", label: "Lookup" },
    { id: "admin", label: "Admin" }
  ], En = '<svg class="inline-block w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>';
  ls(() => {
    (async () => (await Si(), await kn(), await ua(), await $r(0)))();
  });
  var Sn = Cl(), Tn = h(Sn), da = h(Tn), en = b(da, 2), ca = h(en);
  {
    var Fi = (_) => {
      var g = Qt(), N = Tt(g);
      Fn(N, () => En), M(_, g);
    };
    ee(ca, (_) => {
      (i(a) || i(xe)) && _(Fi);
    });
  }
  var Di = b(ca), va = b(Tn, 2);
  {
    var Oi = (_) => {
      var g = Hs(), N = h(g), T = b(N, 2), V = h(T);
      st(V, 17, () => i(Ft), ct, (Q, G) => {
        var ne = Qt(), U = Tt(ne);
        {
          var Z = (te) => {
            var ce = Bs(), ve = h(ce), Se = h(ve), ke = b(ve, 2), L = h(ke), S = h(L), E = b(L, 2), F = h(E);
            C(
              (P, q, $, re, ae, ie, we) => {
                u(ce, 1, P), u(ve, 1, q), I(Se, i(s)[i(G)].symbol), u(ke, 1, $), u(L, 1, re), I(S, ae), u(E, 1, ie), I(F, `${we ?? ""} units`);
              },
              [
                () => f(t("flex items-center justify-between bg-white/60 dark:bg-gray-800/40 rounded-lg p-3")),
                () => f(t("text-base font-semibold text-indigo-900 dark:text-indigo-200")),
                () => f(t("text-right")),
                () => f(t("text-xl font-bold text-indigo-900 dark:text-indigo-100")),
                () => mn(i(p)[i(G)] || 0, i(s)[i(G)].decimals),
                () => f(t("text-xs text-indigo-600 dark:text-indigo-400")),
                () => (i(p)[i(G)] || 0).toLocaleString()
              ]
            ), M(te, ce);
          };
          ee(U, (te) => {
            i(v)[i(G)] && te(Z);
          });
        }
        M(Q, ne);
      });
      var z = b(V, 2);
      {
        var X = (Q) => {
          var G = Vs();
          C((ne) => u(G, 1, ne), [() => f(t("text-sm text-gray-500 italic"))]), M(Q, G);
        };
        ee(z, (Q) => {
          i(xn) || Q(X);
        });
      }
      var O = b(T, 2);
      C(
        (Q, G, ne, U) => {
          u(g, 1, Q), u(N, 1, G), u(T, 1, ne), u(O, 1, U);
        },
        [
          () => f(t("bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl p-5")),
          () => f(t("text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-3")),
          () => f(t("space-y-2")),
          () => f(t("mt-3 text-xs text-indigo-600 dark:text-indigo-400 font-medium"))
        ]
      ), M(_, g);
    };
    ee(va, (_) => {
      i(A) && _(Oi);
    });
  }
  var An = b(va, 2), Nn = h(An), _a = h(Nn), tn = b(_a, 2), Ii = h(tn), ji = b(tn, 2);
  {
    var Bi = (_) => {
      var g = qs();
      C((N) => u(g, 1, N), [
        () => f(t("text-xs text-green-600 dark:text-green-400"))
      ]), M(_, g);
    };
    ee(ji, (_) => {
      i(Ke) === i(c) && i(c) && _(Bi);
    });
  }
  var Vi = b(Nn, 2);
  {
    var Hi = (_) => {
      var g = zs(), N = h(g), T = b(N, 2), V = h(T);
      C(
        (z, X, O, Q) => {
          u(N, 1, z), u(T, 1, X), I(V, `${O ?? ""} (${Q ?? ""})`);
        },
        [
          () => f(t("text-sm font-medium text-gray-600 dark:text-gray-400")),
          () => f(t("ml-2 text-sm text-gray-700 dark:text-gray-300")),
          () => i(Le).toLocaleString(),
          () => la(i(Le))
        ]
      ), M(_, g);
    };
    ee(Vi, (_) => {
      i(Le) && _(Hi);
    });
  }
  var ha = b(An, 2);
  {
    var qi = (_) => {
      var g = Ws(), N = h(g), T = b(N, 2);
      st(T, 21, () => i(Ft), ct, (V, z) => {
        var X = Us(), O = h(X), Q = b(O, 2), G = h(Q);
        C(
          (ne, U, Z) => {
            u(X, 1, ne), Os(O, i(v)[i(z)]), u(O, 1, U), u(Q, 1, Z), I(G, i(s)[i(z)].symbol);
          },
          [
            () => f(t("flex items-center gap-2 cursor-pointer")),
            () => f(t("w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500")),
            () => f(t("text-sm font-medium text-gray-700 dark:text-gray-300"))
          ]
        ), De("change", O, () => {
          i(v)[i(z)] = !i(v)[i(z)], k(v, { ...i(v) }, !0);
        }), M(V, X);
      }), C(
        (V, z, X) => {
          u(g, 1, V), u(N, 1, z), u(T, 1, X);
        },
        [
          () => f(t("bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4")),
          () => f(t("text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2")),
          () => f(t("flex flex-wrap gap-4"))
        ]
      ), M(_, g);
    };
    ee(ha, (_) => {
      i(A) && i(Ft).length > 0 && _(qi);
    });
  }
  var pa = b(ha, 2);
  {
    var zi = (_) => {
      var g = Gs(), N = h(g), T = b(N, 2);
      st(T, 21, () => i(Ft), ct, (V, z) => {
        var X = Qt(), O = Tt(X);
        {
          var Q = (G) => {
            var ne = Ys(), U = h(ne), Z = h(U), te = b(U, 2), ce = h(te), ve = b(ce, 2), Se = h(ve), ke = b(te, 2), L = h(ke), S = b(L, 2), E = h(S);
            C(
              (F, P, q, $, re, ae, ie, we) => {
                u(ne, 1, F), u(U, 1, P), I(Z, i(s)[i(z)].symbol), u(te, 1, q), u(ce, 1, $), u(ve, 1, re), I(Se, i(s)[i(z)].ledger), u(ke, 1, ae), u(L, 1, ie), u(S, 1, we), I(E, i(s)[i(z)].indexer);
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
            ), De("click", ve, () => Yt(i(s)[i(z)].ledger)), De("click", S, () => Yt(i(s)[i(z)].indexer)), M(G, ne);
          };
          ee(O, (G) => {
            i(v)[i(z)] && G(Q);
          });
        }
        M(V, X);
      }), C(
        (V, z, X) => {
          u(g, 1, V), u(N, 1, z), u(T, 1, X);
        },
        [
          () => f(t("bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4")),
          () => f(t("text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2")),
          () => f(t("space-y-2"))
        ]
      ), M(_, g);
    };
    ee(pa, (_) => {
      i(A) && i(xn) && _(zi);
    });
  }
  var ga = b(pa, 2);
  {
    var Ui = (_) => {
      var g = Ks(), N = h(g);
      C(
        (T) => {
          u(g, 1, T), I(N, i(o));
        },
        [
          () => f(t("p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300"))
        ]
      ), M(_, g);
    };
    ee(ga, (_) => {
      i(o) && _(Ui);
    });
  }
  var Mn = b(ga, 2);
  st(Mn, 21, () => Ri, ct, (_, g) => {
    var N = Js(), T = h(N);
    C(
      (V) => {
        u(N, 1, V), I(T, i(g).label);
      },
      [
        () => f(t("px-4 py-2.5 text-sm font-medium border-b-2 transition-colors", i(n) === i(g).id ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"))
      ]
    ), De("click", N, () => {
      k(n, i(g).id, !0);
    }), M(_, N);
  });
  var Wi = b(Mn, 2), Yi = h(Wi);
  {
    var Gi = (_) => {
      var g = el(), N = h(g), T = b(N, 2), V = h(T);
      st(V, 17, () => i(Ft), ct, (U, Z) => {
        var te = Qt(), ce = Tt(te);
        {
          var ve = (Se) => {
            var ke = Xs(), L = h(ke), S = h(L), E = b(L, 2), F = h(E), P = h(F), q = b(F, 2), $ = h(q);
            C(
              (re, ae, ie, we, Re, Me, se) => {
                u(ke, 1, re), u(L, 1, ae), I(S, i(s)[i(Z)].symbol), u(E, 1, ie), u(F, 1, we), I(P, Re), u(q, 1, Me), I($, `${se ?? ""} units`);
              },
              [
                () => f(t("flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg")),
                () => f(t("text-base font-semibold text-gray-700 dark:text-gray-300")),
                () => f(t("text-right")),
                () => f(t("text-xl font-bold text-indigo-600 dark:text-indigo-400")),
                () => mn(i(x), i(s)[i(Z)].decimals),
                () => f(t("text-xs text-gray-500 dark:text-gray-400")),
                () => i(x).toLocaleString()
              ]
            ), M(Se, ke);
          };
          ee(ce, (Se) => {
            i(v)[i(Z)] && Se(ve);
          });
        }
        M(U, te);
      });
      var z = b(V, 2);
      {
        var X = (U) => {
          var Z = Zs();
          C((te) => u(Z, 1, te), [() => f(t("text-sm text-gray-500 italic"))]), M(U, Z);
        };
        ee(z, (U) => {
          i(xn) || U(X);
        });
      }
      var O = b(T, 2);
      {
        var Q = (U) => {
          var Z = Qs(), te = h(Z), ce = h(te), ve = b(ce, 2), Se = h(ve);
          C(
            (ke, L, S, E) => {
              u(Z, 1, ke), u(te, 1, L), u(ce, 1, S), u(ve, 1, E), I(Se, i(m)._id || i(m).id);
            },
            [
              () => f(t("mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg")),
              () => f(t("text-sm text-gray-600 dark:text-gray-400")),
              () => f(t("font-medium")),
              () => f(t("font-mono text-xs ml-1"))
            ]
          ), M(U, Z);
        };
        ee(O, (U) => {
          i(m) && U(Q);
        });
      }
      var G = b(O, 2);
      {
        var ne = (U) => {
          var Z = $s(), te = h(Z);
          C(
            (ce, ve) => {
              u(Z, 1, ce), I(te, `Showing ${i(w).length ?? ""} balance(s) (Page ${ve ?? ""} of ${i(B).total_pages ?? ""})`);
            },
            [
              () => f(t("mt-3 text-xs text-gray-500 dark:text-gray-400")),
              () => Number(i(B).page_num) + 1
            ]
          ), M(U, Z);
        };
        ee(G, (U) => {
          i(B) && U(ne);
        });
      }
      C(
        (U, Z, te) => {
          u(g, 1, U), u(N, 1, Z), u(T, 1, te);
        },
        [
          () => f(t("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6")),
          () => f(t("text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4")),
          () => f(t("space-y-3"))
        ]
      ), M(_, g);
    }, Ki = (_) => {
      var g = _l(), N = h(g), T = b(N, 2), V = h(T), z = h(V), X = h(z), O = h(X), Q = b(O), G = b(Q), ne = b(G), U = b(ne), Z = b(U), te = b(Z), ce = b(z);
      st(
        ce,
        21,
        () => i(y),
        (L) => L._id || L.tx_id || Math.random(),
        (L, S) => {
          var E = fl(), F = h(E), P = h(F), q = b(F), $ = h(q), re = h($), ae = b(q), ie = h(ae);
          {
            var we = (le) => {
              var ye = rl(), ue = Tt(ye), wt = h(ue), Et = b(ue, 2);
              {
                var St = (Fe) => {
                  var ze = tl();
                  C((Jt) => u(ze, 1, Jt), [() => f(t("ml-1 text-xs text-green-600"))]), M(Fe, ze);
                };
                ee(Et, (Fe) => {
                  i(Ke) === i(S).principal_from && Fe(St);
                });
              }
              C(
                (Fe, ze) => {
                  u(ue, 1, Fe), I(wt, ze);
                },
                [
                  () => f(t("text-indigo-600 dark:text-indigo-400 hover:underline text-left")),
                  () => fa(i(S).principal_from)
                ]
              ), De("click", ue, () => Yt(i(S).principal_from)), M(le, ye);
            }, Re = (le) => {
              var ye = nl();
              C((ue) => u(ye, 1, ue), [() => f(t("text-gray-400"))]), M(le, ye);
            };
            ee(ie, (le) => {
              i(S).principal_from ? le(we) : le(Re, -1);
            });
          }
          var Me = b(ae), se = h(Me);
          {
            var _e = (le) => {
              var ye = il(), ue = Tt(ye), wt = h(ue), Et = b(ue, 2);
              {
                var St = (Fe) => {
                  var ze = al();
                  C((Jt) => u(ze, 1, Jt), [() => f(t("ml-1 text-xs text-green-600"))]), M(Fe, ze);
                };
                ee(Et, (Fe) => {
                  i(Ke) === i(S).principal_to && Fe(St);
                });
              }
              C(
                (Fe, ze) => {
                  u(ue, 1, Fe), I(wt, ze);
                },
                [
                  () => f(t("text-indigo-600 dark:text-indigo-400 hover:underline text-left")),
                  () => fa(i(S).principal_to)
                ]
              ), De("click", ue, () => Yt(i(S).principal_to)), M(le, ye);
            }, ge = (le) => {
              var ye = ol();
              C((ue) => u(ye, 1, ue), [() => f(t("text-gray-400"))]), M(le, ye);
            };
            ee(se, (le) => {
              i(S).principal_to ? le(_e) : le(ge, -1);
            });
          }
          var Ae = b(Me), it = h(Ae), Gt = b(Ae), Kt = h(Gt);
          {
            var Lr = (le) => {
              const ye = /* @__PURE__ */ Zt(() => Ei(i(S).timestamp));
              var ue = sl(), wt = h(ue);
              C(
                (Et, St) => {
                  u(ue, 1, Et), I(wt, St);
                },
                [
                  () => f(t("text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline text-left")),
                  () => la(i(ye))
                ]
              ), De("click", ue, () => Yt(i(ye).toLocaleString())), M(le, ue);
            }, Ln = (le) => {
              var ye = ll();
              C((ue) => u(ye, 1, ue), [() => f(t("text-gray-400"))]), M(le, ye);
            };
            ee(Kt, (le) => {
              i(S).timestamp ? le(Lr) : le(Ln, -1);
            });
          }
          var Pr = b(Gt), pr = h(Pr), Pn = h(pr);
          C(
            (le, ye, ue, wt, Et, St, Fe, ze, Jt, Qi, $i) => {
              u(E, 1, le), u(F, 1, ye), I(P, i(S).tx_id || i(S)._id), u(q, 1, ue), u($, 1, wt), I(re, i(S).token || "—"), u(ae, 1, Et), u(Me, 1, St), u(Ae, 1, Fe), I(it, ze), u(Gt, 1, Jt), u(Pr, 1, Qi), u(pr, 1, $i), I(Pn, i(S).kind || "transfer");
            },
            [
              () => f(t("hover:bg-gray-50 dark:hover:bg-gray-700/30")),
              () => f(t("px-4 py-3 text-gray-700 dark:text-gray-300")),
              () => f(t("px-4 py-3")),
              () => f(t("px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 rounded text-xs font-medium")),
              () => f(t("px-4 py-3 font-mono text-xs")),
              () => f(t("px-4 py-3 font-mono text-xs")),
              () => f(t("px-4 py-3 text-gray-700 dark:text-gray-300")),
              () => (i(S).amount || 0).toLocaleString(),
              () => f(t("px-4 py-3")),
              () => f(t("px-4 py-3")),
              () => f(t("px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded text-xs"))
            ]
          ), M(L, E);
        },
        (L) => {
          var S = ul(), E = h(S);
          C((F) => u(E, 1, F), [
            () => f(t("px-4 py-8 text-center text-gray-500 dark:text-gray-400"))
          ]), M(L, S);
        }
      );
      var ve = b(T, 2);
      {
        var Se = (L) => {
          var S = vl(), E = h(S), F = h(E), P = b(E, 2), q = h(P), $ = b(q, 2);
          st($, 17, () => Ci(Number(i(D).total_pages), i(oe)), ct, (ae, ie) => {
            var we = Qt(), Re = Tt(we);
            {
              var Me = (_e) => {
                var ge = dl();
                C((Ae) => u(ge, 1, Ae), [() => f(t("px-1.5 text-xs text-gray-400"))]), M(_e, ge);
              }, se = (_e) => {
                var ge = cl(), Ae = h(ge);
                C(
                  (it) => {
                    u(ge, 1, it), I(Ae, i(ie) + 1);
                  },
                  [
                    () => f(t("px-2.5 py-1 text-xs border rounded", i(oe) === i(ie) ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"))
                  ]
                ), De("click", ge, () => wn(i(ie))), M(_e, ge);
              };
              ee(Re, (_e) => {
                i(ie) === "..." ? _e(Me) : _e(se, -1);
              });
            }
            M(ae, we);
          });
          var re = b($, 2);
          C(
            (ae, ie, we, Re, Me, se) => {
              u(S, 1, ae), u(E, 1, ie), I(F, `${i(y).length ?? ""} of ${i(D).total_items_count ?? ""} (Page ${i(oe) + 1} / ${i(D).total_pages ?? ""})`), u(P, 1, we), q.disabled = i(oe) === 0, u(q, 1, Re), re.disabled = Me, u(re, 1, se);
            },
            [
              () => f(t("p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between")),
              () => f(t("text-xs text-gray-500 dark:text-gray-400")),
              () => f(t("flex items-center gap-1")),
              () => f(t("px-2.5 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed")),
              () => i(oe) >= Number(i(D).total_pages) - 1,
              () => f(t("px-2.5 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"))
            ]
          ), De("click", q, () => wn(i(oe) - 1)), De("click", re, () => wn(i(oe) + 1)), M(L, S);
        }, ke = /* @__PURE__ */ Zt(() => i(D) && Number(i(D).total_pages) > 1);
        ee(ve, (L) => {
          i(ke) && L(Se);
        });
      }
      C(
        (L, S, E, F, P, q, $, re, ae, ie, we, Re, Me) => {
          u(g, 1, L), u(N, 1, S), u(T, 1, E), u(V, 1, F), u(z, 1, P), u(O, 1, q), u(Q, 1, $), u(G, 1, re), u(ne, 1, ae), u(U, 1, ie), u(Z, 1, we), u(te, 1, Re), u(ce, 1, Me);
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
      ), M(_, g);
    }, Ji = (_) => {
      var g = pl(), N = h(g), T = b(N, 2), V = h(T), z = h(V), X = b(z, 2);
      st(X, 21, () => i(Ft), ct, (P, q) => {
        var $ = hl(), re = h($), ae = {};
        C(() => {
          I(re, i(s)[i(q)].symbol), ae !== (ae = i(q)) && ($.value = ($.__value = i(q)) ?? "");
        }), M(P, $);
      });
      var O = b(V, 2), Q = h(O), G = b(Q, 2), ne = b(O, 2), U = h(ne), Z = h(U), te = b(U, 2), ce = b(ne, 2), ve = h(ce), Se = b(ve, 2), ke = b(ce, 2), L = h(ke), S = b(L, 2), E = b(ke, 2), F = h(E);
      C(
        (P, q, $, re, ae, ie, we, Re, Me, se, _e, ge, Ae, it) => {
          u(g, 1, P), u(N, 1, q), u(T, 1, $), u(z, 1, re), u(X, 1, ae), u(Q, 1, ie), u(G, 1, we), u(U, 1, Re), I(Z, `Amount (${(i(s)[i(he)]?.symbol || i(he) || "") ?? ""} units)`), u(te, 1, Me), u(ve, 1, se), u(Se, 1, _e), u(L, 1, ge), u(S, 1, Ae), E.disabled = i(a) || !i(je) || i(qe) <= 0, u(E, 1, it), I(F, i(a) ? "Processing…" : "Transfer");
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
      ), Na("submit", T, (P) => {
        P.preventDefault(), Li();
      }), Rs(X, () => i(he), (P) => k(he, P)), $t(G, () => i(je), (P) => k(je, P)), $t(te, () => i(qe), (P) => k(qe, P)), $t(Se, () => i(pe), (P) => k(pe, P)), $t(S, () => i(Wt), (P) => k(Wt, P)), M(_, g);
    }, Xi = (_) => {
      var g = El(), N = h(g), T = b(N, 2), V = b(h(T)), z = b(V, 2), X = b(T, 2);
      st(
        X,
        20,
        () => [
          { id: "user", label: "User (usr_)" },
          { id: "invoice", label: "Invoice (inv_)" },
          { id: "raw", label: "Raw Hex" }
        ],
        ct,
        (L, S) => {
          var E = gl(), F = h(E);
          C(
            (P) => {
              u(E, 1, P), I(F, S.label);
            },
            [
              () => f(t("px-3 py-1.5 rounded-lg text-sm font-medium transition-colors", i(mt) === S.id ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"))
            ]
          ), De("click", E, () => {
            k(mt, S.id, !0), k(kt, null);
          }), M(L, E);
        }
      );
      var O = b(X, 2), Q = h(O);
      {
        var G = (L) => {
          var S = bl();
          C((E) => u(S, 1, E), [
            () => f(t("flex-1 px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40"))
          ]), $t(S, () => i(Xr), (E) => k(Xr, E)), M(L, S);
        }, ne = (L) => {
          var S = xl();
          C((E) => u(S, 1, E), [
            () => f(t("flex-1 px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40"))
          ]), $t(S, () => i(Zr), (E) => k(Zr, E)), M(L, S);
        }, U = (L) => {
          var S = yl();
          C((E) => u(S, 1, E), [
            () => f(t("flex-1 px-3 py-2 text-sm font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40"))
          ]), $t(S, () => i(Qr), (E) => k(Qr, E)), M(L, S);
        };
        ee(Q, (L) => {
          i(mt) === "user" ? L(G) : i(mt) === "invoice" ? L(ne, 1) : L(U, -1);
        });
      }
      var Z = b(Q, 2), te = h(Z);
      {
        var ce = (L) => {
          var S = Qt(), E = Tt(S);
          Fn(E, () => En), M(L, S);
        };
        ee(te, (L) => {
          i(hr) && L(ce);
        });
      }
      var ve = b(te), Se = b(O, 2);
      {
        var ke = (L) => {
          var S = wl(), E = h(S), F = h(E), P = h(F), q = b(P, 2), $ = h(q), re = b(F, 2), ae = h(re), ie = b(E, 2);
          st(ie, 21, () => Object.entries(i(kt).balances), ct, (se, _e) => {
            var ge = /* @__PURE__ */ Zt(() => fo(i(_e), 2));
            let Ae = () => i(ge)[0], it = () => i(ge)[1];
            const Gt = /* @__PURE__ */ Zt(() => i(s)[Ae()]?.decimals || 8);
            var Kt = ml(), Lr = h(Kt), Ln = h(Lr), Pr = b(Lr, 2), pr = h(Pr), Pn = h(pr), le = b(pr, 2), ye = h(le);
            C(
              (ue, wt, Et, St, Fe, ze, Jt) => {
                u(Kt, 1, ue), u(Lr, 1, wt), I(Ln, Ae()), u(Pr, 1, Et), u(pr, 1, St), I(Pn, Fe), u(le, 1, ze), I(ye, `${Jt ?? ""} units`);
              },
              [
                () => f(t("flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3")),
                () => f(t("text-sm font-semibold text-gray-700 dark:text-gray-300")),
                () => f(t("text-right")),
                () => f(t("text-lg font-bold", Number(it()) > 0 ? "text-green-700 dark:text-green-400" : "text-gray-400")),
                () => mn(Number(it()), i(Gt)),
                () => f(t("text-xs text-gray-500 dark:text-gray-400")),
                () => Number(it()).toLocaleString()
              ]
            ), M(se, Kt);
          });
          var we = b(ie, 2);
          {
            var Re = (se) => {
              var _e = kl();
              C((ge) => u(_e, 1, ge), [() => f(t("text-sm text-gray-500 italic"))]), M(se, _e);
            }, Me = /* @__PURE__ */ Zt(() => Object.values(i(kt).balances).every((se) => Number(se) === 0));
            ee(we, (se) => {
              i(Me) && se(Re);
            });
          }
          C(
            (se, _e, ge, Ae, it, Gt, Kt) => {
              u(S, 1, se), u(E, 1, _e), u(P, 1, ge), u(q, 1, Ae), I($, i(kt).label), u(re, 1, it), I(ae, `${Gt ?? ""}…`), u(ie, 1, Kt);
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
          ), De("click", re, () => Yt(i(kt)?.subaccount_hex || "")), M(L, S);
        };
        ee(Se, (L) => {
          i(kt) && L(ke);
        });
      }
      C(
        (L, S, E, F, P, q, $, re) => {
          u(g, 1, L), u(N, 1, S), u(T, 1, E), u(V, 1, F), u(z, 1, P), u(X, 1, q), u(O, 1, $), Z.disabled = i(hr), u(Z, 1, re), I(ve, ` ${i(hr) ? "Looking up…" : "Lookup"}`);
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
      ), Na("submit", O, (L) => {
        L.preventDefault(), Pi();
      }), M(_, g);
    }, Zi = (_) => {
      var g = Pl(), N = h(g), T = b(N, 2), V = h(T), z = h(V);
      {
        var X = (E) => {
          var F = Qt(), P = Tt(F);
          Fn(P, () => En), M(E, F);
        };
        ee(z, (E) => {
          i(a) && E(X);
        });
      }
      var O = b(z), Q = b(T, 2), G = h(Q), ne = h(G), U = h(ne), Z = b(ne, 2);
      {
        var te = (E) => {
          var F = Al();
          st(F, 21, () => i(w), ct, (P, q) => {
            var $ = Tl(), re = h($), ae = h(re), ie = b(re, 2), we = h(ie), Re = b(ie, 2);
            {
              var Me = (se) => {
                var _e = Sl(), ge = h(_e);
                C(
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
            C(
              (se, _e, ge, Ae) => {
                u($, 1, se), u(re, 1, _e), I(ae, `Principal: ${(i(q).principal || i(q)._id || i(q).id) ?? ""}`), u(ie, 1, ge), I(we, `${Ae ?? ""} units`);
              },
              [
                () => f(t("p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg")),
                () => f(t("font-mono text-xs text-gray-600 dark:text-gray-400 mb-1")),
                () => f(t("text-sm font-semibold text-gray-800 dark:text-gray-200")),
                () => (i(q).amount || 0).toLocaleString()
              ]
            ), M(P, $);
          }), C((P) => u(F, 1, P), [() => f(t("space-y-2 max-h-80 overflow-auto"))]), M(E, F);
        }, ce = (E) => {
          var F = Nl();
          C((P) => u(F, 1, P), [() => f(t("text-gray-500 dark:text-gray-400 text-sm"))]), M(E, F);
        };
        ee(Z, (E) => {
          i(w).length > 0 ? E(te) : E(ce, -1);
        });
      }
      var ve = b(G, 2), Se = h(ve), ke = b(Se, 2);
      {
        var L = (E) => {
          var F = Ml(), P = h(F);
          C(
            (q) => {
              u(F, 1, q), I(P, `Total transfers: ${i(D).total_items_count ?? ""}`);
            },
            [() => f(t("text-sm text-gray-600 dark:text-gray-400"))]
          ), M(E, F);
        }, S = (E) => {
          var F = Ll();
          C((P) => u(F, 1, P), [() => f(t("text-gray-500 dark:text-gray-400 text-sm"))]), M(E, F);
        };
        ee(ke, (E) => {
          i(D) ? E(L) : E(S, -1);
        });
      }
      C(
        (E, F, P, q, $, re, ae) => {
          u(g, 1, E), u(N, 1, F), u(T, 1, P), V.disabled = i(a), u(V, 1, q), I(O, ` ${i(a) ? "Refreshing…" : "Full Vault Refresh"}`), u(Q, 1, $), u(ne, 1, re), I(U, `All Balances in System (${i(w).length ?? ""})`), u(Se, 1, ae);
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
      ), De("click", V, Mi), M(_, g);
    };
    ee(Yi, (_) => {
      i(n) === "balance" ? _(Gi) : i(n) === "transactions" ? _(Ki, 1) : i(n) === "transfer" ? _(Ji, 2) : i(n) === "lookup" ? _(Xi, 3) : i(n) === "admin" && _(Zi, 4);
    });
  }
  C(
    (_, g, N, T, V, z, X, O, Q) => {
      u(Sn, 1, _), u(Tn, 1, g), u(da, 1, N), en.disabled = i(a) || i(xe), u(en, 1, T), I(Di, ` ${i(a) || i(xe) ? "Refreshing…" : "Refresh"}`), u(An, 1, V), u(Nn, 1, z), u(_a, 1, X), u(tn, 1, O), I(Ii, i(c) || "Loading…"), u(Mn, 1, Q);
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
  ), De("click", en, Ni), De("click", tn, () => Yt(i(c))), M(e, Sn), Ba();
}
xs(["click", "change"]);
function Ol(e, r) {
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
  Ol as default
};
