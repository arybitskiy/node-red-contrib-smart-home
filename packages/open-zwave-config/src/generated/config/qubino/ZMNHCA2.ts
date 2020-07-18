import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            size: "2",
            min: "0",
            max: "255",
            value: "255",
            Help:
              "Flush 1 relay module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.",
            Item: [
              { label: "ALL ON active, ALL OFF active", value: "255" },
              {
                label: "ALL ON is not active ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active ALL OFF active", value: "1" },
              { label: "ALL ON active ALL OFF is not active", value: "2" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "40",
            label: "Power reporting in Watts on power change for Q1 or Q2",
            size: "1",
            min: "0",
            max: "100",
            value: "1",
            Help:
              "Set value from 0 - 100 (0% - 100%). 0 - Reporting Disabled. 1 to 100 = 1% to 100% Reporting enabled. Power report is send (push) only when actual power (in Watts) in real time changes for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 1",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "42",
            label: "Power reporting in Watts by time interval for Q1 or Q2",
            min: "0",
            max: "65535",
            value: "300",
            Help:
              "Set value means time interval (0 - 65535) in seconds, when power report is send. 0 - Reporting Disabled. 1 - 65535 = 1second - 65535 seconds. Reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s)",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "45",
            label: "Self-measurement",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Module may include power and energy used by module itself in reports sent to the main controller",
            Item: [
              { label: "Self-measurement disabled", value: "0" },
              { label: "Self-measurement enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "71",
            label: "Operating modes",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "This parameter defines selection between two operating modes. NOTE: After setting a mode the module needs to be reconfigured. Please check the detailed description in the product manual.",
            Item: [
              { label: "Shutter mode", value: "0" },
              { label: "Venetian mode", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "72",
            label: "Slats tilting full turn time",
            min: "0",
            max: "32767",
            value: "150",
            Help:
              "This parameter defines the time necessary for slats to make a full turn (180 degrees). 0 tilting time disabled. Values range from 1 to 32767 = 0,01 seconds to 327,67 seconds. Default value 150. NOTE: If the time is set too high the shutter will move the slats up or down until the duration is reached.",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "73",
            label: "Slats position",
            size: "1",
            min: "0",
            max: "2",
            value: "2",
            Help:
              "This parameter defines slat position after up/down movement through UI or push button.",
            Item: [
              {
                label:
                  "Slats return to previously set position only in case of UI control.",
                value: "0",
              },
              {
                label:
                  "Slats return to previously set position in case of UI control, push button or when the limit switch is reached.",
                value: "1",
              },
              {
                label:
                  "Slats return to previously set position in case of UI control, push button, when the limit switch is reached or when receiving a Multilevel Switch Stop Level Change command.",
                value: "2",
              },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "74",
            label: "Motor moving up/down time",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "This parameter defines shutter motor moving time of complete opening or complete closing. 0 moving time disabled (working with limit switches). 1 to 65535 = 0,1seconds to 6553,5 seconds After that time motor is stopped (relay goes to off state). Default value 0",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "76",
            label: "Motor operation detection",
            min: "0",
            max: "127",
            value: "10",
            Help:
              "Power threshold to be interpreted when motor reach the limit switch. Available settings: 0 to 127 (0-127 W). The value 0 means reaching a limit switch will not be detected. Default value: 10 (10W).",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "78",
            label: "Forced Shutter calibration",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "By modifying the parameters setting from 0 to 1 a Shutter enters the calibration mode. Once the calibration process finished the parameter is reset back to 0.",
            Item: [
              { label: "Default", value: "0" },
              { label: "Start calibration process", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "85",
            label: "Power consumption max time delay",
            min: "3",
            max: "50",
            value: "0",
            Help:
              "The parameter defines the maximum time before motor power consumption is read after one of the relays is switched on. If there is no power consumption during this time the relay will switch off. Default value is 0 which signifies automatic detection. Value 3 signifies a time of 0,3 seconds.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "90",
            label: "Relay delay time",
            min: "1",
            max: "30",
            value: "5",
            Help:
              "The parameter defines the time delay between output relay switching (time between switching up/down and vice versa). The value 1 of this parameter corresponds to a 0,1 second delay. Default value is 5, which corresponds to 0,5 seconds.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              {
                index: "1",
                max_associations: "16",
                label: "Multilevel",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "1",
                label: "Lifeline",
                auto: "true",
              },
            ],
          },
        ],
      },
      { id: "32", action: "remove" },
    ],
  },
};

export default config;
