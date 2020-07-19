import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "1. Reset to factory Default",
            value: "0",
            size: "1",
            Help:
              "Attention: This will delete all your configuration, but the device will remain in the network. Handle with care.",
            Item: [
              { label: "Keep current config", value: "0" },
              { label: "Reset to factory Default", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "2. Commands sent on external dry contact",
            value: "0",
            size: "1",
            Help: "Configure what the external contact sends when trigger",
            Item: [
              { label: "Alarm Report Type 2(default)", value: "0" },
              { label: "Basic On or Basic OFF", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "5",
            label: "5. Operating Mode",
            value: "0",
            size: "1",
            Help:
              "Defines if the sensor is in normal wakeup-mode or always on. This function shall be used only for testing since it draining the battery very fast.",
            Item: [
              { label: "Normal Wakeup (default)", value: "0" },
              { label: "Always awake", value: "3" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "6",
            label: "6. Temperature Offset",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "Offset to the temperature. This parameter can be used to calibrate the temperature sensor function if needed. Note. As factory default the temperature sensor function is calibrated. 0 = 0K (default), not 0 = Temperature Offset in K",
          },
        ],
      },
    ],
  },
};

export default config;
