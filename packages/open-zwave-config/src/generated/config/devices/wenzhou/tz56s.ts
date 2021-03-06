import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Night light",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "The LED on the TZ56S will by default, turn ON when the load attached is turned OFF. To make the LED turn ON when the load attached is turned ON instead, set parameter to a value of 1.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Memory Function",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "Stated in the above form,switch by default value is 1,when the value is 0,switch memory function not open; when the value is 1,open switch memory function",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Invert switch",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "To change the top of the switch to OFF and the bottom of the switch ON , set parameter 4 to 1.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "4",
            label: "LED Transmission indication",
            min: "0",
            max: "2",
            value: "1",
            Help:
              "The TZ56-D will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all (set to 0), to flicker the entire time it is transmitting (set to 1), or to flicker for only 1 second when it begins transmitting (set to 2). By default, the TZ56S is set to flicker for only 1 second.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Suspend Group 4",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Setting this parameter to the value of 1 will stop the TZ56S from transmitting to devices that are associated into Group 4.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "4", max_associations: "5", label: "Wireless" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
