/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */
!(function webpackUniversalModuleDefinition(t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("pdfjs-dist/build/pdf", [], e)
    : "object" == typeof exports
    ? (exports["pdfjs-dist/build/pdf"] = e())
    : (t["pdfjs-dist/build/pdf"] = t.pdfjsLib = e());
})(globalThis, () =>
  (() => {
    "use strict";
    var __webpack_modules__ = [
        ,
        (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.VerbosityLevel =
            e.Util =
            e.UnknownErrorException =
            e.UnexpectedResponseException =
            e.TextRenderingMode =
            e.RenderingIntentFlag =
            e.PromiseCapability =
            e.PermissionFlag =
            e.PasswordResponses =
            e.PasswordException =
            e.PageActionEventType =
            e.OPS =
            e.MissingPDFException =
            e.MAX_IMAGE_SIZE_TO_CACHE =
            e.LINE_FACTOR =
            e.LINE_DESCENT_FACTOR =
            e.InvalidPDFException =
            e.ImageKind =
            e.IDENTITY_MATRIX =
            e.FormatError =
            e.FeatureTest =
            e.FONT_IDENTITY_MATRIX =
            e.DocumentActionEventType =
            e.CMapCompressionType =
            e.BaseException =
            e.BASELINE_FACTOR =
            e.AnnotationType =
            e.AnnotationStateModelType =
            e.AnnotationReviewState =
            e.AnnotationReplyType =
            e.AnnotationMode =
            e.AnnotationMarkedState =
            e.AnnotationFlag =
            e.AnnotationFieldFlag =
            e.AnnotationEditorType =
            e.AnnotationEditorPrefix =
            e.AnnotationEditorParamsType =
            e.AnnotationBorderStyleType =
            e.AnnotationActionEventType =
            e.AbortException =
              void 0;
          e.assert = function assert(t, e) {
            t || unreachable(e);
          };
          e.bytesToString = function bytesToString(t) {
            ("object" == typeof t && void 0 !== t?.length) ||
              unreachable("Invalid argument for bytesToString");
            const e = t.length,
              s = 8192;
            if (e < s) return String.fromCharCode.apply(null, t);
            const i = [];
            for (let n = 0; n < e; n += s) {
              const a = Math.min(n + s, e),
                r = t.subarray(n, a);
              i.push(String.fromCharCode.apply(null, r));
            }
            return i.join("");
          };
          e.createValidAbsoluteUrl = function createValidAbsoluteUrl(
            t,
            e = null,
            s = null
          ) {
            if (!t) return null;
            try {
              if (s && "string" == typeof t) {
                if (s.addDefaultProtocol && t.startsWith("www.")) {
                  const e = t.match(/\./g);
                  e?.length >= 2 && (t = `http://${t}`);
                }
                if (s.tryConvertEncoding)
                  try {
                    t = stringToUTF8String(t);
                  } catch (t) {}
              }
              const i = e ? new URL(t, e) : new URL(t);
              if (
                (function _isValidProtocol(t) {
                  switch (t?.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "mailto:":
                    case "tel:":
                      return !0;
                    default:
                      return !1;
                  }
                })(i)
              )
                return i;
            } catch (t) {}
            return null;
          };
          e.getModificationDate = function getModificationDate(t = new Date()) {
            return [
              t.getUTCFullYear().toString(),
              (t.getUTCMonth() + 1).toString().padStart(2, "0"),
              t.getUTCDate().toString().padStart(2, "0"),
              t.getUTCHours().toString().padStart(2, "0"),
              t.getUTCMinutes().toString().padStart(2, "0"),
              t.getUTCSeconds().toString().padStart(2, "0"),
            ].join("");
          };
          e.getVerbosityLevel = function getVerbosityLevel() {
            return i;
          };
          e.info = function info(t) {
            i >= s.INFOS && console.log(`Info: ${t}`);
          };
          e.isArrayBuffer = function isArrayBuffer(t) {
            return "object" == typeof t && void 0 !== t?.byteLength;
          };
          e.isArrayEqual = function isArrayEqual(t, e) {
            if (t.length !== e.length) return !1;
            for (let s = 0, i = t.length; s < i; s++)
              if (t[s] !== e[s]) return !1;
            return !0;
          };
          e.normalizeUnicode = function normalizeUnicode(t) {
            if (!o) {
              o =
                /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
              l = new Map([["ﬅ", "ſt"]]);
            }
            return t.replaceAll(o, (t, e, s) =>
              e ? e.normalize("NFKC") : l.get(s)
            );
          };
          e.objectFromMap = function objectFromMap(t) {
            const e = Object.create(null);
            for (const [s, i] of t) e[s] = i;
            return e;
          };
          e.objectSize = function objectSize(t) {
            return Object.keys(t).length;
          };
          e.setVerbosityLevel = function setVerbosityLevel(t) {
            Number.isInteger(t) && (i = t);
          };
          e.shadow = shadow;
          e.string32 = function string32(t) {
            return String.fromCharCode(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              255 & t
            );
          };
          e.stringToBytes = stringToBytes;
          e.stringToPDFString = function stringToPDFString(t) {
            if (t[0] >= "ï") {
              let e;
              "þ" === t[0] && "ÿ" === t[1]
                ? (e = "utf-16be")
                : "ÿ" === t[0] && "þ" === t[1]
                ? (e = "utf-16le")
                : "ï" === t[0] && "»" === t[1] && "¿" === t[2] && (e = "utf-8");
              if (e)
                try {
                  const s = new TextDecoder(e, { fatal: !0 }),
                    i = stringToBytes(t);
                  return s.decode(i);
                } catch (t) {
                  warn(`stringToPDFString: "${t}".`);
                }
            }
            const e = [];
            for (let s = 0, i = t.length; s < i; s++) {
              const i = r[t.charCodeAt(s)];
              e.push(i ? String.fromCharCode(i) : t.charAt(s));
            }
            return e.join("");
          };
          e.stringToUTF8String = stringToUTF8String;
          e.unreachable = unreachable;
          e.utf8StringToString = function utf8StringToString(t) {
            return unescape(encodeURIComponent(t));
          };
          e.warn = warn;
          e.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
          e.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
          e.MAX_IMAGE_SIZE_TO_CACHE = 1e7;
          e.LINE_FACTOR = 1.35;
          e.LINE_DESCENT_FACTOR = 0.35;
          e.BASELINE_FACTOR = 0.25925925925925924;
          e.RenderingIntentFlag = {
            ANY: 1,
            DISPLAY: 2,
            PRINT: 4,
            SAVE: 8,
            ANNOTATIONS_FORMS: 16,
            ANNOTATIONS_STORAGE: 32,
            ANNOTATIONS_DISABLE: 64,
            OPLIST: 256,
          };
          e.AnnotationMode = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_FORMS: 2,
            ENABLE_STORAGE: 3,
          };
          e.AnnotationEditorPrefix = "pdfjs_internal_editor_";
          e.AnnotationEditorType = {
            DISABLE: -1,
            NONE: 0,
            FREETEXT: 3,
            INK: 15,
          };
          e.AnnotationEditorParamsType = {
            FREETEXT_SIZE: 1,
            FREETEXT_COLOR: 2,
            FREETEXT_OPACITY: 3,
            INK_COLOR: 11,
            INK_THICKNESS: 12,
            INK_OPACITY: 13,
          };
          e.PermissionFlag = {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048,
          };
          e.TextRenderingMode = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4,
          };
          e.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
          e.AnnotationType = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26,
          };
          e.AnnotationStateModelType = { MARKED: "Marked", REVIEW: "Review" };
          e.AnnotationMarkedState = { MARKED: "Marked", UNMARKED: "Unmarked" };
          e.AnnotationReviewState = {
            ACCEPTED: "Accepted",
            REJECTED: "Rejected",
            CANCELLED: "Cancelled",
            COMPLETED: "Completed",
            NONE: "None",
          };
          e.AnnotationReplyType = { GROUP: "Group", REPLY: "R" };
          e.AnnotationFlag = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512,
          };
          e.AnnotationFieldFlag = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864,
          };
          e.AnnotationBorderStyleType = {
            SOLID: 1,
            DASHED: 2,
            BEVELED: 3,
            INSET: 4,
            UNDERLINE: 5,
          };
          e.AnnotationActionEventType = {
            E: "Mouse Enter",
            X: "Mouse Exit",
            D: "Mouse Down",
            U: "Mouse Up",
            Fo: "Focus",
            Bl: "Blur",
            PO: "PageOpen",
            PC: "PageClose",
            PV: "PageVisible",
            PI: "PageInvisible",
            K: "Keystroke",
            F: "Format",
            V: "Validate",
            C: "Calculate",
          };
          e.DocumentActionEventType = {
            WC: "WillClose",
            WS: "WillSave",
            DS: "DidSave",
            WP: "WillPrint",
            DP: "DidPrint",
          };
          e.PageActionEventType = { O: "PageOpen", C: "PageClose" };
          const s = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
          e.VerbosityLevel = s;
          e.CMapCompressionType = { NONE: 0, BINARY: 1 };
          e.OPS = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91,
          };
          e.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
          let i = s.WARNINGS;
          function warn(t) {
            i >= s.WARNINGS && console.log(`Warning: ${t}`);
          }
          function unreachable(t) {
            throw new Error(t);
          }
          function shadow(t, e, s, i = !1) {
            Object.defineProperty(t, e, {
              value: s,
              enumerable: !i,
              configurable: !0,
              writable: !1,
            });
            return s;
          }
          const n = (function BaseExceptionClosure() {
            function BaseException(t, e) {
              this.constructor === BaseException &&
                unreachable("Cannot initialize BaseException.");
              this.message = t;
              this.name = e;
            }
            BaseException.prototype = new Error();
            BaseException.constructor = BaseException;
            return BaseException;
          })();
          e.BaseException = n;
          e.PasswordException = class PasswordException extends n {
            constructor(t, e) {
              super(t, "PasswordException");
              this.code = e;
            }
          };
          e.UnknownErrorException = class UnknownErrorException extends n {
            constructor(t, e) {
              super(t, "UnknownErrorException");
              this.details = e;
            }
          };
          e.InvalidPDFException = class InvalidPDFException extends n {
            constructor(t) {
              super(t, "InvalidPDFException");
            }
          };
          e.MissingPDFException = class MissingPDFException extends n {
            constructor(t) {
              super(t, "MissingPDFException");
            }
          };
          e.UnexpectedResponseException = class UnexpectedResponseException extends (
            n
          ) {
            constructor(t, e) {
              super(t, "UnexpectedResponseException");
              this.status = e;
            }
          };
          e.FormatError = class FormatError extends n {
            constructor(t) {
              super(t, "FormatError");
            }
          };
          e.AbortException = class AbortException extends n {
            constructor(t) {
              super(t, "AbortException");
            }
          };
          function stringToBytes(t) {
            "string" != typeof t &&
              unreachable("Invalid argument for stringToBytes");
            const e = t.length,
              s = new Uint8Array(e);
            for (let i = 0; i < e; ++i) s[i] = 255 & t.charCodeAt(i);
            return s;
          }
          e.FeatureTest = class FeatureTest {
            static get isLittleEndian() {
              return shadow(
                this,
                "isLittleEndian",
                (function isLittleEndian() {
                  const t = new Uint8Array(4);
                  t[0] = 1;
                  return 1 === new Uint32Array(t.buffer, 0, 1)[0];
                })()
              );
            }
            static get isEvalSupported() {
              return shadow(
                this,
                "isEvalSupported",
                (function isEvalSupported() {
                  try {
                    new Function("");
                    return !0;
                  } catch (t) {
                    return !1;
                  }
                })()
              );
            }
            static get isOffscreenCanvasSupported() {
              return shadow(
                this,
                "isOffscreenCanvasSupported",
                "undefined" != typeof OffscreenCanvas
              );
            }
            static get platform() {
              return "undefined" == typeof navigator
                ? shadow(this, "platform", { isWin: !1, isMac: !1 })
                : shadow(this, "platform", {
                    isWin: navigator.platform.includes("Win"),
                    isMac: navigator.platform.includes("Mac"),
                  });
            }
          };
          const a = [...Array(256).keys()].map((t) =>
            t.toString(16).padStart(2, "0")
          );
          class Util {
            static makeHexColor(t, e, s) {
              return `#${a[t]}${a[e]}${a[s]}`;
            }
            static scaleMinMax(t, e) {
              let s;
              if (t[0]) {
                if (t[0] < 0) {
                  s = e[0];
                  e[0] = e[1];
                  e[1] = s;
                }
                e[0] *= t[0];
                e[1] *= t[0];
                if (t[3] < 0) {
                  s = e[2];
                  e[2] = e[3];
                  e[3] = s;
                }
                e[2] *= t[3];
                e[3] *= t[3];
              } else {
                s = e[0];
                e[0] = e[2];
                e[2] = s;
                s = e[1];
                e[1] = e[3];
                e[3] = s;
                if (t[1] < 0) {
                  s = e[2];
                  e[2] = e[3];
                  e[3] = s;
                }
                e[2] *= t[1];
                e[3] *= t[1];
                if (t[2] < 0) {
                  s = e[0];
                  e[0] = e[1];
                  e[1] = s;
                }
                e[0] *= t[2];
                e[1] *= t[2];
              }
              e[0] += t[4];
              e[1] += t[4];
              e[2] += t[5];
              e[3] += t[5];
            }
            static transform(t, e) {
              return [
                t[0] * e[0] + t[2] * e[1],
                t[1] * e[0] + t[3] * e[1],
                t[0] * e[2] + t[2] * e[3],
                t[1] * e[2] + t[3] * e[3],
                t[0] * e[4] + t[2] * e[5] + t[4],
                t[1] * e[4] + t[3] * e[5] + t[5],
              ];
            }
            static applyTransform(t, e) {
              return [
                t[0] * e[0] + t[1] * e[2] + e[4],
                t[0] * e[1] + t[1] * e[3] + e[5],
              ];
            }
            static applyInverseTransform(t, e) {
              const s = e[0] * e[3] - e[1] * e[2];
              return [
                (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s,
                (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s,
              ];
            }
            static getAxialAlignedBoundingBox(t, e) {
              const s = Util.applyTransform(t, e),
                i = Util.applyTransform(t.slice(2, 4), e),
                n = Util.applyTransform([t[0], t[3]], e),
                a = Util.applyTransform([t[2], t[1]], e);
              return [
                Math.min(s[0], i[0], n[0], a[0]),
                Math.min(s[1], i[1], n[1], a[1]),
                Math.max(s[0], i[0], n[0], a[0]),
                Math.max(s[1], i[1], n[1], a[1]),
              ];
            }
            static inverseTransform(t) {
              const e = t[0] * t[3] - t[1] * t[2];
              return [
                t[3] / e,
                -t[1] / e,
                -t[2] / e,
                t[0] / e,
                (t[2] * t[5] - t[4] * t[3]) / e,
                (t[4] * t[1] - t[5] * t[0]) / e,
              ];
            }
            static singularValueDecompose2dScale(t) {
              const e = [t[0], t[2], t[1], t[3]],
                s = t[0] * e[0] + t[1] * e[2],
                i = t[0] * e[1] + t[1] * e[3],
                n = t[2] * e[0] + t[3] * e[2],
                a = t[2] * e[1] + t[3] * e[3],
                r = (s + a) / 2,
                o = Math.sqrt((s + a) ** 2 - 4 * (s * a - n * i)) / 2,
                l = r + o || 1,
                c = r - o || 1;
              return [Math.sqrt(l), Math.sqrt(c)];
            }
            static normalizeRect(t) {
              const e = t.slice(0);
              if (t[0] > t[2]) {
                e[0] = t[2];
                e[2] = t[0];
              }
              if (t[1] > t[3]) {
                e[1] = t[3];
                e[3] = t[1];
              }
              return e;
            }
            static intersect(t, e) {
              const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
                i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
              if (s > i) return null;
              const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
              return n > a ? null : [s, n, i, a];
            }
            static bezierBoundingBox(t, e, s, i, n, a, r, o) {
              const l = [],
                c = [[], []];
              let h, d, u, p, f, g, m, b;
              for (let c = 0; c < 2; ++c) {
                if (0 === c) {
                  d = 6 * t - 12 * s + 6 * n;
                  h = -3 * t + 9 * s - 9 * n + 3 * r;
                  u = 3 * s - 3 * t;
                } else {
                  d = 6 * e - 12 * i + 6 * a;
                  h = -3 * e + 9 * i - 9 * a + 3 * o;
                  u = 3 * i - 3 * e;
                }
                if (Math.abs(h) < 1e-12) {
                  if (Math.abs(d) < 1e-12) continue;
                  p = -u / d;
                  0 < p && p < 1 && l.push(p);
                } else {
                  m = d * d - 4 * u * h;
                  b = Math.sqrt(m);
                  if (!(m < 0)) {
                    f = (-d + b) / (2 * h);
                    0 < f && f < 1 && l.push(f);
                    g = (-d - b) / (2 * h);
                    0 < g && g < 1 && l.push(g);
                  }
                }
              }
              let A,
                _ = l.length;
              const y = _;
              for (; _--; ) {
                p = l[_];
                A = 1 - p;
                c[0][_] =
                  A * A * A * t +
                  3 * A * A * p * s +
                  3 * A * p * p * n +
                  p * p * p * r;
                c[1][_] =
                  A * A * A * e +
                  3 * A * A * p * i +
                  3 * A * p * p * a +
                  p * p * p * o;
              }
              c[0][y] = t;
              c[1][y] = e;
              c[0][y + 1] = r;
              c[1][y + 1] = o;
              c[0].length = c[1].length = y + 2;
              return [
                Math.min(...c[0]),
                Math.min(...c[1]),
                Math.max(...c[0]),
                Math.max(...c[1]),
              ];
            }
          }
          e.Util = Util;
          const r = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224,
            8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222,
            8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352,
            376, 381, 305, 322, 339, 353, 382, 0, 8364,
          ];
          function stringToUTF8String(t) {
            return decodeURIComponent(escape(t));
          }
          e.PromiseCapability = class PromiseCapability {
            #t = !1;
            constructor() {
              this.promise = new Promise((t, e) => {
                this.resolve = (e) => {
                  this.#t = !0;
                  t(e);
                };
                this.reject = (t) => {
                  this.#t = !0;
                  e(t);
                };
              });
            }
            get settled() {
              return this.#t;
            }
          };
          let o = null,
            l = null;
        },
        (__unused_webpack_module, exports, __w_pdfjs_require__) => {
          Object.defineProperty(exports, "__esModule", { value: !0 });
          exports.build =
            exports.RenderTask =
            exports.PDFWorkerUtil =
            exports.PDFWorker =
            exports.PDFPageProxy =
            exports.PDFDocumentProxy =
            exports.PDFDocumentLoadingTask =
            exports.PDFDataRangeTransport =
            exports.LoopbackPort =
            exports.DefaultStandardFontDataFactory =
            exports.DefaultFilterFactory =
            exports.DefaultCanvasFactory =
            exports.DefaultCMapReaderFactory =
              void 0;
          exports.getDocument = getDocument;
          exports.version = void 0;
          var _util = __w_pdfjs_require__(1),
            _annotation_storage = __w_pdfjs_require__(3),
            _display_utils = __w_pdfjs_require__(6),
            _font_loader = __w_pdfjs_require__(9),
            _canvas = __w_pdfjs_require__(11),
            _worker_options = __w_pdfjs_require__(14),
            _is_node = __w_pdfjs_require__(10),
            _message_handler = __w_pdfjs_require__(15),
            _metadata = __w_pdfjs_require__(16),
            _optional_content_config = __w_pdfjs_require__(17),
            _transport_stream = __w_pdfjs_require__(18),
            _xfa_text = __w_pdfjs_require__(19);
          const DEFAULT_RANGE_CHUNK_SIZE = 65536,
            RENDERING_CANCELLED_TIMEOUT = 100,
            DELAYED_CLEANUP_TIMEOUT = 5e3;
          let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
          exports.DefaultCanvasFactory = DefaultCanvasFactory;
          let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
          let DefaultFilterFactory = _display_utils.DOMFilterFactory;
          exports.DefaultFilterFactory = DefaultFilterFactory;
          let DefaultStandardFontDataFactory =
              _display_utils.DOMStandardFontDataFactory,
            createPDFNetworkStream;
          exports.DefaultStandardFontDataFactory =
            DefaultStandardFontDataFactory;
          if (_is_node.isNodeJS) {
            const {
              NodeCanvasFactory: t,
              NodeCMapReaderFactory: e,
              NodeFilterFactory: s,
              NodeStandardFontDataFactory: i,
            } = __w_pdfjs_require__(20);
            exports.DefaultCanvasFactory = DefaultCanvasFactory = t;
            exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = e;
            exports.DefaultFilterFactory = DefaultFilterFactory = s;
            exports.DefaultStandardFontDataFactory =
              DefaultStandardFontDataFactory = i;
          }
          if (_is_node.isNodeJS) {
            const { PDFNodeStream: t } = __w_pdfjs_require__(21);
            createPDFNetworkStream = (e) => new t(e);
          } else {
            const { PDFNetworkStream: t } = __w_pdfjs_require__(24),
              { PDFFetchStream: e } = __w_pdfjs_require__(25);
            createPDFNetworkStream = (s) =>
              (0, _display_utils.isValidFetchUrl)(s.url) ? new e(s) : new t(s);
          }
          function getDocument(t) {
            "string" == typeof t || t instanceof URL
              ? (t = { url: t })
              : (0, _util.isArrayBuffer)(t) && (t = { data: t });
            if ("object" != typeof t)
              throw new Error(
                "Invalid parameter in getDocument, need parameter object."
              );
            if (!t.url && !t.data && !t.range)
              throw new Error(
                "Invalid parameter object: need either .data, .range or .url"
              );
            const e = new PDFDocumentLoadingTask(),
              { docId: s } = e,
              i = t.url ? getUrlProp(t.url) : null,
              n = t.data ? getDataProp(t.data) : null,
              a = t.httpHeaders || null,
              r = !0 === t.withCredentials,
              o = t.password ?? null,
              l = t.range instanceof PDFDataRangeTransport ? t.range : null,
              c =
                Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0
                  ? t.rangeChunkSize
                  : DEFAULT_RANGE_CHUNK_SIZE;
            let h = t.worker instanceof PDFWorker ? t.worker : null;
            const d = t.verbosity,
              u =
                "string" != typeof t.docBaseUrl ||
                (0, _display_utils.isDataScheme)(t.docBaseUrl)
                  ? null
                  : t.docBaseUrl,
              p = "string" == typeof t.cMapUrl ? t.cMapUrl : null,
              f = !1 !== t.cMapPacked,
              g = t.CMapReaderFactory || DefaultCMapReaderFactory,
              m =
                "string" == typeof t.standardFontDataUrl
                  ? t.standardFontDataUrl
                  : null,
              b = t.StandardFontDataFactory || DefaultStandardFontDataFactory,
              A = !0 !== t.stopAtErrors,
              _ =
                Number.isInteger(t.maxImageSize) && t.maxImageSize > -1
                  ? t.maxImageSize
                  : -1,
              y = !1 !== t.isEvalSupported,
              v =
                "boolean" == typeof t.isOffscreenCanvasSupported
                  ? t.isOffscreenCanvasSupported
                  : !_is_node.isNodeJS,
              S = Number.isInteger(t.canvasMaxAreaInBytes)
                ? t.canvasMaxAreaInBytes
                : -1,
              x =
                "boolean" == typeof t.disableFontFace
                  ? t.disableFontFace
                  : _is_node.isNodeJS,
              C = !0 === t.fontExtraProperties,
              E = !0 === t.enableXfa,
              P = t.ownerDocument || globalThis.document,
              w = !0 === t.disableRange,
              T = !0 === t.disableStream,
              F = !0 === t.disableAutoFetch,
              k = !0 === t.pdfBug,
              M = l ? l.length : t.length ?? NaN,
              R =
                "boolean" == typeof t.useSystemFonts
                  ? t.useSystemFonts
                  : !_is_node.isNodeJS && !x,
              D =
                "boolean" == typeof t.useWorkerFetch
                  ? t.useWorkerFetch
                  : g === _display_utils.DOMCMapReaderFactory &&
                    b === _display_utils.DOMStandardFontDataFactory &&
                    (0, _display_utils.isValidFetchUrl)(p, document.baseURI) &&
                    (0, _display_utils.isValidFetchUrl)(m, document.baseURI),
              I =
                t.canvasFactory ||
                new DefaultCanvasFactory({ ownerDocument: P }),
              O =
                t.filterFactory ||
                new DefaultFilterFactory({ docId: s, ownerDocument: P });
            (0, _util.setVerbosityLevel)(d);
            const L = { canvasFactory: I, filterFactory: O };
            if (!D) {
              L.cMapReaderFactory = new g({ baseUrl: p, isCompressed: f });
              L.standardFontDataFactory = new b({ baseUrl: m });
            }
            if (!h) {
              const t = {
                verbosity: d,
                port: _worker_options.GlobalWorkerOptions.workerPort,
              };
              h = t.port ? PDFWorker.fromPort(t) : new PDFWorker(t);
              e._worker = h;
            }
            const N = {
                docId: s,
                apiVersion: "3.6.172",
                data: n,
                password: o,
                disableAutoFetch: F,
                rangeChunkSize: c,
                length: M,
                docBaseUrl: u,
                enableXfa: E,
                evaluatorOptions: {
                  maxImageSize: _,
                  disableFontFace: x,
                  ignoreErrors: A,
                  isEvalSupported: y,
                  isOffscreenCanvasSupported: v,
                  canvasMaxAreaInBytes: S,
                  fontExtraProperties: C,
                  useSystemFonts: R,
                  cMapUrl: D ? p : null,
                  standardFontDataUrl: D ? m : null,
                },
              },
              B = {
                ignoreErrors: A,
                isEvalSupported: y,
                disableFontFace: x,
                fontExtraProperties: C,
                enableXfa: E,
                ownerDocument: P,
                disableAutoFetch: F,
                pdfBug: k,
                styleElement: null,
              };
            h.promise
              .then(function () {
                if (e.destroyed) throw new Error("Loading aborted");
                const t = _fetchDocument(h, N),
                  o = new Promise(function (t) {
                    let e;
                    l
                      ? (e = new _transport_stream.PDFDataTransportStream(
                          {
                            length: M,
                            initialData: l.initialData,
                            progressiveDone: l.progressiveDone,
                            contentDispositionFilename:
                              l.contentDispositionFilename,
                            disableRange: w,
                            disableStream: T,
                          },
                          l
                        ))
                      : n ||
                        (e = createPDFNetworkStream({
                          url: i,
                          length: M,
                          httpHeaders: a,
                          withCredentials: r,
                          rangeChunkSize: c,
                          disableRange: w,
                          disableStream: T,
                        }));
                    t(e);
                  });
                return Promise.all([t, o]).then(function ([t, i]) {
                  if (e.destroyed) throw new Error("Loading aborted");
                  const n = new _message_handler.MessageHandler(s, t, h.port),
                    a = new WorkerTransport(n, e, i, B, L);
                  e._transport = a;
                  n.send("Ready", null);
                });
              })
              .catch(e._capability.reject);
            return e;
          }
          async function _fetchDocument(t, e) {
            if (t.destroyed) throw new Error("Worker was destroyed");
            const s = await t.messageHandler.sendWithPromise(
              "GetDocRequest",
              e,
              e.data ? [e.data.buffer] : null
            );
            if (t.destroyed) throw new Error("Worker was destroyed");
            return s;
          }
          function getUrlProp(t) {
            if (t instanceof URL) return t.href;
            try {
              return new URL(t, window.location).href;
            } catch (e) {
              if (_is_node.isNodeJS && "string" == typeof t) return t;
            }
            throw new Error(
              "Invalid PDF url data: either string or URL-object is expected in the url property."
            );
          }
          function getDataProp(t) {
            if (
              _is_node.isNodeJS &&
              "undefined" != typeof Buffer &&
              t instanceof Buffer
            ) {
              (0, _display_utils.deprecated)(
                "Please provide binary data as `Uint8Array`, rather than `Buffer`."
              );
              return new Uint8Array(t);
            }
            if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength)
              return t;
            if ("string" == typeof t) return (0, _util.stringToBytes)(t);
            if (
              ("object" == typeof t && !isNaN(t?.length)) ||
              (0, _util.isArrayBuffer)(t)
            )
              return new Uint8Array(t);
            throw new Error(
              "Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property."
            );
          }
          class PDFDocumentLoadingTask {
            static #e = 0;
            constructor() {
              this._capability = new _util.PromiseCapability();
              this._transport = null;
              this._worker = null;
              this.docId = "d" + PDFDocumentLoadingTask.#e++;
              this.destroyed = !1;
              this.onPassword = null;
              this.onProgress = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              this.destroyed = !0;
              await this._transport?.destroy();
              this._transport = null;
              if (this._worker) {
                this._worker.destroy();
                this._worker = null;
              }
            }
          }
          exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
          class PDFDataRangeTransport {
            constructor(t, e, s = !1, i = null) {
              this.length = t;
              this.initialData = e;
              this.progressiveDone = s;
              this.contentDispositionFilename = i;
              this._rangeListeners = [];
              this._progressListeners = [];
              this._progressiveReadListeners = [];
              this._progressiveDoneListeners = [];
              this._readyCapability = new _util.PromiseCapability();
            }
            addRangeListener(t) {
              this._rangeListeners.push(t);
            }
            addProgressListener(t) {
              this._progressListeners.push(t);
            }
            addProgressiveReadListener(t) {
              this._progressiveReadListeners.push(t);
            }
            addProgressiveDoneListener(t) {
              this._progressiveDoneListeners.push(t);
            }
            onDataRange(t, e) {
              for (const s of this._rangeListeners) s(t, e);
            }
            onDataProgress(t, e) {
              this._readyCapability.promise.then(() => {
                for (const s of this._progressListeners) s(t, e);
              });
            }
            onDataProgressiveRead(t) {
              this._readyCapability.promise.then(() => {
                for (const e of this._progressiveReadListeners) e(t);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const t of this._progressiveDoneListeners) t();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(t, e) {
              (0, _util.unreachable)(
                "Abstract method PDFDataRangeTransport.requestDataRange"
              );
            }
            abort() {}
          }
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          class PDFDocumentProxy {
            constructor(t, e) {
              this._pdfInfo = t;
              this._transport = e;
            }
            get annotationStorage() {
              return this._transport.annotationStorage;
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get numPages() {
              return this._pdfInfo.numPages;
            }
            get fingerprints() {
              return this._pdfInfo.fingerprints;
            }
            get isPureXfa() {
              return (0, _util.shadow)(
                this,
                "isPureXfa",
                !!this._transport._htmlForXfa
              );
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(t) {
              return this._transport.getPage(t);
            }
            getPageIndex(t) {
              return this._transport.getPageIndex(t);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(t) {
              return this._transport.getDestination(t);
            }
            getPageLabels() {
              return this._transport.getPageLabels();
            }
            getPageLayout() {
              return this._transport.getPageLayout();
            }
            getPageMode() {
              return this._transport.getPageMode();
            }
            getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
            getOpenAction() {
              return this._transport.getOpenAction();
            }
            getAttachments() {
              return this._transport.getAttachments();
            }
            getJavaScript() {
              return this._transport.getJavaScript();
            }
            getJSActions() {
              return this._transport.getDocJSActions();
            }
            getOutline() {
              return this._transport.getOutline();
            }
            getOptionalContentConfig() {
              return this._transport.getOptionalContentConfig();
            }
            getPermissions() {
              return this._transport.getPermissions();
            }
            getMetadata() {
              return this._transport.getMetadata();
            }
            getMarkInfo() {
              return this._transport.getMarkInfo();
            }
            getData() {
              return this._transport.getData();
            }
            saveDocument() {
              return this._transport.saveDocument();
            }
            getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
            cleanup(t = !1) {
              return this._transport.startCleanup(t || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            get loadingParams() {
              return this._transport.loadingParams;
            }
            get loadingTask() {
              return this._transport.loadingTask;
            }
            getFieldObjects() {
              return this._transport.getFieldObjects();
            }
            hasJSActions() {
              return this._transport.hasJSActions();
            }
            getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }
          exports.PDFDocumentProxy = PDFDocumentProxy;
          class PDFPageProxy {
            #s = null;
            #i = !1;
            constructor(t, e, s, i = !1) {
              this._pageIndex = t;
              this._pageInfo = e;
              this._transport = s;
              this._stats = i ? new _display_utils.StatTimer() : null;
              this._pdfBug = i;
              this.commonObjs = s.commonObjs;
              this.objs = new PDFObjects();
              this._maybeCleanupAfterRender = !1;
              this._intentStates = new Map();
              this.destroyed = !1;
            }
            get pageNumber() {
              return this._pageIndex + 1;
            }
            get rotate() {
              return this._pageInfo.rotate;
            }
            get ref() {
              return this._pageInfo.ref;
            }
            get userUnit() {
              return this._pageInfo.userUnit;
            }
            get view() {
              return this._pageInfo.view;
            }
            getViewport({
              scale: t,
              rotation: e = this.rotate,
              offsetX: s = 0,
              offsetY: i = 0,
              dontFlip: n = !1,
            } = {}) {
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: t,
                rotation: e,
                offsetX: s,
                offsetY: i,
                dontFlip: n,
              });
            }
            getAnnotations({ intent: t = "display" } = {}) {
              const e = this._transport.getRenderingIntent(t);
              return this._transport.getAnnotations(
                this._pageIndex,
                e.renderingIntent
              );
            }
            getJSActions() {
              return this._transport.getPageJSActions(this._pageIndex);
            }
            get isPureXfa() {
              return (0, _util.shadow)(
                this,
                "isPureXfa",
                !!this._transport._htmlForXfa
              );
            }
            async getXfa() {
              return (
                this._transport._htmlForXfa?.children[this._pageIndex] || null
              );
            }
            render({
              canvasContext: t,
              viewport: e,
              intent: s = "display",
              annotationMode: i = _util.AnnotationMode.ENABLE,
              transform: n = null,
              background: a = null,
              optionalContentConfigPromise: r = null,
              annotationCanvasMap: o = null,
              pageColors: l = null,
              printAnnotationStorage: c = null,
            }) {
              if (arguments[0]?.canvasFactory)
                throw new Error(
                  "render no longer accepts the `canvasFactory`-option, please pass it to the `getDocument`-function instead."
                );
              this._stats?.time("Overall");
              const h = this._transport.getRenderingIntent(s, i, c);
              this.#i = !1;
              this.#n();
              r || (r = this._transport.getOptionalContentConfig());
              let d = this._intentStates.get(h.cacheKey);
              if (!d) {
                d = Object.create(null);
                this._intentStates.set(h.cacheKey, d);
              }
              if (d.streamReaderCancelTimeout) {
                clearTimeout(d.streamReaderCancelTimeout);
                d.streamReaderCancelTimeout = null;
              }
              const u = !!(h.renderingIntent & _util.RenderingIntentFlag.PRINT);
              if (!d.displayReadyCapability) {
                d.displayReadyCapability = new _util.PromiseCapability();
                d.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: !1,
                  separateAnnots: null,
                };
                this._stats?.time("Page Request");
                this._pumpOperatorList(h);
              }
              const complete = (t) => {
                  d.renderTasks.delete(p);
                  (this._maybeCleanupAfterRender || u) && (this.#i = !0);
                  this.#a(!u);
                  if (t) {
                    p.capability.reject(t);
                    this._abortOperatorList({
                      intentState: d,
                      reason: t instanceof Error ? t : new Error(t),
                    });
                  } else p.capability.resolve();
                  this._stats?.timeEnd("Rendering");
                  this._stats?.timeEnd("Overall");
                },
                p = new InternalRenderTask({
                  callback: complete,
                  params: {
                    canvasContext: t,
                    viewport: e,
                    transform: n,
                    background: a,
                  },
                  objs: this.objs,
                  commonObjs: this.commonObjs,
                  annotationCanvasMap: o,
                  operatorList: d.operatorList,
                  pageIndex: this._pageIndex,
                  canvasFactory: this._transport.canvasFactory,
                  filterFactory: this._transport.filterFactory,
                  useRequestAnimationFrame: !u,
                  pdfBug: this._pdfBug,
                  pageColors: l,
                });
              (d.renderTasks ||= new Set()).add(p);
              const f = p.task;
              Promise.all([d.displayReadyCapability.promise, r])
                .then(([t, e]) => {
                  if (this.#i) complete();
                  else {
                    this._stats?.time("Rendering");
                    p.initializeGraphics({
                      transparency: t,
                      optionalContentConfig: e,
                    });
                    p.operatorListChanged();
                  }
                })
                .catch(complete);
              return f;
            }
            getOperatorList({
              intent: t = "display",
              annotationMode: e = _util.AnnotationMode.ENABLE,
              printAnnotationStorage: s = null,
            } = {}) {
              const i = this._transport.getRenderingIntent(t, e, s, !0);
              let n,
                a = this._intentStates.get(i.cacheKey);
              if (!a) {
                a = Object.create(null);
                this._intentStates.set(i.cacheKey, a);
              }
              if (!a.opListReadCapability) {
                n = Object.create(null);
                n.operatorListChanged = function operatorListChanged() {
                  if (a.operatorList.lastChunk) {
                    a.opListReadCapability.resolve(a.operatorList);
                    a.renderTasks.delete(n);
                  }
                };
                a.opListReadCapability = new _util.PromiseCapability();
                (a.renderTasks ||= new Set()).add(n);
                a.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: !1,
                  separateAnnots: null,
                };
                this._stats?.time("Page Request");
                this._pumpOperatorList(i);
              }
              return a.opListReadCapability.promise;
            }
            streamTextContent({
              includeMarkedContent: t = !1,
              disableNormalization: e = !1,
            } = {}) {
              return this._transport.messageHandler.sendWithStream(
                "GetTextContent",
                {
                  pageIndex: this._pageIndex,
                  includeMarkedContent: !0 === t,
                  disableNormalization: !0 === e,
                },
                { highWaterMark: 100, size: (t) => t.items.length }
              );
            }
            getTextContent(t = {}) {
              if (this._transport._htmlForXfa)
                return this.getXfa().then((t) =>
                  _xfa_text.XfaText.textContent(t)
                );
              const e = this.streamTextContent(t);
              return new Promise(function (t, s) {
                const i = e.getReader(),
                  n = { items: [], styles: Object.create(null) };
                !(function pump() {
                  i.read().then(function ({ value: e, done: s }) {
                    if (s) t(n);
                    else {
                      Object.assign(n.styles, e.styles);
                      n.items.push(...e.items);
                      pump();
                    }
                  }, s);
                })();
              });
            }
            getStructTree() {
              return this._transport.getStructTree(this._pageIndex);
            }
            _destroy() {
              this.destroyed = !0;
              const t = [];
              for (const e of this._intentStates.values()) {
                this._abortOperatorList({
                  intentState: e,
                  reason: new Error("Page was destroyed."),
                  force: !0,
                });
                if (!e.opListReadCapability)
                  for (const s of e.renderTasks) {
                    t.push(s.completed);
                    s.cancel();
                  }
              }
              this.objs.clear();
              this.#i = !1;
              this.#n();
              return Promise.all(t);
            }
            cleanup(t = !1) {
              this.#i = !0;
              const e = this.#a(!1);
              t && e && (this._stats &&= new _display_utils.StatTimer());
              return e;
            }
            #a(t = !1) {
              this.#n();
              if (!this.#i) return !1;
              if (t) {
                this.#s = setTimeout(() => {
                  this.#s = null;
                  this.#a(!1);
                }, DELAYED_CLEANUP_TIMEOUT);
                return !1;
              }
              for (const {
                renderTasks: t,
                operatorList: e,
              } of this._intentStates.values())
                if (t.size > 0 || !e.lastChunk) return !1;
              this._intentStates.clear();
              this.objs.clear();
              this.#i = !1;
              return !0;
            }
            #n() {
              if (this.#s) {
                clearTimeout(this.#s);
                this.#s = null;
              }
            }
            _startRenderPage(t, e) {
              const s = this._intentStates.get(e);
              if (s) {
                this._stats?.timeEnd("Page Request");
                s.displayReadyCapability?.resolve(t);
              }
            }
            _renderPageChunk(t, e) {
              for (let s = 0, i = t.length; s < i; s++) {
                e.operatorList.fnArray.push(t.fnArray[s]);
                e.operatorList.argsArray.push(t.argsArray[s]);
              }
              e.operatorList.lastChunk = t.lastChunk;
              e.operatorList.separateAnnots = t.separateAnnots;
              for (const t of e.renderTasks) t.operatorListChanged();
              t.lastChunk && this.#a(!0);
            }
            _pumpOperatorList({
              renderingIntent: t,
              cacheKey: e,
              annotationStorageMap: s,
            }) {
              const i = this._transport.messageHandler
                  .sendWithStream("GetOperatorList", {
                    pageIndex: this._pageIndex,
                    intent: t,
                    cacheKey: e,
                    annotationStorage: s,
                  })
                  .getReader(),
                n = this._intentStates.get(e);
              n.streamReader = i;
              const pump = () => {
                i.read().then(
                  ({ value: t, done: e }) => {
                    if (e) n.streamReader = null;
                    else if (!this._transport.destroyed) {
                      this._renderPageChunk(t, n);
                      pump();
                    }
                  },
                  (t) => {
                    n.streamReader = null;
                    if (!this._transport.destroyed) {
                      if (n.operatorList) {
                        n.operatorList.lastChunk = !0;
                        for (const t of n.renderTasks) t.operatorListChanged();
                        this.#a(!0);
                      }
                      if (n.displayReadyCapability)
                        n.displayReadyCapability.reject(t);
                      else {
                        if (!n.opListReadCapability) throw t;
                        n.opListReadCapability.reject(t);
                      }
                    }
                  }
                );
              };
              pump();
            }
            _abortOperatorList({ intentState: t, reason: e, force: s = !1 }) {
              if (t.streamReader) {
                if (t.streamReaderCancelTimeout) {
                  clearTimeout(t.streamReaderCancelTimeout);
                  t.streamReaderCancelTimeout = null;
                }
                if (!s) {
                  if (t.renderTasks.size > 0) return;
                  if (e instanceof _display_utils.RenderingCancelledException) {
                    let s = RENDERING_CANCELLED_TIMEOUT;
                    e.extraDelay > 0 &&
                      e.extraDelay < 1e3 &&
                      (s += e.extraDelay);
                    t.streamReaderCancelTimeout = setTimeout(() => {
                      t.streamReaderCancelTimeout = null;
                      this._abortOperatorList({
                        intentState: t,
                        reason: e,
                        force: !0,
                      });
                    }, s);
                    return;
                  }
                }
                t.streamReader
                  .cancel(new _util.AbortException(e.message))
                  .catch(() => {});
                t.streamReader = null;
                if (!this._transport.destroyed) {
                  for (const [e, s] of this._intentStates)
                    if (s === t) {
                      this._intentStates.delete(e);
                      break;
                    }
                  this.cleanup();
                }
              }
            }
            get stats() {
              return this._stats;
            }
          }
          exports.PDFPageProxy = PDFPageProxy;
          class LoopbackPort {
            #r = new Set();
            #o = Promise.resolve();
            postMessage(t, e) {
              const s = {
                data: structuredClone(t, e ? { transfer: e } : null),
              };
              this.#o.then(() => {
                for (const t of this.#r) t.call(this, s);
              });
            }
            addEventListener(t, e) {
              this.#r.add(e);
            }
            removeEventListener(t, e) {
              this.#r.delete(e);
            }
            terminate() {
              this.#r.clear();
            }
          }
          exports.LoopbackPort = LoopbackPort;
          const PDFWorkerUtil = {
            isWorkerDisabled: !1,
            fallbackWorkerSrc: null,
            fakeWorkerId: 0,
          };
          exports.PDFWorkerUtil = PDFWorkerUtil;
          if (_is_node.isNodeJS && "function" == typeof require) {
            PDFWorkerUtil.isWorkerDisabled = !0;
            PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
          } else if ("object" == typeof document) {
            const t = document?.currentScript?.src;
            t &&
              (PDFWorkerUtil.fallbackWorkerSrc = t.replace(
                /(\.(?:min\.)?js)(\?.*)?$/i,
                ".worker$1$2"
              ));
          }
          PDFWorkerUtil.isSameOrigin = function (t, e) {
            let s;
            try {
              s = new URL(t);
              if (!s.origin || "null" === s.origin) return !1;
            } catch (t) {
              return !1;
            }
            const i = new URL(e, s);
            return s.origin === i.origin;
          };
          PDFWorkerUtil.createCDNWrapper = function (t) {
            const e = `importScripts("${t}");`;
            return URL.createObjectURL(new Blob([e]));
          };
          class PDFWorker {
            static #l = new WeakMap();
            constructor({
              name: t = null,
              port: e = null,
              verbosity: s = (0, _util.getVerbosityLevel)(),
            } = {}) {
              if (e && PDFWorker.#l.has(e))
                throw new Error("Cannot use more than one PDFWorker per port.");
              this.name = t;
              this.destroyed = !1;
              this.verbosity = s;
              this._readyCapability = new _util.PromiseCapability();
              this._port = null;
              this._webWorker = null;
              this._messageHandler = null;
              if (e) {
                PDFWorker.#l.set(e, this);
                this._initializeFromPort(e);
              } else this._initialize();
            }
            get promise() {
              return this._readyCapability.promise;
            }
            get port() {
              return this._port;
            }
            get messageHandler() {
              return this._messageHandler;
            }
            _initializeFromPort(t) {
              this._port = t;
              this._messageHandler = new _message_handler.MessageHandler(
                "main",
                "worker",
                t
              );
              this._messageHandler.on("ready", function () {});
              this._readyCapability.resolve();
              this._messageHandler.send("configure", {
                verbosity: this.verbosity,
              });
            }
            _initialize() {
              if (
                !PDFWorkerUtil.isWorkerDisabled &&
                !PDFWorker._mainThreadWorkerMessageHandler
              ) {
                let { workerSrc: t } = PDFWorker;
                try {
                  PDFWorkerUtil.isSameOrigin(window.location.href, t) ||
                    (t = PDFWorkerUtil.createCDNWrapper(
                      new URL(t, window.location).href
                    ));
                  const e = new Worker(t),
                    s = new _message_handler.MessageHandler(
                      "main",
                      "worker",
                      e
                    ),
                    terminateEarly = () => {
                      e.removeEventListener("error", onWorkerError);
                      s.destroy();
                      e.terminate();
                      this.destroyed
                        ? this._readyCapability.reject(
                            new Error("Worker was destroyed")
                          )
                        : this._setupFakeWorker();
                    },
                    onWorkerError = () => {
                      this._webWorker || terminateEarly();
                    };
                  e.addEventListener("error", onWorkerError);
                  s.on("test", (t) => {
                    e.removeEventListener("error", onWorkerError);
                    if (this.destroyed) terminateEarly();
                    else if (t) {
                      this._messageHandler = s;
                      this._port = e;
                      this._webWorker = e;
                      this._readyCapability.resolve();
                      s.send("configure", { verbosity: this.verbosity });
                    } else {
                      this._setupFakeWorker();
                      s.destroy();
                      e.terminate();
                    }
                  });
                  s.on("ready", (t) => {
                    e.removeEventListener("error", onWorkerError);
                    if (this.destroyed) terminateEarly();
                    else
                      try {
                        sendTest();
                      } catch (t) {
                        this._setupFakeWorker();
                      }
                  });
                  const sendTest = () => {
                    const t = new Uint8Array();
                    s.send("test", t, [t.buffer]);
                  };
                  sendTest();
                  return;
                } catch (t) {
                  (0, _util.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              if (!PDFWorkerUtil.isWorkerDisabled) {
                (0, _util.warn)("Setting up fake worker.");
                PDFWorkerUtil.isWorkerDisabled = !0;
              }
              PDFWorker._setupFakeWorkerGlobal
                .then((t) => {
                  if (this.destroyed) {
                    this._readyCapability.reject(
                      new Error("Worker was destroyed")
                    );
                    return;
                  }
                  const e = new LoopbackPort();
                  this._port = e;
                  const s = "fake" + PDFWorkerUtil.fakeWorkerId++,
                    i = new _message_handler.MessageHandler(
                      s + "_worker",
                      s,
                      e
                    );
                  t.setup(i, e);
                  const n = new _message_handler.MessageHandler(
                    s,
                    s + "_worker",
                    e
                  );
                  this._messageHandler = n;
                  this._readyCapability.resolve();
                  n.send("configure", { verbosity: this.verbosity });
                })
                .catch((t) => {
                  this._readyCapability.reject(
                    new Error(`Setting up fake worker failed: "${t.message}".`)
                  );
                });
            }
            destroy() {
              this.destroyed = !0;
              if (this._webWorker) {
                this._webWorker.terminate();
                this._webWorker = null;
              }
              PDFWorker.#l.delete(this._port);
              this._port = null;
              if (this._messageHandler) {
                this._messageHandler.destroy();
                this._messageHandler = null;
              }
            }
            static fromPort(t) {
              if (!t?.port)
                throw new Error(
                  "PDFWorker.fromPort - invalid method signature."
                );
              return this.#l.has(t.port)
                ? this.#l.get(t.port)
                : new PDFWorker(t);
            }
            static get workerSrc() {
              if (_worker_options.GlobalWorkerOptions.workerSrc)
                return _worker_options.GlobalWorkerOptions.workerSrc;
              if (null !== PDFWorkerUtil.fallbackWorkerSrc) {
                _is_node.isNodeJS ||
                  (0, _display_utils.deprecated)(
                    'No "GlobalWorkerOptions.workerSrc" specified.'
                  );
                return PDFWorkerUtil.fallbackWorkerSrc;
              }
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get _mainThreadWorkerMessageHandler() {
              try {
                return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
              } catch (t) {
                return null;
              }
            }
            static get _setupFakeWorkerGlobal() {
              const loader = async () => {
                const mainWorkerMessageHandler =
                  this._mainThreadWorkerMessageHandler;
                if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
                if (_is_node.isNodeJS && "function" == typeof require) {
                  const worker = eval("require")(this.workerSrc);
                  return worker.WorkerMessageHandler;
                }
                await (0, _display_utils.loadScript)(this.workerSrc);
                return window.pdfjsWorker.WorkerMessageHandler;
              };
              return (0, _util.shadow)(
                this,
                "_setupFakeWorkerGlobal",
                loader()
              );
            }
          }
          exports.PDFWorker = PDFWorker;
          class WorkerTransport {
            #c = new Map();
            #h = new Map();
            #d = new Map();
            constructor(t, e, s, i, n) {
              this.messageHandler = t;
              this.loadingTask = e;
              this.commonObjs = new PDFObjects();
              this.fontLoader = new _font_loader.FontLoader({
                ownerDocument: i.ownerDocument,
                styleElement: i.styleElement,
              });
              this._params = i;
              this.canvasFactory = n.canvasFactory;
              this.filterFactory = n.filterFactory;
              this.cMapReaderFactory = n.cMapReaderFactory;
              this.standardFontDataFactory = n.standardFontDataFactory;
              this.destroyed = !1;
              this.destroyCapability = null;
              this._passwordCapability = null;
              this._networkStream = s;
              this._fullReader = null;
              this._lastProgress = null;
              this.downloadInfoCapability = new _util.PromiseCapability();
              this.setupMessageHandler();
            }
            #u(t, e = null) {
              const s = this.#c.get(t);
              if (s) return s;
              const i = this.messageHandler.sendWithPromise(t, e);
              this.#c.set(t, i);
              return i;
            }
            get annotationStorage() {
              return (0, _util.shadow)(
                this,
                "annotationStorage",
                new _annotation_storage.AnnotationStorage()
              );
            }
            getRenderingIntent(
              t,
              e = _util.AnnotationMode.ENABLE,
              s = null,
              i = !1
            ) {
              let n = _util.RenderingIntentFlag.DISPLAY,
                a = null;
              switch (t) {
                case "any":
                  n = _util.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  n = _util.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid intent: ${t}`);
              }
              switch (e) {
                case _util.AnnotationMode.DISABLE:
                  n += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  n += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  n += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                  a = (
                    n & _util.RenderingIntentFlag.PRINT &&
                    s instanceof _annotation_storage.PrintAnnotationStorage
                      ? s
                      : this.annotationStorage
                  ).serializable;
                  break;
                default:
                  (0, _util.warn)(
                    `getRenderingIntent - invalid annotationMode: ${e}`
                  );
              }
              i && (n += _util.RenderingIntentFlag.OPLIST);
              return {
                renderingIntent: n,
                cacheKey: `${n}_${_annotation_storage.AnnotationStorage.getHash(
                  a
                )}`,
                annotationStorageMap: a,
              };
            }
            destroy() {
              if (this.destroyCapability) return this.destroyCapability.promise;
              this.destroyed = !0;
              this.destroyCapability = new _util.PromiseCapability();
              this._passwordCapability &&
                this._passwordCapability.reject(
                  new Error("Worker was destroyed during onPassword callback")
                );
              const t = [];
              for (const e of this.#h.values()) t.push(e._destroy());
              this.#h.clear();
              this.#d.clear();
              this.hasOwnProperty("annotationStorage") &&
                this.annotationStorage.resetModified();
              const e = this.messageHandler.sendWithPromise("Terminate", null);
              t.push(e);
              Promise.all(t).then(() => {
                this.commonObjs.clear();
                this.fontLoader.clear();
                this.#c.clear();
                this.filterFactory.destroy();
                this._networkStream &&
                  this._networkStream.cancelAllRequests(
                    new _util.AbortException("Worker was terminated.")
                  );
                if (this.messageHandler) {
                  this.messageHandler.destroy();
                  this.messageHandler = null;
                }
                this.destroyCapability.resolve();
              }, this.destroyCapability.reject);
              return this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const { messageHandler: t, loadingTask: e } = this;
              t.on("GetReader", (t, e) => {
                (0, _util.assert)(
                  this._networkStream,
                  "GetReader - no `IPDFStream` instance available."
                );
                this._fullReader = this._networkStream.getFullReader();
                this._fullReader.onProgress = (t) => {
                  this._lastProgress = { loaded: t.loaded, total: t.total };
                };
                e.onPull = () => {
                  this._fullReader
                    .read()
                    .then(function ({ value: t, done: s }) {
                      if (s) e.close();
                      else {
                        (0, _util.assert)(
                          t instanceof ArrayBuffer,
                          "GetReader - expected an ArrayBuffer."
                        );
                        e.enqueue(new Uint8Array(t), 1, [t]);
                      }
                    })
                    .catch((t) => {
                      e.error(t);
                    });
                };
                e.onCancel = (t) => {
                  this._fullReader.cancel(t);
                  e.ready.catch((t) => {
                    if (!this.destroyed) throw t;
                  });
                };
              });
              t.on("ReaderHeadersReady", (t) => {
                const s = new _util.PromiseCapability(),
                  i = this._fullReader;
                i.headersReady.then(() => {
                  if (!i.isStreamingSupported || !i.isRangeSupported) {
                    this._lastProgress && e.onProgress?.(this._lastProgress);
                    i.onProgress = (t) => {
                      e.onProgress?.({ loaded: t.loaded, total: t.total });
                    };
                  }
                  s.resolve({
                    isStreamingSupported: i.isStreamingSupported,
                    isRangeSupported: i.isRangeSupported,
                    contentLength: i.contentLength,
                  });
                }, s.reject);
                return s.promise;
              });
              t.on("GetRangeReader", (t, e) => {
                (0, _util.assert)(
                  this._networkStream,
                  "GetRangeReader - no `IPDFStream` instance available."
                );
                const s = this._networkStream.getRangeReader(t.begin, t.end);
                if (s) {
                  e.onPull = () => {
                    s.read()
                      .then(function ({ value: t, done: s }) {
                        if (s) e.close();
                        else {
                          (0, _util.assert)(
                            t instanceof ArrayBuffer,
                            "GetRangeReader - expected an ArrayBuffer."
                          );
                          e.enqueue(new Uint8Array(t), 1, [t]);
                        }
                      })
                      .catch((t) => {
                        e.error(t);
                      });
                  };
                  e.onCancel = (t) => {
                    s.cancel(t);
                    e.ready.catch((t) => {
                      if (!this.destroyed) throw t;
                    });
                  };
                } else e.close();
              });
              t.on("GetDoc", ({ pdfInfo: t }) => {
                this._numPages = t.numPages;
                this._htmlForXfa = t.htmlForXfa;
                delete t.htmlForXfa;
                e._capability.resolve(new PDFDocumentProxy(t, this));
              });
              t.on("DocException", function (t) {
                let s;
                switch (t.name) {
                  case "PasswordException":
                    s = new _util.PasswordException(t.message, t.code);
                    break;
                  case "InvalidPDFException":
                    s = new _util.InvalidPDFException(t.message);
                    break;
                  case "MissingPDFException":
                    s = new _util.MissingPDFException(t.message);
                    break;
                  case "UnexpectedResponseException":
                    s = new _util.UnexpectedResponseException(
                      t.message,
                      t.status
                    );
                    break;
                  case "UnknownErrorException":
                    s = new _util.UnknownErrorException(t.message, t.details);
                    break;
                  default:
                    (0,
                    _util.unreachable)("DocException - expected a valid Error.");
                }
                e._capability.reject(s);
              });
              t.on("PasswordRequest", (t) => {
                this._passwordCapability = new _util.PromiseCapability();
                if (e.onPassword) {
                  const updatePassword = (t) => {
                    t instanceof Error
                      ? this._passwordCapability.reject(t)
                      : this._passwordCapability.resolve({ password: t });
                  };
                  try {
                    e.onPassword(updatePassword, t.code);
                  } catch (t) {
                    this._passwordCapability.reject(t);
                  }
                } else
                  this._passwordCapability.reject(
                    new _util.PasswordException(t.message, t.code)
                  );
                return this._passwordCapability.promise;
              });
              t.on("DataLoaded", (t) => {
                e.onProgress?.({ loaded: t.length, total: t.length });
                this.downloadInfoCapability.resolve(t);
              });
              t.on("StartRenderPage", (t) => {
                if (this.destroyed) return;
                this.#h
                  .get(t.pageIndex)
                  ._startRenderPage(t.transparency, t.cacheKey);
              });
              t.on("commonobj", ([e, s, i]) => {
                if (!this.destroyed && !this.commonObjs.has(e))
                  switch (s) {
                    case "Font":
                      const n = this._params;
                      if ("error" in i) {
                        const t = i.error;
                        (0, _util.warn)(`Error during font loading: ${t}`);
                        this.commonObjs.resolve(e, t);
                        break;
                      }
                      const a =
                          n.pdfBug && globalThis.FontInspector?.enabled
                            ? (t, e) => globalThis.FontInspector.fontAdded(t, e)
                            : null,
                        r = new _font_loader.FontFaceObject(i, {
                          isEvalSupported: n.isEvalSupported,
                          disableFontFace: n.disableFontFace,
                          ignoreErrors: n.ignoreErrors,
                          inspectFont: a,
                        });
                      this.fontLoader
                        .bind(r)
                        .catch((s) =>
                          t.sendWithPromise("FontFallback", { id: e })
                        )
                        .finally(() => {
                          !n.fontExtraProperties && r.data && (r.data = null);
                          this.commonObjs.resolve(e, r);
                        });
                      break;
                    case "FontPath":
                    case "Image":
                    case "Pattern":
                      this.commonObjs.resolve(e, i);
                      break;
                    default:
                      throw new Error(`Got unknown common object type ${s}`);
                  }
              });
              t.on("obj", ([t, e, s, i]) => {
                if (this.destroyed) return;
                const n = this.#h.get(e);
                if (!n.objs.has(t))
                  switch (s) {
                    case "Image":
                      n.objs.resolve(t, i);
                      if (i) {
                        let t;
                        if (i.bitmap) {
                          const { width: e, height: s } = i;
                          t = e * s * 4;
                        } else t = i.data?.length || 0;
                        t > _util.MAX_IMAGE_SIZE_TO_CACHE &&
                          (n._maybeCleanupAfterRender = !0);
                      }
                      break;
                    case "Pattern":
                      n.objs.resolve(t, i);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${s}`);
                  }
              });
              t.on("DocProgress", (t) => {
                this.destroyed ||
                  e.onProgress?.({ loaded: t.loaded, total: t.total });
              });
              t.on("FetchBuiltInCMap", (t) =>
                this.destroyed
                  ? Promise.reject(new Error("Worker was destroyed."))
                  : this.cMapReaderFactory
                  ? this.cMapReaderFactory.fetch(t)
                  : Promise.reject(
                      new Error(
                        "CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."
                      )
                    )
              );
              t.on("FetchStandardFontData", (t) =>
                this.destroyed
                  ? Promise.reject(new Error("Worker was destroyed."))
                  : this.standardFontDataFactory
                  ? this.standardFontDataFactory.fetch(t)
                  : Promise.reject(
                      new Error(
                        "StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."
                      )
                    )
              );
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            saveDocument() {
              this.annotationStorage.size <= 0 &&
                (0, _util.warn)(
                  "saveDocument called while `annotationStorage` is empty, please use the getData-method instead."
                );
              return this.messageHandler
                .sendWithPromise("SaveDocument", {
                  isPureXfa: !!this._htmlForXfa,
                  numPages: this._numPages,
                  annotationStorage: this.annotationStorage.serializable,
                  filename: this._fullReader?.filename ?? null,
                })
                .finally(() => {
                  this.annotationStorage.resetModified();
                });
            }
            getPage(t) {
              if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
                return Promise.reject(new Error("Invalid page request."));
              const e = t - 1,
                s = this.#d.get(e);
              if (s) return s;
              const i = this.messageHandler
                .sendWithPromise("GetPage", { pageIndex: e })
                .then((t) => {
                  if (this.destroyed) throw new Error("Transport destroyed");
                  const s = new PDFPageProxy(e, t, this, this._params.pdfBug);
                  this.#h.set(e, s);
                  return s;
                });
              this.#d.set(e, i);
              return i;
            }
            getPageIndex(t) {
              return "object" != typeof t ||
                null === t ||
                !Number.isInteger(t.num) ||
                t.num < 0 ||
                !Number.isInteger(t.gen) ||
                t.gen < 0
                ? Promise.reject(new Error("Invalid pageIndex request."))
                : this.messageHandler.sendWithPromise("GetPageIndex", {
                    num: t.num,
                    gen: t.gen,
                  });
            }
            getAnnotations(t, e) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: t,
                intent: e,
              });
            }
            getFieldObjects() {
              return this.#u("GetFieldObjects");
            }
            hasJSActions() {
              return this.#u("HasJSActions");
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise(
                "GetCalculationOrderIds",
                null
              );
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise(
                "GetDestinations",
                null
              );
            }
            getDestination(t) {
              return "string" != typeof t
                ? Promise.reject(new Error("Invalid destination request."))
                : this.messageHandler.sendWithPromise("GetDestination", {
                    id: t,
                  });
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise(
                "GetViewerPreferences",
                null
              );
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise(
                "GetAttachments",
                null
              );
            }
            getJavaScript() {
              return this.messageHandler.sendWithPromise("GetJavaScript", null);
            }
            getDocJSActions() {
              return this.messageHandler.sendWithPromise(
                "GetDocJSActions",
                null
              );
            }
            getPageJSActions(t) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: t,
              });
            }
            getStructTree(t) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: t,
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig() {
              return this.messageHandler
                .sendWithPromise("GetOptionalContentConfig", null)
                .then(
                  (t) => new _optional_content_config.OptionalContentConfig(t)
                );
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise(
                "GetPermissions",
                null
              );
            }
            getMetadata() {
              const t = "GetMetadata",
                e = this.#c.get(t);
              if (e) return e;
              const s = this.messageHandler
                .sendWithPromise(t, null)
                .then((t) => ({
                  info: t[0],
                  metadata: t[1] ? new _metadata.Metadata(t[1]) : null,
                  contentDispositionFilename:
                    this._fullReader?.filename ?? null,
                  contentLength: this._fullReader?.contentLength ?? null,
                }));
              this.#c.set(t, s);
              return s;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(t = !1) {
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const t of this.#h.values()) {
                  if (!t.cleanup())
                    throw new Error(
                      `startCleanup: Page ${t.pageNumber} is currently rendering.`
                    );
                }
                this.commonObjs.clear();
                t || this.fontLoader.clear();
                this.#c.clear();
                this.filterFactory.destroy(!0);
              }
            }
            get loadingParams() {
              const { disableAutoFetch: t, enableXfa: e } = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: t,
                enableXfa: e,
              });
            }
          }
          class PDFObjects {
            #p = Object.create(null);
            #f(t) {
              const e = this.#p[t];
              return (
                e ||
                (this.#p[t] = {
                  capability: new _util.PromiseCapability(),
                  data: null,
                })
              );
            }
            get(t, e = null) {
              if (e) {
                const s = this.#f(t);
                s.capability.promise.then(() => e(s.data));
                return null;
              }
              const s = this.#p[t];
              if (!s?.capability.settled)
                throw new Error(
                  `Requesting object that isn't resolved yet ${t}.`
                );
              return s.data;
            }
            has(t) {
              const e = this.#p[t];
              return e?.capability.settled || !1;
            }
            resolve(t, e = null) {
              const s = this.#f(t);
              s.data = e;
              s.capability.resolve();
            }
            clear() {
              for (const t in this.#p) {
                const { data: e } = this.#p[t];
                e?.bitmap?.close();
              }
              this.#p = Object.create(null);
            }
          }
          class RenderTask {
            #g = null;
            constructor(t) {
              this.#g = t;
              this.onContinue = null;
            }
            get promise() {
              return this.#g.capability.promise;
            }
            cancel(t = 0) {
              this.#g.cancel(null, t);
            }
            get separateAnnots() {
              const { separateAnnots: t } = this.#g.operatorList;
              if (!t) return !1;
              const { annotationCanvasMap: e } = this.#g;
              return t.form || (t.canvas && e?.size > 0);
            }
          }
          exports.RenderTask = RenderTask;
          class InternalRenderTask {
            static #m = new WeakSet();
            constructor({
              callback: t,
              params: e,
              objs: s,
              commonObjs: i,
              annotationCanvasMap: n,
              operatorList: a,
              pageIndex: r,
              canvasFactory: o,
              filterFactory: l,
              useRequestAnimationFrame: c = !1,
              pdfBug: h = !1,
              pageColors: d = null,
            }) {
              this.callback = t;
              this.params = e;
              this.objs = s;
              this.commonObjs = i;
              this.annotationCanvasMap = n;
              this.operatorListIdx = null;
              this.operatorList = a;
              this._pageIndex = r;
              this.canvasFactory = o;
              this.filterFactory = l;
              this._pdfBug = h;
              this.pageColors = d;
              this.running = !1;
              this.graphicsReadyCallback = null;
              this.graphicsReady = !1;
              this._useRequestAnimationFrame =
                !0 === c && "undefined" != typeof window;
              this.cancelled = !1;
              this.capability = new _util.PromiseCapability();
              this.task = new RenderTask(this);
              this._cancelBound = this.cancel.bind(this);
              this._continueBound = this._continue.bind(this);
              this._scheduleNextBound = this._scheduleNext.bind(this);
              this._nextBound = this._next.bind(this);
              this._canvas = e.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function () {});
            }
            initializeGraphics({
              transparency: t = !1,
              optionalContentConfig: e,
            }) {
              if (this.cancelled) return;
              if (this._canvas) {
                if (InternalRenderTask.#m.has(this._canvas))
                  throw new Error(
                    "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                  );
                InternalRenderTask.#m.add(this._canvas);
              }
              if (this._pdfBug && globalThis.StepperManager?.enabled) {
                this.stepper = globalThis.StepperManager.create(
                  this._pageIndex
                );
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
              }
              const {
                canvasContext: s,
                viewport: i,
                transform: n,
                background: a,
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(
                s,
                this.commonObjs,
                this.objs,
                this.canvasFactory,
                this.filterFactory,
                { optionalContentConfig: e },
                this.annotationCanvasMap,
                this.pageColors
              );
              this.gfx.beginDrawing({
                transform: n,
                viewport: i,
                transparency: t,
                background: a,
              });
              this.operatorListIdx = 0;
              this.graphicsReady = !0;
              this.graphicsReadyCallback?.();
            }
            cancel(t = null, e = 0) {
              this.running = !1;
              this.cancelled = !0;
              this.gfx?.endDrawing();
              this._canvas && InternalRenderTask.#m.delete(this._canvas);
              this.callback(
                t ||
                  new _display_utils.RenderingCancelledException(
                    `Rendering cancelled, page ${this._pageIndex + 1}`,
                    "canvas",
                    e
                  )
              );
            }
            operatorListChanged() {
              if (this.graphicsReady) {
                this.stepper?.updateOperatorList(this.operatorList);
                this.running || this._continue();
              } else this.graphicsReadyCallback ||= this._continueBound;
            }
            _continue() {
              this.running = !0;
              this.cancelled ||
                (this.task.onContinue
                  ? this.task.onContinue(this._scheduleNextBound)
                  : this._scheduleNext());
            }
            _scheduleNext() {
              this._useRequestAnimationFrame
                ? window.requestAnimationFrame(() => {
                    this._nextBound().catch(this._cancelBound);
                  })
                : Promise.resolve()
                    .then(this._nextBound)
                    .catch(this._cancelBound);
            }
            async _next() {
              if (!this.cancelled) {
                this.operatorListIdx = this.gfx.executeOperatorList(
                  this.operatorList,
                  this.operatorListIdx,
                  this._continueBound,
                  this.stepper
                );
                if (
                  this.operatorListIdx === this.operatorList.argsArray.length
                ) {
                  this.running = !1;
                  if (this.operatorList.lastChunk) {
                    this.gfx.endDrawing(this.pageColors);
                    this._canvas && InternalRenderTask.#m.delete(this._canvas);
                    this.callback();
                  }
                }
              }
            }
          }
          const version = "3.6.172";
          exports.version = version;
          const build = "4d3dfe254";
          exports.build = build;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.PrintAnnotationStorage = e.AnnotationStorage = void 0;
          var i = s(1),
            n = s(4),
            a = s(8);
          class AnnotationStorage {
            #b = !1;
            #A = new Map();
            constructor() {
              this.onSetModified = null;
              this.onResetModified = null;
              this.onAnnotationEditor = null;
            }
            getValue(t, e) {
              const s = this.#A.get(t);
              return void 0 === s ? e : Object.assign(e, s);
            }
            getRawValue(t) {
              return this.#A.get(t);
            }
            remove(t) {
              this.#A.delete(t);
              0 === this.#A.size && this.resetModified();
              if ("function" == typeof this.onAnnotationEditor) {
                for (const t of this.#A.values())
                  if (t instanceof n.AnnotationEditor) return;
                this.onAnnotationEditor(null);
              }
            }
            setValue(t, e) {
              const s = this.#A.get(t);
              let i = !1;
              if (void 0 !== s) {
                for (const [t, n] of Object.entries(e))
                  if (s[t] !== n) {
                    i = !0;
                    s[t] = n;
                  }
              } else {
                i = !0;
                this.#A.set(t, e);
              }
              i && this.#_();
              e instanceof n.AnnotationEditor &&
                "function" == typeof this.onAnnotationEditor &&
                this.onAnnotationEditor(e.constructor._type);
            }
            has(t) {
              return this.#A.has(t);
            }
            getAll() {
              return this.#A.size > 0 ? (0, i.objectFromMap)(this.#A) : null;
            }
            setAll(t) {
              for (const [e, s] of Object.entries(t)) this.setValue(e, s);
            }
            get size() {
              return this.#A.size;
            }
            #_() {
              if (!this.#b) {
                this.#b = !0;
                "function" == typeof this.onSetModified && this.onSetModified();
              }
            }
            resetModified() {
              if (this.#b) {
                this.#b = !1;
                "function" == typeof this.onResetModified &&
                  this.onResetModified();
              }
            }
            get print() {
              return new PrintAnnotationStorage(this);
            }
            get serializable() {
              if (0 === this.#A.size) return null;
              const t = new Map();
              for (const [e, s] of this.#A) {
                const i = s instanceof n.AnnotationEditor ? s.serialize() : s;
                i && t.set(e, i);
              }
              return t;
            }
            static getHash(t) {
              if (!t) return "";
              const e = new a.MurmurHash3_64();
              for (const [s, i] of t) e.update(`${s}:${JSON.stringify(i)}`);
              return e.hexdigest();
            }
          }
          e.AnnotationStorage = AnnotationStorage;
          class PrintAnnotationStorage extends AnnotationStorage {
            #y = null;
            constructor(t) {
              super();
              this.#y = structuredClone(t.serializable);
            }
            get print() {
              (0, i.unreachable)(
                "Should not call PrintAnnotationStorage.print"
              );
            }
            get serializable() {
              return this.#y;
            }
          }
          e.PrintAnnotationStorage = PrintAnnotationStorage;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.AnnotationEditor = void 0;
          var i = s(5),
            n = s(1);
          class AnnotationEditor {
            #v = this.focusin.bind(this);
            #S = this.focusout.bind(this);
            #x = !1;
            #C = !1;
            #E = !1;
            _uiManager = null;
            #P = AnnotationEditor._zIndex++;
            static _colorManager = new i.ColorManager();
            static _zIndex = 1;
            constructor(t) {
              this.constructor === AnnotationEditor &&
                (0, n.unreachable)("Cannot initialize AnnotationEditor.");
              this.parent = t.parent;
              this.id = t.id;
              this.width = this.height = null;
              this.pageIndex = t.parent.pageIndex;
              this.name = t.name;
              this.div = null;
              this._uiManager = t.uiManager;
              const {
                rotation: e,
                rawDims: { pageWidth: s, pageHeight: i, pageX: a, pageY: r },
              } = this.parent.viewport;
              this.rotation = e;
              this.pageRotation =
                (360 + e - this._uiManager.viewParameters.rotation) % 360;
              this.pageDimensions = [s, i];
              this.pageTranslation = [a, r];
              const [o, l] = this.parentDimensions;
              this.x = t.x / o;
              this.y = t.y / l;
              this.isAttachedToDOM = !1;
            }
            static get _defaultLineColor() {
              return (0, n.shadow)(
                this,
                "_defaultLineColor",
                this._colorManager.getHexCode("CanvasText")
              );
            }
            addCommands(t) {
              this._uiManager.addCommands(t);
            }
            get currentLayer() {
              return this._uiManager.currentLayer;
            }
            setInBackground() {
              this.div.style.zIndex = 0;
            }
            setInForeground() {
              this.div.style.zIndex = this.#P;
            }
            setParent(t) {
              if (null !== t) {
                this.pageIndex = t.pageIndex;
                this.pageDimensions = t.pageDimensions;
              }
              this.parent = t;
            }
            focusin(t) {
              this.#x ? (this.#x = !1) : this.parent.setSelected(this);
            }
            focusout(t) {
              if (!this.isAttachedToDOM) return;
              const e = t.relatedTarget;
              if (!e?.closest(`#${this.id}`)) {
                t.preventDefault();
                this.parent?.isMultipleSelection || this.commitOrRemove();
              }
            }
            commitOrRemove() {
              this.isEmpty() ? this.remove() : this.commit();
            }
            commit() {
              this.addToAnnotationStorage();
            }
            addToAnnotationStorage() {
              this._uiManager.addToAnnotationStorage(this);
            }
            dragstart(t) {
              const e = this.parent.div.getBoundingClientRect();
              this.startX = t.clientX - e.x;
              this.startY = t.clientY - e.y;
              t.dataTransfer.setData("text/plain", this.id);
              t.dataTransfer.effectAllowed = "move";
            }
            setAt(t, e, s, i) {
              const [n, a] = this.parentDimensions;
              [s, i] = this.screenToPageTranslation(s, i);
              this.x = (t + s) / n;
              this.y = (e + i) / a;
              this.div.style.left = 100 * this.x + "%";
              this.div.style.top = 100 * this.y + "%";
            }
            translate(t, e) {
              const [s, i] = this.parentDimensions;
              [t, e] = this.screenToPageTranslation(t, e);
              this.x += t / s;
              this.y += e / i;
              this.div.style.left = 100 * this.x + "%";
              this.div.style.top = 100 * this.y + "%";
            }
            screenToPageTranslation(t, e) {
              switch (this.parentRotation) {
                case 90:
                  return [e, -t];
                case 180:
                  return [-t, -e];
                case 270:
                  return [-e, t];
                default:
                  return [t, e];
              }
            }
            get parentScale() {
              return this._uiManager.viewParameters.realScale;
            }
            get parentRotation() {
              return (
                (this._uiManager.viewParameters.rotation + this.pageRotation) %
                360
              );
            }
            get parentDimensions() {
              const { realScale: t } = this._uiManager.viewParameters,
                [e, s] = this.pageDimensions;
              return [e * t, s * t];
            }
            setDims(t, e) {
              const [s, i] = this.parentDimensions;
              this.div.style.width = (100 * t) / s + "%";
              this.div.style.height = (100 * e) / i + "%";
            }
            fixDims() {
              const { style: t } = this.div,
                { height: e, width: s } = t,
                i = s.endsWith("%"),
                n = e.endsWith("%");
              if (i && n) return;
              const [a, r] = this.parentDimensions;
              i || (t.width = (100 * parseFloat(s)) / a + "%");
              n || (t.height = (100 * parseFloat(e)) / r + "%");
            }
            getInitialTranslation() {
              return [0, 0];
            }
            render() {
              this.div = document.createElement("div");
              this.div.setAttribute(
                "data-editor-rotation",
                (360 - this.rotation) % 360
              );
              this.div.className = this.name;
              this.div.setAttribute("id", this.id);
              this.div.setAttribute("tabIndex", 0);
              this.setInForeground();
              this.div.addEventListener("focusin", this.#v);
              this.div.addEventListener("focusout", this.#S);
              const [t, e] = this.getInitialTranslation();
              this.translate(t, e);
              (0, i.bindEvents)(this, this.div, ["dragstart", "pointerdown"]);
              return this.div;
            }
            pointerdown(t) {
              const { isMac: e } = n.FeatureTest.platform;
              if (0 !== t.button || (t.ctrlKey && e)) t.preventDefault();
              else {
                (t.ctrlKey && !e) || t.shiftKey || (t.metaKey && e)
                  ? this.parent.toggleSelected(this)
                  : this.parent.setSelected(this);
                this.#x = !0;
              }
            }
            getRect(t, e) {
              const s = this.parentScale,
                [i, n] = this.pageDimensions,
                [a, r] = this.pageTranslation,
                o = t / s,
                l = e / s,
                c = this.x * i,
                h = this.y * n,
                d = this.width * i,
                u = this.height * n;
              switch (this.rotation) {
                case 0:
                  return [
                    c + o + a,
                    n - h - l - u + r,
                    c + o + d + a,
                    n - h - l + r,
                  ];
                case 90:
                  return [
                    c + l + a,
                    n - h + o + r,
                    c + l + u + a,
                    n - h + o + d + r,
                  ];
                case 180:
                  return [
                    c - o - d + a,
                    n - h + l + r,
                    c - o + a,
                    n - h + l + u + r,
                  ];
                case 270:
                  return [
                    c - l - u + a,
                    n - h - o - d + r,
                    c - l + a,
                    n - h - o + r,
                  ];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            getRectInCurrentCoords(t, e) {
              const [s, i, n, a] = t,
                r = n - s,
                o = a - i;
              switch (this.rotation) {
                case 0:
                  return [s, e - a, r, o];
                case 90:
                  return [s, e - i, o, r];
                case 180:
                  return [n, e - i, r, o];
                case 270:
                  return [n, e - a, o, r];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            onceAdded() {}
            isEmpty() {
              return !1;
            }
            enableEditMode() {
              this.#E = !0;
            }
            disableEditMode() {
              this.#E = !1;
            }
            isInEditMode() {
              return this.#E;
            }
            shouldGetKeyboardEvents() {
              return !1;
            }
            needsToBeRebuilt() {
              return this.div && !this.isAttachedToDOM;
            }
            rebuild() {
              this.div?.addEventListener("focusin", this.#v);
            }
            serialize() {
              (0, n.unreachable)("An editor must be serializable");
            }
            static deserialize(t, e, s) {
              const i = new this.prototype.constructor({
                parent: e,
                id: e.getNextId(),
                uiManager: s,
              });
              i.rotation = t.rotation;
              const [n, a] = i.pageDimensions,
                [r, o, l, c] = i.getRectInCurrentCoords(t.rect, a);
              i.x = r / n;
              i.y = o / a;
              i.width = l / n;
              i.height = c / a;
              return i;
            }
            remove() {
              this.div.removeEventListener("focusin", this.#v);
              this.div.removeEventListener("focusout", this.#S);
              this.isEmpty() || this.commit();
              this.parent.remove(this);
            }
            select() {
              this.div?.classList.add("selectedEditor");
            }
            unselect() {
              this.div?.classList.remove("selectedEditor");
            }
            updateParams(t, e) {}
            disableEditing() {}
            enableEditing() {}
            get propertiesToUpdate() {
              return {};
            }
            get contentDiv() {
              return this.div;
            }
            get isEditing() {
              return this.#C;
            }
            set isEditing(t) {
              this.#C = t;
              if (t) {
                this.parent.setSelected(this);
                this.parent.setActiveEditor(this);
              } else this.parent.setActiveEditor(null);
            }
          }
          e.AnnotationEditor = AnnotationEditor;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.KeyboardManager =
            e.CommandManager =
            e.ColorManager =
            e.AnnotationEditorUIManager =
              void 0;
          e.bindEvents = function bindEvents(t, e, s) {
            for (const i of s) e.addEventListener(i, t[i].bind(t));
          };
          e.opacityToHex = function opacityToHex(t) {
            return Math.round(Math.min(255, Math.max(1, 255 * t)))
              .toString(16)
              .padStart(2, "0");
          };
          var i = s(1),
            n = s(6);
          class IdManager {
            #w = 0;
            getId() {
              return `${i.AnnotationEditorPrefix}${this.#w++}`;
            }
          }
          class CommandManager {
            #T = [];
            #F = !1;
            #k;
            #M = -1;
            constructor(t = 128) {
              this.#k = t;
            }
            add({
              cmd: t,
              undo: e,
              mustExec: s,
              type: i = NaN,
              overwriteIfSameType: n = !1,
              keepUndo: a = !1,
            }) {
              s && t();
              if (this.#F) return;
              const r = { cmd: t, undo: e, type: i };
              if (-1 === this.#M) {
                this.#T.length > 0 && (this.#T.length = 0);
                this.#M = 0;
                this.#T.push(r);
                return;
              }
              if (n && this.#T[this.#M].type === i) {
                a && (r.undo = this.#T[this.#M].undo);
                this.#T[this.#M] = r;
                return;
              }
              const o = this.#M + 1;
              if (o === this.#k) this.#T.splice(0, 1);
              else {
                this.#M = o;
                o < this.#T.length && this.#T.splice(o);
              }
              this.#T.push(r);
            }
            undo() {
              if (-1 !== this.#M) {
                this.#F = !0;
                this.#T[this.#M].undo();
                this.#F = !1;
                this.#M -= 1;
              }
            }
            redo() {
              if (this.#M < this.#T.length - 1) {
                this.#M += 1;
                this.#F = !0;
                this.#T[this.#M].cmd();
                this.#F = !1;
              }
            }
            hasSomethingToUndo() {
              return -1 !== this.#M;
            }
            hasSomethingToRedo() {
              return this.#M < this.#T.length - 1;
            }
            destroy() {
              this.#T = null;
            }
          }
          e.CommandManager = CommandManager;
          class KeyboardManager {
            constructor(t) {
              this.buffer = [];
              this.callbacks = new Map();
              this.allKeys = new Set();
              const { isMac: e } = i.FeatureTest.platform;
              for (const [s, i] of t)
                for (const t of s) {
                  const s = t.startsWith("mac+");
                  if (e && s) {
                    this.callbacks.set(t.slice(4), i);
                    this.allKeys.add(t.split("+").at(-1));
                  } else if (!e && !s) {
                    this.callbacks.set(t, i);
                    this.allKeys.add(t.split("+").at(-1));
                  }
                }
            }
            #R(t) {
              t.altKey && this.buffer.push("alt");
              t.ctrlKey && this.buffer.push("ctrl");
              t.metaKey && this.buffer.push("meta");
              t.shiftKey && this.buffer.push("shift");
              this.buffer.push(t.key);
              const e = this.buffer.join("+");
              this.buffer.length = 0;
              return e;
            }
            exec(t, e) {
              if (!this.allKeys.has(e.key)) return;
              const s = this.callbacks.get(this.#R(e));
              if (s) {
                s.bind(t)();
                e.stopPropagation();
                e.preventDefault();
              }
            }
          }
          e.KeyboardManager = KeyboardManager;
          class ColorManager {
            static _colorsMapping = new Map([
              ["CanvasText", [0, 0, 0]],
              ["Canvas", [255, 255, 255]],
            ]);
            get _colors() {
              const t = new Map([
                ["CanvasText", null],
                ["Canvas", null],
              ]);
              (0, n.getColorValues)(t);
              return (0, i.shadow)(this, "_colors", t);
            }
            convert(t) {
              const e = (0, n.getRGB)(t);
              if (!window.matchMedia("(forced-colors: active)").matches)
                return e;
              for (const [t, s] of this._colors)
                if (s.every((t, s) => t === e[s]))
                  return ColorManager._colorsMapping.get(t);
              return e;
            }
            getHexCode(t) {
              const e = this._colors.get(t);
              return e ? i.Util.makeHexColor(...e) : t;
            }
          }
          e.ColorManager = ColorManager;
          class AnnotationEditorUIManager {
            #D = null;
            #I = new Map();
            #O = new Map();
            #L = null;
            #N = new CommandManager();
            #B = 0;
            #j = null;
            #U = new Set();
            #q = null;
            #W = new IdManager();
            #G = !1;
            #H = i.AnnotationEditorType.NONE;
            #z = new Set();
            #V = this.copy.bind(this);
            #X = this.cut.bind(this);
            #$ = this.paste.bind(this);
            #K = this.keydown.bind(this);
            #Y = this.onEditingAction.bind(this);
            #J = this.onPageChanging.bind(this);
            #Q = this.onScaleChanging.bind(this);
            #Z = this.onRotationChanging.bind(this);
            #tt = {
              isEditing: !1,
              isEmpty: !0,
              hasSomethingToUndo: !1,
              hasSomethingToRedo: !1,
              hasSelectedEditor: !1,
            };
            #et = null;
            static _keyboardManager = new KeyboardManager([
              [
                ["ctrl+a", "mac+meta+a"],
                AnnotationEditorUIManager.prototype.selectAll,
              ],
              [
                ["ctrl+z", "mac+meta+z"],
                AnnotationEditorUIManager.prototype.undo,
              ],
              [
                ["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"],
                AnnotationEditorUIManager.prototype.redo,
              ],
              [
                [
                  "Backspace",
                  "alt+Backspace",
                  "ctrl+Backspace",
                  "shift+Backspace",
                  "mac+Backspace",
                  "mac+alt+Backspace",
                  "mac+ctrl+Backspace",
                  "Delete",
                  "ctrl+Delete",
                  "shift+Delete",
                ],
                AnnotationEditorUIManager.prototype.delete,
              ],
              [
                ["Escape", "mac+Escape"],
                AnnotationEditorUIManager.prototype.unselectAll,
              ],
            ]);
            constructor(t, e, s) {
              this.#et = t;
              this.#q = e;
              this.#q._on("editingaction", this.#Y);
              this.#q._on("pagechanging", this.#J);
              this.#q._on("scalechanging", this.#Q);
              this.#q._on("rotationchanging", this.#Z);
              this.#L = s;
              this.viewParameters = {
                realScale: n.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: 0,
              };
            }
            destroy() {
              this.#st();
              this.#q._off("editingaction", this.#Y);
              this.#q._off("pagechanging", this.#J);
              this.#q._off("scalechanging", this.#Q);
              this.#q._off("rotationchanging", this.#Z);
              for (const t of this.#O.values()) t.destroy();
              this.#O.clear();
              this.#I.clear();
              this.#U.clear();
              this.#D = null;
              this.#z.clear();
              this.#N.destroy();
            }
            onPageChanging({ pageNumber: t }) {
              this.#B = t - 1;
            }
            focusMainContainer() {
              this.#et.focus();
            }
            addShouldRescale(t) {
              this.#U.add(t);
            }
            removeShouldRescale(t) {
              this.#U.delete(t);
            }
            onScaleChanging({ scale: t }) {
              this.commitOrRemove();
              this.viewParameters.realScale =
                t * n.PixelsPerInch.PDF_TO_CSS_UNITS;
              for (const t of this.#U) t.onScaleChanging();
            }
            onRotationChanging({ pagesRotation: t }) {
              this.commitOrRemove();
              this.viewParameters.rotation = t;
            }
            addToAnnotationStorage(t) {
              t.isEmpty() ||
                !this.#L ||
                this.#L.has(t.id) ||
                this.#L.setValue(t.id, t);
            }
            #it() {
              this.#et.addEventListener("keydown", this.#K);
            }
            #st() {
              this.#et.removeEventListener("keydown", this.#K);
            }
            #nt() {
              document.addEventListener("copy", this.#V);
              document.addEventListener("cut", this.#X);
              document.addEventListener("paste", this.#$);
            }
            #at() {
              document.removeEventListener("copy", this.#V);
              document.removeEventListener("cut", this.#X);
              document.removeEventListener("paste", this.#$);
            }
            copy(t) {
              t.preventDefault();
              this.#D && this.#D.commitOrRemove();
              if (!this.hasSelection) return;
              const e = [];
              for (const t of this.#z) t.isEmpty() || e.push(t.serialize());
              0 !== e.length &&
                t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
            }
            cut(t) {
              this.copy(t);
              this.delete();
            }
            paste(t) {
              t.preventDefault();
              let e = t.clipboardData.getData("application/pdfjs");
              if (!e) return;
              try {
                e = JSON.parse(e);
              } catch (t) {
                (0, i.warn)(`paste: "${t.message}".`);
                return;
              }
              if (!Array.isArray(e)) return;
              this.unselectAll();
              const s = this.#O.get(this.#B);
              try {
                const t = [];
                for (const i of e) {
                  const e = s.deserialize(i);
                  if (!e) return;
                  t.push(e);
                }
                const cmd = () => {
                    for (const e of t) this.#rt(e);
                    this.#ot(t);
                  },
                  undo = () => {
                    for (const e of t) e.remove();
                  };
                this.addCommands({ cmd: cmd, undo: undo, mustExec: !0 });
              } catch (t) {
                (0, i.warn)(`paste: "${t.message}".`);
              }
            }
            keydown(t) {
              this.getActive()?.shouldGetKeyboardEvents() ||
                AnnotationEditorUIManager._keyboardManager.exec(this, t);
            }
            onEditingAction(t) {
              ["undo", "redo", "delete", "selectAll"].includes(t.name) &&
                this[t.name]();
            }
            #lt(t) {
              Object.entries(t).some(([t, e]) => this.#tt[t] !== e) &&
                this.#q.dispatch("annotationeditorstateschanged", {
                  source: this,
                  details: Object.assign(this.#tt, t),
                });
            }
            #ct(t) {
              this.#q.dispatch("annotationeditorparamschanged", {
                source: this,
                details: t,
              });
            }
            setEditingState(t) {
              if (t) {
                this.#it();
                this.#nt();
                this.#lt({
                  isEditing: this.#H !== i.AnnotationEditorType.NONE,
                  isEmpty: this.#ht(),
                  hasSomethingToUndo: this.#N.hasSomethingToUndo(),
                  hasSomethingToRedo: this.#N.hasSomethingToRedo(),
                  hasSelectedEditor: !1,
                });
              } else {
                this.#st();
                this.#at();
                this.#lt({ isEditing: !1 });
              }
            }
            registerEditorTypes(t) {
              if (!this.#j) {
                this.#j = t;
                for (const t of this.#j) this.#ct(t.defaultPropertiesToUpdate);
              }
            }
            getId() {
              return this.#W.getId();
            }
            get currentLayer() {
              return this.#O.get(this.#B);
            }
            get currentPageIndex() {
              return this.#B;
            }
            addLayer(t) {
              this.#O.set(t.pageIndex, t);
              this.#G ? t.enable() : t.disable();
            }
            removeLayer(t) {
              this.#O.delete(t.pageIndex);
            }
            updateMode(t) {
              this.#H = t;
              if (t === i.AnnotationEditorType.NONE) {
                this.setEditingState(!1);
                this.#dt();
              } else {
                this.setEditingState(!0);
                this.#ut();
                for (const e of this.#O.values()) e.updateMode(t);
              }
            }
            updateToolbar(t) {
              t !== this.#H &&
                this.#q.dispatch("switchannotationeditormode", {
                  source: this,
                  mode: t,
                });
            }
            updateParams(t, e) {
              if (this.#j) {
                for (const s of this.#z) s.updateParams(t, e);
                for (const s of this.#j) s.updateDefaultParams(t, e);
              }
            }
            #ut() {
              if (!this.#G) {
                this.#G = !0;
                for (const t of this.#O.values()) t.enable();
              }
            }
            #dt() {
              this.unselectAll();
              if (this.#G) {
                this.#G = !1;
                for (const t of this.#O.values()) t.disable();
              }
            }
            getEditors(t) {
              const e = [];
              for (const s of this.#I.values()) s.pageIndex === t && e.push(s);
              return e;
            }
            getEditor(t) {
              return this.#I.get(t);
            }
            addEditor(t) {
              this.#I.set(t.id, t);
            }
            removeEditor(t) {
              this.#I.delete(t.id);
              this.unselect(t);
              this.#L?.remove(t.id);
            }
            #rt(t) {
              const e = this.#O.get(t.pageIndex);
              e ? e.addOrRebuild(t) : this.addEditor(t);
            }
            setActiveEditor(t) {
              if (this.#D !== t) {
                this.#D = t;
                t && this.#ct(t.propertiesToUpdate);
              }
            }
            toggleSelected(t) {
              if (this.#z.has(t)) {
                this.#z.delete(t);
                t.unselect();
                this.#lt({ hasSelectedEditor: this.hasSelection });
              } else {
                this.#z.add(t);
                t.select();
                this.#ct(t.propertiesToUpdate);
                this.#lt({ hasSelectedEditor: !0 });
              }
            }
            setSelected(t) {
              for (const e of this.#z) e !== t && e.unselect();
              this.#z.clear();
              this.#z.add(t);
              t.select();
              this.#ct(t.propertiesToUpdate);
              this.#lt({ hasSelectedEditor: !0 });
            }
            isSelected(t) {
              return this.#z.has(t);
            }
            unselect(t) {
              t.unselect();
              this.#z.delete(t);
              this.#lt({ hasSelectedEditor: this.hasSelection });
            }
            get hasSelection() {
              return 0 !== this.#z.size;
            }
            undo() {
              this.#N.undo();
              this.#lt({
                hasSomethingToUndo: this.#N.hasSomethingToUndo(),
                hasSomethingToRedo: !0,
                isEmpty: this.#ht(),
              });
            }
            redo() {
              this.#N.redo();
              this.#lt({
                hasSomethingToUndo: !0,
                hasSomethingToRedo: this.#N.hasSomethingToRedo(),
                isEmpty: this.#ht(),
              });
            }
            addCommands(t) {
              this.#N.add(t);
              this.#lt({
                hasSomethingToUndo: !0,
                hasSomethingToRedo: !1,
                isEmpty: this.#ht(),
              });
            }
            #ht() {
              if (0 === this.#I.size) return !0;
              if (1 === this.#I.size)
                for (const t of this.#I.values()) return t.isEmpty();
              return !1;
            }
            delete() {
              this.commitOrRemove();
              if (!this.hasSelection) return;
              const t = [...this.#z];
              this.addCommands({
                cmd: () => {
                  for (const e of t) e.remove();
                },
                undo: () => {
                  for (const e of t) this.#rt(e);
                },
                mustExec: !0,
              });
            }
            commitOrRemove() {
              this.#D?.commitOrRemove();
            }
            #ot(t) {
              this.#z.clear();
              for (const e of t)
                if (!e.isEmpty()) {
                  this.#z.add(e);
                  e.select();
                }
              this.#lt({ hasSelectedEditor: !0 });
            }
            selectAll() {
              for (const t of this.#z) t.commit();
              this.#ot(this.#I.values());
            }
            unselectAll() {
              if (this.#D) this.#D.commitOrRemove();
              else if (0 !== this.#z.size) {
                for (const t of this.#z) t.unselect();
                this.#z.clear();
                this.#lt({ hasSelectedEditor: !1 });
              }
            }
            isActive(t) {
              return this.#D === t;
            }
            getActive() {
              return this.#D;
            }
            getMode() {
              return this.#H;
            }
          }
          e.AnnotationEditorUIManager = AnnotationEditorUIManager;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.StatTimer =
            e.RenderingCancelledException =
            e.PixelsPerInch =
            e.PageViewport =
            e.PDFDateString =
            e.DOMStandardFontDataFactory =
            e.DOMSVGFactory =
            e.DOMFilterFactory =
            e.DOMCanvasFactory =
            e.DOMCMapReaderFactory =
            e.AnnotationPrefix =
              void 0;
          e.deprecated = function deprecated(t) {
            console.log("Deprecated API usage: " + t);
          };
          e.getColorValues = function getColorValues(t) {
            const e = document.createElement("span");
            e.style.visibility = "hidden";
            document.body.append(e);
            for (const s of t.keys()) {
              e.style.color = s;
              const i = window.getComputedStyle(e).color;
              t.set(s, getRGB(i));
            }
            e.remove();
          };
          e.getCurrentTransform = function getCurrentTransform(t) {
            const { a: e, b: s, c: i, d: n, e: a, f: r } = t.getTransform();
            return [e, s, i, n, a, r];
          };
          e.getCurrentTransformInverse = function getCurrentTransformInverse(
            t
          ) {
            const {
              a: e,
              b: s,
              c: i,
              d: n,
              e: a,
              f: r,
            } = t.getTransform().invertSelf();
            return [e, s, i, n, a, r];
          };
          e.getFilenameFromUrl = function getFilenameFromUrl(t, e = !1) {
            e || ([t] = t.split(/[#?]/, 1));
            return t.substring(t.lastIndexOf("/") + 1);
          };
          e.getPdfFilenameFromUrl = function getPdfFilenameFromUrl(
            t,
            e = "document.pdf"
          ) {
            if ("string" != typeof t) return e;
            if (isDataScheme(t)) {
              (0, n.warn)(
                'getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'
              );
              return e;
            }
            const s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
              i = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t);
            let a = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
            if (a) {
              a = a[0];
              if (a.includes("%"))
                try {
                  a = s.exec(decodeURIComponent(a))[0];
                } catch (t) {}
            }
            return a || e;
          };
          e.getRGB = getRGB;
          e.getXfaPageViewport = function getXfaPageViewport(
            t,
            { scale: e = 1, rotation: s = 0 }
          ) {
            const { width: i, height: n } = t.attributes.style,
              a = [0, 0, parseInt(i), parseInt(n)];
            return new PageViewport({ viewBox: a, scale: e, rotation: s });
          };
          e.isDataScheme = isDataScheme;
          e.isPdfFile = function isPdfFile(t) {
            return "string" == typeof t && /\.pdf$/i.test(t);
          };
          e.isValidFetchUrl = isValidFetchUrl;
          e.loadScript = function loadScript(t, e = !1) {
            return new Promise((s, i) => {
              const n = document.createElement("script");
              n.src = t;
              n.onload = function (t) {
                e && n.remove();
                s(t);
              };
              n.onerror = function () {
                i(new Error(`Cannot load script at: ${n.src}`));
              };
              (document.head || document.documentElement).append(n);
            });
          };
          e.setLayerDimensions = function setLayerDimensions(
            t,
            e,
            s = !1,
            i = !0
          ) {
            if (e instanceof PageViewport) {
              const { pageWidth: i, pageHeight: n } = e.rawDims,
                { style: a } = t,
                r = `calc(var(--scale-factor) * ${i}px)`,
                o = `calc(var(--scale-factor) * ${n}px)`;
              if (s && e.rotation % 180 != 0) {
                a.width = o;
                a.height = r;
              } else {
                a.width = r;
                a.height = o;
              }
            }
            i && t.setAttribute("data-main-rotation", e.rotation);
          };
          var i = s(7),
            n = s(1);
          const a = "http://www.w3.org/2000/svg";
          e.AnnotationPrefix = "pdfjs_internal_id_";
          class PixelsPerInch {
            static CSS = 96;
            static PDF = 72;
            static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
          }
          e.PixelsPerInch = PixelsPerInch;
          class DOMFilterFactory extends i.BaseFilterFactory {
            #pt;
            #ft;
            #e;
            #gt;
            #mt;
            #bt;
            #At;
            #w = 0;
            constructor({
              docId: t,
              ownerDocument: e = globalThis.document,
            } = {}) {
              super();
              this.#e = t;
              this.#gt = e;
            }
            get #_t() {
              return (this.#pt ||= new Map());
            }
            get #yt() {
              if (!this.#ft) {
                const t = this.#gt.createElement("div"),
                  { style: e } = t;
                e.visibility = "hidden";
                e.contain = "strict";
                e.width = e.height = 0;
                e.position = "absolute";
                e.top = e.left = 0;
                e.zIndex = -1;
                const s = this.#gt.createElementNS(a, "svg");
                s.setAttribute("width", 0);
                s.setAttribute("height", 0);
                this.#ft = this.#gt.createElementNS(a, "defs");
                t.append(s);
                s.append(this.#ft);
                this.#gt.body.append(t);
              }
              return this.#ft;
            }
            #vt(t, e, s) {
              const i = this.#gt.createElementNS(a, e);
              i.setAttribute("type", "discrete");
              i.setAttribute("tableValues", s);
              t.append(i);
            }
            addFilter(t) {
              if (!t) return "none";
              let e,
                s,
                i,
                n,
                r = this.#_t.get(t);
              if (r) return r;
              if (1 === t.length) {
                const a = t[0],
                  r = new Array(256);
                for (let t = 0; t < 256; t++) r[t] = a[t] / 255;
                n = e = s = i = r.join(",");
              } else {
                const [a, r, o] = t,
                  l = new Array(256),
                  c = new Array(256),
                  h = new Array(256);
                for (let t = 0; t < 256; t++) {
                  l[t] = a[t] / 255;
                  c[t] = r[t] / 255;
                  h[t] = o[t] / 255;
                }
                e = l.join(",");
                s = c.join(",");
                i = h.join(",");
                n = `${e}${s}${i}`;
              }
              r = this.#_t.get(n);
              if (r) {
                this.#_t.set(t, r);
                return r;
              }
              const o = `g_${this.#e}_transfer_map_${this.#w++}`,
                l = `url(#${o})`;
              this.#_t.set(t, l);
              this.#_t.set(n, l);
              const c = this.#gt.createElementNS(a, "filter", a);
              c.setAttribute("id", o);
              c.setAttribute("color-interpolation-filters", "sRGB");
              const h = this.#gt.createElementNS(a, "feComponentTransfer");
              c.append(h);
              this.#vt(h, "feFuncR", e);
              this.#vt(h, "feFuncG", s);
              this.#vt(h, "feFuncB", i);
              this.#yt.append(c);
              return l;
            }
            addHCMFilter(t, e) {
              const s = `${t}-${e}`;
              if (this.#bt === s) return this.#At;
              this.#bt = s;
              this.#At = "none";
              this.#mt?.remove();
              if (!t || !e) return this.#At;
              this.#yt.style.color = t;
              const i = getRGB(
                (t = getComputedStyle(this.#yt).getPropertyValue("color"))
              );
              t = n.Util.makeHexColor(...i);
              this.#yt.style.color = e;
              const r = getRGB(
                (e = getComputedStyle(this.#yt).getPropertyValue("color"))
              );
              e = n.Util.makeHexColor(...r);
              this.#yt.style.color = "";
              if (("#000000" === t && "#ffffff" === e) || t === e)
                return this.#At;
              const o = new Array(256);
              for (let t = 0; t <= 255; t++) {
                const e = t / 255;
                o[t] = e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
              }
              const l = o.join(","),
                c = `g_${this.#e}_hcm_filter`,
                h = (this.#mt = this.#gt.createElementNS(a, "filter", a));
              h.setAttribute("id", c);
              h.setAttribute("color-interpolation-filters", "sRGB");
              let d = this.#gt.createElementNS(a, "feComponentTransfer");
              h.append(d);
              this.#vt(d, "feFuncR", l);
              this.#vt(d, "feFuncG", l);
              this.#vt(d, "feFuncB", l);
              const u = this.#gt.createElementNS(a, "feColorMatrix");
              u.setAttribute("type", "matrix");
              u.setAttribute(
                "values",
                "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
              );
              h.append(u);
              d = this.#gt.createElementNS(a, "feComponentTransfer");
              h.append(d);
              const getSteps = (t, e) => {
                const s = i[t] / 255,
                  n = r[t] / 255,
                  a = new Array(e + 1);
                for (let t = 0; t <= e; t++) a[t] = s + (t / e) * (n - s);
                return a.join(",");
              };
              this.#vt(d, "feFuncR", getSteps(0, 5));
              this.#vt(d, "feFuncG", getSteps(1, 5));
              this.#vt(d, "feFuncB", getSteps(2, 5));
              this.#yt.append(h);
              this.#At = `url(#${c})`;
              return this.#At;
            }
            destroy(t = !1) {
              if (!t || !this.#At) {
                if (this.#ft) {
                  this.#ft.parentNode.parentNode.remove();
                  this.#ft = null;
                }
                if (this.#pt) {
                  this.#pt.clear();
                  this.#pt = null;
                }
                this.#w = 0;
              }
            }
          }
          e.DOMFilterFactory = DOMFilterFactory;
          class DOMCanvasFactory extends i.BaseCanvasFactory {
            constructor({ ownerDocument: t = globalThis.document } = {}) {
              super();
              this._document = t;
            }
            _createCanvas(t, e) {
              const s = this._document.createElement("canvas");
              s.width = t;
              s.height = e;
              return s;
            }
          }
          e.DOMCanvasFactory = DOMCanvasFactory;
          async function fetchData(t, e = !1) {
            if (isValidFetchUrl(t, document.baseURI)) {
              const s = await fetch(t);
              if (!s.ok) throw new Error(s.statusText);
              return e
                ? new Uint8Array(await s.arrayBuffer())
                : (0, n.stringToBytes)(await s.text());
            }
            return new Promise((s, i) => {
              const a = new XMLHttpRequest();
              a.open("GET", t, !0);
              e && (a.responseType = "arraybuffer");
              a.onreadystatechange = () => {
                if (a.readyState === XMLHttpRequest.DONE) {
                  if (200 === a.status || 0 === a.status) {
                    let t;
                    e && a.response
                      ? (t = new Uint8Array(a.response))
                      : !e &&
                        a.responseText &&
                        (t = (0, n.stringToBytes)(a.responseText));
                    if (t) {
                      s(t);
                      return;
                    }
                  }
                  i(new Error(a.statusText));
                }
              };
              a.send(null);
            });
          }
          class DOMCMapReaderFactory extends i.BaseCMapReaderFactory {
            _fetchData(t, e) {
              return fetchData(t, this.isCompressed).then((t) => ({
                cMapData: t,
                compressionType: e,
              }));
            }
          }
          e.DOMCMapReaderFactory = DOMCMapReaderFactory;
          class DOMStandardFontDataFactory extends i.BaseStandardFontDataFactory {
            _fetchData(t) {
              return fetchData(t, !0);
            }
          }
          e.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
          class DOMSVGFactory extends i.BaseSVGFactory {
            _createSVG(t) {
              return document.createElementNS(a, t);
            }
          }
          e.DOMSVGFactory = DOMSVGFactory;
          class PageViewport {
            constructor({
              viewBox: t,
              scale: e,
              rotation: s,
              offsetX: i = 0,
              offsetY: n = 0,
              dontFlip: a = !1,
            }) {
              this.viewBox = t;
              this.scale = e;
              this.rotation = s;
              this.offsetX = i;
              this.offsetY = n;
              const r = (t[2] + t[0]) / 2,
                o = (t[3] + t[1]) / 2;
              let l, c, h, d, u, p, f, g;
              (s %= 360) < 0 && (s += 360);
              switch (s) {
                case 180:
                  l = -1;
                  c = 0;
                  h = 0;
                  d = 1;
                  break;
                case 90:
                  l = 0;
                  c = 1;
                  h = 1;
                  d = 0;
                  break;
                case 270:
                  l = 0;
                  c = -1;
                  h = -1;
                  d = 0;
                  break;
                case 0:
                  l = 1;
                  c = 0;
                  h = 0;
                  d = -1;
                  break;
                default:
                  throw new Error(
                    "PageViewport: Invalid rotation, must be a multiple of 90 degrees."
                  );
              }
              if (a) {
                h = -h;
                d = -d;
              }
              if (0 === l) {
                u = Math.abs(o - t[1]) * e + i;
                p = Math.abs(r - t[0]) * e + n;
                f = (t[3] - t[1]) * e;
                g = (t[2] - t[0]) * e;
              } else {
                u = Math.abs(r - t[0]) * e + i;
                p = Math.abs(o - t[1]) * e + n;
                f = (t[2] - t[0]) * e;
                g = (t[3] - t[1]) * e;
              }
              this.transform = [
                l * e,
                c * e,
                h * e,
                d * e,
                u - l * e * r - h * e * o,
                p - c * e * r - d * e * o,
              ];
              this.width = f;
              this.height = g;
            }
            get rawDims() {
              const { viewBox: t } = this;
              return (0, n.shadow)(this, "rawDims", {
                pageWidth: t[2] - t[0],
                pageHeight: t[3] - t[1],
                pageX: t[0],
                pageY: t[1],
              });
            }
            clone({
              scale: t = this.scale,
              rotation: e = this.rotation,
              offsetX: s = this.offsetX,
              offsetY: i = this.offsetY,
              dontFlip: n = !1,
            } = {}) {
              return new PageViewport({
                viewBox: this.viewBox.slice(),
                scale: t,
                rotation: e,
                offsetX: s,
                offsetY: i,
                dontFlip: n,
              });
            }
            convertToViewportPoint(t, e) {
              return n.Util.applyTransform([t, e], this.transform);
            }
            convertToViewportRectangle(t) {
              const e = n.Util.applyTransform([t[0], t[1]], this.transform),
                s = n.Util.applyTransform([t[2], t[3]], this.transform);
              return [e[0], e[1], s[0], s[1]];
            }
            convertToPdfPoint(t, e) {
              return n.Util.applyInverseTransform([t, e], this.transform);
            }
          }
          e.PageViewport = PageViewport;
          class RenderingCancelledException extends n.BaseException {
            constructor(t, e, s = 0) {
              super(t, "RenderingCancelledException");
              this.type = e;
              this.extraDelay = s;
            }
          }
          e.RenderingCancelledException = RenderingCancelledException;
          function isDataScheme(t) {
            const e = t.length;
            let s = 0;
            for (; s < e && "" === t[s].trim(); ) s++;
            return "data:" === t.substring(s, s + 5).toLowerCase();
          }
          e.StatTimer = class StatTimer {
            started = Object.create(null);
            times = [];
            time(t) {
              t in this.started &&
                (0, n.warn)(`Timer is already running for ${t}`);
              this.started[t] = Date.now();
            }
            timeEnd(t) {
              t in this.started ||
                (0, n.warn)(`Timer has not been started for ${t}`);
              this.times.push({
                name: t,
                start: this.started[t],
                end: Date.now(),
              });
              delete this.started[t];
            }
            toString() {
              const t = [];
              let e = 0;
              for (const { name: t } of this.times) e = Math.max(t.length, e);
              for (const { name: s, start: i, end: n } of this.times)
                t.push(`${s.padEnd(e)} ${n - i}ms\n`);
              return t.join("");
            }
          };
          function isValidFetchUrl(t, e) {
            try {
              const { protocol: s } = e ? new URL(t, e) : new URL(t);
              return "http:" === s || "https:" === s;
            } catch (t) {
              return !1;
            }
          }
          let r;
          e.PDFDateString = class PDFDateString {
            static toDateObject(t) {
              if (!t || "string" != typeof t) return null;
              r ||
                (r = new RegExp(
                  "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
                ));
              const e = r.exec(t);
              if (!e) return null;
              const s = parseInt(e[1], 10);
              let i = parseInt(e[2], 10);
              i = i >= 1 && i <= 12 ? i - 1 : 0;
              let n = parseInt(e[3], 10);
              n = n >= 1 && n <= 31 ? n : 1;
              let a = parseInt(e[4], 10);
              a = a >= 0 && a <= 23 ? a : 0;
              let o = parseInt(e[5], 10);
              o = o >= 0 && o <= 59 ? o : 0;
              let l = parseInt(e[6], 10);
              l = l >= 0 && l <= 59 ? l : 0;
              const c = e[7] || "Z";
              let h = parseInt(e[8], 10);
              h = h >= 0 && h <= 23 ? h : 0;
              let d = parseInt(e[9], 10) || 0;
              d = d >= 0 && d <= 59 ? d : 0;
              if ("-" === c) {
                a += h;
                o += d;
              } else if ("+" === c) {
                a -= h;
                o -= d;
              }
              return new Date(Date.UTC(s, i, n, a, o, l));
            }
          };
          function getRGB(t) {
            if (t.startsWith("#")) {
              const e = parseInt(t.slice(1), 16);
              return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
            }
            if (t.startsWith("rgb("))
              return t
                .slice(4, -1)
                .split(",")
                .map((t) => parseInt(t));
            if (t.startsWith("rgba("))
              return t
                .slice(5, -1)
                .split(",")
                .map((t) => parseInt(t))
                .slice(0, 3);
            (0, n.warn)(`Not a valid color format: "${t}"`);
            return [0, 0, 0];
          }
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.BaseStandardFontDataFactory =
            e.BaseSVGFactory =
            e.BaseFilterFactory =
            e.BaseCanvasFactory =
            e.BaseCMapReaderFactory =
              void 0;
          var i = s(1);
          class BaseFilterFactory {
            constructor() {
              this.constructor === BaseFilterFactory &&
                (0, i.unreachable)("Cannot initialize BaseFilterFactory.");
            }
            addFilter(t) {
              return "none";
            }
            addHCMFilter(t, e) {
              return "none";
            }
            destroy(t = !1) {}
          }
          e.BaseFilterFactory = BaseFilterFactory;
          class BaseCanvasFactory {
            constructor() {
              this.constructor === BaseCanvasFactory &&
                (0, i.unreachable)("Cannot initialize BaseCanvasFactory.");
            }
            create(t, e) {
              if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
              const s = this._createCanvas(t, e);
              return { canvas: s, context: s.getContext("2d") };
            }
            reset(t, e, s) {
              if (!t.canvas) throw new Error("Canvas is not specified");
              if (e <= 0 || s <= 0) throw new Error("Invalid canvas size");
              t.canvas.width = e;
              t.canvas.height = s;
            }
            destroy(t) {
              if (!t.canvas) throw new Error("Canvas is not specified");
              t.canvas.width = 0;
              t.canvas.height = 0;
              t.canvas = null;
              t.context = null;
            }
            _createCanvas(t, e) {
              (0, i.unreachable)("Abstract method `_createCanvas` called.");
            }
          }
          e.BaseCanvasFactory = BaseCanvasFactory;
          class BaseCMapReaderFactory {
            constructor({ baseUrl: t = null, isCompressed: e = !0 }) {
              this.constructor === BaseCMapReaderFactory &&
                (0, i.unreachable)("Cannot initialize BaseCMapReaderFactory.");
              this.baseUrl = t;
              this.isCompressed = e;
            }
            async fetch({ name: t }) {
              if (!this.baseUrl)
                throw new Error(
                  'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
                );
              if (!t) throw new Error("CMap name must be specified.");
              const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""),
                s = this.isCompressed
                  ? i.CMapCompressionType.BINARY
                  : i.CMapCompressionType.NONE;
              return this._fetchData(e, s).catch((t) => {
                throw new Error(
                  `Unable to load ${
                    this.isCompressed ? "binary " : ""
                  }CMap at: ${e}`
                );
              });
            }
            _fetchData(t, e) {
              (0, i.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          e.BaseCMapReaderFactory = BaseCMapReaderFactory;
          class BaseStandardFontDataFactory {
            constructor({ baseUrl: t = null }) {
              this.constructor === BaseStandardFontDataFactory &&
                (0, i.unreachable)(
                  "Cannot initialize BaseStandardFontDataFactory."
                );
              this.baseUrl = t;
            }
            async fetch({ filename: t }) {
              if (!this.baseUrl)
                throw new Error(
                  'The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.'
                );
              if (!t) throw new Error("Font filename must be specified.");
              const e = `${this.baseUrl}${t}`;
              return this._fetchData(e).catch((t) => {
                throw new Error(`Unable to load font data at: ${e}`);
              });
            }
            _fetchData(t) {
              (0, i.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          e.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
          class BaseSVGFactory {
            constructor() {
              this.constructor === BaseSVGFactory &&
                (0, i.unreachable)("Cannot initialize BaseSVGFactory.");
            }
            create(t, e, s = !1) {
              if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
              const i = this._createSVG("svg:svg");
              i.setAttribute("version", "1.1");
              if (!s) {
                i.setAttribute("width", `${t}px`);
                i.setAttribute("height", `${e}px`);
              }
              i.setAttribute("preserveAspectRatio", "none");
              i.setAttribute("viewBox", `0 0 ${t} ${e}`);
              return i;
            }
            createElement(t) {
              if ("string" != typeof t)
                throw new Error("Invalid SVG element type");
              return this._createSVG(t);
            }
            _createSVG(t) {
              (0, i.unreachable)("Abstract method `_createSVG` called.");
            }
          }
          e.BaseSVGFactory = BaseSVGFactory;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.MurmurHash3_64 = void 0;
          var i = s(1);
          const n = 3285377520,
            a = 4294901760,
            r = 65535;
          e.MurmurHash3_64 = class MurmurHash3_64 {
            constructor(t) {
              this.h1 = t ? 4294967295 & t : n;
              this.h2 = t ? 4294967295 & t : n;
            }
            update(t) {
              let e, s;
              if ("string" == typeof t) {
                e = new Uint8Array(2 * t.length);
                s = 0;
                for (let i = 0, n = t.length; i < n; i++) {
                  const n = t.charCodeAt(i);
                  if (n <= 255) e[s++] = n;
                  else {
                    e[s++] = n >>> 8;
                    e[s++] = 255 & n;
                  }
                }
              } else {
                if (!(0, i.isArrayBuffer)(t))
                  throw new Error(
                    "Wrong data format in MurmurHash3_64_update. Input must be a string or array."
                  );
                e = t.slice();
                s = e.byteLength;
              }
              const n = s >> 2,
                o = s - 4 * n,
                l = new Uint32Array(e.buffer, 0, n);
              let c = 0,
                h = 0,
                d = this.h1,
                u = this.h2;
              const p = 3432918353,
                f = 461845907,
                g = 11601,
                m = 13715;
              for (let t = 0; t < n; t++)
                if (1 & t) {
                  c = l[t];
                  c = ((c * p) & a) | ((c * g) & r);
                  c = (c << 15) | (c >>> 17);
                  c = ((c * f) & a) | ((c * m) & r);
                  d ^= c;
                  d = (d << 13) | (d >>> 19);
                  d = 5 * d + 3864292196;
                } else {
                  h = l[t];
                  h = ((h * p) & a) | ((h * g) & r);
                  h = (h << 15) | (h >>> 17);
                  h = ((h * f) & a) | ((h * m) & r);
                  u ^= h;
                  u = (u << 13) | (u >>> 19);
                  u = 5 * u + 3864292196;
                }
              c = 0;
              switch (o) {
                case 3:
                  c ^= e[4 * n + 2] << 16;
                case 2:
                  c ^= e[4 * n + 1] << 8;
                case 1:
                  c ^= e[4 * n];
                  c = ((c * p) & a) | ((c * g) & r);
                  c = (c << 15) | (c >>> 17);
                  c = ((c * f) & a) | ((c * m) & r);
                  1 & n ? (d ^= c) : (u ^= c);
              }
              this.h1 = d;
              this.h2 = u;
            }
            hexdigest() {
              let t = this.h1,
                e = this.h2;
              t ^= e >>> 1;
              t = ((3981806797 * t) & a) | ((36045 * t) & r);
              e =
                ((4283543511 * e) & a) |
                (((2950163797 * ((e << 16) | (t >>> 16))) & a) >>> 16);
              t ^= e >>> 1;
              t = ((444984403 * t) & a) | ((60499 * t) & r);
              e =
                ((3301882366 * e) & a) |
                (((3120437893 * ((e << 16) | (t >>> 16))) & a) >>> 16);
              t ^= e >>> 1;
              return (
                (t >>> 0).toString(16).padStart(8, "0") +
                (e >>> 0).toString(16).padStart(8, "0")
              );
            }
          };
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.FontLoader = e.FontFaceObject = void 0;
          var i = s(1),
            n = s(10);
          e.FontLoader = class FontLoader {
            constructor({
              ownerDocument: t = globalThis.document,
              styleElement: e = null,
            }) {
              this._document = t;
              this.nativeFontFaces = [];
              this.styleElement = null;
              this.loadingRequests = [];
              this.loadTestFontId = 0;
            }
            addNativeFontFace(t) {
              this.nativeFontFaces.push(t);
              this._document.fonts.add(t);
            }
            insertRule(t) {
              if (!this.styleElement) {
                this.styleElement = this._document.createElement("style");
                this._document.documentElement
                  .getElementsByTagName("head")[0]
                  .append(this.styleElement);
              }
              const e = this.styleElement.sheet;
              e.insertRule(t, e.cssRules.length);
            }
            clear() {
              for (const t of this.nativeFontFaces)
                this._document.fonts.delete(t);
              this.nativeFontFaces.length = 0;
              if (this.styleElement) {
                this.styleElement.remove();
                this.styleElement = null;
              }
            }
            async bind(t) {
              if (t.attached || t.missingFile) return;
              t.attached = !0;
              if (this.isFontLoadingAPISupported) {
                const e = t.createNativeFontFace();
                if (e) {
                  this.addNativeFontFace(e);
                  try {
                    await e.loaded;
                  } catch (s) {
                    (0, i.warn)(`Failed to load font '${e.family}': '${s}'.`);
                    t.disableFontFace = !0;
                    throw s;
                  }
                }
                return;
              }
              const e = t.createFontFaceRule();
              if (e) {
                this.insertRule(e);
                if (this.isSyncFontLoadingSupported) return;
                await new Promise((e) => {
                  const s = this._queueLoadingCallback(e);
                  this._prepareFontLoadEvent(t, s);
                });
              }
            }
            get isFontLoadingAPISupported() {
              const t = !!this._document?.fonts;
              return (0, i.shadow)(this, "isFontLoadingAPISupported", t);
            }
            get isSyncFontLoadingSupported() {
              let t = !1;
              (n.isNodeJS ||
                ("undefined" != typeof navigator &&
                  /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(
                    navigator.userAgent
                  ))) &&
                (t = !0);
              return (0, i.shadow)(this, "isSyncFontLoadingSupported", t);
            }
            _queueLoadingCallback(t) {
              const { loadingRequests: e } = this,
                s = {
                  done: !1,
                  complete: function completeRequest() {
                    (0, i.assert)(
                      !s.done,
                      "completeRequest() cannot be called twice."
                    );
                    s.done = !0;
                    for (; e.length > 0 && e[0].done; ) {
                      const t = e.shift();
                      setTimeout(t.callback, 0);
                    }
                  },
                  callback: t,
                };
              e.push(s);
              return s;
            }
            get _loadTestFont() {
              const t = atob(
                "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
              );
              return (0, i.shadow)(this, "_loadTestFont", t);
            }
            _prepareFontLoadEvent(t, e) {
              function int32(t, e) {
                return (
                  (t.charCodeAt(e) << 24) |
                  (t.charCodeAt(e + 1) << 16) |
                  (t.charCodeAt(e + 2) << 8) |
                  (255 & t.charCodeAt(e + 3))
                );
              }
              function spliceString(t, e, s, i) {
                return t.substring(0, e) + i + t.substring(e + s);
              }
              let s, n;
              const a = this._document.createElement("canvas");
              a.width = 1;
              a.height = 1;
              const r = a.getContext("2d");
              let o = 0;
              const l = `lt${Date.now()}${this.loadTestFontId++}`;
              let c = this._loadTestFont;
              c = spliceString(c, 976, l.length, l);
              const h = 1482184792;
              let d = int32(c, 16);
              for (s = 0, n = l.length - 3; s < n; s += 4)
                d = (d - h + int32(l, s)) | 0;
              s < l.length && (d = (d - h + int32(l + "XXX", s)) | 0);
              c = spliceString(c, 16, 4, (0, i.string32)(d));
              const u = `@font-face {font-family:"${l}";src:${`url(data:font/opentype;base64,${btoa(
                c
              )});`}}`;
              this.insertRule(u);
              const p = this._document.createElement("div");
              p.style.visibility = "hidden";
              p.style.width = p.style.height = "10px";
              p.style.position = "absolute";
              p.style.top = p.style.left = "0px";
              for (const e of [t.loadedName, l]) {
                const t = this._document.createElement("span");
                t.textContent = "Hi";
                t.style.fontFamily = e;
                p.append(t);
              }
              this._document.body.append(p);
              !(function isFontReady(t, e) {
                if (++o > 30) {
                  (0, i.warn)("Load test font never loaded.");
                  e();
                  return;
                }
                r.font = "30px " + t;
                r.fillText(".", 0, 20);
                r.getImageData(0, 0, 1, 1).data[3] > 0
                  ? e()
                  : setTimeout(isFontReady.bind(null, t, e));
              })(l, () => {
                p.remove();
                e.complete();
              });
            }
          };
          e.FontFaceObject = class FontFaceObject {
            constructor(
              t,
              {
                isEvalSupported: e = !0,
                disableFontFace: s = !1,
                ignoreErrors: i = !1,
                inspectFont: n = null,
              }
            ) {
              this.compiledGlyphs = Object.create(null);
              for (const e in t) this[e] = t[e];
              this.isEvalSupported = !1 !== e;
              this.disableFontFace = !0 === s;
              this.ignoreErrors = !0 === i;
              this._inspectFont = n;
            }
            createNativeFontFace() {
              if (!this.data || this.disableFontFace) return null;
              let t;
              if (this.cssFontInfo) {
                const e = { weight: this.cssFontInfo.fontWeight };
                this.cssFontInfo.italicAngle &&
                  (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
                t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
              } else t = new FontFace(this.loadedName, this.data, {});
              this._inspectFont?.(this);
              return t;
            }
            createFontFaceRule() {
              if (!this.data || this.disableFontFace) return null;
              const t = (0, i.bytesToString)(this.data),
                e = `url(data:${this.mimetype};base64,${btoa(t)});`;
              let s;
              if (this.cssFontInfo) {
                let t = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle &&
                  (t += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
                s = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${t}src:${e}}`;
              } else
                s = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
              this._inspectFont?.(this, e);
              return s;
            }
            getPathGenerator(t, e) {
              if (void 0 !== this.compiledGlyphs[e])
                return this.compiledGlyphs[e];
              let s;
              try {
                s = t.get(this.loadedName + "_path_" + e);
              } catch (t) {
                if (!this.ignoreErrors) throw t;
                (0, i.warn)(`getPathGenerator - ignoring character: "${t}".`);
                return (this.compiledGlyphs[e] = function (t, e) {});
              }
              if (this.isEvalSupported && i.FeatureTest.isEvalSupported) {
                const t = [];
                for (const e of s) {
                  const s = void 0 !== e.args ? e.args.join(",") : "";
                  t.push("c.", e.cmd, "(", s, ");\n");
                }
                return (this.compiledGlyphs[e] = new Function(
                  "c",
                  "size",
                  t.join("")
                ));
              }
              return (this.compiledGlyphs[e] = function (t, e) {
                for (const i of s) {
                  "scale" === i.cmd && (i.args = [e, -e]);
                  t[i.cmd].apply(t, i.args);
                }
              });
            }
          };
        },
        (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.isNodeJS = void 0;
          const s = !(
            "object" != typeof process ||
            process + "" != "[object process]" ||
            process.versions.nw ||
            (process.versions.electron &&
              process.type &&
              "browser" !== process.type)
          );
          e.isNodeJS = s;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.CanvasGraphics = void 0;
          var i = s(1),
            n = s(6),
            a = s(12),
            r = s(13),
            o = s(10);
          const l = 4096,
            c = 16;
          class CachedCanvases {
            constructor(t) {
              this.canvasFactory = t;
              this.cache = Object.create(null);
            }
            getCanvas(t, e, s) {
              let i;
              if (void 0 !== this.cache[t]) {
                i = this.cache[t];
                this.canvasFactory.reset(i, e, s);
              } else {
                i = this.canvasFactory.create(e, s);
                this.cache[t] = i;
              }
              return i;
            }
            delete(t) {
              delete this.cache[t];
            }
            clear() {
              for (const t in this.cache) {
                const e = this.cache[t];
                this.canvasFactory.destroy(e);
                delete this.cache[t];
              }
            }
          }
          function drawImageAtIntegerCoords(t, e, s, i, a, r, o, l, c, h) {
            const [d, u, p, f, g, m] = (0, n.getCurrentTransform)(t);
            if (0 === u && 0 === p) {
              const n = o * d + g,
                b = Math.round(n),
                A = l * f + m,
                _ = Math.round(A),
                y = (o + c) * d + g,
                v = Math.abs(Math.round(y) - b) || 1,
                S = (l + h) * f + m,
                x = Math.abs(Math.round(S) - _) || 1;
              t.setTransform(Math.sign(d), 0, 0, Math.sign(f), b, _);
              t.drawImage(e, s, i, a, r, 0, 0, v, x);
              t.setTransform(d, u, p, f, g, m);
              return [v, x];
            }
            if (0 === d && 0 === f) {
              const n = l * p + g,
                b = Math.round(n),
                A = o * u + m,
                _ = Math.round(A),
                y = (l + h) * p + g,
                v = Math.abs(Math.round(y) - b) || 1,
                S = (o + c) * u + m,
                x = Math.abs(Math.round(S) - _) || 1;
              t.setTransform(0, Math.sign(u), Math.sign(p), 0, b, _);
              t.drawImage(e, s, i, a, r, 0, 0, x, v);
              t.setTransform(d, u, p, f, g, m);
              return [x, v];
            }
            t.drawImage(e, s, i, a, r, o, l, c, h);
            return [Math.hypot(d, u) * c, Math.hypot(p, f) * h];
          }
          class CanvasExtraState {
            constructor(t, e) {
              this.alphaIsShape = !1;
              this.fontSize = 0;
              this.fontSizeScale = 1;
              this.textMatrix = i.IDENTITY_MATRIX;
              this.textMatrixScale = 1;
              this.fontMatrix = i.FONT_IDENTITY_MATRIX;
              this.leading = 0;
              this.x = 0;
              this.y = 0;
              this.lineX = 0;
              this.lineY = 0;
              this.charSpacing = 0;
              this.wordSpacing = 0;
              this.textHScale = 1;
              this.textRenderingMode = i.TextRenderingMode.FILL;
              this.textRise = 0;
              this.fillColor = "#000000";
              this.strokeColor = "#000000";
              this.patternFill = !1;
              this.fillAlpha = 1;
              this.strokeAlpha = 1;
              this.lineWidth = 1;
              this.activeSMask = null;
              this.transferMaps = "none";
              this.startNewPathAndClipBox([0, 0, t, e]);
            }
            clone() {
              const t = Object.create(this);
              t.clipBox = this.clipBox.slice();
              return t;
            }
            setCurrentPoint(t, e) {
              this.x = t;
              this.y = e;
            }
            updatePathMinMax(t, e, s) {
              [e, s] = i.Util.applyTransform([e, s], t);
              this.minX = Math.min(this.minX, e);
              this.minY = Math.min(this.minY, s);
              this.maxX = Math.max(this.maxX, e);
              this.maxY = Math.max(this.maxY, s);
            }
            updateRectMinMax(t, e) {
              const s = i.Util.applyTransform(e, t),
                n = i.Util.applyTransform(e.slice(2), t);
              this.minX = Math.min(this.minX, s[0], n[0]);
              this.minY = Math.min(this.minY, s[1], n[1]);
              this.maxX = Math.max(this.maxX, s[0], n[0]);
              this.maxY = Math.max(this.maxY, s[1], n[1]);
            }
            updateScalingPathMinMax(t, e) {
              i.Util.scaleMinMax(t, e);
              this.minX = Math.min(this.minX, e[0]);
              this.maxX = Math.max(this.maxX, e[1]);
              this.minY = Math.min(this.minY, e[2]);
              this.maxY = Math.max(this.maxY, e[3]);
            }
            updateCurvePathMinMax(t, e, s, n, a, r, o, l, c, h) {
              const d = i.Util.bezierBoundingBox(e, s, n, a, r, o, l, c);
              if (h) {
                h[0] = Math.min(h[0], d[0], d[2]);
                h[1] = Math.max(h[1], d[0], d[2]);
                h[2] = Math.min(h[2], d[1], d[3]);
                h[3] = Math.max(h[3], d[1], d[3]);
              } else this.updateRectMinMax(t, d);
            }
            getPathBoundingBox(t = a.PathType.FILL, e = null) {
              const s = [this.minX, this.minY, this.maxX, this.maxY];
              if (t === a.PathType.STROKE) {
                e ||
                  (0, i.unreachable)(
                    "Stroke bounding box must include transform."
                  );
                const t = i.Util.singularValueDecompose2dScale(e),
                  n = (t[0] * this.lineWidth) / 2,
                  a = (t[1] * this.lineWidth) / 2;
                s[0] -= n;
                s[1] -= a;
                s[2] += n;
                s[3] += a;
              }
              return s;
            }
            updateClipFromPath() {
              const t = i.Util.intersect(
                this.clipBox,
                this.getPathBoundingBox()
              );
              this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
            }
            isEmptyClip() {
              return this.minX === 1 / 0;
            }
            startNewPathAndClipBox(t) {
              this.clipBox = t;
              this.minX = 1 / 0;
              this.minY = 1 / 0;
              this.maxX = 0;
              this.maxY = 0;
            }
            getClippedPathBoundingBox(t = a.PathType.FILL, e = null) {
              return i.Util.intersect(
                this.clipBox,
                this.getPathBoundingBox(t, e)
              );
            }
          }
          function putBinaryImageData(t, e) {
            if ("undefined" != typeof ImageData && e instanceof ImageData) {
              t.putImageData(e, 0, 0);
              return;
            }
            const s = e.height,
              n = e.width,
              a = s % c,
              r = (s - a) / c,
              o = 0 === a ? r : r + 1,
              l = t.createImageData(n, c);
            let h,
              d = 0;
            const u = e.data,
              p = l.data;
            let f, g, m, b;
            if (e.kind === i.ImageKind.GRAYSCALE_1BPP) {
              const e = u.byteLength,
                s = new Uint32Array(p.buffer, 0, p.byteLength >> 2),
                b = s.length,
                A = (n + 7) >> 3,
                _ = 4294967295,
                y = i.FeatureTest.isLittleEndian ? 4278190080 : 255;
              for (f = 0; f < o; f++) {
                m = f < r ? c : a;
                h = 0;
                for (g = 0; g < m; g++) {
                  const t = e - d;
                  let i = 0;
                  const a = t > A ? n : 8 * t - 7,
                    r = -8 & a;
                  let o = 0,
                    l = 0;
                  for (; i < r; i += 8) {
                    l = u[d++];
                    s[h++] = 128 & l ? _ : y;
                    s[h++] = 64 & l ? _ : y;
                    s[h++] = 32 & l ? _ : y;
                    s[h++] = 16 & l ? _ : y;
                    s[h++] = 8 & l ? _ : y;
                    s[h++] = 4 & l ? _ : y;
                    s[h++] = 2 & l ? _ : y;
                    s[h++] = 1 & l ? _ : y;
                  }
                  for (; i < a; i++) {
                    if (0 === o) {
                      l = u[d++];
                      o = 128;
                    }
                    s[h++] = l & o ? _ : y;
                    o >>= 1;
                  }
                }
                for (; h < b; ) s[h++] = 0;
                t.putImageData(l, 0, f * c);
              }
            } else if (e.kind === i.ImageKind.RGBA_32BPP) {
              g = 0;
              b = n * c * 4;
              for (f = 0; f < r; f++) {
                p.set(u.subarray(d, d + b));
                d += b;
                t.putImageData(l, 0, g);
                g += c;
              }
              if (f < o) {
                b = n * a * 4;
                p.set(u.subarray(d, d + b));
                t.putImageData(l, 0, g);
              }
            } else {
              if (e.kind !== i.ImageKind.RGB_24BPP)
                throw new Error(`bad image kind: ${e.kind}`);
              m = c;
              b = n * m;
              for (f = 0; f < o; f++) {
                if (f >= r) {
                  m = a;
                  b = n * m;
                }
                h = 0;
                for (g = b; g--; ) {
                  p[h++] = u[d++];
                  p[h++] = u[d++];
                  p[h++] = u[d++];
                  p[h++] = 255;
                }
                t.putImageData(l, 0, f * c);
              }
            }
          }
          function putBinaryImageMask(t, e) {
            if (e.bitmap) {
              t.drawImage(e.bitmap, 0, 0);
              return;
            }
            const s = e.height,
              i = e.width,
              n = s % c,
              a = (s - n) / c,
              o = 0 === n ? a : a + 1,
              l = t.createImageData(i, c);
            let h = 0;
            const d = e.data,
              u = l.data;
            for (let e = 0; e < o; e++) {
              const s = e < a ? c : n;
              ({ srcPos: h } = (0, r.convertBlackAndWhiteToRGBA)({
                src: d,
                srcPos: h,
                dest: u,
                width: i,
                height: s,
                nonBlackColor: 0,
              }));
              t.putImageData(l, 0, e * c);
            }
          }
          function copyCtxState(t, e) {
            const s = [
              "strokeStyle",
              "fillStyle",
              "fillRule",
              "globalAlpha",
              "lineWidth",
              "lineCap",
              "lineJoin",
              "miterLimit",
              "globalCompositeOperation",
              "font",
              "filter",
            ];
            for (const i of s) void 0 !== t[i] && (e[i] = t[i]);
            if (void 0 !== t.setLineDash) {
              e.setLineDash(t.getLineDash());
              e.lineDashOffset = t.lineDashOffset;
            }
          }
          function resetCtxToDefault(t) {
            t.strokeStyle = t.fillStyle = "#000000";
            t.fillRule = "nonzero";
            t.globalAlpha = 1;
            t.lineWidth = 1;
            t.lineCap = "butt";
            t.lineJoin = "miter";
            t.miterLimit = 10;
            t.globalCompositeOperation = "source-over";
            t.font = "10px sans-serif";
            if (void 0 !== t.setLineDash) {
              t.setLineDash([]);
              t.lineDashOffset = 0;
            }
            o.isNodeJS || (t.filter = "none");
          }
          function composeSMaskBackdrop(t, e, s, i) {
            const n = t.length;
            for (let a = 3; a < n; a += 4) {
              const n = t[a];
              if (0 === n) {
                t[a - 3] = e;
                t[a - 2] = s;
                t[a - 1] = i;
              } else if (n < 255) {
                const r = 255 - n;
                t[a - 3] = (t[a - 3] * n + e * r) >> 8;
                t[a - 2] = (t[a - 2] * n + s * r) >> 8;
                t[a - 1] = (t[a - 1] * n + i * r) >> 8;
              }
            }
          }
          function composeSMaskAlpha(t, e, s) {
            const i = t.length;
            for (let n = 3; n < i; n += 4) {
              const i = s ? s[t[n]] : t[n];
              e[n] = (e[n] * i * 0.00392156862745098) | 0;
            }
          }
          function composeSMaskLuminosity(t, e, s) {
            const i = t.length;
            for (let n = 3; n < i; n += 4) {
              const i = 77 * t[n - 3] + 152 * t[n - 2] + 28 * t[n - 1];
              e[n] = s ? (e[n] * s[i >> 8]) >> 8 : (e[n] * i) >> 16;
            }
          }
          function composeSMask(t, e, s, i) {
            const n = i[0],
              a = i[1],
              r = i[2] - n,
              o = i[3] - a;
            if (0 !== r && 0 !== o) {
              !(function genericComposeSMask(t, e, s, i, n, a, r, o, l, c, h) {
                const d = !!a,
                  u = d ? a[0] : 0,
                  p = d ? a[1] : 0,
                  f = d ? a[2] : 0;
                let g;
                g =
                  "Luminosity" === n
                    ? composeSMaskLuminosity
                    : composeSMaskAlpha;
                const m = Math.min(i, Math.ceil(1048576 / s));
                for (let n = 0; n < i; n += m) {
                  const a = Math.min(m, i - n),
                    b = t.getImageData(o - c, n + (l - h), s, a),
                    A = e.getImageData(o, n + l, s, a);
                  d && composeSMaskBackdrop(b.data, u, p, f);
                  g(b.data, A.data, r);
                  e.putImageData(A, o, n + l);
                }
              })(
                e.context,
                s,
                r,
                o,
                e.subtype,
                e.backdrop,
                e.transferMap,
                n,
                a,
                e.offsetX,
                e.offsetY
              );
              t.save();
              t.globalAlpha = 1;
              t.globalCompositeOperation = "source-over";
              t.setTransform(1, 0, 0, 1, 0, 0);
              t.drawImage(s.canvas, 0, 0);
              t.restore();
            }
          }
          function getImageSmoothingEnabled(t, e) {
            const s = i.Util.singularValueDecompose2dScale(t);
            s[0] = Math.fround(s[0]);
            s[1] = Math.fround(s[1]);
            const a = Math.fround(
              (globalThis.devicePixelRatio || 1) *
                n.PixelsPerInch.PDF_TO_CSS_UNITS
            );
            return void 0 !== e ? e : s[0] <= a || s[1] <= a;
          }
          const h = ["butt", "round", "square"],
            d = ["miter", "round", "bevel"],
            u = {},
            p = {};
          class CanvasGraphics {
            constructor(
              t,
              e,
              s,
              i,
              n,
              { optionalContentConfig: a, markedContentStack: r = null },
              o,
              l
            ) {
              this.ctx = t;
              this.current = new CanvasExtraState(
                this.ctx.canvas.width,
                this.ctx.canvas.height
              );
              this.stateStack = [];
              this.pendingClip = null;
              this.pendingEOFill = !1;
              this.res = null;
              this.xobjs = null;
              this.commonObjs = e;
              this.objs = s;
              this.canvasFactory = i;
              this.filterFactory = n;
              this.groupStack = [];
              this.processingType3 = null;
              this.baseTransform = null;
              this.baseTransformStack = [];
              this.groupLevel = 0;
              this.smaskStack = [];
              this.smaskCounter = 0;
              this.tempSMask = null;
              this.suspendedCtx = null;
              this.contentVisible = !0;
              this.markedContentStack = r || [];
              this.optionalContentConfig = a;
              this.cachedCanvases = new CachedCanvases(this.canvasFactory);
              this.cachedPatterns = new Map();
              this.annotationCanvasMap = o;
              this.viewportScale = 1;
              this.outputScaleX = 1;
              this.outputScaleY = 1;
              this.pageColors = l;
              this._cachedScaleForStroking = null;
              this._cachedGetSinglePixelWidth = null;
              this._cachedBitmapsMap = new Map();
            }
            getObject(t, e = null) {
              return "string" == typeof t
                ? t.startsWith("g_")
                  ? this.commonObjs.get(t)
                  : this.objs.get(t)
                : e;
            }
            beginDrawing({
              transform: t,
              viewport: e,
              transparency: s = !1,
              background: i = null,
            }) {
              const a = this.ctx.canvas.width,
                r = this.ctx.canvas.height,
                o = this.ctx.fillStyle;
              this.ctx.fillStyle = i || "#ffffff";
              this.ctx.fillRect(0, 0, a, r);
              this.ctx.fillStyle = o;
              if (s) {
                const t = this.cachedCanvases.getCanvas("transparent", a, r);
                this.compositeCtx = this.ctx;
                this.transparentCanvas = t.canvas;
                this.ctx = t.context;
                this.ctx.save();
                this.ctx.transform(
                  ...(0, n.getCurrentTransform)(this.compositeCtx)
                );
              }
              this.ctx.save();
              resetCtxToDefault(this.ctx);
              if (t) {
                this.ctx.transform(...t);
                this.outputScaleX = t[0];
                this.outputScaleY = t[0];
              }
              this.ctx.transform(...e.transform);
              this.viewportScale = e.scale;
              this.baseTransform = (0, n.getCurrentTransform)(this.ctx);
            }
            executeOperatorList(t, e, s, n) {
              const a = t.argsArray,
                r = t.fnArray;
              let o = e || 0;
              const l = a.length;
              if (l === o) return o;
              const c = l - o > 10 && "function" == typeof s,
                h = c ? Date.now() + 15 : 0;
              let d = 0;
              const u = this.commonObjs,
                p = this.objs;
              let f;
              for (;;) {
                if (void 0 !== n && o === n.nextBreakPoint) {
                  n.breakIt(o, s);
                  return o;
                }
                f = r[o];
                if (f !== i.OPS.dependency) this[f].apply(this, a[o]);
                else
                  for (const t of a[o]) {
                    const e = t.startsWith("g_") ? u : p;
                    if (!e.has(t)) {
                      e.get(t, s);
                      return o;
                    }
                  }
                o++;
                if (o === l) return o;
                if (c && ++d > 10) {
                  if (Date.now() > h) {
                    s();
                    return o;
                  }
                  d = 0;
                }
              }
            }
            #St() {
              for (; this.stateStack.length || this.inSMaskMode; )
                this.restore();
              this.ctx.restore();
              if (this.transparentCanvas) {
                this.ctx = this.compositeCtx;
                this.ctx.save();
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.drawImage(this.transparentCanvas, 0, 0);
                this.ctx.restore();
                this.transparentCanvas = null;
              }
            }
            endDrawing() {
              this.#St();
              this.cachedCanvases.clear();
              this.cachedPatterns.clear();
              for (const t of this._cachedBitmapsMap.values()) {
                for (const e of t.values())
                  "undefined" != typeof HTMLCanvasElement &&
                    e instanceof HTMLCanvasElement &&
                    (e.width = e.height = 0);
                t.clear();
              }
              this._cachedBitmapsMap.clear();
              this.#xt();
            }
            #xt() {
              if (this.pageColors) {
                const t = this.filterFactory.addHCMFilter(
                  this.pageColors.foreground,
                  this.pageColors.background
                );
                if ("none" !== t) {
                  const e = this.ctx.filter;
                  this.ctx.filter = t;
                  this.ctx.drawImage(this.ctx.canvas, 0, 0);
                  this.ctx.filter = e;
                }
              }
            }
            _scaleImage(t, e) {
              const s = t.width,
                i = t.height;
              let n,
                a,
                r = Math.max(Math.hypot(e[0], e[1]), 1),
                o = Math.max(Math.hypot(e[2], e[3]), 1),
                l = s,
                c = i,
                h = "prescale1";
              for (; (r > 2 && l > 1) || (o > 2 && c > 1); ) {
                let e = l,
                  s = c;
                if (r > 2 && l > 1) {
                  e =
                    l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2);
                  r /= l / e;
                }
                if (o > 2 && c > 1) {
                  s =
                    c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2;
                  o /= c / s;
                }
                n = this.cachedCanvases.getCanvas(h, e, s);
                a = n.context;
                a.clearRect(0, 0, e, s);
                a.drawImage(t, 0, 0, l, c, 0, 0, e, s);
                t = n.canvas;
                l = e;
                c = s;
                h = "prescale1" === h ? "prescale2" : "prescale1";
              }
              return { img: t, paintWidth: l, paintHeight: c };
            }
            _createMaskCanvas(t) {
              const e = this.ctx,
                { width: s, height: r } = t,
                o = this.current.fillColor,
                l = this.current.patternFill,
                c = (0, n.getCurrentTransform)(e);
              let h, d, u, p;
              if ((t.bitmap || t.data) && t.count > 1) {
                const e = t.bitmap || t.data.buffer;
                d = JSON.stringify(l ? c : [c.slice(0, 4), o]);
                h = this._cachedBitmapsMap.get(e);
                if (!h) {
                  h = new Map();
                  this._cachedBitmapsMap.set(e, h);
                }
                const s = h.get(d);
                if (s && !l) {
                  return {
                    canvas: s,
                    offsetX: Math.round(Math.min(c[0], c[2]) + c[4]),
                    offsetY: Math.round(Math.min(c[1], c[3]) + c[5]),
                  };
                }
                u = s;
              }
              if (!u) {
                p = this.cachedCanvases.getCanvas("maskCanvas", s, r);
                putBinaryImageMask(p.context, t);
              }
              let f = i.Util.transform(c, [1 / s, 0, 0, -1 / r, 0, 0]);
              f = i.Util.transform(f, [1, 0, 0, 1, 0, -r]);
              const g = i.Util.applyTransform([0, 0], f),
                m = i.Util.applyTransform([s, r], f),
                b = i.Util.normalizeRect([g[0], g[1], m[0], m[1]]),
                A = Math.round(b[2] - b[0]) || 1,
                _ = Math.round(b[3] - b[1]) || 1,
                y = this.cachedCanvases.getCanvas("fillCanvas", A, _),
                v = y.context,
                S = Math.min(g[0], m[0]),
                x = Math.min(g[1], m[1]);
              v.translate(-S, -x);
              v.transform(...f);
              if (!u) {
                u = this._scaleImage(
                  p.canvas,
                  (0, n.getCurrentTransformInverse)(v)
                );
                u = u.img;
                h && l && h.set(d, u);
              }
              v.imageSmoothingEnabled = getImageSmoothingEnabled(
                (0, n.getCurrentTransform)(v),
                t.interpolate
              );
              drawImageAtIntegerCoords(
                v,
                u,
                0,
                0,
                u.width,
                u.height,
                0,
                0,
                s,
                r
              );
              v.globalCompositeOperation = "source-in";
              const C = i.Util.transform((0, n.getCurrentTransformInverse)(v), [
                1,
                0,
                0,
                1,
                -S,
                -x,
              ]);
              v.fillStyle = l ? o.getPattern(e, this, C, a.PathType.FILL) : o;
              v.fillRect(0, 0, s, r);
              if (h && !l) {
                this.cachedCanvases.delete("fillCanvas");
                h.set(d, y.canvas);
              }
              return {
                canvas: y.canvas,
                offsetX: Math.round(S),
                offsetY: Math.round(x),
              };
            }
            setLineWidth(t) {
              t !== this.current.lineWidth &&
                (this._cachedScaleForStroking = null);
              this.current.lineWidth = t;
              this.ctx.lineWidth = t;
            }
            setLineCap(t) {
              this.ctx.lineCap = h[t];
            }
            setLineJoin(t) {
              this.ctx.lineJoin = d[t];
            }
            setMiterLimit(t) {
              this.ctx.miterLimit = t;
            }
            setDash(t, e) {
              const s = this.ctx;
              if (void 0 !== s.setLineDash) {
                s.setLineDash(t);
                s.lineDashOffset = e;
              }
            }
            setRenderingIntent(t) {}
            setFlatness(t) {}
            setGState(t) {
              for (const [e, s] of t)
                switch (e) {
                  case "LW":
                    this.setLineWidth(s);
                    break;
                  case "LC":
                    this.setLineCap(s);
                    break;
                  case "LJ":
                    this.setLineJoin(s);
                    break;
                  case "ML":
                    this.setMiterLimit(s);
                    break;
                  case "D":
                    this.setDash(s[0], s[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(s);
                    break;
                  case "FL":
                    this.setFlatness(s);
                    break;
                  case "Font":
                    this.setFont(s[0], s[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = s;
                    break;
                  case "ca":
                    this.current.fillAlpha = s;
                    this.ctx.globalAlpha = s;
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = s;
                    break;
                  case "SMask":
                    this.current.activeSMask = s ? this.tempSMask : null;
                    this.tempSMask = null;
                    this.checkSMaskState();
                    break;
                  case "TR":
                    this.ctx.filter = this.current.transferMaps =
                      this.filterFactory.addFilter(s);
                }
            }
            get inSMaskMode() {
              return !!this.suspendedCtx;
            }
            checkSMaskState() {
              const t = this.inSMaskMode;
              this.current.activeSMask && !t
                ? this.beginSMaskMode()
                : !this.current.activeSMask && t && this.endSMaskMode();
            }
            beginSMaskMode() {
              if (this.inSMaskMode)
                throw new Error(
                  "beginSMaskMode called while already in smask mode"
                );
              const t = this.ctx.canvas.width,
                e = this.ctx.canvas.height,
                s = "smaskGroupAt" + this.groupLevel,
                i = this.cachedCanvases.getCanvas(s, t, e);
              this.suspendedCtx = this.ctx;
              this.ctx = i.context;
              const a = this.ctx;
              a.setTransform(...(0, n.getCurrentTransform)(this.suspendedCtx));
              copyCtxState(this.suspendedCtx, a);
              !(function mirrorContextOperations(t, e) {
                if (t._removeMirroring)
                  throw new Error("Context is already forwarding operations.");
                t.__originalSave = t.save;
                t.__originalRestore = t.restore;
                t.__originalRotate = t.rotate;
                t.__originalScale = t.scale;
                t.__originalTranslate = t.translate;
                t.__originalTransform = t.transform;
                t.__originalSetTransform = t.setTransform;
                t.__originalResetTransform = t.resetTransform;
                t.__originalClip = t.clip;
                t.__originalMoveTo = t.moveTo;
                t.__originalLineTo = t.lineTo;
                t.__originalBezierCurveTo = t.bezierCurveTo;
                t.__originalRect = t.rect;
                t.__originalClosePath = t.closePath;
                t.__originalBeginPath = t.beginPath;
                t._removeMirroring = () => {
                  t.save = t.__originalSave;
                  t.restore = t.__originalRestore;
                  t.rotate = t.__originalRotate;
                  t.scale = t.__originalScale;
                  t.translate = t.__originalTranslate;
                  t.transform = t.__originalTransform;
                  t.setTransform = t.__originalSetTransform;
                  t.resetTransform = t.__originalResetTransform;
                  t.clip = t.__originalClip;
                  t.moveTo = t.__originalMoveTo;
                  t.lineTo = t.__originalLineTo;
                  t.bezierCurveTo = t.__originalBezierCurveTo;
                  t.rect = t.__originalRect;
                  t.closePath = t.__originalClosePath;
                  t.beginPath = t.__originalBeginPath;
                  delete t._removeMirroring;
                };
                t.save = function ctxSave() {
                  e.save();
                  this.__originalSave();
                };
                t.restore = function ctxRestore() {
                  e.restore();
                  this.__originalRestore();
                };
                t.translate = function ctxTranslate(t, s) {
                  e.translate(t, s);
                  this.__originalTranslate(t, s);
                };
                t.scale = function ctxScale(t, s) {
                  e.scale(t, s);
                  this.__originalScale(t, s);
                };
                t.transform = function ctxTransform(t, s, i, n, a, r) {
                  e.transform(t, s, i, n, a, r);
                  this.__originalTransform(t, s, i, n, a, r);
                };
                t.setTransform = function ctxSetTransform(t, s, i, n, a, r) {
                  e.setTransform(t, s, i, n, a, r);
                  this.__originalSetTransform(t, s, i, n, a, r);
                };
                t.resetTransform = function ctxResetTransform() {
                  e.resetTransform();
                  this.__originalResetTransform();
                };
                t.rotate = function ctxRotate(t) {
                  e.rotate(t);
                  this.__originalRotate(t);
                };
                t.clip = function ctxRotate(t) {
                  e.clip(t);
                  this.__originalClip(t);
                };
                t.moveTo = function (t, s) {
                  e.moveTo(t, s);
                  this.__originalMoveTo(t, s);
                };
                t.lineTo = function (t, s) {
                  e.lineTo(t, s);
                  this.__originalLineTo(t, s);
                };
                t.bezierCurveTo = function (t, s, i, n, a, r) {
                  e.bezierCurveTo(t, s, i, n, a, r);
                  this.__originalBezierCurveTo(t, s, i, n, a, r);
                };
                t.rect = function (t, s, i, n) {
                  e.rect(t, s, i, n);
                  this.__originalRect(t, s, i, n);
                };
                t.closePath = function () {
                  e.closePath();
                  this.__originalClosePath();
                };
                t.beginPath = function () {
                  e.beginPath();
                  this.__originalBeginPath();
                };
              })(a, this.suspendedCtx);
              this.setGState([
                ["BM", "source-over"],
                ["ca", 1],
                ["CA", 1],
              ]);
            }
            endSMaskMode() {
              if (!this.inSMaskMode)
                throw new Error("endSMaskMode called while not in smask mode");
              this.ctx._removeMirroring();
              copyCtxState(this.ctx, this.suspendedCtx);
              this.ctx = this.suspendedCtx;
              this.suspendedCtx = null;
            }
            compose(t) {
              if (!this.current.activeSMask) return;
              if (t) {
                t[0] = Math.floor(t[0]);
                t[1] = Math.floor(t[1]);
                t[2] = Math.ceil(t[2]);
                t[3] = Math.ceil(t[3]);
              } else t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
              const e = this.current.activeSMask;
              composeSMask(this.suspendedCtx, e, this.ctx, t);
              this.ctx.save();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.clearRect(
                0,
                0,
                this.ctx.canvas.width,
                this.ctx.canvas.height
              );
              this.ctx.restore();
            }
            save() {
              if (this.inSMaskMode) {
                copyCtxState(this.ctx, this.suspendedCtx);
                this.suspendedCtx.save();
              } else this.ctx.save();
              const t = this.current;
              this.stateStack.push(t);
              this.current = t.clone();
            }
            restore() {
              0 === this.stateStack.length &&
                this.inSMaskMode &&
                this.endSMaskMode();
              if (0 !== this.stateStack.length) {
                this.current = this.stateStack.pop();
                if (this.inSMaskMode) {
                  this.suspendedCtx.restore();
                  copyCtxState(this.suspendedCtx, this.ctx);
                } else this.ctx.restore();
                this.checkSMaskState();
                this.pendingClip = null;
                this._cachedScaleForStroking = null;
                this._cachedGetSinglePixelWidth = null;
              }
            }
            transform(t, e, s, i, n, a) {
              this.ctx.transform(t, e, s, i, n, a);
              this._cachedScaleForStroking = null;
              this._cachedGetSinglePixelWidth = null;
            }
            constructPath(t, e, s) {
              const a = this.ctx,
                r = this.current;
              let o,
                l,
                c = r.x,
                h = r.y;
              const d = (0, n.getCurrentTransform)(a),
                u = (0 === d[0] && 0 === d[3]) || (0 === d[1] && 0 === d[2]),
                p = u ? s.slice(0) : null;
              for (let s = 0, n = 0, f = t.length; s < f; s++)
                switch (0 | t[s]) {
                  case i.OPS.rectangle:
                    c = e[n++];
                    h = e[n++];
                    const t = e[n++],
                      s = e[n++],
                      f = c + t,
                      g = h + s;
                    a.moveTo(c, h);
                    if (0 === t || 0 === s) a.lineTo(f, g);
                    else {
                      a.lineTo(f, h);
                      a.lineTo(f, g);
                      a.lineTo(c, g);
                    }
                    u || r.updateRectMinMax(d, [c, h, f, g]);
                    a.closePath();
                    break;
                  case i.OPS.moveTo:
                    c = e[n++];
                    h = e[n++];
                    a.moveTo(c, h);
                    u || r.updatePathMinMax(d, c, h);
                    break;
                  case i.OPS.lineTo:
                    c = e[n++];
                    h = e[n++];
                    a.lineTo(c, h);
                    u || r.updatePathMinMax(d, c, h);
                    break;
                  case i.OPS.curveTo:
                    o = c;
                    l = h;
                    c = e[n + 4];
                    h = e[n + 5];
                    a.bezierCurveTo(e[n], e[n + 1], e[n + 2], e[n + 3], c, h);
                    r.updateCurvePathMinMax(
                      d,
                      o,
                      l,
                      e[n],
                      e[n + 1],
                      e[n + 2],
                      e[n + 3],
                      c,
                      h,
                      p
                    );
                    n += 6;
                    break;
                  case i.OPS.curveTo2:
                    o = c;
                    l = h;
                    a.bezierCurveTo(c, h, e[n], e[n + 1], e[n + 2], e[n + 3]);
                    r.updateCurvePathMinMax(
                      d,
                      o,
                      l,
                      c,
                      h,
                      e[n],
                      e[n + 1],
                      e[n + 2],
                      e[n + 3],
                      p
                    );
                    c = e[n + 2];
                    h = e[n + 3];
                    n += 4;
                    break;
                  case i.OPS.curveTo3:
                    o = c;
                    l = h;
                    c = e[n + 2];
                    h = e[n + 3];
                    a.bezierCurveTo(e[n], e[n + 1], c, h, c, h);
                    r.updateCurvePathMinMax(
                      d,
                      o,
                      l,
                      e[n],
                      e[n + 1],
                      c,
                      h,
                      c,
                      h,
                      p
                    );
                    n += 4;
                    break;
                  case i.OPS.closePath:
                    a.closePath();
                }
              u && r.updateScalingPathMinMax(d, p);
              r.setCurrentPoint(c, h);
            }
            closePath() {
              this.ctx.closePath();
            }
            stroke(t = !0) {
              const e = this.ctx,
                s = this.current.strokeColor;
              e.globalAlpha = this.current.strokeAlpha;
              if (this.contentVisible)
                if ("object" == typeof s && s?.getPattern) {
                  e.save();
                  e.strokeStyle = s.getPattern(
                    e,
                    this,
                    (0, n.getCurrentTransformInverse)(e),
                    a.PathType.STROKE
                  );
                  this.rescaleAndStroke(!1);
                  e.restore();
                } else this.rescaleAndStroke(!0);
              t && this.consumePath(this.current.getClippedPathBoundingBox());
              e.globalAlpha = this.current.fillAlpha;
            }
            closeStroke() {
              this.closePath();
              this.stroke();
            }
            fill(t = !0) {
              const e = this.ctx,
                s = this.current.fillColor;
              let i = !1;
              if (this.current.patternFill) {
                e.save();
                e.fillStyle = s.getPattern(
                  e,
                  this,
                  (0, n.getCurrentTransformInverse)(e),
                  a.PathType.FILL
                );
                i = !0;
              }
              const r = this.current.getClippedPathBoundingBox();
              if (this.contentVisible && null !== r)
                if (this.pendingEOFill) {
                  e.fill("evenodd");
                  this.pendingEOFill = !1;
                } else e.fill();
              i && e.restore();
              t && this.consumePath(r);
            }
            eoFill() {
              this.pendingEOFill = !0;
              this.fill();
            }
            fillStroke() {
              this.fill(!1);
              this.stroke(!1);
              this.consumePath();
            }
            eoFillStroke() {
              this.pendingEOFill = !0;
              this.fillStroke();
            }
            closeFillStroke() {
              this.closePath();
              this.fillStroke();
            }
            closeEOFillStroke() {
              this.pendingEOFill = !0;
              this.closePath();
              this.fillStroke();
            }
            endPath() {
              this.consumePath();
            }
            clip() {
              this.pendingClip = u;
            }
            eoClip() {
              this.pendingClip = p;
            }
            beginText() {
              this.current.textMatrix = i.IDENTITY_MATRIX;
              this.current.textMatrixScale = 1;
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
            endText() {
              const t = this.pendingTextPaths,
                e = this.ctx;
              if (void 0 !== t) {
                e.save();
                e.beginPath();
                for (const s of t) {
                  e.setTransform(...s.transform);
                  e.translate(s.x, s.y);
                  s.addToPath(e, s.fontSize);
                }
                e.restore();
                e.clip();
                e.beginPath();
                delete this.pendingTextPaths;
              } else e.beginPath();
            }
            setCharSpacing(t) {
              this.current.charSpacing = t;
            }
            setWordSpacing(t) {
              this.current.wordSpacing = t;
            }
            setHScale(t) {
              this.current.textHScale = t / 100;
            }
            setLeading(t) {
              this.current.leading = -t;
            }
            setFont(t, e) {
              const s = this.commonObjs.get(t),
                n = this.current;
              if (!s) throw new Error(`Can't find font for ${t}`);
              n.fontMatrix = s.fontMatrix || i.FONT_IDENTITY_MATRIX;
              (0 !== n.fontMatrix[0] && 0 !== n.fontMatrix[3]) ||
                (0, i.warn)("Invalid font matrix for font " + t);
              if (e < 0) {
                e = -e;
                n.fontDirection = -1;
              } else n.fontDirection = 1;
              this.current.font = s;
              this.current.fontSize = e;
              if (s.isType3Font) return;
              const a = s.loadedName || "sans-serif";
              let r = "normal";
              s.black ? (r = "900") : s.bold && (r = "bold");
              const o = s.italic ? "italic" : "normal",
                l = `"${a}", ${s.fallbackName}`;
              let c = e;
              e < 16 ? (c = 16) : e > 100 && (c = 100);
              this.current.fontSizeScale = e / c;
              this.ctx.font = `${o} ${r} ${c}px ${l}`;
            }
            setTextRenderingMode(t) {
              this.current.textRenderingMode = t;
            }
            setTextRise(t) {
              this.current.textRise = t;
            }
            moveText(t, e) {
              this.current.x = this.current.lineX += t;
              this.current.y = this.current.lineY += e;
            }
            setLeadingMoveText(t, e) {
              this.setLeading(-e);
              this.moveText(t, e);
            }
            setTextMatrix(t, e, s, i, n, a) {
              this.current.textMatrix = [t, e, s, i, n, a];
              this.current.textMatrixScale = Math.hypot(t, e);
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            paintChar(t, e, s, a) {
              const r = this.ctx,
                o = this.current,
                l = o.font,
                c = o.textRenderingMode,
                h = o.fontSize / o.fontSizeScale,
                d = c & i.TextRenderingMode.FILL_STROKE_MASK,
                u = !!(c & i.TextRenderingMode.ADD_TO_PATH_FLAG),
                p = o.patternFill && !l.missingFile;
              let f;
              (l.disableFontFace || u || p) &&
                (f = l.getPathGenerator(this.commonObjs, t));
              if (l.disableFontFace || p) {
                r.save();
                r.translate(e, s);
                r.beginPath();
                f(r, h);
                a && r.setTransform(...a);
                (d !== i.TextRenderingMode.FILL &&
                  d !== i.TextRenderingMode.FILL_STROKE) ||
                  r.fill();
                (d !== i.TextRenderingMode.STROKE &&
                  d !== i.TextRenderingMode.FILL_STROKE) ||
                  r.stroke();
                r.restore();
              } else {
                (d !== i.TextRenderingMode.FILL &&
                  d !== i.TextRenderingMode.FILL_STROKE) ||
                  r.fillText(t, e, s);
                (d !== i.TextRenderingMode.STROKE &&
                  d !== i.TextRenderingMode.FILL_STROKE) ||
                  r.strokeText(t, e, s);
              }
              if (u) {
                (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                  transform: (0, n.getCurrentTransform)(r),
                  x: e,
                  y: s,
                  fontSize: h,
                  addToPath: f,
                });
              }
            }
            get isFontSubpixelAAEnabled() {
              const { context: t } = this.cachedCanvases.getCanvas(
                "isFontSubpixelAAEnabled",
                10,
                10
              );
              t.scale(1.5, 1);
              t.fillText("I", 0, 10);
              const e = t.getImageData(0, 0, 10, 10).data;
              let s = !1;
              for (let t = 3; t < e.length; t += 4)
                if (e[t] > 0 && e[t] < 255) {
                  s = !0;
                  break;
                }
              return (0, i.shadow)(this, "isFontSubpixelAAEnabled", s);
            }
            showText(t) {
              const e = this.current,
                s = e.font;
              if (s.isType3Font) return this.showType3Text(t);
              const r = e.fontSize;
              if (0 === r) return;
              const o = this.ctx,
                l = e.fontSizeScale,
                c = e.charSpacing,
                h = e.wordSpacing,
                d = e.fontDirection,
                u = e.textHScale * d,
                p = t.length,
                f = s.vertical,
                g = f ? 1 : -1,
                m = s.defaultVMetrics,
                b = r * e.fontMatrix[0],
                A =
                  e.textRenderingMode === i.TextRenderingMode.FILL &&
                  !s.disableFontFace &&
                  !e.patternFill;
              o.save();
              o.transform(...e.textMatrix);
              o.translate(e.x, e.y + e.textRise);
              d > 0 ? o.scale(u, -1) : o.scale(u, 1);
              let _;
              if (e.patternFill) {
                o.save();
                const t = e.fillColor.getPattern(
                  o,
                  this,
                  (0, n.getCurrentTransformInverse)(o),
                  a.PathType.FILL
                );
                _ = (0, n.getCurrentTransform)(o);
                o.restore();
                o.fillStyle = t;
              }
              let y = e.lineWidth;
              const v = e.textMatrixScale;
              if (0 === v || 0 === y) {
                const t =
                  e.textRenderingMode & i.TextRenderingMode.FILL_STROKE_MASK;
                (t !== i.TextRenderingMode.STROKE &&
                  t !== i.TextRenderingMode.FILL_STROKE) ||
                  (y = this.getSinglePixelWidth());
              } else y /= v;
              if (1 !== l) {
                o.scale(l, l);
                y /= l;
              }
              o.lineWidth = y;
              if (s.isInvalidPDFjsFont) {
                const s = [];
                let i = 0;
                for (const e of t) {
                  s.push(e.unicode);
                  i += e.width;
                }
                o.fillText(s.join(""), 0, 0);
                e.x += i * b * u;
                o.restore();
                this.compose();
                return;
              }
              let S,
                x = 0;
              for (S = 0; S < p; ++S) {
                const e = t[S];
                if ("number" == typeof e) {
                  x += (g * e * r) / 1e3;
                  continue;
                }
                let i = !1;
                const n = (e.isSpace ? h : 0) + c,
                  a = e.fontChar,
                  u = e.accent;
                let p,
                  y,
                  v,
                  C = e.width;
                if (f) {
                  const t = e.vmetric || m,
                    s = -(e.vmetric ? t[1] : 0.5 * C) * b,
                    i = t[2] * b;
                  C = t ? -t[0] : C;
                  p = s / l;
                  y = (x + i) / l;
                } else {
                  p = x / l;
                  y = 0;
                }
                if (s.remeasure && C > 0) {
                  const t = ((1e3 * o.measureText(a).width) / r) * l;
                  if (C < t && this.isFontSubpixelAAEnabled) {
                    const e = C / t;
                    i = !0;
                    o.save();
                    o.scale(e, 1);
                    p /= e;
                  } else C !== t && (p += (((C - t) / 2e3) * r) / l);
                }
                if (this.contentVisible && (e.isInFont || s.missingFile))
                  if (A && !u) o.fillText(a, p, y);
                  else {
                    this.paintChar(a, p, y, _);
                    if (u) {
                      const t = p + (r * u.offset.x) / l,
                        e = y - (r * u.offset.y) / l;
                      this.paintChar(u.fontChar, t, e, _);
                    }
                  }
                v = f ? C * b - n * d : C * b + n * d;
                x += v;
                i && o.restore();
              }
              f ? (e.y -= x) : (e.x += x * u);
              o.restore();
              this.compose();
            }
            showType3Text(t) {
              const e = this.ctx,
                s = this.current,
                n = s.font,
                a = s.fontSize,
                r = s.fontDirection,
                o = n.vertical ? 1 : -1,
                l = s.charSpacing,
                c = s.wordSpacing,
                h = s.textHScale * r,
                d = s.fontMatrix || i.FONT_IDENTITY_MATRIX,
                u = t.length;
              let p, f, g, m;
              if (
                !(s.textRenderingMode === i.TextRenderingMode.INVISIBLE) &&
                0 !== a
              ) {
                this._cachedScaleForStroking = null;
                this._cachedGetSinglePixelWidth = null;
                e.save();
                e.transform(...s.textMatrix);
                e.translate(s.x, s.y);
                e.scale(h, r);
                for (p = 0; p < u; ++p) {
                  f = t[p];
                  if ("number" == typeof f) {
                    m = (o * f * a) / 1e3;
                    this.ctx.translate(m, 0);
                    s.x += m * h;
                    continue;
                  }
                  const r = (f.isSpace ? c : 0) + l,
                    u = n.charProcOperatorList[f.operatorListId];
                  if (!u) {
                    (0, i.warn)(
                      `Type3 character "${f.operatorListId}" is not available.`
                    );
                    continue;
                  }
                  if (this.contentVisible) {
                    this.processingType3 = f;
                    this.save();
                    e.scale(a, a);
                    e.transform(...d);
                    this.executeOperatorList(u);
                    this.restore();
                  }
                  g = i.Util.applyTransform([f.width, 0], d)[0] * a + r;
                  e.translate(g, 0);
                  s.x += g * h;
                }
                e.restore();
                this.processingType3 = null;
              }
            }
            setCharWidth(t, e) {}
            setCharWidthAndBounds(t, e, s, i, n, a) {
              this.ctx.rect(s, i, n - s, a - i);
              this.ctx.clip();
              this.endPath();
            }
            getColorN_Pattern(t) {
              let e;
              if ("TilingPattern" === t[0]) {
                const s = t[1],
                  i =
                    this.baseTransform || (0, n.getCurrentTransform)(this.ctx),
                  r = {
                    createCanvasGraphics: (t) =>
                      new CanvasGraphics(
                        t,
                        this.commonObjs,
                        this.objs,
                        this.canvasFactory,
                        this.filterFactory,
                        {
                          optionalContentConfig: this.optionalContentConfig,
                          markedContentStack: this.markedContentStack,
                        }
                      ),
                  };
                e = new a.TilingPattern(t, s, this.ctx, r, i);
              } else e = this._getPattern(t[1], t[2]);
              return e;
            }
            setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            }
            setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments);
              this.current.patternFill = !0;
            }
            setStrokeRGBColor(t, e, s) {
              const n = i.Util.makeHexColor(t, e, s);
              this.ctx.strokeStyle = n;
              this.current.strokeColor = n;
            }
            setFillRGBColor(t, e, s) {
              const n = i.Util.makeHexColor(t, e, s);
              this.ctx.fillStyle = n;
              this.current.fillColor = n;
              this.current.patternFill = !1;
            }
            _getPattern(t, e = null) {
              let s;
              if (this.cachedPatterns.has(t)) s = this.cachedPatterns.get(t);
              else {
                s = (0, a.getShadingPattern)(this.getObject(t));
                this.cachedPatterns.set(t, s);
              }
              e && (s.matrix = e);
              return s;
            }
            shadingFill(t) {
              if (!this.contentVisible) return;
              const e = this.ctx;
              this.save();
              const s = this._getPattern(t);
              e.fillStyle = s.getPattern(
                e,
                this,
                (0, n.getCurrentTransformInverse)(e),
                a.PathType.SHADING
              );
              const r = (0, n.getCurrentTransformInverse)(e);
              if (r) {
                const t = e.canvas,
                  s = t.width,
                  n = t.height,
                  a = i.Util.applyTransform([0, 0], r),
                  o = i.Util.applyTransform([0, n], r),
                  l = i.Util.applyTransform([s, 0], r),
                  c = i.Util.applyTransform([s, n], r),
                  h = Math.min(a[0], o[0], l[0], c[0]),
                  d = Math.min(a[1], o[1], l[1], c[1]),
                  u = Math.max(a[0], o[0], l[0], c[0]),
                  p = Math.max(a[1], o[1], l[1], c[1]);
                this.ctx.fillRect(h, d, u - h, p - d);
              } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              this.compose(this.current.getClippedPathBoundingBox());
              this.restore();
            }
            beginInlineImage() {
              (0, i.unreachable)("Should not call beginInlineImage");
            }
            beginImageData() {
              (0, i.unreachable)("Should not call beginImageData");
            }
            paintFormXObjectBegin(t, e) {
              if (this.contentVisible) {
                this.save();
                this.baseTransformStack.push(this.baseTransform);
                Array.isArray(t) && 6 === t.length && this.transform(...t);
                this.baseTransform = (0, n.getCurrentTransform)(this.ctx);
                if (e) {
                  const t = e[2] - e[0],
                    s = e[3] - e[1];
                  this.ctx.rect(e[0], e[1], t, s);
                  this.current.updateRectMinMax(
                    (0, n.getCurrentTransform)(this.ctx),
                    e
                  );
                  this.clip();
                  this.endPath();
                }
              }
            }
            paintFormXObjectEnd() {
              if (this.contentVisible) {
                this.restore();
                this.baseTransform = this.baseTransformStack.pop();
              }
            }
            beginGroup(t) {
              if (!this.contentVisible) return;
              this.save();
              if (this.inSMaskMode) {
                this.endSMaskMode();
                this.current.activeSMask = null;
              }
              const e = this.ctx;
              t.isolated || (0, i.info)("TODO: Support non-isolated groups.");
              t.knockout && (0, i.warn)("Knockout groups not supported.");
              const s = (0, n.getCurrentTransform)(e);
              t.matrix && e.transform(...t.matrix);
              if (!t.bbox) throw new Error("Bounding box is required.");
              let a = i.Util.getAxialAlignedBoundingBox(
                t.bbox,
                (0, n.getCurrentTransform)(e)
              );
              const r = [0, 0, e.canvas.width, e.canvas.height];
              a = i.Util.intersect(a, r) || [0, 0, 0, 0];
              const o = Math.floor(a[0]),
                c = Math.floor(a[1]);
              let h = Math.max(Math.ceil(a[2]) - o, 1),
                d = Math.max(Math.ceil(a[3]) - c, 1),
                u = 1,
                p = 1;
              if (h > l) {
                u = h / l;
                h = l;
              }
              if (d > l) {
                p = d / l;
                d = l;
              }
              this.current.startNewPathAndClipBox([0, 0, h, d]);
              let f = "groupAt" + this.groupLevel;
              t.smask && (f += "_smask_" + (this.smaskCounter++ % 2));
              const g = this.cachedCanvases.getCanvas(f, h, d),
                m = g.context;
              m.scale(1 / u, 1 / p);
              m.translate(-o, -c);
              m.transform(...s);
              if (t.smask)
                this.smaskStack.push({
                  canvas: g.canvas,
                  context: m,
                  offsetX: o,
                  offsetY: c,
                  scaleX: u,
                  scaleY: p,
                  subtype: t.smask.subtype,
                  backdrop: t.smask.backdrop,
                  transferMap: t.smask.transferMap || null,
                  startTransformInverse: null,
                });
              else {
                e.setTransform(1, 0, 0, 1, 0, 0);
                e.translate(o, c);
                e.scale(u, p);
                e.save();
              }
              copyCtxState(e, m);
              this.ctx = m;
              this.setGState([
                ["BM", "source-over"],
                ["ca", 1],
                ["CA", 1],
              ]);
              this.groupStack.push(e);
              this.groupLevel++;
            }
            endGroup(t) {
              if (!this.contentVisible) return;
              this.groupLevel--;
              const e = this.ctx,
                s = this.groupStack.pop();
              this.ctx = s;
              this.ctx.imageSmoothingEnabled = !1;
              if (t.smask) {
                this.tempSMask = this.smaskStack.pop();
                this.restore();
              } else {
                this.ctx.restore();
                const t = (0, n.getCurrentTransform)(this.ctx);
                this.restore();
                this.ctx.save();
                this.ctx.setTransform(...t);
                const s = i.Util.getAxialAlignedBoundingBox(
                  [0, 0, e.canvas.width, e.canvas.height],
                  t
                );
                this.ctx.drawImage(e.canvas, 0, 0);
                this.ctx.restore();
                this.compose(s);
              }
            }
            beginAnnotation(t, e, s, a, r) {
              this.#St();
              resetCtxToDefault(this.ctx);
              this.ctx.save();
              this.save();
              this.baseTransform &&
                this.ctx.setTransform(...this.baseTransform);
              if (Array.isArray(e) && 4 === e.length) {
                const a = e[2] - e[0],
                  o = e[3] - e[1];
                if (r && this.annotationCanvasMap) {
                  (s = s.slice())[4] -= e[0];
                  s[5] -= e[1];
                  (e = e.slice())[0] = e[1] = 0;
                  e[2] = a;
                  e[3] = o;
                  const [r, l] = i.Util.singularValueDecompose2dScale(
                      (0, n.getCurrentTransform)(this.ctx)
                    ),
                    { viewportScale: c } = this,
                    h = Math.ceil(a * this.outputScaleX * c),
                    d = Math.ceil(o * this.outputScaleY * c);
                  this.annotationCanvas = this.canvasFactory.create(h, d);
                  const { canvas: u, context: p } = this.annotationCanvas;
                  this.annotationCanvasMap.set(t, u);
                  this.annotationCanvas.savedCtx = this.ctx;
                  this.ctx = p;
                  this.ctx.save();
                  this.ctx.setTransform(r, 0, 0, -l, 0, o * l);
                  resetCtxToDefault(this.ctx);
                } else {
                  resetCtxToDefault(this.ctx);
                  this.ctx.rect(e[0], e[1], a, o);
                  this.ctx.clip();
                  this.endPath();
                }
              }
              this.current = new CanvasExtraState(
                this.ctx.canvas.width,
                this.ctx.canvas.height
              );
              this.transform(...s);
              this.transform(...a);
            }
            endAnnotation() {
              if (this.annotationCanvas) {
                this.ctx.restore();
                this.#xt();
                this.ctx = this.annotationCanvas.savedCtx;
                delete this.annotationCanvas.savedCtx;
                delete this.annotationCanvas;
              }
            }
            paintImageMaskXObject(t) {
              if (!this.contentVisible) return;
              const e = t.count;
              (t = this.getObject(t.data, t)).count = e;
              const s = this.ctx,
                i = this.processingType3;
              if (i) {
                void 0 === i.compiled &&
                  (i.compiled = (function compileType3Glyph(t) {
                    const { width: e, height: s } = t;
                    if (e > 1e3 || s > 1e3) return null;
                    const i = new Uint8Array([
                        0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
                      ]),
                      n = e + 1;
                    let a,
                      r,
                      o,
                      l = new Uint8Array(n * (s + 1));
                    const c = (e + 7) & -8;
                    let h = new Uint8Array(c * s),
                      d = 0;
                    for (const e of t.data) {
                      let t = 128;
                      for (; t > 0; ) {
                        h[d++] = e & t ? 0 : 255;
                        t >>= 1;
                      }
                    }
                    let u = 0;
                    d = 0;
                    if (0 !== h[d]) {
                      l[0] = 1;
                      ++u;
                    }
                    for (r = 1; r < e; r++) {
                      if (h[d] !== h[d + 1]) {
                        l[r] = h[d] ? 2 : 1;
                        ++u;
                      }
                      d++;
                    }
                    if (0 !== h[d]) {
                      l[r] = 2;
                      ++u;
                    }
                    for (a = 1; a < s; a++) {
                      d = a * c;
                      o = a * n;
                      if (h[d - c] !== h[d]) {
                        l[o] = h[d] ? 1 : 8;
                        ++u;
                      }
                      let t = (h[d] ? 4 : 0) + (h[d - c] ? 8 : 0);
                      for (r = 1; r < e; r++) {
                        t =
                          (t >> 2) +
                          (h[d + 1] ? 4 : 0) +
                          (h[d - c + 1] ? 8 : 0);
                        if (i[t]) {
                          l[o + r] = i[t];
                          ++u;
                        }
                        d++;
                      }
                      if (h[d - c] !== h[d]) {
                        l[o + r] = h[d] ? 2 : 4;
                        ++u;
                      }
                      if (u > 1e3) return null;
                    }
                    d = c * (s - 1);
                    o = a * n;
                    if (0 !== h[d]) {
                      l[o] = 8;
                      ++u;
                    }
                    for (r = 1; r < e; r++) {
                      if (h[d] !== h[d + 1]) {
                        l[o + r] = h[d] ? 4 : 8;
                        ++u;
                      }
                      d++;
                    }
                    if (0 !== h[d]) {
                      l[o + r] = 4;
                      ++u;
                    }
                    if (u > 1e3) return null;
                    const p = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]),
                      f = new Path2D();
                    for (a = 0; u && a <= s; a++) {
                      let t = a * n;
                      const s = t + e;
                      for (; t < s && !l[t]; ) t++;
                      if (t === s) continue;
                      f.moveTo(t % n, a);
                      const i = t;
                      let r = l[t];
                      do {
                        const e = p[r];
                        do {
                          t += e;
                        } while (!l[t]);
                        const s = l[t];
                        if (5 !== s && 10 !== s) {
                          r = s;
                          l[t] = 0;
                        } else {
                          r = s & ((51 * r) >> 4);
                          l[t] &= (r >> 2) | (r << 2);
                        }
                        f.lineTo(t % n, (t / n) | 0);
                        l[t] || --u;
                      } while (i !== t);
                      --a;
                    }
                    h = null;
                    l = null;
                    return function (t) {
                      t.save();
                      t.scale(1 / e, -1 / s);
                      t.translate(0, -s);
                      t.fill(f);
                      t.beginPath();
                      t.restore();
                    };
                  })(t));
                if (i.compiled) {
                  i.compiled(s);
                  return;
                }
              }
              const n = this._createMaskCanvas(t),
                a = n.canvas;
              s.save();
              s.setTransform(1, 0, 0, 1, 0, 0);
              s.drawImage(a, n.offsetX, n.offsetY);
              s.restore();
              this.compose();
            }
            paintImageMaskXObjectRepeat(t, e, s = 0, a = 0, r, o) {
              if (!this.contentVisible) return;
              t = this.getObject(t.data, t);
              const l = this.ctx;
              l.save();
              const c = (0, n.getCurrentTransform)(l);
              l.transform(e, s, a, r, 0, 0);
              const h = this._createMaskCanvas(t);
              l.setTransform(1, 0, 0, 1, h.offsetX - c[4], h.offsetY - c[5]);
              for (let t = 0, n = o.length; t < n; t += 2) {
                const n = i.Util.transform(c, [e, s, a, r, o[t], o[t + 1]]),
                  [d, u] = i.Util.applyTransform([0, 0], n);
                l.drawImage(h.canvas, d, u);
              }
              l.restore();
              this.compose();
            }
            paintImageMaskXObjectGroup(t) {
              if (!this.contentVisible) return;
              const e = this.ctx,
                s = this.current.fillColor,
                i = this.current.patternFill;
              for (const r of t) {
                const { data: t, width: o, height: l, transform: c } = r,
                  h = this.cachedCanvases.getCanvas("maskCanvas", o, l),
                  d = h.context;
                d.save();
                putBinaryImageMask(d, this.getObject(t, r));
                d.globalCompositeOperation = "source-in";
                d.fillStyle = i
                  ? s.getPattern(
                      d,
                      this,
                      (0, n.getCurrentTransformInverse)(e),
                      a.PathType.FILL
                    )
                  : s;
                d.fillRect(0, 0, o, l);
                d.restore();
                e.save();
                e.transform(...c);
                e.scale(1, -1);
                drawImageAtIntegerCoords(e, h.canvas, 0, 0, o, l, 0, -1, 1, 1);
                e.restore();
              }
              this.compose();
            }
            paintImageXObject(t) {
              if (!this.contentVisible) return;
              const e = this.getObject(t);
              e
                ? this.paintInlineImageXObject(e)
                : (0, i.warn)("Dependent image isn't ready yet");
            }
            paintImageXObjectRepeat(t, e, s, n) {
              if (!this.contentVisible) return;
              const a = this.getObject(t);
              if (!a) {
                (0, i.warn)("Dependent image isn't ready yet");
                return;
              }
              const r = a.width,
                o = a.height,
                l = [];
              for (let t = 0, i = n.length; t < i; t += 2)
                l.push({
                  transform: [e, 0, 0, s, n[t], n[t + 1]],
                  x: 0,
                  y: 0,
                  w: r,
                  h: o,
                });
              this.paintInlineImageXObjectGroup(a, l);
            }
            applyTransferMapsToCanvas(t) {
              if ("none" !== this.current.transferMaps) {
                t.filter = this.current.transferMaps;
                t.drawImage(t.canvas, 0, 0);
                t.filter = "none";
              }
              return t.canvas;
            }
            applyTransferMapsToBitmap(t) {
              if ("none" === this.current.transferMaps) return t.bitmap;
              const { bitmap: e, width: s, height: i } = t,
                n = this.cachedCanvases.getCanvas("inlineImage", s, i),
                a = n.context;
              a.filter = this.current.transferMaps;
              a.drawImage(e, 0, 0);
              a.filter = "none";
              return n.canvas;
            }
            paintInlineImageXObject(t) {
              if (!this.contentVisible) return;
              const e = t.width,
                s = t.height,
                i = this.ctx;
              this.save();
              o.isNodeJS || (i.filter = "none");
              i.scale(1 / e, -1 / s);
              let a;
              if (t.bitmap) a = this.applyTransferMapsToBitmap(t);
              else if (
                ("function" == typeof HTMLElement &&
                  t instanceof HTMLElement) ||
                !t.data
              )
                a = t;
              else {
                const i = this.cachedCanvases.getCanvas(
                  "inlineImage",
                  e,
                  s
                ).context;
                putBinaryImageData(i, t);
                a = this.applyTransferMapsToCanvas(i);
              }
              const r = this._scaleImage(
                a,
                (0, n.getCurrentTransformInverse)(i)
              );
              i.imageSmoothingEnabled = getImageSmoothingEnabled(
                (0, n.getCurrentTransform)(i),
                t.interpolate
              );
              drawImageAtIntegerCoords(
                i,
                r.img,
                0,
                0,
                r.paintWidth,
                r.paintHeight,
                0,
                -s,
                e,
                s
              );
              this.compose();
              this.restore();
            }
            paintInlineImageXObjectGroup(t, e) {
              if (!this.contentVisible) return;
              const s = this.ctx;
              let i;
              if (t.bitmap) i = t.bitmap;
              else {
                const e = t.width,
                  s = t.height,
                  n = this.cachedCanvases.getCanvas(
                    "inlineImage",
                    e,
                    s
                  ).context;
                putBinaryImageData(n, t);
                i = this.applyTransferMapsToCanvas(n);
              }
              for (const t of e) {
                s.save();
                s.transform(...t.transform);
                s.scale(1, -1);
                drawImageAtIntegerCoords(s, i, t.x, t.y, t.w, t.h, 0, -1, 1, 1);
                s.restore();
              }
              this.compose();
            }
            paintSolidColorImageMask() {
              if (this.contentVisible) {
                this.ctx.fillRect(0, 0, 1, 1);
                this.compose();
              }
            }
            markPoint(t) {}
            markPointProps(t, e) {}
            beginMarkedContent(t) {
              this.markedContentStack.push({ visible: !0 });
            }
            beginMarkedContentProps(t, e) {
              "OC" === t
                ? this.markedContentStack.push({
                    visible: this.optionalContentConfig.isVisible(e),
                  })
                : this.markedContentStack.push({ visible: !0 });
              this.contentVisible = this.isContentVisible();
            }
            endMarkedContent() {
              this.markedContentStack.pop();
              this.contentVisible = this.isContentVisible();
            }
            beginCompat() {}
            endCompat() {}
            consumePath(t) {
              const e = this.current.isEmptyClip();
              this.pendingClip && this.current.updateClipFromPath();
              this.pendingClip || this.compose(t);
              const s = this.ctx;
              if (this.pendingClip) {
                e || (this.pendingClip === p ? s.clip("evenodd") : s.clip());
                this.pendingClip = null;
              }
              this.current.startNewPathAndClipBox(this.current.clipBox);
              s.beginPath();
            }
            getSinglePixelWidth() {
              if (!this._cachedGetSinglePixelWidth) {
                const t = (0, n.getCurrentTransform)(this.ctx);
                if (0 === t[1] && 0 === t[2])
                  this._cachedGetSinglePixelWidth =
                    1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
                else {
                  const e = Math.abs(t[0] * t[3] - t[2] * t[1]),
                    s = Math.hypot(t[0], t[2]),
                    i = Math.hypot(t[1], t[3]);
                  this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
                }
              }
              return this._cachedGetSinglePixelWidth;
            }
            getScaleForStroking() {
              if (!this._cachedScaleForStroking) {
                const { lineWidth: t } = this.current,
                  e = (0, n.getCurrentTransform)(this.ctx);
                let s, i;
                if (0 === e[1] && 0 === e[2]) {
                  const n = Math.abs(e[0]),
                    a = Math.abs(e[3]);
                  if (0 === t) {
                    s = 1 / n;
                    i = 1 / a;
                  } else {
                    const e = n * t,
                      r = a * t;
                    s = e < 1 ? 1 / e : 1;
                    i = r < 1 ? 1 / r : 1;
                  }
                } else {
                  const n = Math.abs(e[0] * e[3] - e[2] * e[1]),
                    a = Math.hypot(e[0], e[1]),
                    r = Math.hypot(e[2], e[3]);
                  if (0 === t) {
                    s = r / n;
                    i = a / n;
                  } else {
                    const e = t * n;
                    s = r > e ? r / e : 1;
                    i = a > e ? a / e : 1;
                  }
                }
                this._cachedScaleForStroking = [s, i];
              }
              return this._cachedScaleForStroking;
            }
            rescaleAndStroke(t) {
              const { ctx: e } = this,
                { lineWidth: s } = this.current,
                [i, a] = this.getScaleForStroking();
              e.lineWidth = s || 1;
              if (1 === i && 1 === a) {
                e.stroke();
                return;
              }
              let r, o, l;
              if (t) {
                r = (0, n.getCurrentTransform)(e);
                o = e.getLineDash().slice();
                l = e.lineDashOffset;
              }
              e.scale(i, a);
              const c = Math.max(i, a);
              e.setLineDash(e.getLineDash().map((t) => t / c));
              e.lineDashOffset /= c;
              e.stroke();
              if (t) {
                e.setTransform(...r);
                e.setLineDash(o);
                e.lineDashOffset = l;
              }
            }
            isContentVisible() {
              for (let t = this.markedContentStack.length - 1; t >= 0; t--)
                if (!this.markedContentStack[t].visible) return !1;
              return !0;
            }
          }
          e.CanvasGraphics = CanvasGraphics;
          for (const t in i.OPS)
            void 0 !== CanvasGraphics.prototype[t] &&
              (CanvasGraphics.prototype[i.OPS[t]] =
                CanvasGraphics.prototype[t]);
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.TilingPattern = e.PathType = void 0;
          e.getShadingPattern = function getShadingPattern(t) {
            switch (t[0]) {
              case "RadialAxial":
                return new RadialAxialShadingPattern(t);
              case "Mesh":
                return new MeshShadingPattern(t);
              case "Dummy":
                return new DummyShadingPattern();
            }
            throw new Error(`Unknown IR type: ${t[0]}`);
          };
          var i = s(1),
            n = s(6);
          const a = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
          e.PathType = a;
          function applyBoundingBox(t, e) {
            if (!e) return;
            const s = e[2] - e[0],
              i = e[3] - e[1],
              n = new Path2D();
            n.rect(e[0], e[1], s, i);
            t.clip(n);
          }
          class BaseShadingPattern {
            constructor() {
              this.constructor === BaseShadingPattern &&
                (0, i.unreachable)("Cannot initialize BaseShadingPattern.");
            }
            getPattern() {
              (0, i.unreachable)("Abstract method `getPattern` called.");
            }
          }
          class RadialAxialShadingPattern extends BaseShadingPattern {
            constructor(t) {
              super();
              this._type = t[1];
              this._bbox = t[2];
              this._colorStops = t[3];
              this._p0 = t[4];
              this._p1 = t[5];
              this._r0 = t[6];
              this._r1 = t[7];
              this.matrix = null;
            }
            _createGradient(t) {
              let e;
              "axial" === this._type
                ? (e = t.createLinearGradient(
                    this._p0[0],
                    this._p0[1],
                    this._p1[0],
                    this._p1[1]
                  ))
                : "radial" === this._type &&
                  (e = t.createRadialGradient(
                    this._p0[0],
                    this._p0[1],
                    this._r0,
                    this._p1[0],
                    this._p1[1],
                    this._r1
                  ));
              for (const t of this._colorStops) e.addColorStop(t[0], t[1]);
              return e;
            }
            getPattern(t, e, s, r) {
              let o;
              if (r === a.STROKE || r === a.FILL) {
                const a = e.current.getClippedPathBoundingBox(
                    r,
                    (0, n.getCurrentTransform)(t)
                  ) || [0, 0, 0, 0],
                  l = Math.ceil(a[2] - a[0]) || 1,
                  c = Math.ceil(a[3] - a[1]) || 1,
                  h = e.cachedCanvases.getCanvas("pattern", l, c, !0),
                  d = h.context;
                d.clearRect(0, 0, d.canvas.width, d.canvas.height);
                d.beginPath();
                d.rect(0, 0, d.canvas.width, d.canvas.height);
                d.translate(-a[0], -a[1]);
                s = i.Util.transform(s, [1, 0, 0, 1, a[0], a[1]]);
                d.transform(...e.baseTransform);
                this.matrix && d.transform(...this.matrix);
                applyBoundingBox(d, this._bbox);
                d.fillStyle = this._createGradient(d);
                d.fill();
                o = t.createPattern(h.canvas, "no-repeat");
                const u = new DOMMatrix(s);
                o.setTransform(u);
              } else {
                applyBoundingBox(t, this._bbox);
                o = this._createGradient(t);
              }
              return o;
            }
          }
          function drawTriangle(t, e, s, i, n, a, r, o) {
            const l = e.coords,
              c = e.colors,
              h = t.data,
              d = 4 * t.width;
            let u;
            if (l[s + 1] > l[i + 1]) {
              u = s;
              s = i;
              i = u;
              u = a;
              a = r;
              r = u;
            }
            if (l[i + 1] > l[n + 1]) {
              u = i;
              i = n;
              n = u;
              u = r;
              r = o;
              o = u;
            }
            if (l[s + 1] > l[i + 1]) {
              u = s;
              s = i;
              i = u;
              u = a;
              a = r;
              r = u;
            }
            const p = (l[s] + e.offsetX) * e.scaleX,
              f = (l[s + 1] + e.offsetY) * e.scaleY,
              g = (l[i] + e.offsetX) * e.scaleX,
              m = (l[i + 1] + e.offsetY) * e.scaleY,
              b = (l[n] + e.offsetX) * e.scaleX,
              A = (l[n + 1] + e.offsetY) * e.scaleY;
            if (f >= A) return;
            const _ = c[a],
              y = c[a + 1],
              v = c[a + 2],
              S = c[r],
              x = c[r + 1],
              C = c[r + 2],
              E = c[o],
              P = c[o + 1],
              w = c[o + 2],
              T = Math.round(f),
              F = Math.round(A);
            let k, M, R, D, I, O, L, N;
            for (let t = T; t <= F; t++) {
              if (t < m) {
                let e;
                e = t < f ? 0 : (f - t) / (f - m);
                k = p - (p - g) * e;
                M = _ - (_ - S) * e;
                R = y - (y - x) * e;
                D = v - (v - C) * e;
              } else {
                let e;
                e = t > A ? 1 : m === A ? 0 : (m - t) / (m - A);
                k = g - (g - b) * e;
                M = S - (S - E) * e;
                R = x - (x - P) * e;
                D = C - (C - w) * e;
              }
              let e;
              e = t < f ? 0 : t > A ? 1 : (f - t) / (f - A);
              I = p - (p - b) * e;
              O = _ - (_ - E) * e;
              L = y - (y - P) * e;
              N = v - (v - w) * e;
              const s = Math.round(Math.min(k, I)),
                i = Math.round(Math.max(k, I));
              let n = d * t + 4 * s;
              for (let t = s; t <= i; t++) {
                e = (k - t) / (k - I);
                e < 0 ? (e = 0) : e > 1 && (e = 1);
                h[n++] = (M - (M - O) * e) | 0;
                h[n++] = (R - (R - L) * e) | 0;
                h[n++] = (D - (D - N) * e) | 0;
                h[n++] = 255;
              }
            }
          }
          function drawFigure(t, e, s) {
            const i = e.coords,
              n = e.colors;
            let a, r;
            switch (e.type) {
              case "lattice":
                const o = e.verticesPerRow,
                  l = Math.floor(i.length / o) - 1,
                  c = o - 1;
                for (a = 0; a < l; a++) {
                  let e = a * o;
                  for (let a = 0; a < c; a++, e++) {
                    drawTriangle(
                      t,
                      s,
                      i[e],
                      i[e + 1],
                      i[e + o],
                      n[e],
                      n[e + 1],
                      n[e + o]
                    );
                    drawTriangle(
                      t,
                      s,
                      i[e + o + 1],
                      i[e + 1],
                      i[e + o],
                      n[e + o + 1],
                      n[e + 1],
                      n[e + o]
                    );
                  }
                }
                break;
              case "triangles":
                for (a = 0, r = i.length; a < r; a += 3)
                  drawTriangle(
                    t,
                    s,
                    i[a],
                    i[a + 1],
                    i[a + 2],
                    n[a],
                    n[a + 1],
                    n[a + 2]
                  );
                break;
              default:
                throw new Error("illegal figure");
            }
          }
          class MeshShadingPattern extends BaseShadingPattern {
            constructor(t) {
              super();
              this._coords = t[2];
              this._colors = t[3];
              this._figures = t[4];
              this._bounds = t[5];
              this._bbox = t[7];
              this._background = t[8];
              this.matrix = null;
            }
            _createMeshCanvas(t, e, s) {
              const i = Math.floor(this._bounds[0]),
                n = Math.floor(this._bounds[1]),
                a = Math.ceil(this._bounds[2]) - i,
                r = Math.ceil(this._bounds[3]) - n,
                o = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3),
                l = Math.min(Math.ceil(Math.abs(r * t[1] * 1.1)), 3e3),
                c = a / o,
                h = r / l,
                d = {
                  coords: this._coords,
                  colors: this._colors,
                  offsetX: -i,
                  offsetY: -n,
                  scaleX: 1 / c,
                  scaleY: 1 / h,
                },
                u = o + 4,
                p = l + 4,
                f = s.getCanvas("mesh", u, p, !1),
                g = f.context,
                m = g.createImageData(o, l);
              if (e) {
                const t = m.data;
                for (let s = 0, i = t.length; s < i; s += 4) {
                  t[s] = e[0];
                  t[s + 1] = e[1];
                  t[s + 2] = e[2];
                  t[s + 3] = 255;
                }
              }
              for (const t of this._figures) drawFigure(m, t, d);
              g.putImageData(m, 2, 2);
              return {
                canvas: f.canvas,
                offsetX: i - 2 * c,
                offsetY: n - 2 * h,
                scaleX: c,
                scaleY: h,
              };
            }
            getPattern(t, e, s, r) {
              applyBoundingBox(t, this._bbox);
              let o;
              if (r === a.SHADING)
                o = i.Util.singularValueDecompose2dScale(
                  (0, n.getCurrentTransform)(t)
                );
              else {
                o = i.Util.singularValueDecompose2dScale(e.baseTransform);
                if (this.matrix) {
                  const t = i.Util.singularValueDecompose2dScale(this.matrix);
                  o = [o[0] * t[0], o[1] * t[1]];
                }
              }
              const l = this._createMeshCanvas(
                o,
                r === a.SHADING ? null : this._background,
                e.cachedCanvases
              );
              if (r !== a.SHADING) {
                t.setTransform(...e.baseTransform);
                this.matrix && t.transform(...this.matrix);
              }
              t.translate(l.offsetX, l.offsetY);
              t.scale(l.scaleX, l.scaleY);
              return t.createPattern(l.canvas, "no-repeat");
            }
          }
          class DummyShadingPattern extends BaseShadingPattern {
            getPattern() {
              return "hotpink";
            }
          }
          const r = 1,
            o = 2;
          class TilingPattern {
            static MAX_PATTERN_SIZE = 3e3;
            constructor(t, e, s, i, n) {
              this.operatorList = t[2];
              this.matrix = t[3] || [1, 0, 0, 1, 0, 0];
              this.bbox = t[4];
              this.xstep = t[5];
              this.ystep = t[6];
              this.paintType = t[7];
              this.tilingType = t[8];
              this.color = e;
              this.ctx = s;
              this.canvasGraphicsFactory = i;
              this.baseTransform = n;
            }
            createPatternCanvas(t) {
              const e = this.operatorList,
                s = this.bbox,
                a = this.xstep,
                r = this.ystep,
                o = this.paintType,
                l = this.tilingType,
                c = this.color,
                h = this.canvasGraphicsFactory;
              (0, i.info)("TilingType: " + l);
              const d = s[0],
                u = s[1],
                p = s[2],
                f = s[3],
                g = i.Util.singularValueDecompose2dScale(this.matrix),
                m = i.Util.singularValueDecompose2dScale(this.baseTransform),
                b = [g[0] * m[0], g[1] * m[1]],
                A = this.getSizeAndScale(a, this.ctx.canvas.width, b[0]),
                _ = this.getSizeAndScale(r, this.ctx.canvas.height, b[1]),
                y = t.cachedCanvases.getCanvas("pattern", A.size, _.size, !0),
                v = y.context,
                S = h.createCanvasGraphics(v);
              S.groupLevel = t.groupLevel;
              this.setFillAndStrokeStyleToContext(S, o, c);
              let x = d,
                C = u,
                E = p,
                P = f;
              if (d < 0) {
                x = 0;
                E += Math.abs(d);
              }
              if (u < 0) {
                C = 0;
                P += Math.abs(u);
              }
              v.translate(-A.scale * x, -_.scale * C);
              S.transform(A.scale, 0, 0, _.scale, 0, 0);
              v.save();
              this.clipBbox(S, x, C, E, P);
              S.baseTransform = (0, n.getCurrentTransform)(S.ctx);
              S.executeOperatorList(e);
              S.endDrawing();
              return {
                canvas: y.canvas,
                scaleX: A.scale,
                scaleY: _.scale,
                offsetX: x,
                offsetY: C,
              };
            }
            getSizeAndScale(t, e, s) {
              t = Math.abs(t);
              const i = Math.max(TilingPattern.MAX_PATTERN_SIZE, e);
              let n = Math.ceil(t * s);
              n >= i ? (n = i) : (s = n / t);
              return { scale: s, size: n };
            }
            clipBbox(t, e, s, i, a) {
              const r = i - e,
                o = a - s;
              t.ctx.rect(e, s, r, o);
              t.current.updateRectMinMax((0, n.getCurrentTransform)(t.ctx), [
                e,
                s,
                i,
                a,
              ]);
              t.clip();
              t.endPath();
            }
            setFillAndStrokeStyleToContext(t, e, s) {
              const n = t.ctx,
                a = t.current;
              switch (e) {
                case r:
                  const t = this.ctx;
                  n.fillStyle = t.fillStyle;
                  n.strokeStyle = t.strokeStyle;
                  a.fillColor = t.fillStyle;
                  a.strokeColor = t.strokeStyle;
                  break;
                case o:
                  const l = i.Util.makeHexColor(s[0], s[1], s[2]);
                  n.fillStyle = l;
                  n.strokeStyle = l;
                  a.fillColor = l;
                  a.strokeColor = l;
                  break;
                default:
                  throw new i.FormatError(`Unsupported paint type: ${e}`);
              }
            }
            getPattern(t, e, s, n) {
              let r = s;
              if (n !== a.SHADING) {
                r = i.Util.transform(r, e.baseTransform);
                this.matrix && (r = i.Util.transform(r, this.matrix));
              }
              const o = this.createPatternCanvas(e);
              let l = new DOMMatrix(r);
              l = l.translate(o.offsetX, o.offsetY);
              l = l.scale(1 / o.scaleX, 1 / o.scaleY);
              const c = t.createPattern(o.canvas, "repeat");
              c.setTransform(l);
              return c;
            }
          }
          e.TilingPattern = TilingPattern;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.convertBlackAndWhiteToRGBA = convertBlackAndWhiteToRGBA;
          e.convertToRGBA = function convertToRGBA(t) {
            switch (t.kind) {
              case i.ImageKind.GRAYSCALE_1BPP:
                return convertBlackAndWhiteToRGBA(t);
              case i.ImageKind.RGB_24BPP:
                return (function convertRGBToRGBA({
                  src: t,
                  srcPos: e = 0,
                  dest: s,
                  destPos: n = 0,
                  width: a,
                  height: r,
                }) {
                  let o = 0;
                  const l = t.length >> 2,
                    c = new Uint32Array(t.buffer, e, l);
                  if (i.FeatureTest.isLittleEndian) {
                    for (; o < l - 2; o += 3, n += 4) {
                      const t = c[o],
                        e = c[o + 1],
                        i = c[o + 2];
                      s[n] = 4278190080 | t;
                      s[n + 1] = (t >>> 24) | (e << 8) | 4278190080;
                      s[n + 2] = (e >>> 16) | (i << 16) | 4278190080;
                      s[n + 3] = (i >>> 8) | 4278190080;
                    }
                    for (let e = 4 * o, i = t.length; e < i; e += 3)
                      s[n++] =
                        t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | 4278190080;
                  } else {
                    for (; o < l - 2; o += 3, n += 4) {
                      const t = c[o],
                        e = c[o + 1],
                        i = c[o + 2];
                      s[n] = 255 | t;
                      s[n + 1] = (t << 24) | (e >>> 8) | 255;
                      s[n + 2] = (e << 16) | (i >>> 16) | 255;
                      s[n + 3] = (i << 8) | 255;
                    }
                    for (let e = 4 * o, i = t.length; e < i; e += 3)
                      s[n++] =
                        (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | 255;
                  }
                  return { srcPos: e, destPos: n };
                })(t);
            }
            return null;
          };
          e.grayToRGBA = function grayToRGBA(t, e) {
            if (i.FeatureTest.isLittleEndian)
              for (let s = 0, i = t.length; s < i; s++)
                e[s] = (65793 * t[s]) | 4278190080;
            else
              for (let s = 0, i = t.length; s < i; s++)
                e[s] = (16843008 * t[s]) | 255;
          };
          var i = s(1);
          function convertBlackAndWhiteToRGBA({
            src: t,
            srcPos: e = 0,
            dest: s,
            width: n,
            height: a,
            nonBlackColor: r = 4294967295,
            inverseDecode: o = !1,
          }) {
            const l = i.FeatureTest.isLittleEndian ? 4278190080 : 255,
              [c, h] = o ? [r, l] : [l, r],
              d = n >> 3,
              u = 7 & n,
              p = t.length;
            s = new Uint32Array(s.buffer);
            let f = 0;
            for (let i = 0; i < a; i++) {
              for (const i = e + d; e < i; e++) {
                const i = e < p ? t[e] : 255;
                s[f++] = 128 & i ? h : c;
                s[f++] = 64 & i ? h : c;
                s[f++] = 32 & i ? h : c;
                s[f++] = 16 & i ? h : c;
                s[f++] = 8 & i ? h : c;
                s[f++] = 4 & i ? h : c;
                s[f++] = 2 & i ? h : c;
                s[f++] = 1 & i ? h : c;
              }
              if (0 === u) continue;
              const i = e < p ? t[e++] : 255;
              for (let t = 0; t < u; t++) s[f++] = i & (1 << (7 - t)) ? h : c;
            }
            return { srcPos: e, destPos: f };
          }
        },
        (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.GlobalWorkerOptions = void 0;
          const s = Object.create(null);
          e.GlobalWorkerOptions = s;
          s.workerPort = null;
          s.workerSrc = "";
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.MessageHandler = void 0;
          var i = s(1);
          const n = 1,
            a = 2,
            r = 1,
            o = 2,
            l = 3,
            c = 4,
            h = 5,
            d = 6,
            u = 7,
            p = 8;
          function wrapReason(t) {
            t instanceof Error ||
              ("object" == typeof t && null !== t) ||
              (0, i.unreachable)(
                'wrapReason: Expected "reason" to be a (possibly cloned) Error.'
              );
            switch (t.name) {
              case "AbortException":
                return new i.AbortException(t.message);
              case "MissingPDFException":
                return new i.MissingPDFException(t.message);
              case "PasswordException":
                return new i.PasswordException(t.message, t.code);
              case "UnexpectedResponseException":
                return new i.UnexpectedResponseException(t.message, t.status);
              case "UnknownErrorException":
                return new i.UnknownErrorException(t.message, t.details);
              default:
                return new i.UnknownErrorException(t.message, t.toString());
            }
          }
          e.MessageHandler = class MessageHandler {
            constructor(t, e, s) {
              this.sourceName = t;
              this.targetName = e;
              this.comObj = s;
              this.callbackId = 1;
              this.streamId = 1;
              this.streamSinks = Object.create(null);
              this.streamControllers = Object.create(null);
              this.callbackCapabilities = Object.create(null);
              this.actionHandler = Object.create(null);
              this._onComObjOnMessage = (t) => {
                const e = t.data;
                if (e.targetName !== this.sourceName) return;
                if (e.stream) {
                  this.#Ct(e);
                  return;
                }
                if (e.callback) {
                  const t = e.callbackId,
                    s = this.callbackCapabilities[t];
                  if (!s) throw new Error(`Cannot resolve callback ${t}`);
                  delete this.callbackCapabilities[t];
                  if (e.callback === n) s.resolve(e.data);
                  else {
                    if (e.callback !== a)
                      throw new Error("Unexpected callback case");
                    s.reject(wrapReason(e.reason));
                  }
                  return;
                }
                const i = this.actionHandler[e.action];
                if (!i)
                  throw new Error(`Unknown action from worker: ${e.action}`);
                if (e.callbackId) {
                  const t = this.sourceName,
                    r = e.sourceName;
                  new Promise(function (t) {
                    t(i(e.data));
                  }).then(
                    function (i) {
                      s.postMessage({
                        sourceName: t,
                        targetName: r,
                        callback: n,
                        callbackId: e.callbackId,
                        data: i,
                      });
                    },
                    function (i) {
                      s.postMessage({
                        sourceName: t,
                        targetName: r,
                        callback: a,
                        callbackId: e.callbackId,
                        reason: wrapReason(i),
                      });
                    }
                  );
                } else e.streamId ? this.#Et(e) : i(e.data);
              };
              s.addEventListener("message", this._onComObjOnMessage);
            }
            on(t, e) {
              const s = this.actionHandler;
              if (s[t])
                throw new Error(`There is already an actionName called "${t}"`);
              s[t] = e;
            }
            send(t, e, s) {
              this.comObj.postMessage(
                {
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: t,
                  data: e,
                },
                s
              );
            }
            sendWithPromise(t, e, s) {
              const n = this.callbackId++,
                a = new i.PromiseCapability();
              this.callbackCapabilities[n] = a;
              try {
                this.comObj.postMessage(
                  {
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: t,
                    callbackId: n,
                    data: e,
                  },
                  s
                );
              } catch (t) {
                a.reject(t);
              }
              return a.promise;
            }
            sendWithStream(t, e, s, n) {
              const a = this.streamId++,
                o = this.sourceName,
                l = this.targetName,
                c = this.comObj;
              return new ReadableStream(
                {
                  start: (s) => {
                    const r = new i.PromiseCapability();
                    this.streamControllers[a] = {
                      controller: s,
                      startCall: r,
                      pullCall: null,
                      cancelCall: null,
                      isClosed: !1,
                    };
                    c.postMessage(
                      {
                        sourceName: o,
                        targetName: l,
                        action: t,
                        streamId: a,
                        data: e,
                        desiredSize: s.desiredSize,
                      },
                      n
                    );
                    return r.promise;
                  },
                  pull: (t) => {
                    const e = new i.PromiseCapability();
                    this.streamControllers[a].pullCall = e;
                    c.postMessage({
                      sourceName: o,
                      targetName: l,
                      stream: d,
                      streamId: a,
                      desiredSize: t.desiredSize,
                    });
                    return e.promise;
                  },
                  cancel: (t) => {
                    (0, i.assert)(
                      t instanceof Error,
                      "cancel must have a valid reason"
                    );
                    const e = new i.PromiseCapability();
                    this.streamControllers[a].cancelCall = e;
                    this.streamControllers[a].isClosed = !0;
                    c.postMessage({
                      sourceName: o,
                      targetName: l,
                      stream: r,
                      streamId: a,
                      reason: wrapReason(t),
                    });
                    return e.promise;
                  },
                },
                s
              );
            }
            #Et(t) {
              const e = t.streamId,
                s = this.sourceName,
                n = t.sourceName,
                a = this.comObj,
                r = this,
                o = this.actionHandler[t.action],
                d = {
                  enqueue(t, r = 1, o) {
                    if (this.isCancelled) return;
                    const l = this.desiredSize;
                    this.desiredSize -= r;
                    if (l > 0 && this.desiredSize <= 0) {
                      this.sinkCapability = new i.PromiseCapability();
                      this.ready = this.sinkCapability.promise;
                    }
                    a.postMessage(
                      {
                        sourceName: s,
                        targetName: n,
                        stream: c,
                        streamId: e,
                        chunk: t,
                      },
                      o
                    );
                  },
                  close() {
                    if (!this.isCancelled) {
                      this.isCancelled = !0;
                      a.postMessage({
                        sourceName: s,
                        targetName: n,
                        stream: l,
                        streamId: e,
                      });
                      delete r.streamSinks[e];
                    }
                  },
                  error(t) {
                    (0, i.assert)(
                      t instanceof Error,
                      "error must have a valid reason"
                    );
                    if (!this.isCancelled) {
                      this.isCancelled = !0;
                      a.postMessage({
                        sourceName: s,
                        targetName: n,
                        stream: h,
                        streamId: e,
                        reason: wrapReason(t),
                      });
                    }
                  },
                  sinkCapability: new i.PromiseCapability(),
                  onPull: null,
                  onCancel: null,
                  isCancelled: !1,
                  desiredSize: t.desiredSize,
                  ready: null,
                };
              d.sinkCapability.resolve();
              d.ready = d.sinkCapability.promise;
              this.streamSinks[e] = d;
              new Promise(function (e) {
                e(o(t.data, d));
              }).then(
                function () {
                  a.postMessage({
                    sourceName: s,
                    targetName: n,
                    stream: p,
                    streamId: e,
                    success: !0,
                  });
                },
                function (t) {
                  a.postMessage({
                    sourceName: s,
                    targetName: n,
                    stream: p,
                    streamId: e,
                    reason: wrapReason(t),
                  });
                }
              );
            }
            #Ct(t) {
              const e = t.streamId,
                s = this.sourceName,
                n = t.sourceName,
                a = this.comObj,
                f = this.streamControllers[e],
                g = this.streamSinks[e];
              switch (t.stream) {
                case p:
                  t.success
                    ? f.startCall.resolve()
                    : f.startCall.reject(wrapReason(t.reason));
                  break;
                case u:
                  t.success
                    ? f.pullCall.resolve()
                    : f.pullCall.reject(wrapReason(t.reason));
                  break;
                case d:
                  if (!g) {
                    a.postMessage({
                      sourceName: s,
                      targetName: n,
                      stream: u,
                      streamId: e,
                      success: !0,
                    });
                    break;
                  }
                  g.desiredSize <= 0 &&
                    t.desiredSize > 0 &&
                    g.sinkCapability.resolve();
                  g.desiredSize = t.desiredSize;
                  new Promise(function (t) {
                    t(g.onPull?.());
                  }).then(
                    function () {
                      a.postMessage({
                        sourceName: s,
                        targetName: n,
                        stream: u,
                        streamId: e,
                        success: !0,
                      });
                    },
                    function (t) {
                      a.postMessage({
                        sourceName: s,
                        targetName: n,
                        stream: u,
                        streamId: e,
                        reason: wrapReason(t),
                      });
                    }
                  );
                  break;
                case c:
                  (0, i.assert)(f, "enqueue should have stream controller");
                  if (f.isClosed) break;
                  f.controller.enqueue(t.chunk);
                  break;
                case l:
                  (0, i.assert)(f, "close should have stream controller");
                  if (f.isClosed) break;
                  f.isClosed = !0;
                  f.controller.close();
                  this.#Pt(f, e);
                  break;
                case h:
                  (0, i.assert)(f, "error should have stream controller");
                  f.controller.error(wrapReason(t.reason));
                  this.#Pt(f, e);
                  break;
                case o:
                  t.success
                    ? f.cancelCall.resolve()
                    : f.cancelCall.reject(wrapReason(t.reason));
                  this.#Pt(f, e);
                  break;
                case r:
                  if (!g) break;
                  new Promise(function (e) {
                    e(g.onCancel?.(wrapReason(t.reason)));
                  }).then(
                    function () {
                      a.postMessage({
                        sourceName: s,
                        targetName: n,
                        stream: o,
                        streamId: e,
                        success: !0,
                      });
                    },
                    function (t) {
                      a.postMessage({
                        sourceName: s,
                        targetName: n,
                        stream: o,
                        streamId: e,
                        reason: wrapReason(t),
                      });
                    }
                  );
                  g.sinkCapability.reject(wrapReason(t.reason));
                  g.isCancelled = !0;
                  delete this.streamSinks[e];
                  break;
                default:
                  throw new Error("Unexpected stream case");
              }
            }
            async #Pt(t, e) {
              await Promise.allSettled([
                t.startCall?.promise,
                t.pullCall?.promise,
                t.cancelCall?.promise,
              ]);
              delete this.streamControllers[e];
            }
            destroy() {
              this.comObj.removeEventListener(
                "message",
                this._onComObjOnMessage
              );
            }
          };
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.Metadata = void 0;
          var i = s(1);
          e.Metadata = class Metadata {
            #wt;
            #Tt;
            constructor({ parsedData: t, rawData: e }) {
              this.#wt = t;
              this.#Tt = e;
            }
            getRaw() {
              return this.#Tt;
            }
            get(t) {
              return this.#wt.get(t) ?? null;
            }
            getAll() {
              return (0, i.objectFromMap)(this.#wt);
            }
            has(t) {
              return this.#wt.has(t);
            }
          };
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.OptionalContentConfig = void 0;
          var i = s(1),
            n = s(8);
          const a = Symbol("INTERNAL");
          class OptionalContentGroup {
            #Ft = !0;
            constructor(t, e) {
              this.name = t;
              this.intent = e;
            }
            get visible() {
              return this.#Ft;
            }
            _setVisible(t, e) {
              t !== a &&
                (0, i.unreachable)("Internal method `_setVisible` called.");
              this.#Ft = e;
            }
          }
          e.OptionalContentConfig = class OptionalContentConfig {
            #kt = null;
            #Mt = new Map();
            #Rt = null;
            #Dt = null;
            constructor(t) {
              this.name = null;
              this.creator = null;
              if (null !== t) {
                this.name = t.name;
                this.creator = t.creator;
                this.#Dt = t.order;
                for (const e of t.groups)
                  this.#Mt.set(
                    e.id,
                    new OptionalContentGroup(e.name, e.intent)
                  );
                if ("OFF" === t.baseState)
                  for (const t of this.#Mt.values()) t._setVisible(a, !1);
                for (const e of t.on) this.#Mt.get(e)._setVisible(a, !0);
                for (const e of t.off) this.#Mt.get(e)._setVisible(a, !1);
                this.#Rt = this.getHash();
              }
            }
            #It(t) {
              const e = t.length;
              if (e < 2) return !0;
              const s = t[0];
              for (let n = 1; n < e; n++) {
                const e = t[n];
                let a;
                if (Array.isArray(e)) a = this.#It(e);
                else {
                  if (!this.#Mt.has(e)) {
                    (0, i.warn)(`Optional content group not found: ${e}`);
                    return !0;
                  }
                  a = this.#Mt.get(e).visible;
                }
                switch (s) {
                  case "And":
                    if (!a) return !1;
                    break;
                  case "Or":
                    if (a) return !0;
                    break;
                  case "Not":
                    return !a;
                  default:
                    return !0;
                }
              }
              return "And" === s;
            }
            isVisible(t) {
              if (0 === this.#Mt.size) return !0;
              if (!t) {
                (0, i.warn)("Optional content group not defined.");
                return !0;
              }
              if ("OCG" === t.type) {
                if (!this.#Mt.has(t.id)) {
                  (0, i.warn)(`Optional content group not found: ${t.id}`);
                  return !0;
                }
                return this.#Mt.get(t.id).visible;
              }
              if ("OCMD" === t.type) {
                if (t.expression) return this.#It(t.expression);
                if (!t.policy || "AnyOn" === t.policy) {
                  for (const e of t.ids) {
                    if (!this.#Mt.has(e)) {
                      (0, i.warn)(`Optional content group not found: ${e}`);
                      return !0;
                    }
                    if (this.#Mt.get(e).visible) return !0;
                  }
                  return !1;
                }
                if ("AllOn" === t.policy) {
                  for (const e of t.ids) {
                    if (!this.#Mt.has(e)) {
                      (0, i.warn)(`Optional content group not found: ${e}`);
                      return !0;
                    }
                    if (!this.#Mt.get(e).visible) return !1;
                  }
                  return !0;
                }
                if ("AnyOff" === t.policy) {
                  for (const e of t.ids) {
                    if (!this.#Mt.has(e)) {
                      (0, i.warn)(`Optional content group not found: ${e}`);
                      return !0;
                    }
                    if (!this.#Mt.get(e).visible) return !0;
                  }
                  return !1;
                }
                if ("AllOff" === t.policy) {
                  for (const e of t.ids) {
                    if (!this.#Mt.has(e)) {
                      (0, i.warn)(`Optional content group not found: ${e}`);
                      return !0;
                    }
                    if (this.#Mt.get(e).visible) return !1;
                  }
                  return !0;
                }
                (0, i.warn)(`Unknown optional content policy ${t.policy}.`);
                return !0;
              }
              (0, i.warn)(`Unknown group type ${t.type}.`);
              return !0;
            }
            setVisibility(t, e = !0) {
              if (this.#Mt.has(t)) {
                this.#Mt.get(t)._setVisible(a, !!e);
                this.#kt = null;
              } else (0, i.warn)(`Optional content group not found: ${t}`);
            }
            get hasInitialVisibility() {
              return this.getHash() === this.#Rt;
            }
            getOrder() {
              return this.#Mt.size
                ? this.#Dt
                  ? this.#Dt.slice()
                  : [...this.#Mt.keys()]
                : null;
            }
            getGroups() {
              return this.#Mt.size > 0 ? (0, i.objectFromMap)(this.#Mt) : null;
            }
            getGroup(t) {
              return this.#Mt.get(t) || null;
            }
            getHash() {
              if (null !== this.#kt) return this.#kt;
              const t = new n.MurmurHash3_64();
              for (const [e, s] of this.#Mt) t.update(`${e}:${s.visible}`);
              return (this.#kt = t.hexdigest());
            }
          };
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.PDFDataTransportStream = void 0;
          var i = s(1),
            n = s(6);
          e.PDFDataTransportStream = class PDFDataTransportStream {
            constructor(
              {
                length: t,
                initialData: e,
                progressiveDone: s = !1,
                contentDispositionFilename: n = null,
                disableRange: a = !1,
                disableStream: r = !1,
              },
              o
            ) {
              (0, i.assert)(
                o,
                'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'
              );
              this._queuedChunks = [];
              this._progressiveDone = s;
              this._contentDispositionFilename = n;
              if (e?.length > 0) {
                const t =
                  e instanceof Uint8Array &&
                  e.byteLength === e.buffer.byteLength
                    ? e.buffer
                    : new Uint8Array(e).buffer;
                this._queuedChunks.push(t);
              }
              this._pdfDataRangeTransport = o;
              this._isStreamingSupported = !r;
              this._isRangeSupported = !a;
              this._contentLength = t;
              this._fullRequestReader = null;
              this._rangeReaders = [];
              this._pdfDataRangeTransport.addRangeListener((t, e) => {
                this._onReceiveData({ begin: t, chunk: e });
              });
              this._pdfDataRangeTransport.addProgressListener((t, e) => {
                this._onProgress({ loaded: t, total: e });
              });
              this._pdfDataRangeTransport.addProgressiveReadListener((t) => {
                this._onReceiveData({ chunk: t });
              });
              this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                this._onProgressiveDone();
              });
              this._pdfDataRangeTransport.transportReady();
            }
            _onReceiveData({ begin: t, chunk: e }) {
              const s =
                e instanceof Uint8Array && e.byteLength === e.buffer.byteLength
                  ? e.buffer
                  : new Uint8Array(e).buffer;
              if (void 0 === t)
                this._fullRequestReader
                  ? this._fullRequestReader._enqueue(s)
                  : this._queuedChunks.push(s);
              else {
                const e = this._rangeReaders.some(function (e) {
                  if (e._begin !== t) return !1;
                  e._enqueue(s);
                  return !0;
                });
                (0, i.assert)(
                  e,
                  "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."
                );
              }
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            _onProgress(t) {
              void 0 === t.total
                ? this._rangeReaders[0]?.onProgress?.({ loaded: t.loaded })
                : this._fullRequestReader?.onProgress?.({
                    loaded: t.loaded,
                    total: t.total,
                  });
            }
            _onProgressiveDone() {
              this._fullRequestReader?.progressiveDone();
              this._progressiveDone = !0;
            }
            _removeRangeReader(t) {
              const e = this._rangeReaders.indexOf(t);
              e >= 0 && this._rangeReaders.splice(e, 1);
            }
            getFullReader() {
              (0, i.assert)(
                !this._fullRequestReader,
                "PDFDataTransportStream.getFullReader can only be called once."
              );
              const t = this._queuedChunks;
              this._queuedChunks = null;
              return new PDFDataTransportStreamReader(
                this,
                t,
                this._progressiveDone,
                this._contentDispositionFilename
              );
            }
            getRangeReader(t, e) {
              if (e <= this._progressiveDataLength) return null;
              const s = new PDFDataTransportStreamRangeReader(this, t, e);
              this._pdfDataRangeTransport.requestDataRange(t, e);
              this._rangeReaders.push(s);
              return s;
            }
            cancelAllRequests(t) {
              this._fullRequestReader?.cancel(t);
              for (const e of this._rangeReaders.slice(0)) e.cancel(t);
              this._pdfDataRangeTransport.abort();
            }
          };
          class PDFDataTransportStreamReader {
            constructor(t, e, s = !1, i = null) {
              this._stream = t;
              this._done = s || !1;
              this._filename = (0, n.isPdfFile)(i) ? i : null;
              this._queuedChunks = e || [];
              this._loaded = 0;
              for (const t of this._queuedChunks) this._loaded += t.byteLength;
              this._requests = [];
              this._headersReady = Promise.resolve();
              t._fullRequestReader = this;
              this.onProgress = null;
            }
            _enqueue(t) {
              if (!this._done) {
                if (this._requests.length > 0) {
                  this._requests.shift().resolve({ value: t, done: !1 });
                } else this._queuedChunks.push(t);
                this._loaded += t.byteLength;
              }
            }
            get headersReady() {
              return this._headersReady;
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._stream._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._stream._isStreamingSupported;
            }
            get contentLength() {
              return this._stream._contentLength;
            }
            async read() {
              if (this._queuedChunks.length > 0) {
                return { value: this._queuedChunks.shift(), done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const t = new i.PromiseCapability();
              this._requests.push(t);
              return t.promise;
            }
            cancel(t) {
              this._done = !0;
              for (const t of this._requests)
                t.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
            }
            progressiveDone() {
              this._done || (this._done = !0);
            }
          }
          class PDFDataTransportStreamRangeReader {
            constructor(t, e, s) {
              this._stream = t;
              this._begin = e;
              this._end = s;
              this._queuedChunk = null;
              this._requests = [];
              this._done = !1;
              this.onProgress = null;
            }
            _enqueue(t) {
              if (!this._done) {
                if (0 === this._requests.length) this._queuedChunk = t;
                else {
                  this._requests.shift().resolve({ value: t, done: !1 });
                  for (const t of this._requests)
                    t.resolve({ value: void 0, done: !0 });
                  this._requests.length = 0;
                }
                this._done = !0;
                this._stream._removeRangeReader(this);
              }
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._queuedChunk) {
                const t = this._queuedChunk;
                this._queuedChunk = null;
                return { value: t, done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const t = new i.PromiseCapability();
              this._requests.push(t);
              return t.promise;
            }
            cancel(t) {
              this._done = !0;
              for (const t of this._requests)
                t.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._stream._removeRangeReader(this);
            }
          }
        },
        (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.XfaText = void 0;
          class XfaText {
            static textContent(t) {
              const e = [],
                s = { items: e, styles: Object.create(null) };
              !(function walk(t) {
                if (!t) return;
                let s = null;
                const i = t.name;
                if ("#text" === i) s = t.value;
                else {
                  if (!XfaText.shouldBuildText(i)) return;
                  t?.attributes?.textContent
                    ? (s = t.attributes.textContent)
                    : t.value && (s = t.value);
                }
                null !== s && e.push({ str: s });
                if (t.children) for (const e of t.children) walk(e);
              })(t);
              return s;
            }
            static shouldBuildText(t) {
              return !(
                "textarea" === t ||
                "input" === t ||
                "option" === t ||
                "select" === t
              );
            }
          }
          e.XfaText = XfaText;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.NodeStandardFontDataFactory =
            e.NodeFilterFactory =
            e.NodeCanvasFactory =
            e.NodeCMapReaderFactory =
              void 0;
          var i = s(7);
          const fetchData = function (t) {
            return new Promise((e, s) => {
              require("fs").readFile(t, (t, i) => {
                !t && i ? e(new Uint8Array(i)) : s(new Error(t));
              });
            });
          };
          class NodeFilterFactory extends i.BaseFilterFactory {}
          e.NodeFilterFactory = NodeFilterFactory;
          class NodeCanvasFactory extends i.BaseCanvasFactory {
            _createCanvas(t, e) {
              return require("canvas").createCanvas(t, e);
            }
          }
          e.NodeCanvasFactory = NodeCanvasFactory;
          class NodeCMapReaderFactory extends i.BaseCMapReaderFactory {
            _fetchData(t, e) {
              return fetchData(t).then((t) => ({
                cMapData: t,
                compressionType: e,
              }));
            }
          }
          e.NodeCMapReaderFactory = NodeCMapReaderFactory;
          class NodeStandardFontDataFactory extends i.BaseStandardFontDataFactory {
            _fetchData(t) {
              return fetchData(t);
            }
          }
          e.NodeStandardFontDataFactory = NodeStandardFontDataFactory;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.PDFNodeStream = void 0;
          var i = s(1),
            n = s(22);
          const a = require("fs"),
            r = require("http"),
            o = require("https"),
            l = require("url"),
            c = /^file:\/\/\/[a-zA-Z]:\//;
          e.PDFNodeStream = class PDFNodeStream {
            constructor(t) {
              this.source = t;
              this.url = (function parseUrl(t) {
                const e = l.parse(t);
                if ("file:" === e.protocol || e.host) return e;
                if (/^[a-z]:[/\\]/i.test(t)) return l.parse(`file:///${t}`);
                e.host || (e.protocol = "file:");
                return e;
              })(t.url);
              this.isHttp =
                "http:" === this.url.protocol || "https:" === this.url.protocol;
              this.isFsUrl = "file:" === this.url.protocol;
              this.httpHeaders = (this.isHttp && t.httpHeaders) || {};
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            getFullReader() {
              (0, i.assert)(
                !this._fullRequestReader,
                "PDFNodeStream.getFullReader can only be called once."
              );
              this._fullRequestReader = this.isFsUrl
                ? new PDFNodeStreamFsFullReader(this)
                : new PDFNodeStreamFullReader(this);
              return this._fullRequestReader;
            }
            getRangeReader(t, e) {
              if (e <= this._progressiveDataLength) return null;
              const s = this.isFsUrl
                ? new PDFNodeStreamFsRangeReader(this, t, e)
                : new PDFNodeStreamRangeReader(this, t, e);
              this._rangeRequestReaders.push(s);
              return s;
            }
            cancelAllRequests(t) {
              this._fullRequestReader?.cancel(t);
              for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
            }
          };
          class BaseFullReader {
            constructor(t) {
              this._url = t.url;
              this._done = !1;
              this._storedError = null;
              this.onProgress = null;
              const e = t.source;
              this._contentLength = e.length;
              this._loaded = 0;
              this._filename = null;
              this._disableRange = e.disableRange || !1;
              this._rangeChunkSize = e.rangeChunkSize;
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0);
              this._isStreamingSupported = !e.disableStream;
              this._isRangeSupported = !e.disableRange;
              this._readableStream = null;
              this._readCapability = new i.PromiseCapability();
              this._headersCapability = new i.PromiseCapability();
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              if (this._done) return { value: void 0, done: !0 };
              if (this._storedError) throw this._storedError;
              const t = this._readableStream.read();
              if (null === t) {
                this._readCapability = new i.PromiseCapability();
                return this.read();
              }
              this._loaded += t.length;
              this.onProgress?.({
                loaded: this._loaded,
                total: this._contentLength,
              });
              return { value: new Uint8Array(t).buffer, done: !1 };
            }
            cancel(t) {
              this._readableStream
                ? this._readableStream.destroy(t)
                : this._error(t);
            }
            _error(t) {
              this._storedError = t;
              this._readCapability.resolve();
            }
            _setReadableStream(t) {
              this._readableStream = t;
              t.on("readable", () => {
                this._readCapability.resolve();
              });
              t.on("end", () => {
                t.destroy();
                this._done = !0;
                this._readCapability.resolve();
              });
              t.on("error", (t) => {
                this._error(t);
              });
              !this._isStreamingSupported &&
                this._isRangeSupported &&
                this._error(new i.AbortException("streaming is disabled"));
              this._storedError &&
                this._readableStream.destroy(this._storedError);
            }
          }
          class BaseRangeReader {
            constructor(t) {
              this._url = t.url;
              this._done = !1;
              this._storedError = null;
              this.onProgress = null;
              this._loaded = 0;
              this._readableStream = null;
              this._readCapability = new i.PromiseCapability();
              const e = t.source;
              this._isStreamingSupported = !e.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              if (this._done) return { value: void 0, done: !0 };
              if (this._storedError) throw this._storedError;
              const t = this._readableStream.read();
              if (null === t) {
                this._readCapability = new i.PromiseCapability();
                return this.read();
              }
              this._loaded += t.length;
              this.onProgress?.({ loaded: this._loaded });
              return { value: new Uint8Array(t).buffer, done: !1 };
            }
            cancel(t) {
              this._readableStream
                ? this._readableStream.destroy(t)
                : this._error(t);
            }
            _error(t) {
              this._storedError = t;
              this._readCapability.resolve();
            }
            _setReadableStream(t) {
              this._readableStream = t;
              t.on("readable", () => {
                this._readCapability.resolve();
              });
              t.on("end", () => {
                t.destroy();
                this._done = !0;
                this._readCapability.resolve();
              });
              t.on("error", (t) => {
                this._error(t);
              });
              this._storedError &&
                this._readableStream.destroy(this._storedError);
            }
          }
          function createRequestOptions(t, e) {
            return {
              protocol: t.protocol,
              auth: t.auth,
              host: t.hostname,
              port: t.port,
              path: t.path,
              method: "GET",
              headers: e,
            };
          }
          class PDFNodeStreamFullReader extends BaseFullReader {
            constructor(t) {
              super(t);
              const handleResponse = (e) => {
                if (404 === e.statusCode) {
                  const t = new i.MissingPDFException(
                    `Missing PDF "${this._url}".`
                  );
                  this._storedError = t;
                  this._headersCapability.reject(t);
                  return;
                }
                this._headersCapability.resolve();
                this._setReadableStream(e);
                const getResponseHeader = (t) =>
                    this._readableStream.headers[t.toLowerCase()],
                  { allowRangeRequests: s, suggestedLength: a } = (0,
                  n.validateRangeRequestCapabilities)({
                    getResponseHeader: getResponseHeader,
                    isHttp: t.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange,
                  });
                this._isRangeSupported = s;
                this._contentLength = a || this._contentLength;
                this._filename = (0, n.extractFilenameFromHeader)(
                  getResponseHeader
                );
              };
              this._request = null;
              "http:" === this._url.protocol
                ? (this._request = r.request(
                    createRequestOptions(this._url, t.httpHeaders),
                    handleResponse
                  ))
                : (this._request = o.request(
                    createRequestOptions(this._url, t.httpHeaders),
                    handleResponse
                  ));
              this._request.on("error", (t) => {
                this._storedError = t;
                this._headersCapability.reject(t);
              });
              this._request.end();
            }
          }
          class PDFNodeStreamRangeReader extends BaseRangeReader {
            constructor(t, e, s) {
              super(t);
              this._httpHeaders = {};
              for (const e in t.httpHeaders) {
                const s = t.httpHeaders[e];
                void 0 !== s && (this._httpHeaders[e] = s);
              }
              this._httpHeaders.Range = `bytes=${e}-${s - 1}`;
              const handleResponse = (t) => {
                if (404 !== t.statusCode) this._setReadableStream(t);
                else {
                  const t = new i.MissingPDFException(
                    `Missing PDF "${this._url}".`
                  );
                  this._storedError = t;
                }
              };
              this._request = null;
              "http:" === this._url.protocol
                ? (this._request = r.request(
                    createRequestOptions(this._url, this._httpHeaders),
                    handleResponse
                  ))
                : (this._request = o.request(
                    createRequestOptions(this._url, this._httpHeaders),
                    handleResponse
                  ));
              this._request.on("error", (t) => {
                this._storedError = t;
              });
              this._request.end();
            }
          }
          class PDFNodeStreamFsFullReader extends BaseFullReader {
            constructor(t) {
              super(t);
              let e = decodeURIComponent(this._url.path);
              c.test(this._url.href) && (e = e.replace(/^\//, ""));
              a.lstat(e, (t, s) => {
                if (t) {
                  "ENOENT" === t.code &&
                    (t = new i.MissingPDFException(`Missing PDF "${e}".`));
                  this._storedError = t;
                  this._headersCapability.reject(t);
                } else {
                  this._contentLength = s.size;
                  this._setReadableStream(a.createReadStream(e));
                  this._headersCapability.resolve();
                }
              });
            }
          }
          class PDFNodeStreamFsRangeReader extends BaseRangeReader {
            constructor(t, e, s) {
              super(t);
              let i = decodeURIComponent(this._url.path);
              c.test(this._url.href) && (i = i.replace(/^\//, ""));
              this._setReadableStream(
                a.createReadStream(i, { start: e, end: s - 1 })
              );
            }
          }
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.createResponseStatusError = function createResponseStatusError(
            t,
            e
          ) {
            if (404 === t || (0 === t && e.startsWith("file:")))
              return new i.MissingPDFException('Missing PDF "' + e + '".');
            return new i.UnexpectedResponseException(
              `Unexpected server response (${t}) while retrieving PDF "${e}".`,
              t
            );
          };
          e.extractFilenameFromHeader = function extractFilenameFromHeader(t) {
            const e = t("Content-Disposition");
            if (e) {
              let t = (0, n.getFilenameFromContentDispositionHeader)(e);
              if (t.includes("%"))
                try {
                  t = decodeURIComponent(t);
                } catch (t) {}
              if ((0, a.isPdfFile)(t)) return t;
            }
            return null;
          };
          e.validateRangeRequestCapabilities =
            function validateRangeRequestCapabilities({
              getResponseHeader: t,
              isHttp: e,
              rangeChunkSize: s,
              disableRange: i,
            }) {
              const n = { allowRangeRequests: !1, suggestedLength: void 0 },
                a = parseInt(t("Content-Length"), 10);
              if (!Number.isInteger(a)) return n;
              n.suggestedLength = a;
              if (a <= 2 * s) return n;
              if (i || !e) return n;
              if ("bytes" !== t("Accept-Ranges")) return n;
              if ("identity" !== (t("Content-Encoding") || "identity"))
                return n;
              n.allowRangeRequests = !0;
              return n;
            };
          e.validateResponseStatus = function validateResponseStatus(t) {
            return 200 === t || 206 === t;
          };
          var i = s(1),
            n = s(23),
            a = s(6);
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.getFilenameFromContentDispositionHeader =
            function getFilenameFromContentDispositionHeader(t) {
              let e = !0,
                s = toParamRegExp("filename\\*", "i").exec(t);
              if (s) {
                s = s[1];
                let t = rfc2616unquote(s);
                t = unescape(t);
                t = rfc5987decode(t);
                t = rfc2047decode(t);
                return fixupEncoding(t);
              }
              s = (function rfc2231getparam(t) {
                const e = [];
                let s;
                const i = toParamRegExp(
                  "filename\\*((?!0\\d)\\d+)(\\*?)",
                  "ig"
                );
                for (; null !== (s = i.exec(t)); ) {
                  let [, t, i, n] = s;
                  t = parseInt(t, 10);
                  if (t in e) {
                    if (0 === t) break;
                  } else e[t] = [i, n];
                }
                const n = [];
                for (let t = 0; t < e.length && t in e; ++t) {
                  let [s, i] = e[t];
                  i = rfc2616unquote(i);
                  if (s) {
                    i = unescape(i);
                    0 === t && (i = rfc5987decode(i));
                  }
                  n.push(i);
                }
                return n.join("");
              })(t);
              if (s) {
                return fixupEncoding(rfc2047decode(s));
              }
              s = toParamRegExp("filename", "i").exec(t);
              if (s) {
                s = s[1];
                let t = rfc2616unquote(s);
                t = rfc2047decode(t);
                return fixupEncoding(t);
              }
              function toParamRegExp(t, e) {
                return new RegExp(
                  "(?:^|;)\\s*" +
                    t +
                    '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
                  e
                );
              }
              function textdecode(t, s) {
                if (t) {
                  if (!/^[\x00-\xFF]+$/.test(s)) return s;
                  try {
                    const n = new TextDecoder(t, { fatal: !0 }),
                      a = (0, i.stringToBytes)(s);
                    s = n.decode(a);
                    e = !1;
                  } catch (t) {}
                }
                return s;
              }
              function fixupEncoding(t) {
                if (e && /[\x80-\xff]/.test(t)) {
                  t = textdecode("utf-8", t);
                  e && (t = textdecode("iso-8859-1", t));
                }
                return t;
              }
              function rfc2616unquote(t) {
                if (t.startsWith('"')) {
                  const e = t.slice(1).split('\\"');
                  for (let t = 0; t < e.length; ++t) {
                    const s = e[t].indexOf('"');
                    if (-1 !== s) {
                      e[t] = e[t].slice(0, s);
                      e.length = t + 1;
                    }
                    e[t] = e[t].replaceAll(/\\(.)/g, "$1");
                  }
                  t = e.join('"');
                }
                return t;
              }
              function rfc5987decode(t) {
                const e = t.indexOf("'");
                if (-1 === e) return t;
                return textdecode(
                  t.slice(0, e),
                  t.slice(e + 1).replace(/^[^']*'/, "")
                );
              }
              function rfc2047decode(t) {
                return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)
                  ? t
                  : t.replaceAll(
                      /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                      function (t, e, s, i) {
                        if ("q" === s || "Q" === s)
                          return textdecode(
                            e,
                            (i = (i = i.replaceAll("_", " ")).replaceAll(
                              /=([0-9a-fA-F]{2})/g,
                              function (t, e) {
                                return String.fromCharCode(parseInt(e, 16));
                              }
                            ))
                          );
                        try {
                          i = atob(i);
                        } catch (t) {}
                        return textdecode(e, i);
                      }
                    );
              }
              return "";
            };
          var i = s(1);
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.PDFNetworkStream = void 0;
          var i = s(1),
            n = s(22);
          class NetworkManager {
            constructor(t, e = {}) {
              this.url = t;
              this.isHttp = /^https?:/i.test(t);
              this.httpHeaders =
                (this.isHttp && e.httpHeaders) || Object.create(null);
              this.withCredentials = e.withCredentials || !1;
              this.currXhrId = 0;
              this.pendingRequests = Object.create(null);
            }
            requestRange(t, e, s) {
              const i = { begin: t, end: e };
              for (const t in s) i[t] = s[t];
              return this.request(i);
            }
            requestFull(t) {
              return this.request(t);
            }
            request(t) {
              const e = new XMLHttpRequest(),
                s = this.currXhrId++,
                i = (this.pendingRequests[s] = { xhr: e });
              e.open("GET", this.url);
              e.withCredentials = this.withCredentials;
              for (const t in this.httpHeaders) {
                const s = this.httpHeaders[t];
                void 0 !== s && e.setRequestHeader(t, s);
              }
              if (this.isHttp && "begin" in t && "end" in t) {
                e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`);
                i.expectedStatus = 206;
              } else i.expectedStatus = 200;
              e.responseType = "arraybuffer";
              t.onError &&
                (e.onerror = function (s) {
                  t.onError(e.status);
                });
              e.onreadystatechange = this.onStateChange.bind(this, s);
              e.onprogress = this.onProgress.bind(this, s);
              i.onHeadersReceived = t.onHeadersReceived;
              i.onDone = t.onDone;
              i.onError = t.onError;
              i.onProgress = t.onProgress;
              e.send(null);
              return s;
            }
            onProgress(t, e) {
              const s = this.pendingRequests[t];
              s && s.onProgress?.(e);
            }
            onStateChange(t, e) {
              const s = this.pendingRequests[t];
              if (!s) return;
              const n = s.xhr;
              if (n.readyState >= 2 && s.onHeadersReceived) {
                s.onHeadersReceived();
                delete s.onHeadersReceived;
              }
              if (4 !== n.readyState) return;
              if (!(t in this.pendingRequests)) return;
              delete this.pendingRequests[t];
              if (0 === n.status && this.isHttp) {
                s.onError?.(n.status);
                return;
              }
              const a = n.status || 200;
              if (
                !(200 === a && 206 === s.expectedStatus) &&
                a !== s.expectedStatus
              ) {
                s.onError?.(n.status);
                return;
              }
              const r = (function getArrayBuffer(t) {
                const e = t.response;
                return "string" != typeof e
                  ? e
                  : (0, i.stringToBytes)(e).buffer;
              })(n);
              if (206 === a) {
                const t = n.getResponseHeader("Content-Range"),
                  e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
                s.onDone({ begin: parseInt(e[1], 10), chunk: r });
              } else
                r ? s.onDone({ begin: 0, chunk: r }) : s.onError?.(n.status);
            }
            getRequestXhr(t) {
              return this.pendingRequests[t].xhr;
            }
            isPendingRequest(t) {
              return t in this.pendingRequests;
            }
            abortRequest(t) {
              const e = this.pendingRequests[t].xhr;
              delete this.pendingRequests[t];
              e.abort();
            }
          }
          e.PDFNetworkStream = class PDFNetworkStream {
            constructor(t) {
              this._source = t;
              this._manager = new NetworkManager(t.url, {
                httpHeaders: t.httpHeaders,
                withCredentials: t.withCredentials,
              });
              this._rangeChunkSize = t.rangeChunkSize;
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            _onRangeRequestReaderClosed(t) {
              const e = this._rangeRequestReaders.indexOf(t);
              e >= 0 && this._rangeRequestReaders.splice(e, 1);
            }
            getFullReader() {
              (0, i.assert)(
                !this._fullRequestReader,
                "PDFNetworkStream.getFullReader can only be called once."
              );
              this._fullRequestReader = new PDFNetworkStreamFullRequestReader(
                this._manager,
                this._source
              );
              return this._fullRequestReader;
            }
            getRangeReader(t, e) {
              const s = new PDFNetworkStreamRangeRequestReader(
                this._manager,
                t,
                e
              );
              s.onClosed = this._onRangeRequestReaderClosed.bind(this);
              this._rangeRequestReaders.push(s);
              return s;
            }
            cancelAllRequests(t) {
              this._fullRequestReader?.cancel(t);
              for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
            }
          };
          class PDFNetworkStreamFullRequestReader {
            constructor(t, e) {
              this._manager = t;
              const s = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this),
              };
              this._url = e.url;
              this._fullRequestId = t.requestFull(s);
              this._headersReceivedCapability = new i.PromiseCapability();
              this._disableRange = e.disableRange || !1;
              this._contentLength = e.length;
              this._rangeChunkSize = e.rangeChunkSize;
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0);
              this._isStreamingSupported = !1;
              this._isRangeSupported = !1;
              this._cachedChunks = [];
              this._requests = [];
              this._done = !1;
              this._storedError = void 0;
              this._filename = null;
              this.onProgress = null;
            }
            _onHeadersReceived() {
              const t = this._fullRequestId,
                e = this._manager.getRequestXhr(t),
                getResponseHeader = (t) => e.getResponseHeader(t),
                { allowRangeRequests: s, suggestedLength: i } = (0,
                n.validateRangeRequestCapabilities)({
                  getResponseHeader: getResponseHeader,
                  isHttp: this._manager.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange,
                });
              s && (this._isRangeSupported = !0);
              this._contentLength = i || this._contentLength;
              this._filename = (0, n.extractFilenameFromHeader)(
                getResponseHeader
              );
              this._isRangeSupported && this._manager.abortRequest(t);
              this._headersReceivedCapability.resolve();
            }
            _onDone(t) {
              if (t)
                if (this._requests.length > 0) {
                  this._requests.shift().resolve({ value: t.chunk, done: !1 });
                } else this._cachedChunks.push(t.chunk);
              this._done = !0;
              if (!(this._cachedChunks.length > 0)) {
                for (const t of this._requests)
                  t.resolve({ value: void 0, done: !0 });
                this._requests.length = 0;
              }
            }
            _onError(t) {
              this._storedError = (0, n.createResponseStatusError)(
                t,
                this._url
              );
              this._headersReceivedCapability.reject(this._storedError);
              for (const t of this._requests) t.reject(this._storedError);
              this._requests.length = 0;
              this._cachedChunks.length = 0;
            }
            _onProgress(t) {
              this.onProgress?.({
                loaded: t.loaded,
                total: t.lengthComputable ? t.total : this._contentLength,
              });
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            get contentLength() {
              return this._contentLength;
            }
            get headersReady() {
              return this._headersReceivedCapability.promise;
            }
            async read() {
              if (this._storedError) throw this._storedError;
              if (this._cachedChunks.length > 0) {
                return { value: this._cachedChunks.shift(), done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const t = new i.PromiseCapability();
              this._requests.push(t);
              return t.promise;
            }
            cancel(t) {
              this._done = !0;
              this._headersReceivedCapability.reject(t);
              for (const t of this._requests)
                t.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._manager.isPendingRequest(this._fullRequestId) &&
                this._manager.abortRequest(this._fullRequestId);
              this._fullRequestReader = null;
            }
          }
          class PDFNetworkStreamRangeRequestReader {
            constructor(t, e, s) {
              this._manager = t;
              const i = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this),
              };
              this._url = t.url;
              this._requestId = t.requestRange(e, s, i);
              this._requests = [];
              this._queuedChunk = null;
              this._done = !1;
              this._storedError = void 0;
              this.onProgress = null;
              this.onClosed = null;
            }
            _close() {
              this.onClosed?.(this);
            }
            _onDone(t) {
              const e = t.chunk;
              if (this._requests.length > 0) {
                this._requests.shift().resolve({ value: e, done: !1 });
              } else this._queuedChunk = e;
              this._done = !0;
              for (const t of this._requests)
                t.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._close();
            }
            _onError(t) {
              this._storedError = (0, n.createResponseStatusError)(
                t,
                this._url
              );
              for (const t of this._requests) t.reject(this._storedError);
              this._requests.length = 0;
              this._queuedChunk = null;
            }
            _onProgress(t) {
              this.isStreamingSupported ||
                this.onProgress?.({ loaded: t.loaded });
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._storedError) throw this._storedError;
              if (null !== this._queuedChunk) {
                const t = this._queuedChunk;
                this._queuedChunk = null;
                return { value: t, done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const t = new i.PromiseCapability();
              this._requests.push(t);
              return t.promise;
            }
            cancel(t) {
              this._done = !0;
              for (const t of this._requests)
                t.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._manager.isPendingRequest(this._requestId) &&
                this._manager.abortRequest(this._requestId);
              this._close();
            }
          }
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.PDFFetchStream = void 0;
          var i = s(1),
            n = s(22);
          function createFetchOptions(t, e, s) {
            return {
              method: "GET",
              headers: t,
              signal: s.signal,
              mode: "cors",
              credentials: e ? "include" : "same-origin",
              redirect: "follow",
            };
          }
          function createHeaders(t) {
            const e = new Headers();
            for (const s in t) {
              const i = t[s];
              void 0 !== i && e.append(s, i);
            }
            return e;
          }
          function getArrayBuffer(t) {
            if (t instanceof Uint8Array) return t.buffer;
            if (t instanceof ArrayBuffer) return t;
            (0, i.warn)(`getArrayBuffer - unexpected data format: ${t}`);
            return new Uint8Array(t).buffer;
          }
          e.PDFFetchStream = class PDFFetchStream {
            constructor(t) {
              this.source = t;
              this.isHttp = /^https?:/i.test(t.url);
              this.httpHeaders = (this.isHttp && t.httpHeaders) || {};
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            getFullReader() {
              (0, i.assert)(
                !this._fullRequestReader,
                "PDFFetchStream.getFullReader can only be called once."
              );
              this._fullRequestReader = new PDFFetchStreamReader(this);
              return this._fullRequestReader;
            }
            getRangeReader(t, e) {
              if (e <= this._progressiveDataLength) return null;
              const s = new PDFFetchStreamRangeReader(this, t, e);
              this._rangeRequestReaders.push(s);
              return s;
            }
            cancelAllRequests(t) {
              this._fullRequestReader?.cancel(t);
              for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
            }
          };
          class PDFFetchStreamReader {
            constructor(t) {
              this._stream = t;
              this._reader = null;
              this._loaded = 0;
              this._filename = null;
              const e = t.source;
              this._withCredentials = e.withCredentials || !1;
              this._contentLength = e.length;
              this._headersCapability = new i.PromiseCapability();
              this._disableRange = e.disableRange || !1;
              this._rangeChunkSize = e.rangeChunkSize;
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0);
              this._abortController = new AbortController();
              this._isStreamingSupported = !e.disableStream;
              this._isRangeSupported = !e.disableRange;
              this._headers = createHeaders(this._stream.httpHeaders);
              const s = e.url;
              fetch(
                s,
                createFetchOptions(
                  this._headers,
                  this._withCredentials,
                  this._abortController
                )
              )
                .then((t) => {
                  if (!(0, n.validateResponseStatus)(t.status))
                    throw (0, n.createResponseStatusError)(t.status, s);
                  this._reader = t.body.getReader();
                  this._headersCapability.resolve();
                  const getResponseHeader = (e) => t.headers.get(e),
                    { allowRangeRequests: e, suggestedLength: a } = (0,
                    n.validateRangeRequestCapabilities)({
                      getResponseHeader: getResponseHeader,
                      isHttp: this._stream.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange,
                    });
                  this._isRangeSupported = e;
                  this._contentLength = a || this._contentLength;
                  this._filename = (0, n.extractFilenameFromHeader)(
                    getResponseHeader
                  );
                  !this._isStreamingSupported &&
                    this._isRangeSupported &&
                    this.cancel(new i.AbortException("Streaming is disabled."));
                })
                .catch(this._headersCapability.reject);
              this.onProgress = null;
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._headersCapability.promise;
              const { value: t, done: e } = await this._reader.read();
              if (e) return { value: t, done: e };
              this._loaded += t.byteLength;
              this.onProgress?.({
                loaded: this._loaded,
                total: this._contentLength,
              });
              return { value: getArrayBuffer(t), done: !1 };
            }
            cancel(t) {
              this._reader?.cancel(t);
              this._abortController.abort();
            }
          }
          class PDFFetchStreamRangeReader {
            constructor(t, e, s) {
              this._stream = t;
              this._reader = null;
              this._loaded = 0;
              const a = t.source;
              this._withCredentials = a.withCredentials || !1;
              this._readCapability = new i.PromiseCapability();
              this._isStreamingSupported = !a.disableStream;
              this._abortController = new AbortController();
              this._headers = createHeaders(this._stream.httpHeaders);
              this._headers.append("Range", `bytes=${e}-${s - 1}`);
              const r = a.url;
              fetch(
                r,
                createFetchOptions(
                  this._headers,
                  this._withCredentials,
                  this._abortController
                )
              )
                .then((t) => {
                  if (!(0, n.validateResponseStatus)(t.status))
                    throw (0, n.createResponseStatusError)(t.status, r);
                  this._readCapability.resolve();
                  this._reader = t.body.getReader();
                })
                .catch(this._readCapability.reject);
              this.onProgress = null;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              const { value: t, done: e } = await this._reader.read();
              if (e) return { value: t, done: e };
              this._loaded += t.byteLength;
              this.onProgress?.({ loaded: this._loaded });
              return { value: getArrayBuffer(t), done: !1 };
            }
            cancel(t) {
              this._reader?.cancel(t);
              this._abortController.abort();
            }
          }
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.TextLayerRenderTask = void 0;
          e.renderTextLayer = function renderTextLayer(t) {
            if (
              !t.textContentSource &&
              (t.textContent || t.textContentStream)
            ) {
              (0, n.deprecated)(
                "The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."
              );
              t.textContentSource = t.textContent || t.textContentStream;
            }
            const { container: e, viewport: s } = t,
              i = getComputedStyle(e),
              a = i.getPropertyValue("visibility"),
              r = parseFloat(i.getPropertyValue("--scale-factor"));
            "visible" === a &&
              (!r || Math.abs(r - s.scale) > 1e-5) &&
              console.error(
                "The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM."
              );
            const o = new TextLayerRenderTask(t);
            o._render();
            return o;
          };
          e.updateTextLayer = function updateTextLayer({
            container: t,
            viewport: e,
            textDivs: s,
            textDivProperties: i,
            isOffscreenCanvasSupported: a,
            mustRotate: r = !0,
            mustRescale: o = !0,
          }) {
            r && (0, n.setLayerDimensions)(t, { rotation: e.rotation });
            if (o) {
              const t = getCtx(0, a),
                n = {
                  prevFontSize: null,
                  prevFontFamily: null,
                  div: null,
                  scale: e.scale * (globalThis.devicePixelRatio || 1),
                  properties: null,
                  ctx: t,
                };
              for (const t of s) {
                n.properties = i.get(t);
                n.div = t;
                layout(n);
              }
            }
          };
          var i = s(1),
            n = s(6);
          const a = 30,
            r = 0.8,
            o = new Map();
          function getCtx(t, e) {
            let s;
            if (e && i.FeatureTest.isOffscreenCanvasSupported)
              s = new OffscreenCanvas(t, t).getContext("2d", { alpha: !1 });
            else {
              const e = document.createElement("canvas");
              e.width = e.height = t;
              s = e.getContext("2d", { alpha: !1 });
            }
            return s;
          }
          function appendText(t, e, s) {
            const n = document.createElement("span"),
              l = {
                angle: 0,
                canvasWidth: 0,
                hasText: "" !== e.str,
                hasEOL: e.hasEOL,
                fontSize: 0,
              };
            t._textDivs.push(n);
            const c = i.Util.transform(t._transform, e.transform);
            let h = Math.atan2(c[1], c[0]);
            const d = s[e.fontName];
            d.vertical && (h += Math.PI / 2);
            const u = Math.hypot(c[2], c[3]),
              p =
                u *
                (function getAscent(t, e) {
                  const s = o.get(t);
                  if (s) return s;
                  const i = getCtx(a, e);
                  i.font = `${a}px ${t}`;
                  const n = i.measureText("");
                  let l = n.fontBoundingBoxAscent,
                    c = Math.abs(n.fontBoundingBoxDescent);
                  if (l) {
                    const e = l / (l + c);
                    o.set(t, e);
                    i.canvas.width = i.canvas.height = 0;
                    return e;
                  }
                  i.strokeStyle = "red";
                  i.clearRect(0, 0, a, a);
                  i.strokeText("g", 0, 0);
                  let h = i.getImageData(0, 0, a, a).data;
                  c = 0;
                  for (let t = h.length - 1 - 3; t >= 0; t -= 4)
                    if (h[t] > 0) {
                      c = Math.ceil(t / 4 / a);
                      break;
                    }
                  i.clearRect(0, 0, a, a);
                  i.strokeText("A", 0, a);
                  h = i.getImageData(0, 0, a, a).data;
                  l = 0;
                  for (let t = 0, e = h.length; t < e; t += 4)
                    if (h[t] > 0) {
                      l = a - Math.floor(t / 4 / a);
                      break;
                    }
                  i.canvas.width = i.canvas.height = 0;
                  if (l) {
                    const e = l / (l + c);
                    o.set(t, e);
                    return e;
                  }
                  o.set(t, r);
                  return r;
                })(d.fontFamily, t._isOffscreenCanvasSupported);
            let f, g;
            if (0 === h) {
              f = c[4];
              g = c[5] - p;
            } else {
              f = c[4] + p * Math.sin(h);
              g = c[5] - p * Math.cos(h);
            }
            const m = "calc(var(--scale-factor)*",
              b = n.style;
            if (t._container === t._rootContainer) {
              b.left = `${((100 * f) / t._pageWidth).toFixed(2)}%`;
              b.top = `${((100 * g) / t._pageHeight).toFixed(2)}%`;
            } else {
              b.left = `${m}${f.toFixed(2)}px)`;
              b.top = `${m}${g.toFixed(2)}px)`;
            }
            b.fontSize = `${m}${u.toFixed(2)}px)`;
            b.fontFamily = d.fontFamily;
            l.fontSize = u;
            n.setAttribute("role", "presentation");
            n.textContent = e.str;
            n.dir = e.dir;
            t._fontInspectorEnabled && (n.dataset.fontName = e.fontName);
            0 !== h && (l.angle = h * (180 / Math.PI));
            let A = !1;
            if (e.str.length > 1) A = !0;
            else if (" " !== e.str && e.transform[0] !== e.transform[3]) {
              const t = Math.abs(e.transform[0]),
                s = Math.abs(e.transform[3]);
              t !== s && Math.max(t, s) / Math.min(t, s) > 1.5 && (A = !0);
            }
            A && (l.canvasWidth = d.vertical ? e.height : e.width);
            t._textDivProperties.set(n, l);
            t._isReadableStream && t._layoutText(n);
          }
          function layout(t) {
            const {
                div: e,
                scale: s,
                properties: i,
                ctx: n,
                prevFontSize: a,
                prevFontFamily: r,
              } = t,
              { style: o } = e;
            let l = "";
            if (0 !== i.canvasWidth && i.hasText) {
              const { fontFamily: c } = o,
                { canvasWidth: h, fontSize: d } = i;
              if (a !== d || r !== c) {
                n.font = `${d * s}px ${c}`;
                t.prevFontSize = d;
                t.prevFontFamily = c;
              }
              const { width: u } = n.measureText(e.textContent);
              u > 0 && (l = `scaleX(${(h * s) / u})`);
            }
            0 !== i.angle && (l = `rotate(${i.angle}deg) ${l}`);
            l.length > 0 && (o.transform = l);
          }
          class TextLayerRenderTask {
            constructor({
              textContentSource: t,
              container: e,
              viewport: s,
              textDivs: a,
              textDivProperties: r,
              textContentItemsStr: o,
              isOffscreenCanvasSupported: l,
            }) {
              this._textContentSource = t;
              this._isReadableStream = t instanceof ReadableStream;
              this._container = this._rootContainer = e;
              this._textDivs = a || [];
              this._textContentItemsStr = o || [];
              this._isOffscreenCanvasSupported = l;
              this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
              this._reader = null;
              this._textDivProperties = r || new WeakMap();
              this._canceled = !1;
              this._capability = new i.PromiseCapability();
              this._layoutTextParams = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: s.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: getCtx(0, l),
              };
              const {
                pageWidth: c,
                pageHeight: h,
                pageX: d,
                pageY: u,
              } = s.rawDims;
              this._transform = [1, 0, 0, -1, -d, u + h];
              this._pageWidth = c;
              this._pageHeight = h;
              (0, n.setLayerDimensions)(e, s);
              this._capability.promise
                .finally(() => {
                  this._layoutTextParams = null;
                })
                .catch(() => {});
            }
            get promise() {
              return this._capability.promise;
            }
            cancel() {
              this._canceled = !0;
              if (this._reader) {
                this._reader
                  .cancel(new i.AbortException("TextLayer task cancelled."))
                  .catch(() => {});
                this._reader = null;
              }
              this._capability.reject(
                new i.AbortException("TextLayer task cancelled.")
              );
            }
            _processItems(t, e) {
              for (const s of t)
                if (void 0 !== s.str) {
                  this._textContentItemsStr.push(s.str);
                  appendText(this, s, e);
                } else if (
                  "beginMarkedContentProps" === s.type ||
                  "beginMarkedContent" === s.type
                ) {
                  const t = this._container;
                  this._container = document.createElement("span");
                  this._container.classList.add("markedContent");
                  null !== s.id &&
                    this._container.setAttribute("id", `${s.id}`);
                  t.append(this._container);
                } else
                  "endMarkedContent" === s.type &&
                    (this._container = this._container.parentNode);
            }
            _layoutText(t) {
              const e = (this._layoutTextParams.properties =
                this._textDivProperties.get(t));
              this._layoutTextParams.div = t;
              layout(this._layoutTextParams);
              e.hasText && this._container.append(t);
              if (e.hasEOL) {
                const t = document.createElement("br");
                t.setAttribute("role", "presentation");
                this._container.append(t);
              }
            }
            _render() {
              const t = new i.PromiseCapability();
              let e = Object.create(null);
              if (this._isReadableStream) {
                const pump = () => {
                  this._reader.read().then(({ value: s, done: i }) => {
                    if (i) t.resolve();
                    else {
                      Object.assign(e, s.styles);
                      this._processItems(s.items, e);
                      pump();
                    }
                  }, t.reject);
                };
                this._reader = this._textContentSource.getReader();
                pump();
              } else {
                if (!this._textContentSource)
                  throw new Error(
                    'No "textContentSource" parameter specified.'
                  );
                {
                  const { items: e, styles: s } = this._textContentSource;
                  this._processItems(e, s);
                  t.resolve();
                }
              }
              t.promise.then(() => {
                e = null;
                !(function render(t) {
                  if (t._canceled) return;
                  const e = t._textDivs,
                    s = t._capability;
                  if (e.length > 1e5) s.resolve();
                  else {
                    if (!t._isReadableStream)
                      for (const s of e) t._layoutText(s);
                    s.resolve();
                  }
                })(this);
              }, this._capability.reject);
            }
          }
          e.TextLayerRenderTask = TextLayerRenderTask;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.AnnotationEditorLayer = void 0;
          var i = s(1),
            n = s(5),
            a = s(28),
            r = s(29),
            o = s(6);
          class AnnotationEditorLayer {
            #Ot;
            #Lt = !1;
            #Nt = this.pointerup.bind(this);
            #Bt = this.pointerdown.bind(this);
            #jt = new Map();
            #Ut = !1;
            #qt = !1;
            #Wt;
            static _initialized = !1;
            constructor(t) {
              if (!AnnotationEditorLayer._initialized) {
                AnnotationEditorLayer._initialized = !0;
                a.FreeTextEditor.initialize(t.l10n);
                r.InkEditor.initialize(t.l10n);
              }
              t.uiManager.registerEditorTypes([a.FreeTextEditor, r.InkEditor]);
              this.#Wt = t.uiManager;
              this.pageIndex = t.pageIndex;
              this.div = t.div;
              this.#Ot = t.accessibilityManager;
              this.#Wt.addLayer(this);
            }
            get isEmpty() {
              return 0 === this.#jt.size;
            }
            updateToolbar(t) {
              this.#Wt.updateToolbar(t);
            }
            updateMode(t = this.#Wt.getMode()) {
              this.#Gt();
              if (t === i.AnnotationEditorType.INK) {
                this.addInkEditorIfNeeded(!1);
                this.disableClick();
              } else this.enableClick();
              this.#Wt.unselectAll();
              if (t !== i.AnnotationEditorType.NONE) {
                this.div.classList.toggle(
                  "freeTextEditing",
                  t === i.AnnotationEditorType.FREETEXT
                );
                this.div.classList.toggle(
                  "inkEditing",
                  t === i.AnnotationEditorType.INK
                );
                this.div.hidden = !1;
              }
            }
            addInkEditorIfNeeded(t) {
              if (!t && this.#Wt.getMode() !== i.AnnotationEditorType.INK)
                return;
              if (!t)
                for (const t of this.#jt.values())
                  if (t.isEmpty()) {
                    t.setInBackground();
                    return;
                  }
              this.#Ht({ offsetX: 0, offsetY: 0 }).setInBackground();
            }
            setEditingState(t) {
              this.#Wt.setEditingState(t);
            }
            addCommands(t) {
              this.#Wt.addCommands(t);
            }
            enable() {
              this.div.style.pointerEvents = "auto";
              for (const t of this.#jt.values()) t.enableEditing();
            }
            disable() {
              this.div.style.pointerEvents = "none";
              for (const t of this.#jt.values()) t.disableEditing();
              this.#Gt();
              this.isEmpty && (this.div.hidden = !0);
            }
            setActiveEditor(t) {
              this.#Wt.getActive() !== t && this.#Wt.setActiveEditor(t);
            }
            enableClick() {
              this.div.addEventListener("pointerdown", this.#Bt);
              this.div.addEventListener("pointerup", this.#Nt);
            }
            disableClick() {
              this.div.removeEventListener("pointerdown", this.#Bt);
              this.div.removeEventListener("pointerup", this.#Nt);
            }
            attach(t) {
              this.#jt.set(t.id, t);
            }
            detach(t) {
              this.#jt.delete(t.id);
              this.#Ot?.removePointerInTextLayer(t.contentDiv);
            }
            remove(t) {
              this.#Wt.removeEditor(t);
              this.detach(t);
              t.div.style.display = "none";
              setTimeout(() => {
                t.div.style.display = "";
                t.div.remove();
                t.isAttachedToDOM = !1;
                document.activeElement === document.body &&
                  this.#Wt.focusMainContainer();
              }, 0);
              this.#qt || this.addInkEditorIfNeeded(!1);
            }
            #zt(t) {
              if (t.parent !== this) {
                this.attach(t);
                t.parent?.detach(t);
                t.setParent(this);
                if (t.div && t.isAttachedToDOM) {
                  t.div.remove();
                  this.div.append(t.div);
                }
              }
            }
            add(t) {
              this.#zt(t);
              this.#Wt.addEditor(t);
              this.attach(t);
              if (!t.isAttachedToDOM) {
                const e = t.render();
                this.div.append(e);
                t.isAttachedToDOM = !0;
              }
              this.moveEditorInDOM(t);
              t.onceAdded();
              this.#Wt.addToAnnotationStorage(t);
            }
            moveEditorInDOM(t) {
              this.#Ot?.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
            }
            addOrRebuild(t) {
              t.needsToBeRebuilt() ? t.rebuild() : this.add(t);
            }
            addANewEditor(t) {
              this.addCommands({
                cmd: () => {
                  this.addOrRebuild(t);
                },
                undo: () => {
                  t.remove();
                },
                mustExec: !0,
              });
            }
            addUndoableEditor(t) {
              this.addCommands({
                cmd: () => {
                  this.addOrRebuild(t);
                },
                undo: () => {
                  t.remove();
                },
                mustExec: !1,
              });
            }
            getNextId() {
              return this.#Wt.getId();
            }
            #Vt(t) {
              switch (this.#Wt.getMode()) {
                case i.AnnotationEditorType.FREETEXT:
                  return new a.FreeTextEditor(t);
                case i.AnnotationEditorType.INK:
                  return new r.InkEditor(t);
              }
              return null;
            }
            deserialize(t) {
              switch (t.annotationType) {
                case i.AnnotationEditorType.FREETEXT:
                  return a.FreeTextEditor.deserialize(t, this, this.#Wt);
                case i.AnnotationEditorType.INK:
                  return r.InkEditor.deserialize(t, this, this.#Wt);
              }
              return null;
            }
            #Ht(t) {
              const e = this.getNextId(),
                s = this.#Vt({
                  parent: this,
                  id: e,
                  x: t.offsetX,
                  y: t.offsetY,
                  uiManager: this.#Wt,
                });
              s && this.add(s);
              return s;
            }
            setSelected(t) {
              this.#Wt.setSelected(t);
            }
            toggleSelected(t) {
              this.#Wt.toggleSelected(t);
            }
            isSelected(t) {
              return this.#Wt.isSelected(t);
            }
            unselect(t) {
              this.#Wt.unselect(t);
            }
            pointerup(t) {
              const { isMac: e } = i.FeatureTest.platform;
              if (
                !(0 !== t.button || (t.ctrlKey && e)) &&
                t.target === this.div &&
                this.#Ut
              ) {
                this.#Ut = !1;
                this.#Lt ? this.#Ht(t) : (this.#Lt = !0);
              }
            }
            pointerdown(t) {
              const { isMac: e } = i.FeatureTest.platform;
              if (0 !== t.button || (t.ctrlKey && e)) return;
              if (t.target !== this.div) return;
              this.#Ut = !0;
              const s = this.#Wt.getActive();
              this.#Lt = !s || s.isEmpty();
            }
            drop(t) {
              const e = t.dataTransfer.getData("text/plain"),
                s = this.#Wt.getEditor(e);
              if (!s) return;
              t.preventDefault();
              t.dataTransfer.dropEffect = "move";
              this.#zt(s);
              const i = this.div.getBoundingClientRect(),
                n = t.clientX - i.x,
                a = t.clientY - i.y;
              s.translate(n - s.startX, a - s.startY);
              this.moveEditorInDOM(s);
              s.div.focus();
            }
            dragover(t) {
              t.preventDefault();
            }
            destroy() {
              this.#Wt.getActive()?.parent === this &&
                this.#Wt.setActiveEditor(null);
              for (const t of this.#jt.values()) {
                this.#Ot?.removePointerInTextLayer(t.contentDiv);
                t.setParent(null);
                t.isAttachedToDOM = !1;
                t.div.remove();
              }
              this.div = null;
              this.#jt.clear();
              this.#Wt.removeLayer(this);
            }
            #Gt() {
              this.#qt = !0;
              for (const t of this.#jt.values()) t.isEmpty() && t.remove();
              this.#qt = !1;
            }
            render({ viewport: t }) {
              this.viewport = t;
              (0, o.setLayerDimensions)(this.div, t);
              (0, n.bindEvents)(this, this.div, ["dragover", "drop"]);
              for (const t of this.#Wt.getEditors(this.pageIndex)) this.add(t);
              this.updateMode();
            }
            update({ viewport: t }) {
              this.#Wt.commitOrRemove();
              this.viewport = t;
              (0, o.setLayerDimensions)(this.div, { rotation: t.rotation });
              this.updateMode();
            }
            get pageDimensions() {
              const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
              return [t, e];
            }
          }
          e.AnnotationEditorLayer = AnnotationEditorLayer;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.FreeTextEditor = void 0;
          var i = s(1),
            n = s(5),
            a = s(4);
          class FreeTextEditor extends a.AnnotationEditor {
            #Xt = this.editorDivBlur.bind(this);
            #$t = this.editorDivFocus.bind(this);
            #Kt = this.editorDivInput.bind(this);
            #Yt = this.editorDivKeydown.bind(this);
            #Jt;
            #Qt = "";
            #Zt = `${this.id}-editor`;
            #te = !1;
            #ee;
            static _freeTextDefaultContent = "";
            static _l10nPromise;
            static _internalPadding = 0;
            static _defaultColor = null;
            static _defaultFontSize = 10;
            static _keyboardManager = new n.KeyboardManager([
              [
                ["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"],
                FreeTextEditor.prototype.commitOrRemove,
              ],
            ]);
            static _type = "freetext";
            constructor(t) {
              super({ ...t, name: "freeTextEditor" });
              this.#Jt =
                t.color ||
                FreeTextEditor._defaultColor ||
                a.AnnotationEditor._defaultLineColor;
              this.#ee = t.fontSize || FreeTextEditor._defaultFontSize;
            }
            static initialize(t) {
              this._l10nPromise = new Map(
                [
                  "free_text2_default_content",
                  "editor_free_text2_aria_label",
                ].map((e) => [e, t.get(e)])
              );
              const e = getComputedStyle(document.documentElement);
              this._internalPadding = parseFloat(
                e.getPropertyValue("--freetext-padding")
              );
            }
            static updateDefaultParams(t, e) {
              switch (t) {
                case i.AnnotationEditorParamsType.FREETEXT_SIZE:
                  FreeTextEditor._defaultFontSize = e;
                  break;
                case i.AnnotationEditorParamsType.FREETEXT_COLOR:
                  FreeTextEditor._defaultColor = e;
              }
            }
            updateParams(t, e) {
              switch (t) {
                case i.AnnotationEditorParamsType.FREETEXT_SIZE:
                  this.#se(e);
                  break;
                case i.AnnotationEditorParamsType.FREETEXT_COLOR:
                  this.#ie(e);
              }
            }
            static get defaultPropertiesToUpdate() {
              return [
                [
                  i.AnnotationEditorParamsType.FREETEXT_SIZE,
                  FreeTextEditor._defaultFontSize,
                ],
                [
                  i.AnnotationEditorParamsType.FREETEXT_COLOR,
                  FreeTextEditor._defaultColor ||
                    a.AnnotationEditor._defaultLineColor,
                ],
              ];
            }
            get propertiesToUpdate() {
              return [
                [i.AnnotationEditorParamsType.FREETEXT_SIZE, this.#ee],
                [i.AnnotationEditorParamsType.FREETEXT_COLOR, this.#Jt],
              ];
            }
            #se(t) {
              const setFontsize = (t) => {
                  this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`;
                  this.translate(0, -(t - this.#ee) * this.parentScale);
                  this.#ee = t;
                  this.#ne();
                },
                e = this.#ee;
              this.addCommands({
                cmd: () => {
                  setFontsize(t);
                },
                undo: () => {
                  setFontsize(e);
                },
                mustExec: !0,
                type: i.AnnotationEditorParamsType.FREETEXT_SIZE,
                overwriteIfSameType: !0,
                keepUndo: !0,
              });
            }
            #ie(t) {
              const e = this.#Jt;
              this.addCommands({
                cmd: () => {
                  this.#Jt = this.editorDiv.style.color = t;
                },
                undo: () => {
                  this.#Jt = this.editorDiv.style.color = e;
                },
                mustExec: !0,
                type: i.AnnotationEditorParamsType.FREETEXT_COLOR,
                overwriteIfSameType: !0,
                keepUndo: !0,
              });
            }
            getInitialTranslation() {
              const t = this.parentScale;
              return [
                -FreeTextEditor._internalPadding * t,
                -(FreeTextEditor._internalPadding + this.#ee) * t,
              ];
            }
            rebuild() {
              super.rebuild();
              null !== this.div &&
                (this.isAttachedToDOM || this.parent.add(this));
            }
            enableEditMode() {
              if (!this.isInEditMode()) {
                this.parent.setEditingState(!1);
                this.parent.updateToolbar(i.AnnotationEditorType.FREETEXT);
                super.enableEditMode();
                this.overlayDiv.classList.remove("enabled");
                this.editorDiv.contentEditable = !0;
                this.div.draggable = !1;
                this.div.removeAttribute("aria-activedescendant");
                this.editorDiv.addEventListener("keydown", this.#Yt);
                this.editorDiv.addEventListener("focus", this.#$t);
                this.editorDiv.addEventListener("blur", this.#Xt);
                this.editorDiv.addEventListener("input", this.#Kt);
              }
            }
            disableEditMode() {
              if (this.isInEditMode()) {
                this.parent.setEditingState(!0);
                super.disableEditMode();
                this.overlayDiv.classList.add("enabled");
                this.editorDiv.contentEditable = !1;
                this.div.setAttribute("aria-activedescendant", this.#Zt);
                this.div.draggable = !0;
                this.editorDiv.removeEventListener("keydown", this.#Yt);
                this.editorDiv.removeEventListener("focus", this.#$t);
                this.editorDiv.removeEventListener("blur", this.#Xt);
                this.editorDiv.removeEventListener("input", this.#Kt);
                this.div.focus({ preventScroll: !0 });
                this.isEditing = !1;
                this.parent.div.classList.add("freeTextEditing");
              }
            }
            focusin(t) {
              super.focusin(t);
              t.target !== this.editorDiv && this.editorDiv.focus();
            }
            onceAdded() {
              if (!this.width) {
                this.enableEditMode();
                this.editorDiv.focus();
              }
            }
            isEmpty() {
              return !this.editorDiv || "" === this.editorDiv.innerText.trim();
            }
            remove() {
              this.isEditing = !1;
              this.parent.setEditingState(!0);
              this.parent.div.classList.add("freeTextEditing");
              super.remove();
            }
            #ae() {
              const t = this.editorDiv.getElementsByTagName("div");
              if (0 === t.length) return this.editorDiv.innerText;
              const e = [];
              for (const s of t) e.push(s.innerText.replace(/\r\n?|\n/, ""));
              return e.join("\n");
            }
            #ne() {
              const [t, e] = this.parentDimensions;
              let s;
              if (this.isAttachedToDOM) s = this.div.getBoundingClientRect();
              else {
                const { currentLayer: t, div: e } = this,
                  i = e.style.display;
                e.style.display = "hidden";
                t.div.append(this.div);
                s = e.getBoundingClientRect();
                e.remove();
                e.style.display = i;
              }
              this.width = s.width / t;
              this.height = s.height / e;
            }
            commit() {
              if (this.isInEditMode()) {
                super.commit();
                if (!this.#te) {
                  this.#te = !0;
                  this.parent.addUndoableEditor(this);
                }
                this.disableEditMode();
                this.#Qt = this.#ae().trimEnd();
                this.#ne();
              }
            }
            shouldGetKeyboardEvents() {
              return this.isInEditMode();
            }
            dblclick(t) {
              this.enableEditMode();
              this.editorDiv.focus();
            }
            keydown(t) {
              if (t.target === this.div && "Enter" === t.key) {
                this.enableEditMode();
                this.editorDiv.focus();
              }
            }
            editorDivKeydown(t) {
              FreeTextEditor._keyboardManager.exec(this, t);
            }
            editorDivFocus(t) {
              this.isEditing = !0;
            }
            editorDivBlur(t) {
              this.isEditing = !1;
            }
            editorDivInput(t) {
              this.parent.div.classList.toggle(
                "freeTextEditing",
                this.isEmpty()
              );
            }
            disableEditing() {
              this.editorDiv.setAttribute("role", "comment");
              this.editorDiv.removeAttribute("aria-multiline");
            }
            enableEditing() {
              this.editorDiv.setAttribute("role", "textbox");
              this.editorDiv.setAttribute("aria-multiline", !0);
            }
            render() {
              if (this.div) return this.div;
              let t, e;
              if (this.width) {
                t = this.x;
                e = this.y;
              }
              super.render();
              this.editorDiv = document.createElement("div");
              this.editorDiv.className = "internal";
              this.editorDiv.setAttribute("id", this.#Zt);
              this.enableEditing();
              FreeTextEditor._l10nPromise
                .get("editor_free_text2_aria_label")
                .then((t) => this.editorDiv?.setAttribute("aria-label", t));
              FreeTextEditor._l10nPromise
                .get("free_text2_default_content")
                .then((t) =>
                  this.editorDiv?.setAttribute("default-content", t)
                );
              this.editorDiv.contentEditable = !0;
              const { style: s } = this.editorDiv;
              s.fontSize = `calc(${this.#ee}px * var(--scale-factor))`;
              s.color = this.#Jt;
              this.div.append(this.editorDiv);
              this.overlayDiv = document.createElement("div");
              this.overlayDiv.classList.add("overlay", "enabled");
              this.div.append(this.overlayDiv);
              (0, n.bindEvents)(this, this.div, ["dblclick", "keydown"]);
              if (this.width) {
                const [s, i] = this.parentDimensions;
                this.setAt(t * s, e * i, this.width * s, this.height * i);
                for (const t of this.#Qt.split("\n")) {
                  const e = document.createElement("div");
                  e.append(
                    t
                      ? document.createTextNode(t)
                      : document.createElement("br")
                  );
                  this.editorDiv.append(e);
                }
                this.div.draggable = !0;
                this.editorDiv.contentEditable = !1;
              } else {
                this.div.draggable = !1;
                this.editorDiv.contentEditable = !0;
              }
              return this.div;
            }
            get contentDiv() {
              return this.editorDiv;
            }
            static deserialize(t, e, s) {
              const n = super.deserialize(t, e, s);
              n.#ee = t.fontSize;
              n.#Jt = i.Util.makeHexColor(...t.color);
              n.#Qt = t.value;
              return n;
            }
            serialize() {
              if (this.isEmpty()) return null;
              const t = FreeTextEditor._internalPadding * this.parentScale,
                e = this.getRect(t, t),
                s = a.AnnotationEditor._colorManager.convert(
                  this.isAttachedToDOM
                    ? getComputedStyle(this.editorDiv).color
                    : this.#Jt
                );
              return {
                annotationType: i.AnnotationEditorType.FREETEXT,
                color: s,
                fontSize: this.#ee,
                value: this.#Qt,
                pageIndex: this.pageIndex,
                rect: e,
                rotation: this.rotation,
              };
            }
          }
          e.FreeTextEditor = FreeTextEditor;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.InkEditor = void 0;
          Object.defineProperty(e, "fitCurve", {
            enumerable: !0,
            get: function () {
              return a.fitCurve;
            },
          });
          var i = s(1),
            n = s(4),
            a = s(30),
            r = s(5);
          const o = 16;
          class InkEditor extends n.AnnotationEditor {
            #re = 0;
            #oe = 0;
            #le = 0;
            #ce = this.canvasPointermove.bind(this);
            #he = this.canvasPointerleave.bind(this);
            #de = this.canvasPointerup.bind(this);
            #ue = this.canvasPointerdown.bind(this);
            #pe = !1;
            #fe = !1;
            #ge = null;
            #me = null;
            #be = 0;
            #Ae = 0;
            #_e = null;
            static _defaultColor = null;
            static _defaultOpacity = 1;
            static _defaultThickness = 1;
            static _l10nPromise;
            static _type = "ink";
            constructor(t) {
              super({ ...t, name: "inkEditor" });
              this.color = t.color || null;
              this.thickness = t.thickness || null;
              this.opacity = t.opacity || null;
              this.paths = [];
              this.bezierPath2D = [];
              this.currentPath = [];
              this.scaleFactor = 1;
              this.translationX = this.translationY = 0;
              this.x = 0;
              this.y = 0;
            }
            static initialize(t) {
              this._l10nPromise = new Map(
                ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map(
                  (e) => [e, t.get(e)]
                )
              );
            }
            static updateDefaultParams(t, e) {
              switch (t) {
                case i.AnnotationEditorParamsType.INK_THICKNESS:
                  InkEditor._defaultThickness = e;
                  break;
                case i.AnnotationEditorParamsType.INK_COLOR:
                  InkEditor._defaultColor = e;
                  break;
                case i.AnnotationEditorParamsType.INK_OPACITY:
                  InkEditor._defaultOpacity = e / 100;
              }
            }
            updateParams(t, e) {
              switch (t) {
                case i.AnnotationEditorParamsType.INK_THICKNESS:
                  this.#ye(e);
                  break;
                case i.AnnotationEditorParamsType.INK_COLOR:
                  this.#ie(e);
                  break;
                case i.AnnotationEditorParamsType.INK_OPACITY:
                  this.#ve(e);
              }
            }
            static get defaultPropertiesToUpdate() {
              return [
                [
                  i.AnnotationEditorParamsType.INK_THICKNESS,
                  InkEditor._defaultThickness,
                ],
                [
                  i.AnnotationEditorParamsType.INK_COLOR,
                  InkEditor._defaultColor ||
                    n.AnnotationEditor._defaultLineColor,
                ],
                [
                  i.AnnotationEditorParamsType.INK_OPACITY,
                  Math.round(100 * InkEditor._defaultOpacity),
                ],
              ];
            }
            get propertiesToUpdate() {
              return [
                [
                  i.AnnotationEditorParamsType.INK_THICKNESS,
                  this.thickness || InkEditor._defaultThickness,
                ],
                [
                  i.AnnotationEditorParamsType.INK_COLOR,
                  this.color ||
                    InkEditor._defaultColor ||
                    n.AnnotationEditor._defaultLineColor,
                ],
                [
                  i.AnnotationEditorParamsType.INK_OPACITY,
                  Math.round(100 * (this.opacity ?? InkEditor._defaultOpacity)),
                ],
              ];
            }
            #ye(t) {
              const e = this.thickness;
              this.addCommands({
                cmd: () => {
                  this.thickness = t;
                  this.#Se();
                },
                undo: () => {
                  this.thickness = e;
                  this.#Se();
                },
                mustExec: !0,
                type: i.AnnotationEditorParamsType.INK_THICKNESS,
                overwriteIfSameType: !0,
                keepUndo: !0,
              });
            }
            #ie(t) {
              const e = this.color;
              this.addCommands({
                cmd: () => {
                  this.color = t;
                  this.#xe();
                },
                undo: () => {
                  this.color = e;
                  this.#xe();
                },
                mustExec: !0,
                type: i.AnnotationEditorParamsType.INK_COLOR,
                overwriteIfSameType: !0,
                keepUndo: !0,
              });
            }
            #ve(t) {
              t /= 100;
              const e = this.opacity;
              this.addCommands({
                cmd: () => {
                  this.opacity = t;
                  this.#xe();
                },
                undo: () => {
                  this.opacity = e;
                  this.#xe();
                },
                mustExec: !0,
                type: i.AnnotationEditorParamsType.INK_OPACITY,
                overwriteIfSameType: !0,
                keepUndo: !0,
              });
            }
            rebuild() {
              super.rebuild();
              if (null !== this.div) {
                if (!this.canvas) {
                  this.#Ce();
                  this.#Ee();
                }
                if (!this.isAttachedToDOM) {
                  this.parent.add(this);
                  this.#Pe();
                }
                this.#Se();
              }
            }
            remove() {
              if (null !== this.canvas) {
                this.isEmpty() || this.commit();
                this.canvas.width = this.canvas.height = 0;
                this.canvas.remove();
                this.canvas = null;
                this.#me.disconnect();
                this.#me = null;
                super.remove();
              }
            }
            setParent(t) {
              !this.parent && t
                ? this._uiManager.removeShouldRescale(this)
                : this.parent &&
                  null === t &&
                  this._uiManager.addShouldRescale(this);
              super.setParent(t);
            }
            onScaleChanging() {
              const [t, e] = this.parentDimensions,
                s = this.width * t,
                i = this.height * e;
              this.setDimensions(s, i);
            }
            enableEditMode() {
              if (!this.#pe && null !== this.canvas) {
                super.enableEditMode();
                this.div.draggable = !1;
                this.canvas.addEventListener("pointerdown", this.#ue);
                this.canvas.addEventListener("pointerup", this.#de);
              }
            }
            disableEditMode() {
              if (this.isInEditMode() && null !== this.canvas) {
                super.disableEditMode();
                this.div.draggable = !this.isEmpty();
                this.div.classList.remove("editing");
                this.canvas.removeEventListener("pointerdown", this.#ue);
                this.canvas.removeEventListener("pointerup", this.#de);
              }
            }
            onceAdded() {
              this.div.draggable = !this.isEmpty();
            }
            isEmpty() {
              return (
                0 === this.paths.length ||
                (1 === this.paths.length && 0 === this.paths[0].length)
              );
            }
            #we() {
              const {
                parentRotation: t,
                parentDimensions: [e, s],
              } = this;
              switch (t) {
                case 90:
                  return [0, s, s, e];
                case 180:
                  return [e, s, e, s];
                case 270:
                  return [e, 0, s, e];
                default:
                  return [0, 0, e, s];
              }
            }
            #Te() {
              const {
                ctx: t,
                color: e,
                opacity: s,
                thickness: i,
                parentScale: n,
                scaleFactor: a,
              } = this;
              t.lineWidth = (i * n) / a;
              t.lineCap = "round";
              t.lineJoin = "round";
              t.miterLimit = 10;
              t.strokeStyle = `${e}${(0, r.opacityToHex)(s)}`;
            }
            #Fe(t, e) {
              this.isEditing = !0;
              if (!this.#fe) {
                this.#fe = !0;
                this.#Pe();
                this.thickness ||= InkEditor._defaultThickness;
                this.color ||=
                  InkEditor._defaultColor ||
                  n.AnnotationEditor._defaultLineColor;
                this.opacity ??= InkEditor._defaultOpacity;
              }
              this.currentPath.push([t, e]);
              this.#ge = null;
              this.#Te();
              this.ctx.beginPath();
              this.ctx.moveTo(t, e);
              this.#_e = () => {
                if (this.#_e) {
                  if (this.#ge) {
                    if (this.isEmpty()) {
                      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                      this.ctx.clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height
                      );
                    } else this.#xe();
                    this.ctx.lineTo(...this.#ge);
                    this.#ge = null;
                    this.ctx.stroke();
                  }
                  window.requestAnimationFrame(this.#_e);
                }
              };
              window.requestAnimationFrame(this.#_e);
            }
            #ke(t, e) {
              const [s, i] = this.currentPath.at(-1);
              if (t !== s || e !== i) {
                this.currentPath.push([t, e]);
                this.#ge = [t, e];
              }
            }
            #Me(t, e) {
              this.ctx.closePath();
              this.#_e = null;
              t = Math.min(Math.max(t, 0), this.canvas.width);
              e = Math.min(Math.max(e, 0), this.canvas.height);
              const [s, i] = this.currentPath.at(-1);
              (t === s && e === i) || this.currentPath.push([t, e]);
              let n;
              if (1 !== this.currentPath.length)
                n = (0, a.fitCurve)(this.currentPath, 30, null);
              else {
                const s = [t, e];
                n = [[s, s.slice(), s.slice(), s]];
              }
              const r = InkEditor.#Re(n);
              this.currentPath.length = 0;
              this.addCommands({
                cmd: () => {
                  this.paths.push(n);
                  this.bezierPath2D.push(r);
                  this.rebuild();
                },
                undo: () => {
                  this.paths.pop();
                  this.bezierPath2D.pop();
                  if (0 === this.paths.length) this.remove();
                  else {
                    if (!this.canvas) {
                      this.#Ce();
                      this.#Ee();
                    }
                    this.#Se();
                  }
                },
                mustExec: !0,
              });
            }
            #xe() {
              if (this.isEmpty()) {
                this.#De();
                return;
              }
              this.#Te();
              const { canvas: t, ctx: e } = this;
              e.setTransform(1, 0, 0, 1, 0, 0);
              e.clearRect(0, 0, t.width, t.height);
              this.#De();
              for (const t of this.bezierPath2D) e.stroke(t);
            }
            commit() {
              if (!this.#pe) {
                super.commit();
                this.isEditing = !1;
                this.disableEditMode();
                this.setInForeground();
                this.#pe = !0;
                this.div.classList.add("disabled");
                this.#Se(!0);
                this.parent.addInkEditorIfNeeded(!0);
                this.parent.moveEditorInDOM(this);
                this.div.focus({ preventScroll: !0 });
              }
            }
            focusin(t) {
              super.focusin(t);
              this.enableEditMode();
            }
            canvasPointerdown(t) {
              if (0 === t.button && this.isInEditMode() && !this.#pe) {
                this.setInForeground();
                "mouse" !== t.type && this.div.focus();
                t.stopPropagation();
                this.canvas.addEventListener("pointerleave", this.#he);
                this.canvas.addEventListener("pointermove", this.#ce);
                this.#Fe(t.offsetX, t.offsetY);
              }
            }
            canvasPointermove(t) {
              t.stopPropagation();
              this.#ke(t.offsetX, t.offsetY);
            }
            canvasPointerup(t) {
              if (
                0 === t.button &&
                this.isInEditMode() &&
                0 !== this.currentPath.length
              ) {
                t.stopPropagation();
                this.#Ie(t);
                this.setInBackground();
              }
            }
            canvasPointerleave(t) {
              this.#Ie(t);
              this.setInBackground();
            }
            #Ie(t) {
              this.#Me(t.offsetX, t.offsetY);
              this.canvas.removeEventListener("pointerleave", this.#he);
              this.canvas.removeEventListener("pointermove", this.#ce);
              this.addToAnnotationStorage();
            }
            #Ce() {
              this.canvas = document.createElement("canvas");
              this.canvas.width = this.canvas.height = 0;
              this.canvas.className = "inkEditorCanvas";
              InkEditor._l10nPromise
                .get("editor_ink_canvas_aria_label")
                .then((t) => this.canvas?.setAttribute("aria-label", t));
              this.div.append(this.canvas);
              this.ctx = this.canvas.getContext("2d");
            }
            #Ee() {
              this.#me = new ResizeObserver((t) => {
                const e = t[0].contentRect;
                e.width && e.height && this.setDimensions(e.width, e.height);
              });
              this.#me.observe(this.div);
            }
            render() {
              if (this.div) return this.div;
              let t, e;
              if (this.width) {
                t = this.x;
                e = this.y;
              }
              super.render();
              InkEditor._l10nPromise
                .get("editor_ink2_aria_label")
                .then((t) => this.div?.setAttribute("aria-label", t));
              const [s, i, n, a] = this.#we();
              this.setAt(s, i, 0, 0);
              this.setDims(n, a);
              this.#Ce();
              if (this.width) {
                const [s, i] = this.parentDimensions;
                this.setAt(t * s, e * i, this.width * s, this.height * i);
                this.#fe = !0;
                this.#Pe();
                this.setDims(this.width * s, this.height * i);
                this.#xe();
                this.#Oe();
                this.div.classList.add("disabled");
              } else {
                this.div.classList.add("editing");
                this.enableEditMode();
              }
              this.#Ee();
              return this.div;
            }
            #Pe() {
              if (!this.#fe) return;
              const [t, e] = this.parentDimensions;
              this.canvas.width = Math.ceil(this.width * t);
              this.canvas.height = Math.ceil(this.height * e);
              this.#De();
            }
            setDimensions(t, e) {
              const s = Math.round(t),
                i = Math.round(e);
              if (this.#be === s && this.#Ae === i) return;
              this.#be = s;
              this.#Ae = i;
              this.canvas.style.visibility = "hidden";
              if (this.#re && Math.abs(this.#re - t / e) > 0.01) {
                e = Math.ceil(t / this.#re);
                this.setDims(t, e);
              }
              const [n, a] = this.parentDimensions;
              this.width = t / n;
              this.height = e / a;
              this.#pe && this.#Le(t, e);
              this.#Pe();
              this.#xe();
              this.canvas.style.visibility = "visible";
              this.fixDims();
            }
            #Le(t, e) {
              const s = this.#Ne(),
                i = (t - s) / this.#le,
                n = (e - s) / this.#oe;
              this.scaleFactor = Math.min(i, n);
            }
            #De() {
              const t = this.#Ne() / 2;
              this.ctx.setTransform(
                this.scaleFactor,
                0,
                0,
                this.scaleFactor,
                this.translationX * this.scaleFactor + t,
                this.translationY * this.scaleFactor + t
              );
            }
            static #Re(t) {
              const e = new Path2D();
              for (let s = 0, i = t.length; s < i; s++) {
                const [i, n, a, r] = t[s];
                0 === s && e.moveTo(...i);
                e.bezierCurveTo(n[0], n[1], a[0], a[1], r[0], r[1]);
              }
              return e;
            }
            #Be(t, e, s, i) {
              const n = [],
                a = this.thickness / 2;
              let r, o;
              for (const l of this.paths) {
                r = [];
                o = [];
                for (let n = 0, c = l.length; n < c; n++) {
                  const [c, h, d, u] = l[n],
                    p = t * (c[0] + e) + a,
                    f = i - t * (c[1] + s) - a,
                    g = t * (h[0] + e) + a,
                    m = i - t * (h[1] + s) - a,
                    b = t * (d[0] + e) + a,
                    A = i - t * (d[1] + s) - a,
                    _ = t * (u[0] + e) + a,
                    y = i - t * (u[1] + s) - a;
                  if (0 === n) {
                    r.push(p, f);
                    o.push(p, f);
                  }
                  r.push(g, m, b, A, _, y);
                  this.#je(p, f, g, m, b, A, _, y, 4, o);
                }
                n.push({ bezier: r, points: o });
              }
              return n;
            }
            #je(t, e, s, i, n, a, r, o, l, c) {
              if (this.#Ue(t, e, s, i, n, a, r, o)) c.push(r, o);
              else {
                for (let h = 1; h < l - 1; h++) {
                  const d = h / l,
                    u = 1 - d;
                  let p = d * t + u * s,
                    f = d * e + u * i,
                    g = d * s + u * n,
                    m = d * i + u * a;
                  p = d * p + u * g;
                  f = d * f + u * m;
                  g = d * g + u * (d * n + u * r);
                  m = d * m + u * (d * a + u * o);
                  p = d * p + u * g;
                  f = d * f + u * m;
                  c.push(p, f);
                }
                c.push(r, o);
              }
            }
            #Ue(t, e, s, i, n, a, r, o) {
              const l = (3 * s - 2 * t - r) ** 2,
                c = (3 * i - 2 * e - o) ** 2,
                h = (3 * n - t - 2 * r) ** 2,
                d = (3 * a - e - 2 * o) ** 2;
              return Math.max(l, h) + Math.max(c, d) <= 10;
            }
            #qe() {
              let t = 1 / 0,
                e = -1 / 0,
                s = 1 / 0,
                n = -1 / 0;
              for (const a of this.paths)
                for (const [r, o, l, c] of a) {
                  const a = i.Util.bezierBoundingBox(...r, ...o, ...l, ...c);
                  t = Math.min(t, a[0]);
                  s = Math.min(s, a[1]);
                  e = Math.max(e, a[2]);
                  n = Math.max(n, a[3]);
                }
              return [t, s, e, n];
            }
            #Ne() {
              return this.#pe
                ? Math.ceil(this.thickness * this.parentScale)
                : 0;
            }
            #Se(t = !1) {
              if (this.isEmpty()) return;
              if (!this.#pe) {
                this.#xe();
                return;
              }
              const e = this.#qe(),
                s = this.#Ne();
              this.#le = Math.max(o, e[2] - e[0]);
              this.#oe = Math.max(o, e[3] - e[1]);
              const i = Math.ceil(s + this.#le * this.scaleFactor),
                n = Math.ceil(s + this.#oe * this.scaleFactor),
                [a, r] = this.parentDimensions;
              this.width = i / a;
              this.height = n / r;
              this.#re = i / n;
              this.#Oe();
              const l = this.translationX,
                c = this.translationY;
              this.translationX = -e[0];
              this.translationY = -e[1];
              this.#Pe();
              this.#xe();
              this.#be = i;
              this.#Ae = n;
              this.setDims(i, n);
              const h = t ? s / this.scaleFactor / 2 : 0;
              this.translate(
                l - this.translationX - h,
                c - this.translationY - h
              );
            }
            #Oe() {
              const { style: t } = this.div;
              if (this.#re >= 1) {
                t.minHeight = "16px";
                t.minWidth = `${Math.round(this.#re * o)}px`;
              } else {
                t.minWidth = "16px";
                t.minHeight = `${Math.round(o / this.#re)}px`;
              }
            }
            static deserialize(t, e, s) {
              const n = super.deserialize(t, e, s);
              n.thickness = t.thickness;
              n.color = i.Util.makeHexColor(...t.color);
              n.opacity = t.opacity;
              const [a, r] = n.pageDimensions,
                l = n.width * a,
                c = n.height * r,
                h = n.parentScale,
                d = t.thickness / 2;
              n.#re = l / c;
              n.#pe = !0;
              n.#be = Math.round(l);
              n.#Ae = Math.round(c);
              for (const { bezier: e } of t.paths) {
                const t = [];
                n.paths.push(t);
                let s = h * (e[0] - d),
                  i = h * (c - e[1] - d);
                for (let n = 2, a = e.length; n < a; n += 6) {
                  const a = h * (e[n] - d),
                    r = h * (c - e[n + 1] - d),
                    o = h * (e[n + 2] - d),
                    l = h * (c - e[n + 3] - d),
                    u = h * (e[n + 4] - d),
                    p = h * (c - e[n + 5] - d);
                  t.push([
                    [s, i],
                    [a, r],
                    [o, l],
                    [u, p],
                  ]);
                  s = u;
                  i = p;
                }
                const a = this.#Re(t);
                n.bezierPath2D.push(a);
              }
              const u = n.#qe();
              n.#le = Math.max(o, u[2] - u[0]);
              n.#oe = Math.max(o, u[3] - u[1]);
              n.#Le(l, c);
              return n;
            }
            serialize() {
              if (this.isEmpty()) return null;
              const t = this.getRect(0, 0),
                e = this.rotation % 180 == 0 ? t[3] - t[1] : t[2] - t[0],
                s = n.AnnotationEditor._colorManager.convert(
                  this.ctx.strokeStyle
                );
              return {
                annotationType: i.AnnotationEditorType.INK,
                color: s,
                thickness: this.thickness,
                opacity: this.opacity,
                paths: this.#Be(
                  this.scaleFactor / this.parentScale,
                  this.translationX,
                  this.translationY,
                  e
                ),
                pageIndex: this.pageIndex,
                rect: t,
                rotation: this.rotation,
              };
            }
          }
          e.InkEditor = InkEditor;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.fitCurve = void 0;
          const i = s(31);
          e.fitCurve = i;
        },
        (t) => {
          function fitCubic(t, e, s, i, n) {
            var a, r, o, l, c, h, d, u, p, f, g, m, b;
            if (2 === t.length) {
              m = maths.vectorLen(maths.subtract(t[0], t[1])) / 3;
              return [
                (a = [
                  t[0],
                  maths.addArrays(t[0], maths.mulItems(e, m)),
                  maths.addArrays(t[1], maths.mulItems(s, m)),
                  t[1],
                ]),
              ];
            }
            r = (function chordLengthParameterize(t) {
              var e,
                s,
                i,
                n = [];
              t.forEach((t, a) => {
                e = a ? s + maths.vectorLen(maths.subtract(t, i)) : 0;
                n.push(e);
                s = e;
                i = t;
              });
              n = n.map((t) => t / s);
              return n;
            })(t);
            [a, l, h] = generateAndReport(t, r, r, e, s, n);
            if (0 === l || l < i) return [a];
            if (l < i * i) {
              o = r;
              c = l;
              d = h;
              for (b = 0; b < 20; b++) {
                o = reparameterize(a, t, o);
                [a, l, h] = generateAndReport(t, r, o, e, s, n);
                if (l < i) return [a];
                if (h === d) {
                  let t = l / c;
                  if (t > 0.9999 && t < 1.0001) break;
                }
                c = l;
                d = h;
              }
            }
            g = [];
            if (
              (u = maths.subtract(t[h - 1], t[h + 1])).every((t) => 0 === t)
            ) {
              u = maths.subtract(t[h - 1], t[h]);
              [u[0], u[1]] = [-u[1], u[0]];
            }
            p = maths.normalize(u);
            f = maths.mulItems(p, -1);
            return (g = (g = g.concat(
              fitCubic(t.slice(0, h + 1), e, p, i, n)
            )).concat(fitCubic(t.slice(h), f, s, i, n)));
          }
          function generateAndReport(t, e, s, i, n, a) {
            var r, o, l;
            r = (function generateBezier(t, e, s, i) {
              var n,
                a,
                r,
                o,
                l,
                c,
                h,
                d,
                u,
                p,
                f,
                g,
                m,
                b,
                A,
                _,
                y,
                v = t[0],
                S = t[t.length - 1];
              n = [v, null, null, S];
              a = maths.zeros_Xx2x2(e.length);
              for (m = 0, b = e.length; m < b; m++) {
                y = 1 - (_ = e[m]);
                (r = a[m])[0] = maths.mulItems(s, 3 * _ * (y * y));
                r[1] = maths.mulItems(i, 3 * y * (_ * _));
              }
              o = [
                [0, 0],
                [0, 0],
              ];
              l = [0, 0];
              for (m = 0, b = t.length; m < b; m++) {
                _ = e[m];
                r = a[m];
                o[0][0] += maths.dot(r[0], r[0]);
                o[0][1] += maths.dot(r[0], r[1]);
                o[1][0] += maths.dot(r[0], r[1]);
                o[1][1] += maths.dot(r[1], r[1]);
                A = maths.subtract(t[m], bezier.q([v, v, S, S], _));
                l[0] += maths.dot(r[0], A);
                l[1] += maths.dot(r[1], A);
              }
              c = o[0][0] * o[1][1] - o[1][0] * o[0][1];
              h = o[0][0] * l[1] - o[1][0] * l[0];
              d = l[0] * o[1][1] - l[1] * o[0][1];
              u = 0 === c ? 0 : d / c;
              p = 0 === c ? 0 : h / c;
              g = maths.vectorLen(maths.subtract(v, S));
              if (u < (f = 1e-6 * g) || p < f) {
                n[1] = maths.addArrays(v, maths.mulItems(s, g / 3));
                n[2] = maths.addArrays(S, maths.mulItems(i, g / 3));
              } else {
                n[1] = maths.addArrays(v, maths.mulItems(s, u));
                n[2] = maths.addArrays(S, maths.mulItems(i, p));
              }
              return n;
            })(t, s, i, n);
            [o, l] = (function computeMaxError(t, e, s) {
              var i, n, a, r, o, l, c, h;
              n = 0;
              a = Math.floor(t.length / 2);
              const d = mapTtoRelativeDistances(e, 10);
              for (o = 0, l = t.length; o < l; o++) {
                c = t[o];
                h = find_t(e, s[o], d, 10);
                if (
                  (i =
                    (r = maths.subtract(bezier.q(e, h), c))[0] * r[0] +
                    r[1] * r[1]) > n
                ) {
                  n = i;
                  a = o;
                }
              }
              return [n, a];
            })(t, r, e);
            a && a({ bez: r, points: t, params: e, maxErr: o, maxPoint: l });
            return [r, o, l];
          }
          function reparameterize(t, e, s) {
            return s.map((s, i) => newtonRaphsonRootFind(t, e[i], s));
          }
          function newtonRaphsonRootFind(t, e, s) {
            var i = maths.subtract(bezier.q(t, s), e),
              n = bezier.qprime(t, s),
              a = maths.mulMatrix(i, n),
              r =
                maths.sum(maths.squareItems(n)) +
                2 * maths.mulMatrix(i, bezier.qprimeprime(t, s));
            return 0 === r ? s : s - a / r;
          }
          var mapTtoRelativeDistances = function (t, e) {
            for (var s, i = [0], n = t[0], a = 0, r = 1; r <= e; r++) {
              s = bezier.q(t, r / e);
              a += maths.vectorLen(maths.subtract(s, n));
              i.push(a);
              n = s;
            }
            return (i = i.map((t) => t / a));
          };
          function find_t(t, e, s, i) {
            if (e < 0) return 0;
            if (e > 1) return 1;
            for (var n, a, r, o, l = 1; l <= i; l++)
              if (e <= s[l]) {
                r = (l - 1) / i;
                a = l / i;
                o = ((e - (n = s[l - 1])) / (s[l] - n)) * (a - r) + r;
                break;
              }
            return o;
          }
          function createTangent(t, e) {
            return maths.normalize(maths.subtract(t, e));
          }
          class maths {
            static zeros_Xx2x2(t) {
              for (var e = []; t--; ) e.push([0, 0]);
              return e;
            }
            static mulItems(t, e) {
              return t.map((t) => t * e);
            }
            static mulMatrix(t, e) {
              return t.reduce((t, s, i) => t + s * e[i], 0);
            }
            static subtract(t, e) {
              return t.map((t, s) => t - e[s]);
            }
            static addArrays(t, e) {
              return t.map((t, s) => t + e[s]);
            }
            static addItems(t, e) {
              return t.map((t) => t + e);
            }
            static sum(t) {
              return t.reduce((t, e) => t + e);
            }
            static dot(t, e) {
              return maths.mulMatrix(t, e);
            }
            static vectorLen(t) {
              return Math.hypot(...t);
            }
            static divItems(t, e) {
              return t.map((t) => t / e);
            }
            static squareItems(t) {
              return t.map((t) => t * t);
            }
            static normalize(t) {
              return this.divItems(t, this.vectorLen(t));
            }
          }
          class bezier {
            static q(t, e) {
              var s = 1 - e,
                i = maths.mulItems(t[0], s * s * s),
                n = maths.mulItems(t[1], 3 * s * s * e),
                a = maths.mulItems(t[2], 3 * s * e * e),
                r = maths.mulItems(t[3], e * e * e);
              return maths.addArrays(
                maths.addArrays(i, n),
                maths.addArrays(a, r)
              );
            }
            static qprime(t, e) {
              var s = 1 - e,
                i = maths.mulItems(maths.subtract(t[1], t[0]), 3 * s * s),
                n = maths.mulItems(maths.subtract(t[2], t[1]), 6 * s * e),
                a = maths.mulItems(maths.subtract(t[3], t[2]), 3 * e * e);
              return maths.addArrays(maths.addArrays(i, n), a);
            }
            static qprimeprime(t, e) {
              return maths.addArrays(
                maths.mulItems(
                  maths.addArrays(
                    maths.subtract(t[2], maths.mulItems(t[1], 2)),
                    t[0]
                  ),
                  6 * (1 - e)
                ),
                maths.mulItems(
                  maths.addArrays(
                    maths.subtract(t[3], maths.mulItems(t[2], 2)),
                    t[1]
                  ),
                  6 * e
                )
              );
            }
          }
          t.exports = function fitCurve(t, e, s) {
            if (!Array.isArray(t))
              throw new TypeError("First argument should be an array");
            t.forEach((e) => {
              if (
                !Array.isArray(e) ||
                e.some((t) => "number" != typeof t) ||
                e.length !== t[0].length
              )
                throw Error(
                  "Each point should be an array of numbers. Each point should have the same amount of numbers."
                );
            });
            if (
              (t = t.filter(
                (e, s) => 0 === s || !e.every((e, i) => e === t[s - 1][i])
              )).length < 2
            )
              return [];
            const i = t.length,
              n = createTangent(t[1], t[0]),
              a = createTangent(t[i - 2], t[i - 1]);
            return fitCubic(t, n, a, e, s);
          };
          t.exports.fitCubic = fitCubic;
          t.exports.createTangent = createTangent;
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.AnnotationLayer = void 0;
          var i = s(1),
            n = s(6),
            a = s(3),
            r = s(33),
            o = s(34);
          const l = 1e3,
            c = new WeakSet();
          function getRectDims(t) {
            return { width: t[2] - t[0], height: t[3] - t[1] };
          }
          class AnnotationElementFactory {
            static create(t) {
              switch (t.data.annotationType) {
                case i.AnnotationType.LINK:
                  return new LinkAnnotationElement(t);
                case i.AnnotationType.TEXT:
                  return new TextAnnotationElement(t);
                case i.AnnotationType.WIDGET:
                  switch (t.data.fieldType) {
                    case "Tx":
                      return new TextWidgetAnnotationElement(t);
                    case "Btn":
                      return t.data.radioButton
                        ? new RadioButtonWidgetAnnotationElement(t)
                        : t.data.checkBox
                        ? new CheckboxWidgetAnnotationElement(t)
                        : new PushButtonWidgetAnnotationElement(t);
                    case "Ch":
                      return new ChoiceWidgetAnnotationElement(t);
                  }
                  return new WidgetAnnotationElement(t);
                case i.AnnotationType.POPUP:
                  return new PopupAnnotationElement(t);
                case i.AnnotationType.FREETEXT:
                  return new FreeTextAnnotationElement(t);
                case i.AnnotationType.LINE:
                  return new LineAnnotationElement(t);
                case i.AnnotationType.SQUARE:
                  return new SquareAnnotationElement(t);
                case i.AnnotationType.CIRCLE:
                  return new CircleAnnotationElement(t);
                case i.AnnotationType.POLYLINE:
                  return new PolylineAnnotationElement(t);
                case i.AnnotationType.CARET:
                  return new CaretAnnotationElement(t);
                case i.AnnotationType.INK:
                  return new InkAnnotationElement(t);
                case i.AnnotationType.POLYGON:
                  return new PolygonAnnotationElement(t);
                case i.AnnotationType.HIGHLIGHT:
                  return new HighlightAnnotationElement(t);
                case i.AnnotationType.UNDERLINE:
                  return new UnderlineAnnotationElement(t);
                case i.AnnotationType.SQUIGGLY:
                  return new SquigglyAnnotationElement(t);
                case i.AnnotationType.STRIKEOUT:
                  return new StrikeOutAnnotationElement(t);
                case i.AnnotationType.STAMP:
                  return new StampAnnotationElement(t);
                case i.AnnotationType.FILEATTACHMENT:
                  return new FileAttachmentAnnotationElement(t);
                default:
                  return new AnnotationElement(t);
              }
            }
          }
          class AnnotationElement {
            constructor(
              t,
              {
                isRenderable: e = !1,
                ignoreBorder: s = !1,
                createQuadrilaterals: i = !1,
              } = {}
            ) {
              this.isRenderable = e;
              this.data = t.data;
              this.layer = t.layer;
              this.page = t.page;
              this.viewport = t.viewport;
              this.linkService = t.linkService;
              this.downloadManager = t.downloadManager;
              this.imageResourcesPath = t.imageResourcesPath;
              this.renderForms = t.renderForms;
              this.svgFactory = t.svgFactory;
              this.annotationStorage = t.annotationStorage;
              this.enableScripting = t.enableScripting;
              this.hasJSActions = t.hasJSActions;
              this._fieldObjects = t.fieldObjects;
              e && (this.container = this._createContainer(s));
              i && (this.quadrilaterals = this._createQuadrilaterals(s));
            }
            _createContainer(t = !1) {
              const { data: e, page: s, viewport: n } = this,
                a = document.createElement("section");
              a.setAttribute("data-annotation-id", e.id);
              e.noRotate && a.classList.add("norotate");
              const {
                  pageWidth: r,
                  pageHeight: o,
                  pageX: l,
                  pageY: c,
                } = n.rawDims,
                { width: h, height: d } = getRectDims(e.rect),
                u = i.Util.normalizeRect([
                  e.rect[0],
                  s.view[3] - e.rect[1] + s.view[1],
                  e.rect[2],
                  s.view[3] - e.rect[3] + s.view[1],
                ]);
              if (!t && e.borderStyle.width > 0) {
                a.style.borderWidth = `${e.borderStyle.width}px`;
                const t = e.borderStyle.horizontalCornerRadius,
                  s = e.borderStyle.verticalCornerRadius;
                if (t > 0 || s > 0) {
                  const e = `calc(${t}px * var(--scale-factor)) / calc(${s}px * var(--scale-factor))`;
                  a.style.borderRadius = e;
                } else if (this instanceof RadioButtonWidgetAnnotationElement) {
                  const t = `calc(${h}px * var(--scale-factor)) / calc(${d}px * var(--scale-factor))`;
                  a.style.borderRadius = t;
                }
                switch (e.borderStyle.style) {
                  case i.AnnotationBorderStyleType.SOLID:
                    a.style.borderStyle = "solid";
                    break;
                  case i.AnnotationBorderStyleType.DASHED:
                    a.style.borderStyle = "dashed";
                    break;
                  case i.AnnotationBorderStyleType.BEVELED:
                    (0, i.warn)("Unimplemented border style: beveled");
                    break;
                  case i.AnnotationBorderStyleType.INSET:
                    (0, i.warn)("Unimplemented border style: inset");
                    break;
                  case i.AnnotationBorderStyleType.UNDERLINE:
                    a.style.borderBottomStyle = "solid";
                }
                const n = e.borderColor || null;
                n
                  ? (a.style.borderColor = i.Util.makeHexColor(
                      0 | n[0],
                      0 | n[1],
                      0 | n[2]
                    ))
                  : (a.style.borderWidth = 0);
              }
              a.style.left = (100 * (u[0] - l)) / r + "%";
              a.style.top = (100 * (u[1] - c)) / o + "%";
              const { rotation: p } = e;
              if (e.hasOwnCanvas || 0 === p) {
                a.style.width = (100 * h) / r + "%";
                a.style.height = (100 * d) / o + "%";
              } else this.setRotation(p, a);
              return a;
            }
            setRotation(t, e = this.container) {
              const { pageWidth: s, pageHeight: i } = this.viewport.rawDims,
                { width: n, height: a } = getRectDims(this.data.rect);
              let r, o;
              if (t % 180 == 0) {
                r = (100 * n) / s;
                o = (100 * a) / i;
              } else {
                r = (100 * a) / s;
                o = (100 * n) / i;
              }
              e.style.width = `${r}%`;
              e.style.height = `${o}%`;
              e.setAttribute("data-main-rotation", (360 - t) % 360);
            }
            get _commonActions() {
              const setColor = (t, e, s) => {
                const i = s.detail[t];
                s.target.style[e] = r.ColorConverters[`${i[0]}_HTML`](
                  i.slice(1)
                );
              };
              return (0, i.shadow)(this, "_commonActions", {
                display: (t) => {
                  const e = t.detail.display % 2 == 1;
                  this.container.style.visibility = e ? "hidden" : "visible";
                  this.annotationStorage.setValue(this.data.id, {
                    hidden: e,
                    print: 0 === t.detail.display || 3 === t.detail.display,
                  });
                },
                print: (t) => {
                  this.annotationStorage.setValue(this.data.id, {
                    print: t.detail.print,
                  });
                },
                hidden: (t) => {
                  this.container.style.visibility = t.detail.hidden
                    ? "hidden"
                    : "visible";
                  this.annotationStorage.setValue(this.data.id, {
                    hidden: t.detail.hidden,
                  });
                },
                focus: (t) => {
                  setTimeout(() => t.target.focus({ preventScroll: !1 }), 0);
                },
                userName: (t) => {
                  t.target.title = t.detail.userName;
                },
                readonly: (t) => {
                  t.detail.readonly
                    ? t.target.setAttribute("readonly", "")
                    : t.target.removeAttribute("readonly");
                },
                required: (t) => {
                  this._setRequired(t.target, t.detail.required);
                },
                bgColor: (t) => {
                  setColor("bgColor", "backgroundColor", t);
                },
                fillColor: (t) => {
                  setColor("fillColor", "backgroundColor", t);
                },
                fgColor: (t) => {
                  setColor("fgColor", "color", t);
                },
                textColor: (t) => {
                  setColor("textColor", "color", t);
                },
                borderColor: (t) => {
                  setColor("borderColor", "borderColor", t);
                },
                strokeColor: (t) => {
                  setColor("strokeColor", "borderColor", t);
                },
                rotation: (t) => {
                  const e = t.detail.rotation;
                  this.setRotation(e);
                  this.annotationStorage.setValue(this.data.id, {
                    rotation: e,
                  });
                },
              });
            }
            _dispatchEventFromSandbox(t, e) {
              const s = this._commonActions;
              for (const i of Object.keys(e.detail)) {
                const n = t[i] || s[i];
                n?.(e);
              }
            }
            _setDefaultPropertiesFromJS(t) {
              if (!this.enableScripting) return;
              const e = this.annotationStorage.getRawValue(this.data.id);
              if (!e) return;
              const s = this._commonActions;
              for (const [i, n] of Object.entries(e)) {
                const a = s[i];
                if (a) {
                  a({ detail: { [i]: n }, target: t });
                  delete e[i];
                }
              }
            }
            _createQuadrilaterals(t = !1) {
              if (!this.data.quadPoints) return null;
              const e = [],
                s = this.data.rect;
              for (const s of this.data.quadPoints) {
                this.data.rect = [s[2].x, s[2].y, s[1].x, s[1].y];
                e.push(this._createContainer(t));
              }
              this.data.rect = s;
              return e;
            }
            _createPopup(t, e) {
              let s = this.container;
              if (this.quadrilaterals) {
                t ||= this.quadrilaterals;
                s = this.quadrilaterals[0];
              }
              if (!t) {
                (t = document.createElement("div")).classList.add(
                  "popupTriggerArea"
                );
                s.append(t);
              }
              const i = new PopupElement({
                container: s,
                trigger: t,
                color: e.color,
                titleObj: e.titleObj,
                modificationDate: e.modificationDate,
                contentsObj: e.contentsObj,
                richText: e.richText,
                hideWrapper: !0,
              }).render();
              i.style.left = "100%";
              s.append(i);
            }
            _renderQuadrilaterals(t) {
              for (const e of this.quadrilaterals) e.classList.add(t);
              return this.quadrilaterals;
            }
            render() {
              (0, i.unreachable)(
                "Abstract method `AnnotationElement.render` called"
              );
            }
            _getElementsByName(t, e = null) {
              const s = [];
              if (this._fieldObjects) {
                const n = this._fieldObjects[t];
                if (n)
                  for (const { page: t, id: a, exportValues: r } of n) {
                    if (-1 === t) continue;
                    if (a === e) continue;
                    const n = "string" == typeof r ? r : null,
                      o = document.querySelector(`[data-element-id="${a}"]`);
                    !o || c.has(o)
                      ? s.push({ id: a, exportValue: n, domElement: o })
                      : (0, i.warn)(
                          `_getElementsByName - element not allowed: ${a}`
                        );
                  }
                return s;
              }
              for (const i of document.getElementsByName(t)) {
                const { exportValue: t } = i,
                  n = i.getAttribute("data-element-id");
                n !== e &&
                  c.has(i) &&
                  s.push({ id: n, exportValue: t, domElement: i });
              }
              return s;
            }
          }
          class LinkAnnotationElement extends AnnotationElement {
            constructor(t, e = null) {
              super(t, {
                isRenderable: !0,
                ignoreBorder: !!e?.ignoreBorder,
                createQuadrilaterals: !0,
              });
              this.isTooltipOnly = t.data.isTooltipOnly;
            }
            render() {
              const { data: t, linkService: e } = this,
                s = document.createElement("a");
              s.setAttribute("data-element-id", t.id);
              let i = !1;
              if (t.url) {
                e.addLinkAttributes(s, t.url, t.newWindow);
                i = !0;
              } else if (t.action) {
                this._bindNamedAction(s, t.action);
                i = !0;
              } else if (t.attachment) {
                this._bindAttachment(s, t.attachment);
                i = !0;
              } else if (t.setOCGState) {
                this.#We(s, t.setOCGState);
                i = !0;
              } else if (t.dest) {
                this._bindLink(s, t.dest);
                i = !0;
              } else {
                if (
                  t.actions &&
                  (t.actions.Action ||
                    t.actions["Mouse Up"] ||
                    t.actions["Mouse Down"]) &&
                  this.enableScripting &&
                  this.hasJSActions
                ) {
                  this._bindJSAction(s, t);
                  i = !0;
                }
                if (t.resetForm) {
                  this._bindResetFormAction(s, t.resetForm);
                  i = !0;
                } else if (this.isTooltipOnly && !i) {
                  this._bindLink(s, "");
                  i = !0;
                }
              }
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("linkAnnotation").map(
                  (t, e) => {
                    const i = 0 === e ? s : s.cloneNode();
                    t.append(i);
                    return t;
                  }
                );
              this.container.classList.add("linkAnnotation");
              i && this.container.append(s);
              return this.container;
            }
            #Ge() {
              this.container.setAttribute("data-internal-link", "");
            }
            _bindLink(t, e) {
              t.href = this.linkService.getDestinationHash(e);
              t.onclick = () => {
                e && this.linkService.goToDestination(e);
                return !1;
              };
              (e || "" === e) && this.#Ge();
            }
            _bindNamedAction(t, e) {
              t.href = this.linkService.getAnchorUrl("");
              t.onclick = () => {
                this.linkService.executeNamedAction(e);
                return !1;
              };
              this.#Ge();
            }
            _bindAttachment(t, e) {
              t.href = this.linkService.getAnchorUrl("");
              t.onclick = () => {
                this.downloadManager?.openOrDownloadData(
                  this.container,
                  e.content,
                  e.filename
                );
                return !1;
              };
              this.#Ge();
            }
            #We(t, e) {
              t.href = this.linkService.getAnchorUrl("");
              t.onclick = () => {
                this.linkService.executeSetOCGState(e);
                return !1;
              };
              this.#Ge();
            }
            _bindJSAction(t, e) {
              t.href = this.linkService.getAnchorUrl("");
              const s = new Map([
                ["Action", "onclick"],
                ["Mouse Up", "onmouseup"],
                ["Mouse Down", "onmousedown"],
              ]);
              for (const i of Object.keys(e.actions)) {
                const n = s.get(i);
                n &&
                  (t[n] = () => {
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      { source: this, detail: { id: e.id, name: i } }
                    );
                    return !1;
                  });
              }
              t.onclick || (t.onclick = () => !1);
              this.#Ge();
            }
            _bindResetFormAction(t, e) {
              const s = t.onclick;
              s || (t.href = this.linkService.getAnchorUrl(""));
              this.#Ge();
              if (this._fieldObjects)
                t.onclick = () => {
                  s?.();
                  const { fields: t, refs: n, include: a } = e,
                    r = [];
                  if (0 !== t.length || 0 !== n.length) {
                    const e = new Set(n);
                    for (const s of t) {
                      const t = this._fieldObjects[s] || [];
                      for (const { id: s } of t) e.add(s);
                    }
                    for (const t of Object.values(this._fieldObjects))
                      for (const s of t) e.has(s.id) === a && r.push(s);
                  } else
                    for (const t of Object.values(this._fieldObjects))
                      r.push(...t);
                  const o = this.annotationStorage,
                    l = [];
                  for (const t of r) {
                    const { id: e } = t;
                    l.push(e);
                    switch (t.type) {
                      case "text": {
                        const s = t.defaultValue || "";
                        o.setValue(e, { value: s });
                        break;
                      }
                      case "checkbox":
                      case "radiobutton": {
                        const s = t.defaultValue === t.exportValues;
                        o.setValue(e, { value: s });
                        break;
                      }
                      case "combobox":
                      case "listbox": {
                        const s = t.defaultValue || "";
                        o.setValue(e, { value: s });
                        break;
                      }
                      default:
                        continue;
                    }
                    const s = document.querySelector(
                      `[data-element-id="${e}"]`
                    );
                    s &&
                      (c.has(s)
                        ? s.dispatchEvent(new Event("resetform"))
                        : (0, i.warn)(
                            `_bindResetFormAction - element not allowed: ${e}`
                          ));
                  }
                  this.enableScripting &&
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      {
                        source: this,
                        detail: { id: "app", ids: l, name: "ResetForm" },
                      }
                    );
                  return !1;
                };
              else {
                (0, i.warn)(
                  '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'
                );
                s || (t.onclick = () => !1);
              }
            }
          }
          class TextAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
              });
            }
            render() {
              this.container.classList.add("textAnnotation");
              const t = document.createElement("img");
              t.src =
                this.imageResourcesPath +
                "annotation-" +
                this.data.name.toLowerCase() +
                ".svg";
              t.alt = "[{{type}} Annotation]";
              t.dataset.l10nId = "text_annotation_type";
              t.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
              this.data.hasPopup || this._createPopup(t, this.data);
              this.container.append(t);
              return this.container;
            }
          }
          class WidgetAnnotationElement extends AnnotationElement {
            render() {
              this.data.alternativeText &&
                (this.container.title = this.data.alternativeText);
              return this.container;
            }
            showElementAndHideCanvas(t) {
              if (this.data.hasOwnCanvas) {
                "CANVAS" === t.previousSibling?.nodeName &&
                  (t.previousSibling.hidden = !0);
                t.hidden = !1;
              }
            }
            _getKeyModifier(t) {
              const { isWin: e, isMac: s } = i.FeatureTest.platform;
              return (e && t.ctrlKey) || (s && t.metaKey);
            }
            _setEventListener(t, e, s, i) {
              e.includes("mouse")
                ? t.addEventListener(e, (t) => {
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      {
                        source: this,
                        detail: {
                          id: this.data.id,
                          name: s,
                          value: i(t),
                          shift: t.shiftKey,
                          modifier: this._getKeyModifier(t),
                        },
                      }
                    );
                  })
                : t.addEventListener(e, (t) => {
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      {
                        source: this,
                        detail: { id: this.data.id, name: s, value: i(t) },
                      }
                    );
                  });
            }
            _setEventListeners(t, e, s) {
              for (const [i, n] of e)
                ("Action" === n || this.data.actions?.[n]) &&
                  this._setEventListener(t, i, n, s);
            }
            _setBackgroundColor(t) {
              const e = this.data.backgroundColor || null;
              t.style.backgroundColor =
                null === e
                  ? "transparent"
                  : i.Util.makeHexColor(e[0], e[1], e[2]);
            }
            _setTextStyle(t) {
              const e = ["left", "center", "right"],
                { fontColor: s } = this.data.defaultAppearanceData,
                n = this.data.defaultAppearanceData.fontSize || 9,
                a = t.style;
              let r;
              const roundToOneDecimal = (t) => Math.round(10 * t) / 10;
              if (this.data.multiLine) {
                const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2),
                  e = t / (Math.round(t / (i.LINE_FACTOR * n)) || 1);
                r = Math.min(n, roundToOneDecimal(e / i.LINE_FACTOR));
              } else {
                const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
                r = Math.min(n, roundToOneDecimal(t / i.LINE_FACTOR));
              }
              a.fontSize = `calc(${r}px * var(--scale-factor))`;
              a.color = i.Util.makeHexColor(s[0], s[1], s[2]);
              null !== this.data.textAlignment &&
                (a.textAlign = e[this.data.textAlignment]);
            }
            _setRequired(t, e) {
              e
                ? t.setAttribute("required", !0)
                : t.removeAttribute("required");
              t.setAttribute("aria-required", e);
            }
          }
          class TextWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable:
                  t.renderForms ||
                  (!t.data.hasAppearance && !!t.data.fieldValue),
              });
            }
            setPropertyOnSiblings(t, e, s, i) {
              const n = this.annotationStorage;
              for (const a of this._getElementsByName(t.name, t.id)) {
                a.domElement && (a.domElement[e] = s);
                n.setValue(a.id, { [i]: s });
              }
            }
            render() {
              const t = this.annotationStorage,
                e = this.data.id;
              this.container.classList.add("textWidgetAnnotation");
              let s = null;
              if (this.renderForms) {
                const i = t.getValue(e, { value: this.data.fieldValue });
                let n = i.formattedValue || i.value || "";
                const a = t.getValue(e, {
                  charLimit: this.data.maxLen,
                }).charLimit;
                a && n.length > a && (n = n.slice(0, a));
                const r = {
                  userValue: n,
                  formattedValue: null,
                  lastCommittedValue: null,
                  commitKey: 1,
                };
                if (this.data.multiLine) {
                  s = document.createElement("textarea");
                  s.textContent = n;
                  this.data.doNotScroll && (s.style.overflowY = "hidden");
                } else {
                  s = document.createElement("input");
                  s.type = "text";
                  s.setAttribute("value", n);
                  this.data.doNotScroll && (s.style.overflowX = "hidden");
                }
                this.data.hasOwnCanvas && (s.hidden = !0);
                c.add(s);
                s.setAttribute("data-element-id", e);
                s.disabled = this.data.readOnly;
                s.name = this.data.fieldName;
                s.tabIndex = l;
                this._setRequired(s, this.data.required);
                a && (s.maxLength = a);
                s.addEventListener("input", (i) => {
                  t.setValue(e, { value: i.target.value });
                  this.setPropertyOnSiblings(
                    s,
                    "value",
                    i.target.value,
                    "value"
                  );
                });
                s.addEventListener("resetform", (t) => {
                  const e = this.data.defaultFieldValue ?? "";
                  s.value = r.userValue = e;
                  r.formattedValue = null;
                });
                let blurListener = (t) => {
                  const { formattedValue: e } = r;
                  null != e && (t.target.value = e);
                  t.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                  s.addEventListener("focus", (t) => {
                    const { target: e } = t;
                    r.userValue && (e.value = r.userValue);
                    r.lastCommittedValue = e.value;
                    r.commitKey = 1;
                  });
                  s.addEventListener("updatefromsandbox", (s) => {
                    this.showElementAndHideCanvas(s.target);
                    const i = {
                      value(s) {
                        r.userValue = s.detail.value ?? "";
                        t.setValue(e, { value: r.userValue.toString() });
                        s.target.value = r.userValue;
                      },
                      formattedValue(s) {
                        const { formattedValue: i } = s.detail;
                        r.formattedValue = i;
                        null != i &&
                          s.target !== document.activeElement &&
                          (s.target.value = i);
                        t.setValue(e, { formattedValue: i });
                      },
                      selRange(t) {
                        t.target.setSelectionRange(...t.detail.selRange);
                      },
                      charLimit: (s) => {
                        const { charLimit: i } = s.detail,
                          { target: n } = s;
                        if (0 === i) {
                          n.removeAttribute("maxLength");
                          return;
                        }
                        n.setAttribute("maxLength", i);
                        let a = r.userValue;
                        if (a && !(a.length <= i)) {
                          a = a.slice(0, i);
                          n.value = r.userValue = a;
                          t.setValue(e, { value: a });
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            {
                              source: this,
                              detail: {
                                id: e,
                                name: "Keystroke",
                                value: a,
                                willCommit: !0,
                                commitKey: 1,
                                selStart: n.selectionStart,
                                selEnd: n.selectionEnd,
                              },
                            }
                          );
                        }
                      },
                    };
                    this._dispatchEventFromSandbox(i, s);
                  });
                  s.addEventListener("keydown", (t) => {
                    r.commitKey = 1;
                    let s = -1;
                    "Escape" === t.key
                      ? (s = 0)
                      : "Enter" !== t.key || this.data.multiLine
                      ? "Tab" === t.key && (r.commitKey = 3)
                      : (s = 2);
                    if (-1 === s) return;
                    const { value: i } = t.target;
                    if (r.lastCommittedValue !== i) {
                      r.lastCommittedValue = i;
                      r.userValue = i;
                      this.linkService.eventBus?.dispatch(
                        "dispatcheventinsandbox",
                        {
                          source: this,
                          detail: {
                            id: e,
                            name: "Keystroke",
                            value: i,
                            willCommit: !0,
                            commitKey: s,
                            selStart: t.target.selectionStart,
                            selEnd: t.target.selectionEnd,
                          },
                        }
                      );
                    }
                  });
                  const i = blurListener;
                  blurListener = null;
                  s.addEventListener("blur", (t) => {
                    if (!t.relatedTarget) return;
                    const { value: s } = t.target;
                    r.userValue = s;
                    r.lastCommittedValue !== s &&
                      this.linkService.eventBus?.dispatch(
                        "dispatcheventinsandbox",
                        {
                          source: this,
                          detail: {
                            id: e,
                            name: "Keystroke",
                            value: s,
                            willCommit: !0,
                            commitKey: r.commitKey,
                            selStart: t.target.selectionStart,
                            selEnd: t.target.selectionEnd,
                          },
                        }
                      );
                    i(t);
                  });
                  this.data.actions?.Keystroke &&
                    s.addEventListener("beforeinput", (t) => {
                      r.lastCommittedValue = null;
                      const { data: s, target: i } = t,
                        { value: n, selectionStart: a, selectionEnd: o } = i;
                      let l = a,
                        c = o;
                      switch (t.inputType) {
                        case "deleteWordBackward": {
                          const t = n.substring(0, a).match(/\w*[^\w]*$/);
                          t && (l -= t[0].length);
                          break;
                        }
                        case "deleteWordForward": {
                          const t = n.substring(a).match(/^[^\w]*\w*/);
                          t && (c += t[0].length);
                          break;
                        }
                        case "deleteContentBackward":
                          a === o && (l -= 1);
                          break;
                        case "deleteContentForward":
                          a === o && (c += 1);
                      }
                      t.preventDefault();
                      this.linkService.eventBus?.dispatch(
                        "dispatcheventinsandbox",
                        {
                          source: this,
                          detail: {
                            id: e,
                            name: "Keystroke",
                            value: n,
                            change: s || "",
                            willCommit: !1,
                            selStart: l,
                            selEnd: c,
                          },
                        }
                      );
                    });
                  this._setEventListeners(
                    s,
                    [
                      ["focus", "Focus"],
                      ["blur", "Blur"],
                      ["mousedown", "Mouse Down"],
                      ["mouseenter", "Mouse Enter"],
                      ["mouseleave", "Mouse Exit"],
                      ["mouseup", "Mouse Up"],
                    ],
                    (t) => t.target.value
                  );
                }
                blurListener && s.addEventListener("blur", blurListener);
                if (this.data.comb) {
                  const t = (this.data.rect[2] - this.data.rect[0]) / a;
                  s.classList.add("comb");
                  s.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`;
                }
              } else {
                s = document.createElement("div");
                s.textContent = this.data.fieldValue;
                s.style.verticalAlign = "middle";
                s.style.display = "table-cell";
              }
              this._setTextStyle(s);
              this._setBackgroundColor(s);
              this._setDefaultPropertiesFromJS(s);
              this.container.append(s);
              return this.container;
            }
          }
          class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(t) {
              super(t, { isRenderable: t.renderForms });
            }
            render() {
              const t = this.annotationStorage,
                e = this.data,
                s = e.id;
              let i = t.getValue(s, {
                value: e.exportValue === e.fieldValue,
              }).value;
              if ("string" == typeof i) {
                i = "Off" !== i;
                t.setValue(s, { value: i });
              }
              this.container.classList.add(
                "buttonWidgetAnnotation",
                "checkBox"
              );
              const n = document.createElement("input");
              c.add(n);
              n.setAttribute("data-element-id", s);
              n.disabled = e.readOnly;
              this._setRequired(n, this.data.required);
              n.type = "checkbox";
              n.name = e.fieldName;
              i && n.setAttribute("checked", !0);
              n.setAttribute("exportValue", e.exportValue);
              n.tabIndex = l;
              n.addEventListener("change", (i) => {
                const { name: n, checked: a } = i.target;
                for (const i of this._getElementsByName(n, s)) {
                  const s = a && i.exportValue === e.exportValue;
                  i.domElement && (i.domElement.checked = s);
                  t.setValue(i.id, { value: s });
                }
                t.setValue(s, { value: a });
              });
              n.addEventListener("resetform", (t) => {
                const s = e.defaultFieldValue || "Off";
                t.target.checked = s === e.exportValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                n.addEventListener("updatefromsandbox", (e) => {
                  const i = {
                    value(e) {
                      e.target.checked = "Off" !== e.detail.value;
                      t.setValue(s, { value: e.target.checked });
                    },
                  };
                  this._dispatchEventFromSandbox(i, e);
                });
                this._setEventListeners(
                  n,
                  [
                    ["change", "Validate"],
                    ["change", "Action"],
                    ["focus", "Focus"],
                    ["blur", "Blur"],
                    ["mousedown", "Mouse Down"],
                    ["mouseenter", "Mouse Enter"],
                    ["mouseleave", "Mouse Exit"],
                    ["mouseup", "Mouse Up"],
                  ],
                  (t) => t.target.checked
                );
              }
              this._setBackgroundColor(n);
              this._setDefaultPropertiesFromJS(n);
              this.container.append(n);
              return this.container;
            }
          }
          class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(t) {
              super(t, { isRenderable: t.renderForms });
            }
            render() {
              this.container.classList.add(
                "buttonWidgetAnnotation",
                "radioButton"
              );
              const t = this.annotationStorage,
                e = this.data,
                s = e.id;
              let i = t.getValue(s, {
                value: e.fieldValue === e.buttonValue,
              }).value;
              if ("string" == typeof i) {
                i = i !== e.buttonValue;
                t.setValue(s, { value: i });
              }
              const n = document.createElement("input");
              c.add(n);
              n.setAttribute("data-element-id", s);
              n.disabled = e.readOnly;
              this._setRequired(n, this.data.required);
              n.type = "radio";
              n.name = e.fieldName;
              i && n.setAttribute("checked", !0);
              n.tabIndex = l;
              n.addEventListener("change", (e) => {
                const { name: i, checked: n } = e.target;
                for (const e of this._getElementsByName(i, s))
                  t.setValue(e.id, { value: !1 });
                t.setValue(s, { value: n });
              });
              n.addEventListener("resetform", (t) => {
                const s = e.defaultFieldValue;
                t.target.checked = null != s && s === e.buttonValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                const i = e.buttonValue;
                n.addEventListener("updatefromsandbox", (e) => {
                  const n = {
                    value: (e) => {
                      const n = i === e.detail.value;
                      for (const i of this._getElementsByName(e.target.name)) {
                        const e = n && i.id === s;
                        i.domElement && (i.domElement.checked = e);
                        t.setValue(i.id, { value: e });
                      }
                    },
                  };
                  this._dispatchEventFromSandbox(n, e);
                });
                this._setEventListeners(
                  n,
                  [
                    ["change", "Validate"],
                    ["change", "Action"],
                    ["focus", "Focus"],
                    ["blur", "Blur"],
                    ["mousedown", "Mouse Down"],
                    ["mouseenter", "Mouse Enter"],
                    ["mouseleave", "Mouse Exit"],
                    ["mouseup", "Mouse Up"],
                  ],
                  (t) => t.target.checked
                );
              }
              this._setBackgroundColor(n);
              this._setDefaultPropertiesFromJS(n);
              this.container.append(n);
              return this.container;
            }
          }
          class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
            constructor(t) {
              super(t, { ignoreBorder: t.data.hasAppearance });
            }
            render() {
              const t = super.render();
              t.classList.add("buttonWidgetAnnotation", "pushButton");
              this.data.alternativeText &&
                (t.title = this.data.alternativeText);
              const e = t.lastChild;
              if (this.enableScripting && this.hasJSActions && e) {
                this._setDefaultPropertiesFromJS(e);
                e.addEventListener("updatefromsandbox", (t) => {
                  this._dispatchEventFromSandbox({}, t);
                });
              }
              return t;
            }
          }
          class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(t) {
              super(t, { isRenderable: t.renderForms });
            }
            render() {
              this.container.classList.add("choiceWidgetAnnotation");
              const t = this.annotationStorage,
                e = this.data.id,
                s = t.getValue(e, { value: this.data.fieldValue }),
                i = document.createElement("select");
              c.add(i);
              i.setAttribute("data-element-id", e);
              i.disabled = this.data.readOnly;
              this._setRequired(i, this.data.required);
              i.name = this.data.fieldName;
              i.tabIndex = l;
              let n = this.data.combo && this.data.options.length > 0;
              if (!this.data.combo) {
                i.size = this.data.options.length;
                this.data.multiSelect && (i.multiple = !0);
              }
              i.addEventListener("resetform", (t) => {
                const e = this.data.defaultFieldValue;
                for (const t of i.options) t.selected = t.value === e;
              });
              for (const t of this.data.options) {
                const e = document.createElement("option");
                e.textContent = t.displayValue;
                e.value = t.exportValue;
                if (s.value.includes(t.exportValue)) {
                  e.setAttribute("selected", !0);
                  n = !1;
                }
                i.append(e);
              }
              let a = null;
              if (n) {
                const t = document.createElement("option");
                t.value = " ";
                t.setAttribute("hidden", !0);
                t.setAttribute("selected", !0);
                i.prepend(t);
                a = () => {
                  t.remove();
                  i.removeEventListener("input", a);
                  a = null;
                };
                i.addEventListener("input", a);
              }
              const getValue = (t) => {
                const e = t ? "value" : "textContent",
                  { options: s, multiple: n } = i;
                return n
                  ? Array.prototype.filter
                      .call(s, (t) => t.selected)
                      .map((t) => t[e])
                  : -1 === s.selectedIndex
                  ? null
                  : s[s.selectedIndex][e];
              };
              let r = getValue(!1);
              const getItems = (t) => {
                const e = t.target.options;
                return Array.prototype.map.call(e, (t) => ({
                  displayValue: t.textContent,
                  exportValue: t.value,
                }));
              };
              if (this.enableScripting && this.hasJSActions) {
                i.addEventListener("updatefromsandbox", (s) => {
                  const n = {
                    value(s) {
                      a?.();
                      const n = s.detail.value,
                        o = new Set(Array.isArray(n) ? n : [n]);
                      for (const t of i.options) t.selected = o.has(t.value);
                      t.setValue(e, { value: getValue(!0) });
                      r = getValue(!1);
                    },
                    multipleSelection(t) {
                      i.multiple = !0;
                    },
                    remove(s) {
                      const n = i.options,
                        a = s.detail.remove;
                      n[a].selected = !1;
                      i.remove(a);
                      if (n.length > 0) {
                        -1 ===
                          Array.prototype.findIndex.call(
                            n,
                            (t) => t.selected
                          ) && (n[0].selected = !0);
                      }
                      t.setValue(e, {
                        value: getValue(!0),
                        items: getItems(s),
                      });
                      r = getValue(!1);
                    },
                    clear(s) {
                      for (; 0 !== i.length; ) i.remove(0);
                      t.setValue(e, { value: null, items: [] });
                      r = getValue(!1);
                    },
                    insert(s) {
                      const {
                          index: n,
                          displayValue: a,
                          exportValue: o,
                        } = s.detail.insert,
                        l = i.children[n],
                        c = document.createElement("option");
                      c.textContent = a;
                      c.value = o;
                      l ? l.before(c) : i.append(c);
                      t.setValue(e, {
                        value: getValue(!0),
                        items: getItems(s),
                      });
                      r = getValue(!1);
                    },
                    items(s) {
                      const { items: n } = s.detail;
                      for (; 0 !== i.length; ) i.remove(0);
                      for (const t of n) {
                        const { displayValue: e, exportValue: s } = t,
                          n = document.createElement("option");
                        n.textContent = e;
                        n.value = s;
                        i.append(n);
                      }
                      i.options.length > 0 && (i.options[0].selected = !0);
                      t.setValue(e, {
                        value: getValue(!0),
                        items: getItems(s),
                      });
                      r = getValue(!1);
                    },
                    indices(s) {
                      const i = new Set(s.detail.indices);
                      for (const t of s.target.options)
                        t.selected = i.has(t.index);
                      t.setValue(e, { value: getValue(!0) });
                      r = getValue(!1);
                    },
                    editable(t) {
                      t.target.disabled = !t.detail.editable;
                    },
                  };
                  this._dispatchEventFromSandbox(n, s);
                });
                i.addEventListener("input", (s) => {
                  const i = getValue(!0);
                  t.setValue(e, { value: i });
                  s.preventDefault();
                  this.linkService.eventBus?.dispatch(
                    "dispatcheventinsandbox",
                    {
                      source: this,
                      detail: {
                        id: e,
                        name: "Keystroke",
                        value: r,
                        changeEx: i,
                        willCommit: !1,
                        commitKey: 1,
                        keyDown: !1,
                      },
                    }
                  );
                });
                this._setEventListeners(
                  i,
                  [
                    ["focus", "Focus"],
                    ["blur", "Blur"],
                    ["mousedown", "Mouse Down"],
                    ["mouseenter", "Mouse Enter"],
                    ["mouseleave", "Mouse Exit"],
                    ["mouseup", "Mouse Up"],
                    ["input", "Action"],
                    ["input", "Validate"],
                  ],
                  (t) => t.target.value
                );
              } else
                i.addEventListener("input", function (s) {
                  t.setValue(e, { value: getValue(!0) });
                });
              this.data.combo && this._setTextStyle(i);
              this._setBackgroundColor(i);
              this._setDefaultPropertiesFromJS(i);
              this.container.append(i);
              return this.container;
            }
          }
          class PopupAnnotationElement extends AnnotationElement {
            static IGNORE_TYPES = new Set([
              "Line",
              "Square",
              "Circle",
              "PolyLine",
              "Polygon",
              "Ink",
            ]);
            constructor(t) {
              const { data: e } = t;
              super(t, {
                isRenderable:
                  !PopupAnnotationElement.IGNORE_TYPES.has(e.parentType) &&
                  !!(e.titleObj?.str || e.contentsObj?.str || e.richText?.str),
              });
            }
            render() {
              this.container.classList.add("popupAnnotation");
              const t = this.layer.querySelectorAll(
                `[data-annotation-id="${this.data.parentId}"]`
              );
              if (0 === t.length) return this.container;
              const e = new PopupElement({
                  container: this.container,
                  trigger: Array.from(t),
                  color: this.data.color,
                  titleObj: this.data.titleObj,
                  modificationDate: this.data.modificationDate,
                  contentsObj: this.data.contentsObj,
                  richText: this.data.richText,
                }),
                s = this.page,
                n = i.Util.normalizeRect([
                  this.data.parentRect[0],
                  s.view[3] - this.data.parentRect[1] + s.view[1],
                  this.data.parentRect[2],
                  s.view[3] - this.data.parentRect[3] + s.view[1],
                ]),
                a = n[0] + this.data.parentRect[2] - this.data.parentRect[0],
                r = n[1],
                {
                  pageWidth: o,
                  pageHeight: l,
                  pageX: c,
                  pageY: h,
                } = this.viewport.rawDims;
              this.container.style.left = (100 * (a - c)) / o + "%";
              this.container.style.top = (100 * (r - h)) / l + "%";
              this.container.append(e.render());
              return this.container;
            }
          }
          class PopupElement {
            constructor(t) {
              this.container = t.container;
              this.trigger = t.trigger;
              this.color = t.color;
              this.titleObj = t.titleObj;
              this.modificationDate = t.modificationDate;
              this.contentsObj = t.contentsObj;
              this.richText = t.richText;
              this.hideWrapper = t.hideWrapper || !1;
              this.pinned = !1;
            }
            render() {
              const t = document.createElement("div");
              t.classList.add("popupWrapper");
              this.hideElement = this.hideWrapper ? t : this.container;
              this.hideElement.hidden = !0;
              const e = document.createElement("div");
              e.classList.add("popup");
              const s = this.color;
              if (s) {
                const t = 0.7 * (255 - s[0]) + s[0],
                  n = 0.7 * (255 - s[1]) + s[1],
                  a = 0.7 * (255 - s[2]) + s[2];
                e.style.backgroundColor = i.Util.makeHexColor(
                  0 | t,
                  0 | n,
                  0 | a
                );
              }
              const a = document.createElement("h1");
              a.dir = this.titleObj.dir;
              a.textContent = this.titleObj.str;
              e.append(a);
              const r = n.PDFDateString.toDateObject(this.modificationDate);
              if (r) {
                const t = document.createElement("span");
                t.classList.add("popupDate");
                t.textContent = "{{date}}, {{time}}";
                t.dataset.l10nId = "annotation_date_string";
                t.dataset.l10nArgs = JSON.stringify({
                  date: r.toLocaleDateString(),
                  time: r.toLocaleTimeString(),
                });
                e.append(t);
              }
              if (
                !this.richText?.str ||
                (this.contentsObj?.str &&
                  this.contentsObj.str !== this.richText.str)
              ) {
                const t = this._formatContents(this.contentsObj);
                e.append(t);
              } else {
                o.XfaLayer.render({
                  xfaHtml: this.richText.html,
                  intent: "richText",
                  div: e,
                });
                e.lastChild.classList.add("richText", "popupContent");
              }
              Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
              for (const t of this.trigger) {
                t.addEventListener("click", this._toggle.bind(this));
                t.addEventListener("mouseover", this._show.bind(this, !1));
                t.addEventListener("mouseout", this._hide.bind(this, !1));
              }
              e.addEventListener("click", this._hide.bind(this, !0));
              t.append(e);
              return t;
            }
            _formatContents({ str: t, dir: e }) {
              const s = document.createElement("p");
              s.classList.add("popupContent");
              s.dir = e;
              const i = t.split(/(?:\r\n?|\n)/);
              for (let t = 0, e = i.length; t < e; ++t) {
                const n = i[t];
                s.append(document.createTextNode(n));
                t < e - 1 && s.append(document.createElement("br"));
              }
              return s;
            }
            _toggle() {
              this.pinned ? this._hide(!0) : this._show(!0);
            }
            _show(t = !1) {
              t && (this.pinned = !0);
              if (this.hideElement.hidden) {
                this.hideElement.hidden = !1;
                this.container.style.zIndex =
                  parseInt(this.container.style.zIndex) + 1e3;
              }
            }
            _hide(t = !0) {
              t && (this.pinned = !1);
              if (!this.hideElement.hidden && !this.pinned) {
                this.hideElement.hidden = !0;
                this.container.style.zIndex =
                  parseInt(this.container.style.zIndex) - 1e3;
              }
            }
          }
          class FreeTextAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
              this.textContent = t.data.textContent;
            }
            render() {
              this.container.classList.add("freeTextAnnotation");
              if (this.textContent) {
                const t = document.createElement("div");
                t.classList.add("annotationTextContent");
                t.setAttribute("role", "comment");
                for (const e of this.textContent) {
                  const s = document.createElement("span");
                  s.textContent = e;
                  t.append(s);
                }
                this.container.append(t);
              }
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }
          class LineAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.classList.add("lineAnnotation");
              const t = this.data,
                { width: e, height: s } = getRectDims(t.rect),
                i = this.svgFactory.create(e, s, !0),
                n = this.svgFactory.createElement("svg:line");
              n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]);
              n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]);
              n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]);
              n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]);
              n.setAttribute("stroke-width", t.borderStyle.width || 1);
              n.setAttribute("stroke", "transparent");
              n.setAttribute("fill", "transparent");
              i.append(n);
              this.container.append(i);
              this._createPopup(n, t);
              return this.container;
            }
          }
          class SquareAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.classList.add("squareAnnotation");
              const t = this.data,
                { width: e, height: s } = getRectDims(t.rect),
                i = this.svgFactory.create(e, s, !0),
                n = t.borderStyle.width,
                a = this.svgFactory.createElement("svg:rect");
              a.setAttribute("x", n / 2);
              a.setAttribute("y", n / 2);
              a.setAttribute("width", e - n);
              a.setAttribute("height", s - n);
              a.setAttribute("stroke-width", n || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              i.append(a);
              this.container.append(i);
              this._createPopup(a, t);
              return this.container;
            }
          }
          class CircleAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.classList.add("circleAnnotation");
              const t = this.data,
                { width: e, height: s } = getRectDims(t.rect),
                i = this.svgFactory.create(e, s, !0),
                n = t.borderStyle.width,
                a = this.svgFactory.createElement("svg:ellipse");
              a.setAttribute("cx", e / 2);
              a.setAttribute("cy", s / 2);
              a.setAttribute("rx", e / 2 - n / 2);
              a.setAttribute("ry", s / 2 - n / 2);
              a.setAttribute("stroke-width", n || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              i.append(a);
              this.container.append(i);
              this._createPopup(a, t);
              return this.container;
            }
          }
          class PolylineAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
              this.containerClassName = "polylineAnnotation";
              this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const t = this.data,
                { width: e, height: s } = getRectDims(t.rect),
                i = this.svgFactory.create(e, s, !0);
              let n = [];
              for (const e of t.vertices) {
                const s = e.x - t.rect[0],
                  i = t.rect[3] - e.y;
                n.push(s + "," + i);
              }
              n = n.join(" ");
              const a = this.svgFactory.createElement(this.svgElementName);
              a.setAttribute("points", n);
              a.setAttribute("stroke-width", t.borderStyle.width || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              i.append(a);
              this.container.append(i);
              this._createPopup(a, t);
              return this.container;
            }
          }
          class PolygonAnnotationElement extends PolylineAnnotationElement {
            constructor(t) {
              super(t);
              this.containerClassName = "polygonAnnotation";
              this.svgElementName = "svg:polygon";
            }
          }
          class CaretAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.classList.add("caretAnnotation");
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }
          class InkAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
              this.containerClassName = "inkAnnotation";
              this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const t = this.data,
                { width: e, height: s } = getRectDims(t.rect),
                i = this.svgFactory.create(e, s, !0);
              for (const e of t.inkLists) {
                let s = [];
                for (const i of e) {
                  const e = i.x - t.rect[0],
                    n = t.rect[3] - i.y;
                  s.push(`${e},${n}`);
                }
                s = s.join(" ");
                const n = this.svgFactory.createElement(this.svgElementName);
                n.setAttribute("points", s);
                n.setAttribute("stroke-width", t.borderStyle.width || 1);
                n.setAttribute("stroke", "transparent");
                n.setAttribute("fill", "transparent");
                this._createPopup(n, t);
                i.append(n);
              }
              this.container.append(i);
              return this.container;
            }
          }
          class HighlightAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("highlightAnnotation");
              this.container.classList.add("highlightAnnotation");
              return this.container;
            }
          }
          class UnderlineAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("underlineAnnotation");
              this.container.classList.add("underlineAnnotation");
              return this.container;
            }
          }
          class SquigglyAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("squigglyAnnotation");
              this.container.classList.add("squigglyAnnotation");
              return this.container;
            }
          }
          class StrikeOutAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("strikeoutAnnotation");
              this.container.classList.add("strikeoutAnnotation");
              return this.container;
            }
          }
          class StampAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, {
                isRenderable: !!(
                  t.data.hasPopup ||
                  t.data.titleObj?.str ||
                  t.data.contentsObj?.str ||
                  t.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.classList.add("stampAnnotation");
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }
          class FileAttachmentAnnotationElement extends AnnotationElement {
            constructor(t) {
              super(t, { isRenderable: !0 });
              const { filename: e, content: s } = this.data.file;
              this.filename = (0, n.getFilenameFromUrl)(e, !0);
              this.content = s;
              this.linkService.eventBus?.dispatch("fileattachmentannotation", {
                source: this,
                filename: e,
                content: s,
              });
            }
            render() {
              this.container.classList.add("fileAttachmentAnnotation");
              let t;
              if (this.data.hasAppearance) t = document.createElement("div");
              else {
                t = document.createElement("img");
                t.src = `${this.imageResourcesPath}annotation-${
                  /paperclip/i.test(this.data.name) ? "paperclip" : "pushpin"
                }.svg`;
              }
              t.classList.add("popupTriggerArea");
              t.addEventListener("dblclick", this._download.bind(this));
              !this.data.hasPopup &&
                (this.data.titleObj?.str ||
                  this.data.contentsObj?.str ||
                  this.data.richText) &&
                this._createPopup(t, this.data);
              this.container.append(t);
              return this.container;
            }
            _download() {
              this.downloadManager?.openOrDownloadData(
                this.container,
                this.content,
                this.filename
              );
            }
          }
          class AnnotationLayer {
            static #He(t, e, s, i) {
              const a = t.firstChild || t;
              a.id = `${n.AnnotationPrefix}${e}`;
              s.append(t);
              i?.moveElementInDOM(s, t, a, !1);
            }
            static render(t) {
              const {
                annotations: e,
                div: s,
                viewport: r,
                accessibilityManager: o,
              } = t;
              (0, n.setLayerDimensions)(s, r);
              const l = {
                data: null,
                layer: s,
                page: t.page,
                viewport: r,
                linkService: t.linkService,
                downloadManager: t.downloadManager,
                imageResourcesPath: t.imageResourcesPath || "",
                renderForms: !1 !== t.renderForms,
                svgFactory: new n.DOMSVGFactory(),
                annotationStorage:
                  t.annotationStorage || new a.AnnotationStorage(),
                enableScripting: !0 === t.enableScripting,
                hasJSActions: t.hasJSActions,
                fieldObjects: t.fieldObjects,
              };
              let c = 0;
              for (const t of e) {
                if (t.noHTML) continue;
                if (t.annotationType !== i.AnnotationType.POPUP) {
                  const { width: e, height: s } = getRectDims(t.rect);
                  if (e <= 0 || s <= 0) continue;
                }
                l.data = t;
                const e = AnnotationElementFactory.create(l);
                if (!e.isRenderable) continue;
                const n = e.render();
                t.hidden && (n.style.visibility = "hidden");
                if (Array.isArray(n))
                  for (const e of n) {
                    e.style.zIndex = c++;
                    AnnotationLayer.#He(e, t.id, s, o);
                  }
                else {
                  n.style.zIndex = c++;
                  e instanceof PopupAnnotationElement
                    ? s.prepend(n)
                    : AnnotationLayer.#He(n, t.id, s, o);
                }
              }
              this.#ze(s, t.annotationCanvasMap);
            }
            static update(t) {
              const { annotationCanvasMap: e, div: s, viewport: i } = t;
              (0, n.setLayerDimensions)(s, { rotation: i.rotation });
              this.#ze(s, e);
              s.hidden = !1;
            }
            static #ze(t, e) {
              if (e) {
                for (const [s, i] of e) {
                  const e = t.querySelector(`[data-annotation-id="${s}"]`);
                  if (!e) continue;
                  const { firstChild: n } = e;
                  n
                    ? "CANVAS" === n.nodeName
                      ? n.replaceWith(i)
                      : n.before(i)
                    : e.append(i);
                }
                e.clear();
              }
            }
          }
          e.AnnotationLayer = AnnotationLayer;
        },
        (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.ColorConverters = void 0;
          function makeColorComp(t) {
            return Math.floor(255 * Math.max(0, Math.min(1, t)))
              .toString(16)
              .padStart(2, "0");
          }
          e.ColorConverters = class ColorConverters {
            static CMYK_G([t, e, s, i]) {
              return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
            }
            static G_CMYK([t]) {
              return ["CMYK", 0, 0, 0, 1 - t];
            }
            static G_RGB([t]) {
              return ["RGB", t, t, t];
            }
            static G_HTML([t]) {
              const e = makeColorComp(t);
              return `#${e}${e}${e}`;
            }
            static RGB_G([t, e, s]) {
              return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
            }
            static RGB_HTML([t, e, s]) {
              return `#${makeColorComp(t)}${makeColorComp(e)}${makeColorComp(
                s
              )}`;
            }
            static T_HTML() {
              return "#00000000";
            }
            static CMYK_RGB([t, e, s, i]) {
              return [
                "RGB",
                1 - Math.min(1, t + i),
                1 - Math.min(1, s + i),
                1 - Math.min(1, e + i),
              ];
            }
            static CMYK_HTML(t) {
              const e = this.CMYK_RGB(t).slice(1);
              return this.RGB_HTML(e);
            }
            static RGB_CMYK([t, e, s]) {
              const i = 1 - t,
                n = 1 - e,
                a = 1 - s;
              return ["CMYK", i, n, a, Math.min(i, n, a)];
            }
          };
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.XfaLayer = void 0;
          var i = s(19);
          e.XfaLayer = class XfaLayer {
            static setupStorage(t, e, s, i, n) {
              const a = i.getValue(e, { value: null });
              switch (s.name) {
                case "textarea":
                  null !== a.value && (t.textContent = a.value);
                  if ("print" === n) break;
                  t.addEventListener("input", (t) => {
                    i.setValue(e, { value: t.target.value });
                  });
                  break;
                case "input":
                  if (
                    "radio" === s.attributes.type ||
                    "checkbox" === s.attributes.type
                  ) {
                    a.value === s.attributes.xfaOn
                      ? t.setAttribute("checked", !0)
                      : a.value === s.attributes.xfaOff &&
                        t.removeAttribute("checked");
                    if ("print" === n) break;
                    t.addEventListener("change", (t) => {
                      i.setValue(e, {
                        value: t.target.checked
                          ? t.target.getAttribute("xfaOn")
                          : t.target.getAttribute("xfaOff"),
                      });
                    });
                  } else {
                    null !== a.value && t.setAttribute("value", a.value);
                    if ("print" === n) break;
                    t.addEventListener("input", (t) => {
                      i.setValue(e, { value: t.target.value });
                    });
                  }
                  break;
                case "select":
                  if (null !== a.value)
                    for (const t of s.children)
                      t.attributes.value === a.value &&
                        (t.attributes.selected = !0);
                  t.addEventListener("input", (t) => {
                    const s = t.target.options,
                      n =
                        -1 === s.selectedIndex ? "" : s[s.selectedIndex].value;
                    i.setValue(e, { value: n });
                  });
              }
            }
            static setAttributes({
              html: t,
              element: e,
              storage: s = null,
              intent: i,
              linkService: n,
            }) {
              const { attributes: a } = e,
                r = t instanceof HTMLAnchorElement;
              "radio" === a.type && (a.name = `${a.name}-${i}`);
              for (const [e, s] of Object.entries(a))
                if (null != s)
                  switch (e) {
                    case "class":
                      s.length && t.setAttribute(e, s.join(" "));
                      break;
                    case "dataId":
                      break;
                    case "id":
                      t.setAttribute("data-element-id", s);
                      break;
                    case "style":
                      Object.assign(t.style, s);
                      break;
                    case "textContent":
                      t.textContent = s;
                      break;
                    default:
                      (!r || ("href" !== e && "newWindow" !== e)) &&
                        t.setAttribute(e, s);
                  }
              r && n.addLinkAttributes(t, a.href, a.newWindow);
              s && a.dataId && this.setupStorage(t, a.dataId, e, s);
            }
            static render(t) {
              const e = t.annotationStorage,
                s = t.linkService,
                n = t.xfaHtml,
                a = t.intent || "display",
                r = document.createElement(n.name);
              n.attributes &&
                this.setAttributes({
                  html: r,
                  element: n,
                  intent: a,
                  linkService: s,
                });
              const o = [[n, -1, r]],
                l = t.div;
              l.append(r);
              if (t.viewport) {
                const e = `matrix(${t.viewport.transform.join(",")})`;
                l.style.transform = e;
              }
              "richText" !== a && l.setAttribute("class", "xfaLayer xfaFont");
              const c = [];
              for (; o.length > 0; ) {
                const [t, n, r] = o.at(-1);
                if (n + 1 === t.children.length) {
                  o.pop();
                  continue;
                }
                const l = t.children[++o.at(-1)[1]];
                if (null === l) continue;
                const { name: h } = l;
                if ("#text" === h) {
                  const t = document.createTextNode(l.value);
                  c.push(t);
                  r.append(t);
                  continue;
                }
                let d;
                d = l?.attributes?.xmlns
                  ? document.createElementNS(l.attributes.xmlns, h)
                  : document.createElement(h);
                r.append(d);
                l.attributes &&
                  this.setAttributes({
                    html: d,
                    element: l,
                    storage: e,
                    intent: a,
                    linkService: s,
                  });
                if (l.children && l.children.length > 0) o.push([l, -1, d]);
                else if (l.value) {
                  const t = document.createTextNode(l.value);
                  i.XfaText.shouldBuildText(h) && c.push(t);
                  d.append(t);
                }
              }
              for (const t of l.querySelectorAll(
                ".xfaNonInteractive input, .xfaNonInteractive textarea"
              ))
                t.setAttribute("readOnly", !0);
              return { textDivs: c };
            }
            static update(t) {
              const e = `matrix(${t.viewport.transform.join(",")})`;
              t.div.style.transform = e;
              t.div.hidden = !1;
            }
          };
        },
        (t, e, s) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.SVGGraphics = void 0;
          var i = s(6),
            n = s(1),
            a = s(10);
          let r = class {
            constructor() {
              (0, n.unreachable)("Not implemented: SVGGraphics");
            }
          };
          e.SVGGraphics = r;
          {
            const o = {
                fontStyle: "normal",
                fontWeight: "normal",
                fillColor: "#000000",
              },
              l = "http://www.w3.org/XML/1998/namespace",
              c = "http://www.w3.org/1999/xlink",
              h = ["butt", "round", "square"],
              d = ["miter", "round", "bevel"],
              createObjectURL = function (t, e = "", s = !1) {
                if (URL.createObjectURL && "undefined" != typeof Blob && !s)
                  return URL.createObjectURL(new Blob([t], { type: e }));
                const i =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                let n = `data:${e};base64,`;
                for (let e = 0, s = t.length; e < s; e += 3) {
                  const a = 255 & t[e],
                    r = 255 & t[e + 1],
                    o = 255 & t[e + 2];
                  n +=
                    i[a >> 2] +
                    i[((3 & a) << 4) | (r >> 4)] +
                    i[e + 1 < s ? ((15 & r) << 2) | (o >> 6) : 64] +
                    i[e + 2 < s ? 63 & o : 64];
                }
                return n;
              },
              u = (function () {
                const t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                  e = new Int32Array(256);
                for (let t = 0; t < 256; t++) {
                  let s = t;
                  for (let t = 0; t < 8; t++)
                    s =
                      1 & s
                        ? 3988292384 ^ ((s >> 1) & 2147483647)
                        : (s >> 1) & 2147483647;
                  e[t] = s;
                }
                function writePngChunk(t, s, i, n) {
                  let a = n;
                  const r = s.length;
                  i[a] = (r >> 24) & 255;
                  i[a + 1] = (r >> 16) & 255;
                  i[a + 2] = (r >> 8) & 255;
                  i[a + 3] = 255 & r;
                  a += 4;
                  i[a] = 255 & t.charCodeAt(0);
                  i[a + 1] = 255 & t.charCodeAt(1);
                  i[a + 2] = 255 & t.charCodeAt(2);
                  i[a + 3] = 255 & t.charCodeAt(3);
                  a += 4;
                  i.set(s, a);
                  a += s.length;
                  const o = (function crc32(t, s, i) {
                    let n = -1;
                    for (let a = s; a < i; a++) {
                      const s = 255 & (n ^ t[a]);
                      n = (n >>> 8) ^ e[s];
                    }
                    return -1 ^ n;
                  })(i, n + 4, a);
                  i[a] = (o >> 24) & 255;
                  i[a + 1] = (o >> 16) & 255;
                  i[a + 2] = (o >> 8) & 255;
                  i[a + 3] = 255 & o;
                }
                function deflateSyncUncompressed(t) {
                  let e = t.length;
                  const s = 65535,
                    i = Math.ceil(e / s),
                    n = new Uint8Array(2 + e + 5 * i + 4);
                  let a = 0;
                  n[a++] = 120;
                  n[a++] = 156;
                  let r = 0;
                  for (; e > s; ) {
                    n[a++] = 0;
                    n[a++] = 255;
                    n[a++] = 255;
                    n[a++] = 0;
                    n[a++] = 0;
                    n.set(t.subarray(r, r + s), a);
                    a += s;
                    r += s;
                    e -= s;
                  }
                  n[a++] = 1;
                  n[a++] = 255 & e;
                  n[a++] = (e >> 8) & 255;
                  n[a++] = 255 & ~e;
                  n[a++] = ((65535 & ~e) >> 8) & 255;
                  n.set(t.subarray(r), a);
                  a += t.length - r;
                  const o = (function adler32(t, e, s) {
                    let i = 1,
                      n = 0;
                    for (let a = e; a < s; ++a) {
                      i = (i + (255 & t[a])) % 65521;
                      n = (n + i) % 65521;
                    }
                    return (n << 16) | i;
                  })(t, 0, t.length);
                  n[a++] = (o >> 24) & 255;
                  n[a++] = (o >> 16) & 255;
                  n[a++] = (o >> 8) & 255;
                  n[a++] = 255 & o;
                  return n;
                }
                function encode(e, s, i, r) {
                  const o = e.width,
                    l = e.height;
                  let c, h, d;
                  const u = e.data;
                  switch (s) {
                    case n.ImageKind.GRAYSCALE_1BPP:
                      h = 0;
                      c = 1;
                      d = (o + 7) >> 3;
                      break;
                    case n.ImageKind.RGB_24BPP:
                      h = 2;
                      c = 8;
                      d = 3 * o;
                      break;
                    case n.ImageKind.RGBA_32BPP:
                      h = 6;
                      c = 8;
                      d = 4 * o;
                      break;
                    default:
                      throw new Error("invalid format");
                  }
                  const p = new Uint8Array((1 + d) * l);
                  let f = 0,
                    g = 0;
                  for (let t = 0; t < l; ++t) {
                    p[f++] = 0;
                    p.set(u.subarray(g, g + d), f);
                    g += d;
                    f += d;
                  }
                  if (s === n.ImageKind.GRAYSCALE_1BPP && r) {
                    f = 0;
                    for (let t = 0; t < l; t++) {
                      f++;
                      for (let t = 0; t < d; t++) p[f++] ^= 255;
                    }
                  }
                  const m = new Uint8Array([
                      (o >> 24) & 255,
                      (o >> 16) & 255,
                      (o >> 8) & 255,
                      255 & o,
                      (l >> 24) & 255,
                      (l >> 16) & 255,
                      (l >> 8) & 255,
                      255 & l,
                      c,
                      h,
                      0,
                      0,
                      0,
                    ]),
                    b = (function deflateSync(t) {
                      if (!a.isNodeJS) return deflateSyncUncompressed(t);
                      try {
                        let e;
                        e =
                          parseInt(process.versions.node) >= 8
                            ? t
                            : Buffer.from(t);
                        const s = require("zlib").deflateSync(e, { level: 9 });
                        return s instanceof Uint8Array ? s : new Uint8Array(s);
                      } catch (t) {
                        (0, n.warn)(
                          "Not compressing PNG because zlib.deflateSync is unavailable: " +
                            t
                        );
                      }
                      return deflateSyncUncompressed(t);
                    })(p),
                    A = t.length + 36 + m.length + b.length,
                    _ = new Uint8Array(A);
                  let y = 0;
                  _.set(t, y);
                  y += t.length;
                  writePngChunk("IHDR", m, _, y);
                  y += 12 + m.length;
                  writePngChunk("IDATA", b, _, y);
                  y += 12 + b.length;
                  writePngChunk("IEND", new Uint8Array(0), _, y);
                  return createObjectURL(_, "image/png", i);
                }
                return function convertImgDataToPng(t, e, s) {
                  return encode(
                    t,
                    void 0 === t.kind ? n.ImageKind.GRAYSCALE_1BPP : t.kind,
                    e,
                    s
                  );
                };
              })();
            class SVGExtraState {
              constructor() {
                this.fontSizeScale = 1;
                this.fontWeight = o.fontWeight;
                this.fontSize = 0;
                this.textMatrix = n.IDENTITY_MATRIX;
                this.fontMatrix = n.FONT_IDENTITY_MATRIX;
                this.leading = 0;
                this.textRenderingMode = n.TextRenderingMode.FILL;
                this.textMatrixScale = 1;
                this.x = 0;
                this.y = 0;
                this.lineX = 0;
                this.lineY = 0;
                this.charSpacing = 0;
                this.wordSpacing = 0;
                this.textHScale = 1;
                this.textRise = 0;
                this.fillColor = o.fillColor;
                this.strokeColor = "#000000";
                this.fillAlpha = 1;
                this.strokeAlpha = 1;
                this.lineWidth = 1;
                this.lineJoin = "";
                this.lineCap = "";
                this.miterLimit = 0;
                this.dashArray = [];
                this.dashPhase = 0;
                this.dependencies = [];
                this.activeClipUrl = null;
                this.clipGroup = null;
                this.maskId = "";
              }
              clone() {
                return Object.create(this);
              }
              setCurrentPoint(t, e) {
                this.x = t;
                this.y = e;
              }
            }
            function opListToTree(t) {
              let e = [];
              const s = [];
              for (const i of t)
                if ("save" !== i.fn)
                  "restore" === i.fn ? (e = s.pop()) : e.push(i);
                else {
                  e.push({ fnId: 92, fn: "group", items: [] });
                  s.push(e);
                  e = e.at(-1).items;
                }
              return e;
            }
            function pf(t) {
              if (Number.isInteger(t)) return t.toString();
              const e = t.toFixed(10);
              let s = e.length - 1;
              if ("0" !== e[s]) return e;
              do {
                s--;
              } while ("0" === e[s]);
              return e.substring(0, "." === e[s] ? s : s + 1);
            }
            function pm(t) {
              if (0 === t[4] && 0 === t[5]) {
                if (0 === t[1] && 0 === t[2])
                  return 1 === t[0] && 1 === t[3]
                    ? ""
                    : `scale(${pf(t[0])} ${pf(t[3])})`;
                if (t[0] === t[3] && t[1] === -t[2]) {
                  return `rotate(${pf((180 * Math.acos(t[0])) / Math.PI)})`;
                }
              } else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3])
                return `translate(${pf(t[4])} ${pf(t[5])})`;
              return `matrix(${pf(t[0])} ${pf(t[1])} ${pf(t[2])} ${pf(
                t[3]
              )} ${pf(t[4])} ${pf(t[5])})`;
            }
            let p = 0,
              f = 0,
              g = 0;
            e.SVGGraphics = r = class {
              constructor(t, e, s = !1) {
                (0, i.deprecated)(
                  "The SVG back-end is no longer maintained and *may* be removed in the future."
                );
                this.svgFactory = new i.DOMSVGFactory();
                this.current = new SVGExtraState();
                this.transformMatrix = n.IDENTITY_MATRIX;
                this.transformStack = [];
                this.extraStack = [];
                this.commonObjs = t;
                this.objs = e;
                this.pendingClip = null;
                this.pendingEOFill = !1;
                this.embedFonts = !1;
                this.embeddedFonts = Object.create(null);
                this.cssStyle = null;
                this.forceDataSchema = !!s;
                this._operatorIdMapping = [];
                for (const t in n.OPS) this._operatorIdMapping[n.OPS[t]] = t;
              }
              getObject(t, e = null) {
                return "string" == typeof t
                  ? t.startsWith("g_")
                    ? this.commonObjs.get(t)
                    : this.objs.get(t)
                  : e;
              }
              save() {
                this.transformStack.push(this.transformMatrix);
                const t = this.current;
                this.extraStack.push(t);
                this.current = t.clone();
              }
              restore() {
                this.transformMatrix = this.transformStack.pop();
                this.current = this.extraStack.pop();
                this.pendingClip = null;
                this.tgrp = null;
              }
              group(t) {
                this.save();
                this.executeOpTree(t);
                this.restore();
              }
              loadDependencies(t) {
                const e = t.fnArray,
                  s = t.argsArray;
                for (let t = 0, i = e.length; t < i; t++)
                  if (e[t] === n.OPS.dependency)
                    for (const e of s[t]) {
                      const t = e.startsWith("g_")
                          ? this.commonObjs
                          : this.objs,
                        s = new Promise((s) => {
                          t.get(e, s);
                        });
                      this.current.dependencies.push(s);
                    }
                return Promise.all(this.current.dependencies);
              }
              transform(t, e, s, i, a, r) {
                const o = [t, e, s, i, a, r];
                this.transformMatrix = n.Util.transform(
                  this.transformMatrix,
                  o
                );
                this.tgrp = null;
              }
              getSVG(t, e) {
                this.viewport = e;
                const s = this._initialize(e);
                return this.loadDependencies(t).then(() => {
                  this.transformMatrix = n.IDENTITY_MATRIX;
                  this.executeOpTree(this.convertOpList(t));
                  return s;
                });
              }
              convertOpList(t) {
                const e = this._operatorIdMapping,
                  s = t.argsArray,
                  i = t.fnArray,
                  n = [];
                for (let t = 0, a = i.length; t < a; t++) {
                  const a = i[t];
                  n.push({ fnId: a, fn: e[a], args: s[t] });
                }
                return opListToTree(n);
              }
              executeOpTree(t) {
                for (const e of t) {
                  const t = e.fn,
                    s = e.fnId,
                    i = e.args;
                  switch (0 | s) {
                    case n.OPS.beginText:
                      this.beginText();
                      break;
                    case n.OPS.dependency:
                      break;
                    case n.OPS.setLeading:
                      this.setLeading(i);
                      break;
                    case n.OPS.setLeadingMoveText:
                      this.setLeadingMoveText(i[0], i[1]);
                      break;
                    case n.OPS.setFont:
                      this.setFont(i);
                      break;
                    case n.OPS.showText:
                    case n.OPS.showSpacedText:
                      this.showText(i[0]);
                      break;
                    case n.OPS.endText:
                      this.endText();
                      break;
                    case n.OPS.moveText:
                      this.moveText(i[0], i[1]);
                      break;
                    case n.OPS.setCharSpacing:
                      this.setCharSpacing(i[0]);
                      break;
                    case n.OPS.setWordSpacing:
                      this.setWordSpacing(i[0]);
                      break;
                    case n.OPS.setHScale:
                      this.setHScale(i[0]);
                      break;
                    case n.OPS.setTextMatrix:
                      this.setTextMatrix(i[0], i[1], i[2], i[3], i[4], i[5]);
                      break;
                    case n.OPS.setTextRise:
                      this.setTextRise(i[0]);
                      break;
                    case n.OPS.setTextRenderingMode:
                      this.setTextRenderingMode(i[0]);
                      break;
                    case n.OPS.setLineWidth:
                      this.setLineWidth(i[0]);
                      break;
                    case n.OPS.setLineJoin:
                      this.setLineJoin(i[0]);
                      break;
                    case n.OPS.setLineCap:
                      this.setLineCap(i[0]);
                      break;
                    case n.OPS.setMiterLimit:
                      this.setMiterLimit(i[0]);
                      break;
                    case n.OPS.setFillRGBColor:
                      this.setFillRGBColor(i[0], i[1], i[2]);
                      break;
                    case n.OPS.setStrokeRGBColor:
                      this.setStrokeRGBColor(i[0], i[1], i[2]);
                      break;
                    case n.OPS.setStrokeColorN:
                      this.setStrokeColorN(i);
                      break;
                    case n.OPS.setFillColorN:
                      this.setFillColorN(i);
                      break;
                    case n.OPS.shadingFill:
                      this.shadingFill(i[0]);
                      break;
                    case n.OPS.setDash:
                      this.setDash(i[0], i[1]);
                      break;
                    case n.OPS.setRenderingIntent:
                      this.setRenderingIntent(i[0]);
                      break;
                    case n.OPS.setFlatness:
                      this.setFlatness(i[0]);
                      break;
                    case n.OPS.setGState:
                      this.setGState(i[0]);
                      break;
                    case n.OPS.fill:
                      this.fill();
                      break;
                    case n.OPS.eoFill:
                      this.eoFill();
                      break;
                    case n.OPS.stroke:
                      this.stroke();
                      break;
                    case n.OPS.fillStroke:
                      this.fillStroke();
                      break;
                    case n.OPS.eoFillStroke:
                      this.eoFillStroke();
                      break;
                    case n.OPS.clip:
                      this.clip("nonzero");
                      break;
                    case n.OPS.eoClip:
                      this.clip("evenodd");
                      break;
                    case n.OPS.paintSolidColorImageMask:
                      this.paintSolidColorImageMask();
                      break;
                    case n.OPS.paintImageXObject:
                      this.paintImageXObject(i[0]);
                      break;
                    case n.OPS.paintInlineImageXObject:
                      this.paintInlineImageXObject(i[0]);
                      break;
                    case n.OPS.paintImageMaskXObject:
                      this.paintImageMaskXObject(i[0]);
                      break;
                    case n.OPS.paintFormXObjectBegin:
                      this.paintFormXObjectBegin(i[0], i[1]);
                      break;
                    case n.OPS.paintFormXObjectEnd:
                      this.paintFormXObjectEnd();
                      break;
                    case n.OPS.closePath:
                      this.closePath();
                      break;
                    case n.OPS.closeStroke:
                      this.closeStroke();
                      break;
                    case n.OPS.closeFillStroke:
                      this.closeFillStroke();
                      break;
                    case n.OPS.closeEOFillStroke:
                      this.closeEOFillStroke();
                      break;
                    case n.OPS.nextLine:
                      this.nextLine();
                      break;
                    case n.OPS.transform:
                      this.transform(i[0], i[1], i[2], i[3], i[4], i[5]);
                      break;
                    case n.OPS.constructPath:
                      this.constructPath(i[0], i[1]);
                      break;
                    case n.OPS.endPath:
                      this.endPath();
                      break;
                    case 92:
                      this.group(e.items);
                      break;
                    default:
                      (0, n.warn)(`Unimplemented operator ${t}`);
                  }
                }
              }
              setWordSpacing(t) {
                this.current.wordSpacing = t;
              }
              setCharSpacing(t) {
                this.current.charSpacing = t;
              }
              nextLine() {
                this.moveText(0, this.current.leading);
              }
              setTextMatrix(t, e, s, i, n, a) {
                const r = this.current;
                r.textMatrix = r.lineMatrix = [t, e, s, i, n, a];
                r.textMatrixScale = Math.hypot(t, e);
                r.x = r.lineX = 0;
                r.y = r.lineY = 0;
                r.xcoords = [];
                r.ycoords = [];
                r.tspan = this.svgFactory.createElement("svg:tspan");
                r.tspan.setAttributeNS(null, "font-family", r.fontFamily);
                r.tspan.setAttributeNS(
                  null,
                  "font-size",
                  `${pf(r.fontSize)}px`
                );
                r.tspan.setAttributeNS(null, "y", pf(-r.y));
                r.txtElement = this.svgFactory.createElement("svg:text");
                r.txtElement.append(r.tspan);
              }
              beginText() {
                const t = this.current;
                t.x = t.lineX = 0;
                t.y = t.lineY = 0;
                t.textMatrix = n.IDENTITY_MATRIX;
                t.lineMatrix = n.IDENTITY_MATRIX;
                t.textMatrixScale = 1;
                t.tspan = this.svgFactory.createElement("svg:tspan");
                t.txtElement = this.svgFactory.createElement("svg:text");
                t.txtgrp = this.svgFactory.createElement("svg:g");
                t.xcoords = [];
                t.ycoords = [];
              }
              moveText(t, e) {
                const s = this.current;
                s.x = s.lineX += t;
                s.y = s.lineY += e;
                s.xcoords = [];
                s.ycoords = [];
                s.tspan = this.svgFactory.createElement("svg:tspan");
                s.tspan.setAttributeNS(null, "font-family", s.fontFamily);
                s.tspan.setAttributeNS(
                  null,
                  "font-size",
                  `${pf(s.fontSize)}px`
                );
                s.tspan.setAttributeNS(null, "y", pf(-s.y));
              }
              showText(t) {
                const e = this.current,
                  s = e.font,
                  i = e.fontSize;
                if (0 === i) return;
                const a = e.fontSizeScale,
                  r = e.charSpacing,
                  c = e.wordSpacing,
                  h = e.fontDirection,
                  d = e.textHScale * h,
                  u = s.vertical,
                  p = u ? 1 : -1,
                  f = s.defaultVMetrics,
                  g = i * e.fontMatrix[0];
                let m = 0;
                for (const n of t) {
                  if (null === n) {
                    m += h * c;
                    continue;
                  }
                  if ("number" == typeof n) {
                    m += (p * n * i) / 1e3;
                    continue;
                  }
                  const t = (n.isSpace ? c : 0) + r,
                    o = n.fontChar;
                  let l,
                    d,
                    b,
                    A = n.width;
                  if (u) {
                    let t;
                    const e = n.vmetric || f;
                    t = n.vmetric ? e[1] : 0.5 * A;
                    t = -t * g;
                    const s = e[2] * g;
                    A = e ? -e[0] : A;
                    l = t / a;
                    d = (m + s) / a;
                  } else {
                    l = m / a;
                    d = 0;
                  }
                  if (n.isInFont || s.missingFile) {
                    e.xcoords.push(e.x + l);
                    u && e.ycoords.push(-e.y + d);
                    e.tspan.textContent += o;
                  }
                  b = u ? A * g - t * h : A * g + t * h;
                  m += b;
                }
                e.tspan.setAttributeNS(null, "x", e.xcoords.map(pf).join(" "));
                u
                  ? e.tspan.setAttributeNS(
                      null,
                      "y",
                      e.ycoords.map(pf).join(" ")
                    )
                  : e.tspan.setAttributeNS(null, "y", pf(-e.y));
                u ? (e.y -= m) : (e.x += m * d);
                e.tspan.setAttributeNS(null, "font-family", e.fontFamily);
                e.tspan.setAttributeNS(
                  null,
                  "font-size",
                  `${pf(e.fontSize)}px`
                );
                e.fontStyle !== o.fontStyle &&
                  e.tspan.setAttributeNS(null, "font-style", e.fontStyle);
                e.fontWeight !== o.fontWeight &&
                  e.tspan.setAttributeNS(null, "font-weight", e.fontWeight);
                const b =
                  e.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                if (
                  b === n.TextRenderingMode.FILL ||
                  b === n.TextRenderingMode.FILL_STROKE
                ) {
                  e.fillColor !== o.fillColor &&
                    e.tspan.setAttributeNS(null, "fill", e.fillColor);
                  e.fillAlpha < 1 &&
                    e.tspan.setAttributeNS(null, "fill-opacity", e.fillAlpha);
                } else
                  e.textRenderingMode === n.TextRenderingMode.ADD_TO_PATH
                    ? e.tspan.setAttributeNS(null, "fill", "transparent")
                    : e.tspan.setAttributeNS(null, "fill", "none");
                if (
                  b === n.TextRenderingMode.STROKE ||
                  b === n.TextRenderingMode.FILL_STROKE
                ) {
                  const t = 1 / (e.textMatrixScale || 1);
                  this._setStrokeAttributes(e.tspan, t);
                }
                let A = e.textMatrix;
                if (0 !== e.textRise) {
                  A = A.slice();
                  A[5] += e.textRise;
                }
                e.txtElement.setAttributeNS(
                  null,
                  "transform",
                  `${pm(A)} scale(${pf(d)}, -1)`
                );
                e.txtElement.setAttributeNS(l, "xml:space", "preserve");
                e.txtElement.append(e.tspan);
                e.txtgrp.append(e.txtElement);
                this._ensureTransformGroup().append(e.txtElement);
              }
              setLeadingMoveText(t, e) {
                this.setLeading(-e);
                this.moveText(t, e);
              }
              addFontStyle(t) {
                if (!t.data)
                  throw new Error(
                    'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
                  );
                if (!this.cssStyle) {
                  this.cssStyle = this.svgFactory.createElement("svg:style");
                  this.cssStyle.setAttributeNS(null, "type", "text/css");
                  this.defs.append(this.cssStyle);
                }
                const e = createObjectURL(
                  t.data,
                  t.mimetype,
                  this.forceDataSchema
                );
                this.cssStyle.textContent += `@font-face { font-family: "${t.loadedName}"; src: url(${e}); }\n`;
              }
              setFont(t) {
                const e = this.current,
                  s = this.commonObjs.get(t[0]);
                let i = t[1];
                e.font = s;
                if (
                  this.embedFonts &&
                  !s.missingFile &&
                  !this.embeddedFonts[s.loadedName]
                ) {
                  this.addFontStyle(s);
                  this.embeddedFonts[s.loadedName] = s;
                }
                e.fontMatrix = s.fontMatrix || n.FONT_IDENTITY_MATRIX;
                let a = "normal";
                s.black ? (a = "900") : s.bold && (a = "bold");
                const r = s.italic ? "italic" : "normal";
                if (i < 0) {
                  i = -i;
                  e.fontDirection = -1;
                } else e.fontDirection = 1;
                e.fontSize = i;
                e.fontFamily = s.loadedName;
                e.fontWeight = a;
                e.fontStyle = r;
                e.tspan = this.svgFactory.createElement("svg:tspan");
                e.tspan.setAttributeNS(null, "y", pf(-e.y));
                e.xcoords = [];
                e.ycoords = [];
              }
              endText() {
                const t = this.current;
                if (
                  t.textRenderingMode & n.TextRenderingMode.ADD_TO_PATH_FLAG &&
                  t.txtElement?.hasChildNodes()
                ) {
                  t.element = t.txtElement;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
              setLineWidth(t) {
                t > 0 && (this.current.lineWidth = t);
              }
              setLineCap(t) {
                this.current.lineCap = h[t];
              }
              setLineJoin(t) {
                this.current.lineJoin = d[t];
              }
              setMiterLimit(t) {
                this.current.miterLimit = t;
              }
              setStrokeAlpha(t) {
                this.current.strokeAlpha = t;
              }
              setStrokeRGBColor(t, e, s) {
                this.current.strokeColor = n.Util.makeHexColor(t, e, s);
              }
              setFillAlpha(t) {
                this.current.fillAlpha = t;
              }
              setFillRGBColor(t, e, s) {
                this.current.fillColor = n.Util.makeHexColor(t, e, s);
                this.current.tspan = this.svgFactory.createElement("svg:tspan");
                this.current.xcoords = [];
                this.current.ycoords = [];
              }
              setStrokeColorN(t) {
                this.current.strokeColor = this._makeColorN_Pattern(t);
              }
              setFillColorN(t) {
                this.current.fillColor = this._makeColorN_Pattern(t);
              }
              shadingFill(t) {
                const e = this.viewport.width,
                  s = this.viewport.height,
                  i = n.Util.inverseTransform(this.transformMatrix),
                  a = n.Util.applyTransform([0, 0], i),
                  r = n.Util.applyTransform([0, s], i),
                  o = n.Util.applyTransform([e, 0], i),
                  l = n.Util.applyTransform([e, s], i),
                  c = Math.min(a[0], r[0], o[0], l[0]),
                  h = Math.min(a[1], r[1], o[1], l[1]),
                  d = Math.max(a[0], r[0], o[0], l[0]),
                  u = Math.max(a[1], r[1], o[1], l[1]),
                  p = this.svgFactory.createElement("svg:rect");
                p.setAttributeNS(null, "x", c);
                p.setAttributeNS(null, "y", h);
                p.setAttributeNS(null, "width", d - c);
                p.setAttributeNS(null, "height", u - h);
                p.setAttributeNS(null, "fill", this._makeShadingPattern(t));
                this.current.fillAlpha < 1 &&
                  p.setAttributeNS(
                    null,
                    "fill-opacity",
                    this.current.fillAlpha
                  );
                this._ensureTransformGroup().append(p);
              }
              _makeColorN_Pattern(t) {
                return "TilingPattern" === t[0]
                  ? this._makeTilingPattern(t)
                  : this._makeShadingPattern(t);
              }
              _makeTilingPattern(t) {
                const e = t[1],
                  s = t[2],
                  i = t[3] || n.IDENTITY_MATRIX,
                  [a, r, o, l] = t[4],
                  c = t[5],
                  h = t[6],
                  d = t[7],
                  u = "shading" + g++,
                  [p, f, m, b] = n.Util.normalizeRect([
                    ...n.Util.applyTransform([a, r], i),
                    ...n.Util.applyTransform([o, l], i),
                  ]),
                  [A, _] = n.Util.singularValueDecompose2dScale(i),
                  y = c * A,
                  v = h * _,
                  S = this.svgFactory.createElement("svg:pattern");
                S.setAttributeNS(null, "id", u);
                S.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                S.setAttributeNS(null, "width", y);
                S.setAttributeNS(null, "height", v);
                S.setAttributeNS(null, "x", `${p}`);
                S.setAttributeNS(null, "y", `${f}`);
                const x = this.svg,
                  C = this.transformMatrix,
                  E = this.current.fillColor,
                  P = this.current.strokeColor,
                  w = this.svgFactory.create(m - p, b - f);
                this.svg = w;
                this.transformMatrix = i;
                if (2 === d) {
                  const t = n.Util.makeHexColor(...e);
                  this.current.fillColor = t;
                  this.current.strokeColor = t;
                }
                this.executeOpTree(this.convertOpList(s));
                this.svg = x;
                this.transformMatrix = C;
                this.current.fillColor = E;
                this.current.strokeColor = P;
                S.append(w.childNodes[0]);
                this.defs.append(S);
                return `url(#${u})`;
              }
              _makeShadingPattern(t) {
                "string" == typeof t && (t = this.objs.get(t));
                switch (t[0]) {
                  case "RadialAxial":
                    const e = "shading" + g++,
                      s = t[3];
                    let i;
                    switch (t[1]) {
                      case "axial":
                        const s = t[4],
                          n = t[5];
                        i = this.svgFactory.createElement("svg:linearGradient");
                        i.setAttributeNS(null, "id", e);
                        i.setAttributeNS(
                          null,
                          "gradientUnits",
                          "userSpaceOnUse"
                        );
                        i.setAttributeNS(null, "x1", s[0]);
                        i.setAttributeNS(null, "y1", s[1]);
                        i.setAttributeNS(null, "x2", n[0]);
                        i.setAttributeNS(null, "y2", n[1]);
                        break;
                      case "radial":
                        const a = t[4],
                          r = t[5],
                          o = t[6],
                          l = t[7];
                        i = this.svgFactory.createElement("svg:radialGradient");
                        i.setAttributeNS(null, "id", e);
                        i.setAttributeNS(
                          null,
                          "gradientUnits",
                          "userSpaceOnUse"
                        );
                        i.setAttributeNS(null, "cx", r[0]);
                        i.setAttributeNS(null, "cy", r[1]);
                        i.setAttributeNS(null, "r", l);
                        i.setAttributeNS(null, "fx", a[0]);
                        i.setAttributeNS(null, "fy", a[1]);
                        i.setAttributeNS(null, "fr", o);
                        break;
                      default:
                        throw new Error(`Unknown RadialAxial type: ${t[1]}`);
                    }
                    for (const t of s) {
                      const e = this.svgFactory.createElement("svg:stop");
                      e.setAttributeNS(null, "offset", t[0]);
                      e.setAttributeNS(null, "stop-color", t[1]);
                      i.append(e);
                    }
                    this.defs.append(i);
                    return `url(#${e})`;
                  case "Mesh":
                    (0, n.warn)("Unimplemented pattern Mesh");
                    return null;
                  case "Dummy":
                    return "hotpink";
                  default:
                    throw new Error(`Unknown IR type: ${t[0]}`);
                }
              }
              setDash(t, e) {
                this.current.dashArray = t;
                this.current.dashPhase = e;
              }
              constructPath(t, e) {
                const s = this.current;
                let i = s.x,
                  a = s.y,
                  r = [],
                  o = 0;
                for (const s of t)
                  switch (0 | s) {
                    case n.OPS.rectangle:
                      i = e[o++];
                      a = e[o++];
                      const t = i + e[o++],
                        s = a + e[o++];
                      r.push(
                        "M",
                        pf(i),
                        pf(a),
                        "L",
                        pf(t),
                        pf(a),
                        "L",
                        pf(t),
                        pf(s),
                        "L",
                        pf(i),
                        pf(s),
                        "Z"
                      );
                      break;
                    case n.OPS.moveTo:
                      i = e[o++];
                      a = e[o++];
                      r.push("M", pf(i), pf(a));
                      break;
                    case n.OPS.lineTo:
                      i = e[o++];
                      a = e[o++];
                      r.push("L", pf(i), pf(a));
                      break;
                    case n.OPS.curveTo:
                      i = e[o + 4];
                      a = e[o + 5];
                      r.push(
                        "C",
                        pf(e[o]),
                        pf(e[o + 1]),
                        pf(e[o + 2]),
                        pf(e[o + 3]),
                        pf(i),
                        pf(a)
                      );
                      o += 6;
                      break;
                    case n.OPS.curveTo2:
                      r.push(
                        "C",
                        pf(i),
                        pf(a),
                        pf(e[o]),
                        pf(e[o + 1]),
                        pf(e[o + 2]),
                        pf(e[o + 3])
                      );
                      i = e[o + 2];
                      a = e[o + 3];
                      o += 4;
                      break;
                    case n.OPS.curveTo3:
                      i = e[o + 2];
                      a = e[o + 3];
                      r.push(
                        "C",
                        pf(e[o]),
                        pf(e[o + 1]),
                        pf(i),
                        pf(a),
                        pf(i),
                        pf(a)
                      );
                      o += 4;
                      break;
                    case n.OPS.closePath:
                      r.push("Z");
                  }
                r = r.join(" ");
                if (
                  s.path &&
                  t.length > 0 &&
                  t[0] !== n.OPS.rectangle &&
                  t[0] !== n.OPS.moveTo
                )
                  r = s.path.getAttributeNS(null, "d") + r;
                else {
                  s.path = this.svgFactory.createElement("svg:path");
                  this._ensureTransformGroup().append(s.path);
                }
                s.path.setAttributeNS(null, "d", r);
                s.path.setAttributeNS(null, "fill", "none");
                s.element = s.path;
                s.setCurrentPoint(i, a);
              }
              endPath() {
                const t = this.current;
                t.path = null;
                if (!this.pendingClip) return;
                if (!t.element) {
                  this.pendingClip = null;
                  return;
                }
                const e = "clippath" + p++,
                  s = this.svgFactory.createElement("svg:clipPath");
                s.setAttributeNS(null, "id", e);
                s.setAttributeNS(null, "transform", pm(this.transformMatrix));
                const i = t.element.cloneNode(!0);
                "evenodd" === this.pendingClip
                  ? i.setAttributeNS(null, "clip-rule", "evenodd")
                  : i.setAttributeNS(null, "clip-rule", "nonzero");
                this.pendingClip = null;
                s.append(i);
                this.defs.append(s);
                if (t.activeClipUrl) {
                  t.clipGroup = null;
                  for (const t of this.extraStack) t.clipGroup = null;
                  s.setAttributeNS(null, "clip-path", t.activeClipUrl);
                }
                t.activeClipUrl = `url(#${e})`;
                this.tgrp = null;
              }
              clip(t) {
                this.pendingClip = t;
              }
              closePath() {
                const t = this.current;
                if (t.path) {
                  const e = `${t.path.getAttributeNS(null, "d")}Z`;
                  t.path.setAttributeNS(null, "d", e);
                }
              }
              setLeading(t) {
                this.current.leading = -t;
              }
              setTextRise(t) {
                this.current.textRise = t;
              }
              setTextRenderingMode(t) {
                this.current.textRenderingMode = t;
              }
              setHScale(t) {
                this.current.textHScale = t / 100;
              }
              setRenderingIntent(t) {}
              setFlatness(t) {}
              setGState(t) {
                for (const [e, s] of t)
                  switch (e) {
                    case "LW":
                      this.setLineWidth(s);
                      break;
                    case "LC":
                      this.setLineCap(s);
                      break;
                    case "LJ":
                      this.setLineJoin(s);
                      break;
                    case "ML":
                      this.setMiterLimit(s);
                      break;
                    case "D":
                      this.setDash(s[0], s[1]);
                      break;
                    case "RI":
                      this.setRenderingIntent(s);
                      break;
                    case "FL":
                      this.setFlatness(s);
                      break;
                    case "Font":
                      this.setFont(s);
                      break;
                    case "CA":
                      this.setStrokeAlpha(s);
                      break;
                    case "ca":
                      this.setFillAlpha(s);
                      break;
                    default:
                      (0, n.warn)(`Unimplemented graphic state operator ${e}`);
                  }
              }
              fill() {
                const t = this.current;
                if (t.element) {
                  t.element.setAttributeNS(null, "fill", t.fillColor);
                  t.element.setAttributeNS(null, "fill-opacity", t.fillAlpha);
                  this.endPath();
                }
              }
              stroke() {
                const t = this.current;
                if (t.element) {
                  this._setStrokeAttributes(t.element);
                  t.element.setAttributeNS(null, "fill", "none");
                  this.endPath();
                }
              }
              _setStrokeAttributes(t, e = 1) {
                const s = this.current;
                let i = s.dashArray;
                1 !== e &&
                  i.length > 0 &&
                  (i = i.map(function (t) {
                    return e * t;
                  }));
                t.setAttributeNS(null, "stroke", s.strokeColor);
                t.setAttributeNS(null, "stroke-opacity", s.strokeAlpha);
                t.setAttributeNS(null, "stroke-miterlimit", pf(s.miterLimit));
                t.setAttributeNS(null, "stroke-linecap", s.lineCap);
                t.setAttributeNS(null, "stroke-linejoin", s.lineJoin);
                t.setAttributeNS(
                  null,
                  "stroke-width",
                  pf(e * s.lineWidth) + "px"
                );
                t.setAttributeNS(null, "stroke-dasharray", i.map(pf).join(" "));
                t.setAttributeNS(
                  null,
                  "stroke-dashoffset",
                  pf(e * s.dashPhase) + "px"
                );
              }
              eoFill() {
                this.current.element?.setAttributeNS(
                  null,
                  "fill-rule",
                  "evenodd"
                );
                this.fill();
              }
              fillStroke() {
                this.stroke();
                this.fill();
              }
              eoFillStroke() {
                this.current.element?.setAttributeNS(
                  null,
                  "fill-rule",
                  "evenodd"
                );
                this.fillStroke();
              }
              closeStroke() {
                this.closePath();
                this.stroke();
              }
              closeFillStroke() {
                this.closePath();
                this.fillStroke();
              }
              closeEOFillStroke() {
                this.closePath();
                this.eoFillStroke();
              }
              paintSolidColorImageMask() {
                const t = this.svgFactory.createElement("svg:rect");
                t.setAttributeNS(null, "x", "0");
                t.setAttributeNS(null, "y", "0");
                t.setAttributeNS(null, "width", "1px");
                t.setAttributeNS(null, "height", "1px");
                t.setAttributeNS(null, "fill", this.current.fillColor);
                this._ensureTransformGroup().append(t);
              }
              paintImageXObject(t) {
                const e = this.getObject(t);
                e
                  ? this.paintInlineImageXObject(e)
                  : (0, n.warn)(
                      `Dependent image with object ID ${t} is not ready yet`
                    );
              }
              paintInlineImageXObject(t, e) {
                const s = t.width,
                  i = t.height,
                  n = u(t, this.forceDataSchema, !!e),
                  a = this.svgFactory.createElement("svg:rect");
                a.setAttributeNS(null, "x", "0");
                a.setAttributeNS(null, "y", "0");
                a.setAttributeNS(null, "width", pf(s));
                a.setAttributeNS(null, "height", pf(i));
                this.current.element = a;
                this.clip("nonzero");
                const r = this.svgFactory.createElement("svg:image");
                r.setAttributeNS(c, "xlink:href", n);
                r.setAttributeNS(null, "x", "0");
                r.setAttributeNS(null, "y", pf(-i));
                r.setAttributeNS(null, "width", pf(s) + "px");
                r.setAttributeNS(null, "height", pf(i) + "px");
                r.setAttributeNS(
                  null,
                  "transform",
                  `scale(${pf(1 / s)} ${pf(-1 / i)})`
                );
                e ? e.append(r) : this._ensureTransformGroup().append(r);
              }
              paintImageMaskXObject(t) {
                const e = this.getObject(t.data, t);
                if (e.bitmap) {
                  (0, n.warn)(
                    "paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled."
                  );
                  return;
                }
                const s = this.current,
                  i = e.width,
                  a = e.height,
                  r = s.fillColor;
                s.maskId = "mask" + f++;
                const o = this.svgFactory.createElement("svg:mask");
                o.setAttributeNS(null, "id", s.maskId);
                const l = this.svgFactory.createElement("svg:rect");
                l.setAttributeNS(null, "x", "0");
                l.setAttributeNS(null, "y", "0");
                l.setAttributeNS(null, "width", pf(i));
                l.setAttributeNS(null, "height", pf(a));
                l.setAttributeNS(null, "fill", r);
                l.setAttributeNS(null, "mask", `url(#${s.maskId})`);
                this.defs.append(o);
                this._ensureTransformGroup().append(l);
                this.paintInlineImageXObject(e, o);
              }
              paintFormXObjectBegin(t, e) {
                Array.isArray(t) &&
                  6 === t.length &&
                  this.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
                if (e) {
                  const t = e[2] - e[0],
                    s = e[3] - e[1],
                    i = this.svgFactory.createElement("svg:rect");
                  i.setAttributeNS(null, "x", e[0]);
                  i.setAttributeNS(null, "y", e[1]);
                  i.setAttributeNS(null, "width", pf(t));
                  i.setAttributeNS(null, "height", pf(s));
                  this.current.element = i;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
              paintFormXObjectEnd() {}
              _initialize(t) {
                const e = this.svgFactory.create(t.width, t.height),
                  s = this.svgFactory.createElement("svg:defs");
                e.append(s);
                this.defs = s;
                const i = this.svgFactory.createElement("svg:g");
                i.setAttributeNS(null, "transform", pm(t.transform));
                e.append(i);
                this.svg = i;
                return e;
              }
              _ensureClipGroup() {
                if (!this.current.clipGroup) {
                  const t = this.svgFactory.createElement("svg:g");
                  t.setAttributeNS(
                    null,
                    "clip-path",
                    this.current.activeClipUrl
                  );
                  this.svg.append(t);
                  this.current.clipGroup = t;
                }
                return this.current.clipGroup;
              }
              _ensureTransformGroup() {
                if (!this.tgrp) {
                  this.tgrp = this.svgFactory.createElement("svg:g");
                  this.tgrp.setAttributeNS(
                    null,
                    "transform",
                    pm(this.transformMatrix)
                  );
                  this.current.activeClipUrl
                    ? this._ensureClipGroup().append(this.tgrp)
                    : this.svg.append(this.tgrp);
                }
                return this.tgrp;
              }
            };
          }
        },
      ],
      __webpack_module_cache__ = {};
    function __w_pdfjs_require__(t) {
      var e = __webpack_module_cache__[t];
      if (void 0 !== e) return e.exports;
      var s = (__webpack_module_cache__[t] = { exports: {} });
      __webpack_modules__[t](s, s.exports, __w_pdfjs_require__);
      return s.exports;
    }
    var __webpack_exports__ = {};
    (() => {
      var t = __webpack_exports__;
      Object.defineProperty(t, "__esModule", { value: !0 });
      Object.defineProperty(t, "AbortException", {
        enumerable: !0,
        get: function () {
          return e.AbortException;
        },
      });
      Object.defineProperty(t, "AnnotationEditorLayer", {
        enumerable: !0,
        get: function () {
          return a.AnnotationEditorLayer;
        },
      });
      Object.defineProperty(t, "AnnotationEditorParamsType", {
        enumerable: !0,
        get: function () {
          return e.AnnotationEditorParamsType;
        },
      });
      Object.defineProperty(t, "AnnotationEditorType", {
        enumerable: !0,
        get: function () {
          return e.AnnotationEditorType;
        },
      });
      Object.defineProperty(t, "AnnotationEditorUIManager", {
        enumerable: !0,
        get: function () {
          return r.AnnotationEditorUIManager;
        },
      });
      Object.defineProperty(t, "AnnotationLayer", {
        enumerable: !0,
        get: function () {
          return o.AnnotationLayer;
        },
      });
      Object.defineProperty(t, "AnnotationMode", {
        enumerable: !0,
        get: function () {
          return e.AnnotationMode;
        },
      });
      Object.defineProperty(t, "CMapCompressionType", {
        enumerable: !0,
        get: function () {
          return e.CMapCompressionType;
        },
      });
      Object.defineProperty(t, "FeatureTest", {
        enumerable: !0,
        get: function () {
          return e.FeatureTest;
        },
      });
      Object.defineProperty(t, "GlobalWorkerOptions", {
        enumerable: !0,
        get: function () {
          return l.GlobalWorkerOptions;
        },
      });
      Object.defineProperty(t, "InvalidPDFException", {
        enumerable: !0,
        get: function () {
          return e.InvalidPDFException;
        },
      });
      Object.defineProperty(t, "MissingPDFException", {
        enumerable: !0,
        get: function () {
          return e.MissingPDFException;
        },
      });
      Object.defineProperty(t, "OPS", {
        enumerable: !0,
        get: function () {
          return e.OPS;
        },
      });
      Object.defineProperty(t, "PDFDataRangeTransport", {
        enumerable: !0,
        get: function () {
          return s.PDFDataRangeTransport;
        },
      });
      Object.defineProperty(t, "PDFDateString", {
        enumerable: !0,
        get: function () {
          return i.PDFDateString;
        },
      });
      Object.defineProperty(t, "PDFWorker", {
        enumerable: !0,
        get: function () {
          return s.PDFWorker;
        },
      });
      Object.defineProperty(t, "PasswordResponses", {
        enumerable: !0,
        get: function () {
          return e.PasswordResponses;
        },
      });
      Object.defineProperty(t, "PermissionFlag", {
        enumerable: !0,
        get: function () {
          return e.PermissionFlag;
        },
      });
      Object.defineProperty(t, "PixelsPerInch", {
        enumerable: !0,
        get: function () {
          return i.PixelsPerInch;
        },
      });
      Object.defineProperty(t, "PromiseCapability", {
        enumerable: !0,
        get: function () {
          return e.PromiseCapability;
        },
      });
      Object.defineProperty(t, "RenderingCancelledException", {
        enumerable: !0,
        get: function () {
          return i.RenderingCancelledException;
        },
      });
      Object.defineProperty(t, "SVGGraphics", {
        enumerable: !0,
        get: function () {
          return c.SVGGraphics;
        },
      });
      Object.defineProperty(t, "UnexpectedResponseException", {
        enumerable: !0,
        get: function () {
          return e.UnexpectedResponseException;
        },
      });
      Object.defineProperty(t, "Util", {
        enumerable: !0,
        get: function () {
          return e.Util;
        },
      });
      Object.defineProperty(t, "VerbosityLevel", {
        enumerable: !0,
        get: function () {
          return e.VerbosityLevel;
        },
      });
      Object.defineProperty(t, "XfaLayer", {
        enumerable: !0,
        get: function () {
          return h.XfaLayer;
        },
      });
      Object.defineProperty(t, "build", {
        enumerable: !0,
        get: function () {
          return s.build;
        },
      });
      Object.defineProperty(t, "createValidAbsoluteUrl", {
        enumerable: !0,
        get: function () {
          return e.createValidAbsoluteUrl;
        },
      });
      Object.defineProperty(t, "getDocument", {
        enumerable: !0,
        get: function () {
          return s.getDocument;
        },
      });
      Object.defineProperty(t, "getFilenameFromUrl", {
        enumerable: !0,
        get: function () {
          return i.getFilenameFromUrl;
        },
      });
      Object.defineProperty(t, "getPdfFilenameFromUrl", {
        enumerable: !0,
        get: function () {
          return i.getPdfFilenameFromUrl;
        },
      });
      Object.defineProperty(t, "getXfaPageViewport", {
        enumerable: !0,
        get: function () {
          return i.getXfaPageViewport;
        },
      });
      Object.defineProperty(t, "isDataScheme", {
        enumerable: !0,
        get: function () {
          return i.isDataScheme;
        },
      });
      Object.defineProperty(t, "isPdfFile", {
        enumerable: !0,
        get: function () {
          return i.isPdfFile;
        },
      });
      Object.defineProperty(t, "loadScript", {
        enumerable: !0,
        get: function () {
          return i.loadScript;
        },
      });
      Object.defineProperty(t, "normalizeUnicode", {
        enumerable: !0,
        get: function () {
          return e.normalizeUnicode;
        },
      });
      Object.defineProperty(t, "renderTextLayer", {
        enumerable: !0,
        get: function () {
          return n.renderTextLayer;
        },
      });
      Object.defineProperty(t, "setLayerDimensions", {
        enumerable: !0,
        get: function () {
          return i.setLayerDimensions;
        },
      });
      Object.defineProperty(t, "shadow", {
        enumerable: !0,
        get: function () {
          return e.shadow;
        },
      });
      Object.defineProperty(t, "updateTextLayer", {
        enumerable: !0,
        get: function () {
          return n.updateTextLayer;
        },
      });
      Object.defineProperty(t, "version", {
        enumerable: !0,
        get: function () {
          return s.version;
        },
      });
      var e = __w_pdfjs_require__(1),
        s = __w_pdfjs_require__(2),
        i = __w_pdfjs_require__(6),
        n = __w_pdfjs_require__(26),
        a = __w_pdfjs_require__(27),
        r = __w_pdfjs_require__(5),
        o = __w_pdfjs_require__(32),
        l = __w_pdfjs_require__(14),
        c = __w_pdfjs_require__(35),
        h = __w_pdfjs_require__(34);
    })();
    return __webpack_exports__;
  })()
);
