import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "176",
            instance: "1",
            label: "Changeover delay (motor protection)",
            type: "byte",
            value: "100",
            Help:
              "To configure the time (value * 0.1 sec) the motor waits before switching direction.",
          },
          {
            genre: "config",
            index: "177",
            instance: "1",
            label: "Raising time input 1",
            type: "byte",
            value: "100",
            Help:
              "To configure input 1 of the raising time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
          {
            genre: "config",
            index: "178",
            instance: "1",
            label: "Raising time input 2",
            type: "byte",
            value: "100",
            Help:
              "To configure input 1 of the raising time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
          {
            genre: "config",
            index: "179",
            instance: "1",
            label: "Lowering time input 1",
            type: "byte",
            value: "100",
            Help:
              "To configure input 1 of the lowering time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
          {
            genre: "config",
            index: "180",
            instance: "1",
            label: "Lowering time input 2",
            type: "byte",
            value: "100",
            Help:
              "To configure input 1 of the lowering time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "12" }],
          },
        ],
      },
    ],
  },
};

export default config;
