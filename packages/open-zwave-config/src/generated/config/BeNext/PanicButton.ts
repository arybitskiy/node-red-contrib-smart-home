import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Set to Default",
            size: "1",
            type: "button",
            value: "0",
            Help:
              "Set all configuration values to default values (factory settings).",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Time to press the panic button",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "100",
            Help:
              "\n                The time that the panic pushbutton must be pressed before a (panic) message is sent out to the controller.\n                0: send directly the panic message when pressed.\n                1-255: send a panic message after you keep holding the button pressed for this value x 10ms.\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Min led feedback time panic",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "100",
            Help:
              "\n                Minimum time that led feedback is shown after a panic message.\n                0: led only stays on during the send time.\n                1-255: led stays on during send time + this value*10ms.\n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Buttons mapped",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                With this config parameter you can map the buttons to send different Z-Wave messages.\n                0: SOS button sends an ALARM_REPORT to nodes group 1 LOCK button sends a BASIC_SET, 0xFF to nodes group 1 UNLOCK button sends a BASIC_SET, 0x00 to nodes group 1.\n                1-255: button sends an BASIC_SET,0xFF to nodes group 1 LOCK button sends a BASIC_SET, 0xFF to nodes group 2 UNLOCK button sends a BASIC_SET, 0x00 to nodes group 2\n            ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Time to press the control buttons",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "\n                The time that the control pushbutton(s) must be pressed before a (control) message is sent out to the controller.\n                0: send directly the panic message when pressed\n                1-255: send a control message after you keep holding pushbutton pressed for this value x 10ms.\n            ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Min led feedback time control",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "50",
            Help:
              "\n                Minimum time that led feedback is shown after a control message is sent.\n                0: led only stays on during the send time.\n                1-255: led stays on during send time + this value*10ms.\n            ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              {
                index: "1",
                label: "Group 1: see configuration parameter 4",
                max_associations: "8",
              },
              {
                auto: "true",
                index: "2",
                label: "Group 2: see configuration parameter 4",
                max_associations: "8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
