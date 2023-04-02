import { describe, it, expect } from "vitest";
import { colorOpacity, opacityMap } from "./index";

const HEX_WITH_OPACITY_REGEX = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{5})$/;

describe.concurrent("colorUtils", () => {
  describe.concurrent("colorOpacity", () => {
    it("should return a 9 length string", () => {
      expect(colorOpacity("#ff0000", "50%").length).toBe(9);
    });

    it("should return a valid hex color with opacity", () => {
      expect(HEX_WITH_OPACITY_REGEX.test(colorOpacity("#ff0000", "50%"))).toBe(
        true
      );
    });
  });

  describe.concurrent("colorMap", () => {
    it("should return a valid opacity hex color", () => {
      expect(opacityMap["50%"]).toBe("80");
      expect(opacityMap["100%"]).toBe("FF");
      expect(opacityMap["0%"]).toBe("00");
      expect(opacityMap["25%"]).toBe("40");
      expect(opacityMap["75%"]).toBe("BF");
      expect(opacityMap["18%"]).toBe("2E");
    });
  });
});