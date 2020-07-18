import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Switching additional CONNECT radio receivers",
            type: "byte",
            value: "1",
            Help:
              "To configure if other radio receivers from Merten should be switched as well.",
          },
          {
            genre: "config",
            index: "176",
            instance: "1",
            label: "Changeover delay (motor protection)",
            type: "byte",
            value: "100",
            Help:
              "To configure the time the motor waits before switching direction.",
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
          {
            genre: "config",
            index: "181",
            instance: "1",
            label: "Light sensor",
            size: "1",
            type: "list",
            value: "0",
            Help: "To configure use of light sensor. Default: 0 .",
            Item: [
              { label: "0 - Auto", value: "0" },
              { label: "1 - On", value: "1" },
              { label: "2 - Off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "182",
            instance: "1",
            label: "Brightness threshold for light sensor",
            type: "byte",
            value: "1",
            Help: "To configure brightness threshold for light sensor.",
          },
          {
            genre: "config",
            index: "183",
            instance: "1",
            label: "Sensor raising reaction threshold input 1",
            type: "byte",
            value: "1",
            Help:
              "To configure input 1 of reaction threshold for raising shutter time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
          {
            genre: "config",
            index: "184",
            instance: "1",
            label: "Sensor raising reaction threshold input 1",
            type: "byte",
            value: "100",
            Help:
              "To configure input 2 of reaction threshold for raising shutter time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
          {
            genre: "config",
            index: "185",
            instance: "1",
            label: "Sensor lowering reaction threshold input 1",
            type: "byte",
            value: "1",
            Help:
              "To configure input 1 of reaction threshold for lowering shutter time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
          {
            genre: "config",
            index: "186",
            instance: "1",
            label: "Sensor lowering reaction threshold input 1",
            type: "byte",
            value: "100",
            Help:
              "To configure input 2 of reaction threshold for lowering shutter time calculation (256 * Input 1 + Input 2) * 0.1 sec",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
